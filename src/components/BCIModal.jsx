import { useState } from "react";
import { BrandText, Button } from "./ui";
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary/95 backdrop-blur-lg">
      <div className="max-w-[520px] mx-5 p-12 bg-card border border-gold/10 text-center">
        <BrandText size="text-[28px]" />
        <div className="font-body text-[11px] text-mid mt-0.5 tracking-[0.08em]">LLP</div>
        <div className="w-8 h-px bg-gold mx-auto my-5" />
        <p className="font-body text-[13px] text-light leading-relaxed mb-1.5">
          As per the rules of the Bar Council of India, law firms are not permitted to solicit work or advertise.
        </p>
        <p className="font-body text-[12px] text-mid leading-relaxed mb-7">
          By proceeding, you acknowledge there has been no solicitation from {BRAND_FULL}.
          Information obtained shall not be construed as legal advice.
        </p>
        <Button onClick={handleAccept}>I Understand & Agree</Button>
      </div>
    </div>
  );
}
