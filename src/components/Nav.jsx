import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
    const frame = window.requestAnimationFrame(() => {
      setMobileOpen(false);
      setDropdown(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  const navLink = (label, to) => (
    <Link
      to={to}
      className={`whitespace-nowrap font-body text-[11px] lg:text-[12px] font-medium tracking-[0.1em] uppercase transition-colors duration-300 ${
        location.pathname === to ? "text-gold" : "text-cream hover:text-gold"
      }`}
    >
      {label}
    </Link>
  );

  const dropdownLabelClass =
    "mb-4 font-body text-[10px] tracking-[0.16em] uppercase text-gold/90";
  const dropdownItemClass =
    "block py-1.5 font-body text-[13px] leading-[1.45] text-cream/78 transition-colors hover:text-gold";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 border-b border-gold ${
        scrolled ? "bg-[#0C0C0C]/95 backdrop-blur-[10px]" : "bg-[#0C0C0C]"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1680px] items-center justify-between gap-6 px-6 md:px-10 xl:px-12">
        <Link
          to="/"
          className="shrink-0 text-lg lg:text-xl font-normal tracking-tight text-cream font-heading"
        >
          ARRASHA JURISTS LLP
        </Link>

        <div className="hidden md:flex min-w-0 flex-1 items-center justify-end gap-5 lg:gap-6 xl:gap-8">
          <div
            className="relative after:absolute after:left-[-18px] after:right-[-18px] after:top-full after:h-5 after:content-['']"
            onMouseEnter={() => setDropdown("services")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button
              className={`flex h-[72px] items-center whitespace-nowrap font-body text-[11px] lg:text-[12px] font-medium tracking-[0.1em] uppercase transition-colors ${
                location.pathname === "/services" || location.pathname === "/register"
                  ? "text-gold"
                  : "text-cream hover:text-gold"
              }`}
            >
              Practice Areas
            </button>
            {dropdown === "services" && (
              <div className="absolute left-[-18px] top-[calc(100%+18px)] z-20 flex min-w-[560px] border border-gold/15 bg-[#111111]/98 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.48)] backdrop-blur-[10px]">
                <div className="flex-1 border-r border-gold/10 px-6">
                  <div className={dropdownLabelClass}>Company Registration</div>
                  {REG_TYPES.slice(0, 4).map((r, i) => (
                    <Link key={i} to={registerLinkFor(r.slug)} className={dropdownItemClass}>
                      {r.title}
                    </Link>
                  ))}
                </div>
                <div className="flex-1 px-6">
                  <div className={dropdownLabelClass}>Compliance & Filing</div>
                  {SERVICE_CATS.slice(0, 5).map((c) => (
                    <Link key={c.id} to={serviceLinkFor(c.id)} className={dropdownItemClass}>
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative after:absolute after:left-[-18px] after:right-[-18px] after:top-full after:h-5 after:content-['']"
            onMouseEnter={() => setDropdown("expertise")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button
              className={`flex h-[72px] items-center whitespace-nowrap font-body text-[11px] lg:text-[12px] font-medium tracking-[0.1em] uppercase transition-colors ${
                location.pathname.startsWith("/expertise") ||
                location.pathname === "/dpdp-navigator"
                  ? "text-gold"
                  : "text-cream hover:text-gold"
              }`}
            >
              Expertise
            </button>
            {dropdown === "expertise" && (
              <div className="absolute left-[-18px] top-[calc(100%+18px)] z-20 min-w-[320px] border border-gold/15 bg-[#111111]/98 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.48)] backdrop-blur-[10px]">
                {EXPERTISE.map((e) => (
                  <Link
                    key={e.id}
                    to={`/expertise/${e.id}`}
                    className={`${dropdownItemClass} px-6`}
                  >
                    {e.title}
                  </Link>
                ))}
                <div className="mx-6 my-2 h-px bg-gold/10" />
                <Link
                  to="/dpdp-navigator"
                  className="block px-6 py-1.5 font-body text-[13px] leading-[1.45] text-gold transition-colors hover:text-gold-light"
                >
                  DPDP Navigator &rarr;
                </Link>
              </div>
            )}
          </div>

          {navLink("Our Jurists", "/people")}
          {navLink("Insights", "/insights")}
          {navLink("The Firm", "/about")}
          <Link
            to="/contact"
            className={`whitespace-nowrap font-body text-[11px] lg:text-[12px] font-medium tracking-[0.1em] uppercase transition-colors ${
              location.pathname === "/contact"
                ? "text-gold border-b border-gold pb-1"
                : "text-cream hover:text-gold"
            }`}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="shrink-0 whitespace-nowrap bg-gold px-4 lg:px-5 xl:px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#503804] transition-all hover:opacity-80 font-body"
          >
            Consultation
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5"
          aria-label="Toggle menu"
        >
          <div
            className={`w-5 h-0.5 bg-cream mb-[5px] transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <div
            className={`w-5 h-0.5 bg-cream mb-[5px] transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-5 h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#151515] px-6 py-5 flex flex-col gap-3 max-h-[70vh] overflow-y-auto border-t border-gold/20">
          <div className="font-body text-[10px] tracking-[0.15em] uppercase text-gold">
            Registration
          </div>
          <Link to="/register" className="font-body text-[13px] text-cream">
            Company Registration
          </Link>
          <div className="font-body text-[10px] tracking-[0.15em] uppercase text-gold mt-2">
            Services
          </div>
          <Link to="/services" className="font-body text-[13px] text-cream/70">
            All Services
          </Link>
          <div className="font-body text-[10px] tracking-[0.15em] uppercase text-gold mt-2">
            Expertise
          </div>
          {EXPERTISE.map((e) => (
            <Link
              key={e.id}
              to={`/expertise/${e.id}`}
              className="font-body text-[13px] text-cream/70"
            >
              {e.title}
            </Link>
          ))}
          <div className="h-px bg-gold/10 mt-2" />
          <Link to="/dpdp-navigator" className="font-body text-[13px] text-gold">
            DPDP Navigator
          </Link>
          <Link to="/people" className="font-body text-[13px] text-cream/70">
            Our Jurists
          </Link>
          <Link to="/insights" className="font-body text-[13px] text-cream/70">
            Insights
          </Link>
          <Link to="/about" className="font-body text-[13px] text-cream/70">
            The Firm
          </Link>
          <Link to="/contact" className="font-body text-[13px] text-cream/70">
            Contact
          </Link>
          <Link
            to="/contact"
            className="mt-3 bg-gold text-[#503804] px-6 py-3 text-[12px] font-medium uppercase tracking-widest text-center font-body"
          >
            Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
  const registerLinkFor = (slug) => `/register?entity=${slug}`;
  const serviceLinkFor = (categoryId) => `/services?category=${categoryId}`;
