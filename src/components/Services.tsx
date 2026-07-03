import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Users, Leaf, HeartPulse, Flame, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Dumbbell className="text-brand-orange" size={28} />,
      title: 'Personal Training',
      description: 'One-on-one sessions engineered around your goals. Our experienced trainers build custom programs that fit your body type, physical strength, and lifestyle.',
      highlight: 'Customized workouts & diet templates'
    },
    {
      icon: <Users className="text-brand-red" size={28} />,
      title: 'Group Exercises',
      description: 'High-energy collective workouts that keep you motivated. Train alongside a community of like-minded individuals who push you further than you\'d go alone.',
      highlight: 'Calisthenics, HIIT & aerobics'
    },
    {
      icon: <Leaf className="text-brand-orange" size={28} />,
      title: 'Yoga & Mindset',
      description: 'Build flexibility, postural correction, mental resilience, and joint stability. Structured, calm sessions led by certified functional instructors.',
      highlight: 'Vinyasa, flexibility & breath control'
    },
    {
      icon: <HeartPulse className="text-brand-red" size={28} />,
      title: 'Physiotherapy & Rehab',
      description: 'Professional sports medicine, injury recovery, joint decompression, and pain management. Get back to absolute top condition safely with certified PT guidance.',
      highlight: 'Post-injury rehabilitation'
    },
    {
      icon: <Flame className="text-brand-orange" size={28} />,
      title: 'Steam & Sauna Recovery',
      description: 'Relax, detoxify, and accelerate metabolic clearance. Our high-grade steam facilities increase circulation, relieve muscle soreness, and maximize growth.',
      highlight: 'Contrast thermal therapy'
    },
    {
      icon: <Zap className="text-brand-red" size={28} />,
      title: 'Bodybuilding & Weight Loss',
      description: 'Whether your target is raw hypertrophic mass or clinical body fat reduction, we provide the ultimate equipment array, coaching, and nutrition accountability.',
      highlight: 'Precision body composition tracking'
    },
  ];

  return (
    <section id="services" className="relative bg-brand-steel py-20 px-4 sm:px-6 lg:px-8">
      {/* Top Background mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-transparent to-brand-black/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center md:text-left md:flex justify-between items-end border-b border-white/5 pb-10 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-brand-orange text-xs font-sans font-bold tracking-[0.22em] uppercase mb-3">
              <span className="w-6 h-[1.5px] bg-brand-orange" />
              What We Do
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-none">
              TRAIN SMARTER.<br />
              <span className="text-brand-red">RECOVER FASTER.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-gray-400 font-sans leading-relaxed max-w-sm">
            From heavy Olympic lifting to medical injury recovery, we provide the full spectrum of bodily development, recovery, and rehabilitation.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-brand-panel p-8 rounded-sm border border-white/5 overflow-hidden hover:bg-[#222] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-red to-brand-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              <div>
                <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-red/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wider mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-sans text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <span className="text-[10px] font-sans font-semibold tracking-wider text-brand-orange uppercase">
                  {service.highlight}
                </span>
                <span className="text-xs text-gray-500 group-hover:text-white transition-colors">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
