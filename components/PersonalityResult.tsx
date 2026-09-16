'use client';

import { Personality, TypingMetrics } from '@/lib/types';

interface PersonalityResultProps {
  personality: Personality;
  metrics: TypingMetrics;
  verdict: string;
}

export function PersonalityResult({ personality, metrics, verdict }: PersonalityResultProps) {
  return (
    <div className="result-card offset-card mb-8" style={{ background: personality.color, color: 'white' }}>
      <div className="text-center">
        <div className="text-7xl mb-4">{personality.emoji}</div>
        <h2 className="text-4xl font-black mb-2">YOU ARE...</h2>
        <h3 className="text-3xl font-bold mb-6">{personality.name}</h3>
        
        <div className="bg-white text-black p-6 rounded-lg mb-6 font-bold text-lg border-3 border-black">
          {verdict}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white">
          <div className="bg-black bg-opacity-30 p-3 rounded font-bold">
            <div className="text-sm opacity-80">WPM</div>
            <div className="text-2xl">{metrics.wpm}</div>
          </div>
          <div className="bg-black bg-opacity-30 p-3 rounded font-bold">
            <div className="text-sm opacity-80">ACCURACY</div>
            <div className="text-2xl">{metrics.accuracy}%</div>
          </div>
          <div className="bg-black bg-opacity-30 p-3 rounded font-bold">
            <div className="text-sm opacity-80">TIME</div>
            <div className="text-2xl">{metrics.timeSeconds}s</div>
          </div>
          <div className="bg-black bg-opacity-30 p-3 rounded font-bold">
            <div className="text-sm opacity-80">ERRORS</div>
            <div className="text-2xl">{metrics.errors}</div>
          </div>
          <div className="bg-black bg-opacity-30 p-3 rounded font-bold">
            <div className="text-sm opacity-80">BACKSPACES</div>
            <div className="text-2xl">{metrics.backspaces}</div>
          </div>
          <div className="bg-black bg-opacity-30 p-3 rounded font-bold">
            <div className="text-sm opacity-80">CONSISTENCY</div>
            <div className="text-2xl">{metrics.consistency}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
