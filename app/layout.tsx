import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import AOSProvider from "@/components/AOSProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXIUS",
  description: "Advanced technology consulting for the modern enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100`}
      >
        {/* 1. ThemeProvider acts as the parent wrapper */}
        <ThemeProvider>
          <AOSProvider>
            <div className="flex flex-col min-h-screen">
              {/* 2. Navbar is now INSIDE ThemeProvider, so useTheme() will work */}
              <Navbar />

              <main className="flex-grow pt-20">{children}</main>

              <Footer />
            </div>
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
