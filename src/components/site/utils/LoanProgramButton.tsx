"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LoanProgramButton() {
    const handleApplyNowClick = (loan_type: string) => {
        sendGAEvent("event", "apply_now_button_clicked", {
            category: "engagement",
            label: "Apply Now Clicked",
            page_path: "/loan-programs",
            loan_type: loan_type,
        });
    };

    const handleContactUsClick = (loan_type: string) => {
        sendGAEvent("event", "contact_us_button_clicked", {
            category: "engagement",
            label: "Contact Us Clicked",
            page_path: "/loan-programs",
            loan_type: loan_type,
        });
    };
    return (
        <div className="flex flex-col gap-3 mt-6">
            <a
                onClick={() => handleApplyNowClick("Conventional")}
                href="https://prod.lendingpad.com/secured-horizon-financial-group-inc-202402221458/c0d569d5-e33a-46d1-a6aa-fa9cab1edea5/pos#/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm"
            >
                Apply Now <ArrowRight size={14} />
            </a>
            <Link
                onClick={() => handleContactUsClick("Conventional")}
                href="/get-quote"
                className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center transition-all"
            >
                Contact Us Now
            </Link>
        </div>
    )
}
