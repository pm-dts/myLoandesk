import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Building2,
  CheckCircle2,
  Calculator,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  FileCheck,
  ShieldCheck,
} from "lucide-react";

import DscrCalculator from "@/components/site/LoanPrograms/DSCRLoans/DSCRCalculator";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DSCR Loans - Qualify on Rental Cash Flow | MyLoanDesk",
  description:
    "No tax returns, no W-2s, and no personal income verification. Qualify for investment property financing based on property rental cash flow.",
  openGraph: {
    title: "DSCR Loans for Real Estate Investors | MyLoanDesk",
    description:
      "Qualify for investment property financing based on property rental cash flow instead of personal income.",
    type: "website",
  },
};

export default function DSCRLoansPage() {
  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Building2 size={14} />
              Investor Cash Flow Financing
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              DSCR Loans Qualify Based on Property Cash Flow,{" "}
              <em className="not-italic font-serif italic text-[#D4A574]">
                Not Personal Income
              </em>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/80 leading-relaxed mb-8 max-w-2xl">
              Investors, this one&apos;s for you. No tax returns, no W-2s, no
              personal income verification. If the property&apos;s rental income
              covers the mortgage, you&apos;re in business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
              >
                Get Your DSCR Rate Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href="#calculator"
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Calculator size={18} />
                Calculate My DSCR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS A DSCR LOAN? --- */}
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
              What Is a DSCR Loan?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              DSCR stands for <strong>Debt Service Coverage Ratio</strong>.
              Instead of qualifying you based on your personal income (pay
              stubs, tax returns, employment history), a DSCR loan qualifies the
              property based on whether its rental income covers the mortgage
              payment.
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              This makes DSCR loans a go-to option for real estate investors,
              especially self-employed borrowers, those with complex tax
              returns, or anyone scaling a rental portfolio who doesn&apos;t
              want their personal debt-to-income ratio limiting how many
              properties they can finance.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
              The Formula
            </div>
            <div className="bg-primary-bg border border-line p-4 rounded-2xl mb-6 text-center font-mono text-sm sm:text-base font-bold text-ink">
              DSCR = Monthly Rental Income ÷ Monthly Debt Obligations (PITIA)
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-ink">
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-moss-deep mt-1.5 shrink-0" />
                <span>
                  <strong>DSCR of 1.0:</strong> The property&apos;s rent exactly
                  covers the mortgage payment.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-moss-deep mt-1.5 shrink-0" />
                <span>
                  <strong>DSCR above 1.0:</strong> The property generates
                  positive cash flow.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                <span>
                  <strong>DSCR below 1.0:</strong> The property doesn&apos;t
                  fully cover its own payment (some lenders still allow this, at
                  a cost).
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WHO DSCR LOANS ARE FOR & KEY BENEFITS --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Who It's For */}
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
                Who DSCR Loans Are For
              </h3>
              <ul className="space-y-4">
                {[
                  "Real estate investors buying rental properties (single-family, 2-4 unit, condos, short-term rentals)",
                  "Self-employed borrowers whose tax returns don't reflect true cash flow",
                  "Investors scaling a portfolio who've hit DTI limits with conventional financing",
                  "Borrowers using an LLC or other business entity to hold title",
                  "First-time and experienced landlords alike — no minimum number of properties owned required with most programs",
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
                  "No personal income documentation — no W-2s, pay stubs, or tax returns required",
                  "No employment verification — self-employed and 1099 borrowers qualify the same way as W-2 employees",
                  "Close in an LLC or corporation — hold title in a business entity for liability protection",
                  "Unlimited financed properties — not capped by conventional lending's property-count limits",
                  "Fast closings — fewer documents typically means a faster path to closing",
                  "Short-term rental income accepted — many programs allow Airbnb/VRBO income to qualify",
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

      {/* --- HOW DSCR QUALIFICATION WORKS --- */}
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
            How DSCR Qualification Works
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Property Cash Flow Assessed",
              desc: "An appraiser completes a rent schedule (Form 1007) or the lender uses actual lease income to determine monthly rental income.",
              icon: Building2,
            },
            {
              step: "2",
              title: "Monthly Debt Calculated",
              desc: "Includes principal, interest, taxes, insurance, and association dues (PITIA) for the subject property.",
              icon: FileCheck,
            },
            {
              step: "3",
              title: "Ratio Calculated",
              desc: "Rental income is divided by PITIA to produce the exact DSCR metric.",
              icon: TrendingUp,
            },
            {
              step: "4",
              title: "Loan Terms Set",
              desc: "Higher DSCR means better pricing. Lower DSCR may qualify with a rate adjustment or higher down payment.",
              icon: ShieldCheck,
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

      {/* --- REQUIREMENTS TABLE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            05 — Parameters
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            Typical DSCR Loan Requirements
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
                <td className="px-6 py-4 font-semibold">Minimum DSCR</td>
                <td className="px-6 py-4 text-ink-2">
                  0.75 – 1.0+ (varies by lender)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Down payment</td>
                <td className="px-6 py-4 text-ink-2">20 – 25%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Credit score</td>
                <td className="px-6 py-4 text-ink-2">
                  620+ (better pricing at 700+)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Property types</td>
                <td className="px-6 py-4 text-ink-2">
                  1–4 unit, condo, PUD, some 5+ unit
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Loan purpose</td>
                <td className="px-6 py-4 text-ink-2">
                  Purchase, rate/term refinance, cash-out refinance
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Reserves</td>
                <td className="px-6 py-4 text-ink-2">
                  Typically 3–6 months of PITIA
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
            06 — Comparison
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            DSCR Loans vs. Conventional Investment Property Loans
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm">
          <table className="w-full text-left text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">Feature</th>
                <th className="px-6 py-4 font-semibold text-moss-deep">
                  DSCR Loan
                </th>
                <th className="px-6 py-4 font-semibold">Conventional Loan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              <tr>
                <td className="px-6 py-4 font-semibold">Qualifies on</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Property cash flow
                </td>
                <td className="px-6 py-4 text-ink-2">Personal income & DTI</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Income docs</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Not required
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Tax returns, W-2s, pay stubs
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Property limit</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Typically unlimited
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Capped (often 10 financed properties)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Entity / LLC closing
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Usually allowed
                </td>
                <td className="px-6 py-4 text-ink-2">Often restricted</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Best for</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Investors, self-employed
                </td>
                <td className="px-6 py-4 text-ink-2">
                  W-2 borrowers with strong DTI room
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- DSCR CALCULATOR (ISOLATED CLIENT COMPONENT) --- */}
      <DscrCalculator pagePath="/dscr-loans" />

      {/* --- FREQUENTLY ASKED QUESTIONS --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="text-center mb-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            07 — Clarity
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
              q: "Can I get a DSCR loan with a DSCR below 1.0?",
              a: "Yes, many lenders allow it — you may see a higher rate or larger down payment requirement since the property doesn't fully cover its own payment.",
            },
            {
              q: "Do I need rental history to qualify?",
              a: "Not always. For purchases, an appraiser's market rent estimate can be used even before you have a tenant in place.",
            },
            {
              q: "Can I use Airbnb or short-term rental income?",
              a: "Many DSCR programs now accept short-term rental income, often using platform-specific income history or projected market rent.",
            },
            {
              q: "Is a DSCR loan the same as a hard money loan?",
              a: "No. DSCR loans are typically longer-term (15/30-year fixed or ARM options), while hard money loans are short-term bridge financing with higher rates.",
            },
            {
              q: "Can I close in my LLC's name?",
              a: "Yes — this is one of the most common reasons investors choose DSCR financing.",
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
            Ready to Run the Numbers?
          </h2>
          <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-8 max-w-xl mx-auto">
            Talk to a MyLoanDesk loan officer to see what DSCR you&apos;d need,
            what rate you&apos;d qualify for, and how fast we can get you to
            closing.
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
              Calculate My DSCR
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
