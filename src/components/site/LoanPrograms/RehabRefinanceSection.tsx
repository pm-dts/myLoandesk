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
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import LoanProgramButton from "../utils/LoanProgramButton";
import { Fraunces } from "next/font/google";
import { useTranslations } from "next-intl";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function LoanDetailModal({
  isOpen,
  onClose,
  title,
  closeLabel = "Close dialog",
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  closeLabel?: string;
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
            aria-label={closeLabel}
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
  closeLabel = "Close video",
}: {
  videoInfo: { src: string; title: string } | null;
  onClose: () => void;
  closeLabel?: string;
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
            aria-label={closeLabel}
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

interface HomeEquitySectionProps {
  locale?: string;
}

export default function HomeEquitySection({
  locale = "en",
}: HomeEquitySectionProps) {
  const t = useTranslations("LoanPrograms.HomeEquitySection");
  const isEs = locale === "es";

  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const closeModal = () => setActiveModal(null);
  const closeVideo = () => setActiveVideo(null);

  const getLocalizedHref = (path: string) => (isEs ? `/es${path}` : path);

  const fhaBenefits = t.raw("fha_203k.benefits") as string[];
  const fhaProperties = t.raw("fha_203k.properties") as string[];
  const streamlineBenefits = t.raw("streamline.benefits") as string[];
  const helocBestFor = t.raw("heloc.line_of_credit.best_for") as string[];
  const helocBenefits = t.raw("heloc.line_of_credit.benefits") as string[];
  const homeLoanBestFor = t.raw("heloc.loan.best_for") as string[];
  const homeLoanBenefits = t.raw("heloc.loan.benefits") as string[];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20" id="home-equity">
      <h2
        className={cn(
          "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
          fraunces.className,
        )}
      >
        {t("heading")}
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
                {t("fha_203k.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              {t("fha_203k.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("fha_203k.description")}
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("fha-203k")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "fha-203k"}
            onClose={closeModal}
            title={t("fha_203k.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-sm text-ink-2 leading-relaxed mb-4">
                {t("fha_203k.description")}
              </p>
              <div className="space-y-4 mb-6 text-xs text-ink-2">
                <div>
                  <h4 className="font-semibold text-ink mb-1">
                    {t("fha_203k.benefits_heading")}
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {fhaBenefits.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-ink mb-1">
                    {t("fha_203k.properties_heading")}
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {fhaProperties.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-ink mb-1">
                    {t("fha_203k.improvements_heading")}
                  </h4>
                  <p className="italic bg-line/20 p-2 rounded">
                    {t("fha_203k.improvements_text")}
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
                {t("refinance.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("refinance.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("refinance.description")}
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("refinance")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "refinance"}
            onClose={closeModal}
            title={t("refinance.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <div className="space-y-4 text-xs text-ink-2 mb-6 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-ink text-sm mb-1">
                    {t("refinance.sections.lower_payments.title")}
                  </h4>
                  <p>{t("refinance.sections.lower_payments.description")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-ink text-sm mb-1">
                    {t("refinance.sections.cash_out.title")}
                  </h4>
                  <p>{t("refinance.sections.cash_out.description")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-ink text-sm mb-1">
                    {t("refinance.sections.consolidate.title")}
                  </h4>
                  <p>{t("refinance.sections.consolidate.description")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-ink text-sm mb-1">
                    {t("refinance.sections.pay_sooner.title")}
                  </h4>
                  <p>{t("refinance.sections.pay_sooner.description")}</p>
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
                {t("streamline.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("streamline.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("streamline.description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("streamline")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/fha-streamline-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "streamline"}
            onClose={closeModal}
            title={t("streamline.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-sm text-ink-2 leading-relaxed mb-4">
                {t("streamline.description")}
              </p>
              <p className="text-xs font-medium text-ink mb-2">
                {t("streamline.benefits_heading")}
              </p>
              <ul className="space-y-3 mb-6">
                {streamlineBenefits.map((benefit, idx) => (
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

              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("streamline.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">
                    {t("streamline.callout_desc")}
                  </p>
                </div>
                <Link
                  href={getLocalizedHref("/loan-programs/fha-streamline-loans")}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("streamline.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <LoanProgramButton loan_type="FHA Streamline Refinance" />
          </LoanDetailModal>
        </div>

        {/* 4. HELOC (Home Equity Line of Credit) */}
        <div
          id="heloc"
          className="scroll-mt-36 col-span-1 md:col-span-2 lg:col-span-3 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between sm:h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep shrink-0">
                <Landmark size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                {t("heloc.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl sm:text-3xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("heloc.title")}
            </h3>
            <p className="text-sm font-semibold text-brand-orange mb-3">
              {t("heloc.subtitle")}
            </p>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3 max-w-3xl">
              {t("heloc.description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-3 max-w-lg">
            <button
              onClick={() =>
                setActiveVideo({
                  src: "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/HELOC+%E2%80%93+Access+the+Equity+in+Your+Home+Without+Refinancing_1080p_caption.mp4",
                  title: t("heloc.title"),
                })
              }
              className="flex-1 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
            >
              <PlayCircle size={14} /> {t("heloc.video_button")}
            </button>

            <button
              onClick={() => setActiveModal("heloc")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/heloc-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "heloc"}
            onClose={closeModal}
            title={t("heloc.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-sm font-semibold text-brand-orange mb-4">
                {t("heloc.subtitle")}
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-8 max-w-3xl">
                {t("heloc.description")}
              </p>

              <div className="space-y-8 text-xs text-ink-2 mb-8">
                {/* HELOC Section */}
                <div className="border-b border-line pb-8">
                  <h4 className="font-bold text-ink mb-2 text-base sm:text-lg">
                    {t("heloc.line_of_credit.title")}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-2 mb-4 leading-relaxed max-w-3xl">
                    {t("heloc.line_of_credit.desc")}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-cream/30 p-5 rounded-2xl border border-line/60">
                    <div>
                      <h5 className="font-semibold text-ink mb-2.5 text-xs sm:text-sm">
                        {t("heloc.line_of_credit.best_for_title")}
                      </h5>
                      <ul className="space-y-2">
                        {helocBestFor.map((item, idx) => (
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
                        {t("heloc.line_of_credit.benefits_title")}
                      </h5>
                      <ul className="space-y-2">
                        {helocBenefits.map((item, idx) => (
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
                    {t("heloc.loan.title")}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-2 mb-4 leading-relaxed max-w-3xl">
                    {t("heloc.loan.desc")}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-cream/30 p-5 rounded-2xl border border-line/60">
                    <div>
                      <h5 className="font-semibold text-ink mb-2.5 text-xs sm:text-sm">
                        {t("heloc.loan.best_for_title")}
                      </h5>
                      <ul className="space-y-2">
                        {homeLoanBestFor.map((item, idx) => (
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
                        {t("heloc.loan.benefits_title")}
                      </h5>
                      <ul className="space-y-2">
                        {homeLoanBenefits.map((item, idx) => (
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
                  {t("heloc.comparison.heading")}
                </h4>
                <div className="overflow-x-auto min-w-full">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-line text-ink">
                        <th className="py-2.5 px-3 font-bold w-1/2">
                          {t("heloc.comparison.th_heloc")}
                        </th>
                        <th className="py-2.5 px-3 font-bold w-1/2">
                          {t("heloc.comparison.th_loan")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line/60 text-ink-2">
                      <tr>
                        <td className="py-2.5 px-3">
                          {t("heloc.comparison.r1_heloc")}
                        </td>
                        <td className="py-2.5 px-3">
                          {t("heloc.comparison.r1_loan")}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3">
                          {t("heloc.comparison.r2_heloc")}
                        </td>
                        <td className="py-2.5 px-3">
                          {t("heloc.comparison.r2_loan")}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3">
                          {t("heloc.comparison.r3_heloc")}
                        </td>
                        <td className="py-2.5 px-3">
                          {t("heloc.comparison.r3_loan")}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3">
                          {t("heloc.comparison.r4_heloc")}
                        </td>
                        <td className="py-2.5 px-3">
                          {t("heloc.comparison.r4_loan")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Get Expert Advice Section */}
              <div className="mb-6">
                <h4 className="font-bold text-ink text-sm mb-1">
                  {t("heloc.expert_heading")}
                </h4>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed max-w-3xl">
                  {t("heloc.expert_desc")}
                </p>
              </div>

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("heloc.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">
                    {t("heloc.callout_desc")}
                  </p>
                </div>
                <Link
                  href={getLocalizedHref("/loan-programs/heloc-loans")}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("heloc.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <LoanProgramButton loan_type="Home Equity" />
          </LoanDetailModal>
        </div>
      </div>

      <VideoModal
        videoInfo={activeVideo}
        onClose={closeVideo}
        closeLabel={t("common.close_video")}
      />
    </section>
  );
}
