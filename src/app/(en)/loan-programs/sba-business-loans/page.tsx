import type { Metadata } from "next";
import Link from "next/link";
import SbaCalculator from "@/components/site/LoanPrograms/SBALoans/SBACalculator";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title:
    "SBA Business Loans — Up to $5M for Growth, Equipment & Acquisitions | MyLoanDesk",
  description:
    "SBA-backed business financing up to $5M for working capital, equipment, business acquisitions, debt refinance, and franchise financing. Estimate your payment with our free calculator.",
  alternates: {
    canonical: "https://www.myloandesk.com/loan-programs/sba-business-loans/",
  },
  openGraph: {
    title:
      "SBA Business Loans — Up to $5M for Growth, Equipment & Acquisitions | MyLoanDesk",
    description:
      "Affordable financing to help your business grow, backed by the U.S. Small Business Administration. Estimate your payment with our free calculator.",
    url: "https://www.myloandesk.com/loan-programs/sba-business-loans/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "SBA Business Loans - MyLoanDesk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SBA Business Loans — Up to $5M for Growth, Equipment & Acquisitions | MyLoanDesk",
    description:
      "Affordable business financing up to $5M backed by the U.S. Small Business Administration.",
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

const sbaPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.myloandesk.com/loan-programs/sba-business-loans/#webpage",
      url: "https://www.myloandesk.com/loan-programs/sba-business-loans/",
      name: "SBA Business Loans — Up to $5M for Growth, Equipment & Acquisitions | MyLoanDesk",
      description:
        "Comprehensive guide and payment calculator for SBA 7(a), SBA Express, and small business growth loans.",
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
      "@id":
        "https://www.myloandesk.com/loan-programs/sba-business-loans/#product",
      name: "SBA 7(a) & SBA Express Business Loan",
      description:
        "Government-guaranteed business loan up to $5M offering extended terms and lower down payments for working capital, equipment, debt consolidation, and business acquisitions.",
      provider: {
        "@id": "https://www.myloandesk.com/#organization",
      },
      category: "BusinessLoan",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.myloandesk.com/loan-programs/sba-business-loans/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What can I use an SBA loan for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SBA loan proceeds are flexible and can generally be used for working capital, equipment purchases, business acquisitions, debt refinancing, franchise financing, and commercial real estate. The specific program you use can affect which uses are eligible and the maximum term available.",
          },
        },
        {
          "@type": "Question",
          name: "How much can I borrow with an SBA loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SBA 7(a) loans, the most widely used SBA program, go up to $5 million. Smaller programs like SBA Express offer faster approval on loans up to $500,000, while SBA microloans are available for smaller amounts, often used by newer or smaller businesses.",
          },
        },
        {
          "@type": "Question",
          name: "What is the SBA guaranty fee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The SBA guaranty fee is a one-time, government-set fee paid on the guaranteed portion of most SBA loans with a maturity over 12 months, in addition to interest. Fee tiers vary by loan size and are reviewed and published annually by the SBA, so the exact percentage should be confirmed at the time of your application.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need collateral for an SBA loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the loan size and program. Smaller SBA loans may require little to no specific collateral, while larger loans typically require available business or personal assets to be pledged, though the SBA generally won't decline a loan solely for lack of full collateral if the business otherwise qualifies.",
          },
        },
        {
          "@type": "Question",
          name: "How long does SBA loan approval take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timelines vary by program and lender. Standard SBA 7(a) loans often take several weeks to a few months, while SBA Express and similarly streamlined programs are designed for faster turnaround, sometimes within days for an initial decision.",
          },
        },
        {
          "@type": "Question",
          name: "What is SBA Express and how is it different from a standard 7(a) loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SBA Express is a streamlined version of the 7(a) program offering faster approval turnaround, typically for loans up to $500,000, in exchange for a lower SBA guaranty percentage than a standard 7(a) loan.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use an SBA loan to buy an existing business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. SBA 7(a) loans are commonly used to finance the purchase of an existing business, including goodwill, equipment, and in some cases real estate associated with the acquisition, often combined into a single loan.",
          },
        },
        {
          "@type": "Question",
          name: "What credit score do I need to qualify for an SBA loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SBA lenders generally look for a personal credit score in the high 600s or above, along with a review of business cash flow, time in business, and industry experience. Requirements vary by lender and loan program.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use an SBA loan to buy commercial real estate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — SBA 7(a) and SBA 504 loans are both commonly used to purchase or refinance commercial real estate, often with lower down payments than a conventional commercial mortgage. See our Commercial Real Estate Loans page for details specific to property purchases.",
          },
        },
      ],
    },
  ],
};

export default function SbaBusinessLoansPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Loan Programs", url: "/loan-programs" },
    {
      name: "SBA Business Loans",
      url: "/loan-programs/sba-business-loans",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EDEAE2] text-[#55524C] antialiased">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sbaPageSchema) }}
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
          SBA Business Loans
        </h1>
        <hr className="mb-[26px] border-0 border-t border-[#E6E0D3]" />

        {/* Hero Section */}
        <div className="mb-1.5 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.02em] text-[#B85A1C]">
              Affordable financing to help your business grow.
            </div>
            <p className="mb-6 max-w-[680px] text-[15.5px] leading-[1.7] text-[#55524C]">
              Whether you&apos;re starting a new business, expanding operations,
              purchasing equipment, or acquiring an existing company, SBA loans
              offer flexible financing backed by the U.S. Small Business
              Administration. The government guaranty behind these loans often
              makes lower down payments, longer terms, and more competitive
              rates possible than a conventional business loan.
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
                <span>Financing up to $5M</span>
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
                <span>
                  Terms up to 10 years for working capital and equipment
                </span>
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
                <span>Flexible use of proceeds</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <SbaCalculator />
        </div>

        <p className="mt-1.5 max-w-[680px] text-[11.5px] text-[#9A9585]">
          Estimate only. SBA 7(a) loans are typically priced at the WSJ Prime
          Rate plus a lender margin, which varies by loan size and lender. Does
          not include the one-time SBA guaranty fee — see below. Actual rate and
          terms depend on underwriting.
        </p>

        {/* What Is an SBA Loan */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          What Is an SBA Loan?
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          An SBA loan is a loan made by a private lender, like MyLoanDesk&apos;s
          network of lending partners, and partially guaranteed by the U.S.
          Small Business Administration. The SBA doesn&apos;t lend the money
          directly — its guaranty reduces the lender&apos;s risk, which is what
          allows SBA loans to offer terms that are often more accessible than a
          typical conventional business loan: lower down payments, longer
          repayment terms, and financing for businesses that might not otherwise
          qualify for conventional credit on their own.
        </p>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          The most widely used SBA program is the 7(a) loan, which allows up to
          $5 million in financing for a broad range of business purposes.
          Faster, smaller options like SBA Express also exist for businesses
          that need a quicker decision on a smaller loan amount.
        </p>

        {/* Ways to Use SBA Financing */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Ways to Use SBA Financing
        </h2>
        <div className="my-[18px] mb-[30px] grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-xl border border-[#E6E0D3] bg-white p-5">
            <h3 className="mb-2 font-serif text-[16.5px] font-semibold text-[#1C1C1C]">
              Working Capital
            </h3>
            <p className="m-0 text-[13.5px] leading-[1.6] text-[#55524C]">
              Cover payroll, inventory, or day-to-day operating expenses during
              growth or seasonal fluctuations.
            </p>
          </div>

          <div className="rounded-xl border border-[#E6E0D3] bg-white p-5">
            <h3 className="mb-2 font-serif text-[16.5px] font-semibold text-[#1C1C1C]">
              Equipment Financing
            </h3>
            <p className="m-0 text-[13.5px] leading-[1.6] text-[#55524C]">
              Purchase or replace machinery, vehicles, or technology your
              business needs to operate or expand.
            </p>
          </div>

          <div className="rounded-xl border border-[#E6E0D3] bg-white p-5">
            <h3 className="mb-2 font-serif text-[16.5px] font-semibold text-[#1C1C1C]">
              Business Acquisition
            </h3>
            <p className="m-0 text-[13.5px] leading-[1.6] text-[#55524C]">
              Buy an existing business, including goodwill and equipment, often
              with a lower down payment than conventional financing.
            </p>
          </div>

          <div className="rounded-xl border border-[#E6E0D3] bg-white p-5">
            <h3 className="mb-2 font-serif text-[16.5px] font-semibold text-[#1C1C1C]">
              Debt Refinance
            </h3>
            <p className="m-0 text-[13.5px] leading-[1.6] text-[#55524C]">
              Consolidate or refinance existing higher-rate business debt into a
              single, often lower-cost SBA loan.
            </p>
          </div>

          <div className="rounded-xl border border-[#E6E0D3] bg-white p-5">
            <h3 className="mb-2 font-serif text-[16.5px] font-semibold text-[#1C1C1C]">
              Franchise Financing
            </h3>
            <p className="m-0 text-[13.5px] leading-[1.6] text-[#55524C]">
              Finance the franchise fee, build-out, and startup costs of opening
              a new franchise location.
            </p>
          </div>

          <div className="rounded-xl border border-[#E6E0D3] bg-white p-5">
            <h3 className="mb-2 font-serif text-[16.5px] font-semibold text-[#1C1C1C]">
              Lines of Credit
            </h3>
            <p className="m-0 text-[13.5px] leading-[1.6] text-[#55524C]">
              SBA CAPLines and similar revolving structures for businesses with
              fluctuating short-term capital needs.
            </p>
          </div>
        </div>

        {/* Crosslink to CRE */}
        <div className="my-[18px] mb-[30px] rounded-[10px] border border-dashed border-[#E6E0D3] bg-[#F3EFE6] p-4 sm:p-5 text-[14px] text-[#55524C]">
          <strong className="text-[#1C1C1C]">
            Buying commercial property?
          </strong>{" "}
          SBA 7(a) and SBA 504 loans can also finance commercial real estate
          purchases, often with lower down payments than a conventional
          commercial mortgage. See our{" "}
          <Link
            href="/loan-programs/commercial-real-estate-loans"
            className="font-bold text-[#B85A1C] underline hover:no-underline"
          >
            Commercial Real Estate Loans
          </Link>{" "}
          page for details specific to property purchases.
        </div>

        {/* How It Works */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          How SBA Financing Works
        </h2>
        <div className="max-w-[700px] space-y-4">
          {[
            {
              step: "1",
              title: "Tell us your goal.",
              desc: "Working capital, equipment, an acquisition, or something else — we match you to the right SBA program.",
            },
            {
              step: "2",
              title: "Submit your documentation.",
              desc: "Business financials, tax returns, and a use-of-proceeds breakdown.",
            },
            {
              step: "3",
              title: "Underwriting.",
              desc: "Your business's cash flow, credit, and the SBA's eligibility requirements are reviewed together.",
            },
            {
              step: "4",
              title: "Approval and closing.",
              desc: "Once approved, final loan documents are signed and the loan closes.",
            },
            {
              step: "5",
              title: "Funding.",
              desc: "Funds are disbursed according to your approved use of proceeds.",
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
          What&apos;s included:
        </div>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {[
            "Financing up to $5M through the SBA 7(a) program",
            "Faster SBA Express option available for loans up to $500,000",
            "Terms up to 10 years for working capital and equipment, up to 25 years when real estate is involved",
            "Flexible use of proceeds — working capital, equipment, acquisition, refinance, and more",
            "Often lower down payments than conventional business financing",
            "Available to a wide range of industries and business types",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* SBA Guaranty Fee */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          A Note on the SBA Guaranty Fee
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          Most SBA loans with a term longer than 12 months include a one-time
          guaranty fee, paid on the SBA-guaranteed portion of the loan. This fee
          is set and reviewed annually by the SBA and generally scales with loan
          size — as a general guide:
        </p>
        <div className="overflow-x-auto">
          <table className="my-3.5 mb-2 max-w-[640px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b-2 border-[#E6E0D3] bg-[#F3EFE6] text-left font-bold text-[#1C1C1C]">
                <th className="p-[9px_12px]">Loan Term</th>
                <th className="p-[9px_12px]">Typical Guaranty Fee Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[9px_12px] text-[#55524C]">
                  12 months or less
                </td>
                <td className="p-[9px_12px] text-[#55524C]">
                  Around 0.25% of the guaranteed portion
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[9px_12px] text-[#55524C]">
                  Over 12 months, up to $1M guaranteed portion
                </td>
                <td className="p-[9px_12px] text-[#55524C]">
                  Around 3.5% of the guaranteed portion
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[9px_12px] text-[#55524C]">
                  Over 12 months, above $1M guaranteed portion
                </td>
                <td className="p-[9px_12px] text-[#55524C]">
                  Around 3.75% of the guaranteed portion
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[13px] leading-[1.75] text-[#8F8A7C]">
          These figures are general guidance only. The SBA updates its fee
          schedule annually, and certain borrowers — including some
          manufacturers and veteran-owned businesses under specific programs —
          may qualify for reduced or waived fees. Confirm the exact current fee
          with a loan officer before finalizing your application.
        </p>

        {/* Strategic Advantages */}
        <div className="my-[18px] mb-[30px] rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-[26px_28px]">
          <div className="mb-3 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
            Strategic Advantages:
          </div>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            The SBA&apos;s guaranty means lenders can extend credit to
            businesses that might not qualify for a conventional loan on their
            own — newer businesses, or those without extensive collateral, often
            have a real path to financing here that wouldn&apos;t otherwise
            exist.
          </p>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            Longer repayment terms than most conventional business loans mean
            lower monthly payments, which keeps more cash available for actually
            running and growing the business rather than servicing debt.
          </p>
          <p className="mb-0 text-[14.5px] leading-[1.7] text-[#55524C]">
            Because proceeds can often be used flexibly — combining an
            acquisition, working capital, and even real estate into one loan —
            SBA financing can simplify what would otherwise be several separate
            loans into a single, more manageable one.
          </p>
        </div>

        {/* Who This Is For */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Who SBA Loans Are For
        </h2>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {[
            "Small business owners who don't qualify for conventional financing on their own",
            "Buyers acquiring an existing business",
            "Businesses needing working capital through a growth phase or seasonal cycle",
            "Franchisees opening a new location",
            "Business owners looking to consolidate or refinance existing higher-cost debt",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* General Eligibility Guidelines */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          General Eligibility Guidelines
        </h2>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {[
            "Operates as a for-profit business located in the U.S.",
            'Meets SBA size standards for a "small business" in your industry',
            "Demonstrates the ability to repay from business cash flow",
            "Owner has invested reasonable equity, and has exhausted other reasonable financing options",
            "Good personal and business credit history, generally a high-600s credit score or better",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Comparison Table */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          SBA 7(a) vs. SBA Express vs. Conventional Business Loan
        </h2>
        <div className="overflow-x-auto">
          <table className="my-[18px] mb-[30px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-[#1C1C1C] text-left font-bold text-white">
                <th className="p-[11px_14px]"></th>
                <th className="p-[11px_14px]">SBA 7(a)</th>
                <th className="p-[11px_14px]">SBA Express</th>
                <th className="p-[11px_14px]">Conventional Business Loan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Max loan amount
                </td>
                <td className="p-[11px_14px] text-[#55524C]">$5M</td>
                <td className="p-[11px_14px] text-[#55524C]">$500K</td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Varies by lender
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Approval speed
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Standard underwriting
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Faster, streamlined
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Varies by lender
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Government guaranty
                </td>
                <td className="p-[11px_14px] text-[#55524C]">Up to 85%</td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Lower guaranty than standard 7(a)
                </td>
                <td className="p-[11px_14px] text-[#55524C]">None</td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Typical down payment
                </td>
                <td className="p-[11px_14px] text-[#55524C]">As low as 10%</td>
                <td className="p-[11px_14px] text-[#55524C]">As low as 10%</td>
                <td className="p-[11px_14px] text-[#55524C]">Often higher</td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Best for
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Larger, flexible-use financing
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Smaller loans needing a fast decision
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Strong businesses that don&apos;t need SBA flexibility
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
              q: "What can I use an SBA loan for?",
              a: "SBA loan proceeds are flexible and can generally be used for working capital, equipment purchases, business acquisitions, debt refinancing, franchise financing, and commercial real estate. The specific program you use can affect which uses are eligible and the maximum term available.",
            },
            {
              q: "How much can I borrow with an SBA loan?",
              a: "SBA 7(a) loans, the most widely used SBA program, go up to $5 million. Smaller programs like SBA Express offer faster approval on loans up to $500,000, while SBA microloans are available for smaller amounts, often used by newer or smaller businesses.",
            },
            {
              q: "What is the SBA guaranty fee?",
              a: "The SBA guaranty fee is a one-time, government-set fee paid on the guaranteed portion of most SBA loans with a maturity over 12 months, in addition to interest. Fee tiers vary by loan size and are reviewed and published annually by the SBA, so the exact percentage should be confirmed at the time of your application.",
            },
            {
              q: "Do I need collateral for an SBA loan?",
              a: "It depends on the loan size and program. Smaller SBA loans may require little to no specific collateral, while larger loans typically require available business or personal assets to be pledged, though the SBA generally won't decline a loan solely for lack of full collateral if the business otherwise qualifies.",
            },
            {
              q: "How long does SBA loan approval take?",
              a: "Timelines vary by program and lender. Standard SBA 7(a) loans often take several weeks to a few months, while SBA Express and similarly streamlined programs are designed for faster turnaround, sometimes within days for an initial decision.",
            },
            {
              q: "What is SBA Express and how is it different from a standard 7(a) loan?",
              a: "SBA Express is a streamlined version of the 7(a) program offering faster approval turnaround, typically for loans up to $500,000, in exchange for a lower SBA guaranty percentage than a standard 7(a) loan.",
            },
            {
              q: "Can I use an SBA loan to buy an existing business?",
              a: "Yes. SBA 7(a) loans are commonly used to finance the purchase of an existing business, including goodwill, equipment, and in some cases real estate associated with the acquisition, often combined into a single loan.",
            },
            {
              q: "What credit score do I need to qualify for an SBA loan?",
              a: "SBA lenders generally look for a personal credit score in the high 600s or above, along with a review of business cash flow, time in business, and industry experience. Requirements vary by lender and loan program.",
            },
            {
              q: "Can I use an SBA loan to buy commercial real estate?",
              a: "Yes — SBA 7(a) and SBA 504 loans are both commonly used to purchase or refinance commercial real estate, often with lower down payments than a conventional commercial mortgage. See our Commercial Real Estate Loans page for details specific to property purchases.",
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
            Not sure which SBA program fits your business? Share a few details
            and a loan officer will map out your options the same day.
          </div>
        </div>
      </section>
    </div>
  );
}
