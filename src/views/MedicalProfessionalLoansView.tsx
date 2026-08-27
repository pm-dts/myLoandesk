import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Stethoscope,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  FileCheck,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import MedicalProfessionalCalculator from "@/components/site/LoanPrograms/MedicalProfessionalLoans/MedicalProfessionalCalculator";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function getMedicalProfessionalLoansMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "MedicalProfessionalLoans.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/medical-professional-loans/"
    : "https://www.myloandesk.com/loan-programs/medical-professional-loans/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/loan-programs/medical-professional-loans/",
        es: "https://www.myloandesk.com/es/loan-programs/medical-professional-loans/",
        "x-default":
          "https://www.myloandesk.com/loan-programs/medical-professional-loans/",
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

export default async function MedicalProfessionalLoansView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "MedicalProfessionalLoans",
  });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const loanProgramsHref = isEs ? "/es/loan-programs" : "/loan-programs";
  const medicalLoansHref = isEs
    ? "/es/loan-programs/medical-professional-loans"
    : "/loan-programs/medical-professional-loans";
  const getQuoteHref = isEs ? "/es/get-quote" : "/get-quote";
  const calendarHref = isEs ? "/es/calendar" : "/calendar";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/loan-programs/medical-professional-loans/"
    : "https://www.myloandesk.com/loan-programs/medical-professional-loans/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.loan_programs"), url: loanProgramsHref },
    { name: t("breadcrumbs.medical_loans"), url: medicalLoansHref },
  ];

  const medicalPageSchema = {
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

  const eligibleProfessions = t.raw(
    "overview.side_card.professions",
  ) as string[];
  const faqItems = t.raw("faq.items") as { q: string; a: string }[];

  const advantageCards = [
    {
      title: t("advantages.cards.0.title"),
      desc: t("advantages.cards.0.desc"),
      icon: TrendingUp,
    },
    {
      title: t("advantages.cards.1.title"),
      desc: t("advantages.cards.1.desc"),
      icon: GraduationCap,
    },
    {
      title: t("advantages.cards.2.title"),
      desc: t("advantages.cards.2.desc"),
      icon: FileCheck,
    },
    {
      title: t("advantages.cards.3.title"),
      desc: t("advantages.cards.3.desc"),
      icon: Sparkles,
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalPageSchema),
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Stethoscope size={14} />
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
              {t("hero.p1")}
            </p>

            <p className="text-xs sm:text-sm text-primary-bg/70 leading-relaxed mb-8 max-w-2xl">
              {t("hero.p2")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={getQuoteHref}
                className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
              >
                {t("hero.cta_quote")}
                <ArrowRight size={18} />
              </Link>
              <a
                href="#calculator"
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Stethoscope size={18} />
                {t("hero.cta_calc")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS A MEDICAL PROFESSIONAL LOAN? --- */}
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

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              {t("overview.p2")}
            </p>

            <p className="text-xs text-ink-2/80 italic">
              {t("overview.footnote")}
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
              {t("overview.side_card.title")}
            </div>
            <p className="text-xs text-ink-2 mb-4">
              {t("overview.side_card.intro")}
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-ink">
              {eligibleProfessions.map((profession, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="text-moss-deep shrink-0 mt-0.5"
                  />
                  <span>{profession}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-line/60 text-xs text-ink-2">
              <strong>{t("overview.side_card.residents_note_label")}</strong>{" "}
              {t("overview.side_card.residents_note_text")}
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY MEDICAL PROFESSIONALS USE THESE PROGRAMS --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              {t("advantages.badge")}
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink",
                fraunces.className,
              )}
            >
              {t("advantages.heading")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantageCards.map((item, idx) => (
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
        </div>
      </section>

      {/* --- BUYING BEFORE YOU START YOUR NEW POSITION? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/30 border border-line rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
              {t("contract_underwriting.badge")}
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("contract_underwriting.heading")}
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-4">
              {t("contract_underwriting.p1")}
            </p>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
              {t("contract_underwriting.p2")}
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 text-center">
            <Link
              href={calendarHref}
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm inline-flex items-center justify-center gap-2"
            >
              {t("contract_underwriting.cta_button")}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- MEDICAL PROFESSIONAL LOAN VS CONVENTIONAL MORTGAGE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              {t("comparison.badge")}
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light leading-tight mb-6",
                fraunces.className,
              )}
            >
              {t("comparison.heading")}
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              {t("comparison.p1")}
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              {t("comparison.p2")}
            </p>
          </div>

          <div className="lg:col-span-5 bg-primary-bg border border-line rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3
              className={cn(
                "text-xl font-semibold text-ink mb-4",
                fraunces.className,
              )}
            >
              {t("comparison.side_card.title")}
            </h3>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-3 bg-cream/40 rounded-xl border border-line/60">
                <strong className="text-ink font-semibold block mb-1">
                  {t("comparison.side_card.student_loan_title")}
                </strong>
                <span className="text-ink-2">
                  {t("comparison.side_card.student_loan_desc")}
                </span>
              </div>
              <div className="p-3 bg-cream/40 rounded-xl border border-line/60">
                <strong className="text-ink font-semibold block mb-1">
                  {t("comparison.side_card.down_payment_title")}
                </strong>
                <span className="text-ink-2">
                  {t("comparison.side_card.down_payment_desc")}
                </span>
              </div>
              <div className="p-3 bg-cream/40 rounded-xl border border-line/60">
                <strong className="text-ink font-semibold block mb-1">
                  {t("comparison.side_card.future_income_title")}
                </strong>
                <span className="text-ink-2">
                  {t("comparison.side_card.future_income_desc")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY MYLOANDESK? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              {t("value_prop.badge")}
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light leading-tight mb-6",
                fraunces.className,
              )}
            >
              {t("value_prop.heading")}
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              {t("value_prop.p1")}
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              {t("value_prop.p2")}
            </p>
          </div>

          <div className="lg:col-span-5 bg-moss-deep text-cream p-8 rounded-3xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A574]/10 rounded-full blur-2xl pointer-events-none" />
            <h3
              className={cn(
                "text-2xl font-light text-primary-bg mb-4",
                fraunces.className,
              )}
            >
              {t("value_prop.side_card.title")}
            </h3>
            <p className="text-xs text-primary-bg/80 leading-relaxed mb-6">
              {t("value_prop.side_card.desc")}
            </p>
            <Link
              href={getQuoteHref}
              className="btn-shine bg-brand-orange text-primary-bg px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-sm"
            >
              {t("value_prop.side_card.cta_button")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- MEDICAL PROFESSIONAL CALCULATOR --- */}
      <MedicalProfessionalCalculator
        pagePath={medicalLoansHref}
        locale={locale}
      />

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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link
              href={getQuoteHref}
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              {t("bottom_cta.cta_button")}
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="text-[11px] text-ink-2/70 mt-6 leading-relaxed italic max-w-2xl mx-auto">
            {t("bottom_cta.disclaimer")}
          </p>
        </div>
      </section>
    </main>
  );
}
