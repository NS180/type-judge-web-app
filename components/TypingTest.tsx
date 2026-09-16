'use client';

import { useState, useRef, useEffect } from 'react';
import { getRandomMainSentence } from '@/lib/sentences';
import { analyzeTyping, calculateWPM, calculateAccuracy, saveTest, generateTestId } from '@/lib/typing-utils';
import { classifyPersonality, PERSONALITIES } from '@/lib/personalities';
import { SentenceDisplay } from './SentenceDisplay';
import { LiveStats } from './LiveStats';
import { PersonalityResult } from './PersonalityResult';

export function TypingTest() {
  const [sentence, setSentence] = useState<string>('');
  const [typed, setTyped] = useState<string>('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeSeconds, setTimeSeconds] = useState<number>(0);
  const [backspaceCount, setBackspaceCount] = useState<number>(0);
  const [pauseEvents, setPauseEvents] = useState<number[]>([]);
  const [lastKeyTime, setLastKeyTime] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<any>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  // Initialize test
  useEffect(() => {
    setSentence(getRandomMainSentence());
  }, []);

  // Timer
  useEffect(() => {
    if (startTime && !isComplete) {
      timerRef.current = setInterval(() => {
        setTimeSeconds(prev => prev + 0.1);
      }, 100);
      return () => clearInterval(timerRef.current);
    }
  }, [startTime, isComplete]);

  // Handle typing
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!sentence || isComplete) return;

    const now = Date.now();

    if (!startTime) {
      setStartTime(now);
      setLastKeyTime(now);
    }

    // Check for pause
    if (lastKeyTime && now - lastKeyTime > 1500) {
      const pauseDuration = (now - lastKeyTime) / 1000;
      setPauseEvents(prev => [...prev, pauseDuration]);
    }

    setLastKeyTime(now);

    if (e.key === 'Backspace') {
      e.preventDefault();
      setTyped(prev => prev.slice(0, -1));
      setBackspaceCount(prev => prev + 1);
    } else if (e.key.length === 1) {
      e.preventDefault();
      const newTyped = typed + e.key;
      setTyped(newTyped);

      // Check if complete
      if (newTyped.length >= sentence.length) {
        completeTest(newTyped);
      }
    }
  };

  const completeTest = (finalTyped: string) => {
    setIsComplete(true);
    if (timerRef.current) clearInterval(timerRef.current);

    const metrics = analyzeTyping(finalTyped, sentence, timeSeconds, backspaceCount, pauseEvents);
    const personality = classifyPersonality(metrics);
    const verdictIndex = Math.floor(Math.random() * personality.verdicts.length);
    const verdict = personality.verdicts[verdictIndex];

    const test = {
      id: generateTestId(),
      wpm: metrics.wpm,
      accuracy: metrics.accuracy,
      personality: personality.name,
      personalityColor: personality.color,
      backspaces: backspaceCount,
      pauses: pauseEvents.length,
      consistency: metrics.consistency,
      timestamp: Date.now(),
    };

    saveTest(test);
    setTestResult({ personality, metrics, verdict });
  };

  const resetTest = () => {
    setSentence(getRandomMainSentence());
    setTyped('');
    setStartTime(null);
    setTimeSeconds(0);
    setBackspaceCount(0);
    setPauseEvents([]);
    setLastKeyTime(0);
    setIsComplete(false);
    setTestResult(null);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const copyResult = () => {
    if (testResult) {
      const text = `I just got "${testResult.personality.name}" on TYPE JUDGE! WPM: ${testResult.metrics.wpm}, Accuracy: ${testResult.metrics.accuracy}%`;
      navigator.clipboard.writeText(text);
      alert('Result copied to clipboard!');
    }
  };

  // Live stats
  const wpm = typed.length > 0 && startTime ? calculateWPM(typed.length, timeSeconds) : 0;
  const accuracy = typed.length > 0 ? calculateAccuracy(typed.split('').filter((c, i) => c === sentence[i]).length, typed.length) : 100;
  const errors = typed.split('').filter((c, i) => c !== sentence[i]).length;

  if (!sentence) {
    return <div className="text-center py-12 text-xl font-bold">Loading...</div>;
  }

  return (
    <section id="test" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {isComplete && testResult ? (
          <div>
            <PersonalityResult
              personality={testResult.personality}
              metrics={testResult.metrics}
              verdict={testResult.verdict}
            />
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button onClick={resetTest} className="btn-primary">
                TRY AGAIN
              </button>
              <button onClick={copyResult} className="btn-secondary">
                SHARE RESULT
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-4xl font-black mb-8 text-center">TYPE THIS:</h2>
            
            <div
              ref={inputRef}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              className="focus:outline-none mb-6"
            >
              <SentenceDisplay sentence={sentence} typed={typed} />
            </div>

            {startTime && (
              <>
                <LiveStats
                  wpm={wpm}
                  accuracy={accuracy}
                  timeSeconds={timeSeconds}
                  errors={errors}
                />

                {!startTime && (
                  <div className="text-center text-gray-500 font-bold">
                    Click the text above to start typing...
                  </div>
                )}
              </>
            )}

            {!startTime && (
              <div className="text-center text-lg font-bold text-gray-600 mt-8">
                Click on the sentence above to start the test...
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
