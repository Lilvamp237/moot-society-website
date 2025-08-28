// src/app/news/page.tsx
import React from 'react';

// --- TYPE DEFINITION ---
interface NewsItem {
  id: number;
  Title: string;
  Content: string;
  Date: string;
  Link?: string; // Optional link for "Read More"
}

// --- DATA FETCHING (Commented out for now, use placeholders) ---
/*
async function getNews(): Promise<NewsItem[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/news-items?sort=Date:desc`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
*/

// --- REUSABLE COMPONENT for a news card ---
const NewsCard = ({ news }: { news: NewsItem }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg flex flex-col">
    <h3 className="text-2xl font-bold mb-2 flex-grow">{news.Title}</h3>
    <p className="text-gray-400 mb-4">
      {new Date(news.Date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </p>
    <p className="text-gray-300 mb-4 line-clamp-3">{news.Content}</p> {/* line-clamp-3 limits text to 3 lines */}
    {news.Link && (
      <a href={news.Link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors mt-auto flex items-center">
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4-4m0 0l-4-4m4 4H3" />
        </svg>
      </a>
    )}
  </div>
);

// --- THE MAIN PAGE COMPONENT ---
export default async function NewsPage() {
  // const newsItems = await getNews(); // Uncomment this when ready for Strapi

  // Placeholder data for News
  const newsItems: NewsItem[] = [
    { id: 1, Title: "Registrations Open for Intra-Faculty Debate", Content: "Calling all aspiring debaters! The Moot Society is excited to announce the commencement of registrations for the highly anticipated Intra-Faculty Debate Competition. This is your chance to hone your public speaking skills, engage in critical thinking, and articulate compelling arguments on pressing legal issues. Register now to secure your spot and compete for prestigious awards!", Date: "2024-08-28", Link: "#" },
    { id: 2, Title: "Guest Lecture: The Future of AI in Law", Content: "Join us for an insightful guest lecture by renowned legal tech expert, Dr. Anya Sharma, on 'The Future of Artificial Intelligence in Legal Practice.' This session will explore how AI is transforming legal research, case management, and courtroom strategies. Don't miss this opportunity to stay ahead in the evolving legal landscape.", Date: "2024-09-05" },
    { id: 3, Title: "Mooting Skills Workshop Series", Content: "Enhance your advocacy skills with our comprehensive workshop series, covering everything from memorial drafting to oral arguments. Open to all students, these workshops are designed to equip you with the fundamental techniques required for successful mooting. Limited slots available, so register early!", Date: "2024-08-20", Link: "#" },
    { id: 4, Title: "Inter-College Moot Champions 2023", Content: "We are proud to announce that our team emerged as champions at the prestigious Inter-College Moot Competition 2023. Congratulations to our dedicated team and coaches for their hard work and stellar performance! Read more about their journey and victory.", Date: "2023-12-10", Link: "#" },
  ];

  return (
    <div className="container mx-auto p-4 py-8 md:p-8">
      <h1 className="text-5xl font-bold text-center mb-16 uppercase tracking-wide">
        News & Notices
      </h1>

      {newsItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg">No news or notices to display at the moment.</p>
      )}
    </div>
  );
}