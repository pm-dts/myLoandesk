"use client";

import { useState, useEffect } from "react";
import {
  Home,
  Briefcase,
  Shield,
  TrendingDown,
  FileText,
  RefreshCw,
  Star,
  Building,
  CheckCircle2,
  X,
  ArrowRight,
  PlayCircle,
  Stethoscope,
  Key,
  ExternalLink,
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

export default function ResidentialProgramsSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const closeModal = () => setActiveModal(null);
  const closeVideo = () => setActiveVideo(null);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20" id="resident">
      <h2
        className={cn(
          "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
          fraunces.className,
        )}
      >
        Residential & Specialist Programs
      </h2>

      {/* Grid Architecture Layout - Changed to gap-6 and removed global border for individual cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Conventional Loans */}
        <div
          id="conventional"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[435px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep shrink-0">
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
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Conventional loans are one of the most popular financing options
              for purchasing or refinancing a home. Unlike FHA, VA, or USDA
              loans, conventional mortgages are not insured or guaranteed by a
              government agency and can provide flexible financing for qualified
              borrowers.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("conventional")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "conventional"}
            onClose={closeModal}
            title="Conventional Loans"
          >
            <div>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                Conventional loans are one of the most popular financing options
                for purchasing or refinancing a home. Unlike FHA, VA, or USDA
                loans, conventional mortgages are not insured or guaranteed by a
                government agency and can provide flexible financing for
                qualified borrowers.
              </p>
              <div className="text-xs text-ink-2 bg-[#f0ece1]/50 p-4 rounded-xl border border-line/50 leading-relaxed mb-6 space-y-3">
                <p className="font-semibold text-ink">
                  Flexible Financing Options
                </p>
                <p>
                  Conventional loans may be available with down payments as low
                  as 3% for eligible borrowers. A 20% down payment is not always
                  required, although private mortgage insurance (PMI) may apply
                  when putting less than 20% down.
                </p>
                <p>
                  Qualification depends on factors including credit history,
                  income, assets, debt-to-income ratio, property type, and the
                  overall loan profile.
                </p>
                <p>
                  Conventional financing may be available for primary
                  residences, second homes, and investment properties.
                </p>
              </div>
            </div>
            <LoanProgramButton loan_type="Conventional" />
          </LoanDetailModal>
        </div>

        {/* 2. Jumbo Loans */}
        <div
          id="portfolio"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[435px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373] shrink-0">
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
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Exceptional homes deserve exceptional financing. Our Jumbo Loan
              programs are designed for luxury homes, high-value properties, and
              discerning borrowers who expect personalized, white-glove service
              from start to finish.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("jumbo")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "jumbo"}
            onClose={closeModal}
            title="Jumbo Loans"
          >
            <div>
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
            <LoanProgramButton loan_type="Jumbo Loans" />
          </LoanDetailModal>
        </div>

        {/* 3. FHA Loans */}
        <div
          id="fha"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[435px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                Government Backed
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              FHA Loans
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              FHA loans are a great option for borrowers that do not have a lot
              of cash on hand for a down payment and may need some flexibility
              in qualification guidelines.
            </p>
          </div>

          {/* Card Action Buttons with Link to Dedicated Page */}
          <div className="mt-auto pt-4 flex flex-col gap-2">
            <button
              onClick={() => setActiveModal("fha")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>

            {/* Direct Page Link in Card */}
            <Link
              href="/loan-programs/fha-loans"
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Program Page{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          {/* Modal Dialog with Embedded Program Link */}
          <LoanDetailModal
            isOpen={activeModal === "fha"}
            onClose={closeModal}
            title="FHA Loans"
          >
            <div>
              <p className="text-base font-medium text-moss-deep mb-4">
                Accessible Home Financing with as Little as 3.5% Down
              </p>

              <p className="text-sm text-ink-2 leading-relaxed mb-6">
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

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Want detailed rate comparisons &amp; calculator?
                  </div>
                  <p className="text-xs text-ink-2">
                    Explore complete FHA guidelines, mortgage insurance (MIP)
                    costs, and run down payment calculations.
                  </p>
                </div>
                <Link
                  href="/loan-programs/fha-loans"
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  Visit Full Program Page <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <LoanProgramButton loan_type="FHA" />
          </LoanDetailModal>
        </div>

        {/* 4. 2/1 Buydown */}
        <div
          id="buydown-2-1"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[435px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep shrink-0">
                <TrendingDown size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                Residential
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              2/1 Buydown Mortgage
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Buying a home is exciting—but the first couple of years can also
              bring new expenses like moving costs, furniture, home
              improvements, and growing family needs.
            </p>
          </div>

          {/* Card Action Buttons with Link to Dedicated Page */}
          <div className="mt-auto pt-4 flex flex-col gap-2">
            <button
              onClick={() =>
                setActiveVideo({
                  src: "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Lower+Your+Mortgage+Payment+During+Your+First+Two+Years+of+Homeownership_1080p_caption.mp4",
                  title: "2/1 Buydown Mortgage",
                })
              }
              className="flex-1 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
            >
              <PlayCircle size={14} /> See How It Works
            </button>

            <button
              onClick={() => setActiveModal("buydown")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>

            {/* Direct Page Link in Card */}
            <Link
              href="/loan-programs/2-1-buydown-loans"
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Program Page{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          {/* Modal Dialog with Embedded Program Link */}
          <LoanDetailModal
            isOpen={activeModal === "buydown"}
            onClose={closeModal}
            title="2/1 Buydown Mortgage"
          >
            <div>
              <p className="text-base font-medium text-moss-deep mb-4">
                Lower Your Mortgage Payment During Your First Two Years of
                Homeownership
              </p>

              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                Buying a home is exciting—but the first couple of years can also
                bring new expenses like moving costs, furniture, home
                improvements, and growing family needs. A 2/1 Buydown Mortgage
                is designed to make that transition easier by reducing your
                monthly mortgage payment during the first two years of your
                loan. The reduced payment is funded through a temporary subsidy,
                often paid by the seller or builder as part of the transaction.
              </p>

              <div className="mb-6">
                <h4
                  className={cn(
                    "text-lg font-medium text-ink mb-2",
                    fraunces.className,
                  )}
                >
                  How It Works
                </h4>
                <p className="text-sm text-ink-2 mb-3">
                  Let's say your permanent mortgage interest rate is 6.50%:
                </p>
                <ul className="list-disc list-inside text-sm text-ink-2 space-y-1.5 pl-2 mb-3">
                  <li>
                    <strong className="text-ink font-semibold">Year 1:</strong>{" "}
                    Your payment is calculated using 4.50%
                  </li>
                  <li>
                    <strong className="text-ink font-semibold">Year 2:</strong>{" "}
                    Your payment is calculated using 5.50%
                  </li>
                  <li>
                    <strong className="text-ink font-semibold">
                      Year 3 and Beyond:
                    </strong>{" "}
                    Your payment returns to the permanent 6.50% fixed rate
                  </li>
                </ul>
                <p className="text-sm text-ink-2 leading-relaxed">
                  This gives you valuable payment relief during the first two
                  years while keeping the security of a fixed-rate mortgage.
                </p>
              </div>

              <div className="mb-6">
                <h4
                  className={cn(
                    "text-lg font-medium text-ink mb-2",
                    fraunces.className,
                  )}
                >
                  Benefits
                </h4>
                <ul className="list-disc list-inside text-sm text-ink-2 space-y-1.5 pl-2">
                  <li>Lower monthly payments during the first two years</li>
                  <li>
                    Keep a fixed-rate mortgage—this is not an adjustable-rate
                    loan
                  </li>
                  <li>
                    More financial flexibility while settling into your new home
                  </li>
                  <li>
                    Seller or builder concessions can often be used to fund the
                    temporary payment reduction
                  </li>
                  <li>
                    Ideal for buyers who expect their income to increase or who
                    may refinance if market conditions improve in the future
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4
                  className={cn(
                    "text-lg font-medium text-ink mb-2",
                    fraunces.className,
                  )}
                >
                  Who Should Consider a 2/1 Buydown?
                </h4>
                <p className="text-sm text-ink-2 mb-2">
                  This program may be a great fit for:
                </p>
                <ul className="list-disc list-inside text-sm text-ink-2 space-y-1.5 pl-2">
                  <li>First-time homebuyers</li>
                  <li>Buyers purchasing a newly constructed home</li>
                  <li>Buyers negotiating seller concessions</li>
                  <li>
                    Families expecting increased income in the next few years
                  </li>
                  <li>
                    Anyone looking to reduce their initial monthly housing costs
                  </li>
                </ul>
              </div>

              <div className="text-xs text-ink-2 bg-[#f0ece1]/50 p-4 rounded-xl border border-line/50 leading-relaxed mb-6">
                <strong className="font-semibold text-ink block mb-1">
                  Things to Know:
                </strong>
                A 2/1 Buydown temporarily lowers your monthly payment, not your
                permanent mortgage rate. You still qualify based on the full
                note rate, and after the first two years your payment adjusts to
                the regular fixed payment established at closing.
              </div>

              <div className="mb-6 border-t border-line/50 pt-6">
                <h4
                  className={cn(
                    "text-lg font-medium text-ink mb-2",
                    fraunces.className,
                  )}
                >
                  Let MyLoanDesk Help
                </h4>
                <p className="text-sm text-ink-2 leading-relaxed mb-3">
                  At MyLoanDesk, we'll review your financial goals, explain all
                  available financing options, and determine whether a 2/1
                  Buydown is the right strategy for your situation. If seller
                  concessions are available, we'll help structure the loan to
                  maximize your savings while keeping your long-term goals in
                  focus.
                </p>
                <p className="text-sm font-medium text-moss-deep italic">
                  Lower your payments today. Build your future with confidence.
                </p>
              </div>

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Want detailed rate comparisons & calculator?
                  </div>
                  <p className="text-xs text-ink-2">
                    Explore complete 2/1 Buydown guidelines and run exact
                    savings numbers.
                  </p>
                </div>
                <Link
                  href="/loan-programs/2-1-buydown-loans"
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  Visit Full Program Page <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <LoanProgramButton loan_type="2/1 Buydown" />
          </LoanDetailModal>
        </div>

        {/* 5. Bank Statement Loans */}
        <div
          id="bank-statement"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[435px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
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
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-2">
              Traditional mortgage programs often rely on tax returns to
              determine income. For many self-employed borrowers, business
              deductions can significantly reduce taxable income, making it
              difficult to qualify for a conventional loan.
            </p>
          </div>

          {/* Card Action Buttons with Link to Dedicated Page & Video Modal */}
          <div className="mt-auto pt-4 flex flex-col gap-2">
            <button
              onClick={() =>
                setActiveVideo({
                  src: "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Bank+Statment_1080p_caption.mp4",
                  title: "Bank Statement Loans",
                })
              }
              className="flex-1 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
            >
              <PlayCircle size={14} /> See How It Works
            </button>

            <button
              onClick={() => setActiveModal("bank-statement")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>

            {/* Direct Page Link in Card */}
            <Link
              href="/loan-programs/bank-statement-loans"
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Program Page{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          {/* Loan Detail Modal with Direct Page Callout */}
          <LoanDetailModal
            isOpen={activeModal === "bank-statement"}
            onClose={closeModal}
            title="Bank Statement Loans"
          >
            <div>
              <p className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-3">
                Qualify Using Your Bank Statements Instead of Tax Returns
              </p>

              <div className="text-xs text-ink-2 leading-relaxed space-y-2 mb-4">
                <p>
                  Traditional mortgage programs often rely on tax returns to
                  determine income. For many self-employed borrowers, business
                  deductions can significantly reduce taxable income, making it
                  difficult to qualify for a conventional loan.
                </p>
                <p>
                  A Bank Statement Loan offers an alternative by allowing
                  eligible borrowers to qualify using their personal or business
                  bank statements instead of tax returns.
                </p>
                <p>
                  Whether you’re a business owner, independent contractor,
                  consultant, freelancer, or entrepreneur, this program is
                  designed to provide flexible financing that better reflects
                  your actual cash flow.
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
              <p className="text-xs text-ink-2 mb-2">
                This program may be ideal for:
              </p>
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
                  At MyLoanDesk, we understand that self-employed borrowers have
                  unique financial situations. Our experienced mortgage
                  specialists work with a wide network of lenders to help find
                  financing solutions tailored to your business and income
                  structure.
                </p>
              </div>

              <p className="text-xs text-ink-2 italic mb-2">
                If you’ve been told you don’t qualify through traditional
                lending, a Bank Statement Loan may be the solution you’ve been
                looking for.
              </p>
              <p className="text-xs text-ink-2 font-medium mb-6">
                Contact MyLoanDesk today for a personalized review and discover
                the mortgage options available to you.
              </p>

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Want to estimate your qualifying income?
                  </div>
                  <p className="text-xs text-ink-2">
                    Explore complete 12/24 month bank statement guidelines and
                    use our income calculator.
                  </p>
                </div>
                <Link
                  href="/loan-programs/bank-statement-loans"
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  Visit Full Program Page <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <LoanProgramButton loan_type="Bank Statement" />
          </LoanDetailModal>
        </div>

        {/* 6. Hybrid Loans */}
        <div
          id="hybrid"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[435px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
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
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Combine the upfront stability of a fixed-rate mortgage with the
              initial savings opportunities of an adjustable-rate mortgage (ARM)
              using a fixed-period hybrid loan.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("hybrid")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "hybrid"}
            onClose={closeModal}
            title="Hybrid Loans"
          >
            <div>
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
            <LoanProgramButton loan_type="Hybrid" />
          </LoanDetailModal>
        </div>

        {/* 7. VA Loans */}
        <div
          id="va"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[435px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep shrink-0">
                <Star size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                Veteran Care
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              VA Loans
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              VA guaranteed loans are made by lenders and guaranteed by the U.S.
              Department of Veterans Affairs (VA) to eligible veterans for the
              purchase of a home, protecting the lender against loss if payments
              fall behind.
            </p>
          </div>

          {/* Card Action Buttons with Link to Dedicated Page */}
          <div className="mt-auto pt-4 flex sm:flex-row flex-col gap-2">
            <button
              onClick={() => setActiveModal("va")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>

            {/* Direct Page Link in Card */}
            <Link
              href="/loan-programs/va-loans"
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Program Page{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          {/* Modal Dialog with Embedded Program Link */}
          <LoanDetailModal
            isOpen={activeModal === "va"}
            onClose={closeModal}
            title="VA Loans"
          >
            <div>
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

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Want detailed rate comparisons &amp; calculator?
                  </div>
                  <p className="text-xs text-ink-2">
                    Estimate your VA funding fee and run monthly payments with
                    zero down payment.
                  </p>
                </div>
                <Link
                  href="/loan-programs/va-loans"
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  Visit Full Program Page <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <LoanProgramButton loan_type="VA" />
          </LoanDetailModal>
        </div>

        {/* 8. Private Bridge Loans */}
        <div
          id="bridge"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[435px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373] shrink-0">
                <Building size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
                Liquidity Solutions
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              Private Bridge Loans
            </h3>
            <p className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-4">
              Fast, Flexible Financing for Residential and Commercial Moves
            </p>
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-2">
              Private bridge loans provide short-term financing when traditional
              mortgages are too slow, helping you bridge the gap between
              transactions.
            </p>
          </div>

          {/* Card Action Buttons with Direct Link to Dedicated Page */}
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("bridge")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>

            <Link
              href="/loan-programs/bridge-loans"
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Program Page{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          {/* Loan Detail Modal with Direct Page Callout */}
          <LoanDetailModal
            isOpen={activeModal === "bridge"}
            onClose={closeModal}
            title="Private Bridge Loans"
          >
            <div>
              <p className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-4">
                Fast, Flexible Financing for Residential and Commercial Real
                Estate
              </p>

              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                Private bridge loans provide fast, flexible financing when
                traditional mortgage options aren't the right fit. Whether
                you're buying before selling, investing, renovating, or need to
                close quickly, we can help you secure short-term financing
                tailored to your situation.
              </p>

              <div className="text-xs text-ink-2 mb-6">
                <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                  Ideal For:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed">
                  <li>Buy before you sell (residential transitions)</li>
                  <li>Non-contingent purchase offers in competitive markets</li>
                  <li>Commercial acquisitions prior to stabilization</li>
                  <li>Value-add and capital improvement financing</li>
                  <li>Fast closings in as little as 7–14 days</li>
                </ul>
              </div>

              <div className="text-xs text-ink-2 bg-[#f0ece1]/50 p-4 rounded-xl border border-line/50 leading-relaxed mb-6 space-y-3">
                <p className="font-semibold text-ink text-[11px] uppercase tracking-wider">
                  Strategic Advantages:
                </p>
                <p className="text-[11px]">
                  Approval is based on real estate asset value and equity rather
                  than lengthy income verifications. This provides the speed
                  required to seize time-sensitive opportunities or meet strict
                  1031 exchange deadlines.
                </p>
                <p className="text-[11px]">
                  With flexible terms from 6 to 24 months and interest-only
                  payment structures, bridge financing acts as a reliable
                  temporary bridge until permanent financing or sale proceeds
                  are completed.
                </p>
              </div>

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Want to estimate your bridge payment &amp; terms?
                  </div>
                  <p className="text-xs text-ink-2">
                    Explore complete bridge loan guidelines and use our
                    interactive loan estimator.
                  </p>
                </div>
                <Link
                  href="/loan-programs/bridge-loans"
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  Visit Full Program Page <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <LoanProgramButton loan_type="Private Bridge" />
          </LoanDetailModal>
        </div>

        {/* 9. Bridge to Sale */}
        <div
          id="bridge-to-sale"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[435px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <RefreshCw size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
                Transitions
              </span>
            </div>
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
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-2">
              A Bridge to Sale loan gives you access to your home's equity,
              allowing you to purchase your next property without waiting for
              your current home to sell.
            </p>
          </div>

          {/* Card Action Buttons with Direct Link to Dedicated Page */}
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("bridge-to-sale")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>

            <Link
              href="/loan-programs/bridge-to-sale-loans"
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Program Page{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          {/* Loan Detail Modal with Direct Page Callout */}
          <LoanDetailModal
            isOpen={activeModal === "bridge-to-sale"}
            onClose={closeModal}
            title="Bridge to Sale Loans"
          >
            <div>
              <p className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-4">
                Buy your next home before selling your current one.
              </p>

              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                A Bridge to Sale loan gives you access to your home's equity,
                allowing you to purchase your next property without waiting for
                your current home to sell. Move on your timeline while avoiding
                the stress of coordinating two transactions.
              </p>

              <div className="text-xs text-ink-2 mb-6">
                <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                  Program Highlights:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed">
                  <li>Up to 12-month interest-only financing</li>
                  <li>Access equity before your home is sold</li>
                  <li>Flexible income qualification options</li>
                  <li>
                    No monthly payment options available for qualified borrowers
                  </li>
                  <li>Fast approvals and streamlined closings</li>
                </ul>
              </div>

              <div className="text-xs text-ink-2 bg-[#f0ece1]/50 p-4 rounded-xl border border-line/50 leading-relaxed mb-6 space-y-3">
                <p className="font-semibold text-ink text-[11px] uppercase tracking-wider">
                  Strategic Advantages:
                </p>
                <p className="text-[11px]">
                  Submitting non-contingent purchase offers gives you a distinct
                  advantage in competitive real estate markets. Instead of
                  rushing to accept a lower offer on your departing residence,
                  you can take the time needed to market your current home
                  effectively and maximize its resale value.
                </p>
                <p className="text-[11px]">
                  Once your original home sells on the open market, the net
                  proceeds are applied directly to pay off the bridge financing
                  balance with no prepayment penalties, smoothly transitioning
                  you into your long-term mortgage.
                </p>
              </div>

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Want to calculate your estimated bridge capacity?
                  </div>
                  <p className="text-xs text-ink-2">
                    Explore complete bridge loan requirements and use our
                    interactive equity calculator.
                  </p>
                </div>
                <Link
                  href="/loan-programs/bridge-to-sale-loans"
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  Visit Full Program Page <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <LoanProgramButton loan_type="Bridge to Sale" />
          </LoanDetailModal>
        </div>

        {/* 10. International Buyers Section */}
        <div
          id="international-buyer"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[380px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                International
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              International Buyers Section
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Buying property in the United States is easier than you may think.
              Whether you're purchasing a vacation home, investment property, or
              planning a future move.
            </p>
          </div>

          {/* Card Action Buttons with Direct Link to Dedicated Page */}
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("international-buyer")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>

            <Link
              href="/loan-programs/foreign-national-loans"
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Program Page{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          {/* Loan Detail Modal with Direct Page Callout */}
          <LoanDetailModal
            isOpen={activeModal === "international-buyer"}
            onClose={closeModal}
            title="International Buyers Section"
          >
            <div>
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

              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">
                  Ready to buy property in the United States?
                </span>
                <br />
                Contact MyLoanDesk today to discuss your financing options and
                get pre-qualified.
              </p>

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Want to calculate your U.S. property down payment?
                  </div>
                  <p className="text-xs text-ink-2">
                    Explore complete foreign national guidelines and use our
                    interactive loan calculator.
                  </p>
                </div>
                <Link
                  href="/loan-programs/foreign-national-loans"
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  Visit Full Program Page <ArrowRight size={14} />
                </Link>
              </div>

              <LoanProgramButton loan_type="International Buyers" />
            </div>
          </LoanDetailModal>
        </div>

        {/* 11. ITIN Home Loans */}
        <div
          id="ITIN-home"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[380px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                Non-SSN
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              ITIN Home Loans
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              If you file your U.S. taxes using an Individual Taxpayer
              Identification Number (ITIN), you may still qualify for a
              mortgage.
            </p>
          </div>

          {/* Card Action Buttons with Direct Link to Dedicated Page */}
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("itin")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>

            <Link
              href="/loan-programs/itin-loans"
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Program Page{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          {/* Loan Detail Modal with Direct Page Callout */}
          <LoanDetailModal
            isOpen={activeModal === "itin"}
            onClose={closeModal}
            title="ITIN Home Loans"
          >
            <div>
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

              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">
                  Ready to become a homeowner?
                </span>
                <br />
                Contact MyLoanDesk today to explore your ITIN mortgage options
                and find out if you qualify.
              </p>

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Want to estimate your ITIN down payment?
                  </div>
                  <p className="text-xs text-ink-2">
                    Explore complete ITIN requirements and use our interactive
                    mortgage calculator.
                  </p>
                </div>
                <Link
                  href="/loan-programs/itin-loans"
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  Visit Full Program Page <ArrowRight size={14} />
                </Link>
              </div>

              <LoanProgramButton loan_type="ITIN Home Loans" />
            </div>
          </LoanDetailModal>
        </div>

        {/* 12. Dream Home Builder AKA Earned Equity Program (EEP) */}
        <div
          id="eep"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[380px] transition-colors duration-300 hover:bg-cream/40"
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
              A Smarter Path from Renting to Homeownership
            </p>
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-3">
              Not quite ready for a traditional mortgage? The Dream Home Builder
              Earned Equity Program (EEP) provides qualified buyers with an
              alternative path toward owning a home.
            </p>
          </div>
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() =>
                setActiveVideo({
                  src: "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Dream+Home+Builder+Earned+Equity+Program+(EEP)_1080p_caption.mp4",
                  title: "Dream Home Builder (EEP)",
                })
              }
              className="flex-1 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <PlayCircle size={14} /> See how it works
            </button>
            <button
              onClick={() => setActiveModal("eep")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:border-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
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
                A Smarter Path from Renting to Homeownership
              </p>

              <div className="text-xs text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>
                  Not quite ready for a traditional mortgage? The Dream Home
                  Builder Earned Equity Program (EEP) provides qualified buyers
                  with an alternative path toward owning a home.
                </p>
                <p>
                  Instead of remaining in a traditional rental situation, the
                  program allows eligible participants to occupy a single-family
                  home while building earned equity and preparing to transition
                  into permanent mortgage financing.
                </p>

                {/* How It Works Section */}
                <div className="mt-6 border-t border-line/60 pt-4">
                  <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-3">
                    How It Works
                  </h4>
                  <ol className="space-y-3 font-mono text-[11px] leading-relaxed">
                    <li className="bg-cream/40 p-3 rounded-xl border border-line/50">
                      <strong className="text-ink font-bold block mb-0.5">
                        1. Get Qualified
                      </strong>
                      We review your income, credit and overall financial
                      profile to determine program eligibility.
                    </li>
                    <li className="bg-cream/40 p-3 rounded-xl border border-line/50">
                      <strong className="text-ink font-bold block mb-0.5">
                        2. Find an Eligible Home
                      </strong>
                      Qualified participants can identify a single-family home
                      that meets program requirements.
                    </li>
                    <li className="bg-cream/40 p-3 rounded-xl border border-line/50">
                      <strong className="text-ink font-bold block mb-0.5">
                        3. Move In & Build Earned Equity
                      </strong>
                      Occupy the home under the EEP structure while accumulating
                      earned equity according to the program terms.
                    </li>
                    <li className="bg-cream/40 p-3 rounded-xl border border-line/50">
                      <strong className="text-ink font-bold block mb-0.5">
                        4. Prepare for Homeownership
                      </strong>
                      Use the program period to strengthen your mortgage profile
                      and prepare for permanent financing.
                    </li>
                    <li className="bg-cream/40 p-3 rounded-xl border border-line/50">
                      <strong className="text-ink font-bold block mb-0.5">
                        5. Purchase the Home
                      </strong>
                      When you're eligible for financing, the goal is to
                      transition from the EEP into homeownership.
                    </li>
                  </ol>
                </div>

                {/* Program Highlights */}
                <div className="mt-6 border-t border-line/60 pt-4">
                  <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-3">
                    Program Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px]">
                    <div className="bg-[#f0ece1]/60 p-3 rounded-xl border border-line">
                      <strong className="text-ink block font-bold mb-1">
                        Up to 96.5% LTV
                      </strong>
                      Financing parameters designed to align with FHA-style
                      guidelines.
                    </div>
                    <div className="bg-[#f0ece1]/60 p-3 rounded-xl border border-line">
                      <strong className="text-ink block font-bold mb-1">
                        FHA-Aligned Loan Limits
                      </strong>
                      Program limits generally follow applicable FHA county loan
                      limits.
                    </div>
                    <div className="bg-[#f0ece1]/60 p-3 rounded-xl border border-line">
                      <strong className="text-ink block font-bold mb-1">
                        Credit Scores Starting at 580
                      </strong>
                      Applicants below 580 may be considered on a case-by-case
                      basis.
                    </div>
                    <div className="bg-[#f0ece1]/60 p-3 rounded-xl border border-line">
                      <strong className="text-ink block font-bold mb-1">
                        Flexible Income Documentation
                      </strong>
                      Options may include Full Documentation, Bank Statements
                      and 1099 income.
                    </div>
                    <div className="bg-[#f0ece1]/60 p-3 rounded-xl border border-line">
                      <strong className="text-ink block font-bold mb-1">
                        Self-Employed Friendly
                      </strong>
                      Alternative income documentation may provide additional
                      opportunities for business owners and independent
                      contractors.
                    </div>
                    <div className="bg-[#f0ece1]/60 p-3 rounded-xl border border-line">
                      <strong className="text-ink block font-bold mb-1">
                        ITIN & DACA Options
                      </strong>
                      Additional pathways may be available for eligible ITIN and
                      DACA applicants.
                    </div>
                  </div>
                </div>

                {/* Who Is This Program For */}
                <div className="mt-6 border-t border-line/60 pt-4">
                  <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                    Who Is This Program For?
                  </h4>
                  <p className="mb-2">
                    Dream Home Builder may be a solution if you're ready to own
                    but need additional time or flexibility before qualifying
                    for a traditional mortgage.
                  </p>
                  <p>
                    It may be particularly helpful for renters, self-employed
                    borrowers, 1099 earners, buyers rebuilding credit, ITIN
                    borrowers and other applicants who don't fit traditional
                    mortgage guidelines today.
                  </p>
                </div>

                {/* Call to Action Statement */}
                <div className="mt-6 bg-brand-orange/10 p-4 rounded-xl border border-brand-orange/30">
                  <h4 className="font-bold text-ink text-xs uppercase tracking-wider mb-1">
                    Stop Just Renting. Start Building Toward Ownership.
                  </h4>
                  <p className="text-[11px]">
                    You may not have to wait until everything is perfect to
                    begin your journey toward homeownership. At MyLoanDesk,
                    we'll review your situation and determine whether Dream Home
                    Builder or another mortgage program may provide the right
                    path forward.
                  </p>
                </div>
              </div>

              {/* Program Disclaimer */}
              <div className="p-3 bg-line/20 rounded-xl border border-line mb-4">
                <p className="text-[10px] text-ink-2 leading-relaxed">
                  <span className="font-bold text-ink">
                    Program Disclaimer:
                  </span>{" "}
                  Program availability and eligibility are subject to applicable
                  guidelines, underwriting, property requirements and program
                  terms. Participation does not guarantee future mortgage
                  approval or property ownership. Earned-equity treatment is
                  subject to the applicable program agreement and financing
                  requirements.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-line">
              <LoanProgramButton loan_type="Earned Equity EEP" />
            </div>
          </LoanDetailModal>
        </div>

        {/* 13. Doctor Loan Program */}
        <div
          id="doctor"
          className="scroll-mt-36 col-span-1 md:col-span-2 lg:col-span-1 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[450px] transition-colors duration-300 hover:bg-cream/40"
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
              Medical Professional Loan Program
            </h3>
            <p className="text-xs font-bold text-moss-deep uppercase tracking-wide mb-3 line-clamp-2">
              SPECIALIZED MORTGAGE SOLUTIONS FOR MEDICAL PROFESSIONALS
            </p>
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-3">
              You've invested years building your career. Your mortgage should
              recognize that. Our Medical Professional Loan Program offers
              specialized financing designed around the unique financial needs
              of healthcare professionals...
            </p>
          </div>

          {/* Card Action Buttons with Link to Dedicated Page & Video Modal */}
          <div className="mt-auto pt-4 flex flex-col gap-2">
            <button
              onClick={() =>
                setActiveVideo({
                  src: "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Medical+Professional+Loan+Program_1080p_caption.mp4",
                  title: "Medical Professional Loan Program",
                })
              }
              className="flex-1 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
            >
              <PlayCircle size={14} /> See how it works
            </button>

            <button
              onClick={() => setActiveModal("doctor")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:border-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>

            {/* Direct Page Link in Card */}
            <Link
              href="/loan-programs/medical-professional-loans"
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Program Page{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          {/* Loan Detail Modal with Direct Page Callout */}
          <LoanDetailModal
            isOpen={activeModal === "doctor"}
            onClose={closeModal}
            title="Medical Professional Loan Program"
          >
            <div>
              <p className="text-xs font-bold text-moss-deep uppercase tracking-wide mb-4">
                SPECIALIZED MORTGAGE SOLUTIONS FOR MEDICAL PROFESSIONALS
              </p>

              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                You've invested years building your career. Your mortgage should
                recognize that. Our Medical Professional Loan Program offers
                specialized financing designed around the unique financial needs
                of healthcare professionals, including high financing options,
                no PMI on eligible loans, and flexible underwriting.
              </p>

              {/* Highlights & Eligible Professionals Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-ink-2 mb-6">
                {/* Program Highlights */}
                <div>
                  <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                    PROGRAM HIGHLIGHTS:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed">
                    <li>Up to 100% financing for qualified borrowers</li>
                    <li>
                      No Private Mortgage Insurance (PMI) on eligible loans
                    </li>
                    <li>Loan amounts up to $2 million</li>
                    <li>Flexible treatment of student loan debt</li>
                    <li>
                      Fixed-rate and Adjustable-Rate Mortgage (ARM) options
                    </li>
                    <li>
                      Available for eligible primary residence purchases and
                      refinances
                    </li>
                  </ul>
                </div>

                {/* Eligible Professionals */}
                <div>
                  <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                    ELIGIBLE PROFESSIONALS:
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
                      Additional medical professionals may qualify. Eligibility
                      and program terms vary by lender.
                    </span>
                  </div>
                </div>
              </div>

              {/* Why Choose MyLoanDesk Section */}
              <div className="bg-cream/50 border border-line/60 rounded-2xl p-5 mb-6">
                <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                  WHY CHOOSE MYLOANDESK?
                </h4>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Medical professionals can have unique financial profiles—from
                  significant student loan debt to rapidly increasing income
                  early in their careers. MyLoanDesk helps you compare
                  specialized mortgage programs from multiple lending sources to
                  find financing that fits your profession, financial profile,
                  and homeownership goals.
                </p>
              </div>

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    Want to calculate your student loan DTI impact?
                  </div>
                  <p className="text-xs text-ink-2">
                    Explore complete doctor loan guidelines and use our
                    specialized DTI calculator.
                  </p>
                </div>
                <Link
                  href="/loan-programs/medical-professional-loans"
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  Visit Full Program Page <ArrowRight size={14} />
                </Link>
              </div>

              {/* Program Disclaimer */}
              <div className="p-3 bg-line/20 rounded-xl border border-line mb-4">
                <p className="text-[10px] text-ink-2 leading-relaxed">
                  <span className="font-bold text-ink">
                    Program Disclaimer:
                  </span>{" "}
                  Program availability, financing limits, eligible professions,
                  credit requirements and underwriting guidelines vary by lender
                  and borrower qualifications. Not all applicants will qualify.
                </p>
              </div>
            </div>

            {/* Custom Doctor Actions placed securely in Modal bottom */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 pt-4 border-t border-line">
              <Link
                href="/get-quote"
                className="w-full sm:w-1/2 py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm text-center"
              >
                Explore Your Medical Professional Loan Options{" "}
                <ArrowRight size={14} />
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

      <VideoModal videoInfo={activeVideo} onClose={closeVideo} />
    </section>
  );
}
