import { Fraunces } from "next/font/google";
import Image from "next/image";

import fundLoanImg from "@/assets/lenders/fund.svg";
import axosImg from "@/assets/lenders/axos.png";
import lendImg from "@/assets/lenders/LendSure-Logo-SVG.svg";
import rocketImg from "@/assets/lenders/www.rocketpro.com_.png";
import canterImg from "@/assets/lenders/center-street.png";
import stremImg from "@/assets/lenders/loanstream.png";
import silverImg from "@/assets/lenders/silver-hill-funding-logo-3905714355.png";
import nubridgeImg from "@/assets/lenders/NuBridge.jpg";
import hmacImg from "@/assets/lenders/HMAC.avif";
import uwmImg from "@/assets/lenders/uwm.jpg";
import homebridgeImg from "@/assets/lenders/homebridge.png";
import plazaImg from "@/assets/lenders/plaza.png";
import carringtomImg from "@/assets/lenders/carrington.jpg";
import smartImg from "@/assets/lenders/smartfi.png";
import changeImg from "@/assets/lenders/change.png";
import acraImg from "@/assets/lenders/acra.png";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function LenderMarquee() {
  // Map imported images to an array for clean iteration
  const lenderLogos = [
    // { src: fundLoanImg, alt: "Fund Loan" },
    { src: axosImg, alt: "Axos" },
    { src: lendImg, alt: "LendSure" },
    { src: rocketImg, alt: "Rocket Pro" },
    { src: canterImg, alt: "Center Street Lending" },
    { src: stremImg, alt: "LoanStream" },
    { src: silverImg, alt: "Silver Hill Funding" },
    { src: nubridgeImg, alt: "NuBridge" },
    { src: hmacImg, alt: "HMAC" },
    { src: uwmImg, alt: "UWM" },
    { src: homebridgeImg, alt: "Homebridge" },
    { src: plazaImg, alt: "Plaza" },
    { src: carringtomImg, alt: "Carrington" },
    { src: smartImg, alt: "SmartFi" },
    { src: changeImg, alt: "Change" },
    { src: acraImg, alt: "Acra" },
  ];

  return (
    <section
      className="border-b border-line overflow-hidden py-10"
      id="lenders"
    >
      <p className="uppercase text-sm text-center text-ink-2 tracking-wider mb-8 font-semibold">
        A sampling of the 100+ lenders we shop on your behalf
      </p>

      <div className="relative w-full">
        {/* Gradient overlays to fade the edges of the marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary-bg to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-fit">
          {/* First set of items */}
          <div className="flex shrink-0 animate-marquee items-center gap-16 px-8">
            {lenderLogos.map((logo, i) => (
              <div
                key={`logo-1-${i}`}
                className="flex items-center justify-center shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Second set (exact duplicate) for infinite scroll illusion */}
          <div
            className="flex shrink-0 animate-marquee items-center gap-16 px-8"
            aria-hidden="true"
          >
            {lenderLogos.map((logo, i) => (
              <div
                key={`logo-2-${i}`}
                className="flex items-center justify-center shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
