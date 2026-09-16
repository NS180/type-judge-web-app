'use client';

import { formatTime } from '@/lib/typing-utils';

interface LiveStatsProps {
  wpm: number;
  accuracy: number;
  timeSeconds: number;
  errors: number;
}

export function LiveStats({ wpm, accuracy, timeSeconds, errors }: LiveStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="offset-card bg-green-100 text-center">
        <div className="text-sm font-bold text-gray-700">WPM</div>
        <div className="text-3xl font-black">{wpm}</div>
      </div>
      
      <div className="offset-card bg-purple-100 text-center">
        <div className="text-sm font-bold text-gray-700">ACCURACY</div>
        <div className="text-3xl font-black">{accuracy}%</div>
      </div>
      
      <div className="offset-card bg-pink-100 text-center">
        <div className="text-sm font-bold text-gray-700">TIME</div>
        <div className="text-3xl font-black">{formatTime(timeSeconds)}</div>
      </div>
      
      <div className="offset-card bg-yellow-100 text-center">
        <div className="text-sm font-bold text-gray-700">ERRORS</div>
        <div className="text-3xl font-black">{errors}</div>
      </div>
    </div>
  );
}
