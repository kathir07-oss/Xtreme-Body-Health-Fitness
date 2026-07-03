import React from 'react';
import { motion } from 'motion/react';
import { Award, Zap, HeartPulse, GraduationCap } from 'lucide-react';
import { TRAINERS } from '../data';
import { Trainer } from '../types';

export default function TrainerProfiles() {
  return (
    <section id="trainers" className="relative bg-brand-steel py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 via-transparent to-brand-black/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-brand-orange text-xs font-sans font-bold tracking-[0.22em] uppercase mb-3">
            <span className="w-6 h-[1.5px] bg-brand-orange" />
            Elite Coaching Staff
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            MEET YOUR <span className="text-brand-red">COACHES</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 font-sans leading-relaxed">
            Every coach at Xtreme Body has proven clinical or championship-level credentials. No amateur advice — only verified scientific programs.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TRAINERS.map((trainer: Trainer, index: number) => {
            return (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-brand-panel border border-white/5 overflow-hidden rounded-sm hover:border-brand-orange/20 transition-all duration-300"
              >
                {/* Image Container with Hover zoom */}
                <div className="relative h-[320px] overflow-hidden bg-brand-steel">
                  <img
                    src={trainer.photoUrl}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out grayscale group-hover:grayscale-0 filter contrast-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-panel via-brand-panel/10 to-transparent opacity-80" />

                  {/* Specialization Badge inside Photo */}
                  <div className="absolute bottom-4 left-4 bg-brand-red text-white font-display font-bold text-xs tracking-widest uppercase px-3 py-1.5 rounded-sm shadow-md">
                    {trainer.specialization}
                  </div>
                </div>

                {/* Trainer Meta Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide">
                      {trainer.name}
                    </h3>
                    <span className="flex-shrink-0 inline-block bg-white/5 border border-white/10 text-brand-orange font-sans text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-sm">
                      {trainer.experience}
                    </span>
                  </div>

                  <p className="text-gray-400 font-sans text-xs leading-relaxed mb-6">
                    {trainer.bio}
                  </p>

                  {/* Certifications list */}
                  <div className="border-t border-white/5 pt-4">
                    <h4 className="flex items-center gap-1.5 text-[10px] font-sans font-black tracking-widest uppercase text-brand-orange mb-3">
                      <GraduationCap size={13} />
                      Certifications & Badges
                    </h4>
                    <ul className="space-y-2">
                      {trainer.certifications.map((cert, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-red" />
                          <span className="text-gray-300 font-sans text-[11px] leading-snug">
                            {cert}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
