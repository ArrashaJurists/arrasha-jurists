import { Helmet } from "react-helmet-async";
import { TEAM } from "../data";

export default function People() {
  return (
    <div>
      <Helmet>
        <title>Our People — Arrasha Jurists LLP</title>
        <meta name="description" content="The partner you meet is the partner who does the work. Meet the Arrasha Jurists team." />
      </Helmet>

      {/* Hero */}
      <section style={{ minHeight: 300, display: "flex", alignItems: "flex-end", backgroundColor: "#0C0C0C", padding: "120px 48px 56px" }}>
        <div style={{ maxWidth: 620 }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 12 }}>
            Our People
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px, 4vw, 40px)", color: "#F0EDE8", fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>
            The partner you meet is the partner who does the work
          </h1>
        </div>
      </section>

      {/* Team grid */}
      <section style={{ backgroundColor: "#151515", padding: "128px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0 }}>
          {TEAM.map((t, i) => (
            <div key={i} style={{ backgroundColor: "#0C0C0C", padding: 36, border: "1px solid rgba(196,162,101,0.3)" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: "#151515", border: "1px solid rgba(196,162,101,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, color: "#C4A265" }}>{t.initials}</span>
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, color: "#F0EDE8", fontWeight: 400, marginBottom: 2 }}>{t.name}</h3>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#C4A265", marginBottom: 2 }}>{t.role}</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "#666666", marginBottom: 14 }}>{t.focus}</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#999999", lineHeight: 1.6, fontWeight: 300 }}>{t.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
