import type { Metadata } from "next";
import Link from "next/link";
import DscrCalculator from "@/components/site/LoanPrograms/DSCRLoans/DSCRCalculator";

export const metadata: Metadata = {
  title: "DSCR Investment Property Loans | MyLoanDesk",
  description:
    "Grow your real estate portfolio without personal income verification. Qualify for DSCR investment property financing based on property rental cash flow.",
  openGraph: {
    title: "DSCR Investment Property Loans | MyLoanDesk",
    description:
      "Qualify for investment property financing based on property rental cash flow instead of personal income tax returns.",
    type: "website",
    url: "/loan-programs/dscr-loans",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/loan-programs/dscr-loans/",
  },
};

export default function DSCRLoansPage() {
  return (
    <main
      className="min-h-screen font-sans"
      style={{
        backgroundColor: "#EDEAE2",
        color: "#55524C",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <section className="block">
        <div className="max-w-[900px] mx-auto bg-[#FBF8F2] px-6 sm:px-14 py-11 pb-14">
          <Link
            href="/loan-programs"
            className="text-[13px] text-[#55524C] font-semibold inline-flex items-center gap-1.5 mb-[18px] hover:text-[#B85A1C] transition-colors"
          >
            &larr; Back to Loan Programs
          </Link>

          <h1 className="font-serif font-bold text-3xl sm:text-[38px] text-[#1C1C1C] mb-[18px] leading-[1.15]">
            DSCR Investment Property Loans
          </h1>

          <hr className="border-0 border-t border-[#E6E0D3] mb-[26px]" />

          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 items-start mb-[34px]">
            <div>
              <div className="font-sans font-bold text-xs sm:text-[14px] tracking-[0.02em] text-[#B85A1C] uppercase mb-[16px]">
                Grow your real estate portfolio without personal income
                verification.
              </div>
              <p className="text-[15.5px] leading-[1.7] text-[#55524C] mb-[30px] max-w-[680px]">
                A Debt Service Coverage Ratio (DSCR) Loan is designed
                specifically for real estate investors. Instead of qualifying
                based on your personal income, tax returns, or employment
                history, DSCR loans qualify based on the rental income a
                property generates relative to its own debt obligations. That
                makes it possible to scale your portfolio without the paperwork
                burden of a traditional mortgage.
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
                  Close in as little as 14 days
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
                  Unlimited properties financed
                </div>
              </div>
            </div>

            {/* Isolated Client-side Calculator */}
            <DscrCalculator />
          </div>

          <div className="font-sans font-bold text-[13.5px] tracking-[0.03em] text-[#1C1C1C] uppercase mb-[14px]">
            Program Highlights:
          </div>
          <ul className="list-none m-0 p-0 mb-[32px] max-w-[680px]">
            {[
              "No personal income or tax return verification required",
              "Qualify based on the property's rental income versus its debt payments",
              "Finance an unlimited number of investment properties",
              "Available for single-family, multifamily, and short-term rental properties",
              "Ratios below 1.0 may still qualify with adjusted terms",
            ].map((highlight, i) => (
              <li
                key={i}
                className="relative pl-[20px] text-[15px] text-[#55524C] leading-[1.6] mb-[11px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#55524C]"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="bg-[#F3EFE6] border border-[#E6E0D3] rounded-[12px] p-[26px_28px] mb-[30px]">
            <div className="font-sans font-bold text-[13.5px] tracking-[0.03em] text-[#1C1C1C] uppercase mb-[12px]">
              Strategic Advantages:
            </div>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] mb-[12px]">
              Because DSCR loans are underwritten around the asset rather than
              the borrower, investors who own multiple properties — and
              therefore show complex or low taxable income after depreciation
              and write-offs — are often able to qualify more easily than
              through a conventional loan.
            </p>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] m-0">
              Many investors use DSCR financing to close faster and with fewer
              conditions, since there's no employment verification, no
              debt-to-income calculation, and no tax transcript requests slowing
              down the loan.
            </p>
          </div>

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
        </div>
      </section>
    </main>
  );
}
