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

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const INBOUND_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/Lv5oqPcJ6MZsszgssznB/webhook-trigger/e040d77c-6870-485c-89ec-43782e8ae719";

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
          placeholder="Phone number"
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

export default function PartnerFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const pathname = usePathname();

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Submitting your partnership request...");

      try {
        const response = await fetch(INBOUND_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            form_type: "Realtor Partnership",
            first_name: value.firstName,
            last_name: value.lastName,
            email: value.email,
            phone: value.phone,
            custom_notes: value.message,
            source: "Website Partner Form",
          }),
        });

        if (!response.ok) {
          throw new Error(`Webhook error: ${response.status}`);
        }

        toast.success("Request received! We will be in touch shortly.", {
          id: toastId,
          duration: 5000,
        });

        // Fire unique GTM event for Partner Form Success
        sendGTMEvent({
          event: "partner_form_lead_submitted",
          category: "conversion",
          label: "Partner Form Submitted",
          currency: "USD",
          value: 1,
          form_name: "Partner Form",
          page_path: pathname || "/partner",
        });

        setIsSubmitted(true);
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

        // Fire unique GTM Error event for Partner Form Failure
        sendGTMEvent({
          event: "partner_form_error",
          category: "error",
          label: "Partner Form Submission Failed",
          form_name: "Partner Form",
          page_path: pathname || "/partner",
          error_message:
            error instanceof Error ? error.message : "Unknown Error",
        });
      }
    },
  });

  return (
    <section
      id="partner-form"
      className="py-24 lg:py-32 bg-primary-bg scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-4">
            Join Our Network
          </div>
          <h2
            className={cn(
              "text-3xl lg:text-4xl text-ink font-light",
              fraunces.className,
            )}
          >
            Let's Work Together!
          </h2>
          <p className="text-sm text-ink-2 mt-2">
            Please complete the form below, and we will be in touch.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-moss-deep/5 border border-moss-deep/20 text-moss-deep p-6 rounded-2xl text-center animate-in fade-in zoom-in duration-300">
            <h3 className="font-semibold text-lg mb-1">
              Thank you for reaching out!
            </h3>
            <p className="text-sm text-ink-2">
              We've received your form and will be in touch shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-xs font-semibold underline text-moss-deep hover:text-moss-darker"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-6 animate-in fade-in duration-300"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <form.Field
                name="firstName"
                validators={{
                  onChange: ({ value }) =>
                    !value ? "First name is required" : undefined,
                }}
              >
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={`w-full border bg-cream/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep focus:ring-1 focus:ring-moss-deep transition ${
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

              <form.Field
                name="lastName"
                validators={{
                  onChange: ({ value }) =>
                    !value ? "Last name is required" : undefined,
                }}
              >
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={`w-full border bg-cream/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep focus:ring-1 focus:ring-moss-deep transition ${
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <form.Field
                name="email"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) return "Email is required";
                    if (!/\S+@\S+\.\S+/.test(value))
                      return "Valid email is required";
                    return undefined;
                  },
                }}
              >
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={`w-full border bg-cream/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep focus:ring-1 focus:ring-moss-deep transition ${
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

              <form.Field name="phone">
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      Phone Number (Optional)
                    </label>
                    <TailwindPhoneInput
                      value={field.state.value}
                      onChange={(val: string) => field.handleChange(val)}
                      error={field.state.meta.errors.length > 0}
                    />
                  </div>
                )}
              </form.Field>
            </div>

            <form.Field name="message">
              {(field) => (
                <div>
                  <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                    Let us know how we can be the best lender partner to you:
                  </label>
                  <textarea
                    rows={4}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full border border-line bg-cream/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep focus:ring-1 focus:ring-moss-deep transition resize-none"
                  ></textarea>
                </div>
              )}
            </form.Field>

            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <button
                  type="submit"
                  disabled={!canSubmit || isSubmitting}
                  className="w-full bg-brand-orange text-primary-bg font-medium py-3.5 rounded-full hover:bg-orange-600 transition focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              )}
            </form.Subscribe>
          </form>
        )}
      </div>
    </section>
  );
}
