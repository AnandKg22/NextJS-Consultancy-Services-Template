"use client";

import NewsCard from "./NewsCard";


const POSTS = [
    {
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        date: "Aug 15",
        author: "Admin",
        comments: 3,
        title: "5 Tips for Sustainable Business Growth",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
        slug: "sustainable-growth"
    },
    {
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
        date: "Aug 12",
        author: "Editor",
        comments: 0,
        title: "The Future of Financial Consulting",
        excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit...",
        slug: "financial-future"
    },
    {
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
        date: "Aug 10",
        author: "Admin",
        comments: 7,
        title: "Maximizing Your Investment Strategy",
        excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae...",
        slug: "investment-strategy"
    },
    {
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop",
        date: "Aug 05",
        author: "John Doe",
        comments: 2,
        title: "Effective Team Management Skills",
        excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est...",
        slug: "team-management"
    }
];

import { urlFor } from "@/sanity/lib/image";

interface NewsGridProps {
    posts: any[];
    sidebar: React.ReactNode;
}

export default function NewsGrid({ posts, sidebar }: NewsGridProps) {
    // If no posts are fetched (e.g. Sanity not connected), show empty state or fallback
    const displayPosts = posts?.length > 0 ? posts : [];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content Area */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                            {displayPosts.map((post) => (
                                <NewsCard
                                    key={post._id}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    date={new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                                    image={post.image ? urlFor(post.image).width(800).url() : "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"}
                                    author="Admin" // Fallback as we didn't fetch author
                                    comments={0}
                                    slug={post.slug?.current}
                                />
                            ))}
                            {displayPosts.length === 0 && (
                                <div className="col-span-2 text-center py-10 bg-gray-50 rounded-lg border border-gray-100">
                                    <p className="text-gray-500 font-lato">No news posts found. Create one in the Studio!</p>
                                </div>
                            )}
                        </div>

                        {/* Pagination Placeholder */}
                        {displayPosts.length > 0 && (
                            <div className="flex gap-2 mt-12 justify-center lg:justify-start">
                                {[1, 2, 3].map((num) => (
                                    <button key={num} className={`w-10 h-10 flex items-center justify-center font-oswald font-bold border transition-colors ${num === 1 ? 'bg-corporate-orange text-white border-corporate-orange' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}>
                                        {num}
                                    </button>
                                ))}
                                <button className="h-10 px-4 flex items-center justify-center font-oswald font-bold border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors">
                                    Next
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Area */}
                    <div className="lg:w-1/3">
                        {sidebar}
                    </div>
                </div>
            </div>
        </section>
    );
}
