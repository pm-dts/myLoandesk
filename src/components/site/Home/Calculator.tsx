"use client";

import { useState } from "react";
import { DollarSign, ArrowRight } from "lucide-react";

import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Calculator() {
  // State for inputs (initialized to match the image)
  const [homePrice, setHomePrice] = useState<number>(450000);
  const [downPayment, setDownPayment] = useState<number>(90000);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [interestRate, setInterestRate] = useState<number>(6.5);

  // Derived calculations
  const loanAmount = homePrice - downPayment;
  const downPaymentPercent = Math.round((downPayment / homePrice) * 100);

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  // Monthly payment formula: M = P[r(1+r)^n/((1+r)^n-1)]
  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / numberOfPayments
      : loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1));

  const totalPaid = monthlyPayment * numberOfPayments;
  const totalInterest = totalPaid - loanAmount;

  // Formatting helpers
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);

  const formatShortCurrency = (val: number) => `$${Math.round(val / 1000)}k`;

  // Calculate percentages for the progress bar
  const principalPercent = (loanAmount / totalPaid) * 100;
  const interestPercent = (totalInterest / totalPaid) * 100;

  // Slider background fill helper
  const getSliderStyle = (value: number, min: number, max: number) => {
    const percentage = ((value - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, var(--color-moss-deep) ${percentage}%, var(--color-line) ${percentage}%)`,
    };
  };

  return (
    <div className="max-w-md mx-auto bg-primary-bg rounded-3xl p-6 md:p-8 shadow-sm border border-line">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs font-semibold tracking-wider text-ink-2 uppercase mb-1">
            Live Estimate
          </p>
          <h2 className="text-2xl font-display font-medium text-ink">
            Monthly payment
          </h2>
        </div>
        <div className="w-10 h-10 bg-moss-deep rounded-xl flex items-center justify-center text-primary-bg">
          <DollarSign size={20} strokeWidth={2.5} />
        </div>
      </div>

      <div className="space-y-2">
        {/* Home Price */}
        <div>
          <div className="flex justify-between items-center mb-3 text-sm">
            <label className="text-ink-2">Home price</label>
            <span className="font-semibold text-ink font-mono text-base">
              {formatCurrency(homePrice)}
            </span>
          </div>
          <input
            type="range"
            min={50000}
            max={2000000}
            step={5000}
            value={homePrice}
            onChange={(e) => {
              const newPrice = Number(e.target.value);
              setHomePrice(newPrice);
              // Maintain down payment percentage when home price changes
              setDownPayment(newPrice * (downPaymentPercent / 100));
            }}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer focus-ring slider-thumb"
            style={getSliderStyle(homePrice, 50000, 2000000)}
          />
        </div>

        {/* Down Payment */}
        <div>
          <div className="flex justify-between items-center mb-3 text-sm">
            <label className="text-ink-2">Down payment</label>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-ink font-mono text-base">
                {formatCurrency(downPayment)}
              </span>
              <span className="text-xs font-medium text-ink-2 bg-line/50 px-1.5 py-0.5 rounded">
                {downPaymentPercent}%
              </span>
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={homePrice}
            step={1000}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer focus-ring slider-thumb"
            style={getSliderStyle(downPayment, 0, homePrice)}
          />
        </div>

        {/* Loan Term */}
        <div>
          <label className="block text-sm text-ink-2 mb-3">Loan term</label>
          <div className="flex gap-2 text-sm font-medium">
            {[15, 20, 30].map((term) => (
              <button
                key={term}
                onClick={() => setLoanTerm(term)}
                className={`flex-1 py-2.5 rounded-lg border transition-colors focus-ring ${
                  loanTerm === term
                    ? "bg-moss-deep text-primary-bg border-moss-deep"
                    : "bg-transparent text-ink border-line hover:border-moss-deep"
                }`}
              >
                {term} yr
              </button>
            ))}
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex justify-between items-center mb-3 text-sm">
            <label className="text-ink-2">Interest rate</label>
            <span className="font-semibold text-ink font-mono text-base">
              {interestRate.toFixed(2)}%
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={12}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer focus-ring slider-thumb"
            style={getSliderStyle(interestRate, 1, 12)}
          />
        </div>
      </div>

      <hr className="my-4 border-line border-dashed" />

      {/* Results Section */}
      <div>
        <div className="flex justify-between items-end mb-4">
          <p className="text-sm text-ink-2">Estimated monthly</p>
          <p className={`text-4xl text-moss-deep ${fraunces.className} `}>
            {formatCurrency(monthlyPayment)}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="h-2.5 flex rounded-full overflow-hidden mb-3">
          <div
            className="bg-moss-deep h-full"
            style={{ width: `${principalPercent}%` }}
          />
          <div
            className="bg-brand-orange h-full"
            style={{ width: `${interestPercent}%` }}
          />
        </div>

        {/* Legend */}
        <div className="flex justify-between text-xs text-ink-2 mb-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-moss-deep" />
            <span>
              Principal{" "}
              <span className="font-mono text-ink font-medium">
                {formatShortCurrency(loanAmount)}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            <span>
              Interest{" "}
              <span className="font-mono text-ink font-medium">
                {formatShortCurrency(totalInterest)}
              </span>
            </span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-[#f0ece1] p-3.5 rounded-xl border border-line/50">
            <p className="text-[10px] font-semibold text-ink-2 uppercase tracking-wider mb-1">
              Loan Amount
            </p>
            <p className="font-mono font-medium text-ink">
              {formatCurrency(loanAmount)}
            </p>
          </div>
          <div className="bg-[#f0ece1] p-3.5 rounded-xl border border-line/50">
            <p className="text-[10px] font-semibold text-ink-2 uppercase tracking-wider mb-1">
              Total Interest
            </p>
            <p className="font-mono font-medium text-ink">
              {formatCurrency(totalInterest)}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="btn-shine w-full bg-moss-deep text-primary-bg py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-moss-darker transition-colors focus-ring">
          Get pre-qualified in 5 min
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
