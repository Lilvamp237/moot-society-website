// src/app/gallery/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/Lightbox';

// --- TYPE DEFINITIONS (Unchanged) ---
interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
}
interface GalleryItem {
  id: number;
  title: string;
  description: string;
  Category: string;
  image: StrapiImage[];
}

// --- THE MAIN PAGE COMPONENT ---
export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    async function getGalleryItems() {
      try {
        const apiEndpoint = 'gallery-items';
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${apiEndpoint}?populate=*`);
        if (!res.ok) throw new Error('Failed to fetch gallery items');
        const data = await res.json();
        
        const formattedData = data.data.map((item: any) => ({
          ...item,
          image: Array.isArray(item.image) ? item.image.map((img: any) => ({
            id: img.id,
            url: img.url,
            alternativeText: img.alternativeText
          })) : []
        }));
        setItems(formattedData);

      } catch (error) {
        console.error(error);
      }
    }
    getGalleryItems();
  }, []);

  const groupedItems: { [category: string]: GalleryItem[] } = {};
  items.forEach(item => {
    const category = item.Category;
    if (!groupedItems[category]) {
      groupedItems[category] = [];
    }
    groupedItems[category].push(item);
  });

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-16 uppercase tracking-wide">
        Gallery
      </h1>
      <div className="space-y-12">
        {Object.keys(groupedItems).length > 0 ? (
          Object.keys(groupedItems).map(category => (
            <section key={category}>
              <h2 className="text-3xl font-semibold mb-6 border-l-4 border-white pl-4">{category}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {groupedItems[category].map(item =>
                  item.image && item.image.map(img => {
                    // --- START: THIS IS THE FIX ---
                    let fullImageUrl = '/placeholder.jpg'; // Default placeholder
                    if (img.url) {
                      const isAbsoluteUrl = img.url.startsWith('http') || img.url.startsWith('//');
                      fullImageUrl = isAbsoluteUrl ? img.url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${img.url}`;
                    }
                    // --- END: THIS IS THE FIX ---
                    
                    return (
                      <div
                        key={img.id}
                        className="relative aspect-square cursor-pointer group"
                        onClick={() => setLightboxImage(fullImageUrl)}
                      >
                        <Image
                          src={fullImageUrl}
                          alt={img.alternativeText || item.title}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                          className="object-cover rounded-lg group-hover:opacity-75 transition-opacity"
                        />
                      </div>
                    );
                  })
                )}
              </div>
            </section>
          ))
        ) : (
          <p className="text-center text-gray-400">Loading gallery...</p>
        )}
      </div>
      
      {lightboxImage && <Lightbox imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </div>
  );
}