"use client";

import Image from "next/image";

// Placeholder logos - replace with your own
const LOGOS = [
    { name: "Partner 1", src: "https://placehold.co/200x80?text=Logo+1" },
    { name: "Partner 2", src: "https://placehold.co/200x80?text=Logo+2" },
    { name: "Partner 3", src: "https://placehold.co/200x80?text=Logo+3" },
    { name: "Partner 4", src: "https://placehold.co/200x80?text=Logo+4" },
    { name: "Partner 5", src: "https://placehold.co/200x80?text=Logo+5" },
    { name: "Partner 6", src: "https://placehold.co/200x80?text=Logo+6" },
];

export default function LogoCarousel() {
    return (
        <div className="w-full overflow-hidden bg-white py-10 border-y border-gray-100">
            <div className="relative w-full max-w-6xl mx-auto px-4">
                <p className="text-center text-sm font-oswald uppercase text-gray-400 tracking-widest mb-8">Trusted by industry leaders</p>

                {/* CSS Scroll Animation Container */}
                <div className="flex overflow-hidden group">
                    {/* Inner Container: Doubled for seamless loop */}
                    <div className="flex animate-scroll whitespace-nowrap gap-12 sm:gap-24 hover:pause">
                        {/* First Set */}
                        {LOGOS.map((logo, index) => (
                            <div key={`logo-1-${index}`} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={150}
                                    height={60}
                                    className="object-contain h-12 w-auto"
                                    unoptimized // For placeholder images
                                />
                            </div>
                        ))}
                        {/* Second Set (Duplicate) */}
                        {LOGOS.map((logo, index) => (
                            <div key={`logo-2-${index}`} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={150}
                                    height={60}
                                    className="object-contain h-12 w-auto"
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tailwind Custom Animation (Inline for simplicity, usually in tailwind.config) */}
            <style jsx global>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
