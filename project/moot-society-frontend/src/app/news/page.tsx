// src/app/news/page.tsx
'use client'; 

import React, { useState, useEffect } from 'react';
import NewsModal from '@/components/NewsModal';

// --- TYPE DEFINITION ---
interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  link?: string | null;
}

// --- REUSABLE COMPONENT for a news card ---
const NewsCard = ({ news, onReadMoreClick }: { news: NewsItem; onReadMoreClick: () => void; }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg flex flex-col">
    <h3 className="text-2xl font-bold mb-2 flex-grow">{news.title}</h3>
    <p className="text-gray-400 mb-4">
      {new Date(news.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </p>
    <p className="text-gray-300 mb-4 line-clamp-3">{news.content}</p>

    {/* --- THE FIX IS HERE --- */}
    {/* This container will hold both buttons */}
    <div className="mt-auto flex items-center space-x-6">
      {/* The "Read More" button is now always visible */}
      <button
        onClick={onReadMoreClick}
        className="text-white font-semibold hover:text-gray-300 transition-colors"
      >
        Read More →
      </button>

      {/* The "Open Link" button is only visible if a link exists */}
      {news.link && (
        <a
          href={news.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold hover:text-gray-300 transition-colors"
        >
          Open Link →
        </a>
      )}
    </div>
    {/* ------------------------- */}
  </div>
);

// --- THE MAIN PAGE COMPONENT ---
export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    async function getNews() {
      try {
        const apiEndpoint = 'news-and-noticess';
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${apiEndpoint}?sort=date:desc`);
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setNewsItems(data.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    getNews();
  }, []);

  return (
    <div className="container mx-auto p-4 py-8 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wide">
        News & Notices
      </h1>

      {newsItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <NewsCard key={news.id} news={news} onReadMoreClick={() => setSelectedNews(news)} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg">Loading news...</p>
      )}

      {selectedNews && (
        <NewsModal item={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
    </div>
  );
}