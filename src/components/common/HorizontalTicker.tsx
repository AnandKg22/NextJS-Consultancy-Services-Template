"use client";

import Link from "next/link";

interface TickerItem {
    text: string;
    href?: string;
}

interface HorizontalTickerProps {
    messages: (string | TickerItem)[]; // Support both for backward compatibility
    speed?: number; // Duration in seconds
    className?: string;
}

export default function HorizontalTicker({ messages, speed = 40, className = "" }: HorizontalTickerProps) {

    // Normalize items to objects
    const items: TickerItem[] = messages.map(msg =>
        typeof msg === 'string' ? { text: msg } : msg
    );

    const renderItem = (item: TickerItem, index: number, keyPrefix: string) => (
        <span key={`${keyPrefix}-${index}`} className="mx-8 font-lato text-sm tracking-wide uppercase inline-block">
            {item.href ? (
                <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-corporate-orange transition-colors duration-200 border-b border-transparent hover:border-corporate-orange"
                >
                    {item.text}
                </a>
            ) : (
                item.text
            )}
        </span>
    );

    return (
        <div className={`w-full overflow-hidden bg-corporate-blue text-white py-3 ${className}`}>
            <div className="relative w-full flex overflow-hidden ticker-container">
                <div
                    className="flex animate-marquee whitespace-nowrap"
                    style={{ animationDuration: `${speed}s` }}
                >
                    {/* First Set */}
                    {items.map((item, index) => renderItem(item, index, "set1"))}
                    {/* Duplicate Sets for Seamless Loop */}
                    {items.map((item, index) => renderItem(item, index, "set2"))}
                    {items.map((item, index) => renderItem(item, index, "set3"))}
                    {items.map((item, index) => renderItem(item, index, "set4"))}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .ticker-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}
