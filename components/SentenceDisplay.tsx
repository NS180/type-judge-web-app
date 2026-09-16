'use client';

interface SentenceDisplayProps {
  sentence: string;
  typed: string;
}

export function SentenceDisplay({ sentence, typed }: SentenceDisplayProps) {
  return (
    <div className="offset-card mb-6 bg-blue-50">
      <div className="font-mono text-lg leading-relaxed break-words">
        {sentence.split('').map((char, index) => {
          const typedChar = typed[index];
          
          if (index < typed.length) {
            if (typedChar === char) {
              return (
                <span key={index} className="char-correct">
                  {char}
                </span>
              );
            } else {
              return (
                <span key={index} className="char-incorrect">
                  {char}
                </span>
              );
            }
          }
          
          if (index === typed.length) {
            return (
              <span key={index} className="char-current">
                {char}
              </span>
            );
          }
          
          return (
            <span key={index} className="char-remaining">
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}
