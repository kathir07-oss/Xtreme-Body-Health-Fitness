import React from 'react';
import { MapPin } from 'lucide-react';

export default function GoogleMap() {
  // Real coordinates / address search for FH45+4JF Rajapalayam Tamil Nadu
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.53974465451!2d77.562305!3d9.44421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06ee29f3333e6f%3A0xc3f12bb0e71607e4!2sAdhrith%20Hospital!5e0!3m2!1sen!2sin!4v1719912000000!5m2!1sen!2sin";

  return (
    <section id="map-location" className="relative w-full h-[380px] sm:h-[450px] bg-brand-black overflow-hidden border-t border-white/5">
      {/* Background Frame design */}
      <div className="absolute inset-0 z-0">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(1) contrast(1.15) opacity(0.85)' }}
          allowFullScreen={false}
          loading="lazy"
          title="Xtreme Body Gym Rajapalayam Map"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale"
        />
      </div>

      {/* Floated Location Badge Info Panel */}
      <div className="absolute top-6 left-4 right-4 sm:left-8 sm:right-auto z-10 max-w-sm bg-brand-black/95 backdrop-blur-md p-6 rounded-sm border border-white/10 shadow-2xl">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center flex-shrink-0">
            <MapPin size={18} />
          </div>
          <div>
            <h4 className="font-display font-black text-lg text-white uppercase tracking-wider">
              XTREME BODY ARENA
            </h4>
            <p className="text-gray-400 font-sans text-xs mt-1 leading-relaxed">
              FH45+4JF, Opposite Adhrith Hospital,<br />
              Behind Seeni Mahal, Rajapalayam,<br />
              Tamil Nadu 626117, India
            </p>
            <div className="h-px bg-white/5 my-3" />
            <div className="flex justify-between items-center text-[10px] text-gray-500 font-sans font-bold uppercase tracking-wider">
              <span>Landmark:</span>
              <span className="text-brand-orange">Seeni Mahal Backside</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
