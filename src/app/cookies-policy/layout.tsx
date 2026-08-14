import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | MyLoanDesk",
  description:
    "This Cookie Policy explains how MyLoanDesk uses cookies and similar technologies when you visit our website, landing pages, mortgage calculators, customer portal, and related online services.",
  openGraph: {
    title: "Cookie Policy | MyLoanDesk",
    description:
      "This Cookie Policy explains how MyLoanDesk uses cookies and similar technologies when you visit our website, landing pages, mortgage calculators, customer portal, and related online services.",
    type: "website",
    url: "/cookies-policy",
  },
  alternates: {
    canonical: "/cookies-policy/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
