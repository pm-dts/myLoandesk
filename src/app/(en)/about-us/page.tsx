import AboutUsView, { getAboutUsMetadata } from "@/views/AboutUsView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getAboutUsMetadata("en");
}

export default function EnglishAboutUsPage() {
  setRequestLocale("en");
  return <AboutUsView locale="en" />;
}
