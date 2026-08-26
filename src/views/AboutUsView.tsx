import { ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function getAboutUsMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({ locale, namespace: "AboutUs.meta" });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/about-us/"
    : "https://www.myloandesk.com/about-us/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/about-us/",
        es: "https://www.myloandesk.com/es/about-us/",
        "x-default": "https://www.myloandesk.com/about-us/",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: canonicalUrl,
      siteName: "MyLoanDesk",
      locale: isEs ? "es_US" : "en_US",
      images: [
        {
          url: "/og-image.jpeg",
          width: 1200,
          height: 630,
          alt: "About MyLoanDesk - Independent Mortgage Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.jpeg"],
    },
  };
}

export default async function AboutUsView({ locale }: { locale: "en" | "es" }) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "AboutUs" });
  const isEs = locale === "es";

  const basePath = isEs ? "/es" : "";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/about-us/"
    : "https://www.myloandesk.com/about-us/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: isEs ? "/es" : "/" },
    {
      name: t("breadcrumbs.about_us"),
      url: isEs ? "/es/about-us" : "/about-us",
    },
  ];

  const valueProps = [
    {
      id: 1,
      title: t("values.items.rates.title"),
      description: t("values.items.rates.description"),
    },
    {
      id: 2,
      title: t("values.items.options.title"),
      description: t("values.items.options.description"),
    },
    {
      id: 3,
      title: t("values.items.answers.title"),
      description: t("values.items.answers.description"),
    },
  ];

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t("meta.title"),
        description: t("meta.description"),
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
            name: t("faq_schema.q1.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq_schema.q1.answer"),
            },
          },
          {
            "@type": "Question",
            name: t("faq_schema.q2.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq_schema.q2.answer"),
            },
          },
          {
            "@type": "Question",
            name: t("faq_schema.q3.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq_schema.q3.answer"),
            },
          },
          {
            "@type": "Question",
            name: t("faq_schema.q4.question"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq_schema.q4.answer"),
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-[#F8F6F1] min-h-screen selection:bg-brand-orange/20">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden bg-white border-b border-line/60">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#FF6B00] font-bold uppercase tracking-widest text-xs sm:text-sm block mb-4">
            {t("hero.badge")}
          </span>
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl text-[#0B1221] font-medium tracking-tight mb-6 ${fraunces.className}`}
          >
            {t("hero.heading")}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subheading")}
          </p>
        </div>
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </section>

      {/* Main Core Mission Details Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-6">
            <h2
              className={`text-3xl text-[#0B1221] tracking-tight ${fraunces.className}`}
            >
              {t("mission.heading")}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {t("mission.description")}
            </p>
          </div>

          <div className="md:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-line/50 space-y-6 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#fff4edc4] rounded-bl-full flex items-center justify-center text-[#FF6B00]/10 pointer-events-none z-0">
              <ShieldCheck size={40} className="translate-x-3 -translate-y-3" />
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              {t("pledge.badge")}
            </h3>
            <p className="text-[#0B1221] text-base leading-relaxed font-medium italic z-10 relative">
              {t("pledge.quote")}
            </p>
            <div className="h-px bg-gray-100 border-dashed border-b my-2"></div>
            <p className="text-sm text-gray-600">{t("pledge.description")}</p>
          </div>
        </div>
      </section>

      {/* Grid Features List */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="border-t border-gray-300/60 pt-16">
          <h2
            className={`text-3xl text-[#0B1221] tracking-tight mb-12 text-center md:text-left ${fraunces.className}`}
          >
            {t("values.heading")}
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.id}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFF4ED] flex items-center justify-center text-[#FF6B00] font-bold text-sm mb-6 group-hover:scale-105 transition-transform">
                  {prop.id}
                </div>
                <h3 className="text-lg font-bold text-[#0B1221] mb-3 group-hover:text-[#FF6B00] transition-colors leading-snug">
                  {prop.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="bg-[#1A2639] text-white py-16 px-6 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h3
            className={`text-3xl md:text-4xl text-white ${fraunces.className}`}
          >
            {t("cta.heading")}
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            {t("cta.subheading")}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href={`${basePath}/#start`}
              className="bg-[#FF6B00] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#e66000] transition-colors shadow-md outline-none focus:ring-4 focus:ring-[#FF6B00]/30 text-sm"
            >
              {t("cta.button_speak")}
            </Link>
            <Link
              href={`${basePath}/#live-rates-widget`}
              className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors text-sm"
            >
              {t("cta.button_rates")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
