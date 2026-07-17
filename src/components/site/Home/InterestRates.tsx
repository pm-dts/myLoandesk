"use client";

import { useState, useEffect, useMemo } from "react";
import { Fraunces } from "next/font/google";
import { TrendingUp, TrendingDown, Loader2, AlertCircle } from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// --- Types ---
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

interface ChartSeries {
  name: string;
  data: [number, number][]; // [timestamp, rate]
}

interface MergedChartData {
  timestamp: number;
  [key: string]: number;
}

// --- Constants ---
const TABS = {
  INDICES: "Rate Indices",
  CREDIT: "Credit and LTV",
  TRENDS: "Rate Trends",
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
};

const CHART_LINES = [
  { key: "30-Yr. Conforming", color: "#1d70b8" },
  { key: "30-Yr. Jumbo", color: "#40b4e5" },
  { key: "30-Yr. FHA", color: "#9b59b6" },
  { key: "30-Yr. VA", color: "#6b5b95" },
  { key: "30-Yr. USDA", color: "#d35400" },
  { key: "15-Yr. Conforming", color: "#f1c40f" },
];

const EXTREMES_API_URL =
  "https://prd-nc-obmmi-frontdoor-endpoint-cddkegaabwhpa6aa.a01.azurefd.net/api/blob/extremes.json";
const CHART_API_URL =
  "https://prd-nc-obmmi-frontdoor-endpoint-cddkegaabwhpa6aa.a01.azurefd.net/api/blob/chartData.json";

// --- Date Formatters ---
const formatDateShort = (timestamp: number) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(timestamp));
};

const formatDateFull = (timestamp: number) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(timestamp));
};

export default function CurrentRates() {
  const [activeTab, setActiveTab] = useState<string>(TABS.INDICES);

  // Data States
  const [ratesData, setRatesData] = useState<RatesApiResponse | null>(null);
  const [fullChartData, setFullChartData] = useState<{
    full: MergedChartData[];
    maxTs: number;
  } | null>(null);
  const [timeframe, setTimeframe] = useState<number>(30); // 30, 90, 180, 365

  // Loading & Error States
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all data immediately on mount since it is on-page content now
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [extremesRes, chartRes] = await Promise.all([
          fetch(EXTREMES_API_URL),
          fetch(CHART_API_URL),
        ]);

        if (!extremesRes.ok || !chartRes.ok) {
          throw new Error("Failed to fetch rates data");
        }

        const extremesJson: RatesApiResponse = await extremesRes.json();
        const chartJson: ChartSeries[] = await chartRes.json();

        setRatesData(extremesJson);

        // Process Chart Data: Merge multiple series into single objects by timestamp
        let maxTs = 0;
        const mergedMap = new Map<number, MergedChartData>();

        chartJson.forEach((series) => {
          series.data.forEach(([ts, rate]) => {
            if (ts > maxTs) maxTs = ts;
            if (!mergedMap.has(ts)) {
              mergedMap.set(ts, { timestamp: ts });
            }
            mergedMap.get(ts)![series.name] = rate;
          });
        });

        const sortedData = Array.from(mergedMap.values()).sort(
          (a, b) => a.timestamp - b.timestamp,
        );

        setFullChartData({ full: sortedData, maxTs });
      } catch (err) {
        console.error("Error fetching rates data:", err);
        setError(
          "Unable to load current rates at this time. Please try again later.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const activeKeys = TAB_MAPPINGS[TABS.INDICES];

  // --- Memos for Charts ---
  const creditChartData = useMemo(() => {
    if (!ratesData) return [];
    return [
      {
        fico: "≥ 740",
        "LTV ≤ 80%":
          ratesData[
            "Conforming30YearFixedLTVLessThanEqualTo80FICOGreaterThanEqualTo740"
          ]?.current || 0,
        "LTV > 80%":
          ratesData[
            "Conforming30YearFixedLTVGreaterThan80FICOGreaterThanEqualTo740"
          ]?.current || 0,
      },
      {
        fico: "720-739",
        "LTV ≤ 80%":
          ratesData[
            "Conforming30YearFixedLTVLessThanEqualTo80FICOBetween720-739"
          ]?.current || 0,
        "LTV > 80%":
          ratesData["Conforming30YearFixedLTVGreaterThan80FICOBetween720and739"]
            ?.current || 0,
      },
      {
        fico: "700-719",
        "LTV ≤ 80%":
          ratesData[
            "Conforming30YearFixedLTVLessThanEqualTo80FICOBetween700-719"
          ]?.current || 0,
        "LTV > 80%":
          ratesData["Conforming30YearFixedLTVGreaterThan80FICOBetween700and719"]
            ?.current || 0,
      },
      {
        fico: "680-699",
        "LTV ≤ 80%":
          ratesData[
            "Conforming30YearFixedLTVLessThanEqualTo80FICOBetween680-699"
          ]?.current || 0,
        "LTV > 80%":
          ratesData["Conforming30YearFixedLTVGreaterThan80FICOBetween680and699"]
            ?.current || 0,
      },
      {
        fico: "< 680",
        "LTV ≤ 80%":
          ratesData["Conforming30YearFixedLTVLessThanEqualTo80FICOLessthan680"]
            ?.current || 0,
        "LTV > 80%":
          ratesData["Conforming30YearFixedLTVGreaterThan80FICOLessthan680"]
            ?.current || 0,
      },
    ].filter((item) => item["LTV ≤ 80%"] > 0);
  }, [ratesData]);

  const minCreditRate = creditChartData.length
    ? Math.min(
        ...creditChartData.map((d) => Math.min(d["LTV ≤ 80%"], d["LTV > 80%"])),
      )
    : 0;

  const filteredTrendData = useMemo(() => {
    if (!fullChartData) return [];
    const cutoffTs = fullChartData.maxTs - timeframe * 24 * 60 * 60 * 1000;
    return fullChartData.full.filter((d) => d.timestamp >= cutoffTs);
  }, [fullChartData, timeframe]);

  const { trendMin, trendMax } = useMemo(() => {
    if (!filteredTrendData.length) return { trendMin: 0, trendMax: 10 };
    let min = Infinity;
    let max = -Infinity;
    filteredTrendData.forEach((point) => {
      CHART_LINES.forEach(({ key }) => {
        const val = point[key];
        if (val !== undefined) {
          if (val < min) min = val;
          if (val > max) max = val;
        }
      });
    });
    return {
      trendMin: Math.floor(min * 10) / 10 - 0.2,
      trendMax: Math.ceil(max * 10) / 10 + 0.2,
    };
  }, [filteredTrendData]);

  // --- Custom Tooltip for Trends Chart ---
  const CustomTrendTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#1F2937] text-white p-3 rounded-lg shadow-xl border border-gray-700 text-xs min-w-[200px]">
          <p className="font-semibold text-gray-200 mb-2 border-b border-gray-600 pb-2">
            {formatDateFull(label)}
          </p>
          <div className="space-y-1.5">
            {payload.map((entry: any, index: number) => (
              <div
                key={`item-${index}`}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-gray-300">{entry.name}:</span>
                </div>
                <span className="font-bold">{entry.value.toFixed(3)}%</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-primary-bg rounded-3xl shadow-xl border border-line overflow-hidden flex flex-col">
      {/* On-Page Title Header Area */}
      <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-line bg-cream/30">
        <h2
          className={`text-2xl sm:text-3xl font-display text-ink tracking-tight text-center ${fraunces.className}`}
        >
          Live Interest Rates
        </h2>
      </div>

      {/* Tabs Row */}
      <div className="flex flex-wrap border-b-[3px] border-moss-deep bg-cream/50 sticky top-0 z-10">
        {Object.values(TABS).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors outline-none focus:outline-none ${
              activeTab === tab
                ? "bg-moss-deep text-primary-bg"
                : "bg-transparent text-ink-2 hover:text-moss-deep hover:bg-moss-deep/5"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Panel Render Body */}
      <div className="flex-1 bg-primary-bg min-h-[480px]">
        {/* Loading Spinner Block */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-96 text-moss-deep">
            <Loader2 className="animate-spin mb-4" size={32} />
            <p className="text-sm font-medium animate-pulse">
              Fetching live rates...
            </p>
          </div>
        )}

        {/* Error Block */}
        {!isLoading && error && (
          <div className="flex flex-col items-center justify-center h-96 text-brand-orange px-6 text-center">
            <AlertCircle size={32} className="mb-4" />
            <p className="font-medium">{error}</p>
          </div>
        )}

        {/* Success Tab Interfaces */}
        {!isLoading && !error && ratesData && fullChartData && (
          <>
            {/* TAB 1: Rate Indices Grid */}
            {activeTab === TABS.INDICES && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in duration-300">
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
                      className={`p-6 sm:p-8 flex flex-col items-center justify-center text-center border-b border-line
                        ${(index + 1) % 3 !== 0 ? "lg:border-r" : ""} 
                        ${(index + 1) % 2 !== 0 ? "sm:border-r lg:border-r-0" : ""}
                      `}
                    >
                      <h3 className="text-[11px] sm:text-xs font-bold text-ink-2 uppercase tracking-widest mb-4 h-8 flex items-center justify-center">
                        {data.displayName}
                      </h3>

                      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-moss-deep mb-4 font-mono tracking-tighter">
                        {data.current.toFixed(3)}
                        <span className="text-2xl sm:text-3xl lg:text-4xl">
                          %
                        </span>
                      </div>

                      <div
                        className={`flex items-center gap-1 sm:gap-1.5 text-base sm:text-lg font-bold mb-3 ${
                          isPositive
                            ? "text-green-600"
                            : isNegative
                              ? "text-red-500"
                              : "text-ink-2"
                        }`}
                      >
                        {isPositive && <TrendingUp size={18} strokeWidth={3} />}
                        {isNegative && (
                          <TrendingDown size={18} strokeWidth={3} />
                        )}
                        <span>{isZero ? "0.000" : formattedChange}</span>
                      </div>

                      <div className="text-[10px] sm:text-[11px] font-semibold text-ink-2 uppercase tracking-widest mt-2">
                        30-Day Range: {data.monthMin.toFixed(3)}% -{" "}
                        {data.monthMax.toFixed(3)}%
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* TAB 2: Credit and LTV Bar Chart */}
            {activeTab === TABS.CREDIT && (
              <div className="p-6 sm:p-10 animate-in fade-in duration-300">
                <div className="mb-8">
                  <h3 className="text-2xl font-display text-ink mb-2">
                    Rate Adjustments by FICO & LTV
                  </h3>
                  <p className="text-ink-2 text-sm">
                    Compare how your credit score and down payment
                    (Loan-to-Value) impact your 30-Year Fixed conforming rate.
                  </p>
                </div>

                <div className="h-[380px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={creditChartData}
                      margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#E5E7EB"
                      />
                      <XAxis
                        dataKey="fico"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                          fill: "#4B5563",
                          fontSize: 13,
                          fontWeight: 500,
                        }}
                        dy={10}
                      />
                      <YAxis
                        domain={[
                          Math.floor(minCreditRate * 10) / 10 - 0.2,
                          "auto",
                        ]}
                        tickFormatter={(val) => `${val.toFixed(2)}%`}
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "#4B5563", fontSize: 13 }}
                        dx={-10}
                      />
                      <Tooltip
                        cursor={{ fill: "#F3F4F6" }}
                        contentStyle={{
                          borderRadius: "12px",
                          border: "none",
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                        }}
                        formatter={(value: any) => [
                          `${value ? Number(value).toFixed(3) : "0.000"}%`,
                          undefined,
                        ]}
                        labelStyle={{
                          color: "#111827",
                          fontWeight: "bold",
                          marginBottom: "4px",
                        }}
                      />
                      <Legend
                        iconType="circle"
                        wrapperStyle={{ paddingTop: "20px" }}
                      />
                      <Bar
                        dataKey="LTV ≤ 80%"
                        fill="#153B2C"
                        radius={[4, 4, 0, 0]}
                        maxBarSize={60}
                      />
                      <Bar
                        dataKey="LTV > 80%"
                        fill="#FF6B00"
                        radius={[4, 4, 0, 0]}
                        maxBarSize={60}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* TAB 3: Rate Trends Line Chart */}
            {activeTab === TABS.TRENDS && (
              <div className="p-6 sm:p-10 flex flex-col h-full animate-in fade-in duration-300">
                {/* BRAND THEMED Timeframe Toggles */}
                <div className="flex items-center gap-1 bg-line/30 p-1 rounded-lg w-fit mb-8 border border-line">
                  {[30, 90, 180, 365].map((days) => (
                    <button
                      key={days}
                      onClick={() => setTimeframe(days)}
                      className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                        timeframe === days
                          ? "bg-moss-deep text-primary-bg shadow-sm"
                          : "text-ink-2 hover:bg-moss-deep/5 hover:text-moss-deep"
                      }`}
                    >
                      {days}
                    </button>
                  ))}
                </div>

                {/* Line Chart */}
                <div className="h-[380px] w-full mt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={filteredTrendData}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 10,
                        bottom: 20,
                      }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#E5E7EB"
                      />
                      <XAxis
                        dataKey="timestamp"
                        type="number"
                        domain={["dataMin", "dataMax"]}
                        tickFormatter={formatDateShort}
                        tickLine={false}
                        axisLine={{ stroke: "#D1D5DB" }}
                        tick={{ fill: "#6B7280", fontSize: 12 }}
                        dy={15}
                        minTickGap={50}
                      />
                      <YAxis
                        domain={[trendMin, trendMax]}
                        tickFormatter={(val) => `${val.toFixed(3)}%`}
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "#6B7280", fontSize: 12 }}
                        dx={-10}
                      />
                      <Tooltip content={<CustomTrendTooltip />} />
                      <Legend
                        iconType="circle"
                        wrapperStyle={{
                          paddingTop: "30px",
                          fontSize: "13px",
                        }}
                      />

                      {/* Render Lines Dynamically */}
                      {CHART_LINES.map((line) => (
                        <Line
                          key={line.key}
                          type="monotone"
                          dataKey={line.key}
                          stroke={line.color}
                          strokeWidth={2.5}
                          dot={false}
                          activeDot={{
                            r: 6,
                            strokeWidth: 0,
                            fill: line.color,
                          }}
                        />
                      ))}
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
