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
  HelpCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

import brandLogo from "@/assets/new-logo.png";

const loanLinks = [
  { name: "Conventional Loans", href: "/loan-programs#conventional" },
  { name: "FHA Loans", href: "/loan-programs#fha" },
  { name: "Jumbo Loans", href: "/loan-programs#portfolio" },
  { name: "Bank Statement Loans", href: "/loan-programs#bank-statement" },
  { name: "VA Loans", href: "/loan-programs#va" },
  { name: "Hybrid Loans", href: "/loan-programs#hybrid" },
  { name: "Private Bridge Loans", href: "/loan-programs#bridge" },
  { name: "Bridge to Sale", href: "/loan-programs#bridge-to-sale" },
  {
    name: "International Buyers Section",
    href: "/loan-programs#international-buyer",
  },
  { name: "2/1 Buydown Mortgage", href: "/loan-programs#buydown-2-1" },
  { name: "ITIN Home Loans", href: "/loan-programs#ITIN-home" },
  { name: "FHA 203(k) Rehab Loans", href: "/loan-programs#fha-203k" },
  { name: "Refinance Options", href: "/loan-programs#refinance" },
  { name: "FHA Streamline Refinance", href: "/loan-programs#streamline" },
  { name: "HELOC / Equity Lines", href: "/loan-programs#heloc" },
  { name: "DSCR Investment Property Loans", href: "/loan-programs#DSCR" },
  { name: "Fix & Flip Loans", href: "/loan-programs#fix-flip" },
  { name: "Construction Loans", href: "/loan-programs#ground-up" },
  // { name: "Bridge Loans", href: "/loan-programs#bridge-loans" },
  { name: "Reverse Mortgage", href: "/loan-programs#reverse-mortgage" },
  {
    name: "Commercial Real Estate Loans",
    href: "/loan-programs#commercial-real-estate",
  },
  { name: "Equipment Financing", href: "/loan-programs#equipment" },
  { name: "Business Lines of Credit", href: "/loan-programs#business-lines" },
  { name: "Working Capital", href: "/loan-programs#working-capital" },
  { name: "Franchise Financing", href: "/loan-programs#franchise" },
  { name: "Commercial Loans", href: "/loan-programs#commercial" },
  { name: "SBA Business Loans", href: "/loan-programs#sba-business" },
  { name: "Property Financing in Portugal", href: "/loan-programs#portugal" },
  { name: "Dream Home Builder (EEP)", href: "/loan-programs#eep" },
  { name: "Medical Professional Loans", href: "/loan-programs#doctor" },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileLoanOpen, setIsMobileLoanOpen] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Trigger the neon flash effect shortly after the component mounts
    const startFlash = setTimeout(() => setIsFlashing(true), 500);
    // Remove the class after the animation completes so it resets cleanly
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
    }, 200); // 200ms delay to make it easier to move the mouse
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

  const trackAskAIBroker = () => {
    sendGTMEvent({
      event: "ask_ai_broker_clicked",
      category: "engagement",
      label: "Header ChatGPT AI Broker",
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
      {/* Inline styles for the custom neon flash animation */}
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
      <nav className="hidden lg:flex max-w-[1600px] mx-auto pl-1 pr-5 h-36 items-center justify-between gap-3">
        {/* Desktop Logo Layout */}
        <Link href="/" className="shrink-0 flex items-center py-2">
          <Image
            src={brandLogo}
            alt="My Loan Desk Logo"
            width={270}
            height={100}
            className={`w-auto h-46 object-contain transition-all duration-300 hover-neon-flash ${isFlashing ? "neon-flash-active" : ""}`}
            priority
          />
        </Link>

        {/* Center Links */}
        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[13px] font-medium text-ink-2 whitespace-nowrap relative">
          <div
            className="relative group py-2" // Added padding to increase hover target area
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <Link
              href="/loan-programs"
              onClick={() => trackNavigation("Loan types", "/loan-programs")}
              className="ulink focus-ring flex items-center text-[14px] font-semibold gap-1 cursor-pointer"
            >
              Loan types
              <ChevronDown
                size={13}
                className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </Link>

            {/* Added a transparent bridge area to keep hover active between the link and the dropdown */}
            <div
              className={`absolute left-0 top-full h-4 w-full ${isDropdownOpen ? "block" : "hidden"}`}
            ></div>

            <div
              className={`absolute left-0 top-[calc(100%+8px)] w-[560px] bg-primary-bg border border-line rounded-2xl shadow-xl p-5 grid grid-cols-2 gap-x-4 gap-y-1.5 transition-all duration-200 origin-top z-[60] ${
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
                  onClick={() => {
                    trackNavigation(`Loan Program - ${link.name}`, link.href);
                    setIsDropdownOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/secure-document-upload"
            onClick={() =>
              trackNavigation("Secure Doc Upload", "/secure-document-upload")
            }
            className="ulink focus-ring text-[14px] font-semibold"
          >
            Secure Doc Upload
          </Link>
          <Link
            href="/about-us"
            onClick={() => trackNavigation("About us", "/about-us")}
            className="ulink focus-ring text-[14px] font-semibold"
          >
            About us
          </Link>
          <Link
            href="/realtors"
            onClick={() => trackNavigation("Realtors", "/realtors")}
            className="ulink focus-ring text-[14px] font-semibold"
          >
            Realtors
          </Link>
          <Link
            href="/careers"
            onClick={() => trackNavigation("Careers", "/careers")}
            className="ulink focus-ring text-[14px] font-semibold"
          >
            Careers
          </Link>
          <Link
            href="/calendar"
            onClick={() => trackNavigation("Our Calendar", "/calendar")}
            className="ulink focus-ring text-[14px] font-semibold"
          >
            Our Calendar
          </Link>
          <Link
            href="/#calculator"
            onClick={() => trackNavigation("Calculator", "/#calculator")}
            className="ulink focus-ring text-[14px] font-semibold"
          >
            Mortgage Calculator
          </Link>
          <Link
            href="/#faq"
            onClick={() => trackNavigation("FAQ", "/#faq")}
            className="ulink focus-ring text-[14px] font-semibold"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            onClick={() => trackNavigation("Blog", "/blog")}
            className="ulink focus-ring text-[14px] font-semibold"
          >
            Blog
          </Link>
        </div>

        {/* --- Action Button Deck --- */}
        <div className="flex items-center gap-6 shrink-0">
          {/* Phone and Quote Column */}
          <div className="flex flex-col items-center gap-2">
            <a
              href="tel:3058916500"
              onClick={() => trackPhoneClick("Desktop Header Phone Link")}
              className="text-brand-orange font-bold text-sm underline underline-offset-2 hover:text-orange-600 transition-colors"
            >
              Call/Text (305) 891-6500
            </a>
            <Link
              href="/get-quote"
              onClick={() => trackQuoteClick("Desktop Header")}
              className="btn-shine bg-brand-orange text-white px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-1.5 uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-sm"
            >
              Get A Quote <PlayCircle size={16} />
            </Link>
          </div>

          {/* Stacked Buttons Column */}
          <div className="flex flex-col gap-1.5 w-[140px]">
            <a
              href="https://wa.me/13058916500"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="border border-[#25D366] text-[#25D366] bg-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider flex items-center justify-between hover:bg-[#25D366]/10 transition-colors"
            >
              Whats App <MessageCircle size={14} />
            </a>

            <a
              href="tel:3058916500"
              onClick={() => trackPhoneClick("Desktop Header Call/Text Button")}
              className="border border-gray-300 text-brand-orange bg-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              Call or Text <Phone size={14} />
            </a>

            <Link
              href="https://chatgpt.com/g/g-6989ac7406b08191ba66dc0aa143e1d6-ask-a-mortgage-broker-myloandesk"
              target="_blank"
              onClick={trackAskAIBroker}
              className="border border-brand-orange bg-brand-orange text-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider flex items-center justify-between hover:bg-orange-600 transition-colors shadow-sm"
            >
              Ask AI Broker <HelpCircle size={14} />
            </Link>
          </div>
        </div>
      </nav>

      {/* --- MOBILE NAVIGATION --- */}
      <div className="lg:hidden flex flex-col w-full bg-primary-bg">
        {/* Row 1: Top branding bar */}
        <div className="relative h-24 px-4 flex items-center justify-center border-b border-line/30">
          {/* Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="absolute left-4 w-11 h-11 flex items-center justify-center rounded-full border border-line text-ink-2 bg-cream/40 focus-ring"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Centered Bigger Logo */}
          <Link href="/" className="shrink-0 flex items-center justify-center ">
            <Image
              src={brandLogo}
              alt="My Loan Desk Logo"
              width={220}
              height={80}
              className={`w-auto h-34 object-contain transition-all duration-300 hover-neon-flash ${isFlashing ? "neon-flash-active" : ""}`}
              priority
            />
          </Link>
        </div>

        {/* Row 2: Secondary Action Button Line */}
        <div className="px-4 pb-2 flex flex-col gap-2 border-b border-line/50 bg-cream/10">
          <a
            href="tel:3058916500"
            onClick={() => trackPhoneClick("Mobile Subheader Phone Link")}
            className="text-brand-orange text-center font-bold underline underline-offset-2 hover:text-orange-600 transition-colors"
          >
            Call/Text (305) 891-6500
          </a>
          <Link
            href="/get-quote"
            onClick={() => trackQuoteClick("Mobile Subheader")}
            className="btn-shine w-full bg-brand-orange text-primary-bg py-1.5 rounded-full text-md font-semibold tracking-wide flex items-center justify-center transition-colors focus-ring"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-line bg-primary-bg absolute top-full left-0 w-full shadow-2xl max-h-[calc(100vh-11rem)] overflow-y-auto z-50">
          <div className="px-5 py-5 flex flex-col gap-1.5 text-base font-medium text-ink">
            <Link
              href="/about-us"
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={() => {
                trackNavigation("Mobile About Us", "/about-us");
                toggleMobileMenu();
              }}
            >
              About us
            </Link>
            <Link
              href="/secure-document-upload"
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={() => {
                trackNavigation(
                  "Mobile Secure Doc Upload",
                  "/secure-document-upload",
                );
                toggleMobileMenu();
              }}
            >
              Secure Doc Upload
            </Link>

            <Link
              href="/realtors"
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={() => {
                trackNavigation("Mobile Realtors", "/realtors");
                toggleMobileMenu();
              }}
            >
              Realtors
            </Link>

            <Link
              href="/careers"
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={() => {
                trackNavigation("Mobile Careers", "/careers");
                toggleMobileMenu();
              }}
            >
              Careers
            </Link>

            <Link
              href="/get-quote"
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={() => {
                trackQuoteClick("Mobile Menu Drawer");
                toggleMobileMenu();
              }}
            >
              Get A Quote
            </Link>

            <Link
              href="/blog"
              className="p-3 rounded-xl hover:bg-cream/30 text-sm"
              onClick={() => {
                trackNavigation("Mobile Blog", "/blog");
                toggleMobileMenu();
              }}
            >
              Blog
            </Link>

            <Link
              href="/calendar"
              className="p-3 rounded-xl hover:bg-cream/30 text-sm flex items-center gap-2 text-brand-orange"
              onClick={() => {
                trackNavigation("Mobile Calendar", "/calendar");
                toggleMobileMenu();
              }}
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
                      onClick={() => {
                        trackNavigation(
                          `Mobile Loan Program - ${link.name}`,
                          link.href,
                        );
                        toggleMobileMenu();
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    href="/loan-programs"
                    className="text-xs text-brand-orange font-semibold p-2 border-t border-line/40 mt-1 flex items-center gap-1"
                    onClick={() => {
                      trackNavigation(
                        "Mobile View All Program Classifications",
                        "/loan-programs",
                      );
                      toggleMobileMenu();
                    }}
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
                href="/#calculator"
                className="p-3 rounded-xl hover:bg-cream/30"
                onClick={() => {
                  trackNavigation("Mobile Calculator Jump", "/#calculator");
                  toggleMobileMenu();
                }}
              >
                Mortgage Calculator
              </Link>
              <Link
                href="/#faq"
                className="p-3 rounded-xl hover:bg-cream/30"
                onClick={() => {
                  trackNavigation("Mobile FAQ Jump", "/#faq");
                  toggleMobileMenu();
                }}
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
