import ServiceCard from "./ServiceCard";

const services = [
    {
        title: "Business Planning",
        description: "We help you create a comprehensive business plan that outlines your strategy, goals, and financial projections.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
        variant: "navy" as const
    },
    {
        title: "Financial Advice",
        description: "Expert financial advice to help you manage your assets, investments, and long-term financial health.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
        variant: "orange" as const
    },
    {
        title: "Strategic Planning",
        description: "Develop a strategic roadmap to guide your business through growth, change, and market challenges.",
        image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800",
        variant: "navy" as const
    },
    {
        title: "Insurance Strategy",
        description: "Protect your business with a tailored insurance strategy that covers all potential risks and liabilities.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
        variant: "orange" as const
    },
    {
        title: "Marketing Policy",
        description: "Create a powerful marketing policy that defines your brand voice, target audience, and promotional channels.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
        variant: "navy" as const
    },
    {
        title: "Risk Management",
        description: "Identify, assess, and prioritize risks to minimize their impact on your business operations.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
        variant: "orange" as const
    }
];

export default function ServicesGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h4 className="text-corporate-orange font-oswald uppercase text-sm font-bold tracking-widest mb-2">Our Services</h4>
                    <h2 className="text-4xl font-oswald font-bold text-corporate-blue uppercase">What We Provide</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
