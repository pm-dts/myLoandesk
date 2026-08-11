"use client";

import { useState } from "react";
import { Calculator, DollarSign, Percent } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";

export default function ItinCalculator({ pagePath }: { pagePath: string }) {
  const [homePrice, setHomeValue] = useState<string>("350000");
  const [downPaymentPercent, setDownPaymentPercent] = useState<string>("15");
  const [estimatedRate, setEstimatedRate] = useState<string>("7.5");
  const [calcResult, setCalcResult] = useState<{
    downPaymentAmount: number;
    loanAmount: number;
    monthlyPI: number;
  } | null>(null);

  const calculateMonthlyPI = (
    principal: number,
    annualRate: number,
    years: number = 30,
  ) => {
    const monthlyRate = annualRate / 100 / 12;
    const totalPayments = years * 12;
    if (monthlyRate === 0) return principal / totalPayments;
    return (
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1)
    );
  };

  const handleCalculateItin = (e: React.FormEvent) => {
    e.preventDefault();
    const price = parseFloat(homePrice.replace(/[^0-9.]/g, ""));
    const downPercent = parseFloat(downPaymentPercent.replace(/[^0-9.]/g, ""));
    const rate = parseFloat(estimatedRate.replace(/[^0-9.]/g, ""));

    if (price > 0 && downPercent >= 0 && rate > 0) {
      const downPaymentAmount = price * (downPercent / 100);
      const loanAmount = price - downPaymentAmount;
      const monthlyPI = calculateMonthlyPI(loanAmount, rate);

      setCalcResult({
        downPaymentAmount,
        loanAmount,
        monthlyPI,
      });

      sendGTMEvent({
        event: "itin_calculator_used",
        category: "engagement",
        label: "ITIN Mortgage Estimator Run",
        target_home_price: price,
        down_payment_percent: downPercent,
        page_path: pagePath || "/itin-loans",
      });
    }
  };

  return (
    <section
      id="calculator"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 scroll-mt-24"
    >
      <div className="bg-primary-bg border border-line rounded-3xl p-6 sm:p-10 shadow-lg">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange uppercase tracking-wider mb-2">
            <Calculator size={16} /> Interactive ITIN Estimator
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-light text-ink">
            Estimate Your ITIN Down Payment &amp; Payment
          </h3>
          <p className="text-xs sm:text-sm text-ink-2 mt-2">
            Calculate your estimated down payment requirement and monthly
            principal &amp; interest payment.
          </p>
        </div>

        <form onSubmit={handleCalculateItin} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Target Purchase Price */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Target Home Price ($)
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomeValue(e.target.value)}
                  placeholder="350000"
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Estimated Down Payment % */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Down Payment (%)
              </label>
              <div className="relative">
                <Percent
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="number"
                  step="1"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(e.target.value)}
                  placeholder="15"
                  className="w-full pl-4 pr-10 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Estimated Interest Rate */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Estimated Rate (%)
              </label>
              <div className="relative">
                <Percent
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="number"
                  step="0.125"
                  value={estimatedRate}
                  onChange={(e) => setEstimatedRate(e.target.value)}
                  placeholder="7.5"
                  className="w-full pl-4 pr-10 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-moss-deep text-primary-bg py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-moss-darker transition-colors flex items-center justify-center gap-2"
          >
            Calculate ITIN Mortgage Estimate
          </button>
        </form>

        {calcResult !== null && (
          <div className="mt-8 p-6 bg-cream/30 border border-line rounded-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold">
                  Down Payment Needed
                </div>
                <div className="text-xl font-bold text-ink mt-1">
                  ${calcResult.downPaymentAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-brand-orange font-semibold">
                  Estimated Loan Amount
                </div>
                <div className="text-xl font-bold text-ink mt-1">
                  ${calcResult.loanAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-moss-deep font-semibold">
                  Est. Monthly P&amp;I
                </div>
                <div className="text-2xl font-bold text-moss-deep mt-1">
                  $
                  {calcResult.monthlyPI.toLocaleString("en-US", {
                    maximumFractionDigits: 0,
                  })}{" "}
                  / mo
                </div>
              </div>
            </div>

            <p className="text-xs text-ink-2 mt-4 text-center max-w-lg mx-auto">
              * Estimate covers principal and interest only. Property taxes,
              homeowners insurance, and HOA dues vary by property location.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
