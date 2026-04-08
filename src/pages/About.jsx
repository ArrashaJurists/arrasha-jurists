import { Helmet } from "react-helmet-async";
import { Reveal, Label } from "../components/ui";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About — Arrasha Jurists LLP</title>
        <meta name="description" content="Built for the businesses shaping India's next chapter. From registration to complex advisory — quality counsel regardless of size." />
      </Helmet>

      {/* Hero */}
      <section className="min-h-[300px] flex items-end bg-primary pt-[120px] pb-14 px-6">
        <Reveal>
          <div className="max-w-[620px]">
            <Label>About</Label>
            <h1 className="font-heading text-[clamp(28px,4vw,40px)] text-cream font-normal leading-[1.2]">
              Built for the businesses shaping India's next chapter
            </h1>
          </div>
        </Reveal>
      </section>

      {/* Philosophy — Improvement #3: refined positioning */}
      <section className="bg-card py-14 px-6">
        <div className="max-w-[700px] mx-auto">
          {[
            {
              title: "One firm from registration to exit",
              desc: "Most businesses outgrow their first lawyer. We're built so they don't have to. From your first company registration to your most complex transaction — continuity that compounds in value.",
            },
            {
              title: "We start with the business question",
              desc: "Legal advice disconnected from commercial reality is worthless. Before we draft a clause, we understand what you're trying to achieve. The law is the tool, not the answer.",
            },
            {
              title: "Deliberately lean and senior",
              desc: "We don't operate a leverage model. The person you brief is the person who delivers. Whether the matter is a ₹10,000 registration or a ₹10 crore transaction, you work with qualified professionals who understand your business.",
            },
            {
              title: "Transparent by default",
              desc: "Every engagement is scoped and priced before it begins. Fixed fees for defined services, clear estimates for complex matters. You know what you're getting, what it costs, and who's responsible.",
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="mb-9">
                <h3 className="font-heading text-[19px] text-cream font-normal mb-1.5">{item.title}</h3>
                <p className="font-body text-[13.5px] text-mid leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quality commitment — Improvement #3 */}
      <section className="bg-primary py-14 px-6">
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <Label>Our Commitment</Label>
            <h2 className="font-heading text-[clamp(22px,3vw,30px)] text-cream font-normal leading-tight mb-4">
              The quality of counsel your business deserves, regardless of its size
            </h2>
            <p className="font-body text-[13.5px] text-mid leading-relaxed mb-4">
              India's legal market offers a false choice: affordable platforms that disappear after payment,
              or premium firms that only engage above a certain revenue threshold. We reject both.
            </p>
            <p className="font-body text-[13.5px] text-mid leading-relaxed">
              Every client — from a first-time founder registering a company to an established enterprise
              defending against a tax scrutiny — receives structured, professionally delivered work product
              backed by qualified advocates who understand the full picture. That's not an aspiration. It's how we work.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
