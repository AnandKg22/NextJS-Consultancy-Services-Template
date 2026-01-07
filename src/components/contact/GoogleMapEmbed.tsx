"use client";

interface GoogleMapEmbedProps {
    src?: string;
    height?: number;
}

export default function GoogleMapEmbed({
    src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183948695191!2d-73.98773128509446!3d40.75889497932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
    height = 450
}: GoogleMapEmbedProps) {
    return (
        <div className="w-full bg-gray-100 rounded-sm overflow-hidden shadow-inner grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
                src={src}
                width="100%"
                height={height}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
