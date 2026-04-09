import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About — Arrasha Jurists LLP</title>
        <meta name="description" content="Built for the businesses shaping India's next chapter. From registration to complex advisory — quality counsel regardless of size." />
      </Helmet>

      {/* Hero */}
      <section style={{ minHeight: 300, display: "flex", alignItems: "flex-end", backgroundColor: "#0C0C0C", padding: "120px 48px 56px" }}>
        <div style={{ maxWidth: 620 }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 12 }}>
            About
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px, 4vw, 40px)", color: "#F0EDE8", fontWeight: 400, lineHeight: 1.2 }}>
            Built for the businesses shaping India's next chapter
          </h1>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ backgroundColor: "#151515", padding: "128px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
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
            <div key={i} style={{ marginBottom: 48 }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: "#F0EDE8", fontWeight: 400, marginBottom: 8 }}>{item.title}</h3>
              <div style={{ width: 48, height: 1, backgroundColor: "#C4A265", marginBottom: 16 }} />
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#666666", lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality commitment */}
      <section style={{ backgroundColor: "#0C0C0C", padding: "128px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 12 }}>
            Our Commitment
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px, 3vw, 30px)", color: "#F0EDE8", fontWeight: 400, lineHeight: 1.3, marginBottom: 16 }}>
            The quality of counsel your business deserves, regardless of its size
          </h2>
          <div style={{ width: 96, height: 1, backgroundColor: "#C4A265", marginBottom: 32 }} />
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#666666", lineHeight: 1.7, marginBottom: 16, fontWeight: 300 }}>
            India's legal market offers a false choice: affordable platforms that disappear after payment,
            or premium firms that only engage above a certain revenue threshold. We reject both.
          </p>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#666666", lineHeight: 1.7, fontWeight: 300 }}>
            Every client — from a first-time founder registering a company to an established enterprise
            defending against a tax scrutiny — receives structured, professionally delivered work product
            backed by qualified advocates who understand the full picture. That's not an aspiration. It's how we work.
          </p>
        </div>
      </section>
    </div>
  );
}
