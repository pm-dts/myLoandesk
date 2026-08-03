"use client";

import React, { useState, useEffect } from "react";
import { PlayCircle, Minimize2, X } from "lucide-react";

export default function VideoGreetingWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const openTimer = setTimeout(() => {
            setIsOpen(true);
        }, 1500);

        return () => clearTimeout(openTimer);
    }, []);

    useEffect(() => {
        let closeTimer: NodeJS.Timeout;

        if (isOpen) {
            closeTimer = setTimeout(() => {
                setIsOpen(false);
            }, 14000); // 14 seconds
        }

        return () => {
            if (closeTimer) {
                clearTimeout(closeTimer);
            }
        };
    }, [isOpen]);

    const handleManualOpen = () => {
        setIsOpen(true);
    };

    // Prevent rendering until hydration is complete
    if (!isMounted) return null;

    return (
        <>
            {/* --- Centered Pop-up Video State --- */}
            <div
                className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none"
            >
                <div
                    className={`transition-all duration-500 ease-out bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xl w-[240px] sm:w-[280px] md:w-[320px] ${isOpen
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
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                                aria-label="Minimize video"
                            >
                                <Minimize2 size={18} />
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                                aria-label="Close video"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* 9:16 Vertical Video Container using aspect ratio */}
                    <div className="relative w-full aspect-[9/16] bg-black">
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
            </div>

            {/* --- Fully Rounded Floating Button (Bottom Right) --- */}
            <div className="fixed bottom-40 right-5 z-[60] flex flex-col items-end">
                <button
                    onClick={handleManualOpen}
                    aria-label="Watch Video"
                    className={`transition-all duration-500 bg-brand-orange hover:bg-orange-600 text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-[0_8px_30px_rgb(255,107,0,0.35)] flex items-center justify-center p-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange ${!isOpen
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