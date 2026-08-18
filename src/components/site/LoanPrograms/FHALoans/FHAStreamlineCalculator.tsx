"use client";

import { useState } from "react";

export default function StreamlineCalculator() {
  const [balance, setBalance] = useState<string>("");
  const [currentRate, setCurrentRate] = useState<string>("");
  const [newRate, setNewRate] = useState<string>("");

  const numBalance = parseFloat(balance);
  const numCurrentRate = parseFloat(currentRate);
  const numNewRate = parseFloat(newRate);

  const isCalculable =
    !isNaN(numBalance) &&
    numBalance > 0 &&
    !isNaN(numCurrentRate) &&
    numCurrentRate > 0 &&
    !isNaN(numNewRate) &&
    numNewRate > 0;

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

  let currentPmt = 0;
  let newPmt = 0;
  let savings = 0;
  let pctReduction = 0;

  if (isCalculable) {
    currentPmt = monthlyPandI(numBalance, numCurrentRate, 30);
    newPmt = monthlyPandI(numBalance, numNewRate, 30);
    savings = currentPmt - newPmt;
    pctReduction = (savings / currentPmt) * 100;
  }

  const getBarColor = () => {
    if (!isCalculable) return "transparent";
    if (savings <= 0) return "#C4453A";
    if (pctReduction >= 5) return "#4CA85C";
    return "#D9722C";
  };

  const getBarWidth = () => {
    if (!isCalculable) return "0%";
    if (savings <= 0) return "100%";
    return `${Math.min((pctReduction / 15) * 100, 100)}%`;
  };

  const getVerdictStyle = () => {
    if (!isCalculable)
      return { color: "#C9C4B8", text: "Enter your numbers to calculate" };
    if (savings <= 0) {
      return {
        color: "#F0A69E",
        text: "This rate doesn't lower your payment — may not meet FHA's net tangible benefit test",
      };
    }
    if (pctReduction >= 5) {
      return {
        color: "#8FD69B",
        text: "Likely meets a typical net tangible benefit threshold",
      };
    }
    return {
      color: "#EFB988",
      text: "Modest reduction — talk to a loan officer about whether this qualifies",
    };
  };

  const verdict = getVerdictStyle();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1C1C1C] p-[30px] text-white before:pointer-events-none before:absolute before:-right-[60px] before:-top-[60px] before:h-[200px] before:w-[200px] before:rounded-full before:bg-[radial-gradient(circle,rgba(217,114,44,0.35),transparent_70%)]">
      <div className="relative z-10 font-sans text-xs font-bold uppercase tracking-[0.08em] text-[#D9B896]">
        Streamline Savings Calculator
      </div>
      <div className="relative z-10 mb-5 text-[13px] text-[#C9C4B8]">
        See your estimated new payment and monthly savings.
      </div>

      <div className="relative z-10 mb-3.5">
        <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
          Current loan balance
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
            $
          </span>
          <input
            type="number"
            inputMode="numeric"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            placeholder="310,000"
            className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[30px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-3">
        <div className="mb-3.5">
          <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
            Current rate
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
              %
            </span>
            <input
              type="number"
              step="0.1"
              inputMode="decimal"
              value={currentRate}
              onChange={(e) => setCurrentRate(e.target.value)}
              placeholder="7.25"
              className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[26px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
            />
          </div>
        </div>
        <div className="mb-3.5">
          <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
            New est. rate
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
              %
            </span>
            <input
              type="number"
              step="0.1"
              inputMode="decimal"
              value={newRate}
              onChange={(e) => setNewRate(e.target.value)}
              placeholder="6.25"
              className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[26px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
            />
          </div>
        </div>
      </div>

      {isCalculable && (
        <div className="relative z-10 mt-5 border-t border-white/15 pt-5 text-[13.5px] text-[#C9C4B8]">
          <div className="flex items-baseline justify-between py-1.5">
            <span>Current est. monthly P&amp;I</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {fmt(currentPmt)}/mo
            </strong>
          </div>
          <div className="flex items-baseline justify-between py-1.5">
            <span>New est. monthly P&amp;I</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {fmt(newPmt)}/mo
            </strong>
          </div>
        </div>
      )}

      <div className="mt-4">
        <div className="font-sans text-[38px] font-bold leading-none text-white">
          {!isCalculable
            ? "—"
            : savings <= 0
              ? `${fmt(Math.abs(savings))}/mo`
              : `${fmt(savings)}/mo`}
        </div>
        <div className="mb-2.5 text-[12.5px] text-[#C9C4B8]">
          {!isCalculable
            ? "Estimated monthly savings"
            : savings <= 0
              ? "Higher monthly payment"
              : `${pctReduction.toFixed(1)}% payment reduction`}
        </div>
        <div className="mb-2 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: getBarWidth(), backgroundColor: getBarColor() }}
          />
        </div>
        <div
          className="text-[13px] font-semibold leading-relaxed"
          style={{ color: verdict.color }}
        >
          {verdict.text}
        </div>
      </div>
    </div>
  );
}
