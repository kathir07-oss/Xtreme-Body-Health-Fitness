import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ArrowLeftRight, Weight, Calendar } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { Testimonial } from '../types';

export default function SuccessStories() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStory = TESTIMONIALS[activeIdx];

  // State to track if comparing or viewing "after" photo vs "before"
  const [viewMode, setViewMode] = useState<'after' | 'before'>('after');

  return (
    <section id="transformations" className="relative bg-brand-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 via-transparent to-brand-red/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-brand-orange text-xs font-sans font-bold tracking-[0.22em] uppercase mb-3">
            <span className="w-6 h-[1.5px] bg-brand-orange" />
            Verified Results
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            TRANSFORMATION <span className="text-brand-red">STORIES</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 font-sans leading-relaxed">
            Real people, real struggles, and absolute victory. Read how our members completely shifted their body compositions and reclaimed their physical power.
          </p>
        </div>

        {/* Dynamic Story Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Column: Interactive Tab Buttons & Testimonial Quote */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Member Selector Tabs */}
              <div className="flex gap-3 mb-8 bg-white/5 p-1 rounded-sm border border-white/5">
                {TESTIMONIALS.map((story: Testimonial, idx: number) => (
                  <button
                    key={story.id}
                    onClick={() => {
                      setActiveIdx(idx);
                      setViewMode('after'); // Reset photo view to 'after'
                    }}
                    className={`flex-1 py-3 text-center font-display font-bold text-xs sm:text-sm tracking-wider uppercase rounded-sm cursor-pointer transition-all ${
                      activeIdx === idx
                        ? 'bg-brand-red text-white shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {story.name}
                  </button>
                ))}
              </div>

              {/* Quote details */}
              <div className="relative">
                {/* Big quotation mark */}
                <span className="absolute -top-8 -left-6 text-brand-red/10 text-8xl font-serif pointer-events-none">
                  “
                </span>

                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < activeStory.rating ? 'fill-brand-orange text-brand-orange' : 'text-gray-600'}
                    />
                  ))}
                </div>

                <p className="text-gray-200 font-sans text-sm sm:text-base leading-relaxed italic relative z-10">
                  "{activeStory.comment}"
                </p>

                {/* Author Info */}
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={activeStory.avatarUrl}
                    alt={activeStory.name}
                    className="w-12 h-12 rounded-full object-cover border border-brand-orange/30"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-display font-bold text-lg text-white uppercase tracking-wide">
                      {activeStory.name}, {activeStory.age}
                    </h4>
                    <span className="text-xs text-gray-500 font-sans font-medium">
                      {activeStory.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/5 pt-6">
              <div className="bg-brand-panel p-3 border border-white/5 text-center rounded-sm">
                <span className="block text-[9px] font-sans font-extrabold tracking-wider uppercase text-gray-500">
                  Initial Weight
                </span>
                <span className="block font-display font-black text-lg sm:text-xl text-gray-400 mt-1">
                  {activeStory.beforeWeight}
                </span>
              </div>
              <div className="bg-brand-panel p-3 border border-brand-orange/20 text-center rounded-sm">
                <span className="block text-[9px] font-sans font-extrabold tracking-wider uppercase text-brand-orange">
                  Current Weight
                </span>
                <span className="block font-display font-black text-lg sm:text-xl text-brand-orange mt-1">
                  {activeStory.afterWeight}
                </span>
              </div>
              <div className="bg-brand-panel p-3 border border-white/5 text-center rounded-sm">
                <span className="block text-[9px] font-sans font-extrabold tracking-wider uppercase text-gray-500">
                  Timeframe
                </span>
                <span className="block font-display font-black text-lg sm:text-xl text-white mt-1">
                  {activeStory.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Picture Panel */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[380px] h-[450px] bg-brand-panel rounded-sm overflow-hidden border border-white/10 group">
              {/* Photo */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={viewMode === 'after' ? activeStory.afterPhoto : activeStory.beforePhoto}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={viewMode === 'after' ? activeStory.afterPhoto : activeStory.beforePhoto}
                  alt={`${activeStory.name} ${viewMode}`}
                  className="w-full h-full object-cover filter contrast-110 saturate-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </AnimatePresence>

              {/* Photo Type Label */}
              <div className="absolute top-4 left-4 bg-brand-black/80 backdrop-blur-sm border border-white/15 px-3 py-1.5 rounded-sm">
                <span className="font-display font-black text-xs tracking-widest uppercase text-white">
                  {viewMode === 'after' ? 'AFTER TRANSFORMATION' : 'BEFORE COMMENCING'}
                </span>
              </div>

              {/* Toggle comparison slider button */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-black/90 backdrop-blur-md border border-white/10 p-1 rounded-sm flex gap-1 z-20 shadow-xl">
                <button
                  onClick={() => setViewMode('before')}
                  className={`px-3 py-1.5 text-[10px] font-sans font-black tracking-widest uppercase rounded-sm transition-colors cursor-pointer ${
                    viewMode === 'before'
                      ? 'bg-brand-red text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setViewMode('after')}
                  className={`px-3 py-1.5 text-[10px] font-sans font-black tracking-widest uppercase rounded-sm transition-colors cursor-pointer ${
                    viewMode === 'after'
                      ? 'bg-brand-orange text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  After
                </button>
              </div>

              {/* Instruction Prompt */}
              <div className="absolute inset-x-0 bottom-16 flex justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-brand-black/75 backdrop-blur-xs px-4 py-2 rounded-full flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-white uppercase border border-white/5">
                  <ArrowLeftRight size={11} className="text-brand-orange" />
                  Toggle buttons below to compare
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
