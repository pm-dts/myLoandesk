"use client";

import Image from "next/image";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import brandLogo from "@/assets/new-logo.png";
import youTubeIcon from "@/assets/youtube.png";
import qrImg from "@/assets/qr.avif";

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations("Common.Footer");
  const isEs = pathname === "/es" || pathname?.startsWith("/es/");

  // Helper for internal links to preserve locale
  const getLocalizedHref = (path: string) => {
    if (
      path.startsWith("http://") ||
      path.startsWith("https://") ||
      path.startsWith("tel:") ||
      path.startsWith("mailto:")
    ) {
      return path;
    }
    if (!isEs) return path;
    if (path.startsWith("/#")) return `/es${path}`;
    return `/es${path === "/" ? "" : path}`;
  };

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

  const internalLinks = [
    { label: t("links.get_quote"), href: "/get-quote" },
    {
      label: t("links.loan_application"),
      href: "https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/pos#/?loid=c0d569d5-e33a-46d1-a6aa-fa9cab1edea5",
    },
    { label: t("links.loan_programs"), href: "/loan-programs" },
    { label: t("links.our_calendar"), href: "/calendar" },
    { label: t("links.realtors"), href: "/realtors" },
    { label: t("links.lenders"), href: "/#lenders" },
    { label: t("links.careers"), href: "/careers" },
    { label: t("links.blog"), href: "/blog" },
    { label: t("links.accessibility"), href: "/accessibility" },
    { label: t("links.privacy_policy"), href: "/privacy-policy" },
    { label: t("links.terms_conditions"), href: "/terms-conditions" },
    { label: t("links.cookies_policy"), href: "/cookies-policy" },
    {
      label: t("links.email_communication"),
      href: "/email-communication",
    },
  ];

  const resourceLinks = [
    { label: t("resources.calculator"), href: "/#calculator" },
    { label: t("resources.faq"), href: "/#faq" },
    { label: t("resources.watch_live_rates"), href: "/#live-rates-widget" },
    { label: t("resources.google_reviews"), href: "/#reviews" },
  ];

  return (
    <footer className="text-ink bg-cream pt-16 pb-12 select-none border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-10 lg:gap-8 pb-12 border-b border-ink/10">
          {/* Brand & Socials Column */}
          <div className="md:col-span-2 lg:col-span-4 space-y-4">
            <Link
              href={getLocalizedHref("/")}
              onClick={() =>
                trackFooterNavigation("Brand Logo Home", getLocalizedHref("/"))
              }
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
              {t("brand_tagline")}
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-bold mb-3">
                {t("follow_us")}
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
              {t("sections.links")}
            </div>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 sm:block sm:space-y-3 text-sm font-medium">
              {internalLinks.map((link, idx) => {
                const targetUrl = getLocalizedHref(link.href);
                const isExternal = link.href.startsWith("http");

                return (
                  <li key={idx}>
                    {isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackFooterNavigation(link.label, link.href)
                        }
                        className="text-ink/70 hover:text-brand-orange transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={targetUrl}
                        onClick={() =>
                          trackFooterNavigation(link.label, targetUrl)
                        }
                        className="text-ink/70 hover:text-brand-orange transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-bold mb-5">
              {t("sections.resources")}
            </div>
            <ul className="space-y-3 text-sm font-medium">
              {resourceLinks.map((link, idx) => {
                const targetUrl = getLocalizedHref(link.href);

                return (
                  <li key={idx}>
                    <Link
                      href={targetUrl}
                      onClick={() =>
                        trackFooterNavigation(link.label, targetUrl)
                      }
                      className="text-ink/70 hover:text-brand-orange transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Talk to us Section */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-bold mb-5">
              {t("sections.talk_to_us")}
            </div>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <span>{t("contact.call_label")}</span>
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
                <span>{t("contact.fax_label")}</span>
                <a
                  href="tel:8557947611"
                  onClick={() => trackFooterContact("Fax", "(855)794-7611")}
                  className="text-ink/70 hover:text-brand-orange transition-colors duration-200 font-mono"
                >
                  (855) 794-7611
                </a>
              </li>
              <li>
                <span>{t("contact.email_label")}</span>
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
                  {t("contact.whatsapp_label")}
                </p>
                <Image
                  src={qrImg}
                  alt="WhatsApp QR Code"
                  className="w-24 h-auto rounded-lg border border-line"
                />
              </li>
              <li className="pt-2">
                <a
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackStartApplication}
                  className="inline-block bg-brand-orange text-primary-bg px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-orange-600 shadow-sm transition-colors duration-200"
                >
                  {t("contact.start_application")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Regulatory Deck */}
        <div className="pt-8 space-y-4 text-[13px] sm:text-sm text-ink/75 leading-relaxed">
          <div className="font-medium text-ink/90 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>{t("legal.dba")}</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-[13px] font-semibold text-ink/85">
            <span>{t("legal.nmls_individual")}</span>
            <span>|</span>
            <span>{t("legal.nmls_company")}</span>
            <span>|</span>
            <a
              href="https://www.nmlsconsumeraccess.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:underline"
            >
              {t("legal.nmls_consumer_access")}
            </a>
            <span>|</span>
            <span>{t("legal.equal_housing")}</span>
          </div>

          <div className="text-xs text-ink/60 pt-1">{t("legal.copyright")}</div>

          <p className="text-sm text-ink/70 leading-normal pt-1">
            {t("legal.disclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
}
