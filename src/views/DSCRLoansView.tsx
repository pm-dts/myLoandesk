import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import DscrCalculator from "@/components/site/LoanPrograms/DSCRLoans/DSCRCalculator";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export async function getDSCRLoansMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "DSCRLoans.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/dscr-loans/"
    : "https://www.myloandesk.com/loan-programs/dscr-loans/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/loan-programs/dscr-loans/",
        es: "https://www.myloandesk.com/es/loan-programs/dscr-loans/",
        "x-default": "https://www.myloandesk.com/loan-programs/dscr-loans/",
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

export default async function DSCRLoansView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "DSCRLoans" });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const loanProgramsHref = isEs ? "/es/loan-programs" : "/loan-programs";
  const dscrHref = isEs
    ? "/es/loan-programs/dscr-loans"
    : "/loan-programs/dscr-loans";
  const startHref = isEs ? "/es/#start" : "/#start";
  const getStartedHref = isEs ? "/es/get-started" : "/get-started";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/dscr-investment-property-loans/"
    : "https://www.myloandesk.com/loan-programs/dscr-investment-property-loans/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.loan_programs"), url: loanProgramsHref },
    { name: t("breadcrumbs.dscr_loans"), url: dscrHref },
  ];

  const dscrPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t("schema.webpage_name"),
        description: t("schema.webpage_description"),
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
        "@id": `${pageUrl}#product`,
        name: t("schema.product_name"),
        description: t("schema.product_description"),
        provider: {
          "@id": "https://www.myloandesk.com/#organization",
        },
        category: "MortgageLoan",
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
          {
            "@type": "Question",
            name: t("schema.faq_q4_question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("schema.faq_q4_answer"),
            },
          },
          {
            "@type": "Question",
            name: t("schema.faq_q5_question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("schema.faq_q5_answer"),
            },
          },
        ],
      },
    ],
  };

  const highlightItems = t.raw("highlights.items") as string[];

  return (
    <main
      className="min-h-screen font-sans"
      style={{
        backgroundColor: "#EDEAE2",
        color: "#55524C",
        WebkitFontSmoothing: "antialiased",
      }}
    >
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
            href={loanProgramsHref}
            className="text-[13px] text-[#55524C] font-semibold inline-flex items-center gap-1.5 mb-[18px] hover:text-[#B85A1C] transition-colors"
          >
            &larr; {t("back_to_programs")}
          </Link>

          <h1 className="font-serif font-bold text-3xl sm:text-[38px] text-[#1C1C1C] mb-[18px] leading-[1.15]">
            {t("title")}
          </h1>

          <hr className="border-0 border-t border-[#E6E0D3] mb-[26px]" />

          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 items-start mb-[34px]">
            <div>
              <div className="font-sans font-bold text-xs sm:text-[14px] tracking-[0.02em] text-[#B85A1C] uppercase mb-[16px]">
                {t("hero.subtitle")}
              </div>
              <p className="text-[15.5px] leading-[1.7] text-[#55524C] mb-[30px] max-w-[680px]">
                {t("hero.description")}
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
                  {t("hero.bullet1")}
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
                  {t("hero.bullet2")}
                </div>
              </div>
            </div>

            {/* Isolated Client-side Calculator */}
            <DscrCalculator locale={locale} />
          </div>

          <div className="font-sans font-bold text-[13.5px] tracking-[0.03em] text-[#1C1C1C] uppercase mb-[14px]">
            {t("highlights.title")}
          </div>
          <ul className="list-none m-0 p-0 mb-[32px] max-w-[680px]">
            {highlightItems.map((highlight, i) => (
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
              {t("advantages.title")}
            </div>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] mb-[12px]">
              {t("advantages.p1")}
            </p>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] m-0">
              {t("advantages.p2")}
            </p>
          </div>

          <Link
            href={getStartedHref}
            className="flex items-center justify-center gap-[8px] w-full bg-[#D9722C] text-white font-sans font-bold text-[15px] p-[16px] border-0 rounded-[10px] cursor-pointer mb-[10px] no-underline hover:bg-[#B85A1C] transition-colors"
          >
            {t("cta.apply_now")}
          </Link>
          <Link
            href={startHref}
            className="flex items-center justify-center w-full bg-[#F5EFDF] text-[#1C1C1C] font-sans font-bold text-[15px] p-[16px] border border-[#E7DEC7] rounded-[10px] cursor-pointer no-underline hover:bg-[#EFE7D3] transition-colors"
          >
            {t("cta.contact_us")}
          </Link>
        </div>
      </section>
    </main>
  );
}
