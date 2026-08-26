import type { Metadata } from "next";
import { ArrowRight, Users, Share2, Award, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { getTranslations, setRequestLocale } from "next-intl/server";

import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import PartnerFormSection from "@/components/site/Realtors/PartnerForm";
import ReferralFormSection from "@/components/site/Realtors/PreApprovalRefferal";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function getRealtorsMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({ locale, namespace: "Realtors.meta" });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/realtors/"
    : "https://www.myloandesk.com/realtors/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/realtors/",
        es: "https://www.myloandesk.com/es/realtors/",
        "x-default": "https://www.myloandesk.com/realtors/",
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

export default async function RealtorsView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Realtors" });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const realtorsHref = isEs ? "/es/realtors" : "/realtors";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/realtors/"
    : "https://www.myloandesk.com/realtors/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.realtors"), url: realtorsHref },
  ];

  const realtorsPageSchema = {
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
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: t("schema.service_name"),
        description: t("schema.service_description"),
        provider: {
          "@id": "https://www.myloandesk.com/#organization",
        },
        serviceType: t("schema.service_type"),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-primary-bg pt-28 pb-16 lg:pt-36 lg:pb-24 text-ink">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realtorsPageSchema),
        }}
      />
      <Toaster position="bottom-right" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              {t("hero.badge")}
            </div>

            {/* Headline */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl ${fraunces.className} text-ink leading-[1.1] tracking-tight mt-6 mb-6`}
            >
              {t("hero.headline")}
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-ink-2 leading-relaxed mb-10">
              {t("hero.subheadline")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#partner-form"
                className="btn-shine bg-brand-orange text-primary-bg px-7 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors focus-ring"
              >
                {t("hero.partner_button")}
                <ArrowRight size={18} />
              </a>
              <a
                href="#referral-form"
                className="px-6 py-3.5 text-ink font-medium border border-line hover:bg-cream rounded-full transition-colors focus-ring"
              >
                {t("hero.refer_button")}
              </a>
            </div>
          </div>

          {/* Right Column Architectural Container */}
          <div className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-[#E8E4D8] rounded-3xl transform rotate-2 translate-x-3 translate-y-3 -z-10"></div>
            <div className="relative z-10 bg-moss-deep h-[380px] rounded-3xl p-8 flex flex-col justify-end text-primary-bg shadow-sm">
              <span className="text-[10px] uppercase tracking-widest text-[#D4A373] font-semibold mb-2">
                {t("hero.card_badge")}
              </span>
              <p
                className={cn(
                  "text-2xl font-light leading-snug",
                  fraunces.className,
                )}
              >
                {t("hero.card_quote")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 border-t border-line bg-cream/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-5">
              {t("benefits.badge")}
            </div>
            <h2
              className={cn(
                "text-4xl lg:text-5xl xl:text-6xl tracking-tight text-ink font-light",
                fraunces.className,
              )}
            >
              {t("benefits.headline_start")}{" "}
              <em className="not-italic font-serif italic text-moss-deep">
                {t("benefits.headline_italic")}
              </em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <article className="bg-primary-bg border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 flex items-center justify-center mb-5">
                <Users className="text-moss-deep" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-ink">
                {t("benefits.cards.networking.title")}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                {t("benefits.cards.networking.description")}
              </p>
            </article>

            {/* Card 2 */}
            <article className="bg-primary-bg border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5">
                <Share2
                  className="text-brand-orange"
                  size={22}
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-ink">
                {t("benefits.cards.social.title")}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                {t("benefits.cards.social.description")}
              </p>
            </article>

            {/* Card 3 */}
            <article className="bg-primary-bg border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#D4A373]/20 flex items-center justify-center mb-5">
                <Award className="text-[#D4A373]" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-ink">
                {t("benefits.cards.cobranded.title")}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                {t("benefits.cards.cobranded.description")}
              </p>
            </article>

            {/* Card 4 */}
            <article className="bg-primary-bg border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 flex items-center justify-center mb-5">
                <Zap className="text-moss-deep" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-ink">
                {t("benefits.cards.faster.title")}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                {t("benefits.cards.faster.description")}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 border-b border-line bg-primary-bg relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A574] font-semibold mb-6">
            {t("testimonial.badge")}
          </div>
          <blockquote
            className={cn(
              "text-2xl md:text-3xl font-light italic text-ink leading-relaxed",
              fraunces.className,
            )}
          >
            {t("testimonial.quote")}
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-moss-deep text-primary-bg flex items-center justify-center text-xs font-semibold">
              LY
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-ink">
                {t("testimonial.author_name")}
              </p>
              <p className="text-xs text-ink-2">
                {t("testimonial.author_role")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section 1: Work Together */}
      <PartnerFormSection locale={locale} />

      {/* Form Section 2: Quick Pre-Approval Referral */}
      <ReferralFormSection locale={locale} />
    </main>
  );
}
