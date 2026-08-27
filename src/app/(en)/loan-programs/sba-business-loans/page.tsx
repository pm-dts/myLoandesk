import SBABusinessLoansView, {
  getSBABusinessLoansMetadata,
} from "@/views/SBABusinessLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getSBABusinessLoansMetadata("en");
}

export default function EnglishSBABusinessLoansPage() {
  setRequestLocale("en");
  return <SBABusinessLoansView locale="en" />;
}
