// src/components/NewsModal.tsx
'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';

// Define the shape of a single news item
interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  link?: string | null; // The link can be a string, null, or undefined
}

// The modal component receives the selected news item and a function to close it
export default function NewsModal({ item, onClose }: { item: NewsItem; onClose: () => void; }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative border border-gray-700"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl z-10">&times;</button>
        
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
          <p className="text-gray-400 mb-8">
            {new Date(item.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <article className="prose prose-invert max-w-none">
            <ReactMarkdown>{item.content}</ReactMarkdown>
          </article>

          {/* --- THE FIX IS HERE --- */}
          {/* This block now checks for a link and displays it at the bottom */}
          {item.link && (
            <div className="mt-8 pt-6 border-t border-gray-700">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors"
              >
                Go to External Link →
              </a>
            </div>
          )}
          {/* ------------------------- */}
        </div>
      </div>
    </div>
  );
}