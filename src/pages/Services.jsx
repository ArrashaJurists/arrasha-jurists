import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SERVICE_CATS, BUNDLES, HOW_IT_WORKS } from "../data";

export default function Services() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const [query, setQuery] = useState("");
  const filtered = query.trim()
    ? SERVICE_CATS
        .map((c) => ({ ...c, items: c.items.filter((i) => i.toLowerCase().includes(query.toLowerCase())) }))
        .filter((c) => c.items.length || c.name.toLowerCase().includes(query.toLowerCase()))
    : SERVICE_CATS;

  useEffect(() => {
    if (!selectedCategory || query.trim()) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(`service-${selectedCategory}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [query, selectedCategory]);

  return (
    <div>
      <Helmet>
        <title>Services — Arrasha Jurists LLP</title>
        <meta name="description" content="Tax, compliance, GST, intellectual property, licensing, and legal documentation. Every service handled by qualified professionals." />
      </Helmet>

      {/* Hero */}
      <section style={{ minHeight: 320, display: "flex", alignItems: "flex-end", backgroundColor: "#0C0C0C", padding: "120px 48px 56px" }}>
        <div style={{ maxWidth: 660 }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 12 }}>
            Services
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px, 4vw, 40px)", color: "#F0EDE8", fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>
            Tax, compliance, IP, licensing, and legal documentation
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: "#999999", lineHeight: 1.6, maxWidth: 540, fontWeight: 300 }}>
            Every service handled by qualified professionals. Clear scope, transparent pricing.
          </p>
        </div>
      </section>

      {/* Search */}
      <section style={{ backgroundColor: "#151515", padding: "32px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <input
            className="field-dark"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search — e.g. 'trademark', 'GST', 'SHA'..."
            style={{ width: "100%", fontFamily: "'DM Sans',sans-serif", fontSize: 14, padding: "12px 16px", backgroundColor: "#0C0C0C", border: "1px solid rgba(196,162,101,0.15)", color: "#F0EDE8", outline: "none" }}
          />
        </div>
      </section>

      {/* Service categories */}
      <section style={{ backgroundColor: "#0C0C0C", padding: "104px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {filtered.map((cat) => (
            <div
              id={`service-${cat.id}`}
              key={cat.id}
              style={{
                marginBottom: 64,
                scrollMarginTop: 128,
                borderLeft: selectedCategory === cat.id ? "1px solid rgba(196,162,101,0.3)" : "1px solid transparent",
                paddingLeft: selectedCategory === cat.id ? 24 : 0,
                transition: "padding-left 0.25s ease, border-color 0.25s ease",
              }}
            >
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: "#F0EDE8", fontWeight: 400, marginBottom: 8 }}>{cat.name}</h2>
              {cat.id === "tax" && cat.desc && (
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#666666", lineHeight: 1.6, marginBottom: 16, maxWidth: 600, fontWeight: 300 }}>
                  {cat.desc}
                </p>
              )}
              <div style={{ width: 64, height: 1, backgroundColor: "#C4A265", marginBottom: 24 }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 0 }}>
                {cat.items.map((it, i) => (
                  <div key={i} style={{ backgroundColor: "#151515", padding: "16px 20px", display: "flex", alignItems: "center", gap: 8, border: "1px solid rgba(196,162,101,0.1)" }}>
                    <span style={{ color: "rgba(196,162,101,0.3)", fontSize: 8 }}>●</span>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#F0EDE8", fontWeight: 300 }}>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service bundles */}
      <section style={{ backgroundColor: "#151515", padding: "128px max(24px, 4vw)", borderTop: "1px solid rgba(196,162,101,0.1)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 12 }}>
            Service Bundles
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px, 2.5vw, 28px)", color: "#F0EDE8", fontWeight: 400, marginBottom: 8 }}>
            Common combinations, scoped as one engagement
          </h2>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#666666", lineHeight: 1.6, marginBottom: 48, maxWidth: 500, fontWeight: 300 }}>
            Each bundle is priced as a single engagement — simpler for you, more efficient for us.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 0 }}>
            {BUNDLES.map((b, i) => (
              <div key={i} style={{ backgroundColor: "#0C0C0C", padding: 28, border: "1px solid rgba(196,162,101,0.3)" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, color: "#F0EDE8", fontWeight: 400, marginBottom: 16 }}>{b.name}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {b.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#C4A265", flexShrink: 0, marginTop: 2 }}>—</span>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#999999", lineHeight: 1.5, fontWeight: 300 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section style={{ backgroundColor: "#0C0C0C", padding: "128px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4A265", display: "block", marginBottom: 12 }}>
              How We Work
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px, 2.5vw, 28px)", color: "#F0EDE8", fontWeight: 400 }}>
              From enquiry to delivery — handled entirely by us
            </h2>
            <div style={{ width: 96, height: 1, backgroundColor: "#C4A265", margin: "16px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 0 }}>
            {HOW_IT_WORKS.map((s) => (
              <div key={s.step} style={{ backgroundColor: "#151515", padding: 28, textAlign: "center", border: "1px solid rgba(196,162,101,0.3)" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(196,162,101,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, color: "#C4A265" }}>{s.step}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: "#F0EDE8", fontWeight: 400, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#666666", lineHeight: 1.6, fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#151515", padding: "128px max(24px, 4vw)", textAlign: "center", borderTop: "1px solid rgba(196,162,101,0.1)" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px, 2.5vw, 26px)", color: "#F0EDE8", fontWeight: 400, marginBottom: 8 }}>
          Need something specific?
        </h2>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#666666", marginBottom: 32, fontWeight: 300 }}>
          Scope, timeline, and fees within 24 hours.
        </p>
        <Link className="interactive-solid" to="/contact" style={{ display: "inline-block", backgroundColor: "#C4A265", color: "#503804", padding: "14px 36px", textTransform: "uppercase", fontSize: 11, letterSpacing: "0.15em", textDecoration: "none", fontWeight: 500, fontFamily: "'DM Sans',sans-serif" }}>
          Get a Quote
        </Link>
      </section>
    </div>
  );
}
