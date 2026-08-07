"use client";

import { useRouter } from "next/navigation";
import { Home, RefreshCw } from "lucide-react";

export default function LoansSection() {
  const router = useRouter();

  const handleCardClick = (href: string, e: React.MouseEvent) => {
    // If the click happened on or inside the video container, don't navigate
    const target = e.target as HTMLElement;
    if (target.closest("video") || target.closest(".video-container")) {
      return;
    }
    router.push(href);
  };

  return (
    <section id="loans" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-5">
              02 — Loan types
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.02] tracking-tight font-light text-ink">
              One desk.{" "}
              <em className="not-italic font-serif italic text-moss-deep">
                Every
              </em>{" "}
              kind of mortgage.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-ink-2 leading-relaxed">
              From first-time buyer to seasoned investor, we'll match you to the
              loan structure that actually fits your life — not the one that's
              easiest to sell.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-7xl mx-auto items-stretch">
          {/* Forward Mortgage Card */}
          <div className="block h-full">
            <article
              onClick={(e) => handleCardClick("/loan-programs#resident", e)}
              className="bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1 h-full flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-moss-deep/10 flex items-center justify-center mb-5">
                  <Home
                    className="text-moss-deep"
                    size={22}
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="font-display text-2xl mb-2 text-ink">
                  Forward Mortgage
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed mb-5">
                  Traditional financing structures including Conventional, FHA,
                  VA, and Jumbo loan programs. Built with flexible terms for
                  purchasing a new property or executing standard refinance
                  options.
                </p>

                {/* Embedded Video */}
                <div
                  className="video-container mb-6 rounded-xl overflow-hidden border border-line/60 bg-black aspect-video w-full shadow-sm cursor-default"
                  onClick={(e) => e.stopPropagation()}
                >
                  <video
                    src="/reverse-mortgage.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-line/40 mt-auto">
                <span className="text-ink-2 font-medium">
                  Purchase & Refinance
                </span>
                <span className="font-semibold text-moss-deep ulink flex items-center gap-1">
                  Explore Programs →
                </span>
              </div>
            </article>
          </div>

          {/* Reverse Mortgage Card */}
          <div className="block h-full">
            <article
              onClick={(e) => handleCardClick("/reverse-mortgage", e)}
              className="bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1 h-full flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5">
                  <RefreshCw
                    className="text-brand-orange"
                    size={22}
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="font-display text-2xl mb-2 text-ink">
                  Reverse Mortgage
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed mb-5">
                  Tap into home equity without the burden of monthly mortgage
                  payments. Designed exclusively for older homeowners looking to
                  convert home equity into tax-free cash or dynamic credit
                  lines.
                </p>

                {/* Embedded Video */}
                <div
                  className="video-container mb-6 rounded-xl overflow-hidden border border-line/60 bg-black aspect-video w-full shadow-sm cursor-default"
                  onClick={(e) => e.stopPropagation()}
                >
                  <video
                    src="/reverse-mortgage.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-line/40 mt-auto">
                <span className="text-ink-2 font-medium">
                  No monthly mortgage payments
                </span>
                <span className="font-semibold text-moss-deep ulink flex items-center gap-1">
                  Explore Options →
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
