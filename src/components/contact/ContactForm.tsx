"use client";

import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

export default function ContactForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        alert("Message sent! (This is a demo)");
    };

    return (
        <div className="bg-gray-50 p-10 h-full">
            <h3 className="font-oswald font-bold text-2xl uppercase text-corporate-blue mb-8">
                Send Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        {...register("name")}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-corporate-orange transition-colors font-lato"
                    />
                    <input
                        {...register("email")}
                        placeholder="Email Address"
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-corporate-orange transition-colors font-lato"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        {...register("phone")}
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-corporate-orange transition-colors font-lato"
                    />
                    <input
                        {...register("subject")}
                        placeholder="Subject"
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-corporate-orange transition-colors font-lato"
                    />
                </div>
                <textarea
                    {...register("message")}
                    placeholder="Message..."
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-corporate-orange transition-colors font-lato resize-none"
                />
                <button
                    type="submit"
                    className="px-8 py-3 bg-corporate-orange text-white font-oswald font-bold uppercase tracking-wide hover:bg-corporate-blue transition-colors"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
