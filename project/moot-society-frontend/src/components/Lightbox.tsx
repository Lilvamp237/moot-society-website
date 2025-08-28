// src/components/Lightbox.tsx
'use client';

import React from 'react';
import Image from 'next/image';

// The component receives the image URL and a function to close it
export default function Lightbox({ imageUrl, onClose }: { imageUrl: string; onClose: () => void; }) {
  return (
    // The semi-transparent background overlay, clickable to close
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4"
    >
      {/* Close button in the corner */}
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl z-10">&times;</button>
      
      {/* The image container. stopPropagation prevents closing when clicking the image itself */}
      <div onClick={(e) => e.stopPropagation()} className="relative w-full h-full max-w-4xl max-h-[90vh]">
        <Image
          src={imageUrl}
          alt="Gallery image lightbox"
          layout="fill"
          objectFit="contain" // Ensures the whole image is visible
        />
      </div>
    </div>
  );
}