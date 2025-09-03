// src/app/events/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import EventModal from '@/components/EventModal';

// --- TYPES ---
interface StrapiImage {
  url: string;
  alternativeText?: string | null;
}
interface StrapiEvent {
  id: number;
  Title: string;
  Description: string;
  BannerImage: StrapiImage;
  EventType: 'Competition' | 'Special_Event';
}

// --- EVENT CARD ---
const EventCard = ({
  event,
  onReadMoreClick,
}: {
  event: StrapiEvent;
  onReadMoreClick: () => void;
}) => {
  const imageUrl = event.BannerImage?.url;

  // Handle both relative (Strapi local) & full URLs (Cloudinary)
  const fullImageUrl = imageUrl?.startsWith('http')
    ? imageUrl
    : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`;

  const altText = event.BannerImage?.alternativeText || event.Title;
  const snippet = event.Description.substring(0, 150) + '...';

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col">
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={fullImageUrl}
            alt={altText}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
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

// --- MAIN PAGE ---
export default function EventsPage() {
  const [events, setEvents] = useState<StrapiEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<StrapiEvent | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events?populate=*`
        );
        if (!res.ok) throw new Error('Failed to fetch data');
        const json = await res.json();

        // --- Flatten the Strapi response ---
        const formatted: StrapiEvent[] = json.data.map((item: any) => {
          const attrs = item.attributes;
          return {
            id: item.id,
            Title: attrs.Title,
            Description: attrs.Description,
            EventType: attrs.EventType,
            BannerImage: {
              url: attrs.BannerImage?.data?.attributes?.url || '',
              alternativeText:
                attrs.BannerImage?.data?.attributes?.alternativeText || null,
            },
          };
        });

        setEvents(formatted);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
    fetchEvents();
  }, []);

  const competitions = events.filter(
    (event) => event.EventType === 'Competition'
  );
  const specialEvents = events.filter(
    (event) => event.EventType === 'Special_Event'
  );

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-16 uppercase tracking-wide">
        Our Events
      </h1>

      <section>
        <h2 className="text-3xl font-semibold mb-6 border-l-4 border-white pl-4">
          Competitions
        </h2>
        {competitions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitions.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onReadMoreClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 ml-4">No competitions available.</p>
        )}
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 border-l-4 border-white pl-4">
          Special Events
        </h2>
        {specialEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onReadMoreClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 ml-4">No special events available.</p>
        )}
      </section>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}
