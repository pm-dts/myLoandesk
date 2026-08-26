import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

import en from "@/locales/en.json";
import es from "@/locales/es.json";

const messagesMap: Record<string, any> = {
  en,
  es,
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messagesMap[locale] || messagesMap.en,
  };
});
