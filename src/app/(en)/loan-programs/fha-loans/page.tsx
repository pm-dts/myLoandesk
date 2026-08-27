import FHALoansView, { getFHALoansMetadata } from "@/views/FHALoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getFHALoansMetadata("en");
}

export default function EnglishFHALoansPage() {
  setRequestLocale("en");
  return <FHALoansView locale="en" />;
}
