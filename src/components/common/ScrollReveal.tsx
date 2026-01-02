"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { themeConfig } from "@/config/themeConfig";

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in";
    delay?: number;
    duration?: number;
    className?: string;
    threshold?: number; // 0 to 1
}

export default function ScrollReveal({
    children,
    animation,
    delay = 0,
    duration,
    className = "",
    threshold = 0.2
}: ScrollRevealProps) {
    // If animations are globally disabled, strictly render children without motion div
    if (!themeConfig.animations.enable) {
        return <div className={className}>{children}</div>;
    }

    const effect = animation || themeConfig.animations.defaultEffect;
    const animDuration = duration || themeConfig.animations.defaultDuration;

    const ref = useRef(null);
    // @ts-ignore - Framer Motion types can be strict about margin string format
    const isInView = useInView(ref, { once: true, margin: `0px 0px -${threshold * 100}% 0px` });

    const getVariants = () => {
        switch (effect) {
            case "fade-up":
                return {
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                };
            case "fade-in":
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                };
            case "slide-left":
                return {
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                };
            case "slide-right":
                return {
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                };
            case "zoom-in":
                return {
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                };
            default:
                return {
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={getVariants()}
            transition={{ duration: animDuration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
