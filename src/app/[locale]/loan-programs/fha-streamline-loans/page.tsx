import FHAStreamlineLoansView, {
  getFHAStreamlineLoansMetadata,
} from "@/views/FHAStreamlineLoansView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getFHAStreamlineLoansMetadata("es");
}

export default async function LocalizedFHAStreamlineLoansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <FHAStreamlineLoansView locale="es" />;
}
