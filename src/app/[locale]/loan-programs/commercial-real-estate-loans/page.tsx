import CommercialRealEstateLoansView, {
  getCommercialRealEstateLoansMetadata,
} from "@/views/CommercialRealEstateLoansView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getCommercialRealEstateLoansMetadata("es");
}

export default async function LocalizedCommercialRealEstateLoansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <CommercialRealEstateLoansView locale="es" />;
}
