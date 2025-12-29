"use client";

import { Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NewsSidebar() {
    const categories = [
        { name: "Business Plan", count: 3 },
        { name: "Consulting", count: 5 },
        { name: "Financial", count: 2 },
        { name: "Marketing", count: 4 },
        { name: "Startup", count: 1 },
        { name: "Strategy", count: 6 },
    ];

    const recentPosts = [
        { title: "Business mistakes to avoid", date: "August 12, 2024" },
        { title: "Your start-up business", date: "August 10, 2024" },
        { title: "Market research helps", date: "August 05, 2024" },
    ];

    return (
        <aside className="w-full space-y-10">
            {/* Search Widget */}
            <div className="bg-gray-50 p-6 border border-gray-100">
                <h3 className="font-oswald font-bold text-xl uppercase text-corporate-blue mb-6 border-l-4 border-corporate-orange pl-3">
                    Search
                </h3>
                <form className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-4 pr-10 py-3 bg-white border border-gray-200 focus:outline-none focus:border-corporate-orange transition-colors font-lato"
                    />
                    <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-corporate-orange">
                        <Search size={20} />
                    </button>
                </form>
            </div>

            {/* Categories Widget */}
            <div className="bg-gray-50 p-6 border border-gray-100">
                <h3 className="font-oswald font-bold text-xl uppercase text-corporate-blue mb-6 border-l-4 border-corporate-orange pl-3">
                    Categories
                </h3>
                <ul className="space-y-3">
                    {categories.map((cat, idx) => (
                        <li key={idx}>
                            <Link
                                href="#"
                                className="flex items-center justify-between group"
                            >
                                <div className="flex items-center text-gray-600 group-hover:text-corporate-orange transition-colors font-lato">
                                    <ChevronRight size={16} className="text-corporate-orange mr-2" />
                                    {cat.name}
                                </div>
                                <span className="text-sm text-gray-400 group-hover:text-corporate-orange transition-colors">({cat.count})</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-gray-50 p-6 border border-gray-100">
                <h3 className="font-oswald font-bold text-xl uppercase text-corporate-blue mb-6 border-l-4 border-corporate-orange pl-3">
                    Recent Posts
                </h3>
                <ul className="space-y-4">
                    {recentPosts.map((post, idx) => (
                        <li key={idx} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                            <Link href="#" className="group">
                                <h4 className="font-oswald font-bold text-corporate-blue group-hover:text-corporate-orange transition-colors mb-1">
                                    {post.title}
                                </h4>
                                <span className="text-xs text-gray-500 font-lato uppercase tracking-wider">{post.date}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Text Widget */}
            <div className="bg-corporate-blue p-6 text-white">
                <h3 className="font-oswald font-bold text-xl uppercase mb-6 border-l-4 border-corporate-orange pl-3">
                    About Us
                </h3>
                <p className="text-gray-300 font-lato leading-relaxed text-sm">
                    We are a leading consultancy firm dedicated to helping businesses grow. With years of experience, we provide top-notch strategies.
                </p>
            </div>

        </aside>
    );
}
