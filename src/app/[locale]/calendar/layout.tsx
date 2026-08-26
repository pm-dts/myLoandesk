import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title: "Book a Mortgage Consultation | MyLoanDesk",
  description:
    "Schedule a direct consultation with our expert loan origination team. Choose a convenient time to discuss your home financing, pre-approval, and mortgage options.",
  alternates: {
    canonical: "https://www.myloandesk.com/calendar/",
  },
  openGraph: {
    title: "Book a Mortgage Consultation | MyLoanDesk",
    description:
      "Schedule a direct consultation with our expert loan origination team. Choose a convenient time to discuss your home financing and mortgage options.",
    type: "website",
    url: "https://www.myloandesk.com/calendar/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Book a Consultation - MyLoanDesk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Mortgage Consultation | MyLoanDesk",
    description:
      "Schedule a direct consultation with our expert loan origination team. Choose a convenient time to discuss your mortgage options.",
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

const calendarPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.myloandesk.com/calendar/#webpage",
      url: "https://www.myloandesk.com/calendar/",
      name: "Book a Mortgage Consultation | MyLoanDesk",
      description:
        "Schedule a direct consultation with our expert loan origination team to explore personalized mortgage solutions.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.myloandesk.com/#website",
      },
      about: {
        "@id": "https://www.myloandesk.com/#organization",
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.myloandesk.com/calendar/",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        result: {
          "@type": "Reservation",
          name: "Mortgage Consultation Appointment",
        },
      },
    },
  ],
};

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Book Consultation", url: "/calendar" },
  ];

  return (
    <>
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calendarPageSchema),
        }}
      />
      {children}
    </>
  );
}
