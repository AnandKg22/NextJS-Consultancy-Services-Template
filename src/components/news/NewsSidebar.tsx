

import { Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import { client, isSanityEnabled } from "@/sanity/client";
import { DEMO_POSTS, DEMO_CATEGORIES } from "@/data/demoContent";

async function getSidebarData() {
    if (!isSanityEnabled) {
        return {
            recentPosts: DEMO_POSTS.slice(0, 3).map(p => ({
                title: p.title,
                publishedAt: p.publishedAt,
                slug: p.slug
            })),
            categories: DEMO_CATEGORIES
        };
    }

    try {
        // Fetch recent posts
        const recentPosts = await client.fetch(`
            *[_type == "post"] | order(publishedAt desc)[0...3] {
                title,
                publishedAt,
                slug
            }
        `);

        // Fetch distinct categories
        const allCategories = await client.fetch(`*[_type == "post"].category`);

        // Count occurrences
        const categoryCounts: Record<string, number> = {};
        allCategories.forEach((cat: string) => {
            if (cat) {
                categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
            }
        });

        const categories = Object.entries(categoryCounts).map(([name, count]) => ({ name, count }));

        return { recentPosts, categories };
    } catch (error) {
        console.warn("Sidebar fetch failed, using demo data", error);
        return {
            recentPosts: DEMO_POSTS.slice(0, 3).map(p => ({
                title: p.title,
                publishedAt: p.publishedAt,
                slug: p.slug
            })),
            categories: DEMO_CATEGORIES
        };
    }
}

export default async function NewsSidebar() {
    const { recentPosts, categories } = await getSidebarData();

    return (
        <aside className="w-full space-y-10">
            {/* Search Widget */}
            <div className="bg-gray-50 p-6 border border-gray-100">
                <h3 className="font-oswald font-bold text-xl uppercase text-corporate-blue mb-6 border-l-4 border-corporate-orange pl-3">
                    Search
                </h3>
                <form className="relative" action="/news" method="get">
                    <input
                        type="text"
                        name="search"
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
                {categories.length > 0 ? (
                    <ul className="space-y-3">
                        {categories.map((cat, idx) => (
                            <li key={idx}>
                                <Link
                                    href={`/news?category=${encodeURIComponent(cat.name)}`}
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
                ) : (
                    <p className="text-sm text-gray-500 font-lato">No categories found.</p>
                )}
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-gray-50 p-6 border border-gray-100">
                <h3 className="font-oswald font-bold text-xl uppercase text-corporate-blue mb-6 border-l-4 border-corporate-orange pl-3">
                    Recent Posts
                </h3>
                {recentPosts.length > 0 ? (
                    <ul className="space-y-4">
                        {recentPosts.map((post: any, idx: number) => (
                            <li key={idx} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                                <Link href={`/news/${post.slug.current}`} className="group">
                                    <h4 className="font-oswald font-bold text-corporate-blue group-hover:text-corporate-orange transition-colors mb-1 line-clamp-2">
                                        {post.title}
                                    </h4>
                                    <span className="text-xs text-gray-500 font-lato uppercase tracking-wider">
                                        {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500 font-lato">No recent posts.</p>
                )}
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
