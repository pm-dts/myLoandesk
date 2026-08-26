import ReverseMortgageView, {
  getReverseMortgageMetadata,
} from "@/views/ReverseMortgageView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getReverseMortgageMetadata("en");
}

export default function EnglishReverseMortgagePage() {
  setRequestLocale("en");
  return <ReverseMortgageView locale="en" />;
}
