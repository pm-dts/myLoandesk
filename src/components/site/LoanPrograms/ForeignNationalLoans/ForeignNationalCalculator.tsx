"use client";

import { useState } from "react";
import { Calculator, DollarSign, Percent, Globe } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";

interface ForeignNationalCalculatorProps {
  pagePath: string;
  locale?: string;
}

export default function ForeignNationalCalculator({
  pagePath,
  locale = "en",
}: ForeignNationalCalculatorProps) {
  const t = useTranslations("ForeignNationalLoans.calculator");
  const numberLocale = locale === "es" ? "es-US" : "en-US";

  const [propertyPrice, setPropertyPrice] = useState<string>("600000");
  const [downPaymentPercent, setDownPaymentPercent] = useState<string>("30");
  const [reserveMonths, setReserveMonths] = useState<string>("12");
  const [calcResult, setCalcResult] = useState<{
    downPaymentAmount: number;
    loanAmount: number;
    estMonthlyPayment: number;
    recommendedReserves: number;
  } | null>(null);

  const calculateMonthlyPI = (
    principal: number,
    annualRate: number = 7.5,
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

  const handleCalculateForeignLoan = (e: React.FormEvent) => {
    e.preventDefault();
    const price = parseFloat(propertyPrice.replace(/[^0-9.]/g, ""));
    const downPercent = parseFloat(downPaymentPercent.replace(/[^0-9.]/g, ""));
    const reserves = parseFloat(reserveMonths);

    if (price > 0 && downPercent >= 0) {
      const downPaymentAmount = price * (downPercent / 100);
      const loanAmount = price - downPaymentAmount;
      const estMonthlyPayment = calculateMonthlyPI(loanAmount, 7.5);
      const recommendedReserves = estMonthlyPayment * reserves;

      setCalcResult({
        downPaymentAmount,
        loanAmount,
        estMonthlyPayment,
        recommendedReserves,
      });

      sendGTMEvent({
        event: "foreign_national_calculator_used",
        category: "engagement",
        label: "Foreign National Estimator Run",
        target_property_price: price,
        down_payment_percent: downPercent,
        page_path: pagePath || "/foreign-national-loans",
        locale,
      });
    }
  };

  return (
    <section
      id="calculator"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 scroll-mt-24"
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

        <form onSubmit={handleCalculateForeignLoan} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
            {/* Target U.S. Property Price */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2 h-8 flex items-end">
                {t("price_label")}
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />
                <input
                  type="number"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(e.target.value)}
                  placeholder={t("price_placeholder")}
                  className="w-full h-[50px] pl-12 pr-4 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Estimated Down Payment % */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2 h-8 flex items-end">
                {t("down_label")}
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
                  placeholder={t("down_placeholder")}
                  className="w-full h-[50px] pl-4 pr-10 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Required Reserve Months */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2 h-8 flex items-end">
                {t("reserves_label")}
              </label>
              <div className="relative">
                <Globe
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
                  size={18}
                />
                <select
                  value={reserveMonths}
                  onChange={(e) => setReserveMonths(e.target.value)}
                  className="w-full h-[50px] pl-12 pr-4 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors appearance-none cursor-pointer"
                >
                  <option value="6">{t("options.months_6")}</option>
                  <option value="12">{t("options.months_12")}</option>
                  <option value="18">{t("options.months_18")}</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-moss-deep text-primary-bg py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-moss-darker transition-colors flex items-center justify-center gap-2"
          >
            <Globe size={18} /> {t("submit_button")}
          </button>
        </form>

        {calcResult !== null && (
          <div className="mt-8 p-6 bg-cream/30 border border-line rounded-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold">
                  {t("down_payment_needed")}
                </div>
                <div className="text-xl font-bold text-ink mt-1">
                  $
                  {calcResult.downPaymentAmount.toLocaleString(numberLocale, {
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-brand-orange font-semibold">
                  {t("estimated_loan_amount")}
                </div>
                <div className="text-xl font-bold text-ink mt-1">
                  $
                  {calcResult.loanAmount.toLocaleString(numberLocale, {
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-moss-deep font-semibold">
                  {t("target_reserve")}
                </div>
                <div className="text-xl font-bold text-moss-deep mt-1">
                  $
                  {calcResult.recommendedReserves.toLocaleString(numberLocale, {
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
