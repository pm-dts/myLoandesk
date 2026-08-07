"use client";

import { useState, useEffect } from "react";
import { Shield, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LoanProgramButton from "@/components/site/utils/LoanProgramButton";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// ----------------------------------------
// MODAL: Content Detail
// ----------------------------------------
function LoanDetailModal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-primary-bg text-ink rounded-3xl shadow-2xl flex flex-col max-h-[90vh] h-full sm:h-auto animate-in zoom-in-95 duration-300 border border-line"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="shrink-0 flex items-center justify-between p-6 sm:p-8 border-b border-line bg-cream/30 rounded-t-3xl">
          <h3
            className={cn("text-2xl font-medium text-ink", fraunces.className)}
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            className="bg-line/40 hover:bg-line/80 text-ink p-2 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">{children}</div>
      </div>
    </div>
  );
}

export default function RealEstateInvestmentSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <section
      className="max-w-7xl mx-auto px-6 mt-10 lg:px-10 mb-20"
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

      {/* Grid updated to gap-6 matching the fixed card layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. DSCR Financing */}
        <div
          id="DSCR"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
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
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-2">
              Grow Your Real Estate Portfolio Without Personal Income
              Verification
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              A Debt Service Coverage Ratio (DSCR) Loan is designed specifically
              for real estate investors. Instead of qualifying based on your
              personal income, employment, or tax returns...
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("dscr")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "dscr"}
            onClose={closeModal}
            title="DSCR Investment Property Loans"
          >
            <div>
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
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                Whether you're purchasing your first investment property,
                expanding your portfolio, or refinancing an existing rental, a
                DSCR loan offers a flexible financing solution that keeps the
                focus on your investment-not your personal finances.
              </p>

              <h4 className="font-medium text-ink mb-3">
                Why Choose a DSCR Loan?
              </h4>
              <ul className="space-y-2 mb-6">
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
              <ul className="space-y-2 mb-6">
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
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                With access to a broad network of DSCR lenders, MyLoanDesk can
                help you compare loan options designed to fit your investment
                strategy. We'll guide you through the process and help you
                secure financing that supports your long-term real estate goals.
              </p>

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

              <LoanProgramButton loan_type="DSCR Investment Property Loans" />
            </div>
          </LoanDetailModal>
        </div>

        {/* 2. Fix & Flip Loans */}
        <div
          id="fix-flip"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
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
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-2">
              Fast, Flexible Financing for Real Estate Investors
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Whether you're renovating your first investment property or
              managing multiple projects each year, a Fix & Flip Loan provides
              the financing you need to purchase, renovate, and resell...
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("fix-flip")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "fix-flip"}
            onClose={closeModal}
            title="Fix & Flip Loans"
          >
            <div>
              <h4 className="font-medium text-ink mb-3">
                Fast, Flexible Financing for Real Estate Investors
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're renovating your first investment property or
                managing multiple projects each year, a Fix & Flip Loan provides
                the financing you need to purchase, renovate, and resell
                residential properties with confidence.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                These short-term loans are designed specifically for real estate
                investors, offering fast approvals and financing for both the
                property acquisition and eligible renovation costs-so you can
                focus on maximizing your return on investment.
              </p>

              <h4 className="font-medium text-ink mb-3">
                Why Choose a Fix & Flip Loan?
              </h4>
              <ul className="space-y-2 mb-6">
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
              <ul className="space-y-2 mb-6">
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
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                Successful real estate investing depends on speed and reliable
                financing. At MyLoanDesk, we work with a network of experienced
                investment property lenders to help you secure competitive Fix &
                Flip financing with the flexibility to match your investment
                strategy.
              </p>

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

              <LoanProgramButton loan_type="Fix & Flip Loans" />
            </div>
          </LoanDetailModal>
        </div>

        {/* 3. Ground-Up Construction Loans */}
        <div
          id="ground-up"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
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
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-2">
              Finance Your Dream Home or Next Development Project
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Whether you're building a custom home, developing a residential
              community, or constructing investment properties, MyLoanDesk
              offers flexible Ground-Up Construction Loans...
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("ground-up")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "ground-up"}
            onClose={closeModal}
            title="Ground-Up Construction Loans"
          >
            <div>
              <h4 className="font-medium text-ink mb-3">
                Finance Your Dream Home or Next Development Project
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you're building a custom home, developing a residential
                community, or constructing investment properties, MyLoanDesk
                offers flexible Ground-Up Construction Loans designed to help
                bring your vision to life.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                From purchasing the land to the final certificate of occupancy,
                we'll help you secure financing tailored to your project's size,
                scope, and timeline.
              </p>

              <h4 className="font-medium text-ink mb-3">
                Why Choose a Ground-Up Construction Loan?
              </h4>
              <ul className="space-y-2 mb-6">
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
              <ul className="space-y-2 mb-6">
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
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                Construction financing requires experience and the right lending
                partner. At MyLoanDesk, we work with a broad network of
                construction lenders to help you secure financing that matches
                your project's goals. From the initial planning stages through
                final completion—and, when available, permanent financing—we're
                here to guide you every step of the way.
              </p>

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

              <LoanProgramButton loan_type="Ground-Up Construction Loans" />
            </div>
          </LoanDetailModal>
        </div>

        {/* 4. Bridge Loans (Commented out in original prompt, formatted identically) */}
        {/* <div
          id="bridge-loans"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
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
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-2">
              Short-Term Financing to Bridge the Gap
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              A Bridge Loan provides fast, short-term financing when timing is
              critical. Whether you're purchasing a new property before selling
              your current one, acquiring an investment opportunity...
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("bridge-loans")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "bridge-loans"}
            onClose={closeModal}
            title="Bridge Loans"
          >
            <div>
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
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                Designed for speed and flexibility, bridge loans help you act
                quickly in competitive markets without missing valuable
                opportunities.
              </p>

              <h4 className="font-medium text-ink mb-3">Program Highlights</h4>
              <ul className="space-y-2 mb-6">
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
              <ul className="space-y-2 mb-6">
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
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                In today's competitive market, waiting for traditional financing
                can mean losing the perfect property. MyLoanDesk works with a
                network of lenders offering flexible bridge loan solutions to
                help you close quickly and transition smoothly to your long-term
                financing strategy.
              </p>

              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">Need financing fast?</span>
                <br />
                Contact MyLoanDesk today to learn how a bridge loan can help you
                move forward with confidence.
              </p>

              <div className="flex flex-col gap-3 mt-4">
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
          </LoanDetailModal>
        </div> */}
      </div>
    </section>
  );
}
