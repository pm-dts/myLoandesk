import ReverseMortgageRefinanceView, {
  getReverseMortgageRefinanceMetadata,
} from "@/views/ReverseMortgageRefinanceView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getReverseMortgageRefinanceMetadata("en");
}

export default function EnglishReverseMortgageRefinancePage() {
  setRequestLocale("en");
  return <ReverseMortgageRefinanceView locale="en" />;
}
