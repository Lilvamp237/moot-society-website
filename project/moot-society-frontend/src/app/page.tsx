// src/app/page.tsx
import React from 'react';
import Image from 'next/image';
import CtaCard from '@/components/CtaCard';
import AnimatedSection from '@/components/AnimatedSection';

export default function HomePage() {
  return (
    <div>
      {/* --- START: CORRECTED HERO STRUCTURE --- */}

      {/* Part 1: Top Text Section (Centered) */}
      <section className="flex flex-col justify-center items-center text-center py-20 px-4 overflow-hidden">
        <div className="space-y-6 md:space-y-8">
          <AnimatedSection delay={0}>
            <h1 className="font-lora text-3xl md:text-5xl font-bold uppercase leading-tight tracking-wider">
              Moot Society of Sri Lanka Law College
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h2 className="font-lora text-2xl md:text-4xl font-medium uppercase border-2 border-white rounded-full px-8 py-4 inline-block leading-snug">
               Since 1986
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Part 2: Full-Width Image Strip */}
      <AnimatedSection delay={400}>
        <div className="w-full my-12">
          <Image
            src="/coverpage111.jpg"
            alt="Moot Society members in court"
            width={4160}
            height={2289}
            className="w-full h-auto max-h-[60vh] object-cover"
            priority
          />
        </div>
      </AnimatedSection>

      {/* Part 3: Bottom Welcome Text (Centered) */}
      <section className="flex justify-center text-center px-4">
        <AnimatedSection delay={0}>
            <p className="font-lora mt-4 mb-16 text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-snug font-bold">
              Welcome to the official home of the Moot Society of Sri Lanka Law College.
            
            </p>
        </AnimatedSection>
      </section>

      {/* --- END: CORRECTED HERO STRUCTURE --- */}

      {/* Logo Separator */}
      <section className="my-8 flex justify-center">
        <Image
          src="/moot-logo.png"
          alt="Moot Society Logo Separator"
          width={150}
          height={150}
          className="rounded-full border-2 border-gray-700"
        />
      </section>

      {/* Container for the rest of the content */}
      <div className="container mx-auto p-4 md:p-8">
        {/* About Us Section */}
        <AnimatedSection>
          <section className="mb-24 py-16 bg-gray-900 rounded-lg shadow-xl px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold mb-8 uppercase text-white border-b-2 border-white pb-4 inline-block text-center w-full">
                About Us
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-justify">
                The Moot Society of Sri Lanka Law College stands as one of the oldest and most prestigious student-led societies within the institution. Although the tradition of mooting at Sri Lanka Law College dates back to its establishment in 1873 following the formation of the Council of Legal Education - the Moot Society itself was officially founded in 1986.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-justify">
                Recognizing the growing importance of advocacy training and experiential learning, a group of visionary students spearheaded the formation of the society to cultivate mooting skills and offer structured opportunities for aspiring legal professionals to gain courtroom experience.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
                Their efforts were strongly supported by Mr. P.B. Rambukwella, the Principal of Sri Lanka Law College at the time, whose encouragement and guidance were instrumental in establishing the society. Since its inception, the Moot Society has continued to thrive as a platform dedicated to enhancing the oral and written advocacy skills of students, preparing them for the demands of legal practice both locally and internationally.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Explore Our Work Section */}
        <AnimatedSection>
          <section className="my-24 text-center">
            <h3 className="text-3xl font-bold mb-6 uppercase">Explore Our Work</h3>
            <p className="text-lg text-gray-300 mb-10">
              Dive into our upcoming events, past achievements, and rich history.
            </p>
            {/* --- THIS IS THE ONLY LINE THAT HAS CHANGED --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CtaCard href="/events" imageUrl="/cta-events.jpg" title="View Events" />
              <CtaCard href="/achievements" imageUrl="/cta-achievements.jpg" title="Our Achievements" />
              <CtaCard href="/gallery" imageUrl="/cta-gallery.jpg" title="See Gallery" />
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}