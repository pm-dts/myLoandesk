import FHAStreamlineLoansView, {
  getFHAStreamlineLoansMetadata,
} from "@/views/FHAStreamlineLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getFHAStreamlineLoansMetadata("en");
}

export default function EnglishFHAStreamlineLoansPage() {
  setRequestLocale("en");
  return <FHAStreamlineLoansView locale="en" />;
}
