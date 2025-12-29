"use client";

import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Threshold 100px to start the effect
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {/* TopBar Container - Collapses on scroll */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? "max-h-0 opacity-0" : "max-h-[60px] opacity-100"
                    }`}
            >
                <TopBar />
            </div>

            {/* Main Navbar */}
            <Navbar isScrolled={isScrolled} />
        </header>
    );
}
