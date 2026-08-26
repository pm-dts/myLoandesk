import CareersView, { getCareersMetadata } from "@/views/CareersView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getCareersMetadata("en");
}

export default function EnglishCareersPage() {
  setRequestLocale("en");
  return <CareersView locale="en" />;
}
