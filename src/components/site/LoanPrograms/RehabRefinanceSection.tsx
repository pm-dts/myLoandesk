"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  RefreshCw,
  Landmark,
  CheckCircle2,
  X,
  ArrowRight,
  PlayCircle,
  Shield,
  Link as LinkIcon,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import LoanProgramButton from "../utils/LoanProgramButton";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

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

function VideoModal({
  videoInfo,
  onClose,
}: {
  videoInfo: { src: string; title: string } | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (videoInfo) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [videoInfo]);

  if (!videoInfo) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
            aria-label="Close video"
          >
            <X size={20} />
          </button>
        </div>
        <video
          src={videoInfo.src}
          controls
          autoPlay
          playsInline
          className="w-full h-full object-contain max-h-[80vh]"
        />
      </div>
    </div>
  );
}

export default function HomeEquitySection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const closeModal = () => setActiveModal(null);
  const closeVideo = () => setActiveVideo(null);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20" id="home-equity">
      <h2
        className={cn(
          "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
          fraunces.className,
        )}
      >
        Rehab, Refinances & Home Equity Lines
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. FHA 203(k) Rehab Loans */}
        <div
          id="fha-203k"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep shrink-0">
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
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              FHA's 203(k) program provides an affordable, stable single-loan
              solution combining the property purchase or refinance alongside
              the direct calculated costs of required structural upgrades.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("fha-203k")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "fha-203k"}
            onClose={closeModal}
            title="FHA 203(k) Rehab Loans"
          >
            <div>
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
            <LoanProgramButton loan_type="FHA 203(k) Rehab Loans" />
          </LoanDetailModal>
        </div>

        {/* 2. Refinance Options */}
        <div
          id="refinance"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
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
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Lock in structural savings, consolidate high-interest debt, get
              cash out for renovations, or accelerate your wealth roadmap by
              paying off your mortgage sooner.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("refinance")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "refinance"}
            onClose={closeModal}
            title="Refinance Options"
          >
            <div>
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
            <LoanProgramButton loan_type="Refinance Options" />
          </LoanDetailModal>
        </div>

        {/* 3. FHA Streamline Refinance */}
        <div
          id="streamline"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373] shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
                Streamline Refi
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              FHA Streamline Refinance
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              If you hold a current FHA mortgage in good standing, an FHA
              Streamline Refinance represents a highly efficient path to
              lowering interest rates and payment obligations.
            </p>
          </div>

          {/* Card Action Buttons with Link to Dedicated Page */}
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("streamline")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>

            <Link
              href="/loan-programs/fha-streamline-loans"
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Program Page{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "streamline"}
            onClose={closeModal}
            title="FHA Streamline Refinance"
          >
            <div>
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

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Want to estimate your refinance savings?
                  </div>
                  <p className="text-xs text-ink-2">
                    Check your net tangible benefit and calculate your estimated
                    new monthly payment.
                  </p>
                </div>
                <Link
                  href="/loan-programs/fha-streamline-loans"
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  Visit Full Program Page <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <LoanProgramButton loan_type="FHA Streamline Refinance" />
          </LoanDetailModal>
        </div>

        {/* 4. HELOC (Home Equity Line of Credit) */}
        <div
          id="heloc"
          className="scroll-mt-36 col-span-1 md:col-span-2 lg:col-span-3 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[400px] transition-colors duration-300 hover:bg-cream/40"
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
            <p className="text-sm font-semibold text-brand-orange mb-3">
              Unlock the Value in Your Home Without Selling It
            </p>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3 max-w-3xl">
              Whether you need ongoing access to funds or a one-time lump sum,
              MyLoanDesk offers competitive home equity financing designed
              around your goals.
            </p>
          </div>

          {/* Card Action Buttons with Direct Link to Dedicated Page */}
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3 max-w-lg">
            <button
              onClick={() =>
                setActiveVideo({
                  src: "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/HELOC+%E2%80%93+Access+the+Equity+in+Your+Home+Without+Refinancing_1080p_caption.mp4",
                  title: "Home Equity Solutions",
                })
              }
              className="flex-1 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
            >
              <PlayCircle size={14} /> See How It Works
            </button>

            <button
              onClick={() => setActiveModal("heloc")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>

            <Link
              href="/loan-programs/heloc-loans"
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Program Page{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          {/* Loan Detail Modal with Direct Page Callout */}
          <LoanDetailModal
            isOpen={activeModal === "heloc"}
            onClose={closeModal}
            title="Home Equity Solutions"
          >
            <div>
              <p className="text-sm font-semibold text-brand-orange mb-4">
                Unlock the Value in Your Home Without Selling It
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-8 max-w-3xl">
                Whether you need ongoing access to funds or a one-time lump sum,
                MyLoanDesk offers competitive home equity financing designed
                around your goals.
              </p>

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

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Want to calculate your estimated CLTV &amp; compare options?
                  </div>
                  <p className="text-xs text-ink-2">
                    Explore full HELOC vs. Home Equity Loan guidelines and use
                    our interactive equity calculator.
                  </p>
                </div>
                <Link
                  href="/loan-programs/heloc-loans"
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  Visit Full Program Page <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <LoanProgramButton loan_type="Home Equity" />
          </LoanDetailModal>
        </div>
      </div>

      <VideoModal videoInfo={activeVideo} onClose={closeVideo} />
    </section>
  );
}
