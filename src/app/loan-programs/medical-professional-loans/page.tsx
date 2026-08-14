import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Stethoscope,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  FileCheck,
  Award,
  Building2,
  GraduationCap,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import MedicalProfessionalCalculator from "@/components/site/LoanPrograms/MedicalProfessionalLoans/MedicalProfessionalCalculator";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Medical Professional Loan Programs | MyLoanDesk",
  description:
    "Specialized mortgage programs designed for physicians, dentists, residents, and eligible healthcare professionals. Qualify with student debt or new employment contracts.",
  openGraph: {
    title: "Medical Professional Mortgage Solutions | MyLoanDesk",
    description:
      "Mortgage programs recognizing the unique earning potential and financial profiles of doctors and medical professionals.",
    type: "website",
    url: "/loan-programs/medical-professional-loans",
  },
  alternates: {
    canonical: "/loan-programs/medical-professional-loans/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MedicalProfessionalLoansPage() {
  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Stethoscope size={14} />
              Specialized Physician &amp; Healthcare Financing
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              Medical Professional Loan Programs{" "}
              <span className="block text-[#D4A574] font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-1">
                Mortgage Solutions Designed for Medical Professionals
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/80 leading-relaxed mb-6 max-w-2xl">
              A strong career doesn&apos;t always translate into an easy
              mortgage approval. Physicians and other medical professionals can
              have substantial earning potential while carrying student debt,
              beginning a new position, completing residency, or having limited
              funds available for a traditional down payment.
            </p>

            <p className="text-xs sm:text-sm text-primary-bg/70 leading-relaxed mb-8 max-w-2xl">
              MyLoanDesk provides access to specialized mortgage programs
              designed for eligible medical professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
              >
                Explore Medical Professional Loan Options
                <ArrowRight size={18} />
              </Link>
              <a
                href="#calculator"
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                Calculate DTI Impact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS A MEDICAL PROFESSIONAL LOAN? --- */}
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
              What Is a Medical Professional Loan?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              Medical professional mortgage programs are specialized financing
              options that recognize the unique financial profile of doctors and
              other eligible healthcare professionals.
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              Depending on the program, lenders may offer flexible qualification
              guidelines, competitive financing options, or different treatment
              of certain financial factors compared with standard mortgage
              programs.
            </p>

            <p className="text-xs text-ink-2/80 italic">
              * Eligibility varies significantly by lender and profession.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
              Who May Qualify?
            </div>
            <p className="text-xs text-ink-2 mb-4">
              Depending on the lender, eligible professions may include:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-ink">
              {[
                "Physicians (MD, DO)",
                "Dentists & Dental Surgeons (DDS, DMD)",
                "Veterinarians (DVM)",
                "Pharmacists (PharmD)",
                "Optometrists (OD)",
                "Podiatrists (DPM)",
                "Certain other licensed medical professionals",
              ].map((profession, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="text-moss-deep shrink-0 mt-0.5"
                  />
                  <span>{profession}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-line/60 text-xs text-ink-2">
              <strong>Residents &amp; Fellows:</strong> Residents, fellows, and
              newly practicing professionals may also have options with certain
              lenders.
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY MEDICAL PROFESSIONALS USE THESE PROGRAMS --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              02 — Advantages
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink",
                fraunces.className,
              )}
            >
              Why Medical Professionals Use These Programs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "High Earning, Limited Savings",
                desc: "Years of education and training can mean a medical professional begins earning significant income before accumulating a large down payment.",
                icon: TrendingUp,
              },
              {
                title: "Student Loan Debt",
                desc: "Student loans can affect qualification under conventional DTI calculations. Specialized programs may evaluate these obligations differently.",
                icon: GraduationCap,
              },
              {
                title: "New Employment",
                desc: "Some eligible borrowers may be able to qualify using an employment contract or documented future income, subject to lender requirements.",
                icon: FileCheck,
              },
              {
                title: "Flexible Financing",
                desc: "Certain medical professional programs may offer higher financing levels or other specialized terms for qualifying borrowers.",
                icon: Sparkles,
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

      {/* --- BUYING BEFORE YOU START YOUR NEW POSITION? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/30 border border-line rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
              03 — Contract Underwriting
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              Buying Before You Start Your New Position?
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-4">
              You may not necessarily need years of income from your new job
              before exploring a mortgage.
            </p>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              Some programs may consider a signed employment contract or offer
              letter when the borrower will begin qualifying employment within
              an acceptable period. We&apos;ll review your employment situation
              and determine which lender guidelines may apply.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 text-center">
            <Link
              href="/calendar"
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm inline-flex items-center justify-center gap-2"
            >
              Consult an Advisor
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- MEDICAL PROFESSIONAL LOAN VS CONVENTIONAL MORTGAGE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              04 — Comparison
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light leading-tight mb-6",
                fraunces.className,
              )}
            >
              Medical Professional Loan vs. Conventional Mortgage
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              A conventional mortgage may still be the better choice for some
              borrowers.
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              That&apos;s why MyLoanDesk doesn&apos;t assume a specialized
              medical professional loan is automatically your best option. We
              can compare available conventional, jumbo, and specialized medical
              professional programs based on your circumstances.
            </p>
          </div>

          <div className="lg:col-span-5 bg-primary-bg border border-line rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3
              className={cn(
                "text-xl font-semibold text-ink mb-4",
                fraunces.className,
              )}
            >
              Comparison Factors
            </h3>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-3 bg-cream/40 rounded-xl border border-line/60">
                <strong className="text-ink font-semibold block mb-1">
                  Student Loan Assessment:
                </strong>
                <span className="text-ink-2">
                  Standard 1% payment calculation vs. Income-Driven / deferred
                  allowance.
                </span>
              </div>
              <div className="p-3 bg-cream/40 rounded-xl border border-line/60">
                <strong className="text-ink font-semibold block mb-1">
                  Down Payment Options:
                </strong>
                <span className="text-ink-2">
                  Standard guidelines vs. specialized low/no-down payment tiers
                  for doctors.
                </span>
              </div>
              <div className="p-3 bg-cream/40 rounded-xl border border-line/60">
                <strong className="text-ink font-semibold block mb-1">
                  Future Income Allowance:
                </strong>
                <span className="text-ink-2">
                  W-2 pay stub requirements vs. signed employment contract
                  approval.
                </span>
              </div>
            </div>
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
              Different lenders define &quot;medical professional&quot;
              differently and offer different qualification requirements.
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              We help you compare programs rather than assuming one
              lender&apos;s program is your only choice.
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
              Starting residency, relocating, or buying your next home?
            </h3>
            <p className="text-xs text-primary-bg/80 leading-relaxed mb-6">
              Explore specialized medical programs tailored around your medical
              specialty, contract start date, and debt profile.
            </p>
            <Link
              href="/get-quote"
              className="btn-shine bg-brand-orange text-primary-bg px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-sm"
            >
              Get My Loan Options
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- MEDICAL PROFESSIONAL CALCULATOR (CLIENT COMPONENT) --- */}
      <MedicalProfessionalCalculator pagePath="/medical-professional-loans" />

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
            Medical Professional Loan FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Do medical professional loans require mortgage insurance?",
              a: "It depends on the lender, financing level, and program. Certain specialized programs may provide alternatives to traditional mortgage-insurance structures.",
            },
            {
              q: "Can residents and fellows qualify?",
              a: "Potentially. Some lenders offer programs for eligible residents and fellows.",
            },
            {
              q: "Can I qualify using a new employment contract?",
              a: "Certain lenders may permit qualification based on an acceptable employment contract or offer letter, subject to their guidelines.",
            },
            {
              q: "What professions qualify?",
              a: "Eligibility varies by lender. Physicians and dentists are commonly included, while some programs extend eligibility to additional healthcare professions.",
            },
            {
              q: "Should I use a medical professional loan or conventional mortgage?",
              a: "It depends. Comparing both can help determine which financing structure better fits your goals.",
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
            Your Career Is Specialized. Your Mortgage Can Be Too.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link
              href="/get-quote"
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Explore My Options
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="text-[11px] text-ink-2/70 mt-6 leading-relaxed italic max-w-2xl mx-auto">
            Eligibility, financing levels, occupation requirements, loan
            amounts, rates, terms, and program availability vary by lender and
            are subject to underwriting and approval.
          </p>
        </div>
      </section>
    </main>
  );
}
