import type { Metadata } from "next";
import Link from "next/link";
import FhaCalculator from "@/components/site/LoanPrograms/FHALoans/FhaCalculator";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title: "FHA Loans — Buy a Home with as Little as 3.5% Down | MyLoanDesk",
  description:
    "FHA loans with down payments as low as 3.5%, flexible credit requirements, and options after bankruptcy or foreclosure. Use our free calculator to estimate your down payment and mortgage insurance before you apply.",
  alternates: {
    canonical: "https://www.myloandesk.com/loan-programs/fha-loans/",
  },
  openGraph: {
    title: "FHA Loans — Buy a Home with as Little as 3.5% Down | MyLoanDesk",
    description:
      "Lower credit and down payment requirements make FHA one of the most accessible paths to homeownership. Estimate your down payment and mortgage insurance with our free FHA calculator.",
    url: "https://www.myloandesk.com/loan-programs/fha-loans/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "FHA Loans - MyLoanDesk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FHA Loans — Buy a Home with as Little as 3.5% Down | MyLoanDesk",
    description:
      "Buy a home with as little as 3.5% down and flexible credit requirements through FHA financing.",
    images: ["/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const fhaPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.myloandesk.com/loan-programs/fha-loans/#webpage",
      url: "https://www.myloandesk.com/loan-programs/fha-loans/",
      name: "FHA Loans — Buy a Home with as Little as 3.5% Down | MyLoanDesk",
      description:
        "Comprehensive guide and calculation tools for government-backed FHA home purchase and refinance loans.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.myloandesk.com/#website",
      },
      about: {
        "@id": "https://www.myloandesk.com/#organization",
      },
    },
    {
      "@type": "FinancialProduct",
      "@id": "https://www.myloandesk.com/loan-programs/fha-loans/#product",
      name: "FHA Loan",
      description:
        "A government-insured mortgage loan backed by the Federal Housing Administration offering low down payments from 3.5% and flexible credit qualifying guidelines.",
      provider: {
        "@id": "https://www.myloandesk.com/#organization",
      },
      category: "MortgageLoan",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.myloandesk.com/loan-programs/fha-loans/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What credit score do I need for an FHA loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Borrowers with a credit score of 580 or higher typically qualify for FHA's minimum 3.5% down payment. Scores between 500 and 579 may still qualify, but usually require a larger 10% down payment. Scores below 500 generally do not qualify for FHA financing.",
          },
        },
        {
          "@type": "Question",
          name: "How much down payment do I need for an FHA loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With a credit score of 580 or higher, the minimum down payment is 3.5% of the purchase price. With a credit score between 500 and 579, most lenders require at least 10% down. Down payment funds can often come from savings, an eligible gift, or a qualifying down payment assistance program.",
          },
        },
        {
          "@type": "Question",
          name: "What is FHA mortgage insurance (MIP) and how much does it cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FHA loans require two forms of mortgage insurance: an upfront premium (UFMIP), typically 1.75% of the loan amount and usually financed into the loan, and an annual premium (MIP), typically around 0.55% of the loan balance per year, paid monthly. Unlike conventional PMI, FHA's annual MIP often continues for the life of the loan unless you refinance out of FHA financing.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get an FHA loan after a bankruptcy or foreclosure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, in many cases. FHA guidelines generally allow borrowers to qualify roughly two years after a Chapter 7 bankruptcy discharge and around three years after a foreclosure, provided credit has been reestablished and payment history since then has been solid. Specific timelines can vary by lender and circumstance.",
          },
        },
        {
          "@type": "Question",
          name: "What property types are eligible for FHA financing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FHA loans can be used for single-family homes, FHA-approved condominiums, 2-4 unit properties (as long as the borrower occupies one unit), and many manufactured and modular homes that meet FHA construction standards.",
          },
        },
        {
          "@type": "Question",
          name: "What documents do I need to apply for an FHA loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical documentation includes two years of tax returns, W-2s or 1099s, your most recent pay stub, two months of bank statements, recent statements for any investment or retirement accounts, and a valid government-issued ID. Self-employed borrowers generally also provide two years of business tax returns and a year-to-date profit and loss statement.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a maximum debt-to-income ratio for FHA loans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FHA guidelines are generally more flexible than conventional loans, with many borrowers qualifying up to around a 43-50% debt-to-income ratio depending on credit score, reserves, and other compensating factors. Your total monthly debts, including the new mortgage payment, are weighed against your gross monthly income.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use an FHA loan to buy a fixer-upper?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — the FHA 203(k) rehabilitation loan lets you finance the purchase price and the cost of eligible repairs or renovations in a single loan, based on the property's value after the work is completed, rather than requiring separate financing for the purchase and the renovation.",
          },
        },
      ],
    },
  ],
};

export default function FhaLoansPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Loan Programs", url: "/loan-programs" },
    { name: "FHA Loans", url: "/loan-programs/fha-loans" },
  ];

  return (
    <section className="bg-[#EDEAE2] py-4 text-[#55524C] font-sans antialiased">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fhaPageSchema) }}
      />

      <div className="mx-auto max-w-[900px] bg-[#FBF8F2] px-6 py-8 sm:px-14 sm:py-11 md:pb-16">
        <Link
          href="/loan-programs"
          className="mb-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#55524C] transition-colors hover:text-[#B85A1C]"
        >
          &larr; Back to Loan Programs
        </Link>

        <h1 className="mb-4 font-serif text-3xl sm:text-[38px] font-bold leading-tight text-[#1C1C1C]">
          FHA Loans
        </h1>
        <hr className="mb-6 border-0 border-t border-[#E6E0D3]" />

        {/* Hero Section */}
        <div className="mb-2 grid grid-cols-1 gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 items-start">
          <div>
            <div className="mb-4 font-sans text-sm font-bold uppercase tracking-wide text-[#B85A1C]">
              Buy with as little as 3.5% down.
            </div>
            <p className="mb-6 max-w-[680px] text-[15.5px] leading-relaxed text-[#55524C]">
              FHA loans are backed by the Federal Housing Administration and
              built for buyers who don&apos;t fit the mold of a traditional
              conventional mortgage — lower credit scores, smaller down
              payments, and a past bankruptcy or foreclosure don&apos;t have to
              keep you out of the market. It remains one of the most accessible
              paths to homeownership in the country, especially for first-time
              buyers.
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
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
                3.5% down with a 580+ credit score
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
                Flexible after a past bankruptcy or foreclosure
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
                Gift funds allowed for your down payment
              </div>
            </div>
          </div>

          <FhaCalculator />
        </div>

        <p className="mt-1.5 max-w-[680px] text-[11.5px] text-[#9A9585]">
          Estimate only. Upfront MIP calculated at 1.75% of the base loan
          amount; monthly MIP estimated at 0.55% annually, both standard current
          FHA rates for most 30-year loans. Actual figures depend on your loan
          term, loan-to-value, and current FHA guidelines at the time of your
          application.
        </p>

        {/* What Is an FHA Loan */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          What Is an FHA Loan?
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-relaxed text-[#55524C]">
          An FHA loan is a mortgage insured by the Federal Housing
          Administration, a division of the U.S. Department of Housing and Urban
          Development. The FHA itself doesn&apos;t lend money — instead, it
          insures loans made by approved lenders like MyLoanDesk, which reduces
          the lender&apos;s risk and allows for more flexible qualifying
          guidelines than a typical conventional mortgage.
        </p>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-relaxed text-[#55524C]">
          That flexibility is what makes FHA financing so widely used,
          particularly among first-time buyers: lower minimum credit scores, a
          smaller required down payment, and more forgiving guidelines around
          past credit events like bankruptcy or foreclosure. In exchange, FHA
          loans require mortgage insurance, which we break down below.
        </p>

        {/* How It Works */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          How FHA Financing Works
        </h2>
        <div className="max-w-[700px] space-y-4">
          {[
            {
              step: "1",
              title: "Get pre-qualified.",
              desc: "We review your credit, income, and debts to confirm your FHA eligibility and estimated buying power.",
            },
            {
              step: "2",
              title: "Shop with confidence.",
              desc: "A pre-approval letter shows sellers and agents you're a serious, qualified buyer.",
            },
            {
              step: "3",
              title: "Submit your documents.",
              desc: "Tax returns, pay stubs, bank statements, and ID — we'll walk you through exactly what's needed.",
            },
            {
              step: "4",
              title: "Appraisal and underwriting.",
              desc: "The property is appraised to FHA standards while underwriting finalizes your approval.",
            },
            {
              step: "5",
              title: "Close on your home.",
              desc: "Sign your final documents, pay your down payment and closing costs, and get your keys.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-3.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D9722C] font-sans text-[13px] font-bold text-white">
                {item.step}
              </div>
              <div className="pt-0.5 text-[14.5px] leading-relaxed text-[#55524C]">
                <strong className="text-[#1C1C1C]">{item.title}</strong>{" "}
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Program Highlights */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          Program Highlights
        </h2>
        <div className="mb-3.5 font-sans text-[13.5px] font-bold uppercase tracking-wider text-[#1C1C1C]">
          What&apos;s included:
        </div>
        <ul className="mb-3 max-w-[700px] space-y-2.5">
          {[
            "Down payments as low as 3.5% with a qualifying credit score",
            "Down payment can come entirely from an eligible gift or assistance program",
            "More flexible credit and debt-to-income guidelines than conventional loans",
            "Available for single-family homes, condos, 2-4 unit properties, and eligible manufactured homes",
            "FHA 203(k) option to finance a home purchase and renovation costs together",
            "Sellers can contribute up to 6% of the purchase price toward your closing costs",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative pl-5 text-[15px] leading-relaxed text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Strategic Advantages */}
        <div className="my-7 rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-6 sm:p-7">
          <div className="mb-3 font-sans text-[13.5px] font-bold uppercase tracking-wider text-[#1C1C1C]">
            Strategic Advantages:
          </div>
          <p className="mb-3 text-[14.5px] leading-relaxed text-[#55524C]">
            FHA&apos;s relaxed credit guidelines mean buyers who&apos;ve had a
            past bankruptcy, foreclosure, or a thinner credit file often qualify
            for FHA financing well before they&apos;d qualify for a conventional
            loan — sometimes years sooner.
          </p>
          <p className="mb-3 text-[14.5px] leading-relaxed text-[#55524C]">
            Because the down payment requirement is so low, FHA loans let buyers
            get into a home while keeping more cash in reserve for moving costs,
            repairs, or an emergency fund — rather than draining savings to hit
            a 20% conventional down payment.
          </p>
          <p className="text-[14.5px] leading-relaxed text-[#55524C]">
            Allowing seller-paid closing costs and gift funds for the down
            payment means many buyers can purchase a home with very little cash
            brought to the table beyond the 3.5% minimum.
          </p>
        </div>

        {/* Who This Is For */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          Who FHA Loans Are For
        </h2>
        <ul className="mb-3 max-w-[700px] space-y-2.5">
          {[
            "First-time homebuyers without a large down payment saved up",
            "Buyers with a credit score between 500 and 669 who don't yet qualify conventionally",
            "Buyers within two to three years of a past bankruptcy or foreclosure",
            "Buyers purchasing a fixer-upper who want renovation costs rolled into one loan",
            "Buyers who'd rather keep cash in reserve than maximize their down payment",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative pl-5 text-[15px] leading-relaxed text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Comparison Table */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          FHA Loans vs. Conventional and VA Loans
        </h2>
        <div className="overflow-x-auto">
          <table className="my-4 w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-[#1C1C1C] text-white">
                <th className="p-3 text-left font-bold"></th>
                <th className="p-3 text-left font-bold">FHA Loan</th>
                <th className="p-3 text-left font-bold">Conventional Loan</th>
                <th className="p-3 text-left font-bold">VA Loan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-3 font-bold text-[#1C1C1C]">
                  Minimum down payment
                </td>
                <td className="p-3 text-[#55524C]">3.5% (with 580+ score)</td>
                <td className="p-3 text-[#55524C]">
                  As low as 3%, usually 5%+
                </td>
                <td className="p-3 text-[#55524C]">0% for eligible veterans</td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-3 font-bold text-[#1C1C1C]">
                  Minimum credit score
                </td>
                <td className="p-3 text-[#55524C]">
                  500–580, program dependent
                </td>
                <td className="p-3 text-[#55524C]">Typically 620+</td>
                <td className="p-3 text-[#55524C]">
                  No official minimum; lender-set
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-3 font-bold text-[#1C1C1C]">
                  Mortgage insurance
                </td>
                <td className="p-3 text-[#55524C]">
                  Upfront + annual MIP, often for the loan&apos;s life
                </td>
                <td className="p-3 text-[#55524C]">
                  PMI, removable around 20% equity
                </td>
                <td className="p-3 text-[#55524C]">
                  None — no monthly mortgage insurance
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-3 font-bold text-[#1C1C1C]">Best for</td>
                <td className="p-3 text-[#55524C]">
                  Buyers with lower credit or smaller down payments
                </td>
                <td className="p-3 text-[#55524C]">
                  Buyers with strong credit and 5%+ down
                </td>
                <td className="p-3 text-[#55524C]">
                  Eligible active duty, veterans, and some spouses
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Eligibility Requirements */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          Eligibility Requirements
        </h2>
        <ul className="mb-3 max-w-[700px] space-y-2.5">
          {[
            "Credit score of 580+ for 3.5% down, or 500–579 for 10% down",
            "Debt-to-income ratio generally up to 43–50%, depending on compensating factors",
            "Steady employment history, typically at least two years",
            "At least two years since a Chapter 7 bankruptcy discharge, or three years since a foreclosure",
            "Property must be your primary residence and meet FHA minimum property standards",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative pl-5 text-[15px] leading-relaxed text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Required Documents */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          Documents You&apos;ll Likely Need
        </h2>
        <div className="mb-3 grid max-w-[700px] grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          {[
            "Two years of federal tax returns",
            "Two years of W-2s or 1099s",
            "Most recent pay stub (YTD earnings)",
            "Two months of full bank statements",
            "Recent retirement or investment account statements",
            "Government-issued photo ID",
            "Two years of business returns (if self-employed)",
            "YTD profit & loss statement (if self-employed)",
          ].map((doc, idx) => (
            <div
              key={idx}
              className="relative pl-5 text-[14.5px] leading-relaxed text-[#55524C] before:absolute before:left-0 before:top-[8px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]"
            >
              {doc}
            </div>
          ))}
        </div>

        {/* Frequently Asked Questions */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-0">
          {[
            {
              q: "What credit score do I need for an FHA loan?",
              a: "Borrowers with a credit score of 580 or higher typically qualify for FHA's minimum 3.5% down payment. Scores between 500 and 579 may still qualify, but usually require a larger 10% down payment. Scores below 500 generally do not qualify for FHA financing.",
            },
            {
              q: "How much down payment do I need for an FHA loan?",
              a: "With a credit score of 580 or higher, the minimum down payment is 3.5% of the purchase price. With a credit score between 500 and 579, most lenders require at least 10% down. Down payment funds can often come from savings, an eligible gift, or a qualifying down payment assistance program.",
            },
            {
              q: "What is FHA mortgage insurance (MIP) and how much does it cost?",
              a: "FHA loans require two forms of mortgage insurance: an upfront premium (UFMIP), typically 1.75% of the loan amount and usually financed into the loan, and an annual premium (MIP), typically around 0.55% of the loan balance per year, paid monthly. Unlike conventional PMI, FHA's annual MIP often continues for the life of the loan unless you refinance out of FHA financing.",
            },
            {
              q: "Can I get an FHA loan after a bankruptcy or foreclosure?",
              a: "Yes, in many cases. FHA guidelines generally allow borrowers to qualify roughly two years after a Chapter 7 bankruptcy discharge and around three years after a foreclosure, provided credit has been reestablished and payment history since then has been solid. Specific timelines can vary by lender and circumstance.",
            },
            {
              q: "What property types are eligible for FHA financing?",
              a: "FHA loans can be used for single-family homes, FHA-approved condominiums, 2-4 unit properties (as long as the borrower occupies one unit), and many manufactured and modular homes that meet FHA construction standards.",
            },
            {
              q: "What documents do I need to apply for an FHA loan?",
              a: "Typical documentation includes two years of tax returns, W-2s or 1099s, your most recent pay stub, two months of bank statements, recent statements for any investment or retirement accounts, and a valid government-issued ID. Self-employed borrowers generally also provide two years of business tax returns and a year-to-date profit and loss statement.",
            },
            {
              q: "Is there a maximum debt-to-income ratio for FHA loans?",
              a: "FHA guidelines are generally more flexible than conventional loans, with many borrowers qualifying up to around a 43-50% debt-to-income ratio depending on credit score, reserves, and other compensating factors. Your total monthly debts, including the new mortgage payment, are weighed against your gross monthly income.",
            },
            {
              q: "Can I use an FHA loan to buy a fixer-upper?",
              a: "Yes — the FHA 203(k) rehabilitation loan lets you finance the purchase price and the cost of eligible repairs or renovations in a single loan, based on the property's value after the work is completed, rather than requiring separate financing for the purchase and the renovation.",
            },
          ].map((item, idx, arr) => (
            <div
              key={idx}
              className={`py-4 ${idx !== arr.length - 1 ? "border-b border-[#E6E0D3]" : ""}`}
            >
              <p className="mb-1.5 font-sans text-[15px] font-bold text-[#1C1C1C]">
                {item.q}
              </p>
              <p className="text-[14.5px] leading-relaxed text-[#55524C]">
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
            href="/#start"
            className="flex w-full items-center justify-center rounded-xl border border-[#E7DEC7] bg-[#F5EFDF] p-4 font-sans text-[15px] font-bold text-[#1C1C1C] transition-colors hover:bg-[#EFE7D3]"
          >
            Contact Us Now
          </Link>
          <div className="mt-3.5 text-center text-[12.5px] text-[#8F8A7C]">
            Not sure if FHA is the right fit? Send us your numbers — a loan
            officer will compare it against your other options the same day.
          </div>
        </div>
      </div>
    </section>
  );
}
