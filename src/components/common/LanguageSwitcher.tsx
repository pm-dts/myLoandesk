"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const [isPending, startTransition] = useTransition();

  // Detect current locale based on URL path
  const isSpanish = pathname === "/es" || pathname.startsWith("/es/");
  const currentLocale = isSpanish ? "es" : "en";

  const handleLanguageChange = (newLocale: "en" | "es") => {
    if (newLocale === currentLocale) return;

    startTransition(() => {
      let targetPath: string;

      if (newLocale === "es") {
        // Switch to Spanish: prepend /es to the current root-based path
        targetPath = pathname === "/" ? "/es" : `/es${pathname}`;
      } else {
        // Switch to English: strip /es prefix to return directly to the root path
        targetPath = pathname.replace(/^\/es(\/|$)/, "$1") || "/";
      }

      router.push(targetPath);
    });
  };

  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line/60 bg-white/60 text-xs font-medium text-ink shadow-sm hover:bg-white transition-colors">
      <Globe size={14} className="text-brand-orange" />
      <select
        value={currentLocale}
        disabled={isPending}
        onChange={(e) => handleLanguageChange(e.target.value as "en" | "es")}
        className="bg-transparent text-ink font-semibold focus:outline-none cursor-pointer pr-1 disabled:opacity-50"
        aria-label="Select Language"
      >
        <option value="en">English (US)</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}
