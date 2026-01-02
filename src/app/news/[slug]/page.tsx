import { client, isSanityEnabled } from "@/sanity/client";
import { DEMO_POSTS } from "@/data/demoContent";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import NewsSidebar from "@/components/news/NewsSidebar";
import { User, Calendar, Tag } from "lucide-react";

export const revalidate = 60; // ISR

interface Post {
    title: string;
    publishedAt: string;
    image: any;
    body: any[];
    category: string;
    excerpt: string;
    slug: { current: string };
}

async function getPost(slug: string) {
    if (!isSanityEnabled) {
        return DEMO_POSTS.find(p => p.slug.current === slug) as unknown as Post;
    }

    try {
        const post = await client.fetch<Post>(`
        *[_type == "post" && slug.current == $slug][0] {
          title,
          publishedAt,
          image,
          body,
          category,
          excerpt,
          slug
        }
      `, { slug });
        return post;
    } catch (error) {
        console.warn("Sanity fetch failed for single post, falling back to demo.", error);
        return DEMO_POSTS.find(p => p.slug.current === slug) as unknown as Post;
    }
}

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    const ogImage = post.image ? urlFor(post.image).width(1200).height(630).url() : undefined;

    return {
        title: post.title,
        description: post.excerpt, // Assuming excerpt exists on Post interface
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.publishedAt,
            images: ogImage ? [ogImage] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: ogImage ? [ogImage] : [],
        }
    };
}

export default async function SinglePostPage({ params }: { params: Promise<{ slug: string }> }) {
    // Await params because in Next.js 15+ params is a Promise, though usually in 14 it's not. 
    // Typescript might complain if we treat it as sync if strict.
    // Safe bet: await it if using latest Next.js types, or just access if using older.
    // Given package.json says "next": "16.1.1", params IS a promise in 15+.

    const { slug } = await params;

    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-[100px] lg:pt-[150px]">
            <PageHeader title={post.title} breadcrumb="News Detail" />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            <article>
                                {/* Featured Image */}
                                {post.image && (
                                    <div className="relative w-full h-[400px] mb-8 rounded-sm overflow-hidden">
                                        <Image
                                            src={urlFor(post.image).width(1200).height(800).url()}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}

                                {/* Meta Data */}
                                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 font-lato border-b border-gray-100 pb-6">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-corporate-orange" />
                                        <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User size={16} className="text-corporate-orange" />
                                        <span>Admin</span>
                                    </div>
                                    {post.category && (
                                        <div className="flex items-center gap-2">
                                            <Tag size={16} className="text-corporate-orange" />
                                            <span>{post.category}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="prose prose-lg max-w-none font-lato prose-headings:font-oswald prose-a:text-corporate-orange hover:prose-a:text-corporate-blue">
                                    {post.body ? <PortableText value={post.body} /> : <p>No content found.</p>}
                                </div>
                            </article>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3">
                            <NewsSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
