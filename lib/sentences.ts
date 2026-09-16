export const MAIN_SENTENCES = [
  'The quick brown fox jumps over the lazy dog.',
  'I said I would sleep early, but here I am typing at midnight.',
  'Sometimes the bug is not in the code. It is in your confidence.',
  'Why fix one bug when you can accidentally create three more?',
  'One more LeetCode question and then I will definitely sleep.',
  'Debugging is twice as hard as coding. So code even more carefully.',
  'A programmer is someone who fixes things that aren\'t broken.',
  'Computers are like air conditioners. They stop working when you open windows.',
  'Why do programmers prefer dark mode? Because light attracts bugs.',
  'I would tell you a programming joke, but class is not in session.',
  'Have you tried turning it off and on again?',
  'This is not a bug, it is a feature.',
  'Works on my machine. Ship it to production.',
  'Ctrl+Z is my favorite key combination.',
  'The user did not follow instructions. The user is always wrong.',
  'Ninety percent of my job is explaining to non-programmers why their idea is bad.',
  'I am not lazy, I just find shortcuts for everything.',
  'Coffee is the most important element of my stack.',
  'Semicolons are a suggestion, not a requirement.',
  'There are only 10 kinds of people: those who understand binary and those who don\'t.',
  'I love deadlines. I like the whooshing sound they make as they fly by.',
  'Why do Java developers wear glasses? Because they do not C sharp.',
  'The best code is the code you do not have to write.',
  'Computers make very fast, very accurate mistakes.',
  'Any fool can write code that a computer can understand.',
  'Good programmers write code that humans can understand.',
  'A language that does not affect the way you think about programming is not worth knowing.',
];

export const SPEED_MODE_SENTENCES = [
  'The quick fox jumps.',
  'I love typing fast.',
  'Speed test mode active.',
  'Type this quickly now.',
  'Faster faster faster go.',
  'No time to think here.',
  'Just keep typing please.',
  'Rapid fire sentences start.',
  'Go go go right now.',
  'Moving at lightning speed.',
  'Zoom through this test.',
  'Fast fingers mode ready.',
];

export const CHAOS_MODE_SENTENCES = [
  'The rrrrrainbow rrrrrises over the mmmmmountain.',
  'Programming is pppprogramming plus gggggrammars.',
  'Misspellings are mmmiiisssspelllings sometimes.',
  'This sentence has tttriple letters everywhere.',
  'Tricky tricky tricky words in this one here.',
  'Keyboard keyboard keyboard keys keep keying.',
  'Mississippi missed missing the mission message.',
  'Possess possession of possessive properties.',
  'Necessary nerves need needle nosed nominalism.',
];

export const MEME_MODE_SENTENCES = [
  'I did not study. I looked at the answers.',
  'When you finally fix a bug but break two new ones.',
  'This meeting could have been an email.',
  'Stack overflow has all the answers I need.',
  'It works in my local environment at least.',
  'That is someone else\'s problem now lol.',
  'I have no idea what I am doing here today.',
  'Panic driven development is my specialty.',
  'I am not late, I am just early for tomorrow.',
];

export const ZEN_MODE_SENTENCES = [
  'Breathe in slowly and type with intention.',
  'Each keystroke is a moment of stillness.',
  'The mind is clear when the fingers are calm.',
  'Peace comes from within the typing journey.',
  'Let go of the mistakes and embrace the flow.',
  'Typing is meditation in motion and silence.',
  'Every word is a step on a peaceful path.',
  'Stillness and presence in every keystroke.',
];

export function getRandomSentence(sentences: string[]): string {
  return sentences[Math.floor(Math.random() * sentences.length)];
}

export function getRandomMainSentence(): string {
  return getRandomSentence(MAIN_SENTENCES);
}
