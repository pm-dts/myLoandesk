import EmailCommunicationView, {
  getEmailCommunicationMetadata,
} from "@/views/EmailCommunicationView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getEmailCommunicationMetadata("en");
}

export default function EnglishEmailCommunicationPage() {
  setRequestLocale("en");
  return <EmailCommunicationView locale="en" />;
}
