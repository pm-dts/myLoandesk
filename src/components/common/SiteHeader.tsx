"use client";
import React, { useState } from "react";
import { Home, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import brandLogo from "@/assets/icon.jpeg";

// Full layout list targeting exact section IDs on your loan programs page
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-line bg-primatext-primary-bg">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-28 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={brandLogo}
            alt="My Loan Desk Logo"
            width={120}
            height={120}
            className=""
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-9 text-sm font-medium text-ink-2">
          {/* Hover Menu for Loan Types */}
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
                size={14}
                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </Link>

            {/* Mega Dropdown Panel */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[550px] bg-white border border-line rounded-2xl shadow-xl p-5 grid grid-cols-2 gap-x-4 gap-y-1.5 transition-all duration-200 origin-top z-[60] ${
                isDropdownOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {loanLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-ink-2 hover:text-brand-orange hover:bg-gray-50 px-2.5 py-1.5 rounded-lg transition-all"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <a href="#process" className="ulink focus-ring">
            Process
          </a>
          <a href="#calculator" className="ulink focus-ring">
            Calculator
          </a>
          <a href="#why" className="ulink focus-ring">
            Why us
          </a>
          <a href="#stories" className="ulink focus-ring">
            Stories
          </a>
          <a href="#faq" className="ulink focus-ring">
            FAQ
          </a>
        </div>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:block text-sm font-medium ulink focus-ring"
          >
            Sign in
          </a>
          <a
            href="#start"
            className="btn-shine bg-brand-orange text-primary-bg px-5 py-2.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors focus-ring"
          >
            Start application
          </a>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus-ring text-ink-2"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-line bg-primatext-primary-bg max-h-[calc(100vh-7rem)] overflow-y-auto">
          <div className="px-6 py-5 flex flex-col gap-4 text-base font-medium">
            {/* Collapsible Loan Section for Mobile Users */}
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-ink-2/60 uppercase tracking-wider">
                Loan Options
              </span>
              <div className="pl-3 grid grid-cols-1 gap-2 border-l border-line">
                {loanLinks.slice(0, 8).map(
                  (
                    link, // Showing first few for mobile clarity, or keep all
                  ) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-ink-2 hover:text-brand-orange py-0.5"
                      onClick={toggleMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ),
                )}
                <Link
                  href="/loan-programs"
                  className="text-sm text-brand-orange font-semibold pt-1"
                  onClick={toggleMobileMenu}
                >
                  View All Programs →
                </Link>
              </div>
            </div>

            <a
              href="#process"
              className="mobile-link"
              onClick={toggleMobileMenu}
            >
              Process
            </a>
            <a
              href="#calculator"
              className="mobile-link"
              onClick={toggleMobileMenu}
            >
              Calculator
            </a>
            <a href="#why" className="mobile-link" onClick={toggleMobileMenu}>
              Why us
            </a>
            <a
              href="#stories"
              className="mobile-link"
              onClick={toggleMobileMenu}
            >
              Stories
            </a>
            <a href="#faq" className="mobile-link" onClick={toggleMobileMenu}>
              FAQ
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
