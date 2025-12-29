"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Business Plan", "Financial", "Marketing", "Strategy"];

const projects = [
    {
        id: 1,
        title: "Financial Growth",
        category: "Financial",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        id: 2,
        title: "Market Analysis",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        id: 3,
        title: "Business Strategy",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        id: 4,
        title: "Investment Plan",
        category: "Business Plan",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        id: 5,
        title: "Risk Assessment",
        category: "Financial",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        id: 6,
        title: "Digital Marketing",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800&h=600",
    },
];

export default function ProjectsGallery() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Filter Buttons */}
                <div className="flex flex-wrapjustify-center gap-4 mb-16">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-6 py-2 font-oswald font-bold uppercase text-sm tracking-wide transition-all border-2",
                                    activeCategory === category
                                        ? "bg-corporate-orange text-white border-corporate-orange"
                                        : "bg-white text-gray-500 border-gray-200 hover:border-corporate-orange hover:text-corporate-orange"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative overflow-hidden"
                            >
                                <div className="relative h-[300px] w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-corporate-blue/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                                        <h3 className="text-white font-oswald font-bold text-xl uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                            {project.title}
                                        </h3>
                                        <p className="text-corporate-orange font-bold text-sm uppercase tracking-wide mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                            {project.category}
                                        </p>
                                        <a href="#" className="inline-block p-3 border-2 border-white/30 rounded-full text-white hover:bg-white hover:text-corporate-blue transition-colors translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                                            <Link2 size={20} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
