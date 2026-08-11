"use client";

import { useState } from "react";
import { Calculator, DollarSign, Percent } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";

export default function FixAndFlipCalculator({
  pagePath,
}: {
  pagePath: string;
}) {
  const [purchasePrice, setPurchasePrice] = useState<string>("250000");
  const [rehabBudget, setRehabBudget] = useState<string>("60000");
  const [projectedArv, setProjectedArv] = useState<string>("380000");
  const [calcResult, setCalcResult] = useState<{
    totalCost: number;
    arvMargin: number;
    ltcPercentage: number;
  } | null>(null);

  const handleCalculateDeal = (e: React.FormEvent) => {
    e.preventDefault();
    const purchase = parseFloat(purchasePrice.replace(/[^0-9.]/g, ""));
    const rehab = parseFloat(rehabBudget.replace(/[^0-9.]/g, ""));
    const arv = parseFloat(projectedArv.replace(/[^0-9.]/g, ""));

    if (purchase > 0 && arv > 0) {
      const totalCost = purchase + rehab;
      const arvMargin = arv - totalCost;
      const ltcPercentage = (totalCost / arv) * 100;

      setCalcResult({
        totalCost,
        arvMargin,
        ltcPercentage,
      });

      sendGTMEvent({
        event: "fix_flip_calculator_used",
        category: "engagement",
        label: "Fix & Flip Estimator Run",
        projected_arv: arv,
        estimated_margin: arvMargin,
        page_path: pagePath || "/fix-and-flip-loans",
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
            <Calculator size={16} /> Deal Margin Estimator
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-light text-ink">
            Estimate Your Flip Profit &amp; ARV Margin
          </h3>
          <p className="text-xs sm:text-sm text-ink-2 mt-2">
            Quickly analyze purchase price, renovation budget, and projected
            After-Repair Value (ARV).
          </p>
        </div>

        <form onSubmit={handleCalculateDeal} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Purchase Price */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Purchase Price ($)
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                  placeholder="250000"
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Renovation Budget */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Renovation Scope ($)
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={rehabBudget}
                  onChange={(e) => setRehabBudget(e.target.value)}
                  placeholder="60000"
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Projected ARV */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Projected ARV ($)
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={projectedArv}
                  onChange={(e) => setProjectedArv(e.target.value)}
                  placeholder="380000"
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
            Analyze Fix &amp; Flip Deal
          </button>
        </form>

        {calcResult !== null && (
          <div className="mt-8 p-6 bg-cream/30 border border-line rounded-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold">
                  Total Cost Basis
                </div>
                <div className="text-xl font-bold text-ink mt-1">
                  ${calcResult.totalCost.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-brand-orange font-semibold">
                  Estimated Gross Margin
                </div>
                <div className="text-2xl font-bold text-moss-deep mt-1">
                  ${calcResult.arvMargin.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold">
                  Cost-to-ARV Ratio
                </div>
                <div className="text-xl font-bold text-ink mt-1 flex items-center justify-center gap-0.5">
                  {calcResult.ltcPercentage.toFixed(1)} <Percent size={16} />
                </div>
              </div>
            </div>

            <p className="text-xs text-ink-2 mt-4 text-center max-w-lg mx-auto">
              {calcResult.ltcPercentage <= 75
                ? "Solid margin! A Total Cost-to-ARV ratio under 75% aligns well with standard hard money and investor underwriting guidelines."
                : "Your cost basis exceeds 75% of projected ARV. Ensure your exit strategy and contractor scopes are tightly verified."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
