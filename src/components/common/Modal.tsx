"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEscape);
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // Use portal to render outside of parent hierarchy (avoid z-index issues)
    // Checking for document to run only on client
    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 z-[9998] backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-lg shadow-2xl z-[9999] p-6 m-4"
                    >
                        <div className="flex items-center justify-between mb-4">
                            {title && <h3 className="text-xl font-oswald font-bold text-corporate-blue">{title}</h3>}
                            <button
                                onClick={onClose}
                                className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="font-lato">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
