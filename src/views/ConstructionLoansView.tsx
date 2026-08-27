import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ConstructionCalculator from "@/components/site/LoanPrograms/ConstructionLoans/ConstructionCalculator";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export async function getConstructionLoansMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "ConstructionLoans.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/construction-loans/"
    : "https://www.myloandesk.com/loan-programs/construction-loans/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/loan-programs/construction-loans/",
        es: "https://www.myloandesk.com/es/loan-programs/construction-loans/",
        "x-default":
          "https://www.myloandesk.com/loan-programs/construction-loans/",
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

export default async function ConstructionLoansView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "ConstructionLoans",
  });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const loanProgramsHref = isEs ? "/es/loan-programs" : "/loan-programs";
  const constructionHref = isEs
    ? "/es/loan-programs/construction-loans"
    : "/loan-programs/construction-loans";
  const startHref = isEs ? "/es/#start" : "/#start";
  const getStartedHref = isEs ? "/es/get-started" : "/get-started";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/construction-loans/"
    : "https://www.myloandesk.com/loan-programs/construction-loans/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.loan_programs"), url: loanProgramsHref },
    { name: t("breadcrumbs.construction_loans"), url: constructionHref },
  ];

  const constructionPageSchema = {
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
        category: "ConstructionLoan",
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
    text: string;
  }[];
  const highlightItems = t.raw("highlights.items") as string[];
  const whoThisIsForItems = t.raw("who_this_is_for.items") as string[];
  const eligibilityItems = t.raw("eligibility.items") as string[];
  const faqItems = t.raw("faq.items") as { q: string; a: string }[];

  return (
    <main
      className="min-h-screen font-sans"
      style={{
        backgroundColor: "#EDEAE2",
        color: "#55524C",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(constructionPageSchema),
        }}
      />

      <section className="block">
        <div className="max-w-[900px] mx-auto bg-[#FBF8F2] px-6 sm:px-14 py-[44px] pb-[60px]">
          <Link
            href={loanProgramsHref}
            className="text-[13px] text-[#55524C] font-semibold inline-flex items-center gap-1.5 mb-[18px] hover:text-[#B85A1C] transition-colors"
          >
            &larr; {t("back_to_programs")}
          </Link>

          <h1 className="font-serif font-bold text-3xl sm:text-[38px] text-[#1C1C1C] mb-[18px] leading-[1.15]">
            {t("title")}
          </h1>

          <hr className="border-0 border-t border-[#E6E0D3] mb-[26px]" />

          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 items-start mb-[6px]">
            <div>
              <div className="font-sans font-bold text-xs sm:text-[14px] tracking-[0.02em] text-[#B85A1C] uppercase mb-[16px]">
                {t("hero.subtitle")}
              </div>
              <p className="text-[15.5px] leading-[1.7] text-[#55524C] mb-[24px] max-w-[680px]">
                {t("hero.description")}
              </p>
              <div className="flex flex-col gap-2.5 mt-[18px]">
                <div className="text-[13.5px] text-[#55524C] flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
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
                <div className="text-[13.5px] text-[#55524C] flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
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
                <div className="text-[13.5px] text-[#55524C] flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
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

            {/* Interactive Calculator */}
            <ConstructionCalculator locale={locale} />
          </div>

          <p className="text-[11.5px] text-[#9A9585] max-w-[680px] mt-[6px] mb-0">
            {t("hero.disclaimer")}
          </p>

          {/* WHAT IS A CONSTRUCTION LOAN */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            {t("what_is.title")}
          </h2>
          <p className="text-[15px] leading-[1.75] text-[#55524C] mb-[14px] max-w-[700px]">
            {t("what_is.p1")}
          </p>
          <p className="text-[15px] leading-[1.75] text-[#55524C] mb-[14px] max-w-[700px]">
            {t("what_is.p2")}
          </p>

          {/* HOW IT WORKS */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            {t("how_it_works.title")}
          </h2>
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="flex gap-[14px] mb-[16px] max-w-[700px]"
            >
              <div className="shrink-0 w-[28px] h-[28px] rounded-full bg-[#D9722C] text-white font-sans font-bold text-[13px] flex items-center justify-center">
                {item.step}
              </div>
              <div className="text-[14.5px] leading-[1.6] text-[#55524C] pt-[3px]">
                <strong className="text-[#1C1C1C]">{item.title}</strong>{" "}
                {item.text}
              </div>
            </div>
          ))}

          {/* PROGRAM HIGHLIGHTS */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            {t("highlights.title")}
          </h2>
          <div className="font-sans font-bold text-[13.5px] tracking-[0.03em] text-[#1C1C1C] uppercase mb-[14px]">
            {t("highlights.subtitle")}
          </div>
          <ul className="list-none m-0 p-0 mb-[12px] max-w-[700px]">
            {highlightItems.map((highlight, i) => (
              <li
                key={i}
                className="relative pl-[20px] text-[15px] text-[#55524C] leading-[1.6] mb-[11px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#55524C]"
              >
                {highlight}
              </li>
            ))}
          </ul>

          {/* STRATEGIC ADVANTAGES */}
          <div className="bg-[#F3EFE6] border border-[#E6E0D3] rounded-[12px] p-[26px_28px] mt-[18px] mb-[30px]">
            <div className="font-sans font-bold text-[13.5px] tracking-[0.03em] text-[#1C1C1C] uppercase mb-[12px]">
              {t("advantages.title")}
            </div>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] mb-[12px]">
              {t("advantages.p1")}
            </p>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] mb-[12px]">
              {t("advantages.p2")}
            </p>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] m-0">
              {t("advantages.p3")}
            </p>
          </div>

          {/* WHO THIS IS FOR */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            {t("who_this_is_for.title")}
          </h2>
          <ul className="list-none m-0 p-0 mb-[12px] max-w-[700px]">
            {whoThisIsForItems.map((item, i) => (
              <li
                key={i}
                className="relative pl-[20px] text-[15px] text-[#55524C] leading-[1.6] mb-[11px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#55524C]"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* COMPARISON TABLE */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            {t("comparison.title")}
          </h2>
          <div className="overflow-x-auto mb-[30px]">
            <table className="w-full border-collapse font-sans text-[13.5px]">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="p-[11px_14px] text-left font-bold"></th>
                  <th className="p-[11px_14px] text-left font-bold">
                    {t("comparison.th_c2p")}
                  </th>
                  <th className="p-[11px_14px] text-left font-bold">
                    {t("comparison.th_renovation")}
                  </th>
                  <th className="p-[11px_14px] text-left font-bold">
                    {t("comparison.th_conventional")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    {t("comparison.rows.best_for.label")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.best_for.c2p")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.best_for.renovation")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.best_for.conventional")}
                  </td>
                </tr>
                <tr className="bg-[#F3EFE6] border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    {t("comparison.rows.disbursed.label")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.disbursed.c2p")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.disbursed.renovation")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.disbursed.conventional")}
                  </td>
                </tr>
                <tr className="border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    {t("comparison.rows.payment.label")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.payment.c2p")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.payment.renovation")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.payment.conventional")}
                  </td>
                </tr>
                <tr className="bg-[#F3EFE6] border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    {t("comparison.rows.closings.label")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.closings.c2p")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.closings.renovation")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.closings.conventional")}
                  </td>
                </tr>
                <tr className="border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    {t("comparison.rows.collateral.label")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.collateral.c2p")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.collateral.renovation")}
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    {t("comparison.rows.collateral.conventional")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ELIGIBILITY */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            {t("eligibility.title")}
          </h2>
          <ul className="list-none m-0 p-0 mb-[12px] max-w-[700px]">
            {eligibilityItems.map((req, i) => (
              <li
                key={i}
                className="relative pl-[20px] text-[15px] text-[#55524C] leading-[1.6] mb-[11px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#55524C]"
              >
                {req}
              </li>
            ))}
          </ul>

          {/* FAQ */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            {t("faq.title")}
          </h2>

          {faqItems.map((faq, i, arr) => (
            <div
              key={i}
              className={`py-[16px] ${
                i !== arr.length - 1 ? "border-b border-[#E6E0D3]" : ""
              }`}
            >
              <p className="font-sans font-bold text-[15px] text-[#1C1C1C] m-0 mb-[6px]">
                {faq.q}
              </p>
              <p className="text-[14.5px] leading-[1.7] text-[#55524C] m-0">
                {faq.a}
              </p>
            </div>
          ))}

          {/* CTA BUTTONS */}
          <div className="mt-[36px]">
            <Link
              href={getStartedHref}
              className="flex items-center justify-center gap-[8px] w-full bg-[#D9722C] text-white font-sans font-bold text-[15px] p-[16px] border-0 rounded-[10px] cursor-pointer mb-[10px] no-underline hover:bg-[#B85A1C] transition-colors"
            >
              {t("cta.apply_now")}
            </Link>
            <Link
              href={startHref}
              className="flex items-center justify-center w-full bg-[#F5EFDF] text-[#1C1C1C] font-sans font-bold text-[15px] p-[16px] border border-[#E7DEC7] rounded-[10px] cursor-pointer no-underline hover:bg-[#EFE7D3] transition-colors"
            >
              {t("cta.contact_us")}
            </Link>
            <div className="text-center text-[12.5px] text-[#8F8A7C] mt-[14px]">
              {t("cta.note")}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
