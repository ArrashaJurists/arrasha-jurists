import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Reveal, Button, Label, SectionTitle, Card, GoldDash } from "../components/ui";
import {
  BRAND_FULL, REG_TYPES, SERVICE_CATS, EXPERTISE,
  HOW_IT_WORKS, GROWTH_JOURNEY, WHY_ARRASHA, INSIGHTS, PILLAR_COLORS,
} from "../data";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Arrasha Jurists LLP — Strategic Legal Counsel for Growing Businesses</title>
      </Helmet>

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative text-center max-w-[740px] px-6">
          <Reveal><Label>{BRAND_FULL}</Label></Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading text-[clamp(32px,5vw,56px)] text-cream leading-[1.15] font-normal tracking-[-0.02em] mb-5">
              The right legal foundation<br />for every stage of<br />
              <span className="text-gold">your business.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-[15px] text-light leading-relaxed max-w-[520px] mx-auto mb-8">
              From company registration and daily compliance to strategic M&A advisory — one firm, one relationship, counsel that grows with you.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button to="/register">Register Your Company</Button>
              <Button to="/services" outline>Explore All Services</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. CREDENTIALS BAR ───────────────────────────────── */}
      <section className="bg-card py-5 px-6 border-b border-gold/3">
        <div className="max-w-[900px] mx-auto flex items-center justify-center gap-10 flex-wrap">
          {[
            { n: "In-house", l: "qualified professionals" },
            { n: "Pan-India", l: "virtual office network" },
            { n: "Transparent", l: "fixed-fee pricing" },
            { n: "End-to-end", l: "from filing to advisory" },
          ].map((s, i) => (
            <div key={i} className="text-center min-w-[120px]">
              <div className="font-heading text-lg text-gold">{s.n}</div>
              <div className="font-body text-[10px] text-mid tracking-[0.04em] mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. COMPANY REGISTRATION (LARGEST) ────────────────── */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <Label>Company Registration</Label>
              <SectionTitle>Choose the right structure for your business</SectionTitle>
              <p className="font-body text-sm text-mid mt-2.5 max-w-[560px] mx-auto">
                Every entity type has different implications for taxation, liability, fundraising, and compliance. We help you choose correctly and handle the entire registration process.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            {REG_TYPES.map((r, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <Card to="/register" className="p-8">
                  <div className="flex justify-between items-start mb-2.5">
                    <h3 className="font-heading text-[21px] text-cream font-normal leading-tight">{r.title}</h3>
                    <span className="font-body text-[9px] tracking-[0.08em] uppercase text-gold bg-gold-faint px-2.5 py-0.5 shrink-0 ml-3">
                      {r.tag}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-mid leading-relaxed mb-4">{r.desc}</p>
                  <span className="font-body text-[11px] text-gold tracking-[0.06em]">Learn more →</span>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ──────────────────────────────────── */}
      <section className="bg-card py-[72px] px-6 border-t border-gold/3">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <Label>How It Works</Label>
              <SectionTitle>From enquiry to certificate — handled entirely by us</SectionTitle>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
              {HOW_IT_WORKS.map((s) => (
                <div key={s.step} className="bg-primary p-7 text-center">
                  <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading text-xl text-gold">{s.step}</span>
                  </div>
                  <h3 className="font-heading text-lg text-cream font-normal mb-1.5">{s.title}</h3>
                  <p className="font-body text-[12px] text-mid leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. OTHER SERVICES ────────────────────────────────── */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <Label>Beyond Registration</Label>
              <SectionTitle>Tax, compliance, IP, licensing, and legal documentation</SectionTitle>
              <p className="font-body text-sm text-mid mt-2.5 max-w-[520px] mx-auto">
                The same professionals who register your company handle your ongoing compliance — so nothing falls through the cracks.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {SERVICE_CATS.map((cat, ci) => (
              <Reveal key={cat.id} delay={ci * 0.03}>
                <Card to="/services" className="p-7">
                  <h3 className="font-heading text-[19px] text-cream font-normal mb-2">{cat.name}</h3>
                  <div className="flex flex-wrap gap-1">
                    {cat.items.slice(0, 3).map((it, i) => (
                      <span key={i} className="font-body text-[10.5px] text-mid bg-gold-faint px-2 py-0.5 border border-gold/4">
                        {it}
                      </span>
                    ))}
                    {cat.items.length > 3 && (
                      <span className="font-body text-[10.5px] text-gold px-2 py-0.5">
                        +{cat.items.length - 3}
                      </span>
                    )}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GROWTH JOURNEY BRIDGE ─────────────────────────── */}
      <section className="bg-card py-[72px] px-6 border-t border-gold/3">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <Label>As You Grow</Label>
            <SectionTitle>We start where you are and stay as you scale</SectionTitle>
            <p className="font-body text-[13.5px] text-mid leading-relaxed max-w-[560px] mx-auto mt-3.5 mb-9">
              Most businesses outgrow their first legal advisor. We're built so they don't have to. The person who registers your company is the same person who advises on your first investment round.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex justify-center items-center flex-wrap">
              {GROWTH_JOURNEY.map((s, i) => (
                <div key={i} className="flex items-center">
                  <div className="px-6 py-4 text-center">
                    <div className="font-heading text-[22px] text-gold">{s.label}</div>
                    <div className="font-body text-[11px] text-mid mt-0.5">{s.desc}</div>
                  </div>
                  {i < GROWTH_JOURNEY.length - 1 && (
                    <div className="font-body text-base text-gold/15 hidden sm:block">→</div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7. STRATEGIC EXPERTISE ───────────────────────────── */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <Label>Strategic Expertise</Label>
              <SectionTitle>Complex matters that shape your competitive position</SectionTitle>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5">
            {EXPERTISE.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.04}>
                <Card to={`/expertise/${e.id}`} className="p-9 min-h-[200px]">
                  <h3 className="font-heading text-[21px] text-cream font-normal mb-2 leading-tight">{e.title}</h3>
                  <p className="font-body text-[12.5px] text-gold mb-3">{e.tagline}</p>
                  <p className="font-body text-[12.5px] text-mid leading-relaxed mb-4">{e.desc.slice(0, 110)}...</p>
                  <span className="font-body text-[10.5px] text-gold tracking-[0.06em]">Explore →</span>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. WHY ARRASHA ───────────────────────────────────── */}
      <section className="bg-card py-20 px-6 border-t border-gold/3">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <div className="text-center mb-11">
              <Label>Why Arrasha Jurists</Label>
              <SectionTitle>Not a platform. Not a vendor. Your counsel.</SectionTitle>
            </div>
          </Reveal>
          {WHY_ARRASHA.map((v, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={`flex gap-5 items-start py-7 ${i < WHY_ARRASHA.length - 1 ? "border-b border-gold/3" : ""}`}>
                <div className="font-heading text-[38px] text-gold/10 leading-none shrink-0 w-8">{i + 1}</div>
                <div>
                  <h3 className="font-heading text-[19px] text-cream font-normal mb-1.5">{v.title}</h3>
                  <p className="font-body text-[13px] text-mid leading-relaxed">{v.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 9. LATEST THINKING ───────────────────────────────── */}
      <section className="bg-primary py-[72px] px-6">
        <div className="max-w-[800px] mx-auto">
          <Reveal><Label>Latest Thinking</Label></Reveal>
          {INSIGHTS.slice(0, 4).map((ins, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <Link
                to="/insights"
                className="block py-4 border-b border-gold/3 hover:pl-2 transition-all duration-300"
              >
                <div className="flex gap-2 items-center mb-1 flex-wrap">
                  <span
                    className="font-body text-[9.5px] tracking-[0.06em] uppercase"
                    style={{ color: PILLAR_COLORS[ins.cat] }}
                  >
                    {ins.cat}
                  </span>
                  <span className="font-body text-[10.5px] text-mid">· {ins.date}</span>
                </div>
                <p className="font-heading text-[17px] text-cream font-normal leading-snug">{ins.title}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 10. NEWSLETTER ───────────────────────────────────── */}
      <section className="bg-card py-15 px-6 border-t border-gold/3">
        <div className="max-w-[460px] mx-auto text-center">
          <Reveal>
            <SectionTitle size="text-[clamp(22px,2.8vw,28px)]">Stay ahead of regulatory change</SectionTitle>
            <p className="font-body text-[12.5px] text-mid leading-relaxed mb-5 mt-2">
              Concise, actionable analysis. No noise.
            </p>
            <div className="flex max-w-[360px] mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 font-body text-[12.5px] px-3.5 py-2.5 bg-primary border border-gold/10 border-r-0 text-cream outline-none"
              />
              <button className="font-body text-[10px] tracking-[0.1em] uppercase px-4 py-2.5 bg-gold text-primary border border-gold cursor-pointer hover:bg-gold-light transition-colors">
                Subscribe
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
