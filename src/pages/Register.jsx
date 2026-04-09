import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { REG_TYPES_EXTENDED, REGISTRATION_INCLUDES } from "../data";

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Company Registration — Arrasha Jurists LLP</title>
        <meta name="description" content="Register your Private Limited, LLP, OPC, Section 8, or Partnership firm. Complete registration handled by qualified advocates." />
      </Helmet>

      {/* Hero */}
      <section style={{ minHeight: 360, display: "flex", alignItems: "flex-end", backgroundColor: "#0C0C0C", padding: "120px 48px 56px" }}>
        <div style={{ maxWidth: 700 }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 12 }}>
            Company Registration
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#F0EDE8", fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>
            Register your business on the right legal foundation
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: "#999999", lineHeight: 1.6, maxWidth: 560, fontWeight: 300 }}>
            The entity structure you choose affects taxation, liability, fundraising, and exit options.
            We help you choose correctly and handle the entire registration — from name reservation to certificate delivery.
          </p>
        </div>
      </section>

      {/* Entity types */}
      <section style={{ backgroundColor: "#151515", padding: "128px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 24 }}>
            Entity Types
          </span>
          <div style={{ width: 96, height: 1, backgroundColor: "#C4A265", marginBottom: 48 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 0 }}>
            {REG_TYPES_EXTENDED.map((r, i) => (
              <div key={i} style={{ backgroundColor: "#151515", padding: 32, border: "1px solid rgba(196,162,101,0.3)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, gap: 10 }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 21, color: "#F0EDE8", fontWeight: 400, lineHeight: 1.3 }}>{r.title}</h3>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: "#C4A265", backgroundColor: "rgba(196,162,101,0.07)", padding: "2px 8px", flexShrink: 0 }}>
                    {r.tag}
                  </span>
                </div>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#666666", lineHeight: 1.65, fontWeight: 300 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ backgroundColor: "#0C0C0C", padding: "128px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 24 }}>
            What's Included
          </span>
          <div style={{ width: 96, height: 1, backgroundColor: "#C4A265", marginBottom: 48 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {REGISTRATION_INCLUDES.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#C4A265", flexShrink: 0, marginTop: 2 }}>—</span>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#999999", lineHeight: 1.5, fontWeight: 300 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section style={{ backgroundColor: "#151515", padding: "128px max(24px, 4vw)", borderTop: "1px solid rgba(196,162,101,0.1)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 12 }}>
            What You Receive
          </span>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#666666", lineHeight: 1.6, marginBottom: 40, maxWidth: 500, fontWeight: 300 }}>
            Every registration engagement produces a complete set of deliverables:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
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
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#C4A265", flexShrink: 0, marginTop: 2 }}>—</span>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#999999", lineHeight: 1.5, fontWeight: 300 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#0C0C0C", padding: "128px max(24px, 4vw)", textAlign: "center", borderTop: "1px solid rgba(196,162,101,0.1)" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px, 2.8vw, 28px)", color: "#F0EDE8", fontWeight: 400, marginBottom: 8 }}>
          Ready to register?
        </h2>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#666666", marginBottom: 32, fontWeight: 300 }}>
          Tell us your requirements — we'll respond with entity recommendation, scope, and fees within 24 hours.
        </p>
        <Link to="/contact" style={{ display: "inline-block", backgroundColor: "#C4A265", color: "#503804", padding: "14px 36px", textTransform: "uppercase", fontSize: 11, letterSpacing: "0.15em", textDecoration: "none", fontWeight: 500, fontFamily: "'DM Sans',sans-serif" }}>
          Get Started
        </Link>
      </section>
    </div>
  );
}
