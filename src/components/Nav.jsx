import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrandText } from "./ui";
import { REG_TYPES, SERVICE_CATS, EXPERTISE } from "../data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdown(null);
  }, [location]);

  const navLink = (label, to) => (
    <Link
      to={to}
      className={`font-body text-[11px] tracking-[0.1em] uppercase transition-colors duration-300 py-2 ${
        location.pathname === to ? "text-gold" : "text-light hover:text-gold"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
        scrolled ? "bg-primary/95 backdrop-blur-[10px] border-b border-gold/5" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[62px]">
        <Link to="/"><BrandText size="text-[19px]" /></Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-5 items-center">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("services")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button
              className={`font-body text-[11px] tracking-[0.1em] uppercase py-2 transition-colors ${
                location.pathname === "/services" || location.pathname === "/register"
                  ? "text-gold" : "text-light hover:text-gold"
              }`}
            >
              Services
            </button>
            {dropdown === "services" && (
              <div className="absolute top-full left-[-20px] bg-card border border-gold/8 py-3.5 min-w-[520px] flex">
                <div className="flex-1 px-6 border-r border-gold/4">
                  <div className="font-body text-[9px] tracking-[0.14em] uppercase text-gold mb-2.5">
                    Company Registration
                  </div>
                  {REG_TYPES.slice(0, 4).map((r, i) => (
                    <Link
                      key={i}
                      to="/register"
                      className="block font-body text-[12px] text-light hover:text-gold py-1.5 transition-colors"
                    >
                      {r.title}
                    </Link>
                  ))}
                </div>
                <div className="flex-1 px-6">
                  <div className="font-body text-[9px] tracking-[0.14em] uppercase text-gold mb-2.5">
                    Compliance & Filing
                  </div>
                  {SERVICE_CATS.slice(0, 5).map((c) => (
                    <Link
                      key={c.id}
                      to="/services"
                      className="block font-body text-[12px] text-light hover:text-gold py-1.5 transition-colors"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Expertise dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("expertise")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button
              className={`font-body text-[11px] tracking-[0.1em] uppercase py-2 transition-colors ${
                location.pathname.startsWith("/expertise") || location.pathname === "/dpdp-navigator"
                  ? "text-gold" : "text-light hover:text-gold"
              }`}
            >
              Expertise
            </button>
            {dropdown === "expertise" && (
              <div className="absolute top-full left-[-20px] bg-card border border-gold/8 py-3.5 min-w-[280px]">
                {EXPERTISE.map((e) => (
                  <Link
                    key={e.id}
                    to={`/expertise/${e.id}`}
                    className="block font-body text-[12px] text-light hover:text-gold px-6 py-1.5 transition-colors"
                  >
                    {e.title}
                  </Link>
                ))}
                <div className="h-px bg-gold/4 mx-6 my-1.5" />
                <Link
                  to="/dpdp-navigator"
                  className="block font-body text-[12px] text-gold px-6 py-1.5"
                >
                  DPDP Navigator →
                </Link>
              </div>
            )}
          </div>

          {navLink("People", "/people")}
          {navLink("Insights", "/insights")}
          {navLink("About", "/about")}
          {navLink("Contact", "/contact")}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5"
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-cream mb-[5px] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <div className={`w-5 h-0.5 bg-cream mb-[5px] transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-cream transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card px-6 py-4 flex flex-col gap-3 max-h-[70vh] overflow-y-auto">
          <div className="font-body text-[9px] tracking-[0.14em] uppercase text-gold">Registration</div>
          <Link to="/register" className="font-body text-[12px] text-cream">Company Registration</Link>

          <div className="font-body text-[9px] tracking-[0.14em] uppercase text-gold mt-1">Services</div>
          <Link to="/services" className="font-body text-[12px] text-light">All Services</Link>

          <div className="font-body text-[9px] tracking-[0.14em] uppercase text-gold mt-1">Expertise</div>
          {EXPERTISE.map((e) => (
            <Link key={e.id} to={`/expertise/${e.id}`} className="font-body text-[12px] text-light">
              {e.title}
            </Link>
          ))}

          <div className="h-px bg-gold/4 mt-1" />
          <Link to="/dpdp-navigator" className="font-body text-[12px] text-gold">DPDP Navigator</Link>
          <Link to="/people" className="font-body text-[12px] text-light">People</Link>
          <Link to="/insights" className="font-body text-[12px] text-light">Insights</Link>
          <Link to="/about" className="font-body text-[12px] text-light">About</Link>
          <Link to="/contact" className="font-body text-[12px] text-light">Contact</Link>
        </div>
      )}
    </nav>
  );
}
