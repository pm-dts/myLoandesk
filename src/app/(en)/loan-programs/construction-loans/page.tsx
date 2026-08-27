import ConstructionLoansView, {
  getConstructionLoansMetadata,
} from "@/views/ConstructionLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getConstructionLoansMetadata("en");
}

export default function EnglishConstructionLoansPage() {
  setRequestLocale("en");
  return <ConstructionLoansView locale="en" />;
}
