import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import FhaCalculator from "@/components/site/LoanPrograms/FHALoans/FhaCalculator";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export async function getFHALoansMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "FHALoans.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/fha-loans/"
    : "https://www.myloandesk.com/loan-programs/fha-loans/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/loan-programs/fha-loans/",
        es: "https://www.myloandesk.com/es/loan-programs/fha-loans/",
        "x-default": "https://www.myloandesk.com/loan-programs/fha-loans/",
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

export default async function FHALoansView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "FHALoans",
  });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const loanProgramsHref = isEs ? "/es/loan-programs" : "/loan-programs";
  const fhaHref = isEs
    ? "/es/loan-programs/fha-loans"
    : "/loan-programs/fha-loans";
  const startHref = isEs ? "/es/#start" : "/#start";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/fha-loans/"
    : "https://www.myloandesk.com/loan-programs/fha-loans/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.loan_programs"), url: loanProgramsHref },
    { name: t("breadcrumbs.fha_loans"), url: fhaHref },
  ];

  const fhaPageSchema = {
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
        ],
      },
    ],
  };

  const processSteps = t.raw("how_it_works.steps") as {
    step: string;
    title: string;
    desc: string;
  }[];
  const highlightItems = t.raw("highlights.items") as string[];
  const whoThisIsForItems = t.raw("who_this_is_for.items") as string[];
  const eligibilityItems = t.raw("eligibility.items") as string[];
  const documentItems = t.raw("documents.items") as string[];
  const faqItems = t.raw("faq.items") as { q: string; a: string }[];

  return (
    <section className="bg-[#EDEAE2] text-[#55524C] font-sans antialiased">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fhaPageSchema) }}
      />

      <div className="mx-auto max-w-[900px] bg-[#FBF8F2] px-6 py-8 sm:px-14 sm:py-11 md:pb-16">
        <Link
          href={loanProgramsHref}
          className="mb-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#55524C] transition-colors hover:text-[#B85A1C]"
        >
          &larr; {t("back_to_programs")}
        </Link>

        <h1 className="mb-4 font-serif text-3xl sm:text-[38px] font-bold leading-tight text-[#1C1C1C]">
          {t("title")}
        </h1>
        <hr className="mb-6 border-0 border-t border-[#E6E0D3]" />

        {/* Hero Section */}
        <div className="mb-2 grid grid-cols-1 gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 items-start">
          <div>
            <div className="mb-4 font-sans text-sm font-bold uppercase tracking-wide text-[#B85A1C]">
              {t("hero.subtitle")}
            </div>
            <p className="mb-6 max-w-[680px] text-[15.5px] leading-relaxed text-[#55524C]">
              {t("hero.description")}
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
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
                {t("hero.bullet1")}
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
                {t("hero.bullet2")}
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
                {t("hero.bullet3")}
              </div>
            </div>
          </div>

          <FhaCalculator locale={locale} />
        </div>

        <p className="mt-1.5 max-w-[680px] text-[11.5px] text-[#9A9585]">
          {t("hero.disclaimer")}
        </p>

        {/* What Is an FHA Loan */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          {t("what_is.title")}
        </h2>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-relaxed text-[#55524C]">
          {t("what_is.p1")}
        </p>
        <p className="mb-3.5 max-w-[700px] text-[15px] leading-relaxed text-[#55524C]">
          {t("what_is.p2")}
        </p>

        {/* How It Works */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          {t("how_it_works.title")}
        </h2>
        <div className="max-w-[700px] space-y-4">
          {processSteps.map((item) => (
            <div key={item.step} className="flex gap-3.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D9722C] font-sans text-[13px] font-bold text-white">
                {item.step}
              </div>
              <div className="pt-0.5 text-[14.5px] leading-relaxed text-[#55524C]">
                <strong className="text-[#1C1C1C]">{item.title}</strong>{" "}
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Program Highlights */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          {t("highlights.title")}
        </h2>
        <div className="mb-3.5 font-sans text-[13.5px] font-bold uppercase tracking-wider text-[#1C1C1C]">
          {t("highlights.subtitle")}
        </div>
        <ul className="mb-3 max-w-[700px] space-y-2.5">
          {highlightItems.map((item, idx) => (
            <li
              key={idx}
              className="relative pl-5 text-[15px] leading-relaxed text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Strategic Advantages */}
        <div className="my-7 rounded-xl border border-[#E6E0D3] bg-[#F3EFE6] p-6 sm:p-7">
          <div className="mb-3 font-sans text-[13.5px] font-bold uppercase tracking-wider text-[#1C1C1C]">
            {t("advantages.title")}
          </div>
          <p className="mb-3 text-[14.5px] leading-relaxed text-[#55524C]">
            {t("advantages.p1")}
          </p>
          <p className="mb-3 text-[14.5px] leading-relaxed text-[#55524C]">
            {t("advantages.p2")}
          </p>
          <p className="text-[14.5px] leading-relaxed text-[#55524C]">
            {t("advantages.p3")}
          </p>
        </div>

        {/* Who This Is For */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          {t("who_this_is_for.title")}
        </h2>
        <ul className="mb-3 max-w-[700px] space-y-2.5">
          {whoThisIsForItems.map((item, idx) => (
            <li
              key={idx}
              className="relative pl-5 text-[15px] leading-relaxed text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Comparison Table */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          {t("comparison.title")}
        </h2>
        <div className="overflow-x-auto">
          <table className="my-4 w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-[#1C1C1C] text-white">
                <th className="p-3 text-left font-bold"></th>
                <th className="p-3 text-left font-bold">
                  {t("comparison.th_fha")}
                </th>
                <th className="p-3 text-left font-bold">
                  {t("comparison.th_conv")}
                </th>
                <th className="p-3 text-left font-bold">
                  {t("comparison.th_va")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-3 font-bold text-[#1C1C1C]">
                  {t("comparison.rows.down_payment.label")}
                </td>
                <td className="p-3 text-[#55524C]">
                  {t("comparison.rows.down_payment.fha")}
                </td>
                <td className="p-3 text-[#55524C]">
                  {t("comparison.rows.down_payment.conv")}
                </td>
                <td className="p-3 text-[#55524C]">
                  {t("comparison.rows.down_payment.va")}
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-3 font-bold text-[#1C1C1C]">
                  {t("comparison.rows.credit_score.label")}
                </td>
                <td className="p-3 text-[#55524C]">
                  {t("comparison.rows.credit_score.fha")}
                </td>
                <td className="p-3 text-[#55524C]">
                  {t("comparison.rows.credit_score.conv")}
                </td>
                <td className="p-3 text-[#55524C]">
                  {t("comparison.rows.credit_score.va")}
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3]">
                <td className="p-3 font-bold text-[#1C1C1C]">
                  {t("comparison.rows.mortgage_insurance.label")}
                </td>
                <td className="p-3 text-[#55524C]">
                  {t("comparison.rows.mortgage_insurance.fha")}
                </td>
                <td className="p-3 text-[#55524C]">
                  {t("comparison.rows.mortgage_insurance.conv")}
                </td>
                <td className="p-3 text-[#55524C]">
                  {t("comparison.rows.mortgage_insurance.va")}
                </td>
              </tr>
              <tr className="border-b border-[#E6E0D3] bg-[#F3EFE6]">
                <td className="p-3 font-bold text-[#1C1C1C]">
                  {t("comparison.rows.best_for.label")}
                </td>
                <td className="p-3 text-[#55524C]">
                  {t("comparison.rows.best_for.fha")}
                </td>
                <td className="p-3 text-[#55524C]">
                  {t("comparison.rows.best_for.conv")}
                </td>
                <td className="p-3 text-[#55524C]">
                  {t("comparison.rows.best_for.va")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Eligibility Requirements */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          {t("eligibility.title")}
        </h2>
        <ul className="mb-3 max-w-[700px] space-y-2.5">
          {eligibilityItems.map((item, idx) => (
            <li
              key={idx}
              className="relative pl-5 text-[15px] leading-relaxed text-[#55524C] before:absolute before:left-0 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#55524C]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Required Documents */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          {t("documents.title")}
        </h2>
        <div className="mb-3 grid max-w-[700px] grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          {documentItems.map((doc, idx) => (
            <div
              key={idx}
              className="relative pl-5 text-[14.5px] leading-relaxed text-[#55524C] before:absolute before:left-0 before:top-[8px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#D9722C]"
            >
              {doc}
            </div>
          ))}
        </div>

        {/* Frequently Asked Questions */}
        <h2 className="mb-3.5 mt-10 font-serif text-2xl font-bold leading-snug text-[#1C1C1C]">
          {t("faq.title")}
        </h2>
        <div className="space-y-0">
          {faqItems.map((item, idx, arr) => (
            <div
              key={idx}
              className={`py-4 ${idx !== arr.length - 1 ? "border-b border-[#E6E0D3]" : ""}`}
            >
              <p className="mb-1.5 font-sans text-[15px] font-bold text-[#1C1C1C]">
                {item.q}
              </p>
              <p className="text-[14.5px] leading-relaxed text-[#55524C]">
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
            className="flex w-full items-center justify-center rounded-xl border border-[#E7DEC7] bg-[#F5EFDF] p-4 font-sans text-[15px] font-bold text-[#1C1C1C] transition-colors hover:bg-[#EFE7D3]"
          >
            {t("cta.contact_us")}
          </Link>
          <div className="mt-3.5 text-center text-[12.5px] text-[#8F8A7C]">
            {t("cta.note")}
          </div>
        </div>
      </div>
    </section>
  );
}
