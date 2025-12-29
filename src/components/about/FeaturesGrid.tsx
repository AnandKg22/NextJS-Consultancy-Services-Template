"use client";

import { motion } from "framer-motion";
import { Briefcase, BarChart, PieChart, TrendingUp, Users, Target, Globe, Award } from "lucide-react";

export default function FeaturesGrid() {
    const features = [
        { icon: Briefcase, title: "Business" },
        { icon: BarChart, title: "Financial" },
        { icon: PieChart, title: "Analysis" },
        { icon: TrendingUp, title: "Marketing" },
        { icon: Users, title: "HR" },
        { icon: Target, title: "Strategy" },
        { icon: Globe, title: "Global" },
        { icon: Award, title: "Quality" },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                        >
                            <feature.icon size={32} className="text-gray-400 group-hover:text-corporate-orange transition-colors" />
                            <h5 className="font-oswald font-bold uppercase text-xs tracking-wider text-gray-700 group-hover:text-corporate-blue transition-colors">
                                {feature.title}
                            </h5>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
