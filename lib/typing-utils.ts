import { KeyEvent, TypingMetrics, Test } from './types';

export function calculateWPM(characters: number, timeSeconds: number): number {
  if (timeSeconds === 0) return 0;
  const words = characters / 5;
  const minutes = timeSeconds / 60;
  return Math.round((words / minutes) * 10) / 10;
}

export function calculateAccuracy(correct: number, total: number): number {
  if (total === 0) return 100;
  return Math.round((correct / total) * 1000) / 10;
}

export function analyzeTyping(
  typed: string,
  original: string,
  timeSeconds: number,
  backspaceCount: number,
  pauseEvents: number[]
): TypingMetrics {
  let correct = 0;
  const minLength = Math.min(typed.length, original.length);

  for (let i = 0; i < minLength; i++) {
    if (typed[i] === original[i]) {
      correct++;
    }
  }

  const errors = Math.max(typed.length - correct, 0);
  const accuracy = calculateAccuracy(correct, original.length);
  const wpm = calculateWPM(correct, timeSeconds);
  const totalWords = Math.ceil(typed.split(/\s+/).length);
  const longestPause = pauseEvents.length > 0 ? Math.max(...pauseEvents) : 0;
  const averagePause = pauseEvents.length > 0 ? pauseEvents.reduce((a, b) => a + b, 0) / pauseEvents.length : 0;

  // Calculate consistency (inverse of coefficient of variation)
  let consistency = 100;
  if (pauseEvents.length > 1) {
    const mean = averagePause;
    const variance = pauseEvents.reduce((sum, p) => sum + Math.pow(p - mean, 2), 0) / pauseEvents.length;
    const stdDev = Math.sqrt(variance);
    const cv = mean > 0 ? (stdDev / mean) * 100 : 0;
    consistency = Math.max(0, Math.round(100 - cv * 5));
  }

  return {
    wpm,
    accuracy,
    errors,
    backspaces: backspaceCount,
    pauses: pauseEvents.length,
    longestPause: Math.round(longestPause * 10) / 10,
    averagePause: Math.round(averagePause * 10) / 10,
    consistency,
    totalCharacters: typed.length,
    totalWords,
    timeSeconds: Math.round(timeSeconds * 10) / 10,
  };
}

// localStorage helpers
const TESTS_KEY = 'typeJudgeTests';
const SETTINGS_KEY = 'typeJudgeSettings';

export function saveTest(test: Test): void {
  try {
    const existing = getAllTests();
    existing.push(test);
    localStorage.setItem(TESTS_KEY, JSON.stringify(existing));
  } catch (error) {
    console.error('[v0] Error saving test:', error);
  }
}

export function getAllTests(): Test[] {
  try {
    const data = localStorage.getItem(TESTS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('[v0] Error loading tests:', error);
    return [];
  }
}

export function getTopTests(count: number = 10): Test[] {
  const tests = getAllTests();
  return tests.sort((a, b) => b.wpm - a.wpm).slice(0, count);
}

export function getTopAccuracyTests(count: number = 10): Test[] {
  const tests = getAllTests();
  return tests.sort((a, b) => b.accuracy - a.accuracy).slice(0, count);
}

export function generateTestId(): string {
  return `test_${Date.now()}_${Math.random().toString(36).substring(7)}`;
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function getAverageWPM(): number {
  const tests = getAllTests();
  if (tests.length === 0) return 0;
  const totalWPM = tests.reduce((sum, test) => sum + test.wpm, 0);
  return Math.round((totalWPM / tests.length) * 10) / 10;
}

export function getAverageAccuracy(): number {
  const tests = getAllTests();
  if (tests.length === 0) return 0;
  const totalAccuracy = tests.reduce((sum, test) => sum + test.accuracy, 0);
  return Math.round((totalAccuracy / tests.length) * 10) / 10;
}

export function getPersonalityStats(): Record<string, number> {
  const tests = getAllTests();
  const stats: Record<string, number> = {};

  tests.forEach((test) => {
    stats[test.personality] = (stats[test.personality] || 0) + 1;
  });

  return stats;
}
