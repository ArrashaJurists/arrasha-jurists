import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      <section style={{ minHeight: 380, display: "flex", alignItems: "flex-end", backgroundColor: "#0C0C0C", padding: "120px 48px 56px", position: "relative" }}>
        <div style={{ maxWidth: 840, position: "relative", zIndex: 1, width: "100%" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 12 }}>
            DPDP Navigator
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px, 4vw, 40px)", color: "#F0EDE8", fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>
            Your guide to India's data protection landscape
          </h1>
          <div style={{ display: "flex", gap: 20, marginTop: 28, flexWrap: "wrap", alignItems: "flex-end" }}>
            {[
              { value: countdown.days, label: "Days" },
              { value: countdown.hours, label: "Hrs" },
              { value: countdown.minutes, label: "Min" },
              { value: countdown.seconds, label: "Sec" },
            ].map((c, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 34, color: "#C4A265", lineHeight: 1 }}>
                  {String(c.value).padStart(2, "0")}
                </div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666666", marginTop: 4 }}>
                  {c.label}
                </div>
              </div>
            ))}
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "#999999", marginBottom: 2 }}>
              until full enforcement · May 2027
            </span>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ backgroundColor: "#151515", padding: "128px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 24 }}>
            Timeline
          </span>
          <div style={{ width: 96, height: 1, backgroundColor: "#C4A265", marginBottom: 48 }} />
          {DPDP_PHASES.map((p, i) => (
            <div key={i} style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "flex-start" }}>
              <div
                style={{ width: 8, height: 8, borderRadius: "50%", marginTop: 6, flexShrink: 0, backgroundColor: p.color, boxShadow: `0 0 8px ${p.color}28` }}
              />
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "baseline", flexWrap: "wrap", marginBottom: 4 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: "#F0EDE8" }}>{p.phase}</span>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#999999" }}>{p.date}</span>
                  <span
                    style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", padding: "2px 6px", color: p.color, backgroundColor: `${p.color}0e` }}
                  >
                    {p.status}
                  </span>
                </div>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#666666", lineHeight: 1.6, fontWeight: 300 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sector guides */}
      <section style={{ backgroundColor: "#0C0C0C", padding: "128px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 24 }}>
            By Sector
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 24 }}>
            {DPDP_SECTORS.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 12,
                  border: activeTab === i ? "1px solid rgba(196,162,101,0.3)" : "1px solid rgba(196,162,101,0.1)",
                  padding: "8px 14px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  color: activeTab === i ? "#C4A265" : "#666666",
                  backgroundColor: activeTab === i ? "rgba(196,162,101,0.07)" : "transparent",
                }}
              >
                {s.name}
              </button>
            ))}
          </div>
          <div style={{ backgroundColor: "#151515", padding: 24, border: "1px solid rgba(196,162,101,0.15)" }}>
            {DPDP_SECTORS[activeTab].points.map((pt, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                <span style={{ color: "#C4A265", flexShrink: 0, marginTop: 2 }}>—</span>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#999999", lineHeight: 1.6, fontWeight: 300 }}>{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#151515", padding: "128px max(24px, 4vw)", textAlign: "center", borderTop: "1px solid rgba(196,162,101,0.1)" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px, 2.5vw, 26px)", color: "#F0EDE8", fontWeight: 400, marginBottom: 8 }}>
          Need help preparing for the DPDP Act?
        </h2>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#666666", marginBottom: 32, fontWeight: 300 }}>
          Book a consultation — ₹2,500 for a focused 15-minute session with a qualified advocate.
        </p>
        <Link to="/contact" style={{ display: "inline-block", backgroundColor: "#C4A265", color: "#503804", padding: "14px 36px", textTransform: "uppercase", fontSize: 11, letterSpacing: "0.15em", textDecoration: "none", fontWeight: 500, fontFamily: "'DM Sans',sans-serif" }}>
          Schedule a Consultation
        </Link>
      </section>
    </div>
  );
}
