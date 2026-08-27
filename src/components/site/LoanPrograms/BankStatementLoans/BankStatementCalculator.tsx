"use client";

import { useState } from "react";
import { Calculator, DollarSign } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";

interface BankStatementCalculatorProps {
  pagePath: string;
  locale?: string;
}

export default function BankStatementCalculator({
  pagePath,
  locale = "en",
}: BankStatementCalculatorProps) {
  const t = useTranslations("BankStatementLoans.calculator");

  const [statementType, setStatementType] = useState<"personal" | "business">(
    "business",
  );
  const [totalDeposits, setTotalDeposits] = useState<string>("");
  const [months, setMonths] = useState<"12" | "24">("12");
  const [expenseFactor, setExpenseFactor] = useState<string>("50");
  const [qualifyingMonthlyIncome, setQualifyingMonthlyIncome] = useState<
    number | null
  >(null);

  const handleCalculateIncome = (e: React.FormEvent) => {
    e.preventDefault();
    const deposits = parseFloat(totalDeposits.replace(/[^0-9.]/g, ""));
    const numMonths = parseInt(months, 10);
    const expFactor =
      statementType === "business" ? parseFloat(expenseFactor) / 100 : 0;

    if (deposits > 0 && numMonths > 0) {
      const netDeposits = deposits * (1 - expFactor);
      const monthlyIncome = netDeposits / numMonths;
      setQualifyingMonthlyIncome(monthlyIncome);

      sendGTMEvent({
        event: "bank_statement_calculator_used",
        category: "engagement",
        label: "Bank Statement Calculator Run",
        statement_type: statementType,
        calculated_monthly_income: monthlyIncome.toFixed(2),
        page_path: pagePath || "/bank-statement-loans",
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

        <form onSubmit={handleCalculateIncome} className="space-y-6">
          {/* Statement Type Radio/Tabs */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2 text-center">
              {t("account_type_label")}
            </label>
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto p-1.5 bg-cream/40 border border-line rounded-xl">
              <button
                type="button"
                onClick={() => setStatementType("business")}
                className={`py-2 text-xs font-semibold rounded-lg transition-colors ${
                  statementType === "business"
                    ? "bg-moss-deep text-primary-bg shadow-sm"
                    : "text-ink hover:text-moss-deep"
                }`}
              >
                {t("business_statements")}
              </button>
              <button
                type="button"
                onClick={() => setStatementType("personal")}
                className={`py-2 text-xs font-semibold rounded-lg transition-colors ${
                  statementType === "personal"
                    ? "bg-moss-deep text-primary-bg shadow-sm"
                    : "text-ink hover:text-moss-deep"
                }`}
              >
                {t("personal_statements")}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Total Deposits Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                {t("total_deposits_label")}
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={totalDeposits}
                  onChange={(e) => setTotalDeposits(e.target.value)}
                  placeholder={t("total_deposits_placeholder")}
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Months Select */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                {t("history_period_label")}
              </label>
              <select
                value={months}
                onChange={(e) => setMonths(e.target.value as "12" | "24")}
                className="w-full px-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
              >
                <option value="12">{t("option_12")}</option>
                <option value="24">{t("option_24")}</option>
              </select>
            </div>
          </div>

          {/* Expense Factor Input (Only shown for business statements) */}
          {statementType === "business" && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                {t("expense_factor_label")}
              </label>
              <input
                type="number"
                value={expenseFactor}
                onChange={(e) => setExpenseFactor(e.target.value)}
                placeholder="50"
                className="w-full px-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                min="0"
                max="90"
                required
              />
              <p className="text-[11px] text-ink-2/70 mt-1.5 italic">
                {t("expense_factor_note")}
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-moss-deep text-primary-bg py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-moss-darker transition-colors flex items-center justify-center gap-2"
          >
            {t("submit_button")}
          </button>
        </form>

        {qualifyingMonthlyIncome !== null && (
          <div className="mt-8 p-6 bg-cream/30 border border-line rounded-2xl text-center animate-in fade-in duration-300">
            <div className="text-xs uppercase tracking-wider text-ink-2 mb-1">
              {t("result_title")}
            </div>
            <div className="text-4xl font-display font-bold text-moss-deep mb-2">
              $
              {qualifyingMonthlyIncome.toLocaleString(numberLocale, {
                maximumFractionDigits: 0,
              })}{" "}
              {t("per_month")}
            </div>
            <p className="text-xs sm:text-sm text-ink-2 max-w-md mx-auto">
              {t("result_note")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
