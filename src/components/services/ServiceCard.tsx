"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    variant: "navy" | "orange";
}

export default function ServiceCard({ title, description, image, variant }: ServiceCardProps) {
    return (
        <div className="group relative flex flex-col md:flex-row items-center">
            {/* Image Container */}
            <div className="w-full md:w-1/2 relative h-64 md:h-80 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content Box - Overlapping */}
            <div className={cn(
                "w-full md:w-1/2 bg-white p-8 md:-ml-12 relative z-10 shadow-lg border-l-4 transition-colors duration-300",
                variant === "navy" ? "border-corporate-blue" : "border-corporate-orange"
            )}>
                <h3 className={cn(
                    "font-oswald text-2xl font-bold uppercase mb-4 transition-colors",
                    variant === "navy" ? "text-corporate-blue" : "text-corporate-orange"
                )}>
                    {title}
                </h3>
                <p className="text-gray-500 font-lato text-sm leading-relaxed mb-6">
                    {description}
                </p>
                <Link
                    href="#"
                    className={cn(
                        "inline-flex items-center gap-2 font-bold uppercase text-xs tracking-widest transition-colors",
                        variant === "navy" ? "text-corporate-blue hover:text-corporate-orange" : "text-corporate-orange hover:text-corporate-blue"
                    )}
                >
                    Read More <ChevronRight size={14} />
                </Link>
            </div>
        </div>
    );
}
