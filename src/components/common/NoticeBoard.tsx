"use client";

import Link from "next/link";

interface NoticeItem {
    text: string;
    date?: string;
    href?: string;
}

interface NoticeBoardProps {
    notices: (string | NoticeItem)[];
    title?: string;
    height?: string; // CSS height value, e.g. "300px" or "h-64"
    speed?: number; // Duration in seconds
    className?: string;
}

export default function NoticeBoard({
    notices,
    title = "Notice Board",
    height = "300px",
    speed = 25,
    className = ""
}: NoticeBoardProps) {

    // Normalize items
    const items: NoticeItem[] = notices.map(item =>
        typeof item === 'string' ? { text: item } : item
    );

    const renderItem = (item: NoticeItem, index: number) => (
        <div key={`${index}`} className="mb-4 border-b border-gray-100 pb-2 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-sm">
            {item.date && (
                <span className="block text-xs font-bold text-corporate-orange mb-1 uppercase tracking-wider">{item.date}</span>
            )}
            {item.href ? (
                <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-corporate-blue font-lato text-sm leading-relaxed block"
                >
                    {item.text}
                </a>
            ) : (
                <p className="text-gray-700 font-lato text-sm leading-relaxed cursor-default">
                    {item.text}
                </p>
            )}
        </div>
    );

    return (
        <div className={`bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden flex flex-col ${className}`}>
            {/* Header */}
            <div className="bg-corporate-blue text-white py-3 px-4 font-oswald font-bold uppercase tracking-wide text-sm flex items-center justify-between">
                <span>{title}</span>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
            </div>

            {/* Scrolling Area */}
            <div className="relative overflow-hidden notice-container" style={{ height }}>
                <div
                    className="absolute w-full px-4 py-2 animate-vertical-marquee"
                    style={{ animationDuration: `${speed}s` }}
                >
                    {/* First Set */}
                    {items.map((item, index) => renderItem(item, index))}
                    {/* Duplicate Set for Loop */}
                    {items.map((item, index) => renderItem(item, index))}
                </div>
            </div>

            <style jsx>{`
                @keyframes vertical-marquee {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .animate-vertical-marquee {
                    animation: vertical-marquee linear infinite;
                }
                .notice-container:hover .animate-vertical-marquee {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
