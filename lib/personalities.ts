import { Personality, TypingMetrics } from './types';

export const PERSONALITIES: Record<string, Personality> = {
  SPEED_DEMON: {
    id: 'SPEED_DEMON',
    name: 'Speed Demon',
    color: '#FF6B6B',
    emoji: '🏎️',
    verdicts: [
      "ZOOM ZOOM! You're a typing speed force of nature!",
      'Your fingers are LITERALLY made of lightning.',
      'The keyboard has never stood a chance against you.',
      'Congratulations, you type faster than most people think.',
    ],
    description: 'High WPM with excellent accuracy and consistency. Born to type fast.',
  },
  OVERTHINKER: {
    id: 'OVERTHINKER',
    name: 'Overthinker',
    color: '#4ECDC4',
    emoji: '🤔',
    verdicts: [
      'You think carefully before each keystroke. Respect.',
      'Quality over speed. You are the philosopher of typing.',
      'Every pause is a small meditation session.',
      'Your essays must be absolutely perfect.',
    ],
    description: 'Long pauses with high accuracy and many corrections. Perfectionist approach.',
  },
  CHAOS_GOBLIN: {
    id: 'CHAOS_GOBLIN',
    name: 'Chaos Goblin',
    color: '#FFD93D',
    emoji: '👹',
    verdicts: [
      'CHAOS! MAYHEM! DELETE AND RETYPE!',
      'You type like you\'re fighting with the keyboard.',
      'Error correction is your middle name.',
      'Speed and chaos—the dynamic duo.',
    ],
    description: 'High speed but lower accuracy. Lots of backspaces and corrections.',
  },
  PERFECTIONIST: {
    id: 'PERFECTIONIST',
    name: 'Perfectionist',
    color: '#A0D995',
    emoji: '✨',
    verdicts: [
      'Not a single typo shall pass your fingers!',
      '99%+ accuracy is your baseline.',
      'You probably proofread everything including texts.',
      'Your keyboard is flawless. Your typing is flawless.',
    ],
    description: 'Extremely high accuracy with frequent corrections. Every keystroke matters.',
  },
  CHILL_TYPER: {
    id: 'CHILL_TYPER',
    name: 'Chill Typer',
    color: '#95E1D3',
    emoji: '😎',
    verdicts: [
      'Steady, consistent, like a metronome of cool.',
      'You type like you have all the time in the world.',
      'Balance is your virtue. Chill is your way.',
      'Not too fast, not too slow. Just right.',
    ],
    description: 'Moderate WPM with good accuracy and stable rhythm. Zen master of typing.',
  },
  PANIC_TYPER: {
    id: 'PANIC_TYPER',
    name: 'Panic Typer',
    color: '#F38181',
    emoji: '😰',
    verdicts: [
      'Your typing rhythm is: FAST FAST SLOW SLOW FAST!',
      'Bursts of speed followed by crisis management.',
      'One minute you\'re flying, next you\'re fixing.',
      'It\'s like watching a typing thriller movie.',
    ],
    description: 'Variable speed with accuracy drops. Pressure makes for interesting patterns.',
  },
  MACHINE: {
    id: 'MACHINE',
    name: 'The Machine',
    color: '#7B68EE',
    emoji: '⚙️',
    verdicts: [
      '... ARE YOU EVEN HUMAN?',
      'This is peak human typing performance.',
      'You have transcended typing. You ARE the keyboard.',
      'We are all witnesses to typing greatness.',
    ],
    description: '80+ WPM with 99%+ accuracy. Superhuman consistency. You are the chosen one.',
  },
};

export function classifyPersonality(metrics: TypingMetrics): Personality {
  const { wpm, accuracy, consistency, backspaces, pauses, totalCharacters, averagePause } = metrics;

  // MACHINE: Ultra-high performance
  if (wpm > 80 && accuracy > 99 && consistency > 95) {
    return PERSONALITIES.MACHINE;
  }

  // SPEED_DEMON: Fast and accurate
  if (wpm > 70 && accuracy > 95 && consistency > 85) {
    return PERSONALITIES.SPEED_DEMON;
  }

  // PERFECTIONIST: Extreme accuracy with corrections
  if (accuracy > 98 && (backspaces / totalCharacters > 0.15 || accuracy > 99)) {
    return PERSONALITIES.PERFECTIONIST;
  }

  // OVERTHINKER: Long pauses, high accuracy, many backspaces
  if (averagePause > 1.5 && accuracy > 90 && backspaces > 5) {
    return PERSONALITIES.OVERTHINKER;
  }

  // CHAOS_GOBLIN: Fast but error-prone
  if (wpm > 60 && accuracy < 90 && (backspaces > 8 || consistency < 70)) {
    return PERSONALITIES.CHAOS_GOBLIN;
  }

  // PANIC_TYPER: Variable speed, accuracy drops
  if (consistency < 60 && (accuracy < 92 || pauses > 10)) {
    return PERSONALITIES.PANIC_TYPER;
  }

  // CHILL_TYPER: Moderate and steady (default)
  return PERSONALITIES.CHILL_TYPER;
}
