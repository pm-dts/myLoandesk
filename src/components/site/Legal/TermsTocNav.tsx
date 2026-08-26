"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

interface TermsTocNavProps {
  tocTitle: string;
  items: TocItem[];
  inquiriesTitle: string;
  inquiriesDesc: string;
  email: string;
}

export default function TermsTocNav({
  tocTitle,
  items,
  inquiriesTitle,
  inquiriesDesc,
  email,
}: TermsTocNavProps) {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="lg:col-span-4 sticky top-32 hidden lg:block">
      <div className="bg-cream/50 border border-line rounded-2xl p-6 max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-moss-deep/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-moss-deep/40 transition-colors duration-300 pr-4">
        <div className="text-xs font-semibold text-ink uppercase tracking-wider mb-5">
          {tocTitle}
        </div>
        <nav className="flex flex-col gap-3 text-sm font-medium">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleSmoothScroll(e, item.id)}
              className="text-ink-2 hover:text-moss-deep transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Quick Contact Card */}
      <div className="mt-6 p-6 border border-line rounded-2xl bg-moss-deep text-primary-bg">
        <div className="text-sm font-semibold mb-2">{inquiriesTitle}</div>
        <p className="text-xs text-primary-bg/70 leading-relaxed mb-4">
          {inquiriesDesc}
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-brand-orange transition-colors focus-ring"
        >
          {email}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </aside>
  );
}
