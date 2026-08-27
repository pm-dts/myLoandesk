import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BridgeCalculator from "@/components/site/LoanPrograms/BridgeLoans/BridgeCalculator";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export async function getBridgeLoansMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "BridgeLoans.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/bridge-loans/"
    : "https://www.myloandesk.com/loan-programs/bridge-loans/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/loan-programs/bridge-loans/",
        es: "https://www.myloandesk.com/es/loan-programs/bridge-loans/",
        "x-default": "https://www.myloandesk.com/loan-programs/bridge-loans/",
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

export default async function BridgeLoansView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "BridgeLoans" });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const loanProgramsHref = isEs ? "/es/loan-programs" : "/loan-programs";
  const bridgeHref = isEs
    ? "/es/loan-programs/bridge-loans"
    : "/loan-programs/bridge-loans";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/bridge-loans/"
    : "https://www.myloandesk.com/loan-programs/bridge-loans/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.loan_programs"), url: loanProgramsHref },
    { name: t("breadcrumbs.bridge_loans"), url: bridgeHref },
  ];

  const bridgePageSchema = {
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

  const assetClasses = t.raw("commercial.asset_classes") as string[];
  const faqItems = t.raw("faq.items") as { q: string; a: string }[];

  return (
    <div className="min-h-screen bg-[#EDEAE2] text-[#55524C] antialiased">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bridgePageSchema) }}
      />

      <section className="mx-auto max-w-[900px] bg-[#FBF8F2] px-[22px] py-8 sm:px-14 sm:py-[44px] sm:pb-[60px]">
        {/* Back Link */}
        <Link
          href={loanProgramsHref}
          className="mb-[18px] inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#55524C] transition-colors hover:text-[#B85A1C]"
        >
          &larr; {t("back_to_programs")}
        </Link>

        {/* Header */}
        <h1 className="mb-[18px] font-serif text-[36px] font-bold leading-[1.15] text-[#1C1C1C]">
          {t("title")}
        </h1>
        <hr className="mb-[26px] border-0 border-t border-[#E6E0D3]" />

        {/* Hero Section */}
        <div className="mb-1.5 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.02em] text-[#B85A1C]">
              {t("hero.subtitle")}
            </div>
            <p className="mb-6 max-w-[680px] text-[15.5px] leading-[1.7] text-[#55524C]">
              {t("hero.description")}
            </p>
            <div className="mt-[18px] flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-[13.5px] text-[#55524C]">
                <svg
                  className="shrink-0"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#D9722C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>{t("hero.bullet1")}</span>
              </div>
              <div className="flex items-center gap-2 text-[13.5px] text-[#55524C]">
                <svg
                  className="shrink-0"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#D9722C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>{t("hero.bullet2")}</span>
              </div>
              <div className="flex items-center gap-2 text-[13.5px] text-[#55524C]">
                <svg
                  className="shrink-0"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#D9722C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>{t("hero.bullet3")}</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator */}
          <BridgeCalculator locale={locale} />
        </div>

        <p className="mt-1.5 max-w-[680px] text-[11.5px] text-[#9A9585]">
          {t("hero.disclaimer")}
        </p>

        {/* What Is a Bridge Loan */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          {t("what_is.title")}
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          {t("what_is.p1")}
        </p>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          {t("what_is.p2")}
        </p>

        {/* Residential Bridge Loans */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          {t("residential.title")}
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          {t("residential.intro")}
        </p>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              {t("residential.points.buy_before_sell_title")}{" "}
            </strong>
            {t("residential.points.buy_before_sell_desc")}
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              {t("residential.points.avoid_contingent_title")}{" "}
            </strong>
            {t("residential.points.avoid_contingent_desc")}
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              {t("residential.points.renovation_title")}{" "}
            </strong>
            {t("residential.points.renovation_desc")}
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              {t("residential.points.estate_title")}{" "}
            </strong>
            {t("residential.points.estate_desc")}
          </li>
        </ul>

        {/* Commercial Bridge Loans */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          {t("commercial.title")}
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          {t("commercial.intro")}
        </p>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              {t("commercial.points.stabilization_title")}{" "}
            </strong>
            {t("commercial.points.stabilization_desc")}
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              {t("commercial.points.time_sensitive_title")}{" "}
            </strong>
            {t("commercial.points.time_sensitive_desc")}
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              {t("commercial.points.repositioning_title")}{" "}
            </strong>
            {t("commercial.points.repositioning_desc")}
          </li>
          <li className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]">
            <strong className="text-[#1C1C1C]">
              {t("commercial.points.maturing_debt_title")}{" "}
            </strong>
            {t("commercial.points.maturing_debt_desc")}
          </li>
        </ul>

        {/* Commercial Property Types */}
        <h3 className="mb-3 mt-6 font-serif text-[19px] font-semibold text-[#1C1C1C]">
          {t("commercial.asset_classes_title")}
        </h3>
        <div className="my-3.5 mb-6 flex max-w-[700px] flex-wrap gap-2">
          {assetClasses.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-full border border-[#E6E0D3] bg-[#F3EFE6] px-3.5 py-[7px] text-[13px] font-semibold text-[#1C1C1C]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Comparison Table */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          {t("comparison.title")}
        </h2>
        <div className="overflow-x-auto">
          <table className="my-[18px] mb-[30px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-[#1C1C1C] text-left font-bold text-white">
                <th className="p-[11px_14px]"></th>
                <th className="p-[11px_14px]">{t("comparison.th_res")}</th>
                <th className="p-[11px_14px]">{t("comparison.th_comm")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  {t("comparison.rows.primary_use.label")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.primary_use.res")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.primary_use.comm")}
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  {t("comparison.rows.underwriting.label")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.underwriting.res")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.underwriting.comm")}
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  {t("comparison.rows.term.label")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.term.res")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.term.comm")}
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  {t("comparison.rows.exit_strategy.label")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.exit_strategy.res")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.exit_strategy.comm")}
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  {t("comparison.rows.property_types.label")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.property_types.res")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.property_types.comm")}
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  {t("comparison.rows.payment.label")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.payment.res")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.payment.comm")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Why Choose a Bridge Loan */}
        <div className="my-[18px] mb-[30px] rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-[26px_28px]">
          <div className="mb-3 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
            {t("why_choose.title")}
          </div>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            <strong className="text-[#1C1C1C]">
              {t("why_choose.speed_title")}
            </strong>{" "}
            {t("why_choose.speed_desc")}
          </p>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            <strong className="text-[#1C1C1C]">
              {t("why_choose.flexibility_title")}
            </strong>{" "}
            {t("why_choose.flexibility_desc")}
          </p>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            <strong className="text-[#1C1C1C]">
              {t("why_choose.timing_title")}
            </strong>{" "}
            {t("why_choose.timing_desc")}
          </p>
          <p className="mb-0 text-[14.5px] leading-[1.7] text-[#55524C]">
            <strong className="text-[#1C1C1C]">
              {t("why_choose.permanent_title")}
            </strong>{" "}
            {t("why_choose.permanent_desc")}
          </p>
        </div>

        {/* Frequently Asked Questions */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-2xl font-bold leading-[1.25] text-[#1C1C1C]">
          {t("faq.title")}
        </h2>
        <div>
          {faqItems.map((item, idx, arr) => (
            <div
              key={idx}
              className={`py-4 ${idx !== arr.length - 1 ? "border-b border-[#E6E0D3]" : ""}`}
            >
              <p className="mb-1.5 font-sans text-[15px] font-bold text-[#1C1C1C]">
                {item.q}
              </p>
              <p className="m-0 text-[14.5px] leading-[1.7] text-[#55524C]">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-9">
          <a
            href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#D9722C] p-4 font-sans text-[15px] font-bold text-white transition-colors hover:bg-[#B85A1C]"
          >
            {t("cta.apply_now")}
          </a>
          <Link
            href={isEs ? "/es/get-quote" : "/get-quote"}
            className="flex w-full items-center justify-center rounded-[10px] border border-[#E7DEC7] bg-[#F5EFDF] p-4 font-sans text-[15px] font-bold text-[#1C1C1C] transition-colors hover:bg-[#EFE7D3]"
          >
            {t("cta.get_quote")}
          </Link>
          <div className="mt-3.5 text-center text-[12.5px] text-[#8F8A7C]">
            {t("cta.contact_text")}
          </div>
        </div>
      </section>
    </div>
  );
}
