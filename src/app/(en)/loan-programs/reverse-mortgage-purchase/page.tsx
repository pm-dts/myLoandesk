import ReverseMortgagePurchaseView, {
  getReverseMortgagePurchaseMetadata,
} from "@/views/ReverseMortgagePurchaseView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getReverseMortgagePurchaseMetadata("en");
}

export default function EnglishReverseMortgagePurchasePage() {
  setRequestLocale("en");
  return <ReverseMortgagePurchaseView locale="en" />;
}
