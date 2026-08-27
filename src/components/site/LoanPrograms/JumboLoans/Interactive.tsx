"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface InteractiveProps {
  locale?: string;
}

export function JumboCalculator({ locale = "en" }: InteractiveProps) {
  const t = useTranslations("JumboLoans.interactive.calculator");
  const numberLocale = locale === "es" ? "es-US" : "en-US";

  const [price, setPrice] = useState<string>("");
  const [down, setDown] = useState<string>("30");
  const [rate, setRate] = useState<string>("6.9");
  const [term, setTerm] = useState<string>("30");

  const numPrice = parseFloat(price);
  const numDown = parseFloat(down);
  const numRate = parseFloat(rate);
  const numTerm = parseInt(term, 10);

  const isValid =
    !isNaN(numPrice) &&
    numPrice > 0 &&
    !isNaN(numDown) &&
    numDown >= 0 &&
    numDown < 100 &&
    !isNaN(numRate) &&
    numRate > 0;

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

  const reserveGuidance = (loanAmount: number) => {
    if (loanAmount < 1500000) return t("reserves_scale.under_1_5m");
    if (loanAmount < 5000000) return t("reserves_scale.under_5m");
    if (loanAmount < 15000000) return t("reserves_scale.under_15m");
    return t("reserves_scale.over_15m");
  };

  const loanAmount = isValid ? numPrice * (1 - numDown / 100) : 0;
  const payment = isValid ? monthlyPandI(loanAmount, numRate, numTerm) : 0;
  const reserves = isValid ? reserveGuidance(loanAmount) : "";

  let tierLabel = "";
  let tierColor = "";
  if (isValid) {
    if (loanAmount <= 832750) {
      tierLabel = t("tier_conforming");
      tierColor = "#8F8A7C";
    } else if (loanAmount < 2500000) {
      tierLabel = t("tier_jumbo");
      tierColor = "#D9722C";
    } else {
      tierLabel = t("tier_super_jumbo");
      tierColor = "#F5C89A";
    }
  }

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
          {t("purchase_label")}
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
            $
          </span>
          <input
            type="number"
            inputMode="numeric"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={t("purchase_placeholder")}
            className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[30px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-3">
        <div className="mb-3.5">
          <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
            {t("down_label")}
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
              %
            </span>
            <input
              type="number"
              inputMode="numeric"
              value={down}
              onChange={(e) => setDown(e.target.value)}
              placeholder={t("down_placeholder")}
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
              placeholder={t("rate_placeholder")}
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
          <option value="30" className="bg-[#1C1C1C] text-white">
            {t("term_30_fixed")}
          </option>
          <option value="15" className="bg-[#1C1C1C] text-white">
            {t("term_15_fixed")}
          </option>
        </select>
      </div>

      {isValid && (
        <div className="relative z-10 mt-5 border-t border-white/15 pt-5 text-[13.5px] text-[#C9C4B8]">
          <div className="flex items-baseline justify-between py-1.5">
            <span>{t("loan_amount_label")}</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {fmt(loanAmount)}
            </strong>
          </div>
          <div className="mt-1.5 flex items-baseline justify-between border-t border-white/15 pt-3">
            <span>{t("monthly_pi_label")}</span>
            <strong className="font-sans text-[19px] font-bold text-[#F5C89A]">
              {fmt(payment)}
              {t("per_month")}
            </strong>
          </div>
          <div className="flex items-baseline justify-between py-1.5">
            <span>{t("suggested_reserves_label")}</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {reserves}
            </strong>
          </div>
        </div>
      )}

      {isValid && tierLabel && (
        <div className="mt-2.5">
          <span
            className="inline-block rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-sans text-[11.5px] font-bold"
            style={{ color: tierColor }}
          >
            {tierLabel}
          </span>
        </div>
      )}
    </div>
  );
}

export function JumboPathSelector({}: InteractiveProps) {
  const t = useTranslations("JumboLoans.interactive.path_selector");
  const [activePath, setActivePath] = useState<string>("full");

  const paths = [
    { id: "full", label: t("tabs.full") },
    { id: "bank", label: t("tabs.bank") },
    { id: "asset", label: t("tabs.asset") },
    { id: "foreign", label: t("tabs.foreign") },
    { id: "dscr", label: t("tabs.dscr") },
  ];

  return (
    <div>
      <div className="mb-[22px] mt-[18px] flex flex-wrap gap-1.5">
        {paths.map((path) => (
          <button
            key={path.id}
            type="button"
            onClick={() => setActivePath(path.id)}
            className={`rounded-full border px-[15px] py-[9px] font-sans text-[12.5px] font-bold transition-colors ${
              activePath === path.id
                ? "border-[#1C1C1C] bg-[#1C1C1C] text-white"
                : "border-[#E6E0D3] bg-white text-[#1C1C1C] hover:border-[#D9722C] hover:text-[#B85A1C]"
            }`}
          >
            {path.label}
          </button>
        ))}
      </div>

      {activePath === "full" && (
        <div className="rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-6 sm:p-[26px]">
          <span className="mb-2 block font-sans text-[11.5px] font-bold uppercase text-[#B85A1C]">
            {t("full.badge")}
          </span>
          <h3 className="mb-2.5 font-serif text-[19px] font-semibold text-[#1C1C1C]">
            {t("full.title")}
          </h3>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            {t("full.desc")}
          </p>
          <ul className="m-0 list-none p-0">
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("full.bullet1")}
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("full.bullet2")}
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("full.bullet3")}
            </li>
          </ul>
        </div>
      )}

      {activePath === "bank" && (
        <div className="rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-6 sm:p-[26px]">
          <span className="mb-2 block font-sans text-[11.5px] font-bold uppercase text-[#B85A1C]">
            {t("bank.badge")}
          </span>
          <h3 className="mb-2.5 font-serif text-[19px] font-semibold text-[#1C1C1C]">
            {t("bank.title")}
          </h3>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            {t("bank.desc")}
          </p>
          <ul className="m-0 list-none p-0">
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("bank.bullet1")}
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("bank.bullet2")}
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("bank.bullet3")}
            </li>
          </ul>
        </div>
      )}

      {activePath === "asset" && (
        <div className="rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-6 sm:p-[26px]">
          <span className="mb-2 block font-sans text-[11.5px] font-bold uppercase text-[#B85A1C]">
            {t("asset.badge")}
          </span>
          <h3 className="mb-2.5 font-serif text-[19px] font-semibold text-[#1C1C1C]">
            {t("asset.title")}
          </h3>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            {t("asset.desc")}
          </p>
          <ul className="m-0 list-none p-0">
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("asset.bullet1")}
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("asset.bullet2")}
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("asset.bullet3")}
            </li>
          </ul>
        </div>
      )}

      {activePath === "foreign" && (
        <div className="rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-6 sm:p-[26px]">
          <span className="mb-2 block font-sans text-[11.5px] font-bold uppercase text-[#B85A1C]">
            {t("foreign.badge")}
          </span>
          <h3 className="mb-2.5 font-serif text-[19px] font-semibold text-[#1C1C1C]">
            {t("foreign.title")}
          </h3>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            {t("foreign.desc")}
          </p>
          <ul className="m-0 list-none p-0">
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("foreign.bullet1")}
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("foreign.bullet2")}
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("foreign.bullet3")}
            </li>
          </ul>
        </div>
      )}

      {activePath === "dscr" && (
        <div className="rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-6 sm:p-[26px]">
          <span className="mb-2 block font-sans text-[11.5px] font-bold uppercase text-[#B85A1C]">
            {t("dscr.badge")}
          </span>
          <h3 className="mb-2.5 font-serif text-[19px] font-semibold text-[#1C1C1C]">
            {t("dscr.title")}
          </h3>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            {t("dscr.desc")}
          </p>
          <ul className="m-0 list-none p-0">
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("dscr.bullet1")}
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("dscr.bullet2")}
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              {t("dscr.bullet3")}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
