// src/app/page.tsx
import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section (remains full-width) */}
      <section className="flex flex-col justify-center items-center text-center py-20 px-4">
        <div className="space-y-6 md:space-y-8">
          <h1 className="font-serif text-3xl md:text-5xl font-bold uppercase leading-tight tracking-wider animate-fade-in-up">
            Ideas Connect
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium uppercase border-2 border-white rounded-full px-8 py-4 inline-block leading-snug animate-fade-in-up delay-200">
            Through Strategy
          </h2>
          <div className="mt-12 w-full max-w-6xl mx-auto animate-fade-in-up delay-300">
            <Image
              src="/coverpage12.jpg"
              alt="Moot Society members in court"
              width={4160}
              height={2289}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
          <p className="mt-12 text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-400 leading-snug font-bold">
            Welcome to the official home of the Moot Society of Sri Lanka Law College.
            <br />
            Cultivating the next generation of legal advocates.
          </p>
        </div>
      </section>

      {/* --- START: THIS IS THE FIX --- */}
      {/* 1. The Logo Separator is now OUTSIDE and ABOVE the container div. */}
      <section className="my-8 flex justify-center">
        <Image
          src="/moot-logo.png"
          alt="Moot Society Logo Separator"
          width={150}
          height={150}
          className="rounded-full border-2 border-border-color"
        />
      </section>

      {/* 2. The container now ONLY wraps the content below the logo. */}
      <div className="container mx-auto p-4 md:p-8">
        <section className="mb-24 py-16 bg-gray-900 rounded-lg shadow-xl px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-8 uppercase text-white border-b-2 border-white pb-4 inline-block text-center w-full">
              About Us
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-justify">
              The Moot Society of Sri Lanka Law College stands as one of the oldest and most prestigious student-led societies within the institution. Although the tradition of mooting at Sri Lanka Law College dates back to its establishment in 1873 following the formation of the Council of Legal Education - the Moot Society itself was officially founded in 1986.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-justify">
              Recognizing the growing importance of advocacy training and experiential learning, a group of visionary students spearheaded the formation of the society to cultivate mooting skills and offer structured opportunities for aspiring legal professionals to gain courtroom experience. This initiative was led by Mr. ___________ and Ms. ____________, who served as the first President and Secretary, respectively.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
              Their efforts were strongly supported by Mr. _______, the Principal of Sri Lanka Law College at the time, whose encouragement and guidance were instrumental in establishing the society. Since its inception, the Moot Society has continued to thrive as a platform dedicated to enhancing the oral and written advocacy skills of students, preparing them for the demands of legal practice both locally and internationally.
            </p>
          </div>
        </section>

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
      {/* --- END: THE FIX --- */}
    </div>
  );
}