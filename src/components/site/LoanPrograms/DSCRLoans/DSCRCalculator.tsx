"use client";

import { useState } from "react";
import { Calculator, DollarSign } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";

export default function DscrCalculator({ pagePath }: { pagePath: string }) {
  const [rentInput, setRentInput] = useState<string>("");
  const [pitiaInput, setPitiaInput] = useState<string>("");
  const [calculatedRatio, setCalculatedRatio] = useState<number | null>(null);

  const handleCalculateDSCR = (e: React.FormEvent) => {
    e.preventDefault();
    const rent = parseFloat(rentInput.replace(/[^0-9.]/g, ""));
    const pitia = parseFloat(pitiaInput.replace(/[^0-9.]/g, ""));

    if (rent > 0 && pitia > 0) {
      const ratio = rent / pitia;
      setCalculatedRatio(ratio);

      sendGTMEvent({
        event: "dscr_calculator_used",
        category: "engagement",
        label: "DSCR Calculator Run",
        calculated_ratio: ratio.toFixed(2),
        page_path: pagePath || "/dscr-loans",
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
            <Calculator size={16} /> Interactive DSCR Estimator
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-light text-ink">
            Calculate Your Property DSCR
          </h3>
        </div>

        <form onSubmit={handleCalculateDSCR} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Estimated Monthly Rental Income ($)
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={rentInput}
                  onChange={(e) => setRentInput(e.target.value)}
                  placeholder="e.g. 2800"
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Total Monthly Debt (PITIA) ($)
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={pitiaInput}
                  onChange={(e) => setPitiaInput(e.target.value)}
                  placeholder="e.g. 2200"
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
            Calculate Ratio
          </button>
        </form>

        {calculatedRatio !== null && (
          <div className="mt-8 p-6 bg-cream/30 border border-line rounded-2xl text-center animate-in fade-in duration-300">
            <div className="text-xs uppercase tracking-wider text-ink-2 mb-1">
              Your Estimated DSCR
            </div>
            <div className="text-4xl font-display font-bold text-moss-deep mb-2">
              {calculatedRatio.toFixed(2)}
            </div>
            <p className="text-xs sm:text-sm text-ink-2 max-w-md mx-auto">
              {calculatedRatio >= 1.0
                ? "Great news! Your rental income fully covers your projected mortgage payment with positive cash flow potential."
                : "Your DSCR is below 1.0. Financing is still achievable with select specialized DSCR programs."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
