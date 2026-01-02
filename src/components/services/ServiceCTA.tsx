"use client";

import { motion } from "framer-motion";

export default function ServiceCTA() {
    return (
        <section className="bg-corporate-orange text-white py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Left Text */}
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-oswald text-3xl md:text-5xl font-bold uppercase mb-2"
                    >
                        Get A Free Consultation
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-corporate-blue font-lato text-sm font-bold tracking-wide"
                    >
                        DROP US A LINE! WE ARE HERE TO ANSWER YOUR QUESTIONS 24/7
                    </motion.p>
                </div>

                {/* Right Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <button className="bg-corporate-blue text-white px-10 py-4 font-oswald font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-corporate-blue transition-all duration-300 shadow-lg">
                        Submit Request
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
