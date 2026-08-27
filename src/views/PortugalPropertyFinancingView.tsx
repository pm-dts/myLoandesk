import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PortugalCalculator from "@/components/site/LoanPrograms/PortugalLoans/Calculator";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export async function getPortugalPropertyFinancingMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "PortugalLoans.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/portugal-property-financing/"
    : "https://www.myloandesk.com/loan-programs/portugal-property-financing/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/loan-programs/portugal-property-financing/",
        es: "https://www.myloandesk.com/es/loan-programs/portugal-property-financing/",
        "x-default":
          "https://www.myloandesk.com/loan-programs/portugal-property-financing/",
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

export default async function PortugalPropertyFinancingView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "PortugalLoans",
  });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const loanProgramsHref = isEs ? "/es/loan-programs" : "/loan-programs";
  const portugalHref = isEs
    ? "/es/loan-programs/portugal-property-financing"
    : "/loan-programs/portugal-property-financing";
  const startHref = isEs ? "/es/#start" : "/#start";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/portugal-property-financing/"
    : "https://www.myloandesk.com/loan-programs/portugal-property-financing/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.loan_programs"), url: loanProgramsHref },
    { name: t("breadcrumbs.portugal_financing"), url: portugalHref },
  ];

  const portugalPageSchema = {
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
        category: "InternationalMortgageLoan",
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
        ],
      },
    ],
  };

  const processSteps = t.raw("process.steps") as {
    step: string;
    title: string;
    desc: string;
  }[];
  const highlightItems = t.raw("highlights.items") as string[];
  const depositRows = t.raw("deposit_ltv.rows") as {
    profile: string;
    ltv: string;
  }[];
  const whoThisIsForItems = t.raw("who_this_is_for.items") as string[];
  const whatYouNeedItems = t.raw("what_you_need.items") as string[];
  const faqItems = t.raw("faq.items") as { q: string; a: string }[];

  return (
    <div className="min-h-screen bg-[#EDEAE2] text-[#55524C] antialiased">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portugalPageSchema) }}
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
        <h1 className="mb-[18px] font-serif text-[34px] font-bold leading-[1.18] text-[#1C1C1C]">
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
          <PortugalCalculator locale={locale} />
        </div>

        <p className="mt-1.5 max-w-[680px] text-[11.5px] text-[#9A9585]">
          {t("hero.disclaimer")}
        </p>

        {/* How Property Financing Works in Portugal */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          {t("how_it_works_overview.title")}
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          {t("how_it_works_overview.p1")}
        </p>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          {t("how_it_works_overview.p2")}
        </p>

        {/* How the Process Works */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          {t("process.title")}
        </h2>
        <div className="max-w-[700px] space-y-4">
          {processSteps.map((item) => (
            <div key={item.step} className="flex gap-3.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D9722C] font-sans text-[13px] font-bold text-white">
                {item.step}
              </div>
              <div className="pt-[3px] text-[14.5px] leading-[1.6] text-[#55524C]">
                <strong className="text-[#1C1C1C]">{item.title}</strong>{" "}
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Program Highlights */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          {t("highlights.title")}
        </h2>
        <div className="mb-3.5 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
          {t("highlights.subtitle")}
        </div>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {highlightItems.map((item, idx) => (
            <li
              key={idx}
              className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Deposit & Loan-to-Value */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          {t("deposit_ltv.title")}
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-[1.75] text-[#55524C]">
          {t("deposit_ltv.p1")}
        </p>
        <div className="overflow-x-auto">
          <table className="my-3.5 mb-2 max-w-[640px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b-2 border-[#E6E0D3] bg-[#F3EFE6] text-left font-bold text-[#1C1C1C]">
                <th className="p-[9px_12px]">{t("deposit_ltv.th_profile")}</th>
                <th className="p-[9px_12px]">{t("deposit_ltv.th_ltv")}</th>
              </tr>
            </thead>
            <tbody>
              {depositRows.map((row, idx) => (
                <tr key={idx} className="border-b border-[#E6E0D3]">
                  <td className="p-[9px_12px] text-[#55524C]">{row.profile}</td>
                  <td className="p-[9px_12px] text-[#55524C]">{row.ltv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[13px] leading-[1.75] text-[#8F8A7C]">
          {t("deposit_ltv.footnote")}
        </p>

        {/* Golden Visa Clarification */}
        <div className="my-[18px] mb-[30px] rounded-xl border border-[#EAD3AC] bg-[#FBF3E8] p-[22px_26px]">
          <div className="mb-2.5 flex items-center gap-1.5 font-sans text-[12.5px] font-bold uppercase tracking-[0.03em] text-[#9A6B1F]">
            {t("golden_visa.tag")}
          </div>
          <p className="mb-2.5 text-[14.5px] leading-[1.7] text-[#55524C]">
            {t("golden_visa.p1_part1")}
            <strong>{t("golden_visa.p1_bold")}</strong>
            {t("golden_visa.p1_part2")}
          </p>
          <p className="mb-0 text-[14.5px] leading-[1.7] text-[#55524C]">
            {t("golden_visa.p2")}
          </p>
        </div>

        {/* Strategic Advantages */}
        <div className="my-[18px] mb-[30px] rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-[26px_28px]">
          <div className="mb-3 font-sans text-[13.5px] font-bold uppercase tracking-[0.03em] text-[#1C1C1C]">
            {t("advantages.title")}
          </div>
          <p className="mb-3 text-[14.5px] leading-[1.7] text-[#55524C]">
            {t("advantages.p1")}
          </p>
          <p className="mb-0 text-[14.5px] leading-[1.7] text-[#55524C]">
            {t("advantages.p2")}
          </p>
        </div>

        {/* Who This Is For */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          {t("who_this_is_for.title")}
        </h2>
        <ul className="mb-3 max-w-[700px] list-none p-0">
          {whoThisIsForItems.map((item, idx) => (
            <li
              key={idx}
              className="relative mb-[11px] pl-5 text-[15px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* What You'll Likely Need */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          {t("what_you_need.title")}
        </h2>
        <div className="mb-3 grid max-w-[700px] grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          {whatYouNeedItems.map((doc, idx) => (
            <div
              key={idx}
              className="relative mb-[9px] pl-5 text-[14.5px] leading-[1.6] text-[#55524C] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]"
            >
              {doc}
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
          {t("comparison.title")}
        </h2>
        <div className="overflow-x-auto">
          <table className="my-[18px] mb-[30px] w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-[#1C1C1C] text-left font-bold text-white">
                <th className="p-[11px_14px]"></th>
                <th className="p-[11px_14px]">{t("comparison.th_resident")}</th>
                <th className="p-[11px_14px]">
                  {t("comparison.th_non_resident")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  {t("comparison.rows.deposit.label")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.deposit.resident")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.deposit.non_resident")}
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  {t("comparison.rows.ltv.label")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.ltv.resident")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.ltv.non_resident")}
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  {t("comparison.rows.documentation.label")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.documentation.resident")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.documentation.non_resident")}
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  {t("comparison.rows.rate_spread.label")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.rate_spread.resident")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.rate_spread.non_resident")}
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                  {t("comparison.rows.nif_required.label")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.nif_required.resident")}
                </td>
                <td className="p-[11px_14px] text-[#55524C]">
                  {t("comparison.rows.nif_required.non_resident")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Frequently Asked Questions */}
        <h2 className="mb-3.5 mt-[42px] font-serif text-[23px] font-bold leading-[1.25] text-[#1C1C1C]">
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
            href={startHref}
            className="flex w-full items-center justify-center rounded-[10px] border border-[#E7DEC7] bg-[#F5EFDF] p-4 font-sans text-[15px] font-bold text-[#1C1C1C] transition-colors hover:bg-[#EFE7D3]"
          >
            {t("cta.contact_us")}
          </Link>
          <div className="mt-3.5 text-center text-[12.5px] text-[#8F8A7C]">
            {t("cta.note")}
          </div>
        </div>
      </section>
    </div>
  );
}
