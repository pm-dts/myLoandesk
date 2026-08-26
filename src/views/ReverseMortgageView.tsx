import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Home,
  CalendarOff,
  Coins,
  ShieldCheck,
  Lock,
  HeartPulse,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import ReverseMortgageForm from "@/components/site/ReverseMortgage/InquiryForm";
import ReverseMortgageSection from "@/components/site/LoanPrograms/ReverseMortgageSection";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function getReverseMortgageMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "ReverseMortgage.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/reverse-mortgage/"
    : "https://www.myloandesk.com/reverse-mortgage/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/reverse-mortgage/",
        es: "https://www.myloandesk.com/es/reverse-mortgage/",
        "x-default": "https://www.myloandesk.com/reverse-mortgage/",
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

export default async function ReverseMortgageView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "ReverseMortgage" });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const reverseHref = isEs ? "/es/reverse-mortgage" : "/reverse-mortgage";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/reverse-mortgage/"
    : "https://www.myloandesk.com/reverse-mortgage/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.reverse_mortgage"), url: reverseHref },
  ];

  const reverseMortgageSchema = {
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
        "@type": "FinancialProduct",
        "@id": `${pageUrl}#product`,
        name: t("schema.product_name"),
        description: t("schema.product_description"),
        provider: {
          "@id": "https://www.myloandesk.com/#organization",
        },
        category: "ReverseMortgage",
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
        ],
      },
    ],
  };

  const benefits = [
    {
      title: t("benefits_section.items.no_monthly.title"),
      description: t("benefits_section.items.no_monthly.description"),
      icon: <CalendarOff size={24} strokeWidth={1.5} />,
    },
    {
      title: t("benefits_section.items.retain_ownership.title"),
      description: t("benefits_section.items.retain_ownership.description"),
      icon: <Home size={24} strokeWidth={1.5} />,
    },
    {
      title: t("benefits_section.items.flexible_access.title"),
      description: t("benefits_section.items.flexible_access.description"),
      icon: <Coins size={24} strokeWidth={1.5} />,
    },
    {
      title: t("benefits_section.items.eliminate_mortgage.title"),
      description: t("benefits_section.items.eliminate_mortgage.description"),
      icon: <Landmark size={24} strokeWidth={1.5} />,
    },
    {
      title: t("benefits_section.items.fha_insured.title"),
      description: t("benefits_section.items.fha_insured.description"),
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    },
    {
      title: t("benefits_section.items.non_recourse.title"),
      description: t("benefits_section.items.non_recourse.description"),
      icon: <Lock size={24} strokeWidth={1.5} />,
    },
    {
      title: t("benefits_section.items.lifestyle.title"),
      description: t("benefits_section.items.lifestyle.description"),
      icon: <HeartPulse size={24} strokeWidth={1.5} />,
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-20 pb-16 lg:pt-32 lg:pb-24 text-ink">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reverseMortgageSchema),
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20 lg:mb-32 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
          {t("hero.badge")}
        </div>

        <h1
          className={cn(
            "text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight text-ink max-w-4xl mb-6",
            fraunces.className,
          )}
        >
          {t("hero.headline")}
        </h1>

        <p className="text-lg md:text-xl text-ink-2 leading-relaxed max-w-3xl">
          {t("hero.subheadline")}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="#reverse-mortgage-inquiry"
            className="btn-shine bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-sm focus-ring"
          >
            {t("hero.cta_button")}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* --- BENEFITS GRID SECTION --- */}
      <section className="bg-cream/30 border-y border-line py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl text-ink font-light tracking-tight",
                fraunces.className,
              )}
            >
              {t("benefits_section.heading")}
            </h2>
            <p className="text-ink-2 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              {t("benefits_section.subheading")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-primary-bg border border-line p-8 rounded-2xl hover:border-brand-orange/50 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-ink mb-3 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}

            <div className="bg-moss-deep text-white border border-moss-deep p-8 rounded-2xl shadow-md flex flex-col justify-center items-start">
              <h3 className="text-xl font-bold mb-3 leading-snug">
                {t("benefits_section.cta_card.title")}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                {t("benefits_section.cta_card.description")}
              </p>
              <Link
                href="#reverse-mortgage-inquiry"
                className="text-brand-orange font-bold text-sm flex items-center gap-2 hover:text-white transition-colors"
              >
                {t("benefits_section.cta_card.button")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- REVERSE MORTGAGE PROGRAMS SECTION --- */}
      <ReverseMortgageSection locale={locale} />

      {/* --- INQUIRY FORM SECTION --- */}
      <section id="reverse-mortgage-inquiry">
        <ReverseMortgageForm locale={locale} />
      </section>
    </main>
  );
}
