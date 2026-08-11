import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Globe,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
  Home,
  FileCheck,
  BadgeCheck,
  CreditCard,
  Building,
  Calculator,
} from "lucide-react";

import ForeignNationalCalculator from "@/components/site/LoanPrograms/ForeignNationalLoans/ForeignNationalCalculator";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Foreign National & International Buyer Loans | MyLoanDesk",
  description:
    "U.S. property financing for international buyers and non-U.S. citizens. Access specialized mortgage programs for second homes, vacation properties, and rentals.",
  openGraph: {
    title: "Foreign National Mortgage Solutions in U.S. | MyLoanDesk",
    description:
      "Finance U.S. real estate without a U.S. credit score or Social Security number. Options for foreign income, foreign asset reserves, and rental cash-flow loans.",
    type: "website",
  },
};

export default function ForeignNationalLoansPage() {
  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Globe size={14} />
              International Real Estate Financing
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              Foreign National &amp; International Buyer Loans{" "}
              <span className="block text-[#D4A574] font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-1">
                U.S. Property Financing for International Buyers
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/80 leading-relaxed mb-6 max-w-2xl">
              You don&apos;t necessarily need to be a U.S. citizen or permanent
              resident to finance real estate in the United States.
            </p>

            <p className="text-xs sm:text-sm text-primary-bg/70 leading-relaxed mb-8 max-w-2xl">
              MyLoanDesk provides access to mortgage programs designed for
              eligible foreign nationals and international buyers purchasing or
              refinancing U.S. real estate. Whether you&apos;re purchasing a
              vacation home, second home, rental property, or investment
              property, we&apos;ll help you explore available financing options.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
              >
                Explore Foreign National Loan Options
                <ArrowRight size={18} />
              </Link>
              <a
                href="#calculator"
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Calculator size={18} />
                Calculate Down Payment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS A FOREIGN NATIONAL MORTGAGE? --- */}
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
              What Is a Foreign National Mortgage?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              A foreign national mortgage is designed for eligible non-U.S.
              borrowers who want to finance property in the United States but
              may not meet the documentation requirements of a traditional U.S.
              mortgage.
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Instead of relying exclusively on U.S. income, credit, or tax
              documentation, specialized lenders may consider international
              income, assets, credit references, and other documentation.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
              Who May Benefit?
            </div>
            <p className="text-xs text-ink-2 mb-4">
              Foreign national financing may be appropriate for eligible
              borrowers who:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-ink">
              {[
                "Live primarily outside the United States",
                "Want to purchase U.S. real estate",
                "Have limited or no U.S. credit history",
                "Earn income outside the United States",
                "Hold assets in foreign financial institutions",
                "Want to purchase U.S. investment or second-home property",
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

      {/* --- PROPERTY FINANCING OPTIONS --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              02 — Program Categories
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink",
                fraunces.className,
              )}
            >
              Property Financing Options
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 mt-2">
              Depending on the lender and borrower profile, financing may be
              available for:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Investment Properties",
                desc: "Purchase U.S. rental property and build a real estate portfolio.",
                icon: Building2,
              },
              {
                title: "Second Homes",
                desc: "Finance an eligible second home or vacation property.",
                icon: Home,
              },
              {
                title: "Condominiums",
                desc: "Programs may be available for eligible condominium properties.",
                icon: Building,
              },
              {
                title: "Rental-Income-Based",
                desc: "Certain investment programs focus primarily on property rental income rather than traditional U.S. employment.",
                icon: FileCheck,
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

      {/* --- NO U.S. CREDIT HISTORY? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/30 border border-line rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
              03 — Credit Flexibility
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              No U.S. Credit History?
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-4">
              That doesn&apos;t automatically prevent financing.
            </p>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              Certain foreign national programs are specifically designed for
              borrowers without traditional U.S. credit profiles. Depending on
              the lender, international credit references or other documentation
              may be considered.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 text-center">
            <Link
              href="/calendar"
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm inline-flex items-center justify-center gap-2"
            >
              Discuss My Options
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- WHAT DOCUMENTATION IS TYPICALLY NEEDED? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/30 border border-line rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl mb-8">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
              04 — Documentation
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              What Documentation Is Typically Needed?
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              Requirements vary by lender but may include:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              "Passport or acceptable identification",
              "Visa documentation when applicable",
              "Foreign income documentation",
              "Bank and asset statements",
              "International credit references",
              "Proof of funds",
              "Property documentation",
              "U.S. banking arrangements when required",
            ].map((doc, idx) => (
              <div
                key={idx}
                className="bg-primary-bg border border-line rounded-xl p-4 flex items-center gap-3"
              >
                <BadgeCheck size={18} className="text-brand-orange shrink-0" />
                <span className="text-xs font-medium text-ink">{doc}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-ink-2 italic font-medium text-center">
            * Foreign documents may require translation or additional
            verification. We&apos;ll tell you what is required after reviewing
            your situation.
          </p>
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
              International borrowers don&apos;t fit neatly into traditional
              mortgage guidelines.
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              We work to identify financing programs that accommodate foreign
              income, assets, credit history, residency status, and the intended
              use of the property.
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
              Buying property in the United States from abroad?
            </h3>
            <p className="text-xs text-primary-bg/80 leading-relaxed mb-6">
              Let us help you evaluate specialized non-resident mortgage
              programs.
            </p>
            <Link
              href="/get-quote"
              className="btn-shine bg-brand-orange text-primary-bg px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-sm"
            >
              Discuss My Financing Options
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FOREIGN NATIONAL CALCULATOR (CLIENT COMPONENT) --- */}
      <ForeignNationalCalculator pagePath="/foreign-national-loans" />

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
            Foreign National Mortgage FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Can a non-U.S. citizen buy property in the United States?",
              a: "Generally, foreign ownership itself does not prevent someone from purchasing U.S. real estate, although financing, tax, legal, and other requirements can differ.",
            },
            {
              q: "Do I need U.S. credit?",
              a: "Not necessarily. Some foreign national mortgage programs permit alternative credit documentation.",
            },
            {
              q: "Can foreign income be used?",
              a: "Potentially. Documentation and verification requirements vary by lender.",
            },
            {
              q: "Can I finance a U.S. investment property?",
              a: "Yes, subject to lender, borrower, and property requirements.",
            },
            {
              q: "Can I qualify based on rental income?",
              a: "Certain investment-property programs may use the property's rental income as an important part of qualification.",
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
            Investing in U.S. Real Estate? Start With the Financing.
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
            Foreign national lending requirements, eligible residency
            classifications, documentation, property types, rates, terms, and
            availability vary by lender. Borrowers should consult appropriate
            tax and legal professionals regarding the implications of U.S.
            property ownership.
          </p>
        </div>
      </section>
    </main>
  );
}
