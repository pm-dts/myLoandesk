import VALoansView, { getVALoansMetadata } from "@/views/VALoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getVALoansMetadata("en");
}

export default function EnglishVALoansPage() {
  setRequestLocale("en");
  return <VALoansView locale="en" />;
}
