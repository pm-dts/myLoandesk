import SecureDocumentUploadView, {
  getSecureDocumentUploadMetadata,
} from "@/views/SecureDocumentUploadView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getSecureDocumentUploadMetadata("en");
}

export default function EnglishSecureDocumentUploadPage() {
  setRequestLocale("en");
  return <SecureDocumentUploadView locale="en" />;
}
