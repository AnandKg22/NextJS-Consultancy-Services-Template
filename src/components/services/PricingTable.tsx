"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Basic Plan",
        price: "49.00",
        features: ["Business Planning", "Financial Advice", "Strategic Planning", "Insurance Strategy"],
        highlight: false
    },
    {
        name: "Standard Plan",
        price: "69.00",
        features: ["Business Planning", "Financial Advice", "Strategic Planning", "Insurance Strategy", "Marketing Policy"],
        highlight: true // Orange Background
    },
    {
        name: "Premium Plan",
        price: "99.00",
        features: ["Business Planning", "Financial Advice", "Strategic Planning", "Insurance Strategy", "Risk Management"],
        highlight: false
    }
];

export default function PricingTable() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h4 className="text-corporate-orange font-oswald uppercase text-sm font-bold tracking-widest mb-2">Our Pricing</h4>
                    <h2 className="text-4xl font-oswald font-bold text-corporate-blue uppercase">Select Your Plan</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={cn(
                                "p-10 flex flex-col items-center shadow-md transition-shadow hover:shadow-xl",
                                plan.highlight ? "bg-corporate-orange text-white" : "bg-white text-gray-600"
                            )}
                        >
                            <h3 className={cn(
                                "font-oswald font-bold text-lg uppercase tracking-wide mb-6",
                                plan.highlight ? "text-white" : "text-gray-800"
                            )}>
                                {plan.name}
                            </h3>

                            <div className="mb-8">
                                <span className="text-xl align-top mr-1">$</span>
                                <span className="font-oswald text-6xl font-bold">{plan.price}</span>
                            </div>

                            <ul className="space-y-4 mb-10 w-full">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center justify-center gap-2 text-sm border-b border-white/20 pb-2 last:border-0">
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={cn(
                                "px-8 py-3 font-oswald font-bold uppercase text-xs tracking-widest transition-colors mt-auto",
                                plan.highlight
                                    ? "bg-corporate-blue text-white hover:bg-white hover:text-corporate-blue"
                                    : "bg-corporate-blue text-white hover:bg-corporate-orange"
                            )}>
                                Purchase Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
