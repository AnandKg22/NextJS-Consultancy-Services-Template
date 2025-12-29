import type { Metadata } from "next";
import { Oswald, Lato } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Consultancy Services | Global Firm",
    template: "%s | Consultancy Services",
  },
  description: "Leading consultancy firm providing business planning, financial advice, and strategic solutions.",
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${lato.variable} antialiased font-lato`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
