"use client";

import { useEffect } from "react";
import Script from "next/script";
import { sendGTMEvent } from "@next/third-parties/google";

interface CalendarBookingWidgetProps {
  locale?: string;
}

export default function CalendarBookingWidget({
  locale = "en",
}: CalendarBookingWidgetProps) {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        !event.origin.includes("leadconnectorhq.com") &&
        !event.origin.includes("msgsndr.com")
      ) {
        return;
      }

      try {
        const data = event.data;
        const isBookingComplete =
          (Array.isArray(data) && data[0] === "msgsndr-booking-complete") ||
          data?.event === "booking_submitted" ||
          data?.type === "booking_complete";

        if (isBookingComplete) {
          sendGTMEvent({
            event: "appointment_booked",
            category: "lead_generation",
            label: "LeadConnector Booking Widget",
            calendar_id: Array.isArray(data) ? data[1]?.calendarId : undefined,
            locale,
          });
        }
      } catch (err) {
        // Ignore unparseable postMessages from browser extensions
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [locale]);

  return (
    <>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
      <div className="relative w-full mx-auto">
        {/* Underlying shadow offset layer */}
        <div className="absolute inset-0 bg-[#E8E4D8] rounded-[24px] sm:rounded-[32px] transform -rotate-1 -translate-x-1.5 translate-y-1.5 sm:-translate-x-2 sm:translate-y-2 -z-10"></div>

        {/* Widget Content Box */}
        <div className="relative z-10 bg-primary-bg border border-line rounded-[24px] sm:rounded-[32px] p-2 sm:p-6 shadow-2xl overflow-hidden min-h-[600px]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/VYw1ADf144ERgbVVfQZh"
            style={{ width: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
            id="VYw1ADf144ERgbVVfQZh_1784364221193"
            title="LeadConnector Booking Widget"
          />
        </div>
      </div>
    </>
  );
}
