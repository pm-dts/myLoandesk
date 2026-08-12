"use client";

import { useState, useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { Fraunces } from "next/font/google";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import {
  Home,
  RefreshCw,
  CircleDollarSign,
  Building,
  Building2,
  Hammer,
  CheckCircle2,
  Circle,
  Star,
  Lock,
  Phone,
  ChevronRight,
  ArrowLeft,
  ShieldCheck,
  Clock,
  LayoutGrid,
  Heart,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const TOTAL_STEPS = 8;

export default function GetStartedForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Track GA4: Questionnaire Started
  useEffect(() => {
    if (currentStep === 2 && !answers._startedTracked) {
      sendGTMEvent({ event: "questionnaire_started", category: "engagement" });
      setAnswers((prev) => ({ ...prev, _startedTracked: "true" }));
    }
    // Track GA4: Questionnaire Completed (Reached final step)
    if (currentStep === TOTAL_STEPS && !answers._completedTracked) {
      sendGTMEvent({
        event: "questionnaire_completed",
        category: "engagement",
      });
      setAnswers((prev) => ({ ...prev, _completedTracked: "true" }));
    }
  }, [currentStep, answers]);

  const handleSelect = (name: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [name]: value }));
    setTimeout(() => goNext(), 200); // Slight delay for UX
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setAnswers((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const goNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      source: "MyLoanDesk Website",
      form_name: "Get Started Questionnaire",
      ...answers,
    };

    try {
      const GHL_WEBHOOK_URL =
        "https://services.leadconnectorhq.com/hooks/Lv5oqPcJ6MZsszgssznB/webhook-trigger/50daa010-7277-410e-a281-1a7fa3dae730";

      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      sendGTMEvent({
        event: "lead_submitted",
        category: "conversion",
        label: "Get Started Form",
      });
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting lead to GHL:", error);
      // Fallback success screen even if webhook fails, to prevent UX block
      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPct = showSuccess
    ? 100
    : Math.round((currentStep / TOTAL_STEPS) * 100);

  return (
    <div className="min-h-screen bg-primary-bg flex flex-col font-sans text-ink">
      <main className="flex-1 w-full max-w-[960px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Area */}
        <div className="text-center mb-8">
          <div className="text-[11px] sm:text-[13px] tracking-[0.25em] text-brand-orange font-semibold uppercase mb-3">
            FIND THE RIGHT MORTGAGE FOR YOU
          </div>
          <h1
            className={cn(
              "text-3xl sm:text-5xl tracking-tight font-light text-ink leading-tight mb-4",
              fraunces.className,
            )}
          >
            Let’s Find Your Best Loan Options
          </h1>
          <p className="text-sm sm:text-base text-ink-2 max-w-2xl mx-auto leading-relaxed">
            Answer a few quick questions and we’ll help identify loan programs
            that may fit your goals.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-cream/40 border border-line rounded-2xl p-4 sm:p-5 mb-8 shadow-sm">
          <div className="flex justify-between text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink-2 mb-3">
            <strong>
              {showSuccess
                ? "Completed"
                : `Step ${currentStep} of ${TOTAL_STEPS}`}
            </strong>
            <span className="text-brand-orange">{progressPct}% Complete</span>
          </div>
          <div className="h-2.5 w-full bg-line/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-orange rounded-full transition-all duration-500 ease-out relative overflow-hidden"
              style={{ width: `${progressPct}%` }}
            >
              {!showSuccess && (
                <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
              )}
            </div>
          </div>
        </div>

        {/* Conditional Rendering: Form OR Success Message */}
        {showSuccess ? (
          <div className="bg-cream/30 border border-line rounded-[32px] p-8 sm:p-12 shadow-sm flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-500">
            <div className="w-16 h-16 rounded-full bg-moss-deep/10 text-moss-deep flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} />
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-center text-ink mb-4",
                fraunces.className,
              )}
            >
              Thank You
            </h2>
            <p className="text-ink-2 leading-relaxed mb-8 max-w-lg text-center">
              We’ve received your information. A MyLoanDesk mortgage
              professional will review your answers and help identify financing
              options that fit your goals.
            </p>
            <div className="flex flex-col sm:flex-row w-full max-w-md gap-4">
              <a
                href="/#start"
                className="flex-1 flex items-center justify-center h-[54px] bg-primary-bg border border-line text-ink rounded-full font-semibold text-sm sm:text-base hover:bg-cream transition-colors"
              >
                Contact Us Now
              </a>
              <a
                href="/calendar"
                className="btn-shine flex-1 flex items-center justify-center h-[54px] bg-brand-orange text-primary-bg rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm"
              >
                Schedule A Call
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-cream/30 border border-line rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden"
          >
            {/* STEP 1 */}
            {currentStep === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home size={28} />
                </div>
                <h2
                  className={cn(
                    "text-2xl sm:text-4xl font-light text-center text-ink mb-3",
                    fraunces.className,
                  )}
                >
                  What would you like to do?
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  Choose the option that best matches your goal.
                </p>
                <div className="grid gap-3 max-w-2xl mx-auto">
                  {[
                    { icon: Home, label: "Buy a Home" },
                    { icon: RefreshCw, label: "Refinance My Mortgage" },
                    { icon: CircleDollarSign, label: "Access Home Equity" },
                    { icon: Building, label: "Buy an Investment Property" },
                    { icon: Building2, label: "Finance a Commercial Property" },
                    { icon: Hammer, label: "Build or Renovate" },
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => handleSelect("goal", opt.label)}
                      className={cn(
                        "w-full bg-primary-bg border rounded-2xl min-h-[72px] px-5 py-4 flex items-center text-left transition-all shadow-sm",
                        answers.goal === opt.label
                          ? "border-brand-orange bg-brand-orange/5 ring-1 ring-brand-orange"
                          : "border-line hover:border-brand-orange hover:bg-cream",
                      )}
                    >
                      <opt.icon
                        className="text-brand-orange w-12 shrink-0"
                        size={26}
                      />
                      <span className="flex-1 font-semibold text-base sm:text-lg text-ink">
                        {opt.label}
                      </span>
                      <ChevronRight className="text-ink-2/50" size={24} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home size={28} />
                </div>
                <h2
                  className={cn(
                    "text-2xl sm:text-4xl font-light text-center text-ink mb-3",
                    fraunces.className,
                  )}
                >
                  How will the property be used?
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  This helps us narrow down the right loan programs.
                </p>
                <div className="grid gap-3 max-w-2xl mx-auto">
                  {[
                    "Primary Residence",
                    "Second / Vacation Home",
                    "Investment Property",
                    "Commercial Property",
                    "Not Sure Yet",
                  ].map((label) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => handleSelect("occupancy", label)}
                      className={cn(
                        "w-full bg-primary-bg border rounded-2xl min-h-[64px] px-6 py-4 flex items-center justify-between text-left transition-all shadow-sm",
                        answers.occupancy === label
                          ? "border-brand-orange bg-brand-orange/5 ring-1 ring-brand-orange"
                          : "border-line hover:border-brand-orange hover:bg-cream",
                      )}
                    >
                      <span className="font-semibold text-base sm:text-lg text-ink">
                        {label}
                      </span>
                      <ChevronRight className="text-ink-2/50" size={24} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} />
                </div>
                <h2
                  className={cn(
                    "text-2xl sm:text-4xl font-light text-center text-ink mb-3",
                    fraunces.className,
                  )}
                >
                  Where are you in the process?
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  No pressure — choose whichever fits best.
                </p>
                <div className="grid gap-3 max-w-2xl mx-auto">
                  {[
                    "Just Exploring",
                    "Shopping for a Property",
                    "I Found a Property",
                    "Under Contract",
                    "I Already Own the Property",
                  ].map((label) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => handleSelect("stage", label)}
                      className={cn(
                        "w-full bg-primary-bg border rounded-2xl min-h-[64px] px-6 py-4 flex items-center justify-between text-left transition-all shadow-sm",
                        answers.stage === label
                          ? "border-brand-orange bg-brand-orange/5 ring-1 ring-brand-orange"
                          : "border-line hover:border-brand-orange hover:bg-cream",
                      )}
                    >
                      <span className="font-semibold text-base sm:text-lg text-ink">
                        {label}
                      </span>
                      <ChevronRight className="text-ink-2/50" size={24} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <CircleDollarSign size={28} />
                </div>
                <h2
                  className={cn(
                    "text-2xl sm:text-4xl font-light text-center text-ink mb-3",
                    fraunces.className,
                  )}
                >
                  What is the approximate property value?
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  An estimate is fine.
                </p>
                <div className="max-w-[500px] mx-auto mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                    Property value or purchase price
                  </label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-ink-2 font-semibold text-lg">
                      $
                    </span>
                    <input
                      type="number"
                      name="propertyValue"
                      value={answers.propertyValue || ""}
                      onChange={handleInputChange}
                      placeholder="500000"
                      className="w-full h-[64px] pl-12 pr-6 rounded-2xl border border-line bg-primary-bg focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-lg font-medium outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelect("propertyValue", "Not Sure")}
                  className="block mx-auto text-brand-orange font-semibold text-sm hover:underline"
                >
                  I'm not sure
                </button>
              </div>
            )}

            {/* STEP 5 */}
            {currentStep === 5 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <CircleDollarSign size={28} />
                </div>
                <h2
                  className={cn(
                    "text-2xl sm:text-4xl font-light text-center text-ink mb-3",
                    fraunces.className,
                  )}
                >
                  Approximately how much financing do you need?
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  Enter your best estimate.
                </p>
                <div className="max-w-[500px] mx-auto mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                    Loan amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-ink-2 font-semibold text-lg">
                      $
                    </span>
                    <input
                      type="number"
                      name="loanAmount"
                      value={answers.loanAmount || ""}
                      onChange={handleInputChange}
                      placeholder="400000"
                      className="w-full h-[64px] pl-12 pr-6 rounded-2xl border border-line bg-primary-bg focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-lg font-medium outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelect("loanAmount", "Not Sure")}
                  className="block mx-auto text-brand-orange font-semibold text-sm hover:underline"
                >
                  I'm not sure
                </button>
              </div>
            )}

            {/* STEP 6 */}
            {currentStep === 6 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Circle size={28} />
                </div>
                <h2
                  className={cn(
                    "text-2xl sm:text-4xl font-light text-center text-ink mb-3",
                    fraunces.className,
                  )}
                >
                  How do you earn your income?
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  We offer programs for many different income situations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {[
                    "W-2 Employee",
                    "Self-Employed",
                    "1099",
                    "Real Estate Investor",
                    "Retired",
                    "Other",
                  ].map((label) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => handleSelect("income", label)}
                      className={cn(
                        "w-full bg-primary-bg border rounded-2xl min-h-[64px] px-4 flex items-center justify-center text-center transition-all shadow-sm",
                        answers.income === label
                          ? "border-brand-orange bg-brand-orange/5 ring-1 ring-brand-orange"
                          : "border-line hover:border-brand-orange hover:bg-cream",
                      )}
                    >
                      <span className="font-semibold text-base text-ink">
                        {label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 7 */}
            {currentStep === 7 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="w-14 h-14 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={28} />
                </div>
                <h2
                  className={cn(
                    "text-2xl sm:text-4xl font-light text-center text-ink mb-3",
                    fraunces.className,
                  )}
                >
                  How would you describe your credit?
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  An estimate is all we need.
                </p>
                <div className="grid gap-3 max-w-2xl mx-auto">
                  {[
                    "Excellent — 740+",
                    "Good — 700–739",
                    "Fair — 660–699",
                    "Below 660",
                    "I'm Not Sure",
                  ].map((label) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => handleSelect("credit", label)}
                      className={cn(
                        "w-full bg-primary-bg border rounded-2xl min-h-[64px] px-6 py-4 flex items-center justify-between text-left transition-all shadow-sm",
                        answers.credit === label
                          ? "border-brand-orange bg-brand-orange/5 ring-1 ring-brand-orange"
                          : "border-line hover:border-brand-orange hover:bg-cream",
                      )}
                    >
                      <span className="font-semibold text-base sm:text-lg text-ink">
                        {label}
                      </span>
                      <ChevronRight className="text-ink-2/50" size={24} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 8: Final Submission */}
            {currentStep === 8 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300 max-w-[640px] mx-auto">
                <div className="w-14 h-14 bg-moss-deep/10 text-moss-deep rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} />
                </div>
                <h2
                  className={cn(
                    "text-2xl sm:text-4xl font-light text-center text-ink mb-3",
                    fraunces.className,
                  )}
                >
                  See Your Loan Options
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  Enter your contact information and a MyLoanDesk mortgage
                  professional can review your answers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6 text-left">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                      First Name
                    </label>
                    <input
                      required
                      name="firstName"
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl border border-line bg-primary-bg focus:border-brand-orange outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                      Last Name
                    </label>
                    <input
                      required
                      name="lastName"
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl border border-line bg-primary-bg focus:border-brand-orange outline-none transition-all"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl border border-line bg-primary-bg focus:border-brand-orange outline-none transition-all"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                      Phone
                    </label>
                    <PhoneInput
                      defaultCountry="us"
                      value={answers.phone || ""}
                      onChange={(phone) =>
                        setAnswers((prev) => ({ ...prev, phone }))
                      }
                      className="w-full flex"
                      inputClassName="!flex-1 !h-12 !px-4 !rounded-r-xl !border !border-line !bg-primary-bg focus:!border-brand-orange !outline-none !transition-all !text-base !font-sans"
                      countrySelectorStyleProps={{
                        buttonClassName:
                          "!h-12 !px-3 !border !border-line !rounded-l-xl !bg-primary-bg hover:!bg-cream !transition-colors",
                      }}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                      Property State
                    </label>
                    <select
                      required
                      name="state"
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl border border-line bg-primary-bg focus:border-brand-orange outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select state</option>
                      <option value="Florida">Florida</option>
                      <option value="Texas">Texas</option>
                      <option value="California">California</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <label className="flex items-start gap-3 mb-8 text-xs text-ink-2 cursor-pointer p-4 bg-cream/50 rounded-xl border border-line/60 text-left">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 w-4 h-4 rounded text-brand-orange focus:ring-brand-orange"
                  />
                  <span className="leading-relaxed">
                    By checking this box, I consent to be contacted by
                    MyLoanDesk regarding my mortgage inquiry via phone, text, or
                    email at the details provided. I understand that consent is
                    not a condition of purchase.
                  </span>
                </label>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn-shine w-full h-[58px] bg-brand-orange text-primary-bg rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition-all disabled:opacity-70 shadow-sm"
                >
                  {isSubmitting ? "PROCESSING..." : "SEE MY LOAN OPTIONS"}{" "}
                  {!isSubmitting && <ArrowRight size={20} />}
                </button>

                <p className="text-center text-[11px] text-ink-2/80 mt-4 leading-relaxed max-w-sm mx-auto">
                  Submission does not constitute a loan application, approval,
                  or commitment to lend.
                </p>
              </div>
            )}

            {/* Navigation Controls */}
            {currentStep < TOTAL_STEPS && (
              <div className="flex items-center justify-between mt-10 max-w-2xl mx-auto border-t border-line pt-6">
                <button
                  type="button"
                  onClick={goBack}
                  className={cn(
                    "flex items-center gap-1.5 font-semibold text-ink-2 hover:text-brand-orange transition-colors",
                    currentStep === 1 && "invisible",
                  )}
                >
                  <ArrowLeft size={18} /> Back
                </button>

                {/* Only show 'Continue' manually if inputting text on steps 4/5 */}
                {(currentStep === 4 || currentStep === 5) && (
                  <button
                    type="button"
                    onClick={goNext}
                    className="bg-moss-deep text-cream px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-moss-darker transition-all shadow-sm"
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                )}
              </div>
            )}

            {/* Security Note */}
            <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-line text-ink-2">
              <Lock size={18} />
              <div className="text-left leading-tight">
                <span className="block font-semibold text-xs text-ink uppercase tracking-wider">
                  Secure &amp; Confidential
                </span>
                <span className="text-[11px]">
                  Your information is protected.
                </span>
              </div>
            </div>
          </form>
        )}

        {/* Value Props Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 bg-primary-bg border border-line rounded-[24px] p-6 sm:p-8 shadow-sm">
          {[
            {
              icon: ShieldCheck,
              title: "Trusted Experts",
              sub: "Mortgage professionals",
            },
            {
              icon: Clock,
              title: "Fast & Easy",
              sub: "Takes about 60 seconds",
            },
            {
              icon: LayoutGrid,
              title: "Many Programs",
              sub: "Options for every situation",
            },
            {
              icon: Heart,
              title: "No Obligation",
              sub: "Explore your options safely",
            },
          ].map((vp, i) => (
            <div
              key={vp.title}
              className={cn(
                "text-center flex flex-col items-center",
                i !== 3 && "md:border-r border-line md:pr-4",
              )}
            >
              <div className="w-10 h-10 rounded-xl bg-moss-deep/10 text-moss-deep flex items-center justify-center mb-3">
                <vp.icon size={18} />
              </div>
              <div className="text-ink font-semibold text-[13px] mb-1">
                {vp.title}
              </div>
              <div className="text-[11px] text-ink-2 leading-relaxed max-w-[120px]">
                {vp.sub}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
