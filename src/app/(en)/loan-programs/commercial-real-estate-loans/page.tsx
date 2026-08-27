import CommercialRealEstateLoansView, {
  getCommercialRealEstateLoansMetadata,
} from "@/views/CommercialRealEstateLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getCommercialRealEstateLoansMetadata("en");
}

export default function EnglishCommercialRealEstateLoansPage() {
  setRequestLocale("en");
  return <CommercialRealEstateLoansView locale="en" />;
}
