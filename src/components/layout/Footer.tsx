"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, ChevronRight, Phone, Mail, MapPin, Send } from "lucide-react";
import { themeConfig } from "@/config/themeConfig";
import { useState, useEffect } from "react";

export default function Footer() {
    const [footerStyle, setFooterStyle] = useState<'dark' | 'primary' | 'secondary'>(
        themeConfig.footer?.style as 'dark' | 'primary' | 'secondary' || 'dark'
    );

    useEffect(() => {
        if (!themeConfig.allowUserCustomization) return;

        // Check local storage
        const savedStyle = localStorage.getItem('footer-style') as 'dark' | 'primary' | 'secondary';
        if (savedStyle) setFooterStyle(savedStyle);

        // Listen for updates
        const handleFooterChange = (e: CustomEvent) => setFooterStyle(e.detail);
        window.addEventListener('footer-style-change', handleFooterChange as EventListener);
        return () => window.removeEventListener('footer-style-change', handleFooterChange as EventListener);
    }, []);

    // --- Dynamic Styles Configuration ---
    let containerClass = "bg-[#1a1a1a] text-gray-400"; // Default Dark
    let headingClass = "text-white";
    let iconBgClass = "bg-gray-800 text-white hover:bg-corporate-orange";
    let borderClass = "border-gray-800";
    let copyrightBgClass = "bg-corporate-blue";
    let copyrightTextClass = "text-white";
    let linkHoverClass = "hover:text-corporate-orange";
    let inputBgClass = "bg-gray-800 text-white focus:ring-corporate-orange";

    if (footerStyle === 'primary') {
        containerClass = "bg-corporate-blue text-white/80";
        headingClass = "text-white";
        iconBgClass = "bg-white/10 text-white hover:bg-corporate-orange";
        borderClass = "border-white/10";
        // copyrightBgClass remains bg-corporate-blue
        copyrightTextClass = "text-white/70";
        inputBgClass = "bg-white/10 text-white focus:ring-corporate-orange";
    } else if (footerStyle === 'secondary') {
        containerClass = "bg-corporate-orange text-corporate-blue";
        headingClass = "text-white"; // White headings on orange pop well
        iconBgClass = "bg-white/20 text-white hover:bg-corporate-blue";
        borderClass = "border-corporate-blue/10";
        // copyrightBgClass remains bg-corporate-blue
        copyrightTextClass = "text-white";
        linkHoverClass = "hover:text-white"; // White hover on orange
        inputBgClass = "bg-white/20 text-corporate-blue placeholder-corporate-blue/60 focus:ring-corporate-blue";
    }

    return (
        <footer className={`${containerClass} font-lato transition-colors duration-500`}>
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-corporate-blue text-white flex items-center justify-center font-oswald font-bold text-xl rounded-sm shadow-sm">
                                C
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className={`font-oswald text-2xl font-bold uppercase tracking-tighter ${footerStyle === 'secondary' ? 'text-corporate-blue' : 'text-white'}`}>
                                    Consultancy
                                </span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            We are a global consultancy firm providing expert advice and strategic planning to help your business grow.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className={`w-8 h-8 flex items-center justify-center transition-colors duration-300 rounded-sm ${iconBgClass}`}>
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div>
                        <h3 className={`font-oswald font-bold uppercase text-lg mb-6 relative inline-block ${headingClass}`}>
                            Our Services
                            <span className={`block h-0.5 w-12 mt-2 ${footerStyle === 'secondary' ? 'bg-corporate-blue' : 'bg-corporate-orange'}`}></span>
                        </h3>
                        <ul className="space-y-3">
                            {['Business Planning', 'Financial Advice', 'Strategic Planning', 'Insurance Strategy', 'Marketing Policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className={`flex items-center gap-2 transition-colors text-sm group ${linkHoverClass}`}>
                                        <ChevronRight size={14} className={`${footerStyle === 'secondary' ? 'text-white' : 'text-corporate-orange'} group-hover:translate-x-1 transition-transform`} />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Opening Time */}
                    <div>
                        <h3 className={`font-oswald font-bold uppercase text-lg mb-6 relative inline-block ${headingClass}`}>
                            Opening Time
                            <span className={`block h-0.5 w-12 mt-2 ${footerStyle === 'secondary' ? 'bg-corporate-blue' : 'bg-corporate-orange'}`}></span>
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className={`flex justify-between border-b pb-2 ${borderClass}`}>
                                <span>Mon - Tue:</span>
                                <span>08:00 - 17:00</span>
                            </li>
                            <li className={`flex justify-between border-b pb-2 ${borderClass}`}>
                                <span>Wed - Thu:</span>
                                <span>08:00 - 17:00</span>
                            </li>
                            <li className={`flex justify-between border-b pb-2 ${borderClass}`}>
                                <span>Friday:</span>
                                <span>08:00 - 17:00</span>
                            </li>
                            <li className={`flex justify-between border-b pb-2 ${borderClass}`}>
                                <span>Saturday:</span>
                                <span>08:00 - 14:00</span>
                            </li>
                            <li className={`flex justify-between font-bold ${footerStyle === 'secondary' ? 'text-corporate-blue' : 'text-corporate-orange'}`}>
                                <span>Sunday:</span>
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter & Contact */}
                    <div>
                        <h3 className={`font-oswald font-bold uppercase text-lg mb-6 relative inline-block ${headingClass}`}>
                            Newsletter
                            <span className={`block h-0.5 w-12 mt-2 ${footerStyle === 'secondary' ? 'bg-corporate-blue' : 'bg-corporate-orange'}`}></span>
                        </h3>
                        <div className="relative mb-8">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={`w-full border-none px-4 py-3 text-sm focus:ring-1 outline-none ${inputBgClass}`}
                            />
                            <button className={`absolute right-0 top-0 h-full w-12 flex items-center justify-center transition-colors ${footerStyle === 'secondary' ? 'bg-corporate-blue text-white hover:bg-white hover:text-corporate-blue' : 'bg-corporate-orange text-white hover:bg-white hover:text-corporate-blue'}`}>
                                <Send size={16} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <Phone size={18} className={`mt-1 ${footerStyle === 'secondary' ? 'text-corporate-blue' : 'text-corporate-orange'}`} />
                                <div>
                                    <span className={`block font-bold text-sm ${headingClass}`}>Call Us</span>
                                    <span className="text-xs">1-800-123-4567</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail size={18} className={`mt-1 ${footerStyle === 'secondary' ? 'text-corporate-blue' : 'text-corporate-orange'}`} />
                                <div>
                                    <span className={`block font-bold text-sm ${headingClass}`}>Valid Email</span>
                                    <span className="text-xs">info@consultancy.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div className={`${copyrightBgClass} py-6 border-t border-white/10`}>
                <div className={`container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs ${copyrightTextClass}`}>
                    <p className={`transition-colors cursor-default ${footerStyle === 'secondary' ? 'hover:text-corporate-blue' : 'hover:text-corporate-orange'}`}>&copy; {new Date().getFullYear()} Consultancy Services. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className={`transition-colors ${footerStyle === 'secondary' ? 'hover:text-corporate-blue' : 'hover:text-corporate-orange'}`}>Terms of Use</Link>
                        <Link href="#" className={`transition-colors ${footerStyle === 'secondary' ? 'hover:text-corporate-blue' : 'hover:text-corporate-orange'}`}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
