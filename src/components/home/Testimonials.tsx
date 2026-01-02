"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        text: "Consultancy has been exactly what our business needed to take the next step. Their strategic planning and financial advice have been invaluable.",
        name: "John Doe",
        position: "CEO, Tech Innovations",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
        text: "The team provided us with a comprehensive risk management assessment that highlighted areas we hadn't even considered. Highly recommended!",
        name: "Jane Smith",
        position: "Founder, Green Earth",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
        text: "Their marketing policy overhaul completely revitalized our brand. We seen a 40% increase in engagement since implementing their strategies.",
        name: "Michael Brown",
        position: "CMO, Future Retail",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    },
];

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h4 className="text-corporate-orange font-oswald uppercase text-sm font-bold tracking-widest mb-2">
                        Our Clients
                    </h4>
                    <h2 className="text-4xl font-oswald font-bold text-corporate-blue uppercase">
                        Testimonials
                    </h2>
                </div>

                <Slider {...settings} className="pb-10">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white p-8 shadow-md rounded-sm border-l-4 border-corporate-orange relative">
                                <div className="mb-6 text-corporate-blue/20">
                                    <Quote size={48} fill="currentColor" />
                                </div>
                                <p className="text-gray-600 italic font-lato mb-6 text-lg leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-oswald font-bold text-corporate-blue uppercase text-lg">
                                            {testimonial.name}
                                        </h4>
                                        <span className="text-sm text-gray-400 font-bold uppercase tracking-wider">
                                            {testimonial.position}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Custom CSS to style the dots to match theme */}
                <style jsx global>{`
            .slick-dots li button:before {
                font-size: 12px;
                color: #ccc;
                opacity: 0.5;
            }
            .slick-dots li.slick-active button:before {
                color: var(--color-corporate-orange); /* Corporate Orange */
                opacity: 1;
            }
        `}</style>
            </div>
        </section>
    );
}
