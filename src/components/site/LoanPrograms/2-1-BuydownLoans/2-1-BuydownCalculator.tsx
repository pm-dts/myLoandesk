"use client";

import { useState } from "react";
import { Calculator, DollarSign, Percent } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";

interface BuydownCalculatorProps {
  pagePath: string;
  locale?: string;
}

export default function BuydownCalculator({
  pagePath,
  locale = "en",
}: BuydownCalculatorProps) {
  const t = useTranslations("TwoOneBuydown.calculator");

  const [loanAmount, setLoanAmount] = useState<string>("500000");
  const [noteRate, setNoteRate] = useState<string>("7.0");
  const [calculationResult, setCalculationResult] = useState<{
    yr1Rate: number;
    yr1Payment: number;
    yr2Rate: number;
    yr2Payment: number;
    yr3Rate: number;
    yr3Payment: number;
    totalSavings: number;
  } | null>(null);

  // Helper to calculate monthly principal & interest payment
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

  const handleCalculateSavings = (e: React.FormEvent) => {
    e.preventDefault();
    const principal = parseFloat(loanAmount.replace(/[^0-9.]/g, ""));
    const rate = parseFloat(noteRate.replace(/[^0-9.]/g, ""));

    if (principal > 0 && rate > 2) {
      const yr3Rate = rate;
      const yr2Rate = rate - 1;
      const yr1Rate = rate - 2;

      const yr3Payment = calculateMonthlyPI(principal, yr3Rate);
      const yr2Payment = calculateMonthlyPI(principal, yr2Rate);
      const yr1Payment = calculateMonthlyPI(principal, yr1Rate);

      const yr1Savings = (yr3Payment - yr1Payment) * 12;
      const yr2Savings = (yr3Payment - yr2Payment) * 12;
      const totalSavings = yr1Savings + yr2Savings;

      setCalculationResult({
        yr1Rate,
        yr1Payment,
        yr2Rate,
        yr2Payment,
        yr3Rate,
        yr3Payment,
        totalSavings,
      });

      sendGTMEvent({
        event: "buydown_calculator_used",
        category: "engagement",
        label: "2/1 Buydown Calculator Run",
        loan_amount: principal,
        note_rate: rate,
        total_2yr_savings: totalSavings.toFixed(2),
        page_path: pagePath || "/2-1-buydown",
        locale,
      });
    }
  };

  const numberLocale = locale === "es" ? "es-US" : "en-US";

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

        <form onSubmit={handleCalculateSavings} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Loan Amount Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                {t("loan_amount_label")}
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder={t("loan_amount_placeholder")}
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Note Rate Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                {t("note_rate_label")}
              </label>
              <div className="relative">
                <Percent
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="number"
                  step="0.125"
                  value={noteRate}
                  onChange={(e) => setNoteRate(e.target.value)}
                  placeholder={t("note_rate_placeholder")}
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
            {t("submit_button")}
          </button>
        </form>

        {calculationResult !== null && (
          <div className="mt-8 p-6 bg-cream/30 border border-line rounded-2xl animate-in fade-in duration-300">
            <div className="text-center mb-6">
              <div className="text-xs uppercase tracking-wider text-ink-2 mb-1">
                {t("result_subsidy_title")}
              </div>
              <div className="text-4xl font-display font-bold text-moss-deep">
                $
                {calculationResult.totalSavings.toLocaleString(numberLocale, {
                  maximumFractionDigits: 0,
                })}
              </div>
              <p className="text-xs text-ink-2 mt-1">
                {t("result_subsidy_note")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-line/60 pt-4 text-center">
              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-brand-orange font-semibold">
                  {t("year1_tag")}
                </div>
                <div className="text-xs text-ink-2 mt-0.5">
                  {t("effective_rate_label")} {calculationResult.yr1Rate}%
                </div>
                <div className="text-base font-bold text-ink mt-1">
                  ~$
                  {calculationResult.yr1Payment.toLocaleString(numberLocale, {
                    maximumFractionDigits: 0,
                  })}{" "}
                  {t("per_month")}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-brand-orange font-semibold">
                  {t("year2_tag")}
                </div>
                <div className="text-xs text-ink-2 mt-0.5">
                  {t("effective_rate_label")} {calculationResult.yr2Rate}%
                </div>
                <div className="text-base font-bold text-ink mt-1">
                  ~$
                  {calculationResult.yr2Payment.toLocaleString(numberLocale, {
                    maximumFractionDigits: 0,
                  })}{" "}
                  {t("per_month")}
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold">
                  {t("year3_tag")}
                </div>
                <div className="text-xs text-ink-2 mt-0.5">
                  {t("note_rate_display_label")} {calculationResult.yr3Rate}%
                </div>
                <div className="text-base font-bold text-ink mt-1">
                  ~$
                  {calculationResult.yr3Payment.toLocaleString(numberLocale, {
                    maximumFractionDigits: 0,
                  })}{" "}
                  {t("per_month")}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
