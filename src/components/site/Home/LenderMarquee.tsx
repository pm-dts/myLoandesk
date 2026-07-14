import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function LenderMarquee() {
  // Placeholder lender names (replace with actual SVG logos/images in production)
  const lenders = [
    "Rocket Mortgage",
    "United Wholesale",
    "Chase",
    "Wells Fargo",
    "CitiBank",
    "Bank of America",
    "PNC Bank",
    "Guaranteed Rate",
    "LoanDepot",
  ];

  return (
    <section className="border-b border-line bg-primary-bg/50 overflow-hidden py-8">
      <p className="uppercase text-sm text-center text-ink-2 tracking-wider mb-6">
        A sampling of the 20+ lenders we shop on your behalf
      </p>
      <div className="relative w-full border- border-line/50">
        {/* Gradient overlays to fade the edges of the marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-primary-bg to-transparent z-10 pointer-events-none pt-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-primary-bg to-transparent z-10 pointer-events-none pt-10"></div>

        <div className="flex w-fit">
          {/* First set of items */}
          <div
            className={`flex shrink-0 animate-marquee items-center gap-16 px-8 text-xl font-display text-ink ${fraunces.className} `}
          >
            {lenders.map((lender, i) => (
              <span
                key={i}
                className="hover:text-moss-deep transition-colors cursor-default"
              >
                {lender}
              </span>
            ))}
          </div>
          {/* Second set (exact duplicate) for infinite scroll illusion */}
          <div
            className={`flex shrink-0 animate-marquee items-center gap-16 px-8 text-xl font-display text-ink ${fraunces.className} `}
            aria-hidden="true"
          >
            {lenders.map((lender, i) => (
              <span
                key={`dup-${i}`}
                className="hover:text-moss-deep transition-colors cursor-default"
              >
                {lender}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
