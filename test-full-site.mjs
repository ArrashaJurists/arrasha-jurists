import { chromium } from "playwright";

const BASE = "https://arrashajurists.github.io/arrasha-jurists/";
const DIR = "./screenshots/audit";

const PAGES = [
  { name: "home", hash: "" },
  { name: "register", hash: "#/register" },
  { name: "services", hash: "#/services" },
  { name: "expertise-data", hash: "#/expertise/data-protection" },
  { name: "expertise-transactions", hash: "#/expertise/transactions" },
  { name: "expertise-disputes", hash: "#/expertise/disputes" },
  { name: "expertise-regulatory", hash: "#/expertise/regulatory" },
  { name: "dpdp-navigator", hash: "#/dpdp-navigator" },
  { name: "people", hash: "#/people" },
  { name: "insights", hash: "#/insights" },
  { name: "about", hash: "#/about" },
  { name: "contact", hash: "#/contact" },
];

async function run() {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();

  const allErrors = [];
  page.on("pageerror", (err) => allErrors.push(err.message));

  // Dismiss BCI on first load
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2000);
  const bci = page.locator('button:has-text("I Understand")');
  if (await bci.isVisible().catch(() => false)) {
    await bci.click();
    await page.waitForTimeout(500);
  }

  console.log("=== FULL SITE AUDIT ===\n");

  for (const pg of PAGES) {
    const url = BASE + pg.hash;
    await page.goto(url, { waitUntil: "networkidle", timeout: 20000 });
    await page.waitForTimeout(1000);

    // Take viewport + full-page screenshots
    await page.screenshot({ path: `${DIR}/${pg.name}-viewport.png`, fullPage: false });
    await page.screenshot({ path: `${DIR}/${pg.name}-full.png`, fullPage: true });

    // Analyze page
    const analysis = await page.evaluate(() => {
      const body = document.body;
      const root = document.getElementById("root");
      const sections = document.querySelectorAll("section");
      const headings = document.querySelectorAll("h1, h2, h3");
      const links = document.querySelectorAll("a[href]");
      const buttons = document.querySelectorAll("button");
      const inputs = document.querySelectorAll("input, textarea");
      const images = document.querySelectorAll("img");

      // Check for invisible/hidden text
      const allText = document.querySelectorAll("h1,h2,h3,h4,p,span,a,button,label");
      let hiddenCount = 0;
      let tinyCount = 0;
      let lowContrastCount = 0;

      allText.forEach(el => {
        const style = getComputedStyle(el);
        if (style.opacity === "0" || style.display === "none" || style.visibility === "hidden") hiddenCount++;
        if (parseFloat(style.fontSize) < 8) tinyCount++;
      });

      // Check section heights
      const sectionData = Array.from(sections).map((s, i) => ({
        index: i,
        height: s.offsetHeight,
        bg: getComputedStyle(s).backgroundColor,
        hasContent: s.textContent.trim().length > 0,
      }));

      // Check for broken links (empty href)
      const brokenLinks = Array.from(links).filter(a => !a.href || a.href === "about:blank" || a.href.endsWith("#")).length;

      return {
        pageTitle: document.title,
        rootChildren: root?.children.length || 0,
        totalElements: document.querySelectorAll("*").length,
        sections: sectionData.length,
        headings: headings.length,
        links: links.length,
        buttons: buttons.length,
        inputs: inputs.length,
        images: images.length,
        hiddenText: hiddenCount,
        tinyText: tinyCount,
        brokenLinks,
        sectionHeights: sectionData,
        bodyBg: getComputedStyle(body).backgroundColor,
        bodyFont: getComputedStyle(body).fontFamily,
        bodyColor: getComputedStyle(body).color,
        scrollHeight: body.scrollHeight,
      };
    });

    // Report
    const issues = [];
    if (analysis.hiddenText > 5) issues.push(`${analysis.hiddenText} hidden text elements`);
    if (analysis.tinyText > 0) issues.push(`${analysis.tinyText} text elements below 8px`);
    if (analysis.sections === 0) issues.push("NO SECTIONS FOUND");
    if (analysis.scrollHeight < 500) issues.push(`Page too short: ${analysis.scrollHeight}px`);
    if (analysis.rootChildren === 0) issues.push("ROOT IS EMPTY - React not rendering");
    if (analysis.brokenLinks > 0) issues.push(`${analysis.brokenLinks} potentially broken links`);

    // Check for squished sections (under 50px)
    const squished = analysis.sectionHeights.filter(s => s.height < 50 && s.hasContent);
    if (squished.length) issues.push(`${squished.length} squished sections (under 50px)`);

    const status = issues.length === 0 ? "OK" : "ISSUES";
    console.log(`[${status}] ${pg.name.toUpperCase()}`);
    console.log(`  URL: ${url}`);
    console.log(`  Elements: ${analysis.totalElements} | Sections: ${analysis.sections} | Height: ${analysis.scrollHeight}px`);
    console.log(`  Headings: ${analysis.headings} | Links: ${analysis.links} | Hidden: ${analysis.hiddenText}`);
    if (issues.length > 0) {
      issues.forEach(i => console.log(`  ⚠ ${i}`));
    }
    console.log(`  Section heights: [${analysis.sectionHeights.map(s => s.height).join(", ")}]`);
    console.log();
  }

  // Mobile audit
  console.log("=== MOBILE AUDIT (375px) ===\n");
  await page.setViewportSize({ width: 375, height: 812 });

  for (const pg of [PAGES[0], PAGES[1], PAGES[4], PAGES[8], PAGES[11]]) {
    const url = BASE + pg.hash;
    await page.goto(url, { waitUntil: "networkidle", timeout: 15000 });
    await page.waitForTimeout(800);
    if (await page.locator('button:has-text("I Understand")').isVisible().catch(() => false)) {
      await page.locator('button:has-text("I Understand")').click();
      await page.waitForTimeout(300);
    }
    await page.screenshot({ path: `${DIR}/mobile-${pg.name}.png`, fullPage: true });

    // Check for horizontal overflow
    const overflow = await page.evaluate(() => document.body.scrollWidth > window.innerWidth);
    console.log(`[${overflow ? "OVERFLOW" : "OK"}] mobile-${pg.name} ${overflow ? "⚠ horizontal scrollbar" : ""}`);
  }

  console.log();
  if (allErrors.length) {
    console.log("=== JS ERRORS ===");
    allErrors.forEach(e => console.log("  ERROR:", e));
  } else {
    console.log("No JavaScript errors detected.");
  }

  await browser.close();
  console.log("\nDone. Screenshots in ./screenshots/audit/");
}

run().catch(e => { console.error("FATAL:", e); process.exit(1); });
