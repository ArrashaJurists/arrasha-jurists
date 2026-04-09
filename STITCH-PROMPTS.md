# Arrasha Jurists LLP — Google Stitch Prompt Kit
## Optimized for GitHub Pages Deployment

---

## How to Use This Document

1. Go to [stitch.withgoogle.com](https://stitch.withgoogle.com)
2. Select **Web** layout
3. **Paste DESIGN SYSTEM (Section A) first** — this establishes the visual language for all screens
4. Generate each screen prompt (Section B) in order
5. Use Stitch's chat to refine details after each generation
6. Link screens together using the Play feature to create a clickable prototype
7. Export to Figma for final polish, or use the generated HTML/CSS directly

---

## GitHub Pages: What Works and What Doesn't

Before designing, understand the constraints. GitHub Pages is **static hosting only** — no server, no backend, no database.

### Works perfectly
- All visual design, layout, typography, animations
- Client-side JavaScript (React SPA, countdown timers, search filtering, scroll reveals)
- Google Fonts loaded via CSS
- Google Analytics 4 (just a script tag)
- WhatsApp click-to-chat (external link)
- BCI disclaimer modal (sessionStorage, client-side)
- Client-side search/filter on Services and Insights pages
- SEO meta tags, Open Graph, structured data (JSON-LD)
- Custom domain (via CNAME record)
- HTTPS (enforced automatically)
- Hash-based routing (`/#/services`, `/#/contact`) — works reliably

### Needs a third-party service
- **Contact form** — use [Web3Forms](https://web3forms.com) (free, no signup) or [Formspree](https://formspree.io) (free tier: 50 submissions/month). Design the form normally; submission goes to an external API.
- **Newsletter signup** — use [Buttondown](https://buttondown.email) embed or [Mailchimp](https://mailchimp.com) embed form. Design normally; the form action points externally.
- **Email delivery** — no server-side email. Contact form submissions are forwarded via the third-party service above.

### Won't work (don't design for these)
- Server-side rendering or dynamic pages
- Backend API routes
- Database or CMS (articles are static, baked into the build)
- User authentication or client portal
- Payment processing
- Server-side redirects (use client-side routing only)
- Dynamic URL paths like `/insights/article-slug` (use hash routes or pre-built static pages)

### Design implications
- **URLs use hash format**: `arrashajurists.github.io/arrasha-jurists/#/services` — this is invisible to users in practice but means SEO is limited to the homepage for now. Content marketing (Insights articles) will initially depend on social sharing, not Google indexing.
- **Contact form should set expectations**: "We'll respond within 24 hours" is accurate because the form submission goes to email, not a ticketing system.
- **No blog CMS**: Insights articles are hardcoded. To add new articles, a developer edits the data file and redeploys. Design the Insights page knowing content updates are manual.
- **Performance is excellent**: GitHub Pages serves via CDN. The site will load fast globally. Design without worrying about performance constraints.

---

## Section A: DESIGN SYSTEM

> Paste this into Stitch first, before generating any screen. This establishes the rules every screen must follow.

```
DESIGN SYSTEM — Arrasha Jurists LLP

You are designing a premium Indian law firm website. The aesthetic is Cravath / Mishcon de Reya / Slaughter and May — restrained, typographic, authoritative. NOT a legal-tech platform. NOT RegisterKaro or Vakilsearch.

COLOURS (dark theme only — no white or light backgrounds anywhere):
- Background: #0C0C0C (near black, used everywhere)
- Card: #151515 (card backgrounds, alternate sections)
- Card Hover: #1A1A1A
- Gold Accent: #C4A265 (labels, CTAs, highlights, brand mark)
- Gold Hover: #D4B87A
- Gold Faint: rgba(196,162,101,0.07) (tag badges, subtle fills)
- Cream: #F0EDE8 (primary text)
- Mid Grey: #666666 (secondary text, descriptions)
- Light Grey: #999999 (tertiary text, metadata)
- Maximum 3 colours visible in any single viewport

TYPOGRAPHY:
- Headings: Cormorant Garamond (Google Fonts), weight 400-500, serif. Letter-spacing -0.02em on large headings. This is the premium signal.
- Body/UI: DM Sans (Google Fonts), weight 300-500, sans-serif. Clean and modern.
- Labels: DM Sans uppercase, 9-11px, letter-spacing 0.15-0.2em, gold colour. Used above headings as section identifiers.

LAYOUT RULES:
- Section pattern: gold uppercase LABEL → large Cormorant heading → DM Sans body → content
- Cards: #151515 background, generous padding (32px), NO rounded corners (sharp edges), 2px gap between cards
- Buttons: uppercase, letter-spaced. Primary = gold fill with dark text. Secondary = transparent with gold border.
- Whitespace: generous. 80-100px vertical padding between sections.
- Background textures: faint grid lines or dot patterns in gold at 1.5-2% opacity. Subtle, not decorative.
- Animations: scroll-reveal fade-up only. No bouncy or playful motion.

HARD RULES — DO NOT VIOLATE:
- No emojis anywhere. No 🏢 🤝 🚀 on cards or anywhere else.
- No stock photos, clip art, or icons. Typography and layout carry the design.
- No rounded corners on cards or containers. Sharp edges only.
- No carousels or sliders. Single static content per section.
- No client testimonials. No quotes. No star ratings.
- No published pricing (except ₹2,500 consultation on DPDP and Contact pages).
- No bright colours (blue, orange, red) except the four content pillar accents on the Insights page only.
- The site must feel like walking into a quiet, confident room — not a trade show booth.

FIRM NAME DISPLAY:
"Arrasha Jurists" with "Jurists" rendered in gold (#C4A265). "LLP" appears as smaller secondary text.

MOBILE-FIRST:
Design for 375px width first. Over 62% of Indian legal search traffic is mobile. All grids stack to single column. Hamburger menu replaces desktop navigation.
```

---

## Section B: SCREEN PROMPTS

Generate these in order. Each prompt is self-contained but builds on the design system above.

---

### Screen 1: BCI Disclaimer Modal

```
Design a full-screen legal disclaimer modal for an Indian law firm website.

Dark overlay covering the entire viewport, background #0C0C0C at 95% opacity with backdrop blur.

Centred card on #151515 background, max-width 520px, 48px padding, no rounded corners.

Content (centred):
- Firm name "Arrasha Jurists" in Cormorant Garamond, 28px, cream colour. "Jurists" in gold #C4A265.
- "LLP" below in DM Sans, 11px, #666666
- Thin gold horizontal line (32px wide, 1px tall) as divider
- Paragraph: "As per the rules of the Bar Council of India, law firms are not permitted to solicit work or advertise." in DM Sans 13px, #999999
- Second paragraph: "By proceeding, you acknowledge there has been no solicitation from Arrasha Jurists LLP. Information obtained shall not be construed as legal advice." in DM Sans 12px, #666666
- Gold button: "I UNDERSTAND & AGREE" — gold fill #C4A265, dark text #0C0C0C, uppercase, letter-spaced

The modal must block all interaction behind it. Nothing else is visible. This is the first thing every visitor sees.
```

---

### Screen 2: Homepage — Hero + Credentials

```
Design the top portion of a premium law firm homepage. Two sections visible: Hero and Credentials Bar.

HERO (full viewport height, centred):
- Faint grid pattern overlay on #0C0C0C background (gold lines at 2% opacity, 60px grid)
- Gold uppercase label: "ARRASHA JURISTS LLP" in DM Sans, 10px, tracking 0.2em
- Main heading in Cormorant Garamond, ~50px on desktop / 32px mobile:
  "The right legal foundation
   for every stage of
   your business."
  where "your business." is in gold #C4A265, everything else in cream #F0EDE8
- Subheading: "From company registration and daily compliance to strategic M&A advisory — one firm, one relationship, counsel that grows with you." in DM Sans, 15px, #999999, max-width 520px
- Two buttons side by side:
  1. "REGISTER YOUR COMPANY" — gold fill, dark text (primary)
  2. "EXPLORE ALL SERVICES" — transparent with gold border, gold text (secondary)

CREDENTIALS BAR (immediately below hero):
- #151515 background, compact height (~60px)
- Four items in a horizontal row, centred:
  "In-house / qualified professionals"
  "Pan-India / virtual office network"
  "Transparent / fixed-fee pricing"
  "End-to-end / from filing to advisory"
- Top word in Cormorant Garamond 18px gold, bottom in DM Sans 10px #666666

Desktop width: 1200px max content. Mobile: hero stacks vertically, credentials bar wraps to 2x2 grid.
```

---

### Screen 3: Homepage — Registration Section

```
Design the Company Registration section of the homepage. This is the LARGEST section — it's the primary revenue driver.

#0C0C0C background, 80px vertical padding.

Header (centred):
- Gold label: "COMPANY REGISTRATION"
- Heading: "Choose the right structure for your business" in Cormorant Garamond
- Subtext in DM Sans 14px #666666

Grid of 6 entity type cards (2 columns on desktop, 1 on mobile), 2px gap:
Each card is #151515 background, 32px padding, no rounded corners.

1. "Private Limited Company" — tag badge "Most Popular"
2. "Limited Liability Partnership" — tag "For Partnerships"
3. "One Person Company (OPC)" — tag "Solo Founders"
4. "Section 8 Company" — tag "Non-Profit"
5. "Startup India (DPIIT)" — tag "Tax Benefits"
6. "Partnership Firm" — tag "Traditional"

Each card contains:
- Title in Cormorant Garamond 21px cream, right-aligned tag badge in DM Sans 9px uppercase gold on rgba(196,162,101,0.07) background
- Description in DM Sans 13px #666666, 2-3 lines
- "Learn more →" in DM Sans 11px gold at bottom

Cards hover to #1A1A1A. The overall feel should be a well-organized catalogue, not a sales grid.
```

---

### Screen 4: Homepage — How It Works + Other Services

```
Design two consecutive homepage sections: How It Works and Other Services.

HOW IT WORKS (#151515 background, 72px padding):
- Gold label: "HOW IT WORKS"
- Heading: "From enquiry to certificate — handled entirely by us"
- 4-step horizontal flow (single row on desktop, stacked on mobile):
  Each step has a gold-bordered circle (40px) with Cormorant Garamond number inside:
  1. "Tell us what you need" — "Call, WhatsApp, or fill our form. We respond within 24 hours with scope and fees."
  2. "We review your documents" — "Our team guides you on exactly what's needed — no guesswork, no repeated submissions."
  3. "We handle the process" — "All government filings, follow-ups, and coordination managed by our team. You stay updated."
  4. "You receive your certificate" — "Registration complete. We set up your ongoing compliance calendar and stay available for questions."
  Step titles in Cormorant Garamond 18px cream, descriptions in DM Sans 12px #666666.

OTHER SERVICES (#0C0C0C background, 80px padding):
- Gold label: "BEYOND REGISTRATION"
- Heading: "Tax, compliance, IP, licensing, and legal documentation"
- 7 cards in a 3-column grid (2px gap):
  Tax & Accounting | GST Services | MCA & Annual Compliance | Intellectual Property | Business Licensing | Legal Documentation | Virtual Office
- Each card: #151515, Cormorant title 19px, and 3 tag chips showing example services (DM Sans 10.5px on gold-faint background), plus "+N" count in gold for remaining services.
```

---

### Screen 5: Homepage — Growth Journey + Strategic Expertise

```
Design two consecutive homepage sections: Growth Journey Bridge and Strategic Expertise.

GROWTH JOURNEY (#151515 background, 72px padding, centred):
- Gold label: "AS YOU GROW"
- Heading: "We start where you are and stay as you scale"
- Subtext explaining the pipeline thesis
- Horizontal flow of 4 words connected by faint gold arrows:
  Start → Operate → Scale → Protect
  Each word in Cormorant Garamond 22px gold
  Below each: grey subtitle in DM Sans 11px
  "Register, structure" | "Comply, file, document" | "Raise, acquire, expand" | "Defend, enforce, govern"
  Arrows between words: "→" in gold at 15% opacity

STRATEGIC EXPERTISE (#0C0C0C background, 80px padding):
- Gold label: "STRATEGIC EXPERTISE"
- Heading: "Complex matters that shape your competitive position"
- 4 cards in 2x2 grid (2px gap), each #151515, 36px padding, min-height 200px:
  1. "Data Protection & Digital Strategy" — "Turn data protection into business advantage"
  2. "Transactions" — "Execute with precision and speed"
  3. "Dispute Resolution" — "Resolve conflicts decisively"
  4. "Regulatory & Government Affairs" — "Navigate India's regulatory landscape"
- Each card: Cormorant title 21px, gold tagline 12.5px, grey description 12.5px (truncated), gold "Explore →"
```

---

### Screen 6: Homepage — Why Arrasha + Insights + Newsletter + Footer

```
Design the bottom portion of the homepage: four sections stacked.

WHY ARRASHA (#151515 background, 80px padding):
- Gold label: "WHY ARRASHA JURISTS"
- Heading: "Not a platform. Not a vendor. Your counsel."
- 4 numbered differentiators (large faint gold numbers 1-4 on left, 38px, at 10% opacity):
  1. "Your matters are handled by advocates, not coordinators" — "Every engagement is led by a qualified legal professional..."
  2. "One firm from incorporation to exit" — "The person who registers your company is the same person who advises..."
  3. "Commercially minded, not just legally correct" — "We tell you what the law means for your business..."
  4. "Transparent pricing, no hidden charges" — "We scope and price every engagement upfront..."
  Separated by 1px gold lines at 3% opacity.

LATEST THINKING (#0C0C0C background, 72px padding):
- Gold label: "LATEST THINKING"
- 4 article entries, each a horizontal row:
  - Coloured category tag (DM Sans 9.5px uppercase): "The Privacy Pulse" in #818CF8, "Regulatory Radar" in #FB923C, "Growth Guide" in #94A3B8, "Deal Intelligence" in #34D399
  - Date in DM Sans 10.5px #666666
  - Title in Cormorant Garamond 17px cream
  - Hover: slide-right by 8px

NEWSLETTER (#151515 background, 60px padding, centred):
- Heading: "Stay ahead of regulatory change" in Cormorant Garamond
- Subtext: "Concise, actionable analysis. No noise."
- Email input + gold "SUBSCRIBE" button inline (max-width 360px)

FOOTER (#0C0C0C, thin gold top border):
- 4-column grid: Brand description | Registration links | Services links | Firm links + offices
- "Delhi · Mumbai · Bengaluru" in the Firm column
- Copyright + Disclaimer/Privacy/Terms row at bottom
```

---

### Screen 7: Company Registration Page

```
Design a dedicated Company Registration page for a law firm website.

HERO (#0C0C0C, padding-top 120px for nav clearance):
- Gold label: "COMPANY REGISTRATION"
- Heading: "Register your business on the right legal foundation" in Cormorant Garamond
- Subtext about entity structure implications

ENTITY TYPES (#151515 background):
- Grid of 8 cards (the 6 from homepage plus Sole Proprietorship and Foreign Subsidiary)
- Each card: #0C0C0C background (inverted from homepage), fuller descriptions than homepage versions
- Same tag badges as homepage

WHAT'S INCLUDED (#0C0C0C):
- 2-column checklist of 8 items with gold dashes:
  Name reservation, DSC & DIN, MOA & AOA drafting, Certificate of Incorporation, PAN & TAN, First board resolution, Compliance calendar setup, Post-registration guidance

WHAT YOU RECEIVE (#151515):
- "Every registration engagement produces a complete set of deliverables:"
- 2-column list: Certificate, PAN, TAN, DSCs, Executed documents, First board resolution, Complete indexed folder, Post-registration guidance note

CTA (#0C0C0C, centred):
- "Ready to register?"
- "Tell us your requirements — we'll respond with entity recommendation, scope, and fees within 24 hours."
- Gold "GET STARTED" button
```

---

### Screen 8: Services Catalogue Page

```
Design a searchable services catalogue page.

HERO: Gold label "SERVICES", heading "Tax, compliance, IP, licensing, and legal documentation"

SEARCH BAR (#151515 section):
- Full-width input on #0C0C0C background, gold border, placeholder: "Search — e.g. 'trademark', 'GST', 'SHA'..."
- Client-side filtering (design note: this filters the sections below in real time)

7 SERVICE SECTIONS (#0C0C0C, each with Cormorant heading):
1. Tax & Accounting (7 items) — with a capability paragraph: "From annual returns to assessment defence before tax authorities..."
2. GST Services (6 items)
3. MCA & Annual Compliance (7 items)
4. Intellectual Property (6 items)
5. Business Licensing (6 items)
6. Legal Documentation (7 items)
7. Virtual Office (2 items)

Each service item is a small card (#151515, compact padding) with a gold dot indicator and service name in DM Sans 13px cream.

SERVICE BUNDLES section (#151515):
- Gold label: "SERVICE BUNDLES"
- Heading: "Common combinations, scoped as one engagement"
- 5 bundle cards showing name + included items with gold dashes

HOW WE WORK section: Same 4-step pattern as homepage

CTA: "Need something specific?" + "GET A QUOTE" button
```

---

### Screen 9: Expertise Page (Template for 4 Practice Areas)

```
Design an expertise/practice area page. This template is used for all 4 areas. Show the Data Protection variant.

HERO (#0C0C0C, padding-top 120px):
- Faint dot pattern background at 1.2% opacity
- Back link: "← Expertise" in gold uppercase
- Heading (the tagline, NOT the practice name): "Turn data protection into business advantage" in Cormorant Garamond
- Description paragraph in DM Sans 14.5px #999999

CAPABILITIES (#151515):
- Gold label: "CAPABILITIES"
- 6 items listed vertically, each separated by 1px gold line at 4% opacity:
  "Privacy Compliance & Implementation"
  "Cross-Border Data Transfers"
  "Privacy in M&A Due Diligence"
  "Consent Architecture & Governance"
  "Cybersecurity & Breach Response"
  "AI & Emerging Technology Governance"
  Each in Cormorant Garamond 18px cream

RELATED (#0C0C0C):
- Gold label: "RELATED"
- 3 tag-style buttons linking to other practice areas: "Transactions →", "Dispute Resolution →", "Regulatory & Government Affairs →"
- Buttons: DM Sans 11.5px, gold-faint background, gold border on hover

CTA (#151515): "Need help with data protection?" + gold "GET IN TOUCH" button
```

---

### Screen 10: DPDP Navigator

```
Design a standalone resource hub page for India's Digital Personal Data Protection Act.

HERO (#0C0C0C with diagonal stripe pattern at 1.2% opacity):
- Gold label: "DPDP NAVIGATOR"
- Heading: "Your guide to India's data protection landscape"
- LIVE COUNTDOWN to May 31, 2027:
  Four large numbers in Cormorant Garamond 34px gold: DD | HH | MM | SS
  Below each: "Days" "Hrs" "Min" "Sec" in DM Sans 9px uppercase #666666
  To the right: "until full enforcement · May 2027" in DM Sans 11px #999999

TIMELINE (#151515):
- Gold label: "TIMELINE"
- 3 phases, each with a coloured dot indicator:
  Phase 1 (green #4ade80, "Active"): "Core provisions in effect..."
  Phase 2 (gold #C4A265, "8 months"): "Extended obligations..."
  Phase 3 (red #f87171, "15 months"): "Full enforcement — ₹250 Cr penalties..."
  Status badges match the dot colour with 8% opacity background

SECTOR GUIDES (#0C0C0C):
- Gold label: "BY SECTOR"
- 4 tab buttons in a row: Financial Services | Technology & GCCs | Healthcare | E-Commerce
  Active tab: gold text, gold-faint background, gold border
  Inactive: grey text, transparent
- Content panel (#151515) below showing 4 bullet points with gold dashes for the active sector

CTA (#151515):
- "Need help preparing for the DPDP Act?"
- "Book a consultation — ₹2,500 for a focused 15-minute session with a qualified advocate."
- Gold "SCHEDULE A CONSULTATION" button

This is the ONLY page besides Contact where the ₹2,500 consultation price appears.
```

---

### Screen 11: People Page

```
Design a team/people page for a 4-person law firm.

HERO (#0C0C0C):
- Gold label: "OUR PEOPLE"
- Heading: "The partner you meet is the partner who does the work"

TEAM GRID (#151515):
- 4 cards in a row (stacks to 2x2 on tablet, single column on mobile), 2px gap
- Each card: #0C0C0C background, 36px padding
  - Circular avatar (56px): #151515 background with gold border at 10% opacity, containing initials in Cormorant Garamond 22px gold
  - Name: Cormorant Garamond 19px cream
  - Role: DM Sans 11.5px gold
  - Focus: DM Sans 10.5px #666666
  - Bio: DM Sans 12.5px #999999, 2-3 lines

No photographs. The initials-in-circle treatment is deliberate — it signals "we don't need to sell you on appearances." The bios do the work.

NOTE: Team names are placeholders to be replaced at launch.
```

---

### Screen 12: Insights Page

```
Design a filterable articles/insights listing page.

HERO (#0C0C0C):
- Gold label: "INSIGHTS"
- Heading: "Thinking that moves business forward"

FILTERS + ARTICLES (#151515):
- 5 filter buttons in a horizontal row:
  "All" | "The Privacy Pulse" | "Regulatory Radar" | "Growth Guide" | "Deal Intelligence"
  Active filter: gold text, gold-faint background, gold border
  Inactive: grey text, transparent background, faint border

- Article list below (8 entries):
  Each entry is a row with bottom border (1px gold at 3% opacity):
  - Category tag in its pillar colour (DM Sans 9.5px uppercase):
    Privacy Pulse = #818CF8, Regulatory Radar = #FB923C, Growth Guide = #94A3B8, Deal Intelligence = #34D399
  - Date and read time in DM Sans 10.5px #666666
  - Title in Cormorant Garamond 17px cream
  - Hover: entire row slides right 8px

Design note: these are static entries, not CMS-powered. On GitHub Pages, new articles require a code update and redeploy.
```

---

### Screen 13: Contact Page

```
Design a self-segmenting contact page for a law firm.

HERO (#0C0C0C):
- Gold label: "CONTACT"
- Heading: "How can we help?"

INTAKE SELECTION (#151515):
- 3 option cards stacked vertically (2px gap):
  1. "→" icon | "I need registration or a specific service" | "Company registration, trademark, GST, compliance — tell us what you need."
  2. "◆" icon | "I need strategic legal advice" | "M&A, data protection, disputes, regulatory — complex matters requiring judgment."
  3. "●" icon | "I'm an existing client" | "Reach your relationship partner or our client services team."
  - Selected option: gold-faint background with gold border
  - Unselected: #0C0C0C background, transparent border

CONTACT FORM (appears after selection):
- #0C0C0C background with faint gold border
- Fields: Name, Organisation (2 columns) | Email, Phone (2 columns) | "How can we help?" textarea
- Gold "SEND MESSAGE" button
- Design note: form submits to Web3Forms or Formspree (external service for GitHub Pages)

CONSULTATION CALLOUT:
- Bordered box: "Per-consultation advisory — ₹2,500 for a focused 15-minute session with a qualified advocate."

WHAT DETERMINES YOUR QUOTE:
- Gold label: "WHAT DETERMINES YOUR QUOTE"
- "Every engagement is scoped to your specific situation. Here's what shapes the fee:"
- 5 items with gold dashes: Complexity, Number of entities, Timeline, Volume of documentation, Ongoing relationship

OFFICES:
- 3 columns: Delhi NCR | Mumbai | Bengaluru
- City name in Cormorant 17px cream, address in DM Sans 12px #666666
```

---

### Screen 14: About Page

```
Design an About page for a law firm that positions on quality-at-human-scale, not size or prestige.

HERO (#0C0C0C):
- Gold label: "ABOUT"
- Heading: "Built for the businesses shaping India's next chapter"

PHILOSOPHY (#151515):
- 4 statements, each with Cormorant heading 19px and DM Sans body 13.5px:
  1. "One firm from registration to exit" — continuity that compounds in value
  2. "We start with the business question" — legal advice grounded in commercial reality
  3. "Deliberately lean and senior" — the person you brief is the person who delivers, whether ₹10K registration or ₹10 Cr transaction
  4. "Transparent by default" — every engagement scoped and priced before it begins

COMMITMENT (#0C0C0C):
- Gold label: "OUR COMMITMENT"
- Heading: "The quality of counsel your business deserves, regardless of its size"
- Two paragraphs explaining the firm rejects the false choice between affordable-but-absent platforms and expensive-but-inaccessible premium firms
- This section is the positioning anchor — it should feel definitive, not defensive
```

---

## Section C: After Stitch — Implementation Notes for GitHub Pages

Once you have the Stitch designs, here's how to implement for GitHub Pages:

1. **Export from Stitch to Figma** for final polish and asset extraction
2. **The React codebase is already built** at `arrasha-jurists/` — update styles to match Stitch output
3. **Contact form**: Add Web3Forms integration:
   ```html
   <form action="https://api.web3forms.com/submit" method="POST">
     <input type="hidden" name="access_key" value="YOUR-KEY-HERE" />
     <!-- form fields -->
   </form>
   ```
4. **Newsletter**: Embed Buttondown or Mailchimp form
5. **Deploy**: `npm run build && npx gh-pages -d dist --remote org`
6. **Custom domain** (when ready): Add CNAME file to `public/` folder, configure DNS
7. **SEO limitation**: Hash routing (`/#/services`) means Google only indexes the homepage. When SEO becomes a priority, migrate to Netlify or Vercel for proper path-based routing with server-side redirect support.
