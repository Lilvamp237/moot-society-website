// src/components/EventModal.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

// --- START: CORRECTED TYPE DEFINITIONS ---
interface BannerImageObject {
  url: string;
  alternativeText?: string | null;
}
interface StrapiEvent {
  id: number;
  Title: string;
  Description: string;
  BannerImage: BannerImageObject;
}
// --- END: CORRECTED TYPE DEFINITIONS ---

export default function EventModal({ event, onClose }: { event: StrapiEvent; onClose: () => void; }) {
  const { Title, Description, BannerImage } = event;

  // THE FIX IS HERE: The path is now simple and direct
  const imageUrl = BannerImage?.url;
  const fullImageUrl = imageUrl ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}` : '/placeholder.jpg';
  const altText = BannerImage?.alternativeText || Title;

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4">
      <div onClick={(e) => e.stopPropagation()} className="bg-gray-900 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative border border-gray-700">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl z-10">&times;</button>
        
        {imageUrl && (
          <div className="relative w-full h-64">
            <Image src={fullImageUrl} alt={altText} layout="fill" objectFit="cover" className="rounded-t-lg" />
          </div>
        )}
        
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-4">{Title}</h2>
          <article className="prose prose-invert max-w-none">
            <ReactMarkdown>{Description}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}