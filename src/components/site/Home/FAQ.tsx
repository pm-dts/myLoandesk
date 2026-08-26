"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Minus, Loader2 } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const EXTREMES_API_URL =
  "https://prd-nc-obmmi-frontdoor-endpoint-cddkegaabwhpa6aa.a01.azurefd.net/api/blob/extremes.json";

interface FaqProps {
  locale?: string;
}

export default function Faq({ locale = "en" }: FaqProps) {
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

  const t = useTranslations("Home.FAQ");
  const pathname = usePathname();
  const isEs = locale === "es";

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
          thirtyYear: getRate("Conforming30YrFixed") || "6.50%",
          fifteenYear: getRate("Conforming15YrFixed") || "5.80%",
          arm51: getRate("Conforming5/1ARM") || getRate("5/1ARM") || "5.90%",
        });
      } catch (error) {
        console.error("Failed to fetch live rates:", error);
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

  // Tracking CTA Clicks
  const trackCtaClick = (buttonName: string, destination: string) => {
    sendGTMEvent({
      event: "faq_cta_clicked",
      category: "engagement",
      label: buttonName,
      destination_url: destination,
      page_path: pathname || "/",
      locale,
    });
  };

  const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"] as const;

  const quoteUrl = isEs ? "/es/get-quote" : "/get-quote";
  const widgetUrl = isEs ? "/es/#live-rates-widget" : "/#live-rates-widget";

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
              {t("section_badge")}
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.04] tracking-tight font-light mb-6 text-ink">
              {t("headline")}
            </h2>
            <p className="text-ink-2 leading-relaxed mb-7">
              {t("subheading_prefix")}{" "}
              <a href="#start" className="text-moss-deep font-medium ulink">
                {t("subheading_link")}
              </a>{" "}
              {t("subheading_suffix")}
            </p>

            {/* Live Rates Widget */}
            <div className="p-5 bg-primary-bg border border-line rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-semibold text-ink-2 uppercase tracking-wider">
                  {t("widget_title")}
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
                    {t("rate_labels.thirty_year")}
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
                    {t("rate_labels.fifteen_year")}
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
                  <div className="text-[10px] text-ink-2 mt-0.5">
                    {t("rate_labels.arm_51")}
                  </div>
                </div>
              </div>
            </div>

            {/* Rates Disclaimer */}
            <p className="text-[10px] text-ink-2/70 mt-3 leading-tight">
              {t("rates_disclaimer")}
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={quoteUrl}
                onClick={() =>
                  trackCtaClick(
                    "Get Your Personalized Mortgage Options",
                    quoteUrl,
                  )
                }
                className="btn-shine bg-brand-orange text-white text-center py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-sm"
              >
                {t("cta_quote")}
              </Link>
              <Link
                href={widgetUrl}
                onClick={() =>
                  trackCtaClick("View Live Rates Indices", widgetUrl)
                }
                className="text-center py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider border border-line text-ink hover:bg-white hover:border-moss-deep/30 transition-colors"
              >
                {t("cta_indices")}
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-line">
              {faqKeys.map((key, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={key}
                    className={`border-b border-line ${
                      index === faqKeys.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-6 flex items-center justify-between text-left gap-4 focus-ring group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-xl lg:text-2xl text-ink group-hover:text-moss-deep transition-colors">
                        {t(`questions.${key}.question`)}
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
                          {t(`questions.${key}.answer`)}
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
