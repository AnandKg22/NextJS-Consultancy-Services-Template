"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920",
        subtitle: "WELCOME TO CONSULTANCY",
        title: "WE ARE GLOBAL <br/> CONSULTANCY FIRM",
        description: "The best consultancy in the business for your growth.",
        cta: "READ MORE"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920",
        subtitle: "GROW YOUR BUSINESS",
        title: "FINANCIAL <br/> ADVICE & AUDIT",
        description: "Expert financial guidance to secure your future.",
        cta: "OUR SERVICES"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1920",
        subtitle: "EXPERT ASSISTANCE",
        title: "STRATEGIC <br/> PLANNING STEPS",
        description: "Innovative strategies for complex challenges.",
        cta: "CONTACT US"
    }
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <div className="relative h-[600px] lg:h-[800px] w-full overflow-hidden bg-gray-900">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </motion.div>
            </AnimatePresence>

            {/* Content Layer */}
            <div className="relative z-10 w-full h-full">
                <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {/* Use key=current to trigger re-animation on slide change */}
                        <div key={current} className="max-w-3xl text-white">

                            {/* Subtitle */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex items-center gap-3 mb-4"
                            >
                                <div className="w-12 h-[2px] bg-corporate-orange"></div>
                                <span className="font-oswald uppercase tracking-[0.2em] text-sm md:text-base font-bold text-corporate-orange">
                                    {slides[current].subtitle}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="font-oswald font-bold text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mb-6"
                                dangerouslySetInnerHTML={{ __html: slides[current].title }}
                            />

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <button className="bg-corporate-orange text-white px-8 py-3 md:px-10 md:py-4 font-oswald font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-corporate-blue transition-colors duration-300 flex items-center gap-2 group">
                                    {slides[current].cta}
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation arrows (optional, Revolution Slider has them) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20 hidden md:block group">
                <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-corporate-orange hover:border-corporate-orange transition-all rounded-full bg-black/20 backdrop-blur-sm">
                    <ChevronLeft size={24} />
                </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 hidden md:block group">
                <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center border border-white/30 text-white hover:bg-corporate-orange hover:border-corporate-orange transition-all rounded-full bg-black/20 backdrop-blur-sm">
                    <ChevronRight size={24} />
                </button>
            </div>

        </div>
    );
}
