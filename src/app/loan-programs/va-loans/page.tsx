// app/loan-programs/va-loans/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import VaCalculator from "@/components/site/LoanPrograms/VALoans/VACalculator";

export const metadata: Metadata = {
  title: "VA Loans — Zero Down Payment for Eligible Veterans | MyLoanDesk",
  description:
    "VA loans with 0% down, no monthly mortgage insurance, and competitive rates for eligible veterans, active duty service members, and surviving spouses. Use our free calculator to estimate your VA funding fee before you apply.",
  alternates: {
    canonical: "https://www.myloandesk.com/loan-programs/va-loans/",
  },
  openGraph: {
    title: "VA Loans — Zero Down Payment for Eligible Veterans | MyLoanDesk",
    description:
      "Zero down payment, no monthly mortgage insurance, and a benefit you can use again and again. Estimate your VA funding fee with our free calculator.",
    url: "https://www.myloandesk.com/loan-programs/va-loans/",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I have to make a down payment for a VA loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Eligible VA borrowers can finance up to 100% of the purchase price with no down payment required, one of the program's signature benefits. A down payment is never required, though making one can reduce your VA funding fee.",
      },
    },
    {
      "@type": "Question",
      name: "What is the VA funding fee and how much is it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The VA funding fee is a one-time fee that helps sustain the VA loan program, replacing the need for monthly mortgage insurance. For 2026, first-time use with less than 5% down is 2.15% of the loan amount; subsequent use with less than 5% down is 3.30%. Putting 5% or more down lowers the fee to 1.50%, and 10% or more down lowers it to 1.25%, regardless of prior use.",
      },
    },
    {
      "@type": "Question",
      name: "Am I exempt from the VA funding fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veterans receiving VA disability compensation, Purple Heart recipients on active duty, and certain surviving spouses receiving Dependency and Indemnity Compensation (DIC) are typically exempt from the VA funding fee entirely.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Certificate of Eligibility (COE) and how do I get one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Certificate of Eligibility is the document that confirms your VA loan entitlement to a lender. It can be requested through the VA's eBenefits portal, by mail, or in many cases pulled directly by your lender during the application process, so you don't need to obtain it yourself beforehand.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my VA loan benefit more than once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. VA loan entitlement can typically be reused for future home purchases, including after paying off a prior VA loan or, in many cases, while still carrying one, depending on your remaining entitlement.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a maximum VA loan amount?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most eligible veterans with full entitlement, there is no VA-imposed maximum loan amount. Lenders may still apply their own underwriting limits for larger loan amounts, but the VA guaranty itself is no longer capped by the county loan limits that applied before 2020.",
      },
    },
    {
      "@type": "Question",
      name: "Do VA loans require mortgage insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. VA loans do not require monthly private mortgage insurance (PMI) or mortgage insurance premiums (MIP), regardless of down payment. The one-time VA funding fee replaces the need for ongoing mortgage insurance.",
      },
    },
    {
      "@type": "Question",
      name: "What is a VA IRRRL (VA Streamline Refinance)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A VA Interest Rate Reduction Refinance Loan (IRRRL) is a simplified refinance option for existing VA loan holders, typically requiring less documentation and often no new appraisal or credit underwriting, with a lower funding fee of just 0.50%.",
      },
    },
    {
      "@type": "Question",
      name: "Can National Guard and Reserve members use VA loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. National Guard and Reserve members who meet the required service length can qualify for VA loans, and pay the same funding fee rates as active duty service members and veterans.",
      },
    },
  ],
};

export default function VaLoansPage() {
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
        <h1 className="mb-[18px] font-serif text-[38px] font-bold leading-[1.15] text-[#1C1C1C]">
          VA Loans
        </h1>
        <hr className="mb-[26px] border-0 border-t border-[#E6E0D3]" />

        {/* Hero Section */}
        <div className="mb-1.5 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.02em] text-[#B85A1C]">
              Zero down. Zero PMI. Earned through service.
            </div>
            <p className="mb-6 max-w-[680px] text-[15.5px] leading-[1.7] text-[#55524C]">
              VA loans give eligible veterans, active duty service members,
              National Guard and Reserve members, and certain surviving spouses
              one of the strongest home financing benefits available in the U.S.
              — the ability to finance up to 100% of a home's purchase price
              without private mortgage insurance, backed by the U.S. Department
              of Veterans Affairs.
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
                <span>No down payment required</span>
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
                <span>No monthly mortgage insurance</span>
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
                <span>No maximum loan amount for full entitlement</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <VaCalculator />
        </div>

        <p className="mt-1.5 max-w-[680px] text-[11.5px] text-[#9A9585]">
          Estimate only, based on 2026 VA funding fee rates. Assumes the funding
          fee is financed into the loan and a 30-year term. Does not include
          property taxes, insurance, or HOA dues. Confirm your exact fee and
          entitlement with a Certificate of Eligibility.
        </p>

        {/* What Is a VA Loan */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          What Is a VA Loan?
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          A VA loan is a mortgage guaranteed by the U.S. Department of Veterans
          Affairs, made available to eligible veterans, active duty service
          members, National Guard and Reserve members, and certain surviving
          spouses. The VA doesn't lend the money directly — it guarantees a
          portion of the loan, which allows approved lenders like MyLoanDesk to
          offer terms that are difficult to match anywhere else in the mortgage
          market, most notably zero down payment and no monthly mortgage
          insurance.
        </p>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          In exchange for that guarantee, most VA loans include a one-time VA
          funding fee, which we break down in detail below — along with who's
          exempt from paying it entirely.
        </p>

        {/* How It Works */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          How VA Financing Works
        </h2>
        <div className="max-w-[700px] space-y-4">
          {[
            {
              step: "1",
              title: "Confirm your eligibility.",
              desc: "We help pull your Certificate of Eligibility (COE) to confirm your VA entitlement — you don't need to obtain it yourself first.",
            },
            {
              step: "2",
              title: "Get pre-approved.",
              desc: "We review your credit, income, and debts to confirm your VA buying power.",
            },
            {
              step: "3",
              title: "Shop with confidence.",
              desc: "A VA pre-approval letter shows sellers you're a serious, qualified buyer.",
            },
            {
              step: "4",
              title: "Appraisal and underwriting.",
              desc: "VA loans use a VA-specific appraisal to confirm the property meets minimum property requirements.",
            },
            {
              step: "5",
              title: "Close on your home.",
              desc: "Sign your final documents and close — often with little to no down payment required.",
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

        {/* Program Highlights */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Program Highlights
        </h2>
        <div className="mb-3.5 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
          What's included:
        </div>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {[
            "0% down payment options for eligible borrowers",
            "No monthly private mortgage insurance (PMI) or MIP, regardless of down payment",
            "No VA-imposed maximum loan amount for borrowers with full entitlement",
            "Competitive, often below-market interest rates",
            "Reusable benefit — entitlement can often be used again for future purchases",
            "VA IRRRL streamline refinance available for existing VA loan holders",
            "Available for single-family homes, condos, and 2-4 unit owner-occupied properties",
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
            Skipping a down payment doesn't just lower your cash needed at
            closing — it also means keeping more savings in reserve, or using
            those funds toward moving costs, furnishings, or an emergency fund
            instead of tying it all up in home equity on day one.
          </p>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            Because there's no ongoing mortgage insurance, VA borrowers often
            have a meaningfully lower monthly payment than an FHA or
            low-down-payment conventional borrower financing the same home —
            insurance alone can add hundreds of dollars a month on other loan
            types.
          </p>
          <p className="mb-0 text-[14.5px] leading-[1.7] text-[#55524C]">
            The VA funding fee, unlike monthly mortgage insurance, is a one-time
            cost — and many veterans avoid it entirely through a disability
            exemption, making VA financing one of the most genuinely
            cost-effective paths to homeownership available.
          </p>
        </div>

        {/* Who This Is For */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Who VA Loans Are For
        </h2>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {[
            "Active duty service members meeting minimum service requirements",
            "Veterans who served the qualifying minimum length of active duty",
            "National Guard and Reserve members who meet service requirements",
            "Certain surviving spouses of veterans who died in service or from a service-connected disability",
            "Buyers who want to avoid a down payment and ongoing mortgage insurance entirely",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Funding Fee Rates */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          VA Funding Fee Rates (2026)
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          The VA funding fee scales with your down payment and whether this is
          your first or a subsequent use of your VA benefit:
        </p>
        <div className="overflow-x-auto">
          <table className="my-3.5 mb-2 max-w-[640px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b-2 border-[#E6E0D3] bg-[#F3EFE6] text-left font-bold text-[#1C1C1C]">
                <th className="p-[9px_12px]">Down Payment</th>
                <th className="p-[9px_12px]">First-Time Use</th>
                <th className="p-[9px_12px]">Subsequent Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[9px_12px] text-[#55524C]">Less than 5%</td>
                <td className="p-[9px_12px] text-[#55524C]">2.15%</td>
                <td className="p-[9px_12px] text-[#55524C]">3.30%</td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[9px_12px] text-[#55524C]">5% – 9.99%</td>
                <td className="p-[9px_12px] text-[#55524C]">1.50%</td>
                <td className="p-[9px_12px] text-[#55524C]">1.50%</td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[9px_12px] text-[#55524C]">10% or more</td>
                <td className="p-[9px_12px] text-[#55524C]">1.25%</td>
                <td className="p-[9px_12px] text-[#55524C]">1.25%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[13px] leading-[1.75] text-[#8F8A7C]">
          VA IRRRL (streamline) refinances carry a flat 0.50% funding fee
          regardless of down payment or prior use. Veterans receiving VA
          disability compensation, Purple Heart recipients on active duty, and
          certain surviving spouses are generally exempt from the funding fee
          entirely.
        </p>

        {/* Comparison Table */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          VA Loans vs. FHA and Conventional Loans
        </h2>
        <div className="overflow-x-auto">
          <table className="my-[18px] mb-[30px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-[#1C1C1C] text-left font-bold text-white">
                <th className="p-[11px_14px]"></th>
                <th className="p-[11px_14px]">VA Loan</th>
                <th className="p-[11px_14px]">FHA Loan</th>
                <th className="p-[11px_14px]">Conventional Loan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Minimum down payment
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  0% for eligible veterans
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  3.5% (with 580+ score)
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  As low as 3%, usually 5%+
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Monthly mortgage insurance
                </td>
                <td className="p-[11px_14px] text-[#55524C]">None</td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Upfront + annual MIP, often for the loan's life
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  PMI, removable around 20% equity
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  One-time fee
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  VA funding fee (waivable for many)
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Upfront MIP (1.75%)
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  None, typically
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Maximum loan amount
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  None, with full entitlement
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Set by county FHA limits
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Set by conforming loan limits
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Best for
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Eligible veterans and service members
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Buyers with lower credit or smaller down payments
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Buyers with strong credit and 5%+ down
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
              q: "Do I have to make a down payment for a VA loan?",
              a: "No. Eligible VA borrowers can finance up to 100% of the purchase price with no down payment required, one of the program's signature benefits. A down payment is never required, though making one can reduce your VA funding fee.",
            },
            {
              q: "What is the VA funding fee and how much is it?",
              a: "The VA funding fee is a one-time fee that helps sustain the VA loan program, replacing the need for monthly mortgage insurance. For 2026, first-time use with less than 5% down is 2.15% of the loan amount; subsequent use with less than 5% down is 3.30%. Putting 5% or more down lowers the fee to 1.50%, and 10% or more down lowers it to 1.25%, regardless of prior use.",
            },
            {
              q: "Am I exempt from the VA funding fee?",
              a: "Veterans receiving VA disability compensation, Purple Heart recipients on active duty, and certain surviving spouses receiving Dependency and Indemnity Compensation (DIC) are typically exempt from the VA funding fee entirely.",
            },
            {
              q: "What is a Certificate of Eligibility (COE) and how do I get one?",
              a: "A Certificate of Eligibility is the document that confirms your VA loan entitlement to a lender. It can be requested through the VA's eBenefits portal, by mail, or in many cases pulled directly by your lender during the application process, so you don't need to obtain it yourself beforehand.",
            },
            {
              q: "Can I use my VA loan benefit more than once?",
              a: "Yes. VA loan entitlement can typically be reused for future home purchases, including after paying off a prior VA loan or, in many cases, while still carrying one, depending on your remaining entitlement.",
            },
            {
              q: "Is there a maximum VA loan amount?",
              a: "For most eligible veterans with full entitlement, there is no VA-imposed maximum loan amount. Lenders may still apply their own underwriting limits for larger loan amounts, but the VA guaranty itself is no longer capped by the county loan limits that applied before 2020.",
            },
            {
              q: "Do VA loans require mortgage insurance?",
              a: "No. VA loans do not require monthly private mortgage insurance (PMI) or mortgage insurance premiums (MIP), regardless of down payment. The one-time VA funding fee replaces the need for ongoing mortgage insurance.",
            },
            {
              q: "What is a VA IRRRL (VA Streamline Refinance)?",
              a: "A VA Interest Rate Reduction Refinance Loan (IRRRL) is a simplified refinance option for existing VA loan holders, typically requiring less documentation and often no new appraisal or credit underwriting, with a lower funding fee of just 0.50%.",
            },
            {
              q: "Can National Guard and Reserve members use VA loans?",
              a: "Yes. National Guard and Reserve members who meet the required service length can qualify for VA loans, and pay the same funding fee rates as active duty service members and veterans.",
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
            Not sure about your eligibility or entitlement? Reach out — we can
            help pull your COE and walk through your options the same day.
          </div>
        </div>
      </section>
    </div>
  );
}
