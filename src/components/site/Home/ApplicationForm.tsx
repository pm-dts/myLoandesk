"use client";

import { ArrowRight } from "lucide-react";
import { useForm } from "@tanstack/react-form";
import { PhoneInput } from "react-international-phone";

import { useState, useRef, useEffect } from "react";
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";
import "react-international-phone/style.css";
import { ChevronDown } from "lucide-react";

export const TailwindPhoneInput = ({ value, onChange, error }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "us",
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
          placeholder="Phone number"
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

export default function PreQualified() {
  // Initialize TanStack Form
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zipCode: "",
      loanType: "",
    },
    onSubmit: async ({ value }) => {
      // Add your API submission logic here
      console.log("Application validated & submitted:", value);
      alert("Application started successfully!");
      form.reset();
    },
  });

  return (
    <section id="start" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          {/* Background Glow Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Copy */}
            <div className="lg:col-span-7">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A574] font-semibold mb-5">
                07 — Sit down at the desk
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.04] tracking-tight font-light text-primary-bg">
                Your mortgage,{" "}
                <em className="not-italic font-serif italic text-primary-bg">
                  handled.
                </em>
              </h2>
              <p className="mt-6 text-lg text-primary-bg/75 max-w-xl leading-relaxed">
                Five-minute application. A real broker on the line within one
                business day. No commitment, no hard credit pull, no call
                centers.
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
                  Get pre-qualified
                </div>
                <div className="text-xs text-ink-2 mb-5">
                  Takes about 5 minutes. Soft credit check only.
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    {/* First Name Field */}
                    <form.Field
                      name="firstName"
                      validators={{
                        onChange: ({ value }) =>
                          !value ? "First name is required" : undefined,
                      }}
                    >
                      {(field) => (
                        <div>
                          <input
                            type="text"
                            placeholder="First name"
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
                          !value ? "Last name is required" : undefined,
                      }}
                    >
                      {(field) => (
                        <div>
                          <input
                            type="text"
                            placeholder="Last name"
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
                        if (!value) return "Email is required";
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
                          return "Invalid email format";
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <div>
                        <input
                          type="email"
                          placeholder="Email address"
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

                  {/* International Phone Field */}
                  <form.Field
                    name="phone"
                    validators={{
                      onSubmit: ({ value }) =>
                        !value || value.length < 7
                          ? "Valid phone is required"
                          : undefined,
                    }}
                  >
                    {(field) => (
                      <div>
                        <TailwindPhoneInput
                          value={field.state.value}
                          onChange={(val: string) => field.handleChange(val)}
                          error={field.state.meta.errors.length > 0}
                        />
                        {field.state.meta.errors.length > 0 && (
                          <span className="text-red-500 text-[10px] mt-1 block">
                            {field.state.meta.errors[0]}
                          </span>
                        )}
                      </div>
                    )}
                  </form.Field>

                  {/* ZIP Code Field */}
                  <form.Field
                    name="zipCode"
                    validators={{
                      onChange: ({ value }) => {
                        if (!value) return "ZIP is required";
                        if (!/^\d{5}(-\d{4})?$/.test(value))
                          return "Invalid ZIP code";
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <div>
                        <input
                          type="text"
                          placeholder="ZIP code"
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

                  {/* Loan Type Select Field */}
                  <form.Field
                    name="loanType"
                    validators={{
                      onChange: ({ value }) =>
                        !value ? "Please select a loan type" : undefined,
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
                            What do you need?
                          </option>
                          <option value="buy">Buy a home</option>
                          <option value="refinance">
                            Refinance my mortgage
                          </option>
                          <option value="cash-out">Cash-out refinance</option>
                          <option value="investment">
                            Investment property
                          </option>
                          <option value="exploring">
                            Just exploring rates
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
                </div>

                {/* Submit Button mapping Form State */}
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                >
                  {([canSubmit, isSubmitting]) => (
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="btn-shine mt-5 w-full bg-moss-deep text-primary-bg py-3.5 rounded-xl text-sm font-medium hover:bg-moss-darker transition-colors flex items-center justify-center gap-2 focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Start my application"}
                      {!isSubmitting && (
                        <ArrowRight size={14} strokeWidth={2} />
                      )}
                    </button>
                  )}
                </form.Subscribe>

                <div className="text-[10px] text-ink-2 text-center mt-3">
                  By submitting, you agree to our terms. Soft credit pull only.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
