"use client";

import React, { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Check, ChevronDown, AlertCircle } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import toast, { Toaster } from "react-hot-toast";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const INBOUND_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/Lv5oqPcJ6MZsszgssznB/webhook-trigger/faae2351-70ff-4eda-a8d0-ddcfbf29d6ee";

interface GetQuoteFormProps {
  locale?: string;
}

export default function GetQuoteForm({ locale = "en" }: GetQuoteFormProps) {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("GetQuote");

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      loanType: "",
      price: "",
      important: "",
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading(t("toast.loading"));

      try {
        const nameParts = value.fullName.trim().split(" ");
        const firstName = nameParts[0] || "";
        const lastName =
          nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

        const response = await fetch(INBOUND_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: value.email,
            phone: value.phone,
            custom_loan_type: value.loanType,
            custom_price: value.price,
            custom_notes: value.important,
            locale,
            source: "Website Get Quote Form",
          }),
        });

        if (!response.ok) {
          throw new Error(`Webhook error: ${response.status}`);
        }

        toast.success(t("toast.success"), {
          id: toastId,
          duration: 3000,
        });

        sendGTMEvent({
          event: "get_quote_form_submitted",
          category: "conversion",
          label: "Get Quote Form Submitted",
          currency: "USD",
          value: 1,
          loan_type: value.loanType,
          form_name: "Get Quote Form",
          page_path:
            pathname || (locale === "es" ? "/es/get-quote" : "/get-quote"),
          locale,
        });

        setIsSuccessModalOpen(true);
        form.reset();
      } catch (error) {
        console.error("Error submitting to webhook:", error);

        toast.error(t("toast.error"), {
          id: toastId,
          duration: 5000,
        });

        sendGTMEvent({
          event: "get_quote_form_error",
          category: "error",
          label: "Get Quote Form Submission Failed",
          form_name: "Get Quote Form",
          page_path:
            pathname || (locale === "es" ? "/es/get-quote" : "/get-quote"),
          locale,
          error_message:
            error instanceof Error ? error.message : "Unknown Error",
        });
      }
    },
  });

  const formatCurrency = (val: string) => {
    const numeric = val.replace(/\D/g, "");
    if (!numeric) return "";
    return new Intl.NumberFormat(locale === "es" ? "es-US" : "en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(Number(numeric));
  };

  const featureList = t.raw("features") as string[];

  return (
    <>
      <Toaster position="bottom-right" />

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 backdrop-blur-sm p-4">
          <div className="bg-primary-bg rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl relative border border-line animate-in fade-in zoom-in duration-300">
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-ink mb-4 text-center">
              {t("modal.title")}
            </h3>
            <p className="text-ink-2 mb-4 text-center leading-relaxed">
              {t("modal.p1")}
            </p>
            <p className="text-ink-2 mb-8 text-center leading-relaxed">
              {t("modal.p2_prefix")}{" "}
              <a
                href="tel:3058916500"
                className="font-semibold text-brand-orange hover:underline"
              >
                {t("modal.p2_phone")}
              </a>
              .
            </p>
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full bg-brand-orange text-primary-bg py-3.5 px-6 rounded-full font-semibold hover:bg-orange-600 transition-colors focus-ring"
            >
              {t("modal.close_button")}
            </button>
          </div>
        </div>
      )}

      <div className="max-w-3xl w-full mx-auto bg-primary-bg rounded-[32px] p-8 sm:p-12 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-line">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-ink tracking-tight mb-4">
            {t("heading")}
          </h1>
          <p className="text-base sm:text-lg text-ink-2 leading-relaxed">
            {t("subheading")}
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-8 text-ink-2">
          {featureList.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <Check
                size={18}
                className="text-moss-deep mt-0.5 shrink-0"
                strokeWidth={2.5}
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <form.Field
              name="fullName"
              validators={{
                onChange: ({ value }) =>
                  !value ? t("form.full_name_required") : undefined,
              }}
            >
              {(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    {t("form.full_name_label")}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder={t("form.full_name_placeholder")}
                    className={`w-full px-5 h-12 bg-primary-bg border rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring ${
                      field.state.meta.errors.length
                        ? "border-brand-orange"
                        : "border-line"
                    }`}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-xs text-brand-orange mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {field.state.meta.errors.join(", ")}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* Email */}
            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) => {
                  if (!value) return t("form.email_required");
                  if (!/\S+@\S+\.\S+/.test(value))
                    return t("form.email_invalid");
                  return undefined;
                },
              }}
            >
              {(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    {t("form.email_label")}
                  </label>
                  <input
                    type="email"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder={t("form.email_placeholder")}
                    className={`w-full px-5 h-12 bg-primary-bg border rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring ${
                      field.state.meta.errors.length
                        ? "border-brand-orange"
                        : "border-line"
                    }`}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-xs text-brand-orange mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {field.state.meta.errors.join(", ")}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* Phone */}
            <form.Field name="phone">
              {(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    {t("form.phone_label")}
                  </label>
                  <div className="relative flex items-center w-full h-12 bg-primary-bg border border-line rounded-full focus-within:border-moss-deep transition-colors focus-ring">
                    <PhoneInput
                      defaultCountry="us"
                      value={field.state.value}
                      onChange={(phone) => field.handleChange(phone)}
                      inputClassName="!w-full !bg-transparent !border-none !text-ink !text-sm !h-[46px] !px-3 !focus:outline-none !focus:ring-0"
                      countrySelectorStyleProps={{
                        buttonClassName:
                          "!bg-transparent !border-none !pl-5 !pr-2 !h-[46px] !hover:bg-transparent",
                      }}
                      style={
                        {
                          width: "100%",
                          height: "100%",
                          "--react-international-phone-border-color":
                            "transparent",
                          "--react-international-phone-border-radius": "9999px",
                          "--react-international-phone-background":
                            "transparent",
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>
              )}
            </form.Field>

            {/* Loan Type */}
            <form.Field
              name="loanType"
              validators={{
                onChange: ({ value }) =>
                  !value ? t("form.loan_type_required") : undefined,
              }}
            >
              {(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    {t("form.loan_type_label")}
                  </label>
                  <div className="relative">
                    <select
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={`w-full px-5 h-12 bg-primary-bg border rounded-full text-sm text-ink appearance-none focus:outline-none focus:border-moss-deep transition-colors focus-ring cursor-pointer ${
                        field.state.meta.errors.length
                          ? "border-brand-orange"
                          : "border-line"
                      }`}
                    >
                      <option value="" disabled hidden>
                        {t("form.loan_type_select")}
                      </option>
                      <option value="purchase">
                        {t("form.loan_types.purchase")}
                      </option>
                      <option value="refinance">
                        {t("form.loan_types.refinance")}
                      </option>
                      <option value="cash-out">
                        {t("form.loan_types.cash_out")}
                      </option>
                      <option value="investment">
                        {t("form.loan_types.investment")}
                      </option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-ink-2 pointer-events-none"
                    />
                  </div>
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-xs text-brand-orange mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {field.state.meta.errors.join(", ")}
                    </p>
                  )}
                </div>
              )}
            </form.Field>
          </div>

          {/* Dynamic Price Field */}
          <form.Subscribe selector={(state) => state.values.loanType}>
            {(loanType) => {
              let priceLabel = t("form.price_labels.default");
              if (loanType === "purchase")
                priceLabel = t("form.price_labels.purchase");
              if (loanType === "refinance" || loanType === "cash-out")
                priceLabel = t("form.price_labels.refinance");

              return (
                <form.Field name="price">
                  {(field) => (
                    <div>
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-ink mb-2"
                      >
                        {priceLabel} {t("form.price_labels.optional_suffix")}
                      </label>
                      <input
                        type="text"
                        id={field.name}
                        name={field.name}
                        placeholder={t("form.price_placeholder")}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => {
                          const formatted = formatCurrency(e.target.value);
                          field.handleChange(formatted);
                        }}
                        className="w-full px-5 h-12 bg-primary-bg border border-line rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                      />
                    </div>
                  )}
                </form.Field>
              );
            }}
          </form.Subscribe>

          {/* Important Notes Field */}
          <form.Field name="important">
            {(field) => (
              <div>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-ink mb-2"
                >
                  {t("form.notes_label")}
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={5}
                  placeholder={t("form.notes_placeholder")}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-full px-5 py-3 bg-primary-bg border border-line rounded-[24px] text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring resize-none placeholder:text-ink/40"
                ></textarea>
              </div>
            )}
          </form.Field>

          {/* Submit Button */}
          <div className="pt-2">
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <button
                  type="submit"
                  disabled={!canSubmit || isSubmitting}
                  className="btn-shine w-full sm:w-auto min-w-[240px] mx-auto block bg-brand-orange text-primary-bg py-4 px-8 rounded-full text-base font-semibold hover:bg-brand-orange/90 transition-colors focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? t("form.submitting_button")
                    : t("form.submit_button")}
                </button>
              )}
            </form.Subscribe>
            <p className="text-xs text-ink-2 mt-4 text-center">
              {t("form.disclaimer")}
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
