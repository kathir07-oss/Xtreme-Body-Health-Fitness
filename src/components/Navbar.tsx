import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Mail } from 'lucide-react';

interface NavbarProps {
  onScrollToSection: (id: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Plans', id: 'plans' },
    { label: 'Trainers', id: 'trainers' },
    { label: 'Success Stories', id: 'transformations' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onScrollToSection(id);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-black border-b border-white/10 shadow-lg ${
        scrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-display font-black text-2xl tracking-wider text-white">
              XTREME <span className="text-brand-orange group-hover:text-brand-red transition-colors duration-300">BODY</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className="text-gray-400 hover:text-white font-sans text-xs font-semibold tracking-widest uppercase transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/xtreme_body.in?igsh=cWxrZG9iNXExdG02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                title="Instagram Profile"
              >
                <Instagram size={16} />
              </a>
              <a
                href="tel:+919042295854"
                className="flex items-center gap-2 bg-brand-red text-white hover:bg-brand-orange font-display font-extrabold text-xs tracking-widest uppercase px-4 py-2.5 rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-brand-red/20"
                id="call-now-nav-btn"
              >
                <Phone size={13} />
                Call Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2 rounded focus:outline-none"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-brand-black border-t border-white/10 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 space-y-6 flex flex-col justify-between h-[calc(100vh-60px)]">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id} className="border-b border-white/5 pb-3">
                <button
                  onClick={() => handleItemClick(item.id)}
                  className="w-full text-left text-gray-300 hover:text-white font-display text-lg font-bold tracking-wider uppercase transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="space-y-4 pb-12">
            <a
              href="tel:+919042295854"
              className="flex items-center justify-center gap-2 w-full bg-brand-red text-white font-display font-extrabold text-sm tracking-widest uppercase py-3.5 rounded-sm transition-colors shadow-lg"
            >
              <Phone size={15} />
              Call +91 90422 95854
            </a>

            <div className="flex flex-col gap-2.5 pt-2 border-t border-white/5">
              <a 
                href="mailto:xtremebody.in@gmail.com"
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={13} className="text-brand-orange" />
                <span className="break-all">xtremebody.in@gmail.com</span>
              </a>
              <a 
                href="https://www.instagram.com/xtreme_body.in?igsh=cWxrZG9iNXExdG02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={13} className="text-brand-red" />
                <span>@xtreme_body.in</span>
              </a>
            </div>

            <div className="text-center text-[10px] text-gray-500 uppercase tracking-widest pt-1">
              Opposite Adhrith Hospital, Rajapalayam
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
