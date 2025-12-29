"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Address */}
                    <div className="flex flex-col items-center group">
                        <div className="w-16 h-16 rounded-full bg-white border-2 border-corporate-orange flex items-center justify-center text-corporate-orange mb-6 transition-colors group-hover:bg-corporate-orange group-hover:text-white">
                            <MapPin size={32} />
                        </div>
                        <h3 className="font-oswald font-bold text-xl uppercase text-corporate-blue mb-4">
                            Our Address
                        </h3>
                        <p className="text-gray-600 font-lato leading-relaxed">
                            250 Main Street, Newton<br />
                            Christchurch, CAD 4002
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center group">
                        <div className="w-16 h-16 rounded-full bg-white border-2 border-corporate-orange flex items-center justify-center text-corporate-orange mb-6 transition-colors group-hover:bg-corporate-orange group-hover:text-white">
                            <Phone size={32} />
                        </div>
                        <h3 className="font-oswald font-bold text-xl uppercase text-corporate-blue mb-4">
                            Phone Number
                        </h3>
                        <p className="text-gray-600 font-lato leading-relaxed">
                            +1 234 567 8900<br />
                            +1 234 567 8900
                        </p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center group">
                        <div className="w-16 h-16 rounded-full bg-white border-2 border-corporate-orange flex items-center justify-center text-corporate-orange mb-6 transition-colors group-hover:bg-corporate-orange group-hover:text-white">
                            <Mail size={32} />
                        </div>
                        <h3 className="font-oswald font-bold text-xl uppercase text-corporate-blue mb-4">
                            Email Address
                        </h3>
                        <p className="text-gray-600 font-lato leading-relaxed">
                            info@consultancy.com<br />
                            support@consultancy.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
