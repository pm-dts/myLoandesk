import Image from "next/image";
import Link from "next/link";

import brandLogo from "@/assets/icon-up.jpeg";
import youTubeIcon from "@/assets/youtube.png";
import facebookIcon from "@/assets/communication.png";
import instagramIcon from "@/assets/instagram.png";
import tikTokIcon from "@/assets/tik-tok.png";
import whatsappIcon from "@/assets/whatsapp.png";
import qrImg from "@/assets/qr.avif";

export default function Footer() {
  return (
    <footer className="text-ink bg-cream pt-20 pb-10 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-10 lg:gap-8 pb-14 border-b border-ink/10">
          {/* Brand & Socials Column */}
          <div className="md:col-span-2 lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={brandLogo}
                alt="My Loan Desk Logo"
                width={220}
                height={160}
                className="w-56 h-auto object-contain"
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
                className="text-ink/75 hover:text-brand-orange underline inline-block mt-1 transition-colors break-all"
              >
                http://www.nmlsconsumeraccess.org/
              </a>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  icon: tikTokIcon,
                  label: "TikTok",
                  href: "https://www.tiktok.com/@talk2abe",
                },
                {
                  icon: youTubeIcon,
                  label: "YouTube",
                  href: "https://www.tiktok.com/@talk2abe",
                },
                {
                  icon: instagramIcon,
                  label: "Instagram",
                  href: "https://www.instagram.com/myloandesk/",
                },
                {
                  icon: facebookIcon,
                  label: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=100084628975766",
                },
                {
                  icon: whatsappIcon,
                  label: "WhatsApp",
                  href: "tel:+1-305-8916500",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-ink/15 bg-white/40 flex items-center justify-center hover:bg-brand-orange/10 hover:border-brand-orange/30 transition-all duration-200 group shrink-0"
                  aria-label={social.label}
                >
                  <Image
                    src={social.icon}
                    className="w-5 h-5 object-contain"
                    alt={social.label}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-bold mb-5">
              Links
            </div>
            <ul className="space-y-3 text-sm font-medium">
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
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
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
                { label: "Rate watch", href: "#" },
                { label: "Buyer's guide", href: "#" },
                { label: "Glossary", href: "#" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
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
                <span className="">Call: </span>

                <a
                  href="tel:+13058916500"
                  className="text-ink/70 hover:text-brand-orange transition-colors duration-200 font-mono"
                >
                  +1-305-8916500
                </a>
              </li>
              <li>
                <span className="">Email: </span>
                <a
                  href="mailto:info@myloandesk.com"
                  className="text-ink/70 hover:text-brand-orange transition-colors duration-200 break-all"
                >
                  info@myloandesk.com
                </a>
              </li>
              <li className="text-ink/50 text-xs font-normal">
                <p className="text-sm font-medium text-ink-2 mb-2">
                  Let's connect on whatsapp:
                </p>
                <Image src={qrImg} className="" alt="qr" />
              </li>
              <li className="pt-2">
                <Link
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                  target="_blank"
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
              © {new Date().getFullYear()} myloandesk LLC · NMLS #1846297 ·
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
          </div>

          {/* <div className="flex flex-wrap gap-x-6 gap-y-2 font-medium border-t border-ink/5 pt-4 w-full">
            {[
              "Privacy",
              "Terms",
              "Licensing",
              "Accessibility",
              "Disclosures",
            ].map((legal) => (
              <Link
                key={legal}
                href="#"
                className="hover:text-brand-orange transition-colors duration-200"
              >
                {legal}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
