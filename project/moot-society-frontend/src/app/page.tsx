// src/app/page.tsx
import React from 'react';

// You can keep the event fetching logic if you want to show
// a few upcoming events on the homepage. For now, let's focus on design.

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 text-center">
      {/* Hero Section with Tagline */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider">
            Ideas Connect
          </h1>
          <h2 className="text-4xl md:text-6xl font-medium uppercase border-2 border-white rounded-full p-4 inline-block">
            Through Strategy
          </h2>
        </div>
        <p className="mt-8 text-lg text-gray-300">
          Welcome to the official home of our Moot Court Society.
        </p>
      </section>

      {/* About Us Section */}
      <section className="my-16">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 uppercase">VEZA [veh-zah]</h3>
          <p className="text-lg text-gray-400">
            The Moot Society is a full-service student organization dedicated to
            fostering the art of advocacy, legal research, and oral argumentation.
            We help students reach their full potential and go beyond.
          </p>
        </div>
      </section>

      {/* You could add a section for featured events here later */}
    </div>
  );
}