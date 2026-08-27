import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Landmark,
  Coins,
  FileCheck,
  Percent,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import OpenChatReusableBtn from "@/components/site/LoanPrograms/ReverseMortgage/OpenChatReusableBtn";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function getReverseMortgageRefinanceMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "ReverseMortgageRefinance.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/reverse-mortgage-refinance/"
    : "https://www.myloandesk.com/loan-programs/reverse-mortgage-refinance/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/loan-programs/reverse-mortgage-refinance/",
        es: "https://www.myloandesk.com/es/loan-programs/reverse-mortgage-refinance/",
        "x-default":
          "https://www.myloandesk.com/loan-programs/reverse-mortgage-refinance/",
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

export default async function ReverseMortgageRefinanceView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "ReverseMortgageRefinance",
  });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const loanProgramsHref = isEs ? "/es/loan-programs" : "/loan-programs";
  const reverseRefinanceHref = isEs
    ? "/es/loan-programs/reverse-mortgage-refinance"
    : "/loan-programs/reverse-mortgage-refinance";
  const homeSafeSecondHref = isEs
    ? "/es/loan-programs/homesafe-second"
    : "/loan-programs/homesafe-second";
  const calendarHref = isEs ? "/es/calendar" : "/calendar";
  const startHref = isEs ? "/es/#start" : "/#start";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/reverse-mortgage-refinance/"
    : "https://www.myloandesk.com/loan-programs/reverse-mortgage-refinance/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.loan_programs"), url: loanProgramsHref },
    { name: t("breadcrumbs.reverse_refinance"), url: reverseRefinanceHref },
  ];

  const reverseRefinanceSchema = {
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
        ],
      },
    ],
  };

  const overviewItems = t.raw("overview.side_card.items") as string[];
  const useCaseReasons = t.raw("use_cases.reasons") as string[];
  const proceedsFactors = t.raw(
    "proceeds_and_programs.proceeds.factors",
  ) as string[];
  const qualifyRequirements = t.raw(
    "qualifications_and_costs.qualify.requirements",
  ) as string[];
  const costItems = t.raw("qualifications_and_costs.costs.items") as string[];
  const faqItems = t.raw("faq.items") as { q: string; a: string }[];
  const shouldRefinanceQuestions = t.raw(
    "should_you_refinance.questions",
  ) as string[];
  const mossBoxItems = t.raw("should_you_refinance.moss_box.items") as string[];

  const distributionCards = [
    {
      title: t("distribution.cards.0.title"),
      desc: t("distribution.cards.0.desc"),
      icon: Coins,
    },
    {
      title: t("distribution.cards.1.title"),
      desc: t("distribution.cards.1.desc"),
      icon: FileCheck,
    },
    {
      title: t("distribution.cards.2.title"),
      desc: t("distribution.cards.2.desc"),
      icon: Percent,
    },
    {
      title: t("distribution.cards.3.title"),
      desc: t("distribution.cards.3.desc"),
      icon: Landmark,
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reverseRefinanceSchema),
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Landmark size={14} />
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
              {t("hero.p2")}
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-4 max-w-2xl">
              {t("hero.p3")}
            </p>

            <p className="text-sm sm:text-base font-bold text-brand-orange leading-relaxed mb-8 max-w-2xl">
              {t("hero.p4_bold")}
            </p>

            {/* Primary CTA 1 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <OpenChatReusableBtn
                loanProgram="Reverse Mortgage Refinance"
                text={t("hero.cta_qualify")}
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

      {/* --- HOW DOES A REVERSE MORTGAGE REFINANCE WORK --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
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
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-4">
              {t("overview.p1")}
            </p>
            <p className="text-sm sm:text-base text-ink-2 font-semibold mb-4">
              {t("overview.p2_bold")}
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-4">
              {t("overview.p3")}
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              {t("overview.p4")}
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
              {t("overview.side_card.title")}
            </div>
            <p className="text-sm text-ink-2 mb-4">
              {t("overview.side_card.intro")}
            </p>
            <ul className="space-y-3.5 text-xs sm:text-sm text-ink">
              {overviewItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={18}
                    className="text-moss-deep shrink-0 mt-0.5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- HOW CAN YOU RECEIVE YOUR FUNDS --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              {t("distribution.badge")}
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink",
                fraunces.className,
              )}
            >
              {t("distribution.heading")}
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 mt-2">
              {t("distribution.subheading")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {distributionCards.map((item, idx) => (
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

          <p className="text-xs sm:text-sm text-ink-2 text-center mt-8 max-w-2xl mx-auto">
            {t("distribution.footnote_part1")}
            <Link
              href={startHref}
              className="text-brand-orange underline hover:no-underline"
            >
              {t("distribution.footnote_link")}
            </Link>
            {t("distribution.footnote_part2")}
          </p>
        </div>
      </section>

      {/* --- WHY DO HOMEOWNERS REFINANCE INTO A REVERSE MORTGAGE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-10">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            {t("use_cases.badge")}
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            {t("use_cases.heading")}
          </h2>
          <p className="text-sm sm:text-base text-ink-2 mt-4 max-w-3xl leading-relaxed">
            {t("use_cases.subheading")}
          </p>
        </div>

        <div className="bg-primary-bg border border-line rounded-3xl p-6 sm:p-10 shadow-sm">
          <h3 className="text-lg font-semibold text-ink mb-6">
            {t("use_cases.card_title")}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCaseReasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-cream/30 rounded-xl border border-line/50"
              >
                <CheckCircle2 size={16} className="text-moss-deep shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-ink">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHAT HAPPENS TO MY CURRENT MORTGAGE / OWNERSHIP --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Mortgage */}
          <div className="bg-moss-deep text-cream border border-moss-deep p-8 sm:p-10 rounded-3xl">
            <h3
              className={cn(
                "text-2xl font-light text-primary-bg mb-4",
                fraunces.className,
              )}
            >
              {t("current_mortgage_and_ownership.current_mortgage.heading")}
            </h3>
            <p className="text-sm text-primary-bg/80 leading-relaxed mb-6">
              {t("current_mortgage_and_ownership.current_mortgage.p1")}
            </p>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="text-sm font-semibold text-primary-bg mb-2">
                {t(
                  "current_mortgage_and_ownership.current_mortgage.example_title",
                )}
              </h4>
              <p className="text-xs text-primary-bg/80 leading-relaxed mb-2">
                {t(
                  "current_mortgage_and_ownership.current_mortgage.example_p1",
                )}
              </p>
              <p className="text-xs text-primary-bg/80 leading-relaxed mb-2">
                {t(
                  "current_mortgage_and_ownership.current_mortgage.example_p2",
                )}
              </p>
              <p className="text-xs text-primary-bg/80 leading-relaxed">
                {t(
                  "current_mortgage_and_ownership.current_mortgage.example_p3",
                )}
              </p>
            </div>
            <p className="text-[11px] text-primary-bg/60 italic mt-4">
              {t("current_mortgage_and_ownership.current_mortgage.footnote")}
            </p>
          </div>

          {/* Ownership */}
          <div className="bg-cream/40 border border-line p-8 sm:p-10 rounded-3xl">
            <h3
              className={cn(
                "text-2xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("current_mortgage_and_ownership.ownership.heading")}
            </h3>
            <p className="text-lg font-bold text-moss-deep mb-4">
              {t("current_mortgage_and_ownership.ownership.answer")}
            </p>
            <p className="text-sm text-ink-2 leading-relaxed mb-4">
              {t("current_mortgage_and_ownership.ownership.p1")}
            </p>
            <p className="text-sm font-medium text-ink leading-relaxed mb-4">
              {t("current_mortgage_and_ownership.ownership.p2_bold")}
            </p>
            <p className="text-sm text-ink-2 leading-relaxed mb-4">
              {t("current_mortgage_and_ownership.ownership.p3")}
            </p>
            <p className="text-sm text-ink-2 leading-relaxed">
              {t("current_mortgage_and_ownership.ownership.p4")}
            </p>
          </div>
        </div>
      </section>

      {/* --- REVERSE MORTGAGE VS TRADITIONAL REFINANCE --- */}
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
                  {t("comparison.th_reverse")}
                </th>
                <th className="px-6 py-4 font-semibold">
                  {t("comparison.th_traditional")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.monthly_payment.label")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.monthly_payment.reverse")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.monthly_payment.traditional")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.min_age.label")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.min_age.reverse")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.min_age.traditional")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.existing_mortgage.label")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.existing_mortgage.reverse")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.existing_mortgage.traditional")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.access_equity.label")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.access_equity.reverse")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.access_equity.traditional")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.monthly_advances.label")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.monthly_advances.reverse")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.monthly_advances.traditional")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.line_of_credit.label")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.line_of_credit.reverse")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.line_of_credit.traditional")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.remain_owner.label")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.remain_owner.reverse")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.remain_owner.traditional")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.loan_balance.label")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.loan_balance.reverse")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.loan_balance.traditional")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("comparison.rows.repayment.label")}
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  {t("comparison.rows.repayment.reverse")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("comparison.rows.repayment.traditional")}
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
            loanProgram="Reverse Mortgage Refinance"
            text={t("hero.cta_qualify")}
          />
          <Link
            href={calendarHref}
            className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 text-center"
          >
            {t("hero.cta_specialist")}
          </Link>
        </div>
      </section>

      {/* --- REVERSE MORTGAGE VS HOMESAFE SECOND --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("homesafe_second_comparison.heading")}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-ink mb-2">
              {t("homesafe_second_comparison.subtitle")}
            </p>
            <p className="text-sm sm:text-base text-ink-2 mb-8">
              {t("homesafe_second_comparison.sub_note")}
            </p>
            <p className="text-sm text-ink-2 leading-relaxed mb-8">
              <Link
                href={homeSafeSecondHref}
                className="text-brand-orange underline hover:no-underline font-medium"
              >
                {t("homesafe_second_comparison.intro_link")}
              </Link>
              {t("homesafe_second_comparison.intro_part2")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-primary-bg border border-line p-8 rounded-2xl shadow-sm text-center">
              <h3 className="text-lg font-bold text-ink mb-4">
                {t("homesafe_second_comparison.refinance_card_title")}
              </h3>
              <p className="text-sm text-ink-2">
                {t("homesafe_second_comparison.refinance_card_desc")}
              </p>
            </div>
            <div className="bg-moss-deep text-cream border border-moss-deep p-8 rounded-2xl shadow-md text-center">
              <h3 className="text-lg font-bold text-primary-bg mb-4">
                {t("homesafe_second_comparison.homesafe_card_title")}
              </h3>
              <p className="text-sm text-primary-bg/90">
                {t("homesafe_second_comparison.homesafe_card_desc")}
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-ink-2 mb-6 max-w-2xl mx-auto">
              {t("homesafe_second_comparison.footer")}
            </p>
            <Link
              href={homeSafeSecondHref}
              className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm hover:text-moss-deep transition-colors"
            >
              {t("homesafe_second_comparison.compare_link")}{" "}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- HOW MUCH MONEY CAN I RECEIVE / TYPES --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-6",
                fraunces.className,
              )}
            >
              {t("proceeds_and_programs.proceeds.heading")}
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed mb-4">
              {t("proceeds_and_programs.proceeds.p1")}
            </p>
            <p className="text-sm font-medium text-ink mb-4">
              {t("proceeds_and_programs.proceeds.p2")}
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-ink-2 mb-6">
              {proceedsFactors.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-2 leading-relaxed">
              {t("proceeds_and_programs.proceeds.p3")}
            </p>
          </div>

          <div>
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-6",
                fraunces.className,
              )}
            >
              {t("proceeds_and_programs.programs.heading")}
            </h2>

            <div className="space-y-6">
              <div className="bg-cream/40 border border-line p-6 rounded-2xl">
                <h3 className="font-bold text-ink mb-2">
                  {t("proceeds_and_programs.programs.hecm_title")}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed mb-2">
                  {t("proceeds_and_programs.programs.hecm_p1")}
                </p>
                <p className="text-sm text-ink-2 leading-relaxed">
                  {t("proceeds_and_programs.programs.hecm_p2")}
                </p>
              </div>

              <div className="bg-cream/40 border border-line p-6 rounded-2xl">
                <h3 className="font-bold text-ink mb-2">
                  {t("proceeds_and_programs.programs.proprietary_title")}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed mb-2">
                  {t("proceeds_and_programs.programs.proprietary_p1")}
                </p>
                <p className="text-sm text-ink-2 leading-relaxed">
                  {t("proceeds_and_programs.programs.proprietary_p2")}
                </p>
              </div>
            </div>

            <p className="text-sm text-ink-2 leading-relaxed mt-6">
              {t("proceeds_and_programs.programs.footer")}
            </p>
          </div>
        </div>
      </section>

      {/* --- QUALIFICATIONS AND COSTS --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-6",
                fraunces.className,
              )}
            >
              {t("qualifications_and_costs.qualify.heading")}
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed mb-4">
              {t("qualifications_and_costs.qualify.p1")}
            </p>
            <p className="text-sm font-medium text-ink mb-4">
              {t("qualifications_and_costs.qualify.p2")}
            </p>
            <ul className="space-y-3 mb-6">
              {qualifyRequirements.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-ink-2"
                >
                  <CheckCircle2
                    size={16}
                    className="text-moss-deep shrink-0 mt-0.5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-2 italic">
              {t("qualifications_and_costs.qualify.footnote")}
            </p>
          </div>

          <div>
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-6",
                fraunces.className,
              )}
            >
              {t("qualifications_and_costs.costs.heading")}
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed mb-4">
              {t("qualifications_and_costs.costs.p1")}
            </p>
            <p className="text-sm font-medium text-ink mb-4">
              {t("qualifications_and_costs.costs.p2")}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-ink-2 mb-6">
              {costItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-2 leading-relaxed mb-2">
              {t("qualifications_and_costs.costs.p3")}
            </p>
            <p className="text-sm text-ink-2 leading-relaxed">
              {t("qualifications_and_costs.costs.p4")}
            </p>
          </div>
        </div>
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
      </section>

      {/* --- SHOULD YOU REFINANCE & FINAL CTA --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/40 border border-line rounded-[32px] p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("should_you_refinance.heading")}
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed max-w-2xl mx-auto mb-6">
              {t("should_you_refinance.intro")}
            </p>
          </div>

          <div className="bg-white border border-line rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
            <ul className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-ink-2">
              {shouldRefinanceQuestions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-moss-deep mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mb-10">
            <p className="text-sm sm:text-base font-medium text-ink leading-relaxed max-w-2xl mx-auto mb-4">
              {t("should_you_refinance.p1")}
            </p>
            <p className="text-sm text-ink-2 leading-relaxed max-w-2xl mx-auto">
              {t("should_you_refinance.p2")}
            </p>
          </div>

          <div className="bg-moss-deep text-cream border border-moss-deep p-8 sm:p-10 rounded-3xl text-center">
            <h3
              className={cn(
                "text-2xl sm:text-3xl font-light text-primary-bg mb-4",
                fraunces.className,
              )}
            >
              {t("should_you_refinance.moss_box.title")}
            </h3>
            <p className="text-sm text-primary-bg/80 leading-relaxed max-w-2xl mx-auto mb-8">
              {t("should_you_refinance.moss_box.desc")}
            </p>
            <ul className="text-sm text-primary-bg/90 space-y-2 mb-8 inline-block text-left">
              {mossBoxItems.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>

            {/* Primary CTA 3 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <OpenChatReusableBtn
                loanProgram="Reverse Mortgage Refinance"
                text={t("hero.cta_qualify")}
              />
              <Link
                href={calendarHref}
                className="bg-transparent border border-primary-bg text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                {t("hero.cta_specialist")}
              </Link>
            </div>
            <p className="text-center text-[12px] text-primary-bg/60">
              {t("should_you_refinance.moss_box.footnote")}
            </p>
          </div>
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
          <p>{t("disclosures.p6")}</p>
        </div>
      </section>
    </main>
  );
}
