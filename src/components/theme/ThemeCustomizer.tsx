"use client";

import * as React from "react";
import { Palette, Check } from "lucide-react";
import { themeConfig } from "@/config/themeConfig";

const presets = [
    { name: "Default (Blue/Orange)", value: "default" },
    { name: "Corporate (Navy/Gold)", value: "corporate" },
    { name: "Nature (Green/Lime)", value: "nature" },
    { name: "Tech (Purple/Yellow)", value: "tech" },
    { name: "Modern (Black/Red)", value: "modern" },
    { name: "Trust (Teal/Silver)", value: "trust" },
    { name: "Creative (Pink/Indigo)", value: "creative" },
    { name: "Elegant (Slate/Bronze)", value: "elegant" },
    { name: "Vibrant (Electric/Neon)", value: "vibrant" },
    { name: "Warm (Brown/Amber)", value: "warm" },
];

export function ThemeCustomizer() {
    const [mounted, setMounted] = React.useState(false);
    const [activePreset, setActivePreset] = React.useState(themeConfig.defaultTheme);

    React.useEffect(() => {
        setMounted(true);

        let initialTheme = themeConfig.defaultTheme;

        // Only check local storage if user customization is allowed
        if (themeConfig.allowUserCustomization) {
            const savedPreset = localStorage.getItem("theme-preset");
            if (savedPreset) {
                initialTheme = savedPreset;
            }
        } else {
            // If customization is disabled, ensure we clear any stale preference so the config rules
            localStorage.removeItem("theme-preset");
        }

        setActivePreset(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
    }, []);

    const togglePrettyTheme = (preset: string) => {
        setActivePreset(preset);
        document.documentElement.setAttribute("data-theme", preset);
        localStorage.setItem("theme-preset", preset);
    };

    if (!mounted) {
        return null;
    }

    // If customization is disabled, do not render anything
    if (!themeConfig.allowUserCustomization) {
        return null;
    }

    // Hide on Studio route
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    if (pathname.startsWith('/studio')) {
        return null;
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
            {/* Preset Picker */}
            <div className="group relative">
                <button className="h-12 w-12 rounded-full bg-corporate-blue text-white flex items-center justify-center shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
                    <Palette className="h-6 w-6" />
                </button>

                {/* Preset Menu */}
                <div className="absolute bottom-14 right-0 mb-2 w-56 rounded-lg border border-gray-200 bg-white p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-bottom-right">
                    <div className="max-h-[300px] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                        <p className="px-2 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider sticky top-0 bg-white z-10 border-b border-gray-100 mb-1">
                            Select Theme
                        </p>
                        {presets.map((preset) => (
                            <button
                                key={preset.name}
                                onClick={() => togglePrettyTheme(preset.value)}
                                className={`w-full text-left flex items-center justify-between rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${activePreset === preset.value
                                    ? "bg-gray-100 text-corporate-blue"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-corporate-orange"
                                    }`}
                            >
                                {preset.name}
                                {activePreset === preset.value && (
                                    <Check className="h-3.5 w-3.5" />
                                )}
                            </button>
                        ))}

                        {/* Divider */}
                        <div className="border-t border-gray-100 my-2"></div>

                        <p className="px-2 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider sticky top-0 bg-white z-10 border-b border-gray-100 mb-1">
                            Header Style
                        </p>
                        <div className="px-2 pb-2 space-y-1">
                            {['dark', 'white', 'primary'].map((style) => (
                                <button
                                    key={style}
                                    onClick={() => {
                                        localStorage.setItem("sticky-header-style", style);
                                        window.dispatchEvent(new CustomEvent('sticky-header-change', { detail: style }));
                                        // Force re-render not strictly needed as Navbar listens, but we could update local state if we tracked it here
                                    }}
                                    className="w-full text-left flex items-center justify-between rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors text-gray-600 hover:bg-gray-50 hover:text-corporate-orange"
                                >
                                    {style.charAt(0).toUpperCase() + style.slice(1)} Header
                                </button>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-100 my-2"></div>

                        <p className="px-2 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider sticky top-0 bg-white z-10 border-b border-gray-100 mb-1">
                            Footer Style
                        </p>
                        <div className="px-2 pb-2 space-y-1">
                            {['dark', 'primary', 'secondary'].map((style) => (
                                <button
                                    key={style}
                                    onClick={() => {
                                        localStorage.setItem("footer-style", style);
                                        window.dispatchEvent(new CustomEvent('footer-style-change', { detail: style }));
                                    }}
                                    className="w-full text-left flex items-center justify-between rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors text-gray-600 hover:bg-gray-50 hover:text-corporate-orange"
                                >
                                    {style.charAt(0).toUpperCase() + style.slice(1)} Footer
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
