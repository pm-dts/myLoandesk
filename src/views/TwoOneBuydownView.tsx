import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  TrendingDown,
  CheckCircle2,
  Calculator,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Building,
  UserCheck,
  ShieldCheck,
  PlayCircle,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import BuydownCalculator from "@/components/site/LoanPrograms/2-1-BuydownLoans/2-1-BuydownCalculator";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const VIDEO_URL =
  "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Lower+Your+Mortgage+Payment+During+Your+First+Two+Years+of+Homeownership_1080p_caption.mp4";

export async function getTwoOneBuydownMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "TwoOneBuydown.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/2-1-buydown-loans/"
    : "https://www.myloandesk.com/loan-programs/2-1-buydown-loans/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/loan-programs/2-1-buydown-loans/",
        es: "https://www.myloandesk.com/es/loan-programs/2-1-buydown-loans/",
        "x-default":
          "https://www.myloandesk.com/loan-programs/2-1-buydown-loans/",
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

export default async function TwoOneBuydownView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "TwoOneBuydown" });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const loanProgramsHref = isEs ? "/es/loan-programs" : "/loan-programs";
  const buydownHref = isEs
    ? "/es/loan-programs/2-1-buydown-loans"
    : "/loan-programs/2-1-buydown-loans";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/2-1-buydown-loans/"
    : "https://www.myloandesk.com/loan-programs/2-1-buydown-loans/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.loan_programs"), url: loanProgramsHref },
    { name: t("breadcrumbs.buydown"), url: buydownHref },
  ];

  const buydownPageSchema = {
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

  const suitabilityItems = t.raw(
    "suitability_advantages.suitability.items",
  ) as string[];
  const advantageItems = t.raw(
    "suitability_advantages.advantages.items",
  ) as string[];
  const faqItems = t.raw("faq.items") as { q: string; a: string }[];

  const fundingCards = [
    {
      source: t("funding_options.cards.seller.source"),
      desc: t("funding_options.cards.seller.desc"),
      icon: Building,
    },
    {
      source: t("funding_options.cards.builder.source"),
      desc: t("funding_options.cards.builder.desc"),
      icon: Sparkles,
    },
    {
      source: t("funding_options.cards.lender.source"),
      desc: t("funding_options.cards.lender.desc"),
      icon: ShieldCheck,
    },
    {
      source: t("funding_options.cards.buyer.source"),
      desc: t("funding_options.cards.buyer.desc"),
      icon: UserCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buydownPageSchema),
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <TrendingDown size={14} />
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

            <p className="text-base sm:text-lg text-primary-bg/80 leading-relaxed mb-8 max-w-2xl">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={isEs ? "/es/get-quote" : "/get-quote"}
                className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
              >
                {t("hero.cta_quote")}
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

      {/* --- WHAT IS A 2/1 BUYDOWN? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              {t("overview.badge")}
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light leading-tight mb-6",
                fraunces.className,
              )}
            >
              {t("overview.heading")}
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              {t("overview.p1")}
            </p>

            <ul className="space-y-3 text-sm text-ink mb-6">
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-moss-deep mt-2 shrink-0" />
                <span>
                  <strong>{t("overview.points.year1_label")}</strong>{" "}
                  {t("overview.points.year1_text")}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-moss-deep mt-2 shrink-0" />
                <span>
                  <strong>{t("overview.points.year2_label")}</strong>{" "}
                  {t("overview.points.year2_text")}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                <span>
                  <strong>{t("overview.points.year3_label")}</strong>{" "}
                  {t("overview.points.year3_text")}
                </span>
              </li>
            </ul>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              {t("overview.p2")}
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
              {t("overview.example_card.title")}
            </div>
            <p className="text-xs text-ink-2 mb-4">
              {t("overview.example_card.subtitle")}
            </p>

            <div className="overflow-hidden border border-line rounded-xl bg-primary-bg mb-4">
              <table className="w-full text-left text-xs">
                <thead className="bg-cream/50 border-b border-line text-ink-2">
                  <tr>
                    <th className="p-2.5 font-semibold">
                      {t("overview.example_card.th_year")}
                    </th>
                    <th className="p-2.5 font-semibold">
                      {t("overview.example_card.th_rate")}
                    </th>
                    <th className="p-2.5 font-semibold">
                      {t("overview.example_card.th_payment")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60 text-ink">
                  <tr>
                    <td className="p-2.5 font-semibold">
                      {t("overview.example_card.row1_year")}
                    </td>
                    <td className="p-2.5 text-moss-deep font-medium">
                      {t("overview.example_card.row1_rate")}
                    </td>
                    <td className="p-2.5 font-medium">
                      {t("overview.example_card.row1_payment")}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold">
                      {t("overview.example_card.row2_year")}
                    </td>
                    <td className="p-2.5 text-moss-deep font-medium">
                      {t("overview.example_card.row2_rate")}
                    </td>
                    <td className="p-2.5 font-medium">
                      {t("overview.example_card.row2_payment")}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold">
                      {t("overview.example_card.row3_year")}
                    </td>
                    <td className="p-2.5 text-ink-2">
                      {t("overview.example_card.row3_rate")}
                    </td>
                    <td className="p-2.5 font-medium">
                      {t("overview.example_card.row3_payment")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-ink-2/70 italic leading-normal">
              {t("overview.example_card.footnote")}
            </p>
          </div>
        </div>
      </section>

      {/* --- VIDEO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/30 border border-line rounded-[32px] p-6 sm:p-10 lg:p-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange uppercase tracking-wider mb-2">
              <PlayCircle size={16} /> {t("video_section.badge")}
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-3",
                fraunces.className,
              )}
            >
              {t("video_section.heading")}
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed">
              {t("video_section.subheading")}
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-[#E8E4D8] rounded-[24px] sm:rounded-[32px] transform -rotate-1 -translate-x-1.5 translate-y-1.5 sm:-translate-x-2 sm:translate-y-2 -z-10" />
            <div className="relative z-10 bg-black rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-line aspect-video">
              <video
                src={VIDEO_URL}
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUITABILITY & ADVANTAGES --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Who It's For */}
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
                {t("suitability_advantages.suitability.badge")}
              </div>
              <h3
                className={cn(
                  "text-2xl sm:text-3xl font-light text-ink mb-6",
                  fraunces.className,
                )}
              >
                {t("suitability_advantages.suitability.heading")}
              </h3>
              <ul className="space-y-4">
                {suitabilityItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-ink-2"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-moss-deep shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
                {t("suitability_advantages.advantages.badge")}
              </div>
              <h3
                className={cn(
                  "text-2xl sm:text-3xl font-light text-ink mb-6",
                  fraunces.className,
                )}
              >
                {t("suitability_advantages.advantages.heading")}
              </h3>
              <ul className="space-y-4">
                {advantageItems.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-ink-2"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-brand-orange shrink-0 mt-0.5"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- FUNDING OPTIONS --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            {t("funding_options.badge")}
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            {t("funding_options.heading")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fundingCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-primary-bg border border-line rounded-2xl p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center font-bold text-sm mb-4">
                  <item.icon size={20} />
                </div>
                <h3 className="font-semibold text-base text-ink mb-2">
                  {item.source}
                </h3>
                <p className="text-xs text-ink-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPARISON TABLE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            {t("comparison_table.badge")}
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            {t("comparison_table.heading")}
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm">
          <table className="w-full text-left text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">
                  {t("comparison_table.th_feature")}
                </th>
                <th className="px-6 py-4 font-semibold text-moss-deep">
                  {t("comparison_table.th_buydown")}
                </th>
                <th className="px-6 py-4 font-semibold">
                  {t("comparison_table.th_points")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison_table.rows.duration.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison_table.rows.duration.buydown")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison_table.rows.duration.points")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison_table.rows.reduction.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison_table.rows.reduction.buydown")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison_table.rows.reduction.points")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison_table.rows.best_for.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison_table.rows.best_for.buydown")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison_table.rows.best_for.points")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison_table.rows.cost.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison_table.rows.cost.buydown")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison_table.rows.cost.points")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- REQUIREMENTS TABLE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            {t("requirements_table.badge")}
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            {t("requirements_table.heading")}
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm">
          <table className="w-full text-left text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">
                  {t("requirements_table.th_factor")}
                </th>
                <th className="px-6 py-4 font-semibold">
                  {t("requirements_table.th_range")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("requirements_table.rows.types.factor")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("requirements_table.rows.types.range")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("requirements_table.rows.occupancy.factor")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("requirements_table.rows.occupancy.range")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("requirements_table.rows.qualification.factor")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("requirements_table.rows.qualification.range")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("requirements_table.rows.source.factor")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("requirements_table.rows.source.range")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-ink-2/70 mt-3 italic">
          {t("requirements_table.footnote")}
        </p>
      </section>

      {/* --- BUYDOWN CALCULATOR --- */}
      <BuydownCalculator pagePath={buydownHref} />

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
          <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-8 max-w-xl mx-auto">
            {t("bottom_cta.subheading")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={isEs ? "/es/calendar" : "/calendar"}
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              {t("bottom_cta.cta_advisor")}
              <ArrowRight size={18} />
            </Link>
            <a
              href="#calculator"
              className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              {t("bottom_cta.cta_calc")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
