"use client";

import React, { useState, useId } from "react";
import { useTranslations } from "next-intl";

interface FhaCalculatorProps {
  locale?: string;
}

export default function FhaCalculator({ locale = "en" }: FhaCalculatorProps) {
  const t = useTranslations("FHALoans.calculator");
  const numberLocale = locale === "es" ? "es-US" : "en-US";

  const [price, setPrice] = useState<string>("");
  const [creditTier, setCreditTier] = useState<string>("");

  const priceInputId = useId();
  const creditTierSelectId = useId();

  const numPrice = parseFloat(price);
  const numDownPct = parseFloat(creditTier);
  const isValid =
    !isNaN(numPrice) && numPrice > 0 && !isNaN(numDownPct) && numDownPct > 0;

  const downAmt = isValid ? numPrice * (numDownPct / 100) : 0;
  const baseLoan = isValid ? numPrice - downAmt : 0;
  const ufmip = isValid ? baseLoan * 0.0175 : 0;
  const totalLoan = isValid ? baseLoan + ufmip : 0;
  const monthlyMip = isValid ? (totalLoan * 0.0055) / 12 : 0;

  const fmt = (n: number) =>
    "$" +
    Math.round(n).toLocaleString(numberLocale, {
      maximumFractionDigits: 0,
    });

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1C1C1C] p-7 sm:p-[30px] text-white shadow-xl before:absolute before:-right-16 before:-top-16 before:h-52 before:w-52 before:rounded-full before:bg-[radial-gradient(circle,rgba(217,114,44,0.35),transparent_70%)]">
      <div className="relative z-10 font-sans text-xs font-bold uppercase tracking-wider text-[#D9B896]">
        {t("badge")}
      </div>
      <div className="relative z-10 mb-5 mt-1 text-[13px] text-[#C9C4B8]">
        {t("subheading")}
      </div>

      <div className="relative z-10 mb-3.5">
        <label
          htmlFor={priceInputId}
          className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]"
        >
          {t("price_label")}
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
            $
          </span>
          <input
            id={priceInputId}
            type="number"
            inputMode="numeric"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={t("price_placeholder")}
            className="w-full rounded-xl border border-white/20 bg-white/[0.07] py-3 pl-8 pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
          />
        </div>
      </div>

      <div className="relative z-10 mb-3.5">
        <label
          htmlFor={creditTierSelectId}
          className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]"
        >
          {t("credit_tier_label")}
        </label>
        <select
          id={creditTierSelectId}
          value={creditTier}
          onChange={(e) => setCreditTier(e.target.value)}
          className="w-full rounded-xl border border-white/20 bg-white/[0.07] px-3.5 py-3 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 focus:border-[#D9722C] focus:bg-white/10"
        >
          <option value="" className="bg-[#1C1C1C] text-white">
            {t("credit_tier_select")}
          </option>
          <option value="3.5" className="bg-[#1C1C1C] text-white">
            {t("tier_580_plus")}
          </option>
          <option value="10" className="bg-[#1C1C1C] text-white">
            {t("tier_500_579")}
          </option>
        </select>
      </div>

      {isValid && (
        <div className="relative z-10 mt-5 border-t border-white/15 pt-5 text-[13.5px] text-[#C9C4B8]">
          <div className="flex items-baseline justify-between py-1.5">
            <span>{t("down_payment_required")}</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {fmt(downAmt)}
            </strong>
          </div>
          <div className="flex items-baseline justify-between py-1.5">
            <span>{t("base_loan_amount")}</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {fmt(baseLoan)}
            </strong>
          </div>
          <div className="flex items-baseline justify-between py-1.5">
            <span>{t("ufmip_label")}</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {fmt(ufmip)}
            </strong>
          </div>
          <div className="mt-1.5 flex items-baseline justify-between border-t border-white/15 pt-3">
            <span>{t("total_loan_amount")}</span>
            <strong className="font-sans text-[19px] font-bold text-[#F5C89A]">
              {fmt(totalLoan)}
            </strong>
          </div>
          <div className="flex items-baseline justify-between py-1.5">
            <span>{t("monthly_mip")}</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {fmt(monthlyMip)}
              {t("per_month")}
            </strong>
          </div>
        </div>
      )}
    </div>
  );
}
