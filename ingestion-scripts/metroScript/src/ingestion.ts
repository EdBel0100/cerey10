import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { pdfToPng } from "pdf-to-png-converter";
import * as dotenv from "dotenv";
import { chromium } from "playwright-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

dotenv.config();
chromium.use(StealthPlugin());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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

const STORE_ID = process.env.METRO_STORE_ID;
const OUTPUT_DIR = "./metro_output";

async function fetchFlyers(): Promise<{ data: ApiResponse; context: any; browser: any }> {
  console.log("[1/4] Launching browser and intercepting flyer API…");

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();

  page.on("response", (response) => {
    const url = response.url();
    if (url.includes("flyer") || url.includes("metro") || url.includes("azure")) {
      console.log(`  [net] ${response.status()} ${url}`);
    }
  });

  const [flyerResponse] = await Promise.all([
    page.waitForResponse(
      (response) =>
        response.url().includes("/api/flyers/") &&
        response.status() === 200,
      { timeout: 300000 }
    ),
    page.goto("https://circulaire.metro.ca/", {
      waitUntil: "domcontentloaded",
      timeout: 60_000,
    }),
  ]);

  const flyerData: ApiResponse = await flyerResponse.json();

  await page.close();

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "api_response.json"),
    JSON.stringify(flyerData, null, 2)
  );

  console.log(`Found ${flyerData.flyers.length} flyers`);
  return { data: flyerData, context, browser };
}

function pickWeeklyFlyer(flyers: Flyer[]): Flyer | null {
  return (
    flyers.find((f) => f.flyerType === "live" && f.flyerCategory === "Weekly Flyer" && !!f.pdf) ??
    flyers.find((f) => f.flyerType === "preview" && f.flyerCategory === "Weekly Flyer" && !!f.pdf) ??
    null
  );
}

async function downloadPdf(context: any, flyer: Flyer): Promise<string> {
  const localPath = path.join(OUTPUT_DIR, "weekly_flyer.pdf");

  console.log("[2/4] Downloading PDF…");

  const response = await context.request.get(flyer.pdf, {
    headers: { referer: "https://circulaire.metro.ca/" },
  });

  if (!response.ok()) throw new Error(`PDF download failed: ${response.status()}`);

  fs.writeFileSync(localPath, await response.body());

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

async function extractItemsFromPage(pageBase64: string, pageNum: number): Promise<SaleItem[]> {
  try {
    const res = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: [
            { type: "input_text", text: "Extract all sale items as JSON." },
            {
              type: "input_image",
              image_url: `data:image/jpeg;base64,${pageBase64}`,
              detail: "high",
            },
          ],
        },
      ],
    });

    const text = res.output
      .map((o: any) => o.content?.[0]?.text ?? "")
      .join("")
      .trim();

    const clean = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const parsed = JSON.parse(clean) as Omit<SaleItem, "page">[];

    return parsed.map((p) => ({ ...p, page: pageNum }));
  } catch (e) {
    console.error(`Page ${pageNum} failed`, (e as Error).message);
    return [];
  }
}

async function parsePdf(pdfPath: string): Promise<SaleItem[]> {
  console.log("[3/4] Converting PDF → images…");

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
      console.log(`Page ${i + 1}: ${items.length} items`);
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

  for (const file of fs.readdirSync(OUTPUT_DIR)) {
    if (keepFiles.has(file)) continue;
    const filePath = path.join(OUTPUT_DIR, file);
    try {
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) fs.rmSync(filePath, { recursive: true, force: true });
      else fs.unlinkSync(filePath);
    } catch (e) {
      console.warn(`Failed to delete ${file}:`, (e as Error).message);
    }
  }

  console.log("[cleanup] Output folder cleaned (kept JSON data)");
}

async function main() {
  if (!process.env.OPENAI_API_KEY) throw new Error("Missing OPENAI_API_KEY");
  if (!STORE_ID) throw new Error("Missing METRO_STORE_ID");

  const { data, context, browser } = await fetchFlyers();

  try {
    const flyer = pickWeeklyFlyer(data.flyers);
    if (!flyer) throw new Error("No weekly flyer found");

    const pdf = await downloadPdf(context, flyer);
    const items = await parsePdf(pdf);

    save(items, flyer);
    cleanOutputDir();

    console.log(`Done → ${items.length} items extracted`);
  } finally {
    await context.close();
    await browser.close();
  }
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});