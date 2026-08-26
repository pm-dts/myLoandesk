"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "@tanstack/react-form";
import {
  MapPin,
  Mail,
  Percent,
  X,
  User,
  DollarSign,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
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

const DUMMY_GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/Lv5oqPcJ6MZsszgssznB/webhook-trigger/f80b575c-8a88-4baa-b7c3-4c04f086e090";

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
        className={`flex w-full bg-white border ${
          error ? "border-brand-orange" : "border-gray-200"
        } rounded-xl focus-within:border-brand-orange transition-colors overflow-hidden`}
      >
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1 px-3 border-r border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors text-black"
        >
          <FlagImage iso2={country.iso2} size={20} />
          <ChevronDown size={14} className="text-gray-500" />
        </button>

        <input
          ref={inputRef}
          type="tel"
          value={inputValue}
          onChange={handlePhoneValueChange}
          placeholder={placeholder || "Phone number (optional)"}
          className="w-full bg-transparent border-none outline-none text-black text-sm md:text-base px-4 py-3.5 placeholder:text-gray-400"
        />
      </div>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 top-full mt-2 w-72 h-64 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-2xl z-50 p-2 text-black"
        >
          {defaultCountries.map((c) => {
            const countryData = parseCountry(c);
            return (
              <button
                key={countryData.iso2}
                type="button"
                className="w-full flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg text-sm transition-colors text-black"
                onClick={() => {
                  setCountry(countryData.iso2);
                  setIsDropdownOpen(false);
                }}
              >
                <FlagImage iso2={countryData.iso2} size={20} />
                <span className="flex-1 text-left text-gray-800">
                  {countryData.name}
                </span>
                <span className="text-gray-400 font-mono text-xs">
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

interface RateAlertProps {
  locale?: string;
}

export default function RateAlert({ locale = "en" }: RateAlertProps) {
  const [address, setAddress] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = useTranslations("Home.RateAlert");
  const pathname = usePathname();

  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDialogOpen]);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      currentRate: "",
      currentBalance: "",
      goals: "",
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading(t("modal.toast_loading"));

      try {
        const response = await fetch(DUMMY_GHL_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            form_type: "Rate Alert & Property Monitor",
            property_address: address,
            name: value.name,
            email: value.email,
            phone: value.phone,
            current_interest_rate: value.currentRate,
            current_mortgage_balance: value.currentBalance,
            custom_goals: value.goals,
            locale: locale,
            source: "Website Rate Alert Modal",
          }),
        });

        if (!response.ok) {
          throw new Error(`Webhook error: ${response.status}`);
        }

        toast.success(t("modal.toast_success"), {
          id: toastId,
          duration: 4000,
        });

        sendGTMEvent({
          event: "home_valuation_lead_submitted",
          category: "conversion",
          label: "Rate Alert & Home Valuation Submitted",
          currency: "USD",
          value: 1,
          form_name: "Rate Alert & Property Monitor Form",
          page_path: pathname || "/",
          locale: locale,
        });

        setIsSubmitted(true);
      } catch (error) {
        console.error("Error submitting to webhook:", error);

        toast.error(t("modal.toast_error"), {
          id: toastId,
          duration: 5000,
        });

        sendGTMEvent({
          event: "home_valuation_form_error",
          category: "error",
          label: "Rate Alert & Property Monitor Submission Failed",
          form_name: "Rate Alert & Property Monitor Form",
          page_path: pathname || "/",
          locale: locale,
          error_message:
            error instanceof Error ? error.message : "Unknown Error",
        });
      }
    },
  });

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      sendGTMEvent({
        event: "home_valuation_address_entered",
        category: "engagement",
        label: "Address Entered for Home Valuation",
        page_path: pathname || "/",
        locale: locale,
      });

      setIsSubmitted(false);
      setIsDialogOpen(true);
    }
  };

  const closeDialog = () => {
    sendGTMEvent({
      event: "home_valuation_modal_closed",
      category: "engagement",
      label: "Home Valuation Modal Closed",
      page_path: pathname || "/",
      locale: locale,
    });

    setIsDialogOpen(false);
  };

  const formatCurrency = (val: string) => {
    const numeric = val.replace(/\D/g, "");
    if (!numeric) return "";
    return new Intl.NumberFormat(locale === "es" ? "es-US" : "en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(Number(numeric));
  };

  return (
    <>
      <Toaster position="bottom-right" />

      {/* --- INITIAL ADDRESS SECTION --- */}
      <section className="bg-[#F8F9FA] py-20 px-6 min-h-[500px] flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">
          <div className="w-full max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-wide leading-[1.2] mb-4">
              {t("title")}
            </h2>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mb-12">
              {t("subtitle")}
            </p>

            <h3 className="text-lg md:text-xl font-bold text-black mb-6">
              {t("section_callout")}
            </h3>

            <form
              onSubmit={handleAddressSubmit}
              className="w-full flex flex-col items-center gap-6"
            >
              <div className="relative w-full">
                <MapPin
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={t("address_placeholder")}
                  className="w-full pl-12 pr-5 py-4 bg-white border border-gray-200 rounded-xl text-black text-sm md:text-base focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all shadow-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-brand-orange text-white px-8 py-3.5 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-sm"
              >
                {t("cta_button")}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- MODAL DIALOG --- */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeDialog}
        >
          <div
            className="relative w-full max-w-2xl bg-white text-black rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto animate-in zoom-in-95 duration-300 p-6 sm:p-10 border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-full transition-colors"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mb-6">
                  <Percent size={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                  {t("modal.success_title")}
                </h3>
                <p className="text-sm text-gray-600 max-w-md leading-relaxed mb-6">
                  {t("modal.success_message_part1")}{" "}
                  <span className="font-semibold text-black">{address}</span>.
                  <br />
                  {t("modal.success_message_part2")}
                </p>
                <button
                  onClick={closeDialog}
                  className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-sm"
                >
                  {t("modal.done_button")}
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-brand-orange font-bold">
                    {t("modal.property_address_label")}
                  </span>
                  <h3 className="text-lg font-semibold text-black line-clamp-1">
                    {address}
                  </h3>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <form.Field
                      name="name"
                      validators={{
                        onChange: ({ value }) =>
                          !value ? t("modal.name_required") : undefined,
                      }}
                    >
                      {(field) => (
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                            {t("modal.name_label")}
                          </label>
                          <div className="relative">
                            <User
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              type="text"
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              placeholder={t("modal.name_placeholder")}
                              className={`w-full pl-12 pr-4 py-3.5 bg-white border ${
                                field.state.meta.errors.length
                                  ? "border-brand-orange"
                                  : "border-gray-200"
                              } rounded-xl text-black text-sm focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-400`}
                            />
                          </div>
                          {field.state.meta.errors.length > 0 && (
                            <span className="text-brand-orange text-[10px] mt-1 block">
                              {field.state.meta.errors[0]}
                            </span>
                          )}
                        </div>
                      )}
                    </form.Field>

                    {/* Email */}
                    <form.Field
                      name="email"
                      validators={{
                        onChange: ({ value }) => {
                          if (!value) return t("modal.email_required");
                          if (!/\S+@\S+\.\S+/.test(value))
                            return t("modal.email_invalid");
                          return undefined;
                        },
                      }}
                    >
                      {(field) => (
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                            {t("modal.email_label")}
                          </label>
                          <div className="relative">
                            <Mail
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              type="email"
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              placeholder={t("modal.email_placeholder")}
                              className={`w-full pl-12 pr-4 py-3.5 bg-white border ${
                                field.state.meta.errors.length
                                  ? "border-brand-orange"
                                  : "border-gray-200"
                              } rounded-xl text-black text-sm focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-400`}
                            />
                          </div>
                          {field.state.meta.errors.length > 0 && (
                            <span className="text-brand-orange text-[10px] mt-1 block">
                              {field.state.meta.errors[0]}
                            </span>
                          )}
                        </div>
                      )}
                    </form.Field>
                  </div>

                  {/* Optional Phone Input */}
                  <form.Field name="phone">
                    {(field) => (
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                          {t("modal.phone_label")}
                        </label>
                        <TailwindPhoneInput
                          value={field.state.value}
                          onChange={(val: string) => field.handleChange(val)}
                          error={field.state.meta.errors.length > 0}
                          placeholder={t("modal.phone_placeholder")}
                          defaultCountry="us"
                        />
                      </div>
                    )}
                  </form.Field>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Current Interest Rate */}
                    <form.Field name="currentRate">
                      {(field) => (
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                            {t("modal.rate_label")}
                          </label>
                          <div className="relative">
                            <Percent
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                              size={16}
                            />
                            <input
                              type="number"
                              step="0.125"
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              placeholder={t("modal.rate_placeholder")}
                              className="w-full pl-4 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl text-black text-sm focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-400"
                            />
                          </div>
                        </div>
                      )}
                    </form.Field>

                    {/* Current Mortgage Balance */}
                    <form.Field name="currentBalance">
                      {(field) => (
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                            {t("modal.balance_label")}
                          </label>
                          <div className="relative">
                            <DollarSign
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              type="text"
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) => {
                                const formatted = formatCurrency(
                                  e.target.value,
                                );
                                field.handleChange(formatted);
                              }}
                              placeholder={t("modal.balance_placeholder")}
                              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-black text-sm focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-400"
                            />
                          </div>
                        </div>
                      )}
                    </form.Field>
                  </div>

                  {/* Tell Us Your Goals */}
                  <form.Field name="goals">
                    {(field) => (
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1">
                          <HelpCircle size={14} /> {t("modal.goals_label")}
                        </label>
                        <textarea
                          rows={3}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder={t("modal.goals_placeholder")}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-black text-sm focus:outline-none focus:border-brand-orange transition-colors resize-none placeholder:text-gray-400"
                        ></textarea>
                      </div>
                    )}
                  </form.Field>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <form.Subscribe
                      selector={(state) => [
                        state.canSubmit,
                        state.isSubmitting,
                      ]}
                    >
                      {([canSubmit, isSubmitting]) => (
                        <button
                          type="submit"
                          disabled={!canSubmit || isSubmitting}
                          className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold text-base hover:bg-orange-600 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting
                            ? t("modal.submit_loading")
                            : t("modal.submit_button")}
                        </button>
                      )}
                    </form.Subscribe>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
