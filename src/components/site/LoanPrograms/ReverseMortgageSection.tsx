"use client";

import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";
import { useTranslations } from "next-intl";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

interface ReverseMortgageSectionProps {
  locale?: string;
}

export default function ReverseMortgageSection({
  locale = "en",
}: ReverseMortgageSectionProps) {
  const t = useTranslations("ReverseMortgage.programs");
  const isEs = locale === "es";

  const getLocalizedHref = (path: string) => (isEs ? `/es${path}` : path);

  return (
    <section
      className="max-w-7xl mx-auto px-6 mt-10 lg:px-10 mb-20"
      id="reverse-mortgage"
    >
      <h2
        className={cn(
          "text-3xl font-display text-ink mb-10 pb-4 border-b border-line",
          fraunces.className,
        )}
      >
        {t("heading")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. HomeSafe Second */}
        <div
          id="homesafe-second"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between sm:h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                {t("homesafe.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              {t("homesafe.title")}
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-2">
              {t("homesafe.subtitle")}
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("homesafe.description")}
            </p>
          </div>
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <Link
              href={getLocalizedHref("/loan-programs/homesafe-second")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("read_more")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* 2. Reverse Mortgage Refinance */}
        <div
          id="reverse-refinance"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between sm:h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                {t("refinance.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              {t("refinance.title")}
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2">
              {t("refinance.subtitle")}
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("refinance.description")}
            </p>
          </div>
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <Link
              href={getLocalizedHref(
                "/loan-programs/reverse-mortgage-refinance",
              )}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("read_more")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* 3. Reverse Mortgage for Purchase */}
        <div
          id="reverse-purchase"
          className="scroll-mt-36 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between sm:h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                {t("purchase.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              {t("purchase.title")}
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-2">
              {t("purchase.subtitle")}
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("purchase.description")}
            </p>
          </div>
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <Link
              href={getLocalizedHref(
                "/loan-programs/reverse-mortgage-purchase",
              )}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("read_more")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* 4. Is a Reverse Mortgage Right for You? */}
        <div
          id="reverse-right-for-you"
          className="scroll-mt-36 col-span-1 md:col-span-2 lg:col-span-3 bg-primary-bg p-8 border border-line rounded-3xl flex flex-col justify-between sm:h-[400px] transition-colors duration-300 hover:bg-cream/40"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange shrink-0">
                <Shield size={22} strokeWidth={1.8} />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">
                {t("right_for_you.tag")}
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              {t("right_for_you.title")}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              {t("right_for_you.description")}
            </p>
          </div>
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2 max-w-md">
            <Link
              href={getLocalizedHref("/reverse-mortgage")}
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              {t("explore_page")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
