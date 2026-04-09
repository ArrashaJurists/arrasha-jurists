import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrandText, Button } from "./ui";
import { REG_TYPES, SERVICE_CATS, EXPERTISE } from "../data";

const FIRM_LINKS = [
  ["People", "/people"],
  ["Insights", "/insights"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

function isPathActive(pathname, target) {
  return pathname === target || pathname.startsWith(`${target}/`);
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (active) => `font-body text-[11px] tracking-[0.12em] uppercase px-3 py-2 transition-colors duration-300 ${
    active ? "text-gold" : "text-light hover:text-gold"
  }`;

  const dropdownButtonClass = (active) => `font-body text-[11px] tracking-[0.12em] uppercase px-3 py-2 transition-colors duration-300 ${
    active ? "text-gold" : "text-light hover:text-gold"
  }`;

  const dropdownPanel =
    "absolute left-0 top-full mt-4 overflow-hidden rounded-[28px] border border-gold/10 bg-[linear-gradient(180deg,rgba(25,25,25,0.98),rgba(16,16,16,0.98))] shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl";

  const closeOnBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setDropdown(null);
    }
  };

  const closeMenus = () => {
    setMobileOpen(false);
    setDropdown(null);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-primary/82 border-b border-gold/8 backdrop-blur-xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1220px] mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between gap-4 min-h-[78px]">
          <Link to="/" onClick={closeMenus} className="flex items-center gap-3 shrink-0">
            <div>
              <BrandText size="text-[21px]" />
              <div className="hidden sm:block font-body text-[10px] tracking-[0.16em] uppercase text-mid mt-0.5">
                Strategic Legal Counsel
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setDropdown("services")}
              onMouseLeave={() => setDropdown(null)}
              onFocus={() => setDropdown("services")}
              onBlur={closeOnBlur}
            >
              <button
                className={dropdownButtonClass(
                  isPathActive(location.pathname, "/services") || isPathActive(location.pathname, "/register")
                )}
                onClick={() => setDropdown(dropdown === "services" ? null : "services")}
                aria-expanded={dropdown === "services"}
                aria-haspopup="true"
              >
                Services
              </button>
              {dropdown === "services" && (
                <div className={`${dropdownPanel} w-[620px] p-6`}>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-3">
                        Start a Company
                      </div>
                      <p className="font-body text-[12px] text-mid leading-relaxed mb-4">
                        Registration, structuring, and launch support handled end to end.
                      </p>
                      <div className="flex flex-col gap-2">
                        {REG_TYPES.slice(0, 4).map((item) => (
                          <Link
                            key={item.slug}
                            to="/register"
                            onClick={closeMenus}
                            className="rounded-2xl border border-gold/6 px-4 py-3 font-body text-[12px] text-light hover:text-cream hover:border-gold/18"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-3">
                        Ongoing Support
                      </div>
                      <p className="font-body text-[12px] text-mid leading-relaxed mb-4">
                        Compliance, filings, tax, IP, and documentation in one operating layer.
                      </p>
                      <div className="flex flex-col gap-2">
                        {SERVICE_CATS.slice(0, 5).map((item) => (
                          <Link
                            key={item.id}
                            to="/services"
                            onClick={closeMenus}
                            className="rounded-2xl border border-gold/6 px-4 py-3 font-body text-[12px] text-light hover:text-cream hover:border-gold/18"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setDropdown("expertise")}
              onMouseLeave={() => setDropdown(null)}
              onFocus={() => setDropdown("expertise")}
              onBlur={closeOnBlur}
            >
              <button
                className={dropdownButtonClass(
                  isPathActive(location.pathname, "/expertise") || location.pathname === "/dpdp-navigator"
                )}
                onClick={() => setDropdown(dropdown === "expertise" ? null : "expertise")}
                aria-expanded={dropdown === "expertise"}
                aria-haspopup="true"
              >
                Expertise
              </button>
              {dropdown === "expertise" && (
                <div className={`${dropdownPanel} w-[360px] p-5`}>
                  <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-3">
                    Strategic Matters
                  </div>
                  <div className="flex flex-col gap-2">
                    {EXPERTISE.map((item) => (
                      <Link
                        key={item.id}
                        to={`/expertise/${item.id}`}
                        onClick={closeMenus}
                        className="rounded-2xl border border-gold/6 px-4 py-3 font-body text-[12px] text-light hover:text-cream hover:border-gold/18"
                      >
                        <span className="block text-cream mb-1">{item.title}</span>
                        <span className="block text-mid">{item.tagline}</span>
                      </Link>
                    ))}
                    <Link
                      to="/dpdp-navigator"
                      onClick={closeMenus}
                      className="rounded-2xl border border-gold/10 bg-gold-faint px-4 py-3 font-body text-[12px] text-gold hover:border-gold/24"
                    >
                      Explore the DPDP Navigator
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {FIRM_LINKS.map(([label, path]) => (
              <Link key={path} to={path} onClick={closeMenus} className={linkClass(isPathActive(location.pathname, path))}>
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:block text-right">
              <div className="font-body text-[9px] tracking-[0.14em] uppercase text-gold">
                Response Window
              </div>
              <div className="font-body text-[11px] text-light mt-1">Scope and fees within 24 hours</div>
            </div>
            <Button to="/contact" onClick={closeMenus} small className="min-w-[160px]">
              Start a Matter
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-full border border-gold/12 bg-card/80 p-2.5"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className={`w-5 h-0.5 bg-cream mb-[5px] ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <div className={`w-5 h-0.5 bg-cream mb-[5px] ${mobileOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 bg-cream ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gold/8 bg-[linear-gradient(180deg,rgba(18,18,18,0.98),rgba(10,10,10,0.98))] backdrop-blur-xl">
          <div className="max-w-[1220px] mx-auto px-5 sm:px-6 py-5 flex flex-col gap-5">
            <div className="soft-panel rounded-[28px] p-5">
              <div className="font-body text-[9px] tracking-[0.16em] uppercase text-gold mb-2">
                Start Here
              </div>
              <p className="font-body text-[13px] text-light leading-relaxed mb-4">
                Tell us whether you are registering, staying compliant, or handling a strategic issue.
              </p>
              <Button to="/contact" onClick={closeMenus} small className="w-full">
                Request a Callback
              </Button>
            </div>

            <div className="grid gap-4">
              <div>
                <div className="font-body text-[9px] tracking-[0.14em] uppercase text-gold mb-2">Services</div>
                <div className="grid gap-2">
                  <Link to="/register" onClick={closeMenus} className="rounded-2xl border border-gold/8 px-4 py-3 font-body text-[12px] text-cream">
                    Company Registration
                  </Link>
                  <Link to="/services" onClick={closeMenus} className="rounded-2xl border border-gold/8 px-4 py-3 font-body text-[12px] text-light">
                    All Services
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-body text-[9px] tracking-[0.14em] uppercase text-gold mb-2">Expertise</div>
                <div className="grid gap-2">
                  {EXPERTISE.map((item) => (
                    <Link
                      key={item.id}
                      to={`/expertise/${item.id}`}
                      onClick={closeMenus}
                      className="rounded-2xl border border-gold/8 px-4 py-3 font-body text-[12px] text-light"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link to="/dpdp-navigator" onClick={closeMenus} className="rounded-2xl border border-gold/10 bg-gold-faint px-4 py-3 font-body text-[12px] text-gold">
                    DPDP Navigator
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-body text-[9px] tracking-[0.14em] uppercase text-gold mb-2">Firm</div>
                <div className="grid gap-2">
                  {FIRM_LINKS.map(([label, path]) => (
                    <Link key={path} to={path} onClick={closeMenus} className="rounded-2xl border border-gold/8 px-4 py-3 font-body text-[12px] text-light">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
