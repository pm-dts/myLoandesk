import HomeSafeSecondView, {
  getHomeSafeSecondMetadata,
} from "@/views/HomeSafeSecondView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getHomeSafeSecondMetadata("en");
}

export default function EnglishHomeSafeSecondPage() {
  setRequestLocale("en");
  return <HomeSafeSecondView locale="en" />;
}
