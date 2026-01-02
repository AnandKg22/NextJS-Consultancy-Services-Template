import PageHeader from "@/components/layout/PageHeader";
import TeamGrid from "@/components/team/TeamGrid";
import HomeCTA from "@/components/home/HomeCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team",
    description: "Meet our experienced team of consultants dedicated to your business success.",
};

export default function TeamPage() {
    return (
        <main className="min-h-screen pt-[100px] lg:pt-[150px]">
            <PageHeader title="Meet The Team" breadcrumb="Team" />
            <TeamGrid />
            <HomeCTA />
        </main>
    );
}
