import type { Metadata } from "next";
import Link from "next/link";
import BridgeCalculator from "@/components/site/LoanPrograms/BridgeLoans/BridgeCalculator";

export const metadata: Metadata = {
  title:
    "Bridge Loans: Fast, Flexible Residential & Commercial Financing | MyLoanDesk",
  description:
    "Bridge loans for residential buy-before-you-sell transitions and commercial property acquisitions or repositioning. Close in days with interest-only options and flexible terms.",
  alternates: {
    canonical: "/loan-programs/bridge-loans/",
  },
  openGraph: {
    title:
      "Bridge Loans: Fast, Flexible Residential & Commercial Financing | MyLoanDesk",
    description:
      "Short-term bridge financing for residential and commercial real estate. Move fast, bypass contingencies, and secure property before permanent financing is in place.",
    url: "/loan-programs/bridge-loans/",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to sell my current home before getting a residential bridge loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — that is the primary purpose of a bridge loan. It allows you to access equity in your current home to fund your next purchase before the sale closes.",
      },
    },
    {
      "@type": "Question",
      name: "Can a bridge loan be used for a property that needs renovation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, particularly on the commercial side. Bridge loans are commonly used to fund the acquisition and renovation of value-add properties before refinancing into permanent debt once stabilized.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between a bridge loan and a hard money loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While both are short-term and asset-focused, bridge loans are typically structured for a clear transition (sale, refinance, or stabilization) with a defined exit strategy, whereas hard money loans are used broadly across short-turn financing including fix-and-flips.",
      },
    },
    {
      "@type": "Question",
      name: "How do I pay off a bridge loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most bridge loans are paid off through one of three exit strategies: sale of the acquired property, refinance into permanent long-term financing, or (for residential) the sale of your previous home.",
      },
    },
    {
      "@type": "Question",
      name: "Is a bridge loan more expensive than a conventional loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally, yes. Rates and fees are higher than conventional financing because of the short duration, speed of execution, and underwriting flexibility. The trade-off allows buyers and investors to execute time-sensitive opportunities without contingencies.",
      },
    },
  ],
};

export default function BridgeLoansPage() {
  return (
    <div className="min-h-screen bg-[#EDEAE2] text-[#55524C] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-[900px] bg-[#FBF8F2] px-[22px] py-8 sm:px-14 sm:py-[44px] sm:pb-[60px]">
        {/* Back Link */}
        <Link
          href="/loan-programs"
          className="mb-[18px] inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#55524C] transition-colors hover:text-[#B85A1C]"
        >
          &larr; Back to Loan Programs
        </Link>

        {/* Header */}
        <h1 className="mb-[18px] font-serif text-[36px] font-bold leading-[1.15] text-[#1C1C1C]">
          Bridge Loans
        </h1>
        <hr className="mb-[26px] border-0 border-t border-[#E6E0D3]" />

        {/* Hero Section */}
        <div className="mb-1.5 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.02em] text-[#B85A1C]">
              Fast, Flexible Financing for Residential and Commercial Real
              Estate
            </div>
            <p className="mb-6 max-w-[680px] text-[15.5px] leading-[1.7] text-[#55524C]">
              A bridge loan is short-term financing that &quot;bridges&quot; the
              gap between where you are now and where you need to be — whether
              that&apos;s closing on a new home before your current one sells,
              or acquiring a commercial property before permanent financing is
              in place.
            </p>
            <div className="mt-[18px] flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-[13.5px] text-[#55524C]">
                <svg
                  className="shrink-0"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#D9722C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Funding speed: Close in as fast as 7–14 days</span>
              </div>
              <div className="flex items-center gap-2 text-[13.5px] text-[#55524C]">
                <svg
                  className="shrink-0"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#D9722C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>
                  Terms from 6 to 24 months with interest-only options
                </span>
              </div>
              <div className="flex items-center gap-2 text-[13.5px] text-[#55524C]">
                <svg
                  className="shrink-0"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#D9722C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>
                  Asset-based underwriting across residential &amp; commercial
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <BridgeCalculator />
        </div>

        <p className="mt-1.5 max-w-[680px] text-[11.5px] text-[#9A9585]">
          Estimate only. Assumes interest-only payment structures. Does not
          include origination points, closing costs, taxes, or property
          insurance. Actual terms depend on property equity, asset evaluation,
          and underwriting review.
        </p>

        {/* What Is a Bridge Loan */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          What Is a Bridge Loan?
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          Unlike a conventional mortgage, a bridge loan is built for speed and
          flexibility. Terms typically run 6 to 24 months, funding can close in
          days rather than weeks, and approval is based more on the value and
          equity of the real estate involved than on a lengthy
          income-verification process.
        </p>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          Once your permanent financing, sale, or refinance comes through, the
          bridge loan is paid off — that&apos;s the &quot;exit strategy&quot;
          every bridge loan is built around. Bridge loans work for both
          residential and commercial properties, though the way they&apos;re
          structured and underwritten differs between the two.
        </p>

        {/* Residential Bridge Loans */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Residential Bridge Loans
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          Residential bridge loans are most common for homeowners who need to
          buy their next house before selling their current one. Common
          scenarios include:
        </p>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">Buy before you sell:</strong>{" "}
            Access equity in your existing home to fund the down payment or full
            purchase of the new property.
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              Avoiding contingent offers:
            </strong>{" "}
            Remove sale contingencies to make purchase offers significantly more
            competitive in hot markets.
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              Renovation &amp; staging timing:
            </strong>{" "}
            Close on a new residence while making repairs or staging your
            current home for maximum sale value.
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              Estate &amp; transition liquidity:
            </strong>{" "}
            Bridge the timing gap while an inherited estate is settled or sold.
          </li>
        </ul>

        {/* Commercial Bridge Loans */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Commercial Bridge Loans
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          Commercial bridge loans serve investors, developers, and business
          owners who need to move quickly on a property before long-term
          financing is arranged. Common uses include:
        </p>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              Acquisition before stabilization:
            </strong>{" "}
            Purchasing underperforming multifamily or retail assets that require
            lease-up or renovation before qualifying for conventional financing.
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              Time-sensitive transactions:
            </strong>{" "}
            Fast execution for off-market opportunities, auctions, or strict
            1031 exchange deadlines.
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              Repositioning &amp; capital improvements:
            </strong>{" "}
            Carrying a property through major construction until it becomes
            stabilized and cash-flowing.
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">Maturing debt payoff:</strong>{" "}
            Refinancing notes coming due to avoid default while permanent
            financing packages are assembled.
          </li>
        </ul>

        {/* Commercial Property Types */}
        <h3 className="mb-3 mt-6 font-serif text-[19px] font-semibold text-[#1C1C1C]">
          Eligible Commercial Asset Classes
        </h3>
        <div className="my-3.5 mb-6 flex max-w-[700px] flex-wrap gap-2">
          {[
            "Multifamily (5+ units)",
            "Office Buildings",
            "Retail Centers",
            "Industrial & Warehouse",
            "Mixed-Use Assets",
            "Hospitality Properties",
            "Special Purpose Properties",
          ].map((tag, idx) => (
            <span
              key={idx}
              className="rounded-full border border-[#E6E0D3] bg-[#F3EFE6] px-3.5 py-[7px] text-[13px] font-semibold text-[#1C1C1C]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Comparison Table */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Residential vs. Commercial Bridge Loans
        </h2>
        <div className="overflow-x-auto">
          <table className="my-[18px] mb-[30px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-[#1C1C1C] text-left font-bold text-white">
                <th className="p-[11px_14px]"></th>
                <th className="p-[11px_14px]">Residential Bridge Loan</th>
                <th className="p-[11px_14px]">Commercial Bridge Loan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Primary use
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Buy new home before selling current one
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Acquire, reposition, or refinance investment property
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Underwriting focus
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Equity in current + new home
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Asset value, business plan, sponsor experience
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Typical term
                </td>
                <td className="p-[11px_14px] text-[#55524C]">6–12 months</td>
                <td className="p-[11px_14px] text-[#55524C]">12–24 months</td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Exit strategy
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Sale of current home or conventional refi
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Refinance into permanent debt (DSCR) or asset sale
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Property types
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Primary residences, second homes
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Multifamily, retail, office, industrial, mixed-use
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Payment structure
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Interest-only or deferred
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Interest-only with balloon at maturity
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Why Choose a Bridge Loan */}
        <div className="my-[18px] mb-[30px] rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-[26px_28px]">
          <div className="mb-3 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
            Why Choose a Bridge Loan:
          </div>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            <strong className="text-[#1C1C1C]">Speed:</strong> Close in days or
            weeks, not months — critical for competitive purchase offers,
            auction acquisitions, or maturing debt deadlines.
          </p>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            <strong className="text-[#1C1C1C]">Flexibility:</strong>{" "}
            Underwriting is centered on real estate value and equity rather than
            rigid debt-to-income and conventional documentation checks.
          </p>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            <strong className="text-[#1C1C1C]">Leverage Timing:</strong> Move on
            high-upside properties immediately rather than waiting for another
            transaction or stabilization cycle to finish.
          </p>
          <p className="mb-0 text-[14.5px] leading-[1.7] text-[#55524C]">
            <strong className="text-[#1C1C1C]">
              Bridge to Permanent Capital:
            </strong>{" "}
            Secure time to optimize property performance before taking out
            long-term conventional, DSCR, or agency loans.
          </p>
        </div>

        {/* Frequently Asked Questions */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Frequently Asked Questions
        </h2>
        <div>
          {[
            {
              q: "Do I need to sell my current home before getting a residential bridge loan?",
              a: "No — that's the point of a bridge loan. It lets you access equity in your current home to fund your next purchase before the sale closes.",
            },
            {
              q: "Can a bridge loan be used for a property that needs renovation?",
              a: "Yes, especially on the commercial side. Bridge loans are commonly used to fund acquisition and renovation of value-add properties before refinancing into permanent financing once the property is stabilized.",
            },
            {
              q: "What's the difference between a bridge loan and a hard money loan?",
              a: "There is overlap — both are short-term and asset-focused — but bridge loans are typically used for a clear transition (sale, refinance, or stabilization) with a defined exit strategy, while hard money loans are often used more broadly for quick-turn financing, including fix-and-flip projects.",
            },
            {
              q: "How do I pay off a bridge loan?",
              a: "Most bridge loans are paid off through one of three exit strategies: sale of the property, refinance into permanent/long-term financing, or (for residential) sale of your previous home.",
            },
            {
              q: "Is a bridge loan more expensive than a conventional loan?",
              a: "Generally, yes — rates and fees are higher than conventional financing because of the short term and speed of execution. The trade-off is flexibility and the ability to move on time-sensitive opportunities that conventional financing can't accommodate.",
            },
          ].map((item, idx, arr) => (
            <div
              key={idx}
              className={`py-4 ${idx !== arr.length - 1 ? "border-b border-[#E6E0D3]" : ""}`}
            >
              <p className="mb-1.5 font-sans text-[15px] font-bold text-[#1C1C1C]">
                {item.q}
              </p>
              <p className="m-0 text-[14.5px] leading-[1.7] text-[#55524C]">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-9">
          <a
            href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#D9722C] p-4 font-sans text-[15px] font-bold text-white transition-colors hover:bg-[#B85A1C]"
          >
            Apply Now &rarr;
          </a>
          <Link
            href="/get-quote"
            className="flex w-full items-center justify-center rounded-[10px] border border-[#E7DEC7] bg-[#F5EFDF] p-4 font-sans text-[15px] font-bold text-[#1C1C1C] transition-colors hover:bg-[#EFE7D3]"
          >
            Get a Personalized Quote
          </Link>
          <div className="mt-3.5 text-center text-[12.5px] text-[#8F8A7C]">
            Ready to explore bridge loan options for your next residential or
            commercial move? Call/text (305) 891-6500 to talk through your
            timeline.
          </div>
        </div>
      </section>
    </div>
  );
}
