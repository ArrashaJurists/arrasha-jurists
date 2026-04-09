import { Link } from "react-router-dom";
import { BrandText } from "./ui";
import { REG_TYPES, SERVICE_CATS, BRAND_FULL } from "../data";

export default function Footer() {
  const linkClass = "block font-body text-[11.5px] text-mid hover:text-light transition-colors py-0.5";

  return (
    <footer className="bg-primary border-t border-gold/4 pt-13 pb-7 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <BrandText size="text-[17px]" />
            <div className="font-body text-[10px] text-mid mt-0.5">LLP</div>
            <p className="font-body text-[12px] text-mid leading-relaxed mt-2.5">
              Strategic legal counsel for growing businesses. From first registration to complex advisory.
            </p>
          </div>

          {/* Registration */}
          <div>
            <div className="font-body text-[9px] tracking-[0.12em] uppercase text-gold mb-2.5">Registration</div>
            {REG_TYPES.slice(0, 4).map((r, i) => (
              <Link key={i} to="/register" className={linkClass}>{r.title}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="font-body text-[9px] tracking-[0.12em] uppercase text-gold mb-2.5">Services</div>
            {SERVICE_CATS.slice(0, 5).map((c) => (
              <Link key={c.id} to="/services" className={linkClass}>{c.name}</Link>
            ))}
          </div>

          {/* Firm */}
          <div>
            <div className="font-body text-[9px] tracking-[0.12em] uppercase text-gold mb-2.5">Firm</div>
            {[
              ["People", "/people"],
              ["Insights", "/insights"],
              ["About", "/about"],
              ["DPDP Navigator", "/dpdp-navigator"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <Link key={path} to={path} className={linkClass}>{label}</Link>
            ))}
            <p className="font-body text-[11.5px] text-mid mt-2.5">Delhi · Mumbai · Bengaluru</p>
          </div>
        </div>

        <div className="border-t border-gold/3 pt-4 flex justify-between flex-wrap gap-2">
          <p className="font-body text-[10px] text-mid">&copy; 2026 {BRAND_FULL}. All rights reserved.</p>
          <p className="font-body text-[10px] text-mid">Disclaimer · Privacy Policy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
