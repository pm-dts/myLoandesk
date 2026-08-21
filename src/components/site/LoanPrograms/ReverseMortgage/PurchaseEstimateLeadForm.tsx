"use client";

import React, { useState, useEffect } from "react";
import {
  Calculator,
  X,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { useForm } from "@tanstack/react-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function PurchaseEstimateLeadForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showCloseWarning, setShowCloseWarning] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const form = useForm({
    defaultValues: {
      purchasePrice: "",
      borrowerAge: "",
      zipCode: "",
      fullName: "",
      email: "",
      phone: "",
    },
    onSubmit: async ({ value }) => {
      setIsSubmitting(true);

      const nameParts = value.fullName.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const payload = {
        first_name: firstName,
        last_name: lastName,
        name: value.fullName,
        email: value.email,
        phone: value.phone,
        postal_code: value.zipCode,
        custom_purchase_price: value.purchasePrice,
        custom_borrower_age: value.borrowerAge,
        source: "HECM_purchase_page",
        tags: "reverse_mortgage_purchase, hecm_estimate_request",
      };

      try {
        // IMPORTANT: Replace this URL with your actual GHL Inbound Webhook URL
        const GHL_WEBHOOK_URL =
          "https://services.leadconnectorhq.com/hooks/Lv5oqPcJ6MZsszgssznB/webhook-trigger/887691f4-5a09-4378-a530-81d108534ce9";

        const response = await fetch(GHL_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        // Simulating network request
        // await new Promise((resolve) => setTimeout(resolve, 1200));

        sendGTMEvent({
          event: "lead_submitted_hecm_purchase",
          category: "lead_generation",
          label: "HECM Purchase Estimate Request",
        });

        setIsSuccess(true);
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an issue submitting your request. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const openModal = () => {
    sendGTMEvent({
      event: "hecm_calculator_opened",
      category: "engagement",
      label: "HECM Purchase Estimate Modal",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowCloseWarning(false);
    setTimeout(() => {
      if (isSuccess || showCloseWarning) {
        setIsSuccess(false);
        form.reset();
      }
    }, 300);
  };

  const handleCloseRequest = () => {
    if (isSuccess) {
      closeModal();
      return;
    }

    const currentValues = form.state.values;

    // Check if the form is dirty (user has typed something)
    const isDirty =
      currentValues.purchasePrice.trim() !== "" ||
      currentValues.borrowerAge.trim() !== "" ||
      currentValues.zipCode.trim() !== "" ||
      currentValues.fullName.trim() !== "" ||
      currentValues.email.trim() !== "" ||
      (currentValues.phone && currentValues.phone.length > 4);

    if (isDirty) {
      setShowCloseWarning(true);
    } else {
      closeModal();
    }
  };

  const confirmClose = () => {
    form.reset();
    closeModal();
  };

  return (
    <>
      {/* Target Section */}
      <div className="bg-[#FAF9F6] border border-[#E5E0D8] p-8 md:p-12 rounded-3xl mb-12 max-w-4xl mx-auto text-center shadow-sm">
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Example</h3>
        <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed mb-4">
          Suppose you're considering purchasing a $600,000 home.
        </p>
        <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed mb-6">
          Instead of paying the entire $600,000 in cash, you may be able to
          contribute a portion of the purchase price and finance the remaining
          eligible amount with a reverse mortgage.
        </p>
        <p className="text-[15px] sm:text-base font-bold text-[#1a1a1a] mb-8">
          Your actual required investment must be calculated specifically for
          you.
        </p>

        <button
          onClick={openModal}
          className="bg-[#F97316] text-white px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-[#EA580C] transition-colors shadow-md inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
        >
          Calculate My Estimated Purchase Options <Calculator size={18} />
        </button>
      </div>

      {/* Main Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseRequest}
        >
          {/* Inner Modal Container */}
          <div
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 shrink-0">
              <h3 className="text-xl font-bold text-gray-900">
                Purchase Estimate Request
              </h3>
              <button
                onClick={handleCloseRequest}
                className="text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-50 [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-full transition-colors">
              {isSuccess ? (
                <div className="text-center py-10 px-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Request Received!
                  </h4>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto mb-8">
                    Thanks — we'll run your personalized purchase estimate using
                    HUD's official calculator and follow up with you within 24
                    hours.
                  </p>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-800 font-medium underline underline-offset-4"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                  }}
                  className="space-y-5"
                >
                  <p className="text-sm text-gray-600 mb-6">
                    Please provide a few details so our team can accurately run
                    your scenario using HUD's official HECM guidelines.
                  </p>

                  {/* Loan Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 bg-gray-50 rounded-xl border border-gray-100 mb-6">
                    <div className="sm:col-span-2">
                      <form.Field
                        name="purchasePrice"
                        children={(field) => (
                          <div>
                            <label
                              htmlFor={field.name}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Estimated Home Purchase Price
                            </label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                $
                              </span>
                              <input
                                type="number"
                                id={field.name}
                                name={field.name}
                                required
                                value={field.state.value}
                                onChange={(e) =>
                                  field.handleChange(e.target.value)
                                }
                                onBlur={field.handleBlur}
                                className="w-full pl-7 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] outline-none transition-all"
                                placeholder="600000"
                              />
                            </div>
                          </div>
                        )}
                      />
                    </div>
                    <div>
                      <form.Field
                        name="borrowerAge"
                        children={(field) => (
                          <div>
                            <label
                              htmlFor={field.name}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Youngest Borrower's Age
                            </label>
                            <input
                              type="number"
                              id={field.name}
                              name={field.name}
                              required
                              min="62"
                              value={field.state.value}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              onBlur={field.handleBlur}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] outline-none transition-all"
                              placeholder="e.g. 65"
                            />
                          </div>
                        )}
                      />
                    </div>
                    <div>
                      <form.Field
                        name="zipCode"
                        children={(field) => (
                          <div>
                            <label
                              htmlFor={field.name}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Target ZIP Code
                            </label>
                            <input
                              type="text"
                              id={field.name}
                              name={field.name}
                              required
                              maxLength={5}
                              value={field.state.value}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              onBlur={field.handleBlur}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] outline-none transition-all"
                              placeholder="e.g. 90210"
                            />
                          </div>
                        )}
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <form.Field
                        name="fullName"
                        children={(field) => (
                          <div>
                            <label
                              htmlFor={field.name}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              id={field.name}
                              name={field.name}
                              required
                              value={field.state.value}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              onBlur={field.handleBlur}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] outline-none transition-all"
                              placeholder="John Doe"
                            />
                          </div>
                        )}
                      />
                    </div>
                    <div>
                      <form.Field
                        name="email"
                        children={(field) => (
                          <div>
                            <label
                              htmlFor={field.name}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Email Address
                            </label>
                            <input
                              type="email"
                              id={field.name}
                              name={field.name}
                              required
                              value={field.state.value}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              onBlur={field.handleBlur}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] outline-none transition-all"
                              placeholder="john@example.com"
                            />
                          </div>
                        )}
                      />
                    </div>

                    {/* Themed React International Phone Input */}
                    <div>
                      <form.Field
                        name="phone"
                        children={(field) => (
                          <div>
                            <label
                              htmlFor={field.name}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Phone Number{" "}
                              <span className="font-normal text-gray-400">
                                (Optional)
                              </span>
                            </label>
                            <div className="flex w-full bg-white border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#F97316]/50 focus-within:border-[#F97316] transition-all overflow-hidden">
                              <PhoneInput
                                defaultCountry="us"
                                value={field.state.value}
                                onChange={(phone) => field.handleChange(phone)}
                                style={{ width: "100%", display: "flex" }}
                                countrySelectorStyleProps={{
                                  buttonClassName:
                                    "!border-0 !bg-transparent !pl-3 !pr-1 hover:!bg-gray-50 !h-full",
                                }}
                                inputClassName="!border-0 !bg-transparent !w-full !py-2.5 !px-3 !text-base !text-gray-900 focus:!ring-0 focus:!outline-none"
                              />
                            </div>
                          </div>
                        )}
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#F97316] text-white py-3.5 rounded-xl font-bold text-lg hover:bg-[#EA580C] disabled:bg-orange-300 disabled:cursor-not-allowed transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Request My Estimate <ArrowRight size={20} />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-gray-500 text-center mt-4">
                      By submitting this form, you consent to be contacted by
                      our specialists. We value your privacy and keep your
                      information secure.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Warning Dialog Overlay (Appears inside the main modal) */}
            {showCloseWarning && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl animate-in fade-in duration-200">
                <div className="bg-white border border-gray-200 shadow-xl rounded-xl p-6 max-w-sm w-full mx-4 text-center animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Unsaved Changes
                  </h4>
                  <p className="text-sm text-gray-600 mb-6">
                    Are you sure you want to close this form? Your progress will
                    be lost.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => setShowCloseWarning(false)}
                      className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors w-full"
                    >
                      Keep Editing
                    </button>
                    <button
                      onClick={confirmClose}
                      className="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors w-full"
                    >
                      Discard
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
