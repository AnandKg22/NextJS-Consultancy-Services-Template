"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, MessageCircle } from "lucide-react";

interface NewsCardProps {
    image: string;
    date: string;
    author: string;
    comments: number;
    title: string;
    excerpt: string;
    slug: string;
}

export default function NewsCard({ image, date, author, comments, title, excerpt, slug }: NewsCardProps) {
    return (
        <article className="group mb-12">
            <div className="relative h-64 md:h-72 w-full overflow-hidden mb-6">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-corporate-orange text-white px-4 py-1 font-oswald text-sm font-bold uppercase">
                    {date}
                </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 font-lato">
                <div className="flex items-center gap-1">
                    <User size={14} className="text-corporate-orange" />
                    <span>By {author}</span>
                </div>
                <div className="flex items-center gap-1">
                    <MessageCircle size={14} className="text-corporate-orange" />
                    <span>{comments} Comments</span>
                </div>
            </div>

            <h2 className="text-2xl font-oswald font-bold text-corporate-blue mb-3 group-hover:text-corporate-orange transition-colors">
                <Link href={`/news/${slug}`}>
                    {title}
                </Link>
            </h2>

            <p className="text-gray-600 font-lato leading-relaxed mb-4">
                {excerpt}
            </p>

            <Link
                href={`/news/${slug}`}
                className="inline-flex items-center text-corporate-blue font-bold uppercase text-sm hover:text-corporate-orange transition-colors font-oswald tracking-wide"
            >
                Read More <ArrowRight size={16} className="ml-2" />
            </Link>
        </article>
    );
}
