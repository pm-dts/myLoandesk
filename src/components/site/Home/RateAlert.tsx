"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  TrendingUp,
  Home,
  Bell,
  Mail,
  Percent,
  X,
  Loader2,
} from "lucide-react";

export default function RateAlert() {
  const [address, setAddress] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertSet, setIsAlertSet] = useState(false);

  // Alert Form States
  const [email, setEmail] = useState("");
  const [currentRate, setCurrentRate] = useState("");
  const [targetRate, setTargetRate] = useState("");

  // Prevent background scrolling when dialog is open
  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDialogOpen]);

  const handleAddressSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      // For now, redirect to the provided link
      window.location.href = "https://talktoabe.com/loan";

      /* 
      // KEEPING DIALOG LOGIC INTACT FOR LATER USE
      // 1. Open Dialog and set to Loading State
      setIsDialogOpen(true);
      setIsAlertSet(false);
      setIsLoading(true);

      // 2. Simulate Attom / RentCast API Fetch (e.g., 2.5 seconds)
      setTimeout(() => {
        // 3. Stop loading and reveal the valuation UI
        setIsLoading(false);
      }, 2500);
      */
    }
  };

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAlertSet(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    // Optional: Reset loading state if closed prematurely
    setIsLoading(false);
  };

  return (
    <>
      {/* --- STEP 1: INITIAL ADDRESS LOOKUP (BASE PAGE) --- */}
      <section className="bg-[#F8F9FA] py-20 px-6 min-h-[500px] flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">
          <div className="w-full max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-ink uppercase tracking-wide leading-[1.2] mb-4">
              Monitor Your Home Value & Mortgage Rates
            </h2>

            <p className="text-sm md:text-base text-ink-2 leading-relaxed max-w-3xl mb-12">
              Enter your address to know your estimated property's value and
              receive alerts when mortgage rates drop.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-ink mb-6">
              Set up a personalized rate alert and receive alerts when mortgage
              rates drop
            </h3>

            <form
              onSubmit={handleAddressSubmit}
              className="w-full flex flex-col items-center gap-6"
            >
              <div className="relative w-full">
                <MapPin
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your property address"
                  className="w-full pl-12 pr-5 py-4 bg-white border border-gray-200 rounded-xl text-ink text-sm md:text-base focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all shadow-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-brand-orange text-white px-8 py-3.5 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-sm"
              >
                Get My Home Value
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- STEP 2: VALUATION & ALERT FORM (DIALOG MODAL) --- */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeDialog}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto animate-in zoom-in-95 duration-300 min-h-[400px] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 z-20 bg-black/10 hover:bg-black/30 text-white p-2 rounded-full transition-colors focus-ring"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {isLoading ? (
              // --- SIMULATED LOADING STATE ---
              <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-white animate-in fade-in duration-300">
                <Loader2 className="w-12 h-12 text-brand-orange animate-spin mb-6" />
                <h3 className="text-2xl font-bold text-ink mb-2">
                  Analyzing Property Data
                </h3>
                <p className="text-ink-2 max-w-sm">
                  Connecting to public records to retrieve the estimated value
                  for <span className="font-semibold">{address}</span>...
                </p>
              </div>
            ) : (
              // --- LOADED VALUATION & FORM STATE ---
              <div className="grid md:grid-cols-2 animate-in fade-in duration-500">
                {/* Dummy Home Valuation Panel */}
                <div className="bg-white p-8 md:p-12 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                    <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center shrink-0">
                      <Home size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-ink text-lg">
                        Property Valuation
                      </h3>
                      <p className="text-xs text-ink-2 line-clamp-1">
                        {address}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center text-center space-y-2 py-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-ink-2">
                      Estimated Value
                    </p>
                    <p className="text-5xl font-black text-ink tracking-tight">
                      $542,800
                    </p>
                    <div className="flex items-center justify-center gap-1 text-[#10B981] text-sm font-medium mt-2">
                      <TrendingUp size={16} />
                      <span>+$12,400 (2.3%) this year</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-8 mt-auto">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-ink">4</p>
                      <p className="text-[10px] uppercase text-ink-2 font-semibold">
                        Beds
                      </p>
                    </div>
                    <div className="text-center border-l border-r border-gray-100">
                      <p className="text-2xl font-bold text-ink">3</p>
                      <p className="text-[10px] uppercase text-ink-2 font-semibold">
                        Baths
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-ink">2,450</p>
                      <p className="text-[10px] uppercase text-ink-2 font-semibold">
                        Sq Ft
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rate Alert Form Panel */}
                <div className="bg-moss-deep text-white p-8 md:p-12 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <Bell className="text-brand-orange" size={28} />
                      <h3 className="font-bold text-3xl tracking-tight">
                        Create Alert
                      </h3>
                    </div>

                    <p className="text-sm text-white/70 mb-8">
                      We'll monitor the market and notify you the moment
                      interest rates drop to your target.
                    </p>

                    {isAlertSet ? (
                      <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-300">
                        <div className="w-20 h-20 bg-[#10B981]/20 text-[#10B981] rounded-full flex items-center justify-center mb-6">
                          <Bell size={36} />
                        </div>
                        <h4 className="text-2xl font-bold mb-3">
                          Alert Activated!
                        </h4>
                        <p className="text-base text-white/70 max-w-xs">
                          We'll email{" "}
                          <span className="font-semibold text-white">
                            {email}
                          </span>{" "}
                          as soon as rates hit {targetRate}%.
                        </p>
                        <button
                          onClick={() => setIsAlertSet(false)}
                          className="mt-8 text-sm font-semibold text-brand-orange hover:text-white transition-colors"
                        >
                          Create another alert
                        </button>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleAlertSubmit}
                        className="space-y-6 flex-1 flex flex-col"
                      >
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                              size={18}
                            />
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="you@example.com"
                              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-base focus:outline-none focus:border-brand-orange transition-colors"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                              Current Rate
                            </label>
                            <div className="relative">
                              <Percent
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
                                size={16}
                              />
                              <input
                                type="number"
                                step="0.125"
                                value={currentRate}
                                onChange={(e) => setCurrentRate(e.target.value)}
                                placeholder="6.5"
                                className="w-full pl-5 pr-10 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-base focus:outline-none focus:border-brand-orange transition-colors"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                              Target Rate
                            </label>
                            <div className="relative">
                              <Percent
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
                                size={16}
                              />
                              <input
                                type="number"
                                step="0.125"
                                value={targetRate}
                                onChange={(e) => setTargetRate(e.target.value)}
                                placeholder="5.5"
                                className="w-full pl-5 pr-10 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-base focus:outline-none focus:border-brand-orange transition-colors"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 mt-auto">
                          <button
                            type="submit"
                            className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-sm"
                          >
                            Activate Alert
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}