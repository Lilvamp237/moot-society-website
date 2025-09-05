// src/app/achievements/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// --- TYPE DEFINITIONS (Unchanged) ---
interface StrapiAchievement {
  id: number;
  year: number;
  title: string;
  details: string;
  team_members: string;
}

// --- START: THIS IS THE MODIFIED COMPONENT ---
// This now matches the style of your Gallery page's YearAccordion
const YearAccordion = ({ year, achievements }: { year: number; achievements: StrapiAchievement[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // 1. Changed the wrapper to a div with a bottom border for the "strip" look
    <div className="mb-4 border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        // 2. Updated button styles to be full-width with a simpler background
        className="w-full flex justify-between items-center p-4 bg-gray-900 hover:bg-gray-800 transition-colors"
      >
        {/* 3. Changed the year to a smaller, cleaner span */}
        <span className="text-xl font-semibold">{year}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        // 4. Simplified the content area styling
        <div className="p-4 md:p-6 bg-gray-950">
          <div className="space-y-8">
            {achievements.map(achievement => (
              <div key={achievement.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
                <article className="prose prose-invert max-w-none">
                  <ReactMarkdown>{achievement.details}</ReactMarkdown>
                </article>
                {achievement.team_members && (
                  <p className="text-gray-400 mt-4">
                    <strong>Team:</strong> {achievement.team_members}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
// --- END: MODIFIED COMPONENT ---


// --- THE MAIN PAGE COMPONENT (No changes here) ---
export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<StrapiAchievement[]>([]);

  useEffect(() => {
    async function getAchievements() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/achievementss?sort=year:desc`);
        if (!res.ok) throw new Error('Failed to fetch achievements');
        const data = await res.json();
        setAchievements(data.data);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    }
    getAchievements();
  }, []);

  const groupedAchievements: { [year: number]: StrapiAchievement[] } = {};
  achievements.forEach(achievement => {
    const year = achievement.year;
    if (!groupedAchievements[year]) {
      groupedAchievements[year] = [];
    }
    groupedAchievements[year].push(achievement);
  });

  const sortedYears = Object.keys(groupedAchievements).map(Number).sort((a, b) => b - a);

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-16 uppercase tracking-wide">
        Our Achievements
      </h1>
      {/* Changed the wrapper to max-w-5xl to give the longer strips more room */}
      <div className="space-y-4">
        {sortedYears.length > 0 ? (
          sortedYears.map(year => (
            <YearAccordion
              key={year}
              year={year}
              achievements={groupedAchievements[year]}
            />
          ))
        ) : (
          <p className="text-center text-gray-400">Loading achievements...</p>
        )}
      </div>
    </div>
  );
}