import type { Metadata } from "next";
import GetStartedForm from "@/components/site/GetStated/GetStartedForm";

export const metadata: Metadata = {
  title: "Get Started | MyLoanDesk",
  description:
    "Answer a few quick questions to discover the best mortgage programs for your situation.",
  openGraph: {
    title: "Get Started | MyLoanDesk",
    description:
      "Answer a few quick questions to discover the best mortgage programs for your situation.",
    type: "website",
    url: "https://www.myloandesk.com/get-started",
  },
};

export default function GetStartedPage() {
  return (
    // By returning the Form directly, if your root layout contains headers/footers,
    // you must conditionally hide them in `app/layout.tsx` based on the path,
    // OR place this in a Route Group like `app/(funnel)/get-started/page.tsx` that has an empty `layout.tsx`.
    <GetStartedForm />
  );
}
