// src/app/events/page.tsx
import React from 'react';

// --- TYPE DEFINITION ---
// This defines the "shape" of our event data from Strapi
interface StrapiEvent {
  id: number;
  Title: string;
  Description: string;
  Date: string;
  Location: string;
}

// --- DATA FETCHING FUNCTION ---
// This is the same async function we used before to get data from Strapi
async function getEvents(): Promise<StrapiEvent[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    return data.data;

  } catch (error) {
    console.error("Error fetching events:", error);
    return []; // Return an empty array on error to avoid a crash
  }
}

// --- THE PAGE COMPONENT ---
export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-12 uppercase tracking-wide">
        Events & Competitions
      </h1>

      {events && events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg
                         transform hover:-translate-y-1 transition-transform duration-300"
            >
              <h2 className="text-2xl font-bold mb-2">{event.Title}</h2>
              <p className="text-gray-400 mb-4">
                {new Date(event.Date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-gray-300 mb-4">{event.Description}</p>
              <p className="font-semibold text-white">Location: {event.Location}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">No events found.</p>
      )}
    </div>
  );
}