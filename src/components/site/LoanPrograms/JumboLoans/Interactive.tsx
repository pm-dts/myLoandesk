"use client";

import { useState } from "react";

export function JumboCalculator() {
  const [price, setPrice] = useState<string>("");
  const [down, setDown] = useState<string>("30");
  const [rate, setRate] = useState<string>("6.9");
  const [term, setTerm] = useState<string>("30");

  const numPrice = parseFloat(price);
  const numDown = parseFloat(down);
  const numRate = parseFloat(rate);
  const numTerm = parseInt(term, 10);

  const isValid =
    !isNaN(numPrice) &&
    numPrice > 0 &&
    !isNaN(numDown) &&
    numDown >= 0 &&
    numDown < 100 &&
    !isNaN(numRate) &&
    numRate > 0;

  const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

  const monthlyPandI = (
    loanAmount: number,
    annualRatePct: number,
    termYears: number,
  ) => {
    const monthlyRate = annualRatePct / 100 / 12;
    const numPayments = termYears * 12;
    if (monthlyRate === 0) return loanAmount / numPayments;
    return (
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    );
  };

  const reserveGuidance = (loanAmount: number) => {
    if (loanAmount < 1500000) return "~6 months PITI";
    if (loanAmount < 5000000) return "~12 months PITI";
    if (loanAmount < 15000000) return "~18–24 months PITI";
    return "24+ months, case-by-case";
  };

  const loanAmount = isValid ? numPrice * (1 - numDown / 100) : 0;
  const payment = isValid ? monthlyPandI(loanAmount, numRate, numTerm) : 0;
  const reserves = isValid ? reserveGuidance(loanAmount) : "";

  let tierLabel = "";
  let tierColor = "";
  if (isValid) {
    if (loanAmount <= 832750) {
      tierLabel = "Within typical conforming range";
      tierColor = "#8F8A7C";
    } else if (loanAmount < 2500000) {
      tierLabel = "Jumbo range";
      tierColor = "#D9722C";
    } else {
      tierLabel = "Super Jumbo range";
      tierColor = "#F5C89A";
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1C1C1C] p-[30px] text-white before:pointer-events-none before:absolute before:-right-[60px] before:-top-[60px] before:h-[200px] before:w-[200px] before:rounded-full before:bg-[radial-gradient(circle,rgba(217,114,44,0.35),transparent_70%)]">
      <div className="relative z-10 font-sans text-xs font-bold uppercase tracking-[0.08em] text-[#D9B896]">
        Jumbo Payment Estimator
      </div>
      <div className="relative z-10 mb-5 text-[13px] text-[#C9C4B8]">
        See your estimated loan amount and payment.
      </div>

      <div className="relative z-10 mb-3.5">
        <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
          Purchase price
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
            $
          </span>
          <input
            type="number"
            inputMode="numeric"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="4,500,000"
            className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[30px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-3">
        <div className="mb-3.5">
          <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
            Down payment
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
              %
            </span>
            <input
              type="number"
              inputMode="numeric"
              value={down}
              onChange={(e) => setDown(e.target.value)}
              placeholder="30"
              className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[26px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
            />
          </div>
        </div>
        <div className="mb-3.5">
          <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
            Est. rate
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[15px] text-[#8F8A7C]">
              %
            </span>
            <input
              type="number"
              step="0.1"
              inputMode="decimal"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="6.9"
              className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] py-3 pl-[26px] pr-3.5 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 placeholder:text-[#6E6A5F] focus:border-[#D9722C] focus:bg-white/10"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mb-3.5">
        <label className="mb-1.5 block text-[12.5px] font-semibold text-[#C9C4B8]">
          Loan term
        </label>
        <select
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="w-full rounded-[10px] border border-white/20 bg-white/[0.07] px-3.5 py-3 font-sans text-[15px] font-semibold text-white outline-none transition duration-150 focus:border-[#D9722C] focus:bg-white/10"
        >
          <option value="30" className="bg-[#1C1C1C] text-white">
            30-year fixed
          </option>
          <option value="15" className="bg-[#1C1C1C] text-white">
            15-year fixed
          </option>
        </select>
      </div>

      {isValid && (
        <div className="relative z-10 mt-5 border-t border-white/15 pt-5 text-[13.5px] text-[#C9C4B8]">
          <div className="flex items-baseline justify-between py-1.5">
            <span>Loan amount</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {fmt(loanAmount)}
            </strong>
          </div>
          <div className="mt-1.5 flex items-baseline justify-between border-t border-white/15 pt-3">
            <span>Est. monthly P&amp;I</span>
            <strong className="font-sans text-[19px] font-bold text-[#F5C89A]">
              {fmt(payment)}/mo
            </strong>
          </div>
          <div className="flex items-baseline justify-between py-1.5">
            <span>Suggested reserves</span>
            <strong className="font-sans text-[15px] font-bold text-white">
              {reserves}
            </strong>
          </div>
        </div>
      )}

      {isValid && tierLabel && (
        <div className="mt-2.5">
          <span
            className="inline-block rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-sans text-[11.5px] font-bold"
            style={{ color: tierColor }}
          >
            {tierLabel}
          </span>
        </div>
      )}
    </div>
  );
}

export function JumboPathSelector() {
  const [activePath, setActivePath] = useState<string>("full");

  const paths = [
    { id: "full", label: "Full Documentation" },
    { id: "bank", label: "Bank Statement" },
    { id: "asset", label: "Asset Depletion" },
    { id: "foreign", label: "Foreign National" },
    { id: "dscr", label: "DSCR Investment" },
  ];

  return (
    <div>
      <div className="mb-[22px] mt-[18px] flex flex-wrap gap-1.5">
        {paths.map((path) => (
          <button
            key={path.id}
            type="button"
            onClick={() => setActivePath(path.id)}
            className={`rounded-full border px-[15px] py-[9px] font-sans text-[12.5px] font-bold transition-colors ${
              activePath === path.id
                ? "border-[#1C1C1C] bg-[#1C1C1C] text-white"
                : "border-[#E6E0D3] bg-white text-[#1C1C1C] hover:border-[#D9722C] hover:text-[#B85A1C]"
            }`}
          >
            {path.label}
          </button>
        ))}
      </div>

      {activePath === "full" && (
        <div className="rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-6 sm:p-[26px]">
          <span className="mb-2 block font-sans text-[11.5px] font-bold uppercase text-[#B85A1C]">
            Traditional Income Documentation
          </span>
          <h3 className="mb-2.5 font-serif text-[19px] font-semibold text-[#1C1C1C]">
            Full Documentation
          </h3>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            The traditional route — W-2s, pay stubs, and tax returns document
            your income directly. For borrowers with straightforward,
            well-documented income, this path often unlocks the most competitive
            pricing.
          </p>
          <ul className="m-0 list-none p-0">
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              Best for salaried employees and borrowers with consistent,
              provable income
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              Typically the most competitive rate tier
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              Full underwriting of income, assets, and credit history
            </li>
          </ul>
        </div>
      )}

      {activePath === "bank" && (
        <div className="rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-6 sm:p-[26px]">
          <span className="mb-2 block font-sans text-[11.5px] font-bold uppercase text-[#B85A1C]">
            For Business Owners
          </span>
          <h3 className="mb-2.5 font-serif text-[19px] font-semibold text-[#1C1C1C]">
            Bank Statement Qualification
          </h3>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            Built for self-employed borrowers whose tax returns understate real
            cash flow after business deductions. Qualifying income is calculated
            from 12–24 months of bank deposits instead of tax returns.
          </p>
          <ul className="m-0 list-none p-0">
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              Best for business owners, 1099 contractors, and freelancers
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              No tax returns required to qualify
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              Personal or business bank statements may be used, depending on the
              program
            </li>
          </ul>
        </div>
      )}

      {activePath === "asset" && (
        <div className="rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-6 sm:p-[26px]">
          <span className="mb-2 block font-sans text-[11.5px] font-bold uppercase text-[#B85A1C]">
            For High-Net-Worth Borrowers
          </span>
          <h3 className="mb-2.5 font-serif text-[19px] font-semibold text-[#1C1C1C]">
            Asset Depletion / Asset Utilization
          </h3>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            Your liquid assets — investment accounts, retirement accounts, and
            cash — are converted into a qualifying monthly income figure. A
            strong fit for retirees or borrowers whose wealth is held in assets
            rather than reflected on a pay stub.
          </p>
          <ul className="m-0 list-none p-0">
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              Best for retirees, investors, and asset-rich, income-light
              borrowers
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              Qualifying income is calculated from eligible liquid assets over a
              set term
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              Little or no reliance on traditional employment income
            </li>
          </ul>
        </div>
      )}

      {activePath === "foreign" && (
        <div className="rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-6 sm:p-[26px]">
          <span className="mb-2 block font-sans text-[11.5px] font-bold uppercase text-[#B85A1C]">
            For International Buyers
          </span>
          <h3 className="mb-2.5 font-serif text-[19px] font-semibold text-[#1C1C1C]">
            Foreign National Program
          </h3>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            Designed for international buyers purchasing U.S. property without
            U.S. credit history or domestic income documentation. Typically
            requires a larger down payment in exchange for added underwriting
            flexibility.
          </p>
          <ul className="m-0 list-none p-0">
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              Best for non-U.S. citizens without a U.S. credit file
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              Foreign income and asset documentation accepted
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              Larger down payment generally required in place of a U.S. credit
              history
            </li>
          </ul>
        </div>
      )}

      {activePath === "dscr" && (
        <div className="rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-6 sm:p-[26px]">
          <span className="mb-2 block font-sans text-[11.5px] font-bold uppercase text-[#B85A1C]">
            For Investment Properties
          </span>
          <h3 className="mb-2.5 font-serif text-[19px] font-semibold text-[#1C1C1C]">
            DSCR Investment Qualification
          </h3>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            Purchasing a luxury rental or investment property above conforming
            limits? Qualify based on the property's rental income relative to
            its debt payments, rather than your personal income.
          </p>
          <ul className="m-0 list-none p-0">
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              Best for luxury rental, vacation rental, and investment properties
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              No personal income or employment verification required
            </li>
            <li className="relative mb-2 pl-5 text-[14px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
              Qualification is based on the property's own cash flow
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
