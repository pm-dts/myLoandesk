import { CheckCircle2, Home, Landmark, ShieldCheck } from "lucide-react";
import { Fraunces } from "next/font/google";
import Link from "next/link";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AboutUs() {
  const valueProps = [
    {
      id: 1,
      title: "Competitive Rates",
      description:
        "We leverage our vast independent broker network to secure highly aggressive pricing and optimal financial structures for your loan.",
    },
    {
      id: 2,
      title: "Wide Variety of Mortgage Options",
      description:
        "From classic conventional pathways to unique portfolio solutions, choose from an extensive suite built around your goals.",
    },
    {
      id: 3,
      title: "Immediate Answers When You Need Them",
      description:
        "Skip the institutional bureaucracy. Get real-time updates and clear, transparent answers directly from real experts.",
    },
  ];

  return (
    <div className="bg-[#F8F6F1] min-h-screen selection:bg-brand-orange/20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden bg-white border-b border-line/60">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#FF6B00] font-bold uppercase tracking-widest text-xs sm:text-sm block mb-4">
            Welcome to MyLoanDesk.com
          </span>
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl text-[#0B1221] font-medium tracking-tight mb-6 ${fraunces.className}`}
          >
            Your #1 Source for Residential & Commercial Mortgage Programs
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between complex financing situations and
            predictable homeownership through independent lending flexibility.
          </p>
        </div>
        {/* Subtle decorative grid overlay background element */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </section>

      {/* Main Core Mission Details Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left Column Description */}
          <div className="md:col-span-7 space-y-6">
            <h2
              className={`text-3xl text-[#0B1221] tracking-tight ${fraunces.className}`}
            >
              Specializing in the Uncommon
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              We proudly provide a wide range of conventional, Jumbo, and
              portfolio residential & commercial mortgage programs configured
              precisely for the special type of borrowers that have unique
              requirements.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Whether it's an atypical financial setup or a highly unique
              commercial property that does not fit neatly into a normal bank's
              strict box criteria, our desk handles the architecture to make
              formatting approval possible.
            </p>
          </div>

          {/* Right Column Core Values callout */}
          <div className="md:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-line/50 space-y-6 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFF4ED] rounded-bl-full flex items-center justify-center text-[#FF6B00]/10 pointer-events-none">
              <ShieldCheck size={40} className="translate-x-3 -translate-y-3" />
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Our Pledge
            </h3>
            <p className="text-[#0B1221] text-base leading-relaxed font-medium italic">
              "Whether you’re buying a new property or refinancing an existing
              mortgage, MyLoanDesk.com will be by your side from start to
              finish."
            </p>
            <div className="h-px bg-gray-100 border-dashed border-b my-2"></div>
            <p className="text-sm text-gray-600">
              Making sure that the process is completely painless, organized,
              and perfectly predictable—without any unexpected surprises along
              the way.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Features List: Get More From MyLoanDesk */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="border-t border-gray-300/60 pt-16">
          <h2
            className={`text-3xl text-[#0B1221] tracking-tight mb-12 text-center md:text-left ${fraunces.className}`}
          >
            Get More From MyLoanDesk.com
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.id}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFF4ED] flex items-center justify-center text-[#FF6B00] font-bold text-sm mb-6 group-hover:scale-105 transition-transform">
                  {prop.id}
                </div>
                <h3 className="text-lg font-bold text-[#0B1221] mb-3 group-hover:text-[#FF6B00] transition-colors leading-snug">
                  {prop.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="bg-[#1A2639] text-white py-16 px-6 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h3
            className={`text-3xl md:text-4xl text-white ${fraunces.className}`}
          >
            Ready to secure your strategy?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Connect with our independent underwriting desk today to look through
            scenario approvals or run estimates.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/#start"
              className="bg-[#FF6B00] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#e66000] transition-colors shadow-md outline-none focus:ring-4 focus:ring-[#FF6B00]/30 text-sm"
            >
              Speak With Us Now
            </Link>
            <Link
              href="/#live-rates-widget"
              className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors text-sm"
            >
              Explore Live Rates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
