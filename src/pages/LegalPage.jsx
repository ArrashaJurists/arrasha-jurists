import { Helmet } from "react-helmet-async";

const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    description:
      "How Arrasha Jurists LLP handles website enquiries, newsletter requests, and basic usage information.",
    sections: [
      {
        heading: "Information We Receive",
        body:
          "When you contact us through this website, subscribe to updates, or write to us by email, we may receive your name, organisation, contact details, and the information you choose to share about your matter.",
      },
      {
        heading: "How We Use It",
        body:
          "We use that information to respond to enquiries, assess whether we can assist, share requested updates, maintain basic internal records, and protect the integrity and security of our communications.",
      },
      {
        heading: "Confidentiality and Limits",
        body:
          "Sending information through this website does not by itself create an advocate-client relationship. Please do not send highly sensitive or time-critical material until the scope of engagement and communication protocol have been confirmed with our team.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    description:
      "Basic terms governing the use of the Arrasha Jurists LLP website and informational materials.",
    sections: [
      {
        heading: "Informational Use Only",
        body:
          "The content on this website is provided for general information about the firm, its practice areas, and its publications. It is not legal advice and should not be treated as a substitute for professional counsel on your specific facts.",
      },
      {
        heading: "No Engagement by Access",
        body:
          "Browsing this website, downloading materials, or sending an enquiry does not by itself create an advocate-client relationship. Any engagement begins only after the firm has agreed to act and the scope of work has been confirmed.",
      },
      {
        heading: "Use of Materials",
        body:
          "You may read and share brief excerpts with attribution for non-misleading informational purposes. You may not reproduce the website in a way that implies affiliation, endorsement, or authorship by Arrasha Jurists LLP where none exists.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    description:
      "Important notice regarding the nature of this website and the professional rules that apply to Indian law firms.",
    sections: [
      {
        heading: "No Solicitation",
        body:
          "In accordance with the applicable rules of the Bar Council of India, this website is not intended to solicit work or advertise legal services. It is made available only for informational purposes at the request of the user.",
      },
      {
        heading: "No Legal Advice",
        body:
          "Nothing on this website should be understood as legal advice, legal opinion, or a recommendation for any course of action. Legal outcomes depend on facts, documents, timing, and jurisdiction-specific considerations.",
      },
      {
        heading: "External Links and Updates",
        body:
          "Where this website links to third-party services or references external legal developments, Arrasha Jurists LLP does not control those services or guarantee that all information remains current at all times. Users should verify any external material independently.",
      },
    ],
  },
};

export default function LegalPage({ kind }) {
  const content = LEGAL_CONTENT[kind] ?? LEGAL_CONTENT.disclaimer;

  return (
    <div>
      <Helmet>
        <title>{content.title} - Arrasha Jurists LLP</title>
        <meta name="description" content={content.description} />
      </Helmet>

      <section
        style={{
          minHeight: 300,
          display: "flex",
          alignItems: "flex-end",
          backgroundColor: "#0C0C0C",
          padding: "120px 48px 56px",
        }}
      >
        <div style={{ maxWidth: 680 }}>
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
            Legal
          </span>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "#F0EDE8",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            {content.title}
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 15,
              color: "#999999",
              lineHeight: 1.6,
              maxWidth: 560,
              fontWeight: 300,
            }}
          >
            {content.description}
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#151515", padding: "112px max(24px, 4vw)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {content.sections.map((section) => (
            <div key={section.heading} style={{ marginBottom: 44 }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 24,
                  color: "#F0EDE8",
                  fontWeight: 400,
                  marginBottom: 8,
                }}
              >
                {section.heading}
              </h2>
              <div style={{ width: 64, height: 1, backgroundColor: "#C4A265", marginBottom: 16 }} />
              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 14,
                  color: "#999999",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
