import { client, isSanityEnabled } from "@/sanity/client";
import { DEMO_POSTS } from "@/data/demoContent";
import PageHeader from "@/components/layout/PageHeader";
import NewsGrid from "@/components/news/NewsGrid";
import NewsSidebar from "@/components/news/NewsSidebar";
import ServiceCTA from "@/components/services/ServiceCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Stay updated with the latest trends, insights, and company news from our blog.",
};

export const revalidate = 60; // Revalidate every 60 seconds

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  image: any;
  category: string;
  excerpt: string;
}

async function getPosts(search?: string, category?: string) {
  // 1. Fallback Mode: If Sanity is NOT enabled, use local demo data
  if (!isSanityEnabled) {
    let posts = [...DEMO_POSTS];

    if (search) {
      const lowerSearch = search.toLowerCase();
      posts = posts.filter(p => p.title.toLowerCase().includes(lowerSearch));
    }
    if (category) {
      posts = posts.filter(p => p.category === category);
    }
    return posts;
  }

  // 2. Live Mode: Fetch from Sanity
  try {
    const filters = [`_type == "post"`];
    if (search) filters.push(`title match "*${search}*"`);
    if (category) filters.push(`category == "${category}"`);

    const filterString = filters.join(" && ");

    const posts = await client.fetch<Post[]>(`
      *[${filterString}] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        image,
        category,
        excerpt
      }
    `);
    return posts;
  } catch (error) {
    console.warn("Sanity fetch failed. Falling back to demo data.", error);
    return DEMO_POSTS; // Safe fallback even on API error
  }
}

export default async function NewsPage(rootParams: any) {
  // In Next.js 15, searchParams is a promise. In 14, it's an object. 
  // Assuming 15+ behavior based on the package version, but safe handling:
  const searchParams = await rootParams.searchParams;
  const { search, category } = searchParams || {};

  const posts = await getPosts(search as string, category as string);

  return (
    <main className="min-h-screen pt-[100px] lg:pt-[150px]">
      <PageHeader title="News & Updates" breadcrumb="News" />
      <NewsGrid posts={posts} sidebar={<NewsSidebar />} />
      <ServiceCTA />
    </main>
  );
}
