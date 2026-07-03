import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Dumbbell, Award, History } from 'lucide-react';
import BMICalculator from './BMICalculator';

interface HeroProps {
  onScrollToSection: (id: string) => void;
  onJoinNow: () => void;
  onStartPlan?: (planId: string) => void;
}

export default function Hero({ onScrollToSection, onJoinNow, onStartPlan }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-brand-black"
    >
      {/* Real Gym Background Image with Moody Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920"
          alt="Xtreme Body Gym Interior"
          className="w-full h-full object-cover opacity-25 filter grayscale contrast-125"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Gradients to keep the text fully readable and atmospheric */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50" />
        {/* Glowing atmospheric red-orange radial gradient */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-brand-red/10 blur-[80px] sm:blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Headings & Buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center lg:justify-start gap-2 text-brand-orange text-xs sm:text-sm font-sans font-extrabold tracking-[0.25em] uppercase mb-4"
          >
            <span className="w-8 h-[2px] bg-brand-orange" />
            Rajapalayam's Ultimate Fitness Destination
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-white uppercase tracking-tight"
          >
            Transform Your Body. <br />
            <span className="text-brand-red bg-clip-text">Transform Your Life.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-gray-400 font-sans leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Over a decade of crafting real transformations in Rajapalayam, Tamil Nadu. Step into an intense, world-class training center featuring state-of-the-art strength lines, physiotherapy rehabilitation, steam, and dedicated wellness coaches.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={onJoinNow}
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-brand-red to-brand-orange text-white font-display font-black text-sm tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg shadow-brand-red/30 w-full sm:w-auto"
              id="hero-start-trial-btn"
            >
              Start Your Transformation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => onScrollToSection('plans')}
              className="flex items-center justify-center bg-transparent text-white border border-white/20 hover:border-white font-display font-black text-sm tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 hover:bg-white/5 cursor-pointer w-full sm:w-auto"
              id="hero-view-plans-btn"
            >
              View Membership Plans
            </button>
          </motion.div>

          {/* Key Trust Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-white/5 pt-8 max-w-md mx-auto lg:mx-0"
          >
            <div className="text-center lg:text-left">
              <div className="font-display font-black text-2xl sm:text-3xl text-white leading-none">
                10<span className="text-brand-orange">+</span>
              </div>
              <div className="text-[10px] text-gray-500 font-sans font-bold tracking-wider uppercase mt-1">
                Years Active
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="font-display font-black text-2xl sm:text-3xl text-white leading-none">
                1000<span className="text-brand-orange">+</span>
              </div>
              <div className="text-[10px] text-gray-500 font-sans font-bold tracking-wider uppercase mt-1">
                Members
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="font-display font-black text-2xl sm:text-3xl text-white leading-none">
                100<span className="text-brand-orange">%</span>
              </div>
              <div className="text-[10px] text-gray-500 font-sans font-bold tracking-wider uppercase mt-1">
                Dedication
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column: Interactive Premium BMI Calculator */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full flex justify-center"
          >
            <BMICalculator onStartPlan={onStartPlan} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
