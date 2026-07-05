import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Sparkles, Code, Zap, Heart, CheckCircle2, Copy, Check } from 'lucide-react';

export function NexoraLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img
      src="/src/assets/images/regenerated_image_1783230023708.jpg"
      alt="Nexora Studio Logo"
      className={`${className} object-contain rounded-sm`}
      referrerPolicy="no-referrer"
    />
  );
}

export default function NexoraPromo() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('XTREME30');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-16 px-4 bg-brand-steel overflow-hidden border-t border-white/5">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-panel border border-white/10 rounded-sm p-6 sm:p-10 relative overflow-hidden shadow-2xl"
        >
          {/* Top subtle ribbon */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-orange to-brand-red text-white text-[9px] font-display font-black tracking-widest uppercase px-4 py-1.5 rounded-bl-sm">
            Exclusive Partner Offer
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Logo and Identity */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left flex-shrink-0">
              <div className="relative group">
                {/* Logo glow background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-red rounded-sm blur-md opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
                <div className="relative w-20 h-20 bg-brand-steel border border-white/10 flex items-center justify-center rounded-sm text-white group-hover:border-white/20 transition-all duration-300">
                  <NexoraLogo className="w-14 h-14" />
                </div>
              </div>
              <h3 className="mt-4 font-display font-black text-xl text-white tracking-widest uppercase flex items-center gap-1.5">
                NEXORA <span className="text-brand-orange">STUDIO</span>
              </h3>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-sans font-medium mt-1">
                WEB CREATION COMPANY
              </p>
            </div>

            {/* Content description */}
            <div className="flex-grow text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-xs font-sans font-bold text-brand-orange mb-4 uppercase tracking-wider">
                <Sparkles size={12} className="animate-pulse" />
                Need a High-Converting Website?
              </div>

              <h4 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none mb-3">
                Book Your Custom Website at <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-white">the Lowest Price</span>
              </h4>

              <p className="text-sm text-gray-400 font-sans leading-relaxed mb-6 max-w-2xl">
                Ready to attract more clients and supercharge your local business or personal brand? 
                <strong> Nexora Studio</strong> designs and builds lightning-fast, premium, mobile-optimized 
                websites that turn visitors into paying customers. Fully customized to your brand, 
                loaded with features, and completely hassle-free.
              </p>

              {/* Bullet points benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-gray-300 font-sans">
                <div className="flex items-center gap-2 justify-center md:justify-start flex-wrap">
                  <CheckCircle2 size={14} className="text-brand-orange flex-shrink-0" />
                  <span className="flex items-center gap-1.5 flex-wrap">
                    <span>30% OFF Special Discount</span>
                    <button
                      onClick={handleCopyCode}
                      className="inline-flex items-center gap-1 bg-brand-orange/15 hover:bg-brand-orange/25 text-brand-orange hover:text-white border border-brand-orange/35 hover:border-brand-orange/60 px-2 py-0.5 rounded text-[11px] font-mono font-black tracking-wider uppercase transition-all duration-300 transform active:scale-95 group/btn cursor-pointer shadow-sm shadow-brand-orange/5"
                      title="Click to copy coupon code"
                    >
                      <span>XTREME30</span>
                      {copied ? (
                        <Check size={10} className="text-green-400 animate-bounce" />
                      ) : (
                        <Copy size={10} className="opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                      )}
                    </button>
                    {copied && (
                      <span className="text-[10px] text-green-400 font-bold animate-pulse">
                        Copied!
                      </span>
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Zap size={14} className="text-brand-red flex-shrink-0" />
                  <span>Fast Delivery & Free SEO Optimization Included</span>
                </div>
              </div>

              {/* Call To Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a
                  href="https://nexora-studio-jet.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-orange to-brand-red text-white hover:from-brand-red hover:to-brand-orange font-display font-black text-sm tracking-wider uppercase px-8 py-3.5 rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-brand-orange/20"
                >
                  <Code size={16} />
                  Book Custom Website
                  <ExternalLink size={14} className="opacity-80" />
                </a>

                <a
                  href="https://nexora-studio-jet.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1 text-gray-400 hover:text-white font-sans text-xs font-bold uppercase tracking-wider py-2 transition-colors hover:underline underline-offset-4"
                >
                  View Our Portfolio
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
