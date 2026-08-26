import ReverseMortgageView, {
  getReverseMortgageMetadata,
} from "@/views/ReverseMortgageView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getReverseMortgageMetadata("es");
}

export default async function LocalizedReverseMortgagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <ReverseMortgageView locale="es" />;
}
