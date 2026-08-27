import BridgeToSaleLoansView, {
  getBridgeToSaleLoansMetadata,
} from "@/views/BridgeToSaleLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getBridgeToSaleLoansMetadata("en");
}

export default function EnglishBridgeToSaleLoansPage() {
  setRequestLocale("en");
  return <BridgeToSaleLoansView locale="en" />;
}
