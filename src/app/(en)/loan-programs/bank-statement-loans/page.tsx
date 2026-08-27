import BankStatementLoansView, {
  getBankStatementLoansMetadata,
} from "@/views/BankStatementLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getBankStatementLoansMetadata("en");
}

export default function EnglishBankStatementLoansPage() {
  setRequestLocale("en");
  return <BankStatementLoansView locale="en" />;
}
