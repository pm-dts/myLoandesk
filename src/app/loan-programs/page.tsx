import React from "react";
import {
    ArrowRight, CheckCircle2, Home, Shield, Building, RefreshCw,
    Briefcase, Star, FileText, Landmark, Key, Stethoscope
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
    variable: "--font-fraunces",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function LoanProgramsPage() {
    return (
        <main className="min-h-screen bg-primary-bg pt-28 pb-24 lg:pt-36">

            {/* Editorial Page Introduction Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-ink-2 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                        Call/Text (305) 891-6500 · Professional Lending Spectrum
                    </div>
                    <h1 className={cn("text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.08] tracking-tight mb-8", fraunces.className)}>
                        Our Loan <br />
                        <em className="text-moss-deep italic font-serif">Programs</em>
                    </h1>
                    <div className="space-y-6 text-lg text-ink-2 leading-relaxed max-w-3xl">
                        <p className="font-medium text-ink">
                            We are experts in Residential & Commercial Lending, specializing in Portfolio Loans.
                        </p>
                        <p>
                            We provide a wide range of Conventional, Jumbo, and Portfolio Residential & Commercial mortgage programs for borrowers with unique needs that standard big banks often struggle to approve.
                        </p>
                        <p>
                            We also serve clients seeking a lender to pre-approve unique properties that may not conform to typical mortgage requirements.
                        </p>
                        <p>
                            My Loan Desk is your one-stop shop for all your mortgage needs. We specialize in helping home buyers who struggle to get pre-approved under typical lending standards.
                        </p>
                    </div>
                </div>
            </section>

            {/* Primary 1px Grid Architecture Layout (Residential & Dynamic Lending) */}
            <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
                <h2 className={cn("text-3xl font-display text-ink mb-10 pb-4 border-b border-line", fraunces.className)}>
                    Residential & Specialist Programs
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">

                    {/* Conventional Loans */}
                    <div id="conventional" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                                    <Home size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Residential</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>Conventional Loans</h3>
                            <p className="text-sm text-ink-2 leading-relaxed mb-6">
                                A conventional loan is any mortgage loan that is not insured or guaranteed by the government (such as under Federal Housing Administration, Department of Veterans Affairs, or Department of Agriculture loan programs). Conventional loans can be conforming or non-conforming.
                            </p>
                            <p className="text-xs text-ink-2 bg-[#f0ece1]/50 p-4 rounded-xl border border-line/50 leading-relaxed mb-6">
                                Conventional loans are ideal for borrowers with a strong credit history, typically a credit score between 620 and 740, and a sum of money for about 20% of the down payment. Down payments less than 20% require private mortgage insurance (PMI). Your debt-to-income ratio (DTI) should be under 43%.
                            </p>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* FHA Loans */}
                    <div id="fha" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                                    <Shield size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Government Backed</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-3", fraunces.className)}>FHA Loans</h3>
                            <p className="text-sm text-ink-2 leading-relaxed mb-4">
                                FHA loans are a great option for borrowers that do not have a lot of cash on hand for a down payment and may need some flexibility in qualification guidelines. Benefits include:
                            </p>
                            <ul className="space-y-2 mb-6">
                                {[
                                    "Low 3.5% down payment",
                                    "Most of your closing costs and fees can be included in the loan",
                                    "Low monthly mortgage insurance",
                                    "No maximum income/earning limitations (subject to investor overlays)",
                                    "No cash reserves if loan meets FHA guidelines",
                                    "Minimum FICO score 620 (with investor overlays)",
                                    "No landlord rating required",
                                    "Gifts are acceptable",
                                    "Seller credits are allowed",
                                    "Non-occupant cosigners okay to help qualify",
                                    "Fixed rate and ARM loans available"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-xs text-ink/90 leading-normal">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Portfolio Loans */}
                    <div id="portfolio" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373]">
                                    <Briefcase size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Custom Desk Spec</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>Portfolio Loans</h3>
                            <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                                <p>
                                    Portfolio loans are made to fill the gap between conventional loans and private or hard money loans. These are made by a lender who keeps the debt on their portfolio to earn consistent interest, rather than selling it to secondary markets.
                                </p>
                                <p>
                                    In contrast, conventional loans are typically sold to another institution that will service the loan shortly after closing.
                                </p>
                                <p>
                                    Portfolio loan programs are built for clients who have difficulty proving their income under standard conventional guidelines, or who have navigated complex credit issues, past bankruptcies, foreclosures, or tax liens.
                                </p>
                            </div>
                        </div>
                        <a href="#contact" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Contact Us <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* VA Loans */}
                    <div id="va" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                                    <Star size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Veteran Care</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>VA Loans</h3>
                            <p className="text-sm text-ink-2 leading-relaxed mb-4">
                                VA guaranteed loans are made by lenders and guaranteed by the U.S. Department of Veterans Affairs (VA) to eligible veterans for the purchase of a home, protecting the lender against loss if payments fall behind.
                            </p>
                            <p className="text-xs font-semibold text-moss-deep mb-4">
                                In most cases, no down payment is required on a VA guaranteed loan and the borrower receives a highly competitive interest rate. Other benefits include:
                            </p>
                            <ul className="space-y-2 mb-6">
                                {[
                                    "Negotiable interest rates.",
                                    "Closing costs are highly comparable—and sometimes lower—than other financing types.",
                                    "No private mortgage insurance requirement.",
                                    "Right to prepay loan without penalties.",
                                    "The mortgage can be assumed by a qualified buyer when a home is sold.",
                                    "Counseling and assistance available to veteran borrowers experiencing financial difficulty."
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-xs text-ink/90 leading-normal">
                                        <CheckCircle2 size={13} className="text-moss-deep mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Hybrid Loans */}
                    <div id="hybrid" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                                    <RefreshCw size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">ARM Adjustables</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>Hybrid Loans</h3>
                            <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                                <p>
                                    Combine the upfront stability of a fixed-rate mortgage with the initial savings opportunities of an adjustable-rate mortgage (ARM) using a fixed-period hybrid loan.
                                </p>
                                <p>
                                    A hybrid loan provides a fixed-rate term (usually 3, 5, 7, or 10 years) with adjustable rates thereafter—typically expressed as a 3/1, 5/1, 7/1, or 10/1 ARM. The first number represents the fixed-rate years, while the second indicates how often the interest rate will adjust annually afterward.
                                </p>
                                <p>
                                    The primary advantage is securing a lower interest rate upfront than standard 30-year fixed options, making it a powerful vehicle if you plan to transition or sell within the first decade.
                                </p>
                                <p className="text-xs italic bg-line/20 p-2.5 rounded border border-line">
                                    Hybrid loans are ideal choices for borrowers seeking ARM pricing combined with essential, multi-year protection at the start of their homeownership lifecycle.
                                </p>
                            </div>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Private Bridge & Hard Money Loans */}
                    <div id="bridge" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373]">
                                    <Building size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Liquidity Solutions</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>Private Bridge & Hard Money Loans</h3>
                            <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                                <p>
                                    Bridge financing is deployed for fast closings, navigating unique situational underwriting, recovering property assets from distressed situations, or capturing time-sensitive short-term real estate plays.
                                </p>
                                <p>
                                    These properties are paid back when the asset is sold, fully refinanced with a traditional permanent lender, or when structural modifications allow subsequent standard matrix funding.
                                </p>
                                <p>
                                    While hard money refers strictly to the private source asset pool (individuals or specialized private companies), bridge deployment speaks directly to the targeted, nimble duration of the temporary capital architecture.
                                </p>
                                <div className="bg-[#f0ece1]/60 p-3.5 rounded-xl text-xs font-mono border border-dashed border-line space-y-1">
                                    <p>· Rates: Usually 10-15%</p>
                                    <p>· Typical terms: Up to 12 months (2-10 points)</p>
                                    <p>· LTV: Generally max 65% for commercial/residential</p>
                                    <p>· Architecture: Closed or Open configuration matrix</p>
                                    <p>· First charge structure provides higher LTV thresholds</p>
                                </div>
                            </div>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                </div>
            </section>

            {/* Secondary 1px Grid Architecture Layout (Rehab & Refinance Infrastructure) */}
            <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
                <h2 className={cn("text-3xl font-display text-ink mb-10 pb-4 border-b border-line", fraunces.className)}>
                    Rehab, Refinances & Home Equity Lines
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">

                    {/* FHA 203(k) Rehab Loans */}
                    <div id="rehab" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                                    <FileText size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Rehab Matrix</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-3", fraunces.className)}>FHA 203(k) Rehab Loans</h3>
                            <p className="text-sm text-ink-2 leading-relaxed mb-4">
                                FHA's 203(k) program provides an affordable, stable single-loan solution combining the property purchase or refinance alongside the direct calculated costs of required structural upgrades.
                            </p>
                            <div className="space-y-4 mb-6 text-xs text-ink-2">
                                <div>
                                    <h4 className="font-semibold text-ink mb-1">Benefits include:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>FHA programmatic guidelines apply</li>
                                        <li>Ability to leverage future value after upgrades</li>
                                        <li>Low structural down-payment options</li>
                                        <li>Flexible credit qualifying frameworks</li>
                                        <li>Fully assumable infrastructure for future buyers</li>
                                        <li>Eligible across 1-4 unit properties, PUDs, and condos</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-ink mb-1">Eligible properties include:</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Attached and detached single family residences</li>
                                        <li>Multi-unit 2-4 property maps</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-ink mb-1">Eligible Improvements:</h4>
                                    <p className="italic bg-line/20 p-2 rounded">
                                        Structural additions, kitchen/bath remodeling, finished basements, decks, roofing, energy upgrades, and accessibility improvements.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Refinance Options */}
                    <div id="refinance" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                                    <RefreshCw size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Refinance Desk</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>Refinance Options</h3>
                            <div className="space-y-4 text-xs text-ink-2 mb-6 leading-relaxed">
                                <div>
                                    <h4 className="font-semibold text-ink text-sm mb-1">Lower Your Monthly Payments</h4>
                                    <p>Lock in structural savings by shifting from a volatile ARM array or a high fixed-rate mortgage into historically steady long-term single tiers.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-ink text-sm mb-1">Get Cash Out</h4>
                                    <p>Leverage the clear equity position built inside your property to clear tuition, fund structural renovations, or execute essential capital changes seamlessly.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-ink text-sm mb-1">Consolidate Your Debt</h4>
                                    <p>Pay off high-interest unsecured positions by leveraging lower mortgage interest rates, significantly expanding monthly liquidity parameters.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-ink text-sm mb-1">Paying it off Sooner</h4>
                                    <p>Accelerate your net wealth roadmap by condensing standard configurations into 15-year tracks, cutting total long-term interest costs dramatically.</p>
                                </div>
                            </div>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* FHA Streamline Refinance */}
                    <div id="streamline" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373]">
                                    <Shield size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Streamline Refi</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>FHA Streamline Refinance</h3>
                            <p className="text-sm text-ink-2 leading-relaxed mb-4">
                                If you hold a current FHA mortgage in good standing, an FHA Streamline Refinance represents a highly efficient path to lowering interest rates and payment obligations.
                            </p>
                            <p className="text-xs font-medium text-ink mb-2">Benefits include:</p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "Property appraisal usually not required",
                                    "Minimal processing documentation requirements",
                                    "Streamlined underwriting timeline frameworks",
                                    "Ability to easily adjust your core term lengths",
                                    "Minimal out-of-pocket transactional costs"
                                ].map((benefit, idx) => (
                                    <li key={idx} className="flex items-center gap-2.5 text-xs text-ink-2">
                                        <CheckCircle2 size={14} className="text-moss-deep shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* HELOC (Home Equity Line of Credit) */}
                    <div id="heloc" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40 md:col-span-2 lg:col-span-3">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                                    <Landmark size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Equity Access</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>HELOC (Home Equity Line of Credit)</h3>
                            <p className="text-sm text-ink mb-4 font-semibold">How do HELOCs work?</p>

                            <div className="grid md:grid-cols-3 gap-6 text-xs text-ink-2 mb-6">
                                {/* Variant 1 */}
                                <div className="bg-primary-bg border border-line p-4 rounded-xl">
                                    <h4 className="font-bold text-ink mb-2 text-xs">Standard Tier Config</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Standalone HELOC for 1st, 2nd, and 3rd lien positions</li>
                                        <li>Primary, secondary, and investment properties</li>
                                        <li>No hit to credit for initial pre-qualification steps</li>
                                        <li>100% online setup matrix</li>
                                        <li>Highly competitive rates compared to unsecured personal loans</li>
                                        <li>No appraisal required in a majority of instances</li>
                                        <li>Up to $400k options spanning 5 to 30-year terms</li>
                                        <li>Accelerated funding paths</li>
                                    </ul>
                                </div>

                                {/* Variant 2 */}
                                <div className="bg-primary-bg border border-line p-4 rounded-xl">
                                    <h4 className="font-bold text-ink mb-2 text-xs">Additional HELOC Spectrum</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Standalone architecture for 1st and 2nd positions</li>
                                        <li>Fully online execution infrastructure</li>
                                        <li>Up to $750k high-balance placement limits</li>
                                        <li>Flexible variable amortization matrix pathways</li>
                                        <li className="text-brand-orange font-medium list-none mt-2 pt-2 border-t border-line">Requires a minimum 680 credit tier in clear standing. Employs a broad spectrum of dynamic documentation rules.</li>
                                    </ul>
                                </div>

                                {/* Variant 3 */}
                                <div className="bg-primary-bg border border-line p-4 rounded-xl">
                                    <h4 className="font-bold text-ink mb-2 text-xs">Standalone 2nd HELOAN</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Fixed-rate home equity installment configurations</li>
                                        <li>Protects low first-mortgage structures</li>
                                        <li>Up to $750k limits with fast internal funding turnarounds</li>
                                        <li className="text-moss-deep font-medium list-none mt-2 pt-2 border-t border-line">Requires a minimum 660 credit score position. Automated valuation models deployed to minimize setup constraints.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Reverse Mortgage */}
                    <div id="reverse" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40 md:col-span-2 lg:col-span-3">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                                    <Key size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Conversion Options</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>Reverse Mortgage</h3>
                            <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                                <p>
                                    With a Home Equity Conversion Mortgage (HECM), homeowners of eligible age can leverage built-up equity to optimize cash flow parameters without being forced to sell their primary residence.
                                </p>
                                <p>
                                    Funds are structured based on calculated property equity data and can be paid as a structured lump sum, monthly distribution, or dynamic line of credit. The programmatic balance only matures once the homeowner transitions, passes away, or moves permanently from the asset.
                                </p>
                                <p className="font-semibold text-ink">
                                    Many eligible homeowners operating on fixed wealth streams find reverse mortgages highly advantageous. Funds are typically non-taxable and designed not to interrupt core Medicare or Social Security benefit streams.
                                </p>
                                <p className="text-xs bg-moss-deep text-primary-bg p-4 rounded-xl">
                                    Asset control remains with the primary owner throughout the runtime lifecycle, provided property taxes, basic maintenance, and insurance baselines are consistently maintained.
                                </p>
                            </div>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                </div>
            </section>

            {/* Business & Commercial Financing Solutions */}
            <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
                <h2 className={cn("text-3xl font-display text-ink mb-10 pb-4 border-b border-line", fraunces.className)}>
                    Business & Commercial Financing Solutions
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">

                    {/* Equipment Financing */}
                    <div id="equipment" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373]">
                                    <Briefcase size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Capital Growth</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>Equipment Financing</h3>
                            <p className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">Conserve primary cash flow lines while modernizing machinery stacks.</p>
                            <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                                <p>
                                    Acquiring core equipment assets is vital to scalable operations. When your company is ready to scale throughput or update internal frameworks, our expert programs match your dynamic timeline requirements.
                                </p>
                                <div className="bg-line/30 p-3 rounded-lg text-xs space-y-1">
                                    <h4 className="font-semibold text-ink">Core Program Advantages:</h4>
                                    <p>· Preserves operational liquid capital</p>
                                    <p>· Modern tax incentive integration metrics</p>
                                    <p>· Accelerated equipment acquisition turnaround times</p>
                                    <p>· 100% financing frameworks for high-tier candidates</p>
                                </div>
                            </div>
                        </div>
                        <a href="#contact" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Contact Us <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Business Lines of Credit */}
                    <div id="business-lines" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                                    <Landmark size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Liquidity Access</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>Business Lines of Credit</h3>
                            <p className="text-xs font-bold uppercase tracking-wider text-moss-deep mb-2">Secure quick access to floating working capital reserves smoothly.</p>
                            <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                                <p>
                                    Maintaining strategic liquidity shields operations from unexpected overhead pressures. Deploy flexible programmatic revolving funds only when specific allocation needs present themselves, protecting net profitability channels.
                                </p>
                                <div className="bg-line/30 p-3 rounded-lg text-xs space-y-1">
                                    <h4 className="font-semibold text-ink">Operational Features:</h4>
                                    <p>· Revolving access coordinates fluid payroll management</p>
                                    <p>· Pay interest strictly on deployed capital balances</p>
                                    <p>· Minimal document setup configuration metrics</p>
                                </div>
                            </div>
                        </div>
                        <a href="#contact" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Contact Us <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Working Capital */}
                    <div id="working-capital" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                                    <RefreshCw size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Operations Stack</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>Working Capital</h3>
                            <p className="text-xs font-medium italic text-ink-2 mb-2">Customized liquid solutions tailored to enterprise growth metrics with complete compliance transparency.</p>
                            <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                                <p>
                                    Empower seasonal purchase capacity or capitalize on high-volume inventory procurement windows via tailored working capital structures built to map business revenue trajectories perfectly.
                                </p>
                                <div className="bg-[#f0ece1]/50 p-3 rounded-lg text-xs space-y-1 border border-line">
                                    <h4 className="font-semibold text-ink">Capital Parameters:</h4>
                                    <p>· Funding footprints extending up to $2,000,000</p>
                                    <p>· Flexible 6 to 24-month term lengths</p>
                                    <p>· Clean structural fee frameworks</p>
                                </div>
                            </div>
                        </div>
                        <a href="#contact" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Contact Us <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Franchise Financing Solutions */}
                    <div id="franchise" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373]">
                                    <Key size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Franchise Desk</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>Franchise Financing Solutions</h3>
                            <p className="text-xs font-semibold text-brand-orange mb-2">Comprehensive capitalization matrices built for single and multi-unit expansions.</p>
                            <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                                <p>
                                    Accelerate standard store timelines or update equipment models across multi-unit frameworks with custom franchise lending setups engineered around specific brand benchmarks.
                                </p>
                                <div className="bg-line/30 p-3 rounded-lg text-xs space-y-1">
                                    <h4 className="font-semibold text-ink">Financing Highlights:</h4>
                                    <p>· Rapid credit determination timelines</p>
                                    <p>· Capitalization access up to $500k dynamically</p>
                                    <p>· Seasonal or deferred amortization options built-in</p>
                                </div>
                            </div>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Commercial Loans */}
                    <div id="commercial" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                                    <Building size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Commercial Scale</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>Commercial Loans</h3>
                            <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                                <p>
                                    We structure institutional-level options spanning standard asset classes: Multifamily, Mixed-Use, Warehouse/Industrial footprints, Office properties, and Retail strip centers.
                                </p>
                                <div className="p-3 bg-line/20 rounded-xl border border-line">
                                    <h4 className="font-bold text-ink text-xs mb-1">SBA 7(a) Guaranty Systems</h4>
                                    <p className="text-xs">
                                        Leverage core agency backing parameters to secure essential asset purchase lines reaching up to $2,000,000 with highly favorable amortized structures.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Bridge to Sale */}
                    <div id="bridge-to-sale" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                                    <RefreshCw size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Transitions</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>Bridge to Sale</h3>
                            <div className="text-sm text-ink-2 space-y-4 mb-6 leading-relaxed">
                                <p>
                                    Avoid the pressure of alignment dependencies. Extract value from your current property before it goes to market to secure your next primary acquisition stress-free.
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-xs">
                                    <li>1-year interest-only frameworks with standard extensions</li>
                                    <li>Maximized cash-out conversion thresholds</li>
                                    <li>Alternative dynamic income processing parameters</li>
                                    <li>No-monthly-payment options on qualifying profiles</li>
                                </ul>
                            </div>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                </div>
            </section>

            {/* Global Borders Cross-Section (Mexico, Portugal & Specialty EEP / Medical Channels) */}
            <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-28">
                <h2 className={cn("text-3xl font-display text-ink mb-10 pb-4 border-b border-line", fraunces.className)}>
                    International & Custom Footprints
                </h2>
                <div className="grid md:grid-cols-2 gap-px bg-line border border-line rounded-3xl overflow-hidden shadow-sm">

                    {/* Mexico Loans */}
                    <div id="mexico" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#D4A373]/20 text-[#D4A373]">
                                    <Landmark size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Cross-Border</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-4", fraunces.className)}>Mexico Loans</h3>
                            <ul className="list-disc list-inside text-xs text-ink-2 space-y-1 mb-6 leading-relaxed">
                                <li>Loan volumes extending from $250k to $2.5M</li>
                                <li>Geographic distribution mapped across premier regions in Mexico</li>
                                <li>SFR, Condos, PUD structures, and 1-4 units accepted</li>
                                <li>Streamlined purchase and equity cash-out refinance options</li>
                                <li>Tailored explicitly for US Citizens and US Permanent Residents</li>
                                <li>Escrow, title insurance protocols coordinated safely via institutional entities</li>
                                <li>15, 20, 25, and 30-year fully amortizing structural terms</li>
                                <li>700 minimum FICO requirement with up to 65% maximum LTV rules</li>
                            </ul>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Portugal Loans */}
                    <div id="portugal" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                                    <Landmark size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">European desk</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-3", fraunces.className)}>Portugal Loans</h3>
                            <p className="text-xs font-bold text-ink mb-3">Portugal Home Loans for All Property Classes</p>
                            <p className="text-xs text-ink-2 leading-relaxed mb-4">
                                Navigating cross-border properties requires strict compliance alignment. We coordinate financing vectors for primary or secondary vacation assets seamlessly across international banking lines.
                            </p>

                            <div className="space-y-3 text-xs text-ink-2 mb-6">
                                <p><strong>Loan-to-Value (LTV) Ratios:</strong> Standard residential profiles mapped between 65% and 75% dependent on primary or investment classification status.</p>
                                <p><strong>Structural Terms:</strong> Amortization schedules reaching up to 30 years, subject to standard Eurobank age-cap boundaries (typically matching age 75 limits).</p>
                                <div>
                                    <p><strong>Rate Architectures:</strong> Choose between variable indexes tied securely to Euribor, fully-shielded fixed options, or hybrid mixed-term models.</p>
                                </div>
                                <p className="p-2.5 bg-line/30 border border-line rounded font-mono text-[11px] text-moss-deep">
                                    Program frameworks adapt to changing Euribor indices. Inquire directly for real-time market-spread updates.
                                </p>
                            </div>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Dream Home Builder AKA Earned Equity Program (EEP) */}
                    <div id="eep" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-orange/10 text-brand-orange">
                                    <Key size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Earned Equity EEP</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-2", fraunces.className)}>Dream Home Builder (EEP)</h3>
                            <p className="text-xs font-serif italic text-brand-orange mb-4">Unlock the Dream of Homeownership with an Innovative Lease-to-Own Program!</p>

                            <div className="text-xs text-ink-2 space-y-3 mb-6 leading-relaxed">
                                <p>Homeownership is the primary engine of generational wealth. Our specialized Earned Equity Program (EEP) converts traditional rental scenarios into custom pathways to true real estate acquisition.</p>
                                <p>By pairing prospective buyers with participating public-entity frameworks, clients occupy single-family layouts while stacking measurable fractional equity positions calculated to pivot smoothly into standard FHA parameters down the road.</p>

                                <div className="bg-[#f0ece1]/60 p-3 rounded-lg border border-line space-y-1 font-mono text-[11px]">
                                    <p><strong>· LTV Framework:</strong> Matches FHA configurations up to 96.5%</p>
                                    <p><strong>· Balance Limits:</strong> Aligned with standard regional FHA limits</p>
                                    <p><strong>· Credit Baseline:</strong> 580 minimum tier guidelines (sub-580 case-by-case)</p>
                                    <p><strong>· Documentation Matrix:</strong> Full-Doc, Bank Statements, or 1099 arrays accepted</p>
                                    <li>ITIN and DACA configuration pathways available</li>
                                </div>
                            </div>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Doctor Loan Program */}
                    <div id="doctor" className="scroll-mt-36 bg-primary-bg p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-cream/40">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-moss-deep/10 text-moss-deep">
                                    <Stethoscope size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-ink-2 bg-line/30 px-2 py-1 rounded">Medical Professional</span>
                            </div>
                            <h3 className={cn("text-2xl font-medium text-ink mb-2", fraunces.className)}>Doctor Loan Program</h3>
                            <p className="text-xs font-bold text-moss-deep uppercase tracking-wide mb-4">Up to 100% Financing for Medical Professionals.</p>
                            <p className="text-xs text-ink-2 leading-relaxed mb-4">
                                We coordinate premium mortgage layouts designed explicitly for medical professionals, employing flexible underwriting parameters that factor in contracted career trajectories.
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-xs text-ink-2 mb-6">
                                <div>
                                    <h4 className="font-semibold text-ink mb-1">Program Highlights:</h4>
                                    <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                                        <li>Up to 100% Financing metrics</li>
                                        <li>No Mortgage Insurance (MI) overheads</li>
                                        <li>Volumes scaling up to $2,000,000</li>
                                        <li>Exclusion of student loan debt from standard DTI rules</li>
                                        <li>Fixed and dynamic ARM configurations</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-ink mb-1">Eligible Designations:</h4>
                                    <p className="font-mono text-[11px] bg-line/20 p-2 rounded tracking-wide">
                                        MD, DO, DDS, DMD, PharmD, VMD, DPM, CRNA <br />
                                        <span className="italic text-ink-2 text-[10px] block mt-1">(Inquire for extended medical classifications)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a href="#application" className="w-full py-3.5 bg-cream hover:bg-brand-orange hover:text-primary-bg border border-line hover:border-brand-orange rounded-xl text-xs font-medium text-ink flex items-center justify-center gap-2 transition-all">
                            Apply Now! <ArrowRight size={14} />
                        </a>
                    </div>

                </div>
            </section>

            {/* Footer Legal Context Section */}
            <section className="bg-cream/40 border-t border-line py-12 text-ink-2 text-[11px] leading-relaxed">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-4">
                    <p>
                        * Rates and programs are illustrations subject to change without notice. These calculations do not constitute an official Loan Estimate or a binding commitment to lend. Qualification is subject to verification of financial assets and credit data profiles.
                    </p>
                    <p>
                        MyLoanDesk.com is an independent lending entity and is not affiliated with the HUD, FHA, VA, USDA, or any federal agency. We strictly uphold Equal Housing Opportunity lending baselines.
                    </p>
                    <p>
                        Secured Horizon Mortgage Group, Inc. NMLS 314226, 1444825 (www.nmlsconsumeraccess.org) | (305) 891-6500 | 1801 NE 123 St, Suite 314, North Miami, FL 33181.
                    </p>
                </div>
            </section>

        </main>
    );
}