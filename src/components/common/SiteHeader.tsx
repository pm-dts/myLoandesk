"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  PlayCircle,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import brandLogo from "@/assets/logo-cropped.png";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

const loanLinksKeys = [
  { key: "conventional", href: "/loan-programs#conventional" },
  { key: "fha", href: "/loan-programs#fha" },
  { key: "jumbo", href: "/loan-programs#portfolio" },
  { key: "bank_statement", href: "/loan-programs#bank-statement" },
  { key: "va", href: "/loan-programs#va" },
  { key: "hybrid", href: "/loan-programs#hybrid" },
  { key: "bridge", href: "/loan-programs#bridge" },
  { key: "bridge_to_sale", href: "/loan-programs#bridge-to-sale" },
  { key: "international_buyer", href: "/loan-programs#international-buyer" },
  { key: "buydown_2_1", href: "/loan-programs#buydown-2-1" },
  { key: "itin", href: "/loan-programs#ITIN-home" },
  { key: "fha_203k", href: "/loan-programs#fha-203k" },
  { key: "refinance", href: "/loan-programs#refinance" },
  { key: "streamline", href: "/loan-programs#streamline" },
  { key: "heloc", href: "/loan-programs#heloc" },
  { key: "dscr", href: "/loan-programs#DSCR" },
  { key: "fix_flip", href: "/loan-programs#fix-flip" },
  { key: "construction", href: "/loan-programs#ground-up" },
  { key: "reverse_mortgage", href: "/loan-programs#reverse-mortgage" },
  {
    key: "commercial_real_estate",
    href: "/loan-programs#commercial-real-estate",
  },
  { key: "equipment", href: "/loan-programs#equipment" },
  { key: "business_lines", href: "/loan-programs#business-lines" },
  { key: "working_capital", href: "/loan-programs#working-capital" },
  { key: "franchise", href: "/loan-programs#franchise" },
  { key: "commercial", href: "/loan-programs#commercial" },
  { key: "sba_business", href: "/loan-programs#sba-business" },
  { key: "portugal", href: "/loan-programs#portugal" },
  { key: "eep", href: "/loan-programs#eep" },
  { key: "doctor", href: "/loan-programs#doctor" },
] as const;

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileLoanOpen, setIsMobileLoanOpen] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const t = useTranslations("Common.Header");
  const isEs = pathname === "/es" || pathname?.startsWith("/es/");

  // Dynamic path generator
  const getLocalizedHref = (path: string) => {
    if (!isEs) return path;
    if (path.startsWith("/#")) return `/es${path}`;
    return `/es${path === "/" ? "" : path}`;
  };

  useEffect(() => {
    const startFlash = setTimeout(() => setIsFlashing(true), 500);
    const endFlash = setTimeout(() => setIsFlashing(false), 3000);

    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 80);
      }
    };

    window.addEventListener("hashchange", handleHashScroll);
    handleHashScroll();

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
      clearTimeout(startFlash);
      clearTimeout(endFlash);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (isMobileMenuOpen) {
      setIsMobileLoanOpen(false);
    }
  };

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  // Tracking Handlers
  const trackPhoneClick = (label: string) => {
    sendGTMEvent({
      event: "phone_call_clicked",
      category: "contact",
      label: label,
      page_path: pathname || "/",
    });
  };

  const trackWhatsAppClick = () => {
    sendGTMEvent({
      event: "whatsapp_clicked",
      category: "contact",
      label: "Header WhatsApp Button",
      page_path: pathname || "/",
    });
  };

  const trackQuoteClick = (source: string) => {
    sendGTMEvent({
      event: "get_quote_button_clicked",
      category: "engagement",
      label: `Get Quote (${source})`,
      page_path: pathname || "/",
    });
  };

  const trackNavigation = (linkName: string, destination: string) => {
    sendGTMEvent({
      event: "header_navigation_clicked",
      category: "navigation",
      label: linkName,
      destination_url: destination,
      page_path: pathname || "/",
    });
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 nav-blur border-b border-line bg-primary-bg w-full">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes neonOrangeFlash {
            0%, 100% { filter: drop-shadow(0 0 0px transparent); }
            20%, 60% { filter: drop-shadow(0 0 8px rgba(255, 107, 0, 0.7)); }
            40%, 80% { filter: drop-shadow(0 0 2px rgba(255, 107, 0, 0.4)); }
          }
          .neon-flash-active {
            animation: neonOrangeFlash 2s ease-in-out forwards;
          }
          .hover-neon-flash:hover {
            animation: neonOrangeFlash 2s ease-in-out forwards;
          }
        `,
        }}
      />

      {/* --- DESKTOP NAVIGATION --- */}
      <nav className="hidden lg:flex max-w-[1600px] mx-auto pl-2 pr-5 h-36 items-center justify-between gap-3">
        {/* Desktop Logo */}
        <Link
          href={getLocalizedHref("/")}
          className="shrink-0 flex items-center py-2 z-10"
        >
          <Image
            src={brandLogo}
            alt="My Loan Desk Logo"
            width={270}
            height={100}
            className={`w-auto h-28 ml-1 object-contain transition-all duration-300 hover-neon-flash ${
              isFlashing ? "neon-flash-active" : ""
            }`}
            priority
          />
        </Link>

        {/* Center Links */}
        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[13px] font-medium text-ink-2 whitespace-nowrap relative z-10">
          <div
            className="relative group py-2"
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <Link
              href={getLocalizedHref("/loan-programs")}
              onClick={() =>
                trackNavigation(
                  "Loan types",
                  getLocalizedHref("/loan-programs"),
                )
              }
              className="ulink focus-ring flex items-center text-[14px] font-semibold gap-1 cursor-pointer"
            >
              {t("nav.loan_types")}
              <ChevronDown
                size={13}
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            {/* Bridge hover area */}
            <div
              className={`absolute left-0 top-full h-4 w-full ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            ></div>

            <div
              className={`absolute left-0 top-[calc(100%+8px)] w-[560px] bg-primary-bg border border-line rounded-2xl shadow-xl p-5 grid grid-cols-2 gap-x-4 gap-y-1.5 transition-all duration-200 origin-top z-[60] ${
                isDropdownOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {loanLinksKeys.map((item) => {
                const localizedLink = getLocalizedHref(item.href);
                const translatedName = t(`loan_programs.${item.key}`);
                return (
                  <Link
                    key={item.href}
                    href={localizedLink}
                    className="text-xs text-ink-2 hover:text-brand-orange hover:bg-cream/40 px-2.5 py-1.5 rounded-lg transition-all"
                    onClick={() => {
                      trackNavigation(
                        `Loan Program - ${translatedName}`,
                        localizedLink,
                      );
                      setIsDropdownOpen(false);
                    }}
                  >
                    {translatedName}
                  </Link>
                );
              })}
            </div>
          </div>

          <Link
            href={getLocalizedHref("/secure-document-upload")}
            onClick={() =>
              trackNavigation(
                "Secure Doc Upload",
                getLocalizedHref("/secure-document-upload"),
              )
            }
            className="ulink focus-ring text-[14px] font-semibold"
          >
            {t("nav.secure_doc_upload")}
          </Link>
          <Link
            href={getLocalizedHref("/about-us")}
            onClick={() =>
              trackNavigation("About us", getLocalizedHref("/about-us"))
            }
            className="ulink focus-ring text-[14px] font-semibold"
          >
            {t("nav.about_us")}
          </Link>
          <Link
            href={getLocalizedHref("/realtors")}
            onClick={() =>
              trackNavigation("Realtors", getLocalizedHref("/realtors"))
            }
            className="ulink focus-ring text-[14px] font-semibold"
          >
            {t("nav.realtors")}
          </Link>
          <Link
            href={getLocalizedHref("/careers")}
            onClick={() =>
              trackNavigation("Careers", getLocalizedHref("/careers"))
            }
            className="ulink focus-ring text-[14px] font-semibold"
          >
            {t("nav.careers")}
          </Link>
          <Link
            href={getLocalizedHref("/calendar")}
            onClick={() =>
              trackNavigation("Our Calendar", getLocalizedHref("/calendar"))
            }
            className="ulink focus-ring text-[14px] font-semibold"
          >
            {t("nav.our_calendar")}
          </Link>
          <Link
            href={getLocalizedHref("/#calculator")}
            onClick={() =>
              trackNavigation("Calculator", getLocalizedHref("/#calculator"))
            }
            className="ulink focus-ring text-[14px] font-semibold"
          >
            {t("nav.calculator")}
          </Link>
          <Link
            href={getLocalizedHref("/#faq")}
            onClick={() => trackNavigation("FAQ", getLocalizedHref("/#faq"))}
            className="ulink focus-ring text-[14px] font-semibold"
          >
            {t("nav.faq")}
          </Link>
          <Link
            href={getLocalizedHref("/blog")}
            onClick={() => trackNavigation("Blog", getLocalizedHref("/blog"))}
            className="ulink focus-ring text-[14px] font-semibold"
          >
            {t("nav.blog")}
          </Link>
        </div>

        {/* --- Action Button Deck & Stacked Language Switcher --- */}
        <div className="flex items-center gap-4 shrink-0 relative z-20">
          {/* Phone & Quote Column */}
          <div className="flex flex-col items-center justify-center">
            <a
              href="tel:3058916500"
              onClick={() => trackPhoneClick("Desktop Header Phone Link")}
              className="relative z-30 inline-block py-1 text-brand-orange font-bold text-sm underline underline-offset-4 hover:text-orange-600 transition-colors cursor-pointer"
            >
              {t("actions.phone_display")}
            </a>

            <div className="mt-2.5">
              <Link
                href={getLocalizedHref("/get-started")}
                onClick={() => trackQuoteClick("Desktop Header")}
                className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-1.5 uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-sm"
              >
                {t("actions.get_a_quote")} <PlayCircle size={16} />
              </Link>
            </div>
          </div>

          {/* Right Stack: WhatsApp, Call/Text, and Language Switcher directly underneath */}
          <div className="flex flex-col gap-1.5 w-[145px]">
            <a
              href="https://wa.me/13058916500"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="border border-[#25D366] text-[#25D366] bg-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider flex items-center justify-between hover:bg-[#25D366]/10 transition-colors rounded-sm"
            >
              {t("actions.whatsapp")} <MessageCircle size={14} />
            </a>

            <a
              href="tel:3058916500"
              onClick={() => trackPhoneClick("Desktop Header Call/Text Button")}
              className="border border-gray-300 text-brand-orange bg-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider flex items-center justify-between hover:bg-gray-50 transition-colors rounded-sm"
            >
              {t("actions.call_or_text")} <Phone size={14} />
            </a>

            {/* Language Switcher positioned underneath */}
            <div className="flex justify-end pt-0.5">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE NAVIGATION --- */}
      <div className="lg:hidden flex flex-col w-full bg-primary-bg">
        {/* Row 1: Top branding bar */}
        <div className="relative h-24 px-4 flex items-center justify-between border-b border-line/30">
          <button
            onClick={toggleMobileMenu}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-line text-ink-2 bg-cream/40 focus-ring z-20"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link
            href={getLocalizedHref("/")}
            className="shrink-0 flex items-center justify-center"
          >
            <Image
              src={brandLogo}
              alt="My Loan Desk Logo"
              width={220}
              height={80}
              className={`w-auto h-26 ml-2 p-2 object-contain transition-all duration-300 hover-neon-flash ${
                isFlashing ? "neon-flash-active" : ""
              }`}
              priority
            />
          </Link>

          <div className="z-20">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Row 2: Secondary Action Button Line */}
        <div className="px-4 py-3 flex flex-col gap-2.5 border-b border-line/50 bg-cream/10">
          <a
            href="tel:3058916500"
            onClick={() => trackPhoneClick("Mobile Subheader Phone Link")}
            className="relative z-30 inline-block py-0.5 text-brand-orange text-center font-bold underline underline-offset-4 hover:text-orange-600 transition-colors"
          >
            {t("actions.phone_display")}
          </a>
          <Link
            href={getLocalizedHref("/get-started")}
            onClick={() => trackQuoteClick("Mobile Subheader")}
            className="btn-shine w-full bg-brand-orange text-primary-bg py-2 rounded-full text-sm font-semibold tracking-wide flex items-center justify-center transition-colors focus-ring shadow-sm"
          >
            {t("actions.get_a_quote")}
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-line bg-primary-bg absolute top-full left-0 w-full shadow-2xl max-h-[calc(100vh-11rem)] overflow-y-auto z-50">
          <div className="px-5 py-5 flex flex-col gap-1.5 text-base font-medium text-ink">
            <Link
              href={getLocalizedHref("/about-us")}
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={() => {
                trackNavigation(
                  "Mobile About Us",
                  getLocalizedHref("/about-us"),
                );
                toggleMobileMenu();
              }}
            >
              {t("nav.about_us")}
            </Link>
            <Link
              href={getLocalizedHref("/secure-document-upload")}
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={() => {
                trackNavigation(
                  "Mobile Secure Doc Upload",
                  getLocalizedHref("/secure-document-upload"),
                );
                toggleMobileMenu();
              }}
            >
              {t("nav.secure_doc_upload")}
            </Link>

            <Link
              href={getLocalizedHref("/realtors")}
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={() => {
                trackNavigation(
                  "Mobile Realtors",
                  getLocalizedHref("/realtors"),
                );
                toggleMobileMenu();
              }}
            >
              {t("nav.realtors")}
            </Link>

            <Link
              href={getLocalizedHref("/careers")}
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={() => {
                trackNavigation("Mobile Careers", getLocalizedHref("/careers"));
                toggleMobileMenu();
              }}
            >
              {t("nav.careers")}
            </Link>

            <Link
              href={getLocalizedHref("/get-quote")}
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={() => {
                trackQuoteClick("Mobile Menu Drawer");
                toggleMobileMenu();
              }}
            >
              {t("actions.get_a_quote")}
            </Link>

            <Link
              href={getLocalizedHref("/blog")}
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={() => {
                trackNavigation("Mobile Blog", getLocalizedHref("/blog"));
                toggleMobileMenu();
              }}
            >
              {t("nav.blog")}
            </Link>

            <Link
              href={getLocalizedHref("/calendar")}
              className="p-3 rounded-xl hover:bg-cream/30 text-sm flex items-center gap-2 text-brand-orange"
              onClick={() => {
                trackNavigation(
                  "Mobile Calendar",
                  getLocalizedHref("/calendar"),
                );
                toggleMobileMenu();
              }}
            >
              <Calendar size={16} />
              {t("nav.our_calendar")}
            </Link>

            <hr className="border-line my-2" />

            <div className="rounded-xl border border-line overflow-hidden bg-cream/20">
              <button
                onClick={() => setIsMobileLoanOpen(!isMobileLoanOpen)}
                className="w-full p-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-ink-2/70"
              >
                {t("mobile.loan_programs_options")}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isMobileLoanOpen ? "rotate-180 text-brand-orange" : ""
                  }`}
                />
              </button>

              {isMobileLoanOpen && (
                <div className="px-3 pb-3 grid grid-cols-1 gap-1 border-t border-line/50 bg-primary-bg pt-2 max-h-64 overflow-y-auto">
                  {loanLinksKeys.map((item) => {
                    const localizedLink = getLocalizedHref(item.href);
                    const translatedName = t(`loan_programs.${item.key}`);
                    return (
                      <Link
                        key={item.href}
                        href={localizedLink}
                        className="text-xs text-ink-2 hover:text-brand-orange py-2 px-2 rounded-md hover:bg-cream/40 transition-all"
                        onClick={() => {
                          trackNavigation(
                            `Mobile Loan Program - ${translatedName}`,
                            localizedLink,
                          );
                          toggleMobileMenu();
                        }}
                      >
                        {translatedName}
                      </Link>
                    );
                  })}
                  <Link
                    href={getLocalizedHref("/loan-programs")}
                    className="text-xs text-brand-orange font-semibold p-2 border-t border-line/40 mt-1 flex items-center gap-1"
                    onClick={() => {
                      trackNavigation(
                        "Mobile View All Program Classifications",
                        getLocalizedHref("/loan-programs"),
                      );
                      toggleMobileMenu();
                    }}
                  >
                    {t("mobile.view_all_programs")}
                  </Link>
                </div>
              )}
            </div>

            <hr className="border-line my-2" />

            <span className="px-3 pt-1 text-[10px] uppercase font-semibold tracking-widest text-ink-2/40">
              {t("mobile.jump_to_section")}
            </span>

            <div className="grid grid-cols-2 gap-1 text-xs">
              <Link
                href={getLocalizedHref("/#calculator")}
                className="p-3 rounded-xl hover:bg-cream/30"
                onClick={() => {
                  trackNavigation(
                    "Mobile Calculator Jump",
                    getLocalizedHref("/#calculator"),
                  );
                  toggleMobileMenu();
                }}
              >
                {t("nav.calculator")}
              </Link>
              <Link
                href={getLocalizedHref("/#faq")}
                className="p-3 rounded-xl hover:bg-cream/30"
                onClick={() => {
                  trackNavigation("Mobile FAQ Jump", getLocalizedHref("/#faq"));
                  toggleMobileMenu();
                }}
              >
                {t("nav.faq")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
