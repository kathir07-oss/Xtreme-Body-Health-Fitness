import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import GymAnimation from './components/GymAnimation';
import MembershipPlans from './components/MembershipPlans';
import TrainerProfiles from './components/TrainerProfiles';
import SuccessStories from './components/SuccessStories';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import GoogleMap from './components/GoogleMap';
import NexoraPromo from './components/NexoraPromo';
import WhatsAppButton from './components/WhatsAppButton';
import { Sparkles, HeartPulse, Award, MessageCircle, MapPin, Phone, Shield, Mail, Instagram } from 'lucide-react';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState('');
  const [leadRefreshKey, setLeadRefreshKey] = useState(0);

  // Smooth scroll handler
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Select membership plan callback to scroll and select in Form
  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    handleScrollToSection('contact');
    // Focus the full name input field after smooth scrolling completes
    setTimeout(() => {
      const nameInput = document.querySelector('input[placeholder="Your Name"]') as HTMLInputElement;
      if (nameInput) {
        nameInput.focus();
      }
    }, 800);
  };

  const handleJoinNow = () => {
    setSelectedPlanId('general-inquiry');
    handleScrollToSection('contact');
    // Focus the full name input field after smooth scrolling completes
    setTimeout(() => {
      const nameInput = document.querySelector('input[placeholder="Your Name"]') as HTMLInputElement;
      if (nameInput) {
        nameInput.focus();
      }
    }, 800);
  };

  const handleStartPlan = (planId: string) => {
    setSelectedPlanId(planId);
    handleScrollToSection('contact');
    // Focus the full name input field after smooth scrolling completes
    setTimeout(() => {
      const nameInput = document.querySelector('input[placeholder="Your Name"]') as HTMLInputElement;
      if (nameInput) {
        nameInput.focus();
      }
    }, 800);
  };

  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-red selection:text-white overflow-x-hidden antialiased">
      {/* Dynamic Navbar */}
      <Navbar
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Sections Flow */}
      <main>
        {/* 1. Hero Section with 3D Wireframe Simulation (Animate on load) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Hero
            onScrollToSection={handleScrollToSection}
            onJoinNow={handleJoinNow}
            onStartPlan={handleStartPlan}
          />
        </motion.div>

        {/* Dynamic Specializations Ticker */}
        <Ticker />

        {/* 2. Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "-30px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Services />
        </motion.div>

        {/* Dynamic Lifting Gym Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <GymAnimation />
        </motion.div>

        {/* 3. Membership Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "-30px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <MembershipPlans onSelectPlan={handleSelectPlan} />
        </motion.div>

        {/* 4. Trainer Profiles Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "-30px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <TrainerProfiles />
        </motion.div>

        {/* 5. Success Stories with interactive Before/After sliders */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "-30px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SuccessStories />
        </motion.div>

        {/* 6. Gym Arena Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "-30px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Gallery />
        </motion.div>

        {/* 7. Frequently Asked Questions Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "-30px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <FAQ />
        </motion.div>

        {/* 8. Booking & Lead Capture Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "-30px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ContactForm
            selectedPlanId={selectedPlanId}
            onLeadAdded={() => setLeadRefreshKey((k) => k + 1)}
          />
        </motion.div>

        {/* 8. Integrated Google Map of Gym Location */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "-30px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <GoogleMap />
        </motion.div>

        {/* 9. Nexora Studio Promotional Campaign */}
        <NexoraPromo />
      </main>

      {/* Footer Section */}
      <footer className="relative bg-[#050505] border-t border-white/5 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-1/4 w-[280px] h-[280px] rounded-full bg-brand-orange/5 blur-[70px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/5">
            {/* Logo and Tagline */}
            <div className="md:col-span-2">
              <span className="font-display font-black text-2xl tracking-wider uppercase text-white">
                XTREME <span className="text-brand-orange">BODY</span>
              </span>
              <p className="mt-4 text-xs sm:text-sm text-gray-400 font-sans leading-relaxed max-w-sm">
                The premier strength training, bodybuilding, and injury rehabilitation hub in Rajapalayam, Tamil Nadu. Delivering certified results for over a decade.
              </p>
              
              <div className="mt-6 flex items-center gap-3">
                <span className="text-[10px] text-gray-500 font-sans font-bold uppercase tracking-wider">
                  Verified Local Partner:
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded-sm text-[10px] text-brand-orange font-bold font-sans uppercase">
                  <Award size={10} />
                  10+ Years
                </span>
              </div>
            </div>

            {/* Quick Navigation Anchor Links */}
            <div>
              <h4 className="font-display font-black text-xs sm:text-sm text-white uppercase tracking-widest mb-4">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-sans text-gray-400">
                <li>
                  <button
                    onClick={() => handleScrollToSection('services')}
                    className="hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    Gym Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection('plans')}
                    className="hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    Pricing Plans
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection('trainers')}
                    className="hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    Meet Coaches
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection('transformations')}
                    className="hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    Success Stories
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection('gallery')}
                    className="hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    Virtual Walkthrough
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection('faq')}
                    className="hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    Common FAQs
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Details Quick Summary */}
            <div>
              <h4 className="font-display font-black text-xs sm:text-sm text-white uppercase tracking-widest mb-4">
                Direct Contact
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-sans text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone size={13} className="text-brand-red mt-1 flex-shrink-0" />
                  <a href="tel:+919042295854" className="hover:text-white transition-colors">
                    +91 90422 95854
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={13} className="text-brand-orange mt-1 flex-shrink-0" />
                  <a href="mailto:xtremebody.in@gmail.com" className="hover:text-white transition-colors break-all">
                    xtremebody.in@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Instagram size={13} className="text-brand-red mt-1 flex-shrink-0" />
                  <a 
                    href="https://www.instagram.com/xtreme_body.in?igsh=cWxrZG9iNXExdG02" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors break-all"
                  >
                    @xtreme_body.in
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={13} className="text-brand-orange mt-1 flex-shrink-0" />
                  <span className="leading-snug">
                    Opposite Adhrith Hospital,<br />
                    Behind Seeni Mahal,<br />
                    Rajapalayam, TN 626117
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Credentials and Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/5">
            <p className="text-[10px] text-gray-600 font-sans tracking-wide">
              © {new Date().getFullYear()} XTREME BODY HEALTH AND FITNESS — All rights reserved.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[10px] text-gray-500 font-sans">
              <span className="uppercase tracking-widest text-gray-600">
                Rajapalayam, India
              </span>
              <span className="text-gray-700 hidden sm:inline">|</span>
              <span className="text-gray-500 text-center sm:text-right">
                This website is created by{' '}
                <a 
                  href="https://nexora-studio-jet.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-orange hover:text-brand-red font-bold transition-all duration-300 underline underline-offset-2 decoration-brand-orange/30 hover:decoration-brand-red/60"
                >
                  Nexora Studio
                </a>{' '}
                (WEB CREATION COMPANY)
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating pulsing WhatsApp Support Widget */}
      <WhatsAppButton />
    </div>
  );
}
