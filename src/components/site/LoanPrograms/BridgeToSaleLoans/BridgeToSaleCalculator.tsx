"use client";

import { useState } from "react";
import { Calculator, DollarSign, Percent, Scale } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";

interface BridgeToSaleCalculatorProps {
  pagePath: string;
  locale?: string;
}

export default function BridgeToSaleCalculator({
  pagePath,
  locale = "en",
}: BridgeToSaleCalculatorProps) {
  const t = useTranslations("BridgeToSaleLoans.calculator");
  const numberLocale = locale === "es" ? "es-US" : "en-US";

  const [currentHomeValue, setCurrentHomeValue] = useState<string>("600000");
  const [existingMortgage, setExistingMortgage] = useState<string>("250000");
  const [maxCltvPercent, setMaxCltvPercent] = useState<string>("80");
  const [calcResult, setCalcResult] = useState<{
    totalEquity: number;
    maxBorrowableEquity: number;
    netBridgeLimit: number;
  } | null>(null);

  const handleCalculateBridge = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(currentHomeValue.replace(/[^0-9.]/g, ""));
    const debt = parseFloat(existingMortgage.replace(/[^0-9.]/g, ""));
    const cltv = parseFloat(maxCltvPercent.replace(/[^0-9.]/g, ""));

    if (val > 0 && cltv > 0) {
      const totalEquity = Math.max(0, val - debt);
      const maxBorrowableEquity = val * (cltv / 100);
      const netBridgeLimit = Math.max(0, maxBorrowableEquity - debt);

      setCalcResult({
        totalEquity,
        maxBorrowableEquity,
        netBridgeLimit,
      });

      sendGTMEvent({
        event: "bridge_loan_calculator_used",
        category: "engagement",
        label: "Bridge to Sale Calculator Run",
        current_home_value: val,
        estimated_bridge_limit: netBridgeLimit,
        page_path: pagePath || "/loan-programs/bridge-to-sale-loans",
        locale,
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
            <Calculator size={16} /> {t("badge")}
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-light text-ink">
            {t("heading")}
          </h3>
          <p className="text-xs sm:text-sm text-ink-2 mt-2">
            {t("subheading")}
          </p>
        </div>

        <form onSubmit={handleCalculateBridge} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
            {/* Current Home Estimated Value */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2 h-8 flex items-end">
                {t("current_value_label")}
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
                <input
                  type="number"
                  value={currentHomeValue}
                  onChange={(e) => setCurrentHomeValue(e.target.value)}
                  placeholder={t("current_value_placeholder")}
                  className="w-full h-[50px] pl-12 pr-4 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Existing Mortgage Balance */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2 h-8 flex items-end">
                {t("existing_mortgage_label")}
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
                <input
                  type="number"
                  value={existingMortgage}
                  onChange={(e) => setExistingMortgage(e.target.value)}
                  placeholder={t("existing_mortgage_placeholder")}
                  className="w-full h-[50px] pl-12 pr-4 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Max Lender CLTV % */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2 h-8 flex items-end">
                {t("cltv_label")}
              </label>
              <div className="relative">
                <Percent
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
                <input
                  type="number"
                  step="1"
                  value={maxCltvPercent}
                  onChange={(e) => setMaxCltvPercent(e.target.value)}
                  placeholder={t("cltv_placeholder")}
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
            <Scale size={18} /> {t("submit_button")}
          </button>
        </form>

        {calcResult !== null && (
          <div className="mt-8 p-6 bg-cream/30 border border-line rounded-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold">
                  {t("total_equity_label")}
                </div>
                <div className="text-xl font-bold text-ink mt-1">
                  $
                  {calcResult.totalEquity.toLocaleString(numberLocale, {
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-brand-orange font-semibold">
                  {t("max_borrowable_label")}
                </div>
                <div className="text-xl font-bold text-ink mt-1">
                  $
                  {calcResult.maxBorrowableEquity.toLocaleString(numberLocale, {
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-moss-deep font-semibold">
                  {t("available_cash_label")}
                </div>
                <div className="text-2xl font-bold text-moss-deep mt-1">
                  $
                  {calcResult.netBridgeLimit.toLocaleString(numberLocale, {
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>
            </div>

            <p className="text-xs text-ink-2 mt-4 text-center max-w-lg mx-auto">
              {t("footnote")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
