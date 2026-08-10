import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MyLoanDesk",
  description:
    "This Privacy Policy outlines how MyLoanDesk collects, uses, shares, and protects your personal information when you visit our website, communicate with us, or use our online services.",
  openGraph: {
    title: "Privacy Policy | MyLoanDesk",
    description:
      "This Privacy Policy outlines how MyLoanDesk collects, uses, shares, and protects your personal information when you visit our website, communicate with us, or use our online services.",
    type: "website",
    url: "https://www.myloandesk.com/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
