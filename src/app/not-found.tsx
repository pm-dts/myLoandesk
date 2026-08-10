import Link from "next/link";
import { Home, FileText, PhoneCall, HelpCircle } from "lucide-react";
import { redirect } from "next/navigation";

export const metadata = {
  title: "404 - Page Not Found | MyLoanDesk",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  redirect("/"); // Redirect to the homepage
  return (
    <main className="min-h-screen bg-cream py-24 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background Glow Gradients */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4A574]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-3xl w-full mx-auto text-center relative z-10">
        {/* Large Styled Badge */}
        <div className="inline-flex items-center justify-center bg-brand-orange/10 border border-brand-orange/20 text-brand-orange px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
          404 Error
        </div>

        {/* Big 404 Heading */}
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-display font-light text-ink tracking-tight mb-4">
          Lost your{" "}
          <em className="italic font-serif text-brand-orange">way?</em>
        </h1>

        <p className="text-base sm:text-lg text-ink-2 leading-relaxed max-w-lg mx-auto mb-10">
          The page you are looking for might have been moved, renamed, or is
          temporarily unavailable. Let&apos;s get you back on track.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/"
            className="btn-shine w-full sm:w-auto bg-moss-deep text-primary-bg px-8 py-3.5 rounded-full font-medium text-sm hover:bg-moss-darker transition-colors flex items-center justify-center gap-2 focus-ring shadow-sm"
          >
            <Home size={16} />
            Back to Homepage
          </Link>

          <Link
            href="/get-quote"
            className="btn-shine w-full sm:w-auto bg-brand-orange text-primary-bg px-8 py-3.5 rounded-full font-medium text-sm hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 focus-ring shadow-sm"
          >
            Get a Mortgage Quote
          </Link>
        </div>

        {/* Helpful Quick Links Box */}
        <div className="bg-primary-bg border border-line rounded-2xl p-6 sm:p-8 max-w-xl mx-auto shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-2 mb-4">
            Or try one of these popular pages
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/realtors"
              className="flex items-center justify-center gap-2 p-3 bg-cream/30 hover:bg-cream border border-line/60 rounded-xl text-xs font-medium text-ink transition-colors"
            >
              <FileText size={14} className="text-moss-deep" />
              Realtor Partner
            </Link>

            <Link
              href="/careers"
              className="flex items-center justify-center gap-2 p-3 bg-cream/30 hover:bg-cream border border-line/60 rounded-xl text-xs font-medium text-ink transition-colors"
            >
              <HelpCircle size={14} className="text-moss-deep" />
              Client Referral
            </Link>

            <a
              href="tel:3058916500"
              className="flex items-center justify-center gap-2 p-3 bg-cream/30 hover:bg-cream border border-line/60 rounded-xl text-xs font-medium text-ink transition-colors"
            >
              <PhoneCall size={14} className="text-brand-orange" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
