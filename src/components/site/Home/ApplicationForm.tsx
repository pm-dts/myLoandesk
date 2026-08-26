"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useForm } from "@tanstack/react-form";
import toast, { Toaster } from "react-hot-toast";
import { useState, useRef, useEffect } from "react";
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";
import "react-international-phone/style.css";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const INBOUND_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/Lv5oqPcJ6MZsszgssznB/webhook-trigger/10f86bfa-a0f8-4c4e-a551-46e909cb6ab6";

interface TailwindPhoneInputProps {
  value: string;
  onChange: (phone: string) => void;
  error?: boolean;
  placeholder?: string;
  defaultCountry?: string;
}

export const TailwindPhoneInput = ({
  value,
  onChange,
  error,
  placeholder,
  defaultCountry = "us",
}: TailwindPhoneInputProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry,
      value,
      countries: defaultCountries,
      onChange: (data) => onChange(data.phone),
    });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full">
      <div
        className={`flex w-full bg-cream border ${
          error ? "border-red-500" : "border-line"
        } rounded-lg focus-within:border-moss-deep transition-colors overflow-hidden`}
      >
        {/* Country Selector Button */}
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1 px-3 border-r border-line bg-cream/50 hover:bg-cream/80 transition-colors"
        >
          <FlagImage iso2={country.iso2} size={20} />
          <ChevronDown size={14} className="text-ink-2" />
        </button>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="tel"
          value={inputValue}
          onChange={handlePhoneValueChange}
          placeholder={placeholder || "Phone number (optional)"}
          className="w-full bg-transparent border-none outline-none text-sm px-4 py-3 placeholder:text-ink-2/40"
        />
      </div>

      {/* Country Dropdown */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 top-full mt-2 w-72 h-64 overflow-y-auto bg-white border border-line rounded-xl shadow-2xl z-50 p-2"
        >
          {defaultCountries.map((c) => {
            const countryData = parseCountry(c);
            return (
              <button
                key={countryData.iso2}
                type="button"
                className="w-full flex items-center gap-3 p-2 hover:bg-cream rounded-lg text-sm transition-colors"
                onClick={() => {
                  setCountry(countryData.iso2);
                  setIsDropdownOpen(false);
                }}
              >
                <FlagImage iso2={countryData.iso2} size={20} />
                <span className="flex-1 text-left text-ink-2">
                  {countryData.name}
                </span>
                <span className="text-ink-2/60 font-mono text-xs">
                  +{countryData.dialCode}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

interface PreQualifiedProps {
  locale?: string;
}

export default function PreQualified({ locale = "en" }: PreQualifiedProps) {
  const pathname = usePathname();
  const t = useTranslations("Home.PreQualified");

  // Initialize TanStack Form
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zipCode: "",
      estimatedCreditScore: "",
      loanType: "",
      objective: "",
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading(t("toast.submitting"));

      try {
        const response = await fetch(INBOUND_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: value.firstName,
            last_name: value.lastName,
            email: value.email,
            phone: value.phone,
            postal_code: value.zipCode,
            custom_credit_score: value.estimatedCreditScore,
            custom_loan_type: value.loanType,
            custom_notes: value.objective,
            locale: locale,
            source: "Website Pre-Qualified Form",
          }),
        });

        if (!response.ok) {
          throw new Error(`Webhook error: ${response.status}`);
        }

        toast.success(t("toast.success"), {
          id: toastId,
          duration: 5000,
        });

        // Fire GTM event for conversion tracking
        sendGTMEvent({
          event: "pre_qualified_lead_submitted",
          category: "conversion",
          label: "Pre-Qualified Form Submitted",
          currency: "USD",
          value: 1,
          loan_type: value.loanType,
          credit_score: value.estimatedCreditScore,
          form_name: "Pre-Qualified Form",
          page_path: pathname || "/",
          locale: locale,
        });

        form.reset();
      } catch (error) {
        console.error("Error submitting to webhook:", error);

        toast.error(t("toast.error"), {
          id: toastId,
          duration: 5000,
        });

        sendGTMEvent({
          event: "pre_qualified_form_error",
          category: "error",
          label: "Pre-Qualified Form Submission Failed",
          form_name: "Pre-Qualified Form",
          page_path: pathname || "/",
          locale: locale,
          error_message:
            error instanceof Error ? error.message : "Unknown Error",
        });
      }
    },
  });

  return (
    <section id="start" className="py-24 lg:py-32">
      <Toaster position="bottom-right" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          {/* Background Glow Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Copy */}
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.04] tracking-tight font-light text-primary-bg">
                {t("headline_start")}{" "}
                <em className="not-italic font-serif italic text-primary-bg">
                  {t("headline_italic")}
                </em>
              </h2>
              <p className="mt-6 text-lg text-primary-bg/75 max-w-xl leading-relaxed">
                {t("subheadline")}
              </p>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-5 relative z-10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
                className="bg-primary-bg text-ink rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-sm font-semibold mb-1">
                  {t("form_title")}
                </div>
                <div className="text-xs text-ink-2 mb-5">
                  {t("form_subtitle")}
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    {/* First Name Field */}
                    <form.Field
                      name="firstName"
                      validators={{
                        onChange: ({ value }) =>
                          !value ? t("fields.first_name_required") : undefined,
                      }}
                    >
                      {(field) => (
                        <div>
                          <input
                            type="text"
                            placeholder={t("fields.first_name_placeholder")}
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            onBlur={field.handleBlur}
                            className={`w-full px-4 py-3 bg-cream border ${
                              field.state.meta.errors.length
                                ? "border-red-500"
                                : "border-line"
                            } rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring`}
                          />
                          {field.state.meta.errors.length > 0 && (
                            <span className="text-red-500 text-[10px] mt-1 block">
                              {field.state.meta.errors[0]}
                            </span>
                          )}
                        </div>
                      )}
                    </form.Field>

                    {/* Last Name Field */}
                    <form.Field
                      name="lastName"
                      validators={{
                        onChange: ({ value }) =>
                          !value ? t("fields.last_name_required") : undefined,
                      }}
                    >
                      {(field) => (
                        <div>
                          <input
                            type="text"
                            placeholder={t("fields.last_name_placeholder")}
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            onBlur={field.handleBlur}
                            className={`w-full px-4 py-3 bg-cream border ${
                              field.state.meta.errors.length
                                ? "border-red-500"
                                : "border-line"
                            } rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring`}
                          />
                          {field.state.meta.errors.length > 0 && (
                            <span className="text-red-500 text-[10px] mt-1 block">
                              {field.state.meta.errors[0]}
                            </span>
                          )}
                        </div>
                      )}
                    </form.Field>
                  </div>

                  {/* Email Field */}
                  <form.Field
                    name="email"
                    validators={{
                      onChange: ({ value }) => {
                        if (!value) return t("fields.email_required");
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
                          return t("fields.email_invalid");
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <div>
                        <input
                          type="email"
                          placeholder={t("fields.email_placeholder")}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                          className={`w-full px-4 py-3 bg-cream border ${
                            field.state.meta.errors.length
                              ? "border-red-500"
                              : "border-line"
                          } rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring`}
                        />
                        {field.state.meta.errors.length > 0 && (
                          <span className="text-red-500 text-[10px] mt-1 block">
                            {field.state.meta.errors[0]}
                          </span>
                        )}
                      </div>
                    )}
                  </form.Field>

                  {/* Optional Phone Field */}
                  <form.Field name="phone">
                    {(field) => (
                      <div>
                        <TailwindPhoneInput
                          value={field.state.value}
                          onChange={(val: string) => field.handleChange(val)}
                          error={field.state.meta.errors.length > 0}
                          placeholder={t("fields.phone_placeholder")}
                          defaultCountry="us"
                        />
                      </div>
                    )}
                  </form.Field>

                  {/* ZIP Code Field */}
                  <form.Field
                    name="zipCode"
                    validators={{
                      onChange: ({ value }) => {
                        if (!value) return t("fields.zip_required");
                        if (!/^\d{5}(-\d{4})?$/.test(value))
                          return t("fields.zip_invalid");
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <div>
                        <input
                          type="text"
                          placeholder={t("fields.zip_placeholder")}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                          className={`w-full px-4 py-3 bg-cream border ${
                            field.state.meta.errors.length
                              ? "border-red-500"
                              : "border-line"
                          } rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring`}
                        />
                        {field.state.meta.errors.length > 0 && (
                          <span className="text-red-500 text-[10px] mt-1 block">
                            {field.state.meta.errors[0]}
                          </span>
                        )}
                      </div>
                    )}
                  </form.Field>

                  {/* Estimated Credit Score Field */}
                  <form.Field name="estimatedCreditScore">
                    {(field) => (
                      <div>
                        <select
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                          className={`w-full px-4 py-3 bg-cream border ${
                            field.state.meta.errors.length
                              ? "border-red-500"
                              : "border-line"
                          } rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors ${
                            field.state.value ? "text-ink" : "text-ink-2"
                          } focus-ring`}
                        >
                          <option value="" disabled>
                            {t("fields.credit_score_placeholder")}
                          </option>
                          <option value="760+">
                            {t("fields.credit_score_options.opt1")}
                          </option>
                          <option value="720–759">
                            {t("fields.credit_score_options.opt2")}
                          </option>
                          <option value="680–719">
                            {t("fields.credit_score_options.opt3")}
                          </option>
                          <option value="620–679">
                            {t("fields.credit_score_options.opt4")}
                          </option>
                          <option value="Below 620">
                            {t("fields.credit_score_options.opt5")}
                          </option>
                          <option value="Not Sure">
                            {t("fields.credit_score_options.opt6")}
                          </option>
                        </select>
                      </div>
                    )}
                  </form.Field>

                  {/* Loan Type Select Field */}
                  <form.Field
                    name="loanType"
                    validators={{
                      onChange: ({ value }) =>
                        !value ? t("fields.loan_purpose_required") : undefined,
                    }}
                  >
                    {(field) => (
                      <div>
                        <select
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                          className={`w-full px-4 py-3 bg-cream border ${
                            field.state.meta.errors.length
                              ? "border-red-500"
                              : "border-line"
                          } rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors ${
                            field.state.value ? "text-ink" : "text-ink-2"
                          } focus-ring`}
                        >
                          <option value="" disabled>
                            {t("fields.loan_purpose_placeholder")}
                          </option>
                          <option value="buy a home">
                            {t("fields.loan_purposes.buy")}
                          </option>
                          <option value="refinance my mortgage">
                            {t("fields.loan_purposes.refinance")}
                          </option>
                          <option value="cash-out refinance">
                            {t("fields.loan_purposes.cash_out")}
                          </option>
                          <option value="investment property">
                            {t("fields.loan_purposes.investment")}
                          </option>
                          <option value="just exploring rates">
                            {t("fields.loan_purposes.exploring")}
                          </option>
                        </select>
                        {field.state.meta.errors.length > 0 && (
                          <span className="text-red-500 text-[10px] mt-1 block">
                            {field.state.meta.errors[0]}
                          </span>
                        )}
                      </div>
                    )}
                  </form.Field>

                  {/* Objective Field with Label */}
                  <form.Field name="objective">
                    {(field) => (
                      <div>
                        <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-1.5">
                          {t("fields.goals_label")}
                        </label>
                        <input
                          type="text"
                          placeholder={t("fields.goals_placeholder")}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                          className="w-full px-4 py-3 bg-cream border border-line rounded-lg text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring placeholder:text-ink-2/40"
                        />
                      </div>
                    )}
                  </form.Field>
                </div>

                {/* Submit Button */}
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                >
                  {([canSubmit, isSubmitting]) => (
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="btn-shine mt-5 w-full bg-moss-deep text-primary-bg py-3.5 rounded-xl text-sm font-medium hover:bg-moss-darker transition-colors flex items-center justify-center gap-2 focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting
                        ? t("submitting_button")
                        : t("submit_button")}
                      {!isSubmitting && (
                        <ArrowRight size={14} strokeWidth={2} />
                      )}
                    </button>
                  )}
                </form.Subscribe>

                <div className="text-[10px] text-ink-2 text-center mt-3">
                  {t("security_note")}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
