import HomeView, { getHomeMetadata } from "@/views/HomeView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getHomeMetadata("en");
}

export default function EnglishHomePage() {
  setRequestLocale("en");
  return <HomeView locale="en" />;
}
