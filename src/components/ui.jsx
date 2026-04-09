import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

export function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export function Button({ children, to, onClick, outline = false, small = false, className = "" }) {
  const base = `inline-block font-body uppercase tracking-[0.1em] cursor-pointer transition-all duration-300 border border-gold ${
    small ? "text-[10.5px] px-5 py-2.5" : "text-[11.5px] px-7 py-3"
  } ${
    outline
      ? "bg-transparent text-gold hover:bg-gold-faint"
      : "bg-gold text-primary hover:bg-gold-light"
  } ${className}`;

  if (to) {
    return <Link to={to} className={base}>{children}</Link>;
  }
  return <button onClick={onClick} className={base}>{children}</button>;
}

export function Label({ children }) {
  return (
    <div className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
      {children}
    </div>
  );
}

export function SectionTitle({ children, size = "text-[clamp(24px,3.2vw,36px)]" }) {
  return (
    <h2 className={`font-heading ${size} text-cream font-normal leading-tight`}>
      {children}
    </h2>
  );
}

export function Card({ children, onClick, to, className = "" }) {
  const base = `bg-card hover:bg-card-hover transition-colors duration-300 ${className}`;

  if (to) {
    return <Link to={to} className={`block ${base}`}>{children}</Link>;
  }
  if (onClick) {
    return <button onClick={onClick} className={`block w-full text-left ${base}`}>{children}</button>;
  }
  return <div className={base}>{children}</div>;
}

export function BrandText({ size = "text-xl" }) {
  return (
    <span className={`font-heading ${size} text-cream`}>
      Arrasha <span className="text-gold">Jurists</span>
    </span>
  );
}

export function GoldDash() {
  return <span className="text-gold shrink-0 mt-0.5">—</span>;
}
