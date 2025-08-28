// src/app/contact/page.tsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Install react-icons

export default function ContactPage() {
  return (
    <div className="container mx-auto p-4 py-8 md:p-8">
      <h1 className="text-5xl font-bold text-center mb-16 uppercase tracking-wide">
        Contact Us
      </h1>

      <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-700 rounded-lg p-8 shadow-xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">Get in Touch</h2>
          <p className="text-gray-300 text-lg">
            We'd love to hear from you. Reach out through any of the channels below.
          </p>
        </div>

        {/* Address */}
        <div className="mb-8 border-b border-gray-700 pb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Our Address
          </h3>
          <p className="text-gray-300 text-lg ml-9">
            Moot Society of Sri Lanka Law College <br />
            244, Hulftsdorp Street, Colombo 12, <br />
            Sri Lanka
          </p>
        </div>

        {/* Email */}
        <div className="mb-8 border-b border-gray-700 pb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 6h.01M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Us
          </h3>
          <p className="text-gray-300 text-lg ml-9">
            <a href="mailto:mootsocietyofsllc@gmail.com" className="text-white hover:text-gray-400 transition-colors underline">
              mootsocietyofsllc@gmail.com
            </a>
          </p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.807a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101m-4.243-4.243l1.102 1.101m-1.102-1.101l1.102 1.101" />
            </svg>
            Follow Us
          </h3>
          <div className="flex space-x-6 ml-9 text-white">
            <a href="https://www.facebook.com/mootsocietyofsllc?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <FaFacebook size={32} />
            </a>
            <a href="https://www.instagram.com/mootsociety_sllc?igsh=MTVmYWlpZ3ZlcWR2Yg==" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <FaInstagram size={32} />
            </a>
            <a href="https://www.linkedin.com/company/74966622/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <FaLinkedin size={32} />
            </a>
            <a href="https://x.com/MootSociety?t=HVbsVR-xHKQpbufimK15xQ&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <FaTwitter size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}