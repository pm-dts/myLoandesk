import { Shield } from "lucide-react";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Home,
  CalendarOff,
  Coins,
  ShieldCheck,
  Lock,
  HeartPulse,
  Landmark,
  ArrowRight,
  Key,
} from "lucide-react";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function ReverseMortgagePage() {
  const benefits = [
    {
      title: "No Monthly Payments",
      description: "No required monthly mortgage payments.",
      icon: <CalendarOff size={24} strokeWidth={1.5} />,
    },
    {
      title: "Retain Ownership",
      description: "Remain in the home and retain full ownership.",
      icon: <Home size={24} strokeWidth={1.5} />,
    },
    {
      title: "Flexible Access to Funds",
      description:
        "Access funds as a lump sum, monthly payments, line of credit, or combination.",
      icon: <Coins size={24} strokeWidth={1.5} />,
    },
    {
      title: "Eliminate Current Mortgage",
      description: "Pay off an existing mortgage to free up monthly cash flow.",
      icon: <Landmark size={24} strokeWidth={1.5} />,
    },
    {
      title: "FHA-Insured",
      description:
        "FHA-insured HECM (Home Equity Conversion Mortgage) options available.",
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    },
    {
      title: "Non-Recourse Protection",
      description:
        "You will never owe more than the home is worth when the loan is repaid.",
      icon: <Lock size={24} strokeWidth={1.5} />,
    },
    {
      title: "Fund Your Lifestyle",
      description:
        "Use the funds for retirement income, home improvements, healthcare, debt consolidation, or other needs.",
      icon: <HeartPulse size={24} strokeWidth={1.5} />,
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-20 pb-16 lg:pt-32 lg:pb-24 text-ink">
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20 lg:mb-32 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
          Reverse Mortgage Solutions
        </div>

        <h1
          className={cn(
            "text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight text-ink max-w-4xl mb-6",
            fraunces.className,
          )}
        >
          Unlock Your Home Equity Without Selling Your Home
        </h1>

        <p className="text-lg md:text-xl text-ink-2 leading-relaxed max-w-3xl">
          A reverse mortgage allows homeowners age 55 and older to access part
          of their home equity while continuing to live in and own their home.
          There are no required monthly mortgage payments, provided the
          homeowner continues to pay property taxes, homeowners insurance,
          applicable HOA dues, and maintains the property.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/get-quote"
            className="btn-shine bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-sm focus-ring"
          >
            See If You Qualify
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/loan-programs#reverse-mortgage"
            className="px-8 py-4 text-ink font-semibold border border-line hover:bg-cream rounded-full transition-colors focus-ring"
          >
            Loan Programs
          </Link>
        </div>
      </section>

      {/* --- BENEFITS GRID SECTION --- */}
      <section className="bg-cream/30 border-y border-line py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl text-ink font-light tracking-tight",
                fraunces.className,
              )}
            >
              The Benefits of a Reverse Mortgage
            </h2>
            <p className="text-ink-2 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              Discover how tapping into your home's equity can provide financial
              security and peace of mind during your retirement years.
            </p>
          </div>

          {/* 7-Card Grid Layout (3 on top, 4 on bottom or naturally wrapping) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-primary-bg border border-line p-8 rounded-2xl hover:border-brand-orange/50 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-ink mb-3 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}

            {/* Placeholder card to fill the 8-grid space nicely, serving as a CTA */}
            <div className="bg-moss-deep text-white border border-moss-deep p-8 rounded-2xl shadow-md flex flex-col justify-center items-start">
              <h3 className="text-xl font-bold mb-3 leading-snug">
                Ready to explore your options?
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                Speak with one of our specialized reverse mortgage advisors
                today.
              </p>
              <Link
                href="/#start"
                className="text-brand-orange font-bold text-sm flex items-center gap-2 hover:text-white transition-colors"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
       {/* Reverse Mortgage */}
      <section
        className="max-w-7xl mx-auto px-6 mt-10 lg:px-10 mb-20"
        id="reverse-mortgage"
      >
        <h2
          className={cn(
            "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
            fraunces.className,
          )}
        >
          Reverse Mortgage Programs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">
          {/* Reverse Mortgage */}
          <div
            id="reverse"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                  <Shield size={22} strokeWidth={1.8} />
                </div>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-3",
                  fraunces.className,
                )}
              >
                Reverse Mortgages
              </h3>

              <h4 className="font-medium text-ink mb-3">
                Turn Your Home Equity Into Financial Freedom
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                If you're age
                <span className="font-bold"> 62 or older</span> , a reverse
                mortgage can help you unlock the equity you've built in your
                home—without selling it or giving up ownership.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Unlike a traditional mortgage, a reverse mortgage does not
                require monthly mortgage payments. Instead, you continue living
                in your home while accessing your equity as cash, provided you
                maintain the home and keep property taxes, homeowners insurance,
                and any applicable HOA dues current
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you already own a home or are looking to purchase your next one, a
reverse mortgage can provide greater financial flexibility during retirement
              </p>

            </div>
           
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Reverse Mortgage Refinance */}
          <div
            id="reverse"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                  <Shield size={22} strokeWidth={1.8} />
                </div>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-3",
                  fraunces.className,
                )}
              >
                Reverse Mortgage Refinance
              </h3>

              <h4 className="font-medium text-ink mb-3">
                Convert Your Home Equity Into Cash
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                A Reverse Mortgage Refinance allows you to replace your existing mortgage
with a reverse mortgage. Any remaining equity can then be accessed as tax
free proceeds, giving you additional financial flexibility while eliminating your
required monthly mortgage payment.
              </p>
              

              <h4 className="font-medium text-ink mb-3">
                You can receive your available funds as:
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "A lump sum",
                  "Monthly income payments",
                  "A growing line of credit",
                  "Or a combination of these options",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs text-ink/90 leading-normal"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-medium text-ink mb-3">Many homeowners use a reverse mortgage refinance to:</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Eliminate their monthly mortgage payment",
                  "Supplement retirement income",
                  "Pay off high-interest debt",
                  "Cover medical or long-term care expenses",
                  "Finance home improvements",
                  "Create a financial safety net for the future",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs text-ink/90 leading-normal"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

      
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Best of all, you continue to own your home and remain in control of how you
use your equity.
              </p>
            </div>
            
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Now! <ArrowRight size={14} />
            </Link>
          </div>

           {/* Reverse Mortgage for purchase */}
          <div
            id="reverse"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                  <Shield size={22} strokeWidth={1.8} />
                </div>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-3",
                  fraunces.className,
                )}
              >
                Reverse Mortgage for Purchase
              </h3>

              <h4 className="font-medium text-ink mb-3">
Buy Your Next Home With No Required Monthly
Mortgage Payment
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                A reverse mortgage isn't just for homeowners—it can also help you purchase
your next primary residence.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                With a Reverse Mortgage for Purchase, you make a substantial down payment
using the proceeds from the sale of your current home, savings, or other
eligible funds. The reverse mortgage finances the remaining balance, allowing
you to purchase your new home <span className="font-bold"> without required monthly mortgage
payments.</span>
              </p>
              

              <h4 className="font-medium text-ink mb-3">
                This program is ideal for retirees who want to:
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Downsize into a smaller home",
                  "Move closer to children or grandchildren",
                  "Relocate to another city or state",
                  "Purchase a retirement or vacation-area home as their primary residence",
                  "Buy a newer, safer, or more accessible home",
                  "Preserve more of their retirement savings instead of paying all cash",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs text-ink/90 leading-normal"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              

      
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Instead of tying up hundreds of thousands of dollars in a home purchase, you
can keep more of your money available for travel, investments, healthcare, or
everyday living expenses.
              </p>
            </div>
            
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Is a Reverse Mortgage Right for You? */}
          <div
            id="reverse"
            className="scroll-mt-36 col-span-3 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                  <Shield size={22} strokeWidth={1.8} />
                </div>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-3",
                  fraunces.className,
                )}
              >
                Is a Reverse Mortgage Right for You?
              </h3>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Every homeowner's situation is unique. That's why we take the time to
                understand your goals and explain every available option before you make a
                decision.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're interested in refinancing your current home or purchasing your
                next one, we'll help you determine if a reverse mortgage is the right solution
                for your retirement plans.
              </p>

              <h4 className="font-medium text-ink mb-3 mt-6">
                Why Choose MyLoanDesk?
              </h4>
              <ul className="space-y-2 mb-8">
                {[
                  "Reverse mortgage specialists",
                  "Personalized retirement lending solutions",
                  "Competitive programs from leading lenders",
                  "Clear, honest guidance with no pressure",
                  "Fast pre-qualification and expert support from application through closing",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs text-ink/90 leading-normal"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-3",
                  fraunces.className,
                )}
              >
                Request Your Free Reverse Mortgage Consultation
              </h3>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Discover how much equity you may be able to access—or learn how you can
                purchase your next home with no required monthly mortgage payments.
              </p>
              <br/>
              <p className="text-sm text-ink-2 leading-relaxed mb-8 font-bold">
                Schedule your free consultation today and explore your options with
                confidence.
              </p>
            </div>
            
            <div className="flex flex-col gap-5 mt-auto">
              <Link
                href="/#start"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
              >
                Contact Now! <ArrowRight size={14} />
              </Link>

              {/* Disclosure UI */}
              <div className="p-4 bg-ink/5 rounded-xl border border-line/60">
                <p className="text-[11px] text-ink-2 leading-relaxed text-justify">
                  <span className="font-bold text-ink">Important Disclosure:</span> Borrowers remain responsible for property taxes,
                  homeowners insurance, applicable HOA dues, and maintaining the home. The
                  loan becomes due when the last eligible borrower permanently leaves the
                  home, sells the property, or no longer meets the loan obligations. Eligibility,
                  available proceeds, and loan terms depend on age, property value, current
                  interest rates, and program guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
