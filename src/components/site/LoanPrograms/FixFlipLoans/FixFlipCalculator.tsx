"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface FixFlipCalculatorProps {
  locale?: string;
}

export default function FixFlipCalculator({
  locale = "en",
}: FixFlipCalculatorProps) {
  const t = useTranslations("FixAndFlipLoans.calculator");
  const numberLocale = locale === "es" ? "es-US" : "en-US";

  const [purchase, setPurchase] = useState<string>("");
  const [rehab, setRehab] = useState<string>("");
  const [arv, setArv] = useState<string>("");

  const purchaseNum = parseFloat(purchase.replace(/[^0-9.]/g, "")) || 0;
  const rehabNum = parseFloat(rehab.replace(/[^0-9.]/g, "")) || 0;
  const arvNum = parseFloat(arv.replace(/[^0-9.]/g, "")) || 0;

  const hasValidInputs = purchaseNum > 0 && rehabNum > 0 && arvNum > 0;

  const totalCost = purchaseNum + rehabNum;
  const maxLoanByCost = purchaseNum * 0.9 + rehabNum * 1.0;
  const maxLoanByArv = arvNum * 0.75;
  const maxLoan = Math.min(maxLoanByCost, maxLoanByArv);
  const cashNeeded = Math.max(totalCost - maxLoan, 0);

  const rulePct = arvNum > 0 ? (totalCost / arvNum) * 100 : 0;
  const barPct = Math.min(rulePct, 100);

  let barBg = "#C9C4B8";
  let verdictColor = "#C9C4B8";
  let verdictText = t("verdict_empty");

  if (hasValidInputs) {
    if (rulePct <= 70) {
      barBg = "#4CA85C";
      verdictColor = "#8FD69B";
      verdictText = t("verdict_low");
    } else if (rulePct <= 80) {
      barBg = "#D9722C";
      verdictColor = "#EFB988";
      verdictText = t("verdict_mid");
    } else {
      barBg = "#C4453A";
      verdictColor = "#F0A69E";
      verdictText = t("verdict_high");
    }
  }

  const fmt = (n: number) =>
    "$" +
    Math.round(n).toLocaleString(numberLocale, {
      maximumFractionDigits: 0,
    });

  return (
    <div className="bg-[#1C1C1C] rounded-[16px] p-[30px] text-white relative overflow-hidden">
      <div
        className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(217,114,44,0.35), transparent 70%)",
        }}
      />

      <div className="font-sans text-[12px] tracking-[0.08em] uppercase text-[#D9B896] mb-[4px] relative z-10 font-bold">
        {t("badge")}
      </div>
      <div className="text-[13px] text-[#C9C4B8] mb-[20px] relative z-10">
        {t("subheading")}
      </div>

      {/* Purchase Price Input */}
      <div className="mb-[14px] relative z-10">
        <label className="block text-[12.5px] text-[#C9C4B8] mb-[6px] font-semibold">
          {t("purchase_label")}
        </label>
        <div className="relative">
          <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8F8A7C] font-sans text-[15px]">
            $
          </span>
          <input
            type="number"
            value={purchase}
            onChange={(e) => setPurchase(e.target.value)}
            placeholder={t("purchase_placeholder")}
            inputMode="numeric"
            className="w-full bg-white/[0.07] border border-white/20 rounded-[10px] py-[12px] pr-[14px] pl-[30px] text-white font-sans text-[15px] font-semibold outline-none focus:border-[#D9722C] focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      {/* Rehab Budget Input */}
      <div className="mb-[14px] relative z-10">
        <label className="block text-[12.5px] text-[#C9C4B8] mb-[6px] font-semibold">
          {t("rehab_label")}
        </label>
        <div className="relative">
          <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8F8A7C] font-sans text-[15px]">
            $
          </span>
          <input
            type="number"
            value={rehab}
            onChange={(e) => setRehab(e.target.value)}
            placeholder={t("rehab_placeholder")}
            inputMode="numeric"
            className="w-full bg-white/[0.07] border border-white/20 rounded-[10px] py-[12px] pr-[14px] pl-[30px] text-white font-sans text-[15px] font-semibold outline-none focus:border-[#D9722C] focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      {/* ARV Input */}
      <div className="mb-[14px] relative z-10">
        <label className="block text-[12.5px] text-[#C9C4B8] mb-[6px] font-semibold">
          {t("arv_label")}
        </label>
        <div className="relative">
          <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8F8A7C] font-sans text-[15px]">
            $
          </span>
          <input
            type="number"
            value={arv}
            onChange={(e) => setArv(e.target.value)}
            placeholder={t("arv_placeholder")}
            inputMode="numeric"
            className="w-full bg-white/[0.07] border border-white/20 rounded-[10px] py-[12px] pr-[14px] pl-[30px] text-white font-sans text-[15px] font-semibold outline-none focus:border-[#D9722C] focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      {/* Calculations Summary */}
      {hasValidInputs && (
        <div className="mt-[20px] pt-[20px] border-t border-white/15 relative z-10">
          <div className="flex justify-between items-baseline text-[13.5px] text-[#C9C4B8] py-[6px]">
            <span>{t("total_cost")}</span>
            <strong className="font-sans text-white text-[15px] font-bold">
              {fmt(totalCost)}
            </strong>
          </div>
          <div className="flex justify-between items-baseline text-[13.5px] text-[#C9C4B8] py-[6px]">
            <span>{t("max_loan")}</span>
            <strong className="font-sans text-white text-[15px] font-bold">
              {fmt(maxLoan)}
            </strong>
          </div>
          <div className="flex justify-between items-baseline text-[13.5px] text-[#C9C4B8] py-[6px]">
            <span>{t("cash_needed")}</span>
            <strong className="font-sans text-white text-[15px] font-bold">
              {fmt(cashNeeded)}
            </strong>
          </div>
        </div>
      )}

      {/* Rule Progress Display */}
      <div className="mt-[16px] relative z-10">
        <div className="font-sans text-[38px] font-bold text-white leading-none mb-[4px]">
          {hasValidInputs ? `${rulePct.toFixed(0)}%` : "—"}
        </div>
        <div className="text-[12.5px] text-[#C9C4B8] mb-[10px]">
          {t("ratio_label")}
        </div>
        <div className="h-[8px] bg-white/12 rounded-full overflow-hidden mb-[8px]">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: hasValidInputs ? `${barPct}%` : "0%",
              backgroundColor: barBg,
            }}
          />
        </div>
        <div
          className="text-[13px] font-semibold leading-[1.5]"
          style={{ color: verdictColor }}
        >
          {verdictText}
        </div>
      </div>
    </div>
  );
}
