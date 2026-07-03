import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, Layers, Dumbbell, Users, Eye, Home } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'equipment' | 'workout' | 'group' | 'interior'>('all');

  const categories = [
    { label: 'All', id: 'all', icon: <Layers size={13} /> },
    { label: 'Equipment', id: 'equipment', icon: <Dumbbell size={13} /> },
    { label: 'Workouts', id: 'workout', icon: <Eye size={13} /> },
    { label: 'Classes', id: 'group', icon: <Users size={13} /> },
    { label: 'Interior', id: 'interior', icon: <Home size={13} /> },
  ] as const;

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="relative bg-brand-steel py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-transparent to-brand-black/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-brand-orange text-xs font-sans font-bold tracking-[0.22em] uppercase mb-3">
            <span className="w-6 h-[1.5px] bg-brand-orange" />
            Photo Gallery
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            THE XTREME <span className="text-brand-red">ARENA</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 font-sans leading-relaxed">
            Our clean, professional environment is optimized for serious athletes and wellness-seekers alike. Take a virtual walk through our floor.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-lg mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-display font-bold tracking-wider uppercase rounded-full transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-brand-red text-white shadow-lg'
                  : 'bg-brand-panel text-gray-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: GalleryItem, index: number) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-brand-panel border border-white/5 rounded-sm overflow-hidden h-[260px] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 filter contrast-110 saturate-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Caption Details - slide up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none">
                  <span className="text-[9px] font-sans font-black tracking-widest uppercase text-brand-orange">
                    {item.category}
                  </span>
                  <h4 className="font-display font-black text-lg text-white uppercase tracking-wider mt-1 leading-tight">
                    {item.title}
                  </h4>
                </div>

                {/* Zoom icon hint */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-red/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow">
                  <Image size={14} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
