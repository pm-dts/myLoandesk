import MedicalProfessionalLoansView, {
  getMedicalProfessionalLoansMetadata,
} from "@/views/MedicalProfessionalLoansView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getMedicalProfessionalLoansMetadata("en");
}

export default function EnglishMedicalProfessionalLoansPage() {
  setRequestLocale("en");
  return <MedicalProfessionalLoansView locale="en" />;
}
