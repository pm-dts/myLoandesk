'use client';

import React, { useState } from 'react';
import { ArrowRight, Users, Share2, Award, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
    variable: "--font-fraunces",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RealtorsPage() {
    const [partnerSubmitted, setPartnerSubmitted] = useState(false);
    const [referralSubmitted, setReferralSubmitted] = useState(false);

    const handlePartnerSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setPartnerSubmitted(true);
    };

    const handleReferralSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setReferralSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-primary-bg pt-28 pb-16 lg:pt-36 lg:pb-24 text-ink">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    <div className="max-w-xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                            Realtor Partnership Program
                        </div>

                        {/* Headline */}
                        <h1 className={`text-5xl sm:text-6xl lg:text-7xl ${fraunces.className} text-ink leading-[1.1] tracking-tight mt-6 mb-6`}>
                            Close Loans Faster with Direct Lender Partnership
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-ink-2 leading-relaxed mb-10">
                            Realtors join us because it's a mutually beneficial opportunity. We go above and beyond to provide clear, timely communication and a smooth transaction experience.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="#partner-form"
                                className="btn-shine bg-brand-orange text-primary-bg px-7 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors focus-ring"
                            >
                                Partner With Us
                                <ArrowRight size={18} />
                            </a>
                            <a
                                href="#referral-form"
                                className="px-6 py-3.5 text-ink font-medium border border-line hover:bg-cream rounded-full transition-colors focus-ring"
                            >
                                Refer a Client
                            </a>
                        </div>
                    </div>

                    {/* Right Column Architectural Container */}
                    <div className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0">
                        <div className="absolute inset-0 bg-[#E8E4D8] rounded-3xl transform rotate-2 translate-x-3 translate-y-3 -z-10"></div>
                        <div className="relative z-10 bg-moss-deep h-[380px] rounded-3xl p-8 flex flex-col justify-end text-primary-bg shadow-sm">
                            <span className="text-[10px] uppercase tracking-widest text-[#D4A373] font-semibold mb-2">
                                MyLoanDesk Partners
                            </span>
                            <p className={cn("text-2xl font-light leading-snug", fraunces.className)}>
                                Elevating the home purchase experience together, one client at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 lg:py-32 border-t border-line bg-cream/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="max-w-2xl mb-14">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-5">
                            01 — Benefits
                        </div>
                        <h2 className={cn("text-4xl lg:text-5xl xl:text-6xl tracking-tight text-ink font-light", fraunces.className)}>
                            The benefits of partnering with{" "}
                            <em className="not-italic font-serif italic text-moss-deep">MyLoanDesk</em>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Card 1 */}
                        <article className="bg-primary-bg border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-xl bg-moss-deep/10 flex items-center justify-center mb-5">
                                <Users className="text-moss-deep" size={22} strokeWidth={1.8} />
                            </div>
                            <h3 className="font-display text-xl font-semibold mb-2 text-ink">Networking & Referral Opportunities</h3>
                            <p className="text-sm text-ink-2 leading-relaxed">
                                Take advantage of sponsoring, co-hosting, or attending our finance and real estate webinars, community and business events to expand your networking reach.
                            </p>
                        </article>

                        {/* Card 2 */}
                        <article className="bg-primary-bg border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5">
                                <Share2 className="text-brand-orange" size={22} strokeWidth={1.8} />
                            </div>
                            <h3 className="font-display text-xl font-semibold mb-2 text-ink">Social Media Presence</h3>
                            <p className="text-sm text-ink-2 leading-relaxed">
                                Enhance your social media content by sharing our thoughtfully curated content including home buying & financing tips, mortgage 101, local market news and valuable information for your clients.
                            </p>
                        </article>

                        {/* Card 3 */}
                        <article className="bg-primary-bg border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-xl bg-[#D4A373]/20 flex items-center justify-center mb-5">
                                <Award className="text-[#D4A373]" size={22} strokeWidth={1.8} />
                            </div>
                            <h3 className="font-display text-xl font-semibold mb-2 text-ink">Cobranded Marketing Materials</h3>
                            <p className="text-sm text-ink-2 leading-relaxed">
                                Become a known & trusted partner of MyLoanDesk.com with your logo, photo, and contact information included on select print & digital marketing materials.
                            </p>
                        </article>

                        {/* Card 4 */}
                        <article className="bg-primary-bg border border-line rounded-2xl p-7 transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.25)] hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-xl bg-moss-deep/10 flex items-center justify-center mb-5">
                                <Zap className="text-moss-deep" size={22} strokeWidth={1.8} />
                            </div>
                            <h3 className="font-display text-xl font-semibold mb-2 text-ink">Close Loans Faster with Direct Lender Partnership</h3>
                            <p className="text-sm text-ink-2 leading-relaxed">
                                As your lender partner, we go above and beyond typical expectations to provide clear and timely communication and a smooth transaction experience for your clients.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-24 border-b border-line bg-primary-bg relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A574] font-semibold mb-6">
                        02 — What Our Realtor Partners Say
                    </div>
                    <blockquote className={cn("text-2xl md:text-3xl font-light italic text-ink leading-relaxed", fraunces.className)}>
                        "As a realtor, I have worked with many lenders, but working with My Loan Desk was the best decision. We have a streamlined process, I have consistent market updates and marketing materials to educate my home buyers - and they are always happy to have no surprises and close quickly! I'm grateful to have such a reliable lender partner."
                    </blockquote>
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-moss-deep text-primary-bg flex items-center justify-center text-xs font-semibold">
                            LY
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-semibold text-ink">Lindsey Y.</p>
                            <p className="text-xs text-ink-2">Realtor Partner</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section 1: Work Together */}
            <section id="partner-form" className="py-24 lg:py-32 bg-primary-bg scroll-mt-24">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-4">
                            Join Our Network
                        </div>
                        <h2 className={cn("text-3xl lg:text-4xl text-ink font-light", fraunces.className)}>
                            Let's Work Together!
                        </h2>
                        <p className="text-sm text-ink-2 mt-2">Please complete the form below, and we will be in touch.</p>
                    </div>

                    {partnerSubmitted ? (
                        <div className="bg-moss-deep/5 border border-moss-deep/20 text-moss-deep p-6 rounded-2xl text-center">
                            <h3 className="font-semibold text-lg mb-1">Thank you for reaching out!</h3>
                            <p className="text-sm text-ink-2">We've received your form and will be in touch shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handlePartnerSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">First Name *</label>
                                    <input type="text" required className="w-full border border-line bg-cream/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep focus:ring-1 focus:ring-moss-deep transition" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">Last Name *</label>
                                    <input type="text" required className="w-full border border-line bg-cream/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep focus:ring-1 focus:ring-moss-deep transition" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">Email *</label>
                                    <input type="email" required className="w-full border border-line bg-cream/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep focus:ring-1 focus:ring-moss-deep transition" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">Phone Number *</label>
                                    <input type="tel" required className="w-full border border-line bg-cream/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep focus:ring-1 focus:ring-moss-deep transition" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">Let us know how we can be the best lender partner to you:</label>
                                <textarea rows={4} className="w-full border border-line bg-cream/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep focus:ring-1 focus:ring-moss-deep transition resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-orange text-primary-bg font-medium py-3.5 rounded-full hover:bg-orange-600 transition focus-ring">
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* Form Section 2: Quick Pre-Approval Referral */}
            <section id="referral-form" className="py-24 lg:py-32 bg-cream/20 border-t border-line scroll-mt-24">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A574] font-semibold mb-4">
                            Benefits of referring your clients to MyLoanDesk
                        </div>
                        <h2 className={cn("text-3xl lg:text-4xl text-ink font-light", fraunces.className)}>
                            Refer your client for quick pre-approval
                        </h2>
                        <p className="text-sm text-ink-2 mt-2">
                            Receive exclusive, generous benefits when you use the form below to refer your borrowers to us, and we get your clients pre-approved for financing.
                        </p>
                        <p className="text-xs text-ink-2/80 italic mt-1">
                            Please complete the form below, and we'll get your borrower pre-approved!
                        </p>
                    </div>

                    {referralSubmitted ? (
                        <div className="bg-moss-deep/5 border border-moss-deep/20 text-moss-deep p-6 rounded-2xl text-center">
                            <h3 className="font-semibold text-lg mb-1">Referral Received!</h3>
                            <p className="text-sm text-ink-2">We'll get your borrower pre-approved right away.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleReferralSubmit} className="space-y-6 bg-primary-bg p-8 rounded-3xl border border-line shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">Realtor First & Last Name *</label>
                                    <input type="text" required className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep transition" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">Realtor Phone Number *</label>
                                    <input type="tel" required className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep transition" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">Realtor Email *</label>
                                    <input type="email" required className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep transition" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">Borrower First & Last Name *</label>
                                    <input type="text" required className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep transition" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">Borrower Email *</label>
                                    <input type="email" required className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep transition" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">Borrower Phone Number *</label>
                                    <input type="tel" required className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep transition" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-ink-2 uppercase tracking-wider mb-2">Let us know more about this borrower, the property, and their financing needs:</label>
                                <textarea rows={4} className="w-full border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-moss-deep transition resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-moss-deep text-primary-bg font-medium py-3.5 rounded-full hover:bg-opacity-90 transition focus-ring">
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </section>

        </main>
    );
}