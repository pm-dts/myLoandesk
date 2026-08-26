import RealtorsView, { getRealtorsMetadata } from "@/views/RealtorsView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getRealtorsMetadata("en");
}

export default function EnglishRealtorsPage() {
  setRequestLocale("en");
  return <RealtorsView locale="en" />;
}
