import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import {
  ShieldCheck,
  Mail,
  Phone,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Accessibility Statement | MyLoanDesk",
  description:
    "MyLoanDesk is committed to providing a website that is accessible and usable by as many people as possible, including individuals with disabilities, adhering to WCAG guidelines.",
  alternates: {
    canonical: "https://www.myloandesk.com/accessibility/",
  },
  openGraph: {
    title: "Accessibility Statement | MyLoanDesk",
    description:
      "MyLoanDesk is committed to providing a website that is accessible and usable by as many people as possible, including individuals with disabilities, adhering to WCAG guidelines.",
    type: "website",
    url: "https://www.myloandesk.com/accessibility/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "MyLoanDesk - Accessibility Statement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Statement | MyLoanDesk",
    description:
      "MyLoanDesk is committed to providing a website that is accessible and usable by as many people as possible, adhering to WCAG accessibility guidelines.",
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

const accessibilityPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.myloandesk.com/accessibility/#webpage",
      url: "https://www.myloandesk.com/accessibility/",
      name: "Accessibility Statement | MyLoanDesk",
      description:
        "MyLoanDesk's commitment to web accessibility and usability standards based on Web Content Accessibility Guidelines (WCAG).",
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
      "@id": "https://www.myloandesk.com/accessibility/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What accessibility standards does MyLoanDesk follow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MyLoanDesk aims to follow generally recognized accessibility best practices, including guidance provided by the Web Content Accessibility Guidelines (WCAG).",
          },
        },
        {
          "@type": "Question",
          name: "How can I request assistance or report an accessibility barrier?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you experience difficulty accessing any part of MyLoanDesk.com, you can reach our team via email at info@myloandesk.com or by phone at (305) 891-6500 to receive alternative assistance.",
          },
        },
        {
          "@type": "Question",
          name: "Are third-party mortgage tools and calculators covered by this statement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While MyLoanDesk encourages technology partners and third-party service providers to ensure user-friendly, accessible experiences, third-party content and external integrations may operate outside our direct control.",
          },
        },
      ],
    },
  ],
};

export default function AccessibilityPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Accessibility", url: "/accessibility" },
  ];

  return (
    <main className="min-h-screen bg-primary-bg py-12 sm:py-20 text-ink">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(accessibilityPageSchema),
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-ink-2 hover:text-brand-orange mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Homepage
        </Link>

        <div className="bg-cream/30 border border-line rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6">
            <ShieldCheck size={24} />
          </div>

          <h1
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-light text-ink mb-3",
              fraunces.className,
            )}
          >
            Accessibility Statement
          </h1>

          <p className="text-xs uppercase tracking-wider text-ink-2 font-semibold mb-8 pb-6 border-b border-line">
            Last Updated: August 14, 2026
          </p>

          <div className="space-y-8 text-sm sm:text-base text-ink-2 leading-relaxed">
            <p className="text-base sm:text-lg text-ink font-medium leading-relaxed">
              MyLoanDesk is committed to providing a website that is accessible
              and usable by as many people as possible, including individuals
              with disabilities.
            </p>

            {/* Our Commitment to Accessibility */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-ink">
                Our Commitment to Accessibility
              </h2>
              <p>
                We are continually working to improve the accessibility and
                usability of MyLoanDesk.com and strive to follow generally
                recognized accessibility practices, including guidance provided
                by the Web Content Accessibility Guidelines (WCAG).
              </p>
              <p>
                Our goal is to provide all visitors with convenient access to
                mortgage information, loan program information, educational
                resources, calculators, videos, forms, and other services
                available through our website.
              </p>
            </section>

            {/* Our Accessibility Efforts */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">
                Our Accessibility Efforts
              </h2>
              <p>As part of our ongoing efforts, we aim to:</p>
              <ul className="space-y-2.5">
                {[
                  "Provide clear and consistent website navigation.",
                  "Use properly structured headings and page content.",
                  "Provide alternative text for meaningful images where appropriate.",
                  "Maintain appropriate contrast between text and backgrounds.",
                  "Support keyboard navigation where reasonably possible.",
                  "Use clear labels, instructions, and error messages on website forms.",
                  "Support browser text resizing and zoom functionality.",
                  "Provide captions or other accessible alternatives for video content where appropriate.",
                  "Design website features with accessibility and usability in mind.",
                  "Periodically review the website for potential accessibility improvements.",
                ].map((effort, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-moss-deep shrink-0 mt-0.5"
                    />
                    <span>{effort}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Ongoing Improvements */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-ink">
                Ongoing Improvements
              </h2>
              <p>
                Accessibility is an ongoing process. MyLoanDesk continues to
                evaluate its website and make improvements as technologies,
                accessibility standards, and best practices evolve.
              </p>
              <p>
                While we strive to make MyLoanDesk.com accessible to all users,
                some content, features, documents, integrations, or third-party
                services may not yet be fully accessible with every assistive
                technology.
              </p>
              <p>
                If you experience difficulty accessing any part of our website,
                please contact us. We will make reasonable efforts to provide
                the information or assistance you need through an alternative
                method.
              </p>
            </section>

            {/* Third-Party Content and Services */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-ink">
                Third-Party Content and Services
              </h2>
              <p>
                MyLoanDesk.com may contain links to third-party websites or use
                third-party services, including scheduling systems, forms,
                calculators, videos, application systems, or other technology.
              </p>
              <p>
                MyLoanDesk does not control the accessibility of third-party
                websites and services. However, we encourage our service
                providers and technology partners to provide accessible and
                user-friendly experiences.
              </p>
            </section>

            {/* Need Assistance? */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-ink">
                Need Assistance?
              </h2>
              <p>
                If you have difficulty accessing information, using a feature,
                completing a form, or otherwise navigating MyLoanDesk.com
                because of a disability, please contact us.
              </p>

              <div className="bg-primary-bg border border-line rounded-2xl p-6 space-y-4 my-4">
                <div className="text-ink font-semibold text-base mb-2">
                  MyLoanDesk
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-brand-orange shrink-0" size={20} />
                  <div>
                    <span className="text-xs uppercase font-semibold text-ink-2 block">
                      Email
                    </span>
                    <a
                      href="mailto:info@myloandesk.com"
                      className="font-medium text-ink hover:text-brand-orange underline transition-colors"
                    >
                      info@myloandesk.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-brand-orange shrink-0" size={20} />
                  <div>
                    <span className="text-xs uppercase font-semibold text-ink-2 block">
                      Phone
                    </span>
                    <a
                      href="tel:3058916500"
                      className="font-medium text-ink hover:text-brand-orange transition-colors"
                    >
                      (305) 891-6500
                    </a>
                  </div>
                </div>
              </div>

              <p>
                When contacting us, please identify the webpage or feature you
                were attempting to use and describe the accessibility issue you
                encountered. This information will help us investigate the issue
                and provide assistance.
              </p>
              <p>
                We welcome accessibility feedback and will make reasonable
                efforts to address accessibility concerns in a timely manner.
              </p>
            </section>

            {/* Accessibility Standards */}
            <section className="space-y-3 pt-4 border-t border-line">
              <h2 className="text-xl font-semibold text-ink">
                Accessibility Standards
              </h2>
              <p>
                Our accessibility efforts are guided by generally recognized web
                accessibility practices, including the Web Content Accessibility
                Guidelines (WCAG).
              </p>
              <p>
                We continue to evaluate MyLoanDesk.com and make accessibility
                improvements where appropriate.
              </p>
              <p className="text-xs text-ink-2 pt-2">
                This Accessibility Statement may be updated periodically to
                reflect changes to our website, technology, or accessibility
                practices.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
