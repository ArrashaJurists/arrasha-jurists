import { useState } from "react";
import { BRAND_FULL } from "../data";

export default function BCIModal() {
  const [accepted, setAccepted] = useState(
    () => sessionStorage.getItem("bci-accepted") === "true"
  );

  if (accepted) return null;

  const handleAccept = () => {
    sessionStorage.setItem("bci-accepted", "true");
    setAccepted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C0C0C]/95 backdrop-blur-sm">
      <div className="relative bg-[#151515] border border-gold w-full max-w-[520px] p-12 flex flex-col items-center text-center mx-5">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/30" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/30" />

        {/* Firm identity */}
        <div className="mb-8 flex flex-col items-center">
          <h2 className="font-heading text-[28px] leading-none tracking-normal text-cream">
            Arrasha <span className="text-gold">Jurists</span>
          </h2>
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-cream/60 mt-2">LLP</span>
        </div>

        {/* Divider */}
        <div className="w-8 h-px bg-gold mb-8" />

        {/* Disclaimer */}
        <div className="mb-10">
          <p className="font-body font-light text-[13px] leading-relaxed text-[#D1C5B5] text-center">
            As per the rules of the Bar Council of India, {BRAND_FULL} is not
            permitted to solicit work or advertise. By clicking "I UNDERSTAND &
            AGREE" below, the user acknowledges that there has been no
            advertisement, personal communication, solicitation, invitation or
            inducement of any sort whatsoever from us or any of our members to
            solicit any work through this website. The user wishes to gain more
            information about us for his/her own information and use.
          </p>
        </div>

        {/* Action button */}
        <button
          onClick={handleAccept}
          className="w-full bg-gold hover:bg-[#B39154] text-[#503804] py-4 px-8 text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 font-body"
        >
          I Understand & Agree
        </button>
      </div>
    </div>
  );
}
