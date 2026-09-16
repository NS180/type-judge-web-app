'use client';

import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [calmMode, setCalmMode] = useState(false);

  return (
    <nav className={`navbar sticky top-0 z-50 bg-white border-b-4 border-black ${calmMode ? 'calm-mode' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="brand-mark" aria-hidden="true">⌨</div>
          <h1 className="brand-name text-2xl font-black">TYPE <em>JUDGE</em></h1>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#test" className="nav-pill font-bold hover:underline">TEST</a>
          <a href="#stats" className="font-bold hover:underline">STATS</a>
          <a href="#dashboard" className="font-bold hover:underline">SCORES</a>
          <a href="#about" className="font-bold hover:underline">ABOUT</a>
        </div>

        <div className="settings-wrap">
          <button type="button" className="settings-button" aria-expanded={isOpen} aria-controls="quick-settings" onClick={() => setIsOpen((open) => !open)}>
            <span aria-hidden="true">⚙</span> SETTINGS
          </button>
          {isOpen && (
            <div id="quick-settings" className="settings-popover" role="dialog" aria-label="Quick settings">
              <strong>QUICK TWEAKS</strong>
              <label className="settings-toggle">
                <span>Calm motion</span>
                <input type="checkbox" checked={calmMode} onChange={(event) => setCalmMode(event.target.checked)} />
              </label>
              <small>Turns off mascot wiggles and sticker movement.</small>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
