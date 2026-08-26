import SecureDocumentUploadView, {
  getSecureDocumentUploadMetadata,
} from "@/views/SecureDocumentUploadView";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  return getSecureDocumentUploadMetadata("es");
}

export default async function LocalizedSecureDocumentUploadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es") notFound();

  setRequestLocale("es");
  return <SecureDocumentUploadView locale="es" />;
}
