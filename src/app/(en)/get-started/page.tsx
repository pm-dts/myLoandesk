import type { Metadata } from "next";
import GetStartedForm from "@/components/site/GetStated/GetStartedForm";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title: "Get Started | MyLoanDesk",
  description:
    "Answer a few quick questions to discover the best residential, commercial, and investment mortgage programs for your financial situation.",
  alternates: {
    canonical: "https://www.myloandesk.com/get-started/",
  },
  openGraph: {
    title: "Get Started | MyLoanDesk",
    description:
      "Answer a few quick questions to discover the best mortgage programs for your situation.",
    type: "website",
    url: "https://www.myloandesk.com/get-started/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Get Started - MyLoanDesk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started | MyLoanDesk",
    description:
      "Find the right mortgage program in minutes with our fast online questionnaire.",
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

const getStartedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.myloandesk.com/get-started/#webpage",
      url: "https://www.myloandesk.com/get-started/",
      name: "Get Started | MyLoanDesk",
      description:
        "Quick online qualification questionnaire to match borrowers with wholesale loan programs.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.myloandesk.com/#website",
      },
      about: {
        "@id": "https://www.myloandesk.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.myloandesk.com/get-started/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does the questionnaire take to complete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The get-started questionnaire takes approximately two to three minutes to complete.",
          },
        },
        {
          "@type": "Question",
          name: "Will completing this form trigger a hard credit inquiry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Filling out the initial questionnaire does not pull your credit or affect your credit score.",
          },
        },
      ],
    },
  ],
};

export default function GetStartedPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Get Started", url: "/get-started" },
  ];

  return (
    <>
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStartedSchema),
        }}
      />
      <GetStartedForm />
    </>
  );
}
