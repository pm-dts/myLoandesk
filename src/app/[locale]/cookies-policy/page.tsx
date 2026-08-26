import CookiePolicyView, {
  getCookiePolicyMetadata,
} from "@/views/CookiePolicyView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getCookiePolicyMetadata("es");
}

export default async function LocalizedCookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <CookiePolicyView locale="es" />;
}
