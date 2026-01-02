"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
    title: string;
    breadcrumb: string;
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
    return (
        <div className="relative h-[300px] bg-gray-900 flex items-center justify-center -mt-6 lg:-mt-8">
            {/* Background Image (Placeholder for now, or could be prop) */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920)' }}
            ></div>
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase tracking-wider mb-4">
                    {title}
                </h1>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300 font-lato uppercase tracking-widest">
                    <Link href="/" className="hover:text-corporate-orange transition-colors">Home</Link>
                    <ChevronRight size={14} className="text-corporate-orange" />
                    <span className="text-white">{breadcrumb}</span>
                </div>
            </div>
        </div>
    );
}
