"use client";

import Image from "next/image";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

import brandLogo from "@/assets/new-logo.png";
// import youTubeIcon from "@/assets/youtube.png";
// import facebookIcon from "@/assets/communication.png";
// import instagramIcon from "@/assets/instagram.png";
// import tikTokIcon from "@/assets/tik-tok.png";
// import whatsappIcon from "@/assets/whatsapp.png";
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
    <footer className="text-ink bg-cream pt-20 pb-10 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-10 lg:gap-8 pb-14 border-b border-ink/10">
          {/* Brand & Socials Column */}
          <div className="md:col-span-2 lg:col-span-4 space-y-3">
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
                className="w-78 h-auto object-contain"
                priority
              />
            </Link>

            <p className="text-sm leading-relaxed text-ink/65 max-w-sm">
              MyLoanDesk.com is a dba of Secured Horizon Financial Group, Inc.
              Secured Horizon Mortgage Group, Inc. NMLS 314226, 1444825.
              <br />
              <a
                href="http://www.nmlsconsumeraccess.org/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackFooterContact("NMLS Consumer Access", "http://www.nmlsconsumeraccess.org/")
                }
                className="text-ink/75 hover:text-brand-orange underline inline-block mt-1 transition-colors break-all"
              >
                http://www.nmlsconsumeraccess.org/
              </a>
            </p>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-bold mb-5">
              Links
            </div>
            {/* Display as a 2-column grid on small screens, falling back to block layout on sm+ */}
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
                  onClick={() => trackFooterContact("Phone Call", "+1-305-8916500")}
                  className="text-ink/70 hover:text-brand-orange transition-colors duration-200 font-mono"
                >
                  +1-305-8916500
                </a>
              </li>
              <li>
                <span>Fax: </span>
                <a
                  href="tel:(855)794-7611"
                  onClick={() => trackFooterContact("Fax", "(855)794-7611")}
                  className="text-ink/70 hover:text-brand-orange transition-colors duration-200 font-mono"
                >
                  (855)794-7611
                </a>
              </li>
              <li>
                <span>Email: </span>
                <a
                  href="mailto:info@myloandesk.com"
                  onClick={() => trackFooterContact("Email", "info@myloandesk.com")}
                  className="text-ink/70 hover:text-brand-orange transition-colors duration-200 break-all"
                >
                  info@myloandesk.com
                </a>
              </li>
              <li className="text-ink/50 text-xs font-normal">
                <p className="text-sm font-medium text-ink-2 mb-2">
                  Let's connect on whatsapp:
                </p>
                <Image src={qrImg} alt="qr" />
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

        {/* Bottom Legal Section */}
        <div className="pt-8 flex flex-col gap-6 justify-between items-start text-xs text-ink/50 leading-relaxed">
          <div className="w-full">
            <p className="font-medium text-ink/60">
              © {new Date().getFullYear()} MyLoanDesk LLC · NMLS #1846297 ·
              Equal Housing Lender
            </p>
            <p className="mt-4">
              Interest Rates, APR's & programs are illustrations subject to
              change at any time. These do not constitute a 'Loan or Good Faith
              Estimate' for payments and closing costs. Not all applicants will
              qualify. APR may vary by product type. Consumer is not obligated
              to use any party mentioned. MyLoanDesk.com is not affiliated with
              FHA, VA, USDA or the Federal Government. MyLoanDesk.com supports
              Equal Housing Opportunity. MyLoanDesk.com is a dba of Secured
              Horizon Financial Group, Inc. Secured Horizon Mortgage Group, Inc.
              NMLS 314226,1444825 (www.nmlsconsumeraccess.org) | (305) 891-6500
              | 1801 NE 123 St, Suite 314, North Miami, FL 33181. Regulated by
              FL Division of Real Estate.
            </p>

            {/* ADA Accessibility Statement */}
            <div className="mt-8 pt-8 border-t border-ink/10">
              <h4 className="font-bold text-ink/70 mb-3 text-sm">
                ADA Accessibility Statement
              </h4>
              <p className="mb-5">
                MyLoanDesk is committed to providing a website that is
                accessible to all its customers and compliant with the Web
                Content Accessibility Guidelines (WCAG) put forth by the World
                Wide Web Consortium (W3C). We are continually making
                improvements to meet these guidelines, and our website has been
                designed with accessibility guidelines in mind.
              </p>

              <h5 className="font-semibold text-ink/60 mb-2">
                Need help or have feedback?
              </h5>
              <p className="mb-3">
                If you have specific questions or feedback about this site's
                accessibility or need assistance using specific features, please
                contact us via email at{" "}
                <a
                  href="mailto:info@myloandesk.com"
                  onClick={() => trackFooterContact("ADA Support Email", "info@myloandesk.com")}
                  className="text-ink/75 hover:text-brand-orange underline transition-colors"
                >
                  info@myloandesk.com
                </a>
              </p>
              <p className="mb-3">
                If you have found an inaccessible area on the site, please
                assist our team by informing us of the issue via email at{" "}
                <a
                  href="mailto:info@myloandesk.com"
                  onClick={() => trackFooterContact("ADA Feedback Email", "info@myloandesk.com")}
                  className="text-ink/75 hover:text-brand-orange underline transition-colors"
                >
                  info@myloandesk.com
                </a>
              </p>
              <p>
                In the event a page cannot be made accessible, we will work with
                you to make a text version of the content available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}