import CalendarView, { getCalendarMetadata } from "@/views/CalendarView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getCalendarMetadata("en");
}

export default function EnglishCalendarPage() {
  setRequestLocale("en");
  return <CalendarView locale="en" />;
}
