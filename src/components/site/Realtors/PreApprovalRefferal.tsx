"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "@tanstack/react-form";
import toast from "react-hot-toast";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";
import "react-international-phone/style.css";
import { ChevronDown } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const REFERRAL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/Lv5oqPcJ6MZsszgssznB/webhook-trigger/14048627-1ba4-4c85-8a57-fc99e211650a";

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
  placeholder = "Phone number",
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
        className={`flex w-full bg-cream/10 border ${
          error ? "border-brand-orange" : "border-line"
        } rounded-xl focus-within:border-moss-deep focus-within:ring-1 focus-within:ring-moss-deep transition-colors overflow-hidden`}
      >
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1 px-3 border-r border-line bg-cream/20 hover:bg-cream/40 transition-colors"
        >
          <FlagImage iso2={country.iso2} size={20} />
          <ChevronDown size={14} className="text-ink-2" />
        </button>

        <input
          ref={inputRef}
          type="tel"
          value={inputValue}
          onChange={handlePhoneValueChange}
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none text-sm px-4 py-3 text-ink placeholder:text-ink-2/40"
        />
      </div>

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

interface ReferralFormSectionProps {
  locale?: string;
}

export default function ReferralFormSection({
  locale = "en",
}: ReferralFormSectionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Realtors.ReferralForm");

  const form = useForm({
    defaultValues: {
      realtorName: "",
      realtorPhone: "",
      realtorEmail: "",
      borrowerName: "",
      borrowerEmail: "",
      borrowerPhone: "",
      details: "",
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading(t("toasts.loading"));

      try {
        const response = await fetch(REFERRAL_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            form_type: "Client Referral",
            realtor_name: value.realtorName,
            realtor_phone: value.realtorPhone,
            realtor_email: value.realtorEmail,
            borrower_name: value.borrowerName,
            borrower_email: value.borrowerEmail,
            borrower_phone: value.borrowerPhone,
            custom_notes: value.details,
            locale,
            source: "Website Realtor Referral Form",
          }),
        });

        if (!response.ok) {
          throw new Error(`Webhook error: ${response.status}`);
        }

        toast.success(t("toasts.success"), {
          id: toastId,
          duration: 5000,
        });

        sendGTMEvent({
          event: "referral_lead_submitted",
          category: "conversion",
          label: "Referral Form Submitted",
          currency: "USD",
          value: 1,
          form_name: "Referral Form",
          page_path:
            pathname || (locale === "es" ? "/es/realtors" : "/realtors"),
          locale,
        });

        setIsSubmitted(true);
        form.reset();
      } catch (error) {
        console.error("Error submitting referral:", error);
        toast.error(t("toasts.error"), {
          id: toastId,
          duration: 5000,
        });

        sendGTMEvent({
          event: "referral_form_error",
          category: "error",
          label: "Referral Form Submission Failed",
          form_name: "Referral Form",
          page_path:
            pathname || (locale === "es" ? "/es/realtors" : "/realtors"),
          locale,
          error_message:
            error instanceof Error ? error.message : "Unknown Error",
        });
      }
    },
  });

  return (
    <section
      id="referral-form"
      className="py-24 lg:py-32 bg-cream/20 border-t border-line scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A574] font-semibold mb-4">
            {t("badge")}
          </div>
          <h2
            className={cn(
              "text-3xl lg:text-4xl text-ink font-light",
              fraunces.className,
            )}
          >
            {t("heading")}
          </h2>
          <p className="text-sm text-ink-2 mt-2">{t("subheading")}</p>
          <p className="text-xs text-ink-2/80 italic mt-1">
            {t("instruction")}
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-moss-deep/5 border border-moss-deep/20 text-moss-deep p-6 rounded-2xl text-center animate-in fade-in zoom-in duration-300">
            <h3 className="font-semibold text-lg mb-1">{t("success_title")}</h3>
            <p className="text-sm text-ink-2">{t("success_desc")}</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-xs font-semibold underline text-moss-deep hover:text-moss-darker"
            >
              {t("submit_another")}
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-6 bg-primary-bg p-8 rounded-3xl border border-line shadow-sm animate-in fade-in duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Realtor Name */}
              <form.Field
                name="realtorName"
                validators={{
                  onChange: ({ value }) =>
                    !value ? t("fields.realtor_name_required") : undefined,
                }}
              >
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      {t("fields.realtor_name_label")}
                    </label>
                    <input
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep transition ${
                        field.state.meta.errors.length
                          ? "border-brand-orange"
                          : "border-line"
                      }`}
                    />
                    {field.state.meta.errors.length > 0 && (
                      <span className="text-brand-orange text-[10px] mt-1 block">
                        {field.state.meta.errors[0]}
                      </span>
                    )}
                  </div>
                )}
              </form.Field>

              {/* Realtor Phone */}
              <form.Field name="realtorPhone">
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      {t("fields.realtor_phone_label")}
                    </label>
                    <TailwindPhoneInput
                      value={field.state.value}
                      onChange={(val: string) => field.handleChange(val)}
                      error={field.state.meta.errors.length > 0}
                      placeholder={t("fields.realtor_phone_placeholder")}
                      defaultCountry="us"
                    />
                  </div>
                )}
              </form.Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Realtor Email */}
              <form.Field
                name="realtorEmail"
                validators={{
                  onChange: ({ value }) =>
                    !value || !/\S+@\S+\.\S+/.test(value)
                      ? t("fields.realtor_email_required")
                      : undefined,
                }}
              >
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      {t("fields.realtor_email_label")}
                    </label>
                    <input
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep transition ${
                        field.state.meta.errors.length
                          ? "border-brand-orange"
                          : "border-line"
                      }`}
                    />
                    {field.state.meta.errors.length > 0 && (
                      <span className="text-brand-orange text-[10px] mt-1 block">
                        {field.state.meta.errors[0]}
                      </span>
                    )}
                  </div>
                )}
              </form.Field>

              {/* Borrower Name */}
              <form.Field
                name="borrowerName"
                validators={{
                  onChange: ({ value }) =>
                    !value ? t("fields.borrower_name_required") : undefined,
                }}
              >
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      {t("fields.borrower_name_label")}
                    </label>
                    <input
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep transition ${
                        field.state.meta.errors.length
                          ? "border-brand-orange"
                          : "border-line"
                      }`}
                    />
                    {field.state.meta.errors.length > 0 && (
                      <span className="text-brand-orange text-[10px] mt-1 block">
                        {field.state.meta.errors[0]}
                      </span>
                    )}
                  </div>
                )}
              </form.Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Borrower Email */}
              <form.Field
                name="borrowerEmail"
                validators={{
                  onChange: ({ value }) =>
                    !value || !/\S+@\S+\.\S+/.test(value)
                      ? t("fields.borrower_email_required")
                      : undefined,
                }}
              >
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      {t("fields.borrower_email_label")}
                    </label>
                    <input
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep transition ${
                        field.state.meta.errors.length
                          ? "border-brand-orange"
                          : "border-line"
                      }`}
                    />
                    {field.state.meta.errors.length > 0 && (
                      <span className="text-brand-orange text-[10px] mt-1 block">
                        {field.state.meta.errors[0]}
                      </span>
                    )}
                  </div>
                )}
              </form.Field>

              {/* Borrower Phone */}
              <form.Field name="borrowerPhone">
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      {t("fields.borrower_phone_label")}
                    </label>
                    <TailwindPhoneInput
                      value={field.state.value}
                      onChange={(val: string) => field.handleChange(val)}
                      error={field.state.meta.errors.length > 0}
                      placeholder={t("fields.borrower_phone_placeholder")}
                      defaultCountry="us"
                    />
                  </div>
                )}
              </form.Field>
            </div>

            {/* Details */}
            <form.Field name="details">
              {(field) => (
                <div>
                  <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                    {t("fields.details_label")}
                  </label>
                  <textarea
                    rows={4}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep transition resize-none"
                  ></textarea>
                </div>
              )}
            </form.Field>

            {/* Submit Button */}
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <button
                  type="submit"
                  disabled={!canSubmit || isSubmitting}
                  className="w-full bg-moss-deep text-primary-bg font-medium py-3.5 rounded-full hover:bg-opacity-90 transition focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t("submitting_button") : t("submit_button")}
                </button>
              )}
            </form.Subscribe>
          </form>
        )}
      </div>
    </section>
  );
}
