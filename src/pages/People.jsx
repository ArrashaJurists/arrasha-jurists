import { Helmet } from "react-helmet-async";
import { Reveal, Label } from "../components/ui";
import { TEAM } from "../data";

export default function People() {
  return (
    <div>
      <Helmet>
        <title>Our People — Arrasha Jurists LLP</title>
        <meta name="description" content="The partner you meet is the partner who does the work. Meet the Arrasha Jurists team." />
      </Helmet>

      {/* Hero */}
      <section className="min-h-[300px] flex items-end bg-primary pt-[120px] pb-14 px-6">
        <Reveal>
          <div className="max-w-[620px]">
            <Label>Our People</Label>
            <h1 className="font-heading text-[clamp(28px,4vw,40px)] text-cream font-normal leading-[1.2] mb-3">
              The partner you meet is the partner who does the work
            </h1>
          </div>
        </Reveal>
      </section>

      {/* Team grid */}
      <section className="bg-card py-14 px-6">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
          {/* Placeholder names — replace with real team members at launch */}
          {TEAM.map((t, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="bg-primary p-9">
                <div className="w-14 h-14 rounded-full bg-card border border-gold/10 flex items-center justify-center mb-4">
                  <span className="font-heading text-[22px] text-gold">{t.initials}</span>
                </div>
                <h3 className="font-heading text-[19px] text-cream font-normal mb-0.5">{t.name}</h3>
                <p className="font-body text-[11.5px] text-gold mb-0.5">{t.role}</p>
                <p className="font-body text-[10.5px] text-mid mb-3.5">{t.focus}</p>
                <p className="font-body text-[12.5px] text-light leading-relaxed">{t.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
