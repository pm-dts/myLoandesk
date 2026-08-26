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
import { useTranslations } from "next-intl";

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

interface CommercialFinancingSectionProps {
  locale?: string;
}

export default function CommercialFinancingSection({
  locale = "en",
}: CommercialFinancingSectionProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const t = useTranslations("LoanPrograms.CommercialFinancingSection");
  const isEs = locale === "es";

  const closeModal = () => setActiveModal(null);
  const getLocalizedHref = (path: string) => (isEs ? `/es${path}` : path);

  const crePropertiesList = t.raw("cre.properties_list") as string[];
  const creSolutionsList = t.raw("cre.solutions_list") as string[];
  const creWhyList = t.raw("cre.why_list") as string[];

  const equipmentWhyList = t.raw("equipment.why_list") as string[];
  const equipmentList = t.raw("equipment.equipment_list") as string[];

  const businessLinesFeatures = t.raw(
    "business_lines.features_list",
  ) as string[];
  const businessLinesUseCases = t.raw(
    "business_lines.use_cases_list",
  ) as string[];

  const workingCapitalParams = t.raw("working_capital.params_list") as string[];

  const franchiseHighlights = t.raw("franchise.highlights_list") as string[];

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
        {t("heading")}
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
                {t("cre.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("cre.title")}
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-1">
              {t("cre.subtitle")}
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("cre.card_description")}
            </p>
          </div>

          {/* Card Action Buttons */}
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => setActiveModal("commercial-real-estate")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref(
                "/loan-programs/commercial-real-estate-loans",
              )}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "commercial-real-estate"}
            onClose={closeModal}
            title={t("cre.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <h4 className="font-medium text-ink mb-3">{t("cre.subtitle")}</h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                {t("cre.p1")}
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("cre.p2")}
              </p>

              <h4 className="font-medium text-ink mb-3">
                {t("cre.properties_title")}
              </h4>
              <ul className="space-y-2 mb-6">
                {crePropertiesList.map((item, index) => (
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
                {t("cre.solutions_title")}
              </h4>
              <ul className="space-y-2 mb-6">
                {creSolutionsList.map((item, index) => (
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
                    {t("cre.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">{t("cre.callout_desc")}</p>
                </div>
                <Link
                  href={getLocalizedHref(
                    "/loan-programs/commercial-real-estate-loans",
                  )}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("cre.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>

              <h4 className="font-medium text-ink mb-3">
                {t("cre.why_title")}
              </h4>
              <ul className="space-y-2 mb-6">
                {creWhyList.map((item, index) => (
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
                {t("cre.ready_title")}
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("cre.ready_desc")}
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href={getLocalizedHref("/get-quote")}
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                {t("common.contact_for_details")}
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
                {t("equipment.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("equipment.title")}
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-1">
              {t("equipment.subtitle")}
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("equipment.card_description")}
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("equipment")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "equipment"}
            onClose={closeModal}
            title={t("equipment.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <h4 className="font-medium text-ink mb-3">
                {t("equipment.subtitle")}
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                {t("equipment.p1")}
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("equipment.p2")}
              </p>

              <h4 className="font-semibold text-ink text-xs mb-2">
                {t("equipment.why_title")}
              </h4>
              <ul className="space-y-1.5 mb-6 text-xs text-ink/90">
                {equipmentWhyList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-ink text-xs mb-2">
                {t("equipment.equipment_title")}
              </h4>
              <ul className="space-y-1.5 mb-6 text-xs text-ink/90">
                {equipmentList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-ink text-xs mb-2">
                {t("equipment.forward_title")}
              </h4>
              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                {t("equipment.forward_desc")}
              </p>

              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">
                  {t("equipment.ready_title")}
                </span>
                <br />
                {t("equipment.ready_desc")}
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href={getLocalizedHref("/get-quote")}
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                {t("common.contact_for_details")}
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
                {t("business_lines.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("business_lines.title")}
            </h3>
            <p className="text-xs font-bold uppercase tracking-wider text-moss-deep mb-2 line-clamp-1">
              {t("business_lines.subtitle")}
            </p>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("business_lines.card_description")}
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("business-lines")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "business-lines"}
            onClose={closeModal}
            title={t("business_lines.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-moss-deep mb-2">
                {t("business_lines.subtitle")}
              </p>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>{t("business_lines.p1")}</p>
                <div className="bg-line/30 p-3 rounded-lg text-xs space-y-1">
                  <h4 className="font-semibold text-ink">
                    {t("business_lines.features_title")}
                  </h4>
                  {businessLinesFeatures.map((f, i) => (
                    <p key={i}>{f}</p>
                  ))}
                </div>

                <div className="bg-[#f0ece1]/50 p-4 rounded-xl border border-line/50 text-xs space-y-2">
                  <h4 className="font-semibold text-ink text-[11px] uppercase tracking-wider">
                    {t("business_lines.use_cases_title")}
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-[11px] text-ink-2 leading-relaxed">
                    {businessLinesUseCases.map((uc, i) => (
                      <li key={i}>{uc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href={getLocalizedHref("/get-quote")}
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                {t("common.contact_for_details")}
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
                {t("working_capital.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("working_capital.title")}
            </h3>
            <p className="text-xs font-medium italic text-ink-2 mb-2 line-clamp-1">
              {t("working_capital.subtitle")}
            </p>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("working_capital.card_description")}
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("working-capital")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "working-capital"}
            onClose={closeModal}
            title={t("working_capital.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-xs font-medium italic text-ink-2 mb-4">
                {t("working_capital.modal_subtitle")}
              </p>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>{t("working_capital.p1")}</p>
                <div className="bg-[#f0ece1]/50 p-3 rounded-lg text-xs space-y-1 border border-line">
                  <h4 className="font-semibold text-ink">
                    {t("working_capital.params_title")}
                  </h4>
                  {workingCapitalParams.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href={getLocalizedHref("/get-quote")}
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                {t("common.contact_for_details")}
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
                {t("franchise.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("franchise.title")}
            </h3>
            <p className="text-xs font-semibold text-brand-orange mb-2 line-clamp-1">
              {t("franchise.subtitle")}
            </p>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("franchise.card_description")}
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("franchise")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "franchise"}
            onClose={closeModal}
            title={t("franchise.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-xs font-semibold text-brand-orange mb-4">
                {t("franchise.subtitle")}
              </p>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>{t("franchise.p1")}</p>
                <div className="bg-line/30 p-3 rounded-lg text-xs space-y-1">
                  <h4 className="font-semibold text-ink">
                    {t("franchise.highlights_title")}
                  </h4>
                  {franchiseHighlights.map((h, i) => (
                    <p key={i}>{h}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href={getLocalizedHref("/get-quote")}
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                {t("common.contact_for_details")}
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
                {t("commercial_loans.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("commercial_loans.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-4">
              {t("commercial_loans.card_description")}
            </p>
          </div>
          <div className="mt-auto pt-4">
            <button
              onClick={() => setActiveModal("commercial")}
              className="w-full py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "commercial"}
            onClose={closeModal}
            title={t("commercial_loans.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                <p>{t("commercial_loans.p1")}</p>
                <div className="p-3 bg-line/20 rounded-xl border border-line">
                  <h4 className="font-bold text-ink text-xs mb-1">
                    {t("commercial_loans.sba_title")}
                  </h4>
                  <p className="text-xs">{t("commercial_loans.sba_desc")}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Link
                href={getLocalizedHref("/get-quote")}
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
              >
                {t("common.contact_for_details")}
              </Link>
            </div>
          </LoanDetailModal>
        </div>
      </div>
    </section>
  );
}
