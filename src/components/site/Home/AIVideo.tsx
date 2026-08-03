"use client";

import React, { useState, useEffect, useRef } from "react";
import { PlayCircle, Minimize2, X } from "lucide-react";

export default function VideoGreetingWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const autoCloseTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setIsMounted(true);

        // Auto-open the video widget 1.5 seconds after the website loads
        const openTimer = setTimeout(() => {
            setIsOpen(true);

            // Auto-close after 15 seconds if opened automatically
            autoCloseTimerRef.current = setTimeout(() => {
                setIsOpen(false);
            }, 15000);
        }, 1500);

        return () => {
            clearTimeout(openTimer);
            if (autoCloseTimerRef.current) {
                clearTimeout(autoCloseTimerRef.current);
            }
        };
    }, []);

    // Cancel auto-close if the user interacts with the open popup or manually re-opens it
    const cancelAutoClose = () => {
        if (autoCloseTimerRef.current) {
            clearTimeout(autoCloseTimerRef.current);
            autoCloseTimerRef.current = null;
        }
    };

    const handleManualOpen = () => {
        cancelAutoClose();
        setIsOpen(true);
    };

    // Prevent rendering until hydration is complete
    if (!isMounted) return null;

    return (
        <div className="fixed bottom-40 md:bottom-6 z-[60] flex flex-col right-6 md:right-auto md:left-6 items-end md:items-start">
            {/* --- Pop-up Video State --- */}
            <div
                onMouseEnter={cancelAutoClose}
                onClick={cancelAutoClose}
                className={`transition-all duration-500 ease-in-out origin-bottom-right md:origin-bottom-left ${isOpen
                    ? "opacity-100 scale-100 translate-y-0 mb-4 pointer-events-auto shadow-2xl"
                    : "opacity-0 scale-50 translate-y-10 absolute bottom-0 right-0 md:right-auto md:left-0 pointer-events-none"
                    // Reduced widths to accommodate the tall 9:16 vertical video without overflowing the screen
                    } bg-white rounded-2xl border border-gray-200 overflow-hidden w-[220px] sm:w-[260px] md:w-[300px]`}
            >
                {/* Header Bar */}
                <div className="bg-brand-orange text-white px-4 py-2.5 flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        A Message For You
                    </span>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                            aria-label="Minimize video"
                        >
                            <Minimize2 size={16} />
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                            aria-label="Close video"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>

                {/* 9:16 Vertical Video Container (Padding Top 177.78%) */}
                <div className="relative w-full pt-[177.78%] bg-black">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://app.heygen.com/embeds/4a68a9770c0947f4bd9af59281c19dc3?autoplay=1"
                        title="Check out a new AI Video I just made!"
                        frameBorder="0"
                        allow="encrypted-media; fullscreen; autoplay;"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* --- Floating Button State --- */}
            <button
                onClick={handleManualOpen}
                className={`transition-all duration-500 bg-brand-orange hover:bg-orange-600 text-white rounded-full shadow-[0_8px_30px_rgb(255,107,0,0.3)] flex items-center gap-2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange ${!isOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50 absolute bottom-0 right-0 md:right-auto md:left-0 pointer-events-none"
                    }`}
            >
                <PlayCircle size={22} className="animate-pulse" />
                <span className="text-sm font-bold tracking-wide hidden md:inline-block">Watch Video</span>
            </button>
        </div>
    );
}