import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Reveal, Button, Label } from "../components/ui";
import { EXPERTISE } from "../data";

export default function Expertise() {
  const { id } = useParams();
  const practice = EXPERTISE.find((x) => x.id === id) || EXPERTISE[0];
  const related = EXPERTISE.filter((x) => x.id !== id);

  return (
    <div>
      <Helmet>
        <title>{practice.title} — Arrasha Jurists LLP</title>
        <meta name="description" content={practice.desc} />
      </Helmet>

      {/* Hero */}
      <section className="min-h-[380px] flex items-end bg-primary pt-[120px] pb-15 px-6 relative">
        <div className="absolute inset-0 bg-dots pointer-events-none" />
        <div className="max-w-[680px] relative">
          <Reveal>
            <Link to="/" className="font-body text-[10px] tracking-[0.1em] uppercase text-gold mb-4 inline-block">
              ← Expertise
            </Link>
            <h1 className="font-heading text-[clamp(28px,4vw,42px)] text-cream font-normal leading-[1.2] mb-3">
              {practice.tagline}
            </h1>
            <p className="font-body text-[14.5px] text-light leading-relaxed max-w-[580px]">
              {practice.desc}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-card py-14 px-6">
        <div className="max-w-[800px] mx-auto">
          <Reveal><Label>Capabilities</Label></Reveal>
          {practice.capabilities.map((cap, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <div className="border-b border-gold/4 py-4">
                <p className="font-heading text-lg text-cream font-normal">{cap}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="bg-primary py-11 px-6">
        <div className="max-w-[800px] mx-auto">
          <Label>Related</Label>
          <div className="flex gap-2 flex-wrap mt-2.5">
            {related.map((r) => (
              <Link
                key={r.id}
                to={`/expertise/${r.id}`}
                className="font-body text-[11.5px] text-light bg-gold-faint border border-gold/7 px-3.5 py-1.5 hover:border-gold transition-colors duration-300"
              >
                {r.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-14 px-6 text-center border-t border-gold/3">
        <Reveal>
          <h2 className="font-heading text-[clamp(20px,2.5vw,26px)] text-cream font-normal">
            Need help with {practice.title.toLowerCase()}?
          </h2>
          <div className="mt-4">
            <Button to="/contact">Get in Touch</Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
