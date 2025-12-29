"use client";

import Link from 'next/link';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
    isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Team', href: '/team' },
        { name: 'Project', href: '/projects' },
        { name: 'News', href: '/news' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <div className={`transition-all duration-300 ${isScrolled ? 'bg-[rgba(34,34,34,0.95)] py-2 shadow-lg backdrop-blur-sm' : 'bg-white py-6 shadow-sm'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group z-50">
                    <div className="w-10 h-10 bg-corporate-blue text-white flex items-center justify-center font-oswald font-bold text-xl rounded-sm group-hover:bg-corporate-orange transition-colors duration-300">
                        C
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className={`font-oswald text-2xl font-bold uppercase tracking-tighter ${isScrolled ? 'text-white' : 'text-corporate-blue'}`}>
                            Consultancy
                        </span>
                        <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">
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
                            className={`font-oswald font-bold uppercase text-sm tracking-wide transition-colors duration-300 ${isScrolled
                                ? 'text-gray-300 hover:text-corporate-orange'
                                : 'text-corporate-blue hover:text-corporate-orange'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Action Icons */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className={`${isScrolled ? 'text-white' : 'text-corporate-blue'} hover:text-corporate-orange transition-colors`}>
                        <Search size={20} />
                    </button>
                    <div className={`h-4 w-[1px] ${isScrolled ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                    <button className={`${isScrolled ? 'text-white' : 'text-corporate-blue'} hover:text-corporate-orange transition-colors relative`}>
                        <ShoppingBag size={20} />
                        <span className="absolute -top-1 -right-1 bg-corporate-orange text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                    </button>
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
    );
}

