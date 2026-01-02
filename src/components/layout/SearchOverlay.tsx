"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            // Focus input after animation
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onClose();
            router.push(`/news?search=${encodeURIComponent(query)}`);
        }
    };

    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-corporate-blue/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-md"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
                    >
                        <X size={32} />
                    </button>

                    <form onSubmit={handleSearch} className="w-full max-w-4xl relative">
                        <div className="relative">
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Type and hit Enter..."
                                className="w-full bg-transparent border-b-2 border-white/20 text-3xl md:text-5xl font-oswald text-white pb-6 focus:outline-none focus:border-corporate-orange transition-colors placeholder:text-white/20"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-0 text-white/50 hover:text-corporate-orange transition-colors"
                            >
                                <Search size={48} />
                            </button>
                        </div>
                        <p className="mt-6 text-white/40 font-lato text-sm tracking-widest uppercase">
                            Press ESC to close
                        </p>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
