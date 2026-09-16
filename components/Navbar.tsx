'use client';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl font-bold">📝</div>
          <h1 className="text-2xl font-bold">TYPE JUDGE</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#test" className="font-bold hover:underline">TEST</a>
          <a href="#stats" className="font-bold hover:underline">STATS</a>
          <a href="#about" className="font-bold hover:underline">ABOUT</a>
        </div>
      </div>
    </nav>
  );
}
