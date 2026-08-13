import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Scale,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  DollarSign,
  TrendingUp,
  Calculator,
} from "lucide-react";

import BridgeToSaleCalculator from "@/components/site/LoanPrograms/BridgeToSaleLoans/BridgeToSaleCalculator";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Bridge to Sale Loans - Buy Your Next Home Before You Sell | MyLoanDesk",
  description:
    "Unlock equity in your current home to buy your next property without waiting for a sale. Submit strong, non-contingent offers with flexible bridge financing.",
  openGraph: {
    title: "Bridge to Sale Loans | MyLoanDesk",
    description:
      "Access equity in your current property before it sells. Submit strong non-contingent offers and sell on your timeline without pressure.",
    type: "website",
  },
};

export default function BridgeToSaleLoansPage() {
  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Scale size={14} />
              Transition &amp; Move-Up Financing
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              Bridge to Sale Loans{" "}
              <span className="block text-[#D4A574] font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-1">
                Buy Your Next Home Before Selling Your Current One
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/80 leading-relaxed mb-6 max-w-2xl">
              Found your dream home but haven&apos;t sold your current property
              yet? A Bridge to Sale loan unlocks your home equity so you can
              make a strong, non-contingent offer and move on your terms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-started"
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
                Calculate Bridge Capacity
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO THIS IS FOR --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              01 — Suitability
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light leading-tight mb-6",
                fraunces.className,
              )}
            >
              Who This Is For
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              Bridge to Sale loans remove the timing friction between buying and
              selling, protecting your equity and purchase flexibility.
            </p>
            <ul className="space-y-4 text-sm text-ink">
              {[
                "Homeowners who&apos;ve found their next home but haven&apos;t sold their current one yet",
                "Buyers in competitive markets who need to submit non-contingent offers to compete",
                "Sellers who want to move out, stage, and list their current home vacant, often for a higher sale price",
                "Anyone who wants to avoid a rushed sale just to hit a purchase deadline",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-moss-deep shrink-0 mt-0.5"
                  />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-3">
              Strategic Advantages
            </div>
            <h3
              className={cn(
                "text-xl font-light text-ink mb-3",
                fraunces.className,
              )}
            >
              Eliminate Time Pressure
            </h3>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              Timing the sale of your current home to the local market rather
              than to your purchase deadline often means a stronger sale price.
              Sellers who list with pressure to close quickly tend to accept
              lower offers than sellers who can wait for the right buyer. A
              Bridge to Sale loan removes that time pressure entirely.
            </p>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
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
              How It Works
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Get Approved",
                desc: "Qualify based on the equity in your current home and your ability to carry the bridge financing.",
              },
              {
                step: "2",
                title: "Access Equity",
                desc: "Funds are made available against your current home&apos;s equity, before it sells.",
              },
              {
                step: "3",
                title: "Buy Your Next Home",
                desc: "Submit a strong, non-contingent offer and close on your new property.",
              },
              {
                step: "4",
                title: "Sell on Your Timeline",
                desc: "List and sell your current home without pressure to accept a lowball offer.",
              },
              {
                step: "5",
                title: "Pay Off the Loan",
                desc: "Proceeds from the sale pay off the bridge balance, with no prepayment penalty.",
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
        </div>
      </section>

      {/* --- ELIGIBILITY AT A GLANCE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            03 — Requirements
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            Eligibility at a Glance
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Sufficient Equity",
              desc: "Typically enough equity to cover the new bridge loan plus your existing mortgage balance.",
              icon: DollarSign,
            },
            {
              title: "Qualifying Exit Plan",
              desc: "A clear plan to list and sell your current home within the bridge term.",
              icon: TrendingUp,
            },
            {
              title: "New Mortgage Qualification",
              desc: "Demonstrated ability to qualify for the long-term mortgage on your next home.",
              icon: ShieldCheck,
            },
            {
              title: "Credit & Reserves",
              desc: "Requirements vary by lender; a loan officer can confirm your exact numbers.",
              icon: Clock,
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

      {/* --- COMPARE YOUR OPTIONS MATRIX --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            04 — Comparison
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            Compare Your Options
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm">
          <table className="w-full text-left text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">Feature</th>
                <th className="px-6 py-4 font-semibold text-moss-deep">
                  Bridge to Sale
                </th>
                <th className="px-6 py-4 font-semibold">Contingent Offer</th>
                <th className="px-6 py-4 font-semibold">HELOC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 text-xs sm:text-sm">
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Can buy before selling
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">Yes</td>
                <td className="px-6 py-4 text-ink-2">No</td>
                <td className="px-6 py-4 text-ink-2">Yes, if enough equity</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Offer strength in competitive market
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Strong (non-contingent)
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Weaker (depends on your sale)
                </td>
                <td className="px-6 py-4 text-ink-2">Strong</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Monthly payment structure
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Interest-only or none for qualified borrowers
                </td>
                <td className="px-6 py-4 text-ink-2">N/A</td>
                <td className="px-6 py-4 text-ink-2">Yes, from day one</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Best for</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Buyers who need to move fast without waiting on their sale
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Buyers with flexible timelines
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Buyers with substantial equity and no rush
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- BRIDGE CALCULATOR (CLIENT COMPONENT) --- */}
      <BridgeToSaleCalculator pagePath="/loan-programs/bridge-to-sale-loans" />

      {/* --- FREQUENTLY ASKED QUESTIONS --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="text-center mb-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            05 — Clarity
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
              q: "How much can I borrow against my current home?",
              a: "This depends on your home's value, your existing mortgage balance, and the lender's maximum combined loan-to-value — a loan officer can give you an exact number after a quick equity review.",
            },
            {
              q: "Do I have to make payments while I own both homes?",
              a: "Some bridge programs offer no-monthly-payment options for qualified borrowers, with the balance due when your current home sells. Others are interest-only. It depends on the program you qualify for.",
            },
            {
              q: "What happens if my home takes longer to sell than expected?",
              a: "Bridge terms are typically up to 12 months, which gives most sellers a comfortable window. If needed, extensions may be available — worth discussing upfront with your loan officer.",
            },
            {
              q: "Is there a penalty for paying off the bridge loan early?",
              a: "No. Once your current home sells, the proceeds go straight to paying off the bridge balance with no prepayment penalty.",
            },
            {
              q: "How is this different from a HELOC?",
              a: "A HELOC is a revolving line of credit against your home, typically used alongside your existing mortgage. A bridge loan is specifically structured around the short-term gap between buying your next home and selling your current one, often with more flexible qualifying and payment structures for that exact purpose.",
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
            Ready to Transition to Your Next Home?
          </h2>
          <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6 max-w-xl mx-auto">
            Not sure if bridge financing is right for your situation? Talk to a
            loan officer for a free equity review — no obligation, no impact to
            your credit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-quote"
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Get My Loan Options
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/#start"
              className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
