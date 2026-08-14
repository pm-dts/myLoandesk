import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  FileText,
  CheckCircle2,
  Calculator,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  Building2,
  Briefcase,
  BadgeCheck,
  CreditCard,
  Globe,
} from "lucide-react";

import ItinCalculator from "@/components/site/LoanPrograms/ITINLoans/ITINCalculator";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "ITIN Loans - Home Financing Without a Social Security Number | MyLoanDesk",
  description:
    "Explore ITIN mortgage programs designed for borrowers with an Individual Taxpayer Identification Number who may not qualify for traditional mortgage financing.",
  openGraph: {
    title: "ITIN Loans - Home Financing Without an SSN | MyLoanDesk",
    description:
      "Purchase or refinance a home using your Individual Taxpayer Identification Number (ITIN). Flexible options for self-employed, 1099, and alternative credit profiles.",
    type: "website",
    url: "/loan-programs/itin-loans",
  },
  alternates: {
    canonical: "/loan-programs/itin-loans/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ItinLoansPage() {
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
              Specialized ITIN Mortgage Solutions
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              ITIN Loans{" "}
              <span className="block text-[#D4A574] font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-1">
                Home Financing Without a Social Security Number
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/80 leading-relaxed mb-6 max-w-2xl">
              Not having a Social Security number doesn&apos;t necessarily mean
              homeownership is out of reach.
            </p>

            <p className="text-xs sm:text-sm text-primary-bg/70 leading-relaxed mb-8 max-w-2xl">
              MyLoanDesk offers access to ITIN mortgage programs designed for
              borrowers who use an Individual Taxpayer Identification Number
              (ITIN) and may not qualify for traditional mortgage financing.
              Whether you&apos;re purchasing your first home, moving to a new
              property, or refinancing an existing mortgage, we&apos;ll help you
              explore financing options based on your individual situation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
              >
                Get My Loan Options
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

      {/* --- WHAT IS AN ITIN LOAN? --- */}
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
              What Is an ITIN Loan?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              An ITIN loan is a mortgage option for eligible borrowers who have
              an Individual Taxpayer Identification Number instead of a Social
              Security number.
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              ITIN mortgages are generally offered through specialized lending
              programs rather than traditional agency mortgage programs.
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Qualification requirements vary by lender and may consider factors
              such as income, employment or self-employment history, credit
              history, assets, down payment, and the property being financed.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
              Key Qualification Factors
            </div>
            <ul className="space-y-3.5 text-xs sm:text-sm text-ink">
              {[
                "Verifiable Income or Qualifying Documentation",
                "Employment or Self-Employment History",
                "Established U.S. Credit or Alternative Credit",
                "Down Payment and Closing Cost Reserves",
                "Eligible Primary Residence or Property Type",
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

      {/* --- WHO MAY BENEFIT FROM AN ITIN LOAN? --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
                02 — Eligibility
              </div>
              <h2
                className={cn(
                  "text-2xl sm:text-3xl font-light text-ink mb-6",
                  fraunces.className,
                )}
              >
                Who May Benefit From an ITIN Loan?
              </h2>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
                An ITIN mortgage may be worth exploring if you:
              </p>
              <ul className="space-y-4">
                {[
                  "Have a valid ITIN",
                  "Do not have a Social Security number",
                  "Want to purchase a primary residence or other eligible property",
                  "Have verifiable income or qualifying alternative documentation",
                  "Have funds available for the required down payment and closing costs",
                  "Have established U.S. credit or acceptable alternative credit, depending on the program",
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

            <div className="bg-primary-bg border border-line p-8 rounded-3xl shadow-sm text-center">
              <div className="w-12 h-12 bg-moss-deep/10 text-moss-deep rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserCheck size={24} />
              </div>
              <h3
                className={cn(
                  "text-2xl font-light text-ink mb-3",
                  fraunces.className,
                )}
              >
                Tailored To Your Circumstances
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
                Every borrower&apos;s situation is different, so our job is to
                identify programs that fit your circumstances.
              </p>
              <Link
                href="/get-quote"
                className="btn-shine bg-brand-orange text-primary-bg px-6 py-3 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-orange-600 transition-colors"
              >
                Check My ITIN Loan Options
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- ITIN LOAN OPTIONS --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
            03 — Programs
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            ITIN Loan Options
          </h2>
          <p className="text-xs sm:text-sm text-ink-2 mt-2">
            Depending on the lender and borrower profile, programs may be
            available for:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Home Purchase",
              desc: "Finance the purchase of an eligible property using your ITIN.",
              icon: Building2,
            },
            {
              title: "Refinance",
              desc: "Explore refinancing options for an existing property.",
              icon: ShieldCheck,
            },
            {
              title: "Self-Employed Borrowers",
              desc: "Certain programs may provide alternative ways of documenting income for business owners and self-employed borrowers.",
              icon: Briefcase,
            },
            {
              title: "Alternative Credit",
              desc: "Some lenders may consider alternative credit histories when traditional credit is limited.",
              icon: CreditCard,
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
      </section>

      {/* --- WHAT DOCUMENTS MAY BE REQUIRED? --- */}
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
              What Documents May Be Required?
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              Requirements vary, but borrowers may be asked to provide:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Valid ITIN documentation",
              "Government-issued identification",
              "Proof of income or qualifying alternative documentation",
              "Bank or asset statements",
              "Employment or business information",
              "Housing payment history",
              "Down payment and reserve documentation",
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
            We&apos;ll tell you what is required after reviewing your situation.
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
              ITIN financing isn&apos;t a one-size-fits-all mortgage.
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              Instead of limiting you to one lender&apos;s guidelines,
              MyLoanDesk can review available lending programs and help identify
              options that may fit your income, assets, credit profile,
              property, and goals.
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
              Have an ITIN and want to buy a home?
            </h3>
            <p className="text-xs text-primary-bg/80 leading-relaxed mb-6">
              Let us help you explore specialized mortgage programs designed
              around your individual profile.
            </p>
            <Link
              href="/get-quote"
              className="btn-shine bg-brand-orange text-primary-bg px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-sm"
            >
              Check My ITIN Loan Options
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- ITIN CALCULATOR (CLIENT COMPONENT) --- */}
      <ItinCalculator pagePath="/itin-loans" />

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
            ITIN Loan FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Can I get a mortgage with an ITIN?",
              a: "Potentially. Specialized lenders offer mortgage programs for eligible borrowers who use an ITIN rather than a Social Security number.",
            },
            {
              q: "Do ITIN loans require a large down payment?",
              a: "Down-payment requirements vary by lender, property type, credit profile, and loan program.",
            },
            {
              q: "Can self-employed borrowers qualify?",
              a: "Yes, depending on the program. Some lenders offer alternative income-documentation options for eligible self-employed borrowers.",
            },
            {
              q: "Do I need U.S. credit?",
              a: "Requirements vary. Some programs may consider borrowers with established U.S. credit, while others may permit alternative credit documentation.",
            },
            {
              q: "Can MyLoanDesk help me determine whether I qualify?",
              a: "Yes. Tell us about your situation and we'll review available options.",
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
            Ready to Explore ITIN Mortgage Options?
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
            Loan programs, qualification requirements, rates, terms, and
            availability vary by lender and are subject to change. All loans are
            subject to underwriting and approval.
          </p>
        </div>
      </section>
    </main>
  );
}
