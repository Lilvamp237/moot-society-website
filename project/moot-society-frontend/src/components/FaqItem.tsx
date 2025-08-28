// src/components/FaqItem.tsx
'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface Faq {
  question: string;
  answer?: string | null;
}

export default function FaqItem({ faq }: { faq: Faq }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!faq) {
    return null;
  }

  const answerContent = faq.answer || 'No answer provided.';

  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-4 hover:bg-gray-800 transition-colors duration-200 rounded-lg"
      >
        {/* CHANGE 1: Made the question text larger and bolder */}
        <h3 className="text-lg font-bold text-white">{faq.question}</h3>

        {/* CHANGE 2: Made the +/- icon slightly more subtle and added a transition */}
        <span
          className={`text-2xl text-gray-400 transform transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>

      {/* CHANGE 3: Added a smooth animation for the answer appearing */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {/* CHANGE 4: Added padding and slightly softer text color for the answer */}
        <article className="p-4 pt-0 text-gray-300 prose prose-invert max-w-none">
          <ReactMarkdown>{answerContent}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}