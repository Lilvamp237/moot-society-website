// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import the Navbar
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter', // Create a CSS variable for Inter
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair', // Create a CSS variable for Playfair Display
});

export const metadata: Metadata = {
  title: "Moot Society",
  description: "Website for the college Moot Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Combine the font variables in the html tag
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      {/*
        THIS IS THE MAGIC SWITCH!
        Change 'theme-black' to 'theme-blue' to change the entire site's colors.
      */}
      <body className="theme-blue">
      <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}