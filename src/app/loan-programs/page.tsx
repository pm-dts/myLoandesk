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
  TrendingDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";
import Link from "next/link";
import LoanProgramButton from "@/components/site/utils/LoanProgramButton";

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
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            Call/Text (305) 891-6500 · Professional Lending Spectrum
          </div> */}
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
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
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
                <p>Exceptional homes deserve exceptional financing.</p>
                <p>
                  Our Jumbo Loan programs are designed for luxury homes,
                  high-value properties, and discerning borrowers who expect
                  personalized, white-glove service from start to finish.
                  Whether you're purchasing a primary residence, second home, or
                  investment property, we provide access to some of the
                  industry's most competitive rates, flexible underwriting, and
                  customized financing solutions.
                </p>
                <p>
                  At MyLoanDesk, we understand that affluent borrowers often
                  have complex financial profiles. From self-employed
                  professionals and business owners to executives, investors,
                  and foreign nationals, our experienced team works with a broad
                  network of premier jumbo lenders to structure financing
                  tailored to your unique needs.
                </p>
              </div>
              <h4 className="font-medium text-ink mb-3">Ideal For:</h4>

              <ul className="space-y-2 mb-6">
                {[
                  "Luxury and high-value homes",
                  "Loan amounts above conventional limit",
                  "Self-employed and high-net-worth borrowers",
                  "Complex income or asset structures",
                  "Primary, vacation, and investment properties",
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
              <p className="font-bold text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                Experience the difference of personalized, concierge-level
                service with competitive rates, exceptional terms, and a lending
                experience designed around you.
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
          </div>

          {/* Bank Statement Loans */}
          <div
            id="bank-statement"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                  <FileText size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Self-Employed
                </span>
              </div>

              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-3",
                  fraunces.className,
                )}
              >
                Bank Statement Loans for Self-Employed Borrowers
              </h3>

              <p className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-3">
                Qualify Using Your Bank Statements Instead of Tax Returns
              </p>

              <div className="text-xs text-ink-2 leading-relaxed space-y-2 mb-4">
                <p>
                  Traditional mortgage programs often rely on tax returns to determine
                  income. For many self-employed borrowers, business deductions can
                  significantly reduce taxable income, making it difficult to qualify for
                  a conventional loan.
                </p>
                <p>
                  A Bank Statement Loan offers an alternative by allowing eligible
                  borrowers to qualify using their personal or business bank statements
                  instead of tax returns.
                </p>
                <p>
                  Whether you’re a business owner, independent contractor, consultant,
                  freelancer, or entrepreneur, this program is designed to provide
                  flexible financing that better reflects your actual cash flow.
                </p>
              </div>

              <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                Program Highlights:
              </h4>
              <ul className="space-y-2 mb-6">
                {[
                  "No tax returns required",
                  "Qualify using 12 or 24 months of personal or business bank statements",
                  "Available for self-employed borrowers with at least 2 years of self-employment",
                  "Purchase, refinance, or cash-out refinance options",
                  "Primary residences, second homes, and investment properties",
                  "Loan amounts available from conforming to jumbo financing",
                  "Flexible credit guidelines",
                  "Competitive fixed and adjustable-rate options",
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

              <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                Who Can Benefit?
              </h4>
              <p className="text-xs text-ink-2 mb-2">This program may be ideal for:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Small business owners",
                  "Independent contractors",
                  "Consultants",
                  "Freelancers",
                  "Real estate professionals",
                  "Medical professionals in private practice",
                  "Commission-based sales professionals",
                  "Any self-employed borrower whose tax returns do not accurately reflect their income",
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

              <div className="bg-cream/50 border border-line/60 rounded-2xl p-4 mb-4">
                <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-1.5">
                  Why Choose MyLoanDesk?
                </h4>
                <p className="text-xs text-ink-2 leading-relaxed">
                  At MyLoanDesk, we understand that self-employed borrowers have unique
                  financial situations. Our experienced mortgage specialists work with a
                  wide network of lenders to help find financing solutions tailored to
                  your business and income structure.
                </p>
              </div>

              <p className="text-xs text-ink-2 italic mb-2">
                If you’ve been told you don’t qualify through traditional lending, a Bank
                Statement Loan may be the solution you’ve been looking for.
              </p>
              <p className="text-xs text-ink-2 font-medium mb-4">
                Contact MyLoanDesk today for a personalized review and discover the
                mortgage options available to you.
              </p>
            </div>

            <LoanProgramButton />
          </div>

          {/* 2/1 */}
          <div
            id="buydown-2-1"
            className="scroll-mt-36 md:col-span-2 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              {/* Header & Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                  <TrendingDown size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Residential
                </span>
              </div>

              {/* Main Title & Subtitle */}
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-2",
                  fraunces.className
                )}
              >
                2/1 Buydown Mortgage
              </h3>
              <p className="text-base font-medium text-moss-deep mb-4">
                Lower Your Mortgage Payment During Your First Two Years of Homeownership
              </p>

              {/* Introduction */}
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                Buying a home is exciting—but the first couple of years can also bring new expenses like moving costs,
                furniture, home improvements, and growing family needs. A 2/1 Buydown Mortgage is designed to make
                that transition easier by reducing your monthly mortgage payment during the first two years of your loan.
                The reduced payment is funded through a temporary subsidy, often paid by the seller or builder as part of
                the transaction.
              </p>

              {/* Video Section */}
              <div className="mb-6 max-w-2xl">
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-line shadow-md bg-black">
                  <video
                    src="/2-1.mp4"
                    controls
                    playsInline
                    muted
                    autoPlay
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-6">
                <h4 className={cn("text-lg font-medium text-ink mb-2", fraunces.className)}>
                  How It Works
                </h4>
                <p className="text-sm text-ink-2 mb-3">
                  Let's say your permanent mortgage interest rate is 6.50%:
                </p>
                <ul className="list-disc list-inside text-sm text-ink-2 space-y-1.5 pl-2 mb-3">
                  <li><strong className="text-ink font-semibold">Year 1:</strong> Your payment is calculated using 4.50%</li>
                  <li><strong className="text-ink font-semibold">Year 2:</strong> Your payment is calculated using 5.50%</li>
                  <li><strong className="text-ink font-semibold">Year 3 and Beyond:</strong> Your payment returns to the permanent 6.50% fixed rate</li>
                </ul>
                <p className="text-sm text-ink-2 leading-relaxed">
                  This gives you valuable payment relief during the first two years while keeping the security of a fixed-rate mortgage.
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className={cn("text-lg font-medium text-ink mb-2", fraunces.className)}>
                  Benefits
                </h4>
                <ul className="list-disc list-inside text-sm text-ink-2 space-y-1.5 pl-2">
                  <li>Lower monthly payments during the first two years</li>
                  <li>Keep a fixed-rate mortgage—this is not an adjustable-rate loan</li>
                  <li>More financial flexibility while settling into your new home</li>
                  <li>Seller or builder concessions can often be used to fund the temporary payment reduction</li>
                  <li>Ideal for buyers who expect their income to increase or who may refinance if market conditions improve in the future</li>
                </ul>
              </div>

              {/* Who Should Consider a 2/1 Buydown? */}
              <div className="mb-6">
                <h4 className={cn("text-lg font-medium text-ink mb-2", fraunces.className)}>
                  Who Should Consider a 2/1 Buydown?
                </h4>
                <p className="text-sm text-ink-2 mb-2">This program may be a great fit for:</p>
                <ul className="list-disc list-inside text-sm text-ink-2 space-y-1.5 pl-2">
                  <li>First-time homebuyers</li>
                  <li>Buyers purchasing a newly constructed home</li>
                  <li>Buyers negotiating seller concessions</li>
                  <li>Families expecting increased income in the next few years</li>
                  <li>Anyone looking to reduce their initial monthly housing costs</li>
                </ul>
              </div>

              {/* Things to Know Callout */}
              <div className="text-xs text-ink-2 bg-[#f0ece1]/50 p-4 rounded-xl border border-line/50 leading-relaxed mb-6">
                <strong className="font-semibold text-ink block mb-1">Things to Know:</strong>
                A 2/1 Buydown temporarily lowers your monthly payment, not your permanent mortgage rate. You still
                qualify based on the full note rate, and after the first two years your payment adjusts to the regular fixed
                payment established at closing.
              </div>

              {/* Let MyLoanDesk Help Section */}
              <div className="mb-6 border-t border-line/50 pt-6">
                <h4 className={cn("text-lg font-medium text-ink mb-2", fraunces.className)}>
                  Let MyLoanDesk Help
                </h4>
                <p className="text-sm text-ink-2 leading-relaxed mb-3">
                  At MyLoanDesk, we'll review your financial goals, explain all available financing options, and determine
                  whether a 2/1 Buydown is the right strategy for your situation. If seller concessions are available, we'll help
                  structure the loan to maximize your savings while keeping your long-term goals in focus.
                </p>
                <p className="text-sm font-medium text-moss-deep italic">
                  Lower your payments today. Build your future with confidence.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <LoanProgramButton />
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
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
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
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
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
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
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
                Private Bridge Loans
              </h3>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>
                  Private bridge loans provide fast, flexible financing when
                  traditional mortgage options aren't the right fit. Whether
                  you're buying before selling, investing, renovating, or need
                  to close quickly, we can help you secure short-term financing
                  tailored to your situation.
                </p>

                <h4 className="font-medium text-ink mb-3">Ideal For:</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Buy before you sell",
                    "Investment properties",
                    "Renovation projects",
                    "Commercial real estate",
                    "Fast closings",
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
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
          </div>

          {/* Bridge to Sale */}
          <div
            id="bridge-to-sale"
            className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              {/* Header Icon & Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                  <RefreshCw size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
                  Transitions
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3
                className={cn(
                  "text-2xl font-medium text-ink mb-2",
                  fraunces.className,
                )}
              >
                Bridge to Sale Loans
              </h3>
              <p className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-4">
                Buy your next home before selling your current one.
              </p>

              {/* Description */}
              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                A Bridge to Sale loan gives you access to your home's equity, allowing you
                to purchase your next property without waiting for your current home to
                sell. Move on your timeline while avoiding the stress of coordinating
                two transactions.
              </p>

              {/* Program Highlights */}
              <div className="text-xs text-ink-2 mb-6">
                <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                  Program Highlights:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed">
                  <li>Up to 12-month interest-only financing</li>
                  <li>Access equity before your home is sold</li>
                  <li>Flexible income qualification options</li>
                  <li>No monthly payment options available for qualified borrowers</li>
                  <li>Fast approvals and streamlined closings</li>
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
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
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
          </div>

          {/* ITIN Home Loans */}
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
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
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
        {/* Added grid-cols-1 for explicit mobile baseline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">
          {/* FHA 203(k) Rehab Loans */}
          <div
            id="fha-203k"
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
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
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
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
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
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
          </div>

          {/* HELOC (Home Equity Line of Credit) - Added col-span-1 for mobile responsiveness */}
          <div
            id="heloc"
            className="scroll-mt-36 col-span-1 md:col-span-2 lg:col-span-3 bg-primary-bg p-6 sm:p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep shrink-0">
                  <Landmark size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                  Equity Access
                </span>
              </div>
              <h3
                className={cn(
                  "text-2xl sm:text-3xl font-medium text-ink mb-2",
                  fraunces.className,
                )}
              >
                Home Equity Solutions
              </h3>
              <p className="text-sm font-semibold text-brand-orange mb-4">
                Unlock the Value in Your Home Without Selling It
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-8 max-w-3xl">
                Whether you need ongoing access to funds or a one-time lump sum,
                MyLoanDesk offers competitive home equity financing designed
                around your goals.
              </p>

              {/* Video Section */}
              <div className="mb-8 max-w-2xl">
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-line shadow-md bg-black">
                  <video
                    src="/heloc.mp4"
                    controls
                    playsInline
                    autoPlay
                    muted
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Stacked Long-Column Content */}
              <div className="space-y-8 text-xs text-ink-2 mb-8">
                {/* HELOC Section */}
                <div className="border-b border-line pb-8">
                  <h4 className="font-bold text-ink mb-2 text-base sm:text-lg">
                    Home Equity Line of Credit (HELOC)
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-2 mb-4 leading-relaxed max-w-3xl">
                    A HELOC gives you a revolving line of credit that lets you
                    borrow only what you need, when you need it.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-cream/30 p-5 rounded-2xl border border-line/60">
                    <div>
                      <h5 className="font-semibold text-ink mb-2.5 text-xs sm:text-sm">
                        Best For:
                      </h5>
                      <ul className="space-y-2">
                        {[
                          "Home improvements",
                          "Debt consolidation",
                          "Education expenses",
                          "Investment opportunities",
                          "Emergency funds",
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 leading-tight"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-ink mb-2.5 text-xs sm:text-sm">
                        Benefits:
                      </h5>
                      <ul className="space-y-2">
                        {[
                          "Borrow up to $1,000,000*",
                          "Interest paid only on funds used",
                          "Flexible repayment options",
                          "Fast approvals",
                          "No appraisal in many cases",
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 leading-tight"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-moss-deep mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Home Equity Loan Section */}
                <div className="border-b border-line pb-8">
                  <h4 className="font-bold text-ink mb-2 text-base sm:text-lg">
                    Home Equity Loan (Second Mortgage)
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-2 mb-4 leading-relaxed max-w-3xl">
                    Receive a one-time lump sum while keeping your existing
                    first mortgage and interest rate.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-cream/30 p-5 rounded-2xl border border-line/60">
                    <div>
                      <h5 className="font-semibold text-ink mb-2.5 text-xs sm:text-sm">
                        Best For:
                      </h5>
                      <ul className="space-y-2">
                        {[
                          "Large renovations",
                          "Major purchases",
                          "Debt consolidation",
                          "Real estate investing",
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 leading-tight"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-ink mb-2.5 text-xs sm:text-sm">
                        Benefits:
                      </h5>
                      <ul className="space-y-2">
                        {[
                          "Fixed interest rate",
                          "Predictable monthly payments",
                          "Keep your current first mortgage",
                          "Fast approvals",
                          "Borrow substantial equity",
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 leading-tight"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-moss-deep mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsive Comparison Section */}
              <div className="bg-cream/50 border border-line rounded-2xl p-5 sm:p-6 mb-8">
                <h4 className="font-bold text-ink text-sm sm:text-base mb-4 text-center">
                  Which Option Is Right For You?
                </h4>
                <div className="overflow-x-auto min-w-full">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-line text-ink">
                        <th className="py-2.5 px-3 font-bold w-1/2">HELOC</th>
                        <th className="py-2.5 px-3 font-bold w-1/2">
                          Home Equity Loan
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line/60 text-ink-2">
                      <tr>
                        <td className="py-2.5 px-3">Revolving credit line</td>
                        <td className="py-2.5 px-3">One-time lump sum</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3">Borrow as needed</td>
                        <td className="py-2.5 px-3">
                          Receive all funds at closing
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3">Variable rate</td>
                        <td className="py-2.5 px-3">Fixed rate</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3">
                          Great for ongoing projects
                        </td>
                        <td className="py-2.5 px-3">
                          Great for one-time expenses
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Get Expert Advice Section */}
              <div className="mb-6">
                <h4 className="font-bold text-ink text-sm mb-1">
                  Get Expert Advice
                </h4>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed max-w-3xl">
                  Not sure which option fits your needs? Our mortgage
                  specialists will help you compare your options and recommend
                  the financing solution that's right for you.
                </p>
              </div>
            </div>

            {/* Responsive Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 max-w-xl">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">
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
                Whether you already own a home or are looking to purchase your
                next one, a reverse mortgage can provide greater financial
                flexibility during retirement
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/reverse-mortgage/#reverse-mortgage-inquiry"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
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
                A Reverse Mortgage Refinance allows you to replace your existing
                mortgage with a reverse mortgage. Any remaining equity can then
                be accessed as tax free proceeds, giving you additional
                financial flexibility while eliminating your required monthly
                mortgage payment.
              </p>

              <h4 className="font-medium text-ink mb-3 mt-4">
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

              <h4 className="font-medium text-ink mb-3 mt-4">
                Many homeowners use a reverse mortgage refinance to:
              </h4>
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

              <p className="text-sm text-ink-2 leading-relaxed mb-2 mt-4">
                Best of all, you continue to own your home and remain in control
                of how you use your equity.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/reverse-mortgage/#reverse-mortgage-inquiry"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
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
                Buy Your Next Home With No Required Monthly Mortgage Payment
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                A reverse mortgage isn't just for homeowners—it can also help
                you purchase your next primary residence.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                With a Reverse Mortgage for Purchase, you make a substantial
                down payment using the proceeds from the sale of your current
                home, savings, or other eligible funds. The reverse mortgage
                finances the remaining balance, allowing you to purchase your
                new home{" "}
                <span className="font-bold">
                  {" "}
                  without required monthly mortgage payments.
                </span>
              </p>

              <h4 className="font-medium text-ink mb-3 mt-4">
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

              <p className="text-sm text-ink-2 leading-relaxed mb-2 mt-4">
                Instead of tying up hundreds of thousands of dollars in a home
                purchase, you can keep more of your money available for travel,
                investments, healthcare, or everyday living expenses.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/reverse-mortgage/#reverse-mortgage-inquiry"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
          </div>

          {/* Is a Reverse Mortgage Right for You? */}
          <div
            id="reverse"
            className="scroll-mt-36 col-span-1 md:col-span-2 lg:col-span-3 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
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
                Every homeowner's situation is unique. That's why we take the
                time to understand your goals and explain every available option
                before you make a decision.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're interested in refinancing your current home or
                purchasing your next one, we'll help you determine if a reverse
                mortgage is the right solution for your retirement plans.
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
                Discover how much equity you may be able to access—or learn how
                you can purchase your next home with no required monthly
                mortgage payments.
              </p>
              <br />
              <p className="text-sm text-ink-2 leading-relaxed mb-8 font-bold">
                Schedule your free consultation today and explore your options
                with confidence.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-auto">
              <div className="flex flex-col gap-3">
                <a
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Apply Now <ArrowRight size={14} />
                </a>
                <Link
                  href="/reverse-mortgage/#reverse-mortgage-inquiry"
                  className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
                >
                  Contact Us Now
                </Link>
              </div>

              {/* Disclosure UI */}
              <div className="p-4 bg-ink/5 rounded-xl border border-line/60">
                <p className="text-[11px] text-ink-2 leading-relaxed text-justify">
                  <span className="font-bold text-ink">
                    Important Disclosure:
                  </span>{" "}
                  Borrowers remain responsible for property taxes, homeowners
                  insurance, applicable HOA dues, and maintaining the home. The
                  loan becomes due when the last eligible borrower permanently
                  leaves the home, sells the property, or no longer meets the
                  loan obligations. Eligibility, available proceeds, and loan
                  terms depend on age, property value, current interest rates,
                  and program guidelines.
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
        {/* Explicitly added grid-cols-1 for mobile baseline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">
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
                Grow Your Real Estate Portfolio Without Personal Income
                Verification
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                A Debt Service Coverage Ratio (DSCR) Loan is designed
                specifically for real estate investors. Instead of qualifying
                based on your personal income, employment, or tax returns, the
                loan is primarily based on the property's ability to generate
                rental income.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're purchasing your first investment property,
                expanding your portfolio, or refinancing an existing rental, a
                DSCR loan offers a flexible financing solution that keeps the
                focus on your investment-not your personal finances.
              </p>

              <h4 className="font-medium text-ink mb-3">
                Why Choose a DSCR Loan?
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Qualify primarily based on the property's rental income",
                  "No personal income verification required for qualifying*",
                  "No tax returns, W-2s, or pay stubs required in many cases*",
                  "Purchase, refinance, or cash-out refinance options available",
                  "Fixed and adjustable-rate loan programs",
                  "Finance single-family homes, condos, townhomes, and 2-4 unit investment properties",
                  "Available to both new and experienced real estate investors",
                  "Many programs allow financing in an LLC or other business entity",
                  "Competitive loan amounts with flexible underwriting",
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
                Who Is a DSCR Loan For?
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                A DSCR loan may be an excellent option if you are:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "A real estate investor building long-term wealth",
                  "Self-employed and prefer not to document personal income",
                  "Expanding your rental property portfolio",
                  "Investing in short-term or long-term rental properties",
                  "A foreign national purchasing U.S. investment property through eligible programs",
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
                Invest Smarter. Grow Faster.
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                With access to a broad network of DSCR lenders, MyLoanDesk can
                help you compare loan options designed to fit your investment
                strategy. We'll guide you through the process and help you
                secure financing that supports your long-term real estate goals.
              </p>
            </div>
            <div>
              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">
                  Ready to finance your next investment property?
                </span>
                <br />
                Contact MyLoanDesk today to explore your DSCR loan options and
                get pre-qualified.
              </p>

              {/* Disclaimer */}
              <div className="p-3 bg-line/20 rounded-xl border border-line mb-4">
                <h4 className="font-bold text-ink text-xs mb-1">
                  Program Disclaimer
                </h4>
                <p className="text-[10px] text-ink-2">
                  Program guidelines, property eligibility, loan amounts,
                  reserve requirements, and documentation requirements vary by
                  lender. Not all applicants or properties will qualify. Rental
                  income and property cash flow requirements apply. Terms and
                  availability are subject to change without notice.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Apply Now <ArrowRight size={14} />
                </a>
                <Link
                  href="/get-quote"
                  className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
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
                Fast, Flexible Financing for Real Estate Investors
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're renovating your first investment property or
                managing multiple projects each year, a Fix & Flip Loan provides
                the financing you need to purchase, renovate, and resell
                residential properties with confidence.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                These short-term loans are designed specifically for real estate
                investors, offering fast approvals and financing for both the
                property acquisition and eligible renovation costs-so you can
                focus on maximizing your return on investment.
              </p>

              <h4 className="font-medium text-ink mb-3">
                Why Choose a Fix & Flip Loan?
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Finance both the property purchase and eligible renovation costs",
                  "Fast approvals and quick closings to help you compete with cash buyers",
                  "Short-term financing tailored for renovation and resale projects",
                  "Loan amounts based on the property's projected After-Repair Value (ARV)",
                  "Finance single-family homes, condos, townhomes, and 2-4 unit properties",
                  "Available for both first-time and experienced real estate investors",
                  "Multiple simultaneous projects available for qualified borrowers",
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

              <h4 className="font-medium text-ink mb-3">
                Who Is a Fix & Flip Loan For?
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                A Fix & Flip Loan may be an excellent choice if you are:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Purchasing properties to renovate and resell",
                  "Expanding your real estate investment business",
                  "Looking for fast financing to secure competitive opportunities",
                  "Renovating distressed or value-add properties",
                  "Building a long-term real estate investment portfolio",
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
                Move Quickly. Renovate. Profit.
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Successful real estate investing depends on speed and reliable
                financing. At MyLoanDesk, we work with a network of experienced
                investment property lenders to help you secure competitive Fix &
                Flip financing with the flexibility to match your investment
                strategy.
              </p>
            </div>
            <div>
              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">
                  Ready to fund your next project?
                </span>
                <br />
                Contact MyLoanDesk today to explore your Fix & Flip loan options
                and get pre-qualified.
              </p>

              {/* Disclaimer */}
              <div className="p-3 bg-line/20 rounded-xl border border-line mb-4">
                <h4 className="font-bold text-ink text-xs mb-1">
                  Program Disclaimer
                </h4>
                <p className="text-[10px] text-ink-2">
                  Program guidelines, loan amounts, loan-to-value limits,
                  After-Repair Value (ARV) requirements, renovation funding, and
                  borrower qualifications vary by lender. Not all applicants or
                  properties will qualify. Terms and availability are subject to
                  change without notice.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Apply Now <ArrowRight size={14} />
                </a>
                <Link
                  href="/get-quote"
                  className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>

          {/* Ground up Loans */}
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
                Finance Your Dream Home or Next Development Project
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're building a custom home, developing a residential
                community, or constructing investment properties, MyLoanDesk
                offers flexible Ground-Up Construction Loans designed to help
                bring your vision to life.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                From purchasing the land to the final certificate of occupancy,
                we'll help you secure financing tailored to your project's size,
                scope, and timeline.
              </p>

              <h4 className="font-medium text-ink mb-3">
                Why Choose a Ground-Up Construction Loan?
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Finance land acquisition, construction costs, and approved project expenses",
                  "Available for owner-occupied homes, second homes, and investment properties",
                  "Construction-to-permanent financing available with many programs, eliminating the need for a second closing",
                  "Interest-only payments during the construction phase on many loan programs",
                  "Funds released in scheduled draws as construction milestones are completed",
                  "Flexible loan options for individual borrowers, custom home builders, and residential developers",
                  "Competitive loan amounts and underwriting tailored to your project",
                  "Financing available for single-family homes, custom residences, and residential developments",
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
                Who Is a Ground-Up Construction Loan For?
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                A Ground-Up Construction Loan may be the right solution if you
                are:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Building a custom primary residence",
                  "Constructing a vacation or second home",
                  "Developing spec homes for resale",
                  "Building investment properties",
                  "Developing multiple homes or residential subdivisions",
                  "An experienced builder or a qualified owner-builder",
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
                Build With Confidence
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Construction financing requires experience and the right lending
                partner. At MyLoanDesk, we work with a broad network of
                construction lenders to help you secure financing that matches
                your project's goals. From the initial planning stages through
                final completion—and, when available, permanent financing—we're
                here to guide you every step of the way.
              </p>
            </div>
            <div>
              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">
                  Ready to break ground?
                </span>
                <br />
                Contact MyLoanDesk today to discuss your construction project
                and explore the financing options available for your next build.
              </p>

              {/* Disclaimer */}
              <div className="p-3 bg-line/20 rounded-xl border border-line mb-4">
                <h4 className="font-bold text-ink text-xs mb-1">
                  Program Disclaimer
                </h4>
                <p className="text-[10px] text-ink-2">
                  Program guidelines, land eligibility, borrower qualifications,
                  loan amounts, draw schedules, interest reserves, loan-to-value
                  limits, and documentation requirements vary by lender. Not all
                  applicants or construction projects will qualify.
                  Construction-to-permanent financing is available through
                  select programs. Terms and availability are subject to change
                  without notice.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Apply Now <ArrowRight size={14} />
                </a>
                <Link
                  href="/get-quote"
                  className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>

          {/* Bridge Loans - Responsive col-span added */}
          {/* <div
            id="bridge-loans"
            className="scroll-mt-36 col-span-1 md:col-span-2 lg:col-span-3 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
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
            <div>
              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">Need financing fast?</span>
                <br />
                Contact MyLoanDesk today to learn how a bridge loan can help you
                move forward with confidence.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Apply Now <ArrowRight size={14} />
                </a>
                <Link
                  href="/get-quote"
                  className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div> */}
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
        {/* Explicitly added grid-cols-1 for mobile baseline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">
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
                From owner-occupied properties to large-scale investment and
                development projects, we'll help you secure the right financing
                with competitive rates, flexible loan structures, and
                personalized guidance every step of the way.
              </p>

              <h4 className="font-medium text-ink mb-3">
                Commercial Properties We Finance
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
                  "Restaurants & Hospitality Properties",
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

              <h4 className="font-medium text-ink mb-3">
                Commercial Loan Solutions
              </h4>
              <ul className="space-y-2 mb-4">
                {[
                  "Property Purchase",
                  "Commercial Refinancing",
                  "Cash-Out Refinancing",
                  "Ground-Up Construction Financing",
                  "Bridge Loans",
                  "SBA Loans",
                  "Portfolio Loans",
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
                  "Access to a broad network of commercial lenders",
                  "Financing for owner-occupied and investment properties",
                  "Competitive rates and flexible loan structures",
                  "Solutions for acquisitions, refinancing, development, and expansion",
                  "Experienced guidance from application through closing",
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
                Ready to finance your next commercial project?
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're acquiring your first commercial property or
                expanding an established real estate portfolio, MyLoanDesk can
                help you find the financing solution that fits your goals.
              </p>
            </div>
            <div>
              <p className="text-xs mb-4 text-ink-2">
                Contact MyLoanDesk today to explore your commercial financing
                options and get started.
              </p>
              <div className="flex flex-col gap-3">
                {/* <Link
                  href="/get-quote"
                  className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Get My Loan Options <ArrowRight size={14} />
                </Link> */}
                <Link
                  href="/get-quote"
                  className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
                >
                  Contact Us Now for more details
                </Link>
              </div>
            </div>
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
              <h4 className="font-medium text-ink mb-3">
                Finance the Equipment Your Business Needs to Grow
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're purchasing new equipment, replacing outdated
                machinery, or expanding your operations, MyLoanDesk offers
                flexible equipment financing solutions designed to help your
                business grow while preserving valuable working capital[cite:
                10].
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-4">
                With competitive financing options and fast approvals, you can
                acquire the equipment you need without tying up your cash
                reserves.
              </p>

              <h4 className="font-semibold text-ink text-xs mb-2">
                Why Choose Equipment Financing?
              </h4>
              <ul className="space-y-1.5 mb-4 text-xs text-ink/90">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <span>Finance new or used equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <span>
                    Preserve working capital for day-to-day operations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <span>Competitive rates and flexible repayment terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <span>
                    Fast approvals and funding for qualified borrowers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <span>
                    Up to 100% financing available for eligible equipment[cite:
                    10]
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <span>
                    Available for a wide range of industries and business types
                  </span>
                </li>
              </ul>

              <h4 className="font-semibold text-ink text-xs mb-2">
                Equipment We Can Help Finance
              </h4>
              <ul className="space-y-1.5 mb-4 text-xs text-ink/90">
                {[
                  "Construction Equipment",
                  "Manufacturing Machinery",
                  "Medical & Dental Equipment",
                  "Restaurant Equipment",
                  "Commercial Vehicles",
                  "Office Furniture & Technology",
                  "Agricultural Equipment",
                  "Warehouse & Industrial Equipment",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-ink text-xs mb-2">
                Keep Your Business Moving Forward
              </h4>
              <p className="text-xs text-ink-2 leading-relaxed mb-4">
                The right equipment can improve productivity, increase
                efficiency, and support long-term growth. MyLoanDesk works with
                a network of equipment financing specialists to help you secure
                a financing solution that fits your business needs.
              </p>
            </div>
            <div>
              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">
                  Ready to finance your next equipment purchase?
                </span>
                <br />
                Contact MyLoanDesk today to explore your equipment financing
                options.
              </p>
              <div className="flex flex-col gap-3">
                {/* <a
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Get My Loan Options <ArrowRight size={14} />
                </a> */}
                <Link
                  href="/get-quote"
                  className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
                >
                  Contact Us Now for more details
                </Link>
              </div>
            </div>
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
            <div className="flex flex-col gap-3 mt-6">
              {/* <a
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Get My Loan Options <ArrowRight size={14} />
                </a> */}
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now for more details
              </Link>
            </div>
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
            <div className="flex flex-col gap-3 mt-6">
              {/* <a
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Get My Loan Options <ArrowRight size={14} />
                </a> */}
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now for more details
              </Link>
            </div>
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
            <div className="flex flex-col gap-3 mt-6">
              {/* <a
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Get My Loan Options <ArrowRight size={14} />
                </a> */}
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now for more details
              </Link>
            </div>
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
            <div className="flex flex-col gap-3 mt-6">
              {/* <a
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Get My Loan Options <ArrowRight size={14} />
                </a> */}
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now for more details
              </Link>
            </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">
          {/* SBA and business loans */}
          <div
            id="sba-business"
            className="scroll-mt-36 col-span-1 md:col-span-2 lg:col-span-3 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40"
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
            <div>
              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">
                  Ready to grow your business?
                </span>
                <br />
                Contact MyLoanDesk today to explore your SBA financing options
                and find the loan that's right for your business.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  Apply Now <ArrowRight size={14} />
                </a>
                <Link
                  href="/get-quote"
                  className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
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
        {/* Added grid-cols-1 for explicit mobile baseline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">
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
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
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
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
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
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                Apply Now <ArrowRight size={14} />
              </a>
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now
              </Link>
            </div>
          </div>

          {/* Doctor Loan Program - Made responsive with md:col-span-2 */}
          <div
            id="doctor"
            className="scroll-mt-36 col-span-1 md:col-span-2 bg-primary-bg p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40 rounded-3xl border border-line"
          >
            <div>
              {/* Header & Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                  <Stethoscope size={22} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
                  Medical Professional
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3
                className={cn(
                  "text-2xl sm:text-3xl font-medium text-ink mb-2",
                  fraunces.className,
                )}
              >
                Doctor Loan Program
              </h3>
              <p className="text-xs font-bold text-moss-deep uppercase tracking-wide mb-4">
                Exclusive Mortgage Solutions for Medical Professionals
              </p>

              {/* Body Copy */}
              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                Your years of education and earning potential deserve a mortgage program
                designed specifically for your profession. Our Doctor Loan Program offers
                flexible underwriting, low down payment options, and financing that
                recognizes your future income—not just your current financial profile.
              </p>

              {/* Highlights & Eligible Professionals Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-ink-2 mb-6">
                {/* Program Highlights */}
                <div>
                  <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                    Program Highlights:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed">
                    <li>Up to 100% financing for qualified borrowers</li>
                    <li>No private mortgage insurance (PMI) on eligible loans</li>
                    <li>Loan amounts up to $2 million</li>
                    <li>Flexible treatment of student loan debt</li>
                    <li>Fixed-rate and Adjustable-Rate Mortgage (ARM) options</li>
                    <li>Available for purchasing or refinancing a primary residence</li>
                  </ul>
                </div>

                {/* Eligible Professionals */}
                <div>
                  <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                    Eligible Professionals:
                  </h4>
                  <div className="bg-line/20 p-3 rounded-xl">
                    <ul className="grid grid-cols-1 gap-1 font-mono text-[11px] tracking-wide text-ink">
                      <li>• Medical Doctors (MD)</li>
                      <li>• Doctors of Osteopathic Medicine (DO)</li>
                      <li>• Dentists (DDS, DMD)</li>
                      <li>• Pharmacists (PharmD)</li>
                      <li>• Veterinarians (DVM/VMD)</li>
                      <li>• Podiatrists (DPM)</li>
                      <li>• Certified Registered Nurse Anesthetists (CRNA)</li>
                    </ul>
                    <span className="italic text-ink-2 text-[10px] block mt-2 pt-2 border-t border-line/40">
                      Additional medical professions may qualify. Contact us to learn
                      more.
                    </span>
                  </div>
                </div>
              </div>

              {/* Why Choose MyLoanDesk Section */}
              <div className="bg-cream/50 border border-line/60 rounded-2xl p-4 sm:p-5 mb-6">
                <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-1.5">
                  Why Choose MyLoanDesk?
                </h4>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Our experienced mortgage advisors understand the unique financial needs
                  of healthcare professionals. We'll help you compare lending options from
                  multiple providers to find the program that best fits your career stage
                  and financial goals.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
              <Link
                href="/get-quote"
                className="w-full sm:w-1/2 py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm text-center"
              >
                Explore Your Doctor Loan Options <ArrowRight size={14} />
              </Link>
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3.5 bg-cream hover:bg-moss-deep hover:text-white border border-line hover:border-moss-deep rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all text-center"
              >
                Apply Now
              </a>
            </div>
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
