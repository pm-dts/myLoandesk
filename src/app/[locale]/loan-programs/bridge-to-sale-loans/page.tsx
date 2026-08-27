import BridgeToSaleLoansView, {
  getBridgeToSaleLoansMetadata,
} from "@/views/BridgeToSaleLoansView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getBridgeToSaleLoansMetadata("es");
}

export default async function LocalizedBridgeToSaleLoansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <BridgeToSaleLoansView locale="es" />;
}
