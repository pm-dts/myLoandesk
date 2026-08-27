import JumboLoansView, { getJumboLoansMetadata } from "@/views/JumboLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getJumboLoansMetadata("en");
}

export default function EnglishJumboLoansPage() {
  setRequestLocale("en");
  return <JumboLoansView locale="en" />;
}
