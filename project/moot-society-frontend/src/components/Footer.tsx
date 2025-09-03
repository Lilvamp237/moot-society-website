// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 mt-24 py-12 px-4">
      <div className="container mx-auto text-gray-400">
        
        {/* --- START: MAIN FOOTER CONTENT --- */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Left Side: Logo and Address */}
          <div className="text-center md:text-left">
            <Link href="/" className="font-lora text-2xl font-bold text-white hover:opacity-80 transition-opacity mb-4 inline-block">
              Moot Society
            </Link>
            <div className="text-sm">
              <p>Moot Society of Sri Lanka Law College</p>
              <p>244, Hulftsdorp Street, Colombo 12,</p>
              <p>Sri Lanka</p>
            </div>
          </div>
          
          {/* Right Side: Social Media and Email */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-6 text-white">
              <a href="https://www.facebook.com/mootsocietyofsllc?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/mootsociety_sllc?igsh=MTVmYWlpZ3ZlcWR2Yg==" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/74966622/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/MootSociety?t=HVbsVR-xHKQpbufimK15xQ&s=09" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <FaTwitter size={24} />
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope size={16} />
              <a href="mailto:mootsocietyofsllc@gmail.com" className="hover:text-white transition-colors">
                mootsocietyofsllc@gmail.com
              </a>
            </div>
          </div>

        </div>
        {/* --- END: MAIN FOOTER CONTENT --- */}

        {/* Bottom Copyright Section */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800 space-y-2">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Moot Society of Sri Lanka Law College. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600">
            Designed & Developed by Sumudu and Dinuka.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;