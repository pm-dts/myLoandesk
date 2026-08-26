"use client";

import { useState, useEffect } from "react";
import { Shield, X, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LoanProgramButton from "@/components/site/utils/LoanProgramButton";
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

interface RealEstateInvestmentSectionProps {
  locale?: string;
}

export default function RealEstateInvestmentSection({
  locale = "en",
}: RealEstateInvestmentSectionProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const t = useTranslations("LoanPrograms.RealEstateInvestmentSection");
  const isEs = locale === "es";

  const closeModal = () => setActiveModal(null);
  const getLocalizedHref = (path: string) => (isEs ? `/es${path}` : path);

  const dscrWhyList = t.raw("dscr.why_list") as string[];
  const dscrWhoList = t.raw("dscr.who_list") as string[];

  const fixFlipWhyList = t.raw("fix_and_flip.why_list") as string[];
  const fixFlipWhoList = t.raw("fix_and_flip.who_list") as string[];

  const constructionWhyList = t.raw("construction.why_list") as string[];
  const constructionWhoList = t.raw("construction.who_list") as string[];

  return (
    <section
      className="max-w-7xl mx-auto px-6 mt-10 lg:px-10 mb-20"
      id="real-estate"
    >
      <h2
        className={cn(
          "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
          fraunces.className,
        )}
      >
        {t("heading")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. DSCR Financing */}
        <div
          id="DSCR"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[420px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                {t("dscr.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              {t("dscr.title")}
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-2">
              {t("dscr.subtitle")}
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("dscr.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col gap-2">
            <button
              onClick={() => setActiveModal("dscr")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/dscr-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "dscr"}
            onClose={closeModal}
            title={t("dscr.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <h4 className="font-medium text-ink mb-3">
                {t("dscr.subtitle")}
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                {t("dscr.p1")}
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("dscr.p2")}
              </p>

              <h4 className="font-medium text-ink mb-3">
                {t("dscr.why_title")}
              </h4>
              <ul className="space-y-2 mb-6">
                {dscrWhyList.map((item, index) => (
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
                {t("dscr.who_title")}
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                {t("dscr.who_intro")}
              </p>
              <ul className="space-y-2 mb-6">
                {dscrWhoList.map((item, index) => (
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
                {t("dscr.grow_title")}
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("dscr.grow_p")}
              </p>

              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">
                  {t("dscr.ready_title")}
                </span>
                <br />
                {t("dscr.ready_desc")}
              </p>

              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("dscr.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">{t("dscr.callout_desc")}</p>
                </div>
                <Link
                  href={getLocalizedHref("/loan-programs/dscr-loans")}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("dscr.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>

              <div className="p-3 bg-line/20 rounded-xl border border-line mb-4">
                <h4 className="font-bold text-ink text-xs mb-1">
                  {t("dscr.disclaimer_title")}
                </h4>
                <p className="text-[10px] text-ink-2">
                  {t("dscr.disclaimer_text")}
                </p>
              </div>

              <LoanProgramButton loan_type="DSCR Investment Property Loans" />
            </div>
          </LoanDetailModal>
        </div>

        {/* 2. Fix & Flip Loans */}
        <div
          id="fix-flip"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[420px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                {t("fix_and_flip.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              {t("fix_and_flip.title")}
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-2">
              {t("fix_and_flip.subtitle")}
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("fix_and_flip.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col gap-2">
            <button
              onClick={() => setActiveModal("fix-flip")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/fix-and-flip-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "fix-flip"}
            onClose={closeModal}
            title={t("fix_and_flip.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <h4 className="font-medium text-ink mb-3">
                {t("fix_and_flip.subtitle")}
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                {t("fix_and_flip.p1")}
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("fix_and_flip.p2")}
              </p>

              <h4 className="font-medium text-ink mb-3">
                {t("fix_and_flip.why_title")}
              </h4>
              <ul className="space-y-2 mb-6">
                {fixFlipWhyList.map((item, index) => (
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
                {t("fix_and_flip.who_title")}
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                {t("fix_and_flip.who_intro")}
              </p>
              <ul className="space-y-2 mb-6">
                {fixFlipWhoList.map((item, index) => (
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
                {t("fix_and_flip.profit_title")}
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("fix_and_flip.profit_p")}
              </p>

              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">
                  {t("fix_and_flip.ready_title")}
                </span>
                <br />
                {t("fix_and_flip.ready_desc")}
              </p>

              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("fix_and_flip.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">
                    {t("fix_and_flip.callout_desc")}
                  </p>
                </div>
                <Link
                  href={getLocalizedHref("/loan-programs/fix-and-flip-loans")}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("fix_and_flip.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>

              <div className="p-3 bg-line/20 rounded-xl border border-line mb-4">
                <h4 className="font-bold text-ink text-xs mb-1">
                  {t("fix_and_flip.disclaimer_title")}
                </h4>
                <p className="text-[10px] text-ink-2">
                  {t("fix_and_flip.disclaimer_text")}
                </p>
              </div>

              <LoanProgramButton loan_type="Fix & Flip Loans" />
            </div>
          </LoanDetailModal>
        </div>

        {/* 3. Ground-Up Construction Loans */}
        <div
          id="ground-up"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[420px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                {t("construction.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              {t("construction.title")}
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-2">
              {t("construction.subtitle")}
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("construction.card_description")}
            </p>
          </div>

          <div className="mt-auto pt-4 flex flex-col gap-2">
            <button
              onClick={() => setActiveModal("ground-up")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            <Link
              href={getLocalizedHref("/loan-programs/construction-loans")}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "ground-up"}
            onClose={closeModal}
            title={t("construction.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <h4 className="font-medium text-ink mb-3">
                {t("construction.subtitle")}
              </h4>

              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                {t("construction.p1")}
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("construction.p2")}
              </p>

              <h4 className="font-medium text-ink mb-3">
                {t("construction.why_title")}
              </h4>
              <ul className="space-y-2 mb-6">
                {constructionWhyList.map((item, index) => (
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
                {t("construction.who_title")}
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                {t("construction.who_intro")}
              </p>
              <ul className="space-y-2 mb-6">
                {constructionWhoList.map((item, index) => (
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
                {t("construction.build_title")}
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("construction.build_p")}
              </p>

              <p className="text-xs mb-4 text-ink-2">
                <span className="font-bold text-ink">
                  {t("construction.ready_title")}
                </span>
                <br />
                {t("construction.ready_desc")}
              </p>

              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("construction.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">
                    {t("construction.callout_desc")}
                  </p>
                </div>
                <Link
                  href={getLocalizedHref("/loan-programs/construction-loans")}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("construction.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>

              <div className="p-3 bg-line/20 rounded-xl border border-line mb-4">
                <h4 className="font-bold text-ink text-xs mb-1">
                  {t("construction.disclaimer_title")}
                </h4>
                <p className="text-[10px] text-ink-2">
                  {t("construction.disclaimer_text")}
                </p>
              </div>

              <LoanProgramButton loan_type="Ground-Up Construction Loans" />
            </div>
          </LoanDetailModal>
        </div>
      </div>
    </section>
  );
}
