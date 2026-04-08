import { Helmet } from "react-helmet-async";
import { Reveal, Button, Label, SectionTitle, Card, GoldDash } from "../components/ui";
import { REG_TYPES_EXTENDED, REGISTRATION_INCLUDES } from "../data";

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Company Registration — Arrasha Jurists LLP</title>
        <meta name="description" content="Register your Private Limited, LLP, OPC, Section 8, or Partnership firm. Complete registration handled by qualified advocates." />
      </Helmet>

      {/* Hero */}
      <section className="min-h-[360px] flex items-end bg-primary pt-[120px] pb-14 px-6">
        <div className="max-w-[700px]">
          <Reveal>
            <Label>Company Registration</Label>
            <h1 className="font-heading text-[clamp(28px,4vw,42px)] text-cream font-normal leading-[1.2] mb-3">
              Register your business on the right legal foundation
            </h1>
            <p className="font-body text-[15px] text-light leading-relaxed max-w-[560px]">
              The entity structure you choose affects taxation, liability, fundraising, and exit options.
              We help you choose correctly and handle the entire registration — from name reservation to certificate delivery.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Entity types */}
      <section className="bg-card py-16 px-6">
        <div className="max-w-[1000px] mx-auto">
          <Reveal><Label>Entity Types</Label></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            {REG_TYPES_EXTENDED.map((r, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <Card className="p-8">
                  <div className="flex justify-between items-start mb-2.5">
                    <h3 className="font-heading text-[21px] text-cream font-normal leading-tight">{r.title}</h3>
                    <span className="font-body text-[9px] tracking-[0.06em] uppercase text-gold bg-gold-faint px-2 py-0.5 shrink-0 ml-2.5">
                      {r.tag}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-mid leading-[1.65]">{r.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <Reveal><Label>What's Included</Label></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
            {REGISTRATION_INCLUDES.map((item, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <div className="flex gap-2.5 items-start">
                  <GoldDash />
                  <span className="font-body text-[13px] text-light leading-normal">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive (Improvement #5) */}
      <section className="bg-card py-14 px-6 border-t border-gold/3">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <Label>What You Receive</Label>
            <p className="font-body text-[13px] text-mid leading-relaxed mt-2 mb-5 max-w-[500px]">
              Every registration engagement produces a complete set of deliverables:
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Certificate of Incorporation / Registration",
              "Permanent Account Number (PAN)",
              "Tax Deduction Account Number (TAN)",
              "Digital Signature Certificates for all directors",
              "Executed MOA & AOA (or LLP Agreement)",
              "First board resolution and compliance calendar",
              "Complete document folder — organized and indexed",
              "Post-registration guidance note with next steps",
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <div className="flex gap-2.5 items-start">
                  <GoldDash />
                  <span className="font-body text-[13px] text-light leading-normal">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-6 text-center border-t border-gold/3">
        <Reveal>
          <SectionTitle size="text-[clamp(22px,2.8vw,28px)]">Ready to register?</SectionTitle>
          <p className="font-body text-[13px] text-mid mb-6 mt-2">
            Tell us your requirements — we'll respond with entity recommendation, scope, and fees within 24 hours.
          </p>
          <Button to="/contact">Get Started</Button>
        </Reveal>
      </section>
    </div>
  );
}
