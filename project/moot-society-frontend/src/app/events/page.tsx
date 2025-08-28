// src/app/events/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import EventModal from '@/components/EventModal';

// --- START: CORRECTED TYPE DEFINITIONS ---
// This now matches the simple BannerImage object from your API data
interface BannerImageObject {
  url: string;
  alternativeText?: string | null;
}
// This is the final, correct shape of your event object
interface StrapiEvent {
  id: number;
  Title: string;
  Description: string;
  BannerImage: BannerImageObject;
}
// --- END: CORRECTED TYPE DEFINITIONS ---

const EventCard = ({ event, onReadMoreClick }: { event: StrapiEvent; onReadMoreClick: () => void; }) => {
  // THE FIX IS HERE: The path is now simple and direct
  const imageUrl = event.BannerImage?.url;
  const fullImageUrl = imageUrl ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}` : '/placeholder.jpg';
  const altText = event.BannerImage?.alternativeText || event.Title;

  const snippet = event.Description.substring(0, 150) + '...';

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col">
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image src={fullImageUrl} alt={altText} layout="fill" objectFit="cover" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2">{event.Title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{snippet}</p>
        <button
          onClick={onReadMoreClick}
          className="mt-auto bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors self-start"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default function EventsPage() {
  const [events, setEvents] = useState<StrapiEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<StrapiEvent | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events?populate=*`);
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setEvents(data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto p-4 py-8 md:p-8">
      <h1 className="text-5xl font-bold text-center mb-16 uppercase tracking-wide">
        Events & Competitions
      </h1>
      <section>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} onReadMoreClick={() => setSelectedEvent(event)} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">Loading events...</p>
        )}
      </section>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}