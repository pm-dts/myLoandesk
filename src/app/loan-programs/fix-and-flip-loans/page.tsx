import type { Metadata } from "next";
import Link from "next/link";
import FixFlipCalculator from "@/components/site/LoanPrograms/FixFlipLoans/FixFlipCalculator";

export const metadata: Metadata = {
  title: "Fix and Flip Loans for Real Estate Investors | MyLoanDesk",
  description:
    "Fix and flip loans with fast closings, rehab budget financing, and interest-only payments. Use our free deal calculator to check your numbers against the 70% rule before you apply.",
  alternates: {
    canonical: "https://www.myloandesk.com/loan-programs/fix-and-flip-loans/",
  },
  openGraph: {
    title: "Fix and Flip Loans for Real Estate Investors | MyLoanDesk",
    description:
      "Fast, flexible financing for house flippers — purchase, rehab, and resell without tying up your own cash. Run your numbers with our free fix and flip deal calculator.",
    type: "website",
    url: "https://www.myloandesk.com/loan-programs/fix-and-flip-loans/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What credit score do I need for a fix and flip loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most fix and flip lenders look for a credit score of 620 or higher, though some programs accept lower scores if the deal itself — the purchase price, rehab budget, and after-repair value — is strong. Because these loans are asset-based, your credit score typically matters less than it would for a conventional mortgage.",
      },
    },
    {
      "@type": "Question",
      name: "How much of the rehab budget can be financed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many fix and flip programs finance 100% of the rehab budget in addition to a portion of the purchase price, released in draws as work is completed and inspected. The exact amount depends on the deal's loan-to-cost and loan-to-ARV ratios.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 70% rule in house flipping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 70% rule is a rule of thumb many investors use to evaluate a flip: your purchase price plus rehab costs should generally not exceed 70% of the property's after-repair value (ARV). Deals within that range tend to leave enough margin for financing costs, holding costs, selling costs, and profit.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can a fix and flip loan close?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because fix and flip loans are underwritten primarily around the property and the deal rather than extensive personal income documentation, many close in as little as 7 to 14 days — significantly faster than a conventional 30 to 45 day mortgage timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need real estate investing experience to qualify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — many fix and flip lenders work with first-time flippers, though your experience level can affect your available leverage, rate, and terms. Investors with a track record of completed flips often qualify for higher loan-to-cost ratios.",
      },
    },
    {
      "@type": "Question",
      name: "Are fix and flip loan payments interest-only?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most fix and flip loans are structured as interest-only for the duration of the loan term, which keeps monthly holding costs lower while you complete the renovation and prepare the property for resale.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a penalty for paying off a fix and flip loan early?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most fix and flip loans carry no prepayment penalty, since the entire model is built around a short holding period — lenders expect and plan for an early payoff once the property sells.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a fix and flip loan for a rental property instead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fix and flip loans are designed for short-term rehab-and-resell projects. If your plan is to renovate and hold the property as a rental, a DSCR loan or a fix-to-rent refinance is typically a better long-term fit once the renovation is complete.",
      },
    },
  ],
};

export default function FixAndFlipLoansPage() {
  return (
    <main
      className="min-h-screen font-sans"
      style={{
        backgroundColor: "#EDEAE2",
        color: "#55524C",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* JSON-LD Structured Data for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="block">
        <div className="max-w-[900px] mx-auto bg-[#FBF8F2] px-6 sm:px-14 py-[44px] pb-[60px]">
          <Link
            href="/loan-programs"
            className="text-[13px] text-[#55524C] font-semibold inline-flex items-center gap-1.5 mb-[18px] hover:text-[#B85A1C] transition-colors"
          >
            &larr; Back to Loan Programs
          </Link>

          <h1 className="font-serif font-bold text-3xl sm:text-[38px] text-[#1C1C1C] mb-[18px] leading-[1.15]">
            Fix and Flip Loans
          </h1>

          <hr className="border-0 border-t border-[#E6E0D3] mb-[26px]" />

          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 items-start mb-[6px]">
            <div>
              <div className="font-sans font-bold text-xs sm:text-[14px] tracking-[0.02em] text-[#B85A1C] uppercase mb-[16px]">
                Fast, flexible financing for real estate investors.
              </div>
              <p className="text-[15.5px] leading-[1.7] text-[#55524C] mb-[24px] max-w-[680px]">
                Whether you&apos;re renovating your first investment property or
                managing multiple projects each year, a Fix and Flip Loan from
                MyLoanDesk provides the financing you need to purchase, rehab,
                and resell quickly — without tying up your own cash for months
                at a time. Loans are underwritten around the property and the
                deal, not a lengthy personal income file, so approvals and
                closings move at investor speed.
              </p>
              <div className="flex flex-col gap-2.5 mt-[18px]">
                <div className="text-[13.5px] text-[#55524C] flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#D9722C"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Close in as little as 7–14 days
                </div>
                <div className="text-[13.5px] text-[#55524C] flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#D9722C"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Up to 100% of rehab costs financed
                </div>
                <div className="text-[13.5px] text-[#55524C] flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#D9722C"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  No prepayment penalty
                </div>
              </div>
            </div>

            {/* Interactive Calculator Client Component */}
            <FixFlipCalculator />
          </div>

          <p className="text-[11.5px] text-[#9A9585] max-w-[680px] mt-[6px] mb-0">
            Estimate only, based on common industry guidelines (up to 90% of
            purchase price, 100% of rehab costs, capped at roughly 70–75% of
            ARV). Actual loan amount, rate, and terms depend on underwriting,
            your experience, and the specific property.
          </p>

          {/* WHAT IS A FIX AND FLIP LOAN */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            What Is a Fix and Flip Loan?
          </h2>
          <p className="text-[15px] leading-[1.75] text-[#55524C] mb-[14px] max-w-[700px]">
            A fix and flip loan is a short-term, asset-based loan designed for
            real estate investors who buy distressed or undervalued properties,
            renovate them, and resell them for a profit — often within six to
            eighteen months. Unlike a conventional mortgage, which is
            underwritten around your personal income, tax returns, and long-term
            ability to repay over 15 or 30 years, a fix and flip loan is
            evaluated primarily around the deal itself: the purchase price, the
            rehab budget, and the property&apos;s projected after-repair value
            (ARV).
          </p>
          <p className="text-[15px] leading-[1.75] text-[#55524C] mb-[14px] max-w-[700px]">
            This structure is what makes fix and flip financing — sometimes
            called hard money financing or rehab loans — a fundamentally
            different tool than a traditional mortgage. It&apos;s built for
            speed and flexibility, not for holding a property for decades.
          </p>

          {/* HOW IT WORKS */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            How Fix and Flip Financing Works
          </h2>
          {[
            {
              step: "1",
              title: "Submit your deal.",
              text: "Share the purchase price, your rehab scope and budget, and your estimated after-repair value.",
            },
            {
              step: "2",
              title: "Get approved fast.",
              text: "Underwriting focuses on the property and the numbers, so approvals often happen in days, not weeks.",
            },
            {
              step: "3",
              title: "Close and fund.",
              text: "Purchase funds are disbursed at closing; rehab funds are typically held in reserve.",
            },
            {
              step: "4",
              title: "Draw as you renovate.",
              text: "Rehab funds are released in draws as work is completed and inspected, keeping your own cash free.",
            },
            {
              step: "5",
              title: "Sell and payoff.",
              text: "Once the property sells, the loan is paid off in full — with no prepayment penalty for paying it off early.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-[14px] mb-[16px] max-w-[700px]"
            >
              <div className="shrink-0 w-[28px] h-[28px] rounded-full bg-[#D9722C] text-white font-sans font-bold text-[13px] flex items-center justify-center">
                {item.step}
              </div>
              <div className="text-[14.5px] leading-[1.6] text-[#55524C] pt-[3px]">
                <strong className="text-[#1C1C1C]">{item.title}</strong>{" "}
                {item.text}
              </div>
            </div>
          ))}

          {/* PROGRAM HIGHLIGHTS */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            Program Highlights
          </h2>
          <div className="font-sans font-bold text-[13.5px] tracking-[0.03em] text-[#1C1C1C] uppercase mb-[14px]">
            What&apos;s included:
          </div>
          <ul className="list-none m-0 p-0 mb-[12px] max-w-[700px]">
            {[
              "Short-term financing, typically 6–18 months",
              "Rehab budget financed alongside the purchase price",
              "Interest-only payments during the loan term",
              "Fast closings, often within 7–14 days",
              "No prepayment penalty when you sell or refinance early",
              "Financing available for single-family, multifamily, and small mixed-use properties",
              "Programs available for both new and experienced investors",
            ].map((highlight, i) => (
              <li
                key={i}
                className="relative pl-[20px] text-[15px] text-[#55524C] leading-[1.6] mb-[11px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#55524C]"
              >
                {highlight}
              </li>
            ))}
          </ul>

          {/* STRATEGIC ADVANTAGES */}
          <div className="bg-[#F3EFE6] border border-[#E6E0D3] rounded-[12px] p-[26px_28px] mt-[18px] mb-[30px]">
            <div className="font-sans font-bold text-[13.5px] tracking-[0.03em] text-[#1C1C1C] uppercase mb-[12px]">
              Strategic Advantages:
            </div>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] mb-[12px]">
              Speed is often the deciding factor in a competitive investment
              market. Fast approvals and streamlined underwriting mean you can
              move on a property before another investor does, without waiting
              on a 30–45 day conventional close.
            </p>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] mb-[12px]">
              Because the rehab budget is financed as part of the loan,
              you&apos;re not forced to pull from personal reserves mid-project
              — draws are released as work is completed, keeping your cash
              available for your next deal.
            </p>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] m-0">
              Interest-only payments during the loan term also keep monthly
              holding costs predictable and low, which protects your margin if a
              renovation or sale takes a little longer than planned.
            </p>
          </div>

          {/* WHO THIS IS FOR */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            Who Fix and Flip Loans Are For
          </h2>
          <ul className="list-none m-0 p-0 mb-[12px] max-w-[700px]">
            {[
              "Investors purchasing a distressed or outdated property below market value",
              "Experienced flippers managing multiple simultaneous projects",
              "First-time investors with a solid rehab plan and realistic ARV estimate",
              "Buyers who need to close quickly to win a competitive off-market or auction deal",
              "Investors who don't want a renovation project tying up a conventional mortgage",
            ].map((item, i) => (
              <li
                key={i}
                className="relative pl-[20px] text-[15px] text-[#55524C] leading-[1.6] mb-[11px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#55524C]"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* COMPARISON TABLE */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            Fix and Flip Loans vs. Other Financing Options
          </h2>
          <div className="overflow-x-auto mb-[30px]">
            <table className="w-full border-collapse font-sans text-[13.5px]">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="p-[11px_14px] text-left font-bold"></th>
                  <th className="p-[11px_14px] text-left font-bold">
                    Fix and Flip Loan
                  </th>
                  <th className="p-[11px_14px] text-left font-bold">
                    Conventional Mortgage
                  </th>
                  <th className="p-[11px_14px] text-left font-bold">
                    HELOC / Cash-Out Refi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    Underwriting focus
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    The property and the deal
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Personal income and credit
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Existing home equity
                  </td>
                </tr>
                <tr className="bg-[#F3EFE6] border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    Typical closing time
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">7–14 days</td>
                  <td className="p-[11px_14px] text-[#55524C]">30–45 days</td>
                  <td className="p-[11px_14px] text-[#55524C]">2–4 weeks</td>
                </tr>
                <tr className="border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    Rehab budget financed
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Often up to 100%
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Not typically included
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Depends on available equity
                  </td>
                </tr>
                <tr className="bg-[#F3EFE6] border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    Payment structure
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Interest-only
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Fully amortizing
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Varies by product
                  </td>
                </tr>
                <tr className="border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    Best for
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Short-term rehab and resell
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Long-term ownership
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Investors with substantial existing equity
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ELIGIBILITY */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            Eligibility Requirements
          </h2>
          <ul className="list-none m-0 p-0 mb-[12px] max-w-[700px]">
            {[
              "Credit score of approximately 620+ (deal strength can offset a lower score)",
              "A clear rehab budget and scope of work",
              "A realistic, supportable after-repair value (ARV) estimate",
              "Sufficient reserves to cover holding costs during the project",
              "No minimum flipping experience required, though experience can improve your leverage and terms",
            ].map((req, i) => (
              <li
                key={i}
                className="relative pl-[20px] text-[15px] text-[#55524C] leading-[1.6] mb-[11px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#55524C]"
              >
                {req}
              </li>
            ))}
          </ul>

          {/* FAQ */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "What credit score do I need for a fix and flip loan?",
              a: "Most fix and flip lenders look for a credit score of 620 or higher, though some programs accept lower scores if the deal itself — the purchase price, rehab budget, and after-repair value — is strong. Because these loans are asset-based, your credit score typically matters less than it would for a conventional mortgage.",
            },
            {
              q: "How much of the rehab budget can be financed?",
              a: "Many fix and flip programs finance 100% of the rehab budget in addition to a portion of the purchase price, released in draws as work is completed and inspected. The exact amount depends on the deal's loan-to-cost and loan-to-ARV ratios.",
            },
            {
              q: "What is the 70% rule in house flipping?",
              a: "The 70% rule is a rule of thumb many investors use to evaluate a flip: your purchase price plus rehab costs should generally not exceed 70% of the property's after-repair value (ARV). Deals within that range tend to leave enough margin for financing costs, holding costs, selling costs, and profit.",
            },
            {
              q: "How fast can a fix and flip loan close?",
              a: "Because fix and flip loans are underwritten primarily around the property and the deal rather than extensive personal income documentation, many close in as little as 7 to 14 days — significantly faster than a conventional 30 to 45 day mortgage timeline.",
            },
            {
              q: "Do I need real estate investing experience to qualify?",
              a: "No — many fix and flip lenders work with first-time flippers, though your experience level can affect your available leverage, rate, and terms. Investors with a track record of completed flips often qualify for higher loan-to-cost ratios.",
            },
            {
              q: "Are fix and flip loan payments interest-only?",
              a: "Most fix and flip loans are structured as interest-only for the duration of the loan term, which keeps monthly holding costs lower while you complete the renovation and prepare the property for resale.",
            },
            {
              q: "Is there a penalty for paying off a fix and flip loan early?",
              a: "Most fix and flip loans carry no prepayment penalty, since the entire model is built around a short holding period — lenders expect and plan for an early payoff once the property sells.",
            },
            {
              q: "Can I use a fix and flip loan for a rental property instead?",
              a: "Fix and flip loans are designed for short-term rehab-and-resell projects. If your plan is to renovate and hold the property as a rental, a DSCR loan or a fix-to-rent refinance is typically a better long-term fit once the renovation is complete.",
              border: false,
            },
          ].map((faq, i) => (
            <div
              key={i}
              className={`py-[16px] ${
                faq.border !== false ? "border-b border-[#E6E0D3]" : ""
              }`}
            >
              <p className="font-sans font-bold text-[15px] text-[#1C1C1C] m-0 mb-[6px]">
                {faq.q}
              </p>
              <p className="text-[14.5px] leading-[1.7] text-[#55524C] m-0">
                {faq.a}
              </p>
            </div>
          ))}

          {/* CTA BUTTONS */}
          <div className="mt-[36px]">
            <Link
              href="/get-started"
              className="flex items-center justify-center gap-[8px] w-full bg-[#D9722C] text-white font-sans font-bold text-[15px] p-[16px] border-0 rounded-[10px] cursor-pointer mb-[10px] no-underline hover:bg-[#B85A1C] transition-colors"
            >
              Apply Now &rarr;
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center w-full bg-[#F5EFDF] text-[#1C1C1C] font-sans font-bold text-[15px] p-[16px] border border-[#E7DEC7] rounded-[10px] cursor-pointer no-underline hover:bg-[#EFE7D3] transition-colors"
            >
              Contact Us Now
            </Link>
            <div className="text-center text-[12.5px] text-[#8F8A7C] mt-[14px]">
              Have a deal you&apos;re evaluating right now? Send us the numbers
              — a loan officer will run them with you the same day.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
