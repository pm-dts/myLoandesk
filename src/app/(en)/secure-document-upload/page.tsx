import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Fraunces } from "next/font/google";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title: "Secure Document Upload | MyLoanDesk",
  description:
    "Upload your financial documents securely through MyLoanDesk's encrypted document portal. Ensure your sensitive information is protected while we assist you with your mortgage needs.",
  alternates: {
    canonical: "https://www.myloandesk.com/secure-document-upload/",
  },
  openGraph: {
    title: "Secure Document Upload | MyLoanDesk",
    description:
      "Upload your financial documents securely through MyLoanDesk's encrypted document portal. Ensure your sensitive information is protected while we assist you with your mortgage needs.",
    type: "website",
    url: "https://www.myloandesk.com/secure-document-upload/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "MyLoanDesk Secure Document Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Document Upload | MyLoanDesk",
    description:
      "Upload your financial documents securely through MyLoanDesk's encrypted document portal.",
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

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const uploadPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.myloandesk.com/secure-document-upload/#webpage",
      url: "https://www.myloandesk.com/secure-document-upload/",
      name: "Secure Document Upload | MyLoanDesk",
      description:
        "Encrypted document upload portal for securely submitting mortgage, financial, and income verification files.",
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

export default function DocumentUpload() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Secure Document Upload", url: "/secure-document-upload" },
  ];

  return (
    <div className="bg-[#F8F6F1] min-h-screen py-16 px-6">
      {/* Structural SEO Breadcrumbs & Schema */}
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
            Secure Document Portal
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Please upload your required financial documents. Your data is
            encrypted and handled with full security.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left: Form Inputs */}
          <div className="w-full col-span-3 min-h-[600px]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/1Kp158iSAa2ehswEt7mY?notrack=true"
              width="100%"
              height="100%"
              className="border-0 w-full h-full min-h-[600px]"
              title="Secure Document Upload Form"
            />
          </div>

          {/* Right: Security Sidebar */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-moss-deep text-white p-6 rounded-3xl">
              <ShieldCheck size={32} className="mb-4 text-brand-orange" />
              <h3 className="text-lg font-medium mb-2">
                Secure &amp; Encrypted
              </h3>
              <p className="text-sm text-green-100/80 leading-relaxed">
                Your documents are protected. We never store your data on local
                unsecure devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
