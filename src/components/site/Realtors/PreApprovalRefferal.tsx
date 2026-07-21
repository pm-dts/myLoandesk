"use client";

import React, { useState } from "react";
import { useForm } from "@tanstack/react-form";
import toast from "react-hot-toast";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const REFERRAL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/Lv5oqPcJ6MZsszgssznB/webhook-trigger/14048627-1ba4-4c85-8a57-fc99e211650a";

export default function ReferralFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      const toastId = toast.loading("Submitting your referral...");

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
            source: "Website Realtor Referral Form",
          }),
        });

        if (!response.ok) {
          throw new Error(`Webhook error: ${response.status}`);
        }

        toast.success(
          "Referral Received! We'll get your borrower pre-approved.",
          {
            id: toastId,
            duration: 5000,
          },
        );

        setIsSubmitted(true);
        form.reset();
      } catch (error) {
        console.error("Error submitting referral:", error);
        toast.error(
          "There was an issue submitting your referral. Please try again.",
          {
            id: toastId,
            duration: 5000,
          },
        );
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
            Benefits of referring your clients to MyLoanDesk
          </div>
          <h2
            className={cn(
              "text-3xl lg:text-4xl text-ink font-light",
              fraunces.className,
            )}
          >
            Refer your client for quick pre-approval
          </h2>
          <p className="text-sm text-ink-2 mt-2">
            Receive exclusive, generous benefits when you use the form below to
            refer your borrowers to us, and we get your clients pre-approved for
            financing.
          </p>
          <p className="text-xs text-ink-2/80 italic mt-1">
            Please complete the form below, and we'll get your borrower
            pre-approved!
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-moss-deep/5 border border-moss-deep/20 text-moss-deep p-6 rounded-2xl text-center animate-in fade-in zoom-in duration-300">
            <h3 className="font-semibold text-lg mb-1">Referral Received!</h3>
            <p className="text-sm text-ink-2">
              We'll get your borrower pre-approved right away.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-xs font-semibold underline text-moss-deep hover:text-moss-darker"
            >
              Submit another referral
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
            {/* Realtor Info Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <form.Field
                name="realtorName"
                validators={{
                  onChange: ({ value }) => (!value ? "Required" : undefined),
                }}
              >
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      Realtor First & Last Name *
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

              <form.Field
                name="realtorPhone"
                validators={{
                  onChange: ({ value }) => (!value ? "Required" : undefined),
                }}
              >
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      Realtor Phone Number *
                    </label>
                    <input
                      type="tel"
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

            {/* Realtor Email & Borrower Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <form.Field
                name="realtorEmail"
                validators={{
                  onChange: ({ value }) =>
                    !value || !/\S+@\S+\.\S+/.test(value)
                      ? "Valid Email Required"
                      : undefined,
                }}
              >
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      Realtor Email *
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

              <form.Field
                name="borrowerName"
                validators={{
                  onChange: ({ value }) => (!value ? "Required" : undefined),
                }}
              >
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      Borrower First & Last Name *
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

            {/* Borrower Contact Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <form.Field
                name="borrowerEmail"
                validators={{
                  onChange: ({ value }) =>
                    !value || !/\S+@\S+\.\S+/.test(value)
                      ? "Valid Email Required"
                      : undefined,
                }}
              >
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      Borrower Email *
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

              <form.Field
                name="borrowerPhone"
                validators={{
                  onChange: ({ value }) => (!value ? "Required" : undefined),
                }}
              >
                {(field) => (
                  <div>
                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                      Borrower Phone Number *
                    </label>
                    <input
                      type="tel"
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

            {/* Details */}
            <form.Field name="details">
              {(field) => (
                <div>
                  <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">
                    Let us know more about this borrower, the property, and
                    their financing needs:
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
                  {isSubmitting ? "Submitting Referral..." : "Submit"}
                </button>
              )}
            </form.Subscribe>
          </form>
        )}
      </div>
    </section>
  );
}
