"use client";

import { useState, useEffect } from "react";
import { Landmark, Key, Stethoscope, X, ArrowRight } from "lucide-react";
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
      {/* Fixed size modal container with internal scrolling */}
      <div
        className="relative w-full max-w-3xl bg-primary-bg rounded-3xl shadow-2xl flex flex-col max-h-[90vh] h-full sm:h-auto animate-in zoom-in-95 duration-300 border border-line"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
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

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">{children}</div>
      </div>
    </div>
  );
}

export default function InternationalCustomSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <section
      className="max-w-7xl mx-auto px-6 lg:px-10 mb-28"
      id="international-custom"
    >
      <h2
        className={cn(
          "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
          fraunces.className,
        )}
      >
        International & Custom Footprints
      </h2>

      {/* Grid updated to gap-6 matching the fixed card layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mexico Loans (Commented out in original prompt, formatted identically) */}
        {/* <div
          id="mexico"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          ... (omitted for brevity, you can convert it similarly if needed)
        </div> */}

        {/* 1. Portugal Loans */}
        <div
          id="portugal"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep shrink-0">
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
            <p className="text-xs font-bold text-ink mb-2 line-clamp-2">
              Residential, Commercial and Construction Loans
            </p>
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-4">
              Whether you are buying a home, investing in commercial real
              estate, or developing a new project, we help qualified borrowers
              explore financing options through our network of lenders in
              Portugal.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("portugal")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "portugal"}
            onClose={closeModal}
            title="Property Financing in Portugal"
          >
            <div>
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
              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                Financing may also be available for ground-up construction,
                renovation
              </p>
            </div>
            <div className="pt-4 border-t border-line">
              <LoanProgramButton loan_type="Construction and Development Loans" />
            </div>
          </LoanDetailModal>
        </div>

        {/* 2. Dream Home Builder AKA Earned Equity Program (EEP) */}
        <div
          id="eep"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
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
            <p className="text-xs font-serif italic text-brand-orange mb-3 line-clamp-2">
              Unlock the Dream of Homeownership with an Innovative Lease-to-Own
              Program!
            </p>
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-3">
              Homeownership is the primary engine of generational wealth. Our
              specialized Earned Equity Program (EEP) converts traditional
              rental scenarios into custom pathways to true real estate
              acquisition.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("eep")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "eep"}
            onClose={closeModal}
            title="Dream Home Builder (EEP)"
          >
            <div>
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

                <div className="bg-[#f0ece1]/60 p-4 rounded-xl border border-line space-y-2 font-mono text-[11px] mt-4">
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
                  <p>
                    <strong>· Additional Options:</strong> ITIN and DACA
                    configuration pathways available
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-line">
              <LoanProgramButton loan_type="Earned Equity EEP" />
            </div>
          </LoanDetailModal>
        </div>

        {/* 3. Doctor Loan Program */}
        <div
          id="doctor"
          className="scroll-mt-36 col-span-1 md:col-span-2 lg:col-span-1 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep shrink-0">
                <Stethoscope size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
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
            <p className="text-xs font-bold text-moss-deep uppercase tracking-wide mb-3 line-clamp-2">
              Exclusive Mortgage Solutions for Medical Professionals
            </p>
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-3">
              Your years of education and earning potential deserve a mortgage
              program designed specifically for your profession. Our Doctor Loan
              Program offers flexible underwriting, low down payment...
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("doctor")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "doctor"}
            onClose={closeModal}
            title="Doctor Loan Program"
          >
            <div>
              <p className="text-xs font-bold text-moss-deep uppercase tracking-wide mb-4">
                Exclusive Mortgage Solutions for Medical Professionals
              </p>

              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                Your years of education and earning potential deserve a mortgage
                program designed specifically for your profession. Our Doctor
                Loan Program offers flexible underwriting, low down payment
                options, and financing that recognizes your future income—not
                just your current financial profile.
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
                    <li>
                      No private mortgage insurance (PMI) on eligible loans
                    </li>
                    <li>Loan amounts up to $2 million</li>
                    <li>Flexible treatment of student loan debt</li>
                    <li>
                      Fixed-rate and Adjustable-Rate Mortgage (ARM) options
                    </li>
                    <li>
                      Available for purchasing or refinancing a primary
                      residence
                    </li>
                  </ul>
                </div>

                {/* Eligible Professionals */}
                <div>
                  <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                    Eligible Professionals:
                  </h4>
                  <div className="bg-line/20 p-4 rounded-xl border border-line/40">
                    <ul className="grid grid-cols-1 gap-1 font-mono text-[11px] tracking-wide text-ink">
                      <li>• Medical Doctors (MD)</li>
                      <li>• Doctors of Osteopathic Medicine (DO)</li>
                      <li>• Dentists (DDS, DMD)</li>
                      <li>• Pharmacists (PharmD)</li>
                      <li>• Veterinarians (DVM/VMD)</li>
                      <li>• Podiatrists (DPM)</li>
                      <li>• Certified Registered Nurse Anesthetists (CRNA)</li>
                    </ul>
                    <span className="italic text-ink-2 text-[10px] block mt-3 pt-3 border-t border-line/40">
                      Additional medical professions may qualify. Contact us to
                      learn more.
                    </span>
                  </div>
                </div>
              </div>

              {/* Why Choose MyLoanDesk Section */}
              <div className="bg-cream/50 border border-line/60 rounded-2xl p-5 mb-6">
                <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                  Why Choose MyLoanDesk?
                </h4>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Our experienced mortgage advisors understand the unique
                  financial needs of healthcare professionals. We'll help you
                  compare lending options from multiple providers to find the
                  program that best fits your career stage and financial goals.
                </p>
              </div>
            </div>

            {/* Custom Doctor Actions placed securely in Modal bottom */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 pt-4 border-t border-line">
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
          </LoanDetailModal>
        </div>
      </div>
    </section>
  );
}
