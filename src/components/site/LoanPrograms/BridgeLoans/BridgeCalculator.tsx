"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface BridgeCalculatorProps {
  locale?: string;
}

export default function BridgeCalculator({
  locale = "en",
}: BridgeCalculatorProps) {
  const t = useTranslations("BridgeLoans.calculator");
  const numberLocale = locale === "es" ? "es-US" : "en-US";

  const [loanType, setLoanType] = useState<"residential" | "commercial">(
    "residential",
  );
  const [propertyValue, setPropertyValue] = useState<string>("");
  const [ltv, setLtv] = useState<string>("75");
  const [rate, setRate] = useState<string>("9.5");
  const [termMonths, setTermMonths] = useState<string>("12");

  const numValue = parseFloat(propertyValue);
  const numLtv = parseFloat(ltv);
  const numRate = parseFloat(rate);

  const isValid =
    !isNaN(numValue) &&
    numValue > 0 &&
    !isNaN(numLtv) &&
    numLtv > 0 &&
    numLtv <= 100 &&
    !isNaN(numRate) &&
    numRate > 0;

  const fmt = (n: number) =>
    "$" +
    Math.round(n).toLocaleString(numberLocale, {
      maximumFractionDigits: 0,
    });

  const loanAmount = isValid ? numValue * (numLtv / 100) : 0;
  const monthlyInterestOnly = isValid ? (loanAmount * (numRate / 100)) / 12 : 0;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1C1C1C] p-[30px] text-white before:pointer-events-none before:absolute before:-right-[60px] before:-top-[60px] before:h-[200px] before:w-[200px] before:rounded-full before:bg-[radial-gradient(circle,rgba(217,114,44,0.35),transparent_70%)]">
      <div className="relative z-10 font-sans text-xs font-bold uppercase tracking-[0.08em] text-[#D9B896]">
        {t("badge")}
      </div>
      <div className="relative z-10 mb-5 text-[13px] text-[#C9C4B8]">
        {t("subheading")}
      </div>

      <div className="relative z-10 mb-5 flex rounded-[10px] border border-white/15 bg-white/[0.07] p-[3px]">
        <button
          type="button"
          onClick={() => {
            setLoanType("residential");
            setLtv("75");
            setTermMonths("12");
          }}
          className={`flex-1 rounded-lg px-2 py-[10px] text-center font-sans text-[12.5px] font-bold transition-colors ${
            loanType === "residential"
              ? "bg-[#D9722C] text-white"
              : "bg-transparent text-[#C9C4B8] hover:text-white"
          }`}
        >
          {t("residential_tab")}
        </button>
        <button
          type="button"
          onClick={() => {
            setLoanType("commercial");
            setLtv("70");
            setTermMonths("18");
          }}
          className={`flex-1 rounded-lg px-2 py-[10px] text-center font-sans text-[12.5px] font-bold transition-colors ${
            loanType === "commercial"
              ? "bg-[#D9722C] text-white"
              : "bg-transparent text-[#C9C4B8] hover:text-white"
          }`}
        >
          {t("commercial_tab")}
        </button>
      </div>

      <div className="relative z-10 mb-3.5">
        <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
          {loanType === "residential"
            ? t("property_value_label_res")
            : t("property_value_label_comm")}
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
            $
          </span>
          <input
            type="number"
            inputMode="numeric"
            value={propertyValue}
            onChange={(e) => setPropertyValue(e.target.value)}
            placeholder={loanType === "residential" ? "850000" : "2500000"}
            className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[30px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-3">
        <div className="mb-3.5">
          <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
            {t("ltv_label")}
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
              %
            </span>
            <input
              type="number"
              inputMode="numeric"
              value={ltv}
              onChange={(e) => setLtv(e.target.value)}
              placeholder="75"
              className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[26px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
            />
          </div>
        </div>
        <div className="mb-3.5">
          <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
            {t("rate_label")}
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
              %
            </span>
            <input
              type="number"
              step="0.1"
              inputMode="decimal"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="9.5"
              className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[26px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mb-3.5">
        <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
          {t("term_label")}
        </label>
        <select
          value={termMonths}
          onChange={(e) => setTermMonths(e.target.value)}
          className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] px-3.5 py-3 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 focus:border-[#D9722C] focus:bg-white/10"
        >
          <option value="6" className="bg-[#1C1C1C] text-white">
            6 {t("month_suffix")}
          </option>
          <option value="12" className="bg-[#1C1C1C] text-white">
            12 {t("month_suffix")}
          </option>
          <option value="18" className="bg-[#1C1C1C] text-white">
            18 {t("month_suffix")}
          </option>
          <option value="24" className="bg-[#1C1C1C] text-white">
            24 {t("month_suffix")}
          </option>
        </select>
      </div>

      {isValid && (
        <div className="relative z-10 mt-5 border-t border-white/15 pt-5 text-[13.5px] text-[#C9C4B8]">
          <div className="flex items-baseline justify-between py-1.5">
            <span>{t("est_loan_amount")}</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {fmt(loanAmount)}
            </strong>
          </div>
          <div className="mt-1.5 flex items-baseline justify-between border-t border-white/15 pt-3">
            <span>{t("est_monthly_payment")}</span>
            <strong className="font-sans text-[19px] font-bold text-[#F5C89A]">
              {fmt(monthlyInterestOnly)}
              {t("per_month")}
            </strong>
          </div>
          <div className="flex items-baseline justify-between py-1.5 text-xs text-[#8F8A7C]">
            <span>{t("repayment_label")}</span>
            <span className="font-medium text-[#C9C4B8]">
              {t("repayment_value")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
