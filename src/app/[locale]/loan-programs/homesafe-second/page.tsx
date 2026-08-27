import HomeSafeSecondView, {
  getHomeSafeSecondMetadata,
} from "@/views/HomeSafeSecondView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getHomeSafeSecondMetadata("es");
}

export default async function LocalizedHomeSafeSecondPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <HomeSafeSecondView locale="es" />;
}
