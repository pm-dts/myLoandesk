import EmailCommunicationView, {
  getEmailCommunicationMetadata,
} from "@/views/EmailCommunicationView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getEmailCommunicationMetadata("es");
}

export default async function LocalizedEmailCommunicationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <EmailCommunicationView locale="es" />;
}
