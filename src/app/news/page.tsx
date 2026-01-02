import PageHeader from "@/components/layout/PageHeader";
import NewsGrid from "@/components/news/NewsGrid";
import HomeCTA from "@/components/home/HomeCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "News & Updates",
    description: "Stay updated with the latest trends, insights, and company news from our blog.",
};

export default function NewsPage() {
    return (
        <main className="min-h-screen pt-[100px] lg:pt-[150px]">
            <PageHeader title="News & Updates" breadcrumb="News" />
            <NewsGrid />
            <HomeCTA />
        </main>
    );
}
