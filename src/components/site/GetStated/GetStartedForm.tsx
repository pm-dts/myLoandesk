"use client";

import { useState, useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { Fraunces } from "next/font/google";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
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

interface GetStartedFormProps {
  locale?: string;
}

export default function GetStartedForm({ locale = "en" }: GetStartedFormProps) {
  const t = useTranslations("GetStarted");
  const isEs = locale === "es";

  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Track GA4: Questionnaire Started
  useEffect(() => {
    if (currentStep === 2 && !answers._startedTracked) {
      sendGTMEvent({
        event: "get_started_questionnaire_started",
        category: "engagement",
        locale,
      });
      setAnswers((prev) => ({ ...prev, _startedTracked: "true" }));
    }
    // Track GA4: Questionnaire Completed (Reached final step)
    if (currentStep === TOTAL_STEPS && !answers._completedTracked) {
      sendGTMEvent({
        event: "get_started_questionnaire_completed",
        category: "engagement",
        locale,
      });
      setAnswers((prev) => ({ ...prev, _completedTracked: "true" }));
    }
  }, [currentStep, answers, locale]);

  const handleSelect = (name: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [name]: value }));
    setTimeout(() => goNext(), 200);
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
      locale,
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
        event: "get_started_survey_lead_submitted",
        category: "conversion",
        label: "Get Started Form",
        locale,
      });
      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error submitting lead to GHL:", error);
      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPct = showSuccess
    ? 100
    : Math.round((currentStep / TOTAL_STEPS) * 100);

  const homeStartHref = isEs ? "/es/#start" : "/#start";
  const calendarHref = isEs ? "/es/calendar" : "/calendar";

  return (
    <div className="min-h-screen bg-primary-bg flex flex-col font-sans text-ink">
      <main className="flex-1 w-full max-w-[960px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Area */}
        <div className="text-center mb-8">
          <div className="text-[11px] sm:text-[13px] tracking-[0.25em] text-brand-orange font-semibold uppercase mb-3">
            {t("hero.badge")}
          </div>
          <h1
            className={cn(
              "text-3xl sm:text-5xl tracking-tight font-light text-ink leading-tight mb-4",
              fraunces.className,
            )}
          >
            {t("hero.headline")}
          </h1>
          <p className="text-sm sm:text-base text-ink-2 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subheadline")}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-cream/40 border border-line rounded-2xl p-4 sm:p-5 mb-8 shadow-sm">
          <div className="flex justify-between text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink-2 mb-3">
            <strong>
              {showSuccess
                ? t("progress.completed")
                : t("progress.step", {
                    current: currentStep,
                    total: TOTAL_STEPS,
                  })}
            </strong>
            <span className="text-brand-orange">
              {t("progress.complete_pct", { percent: progressPct })}
            </span>
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
          <div className="bg-cream/30 border border-line rounded-[32px] p-8 sm:p-12 shadow-sm flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-500 text-center">
            <div className="w-16 h-16 rounded-full bg-moss-deep/10 text-moss-deep flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} />
            </div>

            <h2
              className={cn(
                "text-3xl sm:text-4xl font-light text-ink mb-2",
                fraunces.className,
              )}
            >
              {t("success.title", {
                name: answers.firstName ? `, ${answers.firstName}` : "",
              })}
            </h2>

            <p className="text-sm sm:text-base font-semibold text-moss-deep mb-4">
              {t("success.subtitle")}
            </p>

            <p className="text-sm sm:text-base text-ink-2 leading-relaxed mb-6 max-w-lg">
              {t("success.description")}
            </p>

            <div className="bg-primary-bg border border-line rounded-2xl p-5 mb-8 w-full max-w-md shadow-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-1">
                {t("success.immediate_title")}
              </div>
              <div className="text-sm sm:text-base font-medium text-ink">
                {t("success.call_or_text")}{" "}
                <a
                  href="tel:3058916500"
                  className="font-bold text-brand-orange hover:underline"
                >
                  {t("success.phone_number")}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full max-w-md gap-4">
              <Link
                href={homeStartHref}
                className="flex-1 flex items-center justify-center h-[54px] bg-primary-bg border border-line text-ink rounded-full font-semibold text-sm sm:text-base hover:bg-cream transition-colors"
              >
                {t("success.contact_button")}
              </Link>
              <Link
                href={calendarHref}
                className="btn-shine flex-1 flex items-center justify-center h-[54px] bg-brand-orange text-primary-bg rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm"
              >
                {t("success.schedule_button")}
              </Link>
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
                  {t("steps.step1.title")}
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  {t("steps.step1.subtitle")}
                </p>
                <div className="grid gap-3 max-w-2xl mx-auto">
                  {[
                    {
                      icon: Home,
                      key: "buy",
                      label: t("steps.step1.options.buy"),
                    },
                    {
                      icon: RefreshCw,
                      key: "refinance",
                      label: t("steps.step1.options.refinance"),
                    },
                    {
                      icon: CircleDollarSign,
                      key: "equity",
                      label: t("steps.step1.options.equity"),
                    },
                    {
                      icon: Building,
                      key: "investment",
                      label: t("steps.step1.options.investment"),
                    },
                    {
                      icon: Building2,
                      key: "commercial",
                      label: t("steps.step1.options.commercial"),
                    },
                    {
                      icon: Hammer,
                      key: "renovate",
                      label: t("steps.step1.options.renovate"),
                    },
                  ].map((opt) => (
                    <button
                      key={opt.key}
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
                  {t("steps.step2.title")}
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  {t("steps.step2.subtitle")}
                </p>
                <div className="grid gap-3 max-w-2xl mx-auto">
                  {[
                    t("steps.step2.options.primary"),
                    t("steps.step2.options.second"),
                    t("steps.step2.options.investment"),
                    t("steps.step2.options.commercial"),
                    t("steps.step2.options.not_sure"),
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
                  {t("steps.step3.title")}
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  {t("steps.step3.subtitle")}
                </p>
                <div className="grid gap-3 max-w-2xl mx-auto">
                  {[
                    t("steps.step3.options.exploring"),
                    t("steps.step3.options.shopping"),
                    t("steps.step3.options.found"),
                    t("steps.step3.options.under_contract"),
                    t("steps.step3.options.own"),
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
                  {t("steps.step4.title")}
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  {t("steps.step4.subtitle")}
                </p>
                <div className="max-w-[500px] mx-auto mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                    {t("steps.step4.label")}
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
                      placeholder={t("steps.step4.placeholder")}
                      className="w-full h-[64px] pl-12 pr-6 rounded-2xl border border-line bg-primary-bg focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-lg font-medium outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleSelect("propertyValue", t("controls.not_sure"))
                  }
                  className="block mx-auto text-brand-orange font-semibold text-sm hover:underline"
                >
                  {t("controls.not_sure")}
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
                  {t("steps.step5.title")}
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  {t("steps.step5.subtitle")}
                </p>

                <div className="max-w-[500px] mx-auto mb-6">
                  <div className="bg-primary-bg border border-line rounded-[24px] p-6 sm:p-8 shadow-sm mb-6">
                    <div className="flex justify-between items-end mb-8">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-1">
                          {t("steps.step5.label")}
                        </label>
                        <div className="text-4xl font-light text-brand-orange">
                          {answers.downPaymentPercent || "20"}%
                        </div>
                      </div>

                      {answers.propertyValue &&
                        !isNaN(Number(answers.propertyValue)) && (
                          <div className="text-right">
                            <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-1">
                              {t("steps.step5.est_label")}
                            </label>
                            <div className="text-xl font-medium text-ink">
                              $
                              {(
                                (Number(answers.propertyValue) *
                                  (Number(answers.downPaymentPercent) || 20)) /
                                100
                              ).toLocaleString()}
                            </div>
                          </div>
                        )}
                    </div>

                    <input
                      type="range"
                      name="downPaymentPercent"
                      min="0"
                      max="100"
                      step="1"
                      value={answers.downPaymentPercent || "20"}
                      onChange={handleInputChange}
                      className="w-full h-2 bg-line rounded-lg appearance-none cursor-pointer accent-brand-orange"
                    />
                    <div className="flex justify-between text-xs text-ink-2 mt-3 font-medium">
                      <span>0%</span>
                      <span className="pl-3">50%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleSelect("downPaymentPercent", t("controls.not_sure"))
                    }
                    className="block mx-auto text-brand-orange font-semibold text-sm hover:underline"
                  >
                    {t("controls.not_sure")}
                  </button>
                </div>
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
                  {t("steps.step6.title")}
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  {t("steps.step6.subtitle")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {[
                    t("steps.step6.options.w2"),
                    t("steps.step6.options.self_employed"),
                    t("steps.step6.options.contractor"),
                    t("steps.step6.options.investor"),
                    t("steps.step6.options.retired"),
                    t("steps.step6.options.other"),
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
                  {t("steps.step7.title")}
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  {t("steps.step7.subtitle")}
                </p>
                <div className="grid gap-3 max-w-2xl mx-auto">
                  {[
                    t("steps.step7.options.tier_740"),
                    t("steps.step7.options.tier_700"),
                    t("steps.step7.options.tier_660"),
                    t("steps.step7.options.tier_below"),
                    t("steps.step7.options.not_sure"),
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
                  {t("steps.step8.title")}
                </h2>
                <p className="text-center text-sm text-ink-2 mb-8">
                  {t("steps.step8.subtitle")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6 text-left">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-2 mb-2">
                      {t("steps.step8.first_name")}
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
                      {t("steps.step8.last_name")}
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
                      {t("steps.step8.email")}
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
                      {t("steps.step8.phone")}
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
                      {t("steps.step8.state_label")}
                    </label>
                    <select
                      required
                      name="state"
                      onChange={handleInputChange}
                      className="w-full h-12 px-4 rounded-xl border border-line bg-primary-bg focus:border-brand-orange outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">
                        {t("steps.step8.state_placeholder")}
                      </option>
                      <option value="Florida">
                        {t("steps.step8.states.florida")}
                      </option>
                      <option value="Texas">
                        {t("steps.step8.states.texas")}
                      </option>
                      <option value="California">
                        {t("steps.step8.states.california")}
                      </option>
                      <option value="Other">
                        {t("steps.step8.states.other")}
                      </option>
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
                    {t("steps.step8.consent")}
                  </span>
                </label>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn-shine w-full h-[58px] bg-brand-orange text-primary-bg rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition-all disabled:opacity-70 shadow-sm"
                >
                  {isSubmitting
                    ? t("steps.step8.submitting_button")
                    : t("steps.step8.submit_button")}{" "}
                  {!isSubmitting && <ArrowRight size={20} />}
                </button>

                <p className="text-center text-[11px] text-ink-2/80 mt-4 leading-relaxed max-w-sm mx-auto">
                  {t("steps.step8.disclaimer")}
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
                  <ArrowLeft size={18} /> {t("controls.back")}
                </button>

                {(currentStep === 4 || currentStep === 5) && (
                  <button
                    type="button"
                    onClick={goNext}
                    className="bg-moss-deep text-cream px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-moss-darker transition-all shadow-sm"
                  >
                    {t("controls.continue")} <ArrowRight size={16} />
                  </button>
                )}
              </div>
            )}

            {/* Security Note */}
            <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t border-line text-ink-2">
              <Lock size={18} />
              <div className="text-left leading-tight">
                <span className="block font-semibold text-xs text-ink uppercase tracking-wider">
                  {t("controls.secure_title")}
                </span>
                <span className="text-[11px]">
                  {t("controls.secure_subtitle")}
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
              title: t("value_props.experts.title"),
              sub: t("value_props.experts.sub"),
            },
            {
              icon: Clock,
              title: t("value_props.fast.title"),
              sub: t("value_props.fast.sub"),
            },
            {
              icon: LayoutGrid,
              title: t("value_props.programs.title"),
              sub: t("value_props.programs.sub"),
            },
            {
              icon: Heart,
              title: t("value_props.obligation.title"),
              sub: t("value_props.obligation.sub"),
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
