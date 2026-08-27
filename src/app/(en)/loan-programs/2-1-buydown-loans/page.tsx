import TwoOneBuydownView, {
  getTwoOneBuydownMetadata,
} from "@/views/TwoOneBuydownView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getTwoOneBuydownMetadata("en");
}

export default function EnglishTwoOneBuydownPage() {
  setRequestLocale("en");
  return <TwoOneBuydownView locale="en" />;
}
