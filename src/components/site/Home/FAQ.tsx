"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How are you different from a bank's loan officer?",
      answer:
        "A bank's loan officer can only offer that bank's products. We're independent — we shop 20+ wholesale lenders, which means you see more options and real competition for your business. We're paid the same regardless of which lender you pick.",
    },
    {
      question: "What does it cost to work with you?",
      answer:
        "Our broker fee is typically 0.5–1% of the loan amount, paid at closing (and often credited back by the lender). We disclose every fee in writing before you commit — no surprises, no junk line items.",
    },
    {
      question: "Will shopping around hurt my credit score?",
      answer:
        "No. Pre-qualification uses a soft pull that doesn't affect your score. Once you formally apply, all credit pulls within a 14-day window count as a single inquiry on your report — so you can shop freely.",
    },
    {
      question: "How fast can you actually close?",
      answer:
        "Our average is 23 days from application to closing. The industry average is around 47. We've closed in as few as 14 days on conventional loans when title and appraisal cooperate. We'll give you a realistic timeline on day one.",
    },
    {
      question: "What if my credit isn't great?",
      answer:
        "We work with scores from 580 and up across FHA and conventional programs. If you're not quite there, we'll put together a 60–90 day credit plan and check in weekly — most clients qualify after one cycle.",
    },
    {
      question: "Do you handle loans outside my state?",
      answer:
        "We're licensed in 38 states and adding more each quarter. Enter your ZIP in the application and we'll let you know immediately — if we can't help, we'll refer you to a trusted local broker who can.",
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

            {/* Rates Widget */}
            <div className="p-5 bg-primary-bg border border-line rounded-xl shadow-sm">
              <div className="text-xs text-ink-2 mb-1">
                Today's average rates
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                <div>
                  <div className="font-mono text-base font-semibold text-moss-deep">
                    6.50%
                  </div>
                  <div className="text-[10px] text-ink-2 mt-0.5">
                    30 yr fixed
                  </div>
                </div>
                <div>
                  <div className="font-mono text-base font-semibold text-moss-deep">
                    5.80%
                  </div>
                  <div className="text-[10px] text-ink-2 mt-0.5">
                    15 yr fixed
                  </div>
                </div>
                <div>
                  <div className="font-mono text-base font-semibold text-moss-deep">
                    5.90%
                  </div>
                  <div className="text-[10px] text-ink-2 mt-0.5">5/1 ARM</div>
                </div>
              </div>
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
                        className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-brand-orange border-brand-orange text-primary-bg" : "border-line text-moss-deep group-hover:border-moss-deep"}`}
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
