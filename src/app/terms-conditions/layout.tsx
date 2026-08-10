import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | MyLoanDesk",
  description:
    "Please read these Terms & Conditions carefully before using our Services. By accessing or using our website, you agree to be bound by these Terms.",
  openGraph: {
    title: "Terms & Conditions | MyLoanDesk",
    description:
      "Please read these Terms & Conditions carefully before using our Services. By accessing or using our website, you agree to be bound by these Terms.",
    type: "website",
    url: "https://www.myloandesk.com/terms-conditions",
  },
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
