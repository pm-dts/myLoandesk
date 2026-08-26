import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function getEmailCommunicationMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "EmailCommunication.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/email-communication/"
    : "https://www.myloandesk.com/email-communication/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/email-communication/",
        es: "https://www.myloandesk.com/es/email-communication/",
        "x-default": "https://www.myloandesk.com/email-communication/",
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

export default async function EmailCommunicationView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "EmailCommunication",
  });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const emailPolicyHref = isEs
    ? "/es/email-communication"
    : "/email-communication";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/email-communication/"
    : "https://www.myloandesk.com/email-communication/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    {
      name: t("breadcrumbs.email_policy"),
      url: emailPolicyHref,
    },
  ];

  const emailPolicySchema = {
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

  const s1List = t.raw("sections.s1.list") as string[];
  const s2List = t.raw("sections.s2.list") as string[];
  const s3List = t.raw("sections.s3.list") as string[];
  const s4List = t.raw("sections.s4.list") as string[];
  const s5List = t.raw("sections.s5.list") as string[];
  const s6List = t.raw("sections.s6.list") as string[];
  const s7List = t.raw("sections.s7.list") as string[];

  return (
    <main className="min-h-screen bg-cream py-24 px-6">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(emailPolicySchema),
        }}
      />

      <div className="max-w-4xl mx-auto bg-primary-bg rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-line">
        <h1
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-ink tracking-tight mb-8 pb-8 border-b border-line",
            fraunces.className,
          )}
        >
          {t("heading")}
        </h1>

        <div className="text-sm md:text-base text-ink-2 space-y-8 leading-relaxed">
          <div className="space-y-4">
            <p>{t("intro_p1")}</p>
            <p>{t("intro_p2")}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              {t("sections.s1.title")}
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              {s1List.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              {t("sections.s2.title")}
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              {s2List.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              {t("sections.s3.title")}
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              {s3List.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              {t("sections.s4.title")}
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              {s4List.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              {t("sections.s5.title")}
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              {s5List.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              {t("sections.s6.title")}
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              {s6List.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              {t("sections.s7.title")}
            </h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              {s7List.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink mb-4">
              {t("sections.s8.title")}
            </h2>
            <div className="space-y-4">
              <p>
                <span className="font-bold text-ink">
                  {t("sections.s8.governing_law_label")}
                </span>{" "}
                {t("sections.s8.governing_law_text")}
              </p>
              <p>
                <span className="font-bold text-ink">
                  {t("sections.s8.equal_housing_label")}
                </span>{" "}
                {t("sections.s8.equal_housing_text")}
              </p>
              <p>
                <span className="font-bold text-ink">
                  {t("sections.s8.reservation_label")}
                </span>{" "}
                {t("sections.s8.reservation_text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
