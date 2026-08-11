"use client";

import { useState } from "react";
import { Calculator, DollarSign, Percent, Hammer } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";

export default function ConstructionCalculator({
  pagePath,
}: {
  pagePath: string;
}) {
  const [landCost, setLandCost] = useState<string>("100000");
  const [buildBudget, setBuildBudget] = useState<string>("400000");
  const [downPaymentPercent, setDownPaymentPercent] = useState<string>("20");
  const [calcResult, setCalcResult] = useState<{
    totalProjectCost: number;
    requiredEquity: number;
    estimatedLoanAmount: number;
    estInterestOnlyPayment: number;
  } | null>(null);

  const handleCalculateConstruction = (e: React.FormEvent) => {
    e.preventDefault();
    const land = parseFloat(landCost.replace(/[^0-9.]/g, ""));
    const build = parseFloat(buildBudget.replace(/[^0-9.]/g, ""));
    const downPercent = parseFloat(downPaymentPercent.replace(/[^0-9.]/g, ""));

    if (land >= 0 && build > 0 && downPercent >= 0) {
      const totalProjectCost = land + build;
      const requiredEquity = totalProjectCost * (downPercent / 100);
      const estimatedLoanAmount = totalProjectCost - requiredEquity;
      // Est. interest-only payment assuming ~50% average drawn balance over build phase at 8.0% interest
      const estInterestOnlyPayment = (estimatedLoanAmount * 0.5 * 0.08) / 12;

      setCalcResult({
        totalProjectCost,
        requiredEquity,
        estimatedLoanAmount,
        estInterestOnlyPayment,
      });

      sendGTMEvent({
        event: "construction_calculator_used",
        category: "engagement",
        label: "Construction Loan Estimator Run",
        total_project_cost: totalProjectCost,
        estimated_loan_amount: estimatedLoanAmount,
        page_path: pagePath || "/construction-loans",
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
            <Calculator size={16} /> Construction Budget Estimator
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-light text-ink">
            Estimate Your Construction Loan &amp; Equity
          </h3>
          <p className="text-xs sm:text-sm text-ink-2 mt-2">
            Calculate your total project cost basis, required equity
            contribution, and estimated build phase payments.
          </p>
        </div>

        <form onSubmit={handleCalculateConstruction} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
            {/* Land Acquisition / Value */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2 h-8 flex items-end">
                Land Cost or Equity ($)
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
                <input
                  type="number"
                  value={landCost}
                  onChange={(e) => setLandCost(e.target.value)}
                  placeholder="100000"
                  className="w-full h-[50px] pl-12 pr-4 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Estimated Build Budget */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2 h-8 flex items-end">
                Construction Budget ($)
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
                <input
                  type="number"
                  value={buildBudget}
                  onChange={(e) => setBuildBudget(e.target.value)}
                  placeholder="400000"
                  className="w-full h-[50px] pl-12 pr-4 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Down Payment % */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2 h-8 flex items-end">
                Down Payment / Equity (%)
              </label>
              <div className="relative">
                <Percent
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
                <input
                  type="number"
                  step="1"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(e.target.value)}
                  placeholder="20"
                  className="w-full h-[50px] pl-4 pr-10 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-moss-deep text-primary-bg py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-moss-darker transition-colors flex items-center justify-center gap-2"
          >
            <Hammer size={18} /> Calculate Construction Loan Summary
          </button>
        </form>

        {calcResult !== null && (
          <div className="mt-8 p-6 bg-cream/30 border border-line rounded-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold">
                  Total Cost Basis
                </div>
                <div className="text-lg font-bold text-ink mt-1">
                  ${calcResult.totalProjectCost.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-brand-orange font-semibold">
                  Equity Contribution
                </div>
                <div className="text-lg font-bold text-ink mt-1">
                  ${calcResult.requiredEquity.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold">
                  Est. Loan Amount
                </div>
                <div className="text-lg font-bold text-ink mt-1">
                  ${calcResult.estimatedLoanAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-moss-deep font-semibold">
                  Est. Avg. Build Payment
                </div>
                <div className="text-xl font-bold text-moss-deep mt-1">
                  ~$
                  {calcResult.estInterestOnlyPayment.toLocaleString("en-US", {
                    maximumFractionDigits: 0,
                  })}{" "}
                  / mo
                </div>
              </div>
            </div>

            <p className="text-xs text-ink-2 mt-4 text-center max-w-lg mx-auto">
              * During construction, interest is charged only on funds drawn as
              work is completed. Existing land equity can often count toward
              your required contribution.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
