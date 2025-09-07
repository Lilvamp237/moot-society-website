// src/components/EventModal.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

interface StrapiImage { url: string; alternativeText?: string | null; }
interface StrapiEvent {
  id: number;
  Title: string;
  Description: string;
  BannerImage: StrapiImage;
  EventType: 'Competition' | 'Special_Event';
}

export default function EventModal({ event, onClose }: { event: StrapiEvent; onClose: () => void; }) {
  const { Title, Description, BannerImage } = event;
  const imageUrl = BannerImage?.url;
  
  let fullImageUrl = '/placeholder.jpg'; // A fallback image
  if (imageUrl) {
    const isAbsoluteUrl = imageUrl.startsWith('http') || imageUrl.startsWith('//');
    fullImageUrl = isAbsoluteUrl ? imageUrl : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`;
  }
  const altText = BannerImage?.alternativeText || Title;

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4 backdrop-blur-sm">
      <div onClick={(e) => e.stopPropagation()} className="bg-gray-900 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative border border-gray-700">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl z-10">&times;</button>
        
        {imageUrl && (
          <div className="relative w-full h-64">
            <Image
              src={fullImageUrl}
              alt={altText}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover rounded-t-lg"
            />
          </div>
        )}
        
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-4">{Title}</h2>
          {/* --- START: FIX #2 - Justified Text --- */}
          {/* Added 'text-justify' to the prose container */}
          <article className="prose prose-invert max-w-none text-justify">
            <ReactMarkdown>{Description}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}