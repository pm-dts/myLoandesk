import MedicalProfessionalLoansView, {
  getMedicalProfessionalLoansMetadata,
} from "@/views/MedicalProfessionalLoansView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getMedicalProfessionalLoansMetadata("es");
}

export default async function LocalizedMedicalProfessionalLoansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <MedicalProfessionalLoansView locale="es" />;
}
