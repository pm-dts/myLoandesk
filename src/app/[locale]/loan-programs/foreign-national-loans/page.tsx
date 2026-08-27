import ForeignNationalLoansView, {
  getForeignNationalLoansMetadata,
} from "@/views/ForeignNationalLoansView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getForeignNationalLoansMetadata("es");
}

export default async function LocalizedForeignNationalLoansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <ForeignNationalLoansView locale="es" />;
}
