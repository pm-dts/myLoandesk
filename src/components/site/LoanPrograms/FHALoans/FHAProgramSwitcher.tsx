"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface ProgramSwitcherProps {
  locale?: string;
}

export default function ProgramSwitcher({}: ProgramSwitcherProps) {
  const [activeTab, setActiveTab] = useState<"voe" | "pl">("voe");
  const t = useTranslations("FHAAlternativeLoans.switcher");

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1C1C1C] p-[30px] text-white before:pointer-events-none before:absolute before:-right-[60px] before:-top-[60px] before:h-[200px] before:w-[200px] before:rounded-full before:bg-[radial-gradient(circle,rgba(217,114,44,0.35),transparent_70%)]">
      <div className="relative z-10 font-sans text-xs font-bold uppercase tracking-[0.08em] text-[#D9B896]">
        {t("badge")}
      </div>
      <div className="relative z-10 mb-[18px] text-[13px] text-[#C9C4B8]">
        {t("subheading")}
      </div>

      <div className="relative z-10 mb-5 flex rounded-[10px] border border-white/15 bg-white/[0.07] p-[3px]">
        <button
          type="button"
          onClick={() => setActiveTab("voe")}
          className={`flex-1 rounded-lg px-2 py-[11px] text-center font-sans text-[12.5px] font-bold transition-colors ${
            activeTab === "voe"
              ? "bg-[#D9722C] text-white"
              : "bg-transparent text-[#C9C4B8] hover:text-white"
          }`}
        >
          {t("tab_voe")}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("pl")}
          className={`flex-1 rounded-lg px-2 py-[11px] text-center font-sans text-[12.5px] font-bold transition-colors ${
            activeTab === "pl"
              ? "bg-[#D9722C] text-white"
              : "bg-transparent text-[#C9C4B8] hover:text-white"
          }`}
        >
          {t("tab_pl")}
        </button>
      </div>

      {activeTab === "voe" && (
        <div className="relative z-10">
          <h3 className="font-serif text-[19px] font-semibold text-white">
            {t("voe.title")}
          </h3>
          <div className="mb-[14px] font-sans text-xs font-bold text-[#F5C89A]">
            {t("voe.financing")}
          </div>
          <ul className="m-0 list-none p-0">
            <li className="flex items-start gap-[9px] border-t-0 py-[9px] text-[13.5px] leading-snug text-[#E3E9F5]">
              <svg
                className="mt-0.5 shrink-0"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="#D9722C"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
              <span>{t("voe.bullet1")}</span>
            </li>
            <li className="flex items-start gap-[9px] border-t border-white/10 py-[9px] text-[13.5px] leading-snug text-[#E3E9F5]">
              <svg
                className="mt-0.5 shrink-0"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="#D9722C"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
              <span>{t("voe.bullet2")}</span>
            </li>
            <li className="flex items-start gap-[9px] border-t border-white/10 py-[9px] text-[13.5px] leading-snug text-[#E3E9F5]">
              <svg
                className="mt-0.5 shrink-0"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="#D9722C"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
              <span>{t("voe.bullet3")}</span>
            </li>
            <li className="flex items-start gap-[9px] border-t border-white/10 py-[9px] text-[13.5px] leading-snug text-[#E3E9F5]">
              <svg
                className="mt-0.5 shrink-0"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="#D9722C"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
              <span>{t("voe.bullet4")}</span>
            </li>
          </ul>
        </div>
      )}

      {activeTab === "pl" && (
        <div className="relative z-10">
          <h3 className="font-serif text-[19px] font-semibold text-white">
            {t("pl.title")}
          </h3>
          <div className="mb-[14px] font-sans text-xs font-bold text-[#F5C89A]">
            {t("pl.financing")}
          </div>
          <ul className="m-0 list-none p-0">
            <li className="flex items-start gap-[9px] border-t-0 py-[9px] text-[13.5px] leading-snug text-[#E3E9F5]">
              <svg
                className="mt-0.5 shrink-0"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="#D9722C"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
              <span>{t("pl.bullet1")}</span>
            </li>
            <li className="flex items-start gap-[9px] border-t border-white/10 py-[9px] text-[13.5px] leading-snug text-[#E3E9F5]">
              <svg
                className="mt-0.5 shrink-0"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="#D9722C"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
              <span>{t("pl.bullet2")}</span>
            </li>
            <li className="flex items-start gap-[9px] border-t border-white/10 py-[9px] text-[13.5px] leading-snug text-[#E3E9F5]">
              <svg
                className="mt-0.5 shrink-0"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="#D9722C"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
              <span>{t("pl.bullet3")}</span>
            </li>
            <li className="flex items-start gap-[9px] border-t border-white/10 py-[9px] text-[13.5px] leading-snug text-[#E3E9F5]">
              <svg
                className="mt-0.5 shrink-0"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="#D9722C"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
              <span>{t("pl.bullet4")}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
