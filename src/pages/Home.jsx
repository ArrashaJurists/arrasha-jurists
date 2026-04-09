import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Reveal, Button, Label, SectionTitle, Card, GoldDash } from "../components/ui";
import {
  BRAND_FULL,
  REG_TYPES,
  SERVICE_CATS,
  EXPERTISE,
  HOW_IT_WORKS,
  GROWTH_JOURNEY,
  WHY_ARRASHA,
  INSIGHTS,
  PILLAR_COLORS,
} from "../data";

const START_PATHS = [
  {
    label: "Start a company",
    title: "Registration and launch structuring",
    desc: "Choose the right entity, file it correctly, and start with a clear compliance path.",
    to: "/register",
  },
  {
    label: "Stay compliant",
    title: "Returns, filings, tax, and documentation",
    desc: "Keep the operating layer under control with one team handling recurring legal work.",
    to: "/services",
  },
  {
    label: "Handle a strategic matter",
    title: "Privacy, transactions, disputes, and regulatory issues",
    desc: "Bring us in when the matter affects capital, reputation, or the next stage of growth.",
    to: "/contact",
  },
];

const TRUST_METRICS = [
  { value: "24 hrs", label: "for scope and fee response" },
  { value: "Pan-India", label: "support across registrations and offices" },
  { value: "Advocate-led", label: "matters handled by qualified professionals" },
  { value: "End to end", label: "from incorporation to strategic advisory" },
];

const REGISTRATION_PROMISES = [
  "Entity recommendation aligned to liability, tax, and fundraising goals",
  "Name reservation, drafting, filing, and follow-up handled by one team",
  "Post-registration guidance so the next compliance step is already clear",
];

const FEATURED_CATEGORIES = SERVICE_CATS.slice(0, 6);
const FEATURED_INSIGHT = INSIGHTS[0];
const SECONDARY_INSIGHTS = INSIGHTS.slice(1, 4);

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Arrasha Jurists LLP - Strategic Legal Counsel for Growing Businesses</title>
        <meta
          name="description"
          content="From company registration and daily compliance to transactions, privacy, and regulatory strategy. One firm, one relationship, counsel that grows with you."
        />
      </Helmet>

      <section className="section-shell overflow-hidden bg-primary px-6 pt-[120px] pb-16 min-h-screen flex items-center">
        <div className="hero-orb -left-32 top-[16%]" />
        <div className="hero-orb right-[-120px] bottom-[-40px]" />
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="max-w-[1220px] mx-auto w-full relative">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 xl:gap-16 items-end">
            <div className="max-w-[680px]">
              <Reveal>
                <Label>{BRAND_FULL}</Label>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="font-heading text-[clamp(42px,6.6vw,82px)] text-cream leading-[0.96] tracking-[-0.03em] text-shadow-soft mb-6">
                  Legal counsel that keeps pace with the way your business grows.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="font-body text-[16px] text-light leading-relaxed max-w-[620px] mb-8">
                  Start with registration. Stay for compliance, tax, contracts, privacy, and strategic legal
                  guidance when the stakes rise. One relationship, built to scale with you.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="flex gap-3 flex-wrap mb-7">
                  <Button to="/register">Register Your Company</Button>
                  <Button to="/contact" outline>
                    Discuss a Matter
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="flex flex-wrap gap-3">
                  {["Private Ltd, LLP, OPC, Section 8", "GST, tax, ROC, IP, licensing", "Transactions, privacy, disputes"].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-gold/10 bg-gold-faint px-4 py-2 font-body text-[11px] tracking-[0.08em] uppercase text-light"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.16}>
              <div className="soft-panel rounded-[34px] p-5 sm:p-6 lg:p-7">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-2">
                      Start Here
                    </div>
                    <h2 className="font-heading text-[30px] leading-[1.02] text-cream font-normal">
                      Choose the path that matches the problem on your desk.
                    </h2>
                  </div>
                  <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-full border border-gold/12 bg-gold-faint text-gold font-heading text-[24px]">
                    01
                  </div>
                </div>

                <div className="grid gap-3">
                  {START_PATHS.map((item, index) => (
                    <Link
                      key={item.title}
                      to={item.to}
                      className="group rounded-[26px] border border-gold/8 bg-primary/70 px-5 py-5 hover:border-gold/18"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-2">
                            0{index + 1} {item.label}
                          </div>
                          <h3 className="font-heading text-[22px] text-cream font-normal leading-tight mb-2">
                            {item.title}
                          </h3>
                          <p className="font-body text-[12.5px] text-mid leading-relaxed max-w-[420px]">
                            {item.desc}
                          </p>
                        </div>
                        <span className="font-body text-[12px] uppercase tracking-[0.14em] text-gold mt-1 group-hover:translate-x-1">
                          Go
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="grid sm:grid-cols-3 gap-3 mt-5">
                  {[
                    "Transparent scoping",
                    "Qualified professionals",
                    "Clear next steps",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-gold/8 bg-card/80 px-4 py-3 text-center font-body text-[11px] uppercase tracking-[0.12em] text-light"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.34}>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 mt-10">
              {TRUST_METRICS.map((metric) => (
                <div key={metric.value} className="soft-panel rounded-[26px] px-5 py-5">
                  <div className="font-heading text-[28px] text-gold leading-none mb-2">{metric.value}</div>
                  <div className="font-body text-[11px] text-light leading-relaxed">{metric.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell bg-[linear-gradient(180deg,#141414,#101010)] py-20 px-6">
        <div className="max-w-[1220px] mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start mb-12">
            <Reveal>
              <div className="max-w-[420px]">
                <Label>Registration</Label>
                <SectionTitle>Choose the structure that supports where you are headed, not just where you are today.</SectionTitle>
                <p className="font-body text-[13.5px] text-mid leading-relaxed mt-4">
                  Entity choice affects tax treatment, liability, investor comfort, governance, and how easily the
                  business scales later. We help you choose correctly and execute the filing without friction.
                </p>
                <div className="mt-6">
                  <Button to="/register" small>
                    Review Registration Options
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="soft-panel rounded-[32px] p-6">
                <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-3">
                  What You Can Expect
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {REGISTRATION_PROMISES.map((item) => (
                    <div key={item} className="rounded-[24px] border border-gold/8 bg-primary/70 px-4 py-4">
                      <div className="flex gap-2.5 items-start">
                        <GoldDash />
                        <p className="font-body text-[12px] text-light leading-relaxed">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {REG_TYPES.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.04}>
                <Card to="/register" className="p-7 h-full">
                  <div className="flex justify-between items-start gap-3 mb-4">
                    <h3 className="font-heading text-[24px] text-cream font-normal leading-tight">{item.title}</h3>
                    <span className="rounded-full border border-gold/10 bg-gold-faint px-3 py-1 font-body text-[9px] tracking-[0.12em] uppercase text-gold shrink-0">
                      {item.tag}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-mid leading-relaxed mb-5">{item.desc}</p>
                  <span className="font-body text-[11px] uppercase tracking-[0.14em] text-gold">
                    Learn More
                  </span>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-card py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <Label>How We Work</Label>
              <SectionTitle>From first brief to finished filing, the process stays clear and tightly managed.</SectionTitle>
            </div>
          </Reveal>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {HOW_IT_WORKS.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.05}>
                <div className="soft-panel rounded-[30px] p-7 h-full">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-full border border-gold/18 bg-gold-faint flex items-center justify-center font-heading text-[22px] text-gold">
                      {step.step}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-gold/18 to-transparent" />
                  </div>
                  <h3 className="font-heading text-[21px] text-cream font-normal mb-2">{step.title}</h3>
                  <p className="font-body text-[12.5px] text-mid leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-primary py-20 px-6">
        <div className="max-w-[1220px] mx-auto grid lg:grid-cols-[0.82fr_1.18fr] gap-10 xl:gap-14">
          <Reveal>
            <div className="lg:sticky lg:top-[108px]">
              <Label>Beyond Registration</Label>
              <SectionTitle>The same relationship should still be useful once the company is running.</SectionTitle>
              <p className="font-body text-[13.5px] text-mid leading-relaxed mt-4 mb-7 max-w-[430px]">
                We are structured to keep serving the business after incorporation: recurring filings, tax,
                documentation, licensing, and the legal issues that emerge as operations become more complex.
              </p>
              <div className="soft-panel rounded-[30px] p-6">
                <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-4">
                  Business Lifecycle
                </div>
                <div className="space-y-4">
                  {GROWTH_JOURNEY.map((stage, index) => (
                    <div key={stage.label} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full border border-gold/14 bg-gold-faint flex items-center justify-center font-heading text-[16px] text-gold">
                          {index + 1}
                        </div>
                        {index < GROWTH_JOURNEY.length - 1 && <div className="w-px flex-1 bg-gold/12 mt-2" />}
                      </div>
                      <div className="pb-4">
                        <div className="font-heading text-[22px] text-cream font-normal">{stage.label}</div>
                        <div className="font-body text-[12px] text-mid mt-1">{stage.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {FEATURED_CATEGORIES.map((category, index) => (
              <Reveal key={category.id} delay={index * 0.04}>
                <Card to="/services" className="p-6 h-full">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-heading text-[21px] text-cream font-normal leading-tight">{category.name}</h3>
                    <span className="font-body text-[9px] tracking-[0.12em] uppercase text-gold">
                      {category.items.length} items
                    </span>
                  </div>
                  {category.desc && (
                    <p className="font-body text-[12px] text-mid leading-relaxed mb-4">{category.desc}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {category.items.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-gold/8 bg-gold-faint px-3 py-1.5 font-body text-[10.5px] text-light"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-card py-20 px-6">
        <div className="max-w-[1220px] mx-auto">
          <Reveal>
            <div className="max-w-[720px] mb-12">
              <Label>Strategic Expertise</Label>
              <SectionTitle>When the legal issue influences valuation, trust, or execution, the work changes.</SectionTitle>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-4">
            {EXPERTISE.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.04}>
                <Card to={`/expertise/${item.id}`} className="p-8 h-full">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-2">
                        {item.tagline}
                      </div>
                      <h3 className="font-heading text-[28px] text-cream font-normal leading-[1.02]">
                        {item.title}
                      </h3>
                    </div>
                    <span className="hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/10 bg-gold-faint text-gold font-heading text-[18px]">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-mid leading-relaxed mb-5 max-w-[520px]">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.capabilities.slice(0, 3).map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full border border-gold/8 px-3 py-1.5 font-body text-[10.5px] text-light"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-primary py-20 px-6">
        <div className="max-w-[1220px] mx-auto grid lg:grid-cols-[0.78fr_1.22fr] gap-10 xl:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-[108px] max-w-[400px]">
              <Label>Why Arrasha Jurists</Label>
              <SectionTitle>Built to feel more like ongoing counsel and less like a transaction.</SectionTitle>
              <p className="font-body text-[13.5px] text-mid leading-relaxed mt-4 mb-6">
                The design of the firm matters as much as the design of a legal document. We keep the relationship
                direct, commercially aware, and consistent from one stage to the next.
              </p>
              <Button to="/about" outline small>
                Learn About the Firm
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {WHY_ARRASHA.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="soft-panel rounded-[30px] p-6 md:p-7">
                  <div className="grid md:grid-cols-[80px_1fr] gap-4 items-start">
                    <div className="font-heading text-[56px] text-gold/16 leading-none">0{index + 1}</div>
                    <div>
                      <h3 className="font-heading text-[24px] text-cream font-normal mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-body text-[13px] text-mid leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-card py-20 px-6">
        <div className="max-w-[1220px] mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
              <div className="max-w-[660px]">
                <Label>Latest Thinking</Label>
                <SectionTitle>Practical analysis for founders, operators, and management teams.</SectionTitle>
              </div>
              <Button to="/insights" outline small>
                View All Insights
              </Button>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-4">
            <Reveal>
              <Link to="/insights" className="soft-panel rounded-[34px] p-7 block h-full">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="font-body text-[9px] tracking-[0.16em] uppercase"
                    style={{ color: PILLAR_COLORS[FEATURED_INSIGHT.cat] }}
                  >
                    {FEATURED_INSIGHT.cat}
                  </span>
                  <span className="font-body text-[11px] text-mid">
                    {FEATURED_INSIGHT.date} | {FEATURED_INSIGHT.time}
                  </span>
                </div>
                <h3 className="font-heading text-[34px] text-cream font-normal leading-[1.02] mb-4 max-w-[560px]">
                  {FEATURED_INSIGHT.title}
                </h3>
                <p className="font-body text-[13px] text-light leading-relaxed max-w-[520px]">
                  Concise legal writing designed to help you make the next business decision with more confidence and
                  less noise.
                </p>
              </Link>
            </Reveal>

            <div className="grid gap-4">
              {SECONDARY_INSIGHTS.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <Link
                    to="/insights"
                    className="rounded-[28px] border border-gold/8 bg-primary/82 px-6 py-6 block hover:border-gold/18"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className="font-body text-[9px] tracking-[0.16em] uppercase"
                        style={{ color: PILLAR_COLORS[item.cat] }}
                      >
                        {item.cat}
                      </span>
                      <span className="font-body text-[11px] text-mid">
                        {item.date} | {item.time}
                      </span>
                    </div>
                    <h3 className="font-heading text-[22px] text-cream font-normal leading-tight">
                      {item.title}
                    </h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell no-divider bg-primary py-[72px] px-6">
        <div className="max-w-[1120px] mx-auto">
          <Reveal>
            <div className="soft-panel rounded-[36px] px-7 py-8 md:px-10 md:py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-[620px]">
                <Label>Ready When You Are</Label>
                <h2 className="font-heading text-[clamp(28px,4vw,44px)] text-cream font-normal leading-[1.02] mb-3">
                  Tell us what you are solving and we will help you choose the right next step.
                </h2>
                <p className="font-body text-[13.5px] text-light leading-relaxed">
                  Whether it starts as a registration, a notice, a contract, or a strategic question, the right legal
                  partner should make the path forward clearer from the first conversation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button to="/contact">Discuss Your Matter</Button>
                <Button to="/services" outline>
                  Explore Services
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
