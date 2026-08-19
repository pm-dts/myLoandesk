import type { Metadata } from "next";
import Link from "next/link";
import StreamlineCalculator from "@/components/site/LoanPrograms/FHALoans/FHAStreamlineCalculator";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title:
    "FHA Streamline Refinance — Lower Your Rate, Less Paperwork | MyLoanDesk",
  description:
    "Refinance your existing FHA loan with reduced documentation and, in most cases, no new appraisal. Use our free calculator to see your potential monthly savings before you apply.",
  alternates: {
    canonical:
      "https://www.myloandesk.com/loan-programs/fha-streamline-refinance/",
  },
  openGraph: {
    title:
      "FHA Streamline Refinance — Lower Your Rate, Less Paperwork | MyLoanDesk",
    description:
      "If you already have an FHA loan, a Streamline Refinance can lower your rate with reduced documentation and often no new appraisal. Estimate your savings with our free calculator.",
    url: "https://www.myloandesk.com/loan-programs/fha-streamline-refinance/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "FHA Streamline Refinance - MyLoanDesk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FHA Streamline Refinance — Lower Your Rate, Less Paperwork | MyLoanDesk",
    description:
      "Refinance your existing FHA loan with reduced documentation and no appraisal in most cases.",
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

const streamlinePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.myloandesk.com/loan-programs/fha-streamline-refinance/#webpage",
      url: "https://www.myloandesk.com/loan-programs/fha-streamline-refinance/",
      name: "FHA Streamline Refinance | MyLoanDesk",
      description:
        "Comprehensive guide and monthly savings calculator for FHA Streamline Refinance mortgage programs.",
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
        "https://www.myloandesk.com/loan-programs/fha-streamline-refinance/#product",
      name: "FHA Streamline Refinance",
      description:
        "A simplified rate-and-term refinance program for existing FHA borrowers featuring reduced documentation, net tangible benefit requirements, and typically no appraisal requirement.",
      provider: {
        "@id": "https://www.myloandesk.com/#organization",
      },
      category: "RefinanceLoan",
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.myloandesk.com/loan-programs/fha-streamline-refinance/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an FHA Streamline Refinance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An FHA Streamline Refinance is a simplified refinance option available only to homeowners who already have an FHA loan. It's designed to lower your rate or payment with reduced documentation and, in most cases, no new home appraisal, compared to a standard refinance.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an appraisal for an FHA Streamline Refinance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In most cases, no. FHA Streamline Refinances typically don't require a new appraisal, which is one of the program's biggest advantages — your loan amount is generally based on your existing loan balance rather than a new appraised value.",
          },
        },
        {
          "@type": "Question",
          name: "What is the net tangible benefit requirement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FHA requires that a Streamline Refinance provide a clear financial benefit to the borrower — commonly a reduction in combined principal, interest, and mortgage insurance payment, or a move from an adjustable-rate to a fixed-rate loan. This protects borrowers from refinancing into a loan that doesn’t actually improve their position.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get cash out with an FHA Streamline Refinance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. FHA Streamline Refinances are rate-and-term refinances only, meaning they’re designed to improve your rate or terms, not to pull cash out of your equity. Borrowers who want to access equity would instead look at an FHA cash-out refinance.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to requalify with income and credit documentation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many FHA Streamline Refinances involve reduced income and asset documentation compared to a standard refinance, since you're already an established FHA borrower. Specific requirements can vary by lender and loan scenario.",
          },
        },
        {
          "@type": "Question",
          name: "What is the FHA upfront MIP refund?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you refinance within roughly the first three years of your original FHA loan, you may be eligible for a partial refund of your original upfront mortgage insurance premium, which is credited toward the upfront MIP on your new loan — reducing your overall refinance cost.",
          },
        },
        {
          "@type": "Question",
          name: "How long must I have had my current FHA loan before refinancing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FHA generally requires your current loan to be at least 210 days old and for you to have made at least six monthly payments before you can complete a Streamline Refinance.",
          },
        },
        {
          "@type": "Question",
          name: "Can I convert an adjustable-rate FHA loan to fixed with a Streamline Refinance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Converting from an adjustable-rate FHA loan to a fixed-rate FHA loan is one of the ways a Streamline Refinance can satisfy FHA's net tangible benefit requirement, even if the immediate payment change is modest.",
          },
        },
      ],
    },
  ],
};

export default function FhaStreamlinePage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Loan Programs", url: "/loan-programs" },
    {
      name: "FHA Streamline Refinance",
      url: "/loan-programs/fha-streamline-refinance",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EDEAE2] text-[#55524C] antialiased">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(streamlinePageSchema),
        }}
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
          FHA Streamline Refinance
        </h1>
        <hr className="mb-[26px] border-0 border-t border-[#E6E0D3]" />

        {/* Hero Section */}
        <div className="mb-1.5 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.02em] text-[#B85A1C]">
              Already have an FHA loan? Refinancing may be simpler than you
              think.
            </div>
            <p className="mb-6 max-w-[680px] text-[15.5px] leading-[1.7] text-[#55524C]">
              If you currently have an FHA loan, an FHA Streamline Refinance is
              one of the fastest, lowest-hassle ways to lower your rate or
              switch out of an adjustable-rate loan. Reduced documentation and,
              in most cases, no new appraisal make it a genuinely
              &quot;streamlined&quot; process compared to a standard refinance.
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
                <span>No new appraisal required in most cases</span>
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
                <span>Reduced income and asset documentation</span>
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
                  Possible partial refund of your original upfront MIP
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Card */}
          <StreamlineCalculator />
        </div>

        <p className="mt-1.5 max-w-[680px] text-[11.5px] text-[#9A9585]">
          Estimate only. Assumes a 30-year term at both rates and does not
          include mortgage insurance or closing costs. FHA generally requires a
          Streamline Refinance to provide a clear net tangible benefit, often
          reflected as a meaningful reduction in combined payment. Actual
          eligibility and savings depend on full underwriting.
        </p>

        {/* What Is FHA Streamline */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          What Is an FHA Streamline Refinance?
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          An FHA Streamline Refinance is a simplified refinance option available
          exclusively to homeowners who already have an FHA loan. Because
          you&apos;re already an established FHA borrower, the program is built
          to reduce the paperwork and steps involved compared to a standard
          refinance — most notably, it typically doesn&apos;t require a new home
          appraisal.
        </p>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          The tradeoff is that FHA Streamline Refinances are rate-and-term only
          — they&apos;re designed to improve your loan&apos;s rate or structure,
          not to pull cash out of your home&apos;s equity. FHA also requires the
          refinance to provide a genuine &quot;net tangible benefit&quot; to
          you, which typically means a meaningful reduction in your combined
          payment, or a move from an adjustable to a fixed rate.
        </p>

        {/* How It Works */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          How an FHA Streamline Refinance Works
        </h2>
        <div className="max-w-[700px] space-y-4">
          {[
            {
              step: "1",
              title: "Confirm eligibility.",
              desc: "Your current FHA loan generally needs to be at least 210 days old with at least six payments made.",
            },
            {
              step: "2",
              title: "Run the numbers.",
              desc: "We compare your current payment to your new estimated payment to confirm a net tangible benefit.",
            },
            {
              step: "3",
              title: "Submit reduced documentation.",
              desc: "Since you're already an established FHA borrower, the paperwork is typically lighter than your original loan.",
            },
            {
              step: "4",
              title: "Skip the appraisal, in most cases.",
              desc: "Your new loan amount is generally based on your existing balance rather than a fresh appraised value.",
            },
            {
              step: "5",
              title: "Close on your new loan.",
              desc: "Sign your final documents and start on your new, hopefully lower, monthly payment.",
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
            "No new appraisal required in most cases",
            "Reduced income and asset documentation compared to a standard refinance",
            "Available to convert an adjustable-rate FHA loan to a fixed rate",
            "Possible partial refund of your original upfront MIP if refinancing early in your loan",
            "Often a faster, simpler closing process than your original FHA purchase loan",
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
            Skipping the appraisal isn&apos;t just a convenience — it also
            removes one of the biggest sources of refinance delay and
            uncertainty, since there&apos;s no risk of the deal falling apart
            over an appraisal that comes in lower than expected.
          </p>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            If you took out your FHA loan when rates were meaningfully higher, a
            Streamline Refinance can be one of the fastest ways to capture a
            lower rate without restarting the full mortgage process from
            scratch.
          </p>
          <p className="mb-0 text-[14.5px] leading-[1.7] text-[#55524C]">
            Refinancing within the first few years of your original loan may
            also qualify you for a partial refund of your original upfront MIP,
            effectively lowering the cost of refinancing again.
          </p>
        </div>

        {/* Who This Is For */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Who an FHA Streamline Refinance Is For
        </h2>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {[
            "Current FHA borrowers whose rate is meaningfully higher than today’s rates",
            "Borrowers on an adjustable-rate FHA loan who want the stability of a fixed rate",
            "Homeowners who want to avoid a new appraisal and the uncertainty that comes with it",
            "Borrowers who don’t need to pull cash out — just improve their rate or terms",
            "Anyone who took out their FHA loan within the last few years and hasn’t refinanced since",
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
          FHA Streamline vs. Standard Refinance Options
        </h2>
        <div className="overflow-x-auto">
          <table className="my-[18px] mb-[30px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-[#1C1C1C] text-left font-bold text-white">
                <th className="p-[11px_14px]"></th>
                <th className="p-[11px_14px]">FHA Streamline</th>
                <th className="p-[11px_14px]">Standard FHA Refinance</th>
                <th className="p-[11px_14px]">Conventional Refinance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Requires existing FHA loan
                </td>
                <td className="p-[11px_14px] text-[#55524C]">Yes</td>
                <td className="p-[11px_14px] text-[#55524C]">No</td>
                <td className="p-[11px_14px] text-[#55524C]">No</td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  New appraisal required
                </td>
                <td className="p-[11px_14px] text-[#55524C]">Typically no</td>
                <td className="p-[11px_14px] text-[#55524C]">Yes</td>
                <td className="p-[11px_14px] text-[#55524C]">Yes</td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Documentation
                </td>
                <td className="p-[11px_14px] text-[#55524C]">Reduced</td>
                <td className="p-[11px_14px] text-[#55524C]">Full</td>
                <td className="p-[11px_14px] text-[#55524C]">Full</td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Cash-out available
                </td>
                <td className="p-[11px_14px] text-[#55524C]">No</td>
                <td className="p-[11px_14px] text-[#55524C]">Yes</td>
                <td className="p-[11px_14px] text-[#55524C]">Yes</td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  Best for
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Lowering rate on an existing FHA loan quickly
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  FHA borrowers who also want cash out
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  Non-FHA borrowers or those leaving FHA mortgage insurance
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Eligibility Requirements */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Eligibility Requirements
        </h2>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {[
            "Must currently have an FHA-insured mortgage",
            "Loan generally must be at least 210 days old with at least six payments made",
            "Mortgage payment history typically must be current, with no recent late payments",
            "The refinance must provide a net tangible benefit under FHA guidelines",
            "Cannot be used to take cash out of your home’s equity",
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Frequently Asked Questions */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          Frequently Asked Questions
        </h2>
        <div>
          {[
            {
              q: "What is an FHA Streamline Refinance?",
              a: "An FHA Streamline Refinance is a simplified refinance option available only to homeowners who already have an FHA loan. It’s designed to lower your rate or payment with reduced documentation and, in most cases, no new home appraisal, compared to a standard refinance.",
            },
            {
              q: "Do I need an appraisal for an FHA Streamline Refinance?",
              a: "In most cases, no. FHA Streamline Refinances typically don’t require a new appraisal, which is one of the program’s biggest advantages — your loan amount is generally based on your existing loan balance rather than a new appraised value.",
            },
            {
              q: "What is the net tangible benefit requirement?",
              a: "FHA requires that a Streamline Refinance provide a clear financial benefit to the borrower — commonly a reduction in combined principal, interest, and mortgage insurance payment, or a move from an adjustable-rate to a fixed-rate loan. This protects borrowers from refinancing into a loan that doesn’t actually improve their position.",
            },
            {
              q: "Can I get cash out with an FHA Streamline Refinance?",
              a: "No. FHA Streamline Refinances are rate-and-term refinances only, meaning they’re designed to improve your rate or terms, not to pull cash out of your equity. Borrowers who want to access equity would instead look at an FHA cash-out refinance.",
            },
            {
              q: "Do I need to requalify with income and credit documentation?",
              a: "Many FHA Streamline Refinances involve reduced income and asset documentation compared to a standard refinance, since you're already an established FHA borrower. Specific requirements can vary by lender and loan scenario.",
            },
            {
              q: "What is the FHA upfront MIP refund?",
              a: "If you refinance within roughly the first three years of your original FHA loan, you may be eligible for a partial refund of your original upfront mortgage insurance premium, which is credited toward the upfront MIP on your new loan — reducing your overall refinance cost.",
            },
            {
              q: "How long must I have had my current FHA loan before refinancing?",
              a: "FHA generally requires your current loan to be at least 210 days old and for you to have made at least six monthly payments before you can complete a Streamline Refinance.",
            },
            {
              q: "Can I convert an adjustable-rate FHA loan to fixed with a Streamline Refinance?",
              a: "Yes. Converting from an adjustable-rate FHA loan to a fixed-rate FHA loan is one of the ways a Streamline Refinance can satisfy FHA’s net tangible benefit requirement, even if the immediate payment change is modest.",
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
            Already have an FHA loan and curious what today&apos;s rate could
            save you? Reach out — a loan officer can check your numbers the same
            day.
          </div>
        </div>
      </section>
    </div>
  );
}
