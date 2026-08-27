import FixAndFlipLoansView, {
  getFixAndFlipLoansMetadata,
} from "@/views/FixAndFlipLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getFixAndFlipLoansMetadata("en");
}

export default function EnglishFixAndFlipLoansPage() {
  setRequestLocale("en");
  return <FixAndFlipLoansView locale="en" />;
}
