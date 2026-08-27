"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface SbaCalculatorProps {
  locale?: string;
}

export default function SbaCalculator({ locale = "en" }: SbaCalculatorProps) {
  const t = useTranslations("SBALoans.calculator");
  const numberLocale = locale === "es" ? "es-US" : "en-US";

  const [amount, setAmount] = useState<string>("");
  const [prime, setPrime] = useState<string>("7.5");
  const [margin, setMargin] = useState<string>("2.75");
  const [term, setTerm] = useState<string>("10");

  const numAmount = parseFloat(amount);
  const numPrime = parseFloat(prime);
  const numMargin = parseFloat(margin);
  const numTerm = parseInt(term, 10);

  const isValid =
    !isNaN(numAmount) &&
    numAmount > 0 &&
    !isNaN(numPrime) &&
    numPrime > 0 &&
    !isNaN(numMargin) &&
    numMargin >= 0;

  const fmt = (n: number) =>
    "$" +
    Math.round(n).toLocaleString(numberLocale, {
      maximumFractionDigits: 0,
    });

  const monthlyPandI = (
    loanAmount: number,
    annualRatePct: number,
    termYears: number,
  ) => {
    const monthlyRate = annualRatePct / 100 / 12;
    const numPayments = termYears * 12;
    if (monthlyRate === 0) return loanAmount / numPayments;
    return (
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    );
  };

  const rate = isValid ? numPrime + numMargin : 0;
  const payment = isValid ? monthlyPandI(numAmount, rate, numTerm) : 0;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1C1C1C] p-[30px] text-white before:pointer-events-none before:absolute before:-right-[60px] before:-top-[60px] before:h-[200px] before:w-[200px] before:rounded-full before:bg-[radial-gradient(circle,rgba(217,114,44,0.35),transparent_70%)]">
      <div className="relative z-10 font-sans text-xs font-bold uppercase tracking-[0.08em] text-[#D9B896]">
        {t("badge")}
      </div>
      <div className="relative z-10 mb-5 text-[13px] text-[#C9C4B8]">
        {t("subheading")}
      </div>

      <div className="relative z-10 mb-3.5">
        <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
          {t("amount_label")}
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
            $
          </span>
          <input
            type="number"
            inputMode="numeric"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder={t("amount_placeholder")}
            className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[30px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-3">
        <div className="mb-3.5">
          <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
            {t("prime_label")}
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
              %
            </span>
            <input
              type="number"
              step="0.1"
              inputMode="decimal"
              value={prime}
              onChange={(e) => setPrime(e.target.value)}
              placeholder={t("prime_placeholder")}
              className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[26px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
            />
          </div>
        </div>
        <div className="mb-3.5">
          <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
            {t("margin_label")}
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
              %
            </span>
            <input
              type="number"
              step="0.1"
              inputMode="decimal"
              value={margin}
              onChange={(e) => setMargin(e.target.value)}
              placeholder={t("margin_placeholder")}
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
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] px-3.5 py-3 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 focus:border-[#D9722C] focus:bg-white/10"
        >
          <option value="10" className="bg-[#1C1C1C] text-white">
            {t("term_10")}
          </option>
          <option value="7" className="bg-[#1C1C1C] text-white">
            {t("term_7")}
          </option>
          <option value="5" className="bg-[#1C1C1C] text-white">
            {t("term_5")}
          </option>
        </select>
      </div>

      {isValid && (
        <div className="relative z-10 mt-5 border-t border-white/15 pt-5 text-[13.5px] text-[#C9C4B8]">
          <div className="flex items-baseline justify-between py-1.5">
            <span>{t("rate_label")}</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {rate.toFixed(2)}%
            </strong>
          </div>
          <div className="mt-1.5 flex items-baseline justify-between border-t border-white/15 pt-3">
            <span>{t("monthly_payment_label")}</span>
            <strong className="font-sans text-[19px] font-bold text-[#F5C89A]">
              {fmt(payment)}
              {t("per_month")}
            </strong>
          </div>
        </div>
      )}
    </div>
  );
}
