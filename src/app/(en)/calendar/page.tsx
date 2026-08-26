"use client";

import { useEffect } from "react";
import Script from "next/script";
import { Calendar } from "lucide-react";
import { Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";
import { sendGTMEvent } from "@next/third-parties/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function CalendarPage() {
  // Listen for LeadConnector iframe success messages
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
          });
        }
      } catch (err) {
        // Ignore unparseable postMessages from browser extensions
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">
      {/* External Script Loader for LeadConnector Embed */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Intro Header */}
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2 mb-6">
            <Calendar className="text-brand-orange" size={14} />
            Direct Scheduling Desk
          </div>

          <h1
            className={cn(
              "text-3xl sm:text-5xl tracking-tight text-ink font-light leading-tight mb-4",
              fraunces.className,
            )}
          >
            Book a Consultation{" "}
            <em className="not-italic font-serif italic text-brand-orange">
              With Us
            </em>
          </h1>

          <p className="text-sm sm:text-base text-ink-2 leading-relaxed">
            Select a time that works best for your schedule to speak directly
            with our origination talent team.
          </p>
        </header>

        {/* Calendar Embed Blueprint Container */}
        <div className="relative w-full mx-auto">
          {/* Architectural underlying shadow offset background panel */}
          <div className="absolute inset-0 bg-[#E8E4D8] rounded-[24px] sm:rounded-[32px] transform -rotate-1 -translate-x-1.5 translate-y-1.5 sm:-translate-x-2 sm:translate-y-2 -z-10"></div>

          {/* Core Core Widget Content Frame Box */}
          <div className="relative z-10 bg-primary-bg border border-line rounded-[24px] sm:rounded-[32px] p-2 sm:p-6 shadow-2xl overflow-hidden min-h-[600px]">
            {/* Native Iframe Component Injection */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/VYw1ADf144ERgbVVfQZh"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="VYw1ADf144ERgbVVfQZh_1784364221193"
            ></iframe>
          </div>
        </div>

        {/* Bottom Trust/Secure Notice Footer Disclaimer */}
        <p className="text-[11px] text-center text-ink-2/70 mt-8 max-w-md mx-auto">
          Calendar connection is heavily encrypted. All appointments instantly
          generate private calendar invites and diagnostic meeting links.
        </p>
      </div>
    </main>
  );
}
