import PrivacyPolicyView, {
  getPrivacyPolicyMetadata,
} from "@/views/PrivacyPolicyView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getPrivacyPolicyMetadata("es");
}

export default async function LocalizedPrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <PrivacyPolicyView locale="es" />;
}
