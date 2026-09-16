export interface KeyEvent {
  key: string;
  timestamp: number;
}

export interface TypingMetrics {
  wpm: number;
  accuracy: number;
  errors: number;
  backspaces: number;
  pauses: number;
  longestPause: number;
  averagePause: number;
  consistency: number;
  totalCharacters: number;
  totalWords: number;
  timeSeconds: number;
}

export interface Test {
  id: string;
  nickname?: string;
  wpm: number;
  accuracy: number;
  personality: string;
  personalityColor: string;
  backspaces: number;
  pauses: number;
  consistency: number;
  timestamp: number;
}

export interface Personality {
  id: string;
  name: string;
  color: string;
  emoji: string;
  verdicts: string[];
  description: string;
}

export interface Settings {
  darkMode?: boolean;
  reduceMotion?: boolean;
}
