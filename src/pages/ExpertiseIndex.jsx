import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { EXPERTISE } from "../data";

export default function ExpertiseIndex() {
  return (
    <div>
      <Helmet>
        <title>Expertise - Arrasha Jurists LLP</title>
        <meta
          name="description"
          content="Strategic legal advisory across data protection, transactions, disputes, and regulation."
        />
      </Helmet>

      <section
        style={{
          minHeight: 340,
          display: "flex",
          alignItems: "flex-end",
          backgroundColor: "#0C0C0C",
          padding: "120px 48px 56px",
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <span
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C4A265",
              display: "block",
              marginBottom: 12,
            }}
          >
            Expertise
          </span>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "#F0EDE8",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            Strategic legal advice for matters that shape the business
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 15,
              color: "#999999",
              lineHeight: 1.6,
              maxWidth: 600,
              fontWeight: 300,
            }}
          >
            When the issue affects capital, growth, privacy, disputes, or regulation,
            we step in with partner-led judgment and execution.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#151515", padding: "112px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: 0,
            }}
          >
            {EXPERTISE.map((item) => (
              <Link
                className="interactive-card"
                key={item.id}
                to={`/expertise/${item.id}`}
                style={{
                  display: "block",
                  padding: 36,
                  backgroundColor: "#0C0C0C",
                  border: "1px solid rgba(196,162,101,0.14)",
                  textDecoration: "none",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 26,
                    color: "#F0EDE8",
                    fontWeight: 400,
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 14,
                    color: "#999999",
                    lineHeight: 1.65,
                    fontWeight: 300,
                    marginBottom: 18,
                  }}
                >
                  {item.desc}
                </p>
                <span
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#C4A265",
                  }}
                >
                  View capabilities →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#0C0C0C",
          padding: "112px max(24px, 4vw)",
          textAlign: "center",
          borderTop: "1px solid rgba(196,162,101,0.1)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(20px, 2.5vw, 26px)",
            color: "#F0EDE8",
            fontWeight: 400,
            marginBottom: 8,
          }}
        >
          Need strategic counsel on a live matter?
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 14,
            color: "#999999",
            marginBottom: 32,
            fontWeight: 300,
          }}
        >
          Share the issue and we will respond with next steps, scope, and timing.
        </p>
        <Link
          className="interactive-solid"
          to="/contact"
          style={{
            display: "inline-block",
            backgroundColor: "#C4A265",
            color: "#503804",
            padding: "14px 36px",
            textTransform: "uppercase",
            fontSize: 11,
            letterSpacing: "0.15em",
            textDecoration: "none",
            fontWeight: 500,
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          Discuss a Matter
        </Link>
      </section>
    </div>
  );
}
