export function Navbar() {
  return (
    <nav className="navbar sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="brand-mark" aria-hidden="true">⌨</div>
          <h1 className="brand-name text-2xl font-black">TYPE <em>JUDGE</em></h1>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#test" className="nav-pill font-bold hover:underline">TEST</a>
          <a href="#stats" className="font-bold hover:underline">STATS</a>
          <a href="#dashboard" className="font-bold hover:underline">SCORES</a>
          <a href="#dashboard" className="account-nav-link font-bold hover:underline">ACCOUNT</a>
          <a href="#about" className="font-bold hover:underline">ABOUT</a>
        </div>

      </div>
    </nav>
  );
}
