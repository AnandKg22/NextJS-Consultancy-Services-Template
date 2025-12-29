"use client";

import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck } from "lucide-react";

export default function AboutIntro() {
    const features = [
        { icon: Award, title: "Certified Company", desc: "We are fully certified and recognized globally." },
        { icon: Heart, title: "Our Passion", desc: "We love what we do and it shows in our work." },
        { icon: ShieldCheck, title: "Always Honest", desc: "Integrity is at the core of our business values." },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto max-w-6xl px-6 lg:px-8 flex flex-col lg:flex-row gap-16">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2"
                >
                    <h4 className="text-corporate-orange font-oswald uppercase tracking-widest text-sm font-bold mb-2">
                        Who We Are
                    </h4>
                    <h2 className="text-4xl font-oswald font-bold text-corporate-blue mb-6 uppercase">
                        We Are The Best <br /> Consultancy Firm
                    </h2>
                    <p className="text-gray-500 font-lato leading-relaxed mb-6">
                        We provide expert advice and strategic planning to help your business grow. Our team of experienced consultants is dedicated to your success, offering tailored solutions that meet your unique needs.
                    </p>
                    <p className="text-gray-500 font-lato leading-relaxed">
                        With a focus on innovation and excellence, we strive to deliver results that exceed expectations. Trust us to guide you through the complexities of the modern business landscape.
                    </p>
                </motion.div>

                {/* Right: Feature List */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:w-1/2"
                >
                    <div className="space-y-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="w-12 h-12 shrink-0 bg-gray-100 flex items-center justify-center rounded-sm text-corporate-orange">
                                    <feature.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-oswald font-bold text-lg text-gray-800 uppercase mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-lato">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
