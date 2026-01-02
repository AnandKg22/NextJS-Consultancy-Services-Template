"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

type Inputs = {
    email: string;
};

export default function NewsletterSignup() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        // Integrate with your backend API here
        console.log("Newsletter Sub:", data);
        setStatus('success');
        reset();

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <div className="bg-corporate-blue p-8 sm:p-12 rounded-sm text-center shadow-xl">
            <Mail className="w-12 h-12 text-corporate-orange mx-auto mb-6" />
            <h3 className="font-oswald font-bold text-2xl text-white mb-2">
                Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-300 font-lato mb-8 max-w-md mx-auto">
                Stay updated with the latest trends, business insights, and company news. No spam, we promise.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto relative">
                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                        })}
                        placeholder="Enter your email address"
                        className="flex-1 px-4 py-3 rounded-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-corporate-orange focus:bg-white/20 transition-all font-lato"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-corporate-orange text-white font-oswald font-bold uppercase tracking-wider rounded-sm hover:bg-white hover:text-corporate-orange transition-colors"
                    >
                        Subscribe
                    </button>
                </div>
                {errors.email && (
                    <p className="text-red-400 text-sm mt-2 text-left flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.email.message}
                    </p>
                )}

                {status === 'success' && (
                    <div className="absolute -bottom-10 left-0 w-full text-green-400 flex items-center justify-center gap-2 font-bold animate-in fade-in slide-in-from-bottom-2">
                        <CheckCircle size={18} /> Subscribed Successfully!
                    </div>
                )}
            </form>
        </div>
    );
}
