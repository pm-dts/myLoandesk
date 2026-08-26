import type { Metadata } from "next";
import Link from "next/link";
import DscrCalculator from "@/components/site/LoanPrograms/DSCRLoans/DSCRCalculator";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title: "DSCR Investment Property Loans | MyLoanDesk",
  description:
    "Grow your real estate portfolio without personal income verification. Qualify for DSCR investment property financing based on property rental cash flow.",
  alternates: {
    canonical: "https://www.myloandesk.com/loan-programs/dscr-loans/",
  },
  openGraph: {
    title: "DSCR Investment Property Loans | MyLoanDesk",
    description:
      "Qualify for investment property financing based on property rental cash flow instead of personal income tax returns.",
    type: "website",
    url: "https://www.myloandesk.com/loan-programs/dscr-loans/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "DSCR Investment Property Loans - MyLoanDesk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DSCR Investment Property Loans | MyLoanDesk",
    description:
      "Qualify for investment property financing based on property rental cash flow without personal tax returns.",
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

const dscrPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.myloandesk.com/loan-programs/dscr-investment-property-loans/#webpage",
      url: "https://www.myloandesk.com/loan-programs/dscr-investment-property-loans/",
      name: "DSCR Investment Property Loans | MyLoanDesk",
      description:
        "Comprehensive guide and debt coverage ratio calculator for investor DSCR mortgage programs.",
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
        "https://www.myloandesk.com/loan-programs/dscr-investment-property-loans/#product",
      name: "DSCR Investment Property Loan",
      description:
        "An asset-based Non-QM mortgage allowing real estate investors to qualify using property rental cash flow rather than personal income or tax transcripts.",
      provider: {
        "@id": "https://www.myloandesk.com/#organization",
      },
      category: "MortgageLoan",
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.myloandesk.com/loan-programs/dscr-investment-property-loans/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a DSCR loan and how is it calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Debt Service Coverage Ratio (DSCR) loan qualifies real estate investors based on the property's gross rental income divided by its total monthly housing debt (principal, interest, taxes, insurance, and HOA dues). A ratio of 1.0 means the rent exactly covers the debt obligations.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need personal tax returns or employment verification for a DSCR loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. DSCR financing requires no personal tax returns, W-2s, pay stubs, or traditional debt-to-income (DTI) calculations, making it ideal for self-employed and portfolio real estate investors.",
          },
        },
        {
          "@type": "Question",
          name: "Can I finance an unlimited number of investment properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Unlike conventional Fannie Mae/Freddie Mac loans that cap individual borrowers at 10 financed properties, DSCR loan programs generally place no limits on the total number of properties an investor can finance.",
          },
        },
        {
          "@type": "Question",
          name: "Can short-term rentals (Airbnb / VRBO) qualify for DSCR loans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Many DSCR programs allow projected or historical short-term rental revenue verified through market data tools like AirDNA or 12-month operating statements.",
          },
        },
        {
          "@type": "Question",
          name: "Can I qualify if the DSCR ratio is below 1.0?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Some lenders offer 'no-ratio' or under-1.0 DSCR options that accommodate cash-flow deficits with slightly higher down payment or liquidity reserve requirements.",
          },
        },
      ],
    },
  ],
};

export default function DSCRLoansPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Loan Programs", url: "/loan-programs" },
    {
      name: "DSCR Investment Property Loans",
      url: "/loan-programs/dscr-investment-property-loans",
    },
  ];

  return (
    <main
      className="min-h-screen font-sans"
      style={{
        backgroundColor: "#EDEAE2",
        color: "#55524C",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dscrPageSchema),
        }}
      />

      <section className="block">
        <div className="max-w-[900px] mx-auto bg-[#FBF8F2] px-6 sm:px-14 py-11 pb-14">
          <Link
            href="/loan-programs"
            className="text-[13px] text-[#55524C] font-semibold inline-flex items-center gap-1.5 mb-[18px] hover:text-[#B85A1C] transition-colors"
          >
            &larr; Back to Loan Programs
          </Link>

          <h1 className="font-serif font-bold text-3xl sm:text-[38px] text-[#1C1C1C] mb-[18px] leading-[1.15]">
            DSCR Investment Property Loans
          </h1>

          <hr className="border-0 border-t border-[#E6E0D3] mb-[26px]" />

          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 items-start mb-[34px]">
            <div>
              <div className="font-sans font-bold text-xs sm:text-[14px] tracking-[0.02em] text-[#B85A1C] uppercase mb-[16px]">
                Grow your real estate portfolio without personal income
                verification.
              </div>
              <p className="text-[15.5px] leading-[1.7] text-[#55524C] mb-[30px] max-w-[680px]">
                A Debt Service Coverage Ratio (DSCR) Loan is designed
                specifically for real estate investors. Instead of qualifying
                based on your personal income, tax returns, or employment
                history, DSCR loans qualify based on the rental income a
                property generates relative to its own debt obligations. That
                makes it possible to scale your portfolio without the paperwork
                burden of a traditional mortgage.
              </p>
              <div className="flex flex-col gap-2.5 mt-[18px]">
                <div className="text-[13.5px] text-[#55524C] flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#D9722C"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Close in as little as 14 days
                </div>
                <div className="text-[13.5px] text-[#55524C] flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#D9722C"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Unlimited properties financed
                </div>
              </div>
            </div>

            {/* Isolated Client-side Calculator */}
            <DscrCalculator />
          </div>

          <div className="font-sans font-bold text-[13.5px] tracking-[0.03em] text-[#1C1C1C] uppercase mb-[14px]">
            Program Highlights:
          </div>
          <ul className="list-none m-0 p-0 mb-[32px] max-w-[680px]">
            {[
              "No personal income or tax return verification required",
              "Qualify based on the property's rental income versus its debt payments",
              "Finance an unlimited number of investment properties",
              "Available for single-family, multifamily, and short-term rental properties",
              "Ratios below 1.0 may still qualify with adjusted terms",
            ].map((highlight, i) => (
              <li
                key={i}
                className="relative pl-[20px] text-[15px] text-[#55524C] leading-[1.6] mb-[11px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#55524C]"
              >
                {highlight}
              </li>
            ))}
          </ul>

          <div className="bg-[#F3EFE6] border border-[#E6E0D3] rounded-[12px] p-[26px_28px] mb-[30px]">
            <div className="font-sans font-bold text-[13.5px] tracking-[0.03em] text-[#1C1C1C] uppercase mb-[12px]">
              Strategic Advantages:
            </div>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] mb-[12px]">
              Because DSCR loans are underwritten around the asset rather than
              the borrower, investors who own multiple properties — and
              therefore show complex or low taxable income after depreciation
              and write-offs — are often able to qualify more easily than
              through a conventional loan.
            </p>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] m-0">
              Many investors use DSCR financing to close faster and with fewer
              conditions, since there&apos;s no employment verification, no
              debt-to-income calculation, and no tax transcript requests slowing
              down the loan.
            </p>
          </div>

          <Link
            href="/get-started"
            className="flex items-center justify-center gap-[8px] w-full bg-[#D9722C] text-white font-sans font-bold text-[15px] p-[16px] border-0 rounded-[10px] cursor-pointer mb-[10px] no-underline hover:bg-[#B85A1C] transition-colors"
          >
            Apply Now &rarr;
          </Link>
          <Link
            href="/#start"
            className="flex items-center justify-center w-full bg-[#F5EFDF] text-[#1C1C1C] font-sans font-bold text-[15px] p-[16px] border border-[#E7DEC7] rounded-[10px] cursor-pointer no-underline hover:bg-[#EFE7D3] transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  );
}
