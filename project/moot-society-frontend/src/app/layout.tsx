// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop"; // <-- 1. IMPORT THE SCROLL COMPONENT

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata = {
  title: "Moot Society",
  description: "Website for the college Moot Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      {/* --- THE FIX IS HERE: Added 'bg-black' and 'text-white' back in --- */}
      <body className="theme-blue flex flex-col min-h-screen bg-black text-white">
        <ScrollToTop /> {/* <-- 2. ADD THE SCROLL COMPONENT HERE */}
        <Preloader />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}