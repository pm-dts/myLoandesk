"use client";

import { useState } from "react";
import { Calculator, DollarSign } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";

export default function BankStatementCalculator({
  pagePath,
}: {
  pagePath: string;
}) {
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
            <Calculator size={16} /> Income Estimator
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-light text-ink">
            Estimate Your Qualifying Income
          </h3>
          <p className="text-xs sm:text-sm text-ink-2 mt-2">
            See how much monthly income lenders might use based on your bank
            deposits.
          </p>
        </div>

        <form onSubmit={handleCalculateIncome} className="space-y-6">
          {/* Statement Type Radio/Tabs */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2 text-center">
              Statement Account Type
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
                Business Statements
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
                Personal Statements
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Total Deposits Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Total Deposits Over Period ($)
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
                  placeholder="e.g. 240000"
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Months Select */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Statement History Period
              </label>
              <select
                value={months}
                onChange={(e) => setMonths(e.target.value as "12" | "24")}
                className="w-full px-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
              >
                <option value="12">12 Months of Statements</option>
                <option value="24">24 Months of Statements</option>
              </select>
            </div>
          </div>

          {/* Expense Factor Input (Only shown for business statements) */}
          {statementType === "business" && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                Estimated Expense Factor (%) — Standard is ~50%
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
                Lenders typically deduct ~50% for business overhead unless a CPA
                letter or P&L supports a lower ratio.
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-moss-deep text-primary-bg py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-moss-darker transition-colors flex items-center justify-center gap-2"
          >
            Calculate Estimated Monthly Income
          </button>
        </form>

        {qualifyingMonthlyIncome !== null && (
          <div className="mt-8 p-6 bg-cream/30 border border-line rounded-2xl text-center animate-in fade-in duration-300">
            <div className="text-xs uppercase tracking-wider text-ink-2 mb-1">
              Estimated Monthly Qualifying Income
            </div>
            <div className="text-4xl font-display font-bold text-moss-deep mb-2">
              $
              {qualifyingMonthlyIncome.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}{" "}
              / mo
            </div>
            <p className="text-xs sm:text-sm text-ink-2 max-w-md mx-auto">
              This estimate will be used alongside your existing monthly debt
              obligations to determine your Debt-to-Income (DTI) ratio.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
