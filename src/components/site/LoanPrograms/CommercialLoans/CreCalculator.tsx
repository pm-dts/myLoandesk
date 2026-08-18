"use client";

import { useState } from "react";

export default function CreCalculator() {
  const [price, setPrice] = useState<string>("");
  const [down, setDown] = useState<string>("15");
  const [rate, setRate] = useState<string>("8.25");
  const [term, setTerm] = useState<string>("25");

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

  const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

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

  const loanAmount = isValid ? numPrice * (1 - numDown / 100) : 0;
  const payment = isValid ? monthlyPandI(loanAmount, numRate, numTerm) : 0;
  const ltv = isValid ? 100 - numDown : 0;

  const getLtvNote = () => {
    if (!isValid) return "";
    if (numDown < 10) {
      return "Below typical minimums — even SBA-backed programs generally expect at least 10% down.";
    } else if (numDown < 20) {
      return "Within range for SBA-backed programs, which can go as low as 10% down.";
    } else {
      return "Within range for both SBA-backed and conventional commercial financing.";
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1C1C1C] p-[30px] text-white before:pointer-events-none before:absolute before:-right-[60px] before:-top-[60px] before:h-[200px] before:w-[200px] before:rounded-full before:bg-[radial-gradient(circle,rgba(217,114,44,0.35),transparent_70%)]">
      <div className="relative z-10 font-sans text-xs font-bold uppercase tracking-[0.08em] text-[#D9B896]">
        CRE Payment &amp; LTV Estimator
      </div>
      <div className="relative z-10 mb-5 text-[13px] text-[#C9C4B8]">
        See your estimated payment and loan-to-value.
      </div>

      <div className="relative z-10 mb-3.5">
        <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
          Property value / purchase price
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
            placeholder="1,200,000"
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
              placeholder="15"
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
              placeholder="8.25"
              className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[26px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mb-3.5">
        <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
          Amortization
        </label>
        <select
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] px-3.5 py-3 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 focus:border-[#D9722C] focus:bg-white/10"
        >
          <option value="25" className="bg-[#1C1C1C] text-white">
            25 years
          </option>
          <option value="20" className="bg-[#1C1C1C] text-white">
            20 years
          </option>
          <option value="10" className="bg-[#1C1C1C] text-white">
            10 years
          </option>
        </select>
      </div>

      {isValid && (
        <div className="relative z-10 mt-5 border-t border-white/15 pt-5 text-[13.5px] text-[#C9C4B8]">
          <div className="flex items-baseline justify-between py-1.5">
            <span>Loan amount</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {fmt(loanAmount)}
            </strong>
          </div>
          <div className="mt-1.5 flex items-baseline justify-between border-t border-white/15 pt-3">
            <span>Est. monthly payment</span>
            <strong className="font-sans text-[19px] font-bold text-[#F5C89A]">
              {fmt(payment)}/mo
            </strong>
          </div>
          <div className="flex items-baseline justify-between py-1.5">
            <span>Loan-to-value (LTV)</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {ltv.toFixed(0)}%
            </strong>
          </div>
        </div>
      )}

      {isValid && (
        <div className="relative z-10 mt-3 border-t border-white/15 pt-3 text-[12.5px] leading-relaxed text-[#C9C4B8]">
          {getLtvNote()}
        </div>
      )}
    </div>
  );
}
