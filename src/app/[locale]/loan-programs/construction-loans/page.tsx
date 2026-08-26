import type { Metadata } from "next";
import Link from "next/link";
import ConstructionCalculator from "@/components/site/LoanPrograms/ConstructionLoans/ConstructionCalculator";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title: "Construction Loans for Custom Homes & Development | MyLoanDesk",
  description:
    "Construction loans and construction-to-permanent financing for custom homes, spec builds, and small developments. Use our free calculator to estimate your loan amount and down payment before you apply.",
  alternates: {
    canonical: "https://www.myloandesk.com/loan-programs/construction-loans/",
  },
  openGraph: {
    title: "Construction Loans for Custom Homes & Development | MyLoanDesk",
    description:
      "Finance your dream home or next development project with construction-to-permanent financing. Estimate your loan amount, down payment, and interest-only payments with our free calculator.",
    type: "website",
    url: "https://www.myloandesk.com/loan-programs/construction-loans/",
    siteName: "MyLoanDesk",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Construction Loans - MyLoanDesk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Loans for Custom Homes & Development | MyLoanDesk",
    description:
      "Finance your custom build with single-close construction-to-permanent financing.",
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

const constructionPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.myloandesk.com/loan-programs/construction-loans/#webpage",
      url: "https://www.myloandesk.com/loan-programs/construction-loans/",
      name: "Construction Loans | MyLoanDesk",
      description:
        "Construction loans and construction-to-permanent financing for custom homes, spec builds, and residential developments.",
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
        "https://www.myloandesk.com/loan-programs/construction-loans/#product",
      name: "Construction-to-Permanent Loan",
      description:
        "Single-close financing combining short-term construction draw funding with a long-term fixed mortgage for custom residential builds.",
      provider: {
        "@id": "https://www.myloandesk.com/#organization",
      },
      category: "ConstructionLoan",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.myloandesk.com/loan-programs/construction-loans/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a construction-to-permanent loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A construction-to-permanent loan combines your short-term construction financing and your long-term mortgage into a single loan with a single closing. Once the home is complete, the loan automatically converts into a standard mortgage, so you avoid closing twice and re-qualifying for a separate end loan.",
          },
        },
        {
          "@type": "Question",
          name: "How much down payment is required for a construction loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Down payment requirements for construction loans are typically higher than for a standard mortgage, often ranging from 10% to 25% of the total project cost, depending on the lender, the borrower's credit profile, and whether the land is already owned free and clear.",
          },
        },
        {
          "@type": "Question",
          name: "How do construction loan draws work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Instead of receiving the full loan amount upfront, funds are released in stages called draws, tied to completed construction milestones such as foundation, framing, and finishing. An inspection typically confirms each stage is complete before the next draw is released.",
          },
        },
        {
          "@type": "Question",
          name: "Do I pay principal during construction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most construction loans are interest-only during the build phase, and interest is typically charged only on the funds that have actually been drawn, not the full loan amount. Principal payments generally begin once the loan converts to a permanent mortgage after construction is complete.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a construction loan to build on land I already own?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — if you already own the land free and clear, its value can often be used as equity toward your down payment requirement, which can reduce the amount of cash you need to bring to closing.",
          },
        },
        {
          "@type": "Question",
          name: "What credit score is needed for a construction loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Construction loans generally require a stronger credit profile than a standard mortgage, often 680 or higher, since the lender is financing a project that doesn't yet exist as collateral. Builder experience and a detailed budget and plan set can also strengthen an application.",
          },
        },
        {
          "@type": "Question",
          name: "How long does construction loan financing take to close?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Initial closing on a construction-to-permanent loan typically takes a similar timeframe to a conventional mortgage, often 30 to 45 days, since it requires underwriting the borrower, the builder, and the full project plans and budget.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if construction costs more than the original budget?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cost overruns are common in construction projects. Many lenders require a contingency reserve built into the original budget, and some allow a loan modification if costs increase significantly. Planning a realistic budget with a contingency buffer upfront is the best way to avoid a funding gap mid-project.",
          },
        },
      ],
    },
  ],
};

export default function ConstructionLoansPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Loan Programs", url: "/loan-programs" },
    { name: "Construction Loans", url: "/loan-programs/construction-loans" },
  ];

  return (
    <main
      className="min-h-screen font-sans"
      style={{
        backgroundColor: "#EDEAE2",
        color: "#55524C",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* Structural SEO Breadcrumbs & Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(constructionPageSchema),
        }}
      />

      <section className="block">
        <div className="max-w-[900px] mx-auto bg-[#FBF8F2] px-6 sm:px-14 py-[44px] pb-[60px]">
          <Link
            href="/loan-programs"
            className="text-[13px] text-[#55524C] font-semibold inline-flex items-center gap-1.5 mb-[18px] hover:text-[#B85A1C] transition-colors"
          >
            &larr; Back to Loan Programs
          </Link>

          <h1 className="font-serif font-bold text-3xl sm:text-[38px] text-[#1C1C1C] mb-[18px] leading-[1.15]">
            Construction Loans
          </h1>

          <hr className="border-0 border-t border-[#E6E0D3] mb-[26px]" />

          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 items-start mb-[6px]">
            <div>
              <div className="font-sans font-bold text-xs sm:text-[14px] tracking-[0.02em] text-[#B85A1C] uppercase mb-[16px]">
                Finance your dream home or next development project.
              </div>
              <p className="text-[15.5px] leading-[1.7] text-[#55524C] mb-[24px] max-w-[680px]">
                Whether you&apos;re building a custom home, developing a
                residential community, or constructing investment properties,
                MyLoanDesk offers construction financing structured around your
                project&apos;s timeline — from groundbreaking to certificate of
                occupancy. Our construction-to-permanent loans combine your
                build financing and your long-term mortgage into a single
                closing, so you&apos;re not qualifying twice or paying two sets
                of closing costs.
              </p>
              <div className="flex flex-col gap-2.5 mt-[18px]">
                <div className="text-[13.5px] text-[#55524C] flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#D9722C"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  One closing — construction converts straight to your mortgage
                </div>
                <div className="text-[13.5px] text-[#55524C] flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#D9722C"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Interest-only payments during the build phase
                </div>
                <div className="text-[13.5px] text-[#55524C] flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#D9722C"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Land equity can count toward your down payment
                </div>
              </div>
            </div>

            {/* Interactive Calculator Client Component */}
            <ConstructionCalculator />
          </div>

          <p className="text-[11.5px] text-[#9A9585] max-w-[680px] mt-[6px] mb-0">
            Estimate only, based on common construction lending guidelines (up
            to 80% of total project cost, capped at roughly 75% of completed
            value). Actual loan amount, rate, and terms depend on underwriting,
            the builder, and the specific project.
          </p>

          {/* WHAT IS A CONSTRUCTION LOAN */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            What Is a Construction Loan?
          </h2>
          <p className="text-[15px] leading-[1.75] text-[#55524C] mb-[14px] max-w-[700px]">
            A construction loan is short-term financing used to pay for building
            a home or development project from the ground up. Rather than
            receiving the full loan amount at closing like a traditional
            mortgage, funds are released in stages — called draws — as
            construction reaches specific milestones. Once the home is complete,
            most construction loans either require a separate mortgage to pay
            off the balance, or, with a construction-to-permanent loan,
            automatically convert into a standard long-term mortgage at a single
            closing.
          </p>
          <p className="text-[15px] leading-[1.75] text-[#55524C] mb-[14px] max-w-[700px]">
            Because the collateral (the finished home) doesn&apos;t exist yet at
            the time of closing, construction loans are underwritten differently
            than a mortgage on an existing property — lenders evaluate the
            borrower, the builder, the plans, and the budget together.
          </p>

          {/* HOW IT WORKS */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            How Construction Financing Works
          </h2>
          {[
            {
              step: "1",
              title: "Finalize your plans and budget.",
              text: "Lenders will want detailed building plans, a construction budget, and your builder's information.",
            },
            {
              step: "2",
              title: "Get approved and close.",
              text: "Underwriting evaluates you, your builder, and the project as a whole — closing typically resembles a standard mortgage timeline.",
            },
            {
              step: "3",
              title: "Funds are released in draws.",
              text: "As construction reaches milestones — foundation, framing, mechanicals, finishes — an inspection confirms progress and the next draw is released.",
            },
            {
              step: "4",
              title: "Make interest-only payments.",
              text: "During the build, you typically pay interest only on the funds actually drawn, not the full loan amount.",
            },
            {
              step: "5",
              title: "Convert to a permanent mortgage.",
              text: "Once construction is complete, a construction-to-permanent loan converts automatically into your long-term mortgage — no second closing required.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-[14px] mb-[16px] max-w-[700px]"
            >
              <div className="shrink-0 w-[28px] h-[28px] rounded-full bg-[#D9722C] text-white font-sans font-bold text-[13px] flex items-center justify-center">
                {item.step}
              </div>
              <div className="text-[14.5px] leading-[1.6] text-[#55524C] pt-[3px]">
                <strong className="text-[#1C1C1C]">{item.title}</strong>{" "}
                {item.text}
              </div>
            </div>
          ))}

          {/* PROGRAM HIGHLIGHTS */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            Program Highlights
          </h2>
          <div className="font-sans font-bold text-[13.5px] tracking-[0.03em] text-[#1C1C1C] uppercase mb-[14px]">
            What&apos;s included:
          </div>
          <ul className="list-none m-0 p-0 mb-[12px] max-w-[700px]">
            {[
              "Construction-to-permanent options that convert to a standard mortgage at completion",
              "Interest-only payments during the build phase",
              "Draw schedules aligned to construction milestones",
              "Available for custom homes, spec builds, and small residential developments",
              "Land acquisition financing available if you don't already own the lot",
              "Existing land equity can be credited toward your down payment",
            ].map((highlight, i) => (
              <li
                key={i}
                className="relative pl-[20px] text-[15px] text-[#55524C] leading-[1.6] mb-[11px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#55524C]"
              >
                {highlight}
              </li>
            ))}
          </ul>

          {/* STRATEGIC ADVANTAGES */}
          <div className="bg-[#F3EFE6] border border-[#E6E0D3] rounded-[12px] p-[26px_28px] mt-[18px] mb-[30px]">
            <div className="font-sans font-bold text-[13.5px] tracking-[0.03em] text-[#1C1C1C] uppercase mb-[12px]">
              Strategic Advantages:
            </div>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] mb-[12px]">
              A construction-to-permanent loan means one closing, not two —
              saving on closing costs and eliminating the risk of needing to
              re-qualify for a separate end loan once the home is complete, when
              rates or your financial picture may have changed.
            </p>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] mb-[12px]">
              Draw schedules tied to inspected milestones protect both the
              builder&apos;s cash flow and the lender&apos;s collateral, keeping
              the project funded at each stage without requiring you to front
              costs out of pocket.
            </p>
            <p className="text-[14.5px] leading-[1.7] text-[#55524C] m-0">
              If you already own the land, its equity can often be credited
              toward your required down payment — reducing the amount of new
              cash you need to bring to the project.
            </p>
          </div>

          {/* WHO THIS IS FOR */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            Who Construction Loans Are For
          </h2>
          <ul className="list-none m-0 p-0 mb-[12px] max-w-[700px]">
            {[
              "Buyers building a custom home on land they own or are purchasing",
              "Small developers building spec homes to sell upon completion",
              "Investors constructing new rental or multifamily properties",
              "Landowners looking to use their lot's equity toward a new build",
              "Buyers who want a single closing rather than separate construction and end loans",
            ].map((item, i) => (
              <li
                key={i}
                className="relative pl-[20px] text-[15px] text-[#55524C] leading-[1.6] mb-[11px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#55524C]"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* COMPARISON TABLE */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            Construction Loans vs. Other Financing Options
          </h2>
          <div className="overflow-x-auto mb-[30px]">
            <table className="w-full border-collapse font-sans text-[13.5px]">
              <thead>
                <tr className="bg-[#1C1C1C] text-white">
                  <th className="p-[11px_14px] text-left font-bold"></th>
                  <th className="p-[11px_14px] text-left font-bold">
                    Construction-to-Permanent
                  </th>
                  <th className="p-[11px_14px] text-left font-bold">
                    Renovation Loan
                  </th>
                  <th className="p-[11px_14px] text-left font-bold">
                    Conventional Mortgage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    Best for
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Building a new home from the ground up
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Renovating an existing home
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Purchasing a completed, move-in-ready home
                  </td>
                </tr>
                <tr className="bg-[#F3EFE6] border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    Funds disbursed
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    In draws, tied to construction milestones
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Often in draws, tied to renovation scope
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    In full, at closing
                  </td>
                </tr>
                <tr className="border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    Payment during project
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Interest-only on funds drawn
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Varies by program
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    N/A — no project phase
                  </td>
                </tr>
                <tr className="bg-[#F3EFE6] border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    Number of closings
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    One, if construction-to-permanent
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">One</td>
                  <td className="p-[11px_14px] text-[#55524C]">One</td>
                </tr>
                <tr className="border-b border-[#E6E0D3]">
                  <td className="p-[11px_14px] font-bold text-[#1C1C1C]">
                    Collateral at closing
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Land plus plans (home doesn&apos;t exist yet)
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Existing home
                  </td>
                  <td className="p-[11px_14px] text-[#55524C]">
                    Existing home
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ELIGIBILITY */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            Eligibility Requirements
          </h2>
          <ul className="list-none m-0 p-0 mb-[12px] max-w-[700px]">
            {[
              "Credit score of approximately 680+ (varies by lender and project type)",
              "Detailed construction plans, specifications, and a realistic budget",
              "A licensed, vetted builder or general contractor",
              "Down payment or land equity, typically 10–25% of total project cost",
              "Sufficient reserves to cover contingencies and unexpected cost increases",
            ].map((req, i) => (
              <li
                key={i}
                className="relative pl-[20px] text-[15px] text-[#55524C] leading-[1.6] mb-[11px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#55524C]"
              >
                {req}
              </li>
            ))}
          </ul>

          {/* FAQ */}
          <h2 className="font-serif font-bold text-[24px] text-[#1C1C1C] mt-[42px] mb-[14px] leading-[1.25]">
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "What is a construction-to-permanent loan?",
              a: "A construction-to-permanent loan combines your short-term construction financing and your long-term mortgage into a single loan with a single closing. Once the home is complete, the loan automatically converts into a standard mortgage, so you avoid closing twice and re-qualifying for a separate end loan.",
            },
            {
              q: "How much down payment is required for a construction loan?",
              a: "Down payment requirements for construction loans are typically higher than for a standard mortgage, often ranging from 10% to 25% of the total project cost, depending on the lender, the borrower's credit profile, and whether the land is already owned free and clear.",
            },
            {
              q: "How do construction loan draws work?",
              a: "Instead of receiving the full loan amount upfront, funds are released in stages called draws, tied to completed construction milestones such as foundation, framing, and finishing. An inspection typically confirms each stage is complete before the next draw is released.",
            },
            {
              q: "Do I pay principal during construction?",
              a: "Most construction loans are interest-only during the build phase, and interest is typically charged only on the funds that have actually been drawn, not the full loan amount. Principal payments generally begin once the loan converts to a permanent mortgage after construction is complete.",
            },
            {
              q: "Can I use a construction loan to build on land I already own?",
              a: "Yes — if you already own the land free and clear, its value can often be used as equity toward your down payment requirement, which can reduce the amount of cash you need to bring to closing.",
            },
            {
              q: "What credit score is needed for a construction loan?",
              a: "Construction loans generally require a stronger credit profile than a standard mortgage, often 680 or higher, since the lender is financing a project that doesn't yet exist as collateral. Builder experience and a detailed budget and plan set can also strengthen an application.",
            },
            {
              q: "How long does construction loan financing take to close?",
              a: "Initial closing on a construction-to-permanent loan typically takes a similar timeframe to a conventional mortgage, often 30 to 45 days, since it requires underwriting the borrower, the builder, and the full project plans and budget.",
            },
            {
              q: "What happens if construction costs more than the original budget?",
              a: "Cost overruns are common in construction projects. Many lenders require a contingency reserve built into the original budget, and some allow a loan modification if costs increase significantly. Planning a realistic budget with a contingency buffer upfront is the best way to avoid a funding gap mid-project.",
              border: false,
            },
          ].map((faq, i) => (
            <div
              key={i}
              className={`py-[16px] ${
                faq.border !== false ? "border-b border-[#E6E0D3]" : ""
              }`}
            >
              <p className="font-sans font-bold text-[15px] text-[#1C1C1C] m-0 mb-[6px]">
                {faq.q}
              </p>
              <p className="text-[14.5px] leading-[1.7] text-[#55524C] m-0">
                {faq.a}
              </p>
            </div>
          ))}

          {/* CTA BUTTONS */}
          <div className="mt-[36px]">
            <Link
              href="/get-started"
              className="flex items-center justify-center gap-[8px] w-full bg-[#D9722C] text-white font-sans font-bold text-[15px] p-[16px] border-0 rounded-[10px] cursor-pointer mb-[10px] no-underline hover:bg-[#B85A1C] transition-colors"
            >
              Apply Now &rarr;
            </Link>
            <Link
              href="/#start"
              className="flex items-center justify-center w-full bg-[#F5EFDF] text-[#1C1C1C] font-sans font-bold text-[15px] p-[16px] border border-[#E7DEC7] rounded-[10px] cursor-pointer no-underline hover:bg-[#EFE7D3] transition-colors"
            >
              Contact Us Now
            </Link>
            <div className="text-center text-[12.5px] text-[#8F8A7C] mt-[14px]">
              Already have plans and a builder lined up? Send us the details — a
              loan officer will walk through your numbers the same day.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
