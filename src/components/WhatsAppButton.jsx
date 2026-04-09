import { Link } from "react-router-dom";

export default function WhatsAppButton() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-5 right-5 z-50 rounded-full border border-gold/18 bg-primary/88 px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl hover:border-gold/36 hover:-translate-y-0.5"
      aria-label="Open quick contact"
    >
      <span className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-faint text-gold">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4A2.5 2.5 0 0 1 3 13.5zm2.5-.5a.5.5 0 0 0-.5.5v8c0 .276.224.5.5.5H7.5v1.5L9.625 14h7.875a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5z" />
          </svg>
        </span>
        <span className="hidden sm:block">
          <span className="block font-body text-[9px] tracking-[0.16em] uppercase text-gold">Quick Contact</span>
          <span className="block font-body text-[12px] text-cream">Tell us what you need</span>
        </span>
      </span>
    </Link>
  );
}
