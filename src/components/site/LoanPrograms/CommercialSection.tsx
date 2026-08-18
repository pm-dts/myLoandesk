"use client";

import { useState, useEffect } from "react";
import {
  Shield,
  Briefcase,
  Landmark,
  RefreshCw,
  Key,
  Building,
  X,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
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

export default function CommercialFinancingSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
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

      {/* Grid with uniform card heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Commercial Real Estate Loans */}
        <div
          id="commercial-real-estate"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[440px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
                Commercial Property
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              Commercial Real Estate Loans
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-1">
              Financing Solutions for Businesses, Investors &amp; Developers
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Whether you&apos;re purchasing, refinancing, constructing, or
              expanding commercial real estate, MyLoanDesk provides access to a
              broad network of commercial lenders.
            </p>
          </div>

          {/* Card Action Buttons */}
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("commercial-real-estate")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>

            <Link
              href="/loan-programs/commercial-real-estate-loans"
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Program Page{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "commercial-real-estate"}
            onClose={closeModal}
            title="Commercial Real Estate Loans"
          >
            <div>
              <h4 className="font-medium text-ink mb-3">
                Financing Solutions for Businesses, Investors &amp; Developers
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you&apos;re purchasing, refinancing, constructing, or
                expanding commercial real estate, MyLoanDesk provides access to
                a broad network of commercial lenders offering financing
                tailored to your business and investment goals.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                From owner-occupied properties to large-scale investment and
                development projects, we&apos;ll help you secure the right
                financing with competitive rates, flexible loan structures, and
                personalized guidance every step of the way.
              </p>

              <h4 className="font-medium text-ink mb-3">
                Commercial Properties We Finance
              </h4>
              <ul className="space-y-2 mb-6">
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
              <ul className="space-y-2 mb-6">
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

              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Want to calculate CRE payments &amp; LTV?
                  </div>
                  <p className="text-xs text-ink-2">
                    Estimate monthly costs, explore SBA 7(a)/504 vs.
                    conventional terms, and check special-use property options.
                  </p>
                </div>
                <Link
                  href="/loan-programs/commercial-real-estate-loans"
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  Visit Full Program Page <ArrowRight size={14} />
                </Link>
              </div>

              <h4 className="font-medium text-ink mb-3">
                Why Choose MyLoanDesk?
              </h4>
              <ul className="space-y-2 mb-6">
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
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                Whether you&apos;re acquiring your first commercial property or
                expanding an established real estate portfolio, MyLoanDesk can
                help you find the financing solution that fits your goals.
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now for more details
              </Link>
            </div>
          </LoanDetailModal>
        </div>

        {/* 2. Equipment Financing */}
        <div
          id="equipment"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[440px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373] shrink-0">
                <Briefcase size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
                Capital Growth
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              Equipment Financing
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-1">
              Finance the Equipment Your Business Needs to Grow
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Whether you&apos;re purchasing new equipment, replacing outdated
              machinery, or expanding your operations, MyLoanDesk offers
              flexible equipment financing solutions...
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("equipment")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "equipment"}
            onClose={closeModal}
            title="Equipment Financing"
          >
            <div>
              <h4 className="font-medium text-ink mb-3">
                Finance the Equipment Your Business Needs to Grow
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                Whether you&apos;re purchasing new equipment, replacing outdated
                machinery, or expanding your operations, MyLoanDesk offers
                flexible equipment financing solutions designed to help your
                business grow while preserving valuable working capital.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                With competitive financing options and fast approvals, you can
                acquire the equipment you need without tying up your cash
                reserves.
              </p>

              <h4 className="font-semibold text-ink text-xs mb-2">
                Why Choose Equipment Financing?
              </h4>
              <ul className="space-y-1.5 mb-6 text-xs text-ink/90">
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
                    Up to 100% financing available for eligible equipment
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
              <ul className="space-y-1.5 mb-6 text-xs text-ink/90">
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
              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                The right equipment can improve productivity, increase
                efficiency, and support long-term growth. MyLoanDesk works with
                a network of equipment financing specialists to help you secure
                a financing solution that fits your business needs.
              </p>

              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">
                  Ready to finance your next equipment purchase?
                </span>
                <br />
                Contact MyLoanDesk today to explore your equipment financing
                options.
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now for more details
              </Link>
            </div>
          </LoanDetailModal>
        </div>

        {/* 3. Business Lines of Credit */}
        <div
          id="business-lines"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[440px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep shrink-0">
                <Landmark size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
                Liquidity Access
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              Business Lines of Credit
            </h3>
            <p className="text-xs font-bold uppercase tracking-wider text-moss-deep mb-2 line-clamp-1">
              Secure quick access to floating working capital reserves smoothly.
            </p>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Maintaining strategic liquidity shields operations from unexpected
              overhead pressures. Deploy flexible programmatic revolving funds
              only when specific allocation needs present...
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("business-lines")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "business-lines"}
            onClose={closeModal}
            title="Business Lines of Credit"
          >
            <div>
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

                <div className="bg-[#f0ece1]/50 p-4 rounded-xl border border-line/50 text-xs space-y-2">
                  <h4 className="font-semibold text-ink text-[11px] uppercase tracking-wider">
                    Capital Deployment &amp; Use Cases:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-[11px] text-ink-2 leading-relaxed">
                    <li>
                      Bridge seasonal cash flow gaps and bulk inventory
                      purchases
                    </li>
                    <li>
                      Take advantage of immediate supplier volume discounts
                    </li>
                    <li>
                      Fund equipment upgrades and expansion initiatives on
                      demand
                    </li>
                    <li>
                      Unsecured and secured line structures available based on
                      business revenue
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now for more details
              </Link>
            </div>
          </LoanDetailModal>
        </div>

        {/* 4. Working Capital */}
        <div
          id="working-capital"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[440px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <RefreshCw size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
                Operations Stack
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              Working Capital
            </h3>
            <p className="text-xs font-medium italic text-ink-2 mb-2 line-clamp-1">
              Customized liquid solutions tailored to enterprise growth metrics.
            </p>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Empower seasonal purchase capacity or capitalize on high-volume
              inventory procurement windows via tailored working capital
              structures...
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("working-capital")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "working-capital"}
            onClose={closeModal}
            title="Working Capital"
          >
            <div>
              <p className="text-xs font-medium italic text-ink-2 mb-4">
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
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now for more details
              </Link>
            </div>
          </LoanDetailModal>
        </div>

        {/* 5. Franchise Financing Solutions */}
        <div
          id="franchise"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[440px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373] shrink-0">
                <Key size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
                Franchise Desk
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              Franchise Financing Solutions
            </h3>
            <p className="text-xs font-semibold text-brand-orange mb-2 line-clamp-1">
              Comprehensive capitalization matrices built for single and
              multi-unit expansions.
            </p>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Accelerate standard store timelines or update equipment models
              across multi-unit frameworks with custom franchise lending
              setups...
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("franchise")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "franchise"}
            onClose={closeModal}
            title="Franchise Financing Solutions"
          >
            <div>
              <p className="text-xs font-semibold text-brand-orange mb-4">
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
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now for more details
              </Link>
            </div>
          </LoanDetailModal>
        </div>

        {/* 6. Commercial Loans */}
        <div
          id="commercial"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[440px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep shrink-0">
                <Building size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
                Commercial Scale
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              Commercial Loans
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-4">
              We structure institutional-level options spanning standard asset
              classes: Multifamily, Mixed-Use, Warehouse/Industrial footprints,
              Office properties, and Retail strip centers.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("commercial")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "commercial"}
            onClose={closeModal}
            title="Commercial Loans"
          >
            <div>
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
              <Link
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                Contact Us Now for more details
              </Link>
            </div>
          </LoanDetailModal>
        </div>
      </div>
    </section>
  );
}
