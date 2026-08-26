import { ArrowRight, Briefcase, Target, Eye, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import teamImg from "@/assets/Team_Meeting.jpeg";
import meetingImg from "@/assets/Meeting_At_The_Office.jpeg";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function getCareersMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({ locale, namespace: "Careers.meta" });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/careers/"
    : "https://www.myloandesk.com/careers/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/careers/",
        es: "https://www.myloandesk.com/es/careers/",
        "x-default": "https://www.myloandesk.com/careers/",
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

export default async function CareersView({ locale }: { locale: "en" | "es" }) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Careers" });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const careersHref = isEs ? "/es/careers" : "/careers";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/careers/"
    : "https://www.myloandesk.com/careers/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.careers"), url: careersHref },
  ];

  const careersPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t("schema.webpage_name"),
        description: t("schema.webpage_description"),
        isPartOf: {
          "@id": "https://www.myloandesk.com/#website",
        },
        about: {
          "@id": "https://www.myloandesk.com/#organization",
        },
      },
      {
        "@type": "JobPosting",
        "@id": `${pageUrl}#job-originator`,
        title: t("schema.job_title"),
        description: t("schema.job_description"),
        datePosted: "2026-01-01",
        employmentType: "FULL_TIME",
        hiringOrganization: {
          "@id": "https://www.myloandesk.com/#organization",
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1801 NE 123rd St, Suite 314",
            addressLocality: "North Miami",
            addressRegion: "FL",
            postalCode: "33181",
            addressCountry: "US",
          },
        },
        applicantLocationRequirements: {
          "@type": "Country",
          name: "United States",
        },
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
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(careersPageSchema),
        }}
      />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-12 sm:mb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div className="max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              {t("hero.badge")}
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-6xl lg:text-7xl ${fraunces.className} text-ink leading-[1.15] tracking-tight mt-6 mb-4 sm:mb-6`}
            >
              {t("hero.headline")}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-ink-2 leading-relaxed mb-8 sm:mb-10">
              {t("hero.subheadline")}
            </p>

            {/* Action Buttons */}
            <div className="w-full sm:w-auto">
              <a
                href="#apply-form"
                className="btn-shine w-full sm:w-auto bg-brand-orange text-primary-bg px-7 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors focus-ring"
              >
                {t("hero.cta_button")}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Column Architectural Graphic Container */}
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:ml-auto lg:mr-0 mt-6 lg:mt-0 px-2 sm:px-0">
            {/* Underlying structural shadow offset layer */}
            <div className="absolute inset-0 bg-[#E8E4D8] rounded-[32px] transform -rotate-2 -translate-x-2 translate-y-2 sm:-translate-x-3 sm:translate-y-3 -z-10"></div>

            {/* Core Premium Card Structure with Gradients matching Application Box */}
            <div className="relative z-10 bg-moss-deep text-cream h-[280px] sm:h-[340px] rounded-[32px] overflow-hidden p-6 sm:p-10 flex flex-col justify-end shadow-2xl">
              {/* Embedded top-right ambient background glow from design spec */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A574]/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4A574] font-semibold mb-4 relative z-10">
                {t("hero.card_badge")}
              </span>

              <p
                className={cn(
                  "text-2xl sm:text-3xl font-light leading-[1.15] tracking-tight text-primary-bg relative z-10",
                  fraunces.className,
                )}
              >
                {t("hero.card_text_start")}{" "}
                <em className="not-italic font-serif italic text-primary-bg">
                  {t("hero.card_text_italic")}
                </em>{" "}
                {t("hero.card_text_end")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy & Image 1 Section */}
      <section className="py-16 sm:py-24 lg:py-32 border-t border-line bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
            {/* Left Narrative */}
            <div className="lg:col-span-6 max-w-xl text-center sm:text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-4 sm:mb-5">
                {t("why_join.badge")}
              </div>
              <h2
                className={cn(
                  "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light leading-tight mb-4 sm:mb-6",
                  fraunces.className,
                )}
              >
                {t("why_join.heading")}
              </h2>
              <p className="text-ink-2 text-sm leading-relaxed mb-4 sm:mb-6">
                {t("why_join.p1")}
              </p>
              <p className="text-ink-2 text-sm leading-relaxed">
                {t("why_join.p2")}
              </p>
            </div>

            {/* Right Side: First Image Component (Team Workspace) */}
            <div className="lg:col-span-6 w-full">
              <div className="relative aspect-9/16 w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-line bg-primary-bg group">
                <Image
                  src={teamImg}
                  alt={t("images_alt.team")}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Value Highlights Subgrid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
            {/* Highlight Item 1 */}
            <article className="bg-primary-bg border border-line rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-moss-deep/30">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-moss-deep" size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-ink">
                    {t("why_join.item1_title")}
                  </h3>
                  <p className="text-xs text-ink-2 leading-relaxed">
                    {t("why_join.item1_description")}
                  </p>
                </div>
              </div>
            </article>

            {/* Highlight Item 2 */}
            <article className="bg-primary-bg border border-line rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-moss-deep/30">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-brand-orange" size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-ink">
                    {t("why_join.item2_title")}
                  </h3>
                  <p className="text-xs text-ink-2 leading-relaxed">
                    {t("why_join.item2_description")}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Mission & Vision Blueprint Section */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-primary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 lg:gap-16">
            {/* Mission Panel */}
            <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-line bg-cream/10 flex flex-col justify-between text-center sm:text-left items-center sm:items-start">
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-12 h-12 rounded-2xl bg-moss-deep text-primary-bg flex items-center justify-center mb-6 sm:mb-8">
                  <Target size={24} strokeWidth={1.5} />
                </div>
                <h3
                  className={cn(
                    "text-2xl sm:text-3xl font-light text-ink mb-3 sm:mb-4",
                    fraunces.className,
                  )}
                >
                  {t("blueprint.mission_title")}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed">
                  {t("blueprint.mission_description")}
                </p>
              </div>
            </div>

            {/* Vision Panel */}
            <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-line bg-cream/10 flex flex-col justify-between text-center sm:text-left items-center sm:items-start">
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange text-primary-bg flex items-center justify-center mb-6 sm:mb-8">
                  <Eye size={24} strokeWidth={1.5} />
                </div>
                <h3
                  className={cn(
                    "text-2xl sm:text-3xl font-light text-ink mb-3 sm:mb-4",
                    fraunces.className,
                  )}
                >
                  {t("blueprint.vision_title")}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed">
                  {t("blueprint.vision_description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded LeadConnector Form Section */}
      <section
        id="apply-form"
        className="py-16 sm:py-24 lg:py-32 bg-primary-bg scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-6 sm:p-12 lg:p-16">
            {/* Background Glow Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Careers Text Copy & Sticky Layout */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A574] font-semibold mb-5">
                    {t("form_section.badge")}
                  </div>
                  <h2
                    className={cn(
                      "text-4xl sm:text-5xl lg:text-6xl leading-[1.04] tracking-tight font-light text-primary-bg",
                      fraunces.className,
                    )}
                  >
                    {t("form_section.heading_start")}{" "}
                    <em className="not-italic font-serif italic text-primary-bg">
                      {t("form_section.heading_italic")}
                    </em>
                  </h2>
                  <p className="mt-6 text-base sm:text-lg text-primary-bg/75 max-w-xl leading-relaxed">
                    {t("form_section.subheading")}
                  </p>
                </div>

                {/* Taller Image Treatment */}
                <div className="mt-10 w-full hidden lg:block flex-1">
                  <div className="relative aspect-[3/4] xl:aspect-[4/5] w-full overflow-hidden rounded-2xl border border-primary-bg/10 group">
                    <Image
                      src={meetingImg}
                      alt={t("images_alt.meeting")}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="40vw"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Embedded LeadConnector Form */}
              <div className="lg:col-span-7 relative z-10 w-full bg-primary-bg rounded-2xl shadow-2xl overflow-hidden min-h-[600px] flex items-center justify-center">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/Ro5IWlTefHrrIvbe2Wyj?notrack=true"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    minHeight: "650px",
                  }}
                  id="inline-Ro5IWlTefHrrIvbe2Wyj"
                  title={t("form_section.form_title")}
                  scrolling="no"
                />
                <script src="https://link.msgsndr.com/js/form_embed.js" async />
              </div>

              {/* Mobile Image Treatment below the form */}
              <div className="w-full block lg:hidden mt-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-primary-bg/10 group">
                  <Image
                    src={meetingImg}
                    alt={t("images_alt.meeting")}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
