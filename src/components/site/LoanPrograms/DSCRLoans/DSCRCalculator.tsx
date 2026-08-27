"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface DscrCalculatorProps {
  locale?: string;
}

export default function DscrCalculator({ locale = "en" }: DscrCalculatorProps) {
  const t = useTranslations("DSCRLoans.calculator");
  const numberLocale = locale === "es" ? "es-US" : "en-US";

  const [rentInput, setRentInput] = useState<string>("");
  const [pitiMode, setPitiMode] = useState<"know" | "estimate">("know");

  // "Know" mode state
  const [pitiInput, setPitiInput] = useState<string>("");

  // "Estimate" mode states
  const [priceInput, setPriceInput] = useState<string>("");
  const [downInput, setDownInput] = useState<string>("");
  const [rateInput, setRateInput] = useState<string>("");
  const [taxInsInput, setTaxInsInput] = useState<string>("");

  // ---- Helper Calculations ----
  const rent = parseFloat(rentInput.replace(/[^0-9.]/g, "")) || 0;
  let computedPiti = 0;
  let estimatedPI = 0;
  const taxIns = parseFloat(taxInsInput.replace(/[^0-9.]/g, "")) || 0;

  if (pitiMode === "know") {
    computedPiti = parseFloat(pitiInput.replace(/[^0-9.]/g, "")) || 0;
  } else {
    const price = parseFloat(priceInput.replace(/[^0-9.]/g, "")) || 0;
    const downPct = parseFloat(downInput.replace(/[^0-9.]/g, "")) || 0;
    const rate = parseFloat(rateInput.replace(/[^0-9.]/g, "")) || 0;

    if (price > 0 && rate > 0) {
      const loanAmount = price * (1 - downPct / 100);
      const monthlyRate = rate / 100 / 12;
      const numPayments = 30 * 12;
      estimatedPI =
        monthlyRate === 0
          ? loanAmount / numPayments
          : (loanAmount *
              (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
            (Math.pow(1 + monthlyRate, numPayments) - 1);

      computedPiti = estimatedPI + taxIns;
    }
  }

  const ratio = rent > 0 && computedPiti > 0 ? rent / computedPiti : null;

  // Determine bar fill & status text
  let barWidth = "0%";
  let barBg = "#D9722C";
  let verdictColor = "#C9C4B8";
  let verdictText = t("verdict_empty");

  if (ratio !== null) {
    const pct = Math.min((ratio / 1.5) * 100, 100);
    barWidth = `${pct}%`;

    if (ratio >= 1.2) {
      barBg = "#4CA85C";
      verdictColor = "#8FD69B";
      verdictText = t("verdict_strong");
    } else if (ratio >= 1.0) {
      barBg = "#D9722C";
      verdictColor = "#EFB988";
      verdictText = t("verdict_qualifies");
    } else {
      barBg = "#C4453A";
      verdictColor = "#F0A69E";
      verdictText = t("verdict_below");
    }
  }

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
      <div className="text-[13px] text-[#C9C4B8] mb-[22px] relative z-10">
        {t("subheading")}
      </div>

      <div className="mb-[16px] relative z-10">
        <label className="block text-[12.5px] text-[#C9C4B8] mb-[6px] font-semibold">
          {t("rent_label")}
        </label>
        <div className="relative">
          <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8F8A7C] font-sans text-[15px]">
            $
          </span>
          <input
            type="number"
            value={rentInput}
            onChange={(e) => setRentInput(e.target.value)}
            placeholder={t("rent_placeholder")}
            inputMode="numeric"
            className="w-full bg-white/[0.07] border border-white/20 rounded-[10px] py-[12px] pr-[14px] pl-[30px] text-white font-sans text-[15px] font-semibold outline-none focus:border-[#D9722C] focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      <div className="flex bg-white/[0.07] border border-white/20 rounded-[10px] p-[3px] mb-[16px] relative z-10">
        <button
          type="button"
          onClick={() => setPitiMode("know")}
          className={`flex-1 border-0 font-sans font-bold text-[12.5px] py-[9px] px-[6px] rounded-[8px] cursor-pointer transition-all ${
            pitiMode === "know"
              ? "bg-[#D9722C] text-white"
              : "bg-transparent text-[#C9C4B8] hover:text-white"
          }`}
        >
          {t("mode_know")}
        </button>
        <button
          type="button"
          onClick={() => setPitiMode("estimate")}
          className={`flex-1 border-0 font-sans font-bold text-[12.5px] py-[9px] px-[6px] rounded-[8px] cursor-pointer transition-all ${
            pitiMode === "estimate"
              ? "bg-[#D9722C] text-white"
              : "bg-transparent text-[#C9C4B8] hover:text-white"
          }`}
        >
          {t("mode_estimate")}
        </button>
      </div>

      {pitiMode === "know" ? (
        <div>
          <div className="mb-[16px] relative z-10">
            <label className="block text-[12.5px] text-[#C9C4B8] mb-[6px] font-semibold">
              {t("piti_label")}
            </label>
            <div className="relative">
              <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8F8A7C] font-sans text-[15px]">
                $
              </span>
              <input
                type="number"
                value={pitiInput}
                onChange={(e) => setPitiInput(e.target.value)}
                placeholder={t("piti_placeholder")}
                inputMode="numeric"
                className="w-full bg-white/[0.07] border border-white/20 rounded-[10px] py-[12px] pr-[14px] pl-[30px] text-white font-sans text-[15px] font-semibold outline-none focus:border-[#D9722C] focus:bg-white/10 transition-all"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-[12px]">
          <div className="relative z-10">
            <label className="block text-[12.5px] text-[#C9C4B8] mb-[6px] font-semibold">
              {t("price_label")}
            </label>
            <div className="relative">
              <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8F8A7C] font-sans text-[15px]">
                $
              </span>
              <input
                type="number"
                value={priceInput}
                onChange={(e) => setPriceInput(e.target.value)}
                placeholder={t("price_placeholder")}
                inputMode="numeric"
                className="w-full bg-white/[0.07] border border-white/20 rounded-[10px] py-[12px] pr-[14px] pl-[30px] text-white font-sans text-[15px] font-semibold outline-none focus:border-[#D9722C] focus:bg-white/10 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[12px]">
            <div className="relative z-10">
              <label className="block text-[12.5px] text-[#C9C4B8] mb-[6px] font-semibold">
                {t("down_label")}
              </label>
              <div className="relative">
                <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8F8A7C] font-sans text-[15px]">
                  %
                </span>
                <input
                  type="number"
                  value={downInput}
                  onChange={(e) => setDownInput(e.target.value)}
                  placeholder={t("down_placeholder")}
                  inputMode="numeric"
                  className="w-full bg-white/[0.07] border border-white/20 rounded-[10px] py-[12px] pr-[14px] pl-[26px] text-white font-sans text-[15px] font-semibold outline-none focus:border-[#D9722C] focus:bg-white/10 transition-all"
                />
              </div>
            </div>
            <div className="relative z-10">
              <label className="block text-[12.5px] text-[#C9C4B8] mb-[6px] font-semibold">
                {t("rate_label")}
              </label>
              <div className="relative">
                <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8F8A7C] font-sans text-[15px]">
                  %
                </span>
                <input
                  type="number"
                  step="0.1"
                  value={rateInput}
                  onChange={(e) => setRateInput(e.target.value)}
                  placeholder={t("rate_placeholder")}
                  inputMode="decimal"
                  className="w-full bg-white/[0.07] border border-white/20 rounded-[10px] py-[12px] pr-[14px] pl-[26px] text-white font-sans text-[15px] font-semibold outline-none focus:border-[#D9722C] focus:bg-white/10 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <label className="block text-[12.5px] text-[#C9C4B8] mb-[6px] font-semibold">
              {t("tax_ins_label")}
            </label>
            <div className="relative">
              <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8F8A7C] font-sans text-[15px]">
                $
              </span>
              <input
                type="number"
                value={taxInsInput}
                onChange={(e) => setTaxInsInput(e.target.value)}
                placeholder={t("tax_ins_placeholder")}
                inputMode="numeric"
                className="w-full bg-white/[0.07] border border-white/20 rounded-[10px] py-[12px] pr-[14px] pl-[30px] text-white font-sans text-[15px] font-semibold outline-none focus:border-[#D9722C] focus:bg-white/10 transition-all"
              />
            </div>
          </div>

          <div className="font-sans text-[13px] text-[#C9C4B8] bg-white/[0.06] border border-dashed border-white/20 rounded-[10px] p-[12px_14px] mt-[6px] leading-[1.6]">
            {computedPiti > 0 ? (
              <>
                {t("breakdown_pi")}{" "}
                <strong className="text-white">
                  $
                  {estimatedPI.toLocaleString(numberLocale, {
                    maximumFractionDigits: 0,
                  })}
                </strong>
                /mo
                <br />
                {t("breakdown_taxes")}{" "}
                <strong className="text-white">
                  $
                  {taxIns.toLocaleString(numberLocale, {
                    maximumFractionDigits: 0,
                  })}
                </strong>
                /mo
                <br />
                {t("breakdown_total")}{" "}
                <strong className="text-white">
                  $
                  {computedPiti.toLocaleString(numberLocale, {
                    maximumFractionDigits: 0,
                  })}
                </strong>
                /mo <span className="opacity-70">{t("breakdown_term")}</span>
              </>
            ) : (
              t("breakdown_empty")
            )}
          </div>
        </div>
      )}

      <div className="mt-[24px] pt-[22px] border-t border-white/[0.14] relative z-10">
        <div className="font-sans text-[48px] font-bold leading-none mb-[6px]">
          {ratio !== null ? ratio.toFixed(2) : "—"}
        </div>
        <div className="text-[13px] text-[#C9C4B8] mb-[14px]">
          {t("ratio_title")}
        </div>
        <div className="h-[8px] bg-white/[0.12] rounded-full overflow-hidden mb-[10px]">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: barWidth,
              backgroundColor: barBg,
            }}
          />
        </div>
        <div
          className="text-[13.5px] font-semibold"
          style={{ color: verdictColor }}
        >
          {verdictText}
        </div>
      </div>
    </div>
  );
}
