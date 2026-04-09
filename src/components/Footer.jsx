import { Link } from "react-router-dom";
import { BRAND_FULL } from "../data";

const PRACTICE_LINKS = [
  { label: "Company Registration", to: "/register" },
  { label: "Tax & Accounting", to: "/services?category=tax" },
  { label: "GST Services", to: "/services?category=gst" },
  { label: "Intellectual Property", to: "/services?category=ip" },
];

const FIRM_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Our Jurists", to: "/people" },
  { label: "Insights", to: "/insights" },
  { label: "DPDP Navigator", to: "/dpdp-navigator" },
];

const LEGAL_LINKS = [
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Disclaimer", to: "/disclaimer" },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h5 className="mb-5 font-body text-[10.5px] font-medium uppercase tracking-[0.22em] text-gold">
        {title}
      </h5>
      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="inline-flex text-[13px] leading-[1.55] text-cream/68 transition-colors duration-300 hover:text-cream"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gold/35 bg-[#151515]">
      <div className="mx-auto max-w-[1240px] px-6 py-14 md:px-10 md:py-16 xl:px-12">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-[minmax(320px,1.18fr)_repeat(3,minmax(145px,0.7fr))] md:gap-x-8 lg:gap-x-14">
          <div className="max-w-[360px]">
            <div className="font-heading text-[28px] leading-[0.92] tracking-[0.02em] text-cream md:text-[30px]">
              ARRASHA JURISTS LLP
            </div>
            <div className="mt-5 font-body text-[10.5px] font-medium uppercase tracking-[0.22em] text-gold">
              Headquarters
            </div>
            <div className="mt-3 space-y-1.5 font-body text-[13px] leading-[1.6] text-cream/68">
              <p>Delhi NCR</p>
              <p>Mumbai</p>
              <p>Bengaluru</p>
            </div>
          </div>

          <FooterColumn title="Practice" links={PRACTICE_LINKS} />
          <FooterColumn title="The Firm" links={FIRM_LINKS} />
          <FooterColumn title="Legal" links={LEGAL_LINKS} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-gold/10 pt-5 md:mt-14 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-[10px] uppercase tracking-[0.16em] text-cream/40">
            &copy; 2026 {BRAND_FULL}. All Rights Reserved.
          </p>
          <p className="font-body text-[10px] uppercase tracking-[0.16em] text-cream/30">
            Informational Website Only
          </p>
        </div>
      </div>
    </footer>
  );
}
