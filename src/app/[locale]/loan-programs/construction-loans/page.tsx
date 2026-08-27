import ConstructionLoansView, {
  getConstructionLoansMetadata,
} from "@/views/ConstructionLoansView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getConstructionLoansMetadata("es");
}

export default async function LocalizedConstructionLoansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <ConstructionLoansView locale="es" />;
}
