import type { Metadata } from "next";
import Link from "next/link";
import {
  JumboCalculator,
  JumboPathSelector,
} from "@/components/site/LoanPrograms/JumboLoans/Interactive";

export const metadata: Metadata = {
  title: "Jumbo & Super Jumbo Loans Up to $30M+ | MyLoanDesk",
  description:
    "Jumbo and Super Jumbo financing up to $30 million and beyond, with multiple ways to qualify — full documentation, bank statement, asset depletion, foreign national, and DSCR investment paths. Estimate your payment with our free calculator.",
  alternates: {
    canonical: "/loan-programs/jumbo-loans/",
  },
  openGraph: {
    title: "Jumbo & Super Jumbo Loans Up to $30M+ | MyLoanDesk",
    description:
      "Exceptional homes deserve exceptional financing. Jumbo and Super Jumbo loans up to $30M+, with multiple qualification paths for complex financial profiles.",
    url: "/loan-programs/jumbo-loans/",
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
      name: "What is the difference between a jumbo loan and a super jumbo loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A jumbo loan is any mortgage above the conforming loan limit set annually by the FHFA — $832,750 in most U.S. counties for 2026, and up to $1,249,125 in high-cost areas. A super jumbo loan is an informal term for jumbo loans well above that threshold, typically starting somewhere around $2.5 million to $3 million and extending into eight figures, depending on the lender.",
      },
    },
    {
      "@type": "Question",
      name: "Do jumbo loans require private mortgage insurance (PMI)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Jumbo and super jumbo loans typically don't carry PMI regardless of your down payment, unlike many conforming conventional loans. Lenders manage the added risk of a larger loan through credit, reserve, and down payment requirements instead.",
      },
    },
    {
      "@type": "Question",
      name: "Can I qualify for a jumbo loan without providing tax returns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In many cases, yes. Alongside traditional full-documentation underwriting, options like bank statement qualification for self-employed borrowers and asset depletion (or asset utilization) qualification for high-net-worth borrowers can allow you to qualify without tax returns being the primary income document.",
      },
    },
    {
      "@type": "Question",
      name: "What is asset depletion or asset utilization qualification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asset depletion, also called asset utilization, is a qualification method that converts your liquid assets — such as investment or retirement accounts — into a monthly qualifying income figure, typically by dividing an eligible portion of those assets over a set number of months. It's often used by retirees, high-net-worth individuals, or business owners whose reported income doesn't reflect their true financial strength.",
      },
    },
    {
      "@type": "Question",
      name: "How much in reserves do I need for a jumbo or super jumbo loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reserve requirements generally scale with loan size. Smaller jumbo loans may require around 6 months of principal, interest, taxes, and insurance (PITI) in reserves, while larger super jumbo loans, particularly above $5 million, often require 12 to 24 months or more, depending on the lender and the full financial profile.",
      },
    },
    {
      "@type": "Question",
      name: "Can foreign nationals qualify for a jumbo loan in the U.S.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in many cases. Foreign national jumbo programs are designed for international buyers without U.S. credit history or domestic income documentation, typically requiring a larger down payment and additional documentation of foreign income or assets.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a jumbo loan on an investment property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. DSCR-based jumbo financing allows investment property purchases to be qualified based on the property's rental income relative to its debt obligations, rather than the borrower's personal income, which can be useful for luxury rental and investment properties above conforming loan limits.",
      },
    },
    {
      "@type": "Question",
      name: "What credit score do I need for a jumbo or super jumbo loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jumbo lending generally expects stronger credit than conforming loans, often a score of 700 or higher, with larger super jumbo loans sometimes expecting 720 or above. Exact requirements vary based on the full loan scenario, including down payment, reserves, and qualification path.",
      },
    },
    {
      "@type": "Question",
      name: "Can complex income from trusts, LLCs, or multiple businesses be used to qualify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Jumbo and super jumbo underwriting is often built to accommodate complex financial profiles, including income or assets held in trusts, multiple business entities, LLCs, and other non-traditional structures common among high-net-worth borrowers.",
      },
    },
  ],
};

export default function JumboLoansPage() {
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
        <h1 className="mb-[18px] font-serif text-[36px] font-bold leading-[1.15] text-[#1C1C1C]">
          Jumbo &amp; Super Jumbo Loans
        </h1>
        <hr className="mb-[26px] border-0 border-t border-[#E6E0D3]" />

        {/* Hero Section */}
        <div className="mb-1.5 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.02em] text-[#B85A1C]">
              Financing up to $30 million and beyond — with more than one way to
              qualify.
            </div>
            <p className="mb-6 max-w-[680px] text-[15.5px] leading-[1.7] text-[#55524C]">
              Exceptional homes deserve exceptional financing. MyLoanDesk's
              Jumbo and Super Jumbo programs go well beyond conforming loan
              limits, with the flexibility to structure your financing around
              how your wealth actually works — not just a single income
              documentation path. Whether your income is straightforward, tied
              up in a business, or held largely in liquid assets, there's likely
              a way to make the numbers work.
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
                <span>Financing available up to $30M+</span>
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
                <span>No PMI, regardless of down payment</span>
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
                <span>Five distinct ways to qualify</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <JumboCalculator />
        </div>

        <p className="mt-1.5 max-w-[680px] text-[11.5px] text-[#9A9585]">
          Estimate only. Does not include property taxes, insurance, or HOA
          dues. Reserve suggestions are illustrative and scale with loan size;
          actual requirements depend on the lender, program, and full financial
          profile.
        </p>

        {/* What Is a Jumbo Loan */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          What Is a Jumbo Loan — and a Super Jumbo Loan?
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          A jumbo loan is any mortgage above the "conforming" loan limit set
          annually by the Federal Housing Finance Agency (FHFA). For 2026, that
          baseline limit is <strong>$832,750</strong> in most U.S. counties,
          rising to <strong>$1,249,125</strong> in officially designated
          high-cost areas. Once a loan amount exceeds that threshold, it falls
          outside what Fannie Mae and Freddie Mac can purchase, and requires
          jumbo financing instead.
        </p>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          "Super jumbo" isn't an official government category — it's industry
          shorthand for jumbo loans well above the standard jumbo range,
          generally starting somewhere around $2.5–3 million and extending into
          eight-figure territory. MyLoanDesk's programs are built to serve this
          full spectrum, from a $900,000 jumbo purchase up to $30 million and,
          in select scenarios, beyond.
        </p>

        {/* Five Ways to Qualify */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Five Ways to Qualify
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          High-net-worth and complex-income borrowers rarely fit into a single
          underwriting box — so we don't force one. Select how your financial
          picture is structured below to see the path likely to fit best.
        </p>

        {/* Interactive Qualification Path Selector */}
        <JumboPathSelector />

        {/* How It Works */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          How Jumbo Financing Works
        </h2>
        <div className="max-w-[700px] space-y-4">
          {[
            {
              step: "1",
              title: "Choose your qualification path.",
              desc: "We identify which of the five approaches above best fits your financial profile.",
            },
            {
              step: "2",
              title: "Structure the scenario.",
              desc: "Down payment, reserves, and rate are structured around your loan size and qualification path.",
            },
            {
              step: "3",
              title: "Submit documentation.",
              desc: "Requirements vary by path, from full tax returns to a simple asset statement.",
            },
            {
              step: "4",
              title: "Appraisal and underwriting.",
              desc: "High-value properties often use specialized appraisal review given their unique nature.",
            },
            {
              step: "5",
              title: "Close.",
              desc: "Sign your final documents and close — often with a dedicated point of contact throughout, given the complexity of these transactions.",
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
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Program Highlights
        </h2>
        <div className="mb-3.5 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
          What's included:
        </div>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {[
            "Loan amounts from just above conforming limits up to $30M+",
            "No private mortgage insurance (PMI), regardless of down payment",
            "Five distinct qualification paths for complex financial profiles",
            "Interest-only payment options available on select programs",
            "Financing for primary residences, second homes, and investment properties",
            "Accommodates income and assets held in trusts, LLCs, and multiple entities",
            "Non-warrantable condos and unique luxury properties considered case-by-case",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Strategic Advantages */}
        <div className="my-[18px] mb-[30px] rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-[26px_28px]">
          <div className="mb-3 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
            Strategic Advantages:
          </div>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            Because jumbo and super jumbo loans aren't sold to Fannie Mae or
            Freddie Mac, underwriting isn't bound by the same rigid rules as a
            conforming loan — which is exactly why multiple qualification paths
            exist. A borrower who wouldn't fit a conventional box on paper may
            still be an excellent credit risk once assets, business structure,
            or global income are properly accounted for.
          </p>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            Avoiding PMI on a multi-million dollar loan is a meaningful monthly
            savings compared to a conforming loan with mortgage insurance — on a
            $5M loan, PMI alone could otherwise represent thousands of dollars a
            month.
          </p>
          <p className="mb-0 text-[14.5px] leading-[1.7] text-[#55524C]">
            For borrowers with wealth spread across trusts, multiple businesses,
            or international accounts, having a lender that can actually
            underwrite that complexity — rather than asking you to simplify your
            finances to fit a form — often makes the difference between approval
            and a declined file elsewhere.
          </p>
        </div>

        {/* Who This Is For */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Who This Is For
        </h2>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {[
            "Buyers purchasing above their local conforming loan limit",
            "Business owners and entrepreneurs with complex or understated tax-return income",
            "High-net-worth individuals and retirees with substantial liquid assets",
            "International buyers purchasing U.S. property",
            "Investors purchasing luxury rental or vacation properties",
            "Borrowers with income or assets held in trusts or multiple business entities",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Down Payment & Reserves */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          A Note on Down Payment &amp; Reserves
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          Down payment and reserve requirements on jumbo loans generally scale
          with loan size and qualification path. As a general guide:
        </p>
        <table className="my-3.5 mb-2 max-w-[600px] w-full border-collapse text-[13.5px]">
          <thead>
            <tr className="border-b-2 border-[#E6E0D3] bg-[#F3EFE6] text-left font-bold text-[#1C1C1C]">
              <th className="p-[9px_12px]">Loan Amount</th>
              <th className="p-[9px_12px]">Typical Reserve Guidance</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#E6E0D3]">
              <td className="p-[9px_12px] text-[#55524C]">Up to $1.5M</td>
              <td className="p-[9px_12px] text-[#55524C]">
                Around 6 months of PITI
              </td>
            </tr>
            <tr className="border-b border-[#E6E0D3]">
              <td className="p-[9px_12px] text-[#55524C]">$1.5M – $5M</td>
              <td className="p-[9px_12px] text-[#55524C]">
                Around 12 months of PITI
              </td>
            </tr>
            <tr className="border-b border-[#E6E0D3]">
              <td className="p-[9px_12px] text-[#55524C]">$5M – $15M</td>
              <td className="p-[9px_12px] text-[#55524C]">
                Around 18–24 months of PITI
              </td>
            </tr>
            <tr className="border-b border-[#E6E0D3]">
              <td className="p-[9px_12px] text-[#55524C]">$15M+</td>
              <td className="p-[9px_12px] text-[#55524C]">
                24+ months, evaluated case-by-case
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-[13px] leading-[1.75] text-[#8F8A7C]">
          These figures are illustrative guidance, not a commitment — actual
          reserve and down payment requirements depend on your qualification
          path, credit profile, property type, and the specific program.
        </p>

        {/* Comparison Table */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Jumbo &amp; Super Jumbo vs. Conforming Financing
        </h2>
        <div className="overflow-x-auto">
          <table className="my-[18px] mb-[30px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-[#1C1C1C] text-left font-bold text-white">
                <th className="p-[11px_14px]"></th>
                <th className="p-[11px_14px]">Conforming Loan</th>
                <th className="p-[11px_14px]">Jumbo Loan</th>
                <th className="p-[11px_14px]">Super Jumbo Loan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Loan amount
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Up to $832,750 ($1,249,125 high-cost)
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Above conforming, up to roughly $2.5–3M
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Roughly $2.5–3M up to $30M+
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  PMI required
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Often, below 20% down
                </td>
                <td className="p-[11px_14px] text-[#55524C]">No</td>
                <td className="p-[11px_14px] text-[#55524C]">No</td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Qualification paths
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Standard income documentation
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Multiple paths available
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Multiple paths, often essential
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Sold to Fannie/Freddie
                </td>
                <td className="p-[11px_14px] text-[#55524C]">Yes</td>
                <td className="p-[11px_14px] text-[#55524C]">
                  No — held or sold privately
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  No — held or sold privately
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Best for
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Typical home purchases within local limits
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Above-average homes in most markets
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Luxury and ultra-luxury properties
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Frequently Asked Questions */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Frequently Asked Questions
        </h2>
        <div>
          {[
            {
              q: "What is the difference between a jumbo loan and a super jumbo loan?",
              a: "A jumbo loan is any mortgage above the conforming loan limit set annually by the FHFA — $832,750 in most U.S. counties for 2026, and up to $1,249,125 in high-cost areas. A super jumbo loan is an informal term for jumbo loans well above that threshold, typically starting somewhere around $2.5 million to $3 million and extending into eight figures, depending on the lender.",
            },
            {
              q: "Do jumbo loans require private mortgage insurance (PMI)?",
              a: "No. Jumbo and super jumbo loans typically don't carry PMI regardless of your down payment, unlike many conforming conventional loans. Lenders manage the added risk of a larger loan through credit, reserve, and down payment requirements instead.",
            },
            {
              q: "Can I qualify for a jumbo loan without providing tax returns?",
              a: "In many cases, yes. Alongside traditional full-documentation underwriting, options like bank statement qualification for self-employed borrowers and asset depletion (or asset utilization) qualification for high-net-worth borrowers can allow you to qualify without tax returns being the primary income document.",
            },
            {
              q: "What is asset depletion or asset utilization qualification?",
              a: "Asset depletion, also called asset utilization, is a qualification method that converts your liquid assets — such as investment or retirement accounts — into a monthly qualifying income figure, typically by dividing an eligible portion of those assets over a set number of months. It's often used by retirees, high-net-worth individuals, or business owners whose reported income doesn't reflect their true financial strength.",
            },
            {
              q: "How much in reserves do I need for a jumbo or super jumbo loan?",
              a: "Reserve requirements generally scale with loan size. Smaller jumbo loans may require around 6 months of principal, interest, taxes, and insurance (PITI) in reserves, while larger super jumbo loans, particularly above $5 million, often require 12 to 24 months or more, depending on the lender and the full financial profile.",
            },
            {
              q: "Can foreign nationals qualify for a jumbo loan in the U.S.?",
              a: "Yes, in many cases. Foreign national jumbo programs are designed for international buyers without U.S. credit history or domestic income documentation, typically requiring a larger down payment and additional documentation of foreign income or assets.",
            },
            {
              q: "Can I get a jumbo loan on an investment property?",
              a: "Yes. DSCR-based jumbo financing allows investment property purchases to be qualified based on the property's rental income relative to its debt obligations, rather than the borrower's personal income, which can be useful for luxury rental and investment properties above conforming loan limits.",
            },
            {
              q: "What credit score do I need for a jumbo or super jumbo loan?",
              a: "Jumbo lending generally expects stronger credit than conforming loans, often a score of 700 or higher, with larger super jumbo loans sometimes expecting 720 or above. Exact requirements vary based on the full loan scenario, including down payment, reserves, and qualification path.",
            },
            {
              q: "Can complex income from trusts, LLCs, or multiple businesses be used to qualify?",
              a: "Yes. Jumbo and super jumbo underwriting is often built to accommodate complex financial profiles, including income or assets held in trusts, multiple business entities, LLCs, and other non-traditional structures common among high-net-worth borrowers.",
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
            href="/#start"
            className="flex w-full items-center justify-center rounded-[10px] border border-[#E7DEC7] bg-[#F5EFDF] p-4 font-sans text-[15px] font-bold text-[#1C1C1C] transition-colors hover:bg-[#EFE7D3]"
          >
            Contact Us Now
          </Link>
          <div className="mt-3.5 text-center text-[12.5px] text-[#8F8A7C]">
            Have a complex scenario in mind — a trust, multiple entities, or
            assets spread across accounts? Share the details and a loan officer
            will map out the right path the same day.
          </div>
        </div>
      </section>
    </div>
  );
}
