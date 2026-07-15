"use client";

import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  Loader2,
  AlertCircle,
  X,
  Activity,
} from "lucide-react";

interface RateItem {
  min?: number;
  max?: number;
  monthMax: number;
  monthMin: number;
  yearMin?: number;
  yearMax?: number;
  current: number;
  lastChange: number;
  displayName: string;
}

type RatesApiResponse = Record<string, RateItem>;

const TABS = {
  INDICES: "Rate Indices",
  //   CREDIT: "Credit and LTV",
};

const TAB_MAPPINGS = {
  [TABS.INDICES]: [
    "Conforming30YrFixed",
    "Jumbo30YrFixed",
    "FHA30YrFixed",
    "VA30YrFixed",
    "USDA30YrFixed",
    "Conforming15YrFixed",
  ],
  //   [TABS.CREDIT]: [
  //     "Conforming30YearFixedLTVLessThanEqualTo80FICOGreaterThanEqualTo740",
  //     "Conforming30YearFixedLTVLessThanEqualTo80FICOBetween720-739",
  //     "Conforming30YearFixedLTVLessThanEqualTo80FICOBetween700-719",
  //     "Conforming30YearFixedLTVLessThanEqualTo80FICOBetween680-699",
  //     "Conforming30YearFixedLTVLessThanEqualTo80FICOLessthan680",
  //     "Conforming30YearFixedLTVGreaterThan80FICOGreaterThanEqualTo740",
  //   ],
};

const API_URL =
  "https://prd-nc-obmmi-frontdoor-endpoint-cddkegaabwhpa6aa.a01.azurefd.net/api/blob/extremes.json";

export default function CurrentRates() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(TABS.INDICES);
  const [ratesData, setRatesData] = useState<RatesApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch data only when the dialog is opened and data hasn't been loaded yet
  useEffect(() => {
    if (!isOpen || ratesData) return;

    const fetchRates = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Failed to fetch rates: ${response.status}`);
        }

        const data: RatesApiResponse = await response.json();
        setRatesData(data);
      } catch (err) {
        console.error("Error fetching rates data:", err);
        setError(
          "Unable to load current rates at this time. Please try again later.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
  }, [isOpen, ratesData]);

  // Handle escape key to close dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const activeKeys = TAB_MAPPINGS[activeTab as keyof typeof TAB_MAPPINGS];

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="btn-shine inline-flex items-center gap-2 bg-moss-deep text-primary-bg px-6 py-3.5 rounded-full font-semibold hover:bg-moss-darker transition-colors focus-ring shadow-sm"
      >
        <Activity size={18} />
        Interest Rates
      </button>

      {/* Dialog Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/40 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)} // Close when clicking outside
        >
          {/* Dialog Content */}
          <div
            className="relative w-full max-w-5xl max-h-[90vh] bg-primary-bg rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-line animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 sm:px-8 sm:py-6 border-b border-line bg-cream/30 shrink-0">
              <h2 className="text-2xl sm:text-3xl font-display text-ink tracking-tight">
                Current Rates
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 rounded-full text-ink-2 hover:bg-line/50 hover:text-ink transition-colors focus-ring"
                aria-label="Close dialog"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto bg-primary-bg">
              {/* Tabs Row */}
              <div className="flex flex-wrap border-b-[3px] border-moss-deep bg-cream/50 sticky top-0 z-10">
                {Object.values(TABS).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors focus-ring outline-none ${
                      activeTab === tab
                        ? "bg-moss-deep text-primary-bg"
                        : "bg-transparent text-ink-2 hover:text-moss-deep hover:bg-moss-deep/5"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
                {/* Placeholder Tab */}
                {/* <button
                  disabled
                  className="px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink-2 opacity-40 cursor-not-allowed"
                >
                  Rate Trends
                </button> */}
              </div>

              {/* State Handling: Loading */}
              {isLoading && (
                <div className="flex flex-col items-center justify-center h-80 text-moss-deep">
                  <Loader2 className="animate-spin mb-4" size={32} />
                  <p className="text-sm font-medium animate-pulse">
                    Fetching live rates...
                  </p>
                </div>
              )}

              {/* State Handling: Error */}
              {!isLoading && error && (
                <div className="flex flex-col items-center justify-center h-80 text-brand-orange px-6 text-center">
                  <AlertCircle size={32} className="mb-4" />
                  <p className="font-medium">{error}</p>
                </div>
              )}

              {/* State Handling: Success (Rates Grid) */}
              {!isLoading && !error && ratesData && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {activeKeys.map((key, index) => {
                    const data = ratesData[key];
                    if (!data) return null;

                    const isPositive = data.lastChange > 0;
                    const isNegative = data.lastChange < 0;
                    const isZero = data.lastChange === 0;

                    const formattedChange = isPositive
                      ? `+${data.lastChange.toFixed(3)}`
                      : data.lastChange.toFixed(3);

                    return (
                      <div
                        key={key}
                        className={`p-6 sm:p-8 flex flex-col items-center justify-center text-center 
                          border-b border-line
                          ${(index + 1) % 3 !== 0 ? "lg:border-r" : ""} 
                          ${(index + 1) % 2 !== 0 ? "sm:border-r lg:border-r-0" : ""}
                        `}
                      >
                        {/* Rate Title */}
                        <h3 className="text-[11px] sm:text-xs font-bold text-ink-2 uppercase tracking-widest mb-4 h-8 flex items-center justify-center">
                          {data.displayName}
                        </h3>

                        {/* Main Rate Value */}
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-deep mb-4 font-mono tracking-tighter">
                          {data.current.toFixed(3)}
                          <span className="text-2xl sm:text-3xl lg:text-4xl">
                            %
                          </span>
                        </div>

                        {/* Change Indicator */}
                        <div
                          className={`flex items-center gap-1 sm:gap-1.5 text-base sm:text-lg font-bold mb-3 ${
                            isPositive
                              ? "text-green-600"
                              : isNegative
                                ? "text-red-500"
                                : "text-ink-2"
                          }`}
                        >
                          {isPositive && (
                            <TrendingUp size={18} strokeWidth={3} />
                          )}
                          {isNegative && (
                            <TrendingDown size={18} strokeWidth={3} />
                          )}
                          <span>{isZero ? "0.000" : formattedChange}</span>
                        </div>

                        {/* 30-Day Range */}
                        <div className="text-[10px] sm:text-[11px] font-semibold text-ink-2 uppercase tracking-widest mt-2">
                          30-Day Range: {data.monthMin.toFixed(3)}% -{" "}
                          {data.monthMax.toFixed(3)}%
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
