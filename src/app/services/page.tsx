import PageHeader from "@/components/layout/PageHeader";
import ServicesGrid from "@/components/services/ServicesGrid";
import PricingTable from "@/components/services/PricingTable";
import HomeCTA from "@/components/home/HomeCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Explore our expert consultancy services including business planning, financial strategy, and marketing.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-[100px] lg:pt-[150px]">
            <PageHeader title="Our Services" breadcrumb="Services" />
            <ServicesGrid />
            <PricingTable />
            <HomeCTA />
        </main>
    );
}
