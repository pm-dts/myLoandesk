import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Home,
  DollarSign,
  Lock,
  CalendarOff,
  Percent,
  Layers,
} from "lucide-react";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title: "HomeSafe Second® | Access Home Equity Without Refinancing",
  description:
    "Explore HomeSafe Second®, a second-lien reverse mortgage that lets eligible homeowners access equity without replacing their first mortgage or adding a required monthly mortgage payment.*",
  alternates: {
    canonical: "https://www.myloandesk.com/loan-programs/homesafe-second/",
  },
  openGraph: {
    title: "HomeSafe Second® | Access Home Equity Without Refinancing",
    description:
      "Explore HomeSafe Second®, a second-lien reverse mortgage that lets eligible homeowners access equity without replacing their first mortgage or adding a required monthly mortgage payment.*",
    type: "website",
    url: "https://www.myloandesk.com/loan-programs/homesafe-second/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Homeowner comparing HomeSafe Second reverse mortgage and HELOC options for accessing home equity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeSafe Second® | Access Home Equity Without Refinancing",
    description:
      "Access $50,000 to $1M in home equity without refinancing your existing first mortgage or adding a required monthly mortgage payment.*",
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

const homeSafeSecondSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.myloandesk.com/loan-programs/homesafe-second/#webpage",
      url: "https://www.myloandesk.com/loan-programs/homesafe-second/",
      name: "HomeSafe Second® | Access Home Equity Without Refinancing",
      description:
        "Comprehensive guide to HomeSafe Second® second-lien reverse mortgage financing for eligible homeowners seeking to access equity without refinancing their existing first mortgage.",
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
      "@id":
        "https://www.myloandesk.com/loan-programs/homesafe-second/#product",
      name: "HomeSafe Second® Reverse Mortgage",
      description:
        "A proprietary second-lien reverse mortgage allowing qualified homeowners age 55+ to access $50,000 to $1,000,000 of home equity with a fixed interest rate and no required monthly principal and interest payment on the new loan.",
      provider: {
        "@id": "https://www.myloandesk.com/#organization",
      },
      category: "ReverseMortgage",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.myloandesk.com/loan-programs/homesafe-second/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is HomeSafe Second?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HomeSafe Second is a second-lien reverse mortgage that allows eligible homeowners to access a portion of their home equity while keeping their existing first mortgage in place.",
          },
        },
        {
          "@type": "Question",
          name: "Do I have to make monthly payments on HomeSafe Second?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HomeSafe Second does not require monthly principal and interest payments on the new loan.* Interest and applicable charges accrue to the loan balance. Borrowers must continue meeting the loan requirements, including paying property taxes, homeowners insurance, applicable HOA charges, maintaining the property, and remaining current on any existing first mortgage.",
          },
        },
        {
          "@type": "Question",
          name: "Does HomeSafe Second replace my current mortgage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. HomeSafe Second is a second lien. Your existing first mortgage remains in place and continues under its existing terms.",
          },
        },
        {
          "@type": "Question",
          name: "Who qualifies for HomeSafe Second?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HomeSafe Second is designed for eligible older homeowners with sufficient home equity. Minimum age requirements are generally 55 or older, with higher minimum ages in certain states, including 60 in Washington and 62 in Texas. Property, equity, credit, existing mortgage, occupancy, and other program requirements also apply.",
          },
        },
        {
          "@type": "Question",
          name: "How much equity can I access?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Qualified homeowners may be able to access between $50,000 and $1 million, depending on current program guidelines, property value, existing liens, available equity, age, and other eligibility factors.",
          },
        },
        {
          "@type": "Question",
          name: "Is the HomeSafe Second interest rate fixed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. HomeSafe Second offers a fixed interest rate, unlike many HELOCs that use variable interest rates. Interest accrues on the outstanding loan balance according to the terms of the loan.",
          },
        },
        {
          "@type": "Question",
          name: "How is HomeSafe Second different from a HELOC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "One of the biggest differences is the required monthly payment. A traditional HELOC generally requires monthly payments after you borrow funds, and its interest rate is commonly variable. HomeSafe Second is a second-lien reverse mortgage with a fixed rate and no required monthly principal and interest payment on the new loan.*",
          },
        },
        {
          "@type": "Question",
          name: "Can I get HomeSafe Second if I already have a mortgage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, subject to qualification. HomeSafe Second is specifically designed to allow eligible homeowners to keep an existing first mortgage in place while accessing additional home equity. You must remain current on your existing mortgage and continue making its required payments.",
          },
        },
        {
          "@type": "Question",
          name: "Does the HomeSafe Second balance increase over time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Because you are not required to make monthly principal and interest payments on HomeSafe Second,* interest and applicable charges generally accrue and are added to the loan balance. This means the amount you owe can increase over time and your remaining home equity may decrease.",
          },
        },
        {
          "@type": "Question",
          name: "When does HomeSafe Second have to be repaid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The loan becomes due and payable when a maturity event occurs under the loan documents. This can include circumstances such as the borrower selling the home or no longer meeting applicable occupancy or other loan requirements. Your loan specialist will explain the repayment and maturity provisions before you decide whether the program is appropriate for you.",
          },
        },
        {
          "@type": "Question",
          name: "Is HomeSafe Second a HELOC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. HomeSafe Second is not a HELOC or traditional home equity loan. It is a second-lien reverse mortgage designed for eligible older homeowners.",
          },
        },
      ],
    },
  ],
};

export default function HomeSafeSecondPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Loan Programs", url: "/loan-programs" },
    {
      name: "HomeSafe Second",
      url: "/loan-programs/homesafe-second",
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSafeSecondSchema),
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Layers size={14} />
              Second-Lien Reverse Mortgage
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              HomeSafe Second®:{" "}
              <span className="block text-[#D4A574] font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-1">
                Access Your Equity Without Replacing Your First Mortgage
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/90 font-medium leading-relaxed mb-4 max-w-2xl">
              Keep your current first mortgage and access your home equity
              without adding a required monthly mortgage payment.*
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-4 max-w-2xl">
              If you&apos;ve built substantial equity in your home but
              don&apos;t want to refinance your existing mortgage, HomeSafe
              Second® gives eligible homeowners another way to access that
              equity.
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-4 max-w-2xl">
              HomeSafe Second is a second-lien{" "}
              <Link
                href="/reverse-mortgage"
                className="text-[#D4A574] underline hover:text-cream transition-colors"
              >
                reverse mortgage
              </Link>{" "}
              designed for eligible older homeowners. Instead of replacing your
              current mortgage, it sits behind it as a second lien.
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-4 max-w-2xl">
              That means you may be able to keep the mortgage rate you already
              have, access a portion of your home&apos;s equity, and avoid
              adding a required monthly mortgage payment on the new loan.*
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-8 max-w-2xl">
              For homeowners with a low-rate first mortgage, that can be an
              important difference.
            </p>

            {/* Primary CTA 1 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
              >
                Check My Eligibility
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/calendar"
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                Talk to a Mortgage Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CONSIDER HOMESAFE SECOND --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-10">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            01 — Core Advantages
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light",
              fraunces.className,
            )}
          >
            Why Consider HomeSafe Second®?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Benefit 1 */}
          <div className="bg-primary-bg border border-line rounded-2xl p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center mb-5">
                <CalendarOff size={22} />
              </div>
              <h3 className="font-semibold text-lg text-ink mb-3">
                No Required Monthly Mortgage Payment*
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                Unlike a traditional{" "}
                <Link
                  href="/loan-programs/heloc-loans"
                  className="text-brand-orange underline hover:no-underline"
                >
                  HELOC
                </Link>{" "}
                or home equity loan, HomeSafe Second does not require monthly
                principal and interest payments on the new loan.*
              </p>
              <p className="text-xs text-ink-2/80 leading-relaxed mb-3">
                Interest and applicable charges accrue to the loan balance over
                time.
              </p>
              <p className="text-xs text-ink-2/80 leading-relaxed">
                You must continue to meet the terms of the loan, including
                paying property taxes, homeowners insurance, applicable HOA
                charges, maintaining the property, and continuing to make any
                required payments on your existing first mortgage.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-primary-bg border border-line rounded-2xl p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center mb-5">
                <Home size={22} />
              </div>
              <h3 className="font-semibold text-lg text-ink mb-3">
                Keep Your Existing First Mortgage
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                Have a first mortgage with a rate you don&apos;t want to give
                up? You don&apos;t have to refinance it simply to access your
                equity.
              </p>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                HomeSafe Second leaves your existing first mortgage in place,
                allowing you to access available equity through a separate
                second-lien reverse mortgage.
              </p>
              <p className="text-xs text-ink-2/80 leading-relaxed">
                This can be especially attractive to homeowners who secured low
                mortgage rates in previous years.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-primary-bg border border-line rounded-2xl p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center mb-5">
                <DollarSign size={22} />
              </div>
              <h3 className="font-semibold text-lg text-ink mb-3">
                Access $50,000 to $1 Million
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                Depending on program requirements and your individual
                circumstances, qualified homeowners may be able to access
                $50,000 to $1 million of their available{" "}
                <Link
                  href="/loan-programs/heloc-loans"
                  className="text-brand-orange underline hover:no-underline"
                >
                  home equity options
                </Link>
                .
              </p>
              <p className="text-xs text-ink-2 font-medium mb-2">
                The amount available depends on factors such as:
              </p>
              <ul className="space-y-1.5 text-xs text-ink-2/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                  Your age
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                  Property value
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                  Existing mortgage balance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                  Available home equity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                  Property type &amp; location
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                  Current program guidelines
                </li>
              </ul>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-primary-bg border border-line rounded-2xl p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center mb-5">
                <Percent size={22} />
              </div>
              <h3 className="font-semibold text-lg text-ink mb-3">
                Fixed Interest Rate
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                HomeSafe Second offers a fixed interest rate, providing greater
                predictability than a traditional HELOC that may have a variable
                rate.
              </p>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                The interest rate does not change simply because market interest
                rates increase.
              </p>
              <p className="text-xs text-ink-2/80 leading-relaxed">
                Because monthly principal and interest payments are not
                required, accrued interest is generally added to the outstanding
                loan balance.
              </p>
            </div>
          </div>

          {/* Benefit 5 */}
          <div className="bg-primary-bg border border-line rounded-2xl p-7 flex flex-col justify-between shadow-sm md:col-span-2 lg:col-span-2">
            <div>
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center mb-5">
                <Lock size={22} />
              </div>
              <h3 className="font-semibold text-lg text-ink mb-3">
                Non-Recourse Protection
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-3">
                HomeSafe Second includes non-recourse protection.
              </p>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                Generally, when the loan becomes due and payable, the borrower
                or estate will not be required to repay more than the value of
                the home, subject to the terms and conditions of the loan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO IS HOMESAFE SECOND DESIGNED FOR --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
                02 — Eligibility &amp; Fit
              </div>
              <h2
                className={cn(
                  "text-3xl sm:text-4xl lg:text-5xl font-light text-ink mb-6",
                  fraunces.className,
                )}
              >
                Who Is HomeSafe Second® Designed For?
              </h2>
              <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
                HomeSafe Second may be worth considering if you:
              </p>
              <ul className="space-y-3.5">
                {[
                  "Meet the applicable minimum age requirement",
                  "Have substantial equity in your home",
                  "Are current on your existing first mortgage",
                  "Want to access home equity without refinancing your first mortgage",
                  "Want to avoid adding a required monthly mortgage payment on the new loan*",
                  "Prefer a fixed-rate option over a variable-rate HELOC",
                  "Need funds for home improvements or major expenses",
                  "Want additional financial flexibility during retirement",
                  "Want to consolidate certain higher-interest debts",
                  "Want access to equity while preserving your existing mortgage",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-ink"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-moss-deep shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 bg-primary-bg border border-line p-6 sm:p-8 rounded-3xl shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-orange mb-3">
                Program Parameters
              </div>
              <h3
                className={cn(
                  "text-2xl font-light text-ink mb-4",
                  fraunces.className,
                )}
              >
                Minimum Age Requirements
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
                HomeSafe Second is generally available to homeowners:
              </p>
              <div className="space-y-3 mb-6">
                <div className="p-3.5 bg-cream/40 rounded-xl border border-line/60 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-ink">
                    Most Eligible States
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-moss-deep">
                    Age 55+
                  </span>
                </div>
                <div className="p-3.5 bg-cream/40 rounded-xl border border-line/60 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-ink">
                    Washington
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-moss-deep">
                    Age 60+
                  </span>
                </div>
                <div className="p-3.5 bg-cream/40 rounded-xl border border-line/60 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-ink">
                    Texas
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-moss-deep">
                    Age 62+
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-ink-2/70 italic leading-normal">
                * Additional borrower, property, equity, credit, and program
                requirements apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOMESAFE SECOND VS TRADITIONAL HELOC --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            03 — Program Comparison
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            HomeSafe Second® vs. a Traditional HELOC
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm mb-6">
          <table className="w-full text-left text-xs sm:text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">Feature</th>
                <th className="px-6 py-4 font-semibold text-moss-deep">
                  HomeSafe Second®
                </th>
                <th className="px-6 py-4 font-semibold">Traditional HELOC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Required monthly payment on new loan
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">No*</td>
                <td className="px-6 py-4 text-ink-2">
                  Typically yes after funds are drawn
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">First mortgage</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Remains in place
                </td>
                <td className="px-6 py-4 text-ink-2">Remains in place</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Interest rate</td>
                <td className="px-6 py-4 text-moss-deep font-medium">Fixed</td>
                <td className="px-6 py-4 text-ink-2">Typically variable</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Type of loan</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Second-lien reverse mortgage
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Home equity line of credit
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Access to funds</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Based on approved loan structure
                </td>
                <td className="px-6 py-4 text-ink-2">Revolving credit line</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Interest</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Accrues to loan balance
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Typically paid through monthly payments
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Age requirement</td>
                <td className="px-6 py-4 text-moss-deep font-medium">Yes</td>
                <td className="px-6 py-4 text-ink-2">
                  Generally no reverse-mortgage age requirement
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Non-recourse protection
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Yes, subject to loan terms
                </td>
                <td className="px-6 py-4 text-ink-2">Generally no</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Best suited for</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Eligible older homeowners seeking equity without a required
                  new monthly mortgage payment*
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Homeowners wanting revolving access to equity who can make
                  monthly payments
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
          Neither option is automatically better. The right choice depends on
          your financial goals, equity, existing mortgage, income, age, and how
          you intend to use the funds.
        </p>

        {/* Primary CTA 2 */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/get-quote"
            className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center"
          >
            Check My Eligibility
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/calendar"
            className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 text-center"
          >
            Talk to a Mortgage Specialist
          </Link>
        </div>
      </section>

      {/* --- HOMESAFE SECOND VS CASH-OUT REFINANCE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/30 border border-line rounded-[32px] p-6 sm:p-10 lg:p-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
            04 — Refinance Comparison
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink mb-6",
              fraunces.className,
            )}
          >
            HomeSafe Second® vs. a Cash-Out Refinance
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-ink-2 leading-relaxed max-w-4xl">
            <p>
              A{" "}
              <Link
                href="/loan-programs/fha-streamline-refinance"
                className="text-brand-orange underline hover:no-underline"
              >
                cash-out refinance
              </Link>{" "}
              replaces your existing first mortgage with an entirely new
              mortgage.
            </p>
            <p>
              That can be an issue if you already have an attractive interest
              rate.
            </p>
            <p>
              For example, if your current first mortgage has a low fixed rate,
              refinancing the entire balance at today&apos;s available rates
              could increase your borrowing costs.
            </p>
            <p>
              HomeSafe Second may allow you to access available equity without
              refinancing your existing first mortgage.
            </p>
            <p className="font-medium text-ink">
              Your original first mortgage stays in place under its existing
              terms, while HomeSafe Second is added as a second lien.
            </p>
          </div>
        </div>
      </section>

      {/* --- WHAT CAN YOU USE THE MONEY FOR --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            05 — Use of Proceeds
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            What Can You Use the Money For?
          </h2>
          <p className="text-xs sm:text-sm text-ink-2 mt-2">
            Homeowners may use their available proceeds for a variety of
            financial needs, subject to program requirements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            "Home improvements or renovations",
            "Paying off higher-interest debt",
            "Medical or unexpected expenses",
            "Retirement expenses",
            "Establishing financial reserves",
            "Helping family members",
            "Major purchases",
            "Other personal financial needs",
          ].map((useCase, idx) => (
            <div
              key={idx}
              className="bg-primary-bg border border-line rounded-2xl p-5 flex items-center gap-3 shadow-sm"
            >
              <CheckCircle2 size={18} className="text-moss-deep shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-ink">
                {useCase}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
          Your{" "}
          <Link
            href="/#start"
            className="text-brand-orange underline hover:no-underline"
          >
            MyLoanDesk loan specialist
          </Link>{" "}
          can help you evaluate whether using home equity makes sense for your
          particular situation.
        </p>
      </section>

      {/* --- FREQUENTLY ASKED QUESTIONS --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="text-center mb-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            06 — Clarity
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            Frequently Asked Questions About HomeSafe Second®
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What is HomeSafe Second?",
              a: "HomeSafe Second is a second-lien reverse mortgage that allows eligible homeowners to access a portion of their home equity while keeping their existing first mortgage in place.",
            },
            {
              q: "Do I have to make monthly payments on HomeSafe Second?",
              a: "HomeSafe Second does not require monthly principal and interest payments on the new loan.* Interest and applicable charges accrue to the loan balance. Borrowers must continue meeting the loan requirements, including paying property taxes, homeowners insurance, applicable HOA charges, maintaining the property, and remaining current on any existing first mortgage.",
            },
            {
              q: "Does HomeSafe Second replace my current mortgage?",
              a: "No. HomeSafe Second is a second lien. Your existing first mortgage remains in place and continues under its existing terms.",
            },
            {
              q: "Who qualifies for HomeSafe Second?",
              a: "HomeSafe Second is designed for eligible older homeowners with sufficient home equity. Minimum age requirements are generally 55 or older, with higher minimum ages in certain states, including 60 in Washington and 62 in Texas. Property, equity, credit, existing mortgage, occupancy, and other program requirements also apply.",
            },
            {
              q: "How much equity can I access?",
              a: "Qualified homeowners may be able to access between $50,000 and $1 million, depending on current program guidelines, property value, existing liens, available equity, age, and other eligibility factors.",
            },
            {
              q: "Is the HomeSafe Second interest rate fixed?",
              a: "Yes. HomeSafe Second offers a fixed interest rate, unlike many HELOCs that use variable interest rates. Interest accrues on the outstanding loan balance according to the terms of the loan.",
            },
            {
              q: "How is HomeSafe Second different from a HELOC?",
              a: "One of the biggest differences is the required monthly payment. A traditional HELOC generally requires monthly payments after you borrow funds, and its interest rate is commonly variable. HomeSafe Second is a second-lien reverse mortgage with a fixed rate and no required monthly principal and interest payment on the new loan.*",
            },
            {
              q: "Can I get HomeSafe Second if I already have a mortgage?",
              a: "Yes, subject to qualification. HomeSafe Second is specifically designed to allow eligible homeowners to keep an existing first mortgage in place while accessing additional home equity. You must remain current on your existing mortgage and continue making its required payments.",
            },
            {
              q: "Does the HomeSafe Second balance increase over time?",
              a: "Yes. Because you are not required to make monthly principal and interest payments on HomeSafe Second,* interest and applicable charges generally accrue and are added to the loan balance. This means the amount you owe can increase over time and your remaining home equity may decrease.",
            },
            {
              q: "When does HomeSafe Second have to be repaid?",
              a: "The loan becomes due and payable when a maturity event occurs under the loan documents. This can include circumstances such as the borrower selling the home or no longer meeting applicable occupancy or other loan requirements. Your loan specialist will explain the repayment and maturity provisions before you decide whether the program is appropriate for you.",
            },
            {
              q: "Is HomeSafe Second a HELOC?",
              a: "No. HomeSafe Second is not a HELOC or traditional home equity loan. It is a second-lien reverse mortgage designed for eligible older homeowners.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="bg-primary-bg border border-line rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-semibold text-base text-ink mb-2 flex items-start gap-2">
                <HelpCircle
                  size={18}
                  className="text-brand-orange shrink-0 mt-0.5"
                />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-ink-2 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Primary CTA 3 */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/get-quote"
            className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 text-center w-full sm:w-auto"
          >
            Check My Eligibility
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/calendar"
            className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 text-center w-full sm:w-auto"
          >
            Talk to a Mortgage Specialist
          </Link>
        </div>
      </section>

      {/* --- ALREADY HAVE A LOW MORTGAGE RATE & FINAL CTA --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/40 border border-line rounded-[32px] p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              Already Have a Low Mortgage Rate?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed max-w-2xl mx-auto">
              Don&apos;t automatically give it up just to access your equity. If
              you secured your first mortgage when interest rates were lower,
              replacing that mortgage through a cash-out refinance may not be
              the only way to access your home&apos;s equity.
            </p>
          </div>

          <div className="bg-primary-bg border border-line rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink mb-4">
              HomeSafe Second may allow you to:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-ink-2">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-moss-deep shrink-0" />
                <span>Keep your existing first mortgage.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-moss-deep shrink-0" />
                <span>Keep its existing interest rate and terms.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-moss-deep shrink-0" />
                <span>Access a portion of your available equity.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-moss-deep shrink-0" />
                <span>
                  Avoid adding a required monthly mortgage payment on the second
                  loan.*
                </span>
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-ink-2 mt-6 leading-relaxed">
              That&apos;s why HomeSafe Second can be worth comparing with a{" "}
              <Link
                href="/loan-programs/heloc-loans"
                className="text-brand-orange underline hover:no-underline"
              >
                HELOC
              </Link>
              , home equity loan, and cash-out refinance before making a
              decision.
            </p>
          </div>

          <div className="text-center mb-8">
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              See If HomeSafe Second® Fits Your Situation
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed max-w-2xl mx-auto mb-4">
              Your home may represent one of your largest financial assets. If
              you need access to that equity, the first question shouldn&apos;t
              simply be, &quot;Can I borrow against my home?&quot;
            </p>
            <blockquote className="text-base sm:text-lg font-serif italic text-moss-deep max-w-xl mx-auto mb-4">
              &quot;What&apos;s the best way for me to access my equity without
              unnecessarily changing the mortgage I already have?&quot;
            </blockquote>
            <p className="text-xs sm:text-sm text-ink-2 leading-relaxed max-w-2xl mx-auto">
              MyLoanDesk can review your situation and help you compare HomeSafe
              Second, HELOCs, home equity loans, cash-out refinancing, and other
              available mortgage options.
            </p>
          </div>

          {/* Primary CTA 4 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              href="/get-quote"
              className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Check My Eligibility
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/calendar"
              className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Talk to a Mortgage Specialist
            </Link>
          </div>
          <p className="text-center text-[12px] text-ink-2/80">
            No obligation to review your available options.
          </p>
        </div>
      </section>

      {/* --- IMPORTANT DISCLOSURES --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="border-t border-line pt-8 text-sm text-ink-2/70 space-y-3 leading-relaxed">
          <p className="font-semibold text-ink-2">Important Disclosures</p>
          <p>
            *No required monthly principal and interest payment applies to the
            HomeSafe Second loan, provided the borrower continues to meet all
            applicable loan obligations. Interest and applicable charges accrue
            to the loan balance.
          </p>
          <p>
            Borrowers must continue to comply with the terms of their existing
            first mortgage and HomeSafe Second loan documents, including paying
            property taxes, homeowners insurance, applicable homeowners
            association charges, maintaining the property, and satisfying
            applicable occupancy and other requirements.
          </p>
          <p>
            HomeSafe Second® is a proprietary second-lien reverse mortgage
            product. Program availability, minimum age, loan amounts, interest
            rates, fees, property eligibility, underwriting requirements, and
            other terms may vary and are subject to change.
          </p>
          <p>
            HomeSafe Second is not a HELOC or traditional home equity loan. Not
            all borrowers or properties will qualify.
          </p>
          <p>
            Consult your loan documents and a qualified mortgage professional
            regarding the specific terms applicable to your transaction.
          </p>
        </div>
      </section>
    </main>
  );
}
