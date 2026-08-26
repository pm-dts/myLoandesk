import LoanProgramsView, {
  getLoanProgramsMetadata,
} from "@/views/LoanProgramsView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getLoanProgramsMetadata("en");
}

export default function EnglishLoanProgramsPage() {
  setRequestLocale("en");
  return <LoanProgramsView locale="en" />;
}
