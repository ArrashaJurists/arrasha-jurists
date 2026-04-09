import { chromium } from "playwright";

const DEPLOYED = "https://arrashajurists.github.io/arrasha-jurists/";
const SCREENSHOT_DIR = "./screenshots";

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const errors = [];
  const logs = [];
  page.on("console", (msg) => logs.push(`[${msg.type()}] ${msg.text()}`));
  page.on("pageerror", (err) => errors.push(err.message));

  console.log("=== Visiting deployed site ===");
  console.log("URL:", DEPLOYED);

  await page.goto(DEPLOYED, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2000);

  // Screenshot: BCI modal (should be visible on first load)
  await page.screenshot({ path: `${SCREENSHOT_DIR}/01-bci-modal.png`, fullPage: false });
  console.log("Screenshot: BCI modal");

  // Check if BCI modal is visible
  const bciVisible = await page.locator("text=I Understand").isVisible().catch(() => false);
  console.log("BCI modal visible:", bciVisible);

  // Click BCI modal if visible
  if (bciVisible) {
    await page.click("text=I Understand");
    await page.waitForTimeout(1000);
  }

  // Screenshot: Homepage after BCI
  await page.screenshot({ path: `${SCREENSHOT_DIR}/02-homepage-top.png`, fullPage: false });
  console.log("Screenshot: Homepage top");

  // Full page screenshot
  await page.screenshot({ path: `${SCREENSHOT_DIR}/03-homepage-full.png`, fullPage: true });
  console.log("Screenshot: Homepage full");

  // Check key elements
  const checks = {
    "Nav visible": await page.locator("nav").isVisible().catch(() => false),
    "Hero heading": await page.locator("h1").isVisible().catch(() => false),
    "Gold color present": await page.evaluate(() => {
      const el = document.querySelector("body");
      const style = getComputedStyle(el);
      return style.backgroundColor;
    }),
    "Body font": await page.evaluate(() => getComputedStyle(document.body).fontFamily),
    "Root has children": await page.evaluate(() => document.getElementById("root")?.children.length || 0),
    "Total DOM elements": await page.evaluate(() => document.querySelectorAll("*").length),
  };
  console.log("\n=== Element checks ===");
  for (const [k, v] of Object.entries(checks)) console.log(`  ${k}: ${v}`);

  // Check CSS loaded
  const cssLoaded = await page.evaluate(() => {
    const sheets = Array.from(document.styleSheets);
    return sheets.map(s => ({ href: s.href, rules: s.cssRules?.length || "blocked" }));
  }).catch(() => "error reading stylesheets");
  console.log("\n=== Stylesheets ===");
  console.log(JSON.stringify(cssLoaded, null, 2));

  // Navigate to other pages via hash router
  const pages = ["#/services", "#/register", "#/people", "#/contact"];
  for (const hash of pages) {
    await page.goto(DEPLOYED + hash, { waitUntil: "networkidle", timeout: 15000 });
    await page.waitForTimeout(500);
    const name = hash.replace("#/", "");
    await page.screenshot({ path: `${SCREENSHOT_DIR}/page-${name}.png`, fullPage: false });
    console.log(`Screenshot: ${name}`);
  }

  // Mobile viewport
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(DEPLOYED, { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(1000);
  if (await page.locator("text=I Understand").isVisible().catch(() => false)) {
    await page.click("text=I Understand");
    await page.waitForTimeout(500);
  }
  await page.screenshot({ path: `${SCREENSHOT_DIR}/mobile-home.png`, fullPage: false });
  console.log("Screenshot: mobile home");

  console.log("\n=== Console logs ===");
  logs.forEach((l) => console.log(" ", l));

  console.log("\n=== Page errors ===");
  if (errors.length === 0) console.log("  None!");
  else errors.forEach((e) => console.log("  ERROR:", e));

  await browser.close();
  console.log("\nDone. Screenshots saved to ./screenshots/");
}

run().catch((e) => { console.error("FATAL:", e); process.exit(1); });
