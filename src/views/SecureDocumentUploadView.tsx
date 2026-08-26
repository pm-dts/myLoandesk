import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Fraunces } from "next/font/google";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export async function getSecureDocumentUploadMetadata(
  locale: "en" | "es",
): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({
    locale,
    namespace: "SecureDocumentUpload.meta",
  });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/secure-document-upload/"
    : "https://www.myloandesk.com/secure-document-upload/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/secure-document-upload/",
        es: "https://www.myloandesk.com/es/secure-document-upload/",
        "x-default": "https://www.myloandesk.com/secure-document-upload/",
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

export default async function SecureDocumentUploadView({
  locale,
}: {
  locale: "en" | "es";
}) {
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "SecureDocumentUpload",
  });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const uploadHref = isEs
    ? "/es/secure-document-upload"
    : "/secure-document-upload";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/secure-document-upload/"
    : "https://www.myloandesk.com/secure-document-upload/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.secure_upload"), url: uploadHref },
  ];

  const uploadPageSchema = {
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

  return (
    <div className="bg-[#F8F6F1] min-h-screen py-16 px-6">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(uploadPageSchema),
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1
            className={`text-4xl md:text-5xl text-[#0B1221] mb-4 ${fraunces.className}`}
          >
            {t("heading")}
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">{t("subheading")}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left: Form Inputs */}
          <div className="w-full col-span-3 min-h-[700px]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/1Kp158iSAa2ehswEt7mY?notrack=true"
              width="100%"
              height="100%"
              className="border-0 w-full h-full min-h-[600px]"
              title={t("form_title")}
            />
          </div>

          {/* Right: Security Sidebar */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-moss-deep text-white p-6 rounded-3xl">
              <ShieldCheck size={32} className="mb-4 text-brand-orange" />
              <h3 className="text-lg font-medium mb-2">{t("sidebar.title")}</h3>
              <p className="text-sm text-green-100/80 leading-relaxed">
                {t("sidebar.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
