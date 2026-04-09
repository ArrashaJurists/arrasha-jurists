import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { INSIGHTS } from "../data";

const CATEGORIES = ["All", "The Privacy Pulse", "Regulatory Radar", "Growth Guide", "Deal Intelligence"];

const PILLAR_COLORS_INLINE = {
  "The Privacy Pulse": "#818CF8",
  "Regulatory Radar": "#FB923C",
  "Deal Intelligence": "#34D399",
  "Growth Guide": "#94A3B8",
};

export default function Insights() {
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? INSIGHTS : INSIGHTS.filter((x) => x.cat === filter);

  return (
    <div>
      <Helmet>
        <title>Insights — Arrasha Jurists LLP</title>
        <meta name="description" content="Legal analysis and regulatory updates. Privacy, compliance, M&A, and startup guidance." />
      </Helmet>

      {/* Hero */}
      <section style={{ minHeight: 300, display: "flex", alignItems: "flex-end", backgroundColor: "#0C0C0C", padding: "120px 48px 56px" }}>
        <div style={{ maxWidth: 620 }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 12 }}>
            Insights
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px, 4vw, 40px)", color: "#F0EDE8", fontWeight: 400, lineHeight: 1.2, marginBottom: 10 }}>
            Thinking that moves business forward
          </h1>
        </div>
      </section>

      {/* Filter + articles */}
      <section style={{ backgroundColor: "#151515", padding: "128px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 48 }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 11,
                  border: filter === cat ? "1px solid rgba(196,162,101,0.3)" : "1px solid rgba(196,162,101,0.1)",
                  padding: "6px 12px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  color: filter === cat ? "#C4A265" : "#666666",
                  backgroundColor: filter === cat ? "rgba(196,162,101,0.07)" : "transparent",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          {items.map((ins, i) => (
            <div key={i} style={{ padding: "16px 0", borderBottom: "1px solid rgba(196,162,101,0.1)", cursor: "pointer", transition: "padding-left 0.3s" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4, flexWrap: "wrap" }}>
                <span
                  style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", color: PILLAR_COLORS_INLINE[ins.cat] }}
                >
                  {ins.cat}
                </span>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "#666666" }}>· {ins.date} · {ins.time}</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: "#F0EDE8", fontWeight: 400, lineHeight: 1.4 }}>{ins.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
