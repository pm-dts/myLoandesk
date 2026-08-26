import AccessibilityView, {
  getAccessibilityMetadata,
} from "@/views/AccessibilityView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getAccessibilityMetadata("en");
}

export default function EnglishAccessibilityPage() {
  setRequestLocale("en");
  return <AccessibilityView locale="en" />;
}
