"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    { id: 1, label: "Quality Service", value: 2567 },
    { id: 2, label: "Global Presence", value: 1850 },
    { id: 3, label: "Customer Satisfaction", value: 99 },
    { id: 4, label: "Success Story", value: 3450 },
];

function Counter({ value }: { value: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const spring = useSpring(0, { duration: 3000 }); // 3s animation
    const rounded = useTransform(spring, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return <motion.span ref={ref} className="text-4xl md:text-5xl font-oswald font-bold text-corporate-blue">{rounded}</motion.span>;
}

export default function HomeStats() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.id} className="text-center">
                        <div className="mb-2">
                            <Counter value={stat.value} />
                            {stat.id === 3 && <span className="text-4xl md:text-5xl font-oswald font-bold text-corporate-blue">%</span>}
                        </div>
                        <div className="h-1 w-12 bg-corporate-orange mx-auto mb-4"></div>
                        <h3 className="font-oswald uppercase text-gray-700 tracking-wide font-bold">
                            {stat.label}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
