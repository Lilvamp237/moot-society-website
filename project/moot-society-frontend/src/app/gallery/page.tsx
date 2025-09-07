// src/app/gallery/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/Lightbox';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // For the accordion icons

// --- TYPE DEFINITIONS TO MATCH NEW STRAPI STRUCTURE ---
interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
}
interface GalleryItem {
  id: number;
  event_name: string;
  year: number;
  main_category: string;
  image: StrapiImage[];
}
// This will be our new nested structure: { category: { year: [items] } }
interface GroupedByYear {
  [year: number]: GalleryItem[];
}
interface GroupedByCategory {
  [category: string]: GroupedByYear;
}
interface OtherEvents {
  [category: string]: GalleryItem[];
}


// --- REUSABLE COMPONENT for the Year Dropdown ---
const YearAccordion = ({ year, items, onImageClick }: { year: number; items: GalleryItem[]; onImageClick: (url: string) => void; }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gray-900 hover:bg-gray-800"
      >
        <span className="text-xl font-semibold">{year}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-950">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map(item =>
              item.image.map(img => {
                const isAbsoluteUrl = img.url.startsWith('http');
                const fullImageUrl = isAbsoluteUrl ? img.url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${img.url}`;
                return (
                  <div key={img.id} className="relative aspect-square cursor-pointer group" onClick={() => onImageClick(fullImageUrl)}>
                    <Image
                      src={fullImageUrl}
                      alt={img.alternativeText || item.event_name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover rounded-lg group-hover:opacity-75 transition-opacity"
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};


// --- THE MAIN PAGE COMPONENT ---
export default function GalleryPage() {
  const [groupedItems, setGroupedItems] = useState<GroupedByCategory>({});
  const [otherEvents, setOtherEvents] = useState<GalleryItem[]>([]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    async function getGalleryItems() {
      try {
        const apiEndpoint = 'gallery-items';
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${apiEndpoint}?populate=*&sort[0]=year:desc`);
        if (!res.ok) throw new Error('Failed to fetch gallery items');
        const data = await res.json();
        
        // --- DATA PROCESSING LOGIC ---
        const items: GalleryItem[] = data.data.map((item: any) => ({
          ...item,
          image: Array.isArray(item.image) ? item.image.map((img: any) => ({
            id: img.id, url: img.url, alternativeText: img.alternativeText
          })) : []
        }));

        const groupedByCategory: GroupedByCategory = {};
        const otherEventsItems: GalleryItem[] = [];

        items.forEach(item => {
          if (item.main_category === 'Other events') {
            otherEventsItems.push(item);
          } else {
            const category = item.main_category;
            const year = item.year;
            if (!groupedByCategory[category]) {
              groupedByCategory[category] = {};
            }
            if (!groupedByCategory[category][year]) {
              groupedByCategory[category][year] = [];
            }
            groupedByCategory[category][year].push(item);
          }
        });

        setGroupedItems(groupedByCategory);
        setOtherEvents(otherEventsItems);

      } catch (error) {
        console.error(error);
      }
    }
    getGalleryItems();
  }, []);

  const sortedCategories = Object.keys(groupedItems).sort();

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wide">
        Gallery
      </h1>
      <div className="space-y-12">
        {sortedCategories.length > 0 ? (
          sortedCategories.map(category => (
            <section key={category}>
              <h2 className="text-3xl font-semibold mb-6 border-l-4 border-white pl-4">{category}</h2>
              {Object.keys(groupedItems[category]).map(year => (
                <YearAccordion
                  key={year}
                  year={parseInt(year)}
                  items={groupedItems[category][parseInt(year)]}
                  onImageClick={setLightboxImage}
                />
              ))}
            </section>
          ))
        ) : (
          <p className="text-center text-gray-400">Loading gallery...</p>
        )}

        {/* Section for "Other events" without year grouping */}
        {otherEvents.length > 0 && (
          <section>
            <h2 className="text-3xl font-semibold mb-6 border-l-4 border-white pl-4">Other events</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {otherEvents.map(item =>
                item.image.map(img => {
                  const isAbsoluteUrl = img.url.startsWith('http');
                  const fullImageUrl = isAbsoluteUrl ? img.url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${img.url}`;
                  return (
                    <div key={img.id} className="relative aspect-square cursor-pointer group" onClick={() => setLightboxImage(fullImageUrl)}>
                      <Image
                        src={fullImageUrl}
                        alt={img.alternativeText || item.event_name}
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
        )}
      </div>
      
      {lightboxImage && <Lightbox imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </div>
  );
}