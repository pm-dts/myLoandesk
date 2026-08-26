"use client";

import React from "react";
import {
  Shield,
  ArrowUpRight,
  FileText,
  Settings,
  Lock,
  AlertCircle,
  Link as LinkIcon,
  MapPin,
  Edit3,
  MessageSquare,
  Info,
  BookOpen,
  DollarSign,
  UserCheck,
  Smartphone,
  Globe,
  CheckSquare,
  AlertTriangle,
  HelpCircle,
  Scale,
  Home,
  Briefcase,
  Bot,
  Ban,
  Database,
  StopCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function TermsAndConditions() {
  const effectiveDate = "July 25, 2022";

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
              "text-4xl sm:text-5xl lg:text-6xl font-display text-ink leading-[1.05] tracking-tight mb-6 text-center",
              fraunces.className,
            )}
          >
            Terms & Conditions
          </h1>
          <div className="text-lg text-ink-2 leading-relaxed space-y-4 text-center">
            <p>
              Welcome to MyLoanDesk ("Company," "we," "our," or "us"). These
              Terms & Conditions ("Terms") govern your access to and use of our
              website, services, tools, mortgage calculators, CRM systems, Al
              assistants, lead forms, and related digital platforms
              (collectively, the "Services").
            </p>
            <p className="font-medium text-ink">
              By accessing or using our Services, you agree to be bound by these
              Terms. If you do not agree, you must discontinue use immediately.
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
            {/* Styled Scrollbar applied here */}
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
                  1. Introduction
                </a>
                <a
                  href="#section-2"
                  onClick={(e) => handleSmoothScroll(e, "section-2")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  2. Nature of Our Services
                </a>
                <a
                  href="#section-3"
                  onClick={(e) => handleSmoothScroll(e, "section-3")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  3. No Financial or Legal Advice
                </a>
                <a
                  href="#section-4"
                  onClick={(e) => handleSmoothScroll(e, "section-4")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  4. Eligibility
                </a>
                <a
                  href="#section-5"
                  onClick={(e) => handleSmoothScroll(e, "section-5")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  5. User Responsibilities
                </a>
                <a
                  href="#section-6"
                  onClick={(e) => handleSmoothScroll(e, "section-6")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  6. Lead Submission & Communication Consent
                </a>
                <a
                  href="#section-7"
                  onClick={(e) => handleSmoothScroll(e, "section-7")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  7. Third-Party Services
                </a>
                <a
                  href="#section-8"
                  onClick={(e) => handleSmoothScroll(e, "section-8")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  8. Mortgage Disclaimer
                </a>
                <a
                  href="#section-9"
                  onClick={(e) => handleSmoothScroll(e, "section-9")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  9. AI Tools
                </a>
                <a
                  href="#section-10"
                  onClick={(e) => handleSmoothScroll(e, "section-10")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  10. Intellectual Property
                </a>
                <a
                  href="#section-11"
                  onClick={(e) => handleSmoothScroll(e, "section-11")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  11. Limitation of Liability
                </a>
                <a
                  href="#section-12"
                  onClick={(e) => handleSmoothScroll(e, "section-12")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  12. No Guarantees
                </a>
                <a
                  href="#section-13"
                  onClick={(e) => handleSmoothScroll(e, "section-13")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  13. Privacy & Cookies
                </a>
                <a
                  href="#section-14"
                  onClick={(e) => handleSmoothScroll(e, "section-14")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  14. Termination
                </a>
                <a
                  href="#section-15"
                  onClick={(e) => handleSmoothScroll(e, "section-15")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  15. Changes
                </a>
                <a
                  href="#section-16"
                  onClick={(e) => handleSmoothScroll(e, "section-16")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  16. Governing Law
                </a>
                <a
                  href="#section-17"
                  onClick={(e) => handleSmoothScroll(e, "section-17")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  17. Contact
                </a>
                <a
                  href="#section-18"
                  onClick={(e) => handleSmoothScroll(e, "section-18")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  18. Equal Housing Opportunity
                </a>
                <a
                  href="#section-19"
                  onClick={(e) => handleSmoothScroll(e, "section-19")}
                  className="text-ink-2 hover:text-moss-deep transition-colors py-1"
                >
                  19. Final Agreement
                </a>
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="mt-6 p-6 border border-line rounded-2xl bg-moss-deep text-primary-bg">
              <div className="text-sm font-semibold mb-2">
                Inquiries and Questions
              </div>
              <p className="text-xs text-primary-bg/70 leading-relaxed mb-4">
                If you have questions regarding these Terms & Conditions, reach
                out to us directly.
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
                  <Info size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  1. Introduction
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>Welcome to MyLoanDesk ("Company," "we," "our," or "us").</p>
                <p>
                  These Terms & Conditions ("Terms") govern your access to and
                  use of our website, services, tools, mortgage calculators, CRM
                  systems, Al assistants, lead forms, and related digital
                  platforms (collectively, the "Services").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by
                  these Terms. If you do not agree, you must discontinue use
                  immediately.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 2 */}
            <section id="section-2" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Briefcase size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  2. Nature of Our Services
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  MyLoanDesk provides mortgage-related technology, lead
                  generation services, customer relationship management tools,
                  educational content, and communication platforms.
                </p>
                <p>
                  We are not a direct lender unless explicitly stated. We may:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>
                    Connect users with licensed mortgage professionals or
                    lenders
                  </li>
                  <li>Provide mortgage-related information and tools</li>
                  <li>
                    Facilitate communication between users and third-party
                    providers
                  </li>
                  <li>Offer Al-assisted informational responses</li>
                </ul>
                <p>
                  We do not guarantee loan approval, interest rates, or lending
                  outcomes.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 3 */}
            <section id="section-3" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <AlertTriangle size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  3. No Financial or Legal Advice
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>All content is for informational purposes only.</p>
                <p>Nothing constitutes:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Financial advice</li>
                  <li>Legal advice</li>
                  <li>Tax advice</li>
                  <li>Investment advice</li>
                  <li>Loan approval or commitment</li>
                </ul>
                <p>
                  Consult a licensed professional before making financial
                  decisions.
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 4 */}
            <section id="section-4" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <UserCheck size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  4. Eligibility
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>You confirm that:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>You are at least 18 years old</li>
                  <li>You have legal capacity</li>
                  <li>Information provided is accurate</li>
                </ul>
                <p>We may refuse service at our discretion.</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 5 */}
            <section id="section-5" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <CheckSquare size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  5. User Responsibilities
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>You agree not to:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Submit false information</li>
                  <li>Use bots or scraping tools</li>
                  <li>Hack or disrupt systems</li>
                  <li>Misuse calculators or forms</li>
                  <li>Impersonate others</li>
                  <li>Use services unlawfully</li>
                </ul>
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
                  6. Lead Submission & Communication Consent
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  By submitting your information, you consent to being contacted
                  by:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>MyLoanDesk</li>
                  <li>Partners, lenders, affiliates</li>
                </ul>
                <p>Via:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>Phone calls</li>
                  <li>SMS/MMS</li>
                  <li>Email</li>
                  <li>Automated systems</li>
                  <li>Al messaging</li>
                </ul>
                <p>Consent is not required for purchase. Opt-out anytime.</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 7 */}
            <section id="section-7" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <LinkIcon size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  7. Third-Party Services
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>We may use:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Lenders</li>
                  <li>CRM systems</li>
                  <li>Analytics tools</li>
                  <li>Al systems</li>
                  <li>Communication platforms</li>
                </ul>
                <p>We are not responsible for third-party practices.</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 8 */}
            <section id="section-8" className="scroll-mt-32">
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
                  8. Mortgage Disclaimer
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>We do not guarantee:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>Loan approval</li>
                  <li>Interest rates</li>
                  <li>Loan terms</li>
                </ul>
                <p>All estimates are informational only.</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 9 */}
            <section id="section-9" className="scroll-mt-32">
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
                  9. AI Tools
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>Al responses:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Are automated</li>
                  <li>May be inaccurate</li>
                  <li>Do not replace professional advice</li>
                </ul>
                <p>We are not liable for AI-based decisions.</p>
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
                  10. Intellectual Property
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>All content is owned by MyLoanDesk and protected by law.</p>
                <p>No copying or redistribution without permission.</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 11 */}
            <section id="section-11" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Scale size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  11. Limitation of Liability
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>We are not liable for:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-moss-deep">
                  <li>Financial loss</li>
                  <li>Loan denial</li>
                  <li>Data loss</li>
                  <li>Business interruption</li>
                </ul>
                <p>Use at your own risk.</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 12 */}
            <section id="section-12" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <AlertCircle size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  12. No Guarantees
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>Services are provided "as is."</p>
                <p>No guarantees of:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-brand-orange">
                  <li>Approval</li>
                  <li>Rates</li>
                  <li>Availability</li>
                </ul>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 13 */}
            <section id="section-13" className="scroll-mt-32">
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
                  13. Privacy & Cookies
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>Use is governed by our Privacy Policy and Cookie Policy.</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 14 */}
            <section id="section-14" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <StopCircle size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  14. Termination
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>We may suspend or terminate access at any time.</p>
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
                  15. Changes
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>We may update these Terms at any time.</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 16 */}
            <section id="section-16" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Scale size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  16. Governing Law
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>Governed by applicable jurisdiction laws.</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 17 */}
            <section id="section-17" className="scroll-mt-32">
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
                  17. Contact
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>
                  <strong>MyLoanDesk</strong>
                </p>
                <ul className="list-none space-y-2">
                  <li>https://www.myloandesk.com</li>
                  <li>info@myloandesk.com</li>
                  <li>Phone 305 891 6500</li>
                  <li>Address1801 NE 123 St #314, N. Miami, FL 33181</li>
                </ul>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 18 */}
            <section id="section-18" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Home size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  18. Equal Housing Opportunity
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>We comply with fair lending laws and do not discriminate.</p>
              </div>
            </section>

            <div className="w-full h-px bg-line"></div>

            {/* SECTION 19 */}
            <section id="section-19" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <FileText size={20} strokeWidth={2} />
                </div>
                <h2
                  className={cn(
                    "font-display text-2xl lg:text-3xl text-ink",
                    fraunces.className,
                  )}
                >
                  19. Final Agreement
                </h2>
              </div>
              <div className="prose prose-lg text-ink-2 leading-relaxed max-w-none space-y-4">
                <p>By using MyLoanDesk, you agree to these Terms.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
