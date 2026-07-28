import { ArrowRight, Star } from "lucide-react";
import { Home, RefreshCw, AlertCircle } from "lucide-react";
import { Clock, FileText, Phone, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

import Calculator from "@/components/site/Home/Calculator";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import LenderMarquee from "@/components/site/Home/LenderMarquee";
// import CurrentRates from "@/components/site/Home/InterestRates";
// import Contact from "@/components/site/Home/Contact";

import { Fraunces } from "next/font/google";
import Faq from "@/components/site/Home/FAQ";
import PreQualified from "@/components/site/Home/ApplicationForm";
import CalculatorSection from "@/components/site/Home/CalculatorSection";
import RateAlert from "@/components/site/Home/RateAlert";

import deskImg from "@/assets/desk.png";
import HeroSmallIcons from "@/components/site/Home/HeroSmallIcons";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Hero() {
  return (
    <main className="min-h-screen bg-primary-bg pt-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="max-w-xl">
            <HeroSmallIcons />

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
                  href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
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
          <div className="grid sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {/* Forward Mortgage */}
            <Link href={"/loan-programs#resident"}>
              <article className="bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-moss-deep/10 flex items-center justify-center mb-5">
                  <Home
                    className="text-moss-deep"
                    size={22}
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="font-display text-2xl mb-2 text-ink">
                  Forward Mortgage
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed mb-5">
                  Traditional financing structures including Conventional, FHA,
                  VA, and Jumbo loan programs. Built with flexible terms for
                  purchasing a new property or executing standard refinance
                  options.
                </p>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-line/40">
                  <span className="text-ink-2 font-medium">
                    Purchase & Refinance
                  </span>
                  <span className="font-semibold text-moss-deep ulink flex items-center gap-1">
                    Explore Programs →
                  </span>
                </div>
              </article>
            </Link>

            {/* Reverse Mortgage */}
            <Link href={"/reverse-mortgage"}>
              <article className="bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5">
                  <RefreshCw
                    className="text-brand-orange"
                    size={22}
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="font-display text-2xl mb-2 text-ink">
                  Reverse Mortgage
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed mb-5">
                  Tap into home equity without the burden of monthly mortgage
                  payments. Designed exclusively for older homeowners looking to
                  convert home equity into tax-free cash or dynamic credit
                  lines.
                </p>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-line/40">
                  <span className="text-ink-2 font-medium">
                    Live in your home with no mortgage payments
                  </span>
                  <span className="font-semibold text-moss-deep ulink flex items-center gap-1">
                    Explore Options →
                  </span>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 flex flex-col items-center gap-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-2">
          <h2
            className={` ${fraunces.className} text-3xl sm:text-3xl lg:text-4xl font-display font-semibold text-ink tracking-tight`}
          >
            National US Mortgage Rates
          </h2>
        </div>

        {/* 1. Optimal Blue Widget */}
        <div
          className="p-4 rounded-2xl bg-cream w-full max-w-[782px] flex flex-col justify-center overflow-hidden border border-line/30 shadow-sm"
          id="live-rates-widget"
        >
          <iframe
            src="https://www2.optimalblue.com/OBMMI/widgetConfig.php?actbg=2a3f38&inactbg=fdf9f2&inacttext=2a3f38&hoverBG=fdf9f2&hoverColor=2a3f38&rate=2a3f38&graph1=2a3f38&graph2=f57126"
            width="750"
            height="502"
            frameBorder="0"
            className="max-w-full"
          ></iframe>
          <div className="bg-cream/40 rounded-2xl border border-line/50 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full max-w-[782px]">
            {/* Warning Disclaimer Box */}
            <div className="flex gap-3 max-w-xl">
              <AlertCircle
                className="text-brand-orange shrink-0 mt-0.5"
                size={18}
                strokeWidth={2.2}
              />
              <p className="text-xs text-ink-2 leading-relaxed">
                Rates shown are national average market rates provided for
                informational purposes only and are not a commitment to lend or
                a loan offer. Your actual interest rate and APR will vary based
                on credit score, loan amount, loan-to-value ratio, occupancy,
                property type, loan program, discount points, and other
                underwriting factors.
              </p>
            </div>

            {/* Action Callout Box */}
            <div className="flex flex-col items-start md:items-end gap-2 shrink-0 w-full md:w-auto border-t md:border-t-0 border-line/40 pt-4 md:pt-0">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-ink-2/80">
                Contact us for your personalized quote
              </span>
              <Link
                href="/get-quote"
                className="btn-shine w-full md:w-auto bg-brand-orange text-primary-bg px-6 py-3 rounded-full text-xs font-bold tracking-wide text-center hover:bg-orange-600 transition-colors focus-ring shadow-sm"
              >
                Get My Personalized Rate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <RateAlert />
      </section>

      <section className="px-6 lg:px-10 border-t border-b border-line py-8">
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
            <p className="mt-2 text-ink-2">Funded for families since 1995</p>
          </div>
          <div className="">
            <AnimatedCounter
              value={12400}
              duration={2000}
              decimals={0}
              next="+"
              className={cn("text-5xl text-ink", fraunces.className)}
            />
            <p className="mt-2 text-ink-2">Loans completed</p>
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

      <CalculatorSection />

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
                4 steps.{" "}
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
                Complete a quick application or talk with us by phone. We'll
                compare multiple lenders and recommend the best mortgage options
                for you—with no hard credit inquiry and no obligation.
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
                We search 100+ lenders to find your best mortgage options and
                present them in a simple side-by-side comparison.
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
                Move Forward
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                Choose your preferred loan option, lock your rate, and we'll
                handle the paperwork while keeping you informed throughout the
                process.
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-primary-bg p-7 lg:p-8 transition-colors duration-300 hover:bg-cream">
              <div className="flex items-center justify-between mb-7">
                <span className="font-display text-5xl text-moss-deep font-light">
                  04
                </span>
                <span className="text-[10px] uppercase tracking-widest text-ink-2 font-medium">
                  15-28 days
                </span>
              </div>
              <h3 className="font-display text-xl mb-3 text-ink">
                Close with Confidence
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed">
                We'll coordinate every detail with your lender, title company,
                and all parties involved to ensure a smooth, on-time closing.
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
                <h3 className="font-display text-xl mb-2">
                  Close in 10-28 days
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed">
                  Our average is 18 days — industry average is 47.
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

          {/* Testimonials Embed */}
          <div className="w-full mx-auto relative mt-8" id="reviews">
            {/* Background design elements to match your brand style */}
            <div className="absolute inset-0 bg-[#E8E4D8] rounded-[24px] sm:rounded-[32px] transform -rotate-1 -translate-x-1.5 translate-y-1.5 sm:-translate-x-2 sm:translate-y-2 -z-10"></div>

            {/* Iframe Container */}
            <div className="relative z-10 bg-primary-bg border border-line rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(15,61,46,0.2)]">
              {/* Note: Iframe height is explicitly set to ensure enough vertical room for the widget to display the reviews without internal scrolling if possible */}
              <iframe
                className="w-full h-[700px]"
                title="Google Review"
                name="htmlComp-iframe"
                allowFullScreen={true}
                src="https://www-myloandesk-com.filesusr.com/html/d6795e_7eed3b5b6329633be8de74d6c024f51a.html"
                style={{ border: "none", display: "block" }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <PreQualified />
      {/* <Contact /> */}
      <LenderMarquee />
    </main>
  );
}
