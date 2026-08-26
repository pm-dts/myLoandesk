import LoanProgramsView, {
  getLoanProgramsMetadata,
} from "@/views/LoanProgramsView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getLoanProgramsMetadata("es");
}

export default async function LocalizedLoanProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <LoanProgramsView locale="es" />;
}
