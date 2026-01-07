"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Shell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isStudio = pathname?.startsWith("/studio");

    return (
        <>
            {!isStudio && <Header />}
            {children}
            {!isStudio && <Footer />}
        </>
    );
}
