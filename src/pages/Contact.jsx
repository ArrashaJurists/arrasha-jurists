import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { OFFICES, QUOTE_FACTORS } from "../data";

const CONTACT_OPTIONS = [
  {
    label: "I need registration or a specific service",
    icon: "\u2192",
    desc: "Company registration, trademark, GST, compliance — tell us what you need.",
  },
  {
    label: "I need strategic legal advice",
    icon: "\u25C6",
    desc: "M&A, data protection, disputes, regulatory — complex matters requiring judgment.",
  },
  {
    label: "I'm an existing client",
    icon: "\u25CF",
    desc: "Reach your relationship partner or our client services team.",
  },
];

export default function Contact() {
  const [selected, setSelected] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "mailto:contact@arrashajurists.com?subject=Enquiry from Website";
  };

  return (
    <div>
      <Helmet>
        <title>Contact — Arrasha Jurists LLP</title>
        <meta name="description" content="Get in touch. Registration, compliance, strategic advisory, or existing client support." />
      </Helmet>

      {/* Hero */}
      <section style={{ minHeight: 300, display: "flex", alignItems: "flex-end", backgroundColor: "#0C0C0C", padding: "120px 48px 56px" }}>
        <div style={{ maxWidth: 620 }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 12 }}>
            Contact
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px, 4vw, 40px)", color: "#F0EDE8", fontWeight: 400, lineHeight: 1.2 }}>
            How can we help?
          </h1>
        </div>
      </section>

      {/* Self-segmenting intake */}
      <section style={{ backgroundColor: "#151515", padding: "128px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "grid", gap: 2, marginBottom: 48 }}>
            {CONTACT_OPTIONS.map((o, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: 20,
                  transition: "all 0.3s",
                  backgroundColor: selected === i ? "rgba(196,162,101,0.07)" : "#0C0C0C",
                  border: selected === i ? "1px solid rgba(196,162,101,0.3)" : "1px solid rgba(196,162,101,0.08)",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, color: "#C4A265", width: 20 }}>{o.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: "#F0EDE8", fontWeight: 400, marginBottom: 2 }}>{o.label}</h3>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#666666", fontWeight: 300 }}>{o.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Contact form (shown after selection) */}
          {selected !== null && (
            <form onSubmit={handleSubmit} style={{ backgroundColor: "#0C0C0C", padding: 28, border: "1px solid rgba(196,162,101,0.15)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginBottom: 12 }}>
                {["Name", "Organisation"].map((label) => (
                  <div key={label}>
                    <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#666666", display: "block", marginBottom: 6 }}>
                      {label}
                    </label>
                    <input
                      style={{ width: "100%", fontFamily: "'DM Sans',sans-serif", fontSize: 13, padding: "10px 12px", backgroundColor: "#151515", border: "1px solid rgba(196,162,101,0.15)", color: "#F0EDE8", outline: "none" }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginBottom: 12 }}>
                {[["Email", "email"], ["Phone", "tel"]].map(([label, type]) => (
                  <div key={label}>
                    <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#666666", display: "block", marginBottom: 6 }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      style={{ width: "100%", fontFamily: "'DM Sans',sans-serif", fontSize: 13, padding: "10px 12px", backgroundColor: "#151515", border: "1px solid rgba(196,162,101,0.15)", color: "#F0EDE8", outline: "none" }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "#666666", display: "block", marginBottom: 6 }}>
                  How can we help?
                </label>
                <textarea
                  rows={3}
                  style={{ width: "100%", fontFamily: "'DM Sans',sans-serif", fontSize: 13, padding: "10px 12px", backgroundColor: "#151515", border: "1px solid rgba(196,162,101,0.15)", color: "#F0EDE8", outline: "none", resize: "vertical" }}
                />
              </div>
              <button
                type="submit"
                style={{ display: "inline-block", backgroundColor: "#C4A265", color: "#503804", padding: "14px 36px", textTransform: "uppercase", fontSize: 11, letterSpacing: "0.15em", border: "1px solid #C4A265", cursor: "pointer", fontWeight: 500, fontFamily: "'DM Sans',sans-serif" }}
              >
                Send Message
              </button>
            </form>
          )}

          {/* Consultation pricing callout */}
          <div style={{ marginTop: 48, padding: 24, backgroundColor: "#0C0C0C", border: "1px solid rgba(196,162,101,0.2)" }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#999999", lineHeight: 1.6, fontWeight: 300 }}>
              <span style={{ color: "#C4A265", fontWeight: 500 }}>Per-consultation advisory</span> — ₹2,500 for a focused 15-minute session
              with a qualified advocate. Book via the form above or WhatsApp.
            </p>
          </div>

          {/* What determines your quote */}
          <div style={{ marginTop: 64 }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 12 }}>
              What Determines Your Quote
            </span>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#666666", lineHeight: 1.6, marginBottom: 32, maxWidth: 500, fontWeight: 300 }}>
              Every engagement is scoped to your specific situation. Here's what shapes the fee:
            </p>
            {QUOTE_FACTORS.map((qf, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ color: "#C4A265", flexShrink: 0, marginTop: 2 }}>—</span>
                <div>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#F0EDE8", fontWeight: 400 }}>{qf.factor}</span>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#666666", fontWeight: 300 }}> — {qf.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Offices */}
          <div style={{ marginTop: 64 }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 24 }}>
              Offices
            </span>
            <div style={{ width: 96, height: 1, backgroundColor: "#C4A265", marginBottom: 32 }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20 }}>
              {OFFICES.map((o, i) => (
                <div key={i}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, color: "#F0EDE8", fontWeight: 400, marginBottom: 6 }}>{o.city}</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#666666", lineHeight: 1.6, whiteSpace: "pre-line", fontWeight: 300 }}>{o.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
