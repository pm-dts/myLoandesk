"use client";

import React, { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: "en" | "es") => {
    if (newLocale === locale) return;

    startTransition(() => {
      // Keeps the user on the exact same sub-page while switching the prefix
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line/60 bg-white/60 text-xs font-medium text-ink shadow-sm hover:bg-white transition-colors">
      <Globe size={14} className="text-brand-orange" />
      <select
        value={locale}
        disabled={isPending}
        onChange={(e) => handleLanguageChange(e.target.value as "en" | "es")}
        className="bg-transparent text-ink font-semibold focus:outline-none cursor-pointer pr-1"
        aria-label="Select Language"
      >
        <option value="en">English (US)</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}
