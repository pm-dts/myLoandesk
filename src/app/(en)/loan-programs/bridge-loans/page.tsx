import BridgeLoansView, {
  getBridgeLoansMetadata,
} from "@/views/BridgeLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getBridgeLoansMetadata("en");
}

export default function EnglishBridgeLoansPage() {
  setRequestLocale("en");
  return <BridgeLoansView locale="en" />;
}
