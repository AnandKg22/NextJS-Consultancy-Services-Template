import PageHeader from "@/components/layout/PageHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import HomeCTA from "@/components/home/HomeCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with us for a free consultation or to discuss your business needs.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-[120px] lg:pt-[150px]">
            <PageHeader title="Contact Us" breadcrumb="Contact" />
            <ContactInfo />
            <section className="pb-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <div className="h-full">
                            <ContactForm />
                        </div>
                        <div className="h-[500px] lg:h-auto">
                            <ContactMap />
                        </div>
                    </div>
                </div>
            </section>
            <HomeCTA />
        </main>
    );
}
