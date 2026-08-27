import TwoOneBuydownView, {
  getTwoOneBuydownMetadata,
} from "@/views/TwoOneBuydownView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getTwoOneBuydownMetadata("es");
}

export default async function LocalizedTwoOneBuydownPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <TwoOneBuydownView locale="es" />;
}
