import React from 'react';
import { MessageSquareCode } from 'lucide-react';

export default function WhatsAppButton() {
  const gymNumber = '919042295854'; // +91 90422 95854
  const defaultText = "Hello Xtreme Body! I visited your website and would like to inquire about membership options and trainers.";
  const waUrl = `https://wa.me/${gymNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip Label */}
      <span className="hidden sm:inline-block bg-brand-black/90 backdrop-blur-md text-white font-sans text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-sm border border-white/10 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none">
        Chat with us on WhatsApp
      </span>

      {/* Floating pulsing button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        title="WhatsApp Support"
        id="whatsapp-floating-cta"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full border-4 border-emerald-500/30 animate-ping pointer-events-none" />

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M9 14h6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z" />
        </svg>
      </a>
    </div>
  );
}
