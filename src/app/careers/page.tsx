'use client';

import React, { useState } from 'react';
import { ArrowRight, Briefcase, Target, Eye, Upload, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";
import Image from "next/image";
import teamImg from "@/assets/Team_Meeting.jpeg";
import meetingImg from "@/assets/Meeting_At_The_Office.jpeg";

const fraunces = Fraunces({
    variable: "--font-fraunces",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function CareersPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        /* Updated top padding from 'pt-20 sm:pt-28 lg:pt-36' to 'pt-6 sm:pt-8 lg:pt-10' */
        <main className="min-h-screen bg-primary-bg pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-24 text-ink">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-12 sm:mb-20">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
                    <div className="max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                            Mortgage Job Opportunities
                        </div>

                        {/* Headline */}
                        <h1 className={`text-4xl sm:text-6xl lg:text-7xl ${fraunces.className} text-ink leading-[1.15] tracking-tight mt-6 mb-4 sm:mb-6`}>
                            Careers at MyLoanDesk.com
                        </h1>

                        {/* Subheadline */}
                        <p className="text-base sm:text-lg text-ink-2 leading-relaxed mb-8 sm:mb-10">
                            Join a mortgage company that opens every door for you to serve your clients better.
                        </p>

                        {/* Action Buttons */}
                        <div className="w-full sm:w-auto">
                            <a
                                href="#apply-form"
                                className="btn-shine w-full sm:w-auto bg-brand-orange text-primary-bg px-7 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors focus-ring"
                            >
                                Send us your resume
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column Architectural Graphic Container */}
                    <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:ml-auto lg:mr-0 mt-6 lg:mt-0 px-2 sm:px-0">
                        {/* Underlying structural shadow offset layer */}
                        <div className="absolute inset-0 bg-[#E8E4D8] rounded-[32px] transform -rotate-2 -translate-x-2 translate-y-2 sm:-translate-x-3 sm:translate-y-3 -z-10"></div>

                        {/* Core Premium Card Structure with Gradients matching Application Box */}
                        <div className="relative z-10 bg-moss-deep text-cream h-[280px] sm:h-[340px] rounded-[32px] overflow-hidden p-6 sm:p-10 flex flex-col justify-end shadow-2xl">
                            {/* Embedded top-right ambient background glow from design spec */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A574]/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4A574] font-semibold mb-4 relative z-10">
                                Loan Officers Apply Here!
                            </span>

                            <p className={cn("text-2xl sm:text-3xl font-light leading-[1.15] tracking-tight text-primary-bg relative z-10", fraunces.className)}>
                                Creating challenging and{" "}
                                <em className="not-italic font-serif italic text-primary-bg">
                                    rewarding
                                </em>{" "}
                                career paths in loan origination.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Philosophy & Image 1 Section */}
            <section className="py-16 sm:py-24 lg:py-32 border-t border-line bg-cream/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">

                        {/* Left Narrative */}
                        <div className="lg:col-span-6 max-w-xl text-center sm:text-left">
                            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-4 sm:mb-5">
                                01 — Why Join Us
                            </div>
                            <h2 className={cn("text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink font-light leading-tight mb-4 sm:mb-6", fraunces.className)}>
                                We go to great lengths for our team
                            </h2>
                            <p className="text-ink-2 text-sm leading-relaxed mb-4 sm:mb-6">
                                At MyLoanDesk.com, we go to great lengths to create challenging and rewarding career paths in loan origination for individuals with a wide variety of professional skills, interests, and experience.
                            </p>
                            <p className="text-ink-2 text-sm leading-relaxed">
                                We're driven by the commitment to provide white glove customer service, competitive pricing, consistent turn-times and a variety of loan solutions for our residential and commercial clients.
                            </p>
                        </div>

                        {/* Right Side: First Image Component (Team Workspace) */}
                        <div className="lg:col-span-6 w-full">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-line bg-primary-bg group">
                                <Image
                                    src={teamImg}
                                    alt="MyLoanDesk collaborative team working at desk"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-w-1024px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>

                    </div>

                    {/* Value Highlights Subgrid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
                        {/* Highlight Item 1 */}
                        <article className="bg-primary-bg border border-line rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-moss-deep/30">
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start text-center sm:text-left">
                                <div className="w-10 h-10 rounded-xl bg-moss-deep/10 flex items-center justify-center flex-shrink-0">
                                    <Briefcase className="text-moss-deep" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-display text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-ink">Standout Loan Products</h3>
                                    <p className="text-xs text-ink-2 leading-relaxed">
                                        Our impressive range of creative and outside-the-box loan products for residential and commercial clients is what makes us stand out from other mortgage lenders.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* Highlight Item 2 */}
                        <article className="bg-primary-bg border border-line rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-moss-deep/30">
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start text-center sm:text-left">
                                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="text-brand-orange" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-display text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-ink">Support & Growth Opportunities</h3>
                                    <p className="text-xs text-ink-2 leading-relaxed">
                                        We provide our talented loan officers with support and growth opportunities to help elevate their professional reach.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Blueprint Section */}
            <section className="py-16 sm:py-24 border-t border-b border-line bg-primary-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 lg:gap-16">

                        {/* Mission Panel */}
                        <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-line bg-cream/10 flex flex-col justify-between text-center sm:text-left items-center sm:items-start">
                            <div className="flex flex-col items-center sm:items-start">
                                <div className="w-12 h-12 rounded-2xl bg-moss-deep text-primary-bg flex items-center justify-center mb-6 sm:mb-8">
                                    <Target size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className={cn("text-2xl sm:text-3xl font-light text-ink mb-3 sm:mb-4", fraunces.className)}>Our Mission</h3>
                                <p className="text-sm text-ink-2 leading-relaxed">
                                    We pride ourselves on being the #1 lending resource and digital mortgage company worldwide, offering creative financing solutions for clients who may need more support and resources than traditional mortgage companies can provide.
                                </p>
                            </div>
                        </div>

                        {/* Vision Panel */}
                        <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-line bg-cream/10 flex flex-col justify-between text-center sm:text-left items-center sm:items-start">
                            <div className="flex flex-col items-center sm:items-start">
                                <div className="w-12 h-12 rounded-2xl bg-brand-orange text-primary-bg flex items-center justify-center mb-6 sm:mb-8">
                                    <Eye size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className={cn("text-2xl sm:text-3xl font-light text-ink mb-3 sm:mb-4", fraunces.className)}>Our Vision</h3>
                                <p className="text-sm text-ink-2 leading-relaxed">
                                    Our vision is to empower our clients and team of loan officers by offering a wide variety of loan products that will cater to the uniqueness of any and every situation. We strive to be the go-to lender you can trust and count on when you need financing for residential and commercial purchases.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Premium Form Container Implementation */}
            <section id="apply-form" className="py-16 sm:py-24 lg:py-32 bg-primary-bg scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="relative bg-moss-deep text-cream rounded-[32px] overflow-hidden p-6 sm:p-12 lg:p-16">

                        {/* Background Glow Gradients Applied from Design Spec */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                        <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                            {/* Left Column: Careers Text Copy & Sticky Layout */}
                            <div className="lg:col-span-7 flex flex-col justify-between h-full">
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A574] font-semibold mb-5">
                                        02 — Sit down at the desk
                                    </div>
                                    <h2 className={cn("text-4xl sm:text-5xl lg:text-6xl leading-[1.04] tracking-tight font-light text-primary-bg", fraunces.className)}>
                                        Ready to Join{" "}
                                        <em className="not-italic font-serif italic text-primary-bg">
                                            Our Team?
                                        </em>
                                    </h2>
                                    <p className="mt-6 text-base sm:text-lg text-primary-bg/75 max-w-xl leading-relaxed">
                                        Does this sound like something you want to be a part of? We're looking for high-producing loan originators to join our team and scale together.
                                    </p>
                                </div>

                                {/* Image positioned organically below text matching container guidelines */}
                                <div className="mt-10 w-full hidden lg:block">
                                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-primary-bg/10 group">
                                        <Image
                                            src={meetingImg}
                                            alt="Loan originators sitting down having a corporate discussion"
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="40vw"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Premium Form Element */}
                            <div className="lg:col-span-5 relative z-10 w-full">
                                {formSubmitted ? (
                                    <div className="bg-primary-bg text-moss-deep p-8 rounded-2xl shadow-2xl text-center">
                                        <h3 className="font-semibold text-lg sm:text-xl mb-2">Application Received!</h3>
                                        <p className="text-xs sm:text-sm text-ink-2">Thank you for submitting your resume. Our talent acquisition team will review your qualifications and reach out shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="bg-primary-bg text-ink rounded-2xl p-6 sm:p-8 shadow-2xl space-y-4">
                                        <div>
                                            <div className="text-sm font-semibold mb-1">Apply Online</div>
                                            <div className="text-xs text-ink-2 mb-4">Takes about 2 minutes. Fields marked with * are required.</div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="grid grid-cols-2 gap-3">
                                                <input
                                                    type="text"
                                                    placeholder="First name *"
                                                    required
                                                    className="w-full px-4 py-3 bg-cream border border-line rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Last name *"
                                                    required
                                                    className="w-full px-4 py-3 bg-cream border border-line rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                                                />
                                            </div>

                                            <input
                                                type="email"
                                                placeholder="Email address *"
                                                required
                                                className="w-full px-4 py-3 bg-cream border border-line rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                                            />

                                            <div className="grid grid-cols-2 gap-3">
                                                <input
                                                    type="tel"
                                                    placeholder="Phone *"
                                                    required
                                                    className="w-full px-4 py-3 bg-cream border border-line rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="NMLS ID"
                                                    className="w-full px-4 py-3 bg-cream border border-line rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors focus-ring"
                                                />
                                            </div>

                                            {/* Custom Clean Upload Styled Component */}
                                            <div>
                                                <div className="flex justify-center px-4 pt-4 pb-4 border border-dashed border-line rounded-lg bg-cream hover:bg-cream/60 transition relative">
                                                    <div className="space-y-1 text-center w-full">
                                                        <Upload className="mx-auto h-5 w-5 text-ink-2/60" strokeWidth={1.5} />
                                                        <div className="flex items-center justify-center text-xs text-ink-2">
                                                            <label htmlFor="file-upload" className="relative cursor-pointer font-medium text-brand-orange hover:text-orange-600 focus-within:outline-none">
                                                                <span>Upload Resume *</span>
                                                                <input id="file-upload" name="file-upload" type="file" required accept=".pdf,.doc,.docx" onChange={handleFileChange} className="sr-only" />
                                                            </label>
                                                        </div>
                                                        {fileName && (
                                                            <p className="text-[11px] font-medium text-moss-deep bg-moss-deep/5 px-2 py-0.5 rounded inline-block max-w-full truncate">
                                                                {fileName}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <textarea
                                                rows={3}
                                                placeholder="Professional Summary or Message"
                                                className="w-full px-4 py-3 bg-cream border border-line rounded-lg text-sm focus:outline-none focus:border-moss-deep transition-colors resize-none focus-ring"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn-shine mt-4 w-full bg-moss-deep text-primary-bg py-3.5 rounded-xl text-sm font-medium hover:bg-moss-darker transition-colors flex items-center justify-center gap-2 focus-ring"
                                        >
                                            Submit Application
                                            <ArrowRight size={14} strokeWidth={2} />
                                        </button>

                                        <div className="text-[10px] text-ink-2 text-center mt-3">
                                            By submitting, you agree to our terms. Secure file processing.
                                        </div>
                                    </form>
                                )}
                            </div>

                            {/* Mobile Image Treatment below the form */}
                            <div className="w-full block lg:hidden mt-4">
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-primary-bg/10 group">
                                    <Image
                                        src={meetingImg}
                                        alt="Loan originators sitting down having a corporate discussion"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="100vw"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}