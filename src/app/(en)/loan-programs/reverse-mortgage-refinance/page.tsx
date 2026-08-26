import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Landmark,
  Coins,
  FileCheck,
  Percent,
} from "lucide-react";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";
import OpenChatReusableBtn from "@/components/site/LoanPrograms/ReverseMortgage/OpenChatReusableBtn";

export const metadata: Metadata = {
  title: "Reverse Mortgage Refinance | Access Your Home Equity",
  description:
    "Learn how a reverse mortgage refinance may eliminate your required monthly mortgage payment* and provide access to your home equity.",
  alternates: {
    canonical:
      "https://www.myloandesk.com/loan-programs/reverse-mortgage-refinance/",
  },
  openGraph: {
    title: "Reverse Mortgage Refinance | Access Your Home Equity",
    description:
      "Learn how a reverse mortgage refinance may eliminate your required monthly mortgage payment* and provide access to your home equity.",
    type: "website",
    url: "https://www.myloandesk.com/loan-programs/reverse-mortgage-refinance/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Homeowner reviewing reverse mortgage refinance options to access home equity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reverse Mortgage Refinance | Access Your Home Equity",
    description:
      "Eliminate your required monthly mortgage payment* and access your home equity with a reverse mortgage refinance.",
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

const reverseRefinanceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.myloandesk.com/loan-programs/reverse-mortgage-refinance/#webpage",
      url: "https://www.myloandesk.com/loan-programs/reverse-mortgage-refinance/",
      name: "Reverse Mortgage Refinance | Access Your Home Equity",
      description:
        "Comprehensive guide to refinancing an existing mortgage with a reverse mortgage to eliminate monthly payments and access home equity.",
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
        "https://www.myloandesk.com/loan-programs/reverse-mortgage-refinance/#product",
      name: "Reverse Mortgage Refinance (HECM)",
      description:
        "A reverse mortgage program designed to pay off an existing mortgage, eliminating required monthly mortgage payments, and potentially providing access to remaining home equity.",
      provider: {
        "@id": "https://www.myloandesk.com/#organization",
      },
      category: "ReverseMortgage",
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.myloandesk.com/loan-programs/reverse-mortgage-refinance/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I refinance my current mortgage into a reverse mortgage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if you meet the applicable eligibility requirements and have sufficient reverse mortgage proceeds to satisfy your existing mortgage and other required obligations.",
          },
        },
        {
          "@type": "Question",
          name: "Will a reverse mortgage eliminate my mortgage payment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A reverse mortgage can pay off your existing mortgage and does not require monthly principal and interest payments on the new reverse mortgage.* You must continue paying property taxes, homeowners insurance, applicable HOA charges, and other required property expenses and comply with the loan terms.",
          },
        },
        {
          "@type": "Question",
          name: "Do I have to own my home free and clear?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. You can have an existing mortgage. However, your existing mortgage generally must be paid off at closing using reverse mortgage proceeds and/or other funds if necessary.",
          },
        },
        {
          "@type": "Question",
          name: "Do I lose ownership of my home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. You retain title and continue to own your home. The reverse mortgage creates a lien against the property, similar to other mortgage loans.",
          },
        },
        {
          "@type": "Question",
          name: "Can I sell my home after getting a reverse mortgage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can sell your home. The reverse mortgage balance is generally repaid from the sale proceeds, and remaining equity belongs to you after satisfying the loan and applicable transaction costs.",
          },
        },
        {
          "@type": "Question",
          name: "Can my heirs keep the home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generally, yes. After a maturity event, heirs may have options to repay the reverse mortgage and retain the property, subject to applicable loan terms and program requirements. They may also choose to sell the property and use the proceeds to satisfy the reverse mortgage.",
          },
        },
        {
          "@type": "Question",
          name: "Will I ever owe more than my home is worth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reverse mortgages generally include non-recourse protections, subject to applicable program and loan terms. For an FHA-insured HECM, the mortgage insurance provides specific non-recourse protections. Your loan specialist can explain how these provisions apply to your particular reverse mortgage.",
          },
        },
        {
          "@type": "Question",
          name: "Is reverse mortgage money taxable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reverse mortgage proceeds are generally considered loan proceeds rather than earned income. However, individual tax circumstances differ. You should consult a qualified tax professional regarding your specific situation rather than relying on mortgage information as tax advice.",
          },
        },
        {
          "@type": "Question",
          name: "Does the reverse mortgage balance increase?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generally, yes. Because monthly principal and interest payments are not required, * interest, mortgage insurance when applicable, and other financed charges may accrue and increase the loan balance over time. As the balance increases, your remaining home equity may decrease.",
          },
        },
        {
          "@type": "Question",
          name: "When does a reverse mortgage become due?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A reverse mortgage generally becomes due and payable after a maturity event defined by the loan documents, such as when the last applicable borrower permanently leaves the home, sells the property, or fails to meet certain loan obligations. Specific requirements depend on the reverse mortgage program and loan terms.",
          },
        },
      ],
    },
  ],
};

export default function ReverseMortgageRefinancePage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Loan Programs", url: "/loan-programs" },
    {
      name: "Reverse Mortgage Refinance",
      url: "/loan-programs/reverse-mortgage-refinance",
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reverseRefinanceSchema),
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/20 text-xs font-semibold uppercase tracking-wider text-[#D4A574] mb-6">
              <Landmark size={14} />
              Refinance Solutions for Ages 62+
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight font-light text-primary-bg mb-6",
                fraunces.className,
              )}
            >
              Reverse Mortgage Refinance:{" "}
              <span className="block text-[#D4A574] font-serif italic text-3xl sm:text-4xl lg:text-5xl mt-1">
                Turn Your Home Equity Into Financial Flexibility
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary-bg/90 font-medium leading-relaxed mb-4 max-w-2xl">
              Replace your existing mortgage with a reverse mortgage, eliminate
              required monthly mortgage payments, and access a portion of your
              available home equity.
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-4 max-w-2xl">
              If you&apos;re 62 or older and have built substantial equity in
              your home, a reverse mortgage refinance may give you a way to put
              that equity to work without selling your home.
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-4 max-w-2xl">
              A reverse mortgage can be used to pay off your existing mortgage,
              potentially eliminate your required monthly mortgage payment, and
              provide access to additional available equity.
            </p>

            <p className="text-sm sm:text-base text-primary-bg/80 leading-relaxed mb-4 max-w-2xl">
              Depending on the loan and your eligibility, proceeds may be
              available as a lump sum, monthly advances, a line of credit, or a
              combination of available options.
            </p>

            <p className="text-sm sm:text-base font-bold text-brand-orange leading-relaxed mb-8 max-w-2xl">
              You continue to own your home and retain title.
            </p>

            {/* Primary CTA 1 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <OpenChatReusableBtn
                loanProgram="Reverse Mortgage Refinance"
                text="See If I Qualify"
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

      {/* --- HOW DOES A REVERSE MORTGAGE REFINANCE WORK --- */}
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
              How Does a Reverse Mortgage Refinance Work?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-4">
              A traditional mortgage requires you to make monthly principal and
              interest payments to the lender.
            </p>
            <p className="text-sm sm:text-base text-ink-2 font-semibold mb-4">
              A reverse mortgage works differently.
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-4">
              When you refinance with a reverse mortgage, proceeds from the new
              loan are first used to pay off your existing mortgage and other
              required liens or obligations.
            </p>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
              If sufficient proceeds remain after satisfying those obligations
              and applicable closing costs, the remaining funds may be available
              to you based on the loan program and payment option selected.
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream/40 border border-line p-6 sm:p-8 rounded-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
              The Result?
            </div>
            <p className="text-sm text-ink-2 mb-4">You may be able to:</p>
            <ul className="space-y-3.5 text-xs sm:text-sm text-ink">
              {[
                "Pay off your existing mortgage",
                "Eliminate required monthly principal and interest mortgage payments*",
                "Access a portion of your home's available equity",
                "Remain in your home",
                "Retain ownership and title",
                "Create additional financial flexibility during retirement",
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

      {/* --- HOW CAN YOU RECEIVE YOUR FUNDS --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-3">
              02 — Distribution
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink",
                fraunces.className,
              )}
            >
              How Can You Receive Your Reverse Mortgage Funds?
            </h2>
            <p className="text-xs sm:text-sm text-ink-2 mt-2">
              Depending on the reverse mortgage program you select and your
              eligibility, available proceeds may be structured in several ways.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Lump Sum",
                desc: "Receive eligible available proceeds as a lump-sum distribution, subject to applicable program limitations. This may be useful for homeowners who have a specific financial need or major expense.",
                icon: Coins,
              },
              {
                title: "Monthly Advances",
                desc: "You may be able to structure your available proceeds as monthly advances to supplement other sources of retirement income.",
                icon: FileCheck,
              },
              {
                title: "Line of Credit",
                desc: "Eligible borrowers may choose a reverse mortgage line of credit, providing access to available funds when needed. With certain reverse mortgage programs, unused available credit may grow over time according to the terms of the loan.",
                icon: Percent,
              },
              {
                title: "Combination",
                desc: "Depending on the program, you may be able to combine available payment options to create a structure that fits your financial needs.",
                icon: Landmark,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-primary-bg border border-line rounded-2xl p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center font-bold text-sm mb-4">
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-base text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-ink-2 text-center mt-8 max-w-2xl mx-auto">
            Your{" "}
            <Link
              href="/#start"
              className="text-brand-orange underline hover:no-underline"
            >
              MyLoanDesk mortgage specialist
            </Link>{" "}
            can explain which options are currently available based on your loan
            program.
          </p>
        </div>
      </section>

      {/* --- WHY DO HOMEOWNERS REFINANCE INTO A REVERSE MORTGAGE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-10">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            03 — Use Cases
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            Why Do Homeowners Refinance Into a Reverse Mortgage?
          </h2>
          <p className="text-sm sm:text-base text-ink-2 mt-4 max-w-3xl leading-relaxed">
            There isn&apos;t one reason that fits every homeowner. Some
            borrowers want to eliminate an existing mortgage payment. Others
            want access to additional liquidity or simply want more flexibility
            during retirement.
          </p>
        </div>

        <div className="bg-primary-bg border border-line rounded-3xl p-6 sm:p-10 shadow-sm">
          <h3 className="text-lg font-semibold text-ink mb-6">
            Common reasons include:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Paying off an existing mortgage",
              "Eliminating required monthly mortgage payments*",
              "Supplementing retirement cash flow",
              "Establishing an emergency financial reserve",
              "Paying off certain higher-interest debts",
              "Funding home improvements",
              "Handling unexpected expenses",
              "Paying medical or long-term care expenses",
              "Creating a line of credit for future needs",
              "Helping with major planned expenses",
              "Remaining in the home longer",
            ].map((reason, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-cream/30 rounded-xl border border-line/50"
              >
                <CheckCircle2 size={16} className="text-moss-deep shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-ink">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHAT HAPPENS TO MY CURRENT MORTGAGE / OWNERSHIP --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Mortgage */}
          <div className="bg-moss-deep text-cream border border-moss-deep p-8 sm:p-10 rounded-3xl">
            <h3
              className={cn(
                "text-2xl font-light text-primary-bg mb-4",
                fraunces.className,
              )}
            >
              What Happens to My Current Mortgage?
            </h3>
            <p className="text-sm text-primary-bg/80 leading-relaxed mb-6">
              Your existing mortgage generally must be paid off as part of the
              reverse mortgage transaction. Reverse mortgage proceeds are first
              applied toward paying off the existing mortgage and other required
              liens.
            </p>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="text-sm font-semibold text-primary-bg mb-2">
                Example
              </h4>
              <p className="text-xs text-primary-bg/80 leading-relaxed mb-2">
                Suppose your home is worth $700,000 and you still owe $150,000
                on your current mortgage.
              </p>
              <p className="text-xs text-primary-bg/80 leading-relaxed mb-2">
                If you qualify for sufficient reverse mortgage proceeds, a
                portion would first be used to pay off that $150,000 mortgage.
              </p>
              <p className="text-xs text-primary-bg/80 leading-relaxed">
                Any additional proceeds available after paying required liens,
                costs, and other obligations may then be available to you
                according to the terms of your reverse mortgage.
              </p>
            </div>
            <p className="text-[11px] text-primary-bg/60 italic mt-4">
              The actual amount available depends on your age, home value,
              current mortgage balance, interest rates, program limits, property
              eligibility, and other factors.
            </p>
          </div>

          {/* Ownership */}
          <div className="bg-cream/40 border border-line p-8 sm:p-10 rounded-3xl">
            <h3
              className={cn(
                "text-2xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              Do I Still Own My Home?
            </h3>
            <p className="text-lg font-bold text-moss-deep mb-4">Yes.</p>
            <p className="text-sm text-ink-2 leading-relaxed mb-4">
              One of the most common misconceptions about reverse mortgages is
              that the lender takes ownership of your home.
            </p>
            <p className="text-sm font-medium text-ink leading-relaxed mb-4">
              You continue to own your home and retain title.
            </p>
            <p className="text-sm text-ink-2 leading-relaxed mb-4">
              Like any mortgage, the lender has a lien against the property.
            </p>
            <p className="text-sm text-ink-2 leading-relaxed">
              You remain responsible for meeting the terms of the reverse
              mortgage, including paying property taxes, homeowners insurance,
              applicable HOA charges, and maintaining the property.
            </p>
          </div>
        </div>
      </section>

      {/* --- REVERSE MORTGAGE VS TRADITIONAL REFINANCE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-2">
            04 — Program Comparison
          </div>
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-light text-ink",
              fraunces.className,
            )}
          >
            Reverse Mortgage Refinance vs. Traditional Refinance
          </h2>
        </div>

        <div className="overflow-x-auto border border-line rounded-2xl bg-primary-bg shadow-sm mb-6">
          <table className="w-full text-left text-xs sm:text-sm text-ink">
            <thead className="bg-cream/40 border-b border-line text-xs uppercase tracking-wider text-ink-2">
              <tr>
                <th className="px-6 py-4 font-semibold">Feature</th>
                <th className="px-6 py-4 font-semibold text-moss-deep">
                  Reverse Mortgage Refinance
                </th>
                <th className="px-6 py-4 font-semibold">
                  Traditional Mortgage Refinance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Required monthly principal &amp; interest payment
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">No*</td>
                <td className="px-6 py-4 text-ink-2">Yes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Minimum age</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Generally 62+ for HECM
                </td>
                <td className="px-6 py-4 text-ink-2">
                  No reverse-mortgage age requirement
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Existing mortgage</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Paid off through new loan
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Paid off through new loan
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Access home equity</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Potentially
                </td>
                <td className="px-6 py-4 text-ink-2">Potentially</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Monthly advances available
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Depending on program
                </td>
                <td className="px-6 py-4 text-ink-2">No</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Line-of-credit option
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Depending on program
                </td>
                <td className="px-6 py-4 text-ink-2">Not typically</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">
                  Remain owner of home
                </td>
                <td className="px-6 py-4 text-moss-deep font-medium">Yes</td>
                <td className="px-6 py-4 text-ink-2">Yes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Loan balance</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Generally increases as interest/ charges accrue
                </td>
                <td className="px-6 py-4 text-ink-2">
                  Generally decreases as payments are made
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Repayment</td>
                <td className="px-6 py-4 text-moss-deep font-medium">
                  Generally upon a maturity event
                </td>
                <td className="px-6 py-4 text-ink-2">Monthly over loan term</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
          A reverse mortgage isn&apos;t automatically better than a traditional
          refinance. The right option depends on your goals, available equity,
          current mortgage, age, finances, and how long you expect to remain in
          your home.
        </p>

        {/* Primary CTA 2 */}
        <div className="flex flex-col sm:flex-row gap-4">
          <OpenChatReusableBtn
            loanProgram="Reverse Mortgage Refinance"
            text="See If I Qualify"
          />
          <Link
            href="/calendar"
            className="bg-primary-bg border border-line text-ink px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-cream/50 transition-colors flex items-center justify-center gap-2 text-center"
          >
            Talk to a Reverse Mortgage Specialist
          </Link>
        </div>
      </section>

      {/* --- REVERSE MORTGAGE VS HOMESAFE SECOND --- */}
      <section className="py-16 sm:py-24 border-t border-b border-line bg-cream/20 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              Reverse Mortgage Refinance vs. HomeSafe Second®
            </h2>
            <p className="text-sm sm:text-base font-semibold text-ink mb-2">
              Already have a first mortgage with a low interest rate that you
              don&apos;t want to replace?
            </p>
            <p className="text-sm sm:text-base text-ink-2 mb-8">
              You may have another option.
            </p>
            <p className="text-sm text-ink-2 leading-relaxed mb-8">
              <Link
                href="/loan-programs/homesafe-second"
                className="text-brand-orange underline hover:no-underline font-medium"
              >
                HomeSafe Second®
              </Link>{" "}
              is a second-lien reverse mortgage designed for eligible homeowners
              that may allow you to access equity without refinancing your
              existing first mortgage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-primary-bg border border-line p-8 rounded-2xl shadow-sm text-center">
              <h3 className="text-lg font-bold text-ink mb-4">
                Reverse Mortgage Refinance
              </h3>
              <p className="text-sm text-ink-2">
                Your existing first mortgage is paid off and replaced by the
                reverse mortgage.
              </p>
            </div>
            <div className="bg-moss-deep text-cream border border-moss-deep p-8 rounded-2xl shadow-md text-center">
              <h3 className="text-lg font-bold text-primary-bg mb-4">
                HomeSafe Second®
              </h3>
              <p className="text-sm text-primary-bg/90">
                Your existing first mortgage remains in place, and the reverse
                mortgage is placed behind it as a second lien.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-ink-2 mb-6 max-w-2xl mx-auto">
              Which approach makes more sense depends on your existing mortgage
              rate and balance, available equity, age, financial goals, and
              program eligibility.
            </p>
            <Link
              href="/loan-programs/homesafe-second"
              className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm hover:text-moss-deep transition-colors"
            >
              Compare HomeSafe Second® <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- HOW MUCH MONEY CAN I RECEIVE / TYPES --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-6",
                fraunces.className,
              )}
            >
              How Much Money Can I Receive From a Reverse Mortgage?
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed mb-4">
              There isn&apos;t one percentage or dollar amount that applies to
              every homeowner.
            </p>
            <p className="text-sm font-medium text-ink mb-4">
              The amount you may qualify for depends on factors including:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-ink-2 mb-6">
              {[
                "Age of the youngest eligible borrower",
                "Home value",
                "Current interest rates",
                "Existing mortgage balance",
                "Reverse mortgage program",
                "Property type",
                "Property eligibility",
                "Applicable lending limits",
                "Financial assessment",
                "Other program requirements",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-2 leading-relaxed">
              Generally, greater home equity and an older borrower age may
              increase the amount of proceeds available, but individual results
              vary.
            </p>
          </div>

          <div>
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-6",
                fraunces.className,
              )}
            >
              What Types of Reverse Mortgages Are Available?
            </h2>

            <div className="space-y-6">
              <div className="bg-cream/40 border border-line p-6 rounded-2xl">
                <h3 className="font-bold text-ink mb-2">FHA-Insured HECM</h3>
                <p className="text-sm text-ink-2 leading-relaxed mb-2">
                  The Home Equity Conversion Mortgage (HECM) is the federally
                  insured reverse mortgage program.
                </p>
                <p className="text-sm text-ink-2 leading-relaxed">
                  HECMs are generally available to eligible homeowners age 62
                  and older and are subject to FHA requirements.
                </p>
              </div>

              <div className="bg-cream/40 border border-line p-6 rounded-2xl">
                <h3 className="font-bold text-ink mb-2">
                  Proprietary Reverse Mortgages
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed mb-2">
                  Private or proprietary reverse mortgages may provide
                  additional options for homeowners, particularly those with
                  higher-value properties.
                </p>
                <p className="text-sm text-ink-2 leading-relaxed">
                  Certain proprietary programs may have different age, loan
                  amount, property, and eligibility requirements.
                </p>
              </div>
            </div>

            <p className="text-sm text-ink-2 leading-relaxed mt-6">
              MyLoanDesk can help you compare available reverse mortgage
              programs based on your particular situation.
            </p>
          </div>
        </div>
      </section>

      {/* --- QUALIFICATIONS AND COSTS --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-6",
                fraunces.className,
              )}
            >
              Who May Qualify for a Reverse Mortgage Refinance?
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed mb-4">
              Eligibility depends on the specific reverse mortgage program.
            </p>
            <p className="text-sm font-medium text-ink mb-4">
              For an FHA-insured HECM, borrowers generally must:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Be at least 62 years old",
                "Use the property as their principal residence",
                "Have sufficient home equity",
                "Meet applicable financial assessment requirements",
                "Remain current on property-related obligations",
                "Complete required reverse mortgage counseling",
                "Meet FHA property and program requirements",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-ink-2"
                >
                  <CheckCircle2
                    size={16}
                    className="text-moss-deep shrink-0 mt-0.5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-2 italic">
              Proprietary reverse mortgage requirements may differ.
            </p>
          </div>

          <div>
            <h2
              className={cn(
                "text-2xl sm:text-3xl font-light text-ink mb-6",
                fraunces.className,
              )}
            >
              What Costs Are Involved?
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed mb-4">
              Reverse mortgages have closing costs, just like traditional
              mortgages.
            </p>
            <p className="text-sm font-medium text-ink mb-4">
              Depending on the program, costs may include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-ink-2 mb-6">
              {[
                "Origination charges",
                "Appraisal fees",
                "Title and settlement charges",
                "Credit and verification fees",
                "Recording charges",
                "Mortgage insurance premiums for applicable FHA HECM loans",
                "Other permitted third-party closing costs",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink-2 leading-relaxed mb-2">
              Some costs may be financed into the reverse mortgage rather than
              paid entirely out of pocket, subject to loan terms and available
              proceeds.
            </p>
            <p className="text-sm text-ink-2 leading-relaxed">
              Your Loan Estimate and closing documents will provide the actual
              costs associated with your loan.
            </p>
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
            Frequently Asked Questions About Reverse Mortgage Refinancing
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Can I refinance my current mortgage into a reverse mortgage?",
              a: "Yes, if you meet the applicable eligibility requirements and have sufficient reverse mortgage proceeds to satisfy your existing mortgage and other required obligations.",
            },
            {
              q: "Will a reverse mortgage eliminate my mortgage payment?",
              a: "A reverse mortgage can pay off your existing mortgage and does not require monthly principal and interest payments on the new reverse mortgage.* You must continue paying property taxes, homeowners insurance, applicable HOA charges, and other required property expenses and comply with the loan terms.",
            },
            {
              q: "Do I have to own my home free and clear?",
              a: "No. You can have an existing mortgage. However, your existing mortgage generally must be paid off at closing using reverse mortgage proceeds and/or other funds if necessary.",
            },
            {
              q: "Do I lose ownership of my home?",
              a: "No. You retain title and continue to own your home. The reverse mortgage creates a lien against the property, similar to other mortgage loans.",
            },
            {
              q: "Can I sell my home after getting a reverse mortgage?",
              a: "Yes. You can sell your home. The reverse mortgage balance is generally repaid from the sale proceeds, and remaining equity belongs to you after satisfying the loan and applicable transaction costs.",
            },
            {
              q: "Can my heirs keep the home?",
              a: "Generally, yes. After a maturity event, heirs may have options to repay the reverse mortgage and retain the property, subject to applicable loan terms and program requirements. They may also choose to sell the property and use the proceeds to satisfy the reverse mortgage.",
            },
            {
              q: "Will I ever owe more than my home is worth?",
              a: "Reverse mortgages generally include non-recourse protections, subject to applicable program and loan terms. For an FHA-insured HECM, the mortgage insurance provides specific non-recourse protections. Your loan specialist can explain how these provisions apply to your particular reverse mortgage.",
            },
            {
              q: "Is reverse mortgage money taxable?",
              a: "Reverse mortgage proceeds are generally considered loan proceeds rather than earned income. However, individual tax circumstances differ. You should consult a qualified tax professional regarding your specific situation rather than relying on mortgage information as tax advice.",
            },
            {
              q: "Does the reverse mortgage balance increase?",
              a: "Generally, yes. Because monthly principal and interest payments are not required, * interest, mortgage insurance when applicable, and other financed charges may accrue and increase the loan balance over time. As the balance increases, your remaining home equity may decrease.",
            },
            {
              q: "When does a reverse mortgage become due?",
              a: "A reverse mortgage generally becomes due and payable after a maturity event defined by the loan documents, such as when the last applicable borrower permanently leaves the home, sells the property, or fails to meet certain loan obligations. Specific requirements depend on the reverse mortgage program and loan terms.",
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

      {/* --- SHOULD YOU REFINANCE & FINAL CTA --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-24">
        <div className="bg-cream/40 border border-line rounded-[32px] p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-4",
                fraunces.className,
              )}
            >
              Should You Refinance Into a Reverse Mortgage?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 leading-relaxed max-w-2xl mx-auto mb-6">
              A reverse mortgage can be a powerful financial tool, but it
              isn&apos;t right for everyone. Before deciding, consider questions
              such as:
            </p>
          </div>

          <div className="bg-white border border-line rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
            <ul className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-ink-2">
              {[
                "How long do you plan to remain in the home?",
                "How much do you owe on your existing mortgage?",
                "How much equity have you accumulated?",
                "How important is eliminating your monthly mortgage payment?",
                "Do you need cash now or access to funds later?",
                "Would keeping your existing first mortgage make more sense?",
                "How will the loan affect the equity remaining for you or your heirs?",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-moss-deep mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mb-10">
            <p className="text-sm sm:text-base font-medium text-ink leading-relaxed max-w-2xl mx-auto mb-4">
              At MyLoanDesk, the goal is to help you compare your options before
              choosing a loan.
            </p>
            <p className="text-sm text-ink-2 leading-relaxed max-w-2xl mx-auto">
              That may include a traditional reverse mortgage refinance,
              HomeSafe Second®, HELOC, home equity loan, or another available
              mortgage solution.
            </p>
          </div>

          <div className="bg-moss-deep text-cream border border-moss-deep p-8 sm:p-10 rounded-3xl text-center">
            <h3
              className={cn(
                "text-2xl sm:text-3xl font-light text-primary-bg mb-4",
                fraunces.className,
              )}
            >
              See What Your Home Equity Could Do for You
            </h3>
            <p className="text-sm text-primary-bg/80 leading-relaxed max-w-2xl mx-auto mb-8">
              If you&apos;re 62 or older and have significant equity in your
              home, you may have more options than you realize. MyLoanDesk can
              help you determine:
            </p>
            <ul className="text-sm text-primary-bg/90 space-y-2 mb-8 inline-block text-left">
              <li>• How much you may qualify for.</li>
              <li>• Whether your existing mortgage can be paid off.</li>
              <li>• How much equity may remain available to you.</li>
              <li>• Which reverse mortgage programs may fit your situation.</li>
              <li>
                • Whether refinancing or keeping your existing mortgage makes
                more sense.
              </li>
            </ul>

            {/* Primary CTA 3 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <OpenChatReusableBtn
                loanProgram="Reverse Mortgage Refinance"
                text="See If I Qualify"
              />
              <Link
                href="/calendar"
                className="bg-transparent border border-primary-bg text-primary-bg px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Talk to a Reverse Mortgage Specialist
              </Link>
            </div>
            <p className="text-center text-[12px] text-primary-bg/60">
              No obligation. Review your available options before deciding.
            </p>
          </div>
        </div>
      </section>

      {/* --- IMPORTANT DISCLOSURES --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="border-t border-line pt-8 text-sm text-ink-2/70 space-y-3 leading-relaxed">
          <p className="font-semibold text-ink-2">Important Disclosures</p>
          <p>
            *A reverse mortgage does not require monthly principal and interest
            mortgage payments while applicable loan requirements are met. It is
            not a payment-free loan.
          </p>
          <p>
            Borrowers remain responsible for property taxes, homeowners
            insurance, applicable HOA charges, property maintenance, and
            compliance with all loan terms. Failure to meet these obligations
            may cause the loan to become due and payable.
          </p>
          <p>
            Interest and applicable fees accrue to the reverse mortgage balance
            over time, which generally increases the amount owed and reduces
            remaining home equity.
          </p>
          <p>
            HECM borrowers must meet applicable FHA requirements and complete
            HUD-approved reverse mortgage counseling before closing.
          </p>
          <p>
            Reverse mortgage programs, interest rates, available proceeds,
            costs, property requirements, age requirements, and eligibility are
            subject to change. Not all borrowers or properties will qualify.
          </p>
          <p>
            MyLoanDesk does not provide tax, legal, or financial-planning
            advice. Borrowers should consult appropriate professionals regarding
            their individual circumstances.
          </p>
        </div>
      </section>
    </main>
  );
}
