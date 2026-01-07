"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Accordion from "@/components/common/Accordion";
import Timeline from "@/components/common/Timeline";
import ProcessSteps from "@/components/common/ProcessSteps";
import LogoCarousel from "@/components/marketing/LogoCarousel";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";
import Modal from "@/components/common/Modal";
import GoogleMapEmbed from "@/components/contact/GoogleMapEmbed";
import HorizontalTicker from "@/components/common/HorizontalTicker";
import VerticalTicker from "@/components/common/VerticalTicker";
import NoticeBoard from "@/components/common/NoticeBoard";
import ScrollReveal from "@/components/common/ScrollReveal";
import { Lightbulb, Settings, Users, PenTool, CheckCircle } from "lucide-react";

export default function ComponentsShowcase() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen pt-[100px] lg:pt-[150px]">
            <PageHeader title="Component Suite" breadcrumb="Components" />

            {/* 1. Marketing Elements */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl space-y-20">

                    {/* Logo Carousel */}
                    <ScrollReveal animation="fade-up">
                        <h2 className="text-3xl font-oswald font-bold text-corporate-blue mb-8 border-l-4 border-corporate-orange pl-4">Logo Carousel</h2>
                        <LogoCarousel />
                    </ScrollReveal>

                    {/* Newsletter and Modal */}
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <ScrollReveal animation="slide-right" delay={0.2}>
                            <h2 className="text-3xl font-oswald font-bold text-corporate-blue mb-8 border-l-4 border-corporate-orange pl-4">Newsletter Signup</h2>
                            <NewsletterSignup />
                        </ScrollReveal>
                        <ScrollReveal animation="slide-left" delay={0.4}>
                            <h2 className="text-3xl font-oswald font-bold text-corporate-blue mb-8 border-l-4 border-corporate-orange pl-4">Modal / Popups</h2>
                            <div className="bg-gray-50 p-12 rounded-sm border border-gray-100 text-center">
                                <p className="mb-6 font-lato text-gray-600">Click to preview the modal component.</p>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="btn btn-primary"
                                >
                                    Open Demo Modal
                                </button>

                                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Demo Modal">
                                    <div className="text-center">
                                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                        <p className="text-lg text-gray-700 mb-4">This is a reusable modal component!</p>
                                        <p className="text-sm text-gray-500">You can put forms, videos, or any content here.</p>
                                        <div className="mt-6 flex gap-4 justify-center">
                                            <button onClick={() => setIsModalOpen(false)} className="btn btn-white text-sm">Cancel</button>
                                            <button onClick={() => setIsModalOpen(false)} className="btn btn-primary text-sm">Confirm Action</button>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </section>

            {/* 2. Content Modules */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl space-y-20">

                    {/* Process Steps */}
                    <div>
                        <h2 className="text-3xl font-oswald font-bold text-corporate-blue mb-12 border-l-4 border-corporate-orange pl-4">Process Steps</h2>
                        <ProcessSteps
                            steps={[
                                { title: "Discovery", description: "We analyze your business needs.", icon: <Lightbulb /> },
                                { title: "Strategy", description: "We build a custom roadmap.", icon: <Settings /> },
                                { title: "Execution", description: "We implement the solution.", icon: <PenTool /> },
                                { title: "Success", description: "We monitor and optimize results.", icon: <Users /> },
                            ]}
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Timeline */}
                        <div>
                            <h2 className="text-3xl font-oswald font-bold text-corporate-blue mb-8 border-l-4 border-corporate-orange pl-4">Company Timeline</h2>
                            <Timeline
                                events={[
                                    { year: "2015", title: "Founded", description: "Started in a small garage with big dreams." },
                                    { year: "2018", title: "Expansion", description: "Opened our first international office in London." },
                                    { year: "2023", title: "Market Leader", description: "Recognized as Top Consultancy Firm of the Year." },
                                ]}
                            />
                        </div>

                        {/* Accordion */}
                        <div>
                            <h2 className="text-3xl font-oswald font-bold text-corporate-blue mb-8 border-l-4 border-corporate-orange pl-4">Accordion / FAQ</h2>
                            <Accordion
                                items={[
                                    { title: "What services do you offer?", content: "We offer business consulting, financial planning, and marketing strategy services tailored to your needs." },
                                    { title: "How do you charge?", content: "Our pricing scales based on the project scope. We offer both hourly rates and project-based fixed fees." },
                                    { title: "Do you work remotely?", content: "Yes! We work with clients worldwide using modern collaboration tools." },
                                ]}
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. Interactive Tickers */}
            <section className="py-10 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl space-y-8">
                    <h2 className="text-3xl font-oswald font-bold text-corporate-blue mb-4 border-l-4 border-corporate-orange pl-4">Tickers / News Updates</h2>

                    <div>
                        <p className="mb-2 font-lato text-sm text-gray-500">Horizontal Marquee (Hover to Pause):</p>
                        <HorizontalTicker messages={[
                            { text: "Breaking News: Our Quarterly Results are out!", href: "https://example.com/results" },
                            "New Office Opening in NYC",
                            { text: "Join our Webinar on Friday", href: "https://example.com/webinar" }
                        ]} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="mb-2 font-lato text-sm text-gray-500">Vertical News Ticker (Single Line):</p>
                            <VerticalTicker
                                items={[
                                    "Market hits all-time high as investors rally.",
                                    "Tech sector shows 15% growth in Q3.",
                                    "Sustainable energy investments double in 2024.",
                                    "Global supply chain issues resolving faster than expected."
                                ]}
                            />
                        </div>
                        <div>
                            <p className="mb-2 font-lato text-sm text-gray-500">Notice Board (Multi-Line, 4-5 items):</p>
                            <NoticeBoard
                                height="200px" // Approx 4-5 lines based on item height
                                notices={[
                                    { date: "Oct 12", text: "Office closed for annual maintenance on Friday.", href: "#" },
                                    { date: "Oct 10", text: "New Health & Safety guidelines released.", href: "https://example.com" },
                                    { date: "Oct 08", text: "Welcome our new CTO, Sarah Jenkins!", href: "#" },
                                    { date: "Oct 05", text: "Quarterly Town Hall meeting at 3 PM." },
                                    { date: "Oct 01", text: "Don't forget to submit expenses by EOD." },
                                    { date: "Sep 28", text: "Parking lot B is under construction." }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Interactive Maps */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-oswald font-bold text-corporate-blue mb-8 border-l-4 border-corporate-orange pl-4">Interactive Map</h2>
                    <GoogleMapEmbed />
                </div>
            </section>

        </main>
    );
}
