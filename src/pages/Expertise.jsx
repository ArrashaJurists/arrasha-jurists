import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      <section style={{ minHeight: 380, display: "flex", alignItems: "flex-end", backgroundColor: "#0C0C0C", padding: "120px 48px 56px", position: "relative" }}>
        <div style={{ maxWidth: 680, position: "relative", zIndex: 1 }}>
          <Link to="/" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C4A265", marginBottom: 16, display: "inline-block", textDecoration: "none" }}>
            ← Expertise
          </Link>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#F0EDE8", fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>
            {practice.tagline}
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: "#999999", lineHeight: 1.6, maxWidth: 580, fontWeight: 300 }}>
            {practice.desc}
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ backgroundColor: "#151515", padding: "128px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 24 }}>
            Capabilities
          </span>
          <div style={{ width: 96, height: 1, backgroundColor: "#C4A265", marginBottom: 48 }} />
          {practice.capabilities.map((cap, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(196,162,101,0.15)", padding: "20px 0" }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, color: "#F0EDE8", fontWeight: 400 }}>{cap}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section style={{ backgroundColor: "#0C0C0C", padding: "128px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 16 }}>
            Related
          </span>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
            {related.map((r) => (
              <Link
                key={r.id}
                to={`/expertise/${r.id}`}
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#999999", backgroundColor: "rgba(196,162,101,0.07)", border: "1px solid rgba(196,162,101,0.15)", padding: "6px 14px", textDecoration: "none", transition: "border-color 0.3s" }}
              >
                {r.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#151515", padding: "128px max(24px, 4vw)", textAlign: "center", borderTop: "1px solid rgba(196,162,101,0.1)" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px, 2.5vw, 26px)", color: "#F0EDE8", fontWeight: 400, marginBottom: 16 }}>
          Need help with {practice.title.toLowerCase()}?
        </h2>
        <Link to="/contact" style={{ display: "inline-block", backgroundColor: "#C4A265", color: "#503804", padding: "14px 36px", textTransform: "uppercase", fontSize: 11, letterSpacing: "0.15em", textDecoration: "none", fontWeight: 500, fontFamily: "'DM Sans',sans-serif" }}>
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
