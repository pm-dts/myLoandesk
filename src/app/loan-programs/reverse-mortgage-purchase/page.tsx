import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Home,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Calculator,
  ShieldCheck,
  PiggyBank,
  Wallet,
  TrendingUp,
} from "lucide-react";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import OpenChatReusableBtn from "@/components/site/LoanPrograms/ReverseMortgage/OpenChatReusableBtn";

export const metadata: Metadata = {
  title: "Reverse Mortgage for Purchase | Buy Your Next Home",
  description:
    "Buy your next home with a reverse mortgage and no required monthly principal and interest mortgage payments.* Learn how HECM for Purchase works.",
  alternates: {
    canonical:
      "https://www.myloandesk.com/loan-programs/reverse-mortgage-purchase/",
  },
  openGraph: {
    title: "Reverse Mortgage for Purchase | Buy Your Next Home",
    description:
      "Buy your next home with a reverse mortgage and no required monthly principal and interest mortgage payments.* Learn how HECM for Purchase works.",
    type: "website",
    url: "https://www.myloandesk.com/loan-programs/reverse-mortgage-purchase/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Older homebuyers exploring a Reverse Mortgage for Purchase to buy their next primary residence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reverse Mortgage for Purchase | Buy Your Next Home",
    description:
      "Use a reverse mortgage to finance part of your next primary residence while keeping more of your savings available for retirement.",
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

const reversePurchaseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.myloandesk.com/loan-programs/reverse-mortgage-purchase/#webpage",
      url: "https://www.myloandesk.com/loan-programs/reverse-mortgage-purchase/",
      name: "Reverse Mortgage for Purchase | Buy Your Next Home",
      description:
        "Comprehensive guide to using a HECM for Purchase reverse mortgage to buy a new primary residence without required monthly mortgage payments.",
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
        "https://www.myloandesk.com/loan-programs/reverse-mortgage-purchase/#product",
      name: "Reverse Mortgage for Purchase (HECM for Purchase)",
      description:
        "A federally insured reverse mortgage program enabling eligible homebuyers age 62+ to purchase a primary residence by combining their own funds with loan proceeds, requiring no monthly principal and interest payments.",
      provider: {
        "@id": "https://www.myloandesk.com/#organization",
      },
      category: "ReverseMortgage",
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.myloandesk.com/loan-programs/reverse-mortgage-purchase/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I really buy a home with a reverse mortgage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eligible older homebuyers can use a reverse mortgage to finance part of the purchase of a qualifying primary residence. The FHA-insured program is commonly known as HECM for Purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Do I have to make mortgage payments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are no required monthly principal and interest payments on the reverse mortgage* while applicable loan requirements are met. You remain responsible for property taxes, homeowners insurance, applicable HOA charges, property maintenance, and other obligations under the loan.",
          },
        },
        {
          "@type": "Question",
          name: "How old do I have to be?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For an FHA-insured HECM for Purchase, the youngest borrower generally must be at least 62 years old. Certain proprietary reverse mortgage programs may have different age requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How much money do I have to put down?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no universal percentage. Your required investment depends on factors such as your age, the home's purchase price and appraised value, current interest rates, and the reverse mortgage program. MyLoanDesk can calculate an estimate based on your actual situation.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use money from selling my current home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, proceeds from the sale of your existing home may generally be an eligible source for your required investment, subject to applicable documentation and program requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Can I buy a second home or vacation home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A HECM for Purchase is intended for a home that will be your principal residence. It is not designed to finance a traditional second home or investment property. If you're relocating to a vacation or retirement destination, the new property may potentially qualify if it will actually become your principal residence and all other program requirements are satisfied.",
          },
        },
        {
          "@type": "Question",
          name: "Do I still own the home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You retain title and ownership of your home. The reverse mortgage lender does not become the owner of your property.",
          },
        },
        {
          "@type": "Question",
          name: "Can I sell the home later?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can sell the property. The reverse mortgage balance is generally repaid from the sale proceeds, with remaining equity belonging to you after satisfying the loan and applicable transaction expenses.",
          },
        },
        {
          "@type": "Question",
          name: "What happens to the home when I pass away?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your heirs generally have options under the terms of the reverse mortgage. They may choose to repay the loan and retain the property or sell the property and use the proceeds to satisfy the reverse mortgage. Specific requirements and timelines depend on the loan program and circumstances.",
          },
        },
        {
          "@type": "Question",
          name: "Can I pay off the reverse mortgage early?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generally, yes. Reverse mortgages typically do not require you to keep the loan for a specific number of years, and applicable loan documents govern repayment. Your mortgage specialist can review the specific terms of the program you're considering.",
          },
        },
        {
          "@type": "Question",
          name: "Does the loan balance increase over time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generally, yes. Because monthly principal and interest payments are not required, interest and applicable financed charges accrue to the reverse mortgage balance. As the balance increases, the equity remaining in the property may decrease.",
          },
        },
      ],
    },
  ],
};

export default function ReverseMortgagePurchasePage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Loan Programs", url: "/loan-programs" },
    {
      name: "Reverse Mortgage for Purchase",
      url: "/loan-programs/reverse-mortgage-purchase",
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reversePurchaseSchema),
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Home size={14} />
              HECM for Purchase
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              Reverse Mortgage for Purchase:{" "}
              <span className="block text-[#D4A574] font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-1">
                Buy Your Next Home Without Required Monthly Mortgage Payments*
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/90 font-medium leading-relaxed mb-4 max-w-2xl">
              Use a reverse mortgage to finance part of your next primary
              residence while keeping more of your savings available for
              retirement.
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-4 max-w-2xl">
              A{" "}
              <Link
                href="/reverse-mortgage"
                className="text-[#D4A574] underline hover:text-cream transition-colors"
              >
                reverse mortgage
              </Link>{" "}
              isn&apos;t only for homeowners who want to access equity in a home
              they already own. Eligible homebuyers can also use a Reverse
              Mortgage for Purchase to buy their next primary residence.
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-4 max-w-2xl">
              Instead of paying 100% cash for the home or taking out a
              traditional mortgage with required monthly principal and interest
              payments, you contribute a portion of the purchase price from your
              own eligible funds and use a reverse mortgage to finance the
              remaining eligible amount.
            </p>

            <p className="text-sm sm:text-base text-brand-orange font-bold leading-relaxed mb-8 max-w-2xl">
              The result? You can purchase and own your next home without
              required monthly principal and interest mortgage payments.*
            </p>

            {/* Primary CTA 1 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <OpenChatReusableBtn
                loanProgram="Reverse Mortgage for Purchase"
                text="See How Much Home I Could Buy"
              />
              <Link
                href="/calendar"
                className="bg-cream/10 border border-cream/20 text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/20 transition-colors flex items-center justify-center gap-2 text-center"
              >
                Talk to a Reverse Mortgage Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS A REVERSE MORTGAGE FOR PURCHASE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              01 — Overview
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light leading-tight mb-6",
                fraunces.className,
              )}
            >
              What Is a Reverse Mortgage for Purchase?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-4">
              A Reverse Mortgage for Purchase allows eligible older homebuyers
              to purchase a primary residence and obtain a reverse mortgage in a
              single transaction.
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-4">
              The FHA-insured version is known as a HECM for Purchase, or Home
              Equity Conversion Mortgage for Purchase.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
              How the Financing Works
            </div>
            <ul className="space-y-3.5 text-xs sm:text-sm text-ink">
              {[
                "You provide a required monetary investment toward the purchase.",
                "The reverse mortgage provides the remaining eligible financing.",
                "Unlike a traditional mortgage, you are not required to make monthly principal and interest payments on the reverse mortgage* as long as you continue to meet the loan requirements.",
                "You retain ownership and title to the home.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={18}
                    className="text-moss-deep shrink-0 mt-0.5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- HOW DOES A REVERSE MORTGAGE PURCHASE WORK --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              02 — The Process
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink",
                fraunces.className,
              )}
            >
              How Does a Reverse Mortgage Purchase Work?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 mt-4 max-w-xl mx-auto">
              The concept is fairly simple. Here are the steps involved in using
              a reverse mortgage to buy your next home.
            </p>
          </div>

          <div className="max-w-[800px] mx-auto space-y-4">
            {[
              {
                step: "1",
                title: "Choose Your New Home",
                desc: "Find a property you want to purchase and occupy as your principal residence.",
              },
              {
                step: "2",
                title: "Determine Your Required Investment",
                desc: "Your required funds toward the purchase are calculated based on factors including your age, purchase price, appraised value, current interest rates, and reverse mortgage program.",
              },
              {
                step: "3",
                title: "Provide Eligible Funds",
                desc: "Your required investment may come from eligible sources such as the sale of your current home, savings, investments, or other acceptable funds.",
              },
              {
                step: "4",
                title:
                  "Reverse Mortgage Finances the Remaining Eligible Amount",
                desc: "The reverse mortgage provides the portion of the purchase price you are eligible to finance.",
              },
              {
                step: "5",
                title: "Move Into Your New Home",
                desc: "You own the property and do not have required monthly principal and interest mortgage payments on the reverse mortgage.*",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 p-5 bg-primary-bg border border-line rounded-2xl shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange font-sans text-[14px] font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-ink text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY BUY A HOME WITH A REVERSE MORTGAGE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-6",
                fraunces.className,
              )}
            >
              Why Buy a Home With a Reverse Mortgage?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-4">
              For many retirees, the choice isn&apos;t simply between paying
              cash and getting a traditional mortgage. A Reverse Mortgage for
              Purchase creates another option.
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              Instead of putting all—or most—of your available cash into your
              next home, you may be able to use a portion of your funds for the
              purchase and preserve more of your remaining assets for other
              needs.
            </p>
            <h3 className="font-semibold text-ink mb-4">
              Homebuyers may consider this strategy when they want to:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-ink-2">
              {[
                "Downsize into a smaller home",
                "Move closer to children or grandchildren",
                "Relocate to another city or state",
                "Move to a warmer climate",
                "Purchase a newer or more accessible home",
                "Reduce ongoing housing expenses",
                "Preserve more retirement savings",
                "Avoid required monthly principal and interest mortgage payments*",
                "Increase their home-buying power compared with paying all cash",
                "Keep additional assets available for future expenses",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-moss-deep text-cream border border-moss-deep p-8 rounded-3xl flex flex-col justify-center">
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              How Much Do I Need to Put Down?
            </h2>
            <p className="text-sm text-primary-bg/90 leading-relaxed mb-4 font-medium">
              This is one of the most common questions about a Reverse Mortgage
              for Purchase.
            </p>
            <p className="text-sm text-primary-bg/80 leading-relaxed mb-6">
              There is no single down-payment percentage that applies to every
              borrower. Your required investment depends on several factors,
              including:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-primary-bg/80 mb-6">
              {[
                "Your age",
                "Age of the youngest eligible borrower",
                "Purchase price",
                "Appraised value",
                "Current interest rates",
                "Reverse mortgage program",
                "Applicable lending limits",
                "Property type",
                "Other program requirements",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-brand-orange shrink-0 mt-0.5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-primary-bg/90 leading-relaxed font-medium">
              Generally, a Reverse Mortgage for Purchase requires a substantial
              upfront investment from the buyer, but it may be considerably less
              than purchasing the property entirely with cash.
            </p>
          </div>
        </div>
      </section>

      {/* --- EXAMPLE & COMPARISONS --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        {/* Example Box */}
        <div className="bg-cream/40 border border-line p-8 rounded-3xl mb-12 max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-bold text-ink mb-4">Example</h3>
          <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-4">
            Suppose you&apos;re considering purchasing a $600,000 home.
          </p>
          <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
            Instead of paying the entire $600,000 in cash, you may be able to
            contribute a portion of the purchase price and finance the remaining
            eligible amount with a reverse mortgage.
          </p>
          <p className="text-sm font-semibold text-moss-deep mb-6">
            Your actual required investment must be calculated specifically for
            you.
          </p>
          {/* Primary CTA 2 */}
          <Link
            href="/get-quote"
            className="btn-shine bg-brand-orange text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm inline-flex items-center justify-center gap-2"
          >
            Calculate My Estimated Purchase Options
            <Calculator size={18} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Comparison 1: All Cash */}
          <div>
            <div className="mb-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
                03 — Payment Strategies
              </div>
              <h2
                className={cn(
                  "text-2xl sm:text-3xl font-light text-ink",
                  fraunces.className,
                )}
              >
                Reverse Mortgage Purchase vs. Paying All Cash
              </h2>
            </div>
            <p className="text-sm text-ink-2 leading-relaxed mb-6">
              Imagine you&apos;re selling your current home and have substantial
              cash available for your next purchase. You could put all of that
              money into the next home. Or you could potentially use a Reverse
              Mortgage for Purchase.
            </p>
            <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm text-ink">
                <thead className="bg-cream/40 border-b border-line text-[11px] uppercase tracking-wider text-ink-2">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Feature</th>
                    <th className="px-4 py-3 font-semibold text-moss-deep">
                      Reverse Mortgage for Purchase
                    </th>
                    <th className="px-4 py-3 font-semibold">
                      All-Cash Purchase
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60">
                  <tr>
                    <td className="px-4 py-3 font-semibold">Own the home</td>
                    <td className="px-4 py-3 text-moss-deep">Yes</td>
                    <td className="px-4 py-3 text-ink-2">Yes</td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">
                      Required monthly principal & interest mortgage payment
                    </td>
                    <td className="px-4 py-3 text-moss-deep font-medium">
                      No*
                    </td>
                    <td className="px-4 py-3 text-ink-2">No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      Uses all purchase funds upfront
                    </td>
                    <td className="px-4 py-3 text-moss-deep font-medium">No</td>
                    <td className="px-4 py-3 text-ink-2">Yes</td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">
                      Keeps some assets available
                    </td>
                    <td className="px-4 py-3 text-moss-deep">Potentially</td>
                    <td className="px-4 py-3 text-ink-2">
                      Less cash remains after purchase
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      Reverse mortgage balance
                    </td>
                    <td className="px-4 py-3 text-moss-deep">Yes</td>
                    <td className="px-4 py-3 text-ink-2">No mortgage</td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">
                      Interest accrues
                    </td>
                    <td className="px-4 py-3 text-moss-deep">Yes</td>
                    <td className="px-4 py-3 text-ink-2">No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      Property taxes & insurance required
                    </td>
                    <td className="px-4 py-3 text-moss-deep">Yes</td>
                    <td className="px-4 py-3 text-ink-2">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-ink-2/80 mt-3 italic leading-relaxed">
              A reverse mortgage purchase may allow you to preserve more liquid
              assets, but interest and applicable charges accrue on the reverse
              mortgage balance over time. Neither approach is automatically
              better. The right choice depends on your finances, goals, estate
              plans, and expected length of time in the home.
            </p>
          </div>

          {/* Comparison 2: Traditional Mortgage */}
          <div>
            <div className="mb-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
                04 — Mortgage Types
              </div>
              <h2
                className={cn(
                  "text-2xl sm:text-3xl font-light text-ink",
                  fraunces.className,
                )}
              >
                Reverse Mortgage Purchase vs. Traditional Mortgage
              </h2>
            </div>
            <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm mt-[52px]">
              <table className="w-full text-left text-xs sm:text-sm text-ink">
                <thead className="bg-cream/40 border-b border-line text-[11px] uppercase tracking-wider text-ink-2">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Feature</th>
                    <th className="px-4 py-3 font-semibold text-moss-deep">
                      Reverse Mortgage Purchase
                    </th>
                    <th className="px-4 py-3 font-semibold">
                      Traditional Mortgage
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60">
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      Monthly principal & interest payment
                    </td>
                    <td className="px-4 py-3 text-moss-deep font-medium">
                      Not required*
                    </td>
                    <td className="px-4 py-3 text-ink-2">Required</td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">
                      Buyer contributes funds at closing
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      Yes - substantial investment
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      Typically down payment
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      Minimum age requirement
                    </td>
                    <td className="px-4 py-3 text-moss-deep">Yes</td>
                    <td className="px-4 py-3 text-ink-2">Generally no</td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">Home ownership</td>
                    <td className="px-4 py-3 text-moss-deep">
                      You retain title
                    </td>
                    <td className="px-4 py-3 text-ink-2">You retain title</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Interest</td>
                    <td className="px-4 py-3 text-moss-deep">
                      Accrues to loan balance
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      Typically paid monthly
                    </td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">Loan balance</td>
                    <td className="px-4 py-3 text-moss-deep">
                      Generally increases over time
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      Generally decreases with payments
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">
                      Primary residence required
                    </td>
                    <td className="px-4 py-3 text-moss-deep">Yes</td>
                    <td className="px-4 py-3 text-ink-2">
                      Depends on loan program
                    </td>
                  </tr>
                  <tr className="bg-[#F3EFE6]">
                    <td className="px-4 py-3 font-semibold">
                      Property taxes & insurance
                    </td>
                    <td className="px-4 py-3 text-moss-deep">
                      Borrower responsibility
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      Borrower responsibility
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Repayment</td>
                    <td className="px-4 py-3 text-moss-deep">
                      Generally upon a maturity event
                    </td>
                    <td className="px-4 py-3 text-ink-2">
                      According to monthly loan schedule
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* --- INCREASING BUYING POWER & PROPERTY TYPES --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2
                className={cn(
                  "text-2xl sm:text-3xl font-light text-ink mb-6",
                  fraunces.className,
                )}
              >
                Could a Reverse Mortgage Increase Your Home-Buying Power?
              </h2>
              <p className="text-lg font-semibold text-moss-deep mb-4">
                Potentially.
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-4">
                Suppose you plan to spend $400,000 cash on your next home.
                Rather than purchasing a $400,000 property entirely with cash, a
                Reverse Mortgage for Purchase may allow you to combine your
                available funds with reverse mortgage financing and potentially
                consider a higher-priced home.
              </p>
              <p className="text-sm font-medium text-ink mb-4">
                That could give you additional options when looking for:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-ink-2 mb-6">
                {[
                  "A better location",
                  "A newer property",
                  "A one-story home",
                  "A home with accessibility features",
                  "A property closer to family",
                  "A home in a retirement community",
                  "A property requiring less maintenance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-primary-bg border border-line rounded-xl">
                <p className="text-sm font-medium text-ink mb-2">
                  This doesn&apos;t mean you should automatically purchase a
                  more expensive home.
                </p>
                <p className="text-sm text-ink-2">
                  It means a reverse mortgage may give you another way to
                  structure the purchase.
                </p>
              </div>
            </div>

            <div className="space-y-10">
              {/* Who Qualifies */}
              <div>
                <h2
                  className={cn(
                    "text-2xl font-light text-ink mb-4",
                    fraunces.className,
                  )}
                >
                  Who May Qualify?
                </h2>
                <p className="text-sm text-ink-2 leading-relaxed mb-4">
                  For an FHA-insured HECM for Purchase, the youngest borrower
                  generally must be at least 62 years old. Borrowers must also
                  meet applicable FHA and lender requirements.
                </p>
                <p className="text-sm font-medium text-ink mb-3">
                  These generally include:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-ink-2 mb-2">
                  {[
                    "Purchasing an eligible property",
                    "Occupying the property as a principal residence",
                    "Providing the required monetary investment from eligible sources",
                    "Meeting applicable financial assessment requirements",
                    "Completing HUD-approved reverse mortgage counseling",
                    "Paying property taxes and homeowners insurance",
                    "Maintaining the property",
                    "Meeting applicable FHA and lender requirements",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-moss-deep shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-ink-2 italic">
                  Other proprietary reverse mortgage purchase programs may have
                  different requirements.
                </p>
              </div>

              {/* Property Types */}
              <div>
                <h2
                  className={cn(
                    "text-2xl font-light text-ink mb-4",
                    fraunces.className,
                  )}
                >
                  What Types of Homes Can You Purchase?
                </h2>
                <p className="text-sm text-ink-2 leading-relaxed mb-3">
                  Eligible property types depend on the reverse mortgage
                  program. Depending on applicable requirements, eligible
                  properties may include certain:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-ink-2 mb-4">
                  {[
                    "Single-family homes",
                    "FHA-approved condominium units",
                    "Certain condominium units meeting applicable requirements",
                    "Two-to-four-unit properties when borrower occupancy requirements are satisfied",
                    "Manufactured homes that meet applicable program requirements",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Home
                        size={16}
                        className="text-brand-orange shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs sm:text-sm text-ink-2 font-medium">
                  The property must satisfy the requirements of the specific
                  reverse mortgage program being used.{" "}
                  <Link
                    href="/#start"
                    className="text-brand-orange underline hover:no-underline"
                  >
                    MyLoanDesk
                  </Link>{" "}
                  can review a property before you make an offer to determine
                  whether it appears to meet applicable program requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FUNDS SOURCE AND OWNERSHIP --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-primary-bg border border-line p-8 sm:p-10 rounded-3xl shadow-sm">
            <h3
              className={cn(
                "text-2xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              Where Can the Buyer&apos;s Funds Come From?
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed mb-4">
              Your required investment must come from acceptable sources under
              the applicable reverse mortgage program.
            </p>
            <p className="text-sm font-medium text-ink mb-4">
              Depending on program requirements, eligible funds may include:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Proceeds from the sale of your current home",
                "Checking or savings accounts",
                "Investment or retirement assets",
                "Other verified acceptable funds",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-cream/30 rounded-xl border border-line/50 text-sm text-ink-2"
                >
                  <PiggyBank size={18} className="text-moss-deep shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-2 leading-relaxed mb-2">
              Certain restrictions may apply to borrowed funds and other
              sources.
            </p>
            <p className="text-sm font-medium text-ink leading-relaxed">
              Your mortgage specialist should verify the source of funds before
              you enter into a purchase transaction.
            </p>
          </div>

          <div className="bg-primary-bg border border-line p-8 sm:p-10 rounded-3xl shadow-sm flex flex-col justify-center">
            <h3
              className={cn(
                "text-2xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              Do You Still Own the Home?
            </h3>
            <p className="text-xl font-bold text-moss-deep mb-4">Yes.</p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              Using a reverse mortgage does not mean giving ownership of your
              home to the lender.
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6">
              You purchase the property and retain title and ownership, just as
              you would with another mortgage. The reverse mortgage is a lien
              against the property.
            </p>
            <div className="p-5 bg-cream/40 rounded-2xl border border-line/60">
              <p className="text-sm text-ink-2 font-medium leading-relaxed">
                You remain responsible for complying with the loan requirements,
                including paying property taxes, homeowners insurance,
                applicable HOA charges, and maintaining the home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FREQUENTLY ASKED QUESTIONS --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="text-center mb-12">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            05 — Clarity
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            Frequently Asked Questions About Reverse Mortgage Purchase
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Can I really buy a home with a reverse mortgage?",
              a: "Yes. Eligible older homebuyers can use a reverse mortgage to finance part of the purchase of a qualifying primary residence. The FHA-insured program is commonly known as HECM for Purchase.",
            },
            {
              q: "Do I have to make mortgage payments?",
              a: "There are no required monthly principal and interest payments on the reverse mortgage* while applicable loan requirements are met. You remain responsible for property taxes, homeowners insurance, applicable HOA charges, property maintenance, and other obligations under the loan.",
            },
            {
              q: "How old do I have to be?",
              a: "For an FHA-insured HECM for Purchase, the youngest borrower generally must be at least 62 years old. Certain proprietary reverse mortgage programs may have different age requirements.",
            },
            {
              q: "How much money do I have to put down?",
              a: "There is no universal percentage. Your required investment depends on factors such as your age, the home's purchase price and appraised value, current interest rates, and the reverse mortgage program. MyLoanDesk can calculate an estimate based on your actual situation.",
            },
            {
              q: "Can I use money from selling my current home?",
              a: "Yes, proceeds from the sale of your existing home may generally be an eligible source for your required investment, subject to applicable documentation and program requirements.",
            },
            {
              q: "Can I buy a second home or vacation home?",
              a: "A HECM for Purchase is intended for a home that will be your principal residence. It is not designed to finance a traditional second home or investment property. If you're relocating to a vacation or retirement destination, the new property may potentially qualify if it will actually become your principal residence and all other program requirements are satisfied.",
            },
            {
              q: "Do I still own the home?",
              a: "Yes. You retain title and ownership of your home. The reverse mortgage lender does not become the owner of your property.",
            },
            {
              q: "Can I sell the home later?",
              a: "Yes. You can sell the property. The reverse mortgage balance is generally repaid from the sale proceeds, with remaining equity belonging to you after satisfying the loan and applicable transaction expenses.",
            },
            {
              q: "What happens to the home when I pass away?",
              a: "Your heirs generally have options under the terms of the reverse mortgage. They may choose to repay the loan and retain the property or sell the property and use the proceeds to satisfy the reverse mortgage. Specific requirements and timelines depend on the loan program and circumstances.",
            },
            {
              q: "Can I pay off the reverse mortgage early?",
              a: "Generally, yes. Reverse mortgages typically do not require you to keep the loan for a specific number of years, and applicable loan documents govern repayment. Your mortgage specialist can review the specific terms of the program you're considering.",
            },
            {
              q: "Does the loan balance increase over time?",
              a: "Generally, yes. Because monthly principal and interest payments are not required, interest and applicable financed charges accrue to the reverse mortgage balance. As the balance increases, the equity remaining in the property may decrease.",
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
      </section>

      {/* --- MOVING IN RETIREMENT / FINAL CTA --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/40 border border-line rounded-[32px] p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              Thinking About Moving in Retirement?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed max-w-2xl mx-auto mb-4">
              Your next home doesn&apos;t necessarily have to be an all-cash
              purchase. And it doesn&apos;t necessarily have to come with
              another traditional monthly mortgage payment.
            </p>
            <p className="text-sm sm:text-base text-ink font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              A Reverse Mortgage for Purchase may provide a third option.
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed max-w-2xl mx-auto mb-8">
              You may be able to combine a portion of your available assets with
              reverse mortgage financing to purchase the home you want while
              preserving more of your remaining funds.
            </p>
          </div>

          <div className="bg-white border border-line rounded-2xl p-6 sm:p-8 mb-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-ink mb-4 text-center">
              That could mean moving:
            </p>
            <ul className="flex flex-wrap justify-center gap-3">
              {[
                "Closer to your family.",
                "Into a smaller home.",
                "Into a more accessible home.",
                "To another state.",
                "Into a home better suited for retirement.",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="bg-cream/40 px-4 py-2 rounded-full border border-line/60 text-xs sm:text-sm text-ink-2"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-center font-medium text-moss-deep mt-6">
              The important part is determining whether the numbers make sense
              for your situation.
            </p>
          </div>

          <div className="text-center">
            <h3
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              Find Out How Much Home You Could Purchase
            </h3>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed max-w-2xl mx-auto mb-6">
              If you&apos;re considering buying your next home, MyLoanDesk can
              prepare a personalized Reverse Mortgage for Purchase analysis.
            </p>
            <p className="text-sm font-semibold text-ink mb-4">
              We&apos;ll help you determine:
            </p>
            <ul className="text-sm text-ink-2 space-y-2 mb-8 inline-block text-left">
              <li>• How much you may qualify to finance.</li>
              <li>
                • Approximately how much you may need to bring to closing.
              </li>
              <li>• What purchase price may fit your available funds.</li>
              <li>
                • Whether HECM or another available reverse mortgage program may
                work for you.
              </li>
              <li>
                • How a reverse mortgage purchase compares with paying cash or
                using traditional financing.
              </li>
            </ul>

            {/* Primary CTA 3 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <OpenChatReusableBtn
                loanProgram="Reverse Mortgage for Purchase"
                text="See My Purchase Options"
              />
              <Link
                href="/calendar"
                className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Talk to a Reverse Mortgage Specialist
              </Link>
            </div>
            <p className="text-center text-[12px] text-ink-2/80">
              No obligation. Review the numbers before deciding.
            </p>
          </div>
        </div>
      </section>

      {/* --- IMPORTANT DISCLOSURES --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="border-t border-line pt-8 text-sm text-ink-2/70 space-y-3 leading-relaxed">
          <p className="font-semibold text-ink-2">Important Disclosures</p>
          <p>
            *No required monthly principal and interest mortgage payments are
            required on a reverse mortgage while applicable loan requirements
            are met. A reverse mortgage is not a payment-free loan.
          </p>
          <p>
            Borrowers remain responsible for property taxes, homeowners
            insurance, applicable HOA charges, property maintenance, and
            compliance with all applicable loan terms. Failure to meet these
            obligations may cause the loan to become due and payable.
          </p>
          <p>
            Interest and applicable financed charges accrue to the reverse
            mortgage balance over time, generally increasing the amount owed and
            reducing remaining home equity.
          </p>
          <p>
            HECM borrowers must meet applicable FHA requirements and complete
            HUD-approved reverse mortgage counseling.
          </p>
          <p>
            A HECM for Purchase must be used to purchase an eligible property
            that will serve as the borrower&apos;s principal residence. Property
            and occupancy requirements apply.
          </p>
          <p>
            Reverse mortgage programs, interest rates, required borrower
            investment, available proceeds, costs, property requirements, and
            eligibility guidelines are subject to change. Not all borrowers or
            properties will qualify.
          </p>
          <p>
            MyLoanDesk does not provide tax, legal, investment, or
            financial-planning advice. Consumers should consult appropriate
            professionals regarding their individual circumstances.
          </p>
        </div>
      </section>
    </main>
  );
}
