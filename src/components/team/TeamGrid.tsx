"use client";

import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const teamMembers = [
    {
        name: "David Smith",
        role: "Senior Consultant",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000",
    },
    {
        name: "Sarah Johnson",
        role: "Financial Advisor",
        image: "https://images.unsplash.com/photo-1573496359-136d475583dc?auto=format&fit=crop&q=80&w=800&h=1000",
    },
    {
        name: "Michael Brown",
        role: "Marketing Specialist",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800&h=1000",
    },
    {
        name: "Emily Davis",
        role: "Business Analyst",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800&h=1000",
    },
    {
        name: "James Wilson",
        role: "Strategy Expert",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=1000",
    },
    {
        name: "Jessica Martinez",
        role: "Risk Manager",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000",
    },
];

export default function TeamGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h4 className="text-corporate-orange font-oswald uppercase text-sm font-bold tracking-widest mb-2">
                        Meet Our Team
                    </h4>
                    <h2 className="text-4xl font-oswald font-bold text-corporate-blue uppercase">
                        Professional Experts
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group relative overflow-hidden bg-gray-100">
                            {/* Image Container */}
                            <div className="relative h-[400px] w-full overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay with Social Icons */}
                                <div className="absolute inset-0 bg-corporate-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href="#" className="p-3 bg-white text-corporate-blue rounded-full hover:bg-corporate-orange hover:text-white transition-colors">
                                        <Facebook size={18} />
                                    </a>
                                    <a href="#" className="p-3 bg-white text-corporate-blue rounded-full hover:bg-corporate-orange hover:text-white transition-colors">
                                        <Twitter size={18} />
                                    </a>
                                    <a href="#" className="p-3 bg-white text-corporate-blue rounded-full hover:bg-corporate-orange hover:text-white transition-colors">
                                        <Linkedin size={18} />
                                    </a>
                                    <a href="#" className="p-3 bg-white text-corporate-blue rounded-full hover:bg-corporate-orange hover:text-white transition-colors">
                                        <Instagram size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="text-center py-6 bg-white border-b-4 border-transparent group-hover:border-corporate-orange transition-colors">
                                <h3 className="font-oswald font-bold text-xl uppercase text-corporate-blue mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-corporate-orange font-bold text-sm uppercase tracking-wide">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
