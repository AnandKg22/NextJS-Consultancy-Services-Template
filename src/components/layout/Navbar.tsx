"use client";

import Link from 'next/link';
import { Menu, Search, LogIn, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import SearchOverlay from './SearchOverlay';
import { themeConfig } from "@/config/themeConfig";

interface NavbarProps {
    isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Team', href: '/team' },
        { name: 'Project', href: '/projects' },
        { name: 'News', href: '/news' },
        { name: 'Components', href: '/components' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const [stickyStyle, setStickyStyle] = useState<'dark' | 'white' | 'primary'>(
        themeConfig.header?.stickyStyle as 'dark' | 'white' | 'primary' || 'dark'
    );

    // Listen for dynamic header style changes from ThemeCustomizer
    useEffect(() => {
        if (!themeConfig.allowUserCustomization) return;

        // Check local storage on mount
        const savedStyle = localStorage.getItem('sticky-header-style') as 'dark' | 'white' | 'primary';
        if (savedStyle) {
            setStickyStyle(savedStyle);
        }

        // Listen for custom event for real-time updates
        const handleHeaderChange = (e: CustomEvent) => {
            setStickyStyle(e.detail);
        };

        window.addEventListener('sticky-header-change', handleHeaderChange as EventListener);
        return () => window.removeEventListener('sticky-header-change', handleHeaderChange as EventListener);
    }, []);

    // Determine styles based on scroll state and config
    // If stickyStyle is 'white', we use white bg on scroll. If 'dark', we use dark bg.
    const isDarkSticky = isScrolled && stickyStyle === 'dark';
    const isPrimarySticky = isScrolled && stickyStyle === 'primary';

    let navbarClasses = 'bg-white py-6 shadow-sm';
    if (isScrolled) {
        if (isDarkSticky) {
            navbarClasses = 'bg-[rgba(34,34,34,0.95)] py-2 shadow-lg backdrop-blur-sm';
        } else if (isPrimarySticky) {
            navbarClasses = 'bg-corporate-blue/95 py-2 shadow-lg backdrop-blur-sm';
        } else {
            navbarClasses = 'bg-white/95 py-2 shadow-lg backdrop-blur-sm';
        }
    }

    // Text color: 
    // - When scrolled and Dark/Primary Sticky: White text
    // - Otherwise: Corporate Blue text
    const isLightText = isDarkSticky || isPrimarySticky;
    const textColorClass = isLightText ? 'text-white' : 'text-corporate-blue';
    const navLinkHoverClass = 'hover:text-corporate-orange';

    return (
        <>
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <div className={`transition-all duration-300 ${navbarClasses}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group z-50">
                        <div className={`w-10 h-10 ${isPrimarySticky ? 'bg-white text-corporate-blue' : 'bg-corporate-blue text-white'} flex items-center justify-center font-oswald font-bold text-xl rounded-sm group-hover:bg-corporate-orange group-hover:text-white transition-colors duration-300`}>
                            C
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className={`font-oswald text-2xl font-bold uppercase tracking-tighter ${textColorClass}`}>
                                Consultancy
                            </span>
                            <span className="text-[10px] text-corporate-orange font-bold tracking-[0.2em] uppercase">
                                Best Services
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-oswald font-bold uppercase text-sm tracking-wide transition-colors duration-300 ${isLightText ? 'text-white/90 hover:text-white' : 'text-corporate-blue hover:text-corporate-orange'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Action Icons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className={`${textColorClass} ${navLinkHoverClass} transition-colors`}
                        >
                            <Search size={20} />
                        </button>
                        <div className={`h-4 w-[1px] ${isLightText ? 'bg-gray-400' : 'bg-gray-300'}`}></div>
                        <Link
                            href="/studio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${textColorClass} ${navLinkHoverClass} transition-colors relative`}
                            title="Login to Studio"
                        >
                            <LogIn size={20} />
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-corporate-orange z-50 relative"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Mobile Menu Overlay */}
                    <div className={`fixed inset-0 bg-corporate-blue/95 z-40 lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="flex flex-col items-center justify-center h-full space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-oswald text-2xl text-white font-bold uppercase hover:text-corporate-orange transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
