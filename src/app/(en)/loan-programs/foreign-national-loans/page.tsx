import ForeignNationalLoansView, {
  getForeignNationalLoansMetadata,
} from "@/views/ForeignNationalLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getForeignNationalLoansMetadata("en");
}

export default function EnglishForeignNationalLoansPage() {
  setRequestLocale("en");
  return <ForeignNationalLoansView locale="en" />;
}
