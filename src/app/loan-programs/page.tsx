import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import ResidentialProgramsSection from "@/components/site/LoanPrograms/ResidentialProgramsSection";
import HomeEquitySection from "@/components/site/LoanPrograms/RehabRefinanceSection";
import ReverseMortgageSection from "@/components/site/LoanPrograms/ReverseMortgageSection";
import RealEstateInvestmentSection from "@/components/site/LoanPrograms/RealEstateSection";
import CommercialFinancingSection from "@/components/site/LoanPrograms/CommercialSection";
import SBABusinessSection from "@/components/site/LoanPrograms/SBABusinessSection";
import InternationalCustomSection from "@/components/site/LoanPrograms/InternationalSection";

export const metadata: Metadata = {
  title: "Wholesale Mortgage & Commercial Loan Programs | MyLoanDesk",
  description:
    "Explore diverse residential, commercial, DSCR, Jumbo, FHA, VA, reverse mortgage, SBA, and international property loan programs across 100+ wholesale lenders.",
  alternates: {
    canonical: "https://www.myloandesk.com/loan-programs/",
  },
  openGraph: {
    title: "Wholesale Mortgage & Commercial Loan Programs | MyLoanDesk",
    description:
      "Explore diverse residential, commercial, DSCR, Jumbo, FHA, VA, reverse mortgage, SBA, and international property loan programs across 100+ wholesale lenders.",
    type: "website",
    url: "https://www.myloandesk.com/loan-programs/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "MyLoanDesk Loan Programs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wholesale Mortgage & Commercial Loan Programs | MyLoanDesk",
    description:
      "Compare residential, commercial, investor, and specialized mortgage programs with custom underwriting options.",
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

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const loanProgramsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.myloandesk.com/loan-programs/#webpage",
      url: "https://www.myloandesk.com/loan-programs/",
      name: "Loan Programs | MyLoanDesk",
      description:
        "Comprehensive directory of residential, commercial, portfolio, and alternative documentation mortgage loan programs.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.myloandesk.com/#website",
      },
      about: {
        "@id": "https://www.myloandesk.com/#organization",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.myloandesk.com/loan-programs/#programlist",
      name: "Available Mortgage & Financing Programs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Conventional Mortgages",
          url: "https://www.myloandesk.com/loan-programs/conventional-loans",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "FHA Loans",
          url: "https://www.myloandesk.com/loan-programs/fha-loans",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "FHA Streamline Refinance",
          url: "https://www.myloandesk.com/loan-programs/fha-streamline-refinance",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "FHA Alternative Income Documentation",
          url: "https://www.myloandesk.com/loan-programs/fha-alternative-documentation",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "VA Loans",
          url: "https://www.myloandesk.com/loan-programs/va-loans",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Jumbo & Super Jumbo Loans",
          url: "https://www.myloandesk.com/loan-programs/jumbo-loans",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "2/1 Buydown Loans",
          url: "https://www.myloandesk.com/loan-programs/2-1-buydown-loans",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Bank Statement Loans",
          url: "https://www.myloandesk.com/loan-programs/bank-statement-loans",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "DSCR Investment Property Loans",
          url: "https://www.myloandesk.com/loan-programs/dscr-investment-property-loans",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Bridge Loans",
          url: "https://www.myloandesk.com/loan-programs/bridge-loans",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Bridge to Sale Loans",
          url: "https://www.myloandesk.com/loan-programs/bridge-to-sale-loans",
        },
        {
          "@type": "ListItem",
          position: 12,
          name: "Fix and Flip Loans",
          url: "https://www.myloandesk.com/loan-programs/fix-and-flip-loans",
        },
        {
          "@type": "ListItem",
          position: 13,
          name: "Construction Loans",
          url: "https://www.myloandesk.com/loan-programs/construction-loans",
        },
        {
          "@type": "ListItem",
          position: 14,
          name: "Home Equity Loans & HELOCs",
          url: "https://www.myloandesk.com/loan-programs/heloc-loans",
        },
        {
          "@type": "ListItem",
          position: 15,
          name: "Commercial Real Estate Loans",
          url: "https://www.myloandesk.com/loan-programs/commercial-real-estate-loans",
        },
        {
          "@type": "ListItem",
          position: 16,
          name: "SBA Business Loans",
          url: "https://www.myloandesk.com/loan-programs/sba-business-loans",
        },
        {
          "@type": "ListItem",
          position: 17,
          name: "ITIN Loans",
          url: "https://www.myloandesk.com/loan-programs/itin-loans",
        },
        {
          "@type": "ListItem",
          position: 18,
          name: "Foreign National & International Buyer Loans",
          url: "https://www.myloandesk.com/loan-programs/foreign-national-loans",
        },
        {
          "@type": "ListItem",
          position: 19,
          name: "Medical Professional Loan Programs",
          url: "https://www.myloandesk.com/loan-programs/medical-professional-loans",
        },
        {
          "@type": "ListItem",
          position: 20,
          name: "Property Financing in Portugal",
          url: "https://www.myloandesk.com/loan-programs/portugal-property-financing",
        },
        {
          "@type": "ListItem",
          position: 21,
          name: "Reverse Mortgage Programs",
          url: "https://www.myloandesk.com/reverse-mortgage",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.myloandesk.com/loan-programs/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What makes MyLoanDesk's loan programs different from standard retail banks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike a single bank with rigid guidelines, MyLoanDesk operates as an independent brokerage partnering with 100+ wholesale lenders, allowing us to approve non-traditional income profiles, investment portfolios, commercial properties, and specialized scenarios.",
          },
        },
        {
          "@type": "Question",
          name: "Can I qualify for a mortgage if I am self-employed or lack tax return history?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer alternative documentation programs, including Bank Statement loans, Profit & Loss (P&L) verification, 1099 programs, and DSCR loans that do not rely on personal tax return transcripts.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum down payment across your residential loan options?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Down payment minimums range from 0% for eligible veterans via VA loans, to 3% for Conventional first-time buyers, and 3.5% for standard or alternative-documentation FHA programs.",
          },
        },
      ],
    },
  ],
};

export default function LoanProgramsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Loan Programs", url: "/loan-programs" },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-28 pb-24 lg:pt-36">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(loanProgramsSchema),
        }}
      />

      {/* Editorial Page Introduction Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="max-w-4xl">
          <h1
            className={cn(
              "text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.08] tracking-tight mb-8",
              fraunces.className,
            )}
          >
            Our Loan <br />
            <em className="text-moss-deep italic font-serif">Programs</em>
          </h1>
          <div className="space-y-6 text-lg text-ink-2 leading-relaxed max-w-3xl">
            <p className="font-medium text-ink">
              We are experts in Residential &amp; Commercial Lending,
              specializing in Portfolio Loans.
            </p>
            <p>
              We provide a wide range of Conventional, Jumbo, and Portfolio
              Residential &amp; Commercial mortgage programs for borrowers with
              unique needs that standard big banks often struggle to approve.
            </p>
            <p>
              We also serve clients seeking a lender to pre-approve unique
              properties that may not conform to typical mortgage requirements.
            </p>
            <p>
              My Loan Desk is your one-stop shop for all your mortgage needs. We
              specialize in helping home buyers who struggle to get pre-approved
              under typical lending standards.
            </p>
          </div>
        </div>
      </section>

      {/* Primary 1px Grid Architecture Layout (Residential & Dynamic Lending) */}
      <ResidentialProgramsSection />

      {/* Secondary 1px Grid Architecture Layout (Rehab & Refinance Infrastructure) */}
      <HomeEquitySection />

      {/* Reverse Mortgage */}
      <ReverseMortgageSection />

      {/* Real Estate Investment Loans */}
      <RealEstateInvestmentSection />

      {/* Commercial */}
      <CommercialFinancingSection />

      {/* SBA and business loans */}
      <SBABusinessSection />

      {/* Global Borders Cross-Section (Mexico, Portugal & Specialty EEP / Medical Channels) */}
      <InternationalCustomSection />

      {/* Footer Legal Context Section */}
      <section className="bg-cream/40 border-t border-line py-12 text-ink-2 text-[11px] leading-relaxed">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-4">
          <p>
            * Rates and programs are illustrations subject to change without
            notice. These calculations do not constitute an official Loan
            Estimate or a binding commitment to lend. Qualification is subject
            to verification of financial assets and credit data profiles.
          </p>
          <p>
            MyLoanDesk.com is an independent lending entity and is not
            affiliated with the HUD, FHA, VA, USDA, or any federal agency. We
            strictly uphold Equal Housing Opportunity lending baselines.
          </p>
          <p>
            Secured Horizon Mortgage Group, Inc. NMLS 314226, 1444825
            (www.nmlsconsumeraccess.org) | (305) 891-6500 | 1801 NE 123 St,
            Suite 314, North Miami, FL 33181.
          </p>
        </div>
      </section>
    </main>
  );
}
