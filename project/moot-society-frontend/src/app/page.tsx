// src/app/page.tsx
import React from 'react';

// This is the correct code for your homepage.
export default function HomePage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Hero Section with Tagline */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center py-16 px-4">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold uppercase leading-tight tracking-wider animate-fade-in-up">
            Ideas Connect
          </h1>
          <h2 className="text-4xl md:text-6xl font-medium uppercase border-2 border-white rounded-full px-8 py-4 inline-block leading-snug animate-fade-in-up delay-200">
            Through Strategy
          </h2>
          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-400">
            Welcome to the official home of the Moot Society of Sri Lanka Law College.
            Cultivating the next generation of legal advocates.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="my-24 py-16 bg-gray-900 rounded-lg shadow-xl px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 uppercase text-white border-b-2 border-white pb-4 inline-block">
            About Us
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            The Moot Society of Sri Lanka Law College stands as one of the oldest and most prestigious student-led societies within the institution. Although the tradition of mooting at Sri Lanka Law College dates back to its establishment in 1873 following the formation of the Council of Legal Education - the Moot Society itself was officially founded in 1986.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Recognizing the growing importance of advocacy training and experiential learning, a group of visionary students spearheaded the formation of the society to cultivate mooting skills and offer structured opportunities for aspiring legal professionals to gain courtroom experience. This initiative was led by Mr. ___________ and Ms. ____________, who served as the first President and Secretary, respectively.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Their efforts were strongly supported by Mr. _______, the Principal of Sri Lanka Law College at the time, whose encouragement and guidance were instrumental in establishing the society. Since its inception, the Moot Society has continued to thrive as a platform dedicated to enhancing the oral and written advocacy skills of students, preparing them for the demands of legal practice both locally and internationally.
          </p>
        </div>
      </section>

      {/* Optional: Add a call to action or teaser for other pages */}
      <section className="my-24 text-center">
        <h3 className="text-3xl font-bold mb-6 uppercase">Explore Our Work</h3>
        <p className="text-lg text-gray-300 mb-8">
          Dive into our upcoming events, past achievements, and rich history.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="/events" className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-300 transition-colors text-lg shadow-lg">
            View Events
          </a>
          <a href="/gallery" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-colors text-lg shadow-lg">
            See Gallery
          </a>
        </div>
      </section>
    </div>
  );
}