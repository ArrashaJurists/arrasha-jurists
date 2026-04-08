import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Reveal, Button, Label, SectionTitle, GoldDash } from "../components/ui";
import useCountdown from "../hooks/useCountdown";
import { DPDP_SECTORS, DPDP_PHASES } from "../data";

export default function DPDPNavigator() {
  const countdown = useCountdown();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Helmet>
        <title>DPDP Navigator — Arrasha Jurists LLP</title>
        <meta name="description" content="Your guide to India's Digital Personal Data Protection Act. Compliance timeline, sector guides, and countdown to full enforcement." />
      </Helmet>

      {/* Hero with countdown */}
      <section className="min-h-[380px] flex items-end bg-primary pt-[120px] pb-14 px-6 relative">
        <div className="absolute inset-0 bg-stripes pointer-events-none" />
        <div className="max-w-[840px] relative w-full">
          <Reveal>
            <Label>DPDP Navigator</Label>
            <h1 className="font-heading text-[clamp(28px,4vw,40px)] text-cream font-normal leading-[1.2] mb-3">
              Your guide to India's data protection landscape
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex gap-5 mt-7 flex-wrap items-end">
              {[
                { value: countdown.days, label: "Days" },
                { value: countdown.hours, label: "Hrs" },
                { value: countdown.minutes, label: "Min" },
                { value: countdown.seconds, label: "Sec" },
              ].map((c, i) => (
                <div key={i} className="text-center">
                  <div className="font-heading text-[34px] text-gold leading-none">
                    {String(c.value).padStart(2, "0")}
                  </div>
                  <div className="font-body text-[9px] tracking-[0.1em] uppercase text-mid mt-1">
                    {c.label}
                  </div>
                </div>
              ))}
              <span className="font-body text-[11px] text-light mb-0.5">
                until full enforcement · May 2027
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-card py-14 px-6">
        <div className="max-w-[800px] mx-auto">
          <Reveal><Label>Timeline</Label></Reveal>
          {DPDP_PHASES.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex gap-4 mb-7 items-start">
                <div
                  className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                  style={{ backgroundColor: p.color, boxShadow: `0 0 8px ${p.color}28` }}
                />
                <div>
                  <div className="flex gap-2 items-baseline flex-wrap mb-1">
                    <span className="font-heading text-[17px] text-cream">{p.phase}</span>
                    <span className="font-body text-[11.5px] text-light">{p.date}</span>
                    <span
                      className="font-body text-[9px] tracking-[0.06em] uppercase px-1.5 py-0.5"
                      style={{ color: p.color, backgroundColor: `${p.color}0e` }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="font-body text-[12.5px] text-mid leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sector guides */}
      <section className="bg-primary py-14 px-6">
        <div className="max-w-[800px] mx-auto">
          <Reveal><Label>By Sector</Label></Reveal>
          <div className="flex flex-wrap mb-5">
            {DPDP_SECTORS.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`font-body text-[11.5px] border px-3.5 py-2 cursor-pointer transition-all duration-300 ${
                  activeTab === i
                    ? "text-gold bg-gold-faint border-gold/15"
                    : "text-mid bg-transparent border-gold/4 hover:text-light"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
          <div className="bg-card p-6">
            {DPDP_SECTORS[activeTab].points.map((pt, i) => (
              <div key={i} className="flex gap-2.5 items-start mb-2.5">
                <GoldDash />
                <p className="font-body text-[12.5px] text-light leading-relaxed">{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-14 px-6 text-center border-t border-gold/3">
        <Reveal>
          <SectionTitle size="text-[clamp(20px,2.5vw,26px)]">
            Need help preparing for the DPDP Act?
          </SectionTitle>
          <p className="font-body text-[12.5px] text-mid mt-2 mb-5">
            Book a consultation — ₹2,500 for a focused 15-minute session with a qualified advocate.
          </p>
          <Button to="/contact">Schedule a Consultation</Button>
        </Reveal>
      </section>
    </div>
  );
}
