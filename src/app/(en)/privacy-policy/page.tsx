import PrivacyPolicyView, {
  getPrivacyPolicyMetadata,
} from "@/views/PrivacyPolicyView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getPrivacyPolicyMetadata("en");
}

export default function EnglishPrivacyPolicyPage() {
  setRequestLocale("en");
  return <PrivacyPolicyView locale="en" />;
}
