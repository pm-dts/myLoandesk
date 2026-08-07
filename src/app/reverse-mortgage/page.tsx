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
} from "lucide-react";
import ReverseMortgageForm from "@/components/site/ReverseMortgage/InquiryForm";
import ReverseMortgageSection from "@/components/site/LoanPrograms/ReverseMortgageSection";

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
          Turn Your Home Equity Into Financial Freedom.
        </h1>

        <p className="text-lg md:text-xl text-ink-2 leading-relaxed max-w-3xl">
          A reverse mortgage allows eligible homeowners age 55+* and older to
          convert a portion of their home equity into tax-free proceeds while
          continuing to live in and own their home. No monthly mortgage payments
          are required, provided you continue to pay property taxes, homeowners
          insurance, applicable HOA dues, and maintain the property.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="#reverse-mortgage-inquiry"
            className="btn-shine bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-sm focus-ring"
          >
            Let's Find your Options
            <ArrowRight size={18} />
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
                href="#reverse-mortgage-inquiry"
                className="text-brand-orange font-bold text-sm flex items-center gap-2 hover:text-white transition-colors"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- REVERSE MORTGAGE PROGRAMS SECTION --- */}
      <ReverseMortgageSection />

      {/* --- INQUIRY FORM SECTION --- */}
      <section id="reverse-mortgage-inquiry">
        <ReverseMortgageForm />
      </section>
    </main>
  );
}
