"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (data: any) => {
        setStatus("loading");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to send message");
            }

            setStatus("success");
            reset();
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message);
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <div className="bg-gray-50 p-10 h-full">
            <h3 className="font-oswald font-bold text-2xl uppercase text-corporate-blue mb-8">
                Send Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <input
                            {...register("name", { required: true })}
                            placeholder="Your Name *"
                            className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-corporate-orange transition-colors font-lato"
                        />
                        {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
                    </div>
                    <div>
                        <input
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            placeholder="Email Address *"
                            className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-corporate-orange transition-colors font-lato"
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1">Valid email is required</span>}
                    </div>
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
                <div>
                    <textarea
                        {...register("message", { required: true })}
                        placeholder="Message... *"
                        rows={6}
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-corporate-orange transition-colors font-lato resize-none"
                    />
                    {errors.message && <span className="text-red-500 text-xs mt-1">Message is required</span>}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="px-8 py-3 bg-corporate-orange text-white font-oswald font-bold uppercase tracking-wide hover:bg-corporate-blue transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {status === "loading" && <Loader2 className="animate-spin h-4 w-4" />}
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <span className="text-green-600 font-bold text-sm">Message Sent Successfully!</span>
                    )}
                    {status === "error" && (
                        <span className="text-red-600 font-bold text-sm">Error: {errorMessage}</span>
                    )}
                </div>
            </form>
        </div>
    );
}
