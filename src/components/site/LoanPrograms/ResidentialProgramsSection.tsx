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
        className="relative w-full max-w-3xl bg-primary-bg rounded-3xl shadow-2xl flex flex-col max-h-[90vh] h-full sm:h-auto animate-in zoom-in-95 duration-300 border border-line"
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

interface ResidentialProgramsSectionProps {
  locale?: string;
}

export default function ResidentialProgramsSection({
  locale = "en",
}: ResidentialProgramsSectionProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const t = useTranslations("LoanPrograms.ResidentialProgramsSection");
  const isEs = locale === "es";

  const closeModal = () => setActiveModal(null);
  const closeVideo = () => setActiveVideo(null);

  const getLocalizedHref = (path: string) => (isEs ? `/es${path}` : path);

  const jumboIdealList = t.raw("jumbo.ideal_list") as string[];
  const fhaBenefits = t.raw("fha.benefits") as string[];
  const fhaAltHighlights = t.raw("fha_alt_docs.highlights") as string[];
  const buydownBenefits = t.raw("buydown.benefits") as string[];
  const buydownWhoList = t.raw("buydown.who_list") as string[];
  const bankHighlights = t.raw("bank_statement.highlights") as string[];
  const bankWhoList = t.raw("bank_statement.who_list") as string[];
  const vaBenefits = t.raw("va.benefits") as string[];
  const bridgeIdealList = t.raw("bridge.ideal_list") as string[];
  const bridgeToSaleHighlights = t.raw("bridge_to_sale.highlights") as string[];
  const intlWhoList = t.raw("international.who_list") as string[];
  const intlAvailableList = t.raw("international.available_list") as string[];
  const intlWhyList = t.raw("international.why_list") as string[];
  const itinWhoList = t.raw("itin.who_list") as string[];
  const itinBenefits = t.raw("itin.benefits") as string[];
  const itinReqsList = t.raw("itin.reqs_list") as string[];
  const eepSteps = t.raw("eep.steps") as { step: string; desc: string }[];
  const eepHighlights = t.raw("eep.highlights") as {
    title: string;
    desc: string;
  }[];
  const doctorHighlights = t.raw("doctor.highlights") as string[];
  const doctorEligibleList = t.raw("doctor.eligible_list") as string[];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20" id="resident">
      <h2
        className={cn(
          "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
          fraunces.className,
        )}
      >
        {t("heading")}
      </h2>

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
                {t("conventional.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("conventional.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("conventional.card_description")}
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("conventional")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "conventional"}
            onClose={closeModal}
            title={t("conventional.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("conventional.p1")}
              </p>
              <div className="text-xs text-ink-2 bg-[#f0ece1]/50 p-4 rounded-xl border border-line/50 leading-relaxed mb-6 space-y-3">
                <p className="font-semibold text-ink">
                  {t("conventional.box_title")}
                </p>
                <p>{t("conventional.box_p1")}</p>
                <p>{t("conventional.box_p2")}</p>
                <p>{t("conventional.box_p3")}</p>
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
                {t("jumbo.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("jumbo.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("jumbo.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("jumbo")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/jumbo-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "jumbo"}
            onClose={closeModal}
            title={t("jumbo.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>{t("jumbo.p1")}</p>
                <p>{t("jumbo.p2")}</p>
                <p>{t("jumbo.p3")}</p>
              </div>

              <h4 className="font-medium text-ink mb-3">
                {t("jumbo.ideal_title")}
              </h4>

              <ul className="space-y-2 mb-6">
                {jumboIdealList.map((item, index) => (
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
                    {t("jumbo.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">
                    {t("jumbo.callout_desc")}
                  </p>
                </div>
                <Link
                  href={getLocalizedHref("/loan-programs/jumbo-loans")}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("jumbo.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>

              <p className="font-bold text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                {t("jumbo.closing_statement")}
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
                {t("fha.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("fha.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("fha.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("fha")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/fha-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "fha"}
            onClose={closeModal}
            title={t("fha.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-base font-medium text-moss-deep mb-4">
                {t("fha.lead")}
              </p>

              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("fha.p1")}
              </p>

              <ul className="space-y-2 mb-6">
                {fhaBenefits.map((item, index) => (
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
                    {t("fha.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">{t("fha.callout_desc")}</p>
                </div>
                <Link
                  href={getLocalizedHref("/loan-programs/fha-loans")}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("fha.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <LoanProgramButton loan_type="FHA" />
          </LoanDetailModal>
        </div>

        {/* 4. FHA Alternative Income Documentation */}
        <div
          id="fha-alt-docs"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col h-[435px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                {t("fha_alt_docs.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("fha_alt_docs.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("fha_alt_docs.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("fha-alt-docs")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/fha-alternative-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "fha-alt-docs"}
            onClose={closeModal}
            title={t("fha_alt_docs.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-base font-medium text-moss-deep mb-4">
                {t("fha_alt_docs.lead")}
              </p>

              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("fha_alt_docs.p1")}
              </p>

              <ul className="space-y-2 mb-6">
                {fhaAltHighlights.map((item, index) => (
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
                    {t("fha_alt_docs.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">
                    {t("fha_alt_docs.callout_desc")}
                  </p>
                </div>
                <Link
                  href={getLocalizedHref(
                    "/loan-programs/fha-alternative-loans",
                  )}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("fha_alt_docs.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <LoanProgramButton loan_type="FHA Alternative Documentation" />
          </LoanDetailModal>
        </div>

        {/* 5. 2/1 Buydown */}
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
                {t("buydown.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("buydown.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("buydown.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col gap-2">
            <button
              onClick={() =>
                setActiveVideo({
                  src: "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Lower+Your+Mortgage+Payment+During+Your+First+Two+Years+of+Homeownership_1080p_caption.mp4",
                  title: t("buydown.title"),
                })
              }
              className="flex-1 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
            >
              <PlayCircle size={14} /> {t("common.see_how_it_works")}
            </button>

            <button
              onClick={() => setActiveModal("buydown")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/2-1-buydown-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "buydown"}
            onClose={closeModal}
            title={t("buydown.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-base font-medium text-moss-deep mb-4">
                {t("buydown.lead")}
              </p>

              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("buydown.p1")}
              </p>

              <div className="mb-6">
                <h4
                  className={cn(
                    "text-lg font-medium text-ink mb-2",
                    fraunces.className,
                  )}
                >
                  {t("buydown.how_title")}
                </h4>
                <p className="text-sm text-ink-2 mb-3">
                  {t("buydown.how_intro")}
                </p>
                <ul className="list-disc list-inside text-sm text-ink-2 space-y-1.5 pl-2 mb-3">
                  <li>
                    <strong className="text-ink font-semibold">
                      {t("buydown.how_y1_label")}{" "}
                    </strong>
                    {t("buydown.how_y1_text")}
                  </li>
                  <li>
                    <strong className="text-ink font-semibold">
                      {t("buydown.how_y2_label")}{" "}
                    </strong>
                    {t("buydown.how_y2_text")}
                  </li>
                  <li>
                    <strong className="text-ink font-semibold">
                      {t("buydown.how_y3_label")}{" "}
                    </strong>
                    {t("buydown.how_y3_text")}
                  </li>
                </ul>
                <p className="text-sm text-ink-2 leading-relaxed">
                  {t("buydown.how_summary")}
                </p>
              </div>

              <div className="mb-6">
                <h4
                  className={cn(
                    "text-lg font-medium text-ink mb-2",
                    fraunces.className,
                  )}
                >
                  {t("buydown.benefits_title")}
                </h4>
                <ul className="list-disc list-inside text-sm text-ink-2 space-y-1.5 pl-2">
                  {buydownBenefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4
                  className={cn(
                    "text-lg font-medium text-ink mb-2",
                    fraunces.className,
                  )}
                >
                  {t("buydown.who_title")}
                </h4>
                <p className="text-sm text-ink-2 mb-2">
                  {t("buydown.who_intro")}
                </p>
                <ul className="list-disc list-inside text-sm text-ink-2 space-y-1.5 pl-2">
                  {buydownWhoList.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </div>

              <div className="text-xs text-ink-2 bg-[#f0ece1]/50 p-4 rounded-xl border border-line/50 leading-relaxed mb-6">
                <strong className="font-semibold text-ink block mb-1">
                  {t("buydown.things_to_know_title")}
                </strong>
                {t("buydown.things_to_know_text")}
              </div>

              <div className="mb-6 border-t border-line/50 pt-6">
                <h4
                  className={cn(
                    "text-lg font-medium text-ink mb-2",
                    fraunces.className,
                  )}
                >
                  {t("buydown.help_title")}
                </h4>
                <p className="text-sm text-ink-2 leading-relaxed mb-3">
                  {t("buydown.help_p1")}
                </p>
                <p className="text-sm font-medium text-moss-deep italic">
                  {t("buydown.help_p2")}
                </p>
              </div>

              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("buydown.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">
                    {t("buydown.callout_desc")}
                  </p>
                </div>
                <Link
                  href={getLocalizedHref("/loan-programs/2-1-buydown-loans")}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("buydown.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <LoanProgramButton loan_type="2/1 Buydown" />
          </LoanDetailModal>
        </div>

        {/* 6. Bank Statement Loans */}
        <div
          id="bank-statement"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col sm:h-[435px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <FileText size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                {t("bank_statement.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              {t("bank_statement.title")}
            </h3>
            <p className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-3">
              {t("bank_statement.subtitle")}
            </p>
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-2">
              {t("bank_statement.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col gap-2">
            <button
              onClick={() =>
                setActiveVideo({
                  src: "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Bank+Statment_1080p_caption.mp4",
                  title: t("bank_statement.title"),
                })
              }
              className="flex-1 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
            >
              <PlayCircle size={14} /> {t("common.see_how_it_works")}
            </button>

            <button
              onClick={() => setActiveModal("bank-statement")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/bank-statement-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "bank-statement"}
            onClose={closeModal}
            title={t("bank_statement.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-3">
                {t("bank_statement.modal_subtitle")}
              </p>

              <div className="text-xs text-ink-2 leading-relaxed space-y-2 mb-4">
                <p>{t("bank_statement.p1")}</p>
                <p>{t("bank_statement.p2")}</p>
                <p>{t("bank_statement.p3")}</p>
              </div>

              <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                {t("bank_statement.highlights_title")}
              </h4>
              <ul className="space-y-2 mb-6">
                {bankHighlights.map((item, index) => (
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
                {t("bank_statement.who_title")}
              </h4>
              <p className="text-xs text-ink-2 mb-2">
                {t("bank_statement.who_intro")}
              </p>
              <ul className="space-y-2 mb-6">
                {bankWhoList.map((item, index) => (
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
                  {t("bank_statement.why_box_title")}
                </h4>
                <p className="text-xs text-ink-2 leading-relaxed">
                  {t("bank_statement.why_box_text")}
                </p>
              </div>

              <p className="text-xs text-ink-2 italic mb-2">
                {t("bank_statement.closing_note")}
              </p>
              <p className="text-xs text-ink-2 font-medium mb-6">
                {t("bank_statement.contact_prompt")}
              </p>

              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("bank_statement.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">
                    {t("bank_statement.callout_desc")}
                  </p>
                </div>
                <Link
                  href={getLocalizedHref("/loan-programs/bank-statement-loans")}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("bank_statement.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <LoanProgramButton loan_type="Bank Statement" />
          </LoanDetailModal>
        </div>

        {/* 7. Hybrid Loans */}
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
                {t("hybrid.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("hybrid.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("hybrid.card_description")}
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("hybrid")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "hybrid"}
            onClose={closeModal}
            title={t("hybrid.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>{t("hybrid.p1")}</p>
                <p>{t("hybrid.p2")}</p>
                <p>{t("hybrid.p3")}</p>
                <p className="text-xs italic bg-line/20 p-2.5 rounded border border-line">
                  {t("hybrid.highlight_box")}
                </p>
              </div>
            </div>
            <LoanProgramButton loan_type="Hybrid" />
          </LoanDetailModal>
        </div>

        {/* 8. VA Loans */}
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
                {t("va.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("va.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("va.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex sm:flex-row flex-col gap-2">
            <button
              onClick={() => setActiveModal("va")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/va-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "va"}
            onClose={closeModal}
            title={t("va.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-sm text-ink-2 leading-relaxed mb-4">
                {t("va.p1")}
              </p>
              <p className="text-xs font-semibold text-moss-deep mb-4">
                {t("va.lead")}
              </p>
              <ul className="space-y-2 mb-6">
                {vaBenefits.map((item, index) => (
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

              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("va.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">{t("va.callout_desc")}</p>
                </div>
                <Link
                  href={getLocalizedHref("/loan-programs/va-loans")}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("va.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <LoanProgramButton loan_type="VA" />
          </LoanDetailModal>
        </div>

        {/* 9. Private Bridge Loans */}
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
                {t("bridge.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("bridge.title")}
            </h3>
            <p className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-4">
              {t("bridge.subtitle")}
            </p>
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-2">
              {t("bridge.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("bridge")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/bridge-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "bridge"}
            onClose={closeModal}
            title={t("bridge.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-4">
                {t("bridge.modal_subtitle")}
              </p>

              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                {t("bridge.p1")}
              </p>

              <div className="text-xs text-ink-2 mb-6">
                <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                  {t("bridge.ideal_title")}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed">
                  {bridgeIdealList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="text-xs text-ink-2 bg-[#f0ece1]/50 p-4 rounded-xl border border-line/50 leading-relaxed mb-6 space-y-3">
                <p className="font-semibold text-ink text-[11px] uppercase tracking-wider">
                  {t("bridge.strategic_title")}
                </p>
                <p className="text-[11px]">{t("bridge.strategic_p1")}</p>
                <p className="text-[11px]">{t("bridge.strategic_p2")}</p>
              </div>

              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("bridge.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">
                    {t("bridge.callout_desc")}
                  </p>
                </div>
                <Link
                  href={getLocalizedHref("/loan-programs/bridge-loans")}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("bridge.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <LoanProgramButton loan_type="Private Bridge" />
          </LoanDetailModal>
        </div>

        {/* 10. Bridge to Sale */}
        <div
          id="bridge-to-sale"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col sm:h-[380px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <RefreshCw size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2.5 py-1 rounded-md">
                {t("bridge_to_sale.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("bridge_to_sale.title")}
            </h3>
            <p className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-4">
              {t("bridge_to_sale.subtitle")}
            </p>
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-2">
              {t("bridge_to_sale.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("bridge-to-sale")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/bridge-to-sale-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "bridge-to-sale"}
            onClose={closeModal}
            title={t("bridge_to_sale.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-xs font-bold text-brand-orange uppercase tracking-wide mb-4">
                {t("bridge_to_sale.modal_subtitle")}
              </p>

              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                {t("bridge_to_sale.p1")}
              </p>

              <div className="text-xs text-ink-2 mb-6">
                <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                  {t("bridge_to_sale.highlights_title")}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed">
                  {bridgeToSaleHighlights.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="text-xs text-ink-2 bg-[#f0ece1]/50 p-4 rounded-xl border border-line/50 leading-relaxed mb-6 space-y-3">
                <p className="font-semibold text-ink text-[11px] uppercase tracking-wider">
                  {t("bridge_to_sale.strategic_title")}
                </p>
                <p className="text-[11px]">
                  {t("bridge_to_sale.strategic_p1")}
                </p>
                <p className="text-[11px]">
                  {t("bridge_to_sale.strategic_p2")}
                </p>
              </div>

              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("bridge_to_sale.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">
                    {t("bridge_to_sale.callout_desc")}
                  </p>
                </div>
                <Link
                  href={getLocalizedHref("/loan-programs/bridge-to-sale-loans")}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("bridge_to_sale.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <LoanProgramButton loan_type="Bridge to Sale" />
          </LoanDetailModal>
        </div>

        {/* 11. International Buyers Section */}
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
                {t("international.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              {t("international.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("international.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("international-buyer")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/foreign-national-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "international-buyer"}
            onClose={closeModal}
            title={t("international.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <h4 className="font-medium text-ink mb-3">
                {t("international.lead")}
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                {t("international.p1")}
              </p>

              <h4 className="font-medium text-ink mb-3">
                {t("international.who_title")}
              </h4>
              <ul className="space-y-2 mb-4">
                {intlWhoList.map((item, index) => (
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
                {t("international.available_title")}
              </h4>
              <ul className="space-y-2 mb-4">
                {intlAvailableList.map((item, index) => (
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
                {t("international.why_title")}
              </h4>
              <ul className="space-y-2 mb-4">
                {intlWhyList.map((item, index) => (
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
                  {t("international.ready_title")}
                </span>
                <br />
                {t("international.ready_desc")}
              </p>

              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("international.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">
                    {t("international.callout_desc")}
                  </p>
                </div>
                <Link
                  href={getLocalizedHref(
                    "/loan-programs/foreign-national-loans",
                  )}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("international.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>

              <LoanProgramButton loan_type="International Buyers" />
            </div>
          </LoanDetailModal>
        </div>

        {/* 12. ITIN Home Loans */}
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
                {t("itin.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              {t("itin.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("itin.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("itin")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/itin-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "itin"}
            onClose={closeModal}
            title={t("itin.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <h4 className="font-medium text-ink mb-3">{t("itin.lead")}</h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                {t("itin.p1_part1")}
                <span className="font-bold">{t("itin.p1_bold")}</span>
                {t("itin.p1_part2")}
              </p>

              <h4 className="font-medium text-ink mb-3">
                {t("itin.who_title")}
              </h4>
              <ul className="space-y-2 mb-4">
                {itinWhoList.map((item, index) => (
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
                {t("itin.benefits_title")}
              </h4>
              <ul className="space-y-2 mb-4">
                {itinBenefits.map((item, index) => (
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
                {t("itin.reqs_title")}
              </h4>
              <ul className="space-y-2 mb-4">
                {itinReqsList.map((item, index) => (
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
                  {t("itin.ready_title")}
                </span>
                <br />
                {t("itin.ready_desc")}
              </p>

              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("itin.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">{t("itin.callout_desc")}</p>
                </div>
                <Link
                  href={getLocalizedHref("/loan-programs/itin-loans")}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("itin.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>

              <LoanProgramButton loan_type="ITIN Home Loans" />
            </div>
          </LoanDetailModal>
        </div>

        {/* 13. Dream Home Builder AKA Earned Equity Program (EEP) */}
        <div
          id="eep"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between sm:h-[450px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Key size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                {t("eep.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("eep.title")}
            </h3>
            <p className="text-xs font-serif italic text-brand-orange mb-3 line-clamp-2">
              {t("eep.subtitle")}
            </p>
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-3">
              {t("eep.card_description")}
            </p>
          </div>
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() =>
                setActiveVideo({
                  src: "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Dream+Home+Builder+Earned+Equity+Program+(EEP)_1080p_caption.mp4",
                  title: t("eep.title"),
                })
              }
              className="flex-1 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <PlayCircle size={14} /> {t("common.see_how_it_works")}
            </button>
            <button
              onClick={() => setActiveModal("eep")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:border-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "eep"}
            onClose={closeModal}
            title={t("eep.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-xs font-serif italic text-brand-orange mb-4">
                {t("eep.modal_subtitle")}
              </p>

              <div className="text-xs text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>{t("eep.p1")}</p>
                <p>{t("eep.p2")}</p>

                {/* How It Works */}
                <div className="mt-6 border-t border-line/60 pt-4">
                  <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-3">
                    {t("eep.how_title")}
                  </h4>
                  <ol className="space-y-3 font-mono text-[11px] leading-relaxed">
                    {eepSteps.map((s, i) => (
                      <li
                        key={i}
                        className="bg-cream/40 p-3 rounded-xl border border-line/50"
                      >
                        <strong className="text-ink font-bold block mb-0.5">
                          {s.step}
                        </strong>
                        {s.desc}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Program Highlights */}
                <div className="mt-6 border-t border-line/60 pt-4">
                  <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-3">
                    {t("eep.highlights_title")}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px]">
                    {eepHighlights.map((h, i) => (
                      <div
                        key={i}
                        className="bg-[#f0ece1]/60 p-3 rounded-xl border border-line"
                      >
                        <strong className="text-ink block font-bold mb-1">
                          {h.title}
                        </strong>
                        {h.desc}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Who Is This Program For */}
                <div className="mt-6 border-t border-line/60 pt-4">
                  <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                    {t("eep.who_title")}
                  </h4>
                  <p className="mb-2">{t("eep.who_p1")}</p>
                  <p>{t("eep.who_p2")}</p>
                </div>

                {/* Call to Action Statement */}
                <div className="mt-6 bg-brand-orange/10 p-4 rounded-xl border border-brand-orange/30">
                  <h4 className="font-bold text-ink text-xs uppercase tracking-wider mb-1">
                    {t("eep.cta_box_title")}
                  </h4>
                  <p className="text-[11px]">{t("eep.cta_box_desc")}</p>
                </div>
              </div>

              {/* Program Disclaimer */}
              <div className="p-3 bg-line/20 rounded-xl border border-line mb-4">
                <p className="text-[10px] text-ink-2 leading-relaxed">
                  <span className="font-bold text-ink">
                    {t("eep.disclaimer_title")}{" "}
                  </span>
                  {t("eep.disclaimer_text")}
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-line">
              <LoanProgramButton loan_type="Earned Equity EEP" />
            </div>
          </LoanDetailModal>
        </div>

        {/* 14. Doctor Loan Program */}
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
                {t("doctor.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("doctor.title")}
            </h3>
            <p className="text-xs font-bold text-moss-deep uppercase tracking-wide mb-3 line-clamp-2">
              {t("doctor.subtitle")}
            </p>
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-3">
              {t("doctor.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col gap-2">
            <button
              onClick={() =>
                setActiveVideo({
                  src: "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Medical+Professional+Loan+Program_1080p_caption.mp4",
                  title: t("doctor.title"),
                })
              }
              className="flex-1 py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
            >
              <PlayCircle size={14} /> {t("common.see_how_it_works")}
            </button>

            <button
              onClick={() => setActiveModal("doctor")}
              className="flex-1 py-3 bg-cream hover:bg-moss-deep hover:border-moss-deep hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref(
                "/loan-programs/medical-professional-loans",
              )}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "doctor"}
            onClose={closeModal}
            title={t("doctor.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-xs font-bold text-moss-deep uppercase tracking-wide mb-4">
                {t("doctor.modal_subtitle")}
              </p>

              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                {t("doctor.p1")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-ink-2 mb-6">
                <div>
                  <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                    {t("doctor.highlights_title")}
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed">
                    {doctorHighlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                    {t("doctor.eligible_title")}
                  </h4>
                  <div className="bg-line/20 p-4 rounded-xl border border-line/40">
                    <ul className="grid grid-cols-1 gap-1 font-mono text-[11px] tracking-wide text-ink">
                      {doctorEligibleList.map((doc, idx) => (
                        <li key={idx}>{doc}</li>
                      ))}
                    </ul>
                    <span className="italic text-ink-2 text-[10px] block mt-3 pt-3 border-t border-line/40">
                      {t("doctor.eligible_note")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-cream/50 border border-line/60 rounded-2xl p-5 mb-6">
                <h4 className="font-semibold text-ink text-xs uppercase tracking-wider mb-2">
                  {t("doctor.why_title")}
                </h4>
                <p className="text-xs text-ink-2 leading-relaxed">
                  {t("doctor.why_desc")}
                </p>
              </div>

              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("doctor.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">
                    {t("doctor.callout_desc")}
                  </p>
                </div>
                <Link
                  href={getLocalizedHref(
                    "/loan-programs/medical-professional-loans",
                  )}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("doctor.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>

              <div className="p-3 bg-line/20 rounded-xl border border-line mb-4">
                <p className="text-[10px] text-ink-2 leading-relaxed">
                  <span className="font-bold text-ink">
                    {t("doctor.disclaimer_title")}{" "}
                  </span>
                  {t("doctor.disclaimer_text")}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 pt-4 border-t border-line">
              <Link
                href={getLocalizedHref("/get-quote")}
                className="w-full sm:w-1/2 py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm text-center"
              >
                {t("doctor.explore_button")} <ArrowRight size={14} />
              </Link>
              <a
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3.5 bg-cream hover:bg-moss-deep hover:text-white border border-line hover:border-moss-deep rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all text-center"
              >
                {t("common.apply_now")}
              </a>
            </div>
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
