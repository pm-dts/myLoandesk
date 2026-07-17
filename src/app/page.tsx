import { ArrowRight, Star } from "lucide-react";
import { Home, Shield, Building, RefreshCw, Briefcase } from "lucide-react";
import { Clock, FileText, Phone, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

import Calculator from "@/components/site/Home/Calculator";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import LenderMarquee from "@/components/site/Home/LenderMarquee";
import CurrentRates from "@/components/site/Home/InterestRates";
import Contact from "@/components/site/Home/Contact";

import { Fraunces } from "next/font/google";
import Faq from "@/components/site/Home/FAQ";
import StartApplication from "@/components/site/Home/ApplicationForm";
import CalculatorSection from "@/components/site/Home/CalculatorSection";

import homeLoansImg from "@/assets/home-loans.jpeg";
import realEstateLoansImg from "@/assets/real-estate-loans.jpeg";
import commercialLoansImg from "@/assets/commercial-loans.jpeg";
import businessLoansImg from "@/assets/business-loans.jpeg";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Hero() {
  return (
    <main className="min-h-screen bg-primary-bg pt-16 pb-16 lg:pt-16 lg:pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="max-w-xl">
            <div className="flex gap-2">
              <Link href={"/loan-programs#home-equity"} className="">
                <Image
                  src={homeLoansImg}
                  className="w-18 sm:w-25 aspect-auto"
                  alt="home loans"
                />
              </Link>
              <Link href={"/loan-programs#bridge"} className="">
                <Image
                  src={realEstateLoansImg}
                  className="w-18 sm:w-25 aspect-auto"
                  alt="home loans"
                />
              </Link>
              <Link href={"/loan-programs#commercial"} className="">
                <Image
                  src={commercialLoansImg}
                  className="w-18 sm:w-25 aspect-auto"
                  alt="home loans"
                />
              </Link>
              <Link href={"/loan-programs#business-lines"} className="">
                <Image
                  src={businessLoansImg}
                  className="w-18 sm:w-25 aspect-auto"
                  alt="home loans"
                />
              </Link>
            </div>

            {/* Headline */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl ${fraunces.className} text-ink leading-[1.1] tracking-tight mt-2 mb-6`}
            >
              Your mortgage gets a{" "}
              <em className="text-moss-deep italic font-serif">desk</em> of its
              own.
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-ink-2 leading-relaxed mb-10">
              We compare offers from 20+ lenders, negotiate your rate, and own
              the paperwork — so the path to your front door feels less like a
              maze, more like a meeting.
            </p>

            {/* Actions & Social Proof Container */}
            <div className="flex flex-col gap-8">
              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#application"
                  className="btn-shine bg-brand-orange text-primary-bg px-7 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors focus-ring"
                >
                  Start your application
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#calculator"
                  className="btn-shine bg-cream text-ink px-7 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 border border-transparent hover:border-moss-deep/60 transition-colors focus-ring duration-200"
                >
                  Try Our Calculators
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Social Proof (Avatars & Rating) */}
              <div className="flex items-center gap-4">
                {/* Avatar Group */}
                <div className="flex items-center">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80",
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64&q=80",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Customer"
                      className={`w-9 h-9 rounded-full border-2 border-primary-bg object-cover relative z-0 ${i !== 0 ? "-ml-2.5" : ""}`}
                    />
                  ))}
                  {/* +2k Badge */}
                  <div className="w-9 h-9 rounded-full border-2 border-primary-bg bg-moss-deep text-primary-bg flex items-center justify-center text-[11px] font-medium -ml-2.5 relative z-10">
                    +2k
                  </div>
                </div>

                {/* Rating Info */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2.5">
                    {/* Stars */}
                    <div className="flex gap-0.5 text-[#D4A373]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          fill="currentColor"
                          className="text-current"
                        />
                      ))}
                    </div>
                    {/* Score */}
                    <span className="font-semibold text-ink text-sm">
                      4.9 / 5
                    </span>
                  </div>
                  {/* Subtitle */}
                  <span className="text-sm text-ink-2 mt-0.5">
                    from 2,300+ closed loans
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Component */}
          <div className="relative w-full max-w-xl mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-[#E8E4D8] rounded-3xl transform rotate-2 translate-x-3 translate-y-3 -z-10"></div>

            <div className="relative z-10">
              <Calculator />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-2 sm:px-4">
        <CurrentRates />
      </section>

      <section className="px-6 lg:px-10 mt-16 lg:mt-24 border-t border-b border-line py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between items-center">
          <div className="">
            <AnimatedCounter
              value={2.4}
              duration={2000}
              decimals={0}
              prev="$"
              next="B+"
              className={cn("text-5xl text-ink", fraunces.className)}
            />
            <p className="mt-2 text-ink-2">Funded for families since 2014</p>
          </div>
          <div className="">
            <AnimatedCounter
              value={12400}
              duration={2000}
              decimals={0}
              next="+"
              className={cn("text-5xl text-ink", fraunces.className)}
            />
            <p className="mt-2 text-ink-2">Loans closed, paperwork handled</p>
          </div>
          <div className="">
            <AnimatedCounter
              value={23}
              duration={2000}
              decimals={0}
              next=" days"
              className={cn("text-5xl text-ink", fraunces.className)}
            />
            <p className="mt-2 text-ink-2">
              Average time from application to keys
            </p>
          </div>
          <div className="">
            <AnimatedCounter
              value={4.9}
              duration={2000}
              decimals={1}
              next="/5"
              className={cn("text-5xl text-ink", fraunces.className)}
            />
            <p className="mt-2 text-ink-2">
              Average rating from closed clients
            </p>
          </div>
        </div>
      </section>
      <LenderMarquee />
      <CalculatorSection />
      <section id="loans" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header Section */}
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-5">
                02 — Loan types
              </div>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.02] tracking-tight font-light text-ink">
                One desk.{" "}
                <em className="not-italic font-serif italic text-moss-deep">
                  Every
                </em>{" "}
                kind of mortgage.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-lg text-ink-2 leading-relaxed">
                From first-time buyer to seasoned investor, we'll match you to
                the loan structure that actually fits your life — not the one
                that's easiest to sell.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Conventional */}
            <article className="bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 flex items-center justify-center mb-5">
                <Home className="text-moss-deep" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-2xl mb-2 text-ink">
                Conventional
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-5">
                Flexible terms for buyers with solid credit and a down payment
                ready. The bread and butter.
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-2">From 5% down</span>
                <a href="#start" className="font-medium text-moss-deep ulink">
                  Explore →
                </a>
              </div>
            </article>

            {/* FHA */}
            <article className="bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5">
                <Shield
                  className="text-brand-orange"
                  size={22}
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="font-display text-2xl mb-2 text-ink">FHA</h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-5">
                Low down payments and forgiving credit requirements. Built for
                first-time and restart buyers.
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-2">From 3.5% down</span>
                <a href="#start" className="font-medium text-moss-deep ulink">
                  Explore →
                </a>
              </div>
            </article>

            {/* VA */}
            <article className="bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#D4A373]/20 flex items-center justify-center mb-5">
                <Star className="text-[#D4A373]" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-2xl mb-2 text-ink">VA</h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-5">
                Zero-down loans for veterans, active service members, and
                qualifying spouses. A thank-you, in loan form.
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-2">0% down</span>
                <a href="#start" className="font-medium text-moss-deep ulink">
                  Explore →
                </a>
              </div>
            </article>

            {/* Jumbo */}
            <article className="bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 flex items-center justify-center mb-5">
                <Building
                  className="text-moss-deep"
                  size={22}
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="font-display text-2xl mb-2 text-ink">Jumbo</h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-5">
                Loans above the conforming limit, for the bigger picture. Higher
                ceilings, hand-underwritten.
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-2">Up to $5M+</span>
                <a href="#start" className="font-medium text-moss-deep ulink">
                  Explore →
                </a>
              </div>
            </article>

            {/* Refinance */}
            <article className="bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5">
                <RefreshCw
                  className="text-brand-orange"
                  size={22}
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="font-display text-2xl mb-2 text-ink">Refinance</h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-5">
                Lower your rate, shorten your term, or pull cash from equity.
                We'll show the break-even math.
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-2">Cash-out available</span>
                <a href="#start" className="font-medium text-moss-deep ulink">
                  Explore →
                </a>
              </div>
            </article>

            {/* Investment */}
            <article className="bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#D4A373]/20 flex items-center justify-center mb-5">
                <Briefcase
                  className="text-[#D4A373]"
                  size={22}
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="font-display text-2xl mb-2 text-ink">
                Investment
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-5">
                Financing for rental properties and portfolios. DSCR and
                conventional approaches, your call.
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-2">1–10 units</span>
                <a href="#start" className="font-medium text-moss-deep ulink">
                  Explore →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section
        id="process"
        className="py-24 lg:py-32 bg-cream/30 border-y border-line"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header Row */}
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-5">
                03 — How it works
              </div>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.02] tracking-tight font-light text-ink">
                Four steps.{" "}
                <em className="not-italic font-serif italic text-moss-deep">
                  No
                </em>{" "}
                maze.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-lg text-ink-2 leading-relaxed">
                You won't get bounced between departments. The broker who
                pre-qualifies you is the broker at your closing table.
              </p>
            </div>
          </div>

          {/* 1px Grid Layout 
          Using gap-px and bg-line on the parent creates flawless 1px internal borders 
        */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden shadow-sm">
            {/* Step 01 */}
            <div className="bg-primary-bg p-7 lg:p-8 transition-colors duration-300 hover:bg-cream">
              <div className="flex items-center justify-between mb-7">
                <span className="font-display text-5xl text-moss-deep font-light">
                  01
                </span>
                <span className="text-[10px] uppercase tracking-widest text-ink-2 font-medium">
                  5 min
                </span>
              </div>
              <h3 className="font-display text-xl mb-3 text-ink">
                Get pre-qualified
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                A short application, a soft credit pull, and a real number you
                can shop with. No commitment, no hard inquiry.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-primary-bg p-7 lg:p-8 transition-colors duration-300 hover:bg-cream">
              <div className="flex items-center justify-between mb-7">
                <span className="font-display text-5xl text-moss-deep font-light">
                  02
                </span>
                <span className="text-[10px] uppercase tracking-widest text-ink-2 font-medium">
                  24–48 hrs
                </span>
              </div>
              <h3 className="font-display text-xl mb-3 text-ink">
                Compare offers
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                We pull quotes from 20+ lenders and lay them out side by side —
                rates, fees, monthly. In plain English.
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-primary-bg p-7 lg:p-8 transition-colors duration-300 hover:bg-cream">
              <div className="flex items-center justify-between mb-7">
                <span className="font-display text-5xl text-moss-deep font-light">
                  03
                </span>
                <span className="text-[10px] uppercase tracking-widest text-ink-2 font-medium">
                  Same day
                </span>
              </div>
              <h3 className="font-display text-xl mb-3 text-ink">
                Lock your rate
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                When you find the right fit, we lock it in writing. Then we
                start the underwriting paperwork for you.
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-primary-bg p-7 lg:p-8 transition-colors duration-300 hover:bg-cream">
              <div className="flex items-center justify-between mb-7">
                <span className="font-display text-5xl text-moss-deep font-light">
                  04
                </span>
                <span className="text-[10px] uppercase tracking-widest text-ink-2 font-medium">
                  ~23 days
                </span>
              </div>
              <h3 className="font-display text-xl mb-3 text-ink">
                Close with confidence
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                Sign, get keys, move in. We coordinate with title, escrow, and
                your agent all the way to the final handshake.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="why"
        className="py-24 lg:py-32 text-ink relative overflow-hidden dotted-bg"
      >
        {/* Optional: If you don't have .dotted-bg in your CSS, you can replace it with: 
          className="... bg-[radial-gradient(#e6e2d6_1px,transparent_1px)] [background-size:20px_20px]" 
      */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Copy & Testimonial */}
            <div className="lg:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A574] font-semibold mb-6">
                04 — Why myloandesk
              </div>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.04] tracking-tight font-light">
                We sit on <em className="font-serif italic text-ink">your</em>{" "}
                side of the desk. Not the lender's.
              </h2>
              <p className="mt-7 text-ink/70 text-lg leading-relaxed">
                Most loan officers work for one bank and sell you that bank's
                products. We work for you — and shop 20+ lenders to find the
                right fit. Here's what that actually means.
              </p>

              {/* Testimonial Card */}
              <div className="mt-10 p-6 bg-cream/5 border border-cream/15 rounded-2xl backdrop-blur-sm">
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  className="mb-4 opacity-50"
                >
                  <path
                    d="M0 24V12C0 5.4 5.4 0 12 0v4C7.6 4 4 7.6 4 12h4v12H0zm16 0V12C16 5.4 21.4 0 28 0v4c-4.4 0-8 3.6-8 8h4v12h-8z"
                    fill="#D4A574"
                  />
                </svg>
                <p className="font-display text-xl leading-snug italic">
                  "They called me back on a Sunday to lock a rate before markets
                  opened Monday. That's the kind of desk you want."
                </p>
                <div className="mt-4 text-sm text-ink/60">
                  — Marisol T., closed on her first home in Tacoma
                </div>
              </div>
            </div>

            {/* Right Column: Feature Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {/* Feature 1 */}
              <div className="p-7 bg-cream/5 border border-cream/12 rounded-2xl transition-all duration-300 hover:bg-cream/10 hover:border-[#D4A574]/30 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 flex items-center justify-center mb-5">
                  <Clock className="text-[#D4A574]" size={20} strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl mb-2">
                  Independent, not captive
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed">
                  We're not on any single lender's payroll. Our pay doesn't
                  change based on which loan you pick.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-7 bg-cream/5 border border-cream/12 rounded-2xl transition-all duration-300 hover:bg-cream/10 hover:border-[#D4A574]/30 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 flex items-center justify-center mb-5">
                  <FileText
                    className="text-[#D4A574]"
                    size={20}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-display text-xl mb-2">Transparent fees</h3>
                <p className="text-sm text-ink/65 leading-relaxed">
                  Every cost is disclosed up front — in writing. No last-minute
                  junk fees at the closing table.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-7 bg-cream/5 border border-cream/12 rounded-2xl transition-all duration-300 hover:bg-cream/10 hover:border-[#D4A574]/30 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 flex items-center justify-center mb-5">
                  <Phone className="text-[#D4A574]" size={20} strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl mb-2">
                  Your broker's direct line
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed">
                  A real phone number, a real person. Evenings and weekends
                  included. No call centers, ever.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-7 bg-cream/5 border border-cream/12 rounded-2xl transition-all duration-300 hover:bg-cream/10 hover:border-[#D4A574]/30 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#D4A574]/20 flex items-center justify-center mb-5">
                  <FileCheck
                    className="text-[#D4A574]"
                    size={20}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-display text-xl mb-2">Close in 23 days</h3>
                <p className="text-sm text-ink/65 leading-relaxed">
                  Our average is 23 days — industry average is 47. We've closed
                  in 14 when it counted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="stories" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header Row */}
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-5">
                05 — Stories from the desk
              </div>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.02] tracking-tight font-light text-ink">
                Real closings.{" "}
                <em className="not-italic font-serif italic text-moss-deep">
                  Real
                </em>{" "}
                people.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-lg text-ink-2 leading-relaxed">
                A few thousand families have sat at our desk. Here are three of
                them.
              </p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {/* Story 1 */}
            <figure className="bg-cream/50 border border-line rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.2)] flex flex-col">
              <div className="flex items-center gap-1 text-[#D4A574] mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-display text-xl text-ink leading-snug mb-6 flex-grow">
                "I'd been turned down twice before. myloandesk found me a 5/1
                ARM that fit my actual plan, not the bank's template. Closed in
                19 days."
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-5 border-t border-line">
                <img
                  className="w-11 h-11 rounded-full object-cover"
                  src="https://picsum.photos/seed/mldtest1/100/100.jpg"
                  alt="Devon R."
                />
                <div>
                  <div className="text-sm text-ink font-semibold">Devon R.</div>
                  <div className="text-xs text-ink-2">
                    First-home purchase · Denver, CO
                  </div>
                </div>
              </figcaption>
            </figure>

            {/* Story 2 */}
            <figure className="bg-cream/50 border border-line rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.2)] flex flex-col">
              <div className="flex items-center gap-1 text-[#D4A574] mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-display text-xl text-ink leading-snug mb-6 flex-grow">
                "Refinanced from 6.8% to 5.1% and pulled $40k for renovations.
                The break-even math they showed me was sharper than my CPA's."
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-5 border-t border-line">
                <img
                  className="w-11 h-11 rounded-full object-cover"
                  src="https://picsum.photos/seed/mldtest2/100/100.jpg"
                  alt="Marisol T."
                />
                <div>
                  <div className="text-sm text-ink font-semibold">
                    Marisol T.
                  </div>
                  <div className="text-xs text-ink-2">
                    Cash-out refinance · Tacoma, WA
                  </div>
                </div>
              </figcaption>
            </figure>

            {/* Story 3 */}
            <figure className="bg-cream/50 border border-line rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.2)] flex flex-col">
              <div className="flex items-center gap-1 text-[#D4A574] mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-display text-xl text-ink leading-snug mb-6 flex-grow">
                "Third investment property with them. The DSCR loan closed
                faster than my last conventional. They actually know the rental
                game."
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-5 border-t border-line">
                <img
                  className="w-11 h-11 rounded-full object-cover"
                  src="https://picsum.photos/seed/mldtest3/100/100.jpg"
                  alt="Andre K."
                />
                <div>
                  <div className="text-sm text-ink font-semibold">Andre K.</div>
                  <div className="text-xs text-ink-2">
                    Investment purchase · Atlanta, GA
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <Faq />
      <StartApplication />
      <Contact />
    </main>
  );
}
