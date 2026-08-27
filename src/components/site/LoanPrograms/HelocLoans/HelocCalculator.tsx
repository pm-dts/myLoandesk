"use client";

import { useState } from "react";
import { Calculator, DollarSign, Percent } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";

interface HelocCalculatorProps {
  pagePath: string;
  locale?: string;
}

export default function HelocCalculator({
  pagePath,
  locale = "en",
}: HelocCalculatorProps) {
  const t = useTranslations("HelocLoans.calculator");
  const numberLocale = locale === "es" ? "es-US" : "en-US";

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

        <form onSubmit={handleCalculateCLTV} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Estimated Home Value */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                {t("home_value_label")}
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
                  placeholder={t("home_value_placeholder")}
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Current Mortgage Balance */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                {t("mortgage_balance_label")}
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
                  placeholder={t("mortgage_balance_placeholder")}
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Desired Equity Amount */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                {t("desired_equity_label")}
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
                  placeholder={t("desired_equity_placeholder")}
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
            {t("submit_button")}
          </button>
        </form>

        {cltvResult !== null && (
          <div className="mt-8 p-6 bg-cream/30 border border-line rounded-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold">
                  {t("total_debt_label")}
                </div>
                <div className="text-xl font-bold text-ink mt-1">
                  $
                  {cltvResult.totalDebt.toLocaleString(numberLocale, {
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-brand-orange font-semibold">
                  {t("cltv_label")}
                </div>
                <div className="text-2xl font-bold text-moss-deep mt-1 flex items-center justify-center gap-0.5">
                  {cltvResult.cltvPercentage.toFixed(1)} <Percent size={18} />
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold">
                  {t("remaining_buffer_label")}
                </div>
                <div className="text-xl font-bold text-ink mt-1">
                  $
                  {Math.max(0, cltvResult.remainingEquity).toLocaleString(
                    numberLocale,
                    { maximumFractionDigits: 0 },
                  )}
                </div>
              </div>
            </div>

            <p className="text-xs text-ink-2 mt-4 text-center max-w-lg mx-auto">
              {cltvResult.cltvPercentage <= 85
                ? t("verdict_good")
                : t("verdict_high")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
