"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VerticalTickerProps {
    items: string[];
    interval?: number;
    className?: string;
    title?: string;
}

export default function VerticalTicker({ items, interval = 3000, className = "", title = "Latest Update:" }: VerticalTickerProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [items.length, interval]);

    return (
        <div className={`flex items-center h-10 overflow-hidden bg-gray-100 border border-gray-200 rounded-sm px-4 ${className}`}>
            {title && (
                <span className="font-oswald font-bold text-corporate-orange mr-4 text-sm uppercase whitespace-nowrap">
                    {title}
                </span>
            )}
            <div className="relative w-full h-full flex items-center">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-full truncate font-lato text-sm text-gray-700"
                    >
                        {items[index]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
