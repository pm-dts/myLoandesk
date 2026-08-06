"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { sendGTMEvent } from "@next/third-parties/google";

import homeLoansImg from "@/assets/home-loans.png";
import realEstateLoansImg from "@/assets/real-estate-loans.png";
import commercialLoansImg from "@/assets/commercial-loans.png";
import businessLoansImg from "@/assets/business-loans.png";

export default function HeroSmallIcons() {
  const router = useRouter();
  const pathname = usePathname();

  // State to manage the initial load flash and the on-click flash
  const [initialFlash, setInitialFlash] = useState(true);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Remove the initial load flash after it completes (800ms)
    const timer = setTimeout(() => setInitialFlash(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (href: string, index: number, alt: string) => {
    // Fire GTM event for hero icon click
    sendGTMEvent({
      event: "hero_icon_clicked",
      category: "navigation",
      label: `Hero Icon - ${alt}`,
      destination_url: href,
      page_path: pathname || "/",
    });

    // Trigger the flash on the specific clicked item
    setClickedIndex(index);

    // Wait for the flash animation to play before routing
    setTimeout(() => {
      router.push(href);
      setClickedIndex(null); // Reset in case they navigate back
    }, 500);
  };

  const icons = [
    {
      src: homeLoansImg,
      href: "/loan-programs#conventional",
      alt: "Home Loans",
      color: "rgba(255, 107, 0, 0.8)", // Orange
    },
    {
      src: realEstateLoansImg,
      href: "/loan-programs#real-estate",
      alt: "Real Estate Loans",
      color: "rgba(168, 85, 247, 0.8)", // Purple
    },
    {
      src: commercialLoansImg,
      href: "/loan-programs#commercial-section",
      alt: "Commercial Loans",
      color: "rgba(56, 189, 248, 0.8)", // Light Blue
    },
    {
      src: businessLoansImg,
      href: "/loan-programs#business-sba",
      alt: "Business Loans",
      color: "rgba(74, 222, 128, 0.8)", // Light Green
    },
  ];

  return (
    <div className="flex gap-3 sm:gap-6 md:gap-8">
      {/* Dynamic CSS variable driven keyframes for individual colors */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes neonDynamicInteraction {
            0%, 100% { filter: drop-shadow(0 0 0px transparent); transform: scale(1); }
            50% { filter: drop-shadow(0 0 12px var(--neon-color)); transform: scale(1.05); }
          }
          .neon-flash-dynamic {
            animation: neonDynamicInteraction 0.5s ease-in-out forwards;
          }
          /* Smoothly fade in the exact neon color glow on hover */
          .group:hover .hover-neon-dynamic {
            filter: drop-shadow(0 0 12px var(--neon-color));
          }
        `,
        }}
      />

      {icons.map((item, index) => {
        const isFlashing = initialFlash || clickedIndex === index;

        return (
          <button
            key={index}
            onClick={() => handleNavigation(item.href, index, item.alt)}
            className="focus:outline-none transition-transform hover:scale-105 group"
            aria-label={item.alt}
          >
            <Image
              src={item.src}
              className={`w-18 sm:w-25 aspect-auto rounded-xl transition-all duration-300 hover-neon-dynamic ${isFlashing ? "neon-flash-dynamic" : ""
                }`}
              style={{ "--neon-color": item.color } as React.CSSProperties}
              alt={item.alt}
            />
          </button>
        );
      })}
    </div>
  );
}