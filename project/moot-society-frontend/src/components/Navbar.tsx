// src/components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // 1. Import the Image component from Next.js
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* --- START: THIS IS THE MODIFIED SECTION --- */}
        <Link
          href="/"
          onClick={closeMenu}
          // 2. Changed to a flex container to align the image and text
          className="flex items-center space-x-3 text-xl font-bold uppercase"
        >
          {/* 3. Added the Image component */}
          <Image
            src="/moot-logo.png" // Path to your logo in the 'public' folder
            alt="Moot Society Logo"
            width={32} // A good size for a navbar icon
            height={32}
            className="rounded-full" // Makes the logo circular, consistent with the preloader
          />
          {/* 4. Wrapped text in a span for clarity */}
          <span>Moot Society</span>
        </Link>
        {/* --- END: MODIFIED SECTION --- */}

        {/* Desktop Menu (No changes here) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
          <Link href="/events" className="hover:text-gray-400 transition-colors">Events</Link>
          <Link href="/news" className="hover:text-gray-400 transition-colors">News</Link>
          <Link href="/achievements" className="hover:text-gray-400 transition-colors">Achievements</Link>
          <Link href="/gallery" className="hover:text-gray-400 transition-colors">Gallery</Link>
          <Link href="/faq" className="hover:text-gray-400 transition-colors">FAQs</Link>
          <Link href="/contact" className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button (No changes here) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (No changes here) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-gray-700">
          <div className="flex flex-col items-center space-y-4 p-6">
            <Link href="/" onClick={closeMenu} className="hover:text-gray-400 transition-colors py-2">Home</Link>
            <Link href="/events" onClick={closeMenu} className="hover:text-gray-400 transition-colors py-2">Events</Link>
            <Link href="/news" onClick={closeMenu} className="hover:text-gray-400 transition-colors py-2">News</Link>
            <Link href="/gallery" onClick={closeMenu} className="hover:text-gray-400 transition-colors py-2">Gallery</Link>
            <Link href="/faq" onClick={closeMenu} className="hover:text-gray-400 transition-colors py-2">FAQs</Link>
            <Link href="/contact" onClick={closeMenu} className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;