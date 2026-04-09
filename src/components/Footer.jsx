import { Link } from "react-router-dom";
import { BRAND_FULL } from "../data";

export default function Footer() {
  const linkClass = "text-cream/70 hover:text-gold transition-colors text-sm font-light";

  return (
    <footer className="w-full px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-t border-gold bg-[#151515]">
      {/* Brand */}
      <div>
        <div className="text-xl md:text-2xl font-normal text-cream font-heading mb-6 md:mb-8">ARRASHA JURISTS LLP</div>
        <p className="text-[12px] font-medium uppercase tracking-widest text-gold mb-4 font-body">Headquarters</p>
        <p className="text-cream/70 font-light text-sm leading-relaxed">
          Delhi NCR<br />
          Mumbai<br />
          Bengaluru
        </p>
      </div>

      {/* Practice */}
      <div>
        <h5 className="text-[12px] font-medium uppercase tracking-widest text-gold mb-6 md:mb-8 font-body">Practice</h5>
        <ul className="flex flex-col gap-4">
          <li><Link to="/register" className={linkClass}>Company Registration</Link></li>
          <li><Link to="/services" className={linkClass}>Tax & Accounting</Link></li>
          <li><Link to="/services" className={linkClass}>GST Services</Link></li>
          <li><Link to="/services" className={linkClass}>Intellectual Property</Link></li>
        </ul>
      </div>

      {/* The Firm */}
      <div>
        <h5 className="text-[12px] font-medium uppercase tracking-widest text-gold mb-6 md:mb-8 font-body">The Firm</h5>
        <ul className="flex flex-col gap-4">
          <li><Link to="/about" className={linkClass}>About Us</Link></li>
          <li><Link to="/people" className={linkClass}>Our Jurists</Link></li>
          <li><Link to="/insights" className={linkClass}>Insights</Link></li>
          <li><Link to="/dpdp-navigator" className={linkClass}>DPDP Navigator</Link></li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h5 className="text-[12px] font-medium uppercase tracking-widest text-gold mb-6 md:mb-8 font-body">Legal</h5>
        <ul className="flex flex-col gap-4">
          <li><Link to="/contact" className={linkClass}>Contact</Link></li>
          <li><span className={linkClass}>Privacy Policy</span></li>
          <li><span className={linkClass}>Terms of Service</span></li>
          <li><span className={linkClass}>Disclaimer</span></li>
        </ul>
      </div>

      {/* Bottom bar */}
      <div className="col-span-full mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-center border-t border-gold/10 pt-8 md:pt-12">
        <p className="text-[10px] uppercase tracking-widest text-cream/40 font-body">
          &copy; 2026 {BRAND_FULL}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
