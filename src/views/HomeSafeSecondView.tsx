import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Home,
  DollarSign,
  Lock,
  CalendarOff,
  Percent,
  Layers,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import OpenChatReusableBtn from "@/components/site/LoanPrograms/ReverseMortgage/OpenChatReusableBtn";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function getHomeSafeSecondMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "HomeSafeSecond.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/homesafe-second/"
    : "https://www.myloandesk.com/loan-programs/homesafe-second/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/loan-programs/homesafe-second/",
        es: "https://www.myloandesk.com/es/loan-programs/homesafe-second/",
        "x-default":
          "https://www.myloandesk.com/loan-programs/homesafe-second/",
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

export default async function HomeSafeSecondView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "HomeSafeSecond",
  });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const loanProgramsHref = isEs ? "/es/loan-programs" : "/loan-programs";
  const homeSafeSecondHref = isEs
    ? "/es/loan-programs/homesafe-second"
    : "/loan-programs/homesafe-second";
  const reverseMortgageHref = isEs
    ? "/es/reverse-mortgage"
    : "/reverse-mortgage";
  const helocHref = isEs
    ? "/es/loan-programs/heloc-loans"
    : "/loan-programs/heloc-loans";
  const calendarHref = isEs ? "/es/calendar" : "/calendar";
  const startHref = isEs ? "/es/#start" : "/#start";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/homesafe-second/"
    : "https://www.myloandesk.com/loan-programs/homesafe-second/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.loan_programs"), url: loanProgramsHref },
    { name: t("breadcrumbs.homesafe_second"), url: homeSafeSecondHref },
  ];

  const homeSafeSecondSchema = {
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
          {
            "@type": "Question",
            name: t("schema.faq_q5_question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("schema.faq_q5_answer"),
            },
          },
          {
            "@type": "Question",
            name: t("schema.faq_q6_question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("schema.faq_q6_answer"),
            },
          },
          {
            "@type": "Question",
            name: t("schema.faq_q7_question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("schema.faq_q7_answer"),
            },
          },
          {
            "@type": "Question",
            name: t("schema.faq_q8_question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("schema.faq_q8_answer"),
            },
          },
          {
            "@type": "Question",
            name: t("schema.faq_q9_question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("schema.faq_q9_answer"),
            },
          },
          {
            "@type": "Question",
            name: t("schema.faq_q10_question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("schema.faq_q10_answer"),
            },
          },
          {
            "@type": "Question",
            name: t("schema.faq_q11_question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("schema.faq_q11_answer"),
            },
          },
        ],
      },
    ],
  };

  const equityFactors = t.raw(
    "advantages.cards.access_equity.factors",
  ) as string[];
  const eligibilityItems = t.raw("eligibility.items") as string[];
  const useCaseItems = t.raw("use_of_proceeds.items") as string[];
  const faqItems = t.raw("faq.items") as { q: string; a: string }[];
  const lowRateBenefits = t.raw("low_rate_cta.benefits") as string[];

  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSafeSecondSchema),
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Layers size={14} />
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

            <p className="text-base sm:text-lg text-primary-bg/90 font-medium leading-relaxed mb-4 max-w-2xl">
              {t("hero.lead")}
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-4 max-w-2xl">
              {t("hero.p1")}
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-4 max-w-2xl">
              {t("hero.p2_part1")}
              <Link
                href={reverseMortgageHref}
                className="text-[#D4A574] underline hover:text-cream transition-colors"
              >
                {t("hero.p2_link")}
              </Link>
              {t("hero.p2_part2")}
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-4 max-w-2xl">
              {t("hero.p3")}
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-8 max-w-2xl">
              {t("hero.p4")}
            </p>

            {/* Primary CTA 1 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <OpenChatReusableBtn
                loanProgram="HomeSafe Second"
                text={t("hero.cta_check")}
              />

              <Link
                href={calendarHref}
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                {t("hero.cta_specialist")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CONSIDER HOMESAFE SECOND --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-10">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            {t("advantages.badge")}
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light",
              fraunces.className,
            )}
          >
            {t("advantages.heading")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Benefit 1 */}
          <div className="bg-primary-bg border border-line rounded-2xl p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center mb-5">
                <CalendarOff size={22} />
              </div>
              <h3 className="font-semibold text-lg text-ink mb-3">
                {t("advantages.cards.no_monthly_payment.title")}
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                {t("advantages.cards.no_monthly_payment.p1_part1")}
                <Link
                  href={helocHref}
                  className="text-brand-orange underline hover:no-underline"
                >
                  {t("advantages.cards.no_monthly_payment.p1_link")}
                </Link>
                {t("advantages.cards.no_monthly_payment.p1_part2")}
              </p>
              <p className="text-xs text-ink-2/80 leading-relaxed mb-3">
                {t("advantages.cards.no_monthly_payment.p2")}
              </p>
              <p className="text-xs text-ink-2/80 leading-relaxed">
                {t("advantages.cards.no_monthly_payment.p3")}
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-primary-bg border border-line rounded-2xl p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center mb-5">
                <Home size={22} />
              </div>
              <h3 className="font-semibold text-lg text-ink mb-3">
                {t("advantages.cards.keep_first_mortgage.title")}
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                {t("advantages.cards.keep_first_mortgage.p1")}
              </p>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                {t("advantages.cards.keep_first_mortgage.p2")}
              </p>
              <p className="text-xs text-ink-2/80 leading-relaxed">
                {t("advantages.cards.keep_first_mortgage.p3")}
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-primary-bg border border-line rounded-2xl p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center mb-5">
                <DollarSign size={22} />
              </div>
              <h3 className="font-semibold text-lg text-ink mb-3">
                {t("advantages.cards.access_equity.title")}
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                {t("advantages.cards.access_equity.p1")}
              </p>
              <p className="text-xs text-ink-2 font-medium mb-2">
                {t("advantages.cards.access_equity.factors_intro")}
              </p>
              <ul className="space-y-1.5 text-xs text-ink-2/80">
                {equityFactors.map((factor, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-primary-bg border border-line rounded-2xl p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center mb-5">
                <Percent size={22} />
              </div>
              <h3 className="font-semibold text-lg text-ink mb-3">
                {t("advantages.cards.fixed_rate.title")}
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                {t("advantages.cards.fixed_rate.p1")}
              </p>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                {t("advantages.cards.fixed_rate.p2")}
              </p>
              <p className="text-xs text-ink-2/80 leading-relaxed">
                {t("advantages.cards.fixed_rate.p3")}
              </p>
            </div>
          </div>

          {/* Benefit 5 */}
          <div className="bg-primary-bg border border-line rounded-2xl p-7 flex flex-col justify-between shadow-sm md:col-span-2 lg:col-span-2">
            <div>
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center mb-5">
                <Lock size={22} />
              </div>
              <h3 className="font-semibold text-lg text-ink mb-3">
                {t("advantages.cards.non_recourse.title")}
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                {t("advantages.cards.non_recourse.p1")}
              </p>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                {t("advantages.cards.non_recourse.p2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO IS HOMESAFE SECOND DESIGNED FOR --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
                {t("eligibility.badge")}
              </div>
              <h2
                className={cn(
                  "text-3xl sm:text-4xl lg:text-5xl font-light text-ink mb-6",
                  fraunces.className,
                )}
              >
                {t("eligibility.heading")}
              </h2>
              <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
                {t("eligibility.intro")}
              </p>
              <ul className="space-y-3.5">
                {eligibilityItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-ink"
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

            <div className="lg:col-span-5 bg-primary-bg border border-line p-6 sm:p-8 rounded-3xl shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-orange mb-3">
                {t("eligibility.side_card.tag")}
              </div>
              <h3
                className={cn(
                  "text-2xl font-light text-ink mb-4",
                  fraunces.className,
                )}
              >
                {t("eligibility.side_card.title")}
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
                {t("eligibility.side_card.intro")}
              </p>
              <div className="space-y-3 mb-6">
                <div className="p-3.5 bg-cream/40 rounded-xl border border-line/60 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-ink">
                    {t("eligibility.side_card.state_most")}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-moss-deep">
                    {t("eligibility.side_card.state_most_age")}
                  </span>
                </div>
                <div className="p-3.5 bg-cream/40 rounded-xl border border-line/60 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-ink">
                    {t("eligibility.side_card.state_texas")}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-moss-deep">
                    {t("eligibility.side_card.state_texas_age")}
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-ink-2/70 italic leading-normal">
                {t("eligibility.side_card.footnote")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOMESAFE SECOND VS TRADITIONAL HELOC --- */}
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

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm mb-6">
          <table className="w-full text-left text-xs sm:text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">
                  {t("comparison.th_feature")}
                </th>
                <th className="px-6 py-4 font-semibold text-moss-deep">
                  {t("comparison.th_homesafe")}
                </th>
                <th className="px-6 py-4 font-semibold">
                  {t("comparison.th_heloc")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.monthly_payment.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.monthly_payment.homesafe")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.monthly_payment.heloc")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.first_mortgage.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.first_mortgage.homesafe")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.first_mortgage.heloc")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.interest_rate.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.interest_rate.homesafe")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.interest_rate.heloc")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.loan_type.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.loan_type.homesafe")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.loan_type.heloc")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.access_funds.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.access_funds.homesafe")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.access_funds.heloc")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.interest_accrual.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.interest_accrual.homesafe")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.interest_accrual.heloc")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.age_req.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.age_req.homesafe")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.age_req.heloc")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.non_recourse.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.non_recourse.homesafe")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.non_recourse.heloc")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.best_suited.feature")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.best_suited.homesafe")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.best_suited.heloc")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
          {t("comparison.footer")}
        </p>

        {/* Primary CTA 2 */}
        <div className="flex flex-col sm:flex-row gap-4">
          <OpenChatReusableBtn
            loanProgram="HomeSafe Second"
            text={t("hero.cta_check")}
          />
          <Link
            href={calendarHref}
            className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 text-center"
          >
            {t("hero.cta_specialist")}
          </Link>
        </div>
      </section>

      {/* --- HOMESAFE SECOND VS CASH-OUT REFINANCE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/30 border border-line rounded-[32px] p-6 sm:p-10 lg:p-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
            {t("refinance_comparison.badge")}
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink mb-6",
              fraunces.className,
            )}
          >
            {t("refinance_comparison.heading")}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-ink-2 leading-relaxed max-w-4xl">
            <p>{t("refinance_comparison.p1")}</p>
            <p>{t("refinance_comparison.p2")}</p>
            <p>{t("refinance_comparison.p3")}</p>
            <p>{t("refinance_comparison.p4")}</p>
            <p className="font-medium text-ink">
              {t("refinance_comparison.p5")}
            </p>
          </div>
        </div>
      </section>

      {/* --- WHAT CAN YOU USE THE MONEY FOR --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            {t("use_of_proceeds.badge")}
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            {t("use_of_proceeds.heading")}
          </h2>
          <p className="text-xs sm:text-sm text-ink-2 mt-2">
            {t("use_of_proceeds.subheading")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {useCaseItems.map((useCase, idx) => (
            <div
              key={idx}
              className="bg-primary-bg border border-line rounded-2xl p-5 flex items-center gap-3 shadow-sm"
            >
              <CheckCircle2 size={18} className="text-moss-deep shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-ink">
                {useCase}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
          {t("use_of_proceeds.closing_part1")}
          <Link
            href={startHref}
            className="text-brand-orange underline hover:no-underline"
          >
            {t("use_of_proceeds.closing_link")}
          </Link>
          {t("use_of_proceeds.closing_part2")}
        </p>
      </section>

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

        {/* Primary CTA 3 */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <OpenChatReusableBtn
            loanProgram="HomeSafe Second"
            text={t("hero.cta_check")}
          />
          <Link
            href={calendarHref}
            className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 text-center w-full sm:w-auto"
          >
            {t("hero.cta_specialist")}
          </Link>
        </div>
      </section>

      {/* --- ALREADY HAVE A LOW MORTGAGE RATE & FINAL CTA --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/40 border border-line rounded-[32px] p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("low_rate_cta.heading")}
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed max-w-2xl mx-auto">
              {t("low_rate_cta.p1")}
            </p>
          </div>

          <div className="bg-primary-bg border border-line rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink mb-4">
              {t("low_rate_cta.benefits_box_title")}
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-ink-2">
              {lowRateBenefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-moss-deep shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs sm:text-sm text-ink-2 mt-6 leading-relaxed">
              {t("low_rate_cta.compare_note_part1")}
              <Link
                href={helocHref}
                className="text-brand-orange underline hover:no-underline"
              >
                {t("low_rate_cta.compare_link")}
              </Link>
              {t("low_rate_cta.compare_note_part2")}
            </p>
          </div>

          <div className="text-center mb-8">
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("low_rate_cta.fit_heading")}
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed max-w-2xl mx-auto mb-4">
              {t("low_rate_cta.fit_p1")}
            </p>
            <blockquote className="text-base sm:text-lg font-serif italic text-moss-deep max-w-xl mx-auto mb-4">
              {t("low_rate_cta.quote")}
            </blockquote>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed max-w-2xl mx-auto">
              {t("low_rate_cta.fit_p2")}
            </p>
          </div>

          {/* Primary CTA 4 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <OpenChatReusableBtn
              loanProgram="HomeSafe Second"
              text={t("hero.cta_check")}
            />
            <Link
              href={calendarHref}
              className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              {t("hero.cta_specialist")}
            </Link>
          </div>
          <p className="text-center text-[12px] text-ink-2/80">
            {t("low_rate_cta.footnote")}
          </p>
        </div>
      </section>

      {/* --- IMPORTANT DISCLOSURES --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="border-t border-line pt-8 text-sm text-ink-2/70 space-y-3 leading-relaxed">
          <p className="font-semibold text-ink-2">{t("disclosures.title")}</p>
          <p>{t("disclosures.p1")}</p>
          <p>{t("disclosures.p2")}</p>
          <p>{t("disclosures.p3")}</p>
          <p>{t("disclosures.p4")}</p>
          <p>{t("disclosures.p5")}</p>
        </div>
      </section>
    </main>
  );
}
