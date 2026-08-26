"use client";

import React from "react";
import {
  Shield,
  ArrowUpRight,
  Settings,
  AlertCircle,
  HelpCircle,
  Database,
  Globe,
  Smartphone,
  Bot,
  Layers,
  MousePointerClick,
  Monitor,
  Edit3,
  MapPin,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function CookiePolicy() {
  const effectiveDate = "July 25, 2026";

  // Smooth scroll handler for the Table of Contents
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-primary-bg pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-24 flex flex-col items-center">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-6 flex items-center justify-center gap-2">
            <Shield size={14} strokeWidth={2.5} />
            Legal & Compliance
          </div>
          <h1
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-display text-ink leading-[1.05] tracking-tight mb-6",
              fraunces.className,
            )}
          >
            Cookie Policy
          </h1>
          <div className="text-lg text-ink-2 leading-relaxed space-y-4 text-center">
            <p>
              This Cookie Policy explains how MyLoanDesk ("MyLoanDesk," "we,"
              "our," or "us") uses cookies and similar technologies when you
              visit our website, landing pages, mortgage calculators, customer
              portal, and related online services.
            </p>
            <p>
              This Cookie Policy should be read together with our Privacy Policy
              and Terms & Conditions.
            </p>
            <p className="font-medium text-ink">
              By continuing to use our website, you consent to our use of
              cookies as described in this Policy, except where your consent is
              required by applicable law and you choose otherwise through our
              cookie preferences.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-moss-deep"></span>
            Effective Date: {effectiveDate}
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="lg:col-span-4 sticky top-32 hidden lg:block">
            {/* Styled Scrollbar */}
            <div className="bg-cream/50 border border-line rounded-2xl p-6 max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-moss-deep/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-moss-deep/40 transition-colors duration-300 pr-4">
              <div className="text-xs font-semibold text-ink uppercase tracking-wider mb-5">
                Contents
              </div>
              <nav className="flex flex-col gap-3 text-sm font-medium">
                <a
                  href="#section-1"
                  onClick={(e) => handleSmoothScroll(e, "section-1")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  1. What Are Cookies?
                </a>
                <a
                  href="#section-2"
                  onClick={(e) => handleSmoothScroll(e, "section-2")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  2. Why We Use Cookies
                </a>
                <a
                  href="#section-3"
                  onClick={(e) => handleSmoothScroll(e, "section-3")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  3. Types of Cookies We Use
                </a>
                <a
                  href="#section-4"
                  onClick={(e) => handleSmoothScroll(e, "section-4")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  4. Third-Party Cookies
                </a>
                <a
                  href="#section-5"
                  onClick={(e) => handleSmoothScroll(e, "section-5")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  5. Mortgage Application Cookies
                </a>
                <a
                  href="#section-6"
                  onClick={(e) => handleSmoothScroll(e, "section-6")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  6. AI and Chat Technologies
                </a>
                <a
                  href="#section-7"
                  onClick={(e) => handleSmoothScroll(e, "section-7")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  7. Cookie Consent
                </a>
                <a
                  href="#section-8"
                  onClick={(e) => handleSmoothScroll(e, "section-8")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  8. Managing Cookies
                </a>
                <a
                  href="#section-9"
                  onClick={(e) => handleSmoothScroll(e, "section-9")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  9. Do Not Track
                </a>
                <a
                  href="#section-10"
                  onClick={(e) => handleSmoothScroll(e, "section-10")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  10. International Visitors
                </a>
                <a
                  href="#section-11"
                  onClick={(e) => handleSmoothScroll(e, "section-11")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  11. Updates to This Cookie Policy
                </a>
                <a
                  href="#section-12"
                  onClick={(e) => handleSmoothScroll(e, "section-12")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  12. Contact Us
                </a>
                <a
                  href="#section-13"
                  onClick={(e) => handleSmoothScroll(e, "section-13")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  Cookie Banner Example
                </a>
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="mt-6 p-6 border border-line rounded-2xl bg-moss-deep text-primary-bg">
              <div className="text-sm font-semibold mb-2">
                Inquiries and Questions
              </div>
              <p className="text-xs text-primary-bg/70 leading-relaxed mb-4">
                If you have questions regarding this Cookie Policy, reach out to
                us directly.
              </p>
              <a
                href="mailto:info@myloandesk.com"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-brand-orange transition-colors focus-ring"
              >
                info@myloandesk.com
                <ArrowUpRight size={16} />
              </a>
            </div>
          </aside>

          {/* Right Column: Legal Prose */}
          <div className="lg:col-span-8 space-y-16">
            {/* SECTION 1 */}
            <section id="section-1" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Database size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  1. What Are Cookies?
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  Cookies are small text files that are stored on your computer,
                  smartphone, tablet, or other device when you visit a website.
                </p>
                <p>Cookies help websites:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Remember your preferences</li>
                  <li>Improve website performance</li>
                  <li>Provide a better browsing experience</li>
                  <li>Analyze website traffic</li>
                  <li>Enhance website security</li>
                  <li>Personalize content and advertisements</li>
                </ul>
                <p>
                  Cookies do not normally contain information that directly
                  identifies you. However, cookies may be linked to personal
                  information that you voluntarily provide through our website.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 2 */}
            <section id="section-2" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Settings size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  2. Why We Use Cookies
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>MyLoanDesk uses cookies to:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>Operate our website efficiently</li>
                  <li>Remember your preferences</li>
                  <li>Improve website functionality</li>
                  <li>Maintain security</li>
                  <li>Analyze visitor behavior</li>
                  <li>Improve mortgage calculators</li>
                  <li>Save partially completed forms (where available)</li>
                  <li>Prevent fraud</li>
                  <li>Measure advertising performance</li>
                  <li>Improve customer experience</li>
                </ul>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 3 */}
            <section id="section-3" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Layers size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  3. Types of Cookies We Use
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  A. Essential Cookies
                </h3>
                <p>
                  These cookies are necessary for the website to function
                  properly.
                </p>
                <p>Examples include:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Login authentication</li>
                  <li>Security verification</li>
                  <li>Fraud prevention</li>
                  <li>Form submissions</li>
                  <li>Session management</li>
                  <li>Website load balancing</li>
                </ul>
                <p>
                  Without these cookies, certain parts of our website may not
                  function correctly.
                </p>
                <p>These cookies cannot be disabled through our website.</p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  B. Functional Cookies
                </h3>
                <p>These cookies remember choices you make, including:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Preferred language</li>
                  <li>Region</li>
                  <li>Calculator settings</li>
                  <li>Saved preferences</li>
                  <li>Accessibility settings</li>
                </ul>
                <p>
                  These cookies improve your browsing experience but are not
                  strictly necessary.
                </p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  C. Analytics Cookies
                </h3>
                <p>
                  Analytics cookies help us understand how visitors use our
                  website.
                </p>
                <p>Information collected may include:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Pages viewed</li>
                  <li>Time spent on pages</li>
                  <li>Traffic sources</li>
                  <li>Device type</li>
                  <li>Browser type</li>
                  <li>Screen resolution</li>
                  <li>Navigation paths</li>
                  <li>Click activity</li>
                  <li>Website performance</li>
                </ul>
                <p>
                  We use this information to improve the website and user
                  experience.
                </p>
                <p>Analytics providers may include:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Google Analytics</li>
                  <li>Microsoft Clarity</li>
                  <li>Google Search Console</li>
                  <li>Other website analytics platforms</li>
                </ul>
                <p>
                  Analytics data is generally aggregated and does not directly
                  identify individual users.
                </p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  D. Advertising Cookies
                </h3>
                <p>
                  Advertising cookies help measure the effectiveness of
                  marketing campaigns and may be used to display advertisements
                  that are more relevant to your interests.
                </p>
                <p>These cookies may be placed by:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Google Ads</li>
                  <li>Meta (Facebook and Instagram)</li>
                  <li>LinkedIn</li>
                  <li>YouTube</li>
                  <li>Microsoft Advertising</li>
                  <li>Other advertising partners</li>
                </ul>
                <p>
                  These providers may recognize your browser across different
                  websites.
                </p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  E. Performance Cookies
                </h3>
                <p>Performance cookies help us understand:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Website speed</li>
                  <li>Loading errors</li>
                  <li>Technical issues</li>
                  <li>Browser compatibility</li>
                  <li>Device performance</li>
                </ul>
                <p>These cookies help improve reliability and performance.</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 4 */}
            <section id="section-4" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Globe size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  4. Third-Party Cookies
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  Some cookies are placed by third-party services integrated
                  with our website.
                </p>
                <p>These may include:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>Google</li>
                  <li>Microsoft</li>
                  <li>Meta</li>
                  <li>LinkedIn</li>
                  <li>YouTube</li>
                  <li>Vimeo</li>
                  <li>Calendly</li>
                  <li>GoHighLevel / LeadConnector</li>
                  <li>Twilio</li>
                  <li>Live chat providers</li>
                  <li>Mortgage calculators</li>
                  <li>Embedded maps</li>
                  <li>Video hosting providers</li>
                </ul>
                <p>
                  Each third party operates under its own privacy and cookie
                  policies. We encourage you to review those policies before
                  using their services.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 5 */}
            <section id="section-5" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Monitor size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  5. Mortgage Application Cookies
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  When you begin a mortgage inquiry or application, cookies may
                  temporarily store information necessary to:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Keep you signed in during your session</li>
                  <li>Save your progress</li>
                  <li>Maintain application security</li>
                  <li>Prevent duplicate submissions</li>
                  <li>Improve reliability</li>
                </ul>
                <p>
                  These cookies help ensure your application can be completed
                  efficiently.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 6 */}
            <section id="section-6" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Bot size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  6. AI and Chat Technologies
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  If you communicate with an Al assistant or live chat on our
                  website, cookies may be used to:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>Maintain your conversation</li>
                  <li>Remember previous messages during your session</li>
                  <li>Improve chatbot functionality</li>
                  <li>Analyze customer service performance</li>
                </ul>
                <p>
                  Chat interactions may also be stored in accordance with our
                  Privacy Policy.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 7 */}
            <section id="section-7" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <MousePointerClick size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  7. Cookie Consent
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  Depending on your location, you may be presented with a cookie
                  banner when you first visit our website. You may choose to:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Accept All Cookies</li>
                  <li>Reject Non-Essential Cookies</li>
                  <li>Customize Cookie Preferences</li>
                </ul>
                <p>
                  Your selections can generally be changed later through the
                  cookie preferences link available on our website.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 8 */}
            <section id="section-8" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Settings size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  8. Managing Cookies
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>Most web browsers allow you to:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>View cookies</li>
                  <li>Delete cookies</li>
                  <li>Block cookies</li>
                  <li>Limit third-party cookies</li>
                  <li>Receive notifications before cookies are stored</li>
                </ul>
                <p>
                  Please note that disabling certain cookies may affect website
                  functionality.
                </p>
                <p>
                  For browser-specific guidance, refer to your browser's help
                  documentation.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 9 */}
            <section id="section-9" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <AlertCircle size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  9. Do Not Track
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>Some web browsers offer a "Do Not Track" (DNT) setting.</p>
                <p>
                  Because there is no universally accepted standard for
                  responding to DNT signals, our website may not respond to all
                  such requests. You may still manage cookies through your
                  browser settings or our cookie preferences tool where
                  available.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 10 */}
            <section id="section-10" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <MapPin size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  10. International Visitors
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  Visitors located in the European Economic Area (EEA), the
                  United Kingdom, Switzerland, or other jurisdictions with
                  applicable privacy laws may have additional rights regarding
                  cookies and tracking technologies.
                </p>
                <p>
                  Where required by law, we obtain your consent before placing
                  non-essential cookies on your device.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 11 */}
            <section id="section-11" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Edit3 size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  11. Updates to This Cookie Policy
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  We may update this Cookie Policy from time to time to reflect
                  changes in technology, legal requirements, or our business
                  practices.
                </p>
                <p>
                  The revised version will be posted on this page with an
                  updated Effective Date.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 12 */}
            <section id="section-12" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <HelpCircle size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  12. Contact Us
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  If you have questions about this Cookie Policy or our use of
                  cookies, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li>
                    <strong>MyLoanDesk</strong>
                  </li>
                  <li>
                    <strong>Website:</strong> https://www.myloandesk.com
                  </li>
                  <li>
                    <strong>Email:</strong> info@myloandesk.com
                  </li>
                  <li>
                    <strong>Phone:</strong> 3058916500
                  </li>
                  <li>
                    <strong>Mailing Address:</strong> 1801 NE 123 St, Ste 314
                    North Miami, FL 33181
                  </li>
                </ul>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 13 */}
            <section id="section-13" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Lock size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  Cookie Banner Example
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  When visitors first arrive on the MyLoanDesk website, they may
                  see a notice similar to the following:
                </p>

                <div className="bg-white border border-line rounded-xl p-6 shadow-sm mt-4">
                  <h4 className="font-bold text-ink mb-2">
                    We value your privacy.
                  </h4>
                  <p className="text-sm mb-4">
                    MyLoan Desk uses cookies and similar technologies to improve
                    website performance, remember your preferences, analyze
                    traffic, and personalize your experience. You can accept all
                    cookies, reject non-essential cookies, or customize your
                    preferences at any time.
                  </p>
                  <p className="text-sm font-semibold mb-2">Buttons:</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Accept All</li>
                    <li>Reject Non-Essential</li>
                    <li>Customize Preferences</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
