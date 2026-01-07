"use client";

import { motion } from "framer-motion";

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}

interface TimelineProps {
    events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
    return (
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-12 my-10">
            {events.map((event, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 md:pl-12"
                >
                    {/* Dot */}
                    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-corporate-orange" />

                    {/* Content */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                        <span className="font-oswald font-bold text-2xl text-corporate-blue">
                            {event.year}
                        </span>
                        <h4 className="font-oswald text-xl text-gray-800">
                            {event.title}
                        </h4>
                    </div>
                    <p className="text-gray-600 font-lato leading-relaxed max-w-xl">
                        {event.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
