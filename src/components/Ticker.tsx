import React from 'react';

export default function Ticker() {
  const specializations = [
    'Bodybuilding',
    'Weight Loss',
    'Personal Training',
    'Physiotherapy',
    'Yoga',
    'Steam & Sauna',
    'Group Exercises',
    'Injury Rehabilitation',
    'Strength & Conditioning',
  ];

  // Duplicate list to ensure seamless infinite looping
  const duplicatedItems = [...specializations, ...specializations, ...specializations];

  return (
    <div className="w-full bg-brand-red py-3 sm:py-4 overflow-hidden border-y border-white/10 relative z-20">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-[ticker_25s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
          {duplicatedItems.map((spec, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 font-display font-black text-xs sm:text-sm md:text-base tracking-[0.18em] uppercase text-white px-6 sm:px-8"
            >
              <span>{spec}</span>
              <span className="text-white/50 text-[10px] sm:text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Global css rule for ticker in Tailwind v4 is in standard CSS keyframes. 
          Let's make sure our index.css has the keyframes for "ticker" if needed or we can define simple inline animation.
          Actually, let's include it in index.css as a utility or standard class so it's super reliable. */}
    </div>
  );
}
