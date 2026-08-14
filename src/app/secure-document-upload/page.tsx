import {
  Upload,
  FileText,
  CheckCircle2,
  ShieldCheck,
  X,
  AlertCircle,
} from "lucide-react";
import { Fraunces } from "next/font/google";

export const metadata = {
  title: "Secure Document Upload | MyLoanDesk",
  description:
    "Upload your financial documents securely through MyLoanDesk's encrypted document portal. Ensure your sensitive information is protected while we assist you with your mortgage needs.",
  openGraph: {
    title: "Secure Document Upload | MyLoanDesk",
    description:
      "Upload your financial documents securely through MyLoanDesk's encrypted document portal. Ensure your sensitive information is protected while we assist you with your mortgage needs.",
    type: "website",
    url: "/secure-document-upload",
  },
  alternates: {
    canonical: "/secure-document-upload/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function DocumentUpload() {
  return (
    <div className="bg-[#F8F6F1] min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1
            className={`text-4xl md:text-5xl text-[#0B1221] mb-4 ${fraunces.className}`}
          >
            Secure Document Portal
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Please upload your required financial documents. Your data is
            encrypted and handled with full security.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left: Form Inputs */}
          <div className="w-full col-span-3 min-h-250">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/1Kp158iSAa2ehswEt7mY?notrack=true"
              width={"100%"}
              height={"100%"}
            ></iframe>
          </div>

          {/* Right: Security Sidebar */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-moss-deep text-white p-6 rounded-3xl">
              <ShieldCheck size={32} className="mb-4 text-brand-orange" />
              <h3 className="text-lg font-medium mb-2">Secure & Encrypted</h3>
              <p className="text-sm text-green-100/80 leading-relaxed">
                Your documents are protected. We never store your data on local
                unsecure devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
