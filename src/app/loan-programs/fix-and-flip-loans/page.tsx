import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Hammer,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  FileText,
  DollarSign,
  Briefcase,
  ShieldCheck,
  RefreshCw,
  Zap,
  Home,
} from "lucide-react";

import FixAndFlipCalculator from "@/components/site/LoanPrograms/FixFlipLoans/FixFlipCalculator";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fix & Flip Loans - Short-Term Investor Financing | MyLoanDesk",
  description:
    "Short-term financing for real estate investors purchasing properties that need renovation. Finance acquisition, rehab, and eligible rehabilitation projects.",
  openGraph: {
    title: "Fix & Flip Loans for Real Estate Investors | MyLoanDesk",
    description:
      "Fast, flexible short-term financing for acquisition and renovation projects. Explore your investor exit strategies with MyLoanDesk.",
    type: "website",
  },
};

export default function FixAndFlipLoansPage() {
  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Hammer size={14} />
              Real Estate Investor Financing
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              Fix &amp; Flip Loans{" "}
              <span className="block text-[#D4A574] font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-1">
                Short-Term Financing for Real Estate Investors
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/80 leading-relaxed mb-6 max-w-2xl">
              When an investment opportunity appears, speed and financing
              flexibility can matter. Fix &amp; flip loans are designed for real
              estate investors purchasing properties that need renovation before
              resale or refinancing.
            </p>

            <p className="text-xs sm:text-sm text-primary-bg/70 leading-relaxed mb-8 max-w-2xl">
              MyLoanDesk provides access to investor-focused financing for
              acquisition, renovation, and eligible rehabilitation projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
              >
                Explore Fix &amp; Flip Financing
                <ArrowRight size={18} />
              </Link>
              <a
                href="#calculator"
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                Calculate Deal Margin
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS A FIX & FLIP LOAN? --- */}
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
              What Is a Fix &amp; Flip Loan?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              A fix &amp; flip loan is generally short-term financing used to
              purchase and renovate an investment property.
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Unlike a traditional owner-occupied mortgage, the lender may place
              significant emphasis on the property, project, investor
              experience, renovation budget, and expected value after
              improvements are completed.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
              What Can a Fix &amp; Flip Loan Finance?
            </div>
            <p className="text-xs text-ink-2 mb-4">
              Depending on the lender and project, financing may be available
              for:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-ink">
              {[
                "Property acquisition",
                "Renovation costs",
                "Rehabilitation projects",
                "Single-family investment properties",
                "Certain multifamily properties",
                "Experienced and qualifying newer investors",
                "Properties intended for resale",
                "Properties intended to be refinanced and held as rentals",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="text-moss-deep shrink-0 mt-0.5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- HOW FIX & FLIP FINANCING WORKS --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              02 — Process
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink",
                fraunces.className,
              )}
            >
              How Fix &amp; Flip Financing Works
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Find the Property",
                desc: "Identify an investment opportunity and estimate acquisition and renovation costs.",
              },
              {
                step: "2",
                title: "Determine Renovation Scope",
                desc: "Prepare a realistic scope of work and construction budget.",
              },
              {
                step: "3",
                title: "Evaluate the ARV",
                desc: "The property's projected value after renovation — After-Repair Value (ARV) — is a key part of analysis.",
              },
              {
                step: "4",
                title: "Close and Renovate",
                desc: "After approval and closing, renovation funds are released according to the lender's draw process.",
              },
              {
                step: "5",
                title: "Execute Exit Strategy",
                desc: "Once complete, investors typically sell the property or refinance into longer-term rental financing.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-primary-bg border border-line rounded-2xl p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center font-bold text-sm mb-4">
                    0{item.step}
                  </div>
                  <h3 className="font-semibold text-sm text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHAT DO FIX & FLIP LENDERS LOOK AT? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            03 — Underwriting Variables
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            What Do Fix &amp; Flip Lenders Look At?
          </h2>
          <p className="text-xs sm:text-sm text-ink-2 mt-2 max-w-xl">
            Depending on the program, lenders evaluate multiple facets of the
            property, project, and borrower profile:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { title: "Purchase Price", icon: DollarSign },
            { title: "Current Property Value", icon: Home },
            { title: "After-Repair Value (ARV)", icon: TrendingUp },
            { title: "Renovation Budget", icon: Hammer },
            { title: "Investor Experience", icon: Briefcase },
            { title: "Credit Profile", icon: ShieldCheck },
            { title: "Liquidity & Reserves", icon: Zap },
            { title: "Project Scope", icon: FileText },
            { title: "Contractor Information", icon: CheckCircle2 },
            { title: "Exit Strategy", icon: RefreshCw },
          ].map((varItem, idx) => (
            <div
              key={idx}
              className="bg-primary-bg border border-line rounded-xl p-4 flex items-center gap-3 shadow-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-moss-deep/10 text-moss-deep flex items-center justify-center shrink-0">
                <varItem.icon size={16} />
              </div>
              <span className="text-xs font-semibold text-ink">
                {varItem.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- FLIP IT OR KEEP IT? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/30 border border-line rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
              04 — Exit Versatility
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              Flip It or Keep It?
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-4">
              Plans change. Maybe you originally intended to renovate and sell
              but decide the completed property makes sense as a rental.
            </p>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
              MyLoanDesk can also explore longer-term investor financing,
              including DSCR loans, when appropriate. That gives investors the
              ability to consider both exit strategies:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-primary-bg border border-line rounded-2xl text-center">
                <span className="text-xs font-bold text-moss-deep uppercase tracking-wider block mb-1">
                  Strategy A
                </span>
                <span className="text-sm font-semibold text-ink">
                  Renovate → Sell
                </span>
              </div>
              <div className="p-4 bg-primary-bg border border-line rounded-2xl text-center">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-1">
                  Strategy B
                </span>
                <span className="text-sm font-semibold text-ink">
                  Renovate → Refinance → Rent
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0 text-center">
            <Link
              href="/dscr-loans"
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm inline-flex items-center justify-center gap-2"
            >
              Explore DSCR Refinance
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- WHY MYLOANDESK? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              05 — Value Proposition
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light leading-tight mb-6",
                fraunces.className,
              )}
            >
              Why MyLoanDesk?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              Investment-property financing is about more than finding money.
              The loan needs to fit the acquisition price, rehab budget,
              timeline, projected value, and exit strategy.
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              We help investors explore financing options from acquisition
              through renovation and, when appropriate, into longer-term rental
              financing.
            </p>
          </div>

          <div className="lg:col-span-5 bg-moss-deep text-cream p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A574]/10 rounded-full blur-2xl pointer-events-none" />
            <h3
              className={cn(
                "text-2xl font-light text-primary-bg mb-4",
                fraunces.className,
              )}
            >
              Found your next investment property?
            </h3>
            <p className="text-xs text-primary-bg/80 leading-relaxed mb-6">
              Get custom loan options tailored to your specific acquisition
              scope and rehab schedule.
            </p>
            <Link
              href="/get-quote"
              className="btn-shine bg-brand-orange text-primary-bg px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-sm"
            >
              Review My Fix &amp; Flip Deal
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FIX & FLIP CALCULATOR (CLIENT COMPONENT) --- */}
      <FixAndFlipCalculator pagePath="/fix-and-flip-loans" />

      {/* --- FREQUENTLY ASKED QUESTIONS --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="text-center mb-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            06 — Clarity
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            Fix &amp; Flip Loan FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Are fix & flip loans only for experienced investors?",
              a: "Not necessarily. Some lenders work with newer investors, although experience may affect available terms and qualification.",
            },
            {
              q: "Can renovation costs be financed?",
              a: "Many fix & flip programs provide financing toward eligible renovation costs, subject to lender guidelines.",
            },
            {
              q: "What is ARV?",
              a: "ARV stands for After-Repair Value — the estimated value of the property after planned renovations are completed.",
            },
            {
              q: "How are renovation funds released?",
              a: "They are commonly released through a draw process as renovation work progresses.",
            },
            {
              q: "Can I refinance instead of selling?",
              a: "Potentially. Investors who decide to retain the property may be able to refinance into longer-term rental financing, such as a DSCR loan, subject to qualification.",
            },
            {
              q: "How quickly can a fix & flip loan close?",
              a: "Timing varies by lender, borrower, property, appraisal or valuation requirements, and how complete the file is.",
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
            Your Next Deal Starts With the Right Financing.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link
              href="/get-quote"
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Get My Loan Options
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="text-[11px] text-ink-2/70 mt-6 leading-relaxed italic max-w-2xl mx-auto">
            Fix &amp; flip financing is subject to underwriting, property and
            project approval, valuation, borrower experience, liquidity, credit,
            loan-to-cost and loan-to-value requirements. Terms and availability
            vary by lender.
          </p>
        </div>
      </section>
    </main>
  );
}
