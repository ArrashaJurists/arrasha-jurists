export const BRAND = "Arrasha Jurists";
export const BRAND_FULL = "Arrasha Jurists LLP";

export const REG_TYPES = [
  {
    title: "Private Limited Company",
    desc: "The most popular structure for startups and growth businesses. Limited liability, easy fundraising, high credibility with clients and investors.",
    tag: "Most Popular",
    slug: "private-limited",
  },
  {
    title: "Limited Liability Partnership",
    desc: "Combines partnership flexibility with corporate-style liability protection. Ideal for professional services, family ventures, and consultancies.",
    tag: "For Partnerships",
    slug: "llp",
  },
  {
    title: "One Person Company (OPC)",
    desc: "Full corporate structure for solo founders. Limited liability without needing a co-founder or partner.",
    tag: "Solo Founders",
    slug: "opc",
  },
  {
    title: "Section 8 Company",
    desc: "Non-profit incorporation for charitable, educational, or social enterprises. Eligible for tax exemptions and CSR funding.",
    tag: "Non-Profit",
    slug: "section-8",
  },
  {
    title: "Startup India (DPIIT)",
    desc: "Government recognition that unlocks tax holidays, self-certification, easier public procurement, and funding access.",
    tag: "Tax Benefits",
    slug: "dpiit",
  },
  {
    title: "Partnership Firm",
    desc: "Traditional partnership registration with deed drafting. Simple structure for small businesses and family operations.",
    tag: "Traditional",
    slug: "partnership",
  },
];

export const REG_TYPES_EXTENDED = [
  ...REG_TYPES,
  {
    title: "Sole Proprietorship",
    desc: "The simplest business structure for individual operators. Minimal compliance, direct control, and straightforward taxation under the proprietor's PAN.",
    tag: "Individual",
    slug: "sole-prop",
  },
  {
    title: "Foreign Subsidiary",
    desc: "Indian subsidiary of a foreign parent company. Full compliance with FDI regulations, RBI reporting, and Companies Act requirements.",
    tag: "International",
    slug: "foreign-subsidiary",
  },
];

export const SERVICE_CATS = [
  {
    id: "tax",
    name: "Tax & Accounting",
    desc: "From annual returns to assessment defence before tax authorities. When the Income Tax Department issues a scrutiny notice, we build the reconciliation, assemble the evidence, and represent you through the process.",
    items: [
      "Income Tax Filing (ITR)",
      "Income Tax Audit",
      "Income Tax Assessment Defence & Representation",
      "TDS Return Filing",
      "Tax Planning & Advisory",
      "Bookkeeping & Accounting",
      "Tax Department Representation",
    ],
  },
  {
    id: "gst",
    name: "GST Services",
    items: [
      "GST Registration",
      "GST Return Filing",
      "GST Annual Return",
      "GST Audit",
      "GST Cancellation / Revocation",
      "Input Tax Credit Advisory",
    ],
  },
  {
    id: "compliance",
    name: "MCA & Annual Compliance",
    items: [
      "Annual ROC Filing",
      "LLP Annual Filing",
      "Director KYC (DIR-3 KYC)",
      "Registered Office Change",
      "Director Appointment / Resignation",
      "Increase in Authorised Capital",
      "Company Name Change",
    ],
  },
  {
    id: "ip",
    name: "Intellectual Property",
    items: [
      "Trademark Registration",
      "Trademark Objection / Opposition",
      "Trademark Renewal",
      "Copyright Registration",
      "Patent Filing",
      "Design Registration",
    ],
  },
  {
    id: "licensing",
    name: "Business Licensing",
    items: [
      "FSSAI Registration & Licence",
      "MSME / Udyam Registration",
      "Import Export Code (IEC)",
      "Professional Tax Registration",
      "Shop & Establishment Registration",
      "Trade Licence",
    ],
  },
  {
    id: "contracts",
    name: "Legal Documentation",
    items: [
      "Shareholder Agreement (SHA)",
      "Non-Disclosure Agreement (NDA)",
      "Employment Contracts",
      "Commercial Contracts & MOUs",
      "Legal Notices",
      "Lease & Rent Agreements",
      "Partnership Deed",
    ],
  },
  {
    id: "virtual",
    name: "Virtual Office",
    items: [
      "Virtual Office Address (Pan-India)",
      "GST Registration Address",
    ],
  },
];

export const BUNDLES = [
  {
    name: "Startup Launch Package",
    items: ["Pvt Ltd Registration", "GST Registration", "Trademark (1 Class)", "DPIIT Recognition", "First-Year Bookkeeping"],
  },
  {
    name: "Annual Compliance Package",
    items: ["Annual ROC Filing", "DIR-3 KYC", "GST Annual Return", "Income Tax Return", "TDS Returns", "Bookkeeping"],
  },
  {
    name: "Brand Protection Package",
    items: ["Trademark Registration (2 Classes)", "Copyright Registration", "Domain Watch Advisory"],
  },
  {
    name: "Investment Ready Package",
    items: ["Shareholder Agreement", "ESOP Documentation", "Board Resolutions", "Cap Table Review", "Due Diligence Preparation"],
  },
  {
    name: "Company + Address Package",
    items: ["Pvt Ltd Registration", "Virtual Office Address", "GST Registration", "Udyam Registration"],
  },
];

export const EXPERTISE = [
  {
    id: "data-protection",
    title: "Data Protection & Digital Strategy",
    tagline: "Turn data protection into business advantage",
    desc: "India's data economy demands more than compliance checklists. We help businesses harness data responsibly — navigating privacy regulation while protecting customer trust and the ability to innovate.",
    capabilities: [
      "Privacy Compliance & Implementation",
      "Cross-Border Data Transfers",
      "Privacy in M&A Due Diligence",
      "Consent Architecture & Governance",
      "Cybersecurity & Breach Response",
      "AI & Emerging Technology Governance",
    ],
  },
  {
    id: "transactions",
    title: "Transactions",
    tagline: "Execute with precision and speed",
    desc: "Complex transactions demand judgment, speed, and commercial instinct. We bring senior partner engagement from day one, not just at the signing table.",
    capabilities: [
      "Mergers & Acquisitions",
      "Private Equity & Venture Capital",
      "Capital Markets & IPOs",
      "Investment Funds & AIFs",
      "Joint Ventures & Strategic Alliances",
    ],
  },
  {
    id: "disputes",
    title: "Dispute Resolution",
    tagline: "Resolve conflicts decisively",
    desc: "Not every dispute requires litigation. We assess each situation strategically — choosing the resolution path that best protects your interests and timeline.",
    capabilities: [
      "Commercial Litigation",
      "Arbitration (Domestic & International)",
      "NCLT & Insolvency Proceedings",
      "Consumer & Regulatory Disputes",
      "Mediation & Settlements",
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory & Government Affairs",
    tagline: "Navigate India's regulatory landscape",
    desc: "India's regulatory environment is among the world's most complex. We help businesses understand not just the rules today, but where they're heading tomorrow.",
    capabilities: [
      "SEBI, RBI & Financial Sector Regulation",
      "Foreign Investment & FDI",
      "Competition Law (CCI)",
      "Public Policy & Advocacy",
      "Investigations & Enforcement",
    ],
  },
];

export const TEAM = [
  {
    name: "Shubham Srivastava",
    role: "Managing Partner",
    focus: "Corporate, M&A, Business Structuring",
    bio: "Deep transactional experience combined with commercial pragmatism. Leads the firm's corporate practice with a focus on complex structuring, investment advisory, and strategic counsel for growing businesses.",
    initials: "SS",
  },
  {
    name: "Ananya Mehta",
    role: "Partner",
    focus: "Data Protection, IP, Technology",
    bio: "One of India's foremost practitioners at the intersection of data protection and commercial law. Advises technology companies and financial institutions on privacy governance.",
    initials: "AM",
  },
  {
    name: "Rajiv Khanna",
    role: "Partner",
    focus: "Regulatory, Disputes",
    bio: "Two decades navigating India's regulatory landscape. Known for strategic multi-regulator compliance and deep institutional relationships.",
    initials: "RK",
  },
  {
    name: "Vikram Desai",
    role: "Senior Associate",
    focus: "Tax, Compliance, Licensing",
    bio: "Manages end-to-end regulatory compliance for growth-stage companies and established enterprises — from initial registrations through ongoing annual filings.",
    initials: "VD",
  },
];

export const INSIGHTS = [
  { slug: "beyond-consent-trust-architecture", cat: "The Privacy Pulse", title: "Beyond Consent: Building Trust Architecture in India's Data Economy", date: "4 Mar 2026", time: "6 min" },
  { slug: "new-labour-codes-2026", cat: "Regulatory Radar", title: "New Labour Codes 2026: What Changes for Your Workforce This Quarter", date: "1 Mar 2026", time: "4 min" },
  { slug: "pvt-ltd-vs-llp-vs-opc-2026", cat: "Growth Guide", title: "Pvt Ltd vs LLP vs OPC: Choosing the Right Structure in 2026", date: "25 Feb 2026", time: "5 min" },
  { slug: "q4-2025-india-ma-review", cat: "Deal Intelligence", title: "Q4 2025 India M&A Review: What the Numbers Tell Us About 2026", date: "22 Feb 2026", time: "8 min" },
  { slug: "cross-border-data-transfers-roadmap", cat: "The Privacy Pulse", title: "Cross-Border Data Transfers: A Practical Roadmap for Indian Businesses", date: "15 Feb 2026", time: "7 min" },
  { slug: "gst-council-65th-meeting", cat: "Regulatory Radar", title: "GST Council Updates: Key Decisions from the 65th Meeting", date: "10 Feb 2026", time: "3 min" },
  { slug: "annual-compliance-calendar-2026", cat: "Growth Guide", title: "Annual Compliance Calendar 2026: Every Filing Deadline Your Company Needs", date: "5 Feb 2026", time: "4 min" },
  { slug: "boards-role-in-data-governance", cat: "The Privacy Pulse", title: "The Board's Role in Data Governance: Beyond Checkbox Compliance", date: "27 Jan 2026", time: "5 min" },
];

export const PILLAR_COLORS = {
  "The Privacy Pulse": "var(--color-pillar-privacy)",
  "Regulatory Radar": "var(--color-pillar-regulatory)",
  "Deal Intelligence": "var(--color-pillar-deal)",
  "Growth Guide": "var(--color-pillar-growth)",
};

export const REGISTRATION_INCLUDES = [
  "Name reservation & approval",
  "DSC & DIN for directors",
  "MOA & AOA drafting",
  "Certificate of Incorporation",
  "PAN & TAN application",
  "First board resolution",
  "Compliance calendar setup",
  "Post-registration guidance",
];

export const HOW_IT_WORKS = [
  { step: "1", title: "Tell us what you need", desc: "Call, WhatsApp, or fill our form. We respond within 24 hours with scope and fees." },
  { step: "2", title: "We review your documents", desc: "Our team guides you on exactly what's needed — no guesswork, no repeated submissions." },
  { step: "3", title: "We handle the process", desc: "All government filings, follow-ups, and coordination managed by our team. You stay updated." },
  { step: "4", title: "You receive your certificate", desc: "Registration complete. We set up your ongoing compliance calendar and stay available for questions." },
];

export const GROWTH_JOURNEY = [
  { label: "Start", desc: "Register, structure" },
  { label: "Operate", desc: "Comply, file, document" },
  { label: "Scale", desc: "Raise, acquire, expand" },
  { label: "Protect", desc: "Defend, enforce, govern" },
];

export const WHY_ARRASHA = [
  {
    title: "Your matters are handled by advocates, not coordinators",
    desc: "Every engagement is led by a qualified legal professional who understands your business — not a sales executive who assigns your file to whoever's available.",
  },
  {
    title: "One firm from incorporation to exit",
    desc: "The person who registers your company is the same person who advises on your first SHA, your first regulatory challenge, and your first acquisition.",
  },
  {
    title: "Commercially minded, not just legally correct",
    desc: "We tell you what the law means for your business. Every recommendation is grounded in commercial reality, not theoretical risk-aversion.",
  },
  {
    title: "Transparent pricing, no hidden charges",
    desc: "We scope and price every engagement upfront. Fixed fees for defined services, clear estimates for complex matters. The invoice matches the conversation.",
  },
];

export const DPDP_SECTORS = [
  {
    name: "Financial Services",
    points: [
      "RBI data localisation overlay",
      "Consent for digital lending & UPI",
      "Cross-border data with correspondent banks",
      "Significant Data Fiduciary obligations",
    ],
  },
  {
    name: "Technology & GCCs",
    points: [
      "Global transfer mechanisms for captive centres",
      "Privacy-by-design for software",
      "Employee data across parent-subsidiary structures",
      "Algorithmic transparency for AI",
    ],
  },
  {
    name: "Healthcare",
    points: [
      "Sensitive data for clinical trials",
      "Consent for telemedicine",
      "Cross-border health data transfers",
      "Electronic health record rights",
    ],
  },
  {
    name: "E-Commerce",
    points: [
      "Consent management at scale",
      "Children's data protections",
      "Retention policies under consumer law",
      "Cookie consent under Indian privacy law",
    ],
  },
];

export const DPDP_PHASES = [
  { phase: "Phase 1", date: "Nov 2025", status: "Active", desc: "Core provisions in effect — rights, consent, governance. DPBI operational.", color: "#4ade80" },
  { phase: "Phase 2", date: "Nov 2026", status: "8 months", desc: "Extended obligations, cross-border mechanisms, sector overlay rules.", color: "#C4A265" },
  { phase: "Phase 3", date: "May 2027", status: "15 months", desc: "Full enforcement — ₹250 Cr penalties, complete adjudication powers.", color: "#f87171" },
];

export const OFFICES = [
  { city: "Delhi NCR", address: "Sector 44\nGurgaon 122003" },
  { city: "Mumbai", address: "BKC, Bandra East\nMumbai 400051" },
  { city: "Bengaluru", address: "Palace Road\nBengaluru 560001" },
];

export const QUOTE_FACTORS = [
  { factor: "Complexity of the matter", desc: "A straightforward registration differs from multi-entity structuring or assessment defence." },
  { factor: "Number of entities or accounts", desc: "More entities, banks, or jurisdictions involved means a broader scope of work." },
  { factor: "Timeline requirements", desc: "Standard timelines vs. expedited delivery where regulations allow." },
  { factor: "Volume of documentation", desc: "Simple filings vs. comprehensive evidentiary packages with reconciliation." },
  { factor: "Ongoing relationship", desc: "Retainer clients receive preferential scoping on new matters." },
];
