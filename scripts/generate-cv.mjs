import puppeteer from "puppeteer";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "cv", "cv.html");
const pdfPath = path.join(root, "cv", "Emad_Askareimotlagh_CV.pdf");

function findChrome() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  ].filter(Boolean);

  for (const chromePath of candidates) {
    if (fs.existsSync(chromePath)) return chromePath;
  }
  return null;
}

const executablePath = findChrome();
const launchOptions = {
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
};

if (executablePath) {
  launchOptions.executablePath = executablePath;
}

let browser;
try {
  browser = await puppeteer.launch(launchOptions);
} catch (error) {
  console.error(
    "Could not launch Chrome for PDF generation.\n" +
      "Install bundled Chrome with:\n" +
      "  npx puppeteer browsers install chrome\n" +
      "Or set PUPPETEER_EXECUTABLE_PATH to your Chrome binary."
  );
  throw error;
}

const page = await browser.newPage();
await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0" });
await page.pdf({
  path: pdfPath,
  format: "A4",
  printBackground: true,
  margin: { top: "12mm", bottom: "12mm", left: "14mm", right: "14mm" },
});
await browser.close();

console.log(`CV generated: ${pdfPath}`);
