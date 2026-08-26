import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import enMessages from "@/locales/en.json";
import SiteHeader from "@/components/common/SiteHeader";
import SiteFooter from "@/components/common/SiteFooter";
import VideoGreetingWidget from "@/components/site/Home/AIVideo";
import WhatsappWidgetButton from "@/components/site/utils/WhatsappWidgetButton";
import ChatbotWidget from "@/components/common/GHLChatBot";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myloandesk.com"),
  title: "MyLoanDesk | Compare Wholesale Mortgage Rates & Home Loan Options",
  description:
    "MyLoanDesk is your trusted mortgage brokerage. We compare 100+ lenders to secure competitive interest rates and custom financing solutions from application to closing.",
  alternates: {
    canonical: "https://www.myloandesk.com/",
    languages: {
      en: "https://www.myloandesk.com/",
      es: "https://www.myloandesk.com/es/",
      "x-default": "https://www.myloandesk.com/",
    },
  },
  openGraph: {
    title: "MyLoanDesk - Your Trusted Mortgage Partner",
    description:
      "Access hundreds of mortgage solutions through our nationwide lending network. Compare loan options, secure competitive interest rates, and close on time.",
    url: "https://www.myloandesk.com/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "MyLoanDesk - Wholesale Mortgage Rates & Home Loan Options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyLoanDesk - Your Trusted Mortgage Partner",
    description:
      "Access hundreds of mortgage solutions through our nationwide lending network. Compare loan options, secure competitive interest rates, and close on time.",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MortgageBroker",
      "@id": "https://www.myloandesk.com/#organization",
      name: "MyLoanDesk",
      legalName:
        "Secured Horizon Financial Group, Inc. / Secured Horizon Mortgage Group, Inc.",
      alternateName: "Secured Horizon Financial Group, Inc.",
      url: "https://www.myloandesk.com",
      logo: "https://www.myloandesk.com/assets/new-logo.png",
      image: "https://www.myloandesk.com/assets/new-logo.png",
      description:
        "MyLoanDesk is a nationwide mortgage brokerage offering conventional, government, and investor loan programs, comparing 100+ lenders on behalf of each client.",
      telephone: "+1-305-891-6500",
      faxNumber: "+1-855-794-7611",
      email: "info@myloandesk.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1801 NE 123rd St, Suite 314",
        addressLocality: "North Miami",
        addressRegion: "FL",
        postalCode: "33181",
        addressCountry: "US",
      },
      areaServed: "US",
      identifier: [
        {
          "@type": "PropertyValue",
          name: "Individual NMLS ID",
          value: "341393",
        },
        {
          "@type": "PropertyValue",
          name: "Company NMLS ID",
          value: "314226",
        },
        {
          "@type": "PropertyValue",
          name: "Company NMLS ID",
          value: "1444825",
        },
      ],
      priceRange: "$$",
      sameAs: [
        "https://youtube.com/@MyLoanDeskMortgage",
        "https://www.nmlsconsumeraccess.org/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.myloandesk.com/#website",
      url: "https://www.myloandesk.com",
      name: "MyLoanDesk",
      publisher: {
        "@id": "https://www.myloandesk.com/#organization",
      },
    },
  ],
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Explicitly set locale for static export on root routes
  setRequestLocale("en");

  return (
    <NextIntlClientProvider locale="en" messages={enMessages}>
      {/* Organization and WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <VideoGreetingWidget />
      <WhatsappWidgetButton />
      <ChatbotWidget />
      <GoogleTagManager
        gtmId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-KQ5H354K"}
      />
    </NextIntlClientProvider>
  );
}
