import FixAndFlipLoansView, {
  getFixAndFlipLoansMetadata,
} from "@/views/FixAndFlipLoansView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getFixAndFlipLoansMetadata("es");
}

export default async function LocalizedFixAndFlipLoansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <FixAndFlipLoansView locale="es" />;
}
