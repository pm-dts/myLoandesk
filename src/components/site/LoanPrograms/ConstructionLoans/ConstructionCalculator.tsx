"use client";

import { useState } from "react";

export default function ConstructionCalculator() {
  const [land, setLand] = useState<string>("");
  const [build, setBuild] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const landNum = parseFloat(land.replace(/[^0-9.]/g, ""));
  const buildNum = parseFloat(build.replace(/[^0-9.]/g, "")) || 0;
  const valueNum = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;

  const isLandValid = !isNaN(landNum);
  const hasValidInputs = isLandValid && buildNum > 0 && valueNum > 0;

  const totalCost = (isLandValid ? landNum : 0) + buildNum;
  const maxLoanByCost = totalCost * 0.8;
  const maxLoanByValue = valueNum * 0.75;
  const maxLoan = Math.min(maxLoanByCost, maxLoanByValue);
  const downNeeded = Math.max(totalCost - maxLoan, 0);

  const ltcPct = totalCost > 0 ? (maxLoan / totalCost) * 100 : 0;

  let barBg = "#C9C4B8";
  let verdictColor = "#C9C4B8";
  let verdictText = "Enter your numbers to run the estimate";

  if (hasValidInputs) {
    if (ltcPct <= 75) {
      barBg = "#4CA85C";
      verdictColor = "#8FD69B";
      verdictText = "Comfortably within typical construction lending limits";
    } else if (ltcPct <= 82) {
      barBg = "#D9722C";
      verdictColor = "#EFB988";
      verdictText =
        "Near typical limits — down payment or land equity will matter";
    } else {
      barBg = "#C4453A";
      verdictColor = "#F0A69E";
      verdictText =
        "Above typical limits — talk to a loan officer about your options";
    }
  }

  const fmt = (n: number) => "$" + Math.round(n).toLocaleString();

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
        Construction Loan Calculator
      </div>
      <div className="text-[13px] text-[#C9C4B8] mb-[20px] relative z-10">
        Estimate your loan amount and build-phase payment.
      </div>

      {/* Land / Lot Cost Input */}
      <div className="mb-[14px] relative z-10">
        <label className="block text-[12.5px] text-[#C9C4B8] mb-[6px] font-semibold">
          Land / lot cost (enter $0 if you already own it free and clear)
        </label>
        <div className="relative">
          <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8F8A7C] font-sans text-[15px]">
            $
          </span>
          <input
            type="number"
            value={land}
            onChange={(e) => setLand(e.target.value)}
            placeholder="80,000"
            inputMode="numeric"
            className="w-full bg-white/[0.07] border border-white/20 rounded-[10px] py-[12px] pr-[14px] pl-[30px] text-white font-sans text-[15px] font-semibold outline-none focus:border-[#D9722C] focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      {/* Construction / Build Budget Input */}
      <div className="mb-[14px] relative z-10">
        <label className="block text-[12.5px] text-[#C9C4B8] mb-[6px] font-semibold">
          Construction / build budget
        </label>
        <div className="relative">
          <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8F8A7C] font-sans text-[15px]">
            $
          </span>
          <input
            type="number"
            value={build}
            onChange={(e) => setBuild(e.target.value)}
            placeholder="420,000"
            inputMode="numeric"
            className="w-full bg-white/[0.07] border border-white/20 rounded-[10px] py-[12px] pr-[14px] pl-[30px] text-white font-sans text-[15px] font-semibold outline-none focus:border-[#D9722C] focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      {/* Estimated Completed Value Input */}
      <div className="mb-[14px] relative z-10">
        <label className="block text-[12.5px] text-[#C9C4B8] mb-[6px] font-semibold">
          Est. completed value
        </label>
        <div className="relative">
          <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8F8A7C] font-sans text-[15px]">
            $
          </span>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="620,000"
            inputMode="numeric"
            className="w-full bg-white/[0.07] border border-white/20 rounded-[10px] py-[12px] pr-[14px] pl-[30px] text-white font-sans text-[15px] font-semibold outline-none focus:border-[#D9722C] focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      {/* Calculations Summary */}
      {hasValidInputs && (
        <div className="mt-[20px] pt-[20px] border-t border-white/15 relative z-10">
          <div className="flex justify-between items-baseline text-[13.5px] text-[#C9C4B8] py-[6px]">
            <span>Total project cost</span>
            <strong className="font-sans text-white text-[15px] font-bold">
              {fmt(totalCost)}
            </strong>
          </div>
          <div className="flex justify-between items-baseline text-[13.5px] text-[#C9C4B8] py-[6px]">
            <span>Est. max loan amount</span>
            <strong className="font-sans text-white text-[15px] font-bold">
              {fmt(maxLoan)}
            </strong>
          </div>
          <div className="flex justify-between items-baseline text-[13.5px] text-[#C9C4B8] py-[6px]">
            <span>Est. down payment needed</span>
            <strong className="font-sans text-white text-[15px] font-bold">
              {fmt(downNeeded)}
            </strong>
          </div>
        </div>
      )}

      {/* Ratio Progress Display */}
      <div className="mt-[16px] relative z-10">
        <div className="font-sans text-[38px] font-bold text-white leading-none mb-[4px]">
          {hasValidInputs ? `${ltcPct.toFixed(0)}%` : "—"}
        </div>
        <div className="text-[12.5px] text-[#C9C4B8] mb-[10px]">
          Loan-to-cost ratio
        </div>
        <div className="h-[8px] bg-white/12 rounded-full overflow-hidden mb-[8px]">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: hasValidInputs ? `${Math.min(ltcPct, 100)}%` : "0%",
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
