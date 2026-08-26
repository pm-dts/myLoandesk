import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import GetQuoteForm from "@/components/site/GetQuote/GetQuoteForm";

export async function getQuoteMetadata(locale: "en" | "es"): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({ locale, namespace: "GetQuote.meta" });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/get-quote/"
    : "https://www.myloandesk.com/get-quote/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/get-quote/",
        es: "https://www.myloandesk.com/es/get-quote/",
        "x-default": "https://www.myloandesk.com/get-quote/",
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

export default async function GetQuoteView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "GetQuote" });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const quoteHref = isEs ? "/es/get-quote" : "/get-quote";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/get-quote/"
    : "https://www.myloandesk.com/get-quote/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.get_quote"), url: quoteHref },
  ];

  const getQuoteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t("schema.webpage_name"),
        description: t("schema.webpage_description"),
        isPartOf: {
          "@id": "https://www.myloandesk.com/#website",
        },
        about: {
          "@id": "https://www.myloandesk.com/#organization",
        },
        potentialAction: {
          "@type": "QuoteAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: pageUrl,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: {
            "@type": "FinancialProduct",
            name: t("schema.product_name"),
          },
        },
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
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-cream py-24 px-6 flex items-center justify-center relative">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getQuoteSchema),
        }}
      />
      <GetQuoteForm locale={locale} />
    </main>
  );
}
