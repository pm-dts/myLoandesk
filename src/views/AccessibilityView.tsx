import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import {
  ShieldCheck,
  Mail,
  Phone,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function getAccessibilityMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({ locale, namespace: "Accessibility.meta" });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/accessibility/"
    : "https://www.myloandesk.com/accessibility/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/accessibility/",
        es: "https://www.myloandesk.com/es/accessibility/",
        "x-default": "https://www.myloandesk.com/accessibility/",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: canonicalUrl,
      siteName: "MyLoanDesk",
      locale: isEs ? "es_US" : "en_US",
      images: [
        {
          url: "/og-image.jpeg",
          width: 1200,
          height: 630,
          alt: "MyLoanDesk - Accessibility Statement",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.jpeg"],
    },
  };
}

export default async function AccessibilityView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Accessibility" });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/accessibility/"
    : "https://www.myloandesk.com/accessibility/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    {
      name: t("breadcrumbs.accessibility"),
      url: isEs ? "/es/accessibility" : "/accessibility",
    },
  ];

  const accessibilityPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t("meta.title"),
        description: t("meta.description"),
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
            name: t("faq_schema.q1.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq_schema.q1.answer"),
            },
          },
          {
            "@type": "Question",
            name: t("faq_schema.q2.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq_schema.q2.answer"),
            },
          },
          {
            "@type": "Question",
            name: t("faq_schema.q3.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq_schema.q3.answer"),
            },
          },
        ],
      },
    ],
  };

  const effortItems = t.raw("efforts.list") as string[];

  return (
    <main className="min-h-screen bg-primary-bg py-12 sm:py-20 text-ink">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(accessibilityPageSchema),
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          href={homeHref}
          className="inline-flex items-center gap-2 text-xs font-semibold text-ink-2 hover:text-brand-orange mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> {t("back_to_home")}
        </Link>

        <div className="bg-cream/30 border border-line rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6">
            <ShieldCheck size={24} />
          </div>

          <h1
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-light text-ink mb-3",
              fraunces.className,
            )}
          >
            {t("title")}
          </h1>

          <p className="text-xs uppercase tracking-wider text-ink-2 font-semibold mb-8 pb-6 border-b border-line">
            {t("last_updated")}
          </p>

          <div className="space-y-8 text-sm sm:text-base text-ink-2 leading-relaxed">
            <p className="text-base sm:text-lg text-ink font-medium leading-relaxed">
              {t("lead")}
            </p>

            {/* Our Commitment to Accessibility */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-ink">
                {t("commitment.title")}
              </h2>
              <p>{t("commitment.p1")}</p>
              <p>{t("commitment.p2")}</p>
            </section>

            {/* Our Accessibility Efforts */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">
                {t("efforts.title")}
              </h2>
              <p>{t("efforts.intro")}</p>
              <ul className="space-y-2.5">
                {effortItems.map((effort, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-moss-deep shrink-0 mt-0.5"
                    />
                    <span>{effort}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Ongoing Improvements */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-ink">
                {t("improvements.title")}
              </h2>
              <p>{t("improvements.p1")}</p>
              <p>{t("improvements.p2")}</p>
              <p>{t("improvements.p3")}</p>
            </section>

            {/* Third-Party Content and Services */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-ink">
                {t("third_party.title")}
              </h2>
              <p>{t("third_party.p1")}</p>
              <p>{t("third_party.p2")}</p>
            </section>

            {/* Need Assistance? */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">
                {t("assistance.title")}
              </h2>
              <p>{t("assistance.p1")}</p>

              <div className="bg-primary-bg border border-line rounded-2xl p-6 space-y-4 my-4">
                <div className="text-ink font-semibold text-base mb-2">
                  MyLoanDesk
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-brand-orange shrink-0" size={20} />
                  <div>
                    <span className="text-xs uppercase font-semibold text-ink-2 block">
                      {t("assistance.email_label")}
                    </span>
                    <a
                      href="mailto:info@myloandesk.com"
                      className="font-medium text-ink hover:text-brand-orange underline transition-colors"
                    >
                      info@myloandesk.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-brand-orange shrink-0" size={20} />
                  <div>
                    <span className="text-xs uppercase font-semibold text-ink-2 block">
                      {t("assistance.phone_label")}
                    </span>
                    <a
                      href="tel:3058916500"
                      className="font-medium text-ink hover:text-brand-orange transition-colors"
                    >
                      (305) 891-6500
                    </a>
                  </div>
                </div>
              </div>

              <p>{t("assistance.p2")}</p>
              <p>{t("assistance.p3")}</p>
            </section>

            {/* Accessibility Standards */}
            <section className="space-y-3 pt-4 border-t border-line">
              <h2 className="text-xl font-semibold text-ink">
                {t("standards.title")}
              </h2>
              <p>{t("standards.p1")}</p>
              <p>{t("standards.p2")}</p>
              <p className="text-xs text-ink-2 pt-2">{t("standards.note")}</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
