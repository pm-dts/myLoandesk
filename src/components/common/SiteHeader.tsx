"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import brandLogo from "@/assets/icon.jpeg";

const loanLinks = [
  { name: "Conventional Loans", href: "/loan-programs#conventional" },
  { name: "FHA Loans", href: "/loan-programs#fha" },
  { name: "Portfolio Loans", href: "/loan-programs#portfolio" },
  { name: "VA Loans", href: "/loan-programs#va" },
  { name: "Hybrid Loans", href: "/loan-programs#hybrid" },
  { name: "Private Bridge & Hard Money", href: "/loan-programs#bridge-money" },
  { name: "FHA 203(k) Rehab Loans", href: "/loan-programs#fha-203k" },
  { name: "Refinance Options", href: "/loan-programs#refinance" },
  { name: "FHA Streamline Refinance", href: "/loan-programs#fha-streamline" },
  { name: "HELOC / Equity Lines", href: "/loan-programs#heloc" },
  { name: "Reverse Mortgage", href: "/loan-programs#reverse" },
  { name: "Equipment Financing", href: "/loan-programs#equipment" },
  { name: "Business Lines of Credit", href: "/loan-programs#business-lines" },
  { name: "Working Capital", href: "/loan-programs#working-capital" },
  { name: "Franchise Financing", href: "/loan-programs#franchise" },
  { name: "Commercial Loans", href: "/loan-programs#commercial" },
  { name: "Bridge to Sale", href: "/loan-programs#bridge-sale" },
  { name: "Mexico Loans", href: "/loan-programs#mexico" },
  { name: "Portugal Loans", href: "/loan-programs#portugal" },
  { name: "Dream Home Builder (EEP)", href: "/loan-programs#eep" },
  { name: "Doctor Loan Program", href: "/loan-programs#doctor" },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileLoanOpen, setIsMobileLoanOpen] = useState(false);

  React.useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Small timeout gives Next.js time to render the DOM target if changing pages
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 80);
      }
    };

    // Listen for internal URL hash shifts
    window.addEventListener("hashchange", handleHashScroll);

    // Fire once on initial page entry load if coming from a different route
    handleHashScroll();

    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (isMobileMenuOpen) {
      setIsMobileLoanOpen(false);
    }
  };

  return (
    /* Changed 'fixed' to 'sticky' so it naturally pushes layout content down without requiring manual page padding adjustments */
    <header className="sticky top-0 left-0 right-0 z-50 nav-blur border-b border-line bg-primary-bg w-full">
      {/* --- DESKTOP NAVIGATION --- */}
      <nav className="hidden lg:flex max-w-7xl mx-auto px-6 lg:px-10 h-32 items-center justify-between gap-4">
        {/* Desktop Logo Layout */}
        <Link href="/" className="flex-shrink-0 flex items-center py-2">
          <Image
            src={brandLogo}
            alt="My Loan Desk Logo"
            width={260}
            height={96}
            className="w-auto h-24 object-contain"
            priority
          />
        </Link>

        {/* Center Links */}
        <div className="flex items-center gap-5 xl:gap-7 text-[13px] font-medium text-ink-2 whitespace-nowrap">
          <div
            className="relative group py-4"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              href="/loan-programs"
              className="ulink focus-ring flex items-center gap-1 cursor-pointer"
            >
              Loan types
              <ChevronDown
                size={13}
                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </Link>

            <div
              className={`absolute left-0 mt-2 w-[560px] bg-primary-bg border border-line rounded-2xl shadow-xl p-5 grid grid-cols-2 gap-x-4 gap-y-1.5 transition-all duration-200 origin-top z-[60] ${
                isDropdownOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {loanLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-ink-2 hover:text-brand-orange hover:bg-cream/40 px-2.5 py-1.5 rounded-lg transition-all"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/realtors" className="ulink focus-ring">
            Realtors
          </Link>
          <Link href="/careers" className="ulink focus-ring">
            Careers
          </Link>
          <Link href="/calendar" className="ulink focus-ring">
            Our Calendar
          </Link>
          <Link href="/#process" className="ulink focus-ring">
            Process
          </Link>
          <Link href="/#calculator" className="ulink focus-ring">
            Calculator
          </Link>
          <Link href="/#why" className="ulink focus-ring">
            Why us
          </Link>
          <Link href="/#stories" className="ulink focus-ring">
            Stories
          </Link>
          <Link href="/#faq" className="ulink focus-ring">
            FAQ
          </Link>
          <Link href="/blog" className="ulink focus-ring">
            Blog
          </Link>
        </div>

        {/* Action Button Deck */}
        <div className="flex items-center gap-3 flex-shrink-0 text-[13px] font-medium">
          <a
            href="#"
            className="text-ink-2 hover:text-ink transition-colors focus-ring px-2 py-1"
          >
            Sign in
          </a>

          <a
            href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
            target="_blank"
            className="btn-shine bg-brand-orange text-primary-bg px-5 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors focus-ring"
          >
            Start application
          </a>
        </div>
      </nav>

      {/* --- MOBILE NAVIGATION --- */}
      <div className="lg:hidden flex flex-col w-full bg-primary-bg">
        {/* Row 1: Top branding bar */}
        <div className="relative h-28 px-4 flex items-center justify-center border-b border-line/30">
          {/* Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="absolute left-4 w-11 h-11 flex items-center justify-center rounded-full border border-line text-ink-2 bg-cream/20 focus-ring"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Centered Bigger Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center justify-center py-2"
          >
            <Image
              src={brandLogo}
              alt="My Loan Desk Logo"
              width={220}
              height={80}
              className="w-auto h-20 object-contain"
              priority
            />
          </Link>
        </div>

        {/* Row 2: Secondary Action Button Line */}
        <div className="px-4 py-3 border-b border-line/50 bg-cream/10">
          <a
            href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
            target="_blank"
            className="btn-shine w-full bg-brand-orange text-primary-bg py-3 rounded-full text-xs font-semibold tracking-wide flex items-center justify-center transition-colors focus-ring"
          >
            Start application
          </a>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-line bg-primary-bg absolute top-full left-0 w-full shadow-2xl max-h-[calc(100vh-11rem)] overflow-y-auto z-50">
          <div className="px-5 py-5 flex flex-col gap-1.5 text-base font-medium text-ink">
            <Link
              href="/realtors"
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={toggleMobileMenu}
            >
              Realtors
            </Link>

            <Link
              href="/careers"
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={toggleMobileMenu}
            >
              Careers
            </Link>

            <Link
              href="/calendar"
              className="p-3 rounded-xl hover:bg-cream/30 text-sm flex items-center gap-2 text-brand-orange"
              onClick={toggleMobileMenu}
            >
              <Calendar size={16} />
              Our Calendar
            </Link>

            <hr className="border-line my-2" />

            <div className="rounded-xl border border-line overflow-hidden bg-cream/20">
              <button
                onClick={() => setIsMobileLoanOpen(!isMobileLoanOpen)}
                className="w-full p-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-ink-2/70"
              >
                Loan Programs Options
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isMobileLoanOpen ? "rotate-180 text-brand-orange" : ""}`}
                />
              </button>

              {isMobileLoanOpen && (
                <div className="px-3 pb-3 grid grid-cols-1 gap-1 border-t border-line/50 bg-primary-bg pt-2 max-h-64 overflow-y-auto">
                  {loanLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-xs text-ink-2 hover:text-brand-orange py-2 px-2 rounded-md hover:bg-cream/40 transition-all"
                      onClick={toggleMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    href="/loan-programs"
                    className="text-xs text-brand-orange font-semibold p-2 border-t border-line/40 mt-1 flex items-center gap-1"
                    onClick={toggleMobileMenu}
                  >
                    View All Program Classifications →
                  </Link>
                </div>
              )}
            </div>

            <hr className="border-line my-2" />

            <span className="px-3 pt-1 text-[10px] uppercase font-semibold tracking-widest text-ink-2/40">
              Jump To Section
            </span>

            <div className="grid grid-cols-2 gap-1 text-xs">
              <Link
                href="/#process"
                className="p-3 rounded-xl hover:bg-cream/30"
                onClick={toggleMobileMenu}
              >
                Process
              </Link>
              <Link
                href="/#calculator"
                className="p-3 rounded-xl hover:bg-cream/30"
                onClick={toggleMobileMenu}
              >
                Calculator
              </Link>
              <Link
                href="/#why"
                className="p-3 rounded-xl hover:bg-cream/30"
                onClick={toggleMobileMenu}
              >
                Why us
              </Link>
              <Link
                href="/#stories"
                className="p-3 rounded-xl hover:bg-cream/30"
                onClick={toggleMobileMenu}
              >
                Stories
              </Link>
              <Link
                href="/#faq"
                className="p-3 rounded-xl hover:bg-cream/30"
                onClick={toggleMobileMenu}
              >
                FAQ
              </Link>
            </div>

            <hr className="border-line my-2" />

            <a
              href="#"
              className="p-3 text-center rounded-xl border border-line text-sm text-ink-2 mt-2"
              onClick={toggleMobileMenu}
            >
              Sign In to Your Account
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
