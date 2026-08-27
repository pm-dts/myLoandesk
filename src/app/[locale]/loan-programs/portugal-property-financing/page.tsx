import PortugalPropertyFinancingView, {
  getPortugalPropertyFinancingMetadata,
} from "@/views/PortugalPropertyFinancingView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getPortugalPropertyFinancingMetadata("es");
}

export default async function LocalizedPortugalPropertyFinancingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <PortugalPropertyFinancingView locale="es" />;
}
