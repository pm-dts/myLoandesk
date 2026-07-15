"use client";

import React from "react";
import { useForm } from "@tanstack/react-form";
import { AlertCircle, Send, Mail, Phone, MapPin } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Link from "next/link";

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  subject: string;
  helpTopic: string;
  message: string;
  smsConsent: boolean;
}

const HELP_TOPICS = [
  "General mortgage questions",
  "I'd like to see if I can get pre-approved for a loan",
  "I'm interested in refinance options",
];

export default function Contact() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      subject: "",
      helpTopic: "",
      message: "",
      smsConsent: false,
    } as ContactFormValues,
    onSubmit: async ({ value }) => {
      console.log("Contact form submitted:", value);
      // Add your API submission logic here
    },
  });

  return (
    <main className="min-h-screen bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-5">
              Get in touch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-ink tracking-tight leading-[1.05] mb-6">
              Let's sit down at the desk.
            </h1>
            <p className="text-lg text-ink-2 leading-relaxed mb-12 max-w-md">
              Whether you're just exploring rates or ready to close on your
              dream home, our team of independent brokers is here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-moss-deep/10 flex items-center justify-center text-moss-deep shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink mb-1">
                    Call or Text
                  </h3>
                  <p className="text-ink-2 mb-1">Mon-Sun, 7am-9pm CT</p>
                  <a
                    href="tel:+13058916500"
                    className="text-moss-deep font-medium hover:text-brand-orange transition-colors"
                  >
                    +1(305) 891-6500
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink mb-1">Email</h3>
                  <p className="text-ink-2 mb-1">
                    Usually respond within 2 hours
                  </p>
                  <a
                    href="mailto:hello@myloandesk.com"
                    className="text-moss-deep font-medium hover:text-brand-orange transition-colors"
                  >
                    hello@myloandesk.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4A574]/20 flex items-center justify-center text-[#D4A574] shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink mb-1">
                    Headquarters
                  </h3>
                  <p className="text-ink-2">
                    123 Mortgage Way, Suite 400
                    <br />
                    Austin, TX 78701
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7 bg-primary-bg rounded-[32px] p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-line">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
              className="space-y-6"
            >
              {/* Name Grid */}
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
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className={`w-full px-5 py-3.5 bg-primary-bg border rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring ${field.state.meta.errors.length ? "border-brand-orange" : "border-line"}`}
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
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className={`w-full px-5 py-3.5 bg-primary-bg border rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring ${field.state.meta.errors.length ? "border-brand-orange" : "border-line"}`}
                      />
                    </div>
                  )}
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
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
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className={`w-full px-5 py-3.5 bg-primary-bg border rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring ${field.state.meta.errors.length ? "border-brand-orange" : "border-line"}`}
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
                  name="phone"
                  validators={{
                    onChange: ({ value }) =>
                      !value || value.length < 8
                        ? "Valid phone required"
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
                        className={`relative flex items-center w-full bg-primary-bg border rounded-full focus-within:border-moss-deep transition-colors focus-ring ${field.state.meta.errors.length ? "border-brand-orange" : "border-line"}`}
                      >
                        <PhoneInput
                          defaultCountry="us"
                          value={field.state.value}
                          onChange={(phone) => field.handleChange(phone)}
                          inputClassName="!w-full !bg-transparent !border-none !text-ink !text-sm !py-3.5 !px-3 !focus:outline-none !focus:ring-0"
                          countrySelectorStyleProps={{
                            buttonClassName:
                              "!bg-transparent !border-none !pl-5 !pr-2 !py-3.5 !hover:bg-transparent",
                          }}
                          style={
                            {
                              width: "100%",
                              "--react-international-phone-border-color":
                                "transparent",
                              "--react-international-phone-border-radius":
                                "9999px",
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
              </div>

              {/* Address */}
              <form.Field
                name="address"
                children={(field) => (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      Address / Property Location (optional)
                    </label>
                    <input
                      id={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="w-full px-5 py-3.5 bg-primary-bg border border-line rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                    />
                  </div>
                )}
              />

              {/* Subject */}
              <form.Field
                name="subject"
                children={(field) => (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="w-full px-5 py-3.5 bg-primary-bg border border-line rounded-full text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                    />
                  </div>
                )}
              />

              {/* Help Topic (Radio Group) */}
              <form.Field
                name="helpTopic"
                validators={{
                  onChange: ({ value }) =>
                    !value ? "Please select a topic" : undefined,
                }}
                children={(field) => (
                  <div className="pt-2 border-t border-line mt-4">
                    <label className="block text-sm font-medium text-ink mb-4">
                      Tell us how we can help you: *
                    </label>
                    <div className="space-y-3">
                      {HELP_TOPICS.map((topic, idx) => (
                        <label
                          key={idx}
                          className="flex items-start gap-3 cursor-pointer group"
                        >
                          <div className="relative flex items-center justify-center mt-0.5">
                            <input
                              type="radio"
                              name={field.name}
                              value={topic}
                              checked={field.state.value === topic}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              className="peer sr-only"
                            />
                            <div className="w-5 h-5 border-2 border-line rounded-full peer-checked:border-moss-deep transition-colors group-hover:border-moss-deep/50"></div>
                            <div className="absolute w-2.5 h-2.5 bg-moss-deep rounded-full opacity-0 peer-checked:opacity-100 transition-opacity scale-50 peer-checked:scale-100"></div>
                          </div>
                          <span className="text-sm text-ink-2 group-hover:text-ink transition-colors">
                            {topic}
                          </span>
                        </label>
                      ))}
                    </div>
                    {field.state.meta.errors.length > 0 && (
                      <p className="text-xs text-brand-orange mt-2 flex items-center gap-1">
                        <AlertCircle size={12} />{" "}
                        {field.state.meta.errors.join(", ")}
                      </p>
                    )}
                  </div>
                )}
              />

              {/* Message */}
              <form.Field
                name="message"
                children={(field) => (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id={field.name}
                      rows={4}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="w-full px-5 py-4 bg-primary-bg border border-line rounded-[24px] text-sm text-ink focus:outline-none focus:border-moss-deep transition-colors focus-ring resize-none"
                    ></textarea>
                  </div>
                )}
              />

              {/* SMS Consent Checkbox */}
              <form.Field
                name="smsConsent"
                validators={{
                  onChange: ({ value }) =>
                    !value ? "You must consent to continue" : undefined,
                }}
                children={(field) => (
                  <div className="bg-cream/50 p-5 rounded-2xl border border-line">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          checked={field.state.value}
                          onChange={(e) => field.handleChange(e.target.checked)}
                          className="peer sr-only"
                        />
                        <div className="w-5 h-5 border-2 border-line rounded peer-checked:border-moss-deep peer-checked:bg-moss-deep transition-colors group-hover:border-moss-deep/50 flex items-center justify-center focus-ring">
                          {field.state.value && (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-ink-2 leading-relaxed">
                        By checking this box, I consent to receive text messages
                        related to mortgage and financing from MyLoanDesk.com.
                        You can reply "STOP" at any time to opt-out. Message and
                        data rates may apply. Message frequency may vary, text
                        "HELP" to 800-891-1887 for assistance. For more
                        information, please refer to our{" "}
                        <Link
                          href="/privacy-policy"
                          className="text-moss-deep hover:underline"
                        >
                          privacy policy
                        </Link>
                        , and{" "}
                        <Link
                          href="/privacy-policy"
                          className="text-moss-deep hover:underline"
                        >
                          SMS Terms and Conditions
                        </Link>{" "}
                        on our website.
                      </div>
                    </label>
                    {field.state.meta.errors.length > 0 && (
                      <p className="text-xs text-brand-orange mt-3 flex items-center gap-1">
                        <AlertCircle size={12} />{" "}
                        {field.state.meta.errors.join(", ")}
                      </p>
                    )}
                  </div>
                )}
              />

              {/* Submit Button */}
              <div className="pt-4">
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <button
                      type="submit"
                      disabled={!canSubmit || isSubmitting}
                      className="btn-shine w-full flex items-center justify-center gap-2 bg-moss-deep text-primary-bg py-4 px-8 rounded-full text-base font-semibold hover:bg-moss-darker transition-colors focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send size={18} />}
                    </button>
                  )}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
