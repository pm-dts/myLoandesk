"use client";

import { useState, useEffect } from "react";
import { Shield, X, ArrowRight } from "lucide-react";
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

export default function ReverseMortgageSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
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

      {/* Grid updated to gap-6 matching the fixed card layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. HomeSafe Second (Replaced original Reverse Mortgages card) */}
        <div
          id="homesafe-second"
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
              HomeSafe Second (HELOC Alternative)
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-2">
              Access Your Equity Without Replacing Your First Mortgage
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-4">
              HomeSafe Second is a second-lien reverse mortgage designed for
              eligible homeowners who want to access their home equity while
              keeping their existing first mortgage in place.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("homesafe-second")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "homesafe-second"}
            onClose={closeModal}
            title="HomeSafe Second (HELOC Alternative)"
          >
            <div>
              <h4 className="font-medium text-ink mb-3">
                Access Your Equity Without Replacing Your First Mortgage
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                Based on the HomeSafe Second Description.pdf, HomeSafe Second is
                a second-lien reverse mortgage designed for eligible homeowners
                who want to access their home equity while keeping their
                existing first mortgage in place[cite: 1].
              </p>

              <h4 className="font-medium text-ink mb-3">Program Highlights:</h4>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-2 text-xs text-ink/90 leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold text-ink">
                      Keep Your Existing Mortgage:
                    </span>{" "}
                    If you already have a low interest rate on your first
                    mortgage, there may be no need to refinance it[cite: 1].
                    HomeSafe Second allows you to tap into your available equity
                    while leaving your current mortgage intact[cite: 1].
                  </div>
                </li>
                <li className="flex items-start gap-2 text-xs text-ink/90 leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold text-ink">
                      No New Monthly Mortgage Payment*:
                    </span>{" "}
                    Unlike a traditional HELOC or home equity loan, HomeSafe
                    Second does not require a monthly mortgage payment* on the
                    new loan[cite: 1]. This can provide additional financial
                    flexibility without adding another required monthly mortgage
                    payment to your budget[cite: 1].
                  </div>
                </li>
                <li className="flex items-start gap-2 text-xs text-ink/90 leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold text-ink">
                      Access $50,000 to $1 Million:
                    </span>{" "}
                    Depending on eligibility, property value, and available
                    equity, qualified homeowners may be able to access $50,000
                    to $1 million of their home equity[cite: 1].
                  </div>
                </li>
                <li className="flex items-start gap-2 text-xs text-ink/90 leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold text-ink">
                      Non-Recourse Protection:
                    </span>{" "}
                    HomeSafe Second includes non-recourse protection[cite: 1].
                    Generally, the borrower or estate will not owe more than the
                    value of the home when the loan becomes due and payable,
                    subject to the terms of the loan[cite: 1].
                  </div>
                </li>
                <li className="flex items-start gap-2 text-xs text-ink/90 leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold text-ink">
                      A HELOC Alternative for Eligible Homeowners:
                    </span>{" "}
                    HomeSafe Second may be worth considering if you want to
                    access equity for home improvements, unexpected expenses,
                    financial planning, or other needs while preserving your
                    existing first mortgage[cite: 1].
                  </div>
                </li>
              </ul>

              <p className="text-sm text-ink-2 leading-relaxed mb-6 font-medium">
                Want to see if HomeSafe Second fits your situation? Contact
                MyLoanDesk to review your options and compare HomeSafe Second
                with a traditional HELOC or home equity loan[cite: 1].
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-auto">
              <LoanProgramButton loan_type="HomeSafe Second" />

              <div className="p-4 bg-ink/5 rounded-xl border border-line/60">
                <p className="text-[11px] text-ink-2 leading-relaxed text-justify">
                  <span className="font-bold text-ink">
                    Important Disclosure:
                  </span>{" "}
                  *No monthly mortgage payments are required; however, borrowers
                  must continue to meet the loan obligations, including paying
                  property taxes, homeowners insurance, applicable HOA charges,
                  and maintaining the property[cite: 1]. The loan balance
                  becomes due and payable upon a maturity event as defined by
                  the loan terms[cite: 1]. Eligibility, loan amounts, rates,
                  fees, and terms are subject to program guidelines and may
                  vary[cite: 1].
                </p>
              </div>
            </div>
          </LoanDetailModal>
        </div>

        {/* 2. Reverse Mortgage Refinance */}
        <div
          id="reverse-refinance"
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
              Reverse Mortgage Refinance
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2">
              Convert Your Home Equity Into Cash
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-4">
              A Reverse Mortgage Refinance allows you to replace your existing
              mortgage with a reverse mortgage. Any remaining equity can then be
              accessed as tax free proceeds, giving you additional financial
              flexibility while eliminating your required monthly mortgage
              payment.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("reverse-refinance")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "reverse-refinance"}
            onClose={closeModal}
            title="Reverse Mortgage Refinance"
          >
            <div>
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

              <p className="text-sm text-ink-2 leading-relaxed mb-6 mt-4">
                Best of all, you continue to own your home and remain in control
                of how you use your equity.
              </p>
            </div>
            <LoanProgramButton loan_type="Reverse Mortgage Refinance" />
          </LoanDetailModal>
        </div>

        {/* 3. Reverse Mortgage for Purchase */}
        <div
          id="reverse-purchase"
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
              Reverse Mortgage for Purchase
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-2">
              Buy Your Next Home With No Required Monthly Mortgage Payment
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              A reverse mortgage isn't just for homeowners—it can also help you
              purchase your next primary residence.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("reverse-purchase")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "reverse-purchase"}
            onClose={closeModal}
            title="Reverse Mortgage for Purchase"
          >
            <div>
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

              <p className="text-sm text-ink-2 leading-relaxed mb-6 mt-4">
                Instead of tying up hundreds of thousands of dollars in a home
                purchase, you can keep more of your money available for travel,
                investments, healthcare, or everyday living expenses.
              </p>
            </div>
            <LoanProgramButton loan_type="Reverse Mortgage for Purchase" />
          </LoanDetailModal>
        </div>

        {/* 4. Is a Reverse Mortgage Right for You? */}
        <div
          id="reverse-right-for-you"
          className="scroll-mt-36 col-span-1 md:col-span-2 lg:col-span-3 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[400px] transition-colors duration-300 hover:bg-cream/40"
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
              Is a Reverse Mortgage Right for You?
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-4">
              Every homeowner's situation is unique. That's why we take the time
              to understand your goals and explain every available option before
              you make a decision. Whether you're interested in refinancing your
              current home or purchasing your next one...
            </p>
          </div>
          <div className="mt-auto pt-4 max-w-sm">
            <button
              onClick={() => setActiveModal("reverse-right-for-you")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "reverse-right-for-you"}
            onClose={closeModal}
            title="Is a Reverse Mortgage Right for You?"
          >
            <div>
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
              <p className="text-sm text-ink-2 leading-relaxed mb-8 font-bold mt-4">
                Schedule your free consultation today and explore your options
                with confidence.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-auto">
              <LoanProgramButton loan_type="Request Free Consultation" />

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
          </LoanDetailModal>
        </div>
      </div>
    </section>
  );
}
