import ReverseMortgagePurchaseView, {
  getReverseMortgagePurchaseMetadata,
} from "@/views/ReverseMortgagePurchaseView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getReverseMortgagePurchaseMetadata("es");
}

export default async function LocalizedReverseMortgagePurchasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <ReverseMortgagePurchaseView locale="es" />;
}
