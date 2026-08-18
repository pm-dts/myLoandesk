"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, X, ArrowRight, ExternalLink } from "lucide-react";
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

export default function SBABusinessSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
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

      {/* Grid updated to gap-6 matching the fixed card layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. SBA Business Loans */}
        <div
          id="sba-business"
          className="scroll-mt-36 col-span-1 md:col-span-2 lg:col-span-3 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[435px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
                Business Growth
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              SBA Business Loans
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-1">
              Affordable Financing to Help Your Business Grow
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3 max-w-4xl">
              Whether you&apos;re starting a new business, expanding operations,
              purchasing equipment, or acquiring an existing company, SBA loans
              offer flexible financing backed by the U.S. Small Business
              Administration with loan amounts up to $5M.
            </p>
          </div>

          {/* Card Action Buttons with Link to Dedicated Page */}
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2 max-w-md">
            <button
              onClick={() => setActiveModal("sba-business")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>

            <Link
              href="/loan-programs/sba-business-loans"
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Program Page{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "sba-business"}
            onClose={closeModal}
            title="SBA Business Loans"
          >
            <div>
              <h4 className="font-medium text-ink mb-3">
                Affordable Financing to Help Your Business Grow
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you&apos;re starting a new business, expanding
                operations, purchasing commercial real estate, or acquiring an
                existing company, <span className="font-bold"> SBA Loans</span>{" "}
                offer flexible financing backed by the U.S. Small Business
                Administration.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                Designed to make capital more accessible, SBA loans often
                provide lower down payments, longer repayment terms, and
                competitive interest rates compared to many conventional
                business loans.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-medium text-ink mb-3">
                    SBA Loan Programs Can Be Used For
                  </h4>
                  <ul className="space-y-2">
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
                </div>

                <div>
                  <h4 className="font-medium text-ink mb-3">
                    Why Choose an SBA Loan?
                  </h4>
                  <ul className="space-y-2">
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
                </div>
              </div>

              <h4 className="font-medium text-ink mb-3 mt-6">Ideal For</h4>
              <ul className="space-y-2 mb-6">
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

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Want to calculate payments & explore loan options?
                  </div>
                  <p className="text-xs text-ink-2">
                    Estimate monthly costs with our live WSJ Prime rate
                    calculator and review full SBA guidelines.
                  </p>
                </div>
                <Link
                  href="/loan-programs/sba-business-loans"
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  Visit Full Program Page <ArrowRight size={14} />
                </Link>
              </div>

              <h4 className="font-medium text-ink mb-3 mt-6">
                Build Your Business With Confidence
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                Whether you&apos;re purchasing your first commercial property,
                expanding to a new location, or investing in your company&apos;s
                future, MyLoanDesk can help you navigate the SBA loan process
                from application through closing.
              </p>
            </div>

            <div className="pt-4 border-t border-line">
              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">
                  Ready to grow your business?
                </span>
                <br />
                Contact MyLoanDesk today to explore your SBA financing options
                and find the loan that&apos;s right for your business.
              </p>
              <LoanProgramButton loan_type="SBA Business" />
            </div>
          </LoanDetailModal>
        </div>
      </div>
    </section>
  );
}
