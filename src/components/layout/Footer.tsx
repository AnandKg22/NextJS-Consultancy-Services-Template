import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, ChevronRight, Phone, Mail, MapPin, Send } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-gray-400 font-lato">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-corporate-blue text-white flex items-center justify-center font-oswald font-bold text-xl rounded-sm">
                                C
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-oswald text-2xl font-bold uppercase text-white tracking-tighter">
                                    Consultancy
                                </span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            We are a global consultancy firm providing expert advice and strategic planning to help your business grow.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-corporate-orange text-white transition-colors duration-300 rounded-sm">
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div>
                        <h3 className="text-white font-oswald font-bold uppercase text-lg mb-6 relative inline-block">
                            Our Services
                            <span className="block h-0.5 w-12 bg-corporate-orange mt-2"></span>
                        </h3>
                        <ul className="space-y-3">
                            {['Business Planning', 'Financial Advice', 'Strategic Planning', 'Insurance Strategy', 'Marketing Policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="flex items-center gap-2 hover:text-corporate-orange transition-colors text-sm group">
                                        <ChevronRight size={14} className="text-corporate-orange group-hover:translate-x-1 transition-transform" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Opening Time */}
                    <div>
                        <h3 className="text-white font-oswald font-bold uppercase text-lg mb-6 relative inline-block">
                            Opening Time
                            <span className="block h-0.5 w-12 bg-corporate-orange mt-2"></span>
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between border-b border-gray-800 pb-2">
                                <span>Mon - Tue:</span>
                                <span>08:00 - 17:00</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-800 pb-2">
                                <span>Wed - Thu:</span>
                                <span>08:00 - 17:00</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-800 pb-2">
                                <span>Friday:</span>
                                <span>08:00 - 17:00</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-800 pb-2">
                                <span>Saturday:</span>
                                <span>08:00 - 14:00</span>
                            </li>
                            <li className="flex justify-between text-corporate-orange">
                                <span>Sunday:</span>
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter & Contact */}
                    <div>
                        <h3 className="text-white font-oswald font-bold uppercase text-lg mb-6 relative inline-block">
                            Newsletter
                            <span className="block h-0.5 w-12 bg-corporate-orange mt-2"></span>
                        </h3>
                        <div className="relative mb-8">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-gray-800 border-none text-white px-4 py-3 text-sm focus:ring-1 focus:ring-corporate-orange outline-none"
                            />
                            <button className="absolute right-0 top-0 h-full w-12 bg-corporate-orange text-white flex items-center justify-center hover:bg-white hover:text-corporate-blue transition-colors">
                                <Send size={16} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <Phone size={18} className="text-corporate-orange mt-1" />
                                <div>
                                    <span className="block text-white font-bold text-sm">Call Us</span>
                                    <span className="text-xs">1-800-123-4567</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail size={18} className="text-corporate-orange mt-1" />
                                <div>
                                    <span className="block text-white font-bold text-sm">Valid Email</span>
                                    <span className="text-xs">info@consultancy.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-corporate-blue py-6 border-t border-white/10">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-[#989898]">
                    <p>&copy; {new Date().getFullYear()} Consultancy Services. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-corporate-orange transition-colors">Terms of Use</Link>
                        <Link href="#" className="hover:text-corporate-orange transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
