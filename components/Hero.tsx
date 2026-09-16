'use client';

export function Hero() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-yellow-100 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-4 comic-outline">
            YOUR TYPING<br/>PERSONALITY AWAITS
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-700 max-w-2xl mx-auto">
            Type a sentence and discover how your fingers betray your true nature.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <div className="flex-1">
            <div className="offset-card">
              <div className="text-lg font-bold mb-3">HOW IT WORKS:</div>
              <ol className="space-y-2 text-sm font-bold">
                <li>1. Read the sentence carefully</li>
                <li>2. Type it as accurately (or chaotically) as you wish</li>
                <li>3. Receive your TYPING VERDICT</li>
                <li>4. Discover your typing personality</li>
              </ol>
            </div>
          </div>

          <div className="flex-1 text-center">
            <div className="text-6xl animate-bounce">⌨️</div>
            <p className="mt-4 font-bold text-lg">Ready to be judged?</p>
          </div>
        </div>
      </div>
    </section>
  );
}
