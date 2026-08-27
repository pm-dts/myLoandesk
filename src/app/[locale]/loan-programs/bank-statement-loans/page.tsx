import BankStatementLoansView, {
  getBankStatementLoansMetadata,
} from "@/views/BankStatementLoansView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getBankStatementLoansMetadata("es");
}

export default async function LocalizedBankStatementLoansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <BankStatementLoansView locale="es" />;
}
