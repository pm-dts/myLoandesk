import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import ResidentialProgramsSection from "@/components/site/LoanPrograms/ResidentialProgramsSection";
import HomeEquitySection from "@/components/site/LoanPrograms/RehabRefinanceSection";
import ReverseMortgageSection from "@/components/site/LoanPrograms/ReverseMortgageSection";
import RealEstateInvestmentSection from "@/components/site/LoanPrograms/RealEstateSection";
import CommercialFinancingSection from "@/components/site/LoanPrograms/CommercialSection";
import SBABusinessSection from "@/components/site/LoanPrograms/SBABusinessSection";
import InternationalCustomSection from "@/components/site/LoanPrograms/InternationalSection";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function getLoanProgramsMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "LoanPrograms.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/"
    : "https://www.myloandesk.com/loan-programs/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/loan-programs/",
        es: "https://www.myloandesk.com/es/loan-programs/",
        "x-default": "https://www.myloandesk.com/loan-programs/",
      },
    },
    openGraph: {
      title: t("og_title"),
      description: t("og_description"),
      type: "website",
      url: canonicalUrl,
      siteName: "MyLoanDesk",
      locale: isEs ? "es_US" : "en_US",
      images: [
        {
          url: "/og-image.jpeg",
          width: 1200,
          height: 630,
          alt: t("og_alt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitter_title"),
      description: t("twitter_description"),
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
}

export default async function LoanProgramsView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "LoanPrograms" });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const loanProgramsHref = isEs ? "/es/loan-programs" : "/loan-programs";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/"
    : "https://www.myloandesk.com/loan-programs/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.loan_programs"), url: loanProgramsHref },
  ];

  const loanProgramsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t("schema.webpage_name"),
        description: t("schema.webpage_description"),
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.myloandesk.com/#website",
        },
        about: {
          "@type": "FinancialService",
          "@id": "https://www.myloandesk.com/#organization",
          name: "MyLoanDesk",
        },
        mainEntity: {
          "@id": `${pageUrl}#programlist`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#programlist`,
        name: t("schema.itemlist_name"),
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
        "@id": `${pageUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: t("schema.faq_q1_question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("schema.faq_q1_answer"),
            },
          },
          {
            "@type": "Question",
            name: t("schema.faq_q2_question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("schema.faq_q2_answer"),
            },
          },
          {
            "@type": "Question",
            name: t("schema.faq_q3_question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("schema.faq_q3_answer"),
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-primary-bg pt-28 pb-24 lg:pt-36">
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
            {t("hero.heading_start")} <br />
            <em className="text-moss-deep italic font-serif">
              {t("hero.heading_italic")}
            </em>
          </h1>
          <div className="space-y-6 text-lg text-ink-2 leading-relaxed max-w-3xl">
            <p className="font-medium text-ink">{t("hero.p1")}</p>
            <p>{t("hero.p2")}</p>
            <p>{t("hero.p3")}</p>
            <p>{t("hero.p4")}</p>
          </div>
        </div>
      </section>

      {/* Primary 1px Grid Architecture Layout (Residential & Dynamic Lending) */}
      <ResidentialProgramsSection locale={locale} />

      {/* Secondary 1px Grid Architecture Layout (Rehab & Refinance Infrastructure) */}
      <HomeEquitySection locale={locale} />

      {/* Reverse Mortgage */}
      <ReverseMortgageSection locale={locale} />

      {/* Real Estate Investment Loans */}
      <RealEstateInvestmentSection locale={locale} />

      {/* Commercial */}
      <CommercialFinancingSection locale={locale} />

      {/* SBA and business loans */}
      <SBABusinessSection locale={locale} />

      {/* Global Borders Cross-Section (Mexico, Portugal & Specialty EEP / Medical Channels) */}
      <InternationalCustomSection locale={locale} />

      {/* Footer Legal Context Section */}
      <section className="bg-cream/40 border-t border-line py-12 text-ink-2 text-[11px] leading-relaxed">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-4">
          <p>{t("footer_disclaimer.p1")}</p>
          <p>{t("footer_disclaimer.p2")}</p>
          <p>{t("footer_disclaimer.p3")}</p>
        </div>
      </section>
    </main>
  );
}
