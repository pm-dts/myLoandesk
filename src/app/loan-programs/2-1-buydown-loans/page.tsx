import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  TrendingDown,
  CheckCircle2,
  Calculator,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Building,
  UserCheck,
  ShieldCheck,
  PlayCircle,
} from "lucide-react";

import BuydownCalculator from "@/components/site/LoanPrograms/2-1-BuydownLoans/2-1-BuydownCalculator";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "2/1 Buydown - Lower Your Rate for the First Two Years | MyLoanDesk",
  description:
    "Ease into your mortgage payment. Start at a reduced interest rate for years 1 and 2 before stepping up to the permanent note rate.",
  openGraph: {
    title: "2/1 Buydown Mortgage Program | MyLoanDesk",
    description:
      "Lower your mortgage payment for the first two years. Funded by sellers, builders, or lenders as a payment subsidy.",
    type: "website",
    url: "/loan-programs/2-1-buydown-loans",
  },
  alternates: {
    canonical: "/loan-programs/2-1-buydown-loans/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const VIDEO_URL =
  "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Lower+Your+Mortgage+Payment+During+Your+First+Two+Years+of+Homeownership_1080p_caption.mp4";

export default function TwoOneBuydownPage() {
  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <TrendingDown size={14} />
              Temporary Rate Subsidy Program
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              2/1 Buydown{" "}
              <span className="block text-[#D4A574] font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-1">
                Lower Your Rate for the First Two Years
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/80 leading-relaxed mb-8 max-w-2xl">
              Ease into your mortgage payment. Start at a reduced rate, step up
              gradually, and give your budget room to breathe while your income
              (or the rate environment) catches up.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
              >
                See If a 2/1 Buydown Fits Your Loan
                <ArrowRight size={18} />
              </Link>
              <a
                href="#calculator"
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Calculator size={18} />
                Calculate My Buydown Savings
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS A 2/1 BUYDOWN? (EXPLANATION + EXAMPLE) --- */}
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
              What Is a 2/1 Buydown?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              A 2/1 buydown is a temporary rate reduction on your mortgage that
              lowers your interest rate and your monthly payment — for the first
              two years of the loan, before stepping up to the permanent note
              rate in year three.
            </p>

            <ul className="space-y-3 text-sm text-ink mb-6">
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-moss-deep mt-2 shrink-0" />
                <span>
                  <strong>Year 1:</strong> Rate is 2% below your note rate.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-moss-deep mt-2 shrink-0" />
                <span>
                  <strong>Year 2:</strong> Rate is 1% below your note rate.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span>
                  <strong>Year 3 onward:</strong> Rate returns to the permanent,
                  fixed note rate for the remaining life of the loan.
                </span>
              </li>
            </ul>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              The buydown is funded upfront — usually by the seller, builder, or
              lender as a credit held in an escrow-style account that subsidizes
              your payment during years one and two. Your loan itself is a
              standard fixed-rate mortgage; only the effective payment in the
              first two years is reduced.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
              How It Works — Example
            </div>
            <p className="text-xs text-ink-2 mb-4">
              On a $500,000 loan at a 6% note rate:
            </p>

            <div className="overflow-hidden border border-line rounded-xl bg-primary-bg mb-4">
              <table className="w-full text-left text-xs">
                <thead className="bg-cream/50 border-b border-line text-ink-2">
                  <tr>
                    <th className="p-2.5 font-semibold">Year</th>
                    <th className="p-2.5 font-semibold">Effective Rate</th>
                    <th className="p-2.5 font-semibold">
                      Approx. Monthly P&amp;I
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60 text-ink">
                  <tr>
                    <td className="p-2.5 font-semibold">Year 1</td>
                    <td className="p-2.5 text-moss-deep font-medium">4.00%</td>
                    <td className="p-2.5 font-medium">~$2,387</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold">Year 2</td>
                    <td className="p-2.5 text-moss-deep font-medium">5.00%</td>
                    <td className="p-2.5 font-medium">~$2,684</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold">Year 3+</td>
                    <td className="p-2.5 text-ink-2">6.00% (note rate)</td>
                    <td className="p-2.5 font-medium">~$2,998</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-ink-2/70 italic leading-normal">
              * Figures are illustrative only and will vary based on loan
              amount, term, and actual rate used for concept purposes, not a
              quote. The difference between the reduced payments and the full
              note-rate payment during years 1 and 2 is covered by the buydown
              funds, not by you.
            </p>
          </div>
        </div>
      </section>

      {/* --- SEE HOW A 2/1 BUYDOWN WORKS (EMBEDDED VIDEO) --- */}
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
              See How a 2/1 Buydown Works
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed">
              Lower your mortgage payment during your first two years of
              homeownership with this simple, step-by-step breakdown.
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

      {/* --- WHO A 2/1 BUYDOWN IS FOR & KEY BENEFITS --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Who It's For */}
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
                02 — Suitability
              </div>
              <h3
                className={cn(
                  "text-2xl sm:text-3xl font-light text-ink mb-6",
                  fraunces.className,
                )}
              >
                Who a 2/1 Buydown Is For
              </h3>
              <ul className="space-y-4">
                {[
                  "Buyers expecting income growth over the next two years and wanting lower payments now",
                  "Buyers in a high-rate environment who plan to refinance once rates drop",
                  "Buyers negotiating seller or builder concessions who'd rather apply them to rate than price",
                  "First-time homebuyers easing into full mortgage payments gradually",
                  "Buyers who want breathing room during a move, renovation, or transition period",
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
                  "Lower payments in years 1 and 2 — meaningful monthly savings when it matters most",
                  "No change to the loan's structure — it's a standard fixed-rate mortgage underneath",
                  "Can be funded by the seller or builder — often negotiated as part of the purchase, at no cost to the buyer",
                  "No prepayment penalty for paying off early or refinancing — if rates drop, you're not locked in",
                  "Predictable step-up schedule — you know exactly what your payment will be each year going in",
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

      {/* --- WHO TYPICALLY FUNDS THE BUYDOWN --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            04 — Funding Options
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            Who Typically Funds the Buydown
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              source: "Seller",
              desc: "Common in a buyer's market — seller offers the buydown as a concession instead of a price reduction.",
              icon: Building,
            },
            {
              source: "Builder",
              desc: "New construction builders often offer buydowns as a purchase incentive.",
              icon: Sparkles,
            },
            {
              source: "Lender",
              desc: "Some lenders offer lender-paid buydowns as a promotional incentive.",
              icon: ShieldCheck,
            },
            {
              source: "Buyer",
              desc: "Buyers can also fund their own buydown out of pocket if desired.",
              icon: UserCheck,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-primary-bg border border-line rounded-2xl p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center font-bold text-sm mb-4">
                  <item.icon size={20} />
                </div>
                <h3 className="font-semibold text-base text-ink mb-2">
                  {item.source}
                </h3>
                <p className="text-xs text-ink-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BUYDOWN VS DISCOUNT POINTS TABLE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            05 — Comparison
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            2/1 Buydown vs. Permanent Rate Buydown (Discount Points)
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm">
          <table className="w-full text-left text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">Feature</th>
                <th className="px-6 py-4 font-semibold text-moss-deep">
                  2/1 Buydown
                </th>
                <th className="px-6 py-4 font-semibold">Discount Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              <tr>
                <td className="px-6 py-4 font-semibold">Duration</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Temporary — 2 years
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Permanent — life of loan
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Rate reduction</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Steps up over 2 years
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Fixed reduction for entire term
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Best for</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Short-term payment relief, rate-drop bets
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Buyers keeping the loan long-term
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Cost structure</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Upfront funds held in escrow
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Paid upfront to permanently buy down rate
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
            Typical Requirements
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
                <td className="px-6 py-4 font-semibold">Loan types</td>
                <td className="px-6 py-4 text-ink-2">
                  Conventional, FHA, VA (program-dependent)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Occupancy</td>
                <td className="px-6 py-4 text-ink-2">
                  Primary residence most common; some programs allow second
                  homes
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Qualification</td>
                <td className="px-6 py-4 text-ink-2">
                  Borrower typically must qualify at the note rate, not the
                  bought-down rate
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Funding source</td>
                <td className="px-6 py-4 text-ink-2">
                  Seller, builder, lender, or buyer
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

      {/* --- BUYDOWN CALCULATOR (CLIENT COMPONENT) --- */}
      <BuydownCalculator pagePath="/2-1-buydown" />

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
              q: "Do I need to qualify at the reduced rate or the full note rate?",
              a: "Most programs require you to qualify at the full note rate, since that's the rate you'll eventually pay. This ensures the payment is sustainable once the buydown period ends.",
            },
            {
              q: "What happens if I refinance or sell before the two years are up?",
              a: "Any unused buydown funds are typically applied to your loan balance or, depending on the program, may be forfeited — ask your loan officer how your specific program handles this.",
            },
            {
              q: "Is a 2/1 buydown the same as an adjustable-rate mortgage (ARM)?",
              a: "No. Your loan remains fixed-rate for its entire term. Only the effective payment in years 1 and 2 is temporarily reduced through subsidized funds — the rate isn't adjusting based on the market.",
            },
            {
              q: "Can I combine a 2/1 buydown with other rate programs?",
              a: "This depends on the lender and loan program — your loan officer can review what can be layered together.",
            },
            {
              q: "Who pays for the buydown?",
              a: "It's most commonly negotiated as a seller or builder concession, but lenders and buyers can also fund it depending on the situation.",
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
            Ready to Ease Into Your Payment?
          </h2>
          <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-8 max-w-xl mx-auto">
            Talk to a MyLoanDesk loan officer to see if a 2/1 buydown makes
            sense for your purchase, and what it could save you in the first two
            years.
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
              Calculate My Buydown Savings
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
