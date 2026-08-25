import type { Metadata } from "next";
import Link from "next/link";
import ProgramSwitcher from "@/components/site/LoanPrograms/FHALoans/FHAProgramSwitcher";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title: "FHA Alternative Income Documentation Programs | MyLoanDesk",
  description:
    "FHA loan options for wage earners and self-employed borrowers whose income doesn't fit a standard file — up to 96.5% financing using VOE or profit & loss documentation instead of typical income paperwork.",
  alternates: {
    canonical:
      "https://www.myloandesk.com/loan-programs/fha-alternative-loans/",
  },
  openGraph: {
    title: "FHA Alternative Income Documentation Programs | MyLoanDesk",
    description:
      "Up to 96.5% FHA financing for wage earners and self-employed borrowers whose income doesn't fit a standard file. Learn about VOE and profit & loss documentation options.",
    url: "https://www.myloandesk.com/loan-programs/fha-alternative-loans/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "FHA Alternative Documentation Loans - MyLoanDesk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FHA Alternative Income Documentation Programs | MyLoanDesk",
    description:
      "Up to 96.5% FHA financing using VOE or P&L statements without standard tax returns.",
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

const fhaAltDocsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.myloandesk.com/loan-programs/fha-alternative-documentation/#webpage",
      url: "https://www.myloandesk.com/loan-programs/fha-alternative-documentation/",
      name: "FHA Alternative Income Documentation Programs | MyLoanDesk",
      description:
        "Flexible FHA qualification programs utilizing verification of employment (VOE) or profit & loss (P&L) statements for non-traditional wage earners and self-employed borrowers.",
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
        "https://www.myloandesk.com/loan-programs/fha-alternative-documentation/#product",
      name: "FHA Alternative Documentation Loan",
      description:
        "Government-insured FHA mortgage financing up to 96.5% LTV using non-traditional income documentation paths such as VOE and self-employed P&L statements.",
      provider: {
        "@id": "https://www.myloandesk.com/#organization",
      },
      category: "MortgageLoan",
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.myloandesk.com/loan-programs/fha-alternative-documentation/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is FHA VOE and how is it different from a standard FHA loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FHA VOE is an FHA-based option for eligible wage-earning borrowers that uses a direct verification of employment from your employer along with a recent pay stub, rather than the fuller income documentation package a standard FHA file may require. It can be a helpful path when your income is stable but doesn't fit cleanly into a typical documentation review.",
          },
        },
        {
          "@type": "Question",
          name: "Can I qualify for an FHA loan without providing tax returns if I'm self-employed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In some cases, yes. The FHA Self-Employed P&L option allows eligible business owners to qualify using profit and loss statements and a current balance sheet instead of tax returns, provided they've been self-employed for at least two full years and own at least 25% of the business.",
          },
        },
        {
          "@type": "Question",
          name: "What credit score do I need for these alternative documentation programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The FHA VOE option generally looks for a minimum credit score of 580. The FHA Self-Employed P&L option generally looks for a mid credit score of at least 640, based on three credit scores. Exact requirements can vary based on the full loan scenario.",
          },
        },
        {
          "@type": "Question",
          name: "How much do I need to put down?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both programs offer financing up to 96.5% of the purchase price, meaning a minimum down payment as low as 3.5%, similar to a standard FHA loan.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use gift funds for my down payment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Both programs allow down payment funds to come entirely from an eligible gift, typically from an immediate family member such as a spouse, parent, child, sibling, or grandparent, subject to standard gift documentation requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Are these programs available for a duplex, triplex, or fourplex?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both programs may be available for primary residence properties with 1 to 4 units, subject to full eligibility and property review.",
          },
        },
        {
          "@type": "Question",
          name: "What are FHA loan limits and how do they affect how much I can borrow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FHA loan limits set the maximum standard-balance loan amount and vary by state, county, property type, and number of units. Higher-cost counties often have higher limits than the national baseline. Because limits are set locally and updated periodically, it's best to confirm the current limit for your specific county before assuming a loan amount.",
          },
        },
        {
          "@type": "Question",
          name: "Who is a good fit for the FHA Self-Employed P&L option versus a traditional FHA loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Business owners with stable, provable income who don't have an LLC or corporation, or whose tax returns understate their true income due to deductions, are often a better fit for the P&L option than a tax-return-based FHA file. A loan officer can review your specific situation to confirm which path fits best.",
          },
        },
      ],
    },
  ],
};

export default function FhaAlternativeDocsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Loan Programs", url: "/loan-programs" },
    {
      name: "FHA Alternative Documentation",
      url: "/loan-programs/fha-alternative-documentation",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EDEAE2] text-[#55524C] antialiased">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fhaAltDocsSchema) }}
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
          FHA Alternative Income Documentation Programs
        </h1>
        <hr className="mb-[26px] border-0 border-t border-[#E6E0D3]" />

        {/* Hero Section */}
        <div className="mb-1.5 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.02em] text-[#B85A1C]">
              When your income doesn&apos;t fit a standard file, there may still
              be an FHA path.
            </div>
            <p className="mb-6 max-w-[700px] text-[15.5px] leading-[1.7] text-[#55524C]">
              Not every qualified borrower&apos;s income fits neatly into a
              standard FHA documentation review — a wage earner with a
              nontraditional pay structure, or a business owner whose tax
              returns understate real income after deductions, can still be a
              strong borrower. These alternative documentation options finance
              up to 96.5% of the purchase price using a different — but still
              fully documented — path to verify your income.
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
                <span>Financing up to 96.5% of the purchase price</span>
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
                <span>Gift funds allowed toward your down payment</span>
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
                <span>Available for primary residences, 1–4 units</span>
              </div>
            </div>
          </div>

          {/* Interactive Client Switcher Card */}
          <ProgramSwitcher />
        </div>

        {/* Section: What Are Alternative Documentation FHA Loans */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          What Are Alternative Documentation FHA Loans?
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          A standard FHA loan typically documents income through tax returns,
          W-2s, and pay stubs. These alternative documentation programs are
          still FHA-based and still require full verification of your income and
          ability to repay — they simply use a different set of documents to
          prove it, built around how certain borrowers are actually paid.
        </p>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          For wage earners, that can mean verifying income directly through your
          employer rather than leaning solely on tax transcripts. For business
          owners, it can mean qualifying from your profit and loss statements
          and balance sheet rather than tax returns that may understate your
          real cash flow after deductions and write-offs.
        </p>

        {/* Section: Program Highlights */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          Program Highlights
        </h2>
        <div className="mb-3.5 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
          What&apos;s included, across both options:
        </div>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            Financing up to 96.5% of the purchase price (as low as 3.5% down)
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            100% of your down payment can come from an eligible family gift
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            Available for primary residences with 1 to 4 units
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            Seller-paid closing cost contributions may be allowed, subject to
            program limits
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            Purchase-focused options designed around real-world income
            situations
          </li>
        </ul>

        {/* Box: Strategic Advantages */}
        <div className="my-[18px] mb-[30px] rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-[26px_28px]">
          <div className="mb-3 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
            Why This Might Be a Better Fit:
          </div>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            Many strong borrowers get turned away from standard FHA underwriting
            simply because their documentation doesn&apos;t match the file
            format a lender is used to reviewing — not because their income
            isn&apos;t real or stable. These programs exist for exactly that
            gap.
          </p>
          <p className="mb-0 text-[14.5px] leading-[1.7] text-[#55524C]">
            For self-employed borrowers in particular, tax returns often
            understate true income after legitimate business deductions. A
            profit-and-loss-based review can reflect your business&apos;s actual
            performance more accurately than a tax-return-only file would.
          </p>
        </div>

        {/* Section: Comparison Table */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          FHA VOE vs. FHA Self-Employed P&amp;L
        </h2>
        <div className="overflow-x-auto">
          <table className="my-[18px] mb-[30px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-[#1C1C1C] text-left font-bold text-white">
                <th className="p-[11px_14px]"></th>
                <th className="p-[11px_14px]">FHA VOE</th>
                <th className="p-[11px_14px]">FHA Self-Employed P&amp;L</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Best for
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  W-2 wage earners with a nontraditional documentation situation
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Business owners and sole proprietors
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Income verified via
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Employer verification + recent pay stub
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Profit &amp; loss statements + current balance sheet
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Typical minimum credit score
                </td>
                <td className="p-[11px_14px] text-[#55524C]">Around 580</td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Around 640 (mid score of three)
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Employment / business history
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  2+ years with current employer
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  2+ full years self-employed
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Max financing
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Up to 96.5% LTV
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Up to 96.5% LTV
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: Eligibility Guidelines */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          General Eligibility Guidelines
        </h2>
        <div className="mb-3 grid max-w-[700px] grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            580+ credit score for FHA VOE
          </div>
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            640 mid score (of 3) for Self-Employed P&amp;L
          </div>
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            Primary residence purchases, 1–4 units
          </div>
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            Verified funds to close, or an eligible gift
          </div>
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            2+ years employment history (VOE)
          </div>
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            2+ full years self-employed, 25%+ ownership (P&amp;L)
          </div>
        </div>
        <p className="mt-1 text-[13px] leading-[1.75] text-[#8F8A7C]">
          Final eligibility, pricing, and loan terms are always subject to a
          full review of your complete scenario. This overview is general
          guidance, not a commitment to lend.
        </p>

        {/* Section: Loan Limits */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          A Note on FHA Loan Limits
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          FHA sets a maximum &quot;standard-balance&quot; loan amount that
          varies by state, county, property type, and number of units —
          higher-cost areas often have higher limits than the national baseline.
          As an example, standard-balance FHA limits for a high-cost county like
          Los Angeles County, CA currently look like this:
        </p>
        <table className="my-3.5 mb-2 max-w-[520px] w-full border-collapse text-[13.5px]">
          <thead>
            <tr className="border-b-2 border-[#E6E0D3] bg-[#F3EFE6] text-left font-bold text-[#1C1C1C]">
              <th className="p-[9px_12px]">Units</th>
              <th className="p-[9px_12px]">Standard-Balance Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#E6E0D3]">
              <td className="p-[9px_12px] text-[#55524C]">1-unit</td>
              <td className="p-[9px_12px] text-[#55524C]">Up to $832,750</td>
            </tr>
            <tr className="border-b border-[#E6E0D3]">
              <td className="p-[9px_12px] text-[#55524C]">2-unit</td>
              <td className="p-[9px_12px] text-[#55524C]">Up to $1,066,250</td>
            </tr>
            <tr className="border-b border-[#E6E0D3]">
              <td className="p-[9px_12px] text-[#55524C]">3-unit</td>
              <td className="p-[9px_12px] text-[#55524C]">Up to $1,288,800</td>
            </tr>
            <tr className="border-b border-[#E6E0D3]">
              <td className="p-[9px_12px] text-[#55524C]">4-unit</td>
              <td className="p-[9px_12px] text-[#55524C]">Up to $1,601,750</td>
            </tr>
          </tbody>
        </table>
        <p className="text-[13px] leading-[1.75] text-[#8F8A7C]">
          Loan limits are set locally, updated periodically, and can differ
          significantly outside higher-cost counties — always confirm the
          current limit for your specific location with a loan officer rather
          than assuming a figure based on another area.
        </p>

        {/* Section: FAQs */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          Frequently Asked Questions
        </h2>
        <div>
          <div className="border-b border-[#E6E0D3] py-4">
            <p className="mb-1.5 font-sans text-[15px] font-bold text-[#1C1C1C]">
              What is FHA VOE and how is it different from a standard FHA loan?
            </p>
            <p className="m-0 text-[14.5px] leading-[1.7] text-[#55524C]">
              FHA VOE is an FHA-based option for eligible wage-earning borrowers
              that uses a direct verification of employment from your employer
              along with a recent pay stub, rather than the fuller income
              documentation package a standard FHA file may require. It can be a
              helpful path when your income is stable but doesn&apos;t fit
              cleanly into a typical documentation review.
            </p>
          </div>
          <div className="border-b border-[#E6E0D3] py-4">
            <p className="mb-1.5 font-sans text-[15px] font-bold text-[#1C1C1C]">
              Can I qualify for an FHA loan without providing tax returns if
              I&apos;m self-employed?
            </p>
            <p className="m-0 text-[14.5px] leading-[1.7] text-[#55524C]">
              In some cases, yes. The FHA Self-Employed P&amp;L option allows
              eligible business owners to qualify using profit and loss
              statements and a current balance sheet instead of tax returns,
              provided they&apos;ve been self-employed for at least two full
              years and own at least 25% of the business.
            </p>
          </div>
          <div className="border-b border-[#E6E0D3] py-4">
            <p className="mb-1.5 font-sans text-[15px] font-bold text-[#1C1C1C]">
              What credit score do I need for these alternative documentation
              programs?
            </p>
            <p className="m-0 text-[14.5px] leading-[1.7] text-[#55524C]">
              The FHA VOE option generally looks for a minimum credit score of
              580. The FHA Self-Employed P&amp;L option generally looks for a
              mid credit score of at least 640, based on three credit scores.
              Exact requirements can vary based on the full loan scenario.
            </p>
          </div>
          <div className="border-b border-[#E6E0D3] py-4">
            <p className="mb-1.5 font-sans text-[15px] font-bold text-[#1C1C1C]">
              How much do I need to put down?
            </p>
            <p className="m-0 text-[14.5px] leading-[1.7] text-[#55524C]">
              Both programs offer financing up to 96.5% of the purchase price,
              meaning a minimum down payment as low as 3.5%, similar to a
              standard FHA loan.
            </p>
          </div>
          <div className="border-b border-[#E6E0D3] py-4">
            <p className="mb-1.5 font-sans text-[15px] font-bold text-[#1C1C1C]">
              Can I use gift funds for my down payment?
            </p>
            <p className="m-0 text-[14.5px] leading-[1.7] text-[#55524C]">
              Yes. Both programs allow down payment funds to come entirely from
              an eligible gift, typically from an immediate family member such
              as a spouse, parent, child, sibling, or grandparent, subject to
              standard gift documentation requirements.
            </p>
          </div>
          <div className="border-b border-[#E6E0D3] py-4">
            <p className="mb-1.5 font-sans text-[15px] font-bold text-[#1C1C1C]">
              Are these programs available for a duplex, triplex, or fourplex?
            </p>
            <p className="m-0 text-[14.5px] leading-[1.7] text-[#55524C]">
              Both programs may be available for primary residence properties
              with 1 to 4 units, subject to full eligibility and property
              review.
            </p>
          </div>
          <div className="border-b border-[#E6E0D3] py-4">
            <p className="mb-1.5 font-sans text-[15px] font-bold text-[#1C1C1C]">
              What are FHA loan limits and how do they affect how much I can
              borrow?
            </p>
            <p className="m-0 text-[14.5px] leading-[1.7] text-[#55524C]">
              FHA loan limits set the maximum standard-balance loan amount and
              vary by state, county, property type, and number of units.
              Higher-cost counties often have higher limits than the national
              baseline. Because limits are set locally and updated periodically,
              it&apos;s best to confirm the current limit for your specific
              county before assuming a loan amount.
            </p>
          </div>
          <div className="py-4">
            <p className="mb-1.5 font-sans text-[15px] font-bold text-[#1C1C1C]">
              Who is a good fit for the FHA Self-Employed P&amp;L option versus
              a traditional FHA loan?
            </p>
            <p className="m-0 text-[14.5px] leading-[1.7] text-[#55524C]">
              Business owners with stable, provable income who don&apos;t have
              an LLC or corporation, or whose tax returns understate their true
              income due to deductions, are often a better fit for the P&amp;L
              option than a tax-return-based FHA file. A loan officer can review
              your specific situation to confirm which path fits best.
            </p>
          </div>
        </div>

        {/* Section: Tell Us About Your Situation / CTA */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          Tell Us About Your Situation
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          Every scenario is a little different, and these programs work best
          when we understand your full picture upfront. When you reach out, it
          helps to include:
        </p>
        <div className="mb-3 grid max-w-[700px] grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            Whether you&apos;re buying or refinancing
          </div>
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            The property type and number of units
          </div>
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            The city and state you&apos;re buying in
          </div>
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            Purchase price or estimated value
          </div>
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            Your approximate credit score
          </div>
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            Whether you&apos;re a wage earner or self-employed
          </div>
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            Years at your job (VOE) or years in business (P&amp;L)
          </div>
          <div className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]">
            For business owners: your ownership percentage and business type
          </div>
        </div>

        <div className="mt-[26px]">
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
            Have a specific scenario in mind? Share the details above and a loan
            officer will review your options the same day.
          </div>
        </div>
      </section>
    </div>
  );
}
