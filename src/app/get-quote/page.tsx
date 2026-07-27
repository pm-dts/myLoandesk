"use client";

import React, { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Check, ChevronDown, AlertCircle } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import toast, { Toaster } from "react-hot-toast";

const INBOUND_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/Lv5oqPcJ6MZsszgssznB/webhook-trigger/faae2351-70ff-4eda-a8d0-ddcfbf29d6ee";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  loanType: string;
  price: string;
  important: string;
}

export default function GetQuote() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

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
      const toastId = toast.loading("Submitting your request...");

      try {
        // Split full name back into first and last name for GHL compatibility
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
            source: "Website Get Quote Form",
          }),
        });

        if (!response.ok) {
          throw new Error(`Webhook error: ${response.status}`);
        }

        console.log("Quote request successfully submitted to GHL:", value);

        toast.success("Request submitted successfully.", {
          id: toastId,
          duration: 3000,
        });

        setIsSuccessModalOpen(true);
        form.reset();
      } catch (error) {
        console.error("Error submitting to webhook:", error);

        toast.error(
          "There was an issue submitting your request. Please try again.",
          {
            id: toastId,
            duration: 5000,
          },
        );
      }
    },
  });

  const formatCurrency = (val: string) => {
    const numeric = val.replace(/\D/g, "");
    if (!numeric) return "";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(Number(numeric));
  };

  return (
    <main className="min-h-screen bg-cream py-24 px-6 flex items-center justify-center relative">
      <Toaster position="bottom-right" />

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 backdrop-blur-sm p-4">
          <div className="bg-primary-bg rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl relative border border-line animate-in fade-in zoom-in duration-300">
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-ink mb-4 text-center">
              Thank You!
            </h3>
            <p className="text-ink-2 mb-4 text-center leading-relaxed">
              Thank you for your inquiry. A MyLoanDesk loan specialist will
              contact you shortly.
            </p>
            <p className="text-ink-2 mb-8 text-center leading-relaxed">
              If you need immediate assistance, you can also call or text us at{" "}
              <a
                href="tel:3058916500"
                className="font-semibold text-brand-orange hover:underline"
              >
                (305) 891-6500
              </a>
              .
            </p>
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full bg-brand-orange text-primary-bg py-3.5 px-6 rounded-full font-semibold hover:bg-orange-600 transition-colors focus-ring"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-3xl w-full mx-auto bg-primary-bg rounded-[32px] p-8 sm:p-12 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-line">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-ink tracking-tight mb-4">
            Let's Find the Right Mortgage Option.
          </h1>
          <p className="text-base sm:text-lg text-ink-2 leading-relaxed">
            Complete this short form and a MyLoanDesk mortgage specialist will
            personally review your goals and contact you with the best available
            options.
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-8 text-ink-2">
          <div className="flex items-start gap-2.5">
            <Check
              size={18}
              className="text-moss-deep mt-0.5 shrink-0"
              strokeWidth={2.5}
            />
            <span>
              Purchase, Refinance, Investment & Specialty Loan Programs
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <Check
              size={18}
              className="text-moss-deep mt-0.5 shrink-0"
              strokeWidth={2.5}
            />
            <span>No credit pull to get started</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Check
              size={18}
              className="text-moss-deep mt-0.5 shrink-0"
              strokeWidth={2.5}
            />
            <span>
              Personal follow-up from a MyLoan Desk mortgage specialist
            </span>
          </div>
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
            <form.Field
              name="fullName"
              validators={{
                onChange: ({ value }) =>
                  !value ? "Full name is required" : undefined,
              }}
              children={(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="John Doe"
                    className={`w-full px-5 h-12 bg-primary-bg border rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring ${
                      field.state.meta.errors.length
                        ? "border-brand-orange"
                        : "border-line"
                    }`}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-xs text-brand-orange mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} />{" "}
                      {field.state.meta.errors.join(", ")}
                    </p>
                  )}
                </div>
              )}
            />

            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) => {
                  if (!value) return "Email is required";
                  if (!/\S+@\S+\.\S+/.test(value))
                    return "Invalid email address";
                  return undefined;
                },
              }}
              children={(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="you@example.com"
                    className={`w-full px-5 h-12 bg-primary-bg border rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring ${
                      field.state.meta.errors.length
                        ? "border-brand-orange"
                        : "border-line"
                    }`}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-xs text-brand-orange mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} />{" "}
                      {field.state.meta.errors.join(", ")}
                    </p>
                  )}
                </div>
              )}
            />

            {/* Optional Phone Field */}
            <form.Field
              name="phone"
              children={(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Phone (optional)
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
            />

            <form.Field
              name="loanType"
              validators={{
                onChange: ({ value }) =>
                  !value ? "Please select a loan type" : undefined,
              }}
              children={(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Loan Type *
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
                        Select option
                      </option>
                      <option value="purchase">Purchase</option>
                      <option value="refinance">Refinance</option>
                      <option value="cash-out">Cash-out Refinance</option>
                      <option value="investment">Investment Property</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-ink-2 pointer-events-none"
                    />
                  </div>
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-xs text-brand-orange mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} />{" "}
                      {field.state.meta.errors.join(", ")}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <form.Subscribe
            selector={(state) => state.values.loanType}
            children={(loanType) => {
              // Dynamically set label based on loan type
              let priceLabel = "Purchase Price or Estimated Property Value";
              if (loanType === "purchase") priceLabel = "Purchase Price";
              if (loanType === "refinance" || loanType === "cash-out")
                priceLabel = "Estimated Property Value";

              return (
                <form.Field
                  name="price"
                  children={(field) => (
                    <div>
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-ink mb-2"
                      >
                        {priceLabel} (optional)
                      </label>
                      <input
                        type="text"
                        id={field.name}
                        name={field.name}
                        placeholder="$0"
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
                />
              );
            }}
          />

          <form.Field
            name="important"
            children={(field) => (
              <div>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-ink mb-2"
                >
                  Complete this short form and a MyLoanDesk specialist will
                  contact you with your best financing options..
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={5}
                  placeholder="Self-employed, investment property, foreign income, previous credit challenges, or any other details that may help us better understand your situation."
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-full px-5 py-3 bg-primary-bg border border-line rounded-[24px] text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring resize-none placeholder:text-ink/40"
                ></textarea>
              </div>
            )}
          />

          <div className="pt-2">
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <button
                  type="submit"
                  disabled={!canSubmit || isSubmitting}
                  className="btn-shine w-full sm:w-auto min-w-[240px] mx-auto block bg-brand-orange text-primary-bg py-4 px-8 rounded-full text-base font-semibold hover:bg-brand-orange/90 transition-colors focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Get My Loan Options"}
                </button>
              )}
            />
            <p className="text-xs text-ink-2 mt-4 text-center">
              Your information is secure, confidential, and never shared. No
              obligation and no credit pull to get started.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
