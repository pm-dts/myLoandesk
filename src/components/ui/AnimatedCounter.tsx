"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  className?: string;
  prev?: string;
  next?: string;
  duration?: number;
  decimals?: number;
}

export default function AnimatedCounter({
  value,
  prev = "",
  next = "",
  duration = 2000,
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  // 1. Set up the Intersection Observer to detect when the element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        // If it comes into view, trigger animation and stop observing
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (counterRef.current) {
            observer.unobserve(counterRef.current);
          }
        }
      },
      {
        threshold: 0.1, // Triggers when at least 10% of the element is visible
      },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // 2. Run the animation ONLY when isVisible becomes true
  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(value * easeProgress);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration, isVisible]); // Added isVisible to dependency array

  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(count);

  return (
    <span
      ref={counterRef}
      className={cn("inline-flex items-baseline", className)}
    >
      {prev && <span className="mr-0.5">{prev}</span>}
      <span>{formattedNumber}</span>
      {next && <span className="ml-0.5">{next}</span>}
    </span>
  );
}
