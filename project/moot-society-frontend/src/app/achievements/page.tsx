// src/app/achievements/page.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';

// --- TYPE DEFINITIONS ---
interface StrapiAchievement {
  id: number;
  year: number;
  title: string;
  details: string;
  team_members: string;
}

// --- DATA FETCHING FUNCTION ---
async function getAchievements(): Promise<StrapiAchievement[]> {
  try {
    // THE FIX IS HERE: The API endpoint is 'achievementss', not 'achievements'.
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/achievementss?sort=year:desc`);
    
    if (!res.ok) throw new Error('Failed to fetch achievements');
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching achievements:", error);
    return [];
  }
}

// --- THE MAIN PAGE COMPONENT ---
export default async function AchievementsPage() {
  const achievements = await getAchievements();

  // Group achievements by year
  const groupedAchievements: { [year: number]: StrapiAchievement[] } = {};
  achievements.forEach(achievement => {
    const year = achievement.year;
    if (!groupedAchievements[year]) {
      groupedAchievements[year] = [];
    }
    groupedAchievements[year].push(achievement);
  });

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-16 uppercase tracking-wide">
        Our Achievements
      </h1>

      <div className="max-w-4xl mx-auto space-y-12">
        {Object.keys(groupedAchievements).length > 0 ? (
          Object.keys(groupedAchievements).map(year => (
            <section key={year}>
              <h2 className="text-4xl font-semibold mb-6 border-l-4 border-white pl-4">{year}</h2>
              <div className="space-y-8">
                {groupedAchievements[parseInt(year)].map(achievement => (
                  <div key={achievement.id} className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
                    {achievement.team_members && (
                      <p className="text-gray-400 mb-4">
                        <strong>Team:</strong> {achievement.team_members}
                      </p>
                    )}
                    <article className="prose prose-invert max-w-none">
                      <ReactMarkdown>{achievement.details}</ReactMarkdown>
                    </article>
                  </div>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p className="text-center text-gray-400">No achievements have been recorded yet.</p>
        )}
      </div>
    </div>
  );
}