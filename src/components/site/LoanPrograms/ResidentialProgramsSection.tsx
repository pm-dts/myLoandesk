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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";
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
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[360px] transition-colors duration-300 hover:bg-cream/40"
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
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[360px] transition-colors duration-300 hover:bg-cream/40"
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
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[360px] transition-colors duration-300 hover:bg-cream/40"
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
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              FHA Loans
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-4">
              FHA loans are a great option for borrowers that do not have a lot
              of cash on hand for a down payment and may need some flexibility
              in qualification guidelines. Benefits include:
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("fha")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "fha"}
            onClose={closeModal}
            title="FHA Loans"
          >
            <div>
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
            <LoanProgramButton loan_type="FHA" />
          </LoanDetailModal>
        </div>

        {/* 4. 2/1 Buydown */}
        <div
          id="buydown-2-1"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[360px] transition-colors duration-300 hover:bg-cream/40"
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
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() =>
                setActiveVideo({
                  src: "/2-1.mp4",
                  title: "2/1 Buydown Mortgage",
                })
              }
              className="flex-1 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <PlayCircle size={14} /> See how it works
            </button>
            <button
              onClick={() => setActiveModal("buydown")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

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
            </div>
            <LoanProgramButton loan_type="2/1 Buydown" />
          </LoanDetailModal>
        </div>

        {/* 5. Bank Statement Loans */}
        <div
          id="bank-statement"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[360px] transition-colors duration-300 hover:bg-cream/40"
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
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("bank-statement")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

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
              <p className="text-xs text-ink-2 font-medium mb-4">
                Contact MyLoanDesk today for a personalized review and discover
                the mortgage options available to you.
              </p>
            </div>
            <LoanProgramButton loan_type="Bank Statement" />
          </LoanDetailModal>
        </div>

        {/* 6. Hybrid Loans */}
        <div
          id="hybrid"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[360px] transition-colors duration-300 hover:bg-cream/40"
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
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[360px] transition-colors duration-300 hover:bg-cream/40"
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
                "text-2xl font-medium text-ink mb-4",
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
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("va")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

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
            </div>
            <LoanProgramButton loan_type="VA" />
          </LoanDetailModal>
        </div>

        {/* 8. Private Bridge Loans */}
        <div
          id="bridge"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[360px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373] shrink-0">
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
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Private bridge loans provide fast, flexible financing when
              traditional mortgage options aren't the right fit. Whether you're
              buying before selling, investing, or renovating.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("bridge")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "bridge"}
            onClose={closeModal}
            title="Private Bridge Loans"
          >
            <div>
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
            <LoanProgramButton loan_type="Private Bridge" />
          </LoanDetailModal>
        </div>

        {/* 9. Bridge to Sale */}
        <div
          id="bridge-to-sale"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[360px] transition-colors duration-300 hover:bg-cream/40"
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
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("bridge-to-sale")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

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
            </div>
            <LoanProgramButton loan_type="Bridge to Sale" />
          </LoanDetailModal>
        </div>

        {/* 10. International Buyers Section */}
        <div
          id="international-buyer"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[360px] transition-colors duration-300 hover:bg-cream/40"
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
              International Buyers Section
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Buying property in the United States is easier than you may think.
              Whether you're purchasing a vacation home, investment property, or
              planning a future move.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("international-buyer")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

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
            </div>
            <p className="text-xs mb-4 text-ink-2">
              <span className="font-bold text-ink">
                Ready to buy property in the United States?
              </span>
              <br />
              Contact MyLoanDesk today to discuss your financing options and get
              pre-qualified.
            </p>
            <LoanProgramButton loan_type="International Buyers" />
          </LoanDetailModal>
        </div>

        {/* 11. ITIN Home Loans */}
        <div
          id="ITIN-home"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[360px] transition-colors duration-300 hover:bg-cream/40"
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
              ITIN Home Loans
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              If you file your U.S. taxes using an Individual Taxpayer
              Identification Number (ITIN), you may still qualify for a
              mortgage.
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("itin")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              Read More <ArrowRight size={14} />
            </button>
          </div>

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
            </div>
            <p className="text-xs mb-4 text-ink-2">
              <span className="font-bold text-ink">
                Ready to become a homeowner?
              </span>
              <br />
              Contact MyLoanDesk today to explore your ITIN mortgage options and
              find out if you qualify.
            </p>
            <LoanProgramButton loan_type="ITIN Home Loans" />
          </LoanDetailModal>
        </div>
      </div>

      <VideoModal videoInfo={activeVideo} onClose={closeVideo} />
    </section>
  );
}
