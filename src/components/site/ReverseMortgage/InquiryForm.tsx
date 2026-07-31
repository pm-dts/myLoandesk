"use client";

import React, { useState } from "react";
import { useForm } from "@tanstack/react-form";
import {
    User,
    Mail,
    MapPin,
    DollarSign,
    Calendar,
    HelpCircle,
    AlertCircle,
    ArrowRight,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const GHL_REVERSE_MORTGAGE_WEBHOOK_URL =
    "https://services.leadconnectorhq.com/hooks/Lv5oqPcJ6MZsszgssznB/webhook-trigger/0845541f-8c13-4fd2-b311-da2080beade4";

export default function ReverseMortgageForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            propertyZip: "",
            approxValue: "",
            currentBalance: "",
            borrowerAge: "",
            goals: "",
        },
        onSubmit: async ({ value }) => {
            const toastId = toast.loading("Submitting your inquiry...");

            try {
                // Post data to GoHighLevel Webhook
                const response = await fetch(GHL_REVERSE_MORTGAGE_WEBHOOK_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        form_type: "Reverse Mortgage Inquiry",
                        full_name: value.name,
                        email: value.email,
                        postal_code: value.propertyZip,
                        approx_property_value: value.approxValue,
                        current_mortgage_balance: value.currentBalance,
                        borrower_age: value.borrowerAge,
                        custom_goals: value.goals,
                        source: "Website Reverse Mortgage Form",
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Webhook error: ${response.status}`);
                }

                toast.success(
                    "Inquiry received! A specialist will contact you shortly.",
                    {
                        id: toastId,
                        duration: 5000,
                    },
                );

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
        <section className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 bg-cream/20 flex items-center justify-center min-h-screen">
            <Toaster position="bottom-right" />

            <div className="max-w-3xl w-full mx-auto bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200">
                <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
                    <div className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
                        Reverse Mortgage
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-black tracking-tight mb-3">
                        See If a Reverse Mortgage Is Right For You
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                        Complete this brief inquiry form and a MyLoanDesk reverse mortgage
                        specialist will personally review your goals.
                    </p>
                </div>

                {isSubmitted ? (
                    <div className="bg-moss-deep/5 border border-moss-deep/20 p-6 sm:p-8 rounded-2xl text-center animate-in fade-in duration-300">
                        <h3 className="font-semibold text-lg sm:text-xl text-black mb-2">
                            Thank You for Your Inquiry!
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-6">
                            We have received your details. One of our specialized reverse
                            mortgage advisors will reach out to you shortly with tailored
                            guidance.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="text-xs font-semibold text-moss-deep underline hover:text-moss-darker"
                        >
                            Submit another inquiry
                        </button>
                    </div>
                ) : (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            form.handleSubmit();
                        }}
                        className="space-y-4 sm:space-y-6"
                    >
                        {/* Required Contact Info Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Full Name (Required) */}
                            <form.Field
                                name="name"
                                validators={{
                                    onChange: ({ value }) =>
                                        !value ? "Name is required" : undefined,
                                }}
                            >
                                {(field) => (
                                    <div className="flex flex-col justify-end">
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 shrink-0"
                                                size={18}
                                            />
                                            <input
                                                type="text"
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                placeholder="John Doe"
                                                className={`w-full pl-12 pr-4 py-3 sm:py-3.5 bg-white border ${field.state.meta.errors.length
                                                    ? "border-brand-orange"
                                                    : "border-gray-200"
                                                    } rounded-xl text-black text-sm focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-400`}
                                            />
                                        </div>
                                        {field.state.meta.errors.length > 0 && (
                                            <p className="text-xs text-brand-orange mt-1.5 flex items-center gap-1">
                                                <AlertCircle size={12} /> {field.state.meta.errors[0]}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </form.Field>

                            {/* Email (Required) */}
                            <form.Field
                                name="email"
                                validators={{
                                    onChange: ({ value }) => {
                                        if (!value) return "Email is required";
                                        if (!/\S+@\S+\.\S+/.test(value))
                                            return "Valid email required";
                                        return undefined;
                                    },
                                }}
                            >
                                {(field) => (
                                    <div className="flex flex-col justify-end">
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <div className="relative">
                                            <Mail
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 shrink-0"
                                                size={18}
                                            />
                                            <input
                                                type="email"
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                placeholder="you@example.com"
                                                className={`w-full pl-12 pr-4 py-3 sm:py-3.5 bg-white border ${field.state.meta.errors.length
                                                    ? "border-brand-orange"
                                                    : "border-gray-200"
                                                    } rounded-xl text-black text-sm focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-400`}
                                            />
                                        </div>
                                        {field.state.meta.errors.length > 0 && (
                                            <p className="text-xs text-brand-orange mt-1.5 flex items-center gap-1">
                                                <AlertCircle size={12} /> {field.state.meta.errors[0]}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </form.Field>
                        </div>

                        {/* Optional Details Grid - Fixed Alignment & Responsive Layout */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Property ZIP Code (Optional) */}
                            <form.Field name="propertyZip">
                                {(field) => (
                                    <div className="flex flex-col justify-end h-full">
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                                            Property ZIP (Optional)
                                        </label>
                                        <div className="relative">
                                            <MapPin
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 shrink-0"
                                                size={18}
                                            />
                                            <input
                                                type="text"
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                placeholder="e.g. 33101"
                                                className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-white border border-gray-200 rounded-xl text-black text-sm focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-400"
                                            />
                                        </div>
                                    </div>
                                )}
                            </form.Field>

                            {/* Approximate Property Value (Optional) */}
                            <form.Field name="approxValue">
                                {(field) => (
                                    <div className="flex flex-col justify-end h-full">
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                                            Approx. Home Value (Optional)
                                        </label>
                                        <div className="relative">
                                            <DollarSign
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 shrink-0"
                                                size={18}
                                            />
                                            <input
                                                type="text"
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => {
                                                    const formatted = formatCurrency(e.target.value);
                                                    field.handleChange(formatted);
                                                }}
                                                placeholder="$500,000"
                                                className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-white border border-gray-200 rounded-xl text-black text-sm focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-400"
                                            />
                                        </div>
                                    </div>
                                )}
                            </form.Field>

                            {/* Current Mortgage Balance (Optional) */}
                            <form.Field name="currentBalance">
                                {(field) => (
                                    <div className="flex flex-col justify-end h-full sm:col-span-2 lg:col-span-1">
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                                            Mortgage Balance (Optional)
                                        </label>
                                        <div className="relative">
                                            <DollarSign
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 shrink-0"
                                                size={18}
                                            />
                                            <input
                                                type="text"
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => {
                                                    const formatted = formatCurrency(e.target.value);
                                                    field.handleChange(formatted);
                                                }}
                                                placeholder="$150,000"
                                                className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-white border border-gray-200 rounded-xl text-black text-sm focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-400"
                                            />
                                        </div>
                                    </div>
                                )}
                            </form.Field>
                        </div>

                        {/* Age of Borrower (Optional) */}
                        <div className="grid grid-cols-1 gap-4">
                            <form.Field name="borrowerAge">
                                {(field) => (
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                                            Age of Borrower (Optional)
                                        </label>
                                        <div className="relative">
                                            <Calendar
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 shrink-0"
                                                size={18}
                                            />
                                            <input
                                                type="number"
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                placeholder="e.g. 62"
                                                className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-white border border-gray-200 rounded-xl text-black text-sm focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-400"
                                            />
                                        </div>
                                    </div>
                                )}
                            </form.Field>
                        </div>

                        {/* Tell us your goals please (Optional) */}
                        <form.Field name="goals">
                            {(field) => (
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1">
                                        <HelpCircle size={14} className="shrink-0" /> Tell us your
                                        goals please (Optional)
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        placeholder="Eliminate monthly mortgage payments, access equity for healthcare/retirement, supplement income, etc."
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-black text-sm focus:outline-none focus:border-brand-orange transition-colors resize-none placeholder:text-gray-400"
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
                                        className="w-full bg-brand-orange text-white py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2 focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting
                                            ? "Submitting..."
                                            : "Get Reverse Mortgage Guidance"}
                                        {!isSubmitting && <ArrowRight size={16} />}
                                    </button>
                                )}
                            </form.Subscribe>
                            <p className="text-[11px] sm:text-xs text-gray-500 text-center mt-3">
                                Your privacy is guaranteed. No hard credit pull required to get
                                started.
                            </p>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}
