import CookiePolicyView, {
  getCookiePolicyMetadata,
} from "@/views/CookiePolicyView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getCookiePolicyMetadata("en");
}

export default function EnglishCookiePolicyPage() {
  setRequestLocale("en");
  return <CookiePolicyView locale="en" />;
}
