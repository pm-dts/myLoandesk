"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Home, RefreshCw, X, PlayCircle, ArrowRight } from "lucide-react";

// Modal Component for Video Popup
function VideoModal({
  videoInfo,
  onClose,
}: {
  videoInfo: { src: string; title: string } | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (videoInfo) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [videoInfo]);

  if (!videoInfo) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
            aria-label="Close video"
          >
            <X size={20} />
          </button>
        </div>
        <video
          key={videoInfo.src}
          src={videoInfo.src}
          controls
          autoPlay
          playsInline
          className="w-full h-full object-contain max-h-[80vh]"
        />
      </div>
    </div>
  );
}

export default function LoansSection() {
  const router = useRouter();
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const closeVideo = () => setActiveVideo(null);

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
          <article className="bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 flex items-center justify-center mb-5 shrink-0">
                <Home className="text-moss-deep" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-2xl mb-2 text-ink">
                Forward Mortgage
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                Traditional financing structures including Conventional, FHA,
                VA, and Jumbo loan programs. Built with flexible terms for
                purchasing a new property or executing standard refinance
                options.
              </p>
            </div>

            <div className="mt-auto space-y-3 pt-4 border-t border-line/40">
              <button
                onClick={() =>
                  setActiveVideo({
                    src: "/forward-mortgage.mp4",
                    title: "Forward Mortgage",
                  })
                }
                className="w-full py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <PlayCircle size={16} /> See how it's done
              </button>
              <button
                onClick={() => router.push("/loan-programs#resident")}
                className="w-full py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line hover:border-moss-deep rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
              >
                Explore Options <ArrowRight size={14} />
              </button>
            </div>
          </article>

          {/* Reverse Mortgage Card */}
          <article className="bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5 shrink-0">
                <RefreshCw
                  className="text-brand-orange"
                  size={22}
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="font-display text-2xl mb-2 text-ink">
                Reverse Mortgage
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                Tap into home equity without the burden of monthly mortgage
                payments. Designed exclusively for older homeowners looking to
                convert home equity into tax-free cash or dynamic credit lines.
              </p>
            </div>

            <div className="mt-auto space-y-3 pt-4 border-t border-line/40">
              <button
                onClick={() =>
                  setActiveVideo({
                    src: "/reverse-mortgage.mp4",
                    title: "Reverse Mortgage",
                  })
                }
                className="w-full py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <PlayCircle size={16} /> See how it's done
              </button>
              <button
                onClick={() => router.push("/reverse-mortgage")}
                className="w-full py-3 bg-cream hover:bg-moss-deep hover:text-white border border-line hover:border-moss-deep rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all"
              >
                Explore Options <ArrowRight size={14} />
              </button>
            </div>
          </article>
        </div>
      </div>

      {/* Video Modal Player Overlay */}
      <VideoModal videoInfo={activeVideo} onClose={closeVideo} />
    </section>
  );
}
