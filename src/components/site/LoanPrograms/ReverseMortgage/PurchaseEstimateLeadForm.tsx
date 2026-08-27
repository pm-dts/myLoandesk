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
import toast, { Toaster } from "react-hot-toast";
import { useTranslations } from "next-intl";

interface PurchaseEstimateLeadFormProps {
  locale?: string;
}

export default function PurchaseEstimateLeadForm({
  locale = "en",
}: PurchaseEstimateLeadFormProps) {
  const t = useTranslations("ReverseMortgagePurchase");

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
        locale,
      };

      try {
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

        sendGTMEvent({
          event: "lead_submitted_hecm_purchase",
          category: "lead_generation",
          label: "HECM Purchase Estimate Request",
          locale,
        });

        toast.success(t("modal.toast_success"), {
          style: {
            borderRadius: "12px",
            background: "#1a1a1a",
            color: "#fff",
            fontSize: "14px",
          },
          iconTheme: {
            primary: "#F97316",
            secondary: "#fff",
          },
        });

        setIsSuccess(true);
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error(t("modal.toast_error"));
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
      locale,
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
      <Toaster position="top-right" />
      {/* Target Section */}
      <div className="bg-[#FAF9F6] border border-[#E5E0D8] p-8 md:p-12 rounded-3xl mb-12 max-w-4xl mx-auto text-center shadow-sm">
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">
          {t("lead_box.title")}
        </h3>
        <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed mb-4">
          {t("lead_box.p1")}
        </p>
        <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed mb-6">
          {t("lead_box.p2")}
        </p>
        <p className="text-[15px] sm:text-base font-bold text-[#1a1a1a] mb-8">
          {t("lead_box.p3")}
        </p>

        <button
          onClick={openModal}
          className="bg-[#F97316] text-white px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-[#EA580C] transition-colors shadow-md inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
        >
          {t("lead_box.cta_button")} <Calculator size={18} />
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
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in zoom-in-95 duration-300 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 shrink-0 bg-white">
              <h3 className="text-xl font-bold text-gray-900">
                {t("modal.title")}
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
                  <div className="w-16 h-16 bg-[#FFF4ED] border border-[#FFE4D6] text-[#F97316] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <CheckCircle2 size={36} strokeWidth={2.2} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {t("modal.success_title")}
                  </h4>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto mb-8">
                    {t("modal.success_desc")}
                  </p>
                  <button
                    onClick={closeModal}
                    className="w-full sm:w-auto min-w-[200px] bg-[#F97316] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#EA580C] transition-colors shadow-md"
                  >
                    {t("modal.close_window")}
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
                    {t("modal.intro")}
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
                              {t("modal.purchase_price_label")}
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
                              {t("modal.borrower_age_label")}
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
                              {t("modal.zip_code_label")}
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
                              {t("modal.full_name_label")}
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
                              {t("modal.email_label")}
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
                              {t("modal.phone_label")}{" "}
                              <span className="font-normal text-gray-400">
                                {t("modal.phone_optional")}
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
                        t("modal.submitting_button")
                      ) : (
                        <>
                          {t("modal.submit_button")} <ArrowRight size={20} />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-gray-500 text-center mt-4">
                      {t("modal.privacy_notice")}
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Themed Warning Dialog Overlay */}
            {showCloseWarning && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                <div className="bg-[#FAF9F6] border border-[#FFE4D6] shadow-2xl rounded-2xl p-6 sm:p-7 max-w-sm w-full mx-4 text-center animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 bg-[#FFF4ED] border border-[#FFE4D6] text-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <AlertTriangle size={26} strokeWidth={2.2} />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {t("modal.warning_title")}
                  </h4>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {t("modal.warning_desc")}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                    <button
                      onClick={() => setShowCloseWarning(false)}
                      className="w-full sm:flex-1 py-2.5 px-4 text-sm font-semibold text-white bg-[#F97316] hover:bg-[#EA580C] rounded-xl transition-colors shadow-sm"
                    >
                      {t("modal.warning_keep")}
                    </button>
                    <button
                      onClick={confirmClose}
                      className="w-full sm:flex-1 py-2.5 px-4 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-100 border border-[#E5E0D8] rounded-xl transition-colors"
                    >
                      {t("modal.warning_discard")}
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
