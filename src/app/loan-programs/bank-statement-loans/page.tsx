import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Wallet,
  CheckCircle2,
  Calculator,
  HelpCircle,
  ArrowRight,
  BadgeDollarSign,
  FileCheck,
  TrendingUp,
  ShieldCheck,
  PlayCircle,
} from "lucide-react";

import BankStatementCalculator from "@/components/site/LoanPrograms/BankStatementLoans/BankStatementCalculator";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bank Statement Loans - Qualify With Deposits | MyLoanDesk",
  description:
    "Self-employed or business owner? Qualify for a mortgage using 12 or 24 months of bank deposits instead of tax returns or W-2s.",
  openGraph: {
    title: "Bank Statement Loans for Self-Employed Borrowers | MyLoanDesk",
    description:
      "Qualify with your bank deposits, not your tax returns. Designed for business owners, 1099 earners, and freelancers.",
    type: "website",
    url: "/loan-programs/bank-statement-loans",
  },
  alternates: {
    canonical: "/loan-programs/bank-statement-loans/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const VIDEO_URL =
  "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Bank+Statment_1080p_caption.mp4";

export default function BankStatementLoansPage() {
  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Wallet size={14} />
              Self-Employed Mortgage Solutions
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              Bank Statement Loans{" "}
              <span className="block text-[#D4A574] font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-1">
                Qualify With Your Deposits, Not Your Tax Returns
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/80 leading-relaxed mb-8 max-w-2xl">
              Self-employed? Business owner? Your tax returns don&apos;t tell
              the full story. We qualify you using what actually hits your bank
              account.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
              >
                Get Your Bank Statement Loan Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href="#calculator"
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Calculator size={18} />
                Estimate My Qualifying Income
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS A BANK STATEMENT LOAN? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              01 — Overview
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light leading-tight mb-6",
                fraunces.className,
              )}
            >
              What Is a Bank Statement Loan?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              A bank statement loan is a mortgage option for self-employed
              borrowers who don&apos;t fit the traditional W-2/tax-return mold.
              Instead of using your tax returns to verify income — which often
              understate what self-employed borrowers actually earn after
              write-offs and deductions — lenders look at 12 or 24 months of
              personal or business bank statements to calculate qualifying
              income based on real cash flow.
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              If you write off a lot of expenses to lower your tax liability,
              your tax returns may show far less income than you actually bring
              in. Bank statement loans solve that mismatch.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
              Core Highlights
            </div>
            <ul className="space-y-4 text-xs sm:text-sm text-ink">
              <li className="flex items-start gap-3">
                <BadgeDollarSign
                  size={20}
                  className="text-moss-deep shrink-0 mt-0.5"
                />
                <span>
                  <strong>Cash-Flow Focused:</strong> Uses 12–24 months of
                  consistent bank deposits to calculate true earning power.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck
                  size={20}
                  className="text-moss-deep shrink-0 mt-0.5"
                />
                <span>
                  <strong>No Tax Returns:</strong> Tax write-offs will no longer
                  limit your mortgage purchasing power.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck
                  size={20}
                  className="text-brand-orange shrink-0 mt-0.5"
                />
                <span>
                  <strong>Flexible Account Types:</strong> Personal or business
                  bank statement options available.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- SEE HOW BANK STATEMENT LOANS WORK (EMBEDDED VIDEO) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/30 border border-line rounded-[32px] p-6 sm:p-10 lg:p-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange uppercase tracking-wider mb-2">
              <PlayCircle size={16} /> Video Breakdown
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-3",
                fraunces.className,
              )}
            >
              See How Bank Statement Loans Work
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed">
              Discover how self-employed borrowers and business owners can
              qualify for a mortgage using bank deposits instead of tax returns.
            </p>
          </div>

          {/* Embedded HTML5 Video Container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-[#E8E4D8] rounded-[24px] sm:rounded-[32px] transform -rotate-1 -translate-x-1.5 translate-y-1.5 sm:-translate-x-2 sm:translate-y-2 -z-10" />
            <div className="relative z-10 bg-black rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-line aspect-video">
              <video
                src={VIDEO_URL}
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO IT'S FOR & KEY BENEFITS --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Who Bank Statement Loans Are For */}
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
                02 — Eligibility
              </div>
              <h3
                className={cn(
                  "text-2xl sm:text-3xl font-light text-ink mb-6",
                  fraunces.className,
                )}
              >
                Who Bank Statement Loans Are For
              </h3>
              <ul className="space-y-4">
                {[
                  "Self-employed borrowers and independent contractors",
                  "Business owners (sole proprietors, LLCs, S-corps, partnerships)",
                  "1099 workers",
                  "Gig economy earners with variable income",
                  "Freelancers and consultants",
                  "Anyone whose tax returns don't reflect true earning power due to deductions",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-ink-2"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-moss-deep shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
                03 — Advantages
              </div>
              <h3
                className={cn(
                  "text-2xl sm:text-3xl font-light text-ink mb-6",
                  fraunces.className,
                )}
              >
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  "No tax returns required — qualify using bank deposits instead",
                  "No W-2s or pay stubs needed",
                  "Personal or business bank statements accepted — most programs allow either",
                  "12 or 24-month statement options — some lenders offer better pricing with 24 months",
                  "Purchase, refinance, and cash-out options available",
                  "Works for a wide range of self-employment structures",
                ].map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-ink-2"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-brand-orange shrink-0 mt-0.5"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW QUALIFICATION WORKS --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
            04 — Process
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            How Bank Statement Loan Qualification Works
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Choose Statement Type",
              desc: "Personal bank statements or business bank statements — each is calculated differently.",
            },
            {
              step: "2",
              title: "Provide 12 or 24 Months",
              desc: "Provide 12 or 24 months of statements. Consistency matters more than a single strong month.",
            },
            {
              step: "3",
              title: "Income Calculated from Deposits",
              desc: "Personal accounts count most deposits. Business accounts apply an expense factor (commonly ~50%).",
            },
            {
              step: "4",
              title: "Average Monthly Income Set",
              desc: "Determined income is used just like traditional income to calculate your DTI.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-primary-bg border border-line rounded-2xl p-6 relative flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center font-bold text-sm mb-4">
                  0{item.step}
                </div>
                <h3 className="font-semibold text-base text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-ink-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PERSONAL VS BUSINESS BANK STATEMENTS TABLE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            05 — Account Types
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            Personal vs. Business Bank Statements
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm">
          <table className="w-full text-left text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">Feature</th>
                <th className="px-6 py-4 font-semibold text-moss-deep">
                  Personal Statements
                </th>
                <th className="px-6 py-4 font-semibold">Business Statements</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              <tr>
                <td className="px-6 py-4 font-semibold">Whose account</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Borrower&apos;s personal account
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Business operating account
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Expense factor applied
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Usually none/minimal
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Typically applied (often ~50%, lender-dependent)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Best for</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Sole owners who pay themselves via personal account
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Businesses with significant deposits and clear ownership
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Documentation</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Bank statements only
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Bank statements + business ownership verification
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- REQUIREMENTS TABLE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            06 — Parameters
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            Typical Bank Statement Loan Requirements
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm">
          <table className="w-full text-left text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">Factor</th>
                <th className="px-6 py-4 font-semibold">Typical Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              <tr>
                <td className="px-6 py-4 font-semibold">Statement history</td>
                <td className="px-6 py-4 text-ink-2">12–24 months</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Down payment</td>
                <td className="px-6 py-4 text-ink-2">10–20%+</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Credit score</td>
                <td className="px-6 py-4 text-ink-2">
                  620+ (better pricing at 700+)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Self-employment history
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Typically 2 years (some programs allow 1 year)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Ownership requirement
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Usually 25%+ business ownership
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Property types</td>
                <td className="px-6 py-4 text-ink-2">
                  Primary, second home, investment
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-ink-2/70 mt-3 italic">
          * Exact requirements vary by lender and loan program; these are
          general industry ranges.
        </p>
      </section>

      {/* --- COMPARISON TABLE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            07 — Comparison
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            Bank Statement Loans vs. Traditional Income Verification
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm">
          <table className="w-full text-left text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">Feature</th>
                <th className="px-6 py-4 font-semibold text-moss-deep">
                  Bank Statement Loan
                </th>
                <th className="px-6 py-4 font-semibold">
                  Traditional (Full Doc) Loan
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              <tr>
                <td className="px-6 py-4 font-semibold">Qualifies on</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Bank deposits
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Tax returns, W-2s, pay stubs
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Best for</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Self-employed, variable income
                </td>
                <td className="px-6 py-4 text-ink-2">
                  W-2 employees, stable documented income
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Tax returns needed</td>
                <td className="px-6 py-4 text-moss-deep font-medium">No</td>
                <td className="px-6 py-4 text-ink-2">Yes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Write-offs hurt qualifying?
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">No</td>
                <td className="px-6 py-4 text-ink-2">Often yes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Income calculation</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Based on cash flow
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Based on reported taxable income
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- BANK STATEMENT CALCULATOR (CLIENT COMPONENT) --- */}
      <BankStatementCalculator pagePath="/bank-statement-loans" />

      {/* --- FREQUENTLY ASKED QUESTIONS --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="text-center mb-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            08 — Clarity
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Do I need to be self-employed to qualify?",
              a: "Generally yes — bank statement loans are designed for self-employed borrowers and business owners, not traditional W-2 employees.",
            },
            {
              q: "What if my income fluctuates month to month?",
              a: "That's expected. Lenders average your deposits over the full 12 or 24-month period, so occasional slow months won't disqualify you.",
            },
            {
              q: "Can I use both personal and business statements?",
              a: "Some lenders allow a blend depending on how you receive income. Your loan officer can help determine the best fit.",
            },
            {
              q: "Will large one-time deposits count as income?",
              a: "Typically no — lenders generally look for consistent, recurring deposits and may exclude transfers or one-time windfalls.",
            },
            {
              q: "Is 24 months of statements always required?",
              a: "No — many lenders offer 12-month programs, though 24 months can sometimes result in better pricing.",
            },
            {
              q: "How long do I need to have been self-employed?",
              a: "Most programs require 2 years, though some allow as little as 1 year with additional documentation.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="bg-primary-bg border border-line rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-semibold text-base text-ink mb-2 flex items-start gap-2">
                <HelpCircle
                  size={18}
                  className="text-brand-orange shrink-0 mt-0.5"
                />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-cream/40 border border-line rounded-[32px] p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink mb-4",
              fraunces.className,
            )}
          >
            Ready to See What You Qualify For?
          </h2>
          <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-8 max-w-xl mx-auto">
            Talk to a MyLoanDesk loan officer to find out which bank statement
            program fits your income, and how much you could qualify for.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/calendar"
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Talk to a Loan Officer
              <ArrowRight size={18} />
            </Link>
            <a
              href="#calculator"
              className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Estimate My Qualifying Income
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
