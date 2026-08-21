"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { sendGTMEvent } from "@next/third-parties/google";
import { openChatbotWidget } from "@/components/common/GHLChatBot";

interface OpenChatReusableBtnProps {
  text: string;
  loanProgram: string;
  className?: string;
}

export default function OpenChatReusableBtn({
  text,
  loanProgram,
  className,
}: OpenChatReusableBtnProps) {
  const handleClick = () => {
    // Format the loan program name for the event string (e.g., "VA Loans" -> "va_loans")
    const formattedProgramName = loanProgram
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/(^_|_$)/g, "");

    sendGTMEvent({
      event: `chat_button_clicked_${formattedProgramName}`, // Unique event per loan program
      category: "chat_engagement",
      label: `Chat Button - ${loanProgram}`,
      loan_program: loanProgram,
    });

    openChatbotWidget();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "btn-shine bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base hover:bg-orange-600 transition-colors shadow-sm inline-flex items-center justify-center gap-2",
        className,
      )}
    >
      {text}
      <ArrowRight size={18} strokeWidth={2} />
    </button>
  );
}
