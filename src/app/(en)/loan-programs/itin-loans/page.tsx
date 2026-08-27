import ITINLoansView, { getITINLoansMetadata } from "@/views/ITINLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getITINLoansMetadata("en");
}

export default function EnglishITINLoansPage() {
  setRequestLocale("en");
  return <ITINLoansView locale="en" />;
}
