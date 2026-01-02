"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            // Show immediately or after a small delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookieConsent", "false"); // Or handle logic to disable tracking
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-corporate-blue/95 text-white p-6 z-[100] border-t border-corporate-orange">
            <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                    <h4 className="font-oswald font-bold text-lg mb-1">We value your privacy</h4>
                    <p className="text-sm text-gray-300 font-lato">
                        We use cookies to enhance your experience, serve personalized ads or content, and analyze our traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={declineCookies}
                        className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors font-lato"
                    >
                        Decline
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2 bg-corporate-orange text-white font-bold rounded-sm hover:bg-opacity-90 transition-colors font-oswald uppercase tracking-wider text-sm"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
