// src/app/layout.tsx
import type { Metadata } from "next";
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

const lora = Lora({
  subsets: ["latin"],
  variable: '--font-lora',
});

// --- START: UPDATED METADATA FOR SEO ---
export const metadata: Metadata = {
  title: {
    default: "Moot Society of Sri Lanka Law College",
    template: "%s | Moot Society SLLC", // Shortened for cleaner browser tabs
  },
  // Keyword-rich description
  description: "The official website of the law college moot society. Discover our events like The Victor's Moot, our achievements, and how to join.",
  
  // Social media sharing tags (Open Graph)
  openGraph: {
    title: 'Moot Society of Sri Lanka Law College',
    description: 'Cultivating the next generation of legal advocates.',
    url: 'https://www.sllcmootsociety.com', // Your final domain
    siteName: 'Moot Society SLLC',
    type: 'website',
  },
  
  // Twitter sharing tags
  twitter: {
    card: 'summary_large_image',
    title: 'Moot Society of Sri Lanka Law College',
    description: 'The official home for events, news, and achievements.',
  },
};
// --- END: UPDATED METADATA FOR SEO ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${lora.variable}`}>
      
      {/* --- ADD GOOGLE VERIFICATION TAG IN HEAD --- */}
      <head>
        {/* 
          IMPORTANT: Replace 'YOUR_UNIQUE_CODE_FROM_GOOGLE' with the actual code 
          you get from Google Search Console's HTML tag verification method.
        */}
        <meta name="google-site-verification" content="03KiZUNp06AZz0-ICtnODOje1yktI8PXGSNTQ2vUSjo" />
      </head>
      {/* ------------------------------------------- */}

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