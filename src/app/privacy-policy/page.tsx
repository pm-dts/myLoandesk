"use client";

import React from "react";
import {
  Shield,
  ArrowUpRight,
  Database,
  Users,
  Smartphone,
  Bot,
  Clock,
  Globe,
  HelpCircle,
  FileText,
  Settings,
  Lock,
  AlertCircle,
  Link as LinkIcon,
  MapPin,
  Edit3,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function PrivacyPolicy() {
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
        {/* Header Section - Now Centered */}
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
            Privacy Policy
          </h1>
          <div className="text-lg text-ink-2 leading-relaxed space-y-4 text-center">
            <p>
              MyLoanDesk ("MyLoanDesk," "we," "our," or "us") values your
              privacy and is committed to protecting the personal information
              you share with us. This Privacy Policy explains how we collect,
              use, disclose, store, and protect your information when you visit
              our website, communicate with us, request information, apply for
              financing, or use any of our online services.
            </p>
            <p>
              This Privacy Policy applies to all websites, landing pages,
              applications, forms, calculators, customer portals, and electronic
              communications operated by MyLoanDesk and Secured Horizon
              Financial Group.
            </p>
            <p className="font-medium text-ink">
              By accessing or using our website, you acknowledge that you have
              read and understood this Privacy Policy.
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
            {/* Added custom scrollbar styling using Tailwind arbitrary variants */}
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
                  1. Information We Collect
                </a>
                <a
                  href="#section-2"
                  onClick={(e) => handleSmoothScroll(e, "section-2")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  2. How We Use Your Information
                </a>
                <a
                  href="#section-3"
                  onClick={(e) => handleSmoothScroll(e, "section-3")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  3. Information We Share
                </a>
                <a
                  href="#section-4"
                  onClick={(e) => handleSmoothScroll(e, "section-4")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  4. Credit Authorization
                </a>
                <a
                  href="#section-5"
                  onClick={(e) => handleSmoothScroll(e, "section-5")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  5. Cookies and Tracking Technologies
                </a>
                <a
                  href="#section-6"
                  onClick={(e) => handleSmoothScroll(e, "section-6")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  6. SMS Communications
                </a>
                <a
                  href="#section-7"
                  onClick={(e) => handleSmoothScroll(e, "section-7")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  7. AI-Assisted Communications
                </a>
                <a
                  href="#section-8"
                  onClick={(e) => handleSmoothScroll(e, "section-8")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  8. Data Security
                </a>
                <a
                  href="#section-9"
                  onClick={(e) => handleSmoothScroll(e, "section-9")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  9. Data Retention
                </a>
                <a
                  href="#section-10"
                  onClick={(e) => handleSmoothScroll(e, "section-10")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  10. Your Privacy Rights
                </a>
                <a
                  href="#section-11"
                  onClick={(e) => handleSmoothScroll(e, "section-11")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  11. California Privacy Rights
                </a>
                <a
                  href="#section-12"
                  onClick={(e) => handleSmoothScroll(e, "section-12")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  12. European Privacy Rights (GDPR)
                </a>
                <a
                  href="#section-13"
                  onClick={(e) => handleSmoothScroll(e, "section-13")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  13. Children's Privacy
                </a>
                <a
                  href="#section-14"
                  onClick={(e) => handleSmoothScroll(e, "section-14")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  14. Third-Party Websites
                </a>
                <a
                  href="#section-15"
                  onClick={(e) => handleSmoothScroll(e, "section-15")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  15. Changes to This Privacy Policy
                </a>
                <a
                  href="#section-16"
                  onClick={(e) => handleSmoothScroll(e, "section-16")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  16. Contact Us
                </a>
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="mt-6 p-6 border border-line rounded-2xl bg-moss-deep text-primary-bg">
              <div className="text-sm font-semibold mb-2">
                Inquiries and Complaints
              </div>
              <p className="text-xs text-primary-bg/70 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to
                exercise applicable privacy rights, please contact us.
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
                  1. Information We Collect
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  Depending on the services you request, we may collect the
                  following categories of information:
                </p>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  Personal Information
                </h3>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Full name</li>
                  <li>Mailing address</li>
                  <li>Email address</li>
                  <li>Telephone number</li>
                  <li>Date of birth</li>
                  <li>Government-issued identification</li>
                  <li>
                    Social Security Number or Tax Identification Number (when
                    required)
                  </li>
                  <li>Employment information</li>
                  <li>Employer name</li>
                  <li>Occupation</li>
                </ul>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  Financial Information
                </h3>
                <p>
                  When you inquire about or apply for financing, we may collect:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Income</li>
                  <li>Assets</li>
                  <li>Bank account information</li>
                  <li>Existing debts</li>
                  <li>Credit obligations</li>
                  <li>Property ownership information</li>
                  <li>Mortgage balances</li>
                  <li>Down payment information</li>
                  <li>Financial documentation you voluntarily provide</li>
                </ul>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  Property Information
                </h3>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Property address</li>
                  <li>Property type</li>
                  <li>Estimated property value</li>
                  <li>Occupancy status</li>
                  <li>Purchase price</li>
                  <li>Loan amount requested</li>
                </ul>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  Technical Information
                </h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device type</li>
                  <li>Operating system</li>
                  <li>Language settings</li>
                  <li>Time zone</li>
                  <li>Website usage information</li>
                  <li>Pages visited</li>
                  <li>Referral source</li>
                  <li>Session information</li>
                </ul>

                <h3 className="text-xl font-display text-ink mt-8 mb-3">
                  Communication Information
                </h3>
                <p>We maintain records of communications including:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Emails</li>
                  <li>Phone calls (where permitted by law)</li>
                  <li>Text messages</li>
                  <li>Chat conversations</li>
                  <li>AI assistant conversations</li>
                  <li>Contact forms</li>
                  <li>Appointment scheduling</li>
                </ul>
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
                  2. How We Use Your Information
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>We use your information to:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>Respond to inquiries</li>
                  <li>Evaluate financing opportunities</li>
                  <li>Process mortgage applications</li>
                  <li>Match borrowers with appropriate lending programs</li>
                  <li>Verify identity</li>
                  <li>Prevent fraud</li>
                  <li>Perform underwriting activities</li>
                  <li>Obtain credit reports (when authorized)</li>
                  <li>Order appraisals</li>
                  <li>Coordinate with title companies</li>
                  <li>Communicate loan status</li>
                  <li>Improve customer service</li>
                  <li>Improve our website</li>
                  <li>Analyze website performance</li>
                  <li>Meet legal and regulatory requirements</li>
                  <li>Protect against fraud and cybersecurity threats</li>
                </ul>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 3 */}
            <section id="section-3" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Users size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  3. Information We Share
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>We do not sell your personal information.</p>
                <p>
                  We may share your information with trusted service providers
                  as necessary to process your request, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Wholesale lenders</li>
                  <li>Investors</li>
                  <li>Mortgage brokers</li>
                  <li>Loan processing companies</li>
                  <li>Underwriters</li>
                  <li>Title companies</li>
                  <li>Settlement agents</li>
                  <li>Appraisal management companies</li>
                  <li>Credit reporting agencies</li>
                  <li>Flood certification providers</li>
                  <li>Fraud prevention providers</li>
                  <li>Identity verification providers</li>
                  <li>CRM providers</li>
                  <li>Document management providers</li>
                  <li>Electronic signature providers</li>
                  <li>Payment processors</li>
                  <li>Cloud hosting providers</li>
                  <li>Legal counsel</li>
                  <li>Government agencies when required by law</li>
                </ul>
                <p>
                  Each recipient is expected to protect your information
                  consistent with applicable laws.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 4 */}
            <section id="section-4" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <FileText size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  4. Credit Authorization
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  When you request mortgage financing, you may authorize us to
                  obtain information necessary to evaluate your request,
                  including:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>Consumer credit reports</li>
                  <li>Employment verification</li>
                  <li>Income verification</li>
                  <li>Asset verification</li>
                  <li>Public records</li>
                  <li>Fraud prevention reports</li>
                </ul>
                <p>
                  Additional written authorization may be required before
                  obtaining certain reports.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 5 */}
            <section id="section-5" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Globe size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  5. Cookies and Tracking Technologies
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>Our website uses cookies and similar technologies to:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Remember preferences</li>
                  <li>Improve website functionality</li>
                  <li>Analyze website traffic</li>
                  <li>Measure advertising effectiveness</li>
                  <li>Detect fraud</li>
                  <li>Improve user experience</li>
                </ul>
                <p>We may use services including:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Google Analytics</li>
                  <li>Google Tag Manager</li>
                  <li>Google Ads</li>
                  <li>Microsoft Clarity</li>
                  <li>Meta Pixel</li>
                  <li>LinkedIn Insight Tag</li>
                  <li>CRM tracking technologies</li>
                  <li>Marketing automation platforms</li>
                </ul>
                <p>
                  Visitors may adjust cookie preferences through their browser
                  settings or our Cookie Preferences tool where available[cite:
                  3].
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 6 */}
            <section id="section-6" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Smartphone size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  6. SMS Communications
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  If you provide consent, we may send text messages regarding:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>Appointment reminders</li>
                  <li>Loan updates</li>
                  <li>Requested documentation</li>
                  <li>Customer support</li>
                  <li>Follow-up communications</li>
                </ul>
                <p>
                  Message frequency varies. Message and data rates may apply.
                </p>
                <p>Reply STOP to unsubscribe. Reply HELP for assistance.</p>
                <p>
                  Consent to receive text messages is not a condition of
                  obtaining financing.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 7 */}
            <section id="section-7" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Bot size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  7. AI-Assisted Communications
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  MyLoanDesk may use artificial intelligence technologies to:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Answer general questions</li>
                  <li>Schedule appointments</li>
                  <li>Route inquiries</li>
                  <li>Assist with document collection</li>
                  <li>Improve customer service</li>
                </ul>
                <p>
                  AI-generated responses are informational only and do not
                  constitute underwriting decisions, legal advice, financial
                  advice, or loan approval.
                </p>
                <p>
                  Whenever appropriate, a licensed mortgage professional will
                  review your request.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 8 */}
            <section id="section-8" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Lock size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  8. Data Security
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  We maintain administrative, technical, and physical safeguards
                  designed to protect your information, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>
                    Encryption of sensitive data in transit where supported
                  </li>
                  <li>Access controls</li>
                  <li>
                    Multi-factor authentication for administrative systems[cite:
                    3]
                  </li>
                  <li>Security monitoring</li>
                  <li>Regular software updates</li>
                  <li>Employee training</li>
                  <li>Vendor security assessments where appropriate</li>
                </ul>
                <p>
                  While we use commercially reasonable safeguards, no method of
                  transmission over the Internet or electronic storage is
                  completely secure.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 9 */}
            <section id="section-9" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Clock size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  9. Data Retention
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>We retain information only as long as necessary to:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Provide requested services</li>
                  <li>Complete mortgage transactions</li>
                  <li>Meet legal and regulatory obligations</li>
                  <li>Resolve disputes</li>
                  <li>Enforce agreements</li>
                  <li>Maintain business records</li>
                </ul>
                <p>
                  Retention periods may vary depending on applicable federal and
                  state laws.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 10 */}
            <section id="section-10" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Shield size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  10. Your Privacy Rights
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  Depending on where you live, you may have the right to:[cite:
                  3]
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of certain information</li>
                  <li>Obtain a copy of your information</li>
                  <li>Object to certain processing activities</li>
                  <li>
                    Withdraw consent where processing is based on consent[cite:
                    3]
                  </li>
                </ul>
                <p>
                  Some rights are subject to legal exceptions, including
                  record-retention obligations applicable to mortgage
                  transactions.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 11 */}
            <section id="section-11" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <MapPin size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  11. California Privacy Rights
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  Residents of California may have additional rights under the
                  California Consumer Privacy Act (CCPA), as amended by the
                  California Privacy Rights Act (CPRA), including the right to
                  know, access, correct, delete, and limit the use of certain
                  personal information, subject to applicable exceptions[cite:
                  3].
                </p>
                <p>
                  Requests may be submitted using the contact information below.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 12 */}
            <section id="section-12" className="scroll-mt-32">
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
                  12. European Privacy Rights (GDPR)
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  Visitors located in the European Economic Area, the United
                  Kingdom, or Switzerland may have additional rights under
                  applicable data protection laws, including the General Data
                  Protection Regulation (GDPR).
                </p>
                <p>
                  Where applicable, we process personal information based on one
                  or more lawful bases, including consent, contractual
                  necessity, compliance with legal obligations, or our
                  legitimate interests.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 13 */}
            <section id="section-13" className="scroll-mt-32">
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
                  13. Children's Privacy
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  Our services are intended for adults seeking financial
                  services and are not directed to children under the age of 18.
                </p>
                <p>
                  We do not knowingly collect personal information from
                  children.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 14 */}
            <section id="section-14" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <LinkIcon size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  14. Third-Party Websites
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  Our website may contain links to third-party websites[cite:
                  3]. We are not responsible for the privacy practices, content,
                  or security of those websites. We encourage you to review
                  their privacy policies before providing personal information.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 15 */}
            <section id="section-15" className="scroll-mt-32">
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
                  15. Changes to This Privacy Policy
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, technology, legal requirements, or
                  business operations.
                </p>
                <p>
                  The updated version will be posted on this page with a revised
                  Effective Date.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 16 */}
            <section id="section-16" className="scroll-mt-32">
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
                  16. Contact Us
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  If you have questions about this Privacy Policy or wish to
                  exercise applicable privacy rights, please contact us:[cite:
                  3]
                </p>
                <p>
                  <strong>MyLoanDesk</strong>
                </p>
                <ul className="list-none space-y-2">
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
                <p className="mt-6 font-medium text-ink">
                  By using the MyLoanDesk website or submitting information to
                  us, you acknowledge that you have read and understood this
                  Privacy Policy.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
