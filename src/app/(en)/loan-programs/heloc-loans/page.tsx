import HomeEquityHelocView, {
  getHomeEquityHelocMetadata,
} from "@/views/HomeEquityHelocView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getHomeEquityHelocMetadata("en");
}

export default function EnglishHomeEquityHelocPage() {
  setRequestLocale("en");
  return <HomeEquityHelocView locale="en" />;
}
