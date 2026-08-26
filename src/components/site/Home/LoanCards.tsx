"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Home, RefreshCw, X, PlayCircle, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

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

interface LoansSectionProps {
  locale?: string;
}

export default function LoansSection({ locale = "en" }: LoansSectionProps) {
  const router = useRouter();
  const t = useTranslations("Home.LoanCards");
  const isEs = locale === "es";

  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const closeVideo = () => setActiveVideo(null);

  const forwardHref = isEs
    ? "/es/loan-programs#resident"
    : "/loan-programs#resident";
  const reverseHref = isEs ? "/es/reverse-mortgage" : "/reverse-mortgage";

  return (
    <section id="loans" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-5">
              {t("section_badge")}
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.02] tracking-tight font-light text-ink">
              {t("headline_start")}{" "}
              <em className="not-italic font-serif italic text-moss-deep">
                {t("headline_italic")}
              </em>{" "}
              {t("headline_end")}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-ink-2 leading-relaxed">
              {t("subheadline")}
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-7xl mx-auto items-stretch">
          {/* Forward Mortgage Card */}
          <article
            onClick={() => router.push(forwardHref)}
            className="group bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-moss-deep/10 flex items-center justify-center mb-5 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Home className="text-moss-deep" size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-2xl mb-2 text-ink group-hover:text-brand-orange transition-colors">
                {t("forward.title")}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("forward.description")}
              </p>
            </div>

            <div className="mt-auto space-y-3 pt-4 border-t border-line/40">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents card navigation
                  setActiveVideo({
                    src: "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Forward+Mortgage_1080p_caption.mp4",
                    title: t("forward.video_title"),
                  });
                }}
                className="w-full py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm relative z-10"
              >
                <PlayCircle size={16} /> {t("forward.video_button")}
              </button>
              <div className="w-full py-3 bg-cream group-hover:bg-moss-deep group-hover:text-white border border-line group-hover:border-moss-deep rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all">
                {t("forward.explore_button")} <ArrowRight size={14} />
              </div>
            </div>
          </article>

          {/* Reverse Mortgage Card */}
          <article
            onClick={() => router.push(reverseHref)}
            className="group bg-cream border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <RefreshCw
                  className="text-brand-orange"
                  size={22}
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="font-display text-2xl mb-2 text-ink group-hover:text-brand-orange transition-colors">
                {t("reverse.title")}
              </h3>
              <p className="text-sm text-ink-2 leading-relaxed mb-6">
                {t("reverse.description")}
              </p>
            </div>

            <div className="mt-auto space-y-3 pt-4 border-t border-line/40">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents card navigation
                  setActiveVideo({
                    src: "https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Reverse+Mortgage+%E2%80%93+Turn+Your+Home+Equity+Into+Financial+Freedom_1080p_caption.mp4",
                    title: t("reverse.video_title"),
                  });
                }}
                className="w-full py-3 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm relative z-10"
              >
                <PlayCircle size={16} /> {t("reverse.video_button")}
              </button>
              <div className="w-full py-3 bg-cream group-hover:bg-moss-deep group-hover:text-white border border-line group-hover:border-moss-deep rounded-xl text-xs font-semibold text-ink flex items-center justify-center gap-2 transition-all">
                {t("reverse.explore_button")} <ArrowRight size={14} />
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Video Modal Player Overlay */}
      <VideoModal videoInfo={activeVideo} onClose={closeVideo} />
    </section>
  );
}
