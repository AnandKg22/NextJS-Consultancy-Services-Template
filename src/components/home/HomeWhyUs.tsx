"use client";

import { motion } from "framer-motion";

const pieCharts = [
    { id: 1, label: "Creative Mind", percentage: 90 },
    { id: 2, label: "Patient", percentage: 85 },
    { id: 3, label: "User Research", percentage: 98 },
    { id: 4, label: "Creativity", percentage: 70 },
];

function PieChart({ percentage, label }: { percentage: number; label: string }) {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="transparent"
                    />
                    {/* Animated Foreground Circle */}
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="var(--color-corporate-orange)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-oswald text-2xl font-bold text-gray-700">
                    {percentage}%
                </div>
            </div>
            <h3 className="mt-4 font-oswald font-bold uppercase text-gray-800 tracking-wider">
                {label}
            </h3>
        </div>
    );
}

export default function HomeWhyUs() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-oswald font-bold text-corporate-blue uppercase mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-500 font-lato">
                        We bring a wealth of experience and a creative approach to every project, ensuring your business reaches its full potential.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {pieCharts.map((chart) => (
                        <PieChart key={chart.id} {...chart} />
                    ))}
                </div>
            </div>
        </section>
    );
}
