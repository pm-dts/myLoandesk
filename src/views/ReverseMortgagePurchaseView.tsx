import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import { Home, CheckCircle2, PiggyBank, HelpCircle } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import OpenChatReusableBtn from "@/components/site/LoanPrograms/ReverseMortgage/OpenChatReusableBtn";
import PurchaseEstimateLeadForm from "@/components/site/LoanPrograms/ReverseMortgage/PurchaseEstimateLeadForm";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function getReverseMortgagePurchaseMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "ReverseMortgagePurchase.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/reverse-mortgage-purchase/"
    : "https://www.myloandesk.com/loan-programs/reverse-mortgage-purchase/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/loan-programs/reverse-mortgage-purchase/",
        es: "https://www.myloandesk.com/es/loan-programs/reverse-mortgage-purchase/",
        "x-default":
          "https://www.myloandesk.com/loan-programs/reverse-mortgage-purchase/",
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

export default async function ReverseMortgagePurchaseView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "ReverseMortgagePurchase",
  });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const loanProgramsHref = isEs ? "/es/loan-programs" : "/loan-programs";
  const reversePurchaseHref = isEs
    ? "/es/loan-programs/reverse-mortgage-purchase"
    : "/loan-programs/reverse-mortgage-purchase";
  const reverseMortgageHref = isEs
    ? "/es/reverse-mortgage"
    : "/reverse-mortgage";
  const calendarHref = isEs ? "/es/calendar" : "/calendar";
  const startHref = isEs ? "/es/#start" : "/#start";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/reverse-mortgage-purchase/"
    : "https://www.myloandesk.com/loan-programs/reverse-mortgage-purchase/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.loan_programs"), url: loanProgramsHref },
    { name: t("breadcrumbs.reverse_purchase"), url: reversePurchaseHref },
  ];

  const reversePurchaseSchema = {
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

  const overviewItems = t.raw("overview.side_card.items") as string[];
  const processSteps = t.raw("the_process.steps") as {
    step: string;
    title: string;
    desc: string;
  }[];
  const whyBuyReasons = t.raw("why_buy.reasons") as string[];
  const downPaymentFactors = t.raw(
    "why_buy.down_payment_card.factors",
  ) as string[];
  const buyingPowerOptions = t.raw("buying_power.options") as string[];
  const whoQualifiesRequirements = t.raw(
    "who_qualifies.requirements",
  ) as string[];
  const propertyTypesList = t.raw("property_types.types") as string[];
  const fundSources = t.raw("funds_and_ownership.funds.sources") as string[];
  const faqItems = t.raw("faq.items") as { q: string; a: string }[];
  const movingReasons = t.raw("retirement_cta.moving_reasons") as string[];
  const determineItems = t.raw("retirement_cta.determine_items") as string[];

  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reversePurchaseSchema),
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Home size={14} />
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
              A{" "}
              <Link
                href={reverseMortgageHref}
                className="text-[#D4A574] underline hover:text-cream transition-colors"
              >
                {t("hero.p1_link_text")}
              </Link>{" "}
              {t("hero.p1").replace(/^A\s+reverse\s+mortgage\s+/i, "")}
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-4 max-w-2xl">
              {t("hero.p2")}
            </p>

            <p className="text-sm sm:text-base text-brand-orange font-bold leading-relaxed mb-8 max-w-2xl">
              {t("hero.p3_bold")}
            </p>

            {/* Primary CTA 1 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <OpenChatReusableBtn
                loanProgram="Reverse Mortgage for Purchase"
                text={t("hero.cta_calc")}
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

      {/* --- WHAT IS A REVERSE MORTGAGE FOR PURCHASE --- */}
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
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-4">
              {t("overview.p2")}
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
              {t("overview.side_card.title")}
            </div>
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

      {/* --- HOW DOES A REVERSE MORTGAGE PURCHASE WORK --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              {t("the_process.badge")}
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink",
                fraunces.className,
              )}
            >
              {t("the_process.heading")}
            </h2>
            <p className="text-sm sm:text-base text-ink-2 mt-4 max-w-xl mx-auto">
              {t("the_process.subheading")}
            </p>
          </div>

          <div className="max-w-[800px] mx-auto space-y-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 p-5 bg-primary-bg border border-line rounded-2xl shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange font-sans text-[14px] font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-ink text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY BUY A HOME WITH A REVERSE MORTGAGE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-6",
                fraunces.className,
              )}
            >
              {t("why_buy.heading")}
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-4">
              {t("why_buy.p1")}
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              {t("why_buy.p2")}
            </p>
            <h3 className="font-semibold text-ink mb-4">
              {t("why_buy.reasons_title")}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-ink-2">
              {whyBuyReasons.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-moss-deep text-cream border border-moss-deep p-8 rounded-3xl flex flex-col justify-center">
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              {t("why_buy.down_payment_card.title")}
            </h2>
            <p className="text-sm text-primary-bg/90 leading-relaxed mb-4 font-medium">
              {t("why_buy.down_payment_card.p1")}
            </p>
            <p className="text-sm text-primary-bg/80 leading-relaxed mb-6">
              {t("why_buy.down_payment_card.p2")}
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-primary-bg/80 mb-6">
              {downPaymentFactors.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-brand-orange shrink-0 mt-0.5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-primary-bg/90 leading-relaxed font-medium">
              {t("why_buy.down_payment_card.p3")}
            </p>
          </div>
        </div>
      </section>

      {/* --- EXAMPLE & COMPARISONS --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        {/* Dynamic Lead Generation Form Component */}
        <PurchaseEstimateLeadForm locale={locale} />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Comparison 1: All Cash */}
          <div>
            <div className="mb-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
                {t("strategies.all_cash.badge")}
              </div>
              <h2
                className={cn(
                  "text-2xl sm:text-3xl font-light text-ink",
                  fraunces.className,
                )}
              >
                {t("strategies.all_cash.heading")}
              </h2>
            </div>
            <p className="text-sm text-ink-2 leading-relaxed mb-6">
              {t("strategies.all_cash.intro")}
            </p>
            <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm text-ink">
                <thead className="bg-cream/40 border-b border-line text-[11px] uppercase tracking-wider text-ink-2">
                  <tr>
                    <th className="px-4 py-3 font-semibold">
                      {t("strategies.all_cash.th_feature")}
                    </th>
                    <th className="px-4 py-3 font-semibold text-moss-deep">
                      {t("strategies.all_cash.th_reverse")}
                    </th>
                    <th className="px-4 py-3 font-semibold">
                      {t("strategies.all_cash.th_cash")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60">
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      {t("strategies.all_cash.rows.own_home.label")}
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      {t("strategies.all_cash.rows.own_home.reverse")}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t("strategies.all_cash.rows.own_home.cash")}
                    </td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">
                      {t("strategies.all_cash.rows.monthly_payment.label")}
                    </td>
                    <td className="px-4 py-3 text-moss-deep font-medium">
                      {t("strategies.all_cash.rows.monthly_payment.reverse")}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t("strategies.all_cash.rows.monthly_payment.cash")}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      {t("strategies.all_cash.rows.uses_all_funds.label")}
                    </td>
                    <td className="px-4 py-3 text-moss-deep font-medium">
                      {t("strategies.all_cash.rows.uses_all_funds.reverse")}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t("strategies.all_cash.rows.uses_all_funds.cash")}
                    </td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">
                      {t("strategies.all_cash.rows.keeps_assets.label")}
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      {t("strategies.all_cash.rows.keeps_assets.reverse")}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t("strategies.all_cash.rows.keeps_assets.cash")}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      {t("strategies.all_cash.rows.mortgage_balance.label")}
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      {t("strategies.all_cash.rows.mortgage_balance.reverse")}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t("strategies.all_cash.rows.mortgage_balance.cash")}
                    </td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">
                      {t("strategies.all_cash.rows.interest_accrues.label")}
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      {t("strategies.all_cash.rows.interest_accrues.reverse")}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t("strategies.all_cash.rows.interest_accrues.cash")}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      {t("strategies.all_cash.rows.taxes_insurance.label")}
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      {t("strategies.all_cash.rows.taxes_insurance.reverse")}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t("strategies.all_cash.rows.taxes_insurance.cash")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-ink-2/80 mt-3 italic leading-relaxed">
              {t("strategies.all_cash.footer")}
            </p>
          </div>

          {/* Comparison 2: Traditional Mortgage */}
          <div>
            <div className="mb-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
                {t("strategies.traditional_mortgage.badge")}
              </div>
              <h2
                className={cn(
                  "text-2xl sm:text-3xl font-light text-ink",
                  fraunces.className,
                )}
              >
                {t("strategies.traditional_mortgage.heading")}
              </h2>
            </div>
            <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm mt-[52px]">
              <table className="w-full text-left text-xs sm:text-sm text-ink">
                <thead className="bg-cream/40 border-b border-line text-[11px] uppercase tracking-wider text-ink-2">
                  <tr>
                    <th className="px-4 py-3 font-semibold">
                      {t("strategies.traditional_mortgage.th_feature")}
                    </th>
                    <th className="px-4 py-3 font-semibold text-moss-deep">
                      {t("strategies.traditional_mortgage.th_reverse")}
                    </th>
                    <th className="px-4 py-3 font-semibold">
                      {t("strategies.traditional_mortgage.th_traditional")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60">
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      {t(
                        "strategies.traditional_mortgage.rows.monthly_payment.label",
                      )}
                    </td>
                    <td className="px-4 py-3 text-moss-deep font-medium">
                      {t(
                        "strategies.traditional_mortgage.rows.monthly_payment.reverse",
                      )}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t(
                        "strategies.traditional_mortgage.rows.monthly_payment.traditional",
                      )}
                    </td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">
                      {t(
                        "strategies.traditional_mortgage.rows.buyer_contributes.label",
                      )}
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      {t(
                        "strategies.traditional_mortgage.rows.buyer_contributes.reverse",
                      )}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t(
                        "strategies.traditional_mortgage.rows.buyer_contributes.traditional",
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      {t("strategies.traditional_mortgage.rows.age_req.label")}
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      {t(
                        "strategies.traditional_mortgage.rows.age_req.reverse",
                      )}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t(
                        "strategies.traditional_mortgage.rows.age_req.traditional",
                      )}
                    </td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">
                      {t(
                        "strategies.traditional_mortgage.rows.ownership.label",
                      )}
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      {t(
                        "strategies.traditional_mortgage.rows.ownership.reverse",
                      )}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t(
                        "strategies.traditional_mortgage.rows.ownership.traditional",
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      {t("strategies.traditional_mortgage.rows.interest.label")}
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      {t(
                        "strategies.traditional_mortgage.rows.interest.reverse",
                      )}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t(
                        "strategies.traditional_mortgage.rows.interest.traditional",
                      )}
                    </td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">
                      {t("strategies.traditional_mortgage.rows.balance.label")}
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      {t(
                        "strategies.traditional_mortgage.rows.balance.reverse",
                      )}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t(
                        "strategies.traditional_mortgage.rows.balance.traditional",
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      {t(
                        "strategies.traditional_mortgage.rows.primary_residence.label",
                      )}
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      {t(
                        "strategies.traditional_mortgage.rows.primary_residence.reverse",
                      )}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t(
                        "strategies.traditional_mortgage.rows.primary_residence.traditional",
                      )}
                    </td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">
                      {t(
                        "strategies.traditional_mortgage.rows.taxes_insurance.label",
                      )}
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      {t(
                        "strategies.traditional_mortgage.rows.taxes_insurance.reverse",
                      )}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t(
                        "strategies.traditional_mortgage.rows.taxes_insurance.traditional",
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      {t(
                        "strategies.traditional_mortgage.rows.repayment.label",
                      )}
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      {t(
                        "strategies.traditional_mortgage.rows.repayment.reverse",
                      )}
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      {t(
                        "strategies.traditional_mortgage.rows.repayment.traditional",
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* --- INCREASING BUYING POWER & PROPERTY TYPES --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2
                className={cn(
                  "text-2xl sm:text-3xl font-light text-ink mb-6",
                  fraunces.className,
                )}
              >
                {t("buying_power.heading")}
              </h2>
              <p className="text-lg font-semibold text-moss-deep mb-4">
                {t("buying_power.highlight")}
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-4">
                {t("buying_power.p1")}
              </p>
              <p className="text-sm font-medium text-ink mb-4">
                {t("buying_power.options_intro")}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-ink-2 mb-6">
                {buyingPowerOptions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-primary-bg border border-line rounded-xl">
                <p className="text-sm font-medium text-ink mb-2">
                  {t("buying_power.note_p1")}
                </p>
                <p className="text-sm text-ink-2">
                  {t("buying_power.note_p2")}
                </p>
              </div>
            </div>

            <div className="space-y-10">
              {/* Who Qualifies */}
              <div>
                <h2
                  className={cn(
                    "text-2xl font-light text-ink mb-4",
                    fraunces.className,
                  )}
                >
                  {t("who_qualifies.heading")}
                </h2>
                <p className="text-sm text-ink-2 leading-relaxed mb-4">
                  {t("who_qualifies.p1")}
                </p>
                <p className="text-sm font-medium text-ink mb-3">
                  {t("who_qualifies.requirements_intro")}
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-ink-2 mb-2">
                  {whoQualifiesRequirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-moss-deep shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-ink-2 italic">
                  {t("who_qualifies.footnote")}
                </p>
              </div>

              {/* Property Types */}
              <div>
                <h2
                  className={cn(
                    "text-2xl font-light text-ink mb-4",
                    fraunces.className,
                  )}
                >
                  {t("property_types.heading")}
                </h2>
                <p className="text-sm text-ink-2 leading-relaxed mb-3">
                  {t("property_types.intro")}
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-ink-2 mb-4">
                  {propertyTypesList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Home
                        size={16}
                        className="text-brand-orange shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs sm:text-sm text-ink-2 font-medium">
                  {t("property_types.footnote_part1")}
                  <Link
                    href={startHref}
                    className="text-brand-orange underline hover:no-underline"
                  >
                    {t("property_types.footnote_link")}
                  </Link>
                  {t("property_types.footnote_part2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FUNDS SOURCE AND OWNERSHIP --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-primary-bg border border-line p-8 sm:p-10 rounded-3xl shadow-sm">
            <h3
              className={cn(
                "text-2xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("funds_and_ownership.funds.heading")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed mb-4">
              {t("funds_and_ownership.funds.p1")}
            </p>
            <p className="text-sm font-medium text-ink mb-4">
              {t("funds_and_ownership.funds.p2")}
            </p>
            <ul className="space-y-3 mb-6">
              {fundSources.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-cream/30 rounded-xl border border-line/50 text-sm text-ink-2"
                >
                  <PiggyBank size={18} className="text-moss-deep shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-2 leading-relaxed mb-2">
              {t("funds_and_ownership.funds.p3")}
            </p>
            <p className="text-sm font-medium text-ink leading-relaxed">
              {t("funds_and_ownership.funds.p4")}
            </p>
          </div>

          <div className="bg-primary-bg border border-line p-8 sm:p-10 rounded-3xl shadow-sm flex flex-col justify-center">
            <h3
              className={cn(
                "text-2xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("funds_and_ownership.ownership.heading")}
            </h3>
            <p className="text-xl font-bold text-moss-deep mb-4">
              {t("funds_and_ownership.ownership.answer")}
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              {t("funds_and_ownership.ownership.p1")}
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              {t("funds_and_ownership.ownership.p2")}
            </p>
            <div className="p-5 bg-cream/40 rounded-2xl border border-line/60">
              <p className="text-sm text-ink-2 font-medium leading-relaxed">
                {t("funds_and_ownership.ownership.note")}
              </p>
            </div>
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

      {/* --- MOVING IN RETIREMENT / FINAL CTA --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/40 border border-line rounded-[32px] p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("retirement_cta.heading")}
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed max-w-2xl mx-auto mb-4">
              {t("retirement_cta.p1")}
            </p>
            <p className="text-sm sm:text-base text-ink font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              {t("retirement_cta.p2_bold")}
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed max-w-2xl mx-auto mb-8">
              {t("retirement_cta.p3")}
            </p>
          </div>

          <div className="bg-white border border-line rounded-2xl p-6 sm:p-8 mb-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-ink mb-4 text-center">
              {t("retirement_cta.moving_title")}
            </p>
            <ul className="flex flex-wrap justify-center gap-3">
              {movingReasons.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-cream/40 px-4 py-2 rounded-full border border-line/60 text-xs sm:text-sm text-ink-2"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-center font-medium text-moss-deep mt-6">
              {t("retirement_cta.moving_footer")}
            </p>
          </div>

          <div className="text-center">
            <h3
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("retirement_cta.find_out_heading")}
            </h3>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed max-w-2xl mx-auto mb-6">
              {t("retirement_cta.find_out_p1")}
            </p>
            <p className="text-sm font-semibold text-ink mb-4">
              {t("retirement_cta.determine_title")}
            </p>
            <ul className="text-sm text-ink-2 space-y-2 mb-8 inline-block text-left">
              {determineItems.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>

            {/* Primary CTA 3 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <OpenChatReusableBtn
                loanProgram="Reverse Mortgage for Purchase"
                text={t("retirement_cta.cta_options")}
              />
              <Link
                href={calendarHref}
                className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                {t("retirement_cta.cta_specialist")}
              </Link>
            </div>
            <p className="text-center text-[12px] text-ink-2/80">
              {t("retirement_cta.no_obligation")}
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
          <p>{t("disclosures.p7")}</p>
        </div>
      </section>
    </main>
  );
}
