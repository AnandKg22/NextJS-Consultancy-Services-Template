"use client";

import { motion } from "framer-motion";

interface Step {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface ProcessStepsProps {
    steps: Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative text-center group"
                >
                    {/* Number / Icon Circle */}
                    <div className="w-16 h-16 mx-auto bg-gray-50 border-2 border-corporate-orange rounded-full flex items-center justify-center text-2xl font-oswald font-bold text-corporate-orange mb-6 group-hover:bg-corporate-orange group-hover:text-white transition-colors duration-300">
                        {step.icon ? step.icon : index + 1}
                    </div>

                    {/* Connector Line (Hidden on last item & mobile) */}
                    {index !== steps.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-gray-200 -z-10" />
                    )}

                    <h3 className="font-oswald font-bold text-xl text-corporate-blue mb-3">
                        {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-lato leading-relaxed">
                        {step.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
