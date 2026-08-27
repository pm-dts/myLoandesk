import DSCRLoansView, { getDSCRLoansMetadata } from "@/views/DSCRLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getDSCRLoansMetadata("en");
}

export default function EnglishDSCRLoansPage() {
  setRequestLocale("en");
  return <DSCRLoansView locale="en" />;
}
