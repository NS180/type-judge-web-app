'use client';

export function Hero() {
  return (
    <section className="relative py-12 md:py-20 px-4 bg-[#f7f2e8] text-black border-b-4 border-black">
      <span className="hero-spark hero-spark-one" aria-hidden="true">✦</span>
      <span className="hero-spark hero-spark-two" aria-hidden="true">✶</span>
      <span className="hero-widget hero-widget-one" aria-hidden="true">100% REAL</span>
      <span className="hero-widget hero-widget-two" aria-hidden="true">TYPE VIBES</span>
      <span className="hero-widget hero-widget-three" aria-hidden="true">NO CHEATING</span>
      <span className="hero-sticker" aria-hidden="true">WOW!</span>
      <span className="hero-doodle hidden md:block" style={{ top: '28%', left: '44%' }} aria-hidden="true">✦</span>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 px-2">
          <h1 className="text-5xl md:text-7xl font-black mb-4 comic-outline">
            YOUR TYPING<br/><span className="headline-pink">PERSONALITY</span> AWAITS
          </h1>
          <p className="text-xl md:text-2xl font-bold text-black max-w-2xl mx-auto">
            Type a sentence and discover how your fingers betray your true nature.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <div className="flex-1 hero-instructions">
            <div className="offset-card">
              <div className="text-lg font-bold mb-3 bg-[#ffd21f] text-black border-2 border-black px-3 py-1 inline-block -rotate-2">HOW IT WORKS <span className="text-[#f39bc7]">✦</span></div>
              <ol className="space-y-2 text-sm font-bold">
                <li>1. Read the sentence carefully</li>
                <li>2. Type it as accurately (or chaotically) as you wish</li>
                <li>3. Receive your TYPING VERDICT</li>
                <li>4. Discover your typing personality</li>
              </ol>
            </div>
          </div>

          <div className="flex-1 text-center hero-mascot-wrap">
            <div className="keyboard-mascot" role="img" aria-label="A quirky keyboard ready to judge your typing">
              <span className="keyboard-eye eye-left" aria-hidden="true" />
              <span className="keyboard-eye eye-right" aria-hidden="true" />
              <span className="keyboard-mouth" aria-hidden="true">⌣</span>
              <span className="keyboard-row row-one" aria-hidden="true"><i /><i /><i /><i /></span>
              <span className="keyboard-row row-two" aria-hidden="true"><i /><i /><i /><i /><i /></span>
              <span className="keyboard-row row-three" aria-hidden="true"><i /><i /><i /><b /></span>
            </div>
            <p className="mt-4 font-bold text-lg">Ready to be judged?</p>
          </div>
        </div>
      </div>
    </section>
  );
}
