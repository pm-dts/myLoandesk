"use client";

import { useEffect } from "react";
import Script from "next/script";
import { sendGTMEvent } from "@next/third-parties/google";

export default function ChatbotWidget() {
  // Listen for LeadConnector Chatbot postMessages (opens, interactions, lead submissions)
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

        if (
          data === "lc_chat_widget_opened" ||
          data?.event === "chat_opened" ||
          data?.type === "chat_widget_open"
        ) {
          sendGTMEvent({
            event: "chat_widget_opened",
            category: "chat_engagement",
            label: "LeadConnector AI Chatbot",
          });
        }

        const isChatSubmitted =
          data === "lc_chat_widget_submitted" ||
          data?.event === "chat_submitted" ||
          data?.type === "lead_submitted" ||
          (Array.isArray(data) && data[0] === "msgsndr-chat-submitted");

        if (isChatSubmitted) {
          sendGTMEvent({
            event: "generate_lead",
            form_name: "ai_chat_widget",
            category: "lead_generation",
            label: "LeadConnector AI Chatbot Lead",
          });
        }
      } catch (err) {
        // Ignore unparseable postMessages
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      {/* LeadConnector AI Chatbot Widget */}
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6a70d6eaf84104f943ccc5a4"
        strategy="lazyOnload"
        onLoad={() => {
          // Track that the chatbot widget loaded successfully
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
