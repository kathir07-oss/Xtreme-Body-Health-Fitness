import React from 'react';
import { motion } from 'motion/react';

export default function GymAnimation() {
  return (
    <section className="relative bg-brand-black py-16 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/5 via-transparent to-brand-orange/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Title */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-brand-orange text-xs font-sans font-extrabold tracking-[0.2em] uppercase mb-2">
            The Iron Never Lies
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Built in the Gym. <br className="sm:hidden" />
            <span className="text-brand-red">Earned in the Grind.</span>
          </h2>
        </div>

        {/* Dynamic Barbell Lifting Animation */}
        <div className="flex justify-center items-center h-44 my-6">
          <div className="animate-[lift_2.5s_ease-in-out_infinite] flex items-center">
            {/* Left Plates */}
            <div className="flex items-center gap-1">
              <div className="w-[18px] sm:w-[22px] h-[60px] sm:h-[80px] rounded-sm bg-gradient-to-b from-[#444] to-[#1a1a1a] border border-[#555] shadow-lg shadow-black/50" />
              <div className="w-[14px] sm:w-[16px] h-[45px] sm:h-[62px] rounded-sm bg-gradient-to-b from-[#333] to-[#111] border border-[#444] shadow-md shadow-black/45" />
              <div className="w-[10px] sm:w-[12px] h-[35px] sm:h-[48px] rounded-sm bg-gradient-to-b from-[#222] to-[#0a0a0a] border border-[#333] shadow-sm shadow-black/40" />
              <div className="w-[8px] sm:w-[10px] h-[22px] sm:h-[30px] rounded-sm bg-brand-red shadow-inner shadow-brand-orange/20" />
            </div>

            {/* Barbell Center Rod */}
            <div className="w-[120px] sm:w-[180px] h-[10px] sm:h-[14px] bg-gradient-to-b from-[#666] to-[#222] border-t border-white/20 shadow-inner relative flex items-center justify-center">
              {/* Knurling markers */}
              <div className="absolute left-[20%] right-[20%] h-[50%] bg-white/5 border-x border-white/10" />
            </div>

            {/* Right Plates */}
            <div className="flex items-center gap-1">
              <div className="w-[8px] sm:w-[10px] h-[22px] sm:h-[30px] rounded-sm bg-brand-red shadow-inner shadow-brand-orange/20" />
              <div className="w-[10px] sm:w-[12px] h-[35px] sm:h-[48px] rounded-sm bg-gradient-to-b from-[#222] to-[#0a0a0a] border border-[#333] shadow-sm shadow-black/40" />
              <div className="w-[14px] sm:w-[16px] h-[45px] sm:h-[62px] rounded-sm bg-gradient-to-b from-[#333] to-[#111] border border-[#444] shadow-md shadow-black/45" />
              <div className="w-[18px] sm:w-[22px] h-[60px] sm:h-[80px] rounded-sm bg-gradient-to-b from-[#444] to-[#1a1a1a] border border-[#555] shadow-lg shadow-black/50" />
            </div>
          </div>
        </div>

        {/* Floating Equipment Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto mt-12">
          {/* Equipment 1 */}
          <div className="flex flex-col items-center p-4 bg-brand-panel/40 border border-white/5 rounded-sm hover:border-brand-red/30 hover:bg-brand-panel/70 transition-all duration-300">
            <svg
              className="animate-[float_3s_ease-in-out_infinite] w-14 h-14"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="26" width="40" height="8" rx="2" fill="#333" stroke="#555" strokeWidth="1.5" />
              <rect x="4" y="18" width="8" height="24" rx="3" fill="#C41230" stroke="#FF4D00" strokeWidth="1" />
              <rect x="48" y="18" width="8" height="24" rx="3" fill="#C41230" stroke="#FF4D00" strokeWidth="1" />
            </svg>
            <span className="font-display font-bold text-xs tracking-widest uppercase text-gray-400 mt-4">
              Barbell Rack
            </span>
          </div>

          {/* Equipment 2 */}
          <div className="flex flex-col items-center p-4 bg-brand-panel/40 border border-white/5 rounded-sm hover:border-brand-red/30 hover:bg-brand-panel/70 transition-all duration-300">
            <svg
              className="animate-[float_3.2s_ease-in-out_infinite_0.4s] w-14 h-14"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="30" r="10" fill="#1a1a1a" stroke="#444" strokeWidth="2" />
              <circle cx="18" cy="30" r="5" fill="#333" />
              <line x1="18" y1="30" x2="42" y2="30" stroke="#555" strokeWidth="5" strokeLinecap="round" />
              <circle cx="42" cy="30" r="8" fill="#1a1a1a" stroke="#444" strokeWidth="2" />
            </svg>
            <span className="font-display font-bold text-xs tracking-widest uppercase text-gray-400 mt-4">
              Heavy Dumbbell
            </span>
          </div>

          {/* Equipment 3 */}
          <div className="flex flex-col items-center p-4 bg-brand-panel/40 border border-white/5 rounded-sm hover:border-brand-red/30 hover:bg-brand-panel/70 transition-all duration-300">
            <svg
              className="animate-[float_2.8s_ease-in-out_infinite_0.8s] w-14 h-14"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="8" y="10" width="44" height="5" rx="2" fill="#333" stroke="#555" strokeWidth="1.5" />
              <line x1="18" y1="15" x2="18" y2="50" stroke="#444" strokeWidth="3" strokeLinecap="round" />
              <line x1="42" y1="15" x2="42" y2="50" stroke="#444" strokeWidth="3" strokeLinecap="round" />
              <ellipse cx="30" cy="36" rx="18" ry="5" fill="#1a1a1a" stroke="#555" strokeWidth="1.5" />
              <line x1="12" y1="36" x2="48" y2="36" stroke="#C41230" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span className="font-display font-bold text-xs tracking-widest uppercase text-gray-400 mt-4">
              Bench Press
            </span>
          </div>

          {/* Equipment 4 */}
          <div className="flex flex-col items-center p-4 bg-brand-panel/40 border border-white/5 rounded-sm hover:border-brand-red/30 hover:bg-brand-panel/70 transition-all duration-300">
            <svg
              className="animate-[float_3.4s_ease-in-out_infinite_1.2s] w-14 h-14"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="30" cy="42" rx="22" ry="5" fill="#1a1a1a" stroke="#333" strokeWidth="1.5" />
              <circle cx="30" cy="42" r="7" fill="#222" stroke="#C41230" strokeWidth="1.5" />
              <circle cx="30" cy="18" r="10" fill="#1a1a1a" stroke="#555" strokeWidth="2" />
              <circle cx="30" cy="18" r="5" fill="#333" />
              <line x1="30" y1="28" x2="30" y2="36" stroke="#555" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <span className="font-display font-bold text-xs tracking-widest uppercase text-gray-400 mt-4">
              Kettlebell
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
