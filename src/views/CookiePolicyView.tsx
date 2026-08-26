import type { Metadata } from "next";
import {
  Shield,
  Settings,
  AlertCircle,
  HelpCircle,
  Database,
  Globe,
  Bot,
  Layers,
  MousePointerClick,
  Monitor,
  Edit3,
  MapPin,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import CookieTocNav from "@/components/site/Legal/CookieNav";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function getCookiePolicyMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({ locale, namespace: "CookiePolicy.meta" });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/cookies-policy/"
    : "https://www.myloandesk.com/cookies-policy/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/cookies-policy/",
        es: "https://www.myloandesk.com/es/cookies-policy/",
        "x-default": "https://www.myloandesk.com/cookies-policy/",
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

export default async function CookiePolicyView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "CookiePolicy" });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const cookiesHref = isEs ? "/es/cookies-policy" : "/cookies-policy";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/cookies-policy/"
    : "https://www.myloandesk.com/cookies-policy/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.cookie_policy"), url: cookiesHref },
  ];

  const cookiePolicySchema = {
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
  ];

  const s1List = t.raw("sections.s1.list") as string[];
  const s2List = t.raw("sections.s2.list") as string[];
  const s3SubAList = t.raw("sections.s3.sub_a_list") as string[];
  const s3SubBList = t.raw("sections.s3.sub_b_list") as string[];
  const s3SubCList = t.raw("sections.s3.sub_c_list") as string[];
  const s3SubCProviders = t.raw("sections.s3.sub_c_providers") as string[];
  const s3SubDList = t.raw("sections.s3.sub_d_list") as string[];
  const s3SubEList = t.raw("sections.s3.sub_e_list") as string[];
  const s4List = t.raw("sections.s4.list") as string[];
  const s5List = t.raw("sections.s5.list") as string[];
  const s6List = t.raw("sections.s6.list") as string[];
  const s7List = t.raw("sections.s7.list") as string[];
  const s8List = t.raw("sections.s8.list") as string[];
  const s13Buttons = t.raw("sections.s13.box_buttons") as string[];

  return (
    <main className="min-h-screen bg-primary-bg pt-32 pb-24">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cookiePolicySchema),
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
              "text-4xl sm:text-5xl lg:text-6xl font-display text-ink leading-[1.05] tracking-tight mb-6",
              fraunces.className,
            )}
          >
            {t("heading")}
          </h1>
          <div className="text-lg text-ink-2 leading-relaxed space-y-4 text-center">
            <p>{t("intro_p1")}</p>
            <p>{t("intro_p2")}</p>
            <p className="font-medium text-ink">{t("intro_p3")}</p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-moss-deep"></span>
            {t("effective_date_label")} {t("effective_date_value")}
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Table of Contents Navigation */}
          <CookieTocNav
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
                  <Database size={20} strokeWidth={2} />
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
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  {s1List.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s1.p3")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 2 */}
            <section id="section-2" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Settings size={20} strokeWidth={2} />
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
                <p>{t("sections.s2.intro")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  {s2List.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 3 */}
            <section id="section-3" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Layers size={20} strokeWidth={2} />
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
                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  {t("sections.s3.sub_a_title")}
                </h3>
                <p>{t("sections.s3.sub_a_p1")}</p>
                <p>{t("sections.s3.sub_a_p2")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  {s3SubAList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s3.sub_a_p3")}</p>
                <p>{t("sections.s3.sub_a_p4")}</p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  {t("sections.s3.sub_b_title")}
                </h3>
                <p>{t("sections.s3.sub_b_p1")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  {s3SubBList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s3.sub_b_p2")}</p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  {t("sections.s3.sub_c_title")}
                </h3>
                <p>{t("sections.s3.sub_c_p1")}</p>
                <p>{t("sections.s3.sub_c_p2")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  {s3SubCList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s3.sub_c_p3")}</p>
                <p>{t("sections.s3.sub_c_p4")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  {s3SubCProviders.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s3.sub_c_p5")}</p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  {t("sections.s3.sub_d_title")}
                </h3>
                <p>{t("sections.s3.sub_d_p1")}</p>
                <p>{t("sections.s3.sub_d_p2")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  {s3SubDList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s3.sub_d_p3")}</p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  {t("sections.s3.sub_e_title")}
                </h3>
                <p>{t("sections.s3.sub_e_p1")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  {s3SubEList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s3.sub_e_p2")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 4 */}
            <section id="section-4" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Globe size={20} strokeWidth={2} />
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
                <p>{t("sections.s4.p2")}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  {s4List.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s4.p3")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 5 */}
            <section id="section-5" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Monitor size={20} strokeWidth={2} />
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
                <p>{t("sections.s5.p2")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 6 */}
            <section id="section-6" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Bot size={20} strokeWidth={2} />
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
                  {s6List.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p>{t("sections.s6.p2")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 7 */}
            <section id="section-7" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <MousePointerClick size={20} strokeWidth={2} />
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
                  <Settings size={20} strokeWidth={2} />
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
                <p>{t("sections.s8.p3")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 9 */}
            <section id="section-9" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <AlertCircle size={20} strokeWidth={2} />
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
                <p>{t("sections.s9.p2")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 10 */}
            <section id="section-10" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <MapPin size={20} strokeWidth={2} />
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
                  <Edit3 size={20} strokeWidth={2} />
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
                <p>{t("sections.s11.p2")}</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 12 */}
            <section id="section-12" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <HelpCircle size={20} strokeWidth={2} />
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
                <ul className="list-none space-y-2">
                  <li>
                    <strong>{t("sections.s12.company")}</strong>
                  </li>
                  <li>
                    <strong>{t("sections.s12.website_label")}</strong>{" "}
                    {t("sections.s12.website_val")}
                  </li>
                  <li>
                    <strong>{t("sections.s12.email_label")}</strong>{" "}
                    <a
                      href={`mailto:${t("sections.s12.email_val")}`}
                      className="underline text-moss-deep hover:text-brand-orange transition-colors"
                    >
                      {t("sections.s12.email_val")}
                    </a>
                  </li>
                  <li>
                    <strong>{t("sections.s12.phone_label")}</strong>{" "}
                    <a
                      href={`tel:${t("sections.s12.phone_val")}`}
                      className="underline text-moss-deep hover:text-brand-orange transition-colors"
                    >
                      {t("sections.s12.phone_val")}
                    </a>
                  </li>
                  <li>
                    <strong>{t("sections.s12.address_label")}</strong>{" "}
                    <span className="whitespace-pre-line">
                      {t("sections.s12.address_val")}
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 13 */}
            <section id="section-13" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Lock size={20} strokeWidth={2} />
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
                <p>{t("sections.s13.intro")}</p>
                <div className="bg-white border border-line rounded-xl p-6 shadow-sm mt-4">
                  <h4 className="font-bold text-ink mb-2">
                    {t("sections.s13.box_heading")}
                  </h4>
                  <p className="text-sm mb-4">{t("sections.s13.box_body")}</p>
                  <p className="text-sm font-semibold mb-2">
                    {t("sections.s13.box_buttons_label")}
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {s13Buttons.map((btn, idx) => (
                      <li key={idx}>{btn}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
