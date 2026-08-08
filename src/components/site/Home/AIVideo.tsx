"use client";

import { useState, useEffect } from "react";
import { PlayCircle, Minimize2, X } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

export default function VideoGreetingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let unmountTimer: NodeJS.Timeout;

    if (isOpen) {
      setShowVideo(true);
    } else {
      unmountTimer = setTimeout(() => {
        setShowVideo(false);
      }, 500);
    }

    return () => {
      if (unmountTimer) clearTimeout(unmountTimer);
    };
  }, [isOpen]);

  const handleManualOpen = () => {
    setIsOpen(true);

    sendGTMEvent({
      event: "floating_video_greeting_opened",
      video_title: "A Message For You",
      video_provider: "local",
      category: "engagement",
      label: "Floating Video Greeting Widget",
      page_path: pathname || "/",
    });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isMounted) return null;

  return (
    <>
      {/* --- Centered Pop-up Video State --- */}
      <div className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none p-4 sm:p-6">
        <div
          className={`transition-all duration-500 ease-out bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xl w-[340px] sm:w-[500px] md:w-[680px] lg:w-[760px] max-h-[85vh] ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-75 translate-y-8 pointer-events-none"
          }`}
        >
          {/* Header Bar */}
          <div className="bg-brand-orange text-white px-4 py-3 flex items-center justify-between">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="truncate">A Message For You</span>
            </span>
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={handleClose}
                className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                aria-label="Minimize video"
              >
                <Minimize2 size={18} />
              </button>
              <button
                onClick={handleClose}
                className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                aria-label="Close video"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* 16:9 Landscape Video Container */}
          <div className="relative w-full aspect-[16/9] bg-black">
            {showVideo && (
              <video
                className="absolute top-0 left-0 w-full h-full outline-none"
                src="https://myloandesk-assets.s3.eu-north-1.amazonaws.com/Introducing+Platform2_1080p_caption.mp4"
                autoPlay
                playsInline
                controls
                muted
                onEnded={handleClose}
              />
            )}
          </div>
        </div>
      </div>

      {/* --- Fully Rounded Floating Button (Bottom Right) --- */}
      <div className="fixed bottom-40 right-5 z-[60] flex flex-col items-end">
        <button
          onClick={handleManualOpen}
          aria-label="Watch Video"
          className={`transition-all duration-500 bg-brand-orange hover:bg-orange-600 text-white w-14 h-14 rounded-full shadow-[0_8px_30px_rgb(255,107,0,0.35)] flex items-center justify-center p-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange ${
            !isOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-50 pointer-events-none"
          }`}
        >
          <PlayCircle size={24} className="animate-pulse shrink-0" />
        </button>
      </div>
    </>
  );
}
