import React from 'react';

// --- START: UPDATED TYPE DEFINITION ---

// We define the shape of the event object directly, without 'attributes'
interface StrapiEvent {
  id: number;
  Title: string;
  Description: string;
  Date: string; // The date comes as a string in the JSON
  Location: string;
}

// --- END: UPDATED TYPE DEFINITION ---


// This function fetches the data from your Strapi backend
async function getEvents(): Promise<StrapiEvent[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data from Strapi: ${res.statusText}`);
    }

    const data = await res.json();
    return data.data;

  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export default async function HomePage() {
  const events: StrapiEvent[] = await getEvents();

  if (!events || events.length === 0) {
    return (
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Moot Society Events</h1>
        <p className="text-lg">No upcoming events found. Please check back later!</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Moot Society Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/*
          * THE FIX IS HERE: We access properties directly on the 'event' object.
          * NO MORE '.attributes'
        */}
        {events.map((event: StrapiEvent) => (
          <div key={event.id} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-2xl font-semibold">{event.Title}</h2>
            <p className="text-gray-600">{new Date(event.Date).toLocaleDateString()}</p>
            <p>{event.Description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}