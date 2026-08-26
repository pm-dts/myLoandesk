import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  AlertCircle,
  Clock,
  FileText,
  Phone,
  FileCheck,
} from "lucide-react";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

import Calculator from "@/components/site/Home/Calculator";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import LenderMarquee from "@/components/site/Home/LenderMarquee";
import Faq from "@/components/site/Home/FAQ";
import PreQualified from "@/components/site/Home/ApplicationForm";
import CalculatorSection from "@/components/site/Home/CalculatorSection";
import RateAlert from "@/components/site/Home/RateAlert";
import HeroSmallIcons from "@/components/site/Home/HeroSmallIcons";
import LoansSection from "@/components/site/Home/LoanCards";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "MyLoanDesk | Compare Tasas Hipotecarias y Préstamos en EE. UU."
      : "MyLoanDesk | Compare Wholesale Mortgage Rates & Home Loan Options",
    description: isEs
      ? "Acceda a cientos de soluciones hipotecarias a través de nuestra red crediticia nacional. Comparamos opciones, negociamos tasas competitivas y cerramos en tan solo 10 a 28 días."
      : "Access hundreds of mortgage solutions through our nationwide lending network. Compare loan options, negotiate competitive rates, and close in as little as 10–28 days.",
    alternates: {
      canonical: isEs
        ? "https://www.myloandesk.com/es/"
        : "https://www.myloandesk.com/",
      languages: {
        en: "https://www.myloandesk.com/",
        es: "https://www.myloandesk.com/es/",
        "x-default": "https://www.myloandesk.com/",
      },
    },
    openGraph: {
      title: isEs
        ? "MyLoanDesk | Compare Tasas Hipotecarias y Préstamos en EE. UU."
        : "MyLoanDesk | Compare Wholesale Mortgage Rates & Home Loan Options",
      description: isEs
        ? "Acceda a cientos de soluciones hipotecarias a través de nuestra red nacional. Comparamos opciones y gestionamos cada paso."
        : "Access hundreds of mortgage solutions through our nationwide lending network. We compare options, negotiate competitive rates, and manage every step.",
      url: isEs
        ? "https://www.myloandesk.com/es/"
        : "https://www.myloandesk.com/",
      type: "website",
      images: [
        {
          url: "/og-image.jpeg",
          width: 1200,
          height: 630,
          alt: "MyLoanDesk | Compare Wholesale Mortgage Rates",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isEs
        ? "MyLoanDesk | Compare Tasas Hipotecarias y Préstamos en EE. UU."
        : "MyLoanDesk | Compare Wholesale Mortgage Rates & Home Loan Options",
      description: isEs
        ? "Acceda a cientos de soluciones hipotecarias a través de nuestra red nacional. Compare opciones y cierre en 10-28 días."
        : "Access hundreds of mortgage solutions through our nationwide lending network. Compare loan options, negotiate competitive rates, and close in as little as 10–28 days.",
      images: ["/og-image.jpeg"],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === "es";

  const tHero = await getTranslations({ locale, namespace: "Home.Hero" });
  const tRates = await getTranslations({
    locale,
    namespace: "Home.RatesWidget",
  });
  const tStats = await getTranslations({ locale, namespace: "Home.Stats" });
  const tProcess = await getTranslations({ locale, namespace: "Home.Process" });
  const tWhy = await getTranslations({ locale, namespace: "Home.Why" });
  const tStories = await getTranslations({ locale, namespace: "Home.Stories" });
  const tFaq = await getTranslations({ locale, namespace: "Home.FAQ" });

  const pageUrl = isEs
    ? "https://www.myloandesk.com/es"
    : "https://www.myloandesk.com";

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: isEs
          ? "MyLoanDesk | Compare Tasas Hipotecarias y Préstamos en EE. UU."
          : "MyLoanDesk | Compare Wholesale Mortgage Rates & Home Loan Options",
        description: isEs
          ? "Acceda a cientos de soluciones hipotecarias a través de nuestra red crediticia nacional. Comparamos opciones, negociamos tasas competitivas y cerramos en tan solo 10 a 28 días."
          : "Access hundreds of mortgage solutions through our nationwide lending network. Compare loan options, negotiate competitive rates, and close in as little as 10–28 days.",
        isPartOf: {
          "@id": "https://www.myloandesk.com/#website",
        },
        about: {
          "@id": "https://www.myloandesk.com/#organization",
        },
      },
      {
        "@type": "MortgageBroker",
        "@id": "https://www.myloandesk.com/#organization",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.9,
          bestRating: 5,
          worstRating: 1,
          ratingCount: 2300,
          reviewCount: 2300,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: isEs ? "Inicio" : "Home",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq-schema`,
        mainEntity: [
          {
            "@type": "Question",
            name: tFaq("q1.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: tFaq("q1.answer"),
            },
          },
          {
            "@type": "Question",
            name: tFaq("q2.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: tFaq("q2.answer"),
            },
          },
          {
            "@type": "Question",
            name: tFaq("q3.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: tFaq("q3.answer"),
            },
          },
          {
            "@type": "Question",
            name: tFaq("q4.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: tFaq("q4.answer"),
            },
          },
          {
            "@type": "Question",
            name: tFaq("q5.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: tFaq("q5.answer"),
            },
          },
          {
            "@type": "Question",
            name: tFaq("q6.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: tFaq("q6.answer"),
            },
          },
          {
            "@type": "Question",
            name: tFaq("q7.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: tFaq("q7.answer"),
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-primary-bg pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }}
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="max-w-xl">
            <HeroSmallIcons />

            {/* Headline */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl ${fraunces.className} text-ink leading-[1.1] tracking-tight mt-2 mb-6`}
            >
              {tHero("headline_start")}{" "}
              <em className="text-moss-deep italic font-serif">
                {tHero("headline_italic")}
              </em>{" "}
              {tHero("headline_end")}
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-ink-2 leading-relaxed mb-10">
              {tHero("subheadline")}
            </p>

            {/* Actions & Social Proof Container */}
            <div className="flex flex-col gap-8">
              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  className="btn-shine bg-brand-orange text-primary-bg px-7 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors focus-ring"
                >
                  {tHero("cta_apply")}
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#calculator"
                  className="btn-shine bg-cream text-ink px-7 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 border border-transparent hover:border-moss-deep/60 transition-colors focus-ring duration-200"
                >
                  {tHero("cta_calculator")}
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Social Proof (Avatars & Rating) */}
              <div className="flex items-center gap-4">
                {/* Avatar Group */}
                <div className="flex items-center">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80",
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64&q=80",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Satisfied client avatar"
                      className={`w-9 h-9 rounded-full border-2 border-primary-bg object-cover relative z-0 ${
                        i !== 0 ? "-ml-2.5" : ""
                      }`}
                    />
                  ))}
                  {/* +2k Badge */}
                  <div className="w-9 h-9 rounded-full border-2 border-primary-bg bg-moss-deep text-primary-bg flex items-center justify-center text-[11px] font-medium -ml-2.5 relative z-10">
                    +2k
                  </div>
                </div>

                {/* Rating Info */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2.5">
                    {/* Stars */}
                    <div className="flex gap-0.5 text-[#D4A373]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          fill="currentColor"
                          className="text-current"
                        />
                      ))}
                    </div>
                    {/* Score */}
                    <span className="font-semibold text-ink text-sm">
                      {tHero("rating_score")}
                    </span>
                  </div>
                  {/* Subtitle */}
                  <span className="text-sm text-ink-2 mt-0.5">
                    {tHero("rating_subtitle")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Component */}
          <div className="relative w-full max-w-xl mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-[#E8E4D8] rounded-3xl transform rotate-2 translate-x-3 translate-y-3 -z-10"></div>
            <div className="relative z-10">
              <Calculator />
            </div>
          </div>
        </div>
      </section>

      {/* Loans Cards */}
      <LoansSection />

      <section className="py-10 px-4 sm:px-6 flex flex-col items-center gap-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-2">
          <h2
            className={`${fraunces.className} text-3xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink tracking-tight`}
          >
            {tRates("title")}
          </h2>
        </div>

        {/* Optimal Blue Widget */}
        <div
          className="p-4 rounded-2xl bg-cream w-full max-w-[782px] flex flex-col justify-center overflow-hidden border border-line/30 shadow-sm"
          id="live-rates-widget"
        >
          <iframe
            src="https://www2.optimalblue.com/OBMMI/widgetConfig.php?actbg=2a3f38&inactbg=fdf9f2&inacttext=2a3f38&hoverBG=fdf9f2&hoverColor=2a3f38&rate=2a3f38&graph1=2a3f38&graph2=f57126"
            width="750"
            height="502"
            frameBorder="0"
            title="Daily Average US Mortgage Rates Widget"
            className="max-w-full"
          ></iframe>
          <div className="bg-cream/40 rounded-2xl border border-line/50 p-6 sm:p-8 flex flex-col items-start md:items-center justify-between gap-6 w-full max-w-[782px]">
            {/* Warning Disclaimer Box */}
            <div className="flex gap-3 max-w-xl">
              <AlertCircle
                className="text-brand-orange shrink-0 mt-0.5"
                size={18}
                strokeWidth={2.2}
              />
              <p className="text-xs text-ink-2 leading-relaxed">
                {tRates("disclaimer")}
              </p>
            </div>

            {/* Action Callout Box */}
            <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto border-t md:border-t-0 border-line/40 pt-4 md:pt-0">
              <span className="text-[10px] text-center sm:text-xs font-semibold uppercase tracking-wider text-ink-2/80">
                {tRates("quote_label")}
              </span>
              <Link
                href={isEs ? "/es/get-quote" : "/get-quote"}
                className="btn-shine w-full md:w-auto bg-brand-orange text-primary-bg px-6 py-3 rounded-full text-sm mt-2 font-bold tracking-wide text-center hover:bg-orange-600 transition-colors focus-ring shadow-sm"
              >
                {tRates("quote_button")}
              </Link>
              <p className="text-xs text-ink-2 text-center mt-2">
                {tRates("quote_description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <RateAlert />
      </section>

      <section className="px-6 lg:px-10 border-t border-b border-line py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between items-center">
          <div>
            <AnimatedCounter
              value={2.4}
              duration={2000}
              decimals={1}
              prev={tStats("funded_prefix")}
              next={tStats("funded_suffix")}
              className={cn("text-5xl text-ink", fraunces.className)}
            />
            <p className="mt-2 text-ink-2">{tStats("funded_label")}</p>
          </div>
          <div>
            <AnimatedCounter
              value={12400}
              duration={2000}
              decimals={0}
              next={tStats("loans_suffix")}
              className={cn("text-5xl text-ink", fraunces.className)}
            />
            <p className="mt-2 text-ink-2">{tStats("loans_label")}</p>
          </div>
          <div>
            <AnimatedCounter
              value={23}
              duration={2000}
              decimals={0}
              next={tStats("days_suffix")}
              className={cn("text-5xl text-ink", fraunces.className)}
            />
            <p className="mt-2 text-ink-2">{tStats("days_label")}</p>
          </div>
          <div>
            <AnimatedCounter
              value={4.9}
              duration={2000}
              decimals={1}
              next={tStats("rating_suffix")}
              className={cn("text-5xl text-ink", fraunces.className)}
            />
            <p className="mt-2 text-ink-2">{tStats("rating_label")}</p>
          </div>
        </div>
      </section>

      <CalculatorSection />

      <section
        id="process"
        className="py-24 lg:py-32 bg-cream/30 border-y border-line"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header Row */}
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-5">
                {tProcess("section_badge")}
              </div>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.02] tracking-tight font-light text-ink">
                {tProcess("heading_start")}{" "}
                <em className="not-italic font-serif italic text-moss-deep">
                  {tProcess("heading_italic")}
                </em>{" "}
                {tProcess("heading_end")}
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-lg text-ink-2 leading-relaxed">
                {tProcess("subheading")}
              </p>
            </div>
          </div>

          {/* 1px Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden shadow-sm">
            {/* Step 01 */}
            <div className="bg-primary-bg p-7 lg:p-8 transition-colors duration-300 hover:bg-cream">
              <div className="flex items-center justify-between mb-7">
                <span className="font-display text-5xl text-moss-deep font-light">
                  01
                </span>
                <span className="text-[10px] uppercase tracking-widest text-ink-2 font-medium">
                  {tProcess("step1.badge")}
                </span>
              </div>
              <h3 className="font-display text-xl mb-3 text-ink">
                {tProcess("step1.title")}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                {tProcess("step1.description")}
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-primary-bg p-7 lg:p-8 transition-colors duration-300 hover:bg-cream">
              <div className="flex items-center justify-between mb-7">
                <span className="font-display text-5xl text-moss-deep font-light">
                  02
                </span>
                <span className="text-[10px] uppercase tracking-widest text-ink-2 font-medium">
                  {tProcess("step2.badge")}
                </span>
              </div>
              <h3 className="font-display text-xl mb-3 text-ink">
                {tProcess("step2.title")}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                {tProcess("step2.description")}
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-primary-bg p-7 lg:p-8 transition-colors duration-300 hover:bg-cream">
              <div className="flex items-center justify-between mb-7">
                <span className="font-display text-5xl text-moss-deep font-light">
                  03
                </span>
                <span className="text-[10px] uppercase tracking-widest text-ink-2 font-medium">
                  {tProcess("step3.badge")}
                </span>
              </div>
              <h3 className="font-display text-xl mb-3 text-ink">
                {tProcess("step3.title")}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                {tProcess("step3.description")}
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-primary-bg p-7 lg:p-8 transition-colors duration-300 hover:bg-cream">
              <div className="flex items-center justify-between mb-7">
                <span className="font-display text-5xl text-moss-deep font-light">
                  04
                </span>
                <span className="text-[10px] uppercase tracking-widest text-ink-2 font-medium">
                  {tProcess("step4.badge")}
                </span>
              </div>
              <h3 className="font-display text-xl mb-3 text-ink">
                {tProcess("step4.title")}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                {tProcess("step4.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why"
        className="py-24 lg:py-32 text-ink relative overflow-hidden dotted-bg"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Copy & Testimonial */}
            <div className="lg:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A574] font-semibold mb-6">
                {tWhy("section_badge")}
              </div>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.04] tracking-tight font-light">
                {tWhy("heading_start")}{" "}
                <em className="font-serif italic text-ink">
                  {tWhy("heading_italic")}
                </em>{" "}
                {tWhy("heading_end")}
              </h2>
              <p className="mt-7 text-ink/70 text-lg leading-relaxed">
                {tWhy("subheading")}
              </p>

              {/* Testimonial Card */}
              <div className="mt-10 p-6 bg-cream/5 border border-cream/15 rounded-2xl backdrop-blur-sm">
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  className="mb-4 opacity-50"
                >
                  <path
                    d="M0 24V12C0 5.4 5.4 0 12 0v4C7.6 4 4 7.6 4 12h4v12H0zm16 0V12C16 5.4 21.4 0 28 0v4c-4.4 0-8 3.6-8 8h4v12h-8z"
                    fill="#D4A574"
                  />
                </svg>
                <p className="font-display text-xl leading-snug italic">
                  {tWhy("testimonial_quote")}
                </p>
                <div className="mt-4 text-sm text-ink/60">
                  {tWhy("testimonial_author")}
                </div>
              </div>
            </div>

            {/* Right Column: Feature Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="p-7 bg-cream/5 border border-cream/12 rounded-2xl transition-all duration-300 hover:bg-cream/10 hover:border-[#D4A574]/30 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 flex items-center justify-center mb-5">
                  <Clock className="text-[#D4A574]" size={20} strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl mb-2">
                  {tWhy("features.independent.title")}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed">
                  {tWhy("features.independent.description")}
                </p>
              </div>

              <div className="p-7 bg-cream/5 border border-cream/12 rounded-2xl transition-all duration-300 hover:bg-cream/10 hover:border-[#D4A574]/30 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 flex items-center justify-center mb-5">
                  <FileText
                    className="text-[#D4A574]"
                    size={20}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-display text-xl mb-2">
                  {tWhy("features.transparent.title")}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed">
                  {tWhy("features.transparent.description")}
                </p>
              </div>

              <div className="p-7 bg-cream/5 border border-cream/12 rounded-2xl transition-all duration-300 hover:bg-cream/10 hover:border-[#D4A574]/30 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 flex items-center justify-center mb-5">
                  <Phone className="text-[#D4A574]" size={20} strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl mb-2">
                  {tWhy("features.direct_line.title")}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed">
                  {tWhy("features.direct_line.description")}
                </p>
              </div>

              <div className="p-7 bg-cream/5 border border-cream/12 rounded-2xl transition-all duration-300 hover:bg-cream/10 hover:border-[#D4A574]/30 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 flex items-center justify-center mb-5">
                  <FileCheck
                    className="text-[#D4A574]"
                    size={20}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-display text-xl mb-2">
                  {tWhy("features.fast_close.title")}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed">
                  {tWhy("features.fast_close.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stories" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-5">
                {tStories("section_badge")}
              </div>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.02] tracking-tight font-light text-ink">
                {tStories("heading_start")}{" "}
                <em className="not-italic font-serif italic text-moss-deep">
                  {tStories("heading_italic")}
                </em>{" "}
                {tStories("heading_end")}
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-lg text-ink-2 leading-relaxed">
                {tStories("subheading")}
              </p>
            </div>
          </div>

          {/* Testimonials Embed */}
          <div className="w-full mx-auto relative mt-8" id="reviews">
            <div className="absolute inset-0 bg-[#E8E4D8] rounded-[24px] sm:rounded-[32px] transform -rotate-1 -translate-x-1.5 translate-y-1.5 sm:-translate-x-2 sm:translate-y-2 -z-10"></div>
            <div className="relative z-10 bg-primary-bg border border-line rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(15,61,46,0.2)]">
              <iframe
                className="w-full h-[900px] sm:h-[700px]"
                title="Google Review"
                name="htmlComp-iframe"
                allowFullScreen={true}
                src="https://www-myloandesk-com.filesusr.com/html/d6795e_7eed3b5b6329633be8de74d6c024f51a.html"
                style={{ border: "none", display: "block" }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <PreQualified />
      <LenderMarquee />
    </main>
  );
}
