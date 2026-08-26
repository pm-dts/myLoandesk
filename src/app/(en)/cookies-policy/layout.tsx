import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title: "Cookie Policy | MyLoanDesk",
  description:
    "This Cookie Policy explains how MyLoanDesk uses cookies and similar tracking technologies when you visit our website, mortgage calculators, customer portal, and related online services.",
  alternates: {
    canonical: "https://www.myloandesk.com/cookies-policy/",
  },
  openGraph: {
    title: "Cookie Policy | MyLoanDesk",
    description:
      "This Cookie Policy explains how MyLoanDesk uses cookies and similar technologies when you visit our website, landing pages, mortgage calculators, customer portal, and related online services.",
    type: "website",
    url: "https://www.myloandesk.com/cookies-policy/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "MyLoanDesk Cookie Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | MyLoanDesk",
    description:
      "Learn how MyLoanDesk uses cookies and tracking technologies to improve your user experience and secure mortgage services.",
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

const cookiePolicySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.myloandesk.com/cookies-policy/#webpage",
      url: "https://www.myloandesk.com/cookies-policy/",
      name: "Cookie Policy | MyLoanDesk",
      description:
        "Official cookie policy and tracking technology disclosure for MyLoanDesk mortgage services and digital platforms.",
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
      "@id": "https://www.myloandesk.com/cookies-policy/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why does MyLoanDesk use cookies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MyLoanDesk uses cookies and similar technologies to ensure essential site security, authenticate user sessions on customer portals, remember user preferences, calculate accurate mortgage scenarios, and analyze web performance.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage or disable cookies on MyLoanDesk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can manage or disable cookies through your web browser settings. Note that disabling essential cookies may impact the functionality of interactive tools, customer portals, and calculator sessions.",
          },
        },
      ],
    },
  ],
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Cookie Policy", url: "/cookies-policy" },
  ];

  return (
    <>
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cookiePolicySchema),
        }}
      />
      {children}
    </>
  );
}
