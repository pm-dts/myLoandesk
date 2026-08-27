import PortugalPropertyFinancingView, {
  getPortugalPropertyFinancingMetadata,
} from "@/views/PortugalPropertyFinancingView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getPortugalPropertyFinancingMetadata("en");
}

export default function EnglishPortugalPropertyFinancingPage() {
  setRequestLocale("en");
  return <PortugalPropertyFinancingView locale="en" />;
}
