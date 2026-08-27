import BridgeLoansView, {
  getBridgeLoansMetadata,
} from "@/views/BridgeLoansView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getBridgeLoansMetadata("es");
}

export default async function LocalizedBridgeLoansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <BridgeLoansView locale="es" />;
}
