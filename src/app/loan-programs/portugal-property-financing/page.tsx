import type { Metadata } from "next";
import Link from "next/link";
import PortugalCalculator from "@/components/site/LoanPrograms/PortugalLoans/Calculator";

export const metadata: Metadata = {
  title:
    "Property Financing in Portugal for Expats & Foreign Buyers | MyLoanDesk",
  description:
    "Financing for expats and foreign buyers purchasing residential, commercial, or investment property in Portugal. Estimate your Portuguese mortgage payment with our free calculator.",
  alternates: {
    canonical: "/loan-programs/portugal-property-financing/",
  },
  openGraph: {
    title:
      "Property Financing in Portugal for Expats & Foreign Buyers | MyLoanDesk",
    description:
      "Buying a home, investing in commercial real estate, or developing a new project in Portugal? Explore financing options through our network of lenders in Portugal.",
    url: "/loan-programs/portugal-property-financing/",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can foreigners get a mortgage to buy property in Portugal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Portugal places no legal restrictions on foreign ownership or foreign borrowing, and Portuguese banks regularly lend to both EU and non-EU non-residents. The main practical differences from a resident mortgage are a larger required deposit, more thorough documentation, and typically a somewhat higher rate spread.",
      },
    },
    {
      "@type": "Question",
      name: "How much deposit do I need as a non-resident buyer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-resident buyers should generally expect to put down at least 25-35% of the purchase price, since Portuguese banks typically cap non-resident financing around 60-75% loan-to-value. Some scenarios may allow for a smaller deposit or a higher loan-to-value, depending on the buyer's financial profile and the specific bank.",
      },
    },
    {
      "@type": "Question",
      name: "Does buying property in Portugal still qualify me for the Golden Visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Since October 2023, real estate purchases no longer qualify as an investment route for Portugal’s Golden Visa program. Property in Portugal can still be purchased and financed by foreign buyers, but it will not, on its own, grant Portuguese residency. Anyone considering the Golden Visa program should speak with an immigration attorney about the current qualifying routes, which no longer include real estate.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a Portuguese bank account or tax number (NIF) to get a mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally, yes. Most Portuguese lenders require a Portuguese tax identification number (NIF) and, in most cases, a Portuguese bank account to process a mortgage application, both of which can typically be set up before or during the financing process.",
      },
    },
    {
      "@type": "Question",
      name: "Can retirees qualify for a mortgage in Portugal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, retirees with a documented, regular pension income can generally qualify for a Portuguese mortgage. Loan terms are often structured so the loan is repaid by a certain age, which can shorten the available term for older borrowers, and adding a guarantor is sometimes used to extend borrowing capacity.",
      },
    },
    {
      "@type": "Question",
      name: "What’s the difference between fixed and variable rate mortgages in Portugal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Portuguese mortgages are commonly offered as either a fixed rate for a set period, or a variable rate tied to Euribor plus a bank spread, which adjusts periodically. Some products also offer a mixed structure, combining a fixed period followed by a variable one.",
      },
    },
    {
      "@type": "Question",
      name: "How long can a mortgage term be in Portugal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Portuguese mortgage terms can extend up to around 30-40 years for younger borrowers, though most banks require the loan to be fully repaid by a set age, often somewhere between 70 and 80, which effectively shortens the maximum term available to older borrowers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get financing for a commercial or investment property in Portugal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, though commercial and investment property financing typically comes with a lower loan-to-value than a primary residence — often around 50% of the purchase price or appraised value, whichever is lower — reflecting the higher risk profile banks assign to non-owner-occupied property.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the mortgage approval and closing process take in Portugal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Timelines vary, but buyers should generally plan for a longer process than a typical U.S. mortgage, given the additional documentation, valuation, and legal steps involved, including the final signing at a notary (the "escritura"). Working with a broker experienced in the Portuguese market can help keep the process moving efficiently.',
      },
    },
  ],
};

export default function PortugalPropertyFinancingPage() {
  return (
    <div className="min-h-screen bg-[#EDEAE2] text-[#55524C] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-[900px] bg-[#FBF8F2] px-[22px] py-8 sm:px-14 sm:py-[44px] sm:pb-[60px]">
        {/* Back Link */}
        <Link
          href="/loan-programs"
          className="mb-[18px] inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#55524C] transition-colors hover:text-[#B85A1C]"
        >
          &larr; Back to Loan Programs
        </Link>

        {/* Header */}
        <h1 className="mb-[18px] font-serif text-[34px] font-bold leading-[1.18] text-[#1C1C1C]">
          Property Financing in Portugal
        </h1>
        <hr className="mb-[26px] border-0 border-t border-[#E6E0D3]" />

        {/* Hero Section */}
        <div className="mb-1.5 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.02em] text-[#B85A1C]">
              Buying or relocating to Portugal? Financing is more accessible
              than most expats expect.
            </div>
            <p className="mb-6 max-w-[680px] text-[15.5px] leading-[1.7] text-[#55524C]">
              Whether you're buying a home, investing in commercial real estate,
              or developing a new project, MyLoanDesk helps qualified borrowers
              explore financing options through our network of lenders in
              Portugal. Portuguese banks lend openly to foreign buyers — there
              are no legal restrictions on foreign ownership or foreign
              borrowing — but the process looks different from a U.S. mortgage,
              and knowing what to expect makes all the difference.
            </p>
            <div className="mt-[18px] flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-[13.5px] text-[#55524C]">
                <svg
                  className="shrink-0"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#D9722C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Open to both EU and non-EU foreign buyers</span>
              </div>
              <div className="flex items-center gap-2 text-[13.5px] text-[#55524C]">
                <svg
                  className="shrink-0"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#D9722C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Residential, commercial, and construction financing</span>
              </div>
              <div className="flex items-center gap-2 text-[13.5px] text-[#55524C]">
                <svg
                  className="shrink-0"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#D9722C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Fixed and variable rate options available</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <PortugalCalculator />
        </div>

        <p className="mt-1.5 max-w-[680px] text-[11.5px] text-[#9A9585]">
          Estimate only, in euros. Does not include Portuguese property transfer
          tax (IMT), stamp duty, notary, or registration costs, which are
          separate and typically due at signing. Actual terms depend on the
          bank, your residency status, and your full financial profile.
        </p>

        {/* How Property Financing Works in Portugal */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          How Property Financing Works in Portugal
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          Portuguese banks offer what's called <em>Crédito à Habitação</em> —
          home loan financing — to both tax residents and non-residents,
          including American and other foreign buyers. Unlike some countries
          that restrict foreign ownership, Portugal imposes no special permits
          or restrictions on international buyers purchasing or financing
          property.
        </p>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          The practical differences for a non-resident borrower come down to a
          few things: a larger required deposit than a resident would need, more
          thorough documentation of foreign income and assets, and typically a
          slightly wider rate spread. The overall process, however, follows the
          same conventional mortgage market structure — there are no Islamic
          finance principles or other non-standard frameworks involved, just
          fixed and variable rate lending similar in concept to a U.S. mortgage,
          adapted to Portuguese banking practice.
        </p>

        {/* How the Process Works */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          How the Process Works
        </h2>
        <div className="max-w-[700px] space-y-4">
          {[
            {
              step: "1",
              title: "Get your NIF and a Portuguese bank account.",
              desc: "A Portuguese tax number (NIF) and, in most cases, a local bank account are needed before a bank will process your application.",
            },
            {
              step: "2",
              title: "Get pre-approved.",
              desc: "We help you understand your realistic borrowing power before you commit to a property.",
            },
            {
              step: "3",
              title: "Submit documentation.",
              desc: "Proof of income, assets, credit history, and identification — foreign income documentation is reviewed carefully.",
            },
            {
              step: "4",
              title: "Bank valuation and approval.",
              desc: "The bank appraises the property and finalizes your loan terms.",
            },
            {
              step: "5",
              title: "Sign at the notary.",
              desc: 'The final purchase and mortgage are formalized at the "escritura" — the official deed signing.',
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-3.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D9722C] font-sans text-[13px] font-bold text-white">
                {item.step}
              </div>
              <div className="pt-[3px] text-[14.5px] leading-[1.6] text-[#55524C]">
                <strong className="text-[#1C1C1C]">{item.title}</strong>{" "}
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Program Highlights */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          Program Highlights
        </h2>
        <div className="mb-3.5 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
          What's included:
        </div>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {[
            "Financing for residential, commercial, and construction/development projects",
            "Open to both EU and non-EU foreign nationals",
            "Fixed, variable (Euribor-indexed), and mixed-rate loan structures available",
            "Terms extending up to roughly 30 years for younger borrowers",
            "Financing available to retirees with documented pension income",
            "Guarantor arrangements available in some scenarios to extend borrowing capacity",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Deposit & Loan-to-Value */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          A Note on Deposit &amp; Loan-to-Value
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          Portuguese banks generally lend a smaller percentage of the purchase
          price to non-residents than to tax residents. As a general guide:
        </p>
        <div className="overflow-x-auto">
          <table className="my-3.5 mb-2 max-w-[640px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b-2 border-[#E6E0D3] bg-[#F3EFE6] text-left font-bold text-[#1C1C1C]">
                <th className="p-[9px_12px]">Buyer Profile</th>
                <th className="p-[9px_12px]">Typical Loan-to-Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[9px_12px] text-[#55524C]">
                  Resident, primary residence
                </td>
                <td className="p-[9px_12px] text-[#55524C]">Up to 80–90%</td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[9px_12px] text-[#55524C]">
                  Non-resident, primary or second home
                </td>
                <td className="p-[9px_12px] text-[#55524C]">Around 60–75%</td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[9px_12px] text-[#55524C]">
                  Non-resident, commercial or investment property
                </td>
                <td className="p-[9px_12px] text-[#55524C]">Around 50%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[13px] leading-[1.75] text-[#8F8A7C]">
          These figures are general market guidance, not a commitment — actual
          loan-to-value depends on the bank, the property, and your full
          financial profile.
        </p>

        {/* Golden Visa Clarification */}
        <div className="my-[18px] mb-[30px] rounded-xl border border-[#EAD3AC] bg-[#FBF3E8] p-[22px_26px]">
          <div className="mb-2.5 flex items-center gap-1.5 font-sans text-[12.5px] font-bold uppercase tracking-[0.03em] text-[#9A6B1F]">
            ⚠ Important — Golden Visa Clarification
          </div>
          <p className="mb-2.5 text-[14.5px] leading-[1.7] text-[#55524C]">
            Many buyers researching Portugal still associate property purchases
            with the country's Golden Visa residency-by-investment program.{" "}
            <strong>That's no longer accurate.</strong>
            Since October 2023, real estate purchases no longer qualify as an
            investment route for the Golden Visa program — that door closed
            under Portugal's "Mais Habitação" housing law.
          </p>
          <p className="mb-0 text-[14.5px] leading-[1.7] text-[#55524C]">
            You can absolutely still buy and finance property in Portugal as a
            foreign buyer — that hasn't changed. But it will not, by itself,
            grant you Portuguese residency or a path to the Golden Visa. If
            residency is part of your goal, that's a separate conversation for
            an immigration attorney, not something this financing accomplishes
            on its own. We'd rather tell you that plainly upfront than let a
            common misconception shape your decision.
          </p>
        </div>

        {/* Strategic Advantages */}
        <div className="my-[18px] mb-[30px] rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-[26px_28px]">
          <div className="mb-3 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
            Strategic Advantages:
          </div>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            Financing a portion of your purchase rather than paying entirely in
            cash can free up capital for renovations, furnishing, or simply
            keeping a larger reserve — leverage can open up better-located or
            larger properties than a cash-only budget would allow.
          </p>
          <p className="mb-0 text-[14.5px] leading-[1.7] text-[#55524C]">
            Working with a broker familiar with the Portuguese non-resident
            lending process matters — applications from foreign buyers are
            evaluated a little differently than a typical local file, and
            knowing how to present income, assets, and documentation in a way
            Portuguese underwriters expect can meaningfully affect your approval
            and terms.
          </p>
        </div>

        {/* Who This Is For */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          Who This Is For
        </h2>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {[
            "American and other foreign buyers purchasing a home in Portugal",
            "Retirees relocating to Portugal with documented pension income",
            "Second-home buyers looking for a European base",
            "Investors purchasing rental or commercial property in Portugal",
            "Buyers developing or renovating property, including construction financing needs",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* What You'll Likely Need */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          What You'll Likely Need
        </h2>
        <div className="mb-3 grid max-w-[700px] grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          {[
            "Portuguese tax number (NIF)",
            "Portuguese bank account",
            "Valid passport / government ID",
            "Proof of income (pay stubs, tax returns, or pension statements)",
            "Recent bank and asset statements",
            "Credit history documentation from your home country",
          ].map((doc, idx) => (
            <div
              key={idx}
              className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]"
            >
              {doc}
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          Resident vs. Non-Resident Financing
        </h2>
        <div className="overflow-x-auto">
          <table className="my-[18px] mb-[30px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-[#1C1C1C] text-left font-bold text-white">
                <th className="p-[11px_14px]"></th>
                <th className="p-[11px_14px]">Portuguese Tax Resident</th>
                <th className="p-[11px_14px]">
                  Non-Resident (Expat/Foreign Buyer)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Typical deposit
                </td>
                <td className="p-[11px_14px] text-[#55524C]">10–20%</td>
                <td className="p-[11px_14px] text-[#55524C]">25–35%+</td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Loan-to-value
                </td>
                <td className="p-[11px_14px] text-[#55524C]">Up to 80–90%</td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Typically 60–75%
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Documentation
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Standard local income documentation
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Fuller documentation of foreign income and assets
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Rate spread
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Standard local pricing
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Often slightly wider
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  NIF / local bank account required
                </td>
                <td className="p-[11px_14px] text-[#55524C]">Yes</td>
                <td className="p-[11px_14px] text-[#55524C]">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Frequently Asked Questions */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          Frequently Asked Questions
        </h2>
        <div>
          {[
            {
              q: "Can foreigners get a mortgage to buy property in Portugal?",
              a: "Yes. Portugal places no legal restrictions on foreign ownership or foreign borrowing, and Portuguese banks regularly lend to both EU and non-EU non-residents. The main practical differences from a resident mortgage are a larger required deposit, more thorough documentation, and typically a somewhat higher rate spread.",
            },
            {
              q: "How much deposit do I need as a non-resident buyer?",
              a: "Non-resident buyers should generally expect to put down at least 25-35% of the purchase price, since Portuguese banks typically cap non-resident financing around 60-75% loan-to-value. Some scenarios may allow for a smaller deposit or a higher loan-to-value, depending on the buyer's financial profile and the specific bank.",
            },
            {
              q: "Does buying property in Portugal still qualify me for the Golden Visa?",
              a: "No. Since October 2023, real estate purchases no longer qualify as an investment route for Portugal’s Golden Visa program. Property in Portugal can still be purchased and financed by foreign buyers, but it will not, on its own, grant Portuguese residency. Anyone considering the Golden Visa program should speak with an immigration attorney about the current qualifying routes, which no longer include real estate.",
            },
            {
              q: "Do I need a Portuguese bank account or tax number (NIF) to get a mortgage?",
              a: "Generally, yes. Most Portuguese lenders require a Portuguese tax identification number (NIF) and, in most cases, a Portuguese bank account to process a mortgage application, both of which can typically be set up before or during the financing process.",
            },
            {
              q: "Can retirees qualify for a mortgage in Portugal?",
              a: "Yes, retirees with a documented, regular pension income can generally qualify for a Portuguese mortgage. Loan terms are often structured so the loan is repaid by a certain age, which can shorten the available term for older borrowers, and adding a guarantor is sometimes used to extend borrowing capacity.",
            },
            {
              q: "What’s the difference between fixed and variable rate mortgages in Portugal?",
              a: "Portuguese mortgages are commonly offered as either a fixed rate for a set period, or a variable rate tied to Euribor plus a bank spread, which adjusts periodically. Some products also offer a mixed structure, combining a fixed period followed by a variable one.",
            },
            {
              q: "How long can a mortgage term be in Portugal?",
              a: "Portuguese mortgage terms can extend up to around 30-40 years for younger borrowers, though most banks require the loan to be fully repaid by a set age, often somewhere between 70 and 80, which effectively shortens the maximum term available to older borrowers.",
            },
            {
              q: "Can I get financing for a commercial or investment property in Portugal?",
              a: "Yes, though commercial and investment property financing typically comes with a lower loan-to-value than a primary residence — often around 50% of the purchase price or appraised value, whichever is lower — reflecting the higher risk profile banks assign to non-owner-occupied property.",
            },
            {
              q: "How long does the mortgage approval and closing process take in Portugal?",
              a: 'Timelines vary, but buyers should generally plan for a longer process than a typical U.S. mortgage, given the additional documentation, valuation, and legal steps involved, including the final signing at a notary (the "escritura"). Working with a broker experienced in the Portuguese market can help keep the process moving efficiently.',
            },
          ].map((item, idx, arr) => (
            <div
              key={idx}
              className={`py-4 ${idx !== arr.length - 1 ? "border-b border-[#E6E0D3]" : ""}`}
            >
              <p className="mb-1.5 font-sans text-[15px] font-bold text-[#1C1C1C]">
                {item.q}
              </p>
              <p className="m-0 text-[14.5px] leading-[1.7] text-[#55524C]">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-9">
          <a
            href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#D9722C] p-4 font-sans text-[15px] font-bold text-white transition-colors hover:bg-[#B85A1C]"
          >
            Apply Now &rarr;
          </a>
          <Link
            href="/contact"
            className="flex w-full items-center justify-center rounded-[10px] border border-[#E7DEC7] bg-[#F5EFDF] p-4 font-sans text-[15px] font-bold text-[#1C1C1C] transition-colors hover:bg-[#EFE7D3]"
          >
            Contact Us Now
          </Link>
          <div className="mt-3.5 text-center text-[12.5px] text-[#8F8A7C]">
            Already have a property in mind, or just starting to explore
            Portugal? Share the details and a loan officer will walk through
            your financing options the same day.
          </div>
        </div>
      </section>
    </div>
  );
}
