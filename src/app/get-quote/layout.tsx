import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Mortgage Quote | MyLoanDesk",
  description:
    "Get a personalized mortgage quote from MyLoanDesk. Fill out our short form and a mortgage specialist will review your goals and contact you with the best available options.",
  openGraph: {
    title: "Get a Mortgage Quote | MyLoanDesk",
    description:
      "Get a personalized mortgage quote from MyLoanDesk. Fill out our short form and a mortgage specialist will review your goals and contact you with the best available options.",
    type: "website",
    url: "https://www.myloandesk.com/get-quote",
  },
};

export default function GetQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
