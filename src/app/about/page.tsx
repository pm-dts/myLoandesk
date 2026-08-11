"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new about page
    router.replace("/about-us");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg text-ink-2">Redirecting to About Us...</p>
    </div>
  );
}
