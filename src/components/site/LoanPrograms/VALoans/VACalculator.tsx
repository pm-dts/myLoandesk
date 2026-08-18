// components/VaCalculator.tsx
"use client";

import { useState } from "react";

export default function VaCalculator() {
  const [price, setPrice] = useState<string>("");
  const [down, setDown] = useState<string>("0");
  const [rate, setRate] = useState<string>("6.4");
  const [useType, setUseType] = useState<"first" | "subsequent">("first");
  const [isExempt, setIsExempt] = useState<boolean>(false);

  const numPrice = parseFloat(price);
  const numDown = parseFloat(down);
  const numRate = parseFloat(rate);

  const isValid =
    !isNaN(numPrice) &&
    numPrice > 0 &&
    !isNaN(numDown) &&
    numDown >= 0 &&
    numDown < 100 &&
    !isNaN(numRate) &&
    numRate > 0;

  const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

  const monthlyPandI = (
    loanAmount: number,
    annualRatePct: number,
    termYears = 30,
  ) => {
    const monthlyRate = annualRatePct / 100 / 12;
    const numPayments = termYears * 12;
    if (monthlyRate === 0) return loanAmount / numPayments;
    return (
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    );
  };

  const getFeePercent = (
    downPct: number,
    subsequent: boolean,
    exempt: boolean,
  ) => {
    if (exempt) return 0;
    if (downPct >= 10) return 1.25;
    if (downPct >= 5) return 1.5;
    return subsequent ? 3.3 : 2.15;
  };

  const baseLoan = isValid ? numPrice * (1 - numDown / 100) : 0;
  const feePct = isValid
    ? getFeePercent(numDown, useType === "subsequent", isExempt)
    : 0;
  const feeAmt = isValid ? baseLoan * (feePct / 100) : 0;
  const totalLoan = isValid ? baseLoan + feeAmt : 0;
  const payment = isValid ? monthlyPandI(totalLoan, numRate, 30) : 0;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1C1C1C] p-[30px] text-white before:pointer-events-none before:absolute before:-right-[60px] before:-top-[60px] before:h-[200px] before:w-[200px] before:rounded-full before:bg-[radial-gradient(circle,rgba(217,114,44,0.35),transparent_70%)]">
      <div className="relative z-10 font-sans text-xs font-bold uppercase tracking-[0.08em] text-[#D9B896]">
        VA Funding Fee Calculator
      </div>
      <div className="relative z-10 mb-5 text-[13px] text-[#C9C4B8]">
        Estimate your funding fee and total loan amount.
      </div>

      <div className="relative z-10 mb-3.5">
        <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
          Home price
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
            placeholder="425,000"
            className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[30px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-3">
        <div className="mb-3.5">
          <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
            Down payment
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
              placeholder="0"
              className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[26px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
            />
          </div>
        </div>
        <div className="mb-3.5">
          <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
            Est. rate
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
              placeholder="6.4"
              className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[26px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mb-3.5">
        <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
          VA loan use
        </label>
        <select
          value={useType}
          onChange={(e) => setUseType(e.target.value as "first" | "subsequent")}
          className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] px-3.5 py-3 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 focus:border-[#D9722C] focus:bg-white/10"
        >
          <option value="first" className="bg-[#1C1C1C] text-white">
            First-time use
          </option>
          <option value="subsequent" className="bg-[#1C1C1C] text-white">
            Subsequent use
          </option>
        </select>
      </div>

      <div className="relative z-10 mb-4 flex cursor-pointer items-center gap-[9px] rounded-[10px] border border-white/15 bg-white/[0.06] p-[11px_14px]">
        <input
          type="checkbox"
          id="vaExemptCheck"
          checked={isExempt}
          onChange={(e) => setIsExempt(e.target.checked)}
          className="h-4 w-4 cursor-pointer accent-[#D9722C]"
        />
        <label
          htmlFor="vaExemptCheck"
          className="m-0 cursor-pointer text-[12.5px] text-[#E3E9F5]"
        >
          I receive VA disability compensation (funding fee exempt)
        </label>
      </div>

      {isValid && (
        <div className="relative z-10 mt-1.5 border-t border-white/15 pt-4 text-[13.5px] text-[#C9C4B8]">
          <div className="flex items-baseline justify-between py-1.5">
            <span>Base loan amount</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {fmt(baseLoan)}
            </strong>
          </div>
          <div className="flex items-baseline justify-between py-1.5">
            <span>VA funding fee ({feePct.toFixed(2)}%)</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {isExempt ? "Exempt — $0" : fmt(feeAmt)}
            </strong>
          </div>
          <div className="mt-1.5 flex items-baseline justify-between border-t border-white/15 pt-3">
            <span>Total loan amount</span>
            <strong className="font-sans text-[19px] font-bold text-[#F5C89A]">
              {fmt(totalLoan)}
            </strong>
          </div>
          <div className="flex items-baseline justify-between py-1.5">
            <span>Est. monthly P&amp;I</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {fmt(payment)}/mo
            </strong>
          </div>
        </div>
      )}
    </div>
  );
}
