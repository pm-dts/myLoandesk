import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title: "Terms & Conditions | MyLoanDesk",
  description:
    "Please read these Terms & Conditions carefully before using our Services. By accessing or using our website, you agree to be bound by these Terms.",
  alternates: {
    canonical: "https://www.myloandesk.com/terms-conditions/",
  },
  openGraph: {
    title: "Terms & Conditions | MyLoanDesk",
    description:
      "Please read these Terms & Conditions carefully before using our Services. By accessing or using our website, you agree to be bound by these Terms.",
    type: "website",
    url: "https://www.myloandesk.com/terms-conditions/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "MyLoanDesk Terms and Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | MyLoanDesk",
    description:
      "Review the Terms & Conditions for accessing and using the MyLoanDesk website and lending services.",
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

const termsConditionsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.myloandesk.com/terms-conditions/#webpage",
      url: "https://www.myloandesk.com/terms-conditions/",
      name: "Terms & Conditions | MyLoanDesk",
      description:
        "Terms and Conditions outlining the rules, obligations, and legal agreements governing the use of MyLoanDesk services.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.myloandesk.com/#website",
      },
      about: {
        "@id": "https://www.myloandesk.com/#organization",
      },
    },
  ],
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Terms & Conditions", url: "/terms-conditions" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsConditionsSchema),
        }}
      />
      {children}
    </>
  );
}
