import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title: "Privacy Policy | MyLoanDesk",
  description:
    "This Privacy Policy outlines how MyLoanDesk collects, uses, shares, and protects your personal information when you visit our website, communicate with us, or use our online services.",
  alternates: {
    canonical: "https://www.myloandesk.com/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | MyLoanDesk",
    description:
      "This Privacy Policy outlines how MyLoanDesk collects, uses, shares, and protects your personal information when you visit our website, communicate with us, or use our online services.",
    type: "website",
    url: "https://www.myloandesk.com/privacy-policy/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "MyLoanDesk Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | MyLoanDesk",
    description:
      "Learn how MyLoanDesk collects, uses, and safeguards your personal and financial information.",
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

const privacyPolicySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.myloandesk.com/privacy-policy/#webpage",
      url: "https://www.myloandesk.com/privacy-policy/",
      name: "Privacy Policy | MyLoanDesk",
      description:
        "Privacy Policy detailing the collection, protection, and usage of consumer data by MyLoanDesk.",
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

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacyPolicySchema),
        }}
      />
      {children}
    </>
  );
}
