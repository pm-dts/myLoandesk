"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function StartApplication() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Application started");
  };

  return (
    <section id="start" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16">
          {/* Background Glow Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Copy */}
            <div className="lg:col-span-7">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A574] font-semibold mb-5">
                07 — Sit down at the desk
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.04] tracking-tight font-light text-primary-bg">
                Your mortgage,{" "}
                <em className="not-italic font-serif italic text-primary-bg">
                  handled.
                </em>
              </h2>
              <p className="mt-6 text-lg text-primary-bg/75 max-w-xl leading-relaxed">
                Five-minute application. A real broker on the line within one
                business day. No commitment, no hard credit pull, no call
                centers.
              </p>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-5 relative z-10">
              <form
                onSubmit={handleSubmit}
                className="bg-primary-bg text-ink rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-sm font-semibold mb-1">
                  Get pre-qualified
                </div>
                <div className="text-xs text-ink-2 mb-5">
                  Takes about 5 minutes. Soft credit check only.
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full px-4 py-3 bg-cream border border-line rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full px-4 py-3 bg-cream border border-line rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 bg-cream border border-line rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                    required
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-3 bg-cream border border-line rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                      required
                    />
                    <input
                      type="text"
                      placeholder="ZIP code"
                      className="w-full px-4 py-3 bg-cream border border-line rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                      required
                    />
                  </div>
                  <select
                    className="w-full px-4 py-3 bg-cream border border-line rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors text-ink-2 focus-ring"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      What do you need?
                    </option>
                    <option value="buy">Buy a home</option>
                    <option value="refinance">Refinance my mortgage</option>
                    <option value="cash-out">Cash-out refinance</option>
                    <option value="investment">Investment property</option>
                    <option value="exploring">Just exploring rates</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-shine mt-5 w-full bg-moss-deep text-primary-bg py-3.5 rounded-xl text-sm font-medium hover:bg-moss-darker transition-colors flex items-center justify-center gap-2 focus-ring"
                >
                  Start my application
                  <ArrowRight size={14} strokeWidth={2} />
                </button>
                <div className="text-[10px] text-ink-2 text-center mt-3">
                  By submitting, you agree to our terms. Soft credit pull only.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
