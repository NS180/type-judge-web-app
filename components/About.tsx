'use client';

export function About() {
  return (
    <section id="about" className="py-12 px-4 bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-4xl font-black mb-8 text-center"><span aria-hidden="true">●</span> ABOUT TYPE JUDGE <span aria-hidden="true">●</span></h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="offset-card">
            <h3 className="text-2xl font-black mb-4">WHAT IS THIS?</h3>
            <p className="font-bold leading-relaxed">
              TYPE JUDGE is a quirky typing test that analyzes HOW you type, not just how fast or accurate. 
              Your typing patterns reveal your true personality. Are you a SPEED DEMON? A CHAOS GOBLIN? 
              THE MACHINE? Find out now.
            </p>
          </div>

          <div className="offset-card">
            <h3 className="text-2xl font-black mb-4">HOW IT WORKS</h3>
            <p className="font-bold leading-relaxed">
              We analyze 7 key metrics: WPM, accuracy, pauses, backspaces, consistency, and more. 
              Our proprietary algorithm classifies you into one of 7 personality types. 
              Your results are saved locally (no servers spying on you).
            </p>
          </div>

          <div className="offset-card">
            <h3 className="text-2xl font-black mb-4">PERSONALITY TYPES</h3>
            <div className="space-y-2 font-bold text-sm">
              <div>🏎️ SPEED DEMON - Type fast and accurate</div>
              <div>🤔 OVERTHINKER - Careful and deliberate</div>
              <div>👹 CHAOS GOBLIN - Speed meets errors</div>
              <div>✨ PERFECTIONIST - 99%+ accuracy</div>
              <div>😎 CHILL TYPER - Balanced and steady</div>
              <div>😰 PANIC TYPER - Variable and intense</div>
              <div>⚙️ THE MACHINE - Superhuman performance</div>
            </div>
          </div>

          <div className="offset-card">
            <h3 className="text-2xl font-black mb-4">PRIVACY</h3>
            <p className="font-bold leading-relaxed">
              All your data stays on YOUR device. We don&apos;t collect, store, or sell any information. 
              Your typing habits are yours alone. We&apos;re not reading your diary, promise.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="font-bold text-lg">
            Made with ❤️ for people who think too much about how they type.
          </p>
        </div>
      </div>
    </section>
  );
}
