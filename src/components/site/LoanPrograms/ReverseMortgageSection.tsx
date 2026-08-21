"use client";

import Link from "next/link";
import { Shield, ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function ReverseMortgageSection() {
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
        Reverse Mortgage Programs
      </h2>

      {/* Grid updated to gap-6 matching the fixed card layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. HomeSafe Second (HELOC Alternative) */}
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
                Reverse Mortgage
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              HomeSafe Second (HELOC Alternative)
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-2">
              Access Your Equity Without Replacing Your First Mortgage
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              HomeSafe Second is a second-lien reverse mortgage designed for
              eligible homeowners who want to access their home equity while
              keeping their existing first mortgage in place.
            </p>
          </div>
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <Link
              href="/loan-programs/homesafe-second"
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
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
                Refinance
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              Reverse Mortgage Refinance
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2">
              Convert Your Home Equity Into Cash
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              A Reverse Mortgage Refinance allows you to replace your existing
              mortgage with a reverse mortgage. Any remaining equity can then be
              accessed as tax free proceeds, giving you additional financial
              flexibility while eliminating your required monthly mortgage
              payment.
            </p>
          </div>
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <Link
              href="/loan-programs/reverse-mortgage-refinance"
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
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
                Home Purchase
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              Reverse Mortgage for Purchase
            </h3>
            <h4 className="font-medium text-ink text-sm mb-2 line-clamp-2">
              Buy Your Next Home With No Required Monthly Mortgage Payment
            </h4>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              A reverse mortgage isn&apos;t just for homeowners—it can also help
              you purchase your next primary residence.
            </p>
          </div>
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
            <Link
              href="/loan-programs/reverse-mortgage-purchase"
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Read More <ArrowRight size={14} />
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
                Retirement Planning
              </span>
            </div>
            <h3
              className={cn(
                "text-2xl font-medium text-ink mb-3",
                fraunces.className,
              )}
            >
              Is a Reverse Mortgage Right for You?
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
              Every homeowner&apos;s situation is unique. That&apos;s why we
              take the time to understand your goals and explain every available
              option before you make a decision. Whether you&apos;re interested
              in refinancing your current home or purchasing your next one...
            </p>
          </div>
          <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2 max-w-md">
            <Link
              href="/reverse-mortgage"
              className="flex-1 py-3 bg-cream hover:bg-brand-orange hover:border-brand-orange hover:text-white border border-line rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-1.5 transition-all"
            >
              Explore Full Program Page <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
