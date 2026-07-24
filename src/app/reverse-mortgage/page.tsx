import React from "react";
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
            href="#purchase"
            className="px-8 py-4 text-ink font-semibold border border-line hover:bg-cream rounded-full transition-colors focus-ring"
          >
            Learn About Purchase Options
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
                href="/contact"
                className="text-brand-orange font-bold text-sm flex items-center gap-2 hover:text-white transition-colors"
              >
                Contact an Advisor <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- PURCHASE SECTION (HECM for Purchase) --- */}
      <section id="purchase" className="py-20 lg:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-[#E8E4D8] rounded-[32px] p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-moss-deep/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-moss-deep mb-6 shadow-sm">
                  <Key size={24} />
                </div>
                <h2
                  className={cn(
                    "text-3xl sm:text-4xl lg:text-5xl text-ink font-light tracking-tight mb-6",
                    fraunces.className,
                  )}
                >
                  HECM for Purchase
                </h2>
                <h3 className="text-xl font-semibold text-ink mb-4">
                  Buy a new home without taking on a monthly mortgage payment.
                </h3>
                <p className="text-ink-2 leading-relaxed mb-6">
                  Did you know you can use a reverse mortgage to purchase a new
                  primary residence? The HECM for Purchase program allows you to
                  downsize, move closer to family, or transition to a home that
                  better meets your physical needs.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Combine the reverse mortgage proceeds with your down payment",
                    "Complete the purchase in a single transaction",
                    "Never make a required monthly mortgage payment (must pay taxes/insurance)",
                    "Increase your purchasing power for the home you truly want",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm font-medium text-ink"
                    >
                      <div className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck size={12} strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-quote"
                  className="inline-flex bg-moss-deep text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-moss-darker transition-colors shadow-sm focus-ring"
                >
                  Discuss Purchase Options
                </Link>
              </div>

              {/* Right Side Visual Block */}
              <div className="bg-primary-bg rounded-2xl p-8 border border-line shadow-xl">
                <div className="text-[10px] uppercase tracking-widest text-brand-orange font-bold mb-4">
                  How It Works Example
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-line pb-4">
                    <span className="text-sm font-semibold text-ink-2">
                      New Home Purchase Price
                    </span>
                    <span className="text-lg font-bold text-ink">$400,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-line pb-4">
                    <span className="text-sm font-semibold text-ink-2">
                      Reverse Mortgage Provides
                    </span>
                    <span className="text-lg font-bold text-brand-orange">
                      ~$200,000*
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-line pb-4">
                    <span className="text-sm font-semibold text-ink-2">
                      Your Required Down Payment
                    </span>
                    <span className="text-lg font-bold text-ink">
                      ~$200,000*
                    </span>
                  </div>
                  <div className="bg-cream p-4 rounded-xl">
                    <span className="text-sm font-bold text-moss-deep">
                      Result:{" "}
                    </span>
                    <span className="text-sm text-ink-2">
                      You own the $400,000 home with zero required monthly
                      mortgage payments.
                    </span>
                  </div>
                  <p className="text-[10px] text-ink-2/70 italic leading-tight">
                    *This is a simplified, hypothetical example. Actual loan
                    amounts vary based on the age of the youngest borrower,
                    current interest rates, and the home's appraised value. You
                    are still responsible for property taxes, insurance, and
                    maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
