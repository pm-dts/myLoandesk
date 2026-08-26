import TermsConditionsView, {
  getTermsConditionsMetadata,
} from "@/views/TermsConditionsView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getTermsConditionsMetadata("es");
}

export default async function LocalizedTermsConditionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <TermsConditionsView locale="es" />;
}
