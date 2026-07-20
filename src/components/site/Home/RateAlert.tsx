"use client";

import React, { useState } from "react";

export default function RateAlert() {
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      // Handle the address submission logic here
      console.log("Looking up address:", address);
    }
  };

  return (
    <section className="bg-[#F8F9FA] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-ink uppercase tracking-wide mb-4">
          Set up a rate alert
        </h2>
        
        {/* Subtitle Description */}
        <p className="text-sm md:text-base text-ink-2 leading-relaxed max-w-3xl mb-12">
          Tired of constantly checking for lower rates? Create a rate alert to be notified the moment rates hit your target, so you never miss a chance to refinance.
        </p>

        {/* Interactive Form Section */}
        <div className="w-full max-w-2xl flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-bold text-ink mb-6">
            Set up a personalized rate alert and discover your home's current value
          </h3>
          
          <form 
            onSubmit={handleSubmit} 
            className="w-full flex flex-col items-center gap-6"
          >
            {/* Address Input */}
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-lg text-ink text-sm md:text-base focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all shadow-sm"
              required
            />
            
            {/* CTA Button */}
            <button
              type="submit"
              className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-sm"
            >
              Look up my address
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}