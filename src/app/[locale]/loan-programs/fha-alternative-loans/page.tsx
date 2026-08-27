import FHAAlternativeLoansView, {
  getFHAAlternativeLoansMetadata,
} from "@/views/FHAAlternativeLoansView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getFHAAlternativeLoansMetadata("es");
}

export default async function LocalizedFHAAlternativeLoansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <FHAAlternativeLoansView locale="es" />;
}
