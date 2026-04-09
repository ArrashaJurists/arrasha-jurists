import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Label, SectionTitle, Card } from "../components/ui";
import {
  REG_TYPES, SERVICE_CATS, EXPERTISE,
  HOW_IT_WORKS, GROWTH_JOURNEY, WHY_ARRASHA, INSIGHTS, PILLAR_COLORS,
} from "../data";

export default function Home() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = newsletterEmail.trim();
    if (!email) return;

    const subject = "Newsletter subscription request";
    const body = `Please add this email to the Arrasha Jurists updates list:%0D%0A%0D%0A${encodeURIComponent(email)}`;
    window.location.href = `mailto:contact@arrashajurists.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div>
      <Helmet>
        <title>Arrasha Jurists LLP — Strategic Legal Counsel for Growing Businesses</title>
      </Helmet>

      {/* ── 1. HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 max(24px, 4vw)", position: "relative", overflow: "hidden", backgroundColor: "#0e0e0e" }}>
        <div style={{ position: "absolute", right: "-10%", top: "20%", width: 600, height: 600, border: "1px solid rgba(196,162,101,0.1)", transform: "rotate(45deg)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, position: "relative", zIndex: 10 }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 24 }}>
            Elite Legal Architecture
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.02em", color: "#F0EDE8", margin: 0 }}>
            Strategic Counsel.<br />
            <span style={{ color: "#C4A265", fontStyle: "italic" }}>Flawless Execution.</span>
          </h1>
          <p style={{ marginTop: 48, fontSize: 20, fontWeight: 300, maxWidth: 640, color: "#D1C5B5", lineHeight: 1.6 }}>
            A multidisciplinary legal practice dedicated to precision, integrity, and the defence of corporate excellence across the Indian subcontinent.
          </p>
          <div style={{ marginTop: 64, display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
            <Link className="interactive-outline" to="/services" style={{ border: "1px solid #C4A265", color: "#C4A265", padding: "20px 48px", textTransform: "uppercase", fontSize: 12, letterSpacing: "0.15em", textDecoration: "none", transition: "all 0.3s" }}>
              Explore Practice Areas
            </Link>
            <div style={{ height: 1, width: 96, backgroundColor: "rgba(196,162,101,0.3)" }} />
          </div>
        </div>
      </section>

      {/* ── 2. CREDENTIALS BAR ── */}
      <section style={{ backgroundColor: "#151515", padding: "48px max(24px, 4vw)", borderTop: "1px solid rgba(196,162,101,0.2)", borderBottom: "1px solid rgba(196,162,101,0.2)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 32 }}>
          {["In-house Excellence", "Pan-India Presence", "Transparent Protocol", "End-to-end Legal"].map((label, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 500, color: "#F0EDE8" }}>{label}</span>
              {i < 3 && <div style={{ height: 32, width: 1, backgroundColor: "rgba(196,162,101,0.2)", marginLeft: 24 }} />}
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. ENTITY STRUCTURES ── */}
      <section style={{ padding: "128px max(24px, 4vw)", backgroundColor: "#131313" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px, 4vw, 48px)", color: "#F0EDE8", fontWeight: 400, marginBottom: 16 }}>Entity Structures</h2>
            <div style={{ width: 96, height: 1, backgroundColor: "#C4A265" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 0 }}>
            {REG_TYPES.map((r, i) => (
              <Link className="interactive-card" key={i} to={`/register?entity=${r.slug}`} style={{ display: "block", backgroundColor: "#151515", padding: 48, border: "1px solid rgba(196,162,101,0.3)", textDecoration: "none", transition: "all 0.5s" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: "#C4A265", fontWeight: 400, marginBottom: 16 }}>{r.title}</h3>
                <p style={{ color: "#D1C5B5", fontWeight: 300, lineHeight: 1.6, marginBottom: 32, fontSize: 15 }}>{r.desc}</p>
                <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "#F0EDE8", opacity: 0.7 }}>Select Structure →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ── */}
      <section style={{ padding: "128px max(24px, 4vw)", backgroundColor: "#1c1b1b" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: 64, maxWidth: 1200, margin: "0 auto" }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px, 4vw, 48px)", color: "#F0EDE8", fontWeight: 400, marginBottom: 32 }}>Operational Protocol</h2>
            <p style={{ color: "#D1C5B5", maxWidth: 480, lineHeight: 1.6, fontWeight: 300, fontSize: 16 }}>
              We dismantle complexity. Our methodology is refined through deep judicial expertise and corporate strategy.
            </p>
            <div style={{ marginTop: 80, display: "flex", flexDirection: "column" }}>
              {HOW_IT_WORKS.map((s, i) => (
                <div key={i} style={{ padding: "32px 0", borderTop: "1px solid rgba(196,162,101,0.4)", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: i === HOW_IT_WORKS.length - 1 ? "1px solid rgba(196,162,101,0.4)" : "none" }}>
                  <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.3em", color: "#C4A265" }}>Phase 0{s.step}</span>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px, 2.5vw, 30px)", color: "#F0EDE8" }}>{s.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", minHeight: 500, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(196,162,101,0.05)" }}>
            <div style={{ position: "absolute", border: "1px solid #C4A265", padding: 32, margin: 48, bottom: 0, right: 0, backgroundColor: "#131313" }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontStyle: "italic", color: "#F0EDE8" }}>"Precision is the cornerstone of our practice."</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. OTHER SERVICES ── */}
      <section style={{ padding: "128px max(24px, 4vw)", backgroundColor: "#131313" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 80 }}>
            <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 12 }}>Beyond Registration</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px, 3vw, 36px)", color: "#F0EDE8", fontWeight: 400, marginBottom: 12 }}>Tax, compliance, IP, licensing, and legal documentation</h2>
            <p style={{ color: "#D1C5B5", fontSize: 15, fontWeight: 300, maxWidth: 520 }}>The same professionals who register your company handle your ongoing compliance.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 0 }}>
            {SERVICE_CATS.map((cat) => (
              <Link className="interactive-card" key={cat.id} to={`/services?category=${cat.id}`} style={{ display: "block", backgroundColor: "#151515", padding: 40, border: "1px solid rgba(196,162,101,0.1)", textDecoration: "none", transition: "all 0.5s" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, color: "#C4A265", fontWeight: 400, marginBottom: 12 }}>{cat.name}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cat.items.slice(0, 3).map((it, i) => (
                    <span key={i} style={{ fontSize: 11, color: "#D1C5B5", backgroundColor: "rgba(196,162,101,0.07)", padding: "2px 8px", border: "1px solid rgba(196,162,101,0.08)" }}>{it}</span>
                  ))}
                  {cat.items.length > 3 && <span style={{ fontSize: 11, color: "#C4A265", padding: "2px 8px" }}>+{cat.items.length - 3}</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GROWTH JOURNEY ── */}
      <section style={{ padding: "128px max(24px, 4vw)", backgroundColor: "#131313", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px, 4vw, 48px)", textAlign: "center", marginBottom: 96, color: "#F0EDE8", fontWeight: 400 }}>Lifecycle Management</h2>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 24, left: 0, width: "100%", height: 1, backgroundColor: "rgba(196,162,101,0.3)" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48 }}>
              {GROWTH_JOURNEY.map((s, i) => (
                <div key={i} style={{ position: "relative", paddingTop: 48 }}>
                  <div style={{ position: "absolute", top: -8, left: 0, width: 16, height: 16, backgroundColor: "#C4A265" }} />
                  <h4 style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "#C4A265", marginBottom: 16 }}>{s.label}</h4>
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: "#F0EDE8", fontWeight: 400, marginBottom: 16 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. STRATEGIC EXPERTISE ── */}
      <section style={{ padding: "128px max(24px, 4vw)", backgroundColor: "#0C0C0C" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 96, gap: 32 }}>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px, 4vw, 48px)", color: "#F0EDE8", fontWeight: 400, marginBottom: 16 }}>Strategic Advisory</h2>
              <div style={{ width: 128, height: 1, backgroundColor: "#C4A265" }} />
            </div>
            <p style={{ maxWidth: 480, color: "#D1C5B5", fontWeight: 300, fontStyle: "italic", fontSize: 16 }}>Specialized legal councils designed for the volatile modern market.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 32 }}>
            {EXPERTISE.map((e) => (
              <Link className="interactive-card" key={e.id} to={`/expertise/${e.id}`} style={{ display: "block", padding: 40, border: "1px solid rgba(196,162,101,0.1)", backgroundColor: "#1c1b1b", textDecoration: "none", transition: "all 0.3s" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: "#F0EDE8", fontWeight: 400, marginBottom: 16 }}>{e.title}</h3>
                <p style={{ fontSize: 14, color: "#D1C5B5", fontWeight: 300, lineHeight: 1.6 }}>{e.desc.slice(0, 130)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. WHY ARRASHA ── */}
      <section style={{ padding: "128px max(24px, 4vw)", backgroundColor: "#0e0e0e" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(40px, 5vw, 60px)", textAlign: "center", marginBottom: 96, color: "#F0EDE8", fontWeight: 400 }}>The Differentiator</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "48px 96px" }}>
            {WHY_ARRASHA.map((v, i) => (
              <div key={i} style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 80, lineHeight: 1, color: "rgba(196,162,101,0.2)", flexShrink: 0 }}>0{i + 1}</span>
                <div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px, 2.5vw, 30px)", color: "#F0EDE8", fontWeight: 400, marginBottom: 16 }}>{v.title}</h4>
                  <p style={{ color: "#D1C5B5", lineHeight: 1.6, fontWeight: 300, fontSize: 15 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. LATEST THINKING ── */}
      <section style={{ padding: "96px max(24px, 4vw)", backgroundColor: "#131313" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 24 }}>Latest Thinking</span>
          {INSIGHTS.slice(0, 4).map((ins, i) => (
            <Link className="interactive-row" key={i} to="/insights" style={{ display: "block", padding: "18px 0", borderBottom: "1px solid rgba(196,162,101,0.1)", textDecoration: "none", transition: "padding-left 0.3s" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4, flexWrap: "wrap" }}>
                <span style={{ fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", color: PILLAR_COLORS[ins.cat] }}>{ins.cat}</span>
                <span style={{ fontSize: 11, color: "#666" }}>· {ins.date}</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, color: "#F0EDE8", fontWeight: 400, lineHeight: 1.4 }}>{ins.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 10. NEWSLETTER ── */}
      <section style={{ backgroundColor: "#151515", padding: "60px max(24px, 4vw)", borderTop: "1px solid rgba(196,162,101,0.1)" }}>
        <div style={{ maxWidth: 460, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px, 2.8vw, 28px)", color: "#F0EDE8", fontWeight: 400, marginBottom: 8 }}>Stay ahead of regulatory change</h2>
          <p style={{ fontSize: 13, color: "#D1C5B5", fontWeight: 300, marginBottom: 20 }}>Concise, actionable analysis. No noise.</p>
          <form onSubmit={handleNewsletterSubmit} style={{ display: "flex", maxWidth: 360, margin: "0 auto" }}>
            <input className="field-dark" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} type="email" required placeholder="your@email.com" style={{ flex: 1, fontSize: 13, padding: "12px 16px", backgroundColor: "#0C0C0C", border: "1px solid rgba(196,162,101,0.2)", borderRight: "none", color: "#F0EDE8", outline: "none", fontFamily: "'DM Sans',sans-serif" }} />
            <button type="submit" className="interactive-solid" style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", padding: "12px 20px", backgroundColor: "#C4A265", color: "#503804", border: "1px solid #C4A265", cursor: "pointer", fontWeight: 500, fontFamily: "'DM Sans',sans-serif" }}>Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
