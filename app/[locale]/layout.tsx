// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import AOSProvider from "@/components/AOSProvider";
import ScrollToTop from "@/components/ScrollToTop";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { redirect } from "next/navigation";
import { locales, defaultLocale } from "@/i18n/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXIUS",
  description: "Advanced technology consulting for the modern enterprise.",
};

// Generate static params for SSG
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // params is a Promise
}) {
  // AWAIT the params Promise
  const { locale } = await params;

  if (!locale || !locales.includes(locale as any)) {
    redirect(`/${defaultLocale}`);
  }

  const messages = await getMessages();

  // Add this debug
  console.log("Layout locale:", locale);
  console.log("Messages keys:", Object.keys(messages));

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <AOSProvider>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-20">{children}</main>
                <ScrollToTop />
                <Footer />
              </div>
            </AOSProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
