import PageHeader from "@/components/layout/PageHeader";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import HomeCTA from "@/components/home/HomeCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "View our portfolio of successful case studies and projects across various industries.",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-[120px] lg:pt-[150px]">
            <PageHeader title="Our Projects" breadcrumb="Projects" />
            <ProjectsGallery />
            <HomeCTA />
        </main>
    );
}
