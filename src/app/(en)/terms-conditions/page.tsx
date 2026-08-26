import TermsConditionsView, {
  getTermsConditionsMetadata,
} from "@/views/TermsConditionsView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getTermsConditionsMetadata("en");
}

export default function EnglishTermsConditionsPage() {
  setRequestLocale("en");
  return <TermsConditionsView locale="en" />;
}
