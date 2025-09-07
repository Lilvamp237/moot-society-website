// src/app/layout.tsx
import type { Metadata } from "next";
// --- 1. IMPORT LORA FONT ---
import { Inter, Playfair_Display, Lora } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

// --- 2. CONFIGURE THE LORA FONT ---
const lora = Lora({
  subsets: ["latin"],
  variable: '--font-lora', // We'll use this CSS variable
});

export const metadata = {
  title: {
    default: "Moot Society of Sri Lanka Law College",
    template: "%s | Moot Society of Sri Lanka Law College",
  },
  description: "Website for the college Moot Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // --- 3. ADD THE LORA VARIABLE TO THE HTML TAG ---
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${lora.variable}`}>
      <body className="theme-blue flex flex-col min-h-screen bg-black text-white">
        <ScrollToTop />
        <Preloader />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}