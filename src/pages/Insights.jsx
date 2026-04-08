import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Reveal, Label } from "../components/ui";
import { INSIGHTS, PILLAR_COLORS } from "../data";

const CATEGORIES = ["All", "The Privacy Pulse", "Regulatory Radar", "Growth Guide", "Deal Intelligence"];

export default function Insights() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? INSIGHTS : INSIGHTS.filter((x) => x.cat === filter);

  return (
    <div>
      <Helmet>
        <title>Insights — Arrasha Jurists LLP</title>
        <meta name="description" content="Legal analysis and regulatory updates. Privacy, compliance, M&A, and startup guidance." />
      </Helmet>

      {/* Hero */}
      <section className="min-h-[300px] flex items-end bg-primary pt-[120px] pb-14 px-6">
        <Reveal>
          <div className="max-w-[620px]">
            <Label>Insights</Label>
            <h1 className="font-heading text-[clamp(28px,4vw,40px)] text-cream font-normal leading-[1.2] mb-2.5">
              Thinking that moves business forward
            </h1>
          </div>
        </Reveal>
      </section>

      {/* Filter + articles */}
      <section className="bg-card py-11 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-wrap mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-body text-[11px] border px-3 py-1.5 cursor-pointer transition-all duration-300 ${
                  filter === cat
                    ? "text-gold bg-gold-faint border-gold/15"
                    : "text-mid bg-transparent border-gold/4 hover:text-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {items.map((ins, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <div className="py-4 border-b border-gold/3 cursor-pointer hover:pl-2 transition-all duration-300">
                <div className="flex gap-2 items-center mb-1 flex-wrap">
                  <span
                    className="font-body text-[9.5px] tracking-[0.06em] uppercase"
                    style={{ color: PILLAR_COLORS[ins.cat] }}
                  >
                    {ins.cat}
                  </span>
                  <span className="font-body text-[10.5px] text-mid">· {ins.date} · {ins.time}</span>
                </div>
                <p className="font-heading text-[17px] text-cream font-normal leading-snug">{ins.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
