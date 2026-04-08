import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Reveal, Button, Label, SectionTitle, GoldDash } from "../components/ui";
import { SERVICE_CATS, BUNDLES, HOW_IT_WORKS } from "../data";

export default function Services() {
  const [query, setQuery] = useState("");
  const filtered = query.trim()
    ? SERVICE_CATS
        .map((c) => ({ ...c, items: c.items.filter((i) => i.toLowerCase().includes(query.toLowerCase())) }))
        .filter((c) => c.items.length || c.name.toLowerCase().includes(query.toLowerCase()))
    : SERVICE_CATS;

  return (
    <div>
      <Helmet>
        <title>Services — Arrasha Jurists LLP</title>
        <meta name="description" content="Tax, compliance, GST, intellectual property, licensing, and legal documentation. Every service handled by qualified professionals." />
      </Helmet>

      {/* Hero */}
      <section className="min-h-[320px] flex items-end bg-primary pt-[120px] pb-14 px-6">
        <Reveal>
          <div className="max-w-[660px]">
            <Label>Services</Label>
            <h1 className="font-heading text-[clamp(28px,4vw,40px)] text-cream font-normal leading-[1.2] mb-3">
              Tax, compliance, IP, licensing, and legal documentation
            </h1>
            <p className="font-body text-[14.5px] text-light leading-relaxed max-w-[540px]">
              Every service handled by qualified professionals. Clear scope, transparent pricing.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Search */}
      <section className="bg-card py-7 px-6">
        <div className="max-w-[560px] mx-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search — e.g. 'trademark', 'GST', 'SHA'..."
            className="w-full font-body text-[13.5px] px-4 py-3 bg-primary border border-gold/10 text-cream outline-none"
          />
        </div>
      </section>

      {/* Service categories */}
      <section className="bg-primary py-12 px-6">
        <div className="max-w-[1100px] mx-auto">
          {filtered.map((cat, ci) => (
            <Reveal key={cat.id} delay={ci * 0.03}>
              <div className="mb-10">
                <h2 className="font-heading text-[22px] text-cream font-normal mb-2">{cat.name}</h2>
                {/* Improvement #1: capability paragraph for Tax & Accounting */}
                {cat.id === "tax" && (
                  <p className="font-body text-[12.5px] text-mid leading-relaxed mb-4 max-w-[600px]">
                    {cat.desc}
                  </p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
                  {cat.items.map((it, i) => (
                    <div key={i} className="bg-card py-4 px-5 flex items-center gap-2">
                      <span className="text-gold/20 text-[7px]">●</span>
                      <span className="font-body text-[13px] text-cream">{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Service bundles */}
      <section className="bg-card py-14 px-6 border-t border-gold/3">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <Label>Service Bundles</Label>
            <SectionTitle size="text-[clamp(20px,2.5vw,28px)]">
              Common combinations, scoped as one engagement
            </SectionTitle>
            <p className="font-body text-[12.5px] text-mid leading-relaxed mt-2 mb-8 max-w-[500px]">
              Each bundle is priced as a single engagement — simpler for you, more efficient for us.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {BUNDLES.map((b, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="bg-primary p-7">
                  <h3 className="font-heading text-[18px] text-cream font-normal mb-3">{b.name}</h3>
                  <div className="flex flex-col gap-2">
                    {b.items.map((item, j) => (
                      <div key={j} className="flex gap-2.5 items-start">
                        <GoldDash />
                        <span className="font-body text-[12px] text-light leading-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-primary py-14 px-6">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <Label>How We Work</Label>
              <SectionTitle size="text-[clamp(20px,2.5vw,28px)]">
                From enquiry to delivery — handled entirely by us
              </SectionTitle>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
            {HOW_IT_WORKS.map((s) => (
              <Reveal key={s.step}>
                <div className="bg-card p-7 text-center">
                  <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading text-xl text-gold">{s.step}</span>
                  </div>
                  <h3 className="font-heading text-lg text-cream font-normal mb-1.5">{s.title}</h3>
                  <p className="font-body text-[12px] text-mid leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-14 px-6 text-center border-t border-gold/3">
        <Reveal>
          <SectionTitle size="text-[clamp(20px,2.5vw,26px)]">Need something specific?</SectionTitle>
          <p className="font-body text-[12.5px] text-mid mt-2 mb-5">Scope, timeline, and fees within 24 hours.</p>
          <Button to="/contact">Get a Quote</Button>
        </Reveal>
      </section>
    </div>
  );
}
