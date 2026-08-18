import type { Metadata } from "next";
import Link from "next/link";
import CreCalculator from "@/components/site/LoanPrograms/CommercialLoans/CreCalculator";

export const metadata: Metadata = {
  title: "Commercial Real Estate Loans | MyLoanDesk",
  description:
    "Commercial real estate financing from $350K to $10M+, including special-use properties like hotels, self-storage, and gas stations. Estimate your payment and loan-to-value with our free calculator.",
  alternates: {
    canonical:
      "https://www.myloandesk.com/loan-programs/commercial-real-estate-loans/",
  },
  openGraph: {
    title: "Commercial Real Estate Loans | MyLoanDesk",
    description:
      "Financing solutions for businesses, investors, and developers — including special-use properties many lenders won’t touch. Estimate your payment with our free calculator.",
    url: "https://www.myloandesk.com/loan-programs/commercial-real-estate-loans/",
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
      name: "What's the difference between an SBA 7(a) and an SBA 504 loan for commercial real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An SBA 7(a) loan is more flexible and can combine a real estate purchase with business acquisition costs or working capital in a single loan, typically up to $5 million. An SBA 504 loan is structured specifically for long-term fixed assets like commercial real estate or equipment, often with a lower down payment and a below-market fixed rate on a portion of the loan, but less flexibility to include other business costs.",
      },
    },
    {
      "@type": "Question",
      name: "How much down payment do I need for a commercial real estate loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the program. SBA-backed commercial real estate loans can require as little as 10% down, well below the 20-30% typically required for a conventional commercial mortgage. The exact amount depends on the property type, your business financials, and the specific loan program.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get financing for a special-use property like a hotel or gas station?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, though not every lender finances special-use properties such as hotels, gas stations, car washes, assisted living facilities, restaurants, funeral homes, or golf courses. These properties are often harder to resell if a loan defaults, so it’s worth working with a lender experienced in that specific property type rather than assuming a general commercial lender will approve it.",
      },
    },
    {
      "@type": "Question",
      name: "What loan-to-value can I get on commercial real estate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SBA-backed commercial real estate loans can offer loan-to-value ratios up to around 90%, meaningfully higher than the 70-75% typically available through a conventional commercial mortgage.",
      },
    },
    {
      "@type": "Question",
      name: "Can I combine a business acquisition with a real estate purchase in one loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In many cases, yes. Certain SBA loan structures, particularly the SBA 7(a) program, allow a business acquisition, real estate purchase, and working capital needs to be financed together in a single loan rather than requiring separate financing for each piece.",
      },
    },
    {
      "@type": "Question",
      name: "Are there balloon payments on commercial real estate loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the loan type. Many SBA-backed commercial real estate loans are fully amortizing with no balloon payment, while some conventional commercial mortgages carry a balloon payment after a shorter fixed-rate period. Confirming the amortization structure upfront is worth doing before committing to a program.",
      },
    },
    {
      "@type": "Question",
      name: "How long does commercial real estate financing take to close?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary by loan size, property type, and program, but working with a lender that underwrites in-house rather than routing files through multiple external approvals can meaningfully speed up the process compared to a standard bank timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Can commercial real estate financing include funds for working capital or renovations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some programs, particularly SBA 7(a) loans, allow working capital or renovation and improvement costs to be included alongside the real estate purchase, which can be useful when acquiring a property that needs work before it’s fully operational.",
      },
    },
    {
      "@type": "Question",
      name: "What credit and business history do I need to qualify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Requirements vary by program and lender, but most commercial real estate financing looks at business cash flow and debt service coverage, the owner’s personal credit and financial strength, and time in business, among other factors. A stronger financial profile generally unlocks better rates and higher loan-to-value.",
      },
    },
  ],
};

export default function CommercialRealEstateLoansPage() {
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
          Commercial Real Estate Loans
        </h1>
        <hr className="mb-[26px] border-0 border-t border-[#E6E0D3]" />

        {/* Hero Section */}
        <div className="mb-1.5 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.02em] text-[#B85A1C]">
              Financing solutions for businesses, investors &amp; developers.
            </div>
            <p className="mb-6 max-w-[680px] text-[15.5px] leading-[1.7] text-[#55524C]">
              Whether you're purchasing, refinancing, constructing, or expanding
              commercial real estate, MyLoanDesk provides access to a broad
              network of commercial lenders — including options for special-use
              properties that many lenders won't finance, like hotels,
              self-storage facilities, and gas stations.
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
                <span>Financing from $350K to $10M+</span>
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
                <span>Loan-to-value up to 90% on eligible programs</span>
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
                <span>Special-use properties considered</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <CreCalculator />
        </div>

        <p className="mt-1.5 max-w-[680px] text-[11.5px] text-[#9A9585]">
          Estimate only. Assumes a fully amortizing loan at the entered term.
          Does not include taxes, insurance, or CAM charges. Actual terms depend
          on property type, business financials, and the specific program.
        </p>

        {/* What Is CRE Financing */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          What Is Commercial Real Estate Financing?
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          Commercial real estate financing covers loans used to purchase,
          refinance, or construct property used for business purposes — office
          buildings, retail space, mixed-use buildings, multifamily properties,
          and specialized properties like hotels or self-storage facilities.
          Unlike a residential mortgage, commercial real estate loans are
          typically underwritten around both the property's income potential and
          the borrowing business's overall financial strength.
        </p>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          Several distinct paths exist to finance commercial real estate, each
          with different down payment, term, and eligibility tradeoffs — from
          government-backed SBA programs to conventional commercial mortgages.
        </p>

        {/* Ways to Finance CRE */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Ways to Finance Commercial Real Estate
        </h2>
        <div className="my-[18px] mb-[30px] grid grid-cols-1 gap-3.5 md:grid-cols-3">
          <div className="rounded-xl border border-[#E6E0D3] bg-white p-5">
            <div className="mb-2 font-sans text-xs font-bold uppercase text-[#B85A1C]">
              $350K – $5M &middot; Up to 25 yrs
            </div>
            <h3 className="mb-2 font-serif text-[17px] font-semibold text-[#1C1C1C]">
              SBA 7(a)
            </h3>
            <p className="m-0 text-[13.5px] leading-[1.6] text-[#55524C]">
              The most flexible SBA option — can combine a real estate purchase
              with business acquisition costs or working capital in one loan.
            </p>
          </div>

          <div className="rounded-xl border border-[#E6E0D3] bg-white p-5">
            <div className="mb-2 font-sans text-xs font-bold uppercase text-[#B85A1C]">
              $350K – $5M &middot; Up to 10 yrs
            </div>
            <h3 className="mb-2 font-serif text-[17px] font-semibold text-[#1C1C1C]">
              SBA 504
            </h3>
            <p className="m-0 text-[13.5px] leading-[1.6] text-[#55524C]">
              Built specifically for long-term fixed assets like real estate or
              equipment, often with a lower down payment and a below-market
              fixed-rate portion.
            </p>
          </div>

          <div className="rounded-xl border border-[#E6E0D3] bg-white p-5">
            <div className="mb-2 font-sans text-xs font-bold uppercase text-[#B85A1C]">
              Varies &middot; Up to 30 yrs
            </div>
            <h3 className="mb-2 font-serif text-[17px] font-semibold text-[#1C1C1C]">
              Conventional / Bridge CRE
            </h3>
            <p className="m-0 text-[13.5px] leading-[1.6] text-[#55524C]">
              Traditional commercial mortgages and bridge financing for
              borrowers who don't need or want SBA involvement, or need to move
              faster.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          How Commercial Real Estate Financing Works
        </h2>
        <div className="max-w-[700px] space-y-4">
          {[
            {
              step: "1",
              title: "Tell us about the property and the deal.",
              desc: "Purchase price, property type, and how you plan to use the space.",
            },
            {
              step: "2",
              title: "We match you to the right program.",
              desc: "SBA, conventional, or bridge financing, based on your timeline and financials.",
            },
            {
              step: "3",
              title: "Submit your documentation.",
              desc: "Business financials, personal financial statements, and property details.",
            },
            {
              step: "4",
              title: "Underwriting and appraisal.",
              desc: "The property and the business are evaluated together to structure the final terms.",
            },
            {
              step: "5",
              title: "Close and fund.",
              desc: "Sign your final documents — funds are typically available shortly after closing.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-3.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D9722C] font-sans text-[13px] font-bold text-white">
                {item.step}
              </div>
              <div className="pt-[3px] text-[14.5px] leading-[1.6] text-[#55524C]">
                <strong className="text-[#1C1C1C]">{item.title}</strong>{" "}
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Special-Use Properties We Finance */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Special-Use Properties We Finance
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          Many lenders stay away from "special purpose" commercial properties
          because they can be harder to resell if a loan ever defaults.
          MyLoanDesk works with lenders who finance these property types as a
          regular part of their business, not an exception:
        </p>
        <div className="my-3.5 mb-2 flex max-w-[700px] flex-wrap gap-2">
          {[
            "Hotels & Motels",
            "Self-Storage",
            "Gas Stations",
            "Car Washes",
            "Restaurants",
            "Assisted Living",
            "Funeral Homes",
            "Golf Courses",
            "Medical / Dental Offices",
          ].map((tag, idx) => (
            <span
              key={idx}
              className="rounded-full border border-[#E6E0D3] bg-[#F3EFE6] px-3.5 py-[7px] text-[13px] font-semibold text-[#1C1C1C]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Program Highlights */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Program Highlights
        </h2>
        <div className="mb-3.5 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
          What's included:
        </div>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {[
            "Financing from $350,000 up to $10M+, depending on the program",
            "Down payments as low as 10% on eligible SBA-backed programs",
            "Loan-to-value up to 90% on eligible programs",
            "Terms up to 25–30 years, with many programs carrying no balloon payment",
            "Special-use and niche property types considered",
            "Working capital or renovation costs can often be included alongside the purchase",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Strategic Advantages */}
        <div className="my-[18px] mb-[30px] rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-[26px_28px]">
          <div className="mb-3 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
            Strategic Advantages:
          </div>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            SBA-backed commercial real estate loans typically require far less
            down payment than a conventional commercial mortgage — often 10%
            versus 20-30% — which keeps more of your capital free for the
            business itself rather than tied up in the building.
          </p>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            Combining a business acquisition, real estate purchase, and working
            capital into a single loan (available on some SBA structures)
            simplifies both the closing process and your long-term debt
            structure — one payment instead of several.
          </p>
          <p className="mb-0 text-[14.5px] leading-[1.7] text-[#55524C]">
            Working with a lender or broker experienced in special-use
            properties matters — a lender unfamiliar with financing a hotel or a
            car wash may decline a deal that a specialist lender would approve
            without hesitation.
          </p>
        </div>

        {/* Who This Is For */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Who This Is For
        </h2>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {[
            "Business owners purchasing the building their business operates from",
            "Investors acquiring commercial or mixed-use property",
            "Owners of special-use businesses — hotels, self-storage, gas stations, and similar",
            "Business buyers who want to finance a business acquisition and its real estate together",
            "Owners looking to refinance an existing commercial mortgage for better terms",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Comparison Table */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          SBA 7(a) vs. SBA 504 vs. Conventional Financing
        </h2>
        <div className="overflow-x-auto">
          <table className="my-[18px] mb-[30px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-[#1C1C1C] text-left font-bold text-white">
                <th className="p-[11px_14px]"></th>
                <th className="p-[11px_14px]">SBA 7(a)</th>
                <th className="p-[11px_14px]">SBA 504</th>
                <th className="p-[11px_14px]">Conventional CRE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Typical down payment
                </td>
                <td className="p-[11px_14px] text-[#55524C]">As low as 10%</td>
                <td className="p-[11px_14px] text-[#55524C]">As low as 10%</td>
                <td className="p-[11px_14px] text-[#55524C]">20–30%+</td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Loan amount
                </td>
                <td className="p-[11px_14px] text-[#55524C]">Up to $5M</td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Up to $5M (project cost may be higher)
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Varies by lender
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Can include working capital
                </td>
                <td className="p-[11px_14px] text-[#55524C]">Yes</td>
                <td className="p-[11px_14px] text-[#55524C]">Limited</td>
                <td className="p-[11px_14px] text-[#55524C]">Typically no</td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Rate structure
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Variable, tied to prime
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Fixed portion, often below market
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Varies, may include balloon
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Best for
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Combining real estate with business acquisition or working
                  capital
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Long-term ownership of real estate or major equipment
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Borrowers who don't need or want SBA involvement
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Frequently Asked Questions */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Frequently Asked Questions
        </h2>
        <div>
          {[
            {
              q: "What's the difference between an SBA 7(a) and an SBA 504 loan for commercial real estate?",
              a: "An SBA 7(a) loan is more flexible and can combine a real estate purchase with business acquisition costs or working capital in a single loan, typically up to $5 million. An SBA 504 loan is structured specifically for long-term fixed assets like commercial real estate or equipment, often with a lower down payment and a below-market fixed rate on a portion of the loan, but less flexibility to include other business costs.",
            },
            {
              q: "How much down payment do I need for a commercial real estate loan?",
              a: "It depends on the program. SBA-backed commercial real estate loans can require as little as 10% down, well below the 20-30% typically required for a conventional commercial mortgage. The exact amount depends on the property type, your business financials, and the specific loan program.",
            },
            {
              q: "Can I get financing for a special-use property like a hotel or gas station?",
              a: "Yes, though not every lender finances special-use properties such as hotels, gas stations, car washes, assisted living facilities, restaurants, funeral homes, or golf courses. These properties are often harder to resell if a loan defaults, so it’s worth working with a lender experienced in that specific property type rather than assuming a general commercial lender will approve it.",
            },
            {
              q: "What loan-to-value can I get on commercial real estate?",
              a: "SBA-backed commercial real estate loans can offer loan-to-value ratios up to around 90%, meaningfully higher than the 70-75% typically available through a conventional commercial mortgage.",
            },
            {
              q: "Can I combine a business acquisition with a real estate purchase in one loan?",
              a: "In many cases, yes. Certain SBA loan structures, particularly the SBA 7(a) program, allow a business acquisition, real estate purchase, and working capital needs to be financed together in a single loan rather than requiring separate financing for each piece.",
            },
            {
              q: "Are there balloon payments on commercial real estate loans?",
              a: "It depends on the loan type. Many SBA-backed commercial real estate loans are fully amortizing with no balloon payment, while some conventional commercial mortgages carry a balloon payment after a shorter fixed-rate period. Confirming the amortization structure upfront is worth doing before committing to a program.",
            },
            {
              q: "How long does commercial real estate financing take to close?",
              a: "Timelines vary by loan size, property type, and program, but working with a lender that underwrites in-house rather than routing files through multiple external approvals can meaningfully speed up the process compared to a standard bank timeline.",
            },
            {
              q: "Can commercial real estate financing include funds for working capital or renovations?",
              a: "Some programs, particularly SBA 7(a) loans, allow working capital or renovation and improvement costs to be included alongside the real estate purchase, which can be useful when acquiring a property that needs work before it’s fully operational.",
            },
            {
              q: "What credit and business history do I need to qualify?",
              a: "Requirements vary by program and lender, but most commercial real estate financing looks at business cash flow and debt service coverage, the owner’s personal credit and financial strength, and time in business, among other factors. A stronger financial profile generally unlocks better rates and higher loan-to-value.",
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
            href="/contact"
            className="flex w-full items-center justify-center rounded-[10px] border border-[#E7DEC7] bg-[#F5EFDF] p-4 font-sans text-[15px] font-bold text-[#1C1C1C] transition-colors hover:bg-[#EFE7D3]"
          >
            Contact Us Now
          </Link>
          <div className="mt-3.5 text-center text-[12.5px] text-[#8F8A7C]">
            Have a property or deal in mind — including a special-use property?
            Share the details and a loan officer will map out your financing
            options the same day.
          </div>
        </div>
      </section>
    </div>
  );
}
