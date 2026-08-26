import type { Metadata } from "next";
import { ArrowRight, Users, Share2, Award, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";
import { Toaster } from "react-hot-toast";

import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import PartnerFormSection from "@/components/site/Realtors/PartnerForm";
import ReferralFormSection from "@/components/site/Realtors/PreApprovalRefferal";

export const metadata: Metadata = {
  title: "Realtor Partnership Program | MyLoanDesk",
  description:
    "Join MyLoanDesk's Realtor Partnership Program to close loans faster and provide a seamless experience for your clients. Partner with us for networking, marketing support, and more.",
  alternates: {
    canonical: "https://www.myloandesk.com/realtors/",
  },
  openGraph: {
    title: "Realtor Partnership Program | MyLoanDesk",
    description:
      "Join MyLoanDesk's Realtor Partnership Program to close loans faster and provide a seamless experience for your clients. Partner with us for networking, marketing support, and more.",
    type: "website",
    url: "https://www.myloandesk.com/realtors/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "MyLoanDesk Realtor Partnership Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Realtor Partnership Program | MyLoanDesk",
    description:
      "Partner with MyLoanDesk for faster loan closings, cobranded marketing support, and seamless communication for real estate agents.",
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
  weight: ["400", "500", "600", "700", "800", "900"],
});

const realtorsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.myloandesk.com/realtors/#webpage",
      url: "https://www.myloandesk.com/realtors/",
      name: "Realtor Partnership Program | MyLoanDesk",
      description:
        "Direct wholesale lender partnership opportunities, cobranded marketing support, and client pre-approval referral pathways for licensed real estate agents.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.myloandesk.com/#website",
      },
      about: {
        "@id": "https://www.myloandesk.com/#organization",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.myloandesk.com/realtors/#service",
      name: "Realtor Partnership & Referral Program",
      description:
        "Collaborative lending program for realtors featuring fast pre-approvals, direct wholesale loan underwriting, cobranded marketing collateral, and co-hosted networking events.",
      provider: {
        "@id": "https://www.myloandesk.com/#organization",
      },
      serviceType: "Mortgage Lending Partnership",
    },
  ],
};

export default function RealtorsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Realtors", url: "/realtors" },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-28 pb-16 lg:pt-36 lg:pb-24 text-ink">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realtorsPageSchema),
        }}
      />
      <Toaster position="bottom-right" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              Realtor Partnership Program
            </div>

            {/* Headline */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl ${fraunces.className} text-ink leading-[1.1] tracking-tight mt-6 mb-6`}
            >
              Close Loans Faster with Direct Lender Partnership
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-ink-2 leading-relaxed mb-10">
              Realtors join us because it&apos;s a mutually beneficial
              opportunity. We go above and beyond to provide clear, timely
              communication and a smooth transaction experience.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#partner-form"
                className="btn-shine bg-brand-orange text-primary-bg px-7 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors focus-ring"
              >
                Partner With Us
                <ArrowRight size={18} />
              </a>
              <a
                href="#referral-form"
                className="px-6 py-3.5 text-ink font-medium border border-line hover:bg-cream rounded-full transition-colors focus-ring"
              >
                Refer a Client
              </a>
            </div>
          </div>

          {/* Right Column Architectural Container */}
          <div className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-[#E8E4D8] rounded-3xl transform rotate-2 translate-x-3 translate-y-3 -z-10"></div>
            <div className="relative z-10 bg-moss-deep h-[380px] rounded-3xl p-8 flex flex-col justify-end text-primary-bg shadow-sm">
              <span className="text-[10px] uppercase tracking-widest text-[#D4A373] font-semibold mb-2">
                MyLoanDesk Partners
              </span>
              <p
                className={cn(
                  "text-2xl font-light leading-snug",
                  fraunces.className,
                )}
              >
                Elevating the home purchase experience together, one client at a
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 border-t border-line bg-cream/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-5">
              01 — Benefits
            </div>
            <h2
              className={cn(
                "text-4xl lg:text-5xl xl:text-6xl tracking-tight text-ink font-light",
                fraunces.className,
              )}
            >
              The benefits of partnering with{" "}
              <em className="not-italic font-serif italic text-moss-deep">
                MyLoanDesk
              </em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <article className="bg-primary-bg border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 flex items-center justify-center mb-5">
                <Users className="text-moss-deep" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-ink">
                Networking &amp; Referral Opportunities
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                Take advantage of sponsoring, co-hosting, or attending our
                finance and real estate webinars, community and business events
                to expand your networking reach.
              </p>
            </article>

            {/* Card 2 */}
            <article className="bg-primary-bg border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5">
                <Share2
                  className="text-brand-orange"
                  size={22}
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-ink">
                Social Media Presence
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                Enhance your social media content by sharing our thoughtfully
                curated content including home buying &amp; financing tips,
                mortgage 101, local market news and valuable information for
                your clients.
              </p>
            </article>

            {/* Card 3 */}
            <article className="bg-primary-bg border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#D4A373]/20 flex items-center justify-center mb-5">
                <Award className="text-[#D4A373]" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-ink">
                Cobranded Marketing Materials
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                Become a known &amp; trusted partner of MyLoanDesk.com with your
                logo, photo, and contact information included on select print
                &amp; digital marketing materials.
              </p>
            </article>

            {/* Card 4 */}
            <article className="bg-primary-bg border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 flex items-center justify-center mb-5">
                <Zap className="text-moss-deep" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-ink">
                Close Loans Faster with Direct Lender Partnership
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                As your lender partner, we go above and beyond typical
                expectations to provide clear and timely communication and a
                smooth transaction experience for your clients.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 border-b border-line bg-primary-bg relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A574] font-semibold mb-6">
            02 — What Our Realtor Partners Say
          </div>
          <blockquote
            className={cn(
              "text-2xl md:text-3xl font-light italic text-ink leading-relaxed",
              fraunces.className,
            )}
          >
            &quot;As a realtor, I have worked with many lenders, but working
            with My Loan Desk was the best decision. We have a streamlined
            process, I have consistent market updates and marketing materials to
            educate my home buyers - and they are always happy to have no
            surprises and close quickly! I&apos;m grateful to have such a
            reliable lender partner.&quot;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-moss-deep text-primary-bg flex items-center justify-center text-xs font-semibold">
              LY
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-ink">Lindsey Y.</p>
              <p className="text-xs text-ink-2">Realtor Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section 1: Work Together */}
      <PartnerFormSection />

      {/* Form Section 2: Quick Pre-Approval Referral */}
      <ReferralFormSection />
    </main>
  );
}
