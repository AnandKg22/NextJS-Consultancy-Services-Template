"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ title, content, isOpen, onClick }: AccordionItemProps) => {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={`font-oswald text-lg ${isOpen ? 'text-corporate-orange' : 'text-gray-800'} group-hover:text-corporate-orange transition-colors`}>
                    {title}
                </span>
                {isOpen ? (
                    <ChevronUp className="text-corporate-orange" />
                ) : (
                    <ChevronDown className="text-gray-400 group-hover:text-corporate-orange transition-colors" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-gray-600 font-lato leading-relaxed">
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface AccordionProps {
    items: {
        title: string;
        content: string;
    }[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white rounded-sm border border-gray-100 p-6 shadow-sm">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
}
