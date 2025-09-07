// src/components/FaqItem.tsx
'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
// --- 1. IMPORT THE CHEVRON ICON ---
import { FaChevronDown } from 'react-icons/fa';

interface Faq {
  question: string;
  answer?: string | null;
}

export default function FaqItem({ faq }: { faq: Faq }) {
  const [isOpen, setIsOpen] = useState(false);
  if (!faq) return null;
  const answerContent = faq.answer || 'No answer provided.';

  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-4 hover:bg-gray-800 transition-colors duration-200 rounded-lg"
      >
        <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
        
        {/* --- 2. THE FIX IS HERE: Replaced '+' with a rotating chevron icon --- */}
        <div className="flex-shrink-0">
          <FaChevronDown
            className={`text-gray-400 transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
        {/* ----------------------------------------------------------------- */}
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <article className="p-4 pt-0 text-gray-300 prose prose-invert max-w-none prose-justify">
          <ReactMarkdown>{answerContent}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}