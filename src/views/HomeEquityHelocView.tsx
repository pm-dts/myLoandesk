import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Home,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Building2,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import HelocCalculator from "@/components/site/LoanPrograms/HelocLoans/HelocCalculator";
import OpenChatReusableBtn from "@/components/site/LoanPrograms/ReverseMortgage/OpenChatReusableBtn";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const VIDEO_URL =
  "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/HELOC+%E2%80%93+Access+the+Equity+in+Your+Home+Without+Refinancing_1080p_caption.mp4";

export async function getHomeEquityHelocMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "HelocLoans.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/heloc-loans/"
    : "https://www.myloandesk.com/loan-programs/heloc-loans/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/loan-programs/heloc-loans/",
        es: "https://www.myloandesk.com/es/loan-programs/heloc-loans/",
        "x-default": "https://www.myloandesk.com/loan-programs/heloc-loans/",
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

export default async function HomeEquityHelocView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "HelocLoans",
  });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const loanProgramsHref = isEs ? "/es/loan-programs" : "/loan-programs";
  const helocHref = isEs
    ? "/es/loan-programs/heloc-loans"
    : "/loan-programs/heloc-loans";
  const getQuoteHref = isEs ? "/es/get-quote" : "/get-quote";
  const calendarHref = isEs ? "/es/calendar" : "/calendar";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/heloc-loans/"
    : "https://www.myloandesk.com/loan-programs/heloc-loans/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.loan_programs"), url: loanProgramsHref },
    { name: t("breadcrumbs.heloc"), url: helocHref },
  ];

  const helocPageSchema = {
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
        category: "HomeEquityLoan",
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
        ],
      },
    ],
  };

  const helocUseCases = t.raw("two_ways.heloc.use_cases") as string[];
  const homeLoanUseCases = t.raw("two_ways.loan.use_cases") as string[];
  const faqItems = t.raw("faq.items") as { q: string; a: string }[];

  const underwritingCards = [
    {
      title: t("underwriting_variables.cards.0.title"),
      desc: t("underwriting_variables.cards.0.desc"),
      icon: Building2,
    },
    {
      title: t("underwriting_variables.cards.1.title"),
      desc: t("underwriting_variables.cards.1.desc"),
      icon: DollarSign,
    },
    {
      title: t("underwriting_variables.cards.2.title"),
      desc: t("underwriting_variables.cards.2.desc"),
      icon: TrendingUp,
    },
    {
      title: t("underwriting_variables.cards.3.title"),
      desc: t("underwriting_variables.cards.3.desc"),
      icon: ShieldCheck,
    },
    {
      title: t("underwriting_variables.cards.4.title"),
      desc: t("underwriting_variables.cards.4.desc"),
      icon: CheckCircle2,
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(helocPageSchema),
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

            <p className="text-base sm:text-lg text-primary-bg/80 leading-relaxed mb-8 max-w-2xl">
              {t("hero.p1")}
            </p>

            <p className="text-xs sm:text-sm text-primary-bg/70 leading-relaxed mb-8 max-w-2xl">
              {t("hero.p2")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <OpenChatReusableBtn
                loanProgram="Home Equity Loans & HELOCs"
                text={t("hero.cta_chat")}
              />
              <Link
                href={isEs ? "/es/#calculator-heloc" : "/#calculator-heloc"}
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                {t("hero.cta_calc")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS HOME EQUITY? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              {t("fundamentals.badge")}
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light leading-tight mb-6",
                fraunces.className,
              )}
            >
              {t("fundamentals.heading")}
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              {t("fundamentals.p1")}
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              {t("fundamentals.p2")}
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
              {t("fundamentals.example_title")}
            </div>
            <div className="space-y-3 my-4">
              <div className="flex justify-between text-sm">
                <span className="text-ink-2">
                  {t("fundamentals.current_value_label")}
                </span>
                <span className="font-semibold text-ink">$700,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-2">
                  {t("fundamentals.mortgage_balance_label")}
                </span>
                <span className="font-semibold text-ink">-$350,000</span>
              </div>
              <div className="border-t border-line/60 pt-2 flex justify-between text-base font-bold text-moss-deep">
                <span>{t("fundamentals.approx_equity_label")}</span>
                <span>$350,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TWO WAYS TO ACCESS YOUR EQUITY --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              {t("two_ways.badge")}
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink",
                fraunces.className,
              )}
            >
              {t("two_ways.heading")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* HELOC Card */}
            <div className="bg-primary-bg border border-line rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-moss-deep/10 text-moss-deep text-xs font-semibold mb-4">
                  {t("two_ways.heloc.badge")}
                </div>
                <h3
                  className={cn(
                    "text-2xl font-light text-ink mb-4",
                    fraunces.className,
                  )}
                >
                  {t("two_ways.heloc.title")}
                </h3>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
                  {t("two_ways.heloc.p1")}
                </p>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
                  {t("two_ways.heloc.p2")}
                </p>

                <h4 className="text-xs font-semibold uppercase tracking-wider text-ink mb-3">
                  {t("two_ways.heloc.useful_for_title")}
                </h4>
                <ul className="space-y-2 mb-6">
                  {helocUseCases.map((useCase, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-ink-2"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-moss-deep shrink-0 mt-0.5"
                      />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={getQuoteHref}
                className="btn-shine bg-moss-deep text-primary-bg py-3 px-6 rounded-full font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2"
              >
                {t("two_ways.heloc.cta_button")}
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Home Equity Loan Card */}
            <div className="bg-primary-bg border border-line rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold mb-4">
                  {t("two_ways.loan.badge")}
                </div>
                <h3
                  className={cn(
                    "text-2xl font-light text-ink mb-4",
                    fraunces.className,
                  )}
                >
                  {t("two_ways.loan.title")}
                </h3>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
                  {t("two_ways.loan.p1")}
                </p>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
                  {t("two_ways.loan.p2")}
                </p>

                <h4 className="text-xs font-semibold uppercase tracking-wider text-ink mb-3">
                  {t("two_ways.loan.useful_for_title")}
                </h4>
                <ul className="space-y-2 mb-6">
                  {homeLoanUseCases.map((useCase, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-ink-2"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-brand-orange shrink-0 mt-0.5"
                      />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <OpenChatReusableBtn
                className="py-2.5"
                loanProgram="Home Equity Loans & HELOCs"
                text={t("two_ways.loan.cta_button")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- HELOC VS HOME EQUITY LOAN TABLE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            {t("matrix.badge")}
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            {t("matrix.heading")}
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm">
          <table className="w-full text-left text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">
                  {t("matrix.th_feature")}
                </th>
                <th className="px-6 py-4 font-semibold text-moss-deep">
                  {t("matrix.th_heloc")}
                </th>
                <th className="px-6 py-4 font-semibold text-brand-orange">
                  {t("matrix.th_loan")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("matrix.rows.access.feature")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("matrix.rows.access.heloc")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("matrix.rows.access.loan")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("matrix.rows.structure.feature")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("matrix.rows.structure.heloc")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("matrix.rows.structure.loan")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("matrix.rows.rate.feature")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("matrix.rows.rate.heloc")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("matrix.rows.rate.loan")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("matrix.rows.best_suited.feature")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("matrix.rows.best_suited.heloc")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("matrix.rows.best_suited.loan")}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  {t("matrix.rows.first_mortgage.feature")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("matrix.rows.first_mortgage.heloc")}
                </td>
                <td className="px-6 py-4 text-ink-2">
                  {t("matrix.rows.first_mortgage.loan")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-ink-2/70 mt-3 italic">
          {t("matrix.footnote")}
        </p>
      </section>

      {/* --- KEEP YOUR EXISTING FIRST MORTGAGE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/30 border border-line rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
              {t("rate_preservation.badge")}
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("rate_preservation.heading")}
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-4">
              {t("rate_preservation.p1")}
            </p>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              {t("rate_preservation.p2")}
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 text-center">
            <Link
              href={calendarHref}
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm inline-flex items-center justify-center gap-2"
            >
              {t("rate_preservation.cta_button")}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SEE HOW HOME EQUITY FINANCING WORKS (EMBEDDED VIDEO) --- */}
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

          {/* Embedded Video Container */}
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

      {/* --- HOW MUCH EQUITY CAN I ACCESS? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
            {t("underwriting_variables.badge")}
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            {t("underwriting_variables.heading")}
          </h2>
          <p className="text-xs sm:text-sm text-ink-2 mt-2">
            {t("underwriting_variables.subheading")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {underwritingCards.map((item, idx) => (
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

      {/* --- HELOC CALCULATOR (CLIENT COMPONENT) --- */}
      <HelocCalculator pagePath={helocHref} locale={locale} />

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
            <OpenChatReusableBtn
              loanProgram="Home Equity Loans & HELOCs"
              text={t("bottom_cta.cta_button")}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
