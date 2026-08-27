import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Scale,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  DollarSign,
  TrendingUp,
  Calculator,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import BridgeToSaleCalculator from "@/components/site/LoanPrograms/BridgeToSaleLoans/BridgeToSaleCalculator";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function getBridgeToSaleLoansMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "BridgeToSaleLoans.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/bridge-to-sale-loans/"
    : "https://www.myloandesk.com/loan-programs/bridge-to-sale-loans/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/loan-programs/bridge-to-sale-loans/",
        es: "https://www.myloandesk.com/es/loan-programs/bridge-to-sale-loans/",
        "x-default":
          "https://www.myloandesk.com/loan-programs/bridge-to-sale-loans/",
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

export default async function BridgeToSaleLoansView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "BridgeToSaleLoans",
  });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const loanProgramsHref = isEs ? "/es/loan-programs" : "/loan-programs";
  const bridgeToSaleHref = isEs
    ? "/es/loan-programs/bridge-to-sale-loans"
    : "/loan-programs/bridge-to-sale-loans";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/bridge-to-sale-loans/"
    : "https://www.myloandesk.com/loan-programs/bridge-to-sale-loans/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.loan_programs"), url: loanProgramsHref },
    { name: t("breadcrumbs.bridge_to_sale"), url: bridgeToSaleHref },
  ];

  const bridgeToSaleSchema = {
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
        category: "BridgeLoan",
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

  const whoItems = t.raw("who_this_is_for.items") as string[];
  const processSteps = t.raw("how_it_works.steps") as {
    step: string;
    title: string;
    desc: string;
  }[];
  const faqItems = t.raw("faq.items") as { q: string; a: string }[];

  const eligibilityCards = [
    {
      title: t("eligibility.cards.0.title"),
      desc: t("eligibility.cards.0.desc"),
      icon: DollarSign,
    },
    {
      title: t("eligibility.cards.1.title"),
      desc: t("eligibility.cards.1.desc"),
      icon: TrendingUp,
    },
    {
      title: t("eligibility.cards.2.title"),
      desc: t("eligibility.cards.2.desc"),
      icon: ShieldCheck,
    },
    {
      title: t("eligibility.cards.3.title"),
      desc: t("eligibility.cards.3.desc"),
      icon: Clock,
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bridgeToSaleSchema),
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Scale size={14} />
              {t("hero.badge")}
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              {t("hero.title_main")}{" "}
              <span className="block text-[#D4A574] font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-1">
                {t("hero.title_sub")}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/80 leading-relaxed mb-6 max-w-2xl">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={isEs ? "/es/get-started" : "/get-started"}
                className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
              >
                {t("hero.cta_options")}
                <ArrowRight size={18} />
              </Link>
              <a
                href="#calculator"
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Calculator size={18} />
                {t("hero.cta_calc")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO THIS IS FOR --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              {t("who_this_is_for.badge")}
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light leading-tight mb-6",
                fraunces.className,
              )}
            >
              {t("who_this_is_for.heading")}
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              {t("who_this_is_for.description")}
            </p>
            <ul className="space-y-4 text-sm text-ink">
              {whoItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-moss-deep shrink-0 mt-0.5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-3">
              {t("who_this_is_for.side_card.tag")}
            </div>
            <h3
              className={cn(
                "text-xl font-light text-ink mb-3",
                fraunces.className,
              )}
            >
              {t("who_this_is_for.side_card.title")}
            </h3>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              {t("who_this_is_for.side_card.description")}
            </p>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              {t("how_it_works.badge")}
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink",
                fraunces.className,
              )}
            >
              {t("how_it_works.heading")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((item, idx) => (
              <div
                key={idx}
                className="bg-primary-bg border border-line rounded-2xl p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center font-bold text-sm mb-4">
                    0{item.step}
                  </div>
                  <h3 className="font-semibold text-base text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ELIGIBILITY AT A GLANCE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            {t("eligibility.badge")}
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            {t("eligibility.heading")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eligibilityCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-primary-bg border border-line rounded-2xl p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center font-bold text-sm mb-4">
                  <item.icon size={20} />
                </div>
                <h3 className="font-semibold text-base text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-ink-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPARE YOUR OPTIONS MATRIX --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            {t("comparison.badge")}
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            {t("comparison.heading")}
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm">
          <table className="w-full text-left text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">
                  {t("comparison.th_feature")}
                </th>
                <th className="px-6 py-4 font-semibold text-moss-deep">
                  {t("comparison.th_bridge")}
                </th>
                <th className="px-6 py-4 font-semibold">
                  {t("comparison.th_contingent")}
                </th>
                <th className="px-6 py-4 font-semibold">
                  {t("comparison.th_heloc")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 text-xs sm:text-sm">
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.buy_before_sell.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.buy_before_sell.bridge")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.buy_before_sell.contingent")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.buy_before_sell.heloc")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.offer_strength.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.offer_strength.bridge")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.offer_strength.contingent")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.offer_strength.heloc")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.payment_structure.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.payment_structure.bridge")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.payment_structure.contingent")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.payment_structure.heloc")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.best_for.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.best_for.bridge")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.best_for.contingent")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.best_for.heloc")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- BRIDGE CALCULATOR --- */}
      <BridgeToSaleCalculator pagePath={bridgeToSaleHref} locale={locale} />

      {/* --- FREQUENTLY ASKED QUESTIONS --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="text-center mb-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            {t("faq.badge")}
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            {t("faq.heading")}
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, idx) => (
            <div
              key={idx}
              className="bg-primary-bg border border-line rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-semibold text-base text-ink mb-2 flex items-start gap-2">
                <HelpCircle
                  size={18}
                  className="text-brand-orange shrink-0 mt-0.5"
                />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-cream/40 border border-line rounded-[32px] p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink mb-4",
              fraunces.className,
            )}
          >
            {t("bottom_cta.heading")}
          </h2>
          <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6 max-w-xl mx-auto">
            {t("bottom_cta.subheading")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={isEs ? "/es/get-quote" : "/get-quote"}
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              {t("bottom_cta.cta_quote")}
              <ArrowRight size={18} />
            </Link>
            <Link
              href={isEs ? "/es/#start" : "/#start"}
              className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              {t("bottom_cta.cta_contact")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
