"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Fraunces } from "next/font/google";
import {
  Calculator as CalcIcon,
  RefreshCw,
  DollarSign,
  BarChart2,
  Home,
  HandCoins,
  ArrowRight,
  X,
  ClipboardCheck,
} from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// --- REUSABLE UI COMPONENTS ---

const formatCurrency = (val: number, locale = "en") =>
  new Intl.NumberFormat(locale === "es" ? "es-US" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(val);

const CustomSlider = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
  valueDisplay,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (val: number) => void;
  valueDisplay: string;
}) => {
  const range = max - min;
  const rawPercentage = range === 0 ? 0 : ((value - min) / range) * 100;
  const percentage = Math.max(0, Math.min(100, rawPercentage));

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-[15px] font-medium text-gray-800">{label}</label>
        <span className="text-[17px] font-bold text-gray-900">
          {valueDisplay}
        </span>
      </div>
      <div className="relative h-2 rounded-full bg-[#1A2639] w-full mt-3">
        <div
          className="absolute top-0 left-0 h-full bg-[#FF6B00] rounded-full pointer-events-none"
          style={{ width: `${percentage}%` }}
        ></div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#FF6B00] rounded-full pointer-events-none shadow-sm"
          style={{ left: `calc(${percentage}% - 10px)` }}
        ></div>
      </div>
    </div>
  );
};

const CustomInput = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
}) => (
  <div className="w-full">
    <label className="block text-[15px] font-medium text-gray-800 mb-2">
      {label}
    </label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 focus:border-[#FF6B00] transition-all"
    />
  </div>
);

const CustomSelect = ({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: number;
  options: { label: string; value: number }[];
  onChange: (val: number) => void;
}) => (
  <div className="w-full">
    <label className="block text-[15px] font-medium text-gray-800 mb-2">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 focus:border-[#FF6B00] transition-all bg-white"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

// --- INDIVIDUAL CALCULATORS ---

const PurchaseCalculator = ({ locale }: { locale: string }) => {
  const t = useTranslations("Home.CalculatorsHub.purchase_calc");
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [interestRate, setInterestRate] = useState("6.5");
  const [loanTerm, setLoanTerm] = useState(30);

  const dpPercent = ((downPayment / homePrice) * 100).toFixed(1);
  const p = homePrice - downPayment;
  const r = (Number(interestRate) || 0) / 100 / 12;
  const n = loanTerm * 12;
  const payment =
    r === 0 ? p / n : (p * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

  return (
    <>
      <CustomSlider
        label={t("home_price")}
        value={homePrice}
        min={50000}
        max={1000000}
        step={1000}
        onChange={(v) => {
          setHomePrice(v);
          setDownPayment(v * (Number(dpPercent) / 100));
        }}
        valueDisplay={formatCurrency(homePrice, locale)}
      />
      <CustomSlider
        label={t("down_payment")}
        value={downPayment}
        min={0}
        max={homePrice}
        step={1000}
        onChange={setDownPayment}
        valueDisplay={`${formatCurrency(downPayment, locale)} (${dpPercent}%)`}
      />
      <div className="grid grid-cols-2 gap-4 mb-8">
        <CustomInput
          label={t("interest_rate")}
          value={interestRate}
          onChange={setInterestRate}
        />
        <CustomSelect
          label={t("loan_term")}
          value={loanTerm}
          onChange={setLoanTerm}
          options={[
            { label: t("terms.15"), value: 15 },
            { label: t("terms.20"), value: 20 },
            { label: t("terms.30"), value: 30 },
          ]}
        />
      </div>
      <ResultBox
        label={t("result_label")}
        value={`${formatCurrency(payment, locale)}/mo`}
      />
    </>
  );
};

const RefinanceCalculator = ({ locale }: { locale: string }) => {
  const t = useTranslations("Home.CalculatorsHub.refinance_calc");
  const [currentPI, setCurrentPI] = useState(2500);
  const [balance, setBalance] = useState(300000);
  const [interestRate, setInterestRate] = useState("5.5");

  const r = (Number(interestRate) || 0) / 100 / 12;
  const n = 360;
  const newPayment =
    r === 0
      ? balance / n
      : (balance * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

  const savings = Math.max(0, currentPI - newPayment);
  const closingCosts = balance * 0.02125;
  const breakEvenMonths = savings > 0 ? Math.round(closingCosts / savings) : 0;

  return (
    <>
      <CustomSlider
        label={t("current_pi")}
        value={currentPI}
        min={500}
        max={10000}
        step={50}
        onChange={setCurrentPI}
        valueDisplay={formatCurrency(currentPI, locale)}
      />
      <CustomSlider
        label={t("remaining_balance")}
        value={balance}
        min={10000}
        max={1000000}
        step={1000}
        onChange={setBalance}
        valueDisplay={formatCurrency(balance, locale)}
      />
      <div className="mb-8 mt-6">
        <CustomInput
          label={t("new_rate")}
          value={interestRate}
          onChange={setInterestRate}
        />
      </div>
      <div className="bg-[#FFF4ED] rounded-xl py-8 px-6 text-center border border-[#FFE4D6]">
        <p className="text-[#FF6B00] text-sm font-bold uppercase tracking-wider mb-2">
          {t("savings_label")}
        </p>
        <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          {formatCurrency(savings, locale)}
        </p>
        <p className="text-gray-500 text-[15px]">
          {t("breakeven_prefix")}{" "}
          <span className="font-bold text-gray-900">
            {breakEvenMonths} {t("breakeven_suffix")}
          </span>
        </p>
      </div>
    </>
  );
};

const AffordabilityCalculator = ({ locale }: { locale: string }) => {
  const t = useTranslations("Home.CalculatorsHub.affordability_calc");
  const [income, setIncome] = useState(100000);
  const [downPayment, setDownPayment] = useState(40000);
  const [debt, setDebt] = useState(500);
  const [interestRate, setInterestRate] = useState("6.5");

  const monthlyIncome = income / 12;
  const maxPayment = Math.max(0, monthlyIncome * 0.36 - debt);
  const monthlyRate = (Number(interestRate) || 0) / 100 / 12;
  const loanTermMonths = 30 * 12;
  const paymentFactor =
    monthlyRate === 0
      ? 1 / loanTermMonths
      : (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths)) /
        (Math.pow(1 + monthlyRate, loanTermMonths) - 1);
  const maxLoanAmount = maxPayment / paymentFactor;
  const estimatedHomePrice = Math.max(0, maxLoanAmount + downPayment);

  return (
    <>
      <CustomSlider
        label={t("income")}
        value={income}
        min={30000}
        max={500000}
        step={1000}
        onChange={setIncome}
        valueDisplay={formatCurrency(income, locale)}
      />
      <CustomSlider
        label={t("debts")}
        value={debt}
        min={0}
        max={5000}
        step={50}
        onChange={setDebt}
        valueDisplay={`${formatCurrency(debt, locale)}/mo`}
      />
      <CustomSlider
        label={t("down_payment")}
        value={downPayment}
        min={0}
        max={200000}
        step={1000}
        onChange={setDownPayment}
        valueDisplay={formatCurrency(downPayment, locale)}
      />
      <CustomInput
        label={t("interest_rate")}
        value={interestRate}
        onChange={setInterestRate}
      />
      <div className="mt-4">
        <ResultBox
          label={t("result_label")}
          value={formatCurrency(estimatedHomePrice, locale)}
        />
      </div>
    </>
  );
};

const LoanEligibilityCalculator = ({ locale }: { locale: string }) => {
  const t = useTranslations("Home.CalculatorsHub.eligibility_calc");
  const [income, setIncome] = useState(120000);
  const [monthlyDebts, setMonthlyDebts] = useState(600);
  const [targetMortgage, setTargetMortgage] = useState(2500);

  const monthlyIncome = income / 12;
  const totalMonthlyDebt = monthlyDebts + targetMortgage;
  const dti = monthlyIncome > 0 ? (totalMonthlyDebt / monthlyIncome) * 100 : 0;

  let statusText = "";
  let statusColor = "";

  if (dti <= 36) {
    statusText = t("status.excellent");
    statusColor = "text-[#10B981]";
  } else if (dti <= 43) {
    statusText = t("status.good");
    statusColor = "text-[#3B82F6]";
  } else if (dti <= 50) {
    statusText = t("status.borderline");
    statusColor = "text-[#F59E0B]";
  } else {
    statusText = t("status.high");
    statusColor = "text-[#EF4444]";
  }

  return (
    <>
      <CustomSlider
        label={t("income")}
        value={income}
        min={30000}
        max={500000}
        step={1000}
        onChange={setIncome}
        valueDisplay={formatCurrency(income, locale)}
      />
      <CustomSlider
        label={t("debts")}
        value={monthlyDebts}
        min={0}
        max={5000}
        step={50}
        onChange={setMonthlyDebts}
        valueDisplay={`${formatCurrency(monthlyDebts, locale)}/mo`}
      />
      <CustomSlider
        label={t("target_mortgage")}
        value={targetMortgage}
        min={500}
        max={10000}
        step={50}
        onChange={setTargetMortgage}
        valueDisplay={`${formatCurrency(targetMortgage, locale)}/mo`}
      />

      <div className="bg-[#FFF4ED] rounded-xl py-6 px-6 text-center border border-[#FFE4D6] mt-8">
        <p className="text-[#FF6B00] text-sm font-bold uppercase tracking-wider mb-2">
          {t("dti_label")}
        </p>
        <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">
          {dti.toFixed(1)}%
        </p>
        <p className={`text-base font-semibold ${statusColor}`}>
          {t("status_label")} {statusText}
        </p>
      </div>
    </>
  );
};

const AmortizationCalculator = ({ locale }: { locale: string }) => {
  const t = useTranslations("Home.CalculatorsHub.amortization_calc");
  const [loanAmount, setLoanAmount] = useState(350000);
  const [interestRate, setInterestRate] = useState("6.5");
  const [loanTerm, setLoanTerm] = useState(30);

  const schedule = [];
  let balance = loanAmount;
  const r = (Number(interestRate) || 0) / 100 / 12;
  const n = loanTerm * 12;
  const payment =
    r === 0
      ? balance / n
      : (balance * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

  for (let year = 1; year <= loanTerm; year++) {
    let yearlyPrincipal = 0;
    let yearlyInterest = 0;

    for (let month = 1; month <= 12; month++) {
      if (balance <= 0) break;
      const interest = balance * r;
      let principal = payment - interest;

      if (balance < principal) {
        principal = balance;
      }

      yearlyInterest += interest;
      yearlyPrincipal += principal;
      balance -= principal;
    }

    schedule.push({
      year,
      principalPaid: yearlyPrincipal,
      interestPaid: yearlyInterest,
      remainingBalance: Math.max(0, balance),
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="w-full">
          <label className="block text-[15px] font-medium text-gray-900 mb-2">
            {t("loan_amount")}
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 focus:border-[#FF6B00] transition-all"
          />
        </div>
        <div className="w-full">
          <label className="block text-[15px] font-medium text-gray-900 mb-2">
            {t("rate")}
          </label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 focus:border-[#FF6B00] transition-all"
          />
        </div>
        <div className="w-full">
          <label className="block text-[15px] font-medium text-gray-900 mb-2">
            {t("term")}
          </label>
          <select
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 focus:border-[#FF6B00] transition-all bg-white"
          >
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="max-h-[320px] overflow-y-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-white text-[#6B7280] sticky top-0 border-b border-gray-200 z-10">
              <tr>
                <th className="py-4 px-4 font-medium">{t("table.year")}</th>
                <th className="py-4 px-4 font-medium text-center">
                  {t("table.principal_paid")}
                </th>
                <th className="py-4 px-4 font-medium text-center">
                  {t("table.interest_paid")}
                </th>
                <th className="py-4 px-4 font-medium text-right">
                  {t("table.remaining_balance")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {schedule.map((row) => (
                <tr key={row.year} className="bg-white">
                  <td className="py-4 px-4 text-gray-900">{row.year}</td>
                  <td className="py-4 px-4 text-center text-gray-900">
                    {formatCurrency(row.principalPaid, locale)}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-900">
                    {formatCurrency(row.interestPaid, locale)}
                  </td>
                  <td className="py-4 px-4 text-right text-gray-900 font-medium">
                    {formatCurrency(row.remainingBalance, locale)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const RentVsBuyCalculator = ({ locale }: { locale: string }) => {
  const t = useTranslations("Home.CalculatorsHub.rent_vs_buy_calc");
  const [rent, setRent] = useState(2500);
  const [homePrice, setHomePrice] = useState(450000);
  const [rentIncrease, setRentIncrease] = useState("3");

  let breakEvenYear = "30+";
  let rentTotal = 0;
  let buyTotal = homePrice * 0.03;
  let currentAnnualRent = rent * 12;
  const rentIncRate = (Number(rentIncrease) || 0) / 100;
  const annualBuyCost = homePrice * 0.081;

  for (let year = 1; year <= 30; year++) {
    rentTotal += currentAnnualRent;
    buyTotal += annualBuyCost;

    if (buyTotal <= rentTotal) {
      breakEvenYear = year.toString();
      break;
    }
    currentAnnualRent *= 1 + rentIncRate;
  }

  return (
    <>
      <CustomSlider
        label={t("rent")}
        value={rent}
        min={500}
        max={10000}
        step={50}
        onChange={setRent}
        valueDisplay={formatCurrency(rent, locale)}
      />
      <CustomSlider
        label={t("home_price")}
        value={homePrice}
        min={50000}
        max={2000000}
        step={5000}
        onChange={setHomePrice}
        valueDisplay={formatCurrency(homePrice, locale)}
      />
      <div className="mb-8 mt-6">
        <CustomInput
          label={t("rent_increase")}
          value={rentIncrease}
          onChange={setRentIncrease}
        />
      </div>
      <div className="bg-[#FFF4ED] rounded-xl py-8 px-6 text-center border border-[#FFE4D6]">
        <p className="text-[#FF6B00] text-sm font-bold uppercase tracking-wider mb-2">
          {t("result_label")}
        </p>
        <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          {t("year_prefix")} {breakEvenYear}
        </p>
      </div>
    </>
  );
};

const HelocCalculator = ({ locale }: { locale: string }) => {
  const t = useTranslations("Home.CalculatorsHub.heloc_calc");
  const [homeValue, setHomeValue] = useState(600000);
  const [mortgageBalance, setMortgageBalance] = useState(350000);
  const maxAvailableEquity = Math.max(0, homeValue * 0.8 - mortgageBalance);

  return (
    <>
      <CustomSlider
        label={t("home_value")}
        value={homeValue}
        min={100000}
        max={2000000}
        step={5000}
        onChange={(v) => {
          setHomeValue(v);
          if (mortgageBalance > v) {
            setMortgageBalance(v);
          }
        }}
        valueDisplay={formatCurrency(homeValue, locale)}
      />
      <CustomSlider
        label={t("balance")}
        value={mortgageBalance}
        min={0}
        max={homeValue}
        step={1000}
        onChange={setMortgageBalance}
        valueDisplay={formatCurrency(mortgageBalance, locale)}
      />
      <ResultBox
        label={t("result_label")}
        value={formatCurrency(maxAvailableEquity, locale)}
      />
    </>
  );
};

// --- MODAL WRAPPER & RESULT BOX ---

const ResultBox = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-[#FFF4ED] rounded-xl py-8 px-6 text-center border border-[#FFE4D6]">
    <p className="text-[#FF6B00] text-sm font-bold uppercase tracking-wider mb-2">
      {label}
    </p>
    <p className="text-4xl font-bold text-gray-900 tracking-tight">
      {value.split("/mo").map((part, i) =>
        i === 0 ? (
          part
        ) : (
          <span key={i} className="text-2xl text-gray-500 font-medium">
            /mo
          </span>
        ),
      )}
    </p>
  </div>
);

const CalculatorModal = ({
  title,
  isOpen,
  onClose,
  onReset,
  children,
}: {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onReset: () => void;
  children: React.ReactNode;
}) => {
  const t = useTranslations("Home.CalculatorsHub.modal");
  if (!isOpen) return null;
  const navigate = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    sendGTMEvent({
      event: "calculator_cta_clicked",
      category: "engagement",
      label: `Speak With Us Now - ${title}`,
      calculator_name: title,
      page_path: pathname || "/",
    });

    onClose();
    navigate.push("#start");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-gray-100 shrink-0">
          <h2
            className={`text-2xl sm:text-3xl text-gray-900 ${fraunces.className} pr-2`}
          >
            {title}
          </h2>
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold text-gray-500 hover:text-[#FF6B00] hover:bg-[#FFF4ED] transition-colors"
              title={t("reset")}
            >
              <RefreshCw size={16} />
              <span className="hidden sm:inline">{t("reset")}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-200 rounded-full transition-colors"
              title={t("close")}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="px-6 sm:px-8 py-6 overflow-y-auto">{children}</div>

        <div className="px-6 sm:px-8 py-6 border-t border-gray-100 text-center bg-gray-50 shrink-0">
          <p className="text-gray-500 text-sm mb-4">{t("cta_prompt")}</p>
          <button
            onClick={handleClick}
            className="w-full bg-[#FF6B00] text-white py-3.5 rounded-lg font-bold text-lg hover:bg-[#e66000] transition-colors shadow-md"
          >
            {t("cta_button")}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN HUB COMPONENT ---

interface CalculatorsHubProps {
  locale?: string;
}

export default function CalculatorsHub({ locale = "en" }: CalculatorsHubProps) {
  const t = useTranslations("Home.CalculatorsHub");
  const [activeCalc, setActiveCalc] = useState<string | null>(null);
  const [resetKey, setResetKey] = useState<number>(0);
  const pathname = usePathname();

  const calculators = [
    {
      id: "purchase",
      title: t("items.purchase.title"),
      cardLabel: t("items.purchase.card_label"),
      icon: CalcIcon,
      component: <PurchaseCalculator locale={locale} />,
    },
    {
      id: "refinance",
      title: t("items.refinance.title"),
      cardLabel: t("items.refinance.card_label"),
      icon: RefreshCw,
      component: <RefinanceCalculator locale={locale} />,
    },
    {
      id: "affordability",
      title: t("items.affordability.title"),
      cardLabel: t("items.affordability.card_label"),
      icon: DollarSign,
      component: <AffordabilityCalculator locale={locale} />,
    },
    {
      id: "eligibility",
      title: t("items.eligibility.title"),
      cardLabel: t("items.eligibility.card_label"),
      icon: ClipboardCheck,
      component: <LoanEligibilityCalculator locale={locale} />,
    },
    {
      id: "amortization",
      title: t("items.amortization.title"),
      cardLabel: t("items.amortization.card_label"),
      icon: BarChart2,
      component: <AmortizationCalculator locale={locale} />,
    },
    {
      id: "rentvsbuy",
      title: t("items.rentvsbuy.title"),
      cardLabel: t("items.rentvsbuy.card_label"),
      icon: Home,
      component: <RentVsBuyCalculator locale={locale} />,
    },
    {
      id: "heloc",
      title: t("items.heloc.title"),
      cardLabel: t("items.heloc.card_label"),
      icon: HandCoins,
      component: <HelocCalculator locale={locale} />,
    },
  ];

  const handleOpenCalculator = (calc: (typeof calculators)[number]) => {
    sendGTMEvent({
      event: "calculator_opened",
      category: "engagement",
      label: calc.title,
      calculator_id: calc.id,
      page_path: pathname || "/",
      locale,
    });

    setActiveCalc(calc.id);
    setResetKey(0);
  };

  const handleClose = () => {
    setActiveCalc(null);
    setResetKey(0);
  };

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
  };

  const currentCalc = calculators.find((c) => c.id === activeCalc);

  return (
    <section className="py-24 px-6 bg-[#F8F6F1]" id="calculator">
      <div className="max-w-5xl mx-auto">
        {/* Hub Header */}
        <div className="mb-12">
          <p className="text-[#FF6B00] font-bold uppercase tracking-wider text-sm mb-3">
            {t("badge")}
          </p>
          <h2
            className={`text-5xl md:text-6xl text-[#0F2027] mb-4 tracking-tight ${fraunces.className}`}
          >
            {t("heading")}
          </h2>
          <p className="text-lg text-gray-600 max-w-xl">{t("subheading")}</p>
        </div>

        {/* Grid of Calculators */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-6 max-w-4xl">
          {calculators.map((calc) => (
            <button
              key={calc.id}
              id={`calculator-${calc.id}`}
              onClick={() => handleOpenCalculator(calc)}
              className="flex items-center justify-between bg-white p-6 md:p-8 rounded-[24px] shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 group text-left border border-white hover:border-gray-100 scroll-mt-60"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#FFF4ED] flex items-center justify-center text-[#FF6B00] shrink-0 group-hover:scale-110 transition-transform">
                  <calc.icon size={26} strokeWidth={2} />
                </div>
                <h3
                  className={`text-2xl text-[#0F2027] leading-tight font-bold ${fraunces.className}`}
                >
                  {calc.cardLabel} <br />
                  {locale === "es" ? "Calculadora" : "Calculator"}
                </h3>
              </div>
              <ArrowRight
                size={24}
                className="text-gray-300 group-hover:text-[#FF6B00] transition-colors shrink-0"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Modal */}
      <CalculatorModal
        title={currentCalc?.title || ""}
        isOpen={!!activeCalc}
        onClose={handleClose}
        onReset={handleReset}
      >
        <div key={resetKey}>{currentCalc?.component}</div>
      </CalculatorModal>
    </section>
  );
}
