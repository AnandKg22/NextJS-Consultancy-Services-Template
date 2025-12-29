import { Phone, MapPin, Clock } from "lucide-react";

export default function TopBar() {
    return (
        <div className="bg-corporate-blue text-white py-3 text-sm hidden lg:block border-b border-white/10">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex gap-8">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-corporate-orange" />
                        <span className="font-lato">254 Lillian Blvd, Holbrook, NY 11741</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone size={16} className="text-corporate-orange" />
                        <span className="font-lato">1-800-123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-corporate-orange" />
                        <span className="font-lato">Mon - Sat: 8:00 - 18:00</span>
                    </div>
                </div>
                <div>
                    <button className="bg-corporate-orange text-white px-6 py-2 font-oswald font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-corporate-blue transition-colors duration-300 cursor-pointer">
                        Get A Quote
                    </button>
                </div>
            </div>
        </div>
    );
}
