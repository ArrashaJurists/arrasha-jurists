import { Link } from "react-router-dom";
import { BrandText, Button } from "./ui";
import { REG_TYPES, SERVICE_CATS, BRAND_FULL } from "../data";

const FIRM_LINKS = [
  ["People", "/people"],
  ["Insights", "/insights"],
  ["About", "/about"],
  ["DPDP Navigator", "/dpdp-navigator"],
  ["Contact", "/contact"],
];

export default function Footer() {
  const linkClass = "block font-body text-[12px] text-mid hover:text-light transition-colors py-1";

  return (
    <footer className="bg-primary border-t border-gold/6 px-6 pt-0 pb-8">
      <div className="max-w-[1220px] mx-auto">
        <div className="section-shell no-divider py-10">
          <div className="soft-panel rounded-[32px] p-7 md:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-[620px]">
              <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-3">
                Start the Conversation
              </div>
              <h2 className="font-heading text-[clamp(24px,3vw,36px)] text-cream font-normal leading-tight mb-2">
                Bring us the matter at the stage you are in today.
              </h2>
              <p className="font-body text-[13px] text-light leading-relaxed">
                Registration, filings, tax scrutiny, privacy, transactions, or a question that needs judgment.
                We will point you to the right next step.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/contact">Discuss Your Matter</Button>
              <Button to="/services" outline>
                Review Services
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] gap-8 pt-6">
          <div>
            <BrandText size="text-[18px]" />
            <div className="font-body text-[10px] tracking-[0.14em] uppercase text-mid mt-1">LLP</div>
            <p className="font-body text-[12.5px] text-mid leading-relaxed mt-4 max-w-[340px]">
              Strategic legal counsel for growing businesses across company setup, compliance, tax, documentation,
              and complex advisory.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-5 max-w-[360px]">
              {[
                "Advocate-led execution",
                "Transparent scoping",
                "Pan-India support",
                "24-hour response window",
              ].map((item) => (
                <div key={item} className="rounded-[20px] border border-gold/8 px-4 py-3 font-body text-[11px] text-light">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-3">Registration</div>
            {REG_TYPES.slice(0, 4).map((item) => (
              <Link key={item.slug} to="/register" className={linkClass}>
                {item.title}
              </Link>
            ))}
          </div>

          <div>
            <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-3">Services</div>
            {SERVICE_CATS.slice(0, 5).map((item) => (
              <Link key={item.id} to="/services" className={linkClass}>
                {item.name}
              </Link>
            ))}
          </div>

          <div>
            <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-3">Firm</div>
            {FIRM_LINKS.map(([label, path]) => (
              <Link key={path} to={path} className={linkClass}>
                {label}
              </Link>
            ))}
            <div className="rounded-[24px] border border-gold/8 px-4 py-4 mt-5">
              <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-2">Office Network</div>
              <p className="font-body text-[12px] text-light leading-relaxed">
                Delhi NCR, Mumbai, Bengaluru
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/6 mt-9 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-body text-[10px] text-mid">&copy; 2026 {BRAND_FULL}. All rights reserved.</p>
          <p className="font-body text-[10px] text-mid">Disclaimer | Privacy Policy | Terms</p>
        </div>
      </div>
    </footer>
  );
}
