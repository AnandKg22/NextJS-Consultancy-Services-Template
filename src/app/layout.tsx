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

import Shell from "@/components/layout/Shell";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeCustomizer } from "@/components/theme/ThemeCustomizer";
import BackToTop from "@/components/common/BackToTop";
import CookieConsent from "@/components/common/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${lato.variable} antialiased font-lato`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Shell>
            {children}
          </Shell>
          <SpeedInsights />
          <ThemeCustomizer />
          <BackToTop />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
