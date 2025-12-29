"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = [
    { name: "Business Planning", percentage: 90 },
    { name: "Financial Advice", percentage: 80 },
    { name: "Investment Strategy", percentage: 90 },
    { name: "Business Security", percentage: 95 },
];

export default function HomeSkills() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div>
                        <h4 className="text-corporate-orange font-oswald uppercase text-sm font-bold tracking-widest mb-2">
                            Our Skills
                        </h4>
                        <h2 className="text-4xl font-oswald font-bold text-corporate-blue uppercase mb-6">
                            We Are Expert In
                        </h2>
                        <p className="text-gray-600 font-lato leading-relaxed mb-6">
                            We bring a wealth of experience and a proven track record to every project. Our team consists of industry experts dedicated to providing top-tier consultancy services that drive growth and efficiency.
                        </p>
                        <p className="text-gray-600 font-lato leading-relaxed">
                            From strategic planning to risk management, we have the skills and expertise to help your business thrive in a competitive market. We are committed to delivering results that exceed your expectations.
                        </p>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-8">
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-2">
                                    <h5 className="font-oswald font-bold text-corporate-blue uppercase tracking-wide">
                                        {skill.name}
                                    </h5>
                                    <span className="font-oswald font-bold text-corporate-blue">
                                        {skill.percentage}%
                                    </span>
                                </div>
                                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-corporate-orange relative"
                                    >
                                        {/* Optional: Add a small indicator circle at the end if desired, but keeping it simple for now to match typical corporate themes */}
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
