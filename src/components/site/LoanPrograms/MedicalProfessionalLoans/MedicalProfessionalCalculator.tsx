"use client";

import { useState } from "react";
import { Calculator, DollarSign, Stethoscope } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";

interface MedicalProfessionalCalculatorProps {
  pagePath: string;
  locale?: string;
}

export default function MedicalProfessionalCalculator({
  pagePath,
  locale = "en",
}: MedicalProfessionalCalculatorProps) {
  const t = useTranslations("MedicalProfessionalLoans.calculator");

  const [grossMonthlyIncome, setGrossMonthlyIncome] = useState<string>("16000");
  const [studentLoanBalance, setStudentLoanBalance] =
    useState<string>("220000");
  const [otherMonthlyDebt, setOtherMonthlyDebt] = useState<string>("800");
  const [calcResult, setCalcResult] = useState<{
    standardDti: number;
    specializedDti: number;
    dtiSavings: number;
  } | null>(null);

  const handleCalculateDti = (e: React.FormEvent) => {
    e.preventDefault();
    const income = parseFloat(grossMonthlyIncome.replace(/[^0-9.]/g, ""));
    const studentLoans = parseFloat(studentLoanBalance.replace(/[^0-9.]/g, ""));
    const otherDebt = parseFloat(otherMonthlyDebt.replace(/[^0-9.]/g, ""));

    if (income > 0) {
      // Standard Fannie/Freddie 1% monthly student loan payment assumption
      const standardMonthlyStudentPayment = studentLoans * 0.01;
      const standardTotalDebt = standardMonthlyStudentPayment + otherDebt;
      const standardDti = (standardTotalDebt / income) * 100;

      // Specialized Doctor Loan Income-Driven/Deferred payment calculation (~0.5% or IBR payment)
      const specializedMonthlyStudentPayment = studentLoans * 0.005;
      const specializedTotalDebt = specializedMonthlyStudentPayment + otherDebt;
      const specializedDti = (specializedTotalDebt / income) * 100;

      setCalcResult({
        standardDti,
        specializedDti,
        dtiSavings: standardDti - specializedDti,
      });

      sendGTMEvent({
        event: "medical_calculator_used",
        category: "engagement",
        label: "Doctor Loan DTI Estimator Run",
        gross_income: income,
        student_loan_balance: studentLoans,
        page_path: pagePath || "/medical-professional-loans",
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

        <form onSubmit={handleCalculateDti} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Gross Monthly Income */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                {t("income_label")}
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={grossMonthlyIncome}
                  onChange={(e) => setGrossMonthlyIncome(e.target.value)}
                  placeholder={t("income_placeholder")}
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Total Student Loan Balance */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                {t("student_debt_label")}
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={studentLoanBalance}
                  onChange={(e) => setStudentLoanBalance(e.target.value)}
                  placeholder={t("student_debt_placeholder")}
                  className="w-full pl-12 pr-4 py-3.5 bg-cream/20 border border-line rounded-xl text-ink text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Other Monthly Debt */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                {t("other_debt_label")}
              </label>
              <div className="relative">
                <DollarSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  value={otherMonthlyDebt}
                  onChange={(e) => setOtherMonthlyDebt(e.target.value)}
                  placeholder={t("other_debt_placeholder")}
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
            <Stethoscope size={18} /> {t("submit_button")}
          </button>
        </form>

        {calcResult !== null && (
          <div className="mt-8 p-6 bg-cream/30 border border-line rounded-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-ink-2 font-semibold">
                  {t("standard_dti_label")}
                </div>
                <div className="text-xl font-bold text-ink mt-1">
                  {calcResult.standardDti.toFixed(1)}%
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-moss-deep font-semibold">
                  {t("doctor_dti_label")}
                </div>
                <div className="text-2xl font-bold text-moss-deep mt-1">
                  {calcResult.specializedDti.toFixed(1)}%
                </div>
              </div>

              <div className="p-3 bg-primary-bg rounded-xl border border-line/50">
                <div className="text-[11px] uppercase tracking-wider text-brand-orange font-semibold">
                  {t("headroom_gained_label")}
                </div>
                <div className="text-xl font-bold text-brand-orange mt-1">
                  +{calcResult.dtiSavings.toFixed(1)}%
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
