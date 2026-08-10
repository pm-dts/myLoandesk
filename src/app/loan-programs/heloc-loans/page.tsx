import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Home,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Building2,
  DollarSign,
  TrendingUp,
} from "lucide-react";

import HelocCalculator from "@/components/site/LoanPrograms/HelocLoans/HelocCalculator";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home Equity Loans & HELOCs | MyLoanDesk",
  description:
    "Explore home equity loans and HELOC options. Compare ways to access your home equity while keeping your existing first mortgage in place.",
  openGraph: {
    title: "Home Equity Loans & HELOCs | MyLoanDesk",
    description:
      "Access your home equity without selling your home or replacing your current low mortgage rate.",
    type: "website",
  },
};

const VIDEO_URL =
  "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/HELOC+%E2%80%93+Access+the+Equity+in+Your+Home+Without+Refinancing_1080p_caption.mp4";

export default function HomeEquityHelocPage() {
  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Home size={14} />
              Home Equity Financing Solutions
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              Home Equity Loans &amp; HELOCs{" "}
              <span className="block text-[#D4A574] font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-1">
                Access Your Home Equity Without Selling Your Home
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/80 leading-relaxed mb-8 max-w-2xl">
              Your home may be one of your largest financial assets. A home
              equity loan or Home Equity Line of Credit (HELOC) can allow you to
              access a portion of that equity while continuing to own and live
              in your home.
            </p>

            <p className="text-xs sm:text-sm text-primary-bg/70 leading-relaxed mb-8 max-w-2xl">
              MyLoanDesk helps homeowners explore home equity financing options
              for renovations, major expenses, debt consolidation, investment
              opportunities, and other financial needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
              >
                Explore My Home Equity Options
                <ArrowRight size={18} />
              </Link>
              <a
                href="#calculator"
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                Calculate Available Equity
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS HOME EQUITY? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              01 — Fundamentals
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light leading-tight mb-6",
                fraunces.className,
              )}
            >
              What Is Home Equity?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              Home equity is generally the difference between your home&apos;s
              current value and the amount you still owe on loans secured by the
              property.
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              The amount you may actually be able to borrow depends on factors
              such as property value, existing mortgage balances, credit,
              income, loan program requirements, and combined loan-to-value
              limits.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
              Illustrative Example
            </div>
            <div className="space-y-3 my-4">
              <div className="flex justify-between text-sm">
                <span className="text-ink-2">Current Home Value:</span>
                <span className="font-semibold text-ink">$700,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-2">Mortgage Balance:</span>
                <span className="font-semibold text-ink">-$350,000</span>
              </div>
              <div className="border-t border-line/60 pt-2 flex justify-between text-base font-bold text-moss-deep">
                <span>Approximate Home Equity:</span>
                <span>$350,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TWO WAYS TO ACCESS YOUR EQUITY --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              02 — Program Comparison
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink",
                fraunces.className,
              )}
            >
              Two Ways to Access Your Home Equity
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* HELOC Card */}
            <div className="bg-primary-bg border border-line rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-moss-deep/10 text-moss-deep text-xs font-semibold mb-4">
                  Revolving Credit Line
                </div>
                <h3
                  className={cn(
                    "text-2xl font-light text-ink mb-4",
                    fraunces.className,
                  )}
                >
                  Home Equity Line of Credit (HELOC)
                </h3>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
                  A HELOC provides a revolving line of credit secured by your
                  home. Instead of receiving all the money at once, you can
                  generally draw funds as needed during the available draw
                  period, subject to the terms of your loan.
                </p>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
                  A HELOC may be useful when you want ongoing access to your
                  equity rather than one large lump sum. Interest rates on
                  HELOCs are commonly variable, so payments and borrowing costs
                  can change over time.
                </p>

                <h4 className="text-xs font-semibold uppercase tracking-wider text-ink mb-3">
                  HELOCs May Be Useful For:
                </h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Home improvements and renovations",
                    "Education expenses",
                    "Emergency reserves",
                    "Large purchases",
                    "Business or investment needs",
                    "Consolidating higher-cost debt",
                  ].map((useCase, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-ink-2"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-moss-deep shrink-0 mt-0.5"
                      />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/get-quote"
                className="btn-shine bg-moss-deep text-primary-bg py-3 px-6 rounded-full font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2"
              >
                Explore HELOC Options
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Home Equity Loan Card */}
            <div className="bg-primary-bg border border-line rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold mb-4">
                  Fixed Installment Loan
                </div>
                <h3
                  className={cn(
                    "text-2xl font-light text-ink mb-4",
                    fraunces.className,
                  )}
                >
                  Home Equity Loan
                </h3>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
                  A home equity loan typically provides a lump sum at closing
                  with scheduled payments over a specified term.
                </p>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
                  This may be a better fit when you know approximately how much
                  money you need and prefer a more predictable repayment
                  structure.
                </p>

                <h4 className="text-xs font-semibold uppercase tracking-wider text-ink mb-3">
                  Home Equity Loans May Be Useful For:
                </h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Major renovations",
                    "Large one-time expenses",
                    "Debt consolidation",
                    "Investment opportunities",
                    "Education expenses",
                    "Other significant financial needs",
                  ].map((useCase, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-ink-2"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-brand-orange shrink-0 mt-0.5"
                      />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/get-quote"
                className="btn-shine bg-brand-orange text-primary-bg py-3 px-6 rounded-full font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2"
              >
                Explore Home Equity Loan Options
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- HELOC VS HOME EQUITY LOAN TABLE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            03 — Feature Matrix
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            HELOC vs. Home Equity Loan
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm">
          <table className="w-full text-left text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">Feature</th>
                <th className="px-6 py-4 font-semibold text-moss-deep">
                  HELOC
                </th>
                <th className="px-6 py-4 font-semibold text-brand-orange">
                  Home Equity Loan
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              <tr>
                <td className="px-6 py-4 font-semibold">Access to money</td>
                <td className="px-6 py-4 text-ink-2">Draw funds as needed</td>
                <td className="px-6 py-4 text-ink-2">Lump sum</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Structure</td>
                <td className="px-6 py-4 text-ink-2">Revolving credit line</td>
                <td className="px-6 py-4 text-ink-2">Installment loan</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Interest rate</td>
                <td className="px-6 py-4 text-ink-2">Often variable</td>
                <td className="px-6 py-4 text-ink-2">
                  May be fixed, depending on program
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Best suited for</td>
                <td className="px-6 py-4 text-ink-2">
                  Ongoing or uncertain expenses
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Known one-time expenses
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Existing first mortgage
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Typically remains in place
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Typically remains in place
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-ink-2/70 mt-3 italic">
          * Neither option is automatically better. The right choice depends on
          how much equity you need, how you plan to use the money, and how you
          want to repay it.
        </p>
      </section>

      {/* --- KEEP YOUR EXISTING FIRST MORTGAGE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/30 border border-line rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
              04 — Rate Preservation Strategy
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              Keep Your Existing First Mortgage
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-4">
              One of the biggest reasons homeowners consider a HELOC or home
              equity loan is that you may not need to refinance your existing
              first mortgage.
            </p>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              For homeowners who already have an attractive first-mortgage rate,
              replacing the entire mortgage just to access equity may not make
              sense. A second-lien home equity solution can potentially allow
              you to keep your existing first mortgage in place while accessing
              additional equity separately.
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

      {/* --- SEE HOW HOME EQUITY FINANCING WORKS (EMBEDDED VIDEO) --- */}
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
              See How Home Equity Financing Works
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed">
              Learn the difference between a HELOC and a home equity loan, how
              home equity is calculated, and which type of financing may fit
              different situations.
            </p>
          </div>

          {/* Embedded Video Container */}
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

      {/* --- HOW MUCH EQUITY CAN I ACCESS? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
            05 — Underwriting Variables
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            How Much Equity Can I Access?
          </h2>
          <p className="text-xs sm:text-sm text-ink-2 mt-2">
            The amount available depends on the specific loan program and your
            financial profile.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Property Value",
              desc: "The current market value of your home.",
              icon: Building2,
            },
            {
              title: "Current Mortgage Balance",
              desc: "How much you currently owe against the property.",
              icon: DollarSign,
            },
            {
              title: "Combined Loan-to-Value (CLTV)",
              desc: "Your existing mortgage plus the proposed home equity financing compared with the property's value.",
              icon: TrendingUp,
            },
            {
              title: "Credit Profile",
              desc: "Credit requirements vary by lender and program.",
              icon: ShieldCheck,
            },
            {
              title: "Income & Ability to Repay",
              desc: "Income and documentation requirements depend on the financing program.",
              icon: CheckCircle2,
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

      {/* --- HELOC CALCULATOR (CLIENT COMPONENT) --- */}
      <HelocCalculator pagePath="/loan-programs/home-equity-loans-heloc" />

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
            Home Equity Financing FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What is the difference between a HELOC and a home equity loan?",
              a: "A HELOC is generally a revolving credit line that lets you access funds as needed, while a home equity loan generally provides the borrowed funds as a lump sum.",
            },
            {
              q: "Do I have to refinance my current mortgage?",
              a: "Not necessarily. HELOCs and home equity loans are commonly structured as separate liens, allowing an existing first mortgage to remain in place, subject to program requirements.",
            },
            {
              q: "How much equity do I need?",
              a: "Requirements vary by lender and program. The amount available will depend partly on your home's value, current mortgage balance, and the maximum combined loan-to-value allowed.",
            },
            {
              q: "Can I use home equity to renovate my house?",
              a: "Yes. Home improvements and renovations are common reasons homeowners use home equity financing.",
            },
            {
              q: "Can I use a HELOC for debt consolidation?",
              a: "Homeowners may use HELOC proceeds for debt consolidation. However, moving unsecured debt to financing secured by your home creates additional risk and should be considered carefully.",
            },
            {
              q: "Does a HELOC have a fixed interest rate?",
              a: "Many HELOCs have variable interest rates, although specific terms and features vary by lender and program.",
            },
            {
              q: "Can I get a HELOC on an investment property?",
              a: "Some lenders offer home equity financing on investment properties, but eligibility, loan-to-value limits, rates, and other requirements may differ from those for a primary residence.",
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
            Turn Your Home Equity Into Financial Flexibility
          </h2>
          <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-8 max-w-xl mx-auto">
            You have worked to build equity in your home. MyLoanDesk can help
            you explore ways to access it without automatically replacing your
            existing first mortgage. Whether you need a HELOC for ongoing access
            to funds or a home equity loan for a one-time expense, we&apos;ll
            help you compare available options and understand the differences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-quote"
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Get My Home Equity Options
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
