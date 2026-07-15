"use client";

import { useState } from "react";
import { Calculator as CalcIcon, ArrowUp } from "lucide-react";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Calculator() {
  // State for inputs
  const [homePrice, setHomePrice] = useState<number>(400000);
  const [downPayment, setDownPayment] = useState<number>(80000);
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

  // Slider background fill helper matching the exact image colors
  const getSliderStyle = (value: number, min: number, max: number) => {
    const percentage = ((value - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, #FF6B00 ${percentage}%, #1E293B ${percentage}%)`,
    };
  };

  return (
    <div
      className="relative w-full max-w-[768px] mx-auto my-12"
      id="calculator"
    >
      {/* Soft dark shadow/shape offset behind the card matching the design */}
      <div className="absolute inset-0 bg-[#E3DBCB] rounded-[40px] transform rotate-[2deg] scale-[1.03] translate-x-3 translate-y-3 z-0"></div>

      {/* Main Calculator Card */}
      <div className="relative z-10 bg-white rounded-[40px] p-6 md:p-10 shadow-sm border border-white/60">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#FFF4ED] flex items-center justify-center text-[#FF6B00] shrink-0">
            <CalcIcon size={20} strokeWidth={2} />
          </div>
          <h2
            className={`text-2xl md:text-3xl text-[#0B1221] ${fraunces.className}`}
          >
            Payment Estimator
          </h2>
        </div>

        {/* Result Box */}
        <div className="bg-[#F4EFE6] rounded-[24px] p-6 mb-6">
          <p className="text-gray-600 font-medium mb-1">
            Estimated Monthly Payment
          </p>
          <div className="flex items-baseline gap-2 mb-6 border-b border-gray-300/50 pb-4">
            <span
              className={`text-4xl md:text-5xl font-bold text-[#FF6B00] tracking-tight ${fraunces.className}`}
            >
              {formatCurrency(monthlyPayment)}
            </span>
            <span className="text-gray-600 text-base font-medium">/mo</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 text-sm md:text-base">
            <div>
              <span className="text-gray-600">Loan Amount: </span>
              <span className="font-bold text-[#0B1221] font-mono">
                {formatCurrency(loanAmount)}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Interest: </span>
              <span className="font-bold text-[#0B1221] font-mono">
                {formatCurrency(totalInterest)}
              </span>
            </div>
          </div>
        </div>

        {/* Inputs Section */}
        <div className="space-y-4">
          {/* Home Price */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-lg font-medium text-[#0B1221]">
                Home Price
              </label>
              <span
                className={`text-xl font-bold text-[#FF6B00] ${fraunces.className}`}
              >
                {formatCurrency(homePrice)}
              </span>
            </div>
            <input
              type="range"
              min={50000}
              max={2000000}
              step={1000}
              value={homePrice}
              onChange={(e) => {
                const newPrice = Number(e.target.value);
                setHomePrice(newPrice);
                setDownPayment(newPrice * (downPaymentPercent / 100));
              }}
              className="w-full h-3 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#FF6B00]/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[#FF6B00] [&::-webkit-slider-thumb]:rounded-full"
              style={getSliderStyle(homePrice, 50000, 2000000)}
            />
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-lg font-medium text-[#0B1221]">
                Down Payment
              </label>
              <span
                className={`text-xl font-bold text-[#FF6B00] ${fraunces.className}`}
              >
                {formatCurrency(downPayment)}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={homePrice}
              step={1000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-3 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#FF6B00]/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[#FF6B00] [&::-webkit-slider-thumb]:rounded-full"
              style={getSliderStyle(downPayment, 0, homePrice)}
            />
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-lg font-medium text-[#0B1221]">
                Interest Rate
              </label>
              <span
                className={`text-xl font-bold text-[#FF6B00] ${fraunces.className}`}
              >
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
              className="w-full h-3 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#FF6B00]/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[#FF6B00] [&::-webkit-slider-thumb]:rounded-full"
              style={getSliderStyle(interestRate, 1, 12)}
            />
          </div>

          {/* Loan Term */}
          <div className="pt-1">
            <label className="text-lg font-medium text-[#0B1221] block mb-4">
              Loan Term
            </label>
            <div className="bg-[#F4EFE6] p-1.5 rounded-full flex gap-2">
              {[15, 20, 30].map((term) => (
                <button
                  key={term}
                  onClick={() => setLoanTerm(term)}
                  className={`flex-1 py-2.5 text-base font-semibold rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] ${
                    loanTerm === term
                      ? "bg-white text-[#FF6B00] shadow-sm"
                      : "bg-transparent text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {term} yr
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
