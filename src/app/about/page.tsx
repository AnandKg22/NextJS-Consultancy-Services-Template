import PageHeader from "@/components/layout/PageHeader";
import AboutIntro from "@/components/about/AboutIntro";
import FeaturesGrid from "@/components/about/FeaturesGrid";
import HomeStats from "@/components/home/HomeStats";
import HomeWhyUs from "@/components/home/HomeWhyUs";
import HomeCTA from "@/components/home/HomeCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about our history, mission, and the team driving our consultancy services.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-[100px] lg:pt-[150px]">
            <PageHeader title="About Us" breadcrumb="About Us" />
            <AboutIntro />
            <FeaturesGrid />
            <HomeStats />
            <HomeWhyUs />
            {/* Pending: TeamGrid (will be added when Team Page is built) */}
        </main>
    );
}
