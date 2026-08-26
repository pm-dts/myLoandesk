"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Landmark, X, ArrowRight, ExternalLink } from "lucide-react";
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
            aria-label={closeLabel}
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

interface InternationalCustomSectionProps {
  locale?: string;
}

export default function InternationalCustomSection({
  locale = "en",
}: InternationalCustomSectionProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const t = useTranslations("LoanPrograms.InternationalCustomSection");
  const isEs = locale === "es";

  const closeModal = () => setActiveModal(null);
  const getLocalizedHref = (path: string) => (isEs ? `/es${path}` : path);

  const residentialList = t.raw("portugal.residential_list") as string[];
  const commercialList = t.raw("portugal.commercial_list") as string[];

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
        {t("heading")}
      </h2>

      {/* Grid updated to gap-6 matching the fixed card layout */}
      <div className="grid grid-cols-1 gap-6">
        {/* 1. Portugal Loans */}
        <div
          id="portugal"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between h-[435px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep shrink-0">
                <Landmark size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                {t("portugal.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("portugal.title")}
            </h3>
            <p className="text-xs font-bold text-ink mb-2 line-clamp-1">
              {t("portugal.subtitle")}
            </p>
            <p className="text-xs text-ink-2 leading-relaxed line-clamp-3">
              {t("portugal.card_description")}
            </p>
          </div>

          {/* Card Action Buttons with Link to Dedicated Page */}
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2 max-w-md">
            <button
              onClick={() => setActiveModal("portugal")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.read_more")} <ArrowRight size={14} />
            </button>

            {/* Direct Page Link in Card */}
            <Link
              href={getLocalizedHref(
                "/loan-programs/portugal-property-financing",
              )}
              className="flex-1 py-3 bg-primary-bg hover:bg-cream border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("common.program_page")}{" "}
              <ExternalLink size={14} className="text-brand-orange" />
            </Link>
          </div>

          <LoanDetailModal
            isOpen={activeModal === "portugal"}
            onClose={closeModal}
            title={t("portugal.modal_title")}
            closeLabel={t("common.close_dialog")}
          >
            <div>
              <p className="text-xs font-bold text-ink mb-3">
                {t("portugal.subtitle")}
              </p>
              <p className="text-xs text-ink-2 leading-relaxed mb-4">
                {t("portugal.intro_p")}
              </p>

              <p className="text-xs font-bold text-ink mb-3">
                {t("portugal.residential_title")}
              </p>

              <p className="text-xs text-ink-2 leading-relaxed mb-4">
                {t("portugal.residential_intro")}
              </p>

              <ul className="space-y-2 mb-4">
                {residentialList.map((item, index) => (
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
                {t("portugal.commercial_title")}
              </p>

              <p className="text-xs text-ink-2 leading-relaxed mb-4">
                {t("portugal.commercial_intro")}
              </p>

              <ul className="space-y-2 mb-4">
                {commercialList.map((item, index) => (
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
                {t("portugal.construction_title")}
              </p>
              <p className="text-xs text-ink-2 leading-relaxed mb-6">
                {t("portugal.construction_intro")}
              </p>

              {/* Direct Program Page Link Box inside Modal */}
              <div className="mb-6 p-4 bg-cream/40 border border-line rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-ink uppercase tracking-wider">
                    {t("portugal.callout_title")}
                  </div>
                  <p className="text-xs text-ink-2">
                    {t("portugal.callout_desc")}
                  </p>
                </div>
                <Link
                  href={getLocalizedHref(
                    "/loan-programs/portugal-property-financing",
                  )}
                  onClick={closeModal}
                  className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0 hover:bg-orange-600 transition-colors"
                >
                  {t("portugal.callout_button")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-line">
              <LoanProgramButton loan_type="Construction and Development Loans" />
            </div>
          </LoanDetailModal>
        </div>
      </div>
    </section>
  );
}
