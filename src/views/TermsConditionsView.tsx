import type { Metadata } from "next";
import {
  Shield,
  FileText,
  Settings,
  AlertTriangle,
  UserCheck,
  CheckSquare,
  Smartphone,
  Link as LinkIcon,
  Bot,
  Scale,
  AlertCircle,
  Database,
  StopCircle,
  Edit3,
  MapPin,
  Home,
  Info,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import TermsTocNav from "@/components/site/Legal/TermsTocNav";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function getTermsConditionsMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "TermsConditions.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/terms-conditions/"
    : "https://www.myloandesk.com/terms-conditions/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/terms-conditions/",
        es: "https://www.myloandesk.com/es/terms-conditions/",
        "x-default": "https://www.myloandesk.com/terms-conditions/",
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

export default async function TermsConditionsView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "TermsConditions",
  });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const termsHref = isEs ? "/es/terms-conditions" : "/terms-conditions";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/terms-conditions/"
    : "https://www.myloandesk.com/terms-conditions/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.terms_conditions"), url: termsHref },
  ];

  const termsConditionsSchema = {
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
    ],
  };

  const tocItems = [
    { id: "section-1", label: t("toc.s1") },
    { id: "section-2", label: t("toc.s2") },
    { id: "section-3", label: t("toc.s3") },
    { id: "section-4", label: t("toc.s4") },
    { id: "section-5", label: t("toc.s5") },
    { id: "section-6", label: t("toc.s6") },
    { id: "section-7", label: t("toc.s7") },
    { id: "section-8", label: t("toc.s8") },
    { id: "section-9", label: t("toc.s9") },
    { id: "section-10", label: t("toc.s10") },
    { id: "section-11", label: t("toc.s11") },
    { id: "section-12", label: t("toc.s12") },
    { id: "section-13", label: t("toc.s13") },
    { id: "section-14", label: t("toc.s14") },
    { id: "section-15", label: t("toc.s15") },
    { id: "section-16", label: t("toc.s16") },
    { id: "section-17", label: t("toc.s17") },
    { id: "section-18", label: t("toc.s18") },
    { id: "section-19", label: t("toc.s19") },
  ];

  const s2List = t.raw("sections.s2.list") as string[];
  const s3List = t.raw("sections.s3.list") as string[];
  const s4List = t.raw("sections.s4.list") as string[];
  const s5List = t.raw("sections.s5.list") as string[];
  const s6List1 = t.raw("sections.s6.list1") as string[];
  const s6List2 = t.raw("sections.s6.list2") as string[];
  const s7List = t.raw("sections.s7.list") as string[];
  const s8List = t.raw("sections.s8.list") as string[];
  const s9List = t.raw("sections.s9.list") as string[];
  const s11List = t.raw("sections.s11.list") as string[];
  const s12List = t.raw("sections.s12.list") as string[];

  return (
    <main className="min-h-screen bg-primary-bg pt-32 pb-24">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsConditionsSchema),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-24 flex flex-col items-center">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-6 flex items-center justify-center gap-2">
            <Shield size={14} strokeWidth={2.5} />
            {t("badge")}
          </div>
          <h1
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-display text-ink leading-[1.05] tracking-tight mb-6 text-center",
              fraunces.className,
            )}
          >
            {t("heading")}
          </h1>
          <div className="text-lg text-ink-2 leading-relaxed space-y-4 text-center">
            <p>{t("intro_p1")}</p>
            <p className="font-medium text-ink">{t("intro_p2")}</p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-moss-deep"></span>
            {t("effective_date_label")} {t("effective_date_value")}
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Sticky Table of Contents */}
          <TermsTocNav
            tocTitle={t("toc_title")}
            items={tocItems}
            inquiriesTitle={t("inquiries_card.title")}
            inquiriesDesc={t("inquiries_card.description")}
            email="info@myloandesk.com"
          />

          {/* Right Column: Legal Prose */}
          <div className="lg:col-span-8 space-y-16">
            {/* SECTION 1 */}
            <section id="section-1" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Info size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s1.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s1.p1")}</p>
                <p>{t("sections.s1.p2")}</p>
                <p>{t("sections.s1.p3")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 2 */}
            <section id="section-2" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Briefcase size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s2.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s2.p1")}</p>
                <p>{t("sections.s2.p2")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  {s2List.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s2.p3")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 3 */}
            <section id="section-3" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <AlertTriangle size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s3.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s3.p1")}</p>
                <p>{t("sections.s3.p2")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  {s3List.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s3.p3")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 4 */}
            <section id="section-4" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <UserCheck size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s4.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s4.p1")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  {s4List.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s4.p2")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 5 */}
            <section id="section-5" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <CheckSquare size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s5.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s5.p1")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  {s5List.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 6 */}
            <section id="section-6" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Smartphone size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s6.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s6.p1")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  {s6List1.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s6.p2")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  {s6List2.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s6.p3")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 7 */}
            <section id="section-7" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <LinkIcon size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s7.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s7.p1")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  {s7List.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s7.p2")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 8 */}
            <section id="section-8" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <FileText size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s8.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s8.p1")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  {s8List.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s8.p2")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 9 */}
            <section id="section-9" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Bot size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s9.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s9.p1")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  {s9List.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s9.p2")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 10 */}
            <section id="section-10" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Shield size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s10.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s10.p1")}</p>
                <p>{t("sections.s10.p2")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 11 */}
            <section id="section-11" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Scale size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s11.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s11.p1")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  {s11List.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s11.p2")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 12 */}
            <section id="section-12" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <AlertCircle size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s12.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s12.p1")}</p>
                <p>{t("sections.s12.p2")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  {s12List.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 13 */}
            <section id="section-13" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Database size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s13.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s13.p1")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 14 */}
            <section id="section-14" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <StopCircle size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s14.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s14.p1")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 15 */}
            <section id="section-15" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Edit3 size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s15.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s15.p1")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 16 */}
            <section id="section-16" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Scale size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s16.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s16.p1")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 17 */}
            <section id="section-17" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <MapPin size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s17.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  <strong>{t("sections.s17.company")}</strong>
                </p>
                <ul className="list-none space-y-2">
                  <li>{t("sections.s17.website")}</li>
                  <li>{t("sections.s17.email")}</li>
                  <li>Phone {t("sections.s17.phone")}</li>
                  <li>Address {t("sections.s17.address")}</li>
                </ul>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 18 */}
            <section id="section-18" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Home size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s18.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s18.p1")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 19 */}
            <section id="section-19" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <FileText size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  {t("sections.s19.title")}
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>{t("sections.s19.p1")}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
