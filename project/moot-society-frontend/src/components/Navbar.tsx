// src/components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// 1. Import the usePathname hook
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // 2. Get the current URL path
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 relative">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center space-x-3 text-xl font-bold"
        >
          <Image
            src="/moot-logo.png"
            alt="Moot Society Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="flex flex-col leading-tight">
            <span>Moot Society</span>
            <span>Sri Lanka Law College</span>
          </span>
        </Link>

        {/* --- START: MODIFIED DESKTOP MENU --- */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* 3. Each link now has a conditional className to check if it's the active page */}
          <Link href="/" className={`transition-colors ${pathname === '/' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>Home</Link>
          <Link href="/events" className={`transition-colors ${pathname === '/events' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>Events</Link>
          <Link href="/news" className={`transition-colors ${pathname === '/news' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>News</Link>
          <Link href="/achievements" className={`transition-colors ${pathname === '/achievements' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>Achievements</Link>
          <Link href="/gallery" className={`transition-colors ${pathname === '/gallery' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>Gallery</Link>
          <Link href="/faq" className={`transition-colors ${pathname === '/faq' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>FAQs</Link>
          <Link href="/contact" className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors">
            Contact Us
          </Link>
        </div>
        {/* --- END: MODIFIED DESKTOP MENU --- */}

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-gray-700">
          {/* --- START: MODIFIED MOBILE MENU --- */}
          <div className="flex flex-col items-center space-y-4 p-6">
            <Link href="/" onClick={closeMenu} className={`py-2 transition-colors ${pathname === '/' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>Home</Link>
            <Link href="/events" onClick={closeMenu} className={`py-2 transition-colors ${pathname === '/events' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>Events</Link>
            <Link href="/news" onClick={closeMenu} className={`py-2 transition-colors ${pathname === '/news' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>News</Link>
            {/* I added the 'Achievements' link here to match your desktop menu */}
            <Link href="/achievements" onClick={closeMenu} className={`py-2 transition-colors ${pathname === '/achievements' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>Achievements</Link>
            <Link href="/gallery" onClick={closeMenu} className={`py-2 transition-colors ${pathname === '/gallery' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>Gallery</Link>
            <Link href="/faq" onClick={closeMenu} className={`py-2 transition-colors ${pathname === '/faq' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}>FAQs</Link>
            <Link href="/contact" onClick={closeMenu} className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors mt-4">
              Contact Us
            </Link>
          </div>
          {/* --- END: MODIFIED MOBILE MENU --- */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;