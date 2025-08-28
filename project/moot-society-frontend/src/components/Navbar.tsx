// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold uppercase">
          Moot Society
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
          <Link href="/events" className="hover:text-gray-400 transition-colors">Events</Link>
          <Link href="/news" className="hover:text-gray-400 transition-colors">News</Link>
          <Link href="/gallery" className="hover:text-gray-400 transition-colors">Gallery</Link>
          {/* --- ADD THIS NEW LINK --- */}
          <Link href="/achievements" className="hover:text-gray-400 transition-colors">Achievements</Link>
          <Link href="/faq" className="hover:text-gray-400 transition-colors">FAQs</Link>
          <Link href="/contact" className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;