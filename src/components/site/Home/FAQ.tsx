"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Minus, Loader2 } from "lucide-react";

const EXTREMES_API_URL =
  "https://prd-nc-obmmi-frontdoor-endpoint-cddkegaabwhpa6aa.a01.azurefd.net/api/blob/extremes.json";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [rates, setRates] = useState<{
    thirtyYear: string | null;
    fifteenYear: string | null;
    arm51: string | null;
  }>({
    thirtyYear: null,
    fifteenYear: null,
    arm51: null,
  });
  const [ratesLoading, setRatesLoading] = useState(true);

  // Fetch live interest rates
  useEffect(() => {
    const fetchLiveRates = async () => {
      try {
        setRatesLoading(true);

        const response = await fetch(EXTREMES_API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch rates data");
        }

        const data = await response.json();

        // Helper to extract and format the rate safely
        const getRate = (key: string) =>
          data[key]?.current ? `${data[key].current.toFixed(2)}%` : null;

        setRates({
          // Pulling directly from the API keys
          thirtyYear: getRate("Conforming30YrFixed") || "6.50%",
          fifteenYear: getRate("Conforming15YrFixed") || "5.80%",
          // Attempting common ARM keys, falling back to a default if unavailable
          arm51: getRate("Conforming5/1ARM") || getRate("5/1ARM") || "5.90%",
        });
      } catch (error) {
        console.error("Failed to fetch live rates:", error);
        // Fallback rates in case of API failure
        setRates({
          thirtyYear: "6.50%",
          fifteenYear: "5.80%",
          arm51: "5.90%",
        });
      } finally {
        setRatesLoading(false);
      }
    };

    fetchLiveRates();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How are you different from a bank's loan officer?",
      answer:
        "A bank can only offer the mortgage products available through that bank[cite: 1]. At MyLoan Desk, we work with multiple lenders, giving you access to a wider range of loan programs, competitive interest rates, and flexible underwriting options[cite: 1]. We compare offers on your behalf to help you find the mortgage that best fits your financial goals-not just the one a single bank has available[cite: 1].",
    },
    {
      question: "How much do I need for a down payment?",
      answer:
        "Down payment requirements vary by loan program[cite: 1]. Some loans require as little as 3% down, while eligible veterans may qualify for 0% down through VA loans[cite: 1]. There are also down payment assistance programs available for many first-time homebuyers[cite: 1]. We'll help you explore the options that best fit your financial situation[cite: 1].",
    },
    {
      question: "How much can I qualify for?",
      answer:
        "The amount you qualify for depends on several factors, including your income, assets, credit history, existing debts, down payment, and the type of loan you're applying for[cite: 1]. The fastest way to find out is through a free pre-approval[cite: 1]. We'll review your financial situation and provide a personalized estimate so you can shop for a home with confidence[cite: 1].",
    },
    {
      question: "What are the closing costs on a mortgage?",
      answer:
        "Closing costs vary based on the loan program, property, loan amount, and your individual qualifications[cite: 1]. They may include lender fees, appraisal, title services, government recording fees, prepaid taxes and insurance, and other third-party costs[cite: 1]. Before you commit to a loan, you'll receive a detailed Loan Estimate that clearly outlines every fee, so you'll know exactly what to expect[cite: 1]. In many cases, lender credits or seller concessions can help reduce your out-of-pocket costs[cite: 1].",
    },
    {
      question: "How fast can you close?",
      answer:
        "Every loan is different, but many mortgages can close in as little as 14 to 30 days, depending on the loan program, appraisal timing, and how quickly required documents are provided[cite: 1]. Our team works proactively with borrowers, real estate agents, and lenders to keep your loan moving efficiently from application to closing[cite: 1].",
    },
    {
      question: "Will shopping around hurt my credit score?",
      answer:
        "No[cite: 1]. Credit scoring models recognize that borrowers often compare mortgage offers before choosing a lender[cite: 1]. Multiple mortgage-related credit inquiries made within a short shopping period are generally treated as a single inquiry for scoring purposes[cite: 1]. Comparing loan options can help you find a better rate and potentially save thousands over the life of your mortgage[cite: 1].",
    },
    {
      question: "What if my credit isn't great?",
      answer:
        "Don't assume you won't qualify[cite: 1]. We work with a variety of lenders offering programs for borrowers with different credit profiles[cite: 1]. Depending on your situation, there may be options available even if your credit score isn't perfect[cite: 1]. If you're not ready today, we'll help you understand what steps could improve your chances of qualifying in the future[cite: 1].",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 lg:py-32 bg-cream/50 border-y border-line"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Heading & Rates Widget */}
          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-5">
              06 — Questions on the desk
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.04] tracking-tight font-light mb-6 text-ink">
              Things people ask before they apply.
            </h2>
            <p className="text-ink-2 leading-relaxed mb-7">
              Don't see your question?{" "}
              <a href="#start" className="text-moss-deep font-medium ulink">
                Ask a broker directly
              </a>{" "}
              — usually a same-day reply.
            </p>

            {/* Live Rates Widget */}
            <div className="p-5 bg-primary-bg border border-line rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-semibold text-ink-2 uppercase tracking-wider">
                  Today's Live Rates
                </div>
                {ratesLoading && (
                  <Loader2 className="w-4 h-4 text-brand-orange animate-spin" />
                )}
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="font-mono text-base font-semibold text-moss-deep h-6 flex items-center justify-center">
                    {ratesLoading ? (
                      <div className="w-10 h-4 bg-gray-200 animate-pulse rounded"></div>
                    ) : (
                      rates.thirtyYear
                    )}
                  </div>
                  <div className="text-[10px] text-ink-2 mt-0.5">
                    30 yr fixed
                  </div>
                </div>
                <div>
                  <div className="font-mono text-base font-semibold text-moss-deep h-6 flex items-center justify-center border-l border-r border-line/50">
                    {ratesLoading ? (
                      <div className="w-10 h-4 bg-gray-200 animate-pulse rounded"></div>
                    ) : (
                      rates.fifteenYear
                    )}
                  </div>
                  <div className="text-[10px] text-ink-2 mt-0.5">
                    15 yr fixed
                  </div>
                </div>
                <div>
                  <div className="font-mono text-base font-semibold text-moss-deep h-6 flex items-center justify-center">
                    {ratesLoading ? (
                      <div className="w-10 h-4 bg-gray-200 animate-pulse rounded"></div>
                    ) : (
                      rates.arm51
                    )}
                  </div>
                  <div className="text-[10px] text-ink-2 mt-0.5">5/1 ARM</div>
                </div>
              </div>
            </div>

            {/* Rates Disclaimer */}
            <p className="text-[10px] text-ink-2/70 mt-3 leading-tight">
              *Rates shown are national averages provided for informational
              purposes only and do not constitute a loan offer or commitment to
              lend. Your actual rate may vary based on credit score, loan
              amount, LTV, property type, and other factors.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/get-quote"
                className="btn-shine bg-brand-orange text-white text-center py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-sm"
              >
                Contact Us for personalized rates
              </Link>
              <Link
                href="/#live-rates-widget"
                className="text-center py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider border border-line text-ink hover:bg-white hover:border-moss-deep/30 transition-colors"
              >
                View Live Rates Indices
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-line">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`border-b border-line ${index === faqs.length - 1 ? "border-b-0" : ""}`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-6 flex items-center justify-between text-left gap-4 focus-ring group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-xl lg:text-2xl text-ink group-hover:text-moss-deep transition-colors">
                        {faq.question}
                      </span>
                      <span
                        className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                          isOpen
                            ? "bg-brand-orange border-brand-orange text-primary-bg"
                            : "border-line text-moss-deep group-hover:border-moss-deep"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={14} strokeWidth={2} />
                        ) : (
                          <Plus size={14} strokeWidth={2} />
                        )}
                      </span>
                    </button>

                    {/* Animated Content Wrapper */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-6 text-ink-2 leading-relaxed pr-12">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
