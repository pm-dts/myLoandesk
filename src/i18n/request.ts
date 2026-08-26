import { getRequestConfig } from "next-intl/server";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

const messagesMap: Record<string, any> = {
  en,
  es,
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !["en", "es"].includes(locale)) {
    locale = "en";
  }

  return {
    locale,
    messages: messagesMap[locale] || messagesMap.en,
  };
});
