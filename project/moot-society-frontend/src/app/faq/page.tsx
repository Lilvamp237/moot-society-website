// src/app/faq/page.tsx
import React from 'react';
import FaqItem from '@/components/FaqItem';

// --- START: THE FIX IS HERE ---
// This interface now correctly defines the 'question' and 'answer' properties
// in lowercase, matching what the FaqItem component expects.
interface StrapiFaq {
  id: number;
  question: string;
  answer: string;
}
// --- END: THE FIX ---

async function getFaqs(): Promise<StrapiFaq[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/faqs`, {
      // --- START: THIS IS THE FIX ---
      // This tells Next.js to check for new data at most once every 60 seconds.
      // Now it will behave just like your achievements page.
      next: {
        revalidate: 60 // Revalidate this data every 60 seconds
      }
      // --- END: THE FIX ---
    });
    if (!res.ok) throw new Error('Failed to fetch FAQs');
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}

export default async function FaqPage() {
  const faqs = await getFaqs();

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wide">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto">
        {faqs && faqs.length > 0 ? (
          faqs.map((faq) => (
            <FaqItem key={faq.id} faq={faq} />
          ))
        ) : (
          <p className="text-center text-gray-400">No FAQs found.</p>
        )}
      </div>
    </div>
  );
}