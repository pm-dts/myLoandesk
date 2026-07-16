"use client";

import React from "react";
import { useForm } from "@tanstack/react-form";
import { Check, ChevronDown, AlertCircle } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

// 1. Explicitly define the form types to resolve all TS errors
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  loanType: string;
  price: string;
  important: string;
}

export default function GetQuote() {
  // 2. Initialize TanStack Form with typed default values
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      loanType: "",
      price: "",
      important: "",
    },
    onSubmit: async ({ value }) => {
      // Handle formal submission
      console.log("Form submitted successfully:", value);
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
    <main className="min-h-screen bg-cream py-24 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto bg-primary-bg rounded-[32px] p-8 sm:p-12 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-line">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-ink tracking-tight mb-4">
            Get your custom mortgage quote.
          </h1>
          <p className="text-base sm:text-lg text-ink-2 leading-relaxed">
            Fast, simple, and built for real-world scenarios — even when the
            loan is not straightforward.
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-10 text-ink-2">
          <div className="flex items-start gap-2.5">
            <Check
              size={18}
              className="text-moss-deep mt-0.5 shrink-0"
              strokeWidth={2.5}
            />
            <span>
              Works for self-employed, foreign national, ITIN, and investor
              loans
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
            <span>Quick follow-up from a MyLoanDesk specialist</span>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <form.Field
              name="firstName"
              validators={{
                onChange: ({ value }) =>
                  !value ? "First name is required" : undefined,
              }}
              children={(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    First name *
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={`w-full px-5 py-3.5 bg-primary-bg border rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring ${
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
              name="lastName"
              validators={{
                onChange: ({ value }) =>
                  !value ? "Last name is required" : undefined,
              }}
              children={(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Last name *
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={`w-full px-5 py-3.5 bg-primary-bg border rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring ${
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
                    className={`w-full px-5 py-3.5 bg-primary-bg border rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring ${
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

            {/* Integrated react-international-phone */}
            <form.Field
              name="phone"
              validators={{
                onChange: ({ value }) =>
                  !value || value.length < 8
                    ? "Valid phone number is required"
                    : undefined,
              }}
              children={(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Phone *
                  </label>
                  <div
                    className={`relative flex items-center w-full bg-primary-bg border rounded-full focus-within:border-moss-deep transition-colors focus-ring ${
                      field.state.meta.errors.length
                        ? "border-brand-orange"
                        : "border-line"
                    }`}
                  >
                    <PhoneInput
                      defaultCountry="us"
                      value={field.state.value}
                      onChange={(phone) => field.handleChange(phone)}
                      // Utilize the library's class props to remove default padding/borders
                      inputClassName="!w-full !bg-transparent !border-none !text-ink !text-sm !py-3.5 !px-3 !focus:outline-none !focus:ring-0"
                      countrySelectorStyleProps={{
                        buttonClassName:
                          "!bg-transparent !border-none !pl-5 !pr-2 !py-3.5 !hover:bg-transparent",
                      }}
                      // Override internal CSS variables to perfectly match our custom container
                      style={
                        {
                          width: "100%",
                          "--react-international-phone-border-color":
                            "transparent",
                          "--react-international-phone-border-radius": "9999px",
                          "--react-international-phone-background":
                            "transparent",
                        } as React.CSSProperties
                      }
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
                      className={`w-full px-5 py-3.5 bg-primary-bg border rounded-full text-sm text-ink appearance-none focus:outline-none focus:border-moss-deep transition-colors focus-ring cursor-pointer ${
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

            <form.Field
              name="price"
              children={(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-ink mb-2"
                  >
                    Price/Value (optional)
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
                    className="w-full px-5 py-3.5 bg-primary-bg border border-line rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                  />
                </div>
              )}
            />
          </div>

          <form.Field
            name="important"
            children={(field) => (
              <div>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-ink mb-2"
                >
                  Tell us anything important (self-employed, foreign income,
                  declined before, etc.)
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={4}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-full px-5 py-4 bg-primary-bg border border-line rounded-[24px] text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring resize-none"
                ></textarea>
              </div>
            )}
          />

          <div className="pt-2">
            <p className="text-sm text-ink-2 mb-6 text-center sm:text-left">
              No obligation. No credit pull required to start.
            </p>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <button
                  type="submit"
                  disabled={!canSubmit || isSubmitting}
                  className="btn-shine w-full sm:w-auto min-w-[240px] mx-auto block bg-brand-orange text-primary-bg py-4 px-8 rounded-full text-base font-semibold hover:bg-brand-orange/90 transition-colors focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Get My Quote"}
                </button>
              )}
            />
          </div>
        </form>
      </div>
    </main>
  );
}
