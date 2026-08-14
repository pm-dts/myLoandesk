"use client";

import Image from "next/image";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

import brandLogo from "@/assets/new-logo.png";
import youTubeIcon from "@/assets/youtube.png";
import qrImg from "@/assets/qr.avif";

export default function Footer() {
  const pathname = usePathname();

  // Tracking Handlers
  const trackFooterNavigation = (linkName: string, destination: string) => {
    sendGTMEvent({
      event: "footer_link_clicked",
      category: "navigation",
      label: `Footer Link - ${linkName}`,
      destination_url: destination,
      page_path: pathname || "/",
    });
  };

  const trackFooterContact = (contactType: string, detail: string) => {
    sendGTMEvent({
      event: "footer_contact_clicked",
      category: "contact",
      label: `Footer Contact - ${contactType}`,
      contact_detail: detail,
      page_path: pathname || "/",
    });
  };

  const trackStartApplication = () => {
    sendGTMEvent({
      event: "start_application_clicked",
      category: "engagement",
      label: "Footer Start Application Button",
      page_path: pathname || "/",
    });
  };

  return (
    <footer className="text-ink bg-cream pt-16 pb-12 select-none border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-10 lg:gap-8 pb-12 border-b border-ink/10">
          {/* Brand & Socials Column */}
          <div className="md:col-span-2 lg:col-span-4 space-y-4">
            <Link
              href="/"
              onClick={() => trackFooterNavigation("Brand Logo Home", "/")}
              className="inline-block"
            >
              <Image
                src={brandLogo}
                alt="My Loan Desk Logo"
                width={220}
                height={160}
                className="w-72 h-auto object-contain"
                priority
              />
            </Link>

            <p className="text-sm leading-relaxed text-ink/75 max-w-sm">
              Your trusted mortgage partner for conventional, government, and
              innovative investor loan programs nationwide.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-bold mb-3">
                Follow Us
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://youtube.com/@MyLoanDeskMortgage"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackFooterContact(
                      "YouTube",
                      "https://youtube.com/@MyLoanDeskMortgage",
                    )
                  }
                  aria-label="YouTube Channel"
                  className="w-10 h-10 rounded-full bg-ink/5 hover:bg-brand-orange/10 flex items-center justify-center transition-all duration-200 p-2"
                >
                  <Image
                    src={youTubeIcon}
                    alt="YouTube"
                    width={24}
                    height={24}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-bold mb-5">
              Links
            </div>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 sm:block sm:space-y-3 text-sm font-medium">
              {[
                { label: "Get a quote", href: "/get-quote" },
                {
                  label: "Loan Application",
                  href: "https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/pos#/?loid=c0d569d5-e33a-46d1-a6aa-fa9cab1edea5",
                },
                { label: "Loan Programs", href: "/loan-programs" },
                { label: "Our Calendar", href: "/calendar" },
                { label: "Realtors", href: "/realtors" },
                { label: "Lenders", href: "/#lenders" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
                { label: "Accessibility", href: "/accessibility" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-conditions" },
                { label: "Cookies Policy", href: "/cookies-policy" },
                {
                  label: "Email & Communication Policy",
                  href: "/email-communication",
                },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    onClick={() => trackFooterNavigation(link.label, link.href)}
                    className="text-ink/70 hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-bold mb-5">
              Resources
            </div>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { label: "Calculator", href: "/#calculator" },
                { label: "FAQ", href: "/#faq" },
                { label: "Watch Live Rates", href: "/#live-rates-widget" },
                { label: "Google Reviews", href: "/#reviews" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    onClick={() => trackFooterNavigation(link.label, link.href)}
                    className="text-ink/70 hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Talk to us Section */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-bold mb-5">
              Talk to us
            </div>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <span>Call: </span>
                <a
                  href="tel:+13058916500"
                  onClick={() =>
                    trackFooterContact("Phone Call", "+1-305-8916500")
                  }
                  className="text-ink/70 hover:text-brand-orange transition-colors duration-200 font-mono"
                >
                  +1-305-8916500
                </a>
              </li>
              <li>
                <span>Fax: </span>
                <a
                  href="tel:8557947611"
                  onClick={() => trackFooterContact("Fax", "(855)794-7611")}
                  className="text-ink/70 hover:text-brand-orange transition-colors duration-200 font-mono"
                >
                  (855) 794-7611
                </a>
              </li>
              <li>
                <span>Email: </span>
                <a
                  href="mailto:info@myloandesk.com"
                  onClick={() =>
                    trackFooterContact("Email", "info@myloandesk.com")
                  }
                  className="text-ink/70 hover:text-brand-orange transition-colors duration-200 break-all"
                >
                  info@myloandesk.com
                </a>
              </li>
              <li className="text-ink/50 text-xs font-normal pt-1">
                <p className="text-xs font-semibold text-ink-2 mb-2">
                  Let's connect on WhatsApp:
                </p>
                <Image
                  src={qrImg}
                  alt="WhatsApp QR Code"
                  className="w-24 h-auto rounded-lg border border-line"
                />
              </li>
              <li className="pt-2">
                <Link
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
                  onClick={trackStartApplication}
                  className="inline-block bg-brand-orange text-primary-bg px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-orange-600 shadow-sm transition-colors duration-200"
                >
                  Start application
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Regulatory Deck */}
        <div className="pt-8 space-y-4 text-[13px] sm:text-sm text-ink/75 leading-relaxed">
          {/* Licensing & DBA Line */}
          <div className="font-medium text-ink/90 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>
              MyLoanDesk.com is a DBA of Secured Horizon Financial Group, Inc. /
              Secured Horizon Mortgage Group, Inc.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-[13px] font-semibold text-ink/85">
            <span>NMLS #341393 (Individual)</span>
            <span>|</span>
            <span>NMLS #314226, #1444825 (Company)</span>
            <span>|</span>
            <a
              href="https://www.nmlsconsumeraccess.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:underline"
            >
              NMLS Consumer Access
            </a>
            <span>|</span>
            <span>Equal Housing Opportunity</span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-ink/60 pt-1">
            © 2026 MyLoanDesk. All rights reserved.
          </div>

          {/* Regulatory / Disclaimer Paragraph */}
          <p className="text-sm text-ink/70 leading-normal pt-1">
            Interest Rates, APRs, and loan programs are illustrations subject to
            change at any time without notice. These do not constitute a Loan
            Estimate or Good Faith Estimate for payments and closing costs. Not
            all applicants will qualify. APR may vary by product type. Consumers
            are not obligated to use any party mentioned. MyLoanDesk.com is not
            affiliated with FHA, VA, USDA, or the Federal Government. 1801 NE
            123rd St, Suite 314, North Miami, FL 33181 | (305) 891-6500.
            Regulated by the FL Division of Real Estate.
          </p>
        </div>
      </div>
    </footer>
  );
}
