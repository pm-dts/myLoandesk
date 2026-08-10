import {
  ArrowRight,
  CheckCircle2,
  Home,
  Shield,
  Building,
  RefreshCw,
  Briefcase,
  Star,
  FileText,
  Landmark,
  Key,
  Stethoscope,
  TrendingDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";
// import LoanProgramButton from "@/components/site/utils/LoanProgramButton";
import ResidentialProgramsSection from "@/components/site/LoanPrograms/ResidentialProgramsSection";
import HomeEquitySection from "@/components/site/LoanPrograms/RehabRefinanceSection";
import ReverseMortgageSection from "@/components/site/LoanPrograms/ReverseMortgageSection";
import RealEstateInvestmentSection from "@/components/site/LoanPrograms/RealEstateSection";
import CommercialFinancingSection from "@/components/site/LoanPrograms/CommercialSection";
import SBABusinessSection from "@/components/site/LoanPrograms/SBABusinessSection";
import InternationalCustomSection from "@/components/site/LoanPrograms/InternationalSection";

export const metadata = {
  title: "Loan Programs | MyLoanDesk",
  description:
    "Explore our diverse loan programs at MyLoanDesk. We specialize in Residential, Commercial, Rehab, Refinance, Reverse Mortgages, SBA Business Loans, and International Financing options.",
  openGraph: {
    title: "Loan Programs | MyLoanDesk",
    description:
      "Explore our diverse loan programs at MyLoanDesk. We specialize in Residential, Commercial, Rehab, Refinance, Reverse Mortgages, SBA Business Loans, and International Financing options.",
    type: "website",
    url: "https://www.myloandesk.com/loan-programs",
  },
};

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function LoanProgramsPage() {
  return (
    <main className="min-h-screen bg-primary-bg pt-28 pb-24 lg:pt-36">
      {/* Editorial Page Introduction Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="max-w-4xl">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            Call/Text (305) 891-6500 · Professional Lending Spectrum
          </div> */}
          <h1
            className={cn(
              "text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.08] tracking-tight mb-8",
              fraunces.className,
            )}
          >
            Our Loan <br />
            <em className="text-moss-deep italic font-serif">Programs</em>
          </h1>
          <div className="space-y-6 text-lg text-ink-2 leading-relaxed max-w-3xl">
            <p className="font-medium text-ink">
              We are experts in Residential & Commercial Lending, specializing
              in Portfolio Loans.
            </p>
            <p>
              We provide a wide range of Conventional, Jumbo, and Portfolio
              Residential & Commercial mortgage programs for borrowers with
              unique needs that standard big banks often struggle to approve.
            </p>
            <p>
              We also serve clients seeking a lender to pre-approve unique
              properties that may not conform to typical mortgage requirements.
            </p>
            <p>
              My Loan Desk is your one-stop shop for all your mortgage needs. We
              specialize in helping home buyers who struggle to get pre-approved
              under typical lending standards.
            </p>
          </div>
        </div>
      </section>

      {/* Primary 1px Grid Architecture Layout (Residential & Dynamic Lending) */}
      <ResidentialProgramsSection />

      {/* Secondary 1px Grid Architecture Layout (Rehab & Refinance Infrastructure) */}
      <HomeEquitySection />

      {/* Reverse Mortgage */}
      <ReverseMortgageSection />

      {/* Real Estate Investment Loans */}
      <RealEstateInvestmentSection />

      {/* Commercial  */}
      <CommercialFinancingSection />

      {/*  SBA and business loans */}
      <SBABusinessSection />

      {/* Global Borders Cross-Section (Mexico, Portugal & Specialty EEP / Medical Channels) */}
      <InternationalCustomSection />

      {/* Footer Legal Context Section */}
      <section className="bg-cream/40 border-t border-line py-12 text-ink-2 text-[11px] leading-relaxed">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-4">
          <p>
            * Rates and programs are illustrations subject to change without
            notice. These calculations do not constitute an official Loan
            Estimate or a binding commitment to lend. Qualification is subject
            to verification of financial assets and credit data profiles.
          </p>
          <p>
            MyLoanDesk.com is an independent lending entity and is not
            affiliated with the HUD, FHA, VA, USDA, or any federal agency. We
            strictly uphold Equal Housing Opportunity lending baselines.
          </p>
          <p>
            Secured Horizon Mortgage Group, Inc. NMLS 314226, 1444825
            (www.nmlsconsumeraccess.org) | (305) 891-6500 | 1801 NE 123 St,
            Suite 314, North Miami, FL 33181.
          </p>
        </div>
      </section>
    </main>
  );
}
