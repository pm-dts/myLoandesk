import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import CalendarBookingWidget from "@/components/site/Calendar/CalendarWidget";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function getCalendarMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({ locale, namespace: "Calendar.meta" });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/calendar/"
    : "https://www.myloandesk.com/calendar/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/calendar/",
        es: "https://www.myloandesk.com/es/calendar/",
        "x-default": "https://www.myloandesk.com/calendar/",
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

export default async function CalendarView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Calendar" });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const calendarHref = isEs ? "/es/calendar" : "/calendar";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/calendar/"
    : "https://www.myloandesk.com/calendar/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.calendar"), url: calendarHref },
  ];

  const calendarPageSchema = {
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
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: pageUrl,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: {
            "@type": "Reservation",
            name: t("schema.reservation_name"),
          },
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calendarPageSchema),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Intro Header */}
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2 mb-6">
            <Calendar className="text-brand-orange" size={14} />
            {t("hero.badge")}
          </div>

          <h1
            className={cn(
              "text-3xl sm:text-5xl tracking-tight text-ink font-light leading-tight mb-4",
              fraunces.className,
            )}
          >
            {t("hero.headline_start")}{" "}
            <em className="not-italic font-serif italic text-brand-orange">
              {t("hero.headline_italic")}
            </em>
          </h1>

          <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
            {t("hero.subheadline")}
          </p>
        </header>

        {/* Embedded Client Booking Widget */}
        <CalendarBookingWidget locale={locale} />

        {/* Disclaimer Notice */}
        <p className="text-[11px] text-center text-ink-2/70 mt-8 max-w-md mx-auto">
          {t("disclaimer")}
        </p>
      </div>
    </main>
  );
}
