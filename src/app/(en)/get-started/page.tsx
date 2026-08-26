import GetStartedView, { getGetStartedMetadata } from "@/views/GetStartedView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getGetStartedMetadata("en");
}

export default function EnglishGetStartedPage() {
  setRequestLocale("en");
  return <GetStartedView locale="en" />;
}
