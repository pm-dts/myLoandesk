"use client";

import { useState } from "react";
import { Calculator, DollarSign, Percent } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";

export default function HelocCalculator({ pagePath }: { pagePath: string }) {
  const [homeValue, setHomeValue] = useState<string>("700000");
  const [mortgageBalance, setMortgageBalance] = useState<string>("350000");
  const [desiredEquity, setDesiredEquity] = useState<string>("100000");
  const [cltvResult, setCltvResult] = useState<{
    totalDebt: number;
    cltvPercentage: number;
    remainingEquity: number;
  } | null>(null);

  const handleCalculateCLTV = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(homeValue.replace(/[^0-9.]/g, ""));
    const balance = parseFloat(mortgageBalance.replace(/[^0-9.]/g, ""));
    const desired = parseFloat(desiredEquity.replace(/[^0-9.]/g, ""));

    if (val > 0) {
      const totalDebt = balance + desired;
      const cltvPercentage = (totalDebt / val) * 100;
      const remainingEquity = val - totalDebt;

      setCltvResult({
        totalDebt,
        cltvPercentage,
        remainingEquity,
      });

      sendGTMEvent({
        event: "heloc_cltv_calculator_used",
        category: "engagement",
        label: "CLTV Calculator Run",
        estimated_cltv: cltvPercentage.toFixed(2),
        page_path: pagePath || "/loan-programs/home-equity-loans-heloc",
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
            <Calculator size={16} /> Interactive Equity Estimator
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-light text-ink">
            Calculate Your Estimated CLTV
          </h3>
          <p className="text-xs sm:text-sm text-ink-2 mt-2">
            See how your proposed home equity borrowing compares against your
            property&apos;s current market value.
          </p>
        </div>

        <form onSubmit={handleCalculateCLTV} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Estimated Home Value */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Estimated Home Value ($)
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={homeValue}
                  onChange={(e) => setHomeValue(e.target.value)}
                  placeholder="e.g. 700000"
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Current Mortgage Balance */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Current Mortgage Balance ($)
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={mortgageBalance}
                  onChange={(e) => setMortgageBalance(e.target.value)}
                  placeholder="e.g. 350000"
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Desired Equity Amount */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Desired Equity Amount ($)
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={desiredEquity}
                  onChange={(e) => setDesiredEquity(e.target.value)}
                  placeholder="e.g. 100000"
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-moss-deep text-primary-bg py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-moss-darker transition-colors flex items-center justify-center gap-2"
          >
            Calculate Estimated CLTV
          </button>
        </form>

        {cltvResult !== null && (
          <div className="mt-8 p-6 bg-cream/30 border border-line rounded-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold">
                  Total Combined Debt
                </div>
                <div className="text-xl font-bold text-ink mt-1">
                  ${cltvResult.totalDebt.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-brand-orange font-semibold">
                  Estimated CLTV
                </div>
                <div className="text-2xl font-bold text-moss-deep mt-1 flex items-center justify-center gap-0.5">
                  {cltvResult.cltvPercentage.toFixed(1)} <Percent size={18} />
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold">
                  Remaining Equity Buffer
                </div>
                <div className="text-xl font-bold text-ink mt-1">
                  ${Math.max(0, cltvResult.remainingEquity).toLocaleString()}
                </div>
              </div>
            </div>

            <p className="text-xs text-ink-2 mt-4 text-center max-w-lg mx-auto">
              {cltvResult.cltvPercentage <= 85
                ? "Excellent! An estimated CLTV under 80%–85% generally qualifies for competitive HELOC or Home Equity Loan financing rates."
                : "Your estimated CLTV is above 85%. Certain specialized programs still allow higher CLTV limits depending on credit and income profiles."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
