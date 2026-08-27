import HomeEquityHelocView, {
  getHomeEquityHelocMetadata,
} from "@/views/HomeEquityHelocView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getHomeEquityHelocMetadata("es");
}

export default async function LocalizedHomeEquityHelocPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <HomeEquityHelocView locale="es" />;
}
