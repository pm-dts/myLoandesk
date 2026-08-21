"use client";

import { useEffect } from "react";
import Script from "next/script";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    leadConnector?: {
      chatWidget?: {
        openWidget: () => void;
        closeWidget: () => void;
        isActive: () => boolean;
      };
    };
  }
}

// ---------------------------------------------------------
// EXPORTABLE UTILITY FUNCTION
// Call this from anywhere in your app to open the chat
// ---------------------------------------------------------
export const openChatbotWidget = () => {
  if (typeof window === "undefined") return;

  // If the widget is already loaded, open it immediately
  if (window.leadConnector?.chatWidget?.openWidget) {
    window.leadConnector.chatWidget.openWidget();
    return;
  }

  // Fallback: If clicked while the script is still downloading,
  // poll every 250ms for up to 10 seconds.
  let attempts = 0;
  const intervalId = setInterval(() => {
    attempts++;
    if (window.leadConnector?.chatWidget?.openWidget) {
      window.leadConnector.chatWidget.openWidget();
      clearInterval(intervalId);
    } else if (attempts >= 40) {
      clearInterval(intervalId);
      console.warn("LeadConnector chat widget failed to load.");
    }
  }, 250);
};

// ---------------------------------------------------------
// MAIN WIDGET COMPONENT
// Place this once in your root layout.tsx
// ---------------------------------------------------------
export default function ChatbotWidget() {
  const pathname = usePathname(); // Get the current page route

  useEffect(() => {
    // PostMessage handler for analytics
    const handleMessage = (event: MessageEvent) => {
      if (
        !event.origin.includes("leadconnectorhq.com") &&
        !event.origin.includes("msgsndr.com")
      ) {
        return;
      }

      try {
        const data = event.data;

        // Track when the widget is opened
        if (
          data === "lc_chat_widget_opened" ||
          data?.event === "chat_opened" ||
          data?.type === "chat_widget_open"
        ) {
          sendGTMEvent({
            event: "chat_widget_opened",
            category: "chat_engagement",
            label: "LeadConnector AI Chatbot",
            page_path: pathname || window.location.pathname,
          });
        }

        // Track when a lead is submitted
        const isChatSubmitted =
          data === "lc_chat_widget_submitted" ||
          data?.event === "chat_submitted" ||
          data?.type === "lead_submitted" ||
          (Array.isArray(data) && data[0] === "msgsndr-chat-submitted");

        if (isChatSubmitted) {
          sendGTMEvent({
            event: "chat_widget_lead_submitted",
            form_name: "ai_chat_widget",
            category: "lead_generation",
            label: "LeadConnector AI Chatbot Lead",
            page_path: pathname || window.location.pathname, // Tells GA4/GTM exactly which page the lead came from
          });
        }
      } catch (err) {
        // Ignore unparseable postMessages
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [pathname]); // Re-bind if the pathname changes so we always have the correct URL

  return (
    <>
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6a70d6eaf84104f943ccc5a4"
        strategy="lazyOnload"
        onLoad={() => {
          sendGTMEvent({
            event: "chat_widget_loaded",
            category: "chat_engagement",
            label: "LeadConnector AI Chatbot Loader",
          });
        }}
      />
    </>
  );
}
