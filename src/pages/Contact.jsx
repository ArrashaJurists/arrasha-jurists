import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Reveal, Button, Label, SectionTitle, GoldDash } from "../components/ui";
import { OFFICES, QUOTE_FACTORS } from "../data";

const CONTACT_OPTIONS = [
  {
    label: "I need registration or a specific service",
    icon: "→",
    desc: "Company registration, trademark, GST, compliance — tell us what you need.",
  },
  {
    label: "I need strategic legal advice",
    icon: "◆",
    desc: "M&A, data protection, disputes, regulatory — complex matters requiring judgment.",
  },
  {
    label: "I'm an existing client",
    icon: "●",
    desc: "Reach your relationship partner or our client services team.",
  },
];

export default function Contact() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <Helmet>
        <title>Contact — Arrasha Jurists LLP</title>
        <meta name="description" content="Get in touch. Registration, compliance, strategic advisory, or existing client support." />
      </Helmet>

      {/* Hero */}
      <section className="min-h-[300px] flex items-end bg-primary pt-[120px] pb-14 px-6">
        <Reveal>
          <div className="max-w-[620px]">
            <Label>Contact</Label>
            <h1 className="font-heading text-[clamp(28px,4vw,40px)] text-cream font-normal leading-[1.2]">
              How can we help?
            </h1>
          </div>
        </Reveal>
      </section>

      {/* Self-segmenting intake */}
      <section className="bg-card py-14 px-6">
        <div className="max-w-[700px] mx-auto">
          <div className="grid gap-0.5 mb-9">
            {CONTACT_OPTIONS.map((o, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <button
                  onClick={() => setSelected(i)}
                  className={`block w-full text-left p-5 transition-all duration-300 ${
                    selected === i
                      ? "bg-gold-faint border border-gold/15"
                      : "bg-primary border border-transparent hover:border-gold/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-[15px] text-gold w-5">{o.icon}</span>
                    <div>
                      <h3 className="font-heading text-[17px] text-cream font-normal mb-0.5">{o.label}</h3>
                      <p className="font-body text-[12px] text-mid">{o.desc}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Contact form (shown after selection) */}
          {selected !== null && (
            <Reveal>
              <form className="bg-primary p-7 border border-gold/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  {["Name", "Organisation"].map((label) => (
                    <div key={label}>
                      <label className="font-body text-[9.5px] tracking-[0.08em] uppercase text-mid block mb-1.5">
                        {label}
                      </label>
                      <input
                        className="w-full font-body text-[12.5px] px-3 py-2.5 bg-card border border-gold/7 text-cream outline-none"
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  {[["Email", "email"], ["Phone", "tel"]].map(([label, type]) => (
                    <div key={label}>
                      <label className="font-body text-[9.5px] tracking-[0.08em] uppercase text-mid block mb-1.5">
                        {label}
                      </label>
                      <input
                        type={type}
                        className="w-full font-body text-[12.5px] px-3 py-2.5 bg-card border border-gold/7 text-cream outline-none"
                      />
                    </div>
                  ))}
                </div>
                <div className="mb-5">
                  <label className="font-body text-[9.5px] tracking-[0.08em] uppercase text-mid block mb-1.5">
                    How can we help?
                  </label>
                  <textarea
                    rows={3}
                    className="w-full font-body text-[12.5px] px-3 py-2.5 bg-card border border-gold/7 text-cream outline-none resize-y"
                  />
                </div>
                <Button>Send Message</Button>
              </form>
            </Reveal>
          )}

          {/* Consultation pricing callout */}
          <Reveal>
            <div className="mt-8 p-6 bg-primary border border-gold/8">
              <p className="font-body text-[12.5px] text-light leading-relaxed">
                <span className="text-gold font-medium">Per-consultation advisory</span> — ₹2,500 for a focused 15-minute session
                with a qualified advocate. Book via the form above or WhatsApp.
              </p>
            </div>
          </Reveal>

          {/* Improvement #7: What determines your quote */}
          <div className="mt-11">
            <Reveal>
              <Label>What Determines Your Quote</Label>
              <p className="font-body text-[12.5px] text-mid leading-relaxed mt-1 mb-5 max-w-[500px]">
                Every engagement is scoped to your specific situation. Here's what shapes the fee:
              </p>
            </Reveal>
            {QUOTE_FACTORS.map((qf, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <div className="flex gap-2.5 items-start mb-3">
                  <GoldDash />
                  <div>
                    <span className="font-body text-[12.5px] text-cream">{qf.factor}</span>
                    <span className="font-body text-[12px] text-mid"> — {qf.desc}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Offices */}
          <div className="mt-11">
            <Reveal><Label>Offices</Label></Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-3.5">
              {OFFICES.map((o, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div>
                    <h3 className="font-heading text-[17px] text-cream font-normal mb-1.5">{o.city}</h3>
                    <p className="font-body text-[12px] text-mid leading-relaxed whitespace-pre-line">{o.address}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
