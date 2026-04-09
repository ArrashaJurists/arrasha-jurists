import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Reveal, Label, SectionTitle, Card } from "../components/ui";
import {
  REG_TYPES, SERVICE_CATS, EXPERTISE,
  HOW_IT_WORKS, GROWTH_JOURNEY, WHY_ARRASHA, INSIGHTS, PILLAR_COLORS,
} from "../data";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Arrasha Jurists LLP — Strategic Legal Counsel for Growing Businesses</title>
      </Helmet>

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-[#0e0e0e]">
        {/* Rotated diamond background element */}
        <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] border border-gold/10 rotate-45 pointer-events-none hidden md:block" />
        <div className="max-w-6xl relative z-10">
          <Reveal>
            <span className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.3em] text-gold mb-6 block">
              Elite Legal Architecture
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading text-[clamp(40px,8vw,88px)] leading-[0.95] tracking-[-0.02em] text-cream">
              Strategic Counsel.<br />
              <span className="text-gold italic">Flawless Execution.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 md:mt-12 text-lg md:text-xl font-light max-w-2xl text-[#D1C5B5] leading-relaxed">
              A multidisciplinary legal practice dedicated to precision, integrity, and the defence of corporate excellence across the Indian subcontinent.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 md:mt-16 flex gap-8 items-center flex-wrap">
              <Link
                to="/services"
                className="border border-gold text-gold px-8 md:px-12 py-4 md:py-5 uppercase text-[12px] tracking-widest hover:bg-gold hover:text-[#503804] transition-all font-body"
              >
                Explore Practice Areas
              </Link>
              <div className="h-px w-24 bg-gold/30 hidden md:block" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. CREDENTIALS BAR ───────────────────────────────── */}
      <section className="bg-[#151515] py-8 md:py-12 px-6 md:px-12 border-y border-gold/20">
        <div className="flex flex-wrap justify-between items-center max-w-full mx-auto gap-6 md:gap-8">
          {[
            { label: "In-house Excellence" },
            { label: "Pan-India Presence" },
            { label: "Transparent Protocol" },
            { label: "End-to-end Legal" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[14px] uppercase tracking-widest font-medium font-body text-cream">{s.label}</span>
              {i < 3 && <div className="h-8 w-px bg-gold/20 hidden md:block ml-6" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. COMPANY REGISTRATION ──────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#131313]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-12 md:mb-20">
              <h2 className="font-heading text-4xl md:text-5xl mb-4 text-cream">Entity Structures</h2>
              <div className="w-24 h-px bg-gold" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {REG_TYPES.map((r, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <Link
                  to="/register"
                  className="block bg-[#151515] p-8 md:p-12 border border-gold/30 hover:border-gold transition-all duration-500 group"
                >
                  <h3 className="font-heading text-xl md:text-2xl text-gold mb-4">{r.title}</h3>
                  <p className="text-[#D1C5B5] font-light leading-relaxed mb-8 text-sm">{r.desc}</p>
                  <div className="text-[12px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity font-body text-cream">
                    Select Structure →
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ──────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#1c1b1b]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-6xl mx-auto">
          <div>
            <Reveal>
              <h2 className="font-heading text-4xl md:text-5xl mb-8 text-cream">Operational Protocol</h2>
              <p className="text-[#D1C5B5] max-w-md leading-relaxed font-light">
                We dismantle complexity. Our methodology is refined through deep judicial expertise and corporate strategy.
              </p>
            </Reveal>
            <div className="mt-12 md:mt-20 flex flex-col">
              {HOW_IT_WORKS.map((s, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className={`py-6 md:py-8 border-t border-gold/40 flex justify-between items-center group cursor-pointer ${i === HOW_IT_WORKS.length - 1 ? "border-b border-gold/40" : ""}`}>
                    <span className="text-[12px] uppercase tracking-[0.3em] text-gold font-body">Phase 0{s.step}</span>
                    <span className="font-heading text-xl md:text-3xl group-hover:translate-x-4 transition-transform text-cream">{s.title}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-gold/5">
              <div className="absolute border border-gold p-6 md:p-8 m-8 md:m-12 bottom-0 right-0 bg-[#131313]">
                <p className="font-heading text-lg md:text-xl italic text-cream">"Precision is the cornerstone of our practice."</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. OTHER SERVICES ────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#131313]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-12 md:mb-20">
              <Label>Beyond Registration</Label>
              <SectionTitle>Tax, compliance, IP, licensing, and legal documentation</SectionTitle>
              <p className="font-body text-sm text-[#D1C5B5] mt-3 max-w-[520px] font-light">
                The same professionals who register your company handle your ongoing compliance — so nothing falls through the cracks.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {SERVICE_CATS.map((cat, ci) => (
              <Reveal key={cat.id} delay={ci * 0.03}>
                <Card to="/services" className="p-8 md:p-10 border border-gold/10 hover:border-gold/30 transition-all duration-500">
                  <h3 className="font-heading text-xl text-gold mb-3">{cat.name}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.slice(0, 3).map((it, i) => (
                      <span key={i} className="font-body text-[10.5px] text-[#D1C5B5] bg-gold-faint px-2 py-0.5 border border-gold/5">
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
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#131313] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-heading text-4xl md:text-5xl mb-16 md:mb-24 text-center text-cream">Lifecycle Management</h2>
          </Reveal>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-[24px] left-0 w-full h-px bg-gold/30 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              {GROWTH_JOURNEY.map((s, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="relative pt-8 md:pt-12">
                    {/* Gold square marker */}
                    <div className="absolute top-[-8px] left-0 w-4 h-4 bg-gold hidden md:block" />
                    <h4 className="text-[12px] uppercase tracking-widest text-gold mb-4 font-body">{s.label}</h4>
                    <p className="font-heading text-xl md:text-2xl mb-4 text-cream">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. STRATEGIC EXPERTISE ───────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#0C0C0C]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl mb-4 text-cream">Strategic Advisory</h2>
                <div className="w-32 h-px bg-gold" />
              </div>
              <p className="max-w-md text-[#D1C5B5] font-light italic font-body">
                Specialized legal councils designed for the volatile modern market.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {EXPERTISE.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.05}>
                <Link
                  to={`/expertise/${e.id}`}
                  className="block p-8 md:p-10 border border-gold/10 bg-[#1c1b1b] hover:bg-[#2a2a2a] transition-all"
                >
                  <h3 className="font-heading text-xl md:text-2xl mb-4 text-cream">{e.title}</h3>
                  <p className="text-sm text-[#D1C5B5] font-light leading-relaxed">{e.desc.slice(0, 120)}...</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. WHY ARRASHA ───────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#0e0e0e]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="font-heading text-4xl md:text-6xl text-center mb-16 md:mb-24 text-cream">The Differentiator</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-24 gap-y-16 md:gap-y-32">
            {WHY_ARRASHA.map((v, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex gap-6 md:gap-8 items-start">
                  <span className="font-heading text-[60px] md:text-[80px] leading-none text-gold/20 shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="font-heading text-xl md:text-3xl mb-4 text-cream">{v.title}</h4>
                    <p className="text-[#D1C5B5] leading-relaxed font-light">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. LATEST THINKING ───────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#131313]">
        <div className="max-w-[800px] mx-auto">
          <Reveal><Label>Latest Thinking</Label></Reveal>
          {INSIGHTS.slice(0, 4).map((ins, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <Link
                to="/insights"
                className="block py-4 border-b border-gold/10 hover:pl-2 transition-all duration-300"
              >
                <div className="flex gap-2 items-center mb-1 flex-wrap">
                  <span className="font-body text-[9.5px] tracking-[0.06em] uppercase" style={{ color: PILLAR_COLORS[ins.cat] }}>
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
      <section className="bg-[#151515] py-12 md:py-15 px-6 border-t border-gold/10">
        <div className="max-w-[460px] mx-auto text-center">
          <Reveal>
            <SectionTitle size="text-[clamp(22px,2.8vw,28px)]">Stay ahead of regulatory change</SectionTitle>
            <p className="font-body text-[12.5px] text-[#D1C5B5] leading-relaxed mb-5 mt-2 font-light">
              Concise, actionable analysis. No noise.
            </p>
            <div className="flex max-w-[360px] mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 font-body text-[12.5px] px-4 py-3 bg-[#0C0C0C] border border-gold/20 border-r-0 text-cream outline-none"
              />
              <button className="font-body text-[10px] tracking-[0.15em] uppercase px-5 py-3 bg-gold text-[#503804] border border-gold cursor-pointer hover:bg-gold-light transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
