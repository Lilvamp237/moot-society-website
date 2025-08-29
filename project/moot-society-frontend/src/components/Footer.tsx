// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    // CHANGE 1: Used 'bg-black' for a solid black background, ignoring the theme.
    // CHANGE 2: Reduced vertical padding from 'py-8' to 'py-6' to make it thinner.
    <footer className="bg-black border-t border-border-color mt-24 py-6 px-4">
      <div className="container mx-auto text-center">
        {/* Top section - reduced margin-bottom for a more compact look */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <Link href="/" className="font-serif text-xl font-bold text-foreground hover:opacity-80 transition-opacity">
            Moot Society
          </Link>
          <div className="flex space-x-5 text-foreground">
            <a href="https://www.facebook.com/mootsocietyofsllc?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <FaFacebook size={22} />
            </a>
            <a href="https://www.instagram.com/mootsociety_sllc?igsh=MTVmYWlpZ3ZlcWR2Yg==" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <FaInstagram size={22} />
            </a>
            <a href="https://www.linkedin.com/company/74966622/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <FaLinkedin size={22} />
            </a>
            <a href="https://x.com/MootSociety?t=HVbsVR-xHKQpbufimK15xQ&s=09" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <FaTwitter size={22} />
            </a>
          </div>
        </div>

        {/* Separator line - reduced margin */}
        <hr className="border-border-color my-4" />

        {/* Bottom section with copyrights */}
        <div className="text-center space-y-2">
          <p className="text-sm text-foreground/70">
            &copy; {new Date().getFullYear()} Moot Society of Sri Lanka Law College. All Rights Reserved.
          </p>
          {/* CHANGE 3: Added the new copyright line for you and Dinuka */}
          <p className="text-xs text-foreground/50">
            Designed & Developed by Sumudu and Dinuka.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;