import React from "react";
import Image from "next/image";
import Link from "next/link";

import brandLogo from "@/assets/icon.jpeg";
import { Home } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-ink bg-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 pb-14 border-b border-cream/10">
          {/* Brand & Socials Column */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src={brandLogo}
                alt="My Loan Desk Logo"
                width={120}
                height={120}
                className=""
              />
            </Link>

            <p className="text-sm leading-relaxed text-ink/60 max-w-sm mb-6">
              An independent mortgage brokerage sitting on your side of the
              desk. Licensed in 38 states. NMLS #1846297.
            </p>

            {/* Social Links (Using inline SVGs for brand logos) */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center hover:bg-cream/10 transition-colors group"
                aria-label="X (Twitter)"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-ink/70 group-hover:text-ink transition-colors"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center hover:bg-cream/10 transition-colors group"
                aria-label="LinkedIn"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-ink/70 group-hover:text-ink transition-colors"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center hover:bg-cream/10 transition-colors group"
                aria-label="Instagram"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ink/70 group-hover:text-ink transition-colors"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Links: Loans */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-semibold mb-5">
              Loans
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#loans"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Conventional
                </Link>
              </li>
              <li>
                <Link
                  href="#loans"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  FHA
                </Link>
              </li>
              <li>
                <Link
                  href="#loans"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  VA
                </Link>
              </li>
              <li>
                <Link
                  href="#loans"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Jumbo
                </Link>
              </li>
              <li>
                <Link
                  href="#loans"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Refinance
                </Link>
              </li>
              <li>
                <Link
                  href="#loans"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Investment
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Company */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-semibold mb-5">
              Company
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#process"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="#why"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Why us
                </Link>
              </li>
              <li>
                <Link
                  href="#stories"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Client stories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Resources */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-semibold mb-5">
              Resources
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#calculator"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Rate watch
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Buyer's guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  Glossary
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Talk to us */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-semibold mb-5">
              Talk to us
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:18005551234"
                  className="hover:text-[#D4A574] transition-colors font-mono"
                >
                  1-800-555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@myloandesk.com"
                  className="hover:text-[#D4A574] transition-colors"
                >
                  hello@myloandesk.com
                </a>
              </li>
              <li className="text-ink/60">Mon–Sun, 7am–9pm CT</li>
              <li className="pt-2">
                <Link
                  href="#start"
                  className="inline-block bg-brand-orange text-primary-bg px-4 py-2 rounded-full text-xs font-medium hover:bg-brand-orange/90 transition-colors"
                >
                  Start application
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center text-xs text-ink/50">
          <div>
            © {new Date().getFullYear()} myloandesk LLC · NMLS #1846297 · Equal
            Housing Lender
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-[#D4A574] transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-[#D4A574] transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-[#D4A574] transition-colors">
              Licensing
            </Link>
            <Link href="#" className="hover:text-[#D4A574] transition-colors">
              Accessibility
            </Link>
            <Link href="#" className="hover:text-[#D4A574] transition-colors">
              Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
