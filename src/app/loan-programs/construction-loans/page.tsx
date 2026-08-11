import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Hammer,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Building2,
  MapPin,
  Briefcase,
  Layers,
  FileText,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  Zap,
  Calculator,
} from "lucide-react";

import ConstructionCalculator from "@/components/site/LoanPrograms/ConstructionLoans/ConstructionCalculator";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Construction Loans - Build From the Ground Up | MyLoanDesk",
  description:
    "Financing to build from the ground up. Explore construction-to-permanent, land + construction, and investor build financing with MyLoanDesk.",
  openGraph: {
    title: "Construction Loans for Homeowners & Investors | MyLoanDesk",
    description:
      "Finance land acquisition and construction draws for residential and investment projects. Flexible options for builders, developers, and homeowners.",
    type: "website",
  },
};

export default function ConstructionLoansPage() {
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
              Ground-Up Build Financing
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              Construction Loans{" "}
              <span className="block text-[#D4A574] font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-1">
                Financing to Build From the Ground Up
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/80 leading-relaxed mb-6 max-w-2xl">
              Building a home or investment property requires a different type
              of financing than purchasing an existing property.
            </p>

            <p className="text-xs sm:text-sm text-primary-bg/70 leading-relaxed mb-8 max-w-2xl">
              Construction loans are designed to help finance eligible land
              acquisition and construction costs while a property is being
              built. MyLoanDesk provides access to construction financing
              options for homeowners, investors, builders, and developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
              >
                Explore Construction Loan Options
                <ArrowRight size={18} />
              </Link>
              <a
                href="#calculator"
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Calculator size={18} />
                Calculate Construction Budget
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS A CONSTRUCTION LOAN? --- */}
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
              What Is a Construction Loan?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              A construction loan provides financing for an eligible
              construction project, with funds generally released in stages as
              work is completed.
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              Rather than receiving all construction funds at closing, borrowers
              typically access funds through a draw process tied to the
              project&apos;s progress.
            </p>

            <p className="text-xs text-ink-2/80 italic">
              * The exact structure depends on the lender and type of
              construction loan.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
              Core Draw Mechanics
            </div>
            <ul className="space-y-3.5 text-xs sm:text-sm text-ink">
              {[
                "Stage-Based Fund Releases",
                "Verified Draw Inspections",
                "Interest Charged Only on Drawn Funds",
                "Land Acquisition Integration Options",
                "Conversion or Refinance to Permanent Loan",
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

      {/* --- CONSTRUCTION FINANCING OPTIONS --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              02 — Program Structures
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink",
                fraunces.className,
              )}
            >
              Construction Financing Options
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Construction-to-Permanent Loans",
                desc: "Finance construction and transition into longer-term mortgage financing after the home is completed, subject to the specific program structure.",
                icon: RefreshCw,
              },
              {
                title: "Ground-Up Construction",
                desc: "Financing for qualifying residential or investment projects being built from the ground up.",
                icon: Building2,
              },
              {
                title: "Investor Construction Loans",
                desc: "Programs may be available for experienced real estate investors and builders constructing properties for sale or rental.",
                icon: Briefcase,
              },
              {
                title: "Land + Construction",
                desc: "Certain programs may allow eligible land acquisition or existing land equity to be incorporated into the financing structure.",
                icon: MapPin,
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

      {/* --- HOW CONSTRUCTION FINANCING WORKS --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
            03 — Process
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            How Construction Financing Works
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Project Review",
              desc: "The lender reviews the borrower, plans, specifications, budget, builder, property, and proposed project.",
            },
            {
              step: "2",
              title: "Approval & Closing",
              desc: "Once underwriting and project requirements are satisfied, the construction loan closes.",
            },
            {
              step: "3",
              title: "Construction Draws",
              desc: "Funds are generally released in stages as specified work is completed and verified.",
            },
            {
              step: "4",
              title: "Project Completion",
              desc: "Loan converts to permanent financing or is paid off/refinanced depending on original structure.",
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

      {/* --- WHAT WILL THE LENDER REVIEW? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            04 — Underwriting Variables
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            What Will the Lender Review?
          </h2>
          <p className="text-xs sm:text-sm text-ink-2 mt-2 max-w-xl">
            Construction underwriting includes thorough evaluation across
            project, borrower, and contractor variables:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { title: "Borrower Credit & Profile", icon: ShieldCheck },
            { title: "Plans & Specifications", icon: FileText },
            { title: "Construction Budget", icon: DollarSign },
            { title: "Builder Experience", icon: Briefcase },
            { title: "Construction Contract", icon: Layers },
            { title: "Project Timeline", icon: Zap },
            { title: "Property Appraisal", icon: TrendingUp },
            { title: "Land Cost or Value", icon: MapPin },
            { title: "Borrower Equity", icon: DollarSign },
            { title: "Investor Exit Strategy", icon: RefreshCw },
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

      {/* --- ALREADY OWN THE LAND? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/30 border border-line rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
              05 — Equity Credit
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              Already Own the Land?
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-4">
              Your existing land equity may be important.
            </p>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              Depending on the lender and transaction structure, eligible land
              equity may be considered when determining the borrower&apos;s
              contribution to the project. We&apos;ll review how the land was
              acquired, its value, existing liens, and the proposed construction
              budget.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 text-center">
            <Link
              href="/calendar"
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm inline-flex items-center justify-center gap-2"
            >
              Review My Land Equity
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
              06 — Value Proposition
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
              Construction financing involves more than simply comparing
              interest rates. The lender needs to fit the project.
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              We help evaluate financing based on the borrower, property,
              builder, budget, construction timeline, and long-term plan for the
              completed property.
            </p>
          </div>

          <div className="lg:col-span-5 bg-moss-deep text-cream p-8 rounded-3xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A574]/10 rounded-full blur-2xl pointer-events-none" />
            <h3
              className={cn(
                "text-2xl font-light text-primary-bg mb-4",
                fraunces.className,
              )}
            >
              Have plans, land, or a construction budget ready?
            </h3>
            <p className="text-xs text-primary-bg/80 leading-relaxed mb-6">
              Get customized construction loan terms tailored to your build
              specifications and contractor timeline.
            </p>
            <Link
              href="/get-quote"
              className="btn-shine bg-brand-orange text-primary-bg px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-sm"
            >
              Review My Construction Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- CONSTRUCTION CALCULATOR (CLIENT COMPONENT) --- */}
      <ConstructionCalculator pagePath="/construction-loans" />

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
            Construction Loan FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Do I need to own the land first?",
              a: "Not always. Certain construction programs may incorporate eligible land acquisition into the transaction.",
            },
            {
              q: "Can land equity count toward my contribution?",
              a: "Potentially, depending on the lender and transaction structure.",
            },
            {
              q: "How are construction funds released?",
              a: "Construction funds are typically released through draws as specified stages of work are completed and verified.",
            },
            {
              q: "Do I need a licensed contractor?",
              a: "Builder and contractor requirements vary by lender and program.",
            },
            {
              q: "Can investors get construction financing?",
              a: "Yes. Specialized programs may be available for qualifying investors, builders, and developers.",
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
            Let&apos;s Find Financing That Fits Your Project.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link
              href="/get-quote"
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Get My Construction Loan Options
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="text-[11px] text-ink-2/70 mt-6 leading-relaxed italic max-w-2xl mx-auto">
            Construction financing is subject to lender approval, project
            review, appraisal, builder approval, draw requirements, loan-to-cost
            and loan-to-value limitations, and other underwriting requirements.
          </p>
        </div>
      </section>
    </main>
  );
}
