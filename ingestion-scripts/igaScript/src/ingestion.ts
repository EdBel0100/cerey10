import * as fs from "fs/promises";
import * as path from "path";
import * as dotenv from "dotenv";
import { chromium } from "playwright-extra";
import { XMLParser } from "fast-xml-parser";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3"


dotenv.config();
chromium.use(StealthPlugin());
const client = new S3Client({ region: process.env.AWS_REGION });

const handler = async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();

  let flyerData: any = null;

  page.on("response", async (response) => {
    if (response.url().includes("/api/flipRequest") && response.status() === 200) {
      flyerData = await response.json().catch(() => null);
    }
  });

  await page.goto("https://www.iga.ca/flyer?view=list", { waitUntil: "domcontentloaded", timeout: 60000 });

  const start = Date.now();
  while (!flyerData && Date.now() - start < 20000) await page.waitForTimeout(500);
  if (!flyerData) throw new Error("Failed to intercept flyer API response");

  const now = new Date();
  const currentFlyer = flyerData.response.flyer_pdf_data.find((f: any) =>
    new Date(f.valid_from) <= now && new Date(f.valid_to) >= now && f.flyer_type === "quebec"
  ) ?? flyerData.response.flyer_pdf_data[0];

  const payloadResponse = await context.request.get(currentFlyer.storefront_payload_url, {
    headers: { referer: "https://www.iga.ca/" },
  });

  if (!payloadResponse.ok()) throw new Error(`Payload fetch failed: ${payloadResponse.status()}`);

  const payloadData = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" })
    .parse(await payloadResponse.text());

  await browser.close();

  const filePath = path.join(process.cwd(), `flyer-${Date.now()}.json`);

  await client.send(
    new PutObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: `flyers/${new Date().toISOString()}.json`,
      Body: JSON.stringify(payloadData),
      ContentType:"application/json"
    })
  )
  console.log(`Saved to ${filePath}`);
};

handler();

