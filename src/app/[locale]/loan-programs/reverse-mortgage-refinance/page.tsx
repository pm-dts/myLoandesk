import ReverseMortgageRefinanceView, {
  getReverseMortgageRefinanceMetadata,
} from "@/views/ReverseMortgageRefinanceView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getReverseMortgageRefinanceMetadata("es");
}

export default async function LocalizedReverseMortgageRefinancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <ReverseMortgageRefinanceView locale="es" />;
}
