import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Mortgage Consultation | MyLoanDesk",
  description:
    "Schedule a direct consultation with our expert loan origination team. Choose a convenient time to discuss your home financing and mortgage options.",
  openGraph: {
    title: "Book a Mortgage Consultation | MyLoanDesk",
    description:
      "Schedule a direct consultation with our expert loan origination team.",
    type: "website",
    url: "https://www.myloandesk.com/calendar",
  },
};

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
