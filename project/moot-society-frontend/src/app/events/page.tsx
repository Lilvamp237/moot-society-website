// src/app/events/page.tsx
import React from 'react';

// --- TYPE DEFINITION ---
interface StrapiEvent {
  id: number;
  Title: string;
  Description: string;
  Date: string;
  Location: string;
}

// --- DATA FETCHING FUNCTION ---
async function getEvents(): Promise<StrapiEvent[]> {
  try {
    // Let's sort the events by date directly from the API
    // 'sort=Date:desc' means sort by Date in descending order (newest first)
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events?sort=Date:desc`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    return data.data;

  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

// --- REUSABLE COMPONENT for a single event card ---
// This avoids repeating JSX and makes the main component cleaner.
const EventCard = ({ event }: { event: StrapiEvent }) => (
  <div
    className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg
               transform hover:-translate-y-1 transition-transform duration-300 flex flex-col"
  >
    <h3 className="text-2xl font-bold mb-2 flex-grow">{event.Title}</h3>
    <p className="text-gray-400 mb-4">
      {new Date(event.Date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </p>
    <p className="text-gray-300 mb-4">{event.Description}</p>
    <p className="font-semibold text-white mt-auto">Location: {event.Location}</p>
  </div>
);

// --- THE MAIN PAGE COMPONENT ---
export default async function EventsPage() {
  const events = await getEvents();

  // --- FILTERING LOGIC ---
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to the start of the day for accurate comparison

  const upcomingEvents = events.filter(event => new Date(event.Date) >= today);
  // For past events, we'll reverse the array to show the most recent past event first.
  const pastEvents = events.filter(event => new Date(event.Date) < today);


  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-16 uppercase tracking-wide">
        Events & Competitions
      </h1>

      {/* Upcoming Events Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 border-l-4 border-white pl-4">Upcoming Events</h2>
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 ml-4">No upcoming events scheduled. Please check back soon!</p>
        )}
      </section>

      {/* Past Events Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 border-l-4 border-white pl-4">Past Events</h2>
        {pastEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 ml-4">No past event information available.</p>
        )}
      </section>
    </div>
  );
}