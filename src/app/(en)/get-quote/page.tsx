import GetQuoteView, { getQuoteMetadata } from "@/views/GetQuoteView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getQuoteMetadata("en");
}

export default function EnglishGetQuotePage() {
  setRequestLocale("en");
  return <GetQuoteView locale="en" />;
}
