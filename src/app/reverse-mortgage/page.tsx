import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Home,
  CalendarOff,
  Coins,
  ShieldCheck,
  Lock,
  HeartPulse,
  Landmark,
  ArrowRight,
} from "lucide-react";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import ReverseMortgageForm from "@/components/site/ReverseMortgage/InquiryForm";
import ReverseMortgageSection from "@/components/site/LoanPrograms/ReverseMortgageSection";

export const metadata: Metadata = {
  title: "Reverse Mortgage | MyLoanDesk",
  description:
    "Explore Reverse Mortgage options with MyLoanDesk. Learn how to convert your home equity into financial freedom, with no monthly payments and flexible access to funds.",
  alternates: {
    canonical: "https://www.myloandesk.com/reverse-mortgage/",
  },
  openGraph: {
    title: "Reverse Mortgage | MyLoanDesk",
    description:
      "Explore Reverse Mortgage options with MyLoanDesk. Learn how to convert your home equity into financial freedom, with no monthly payments and flexible access to funds.",
    type: "website",
    url: "https://www.myloandesk.com/reverse-mortgage/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Reverse Mortgage Programs - MyLoanDesk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reverse Mortgage | MyLoanDesk",
    description:
      "Convert your home equity into retirement funding and financial freedom with no monthly mortgage payments.",
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

const reverseMortgageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.myloandesk.com/reverse-mortgage/#webpage",
      url: "https://www.myloandesk.com/reverse-mortgage/",
      name: "Reverse Mortgage Solutions | MyLoanDesk",
      description:
        "Comprehensive guide and inquiry options for FHA-insured HECM and proprietary reverse mortgage programs for homeowners age 55+.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.myloandesk.com/#website",
      },
      about: {
        "@id": "https://www.myloandesk.com/#organization",
      },
    },
    {
      "@type": "FinancialProduct",
      "@id": "https://www.myloandesk.com/reverse-mortgage/#product",
      name: "Reverse Mortgage Loan (HECM & Jumbo)",
      description:
        "Home equity conversion financing enabling eligible homeowners age 55 and older to access home equity without monthly mortgage principal and interest payments.",
      provider: {
        "@id": "https://www.myloandesk.com/#organization",
      },
      category: "ReverseMortgage",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.myloandesk.com/reverse-mortgage/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I have to make monthly mortgage payments on a reverse mortgage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No monthly mortgage payments are required as long as you live in the home as your primary residence, keep property taxes and homeowners insurance current, and maintain the property.",
          },
        },
        {
          "@type": "Question",
          name: "Who retains ownership of the home with a reverse mortgage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You remain on the title and retain full ownership of your home throughout the life of the reverse mortgage.",
          },
        },
        {
          "@type": "Question",
          name: "What is non-recourse protection on an FHA HECM loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non-recourse protection ensures that neither you nor your heirs will ever owe more than the fair market value of the home when the loan is repaid upon sale.",
          },
        },
        {
          "@type": "Question",
          name: "How can I receive funds from a reverse mortgage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Proceeds can be received as an upfront lump sum, monthly payments, a growing line of credit, or a customized combination of these options.",
          },
        },
      ],
    },
  ],
};

export default function ReverseMortgagePage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Reverse Mortgage", url: "/reverse-mortgage" },
  ];

  const benefits = [
    {
      title: "No Monthly Payments",
      description: "No required monthly mortgage payments.",
      icon: <CalendarOff size={24} strokeWidth={1.5} />,
    },
    {
      title: "Retain Ownership",
      description: "Remain in the home and retain full ownership.",
      icon: <Home size={24} strokeWidth={1.5} />,
    },
    {
      title: "Flexible Access to Funds",
      description:
        "Access funds as a lump sum, monthly payments, line of credit, or combination.",
      icon: <Coins size={24} strokeWidth={1.5} />,
    },
    {
      title: "Eliminate Current Mortgage",
      description: "Pay off an existing mortgage to free up monthly cash flow.",
      icon: <Landmark size={24} strokeWidth={1.5} />,
    },
    {
      title: "FHA-Insured",
      description:
        "FHA-insured HECM (Home Equity Conversion Mortgage) options available.",
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    },
    {
      title: "Non-Recourse Protection",
      description:
        "You will never owe more than the home is worth when the loan is repaid.",
      icon: <Lock size={24} strokeWidth={1.5} />,
    },
    {
      title: "Fund Your Lifestyle",
      description:
        "Use the funds for retirement income, home improvements, healthcare, debt consolidation, or other needs.",
      icon: <HeartPulse size={24} strokeWidth={1.5} />,
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-20 pb-16 lg:pt-32 lg:pb-24 text-ink">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reverseMortgageSchema),
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20 lg:mb-32 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
          Reverse Mortgage Solutions
        </div>

        <h1
          className={cn(
            "text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight text-ink max-w-4xl mb-6",
            fraunces.className,
          )}
        >
          Turn Your Home Equity Into Financial Freedom.
        </h1>

        <p className="text-lg md:text-xl text-ink-2 leading-relaxed max-w-3xl">
          A reverse mortgage allows eligible homeowners age 55+* and older to
          convert a portion of their home equity into tax-free proceeds while
          continuing to live in and own their home. No monthly mortgage payments
          are required, provided you continue to pay property taxes, homeowners
          insurance, applicable HOA dues, and maintain the property.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="#reverse-mortgage-inquiry"
            className="btn-shine bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-sm focus-ring"
          >
            Let&apos;s Find your Options
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* --- BENEFITS GRID SECTION --- */}
      <section className="bg-cream/30 border-y border-line py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl text-ink font-light tracking-tight",
                fraunces.className,
              )}
            >
              The Benefits of a Reverse Mortgage
            </h2>
            <p className="text-ink-2 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              Discover how tapping into your home&apos;s equity can provide
              financial security and peace of mind during your retirement years.
            </p>
          </div>

          {/* 7-Card Grid Layout (3 on top, 4 on bottom or naturally wrapping) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-primary-bg border border-line p-8 rounded-2xl hover:border-brand-orange/50 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-ink mb-3 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}

            {/* Placeholder card to fill the 8-grid space nicely, serving as a CTA */}
            <div className="bg-moss-deep text-white border border-moss-deep p-8 rounded-2xl shadow-md flex flex-col justify-center items-start">
              <h3 className="text-xl font-bold mb-3 leading-snug">
                Ready to explore your options?
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                Speak with one of our specialized reverse mortgage advisors
                today.
              </p>
              <Link
                href="#reverse-mortgage-inquiry"
                className="text-brand-orange font-bold text-sm flex items-center gap-2 hover:text-white transition-colors"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- REVERSE MORTGAGE PROGRAMS SECTION --- */}
      <ReverseMortgageSection />

      {/* --- INQUIRY FORM SECTION --- */}
      <section id="reverse-mortgage-inquiry">
        <ReverseMortgageForm />
      </section>
    </main>
  );
}
