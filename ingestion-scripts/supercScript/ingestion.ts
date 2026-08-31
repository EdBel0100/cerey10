import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import zlib from "zlib";
import OpenAI from "openai";
import { pdfToPng } from "pdf-to-png-converter";
import * as dotenv from "dotenv";

dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface Flyer {
  id: string;
  flyerTitle: string;
  flyerCategory: string;
  pdf: string;
  startDate: string;
  endDate: string;
  storeName: string;
  flyerType: "live" | "preview" | string;
}

interface ApiResponse {
  flyers: Flyer[];
}

interface SaleItem {
  page: number;
  name: string;
  description: string;
  price: string;
  unit: string;
  originalPrice: string;
  savings: string;
  brand: string;
  memberPrice: string;
}

interface ScraperResult {
  scrapedAt: string;
  store: string;
  flyerTitle: string;
  validFrom: string;
  validTo: string;
  pdfUrl: string;
  totalItems: number;
  items: SaleItem[];
}

const STORE_ID = process.env.SUPERC_STORE_ID;
const LANG = "en";
const DATE = new Date().toISOString().slice(0, 10);

const API_URL = `https://metrodigital-apim.azure-api.net/api/flyers/${STORE_ID}/${LANG}?date=${DATE}`;
const OUTPUT_DIR = "./superc_output";

const REQUEST_HEADERS: Record<string, string> = {
  accept: "application/json, text/plain, */*",
  "accept-language": "en-US,en;q=0.9",
  banner: "6141fa7157f8c212fc19dddc",
  "ocp-apim-subscription-key": "021027e7c41548bcba5d2315a155816b",
  origin: "https://circulaire.superc.ca",
  referer: "https://circulaire.superc.ca/",
  "user-agent":
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Mobile Safari/537.36",
  "x-api-version": "3.0",
};

function decompressResponse(res: http.IncomingMessage): NodeJS.ReadableStream {
  const enc = res.headers["content-encoding"];
  if (enc === "gzip") return res.pipe(zlib.createGunzip());
  if (enc === "deflate") return res.pipe(zlib.createInflate());
  if (enc === "br") return res.pipe(zlib.createBrotliDecompress());
  return res;
}

function fetchUrl(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;

    const req = lib.get(
      url,
      {
        headers: {
          ...REQUEST_HEADERS,
          "accept-encoding": "gzip, deflate, br",
        },
      },
      (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          return fetchUrl(res.headers.location!).then(resolve).catch(reject);
        }

        if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 300) {
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }

        const stream = decompressResponse(res);
        const chunks: Buffer[] = [];

        stream.on("data", (c: Buffer) => chunks.push(c));
        stream.on("end", () => resolve(Buffer.concat(chunks)));
        stream.on("error", reject);
      }
    );

    req.on("error", reject);
    req.setTimeout(60_000, () =>
      req.destroy(new Error("Request timed out"))
    );
  });
}

function downloadFile(url: string, dest: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;

    const req = lib.get(url, { headers: REQUEST_HEADERS }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location!, dest)
          .then(resolve)
          .catch(reject);
      }

      if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }

      const total = parseInt(res.headers["content-length"] ?? "0", 10);
      let downloaded = 0;

      const out = fs.createWriteStream(dest);

      res.on("data", (chunk: Buffer) => {
        downloaded += chunk.length;
        if (total) {
          process.stdout.write(
            `\r ${(downloaded / total * 100).toFixed(1)}%`
          );
        }
      });

      res.pipe(out);
      out.on("finish", () => {
        process.stdout.write("\n");
        resolve(downloaded);
      });
      out.on("error", reject);
    });

    req.on("error", reject);
    req.setTimeout(120_000, () =>
      req.destroy(new Error("Download timeout"))
    );
  });
}

async function fetchFlyers(): Promise<ApiResponse> {
  console.log(`[1/4] Fetching flyers…`);

  const buf = await fetchUrl(API_URL);
  const data: ApiResponse = JSON.parse(buf.toString("utf-8"));

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "api_response.json"),
    JSON.stringify(data, null, 2)
  );

  console.log(`Found ${data.flyers.length} flyers`);
  return data;
}

function pickWeeklyFlyer(flyers: Flyer[]): Flyer | null {
  return (
    flyers.find(
      (f) =>
        f.flyerType === "live" &&
        f.flyerCategory === "Weekly Flyer" &&
        !!f.pdf
    ) ||
    flyers.find(
      (f) =>
        f.flyerType === "preview" &&
        f.flyerCategory === "Weekly Flyer" &&
        !!f.pdf
    ) ||
    null
  );
}

async function downloadPdf(flyer: Flyer): Promise<string> {
  const localPath = path.join(OUTPUT_DIR, "weekly_flyer.pdf");

  console.log(`[2/4] Downloading PDF…`);
  await downloadFile(flyer.pdf, localPath);

  console.log(`Saved → ${localPath}`);
  return localPath;
}

const SYSTEM_PROMPT = `
You are a grocery flyer data extraction assistant.

Extract ALL sale items from this flyer page.

Return ONLY valid JSON array.

Each item:
- name
- description
- price
- unit
- originalPrice
- savings
- brand
- memberPrice

Return [] if no products.
`;

async function extractItemsFromPage(
  pageBase64: string,
  pageNum: number
): Promise<SaleItem[]> {
  try {
    const res = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: "Extract all sale items as JSON.",
            },
            {
              type: "input_image",
              image_url: `data:image/jpeg;base64,${pageBase64}`,
              detail: "high",
            }
          ],
        },
      ],
    });

    const text = res.output
      .map((o: any) => o.content?.[0]?.text ?? "")
      .join("")
      .trim();

    const clean = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(clean) as Omit<SaleItem, "page">[];

    return parsed.map((p) => ({
      ...p,
      page: pageNum,
    }));
  } catch (e) {
    console.error(`Page ${pageNum} failed`, (e as Error).message);
    return [];
  }
}

async function parsePdf(pdfPath: string): Promise<SaleItem[]> {
  console.log("[3/4] Converting PDF → images...");

  const pages = await pdfToPng(pdfPath, {
    viewportScale: 1.0,
    outputFolder: OUTPUT_DIR,
    outputFileMaskFunc: (pageNumber: number) => `page-${pageNumber}`,
    disableFontFace: true,
  });

  console.log(`[+] ${pages.length} pages generated`);

  const results = await Promise.all(
    pages.map(async (page, i) => {
      const base64 = fs.readFileSync(page.path).toString("base64");

      const items = await extractItemsFromPage(base64, i + 1);

      console.log(`Page ${i + 1}: ${items.length}`);
      return items;
    })
  );

  return results.flat();
}

function save(items: SaleItem[], flyer: Flyer) {
  const result: ScraperResult = {
    scrapedAt: new Date().toISOString(),
    store: flyer.storeName,
    flyerTitle: flyer.flyerTitle,
    validFrom: flyer.startDate.slice(0, 10),
    validTo: flyer.endDate.slice(0, 10),
    pdfUrl: flyer.pdf,
    totalItems: items.length,
    items,
  };

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "items.json"),
    JSON.stringify(result, null, 2)
  );

  console.log(`[4/4] Saved ${items.length} items`);
}

function cleanOutputDir() {
  const keepFiles = new Set(["items.json", "api_response.json"]);

  const files = fs.readdirSync(OUTPUT_DIR);

  for (const file of files) {
    if (keepFiles.has(file)) continue;

    const filePath = path.join(OUTPUT_DIR, file);

    try {
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        fs.rmSync(filePath, { recursive: true, force: true });
      } else {
        fs.unlinkSync(filePath);
      }
    } catch (e) {
      console.warn(`Failed to delete ${file}:`, (e as Error).message);
    }
  }

  console.log("[cleanup] Output folder cleaned (kept JSON data)");
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY");
  }

  const data = await fetchFlyers();
  const flyer = pickWeeklyFlyer(data.flyers);

  if (!flyer) throw new Error("No flyer found");

  const pdf = await downloadPdf(flyer);
  const items = await parsePdf(pdf);

  save(items, flyer);

  cleanOutputDir()

  console.log(`Done → ${items.length} items extracted`);
}

main().catch((e) => {
  console.error("Fatal:", e);
});