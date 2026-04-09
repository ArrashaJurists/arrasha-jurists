import { chromium } from "playwright";

const DEPLOYED = "https://arrashajurists.github.io/arrasha-jurists/";

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto(DEPLOYED, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2000);

  // Dismiss BCI
  const bci = page.locator("text=I Understand");
  if (await bci.isVisible().catch(() => false)) {
    await bci.click();
    await page.waitForTimeout(1000);
  }

  // Check reveal elements
  const revealStatus = await page.evaluate(() => {
    const reveals = document.querySelectorAll(".reveal");
    const visible = document.querySelectorAll(".reveal.visible");
    return {
      totalReveals: reveals.length,
      visibleReveals: visible.length,
      firstFewStyles: Array.from(reveals).slice(0, 5).map(el => ({
        text: el.textContent?.slice(0, 50),
        opacity: getComputedStyle(el).opacity,
        transform: getComputedStyle(el).transform,
        classList: Array.from(el.classList),
      })),
    };
  });
  console.log("=== Reveal elements ===");
  console.log(JSON.stringify(revealStatus, null, 2));

  // Scroll through page to trigger reveals
  await page.evaluate(async () => {
    const delay = (ms) => new Promise(r => setTimeout(r, ms));
    for (let i = 0; i < document.body.scrollHeight; i += 300) {
      window.scrollTo(0, i);
      await delay(100);
    }
    window.scrollTo(0, 0);
    await delay(500);
  });
  await page.waitForTimeout(1000);

  const afterScroll = await page.evaluate(() => {
    const reveals = document.querySelectorAll(".reveal");
    const visible = document.querySelectorAll(".reveal.visible");
    return { totalReveals: reveals.length, visibleReveals: visible.length };
  });
  console.log("\n=== After scrolling ===");
  console.log(JSON.stringify(afterScroll, null, 2));

  // Screenshot after scrolling triggered reveals
  await page.screenshot({ path: "./screenshots/04-after-scroll.png", fullPage: true });
  console.log("Screenshot: after-scroll (full page)");

  // Check specific sections
  const sections = await page.evaluate(() => {
    const secs = document.querySelectorAll("section");
    return Array.from(secs).map((s, i) => ({
      index: i,
      height: s.offsetHeight,
      bg: getComputedStyle(s).backgroundColor,
      childCount: s.children.length,
      text: s.textContent?.slice(0, 80).trim(),
    }));
  });
  console.log("\n=== Sections ===");
  sections.forEach(s => console.log(`  [${s.index}] h=${s.height} bg=${s.bg} children=${s.childCount} "${s.text}"`));

  if (errors.length) {
    console.log("\n=== Errors ===");
    errors.forEach(e => console.log("  ", e));
  }

  await browser.close();
}

run().catch(e => { console.error("FATAL:", e); process.exit(1); });
