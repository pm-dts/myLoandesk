import SBABusinessLoansView, {
  getSBABusinessLoansMetadata,
} from "@/views/SBABusinessLoansView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getSBABusinessLoansMetadata("es");
}

export default async function LocalizedSBABusinessLoansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <SBABusinessLoansView locale="es" />;
}
