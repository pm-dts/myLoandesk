import FHAAlternativeLoansView, {
  getFHAAlternativeLoansMetadata,
} from "@/views/FHAAlternativeLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getFHAAlternativeLoansMetadata("en");
}

export default function EnglishFHAAlternativeLoansPage() {
  setRequestLocale("en");
  return <FHAAlternativeLoansView locale="en" />;
}
