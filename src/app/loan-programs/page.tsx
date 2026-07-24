import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  Shield,
  Building,
  RefreshCw,
  Briefcase,
  Star,
  FileText,
  Landmark,
  Key,
  Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";
import Link from "next/link";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function LoanProgramsPage() {
  return (
    <main className="min-h-screen bg-primary-bg pt-28 pb-24 lg:pt-36">
      {/* Editorial Page Introduction Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            Call/Text (305) 891-6500 · Professional Lending Spectrum
          </div>
          <h1
            className={cn(
              "text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.08] tracking-tight mb-8",
              fraunces.className,
            )}
          >
            Our Loan <br />
            <em className="text-moss-deep italic font-serif">Programs</em>
          </h1>
          <div className="space-y-6 text-lg text-ink-2 leading-relaxed max-w-3xl">
            <p className="font-medium text-ink">
              We are experts in Residential & Commercial Lending, specializing
              in Portfolio Loans.
            </p>
            <p>
              We provide a wide range of Conventional, Jumbo, and Portfolio
              Residential & Commercial mortgage programs for borrowers with
              unique needs that standard big banks often struggle to approve.
            </p>
            <p>
              We also serve clients seeking a lender to pre-approve unique
              properties that may not conform to typical mortgage requirements.
            </p>
            <p>
              My Loan Desk is your one-stop shop for all your mortgage needs. We
              specialize in helping home buyers who struggle to get pre-approved
              under typical lending standards.
            </p>
          </div>
        </div>
      </section>

      {/* Primary 1px Grid Architecture Layout (Residential & Dynamic Lending) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20" id="resident">
        <h2
          className={cn(
            "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
            fraunces.className,
          )}
        >
          Residential & Specialist Programs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">
          {/* Conventional Loans */}
          <div
            id="conventional"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                  <Home size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Residential
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                Conventional Loans
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                A conventional loan is any mortgage loan that is not insured or
                guaranteed by the government (such as under Federal Housing
                Administration, Department of Veterans Affairs, or Department of
                Agriculture loan programs). Conventional loans can be conforming
                or non-conforming.
              </p>
              <p className="text-xs text-ink-2 bg-[#f0ece1]/50 p-4 rounded-xl border border-line/50 leading-relaxed mb-6">
                Conventional loans are ideal for borrowers with a strong credit
                history, typically a credit score between 620 and 740, and a sum
                of money for about 20% of the down payment. Down payments less
                than 20% require private mortgage insurance (PMI). Your
                debt-to-income ratio (DTI) should be under 43%.
              </p>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* FHA Loans */}
          <div
            id="fha"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                  <Shield size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Government Backed
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-3",
                  fraunces.className,
                )}
              >
                FHA Loans
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-4">
                FHA loans are a great option for borrowers that do not have a
                lot of cash on hand for a down payment and may need some
                flexibility in qualification guidelines. Benefits include:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Low 3.5% down payment",
                  "Most of your closing costs and fees can be included in the loan",
                  "Low monthly mortgage insurance",
                  "No maximum income/earning limitations (subject to investor overlays)",
                  "No cash reserves if loan meets FHA guidelines",
                  "Minimum FICO score 620 (with investor overlays)",
                  "No landlord rating required",
                  "Gifts are acceptable",
                  "Seller credits are allowed",
                  "Non-occupant cosigners okay to help qualify",
                  "Fixed rate and ARM loans available",
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
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* VA Loans */}
          <div
            id="va"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                  <Star size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Veteran Care
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                VA Loans
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-4">
                VA guaranteed loans are made by lenders and guaranteed by the
                U.S. Department of Veterans Affairs (VA) to eligible veterans
                for the purchase of a home, protecting the lender against loss
                if payments fall behind.
              </p>
              <p className="text-xs font-semibold text-moss-deep mb-4">
                In most cases, no down payment is required on a VA guaranteed
                loan and the borrower receives a highly competitive interest
                rate. Other benefits include:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Negotiable interest rates.",
                  "Closing costs are highly comparable—and sometimes lower—than other financing types.",
                  "No private mortgage insurance requirement.",
                  "Right to prepay loan without penalties.",
                  "The mortgage can be assumed by a qualified buyer when a home is sold.",
                  "Counseling and assistance available to veteran borrowers experiencing financial difficulty.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs text-ink/90 leading-normal"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-moss-deep mt-0.5 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Hybrid Loans */}
          <div
            id="hybrid"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                  <RefreshCw size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  ARM Adjustables
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                Hybrid Loans
              </h3>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>
                  Combine the upfront stability of a fixed-rate mortgage with
                  the initial savings opportunities of an adjustable-rate
                  mortgage (ARM) using a fixed-period hybrid loan.
                </p>
                <p>
                  A hybrid loan provides a fixed-rate term (usually 3, 5, 7, or
                  10 years) with adjustable rates thereafter—typically expressed
                  as a 3/1, 5/1, 7/1, or 10/1 ARM. The first number represents
                  the fixed-rate years, while the second indicates how often the
                  interest rate will adjust annually afterward.
                </p>
                <p>
                  The primary advantage is securing a lower interest rate
                  upfront than standard 30-year fixed options, making it a
                  powerful vehicle if you plan to transition or sell within the
                  first decade.
                </p>
                <p className="text-xs italic bg-line/20 p-2.5 rounded border border-line">
                  Hybrid loans are ideal choices for borrowers seeking ARM
                  pricing combined with essential, multi-year protection at the
                  start of their homeownership lifecycle.
                </p>
              </div>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Private Bridge & Hard Money Loans */}
          <div
            id="bridge"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373]">
                  <Building size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Liquidity Solutions
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                Private Bridge & Hard Money Loans
              </h3>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>
                  Bridge financing is deployed for fast closings, navigating
                  unique situational underwriting, recovering property assets
                  from distressed situations, or capturing time-sensitive
                  short-term real estate plays.
                </p>
                <p>
                  These properties are paid back when the asset is sold, fully
                  refinanced with a traditional permanent lender, or when
                  structural modifications allow subsequent standard matrix
                  funding.
                </p>
                <p>
                  While hard money refers strictly to the private source asset
                  pool (individuals or specialized private companies), bridge
                  deployment speaks directly to the targeted, nimble duration of
                  the temporary capital architecture.
                </p>
                <div className="bg-[#f0ece1]/60 p-3.5 rounded-xl text-xs font-mono border border-dashed border-line space-y-1">
                  <p>· Rates: Usually 10-15%</p>
                  <p>· Typical terms: Up to 12 months (2-10 points)</p>
                  <p>· LTV: Generally max 65% for commercial/residential</p>
                  <p>· Architecture: Closed or Open configuration matrix</p>
                  <p>· First charge structure provides higher LTV thresholds</p>
                </div>
              </div>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Bridge to Sale */}
          <div
            id="bridge-to-sale"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                  <RefreshCw size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Transitions
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                Bridge to Sale
              </h3>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>
                  Avoid the pressure of alignment dependencies. Extract value
                  from your current property before it goes to market to secure
                  your next primary acquisition stress-free.
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>
                    1-year interest-only frameworks with standard extensions
                  </li>
                  <li>Maximized cash-out conversion thresholds</li>
                  <li>Alternative dynamic income processing parameters</li>
                  <li>No-monthly-payment options on qualifying profiles</li>
                </ul>
              </div>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Jumbo Loans */}
          <div
            id="portfolio"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373]">
                  <Briefcase size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Custom Desk Spec
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                Jumbo Loans
              </h3>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>
                  Jumbo loans are made to fill the gap between conventional
                  loans and private or hard money loans. These are made by a
                  lender who keeps the debt on their Jumbo to earn consistent
                  interest, rather than selling it to secondary markets.
                </p>
                <p>
                  In contrast, conventional loans are typically sold to another
                  institution that will service the loan shortly after closing.
                </p>
                <p>
                  Jumbo loan programs are built for clients who have difficulty
                  proving their income under standard conventional guidelines,
                  or who have navigated complex credit issues, past
                  bankruptcies, foreclosures, or tax liens.
                </p>
              </div>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>

          {/* International Buyers Section Loans */}
          <div
            id="international-buyer"
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
                International Buyers Section
              </h3>

              <h4 className="font-medium text-ink mb-3">
                U.S. Home Financing for International Buyers
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Buying property in the United States is easier than you may
                think. Whether you're purchasing a vacation home, investment
                property, or planning a future move, MyLoanDesk offers financing
                solutions designed for international buyers.
              </p>

              <h4 className="font-medium text-ink mb-3">We Help</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Foreign Nationals",
                  "Non-U.S. Residents",
                  "Visa Holders",
                  "International Investors",
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

              <h4 className="font-medium text-ink mb-3">
                Financing Available For
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Vacation Homes",
                  "Investment Properties",
                  "Primary Residences",
                  "Condominiums",
                  "Single-Family Homes",
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

              <h4 className="font-medium text-ink mb-3">
                Why Choose MyLoanDesk?
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Access to 100+ loan programs",
                  "Fast pre-approvals",
                  "Competitive financing options",
                  "Guidance throughout the entire process",
                  "Remote closings available for many transactions",
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
            </div>
            <p className="text-xs mb-4 text-ink-2">
              <span className="font-bold text-ink">
                Ready to buy property in the United States?
              </span>
              <br />
              Contact MyLoanDesk today to discuss your financing options and get
              pre-qualified.
            </p>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Now! <ArrowRight size={14} />
            </Link>
          </div>
          {/*  ITIN Home Loans Loans */}
          <div
            id="ITIN-home"
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
                ITIN Home Loans
              </h3>

              <h4 className="font-medium text-ink mb-3">
                Buy a Home Without a Social Security Number
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                If you file your U.S. taxes using an{" "}
                <span className="font-bold">
                  {" "}
                  Individual Taxpayer Identification Number (ITIN)
                </span>
                , you may still qualify for a mortgage. MyLoanDesk works with
                lenders that offer financing solutions specifically for
                qualified ITIN borrowers.
              </p>

              <h4 className="font-medium text-ink mb-3">
                This Program May Be Right For:
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "ITIN Tax Filers",
                  "First-Time Homebuyers",
                  "Self-Employed Borrowers",
                  "Foreign Nationals Living in the U.S.",
                  "Borrowers without a Social Security Number",
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

              <h4 className="font-medium text-ink mb-3">Benefits</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Purchase a primary residence",
                  "No Social Security Number required",
                  "Competitive financing options",
                  "Flexible income documentation with select lenders",
                  "Personalized guidance throughout the loan process",
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

              <h4 className="font-medium text-ink mb-3">
                Typical Requirements
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Valid ITIN",
                  "Government-issued photo ID or passport",
                  "Proof of income",
                  "U.S. tax returns (when required)",
                  "Down payment and available funds for closing",
                  "Credit history or alternative credit, depending on the loan program",
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
            </div>
            <p className="text-xs mb-4 text-ink-2">
              <span className="font-bold text-ink">
                Ready to become a homeowner?
              </span>
              <br />
              Contact MyLoanDesk today to explore your ITIN mortgage options and
              find out if you qualify.
            </p>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Now! <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary 1px Grid Architecture Layout (Rehab & Refinance Infrastructure) */}
      <section
        className="max-w-7xl mx-auto px-6 lg:px-10 mb-20"
        id="home-equity"
      >
        <h2
          className={cn(
            "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
            fraunces.className,
          )}
        >
          Rehab, Refinances & Home Equity Lines
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">
          {/* FHA 203(k) Rehab Loans */}
          <div
            id="rehab"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                  <FileText size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Rehab Matrix
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-3",
                  fraunces.className,
                )}
              >
                FHA 203(k) Rehab Loans
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-4">
                FHA's 203(k) program provides an affordable, stable single-loan
                solution combining the property purchase or refinance alongside
                the direct calculated costs of required structural upgrades.
              </p>
              <div className="space-y-4 mb-6 text-xs text-ink-2">
                <div>
                  <h4 className="font-semibold text-ink mb-1">
                    Benefits include:
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>FHA programmatic guidelines apply</li>
                    <li>Ability to leverage future value after upgrades</li>
                    <li>Low structural down-payment options</li>
                    <li>Flexible credit qualifying frameworks</li>
                    <li>Fully assumable infrastructure for future buyers</li>
                    <li>
                      Eligible across 1-4 unit properties, PUDs, and condos
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-ink mb-1">
                    Eligible properties include:
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Attached and detached single family residences</li>
                    <li>Multi-unit 2-4 property maps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-ink mb-1">
                    Eligible Improvements:
                  </h4>
                  <p className="italic bg-line/20 p-2 rounded">
                    Structural additions, kitchen/bath remodeling, finished
                    basements, decks, roofing, energy upgrades, and
                    accessibility improvements.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Refinance Options */}
          <div
            id="refinance"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                  <RefreshCw size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Refinance Desk
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                Refinance Options
              </h3>
              <div className="space-y-4 text-xs text-ink-2 mb-6 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-ink text-sm mb-1">
                    Lower Your Monthly Payments
                  </h4>
                  <p>
                    Lock in structural savings by shifting from a volatile ARM
                    array or a high fixed-rate mortgage into historically steady
                    long-term single tiers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-ink text-sm mb-1">
                    Get Cash Out
                  </h4>
                  <p>
                    Leverage the clear equity position built inside your
                    property to clear tuition, fund structural renovations, or
                    execute essential capital changes seamlessly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-ink text-sm mb-1">
                    Consolidate Your Debt
                  </h4>
                  <p>
                    Pay off high-interest unsecured positions by leveraging
                    lower mortgage interest rates, significantly expanding
                    monthly liquidity parameters.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-ink text-sm mb-1">
                    Paying it off Sooner
                  </h4>
                  <p>
                    Accelerate your net wealth roadmap by condensing standard
                    configurations into 15-year tracks, cutting total long-term
                    interest costs dramatically.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* FHA Streamline Refinance */}
          <div
            id="streamline"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373]">
                  <Shield size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Streamline Refi
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                FHA Streamline Refinance
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-4">
                If you hold a current FHA mortgage in good standing, an FHA
                Streamline Refinance represents a highly efficient path to
                lowering interest rates and payment obligations.
              </p>
              <p className="text-xs font-medium text-ink mb-2">
                Benefits include:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Property appraisal usually not required",
                  "Minimal processing documentation requirements",
                  "Streamlined underwriting timeline frameworks",
                  "Ability to easily adjust your core term lengths",
                  "Minimal out-of-pocket transactional costs",
                ].map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-ink-2"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-moss-deep shrink-0"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* HELOC (Home Equity Line of Credit) */}
          <div
            id="heloc"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40 md:col-span-2 lg:col-span-3"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                  <Landmark size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Equity Access
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                Home Equity Line of Credit (HELOC)
              </h3>
              <p className="text-sm text-ink mb-4 font-semibold">
                How do HELOCs work?
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-xs text-ink-2 mb-6">
                {/* Variant 1 */}
                <div className="bg-primary-bg border border-line p-4 rounded-xl">
                  <h4 className="font-bold text-ink mb-2 text-[16px]">
                    Home Equity Line of Credit (HELOC)
                  </h4>
                  <h6 className="font-semibold text-ink mb-2 text-sm">
                    Turn Your Home's Equity Into Financial Flexibility
                  </h6>
                  <p className="text-sm text-ink-2 mb-4 ">
                    Your home is more than where you live—it's one of your
                    greatest financial assets. A Home Equity Line of Credit
                    (HELOC) lets you access your available equity when you need
                    it, giving you the freedom to finance home improvements,
                    consolidate higher-interest debt, invest in real estate,
                    cover education expenses, or handle life's unexpected
                    opportunities.
                  </p>
                  <p className="text-sm text-ink-2 mb-4 ">
                    Whether you're looking for a little extra flexibility or a
                    substantial line of credit, MyLoanDesk offers competitive
                    HELOC solutions tailored to your financial goals.
                  </p>
                  <h6 className="font-semibold text-ink mb-2 text-sm">
                    Why Choose Our HELOC Program?
                  </h6>
                  <ul className="space-y-3 mb-6 list-disc">
                    {[
                      "Borrow up to $1,000,000 with flexible repayment terms from 5 to 30 years",
                      "Available on primary residences, second homes, and investment properties",
                      "First, second, and third lien position HELOC options available",
                      "No impact to your credit score during the initial pre-qualification process",
                      "100% online application with a simple, secure, and convenient experience",
                      "No appraisal required* for many qualified borrowers",
                      "Competitive interest rates that are often lower than unsecured personal loans or credit cards",
                      "Fast approvals and expedited funding* for eligible applicants",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs text-ink-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />

                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <h6 className="font-semibold text-ink mb-2 text-sm">
                    Smart Financing on Your Terms
                  </h6>
                  <p className="text-sm text-ink-2 mb-4 ">
                    Unlike a traditional loan, a HELOC provides access to a
                    revolving line of credit, allowing you to borrow only what
                    you need and, in many cases, pay interest only on the amount
                    you use. It's a flexible financing solution designed to
                    adapt to your changing needs.
                  </p>

                  <p className="text-sm text-ink-2 mb-4">
                    <span className="font-bold text-ink">
                      Ready to put your home's equity to work?
                    </span>{" "}
                    Contact MyLoanDesk today to explore your options and
                    discover how a HELOC can help you achieve your financial
                    goals.
                  </p>
                </div>

                {/* Variant 2 */}
                <div className="bg-primary-bg border border-line p-4 rounded-xl">
                  <h4 className="font-bold text-ink mb-2 text-[16px]">
                    Fixed-Rate Home Equity Loan (Second Mortgage)
                  </h4>
                  <h6 className="font-semibold text-ink mb-2 text-sm">
                    Access Your Home's Equity Without Refinancing Your First
                    Mortgage
                  </h6>
                  <p className="text-sm text-ink-2 mb-4 ">
                    If you've locked in a low interest rate on your current
                    mortgage, there's no need to refinance to access your home's
                    equity. A Fixed-Rate Home Equity Loan lets you borrow a lump
                    sum while keeping your existing first mortgage exactly as it
                    is.
                  </p>
                  <p className="text-sm text-ink-2 mb-4 ">
                    Whether you're renovating your home, consolidating debt,
                    funding a major purchase, or investing in new opportunities,
                    this program provides predictable monthly payments and the
                    security of a fixed interest rate.
                  </p>
                  <h6 className="font-semibold text-ink mb-2 text-sm">
                    Program Highlights
                  </h6>
                  <ul className="space-y-3 mb-6 list-disc">
                    {[
                      "Keep your existing low-rate first mortgage intact",
                      "Borrow up to $750,000*, subject to qualification",
                      "Fixed interest rate with predictable monthly payments",
                      "Fast approval and funding* for qualified borrowers",
                      "Minimum credit score of 660",
                      "Automated property valuation* available in many cases, reducing the need for a traditional appraisal",
                      "Ideal for home",
                    ].map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs text-ink-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />

                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-ink-2 mb-4">
                    <span className="font-bold text-ink">
                      Ready to put your home's equity to work?
                    </span>{" "}
                    Contact MyLoanDesk today to explore your options and
                    discover how a HELOC can help you achieve your financial
                    goals.
                  </p>
                </div>

                {/* fdgdg */}
              </div>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reverse Mortgage */}
      <section
        className="max-w-7xl mx-auto px-6 lg:px-10 mb-20"
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

      {/* Real Estate Investment Loans */}
      <section
        className="max-w-7xl mx-auto px-6 lg:px-10 mb-20"
        id="real-estate"
      >
        <h2
          className={cn(
            "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
            fraunces.className,
          )}
        >
          Real Estate Investment Loans
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">
          {/* DSCR Financing */}
          <div
            id="DSCR"
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
                DSCR Investment Property Loans
              </h3>

              <h4 className="font-medium text-ink mb-3">
                Grow Your Real Estate Portfolio Without Using Personal Income
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                A{" "}
                <span className="font-bold">
                  {" "}
                  Debt Service Coverage Ratio (DSCR) Loan{" "}
                </span>{" "}
                is designed for real estate investors who want to qualify based
                on the property's rental income—not their personal income, tax
                returns, or employment history.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're purchasing your first investment property or
                expanding an established portfolio, a DSCR loan offers a fast,
                flexible financing solution that focuses on the property's
                ability to generate cash flow.
              </p>

              <h4 className="font-medium text-ink mb-3">
                Why Choose a DSCR Loan?
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "No personal income verification* required for qualifying",
                  "No tax returns, W-2s, or pay stubs* in most cases",
                  "Qualification based primarily on the property's rental income",
                  "Finance single-family homes, condos, townhomes, and 2–4 unit investment properties",
                  "Purchase, refinance, or cash-out refinance options available",
                  "Fixed and adjustable-rate loan options",
                  "Available to both first-time and experienced real estate investors",
                  "LLC and business entity ownership options available with many programs",
                  "Competitive loan amounts and flexible terms",
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

              <h4 className="font-medium text-ink mb-3">Ideal For</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Real estate investors",
                  "Self-employed borrowers",
                  "Portfolio builders",
                  "Short-term and long-term rental investors",
                  "Foreign national investors (available through select programs)",
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

              <h4 className="font-medium text-ink mb-3">
                Build Wealth Through Real Estate
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're buying your next rental property or refinancing
                an existing investment, MyLoanDesk can help you find the right
                DSCR loan from a wide range of lending programs tailored to your
                investment strategy.
              </p>
            </div>
            <p className="text-xs mb-4 text-ink-2">
              <span className="font-bold text-ink">
                Ready to expand your portfolio?
              </span>
              <br />
              Contact MyLoanDesk today to explore your DSCR financing options
              and get pre-qualified.
            </p>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Fix & Flip Loans */}
          <div
            id="fix-flip"
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
                Fix & Flip Loans
              </h3>

              <h4 className="font-medium text-ink mb-3">
                Fast Financing for Real Estate Investors
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're purchasing your first renovation project or
                flipping multiple properties each year, a{" "}
                <span className="font-bold"> Fix & Flip Loan</span> provides the
                capital you need to acquire, renovate, and sell residential
                investment properties quickly and efficiently.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Designed specifically for investors, these short-term loans
                offer fast approvals, flexible financing, and funding for both
                the purchase price and eligible renovation costs.
              </p>

              <h4 className="font-medium text-ink mb-3">Program Highlights</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Finance both the *property purchase and renovation expenses",
                  "Fast approvals and quick closings to help you compete with cash buyers",
                  "Short-term financing designed for renovation projects",
                  "Available for single-family homes, condos, townhomes, and small multi-family properties",
                  "Flexible loan amounts based on the property's projected after-repair value (ARV)",
                  "Ideal for experienced investors and first-time flippers",
                  "Multiple project financing available for qualified investors",
                  "Streamlined application process with dedicated lending support",
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

              <h4 className="font-medium text-ink mb-3">Ideal For</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "House flippers",
                  "Real estate investors ",
                  "Property renovations",
                  "Value-add investment opportunities",
                  "Investors looking to build or expand their portfolios",
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

              <h4 className="font-medium text-ink mb-3">
                Turn Opportunity Into Profit
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                The right financing can make all the difference. MyLoanDesk
                works with a network of lenders offering competitive Fix & Flip
                loan programs, helping you move quickly from purchase to
                renovation and resale.
              </p>
            </div>
            <p className="text-xs mb-4 text-ink-2">
              <span className="font-bold text-ink">
                Ready to fund your next project?
              </span>
              <br />
              Contact MyLoanDesk today to discuss your investment goals and
              discover the Fix & Flip financing solution that's right for you.
            </p>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Ground up  Loans */}
          <div
            id="ground-up"
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
                Ground-Up Construction Loans
              </h3>

              <h4 className="font-medium text-ink mb-3">
                Build From the Ground Up With Confidence
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're building your dream home, developing a custom
                residence, or constructing multiple investment properties,
                MyLoanDesk offers flexible{" "}
                <span className="font-bold"> Ground-Up Construction Loans</span>{" "}
                designed to bring your vision to life.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                From purchasing the land to the final stages of construction, we
                help builders, developers, and individual borrowers secure the
                financing needed to complete projects on time and on budget.
              </p>

              <h4 className="font-medium text-ink mb-3">Program Highlights</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Financing for *single-family homes, custom homes, and multi-property developments*",
                  "Construction loans for owner-occupied homes, second homes, and investment properties",
                  "Finance land acquisition, construction costs, and approved project expenses",
                  "Flexible loan options for individuals, builders, and real estate developers",
                  "Interest-only payments during the construction phase on many programs",
                  "Construction-to-permanent loan options available, allowing one seamless transition to long-term financing",
                  "Funding released in stages as construction progresses through scheduled draw requests",
                  "Competitive loan amounts and flexible terms based on project qualifications",
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

              <h4 className="font-medium text-ink mb-3">Ideal For</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Custom home construction",
                  "Spec home builders",
                  "Residential developers",
                  "Investment property construction",
                  "Multiple home developments and subdivisions",
                  "Experienced builders and qualified first-time owner-builders",
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

              <h4 className="font-medium text-ink mb-3">
                Build Your Vision From the Ground Up
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're constructing one home or an entire residential
                development, MyLoanDesk works with a wide network of lenders to
                provide financing solutions tailored to your project. Our
                experienced team will guide you through every phase—from
                planning and approval to construction and permanent financing.
              </p>
            </div>
            <p className="text-xs mb-4 text-ink-2">
              <span className="font-bold text-ink">Ready to break ground?</span>
              <br />
              Contact MyLoanDesk today to discuss your construction project and
              explore the financing options available for your next build.
            </p>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Bridge  Loans */}
          <div
            id="bridge-loans"
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
                Bridge Loans
              </h3>

              <h4 className="font-medium text-ink mb-3">
                Short-Term Financing to Bridge the Gap
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                A <span className="font-bold"> Bridge Loan</span> provides fast,
                short-term financing when timing is critical. Whether you're
                purchasing a new property before selling your current one,
                acquiring an investment opportunity, or waiting for long-term
                financing, a bridge loan gives you immediate access to the
                capital you need.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Designed for speed and flexibility, bridge loans help you act
                quickly in competitive markets without missing valuable
                opportunities.
              </p>

              <h4 className="font-medium text-ink mb-3">Program Highlights</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Purchase a new property before selling your current one",
                  "Fast approvals and expedited funding for qualified borrowers",
                  "Short-term financing with flexible repayment options",
                  "Available for residential and many commercial properties",
                  "Finance primary residences, second homes, investment properties, and fix-and-flip projects",
                  "Use existing property equity to strengthen your purchasing power",
                  "Interest-only payment options available with select programs",
                  "Bridge to permanent financing or property sale",
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

              <h4 className="font-medium text-ink mb-3">Ideal For</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Homeowners buying before selling",
                  "Real estate investors",
                  "Fix-and-flip projects",
                  "Property acquisitions",
                  "Time-sensitive transactions",
                  "Developers awaiting permanent financing",
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

              <h4 className="font-medium text-ink mb-3">
                Move Quickly When Opportunity Knocks
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                In today's competitive market, waiting for traditional financing
                can mean losing the perfect property. MyLoanDesk works with a
                network of lenders offering flexible bridge loan solutions to
                help you close quickly and transition smoothly to your long-term
                financing strategy.
              </p>
            </div>
            <p className="text-xs mb-4 text-ink-2">
              <span className="font-bold text-ink">Need financing fast?</span>
              <br />
              Contact MyLoanDesk today to learn how a bridge loan can help you
              move forward with confidence.
            </p>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Now! <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Commercial  */}
      <section
        className="max-w-7xl mx-auto px-6 lg:px-10 mb-20"
        id="commercial-section"
      >
        <h2
          className={cn(
            "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
            fraunces.className,
          )}
        >
          Commercial Financing Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">
          {/* commercial real estate Financing */}
          <div
            id="commercial-real-estate"
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
                Commercial Real Estate Loans
              </h3>

              <h4 className="font-medium text-ink mb-3">
                Financing Solutions for Businesses, Investors & Developers
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're purchasing, refinancing, constructing, or
                expanding commercial real estate, MyLoanDesk provides access to
                a broad network of commercial lenders offering financing
                tailored to your business and investment goals.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                From owner-occupied properties to large investment projects,
                we'll help you identify the right financing solution with
                competitive terms and a streamlined lending process.
              </p>

              <h4 className="font-medium text-ink mb-3">
                Commercial Financing Available For
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Office Buildings",
                  "Retail Centers",
                  "Apartment & Multifamily Properties",
                  "Mixed-Use Developments",
                  "Industrial & Warehouse Facilities",
                  "Hotels & Motels",
                  "Medical & Professional Buildings",
                  "Restaurants & Hospitality",
                  "Self-Storage Facilities",
                  "Land Acquisition & Development",
                  "Ground-Up Construction Projects",
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

              <h4 className="font-medium text-ink mb-3">Loan Options</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Property Purchase",
                  "Commercial Refinancing",
                  "Cash-Out Refinancing",
                  "Ground-Up",
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
            </div>
            <p className="text-xs mb-4 text-ink-2">
              <span className="font-bold text-ink">Need financing fast?</span>
              <br />
              Contact MyLoanDesk today to learn how a Commercial Real Estate
              Loans can help you move forward with confidence.
            </p>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Equipment Financing */}
          <div
            id="equipment"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373]">
                  <Briefcase size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Capital Growth
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                Equipment Financing
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">
                Conserve primary cash flow lines while modernizing machinery
                stacks.
              </p>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>
                  Acquiring core equipment assets is vital to scalable
                  operations. When your company is ready to scale throughput or
                  update internal frameworks, our expert programs match your
                  dynamic timeline requirements.
                </p>
                <div className="bg-line/30 p-3 rounded-lg text-xs space-y-1">
                  <h4 className="font-semibold text-ink">
                    Core Program Advantages:
                  </h4>
                  <p>· Preserves operational liquid capital</p>
                  <p>· Modern tax incentive integration metrics</p>
                  <p>· Accelerated equipment acquisition turnaround times</p>
                  <p>· 100% financing frameworks for high-tier candidates</p>
                </div>
              </div>
            </div>
            <a
              href="#contact"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Us <ArrowRight size={14} />
            </a>
          </div>

          {/* Business Lines of Credit */}
          <div
            id="business-lines"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                  <Landmark size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Liquidity Access
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                Business Lines of Credit
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-moss-deep mb-2">
                Secure quick access to floating working capital reserves
                smoothly.
              </p>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>
                  Maintaining strategic liquidity shields operations from
                  unexpected overhead pressures. Deploy flexible programmatic
                  revolving funds only when specific allocation needs present
                  themselves, protecting net profitability channels.
                </p>
                <div className="bg-line/30 p-3 rounded-lg text-xs space-y-1">
                  <h4 className="font-semibold text-ink">
                    Operational Features:
                  </h4>
                  <p>· Revolving access coordinates fluid payroll management</p>
                  <p>· Pay interest strictly on deployed capital balances</p>
                  <p>· Minimal document setup configuration metrics</p>
                </div>
              </div>
            </div>
            <a
              href="#contact"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Us <ArrowRight size={14} />
            </a>
          </div>

          {/* Working Capital */}
          <div
            id="working-capital"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                  <RefreshCw size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Operations Stack
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                Working Capital
              </h3>
              <p className="text-xs font-medium italic text-ink-2 mb-2">
                Customized liquid solutions tailored to enterprise growth
                metrics with complete compliance transparency.
              </p>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>
                  Empower seasonal purchase capacity or capitalize on
                  high-volume inventory procurement windows via tailored working
                  capital structures built to map business revenue trajectories
                  perfectly.
                </p>
                <div className="bg-[#f0ece1]/50 p-3 rounded-lg text-xs space-y-1 border border-line">
                  <h4 className="font-semibold text-ink">
                    Capital Parameters:
                  </h4>
                  <p>· Funding footprints extending up to $2,000,000</p>
                  <p>· Flexible 6 to 24-month term lengths</p>
                  <p>· Clean structural fee frameworks</p>
                </div>
              </div>
            </div>
            <a
              href="#contact"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Us <ArrowRight size={14} />
            </a>
          </div>

          {/* Franchise Financing Solutions */}
          <div
            id="franchise"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373]">
                  <Key size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Franchise Desk
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                Franchise Financing Solutions
              </h3>
              <p className="text-xs font-semibold text-brand-orange mb-2">
                Comprehensive capitalization matrices built for single and
                multi-unit expansions.
              </p>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>
                  Accelerate standard store timelines or update equipment models
                  across multi-unit frameworks with custom franchise lending
                  setups engineered around specific brand benchmarks.
                </p>
                <div className="bg-line/30 p-3 rounded-lg text-xs space-y-1">
                  <h4 className="font-semibold text-ink">
                    Financing Highlights:
                  </h4>
                  <p>· Rapid credit determination timelines</p>
                  <p>· Capitalization access up to $500k dynamically</p>
                  <p>· Seasonal or deferred amortization options built-in</p>
                </div>
              </div>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Commercial Loans */}
          <div
            id="commercial"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                  <Building size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Commercial Scale
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                Commercial Loans
              </h3>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>
                  We structure institutional-level options spanning standard
                  asset classes: Multifamily, Mixed-Use, Warehouse/Industrial
                  footprints, Office properties, and Retail strip centers.
                </p>
                <div className="p-3 bg-line/20 rounded-xl border border-line">
                  <h4 className="font-bold text-ink text-xs mb-1">
                    SBA 7(a) Guaranty Systems
                  </h4>
                  <p className="text-xs">
                    Leverage core agency backing parameters to secure essential
                    asset purchase lines reaching up to $2,000,000 with highly
                    favorable amortized structures.
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/*  SBA and business loans */}
      <section
        className="max-w-7xl mx-auto px-6 lg:px-10 mb-20"
        id="business-sba"
      >
        <h2
          className={cn(
            "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
            fraunces.className,
          )}
        >
          SBA and Business Loans
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">
          {/*  SBA and business loans */}
          <div
            id="sba-business"
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
                SBA Business Loans
              </h3>

              <h4 className="font-medium text-ink mb-3">
                Affordable Financing to Help Your Business Grow
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're starting a new business, expanding operations,
                purchasing commercial real estate, or acquiring an existing
                company, <span className="font-bold"> SBA Loans</span> offer
                flexible financing backed by the U.S. Small Business
                Administration.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Designed to make capital more accessible, SBA loans often
                provide lower down payments, longer repayment terms, and
                competitive interest rates compared to many conventional
                business loans.
              </p>

              <h4 className="font-medium text-ink mb-3">
                SBA Loan Programs Can Be Used For
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Purchasing or expanding a business",
                  "Buying owner-occupied commercial real estate",
                  "Business acquisitions",
                  "Equipment and machinery purchases",
                  "Working capital",
                  "Inventory financing",
                  "Business renovations and improvements",
                  "Debt refinancing",
                  "Franchise financing",
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

              <h4 className="font-medium text-ink mb-3">
                Why Choose an SBA Loan?
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Competitive interest rates",
                  "Lower down payment requirements than many conventional loans",
                  "Longer repayment terms to help improve cash flow",
                  "Financing for startups, growing businesses, and established companies",
                  "Loan amounts available for a wide range of business needs",
                  "Flexible financing options tailored to your goals",
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

              <h4 className="font-medium text-ink mb-3">Ideal For</h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Small business owners",
                  "Entrepreneurs",
                  "Franchise owners",
                  "Professional practices",
                  "Retail and restaurant businesses",
                  "Manufacturers",
                  "Service companies",
                  "Commercial property owner-occupants",
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

              <h4 className="font-medium text-ink mb-3">
                Build Your Business With Confidence
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're purchasing your first commercial property,
                expanding to a new location, or investing in your company's
                future, MyLoanDesk can help you navigate the SBA loan process
                from application through closing.
              </p>
            </div>
            <p className="text-xs mb-4 text-ink-2">
              <span className="font-bold text-ink">
                Ready to grow your business?
              </span>
              <br />
              Contact MyLoanDesk today to explore your SBA financing options and
              find the loan that's right for your business.
            </p>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Contact Now! <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Global Borders Cross-Section (Mexico, Portugal & Specialty EEP / Medical Channels) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-28">
        <h2
          className={cn(
            "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
            fraunces.className,
          )}
        >
          International & Custom Footprints
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">
          {/* Mexico Loans */}
          {/* <div
            id="mexico"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373]">
                  <Landmark size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Cross-Border
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-4",
                  fraunces.className,
                )}
              >
                Mexico Loans
              </h3>
              <ul className="list-disc list-inside text-xs text-ink-2 space-y-1 mb-6 leading-relaxed">
                <li>Loan volumes extending from $250k to $2.5M</li>
                <li>
                  Geographic distribution mapped across premier regions in
                  Mexico
                </li>
                <li>SFR, Condos, PUD structures, and 1-4 units accepted</li>
                <li>
                  Streamlined purchase and equity cash-out refinance options
                </li>
                <li>
                  Tailored explicitly for US Citizens and US Permanent Residents
                </li>
                <li>
                  Escrow, title insurance protocols coordinated safely via
                  institutional entities
                </li>
                <li>
                  15, 20, 25, and 30-year fully amortizing structural terms
                </li>
                <li>
                  700 minimum FICO requirement with up to 65% maximum LTV rules
                </li>
              </ul>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div> */}

          {/* Portugal Loans */}
          <div
            id="portugal"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                  <Landmark size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  European desk
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-3",
                  fraunces.className,
                )}
              >
                Property Financing in Portugal
              </h3>
              <p className="text-xs font-bold text-ink mb-3">
                Residential, Commercial and Construction Loans
              </p>
              <p className="text-xs text-ink-2 leading-relaxed mb-4">
                Whether you are buying a home, investing in commercial real
                estate, or developing a new project, we help qualified borrowers
                explore financing options through our network of lenders in
                Portugal.
              </p>

              <p className="text-xs font-bold text-ink mb-3">
                Residential Loans
              </p>

              <p className="text-xs text-ink-2 leading-relaxed mb-4">
                Mortgage solutions may be available for residents,
                non-residents, foreign nationals and international buyers
                purchasing:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Primary residences",
                  "Second homes and vacation properties",
                  "Apartments and villas",
                  "Residential investment properties",
                  "New-build homes",
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

              <p className="text-xs font-bold text-ink mb-3">
                Commercial Loans
              </p>

              <p className="text-xs text-ink-2 leading-relaxed mb-4">
                We assist investors, business owners and developers seeking
                financing for:
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  "Apartment and multifamily buildings",
                  "Hotels and hospitality properties",
                  "Retail, office and mixed-use properties",
                  "Warehouses and industrial facilities",
                  "Property acquisitions and refinancing",
                  "Commercial investment projects",
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
              <p className="text-xs font-bold text-ink mb-3">
                Construction and Development Loans
              </p>
              <p className="text-xs text-ink-2 leading-relaxed mb-4">
                Financing may also be available for ground-up construction,
                renovation
              </p>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Dream Home Builder AKA Earned Equity Program (EEP) */}
          <div
            id="eep"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                  <Key size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Earned Equity EEP
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-2",
                  fraunces.className,
                )}
              >
                Dream Home Builder (EEP)
              </h3>
              <p className="text-xs font-serif italic text-brand-orange mb-4">
                Unlock the Dream of Homeownership with an Innovative
                Lease-to-Own Program!
              </p>

              <div className="text-xs text-ink-2 space-y-3 mb-6 leading-relaxed">
                <p>
                  Homeownership is the primary engine of generational wealth.
                  Our specialized Earned Equity Program (EEP) converts
                  traditional rental scenarios into custom pathways to true real
                  estate acquisition.
                </p>
                <p>
                  By pairing prospective buyers with participating public-entity
                  frameworks, clients occupy single-family layouts while
                  stacking measurable fractional equity positions calculated to
                  pivot smoothly into standard FHA parameters down the road.
                </p>

                <div className="bg-[#f0ece1]/60 p-3 rounded-lg border border-line space-y-1 font-mono text-[11px]">
                  <p>
                    <strong>· LTV Framework:</strong> Matches FHA configurations
                    up to 96.5%
                  </p>
                  <p>
                    <strong>· Balance Limits:</strong> Aligned with standard
                    regional FHA limits
                  </p>
                  <p>
                    <strong>· Credit Baseline:</strong> 580 minimum tier
                    guidelines (sub-580 case-by-case)
                  </p>
                  <p>
                    <strong>· Documentation Matrix:</strong> Full-Doc, Bank
                    Statements, or 1099 arrays accepted
                  </p>
                  <li>ITIN and DACA configuration pathways available</li>
                </div>
              </div>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>

          {/* Doctor Loan Program */}
          <div
            id="doctor"
            className="scroll-mt-36 col-span-2 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                  <Stethoscope size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Medical Professional
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-2",
                  fraunces.className,
                )}
              >
                Doctor Loan Program
              </h3>
              <p className="text-xs font-bold text-moss-deep uppercase tracking-wide mb-4">
                Up to 100% Financing for Medical Professionals.
              </p>
              <p className="text-xs text-ink-2 leading-relaxed mb-4">
                We coordinate premium mortgage layouts designed explicitly for
                medical professionals, employing flexible underwriting
                parameters that factor in contracted career trajectories.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs text-ink-2 mb-6">
                <div>
                  <h4 className="font-semibold text-ink mb-1">
                    Program Highlights:
                  </h4>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                    <li>Up to 100% Financing metrics</li>
                    <li>No Mortgage Insurance (MI) overheads</li>
                    <li>Volumes scaling up to $2,000,000</li>
                    <li>
                      Exclusion of student loan debt from standard DTI rules
                    </li>
                    <li>Fixed and dynamic ARM configurations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-ink mb-1">
                    Eligible Designations:
                  </h4>
                  <p className="font-mono text-[11px] bg-line/20 p-2 rounded tracking-wide">
                    MD, DO, DDS, DMD, PharmD, VMD, DPM, CRNA <br />
                    <span className="italic text-ink-2 text-[10px] block mt-1">
                      (Inquire for extended medical classifications)
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/#start"
              className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all"
            >
              Apply Now! <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Legal Context Section */}
      <section className="bg-cream/40 border-t border-line py-12 text-ink-2 text-[11px] leading-relaxed">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-4">
          <p>
            * Rates and programs are illustrations subject to change without
            notice. These calculations do not constitute an official Loan
            Estimate or a binding commitment to lend. Qualification is subject
            to verification of financial assets and credit data profiles.
          </p>
          <p>
            MyLoanDesk.com is an independent lending entity and is not
            affiliated with the HUD, FHA, VA, USDA, or any federal agency. We
            strictly uphold Equal Housing Opportunity lending baselines.
          </p>
          <p>
            Secured Horizon Mortgage Group, Inc. NMLS 314226, 1444825
            (www.nmlsconsumeraccess.org) | (305) 891-6500 | 1801 NE 123 St,
            Suite 314, North Miami, FL 33181.
          </p>
        </div>
      </section>
    </main>
  );
}
