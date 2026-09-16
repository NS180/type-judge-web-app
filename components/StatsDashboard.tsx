'use client';

import { useState, useEffect } from 'react';
import { getAllTests, getAverageWPM, getAverageAccuracy, getPersonalityStats, getTopTests } from '@/lib/typing-utils';
import { Test } from '@/lib/types';

export function StatsDashboard() {
  const [tests, setTests] = useState<Test[]>([]);
  const [avgWpm, setAvgWpm] = useState(0);
  const [avgAccuracy, setAvgAccuracy] = useState(0);
  const [personalityStats, setPersonalityStats] = useState<Record<string, number>>({});
  const [topTests, setTopTests] = useState<Test[]>([]);

  useEffect(() => {
    const allTests = getAllTests();
    setTests(allTests);
    setAvgWpm(getAverageWPM());
    setAvgAccuracy(getAverageAccuracy());
    setPersonalityStats(getPersonalityStats());
    setTopTests(getTopTests(5));
  }, []);

  const bestWpm = topTests.length > 0 ? topTests[0].wpm : 0;
  const totalTests = tests.length;

  if (totalTests === 0) {
    return (
      <section id="stats" className="py-12 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">YOUR STATS</h2>
          <div className="offset-card bg-white">
            <p className="text-xl font-bold text-gray-600">
              No tests completed yet. Take a typing test to see your stats!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="stats" className="py-12 px-4 bg-orange-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-8 text-center">YOUR STATS</h2>

        {/* Main stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="offset-card bg-green-100 text-center">
            <div className="text-sm font-bold text-gray-700">TOTAL TESTS</div>
            <div className="text-4xl font-black">{totalTests}</div>
          </div>

          <div className="offset-card bg-blue-100 text-center">
            <div className="text-sm font-bold text-gray-700">AVG WPM</div>
            <div className="text-4xl font-black">{avgWpm}</div>
          </div>

          <div className="offset-card bg-purple-100 text-center">
            <div className="text-sm font-bold text-gray-700">BEST WPM</div>
            <div className="text-4xl font-black">{bestWpm}</div>
          </div>

          <div className="offset-card bg-pink-100 text-center">
            <div className="text-sm font-bold text-gray-700">AVG ACCURACY</div>
            <div className="text-4xl font-black">{avgAccuracy}%</div>
          </div>
        </div>

        {/* Personality distribution */}
        <div className="offset-card bg-white mb-8">
          <h3 className="text-2xl font-black mb-6">PERSONALITY BREAKDOWN</h3>
          <div className="space-y-3">
            {Object.entries(personalityStats).map(([personality, count]) => (
              <div key={personality} className="flex items-center gap-4">
                <span className="font-bold flex-1">{personality}</span>
                <div className="bg-gray-300 rounded-full h-8 w-32">
                  <div
                    className="bg-blue-500 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ width: `${(count / totalTests) * 100}%` }}
                  >
                    {count}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top tests */}
        <div className="offset-card bg-white">
          <h3 className="text-2xl font-black mb-6">TOP TESTS</h3>
          <div className="space-y-4">
            {topTests.map((test, index) => (
              <div key={test.id} className="sticker bg-yellow-100">
                <span className="font-black">#{index + 1}</span>
                <span className="mx-3">•</span>
                <span>{test.personality}</span>
                <span className="mx-3">•</span>
                <span>{test.wpm} WPM</span>
                <span className="mx-3">•</span>
                <span>{test.accuracy}% acc</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
