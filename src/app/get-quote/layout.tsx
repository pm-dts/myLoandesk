import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title: "Get a Mortgage Quote | MyLoanDesk",
  description:
    "Get a personalized mortgage quote from MyLoanDesk. Fill out our short form and a mortgage specialist will review your goals and contact you with the best available options.",
  alternates: {
    canonical: "https://www.myloandesk.com/get-quote/",
  },
  openGraph: {
    title: "Get a Mortgage Quote | MyLoanDesk",
    description:
      "Get a personalized mortgage quote from MyLoanDesk. Fill out our short form and a mortgage specialist will review your goals and contact you with the best available options.",
    type: "website",
    url: "https://www.myloandesk.com/get-quote/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Get a Mortgage Quote - MyLoanDesk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Mortgage Quote | MyLoanDesk",
    description:
      "Get a personalized mortgage quote from MyLoanDesk. Compare custom rates and loan terms across 100+ wholesale lenders.",
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

const getQuoteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.myloandesk.com/get-quote/#webpage",
      url: "https://www.myloandesk.com/get-quote/",
      name: "Get a Mortgage Quote | MyLoanDesk",
      description:
        "Request a personalized mortgage quote across residential, commercial, and investment property loan programs.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.myloandesk.com/#website",
      },
      about: {
        "@id": "https://www.myloandesk.com/#organization",
      },
      potentialAction: {
        "@type": "QuoteAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.myloandesk.com/get-quote/",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        result: {
          "@type": "FinancialProduct",
          name: "Mortgage Loan Quote",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.myloandesk.com/get-quote/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does requesting a quote impact my credit score?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Initial rate quotes and scenario consultations do not require a hard credit pull.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly will I receive my mortgage quote?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Once you submit your scenario details, a dedicated mortgage specialist will review your goals and reach out with pricing and program options within one business day.",
          },
        },
      ],
    },
  ],
};

export default function GetQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Get a Quote", url: "/get-quote" },
  ];

  return (
    <>
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getQuoteSchema),
        }}
      />
      {children}
    </>
  );
}
