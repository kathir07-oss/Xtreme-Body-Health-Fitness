import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone as PhoneIcon, Target, CheckCircle2, MessageSquare, MapPin, Mail, Instagram } from 'lucide-react';
import { GymLead } from '../types';

interface ContactFormProps {
  selectedPlanId: string;
  onLeadAdded?: () => void;
}

export default function ContactForm({ selectedPlanId, onLeadAdded }: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('Weight Loss');
  const [plan, setPlan] = useState('general-inquiry');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('Evening Slot (5:00 PM - 9:00 PM)');

  const [submittedLead, setSubmittedLead] = useState<GymLead | null>(null);
  const [error, setError] = useState('');

  // Synchronize chosen plan ID when selected in Membership Plans section
  useEffect(() => {
    if (selectedPlanId) {
      setPlan(selectedPlanId);
      // Scroll to the contact form cleanly
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [selectedPlanId]);

  // Pre-fill tomorrow's date by default
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setBookingDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Quick Validation
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setError('Please provide a valid 10-digit mobile phone number.');
      return;
    }
    if (!bookingDate) {
      setError('Please select a booking date.');
      return;
    }

    const newLead: GymLead = {
      id: `lead-${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      fitnessGoal,
      bookingDate,
      bookingTime,
      selectedPlan: plan,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    // Save lead to LocalStorage
    try {
      const existingLeadsStr = localStorage.getItem('xtreme_gym_leads');
      const existingLeads = existingLeadsStr ? JSON.parse(existingLeadsStr) : [];
      existingLeads.unshift(newLead);
      localStorage.setItem('xtreme_gym_leads', JSON.stringify(existingLeads));
      
      setSubmittedLead(newLead);
      if (onLeadAdded) onLeadAdded();

      // Clear fields
      setName('');
      setPhone('');
    } catch (e) {
      setError('Failed to book. Please check storage permissions.');
    }
  };

  // Build a WhatsApp link for Tamil Nadu contact preference
  const getWhatsAppLink = (lead: GymLead) => {
    const gymNumber = '919042295854'; // +91 90422 95854
    const message = `Hello Xtreme Body! I just scheduled a session on your website.\n\n*Name:* ${lead.name}\n*Phone:* ${lead.phone}\n*Fitness Goal:* ${lead.fitnessGoal}\n*Chosen Plan:* ${lead.selectedPlan.toUpperCase()}\n*Requested Date:* ${lead.bookingDate}\n*Time Slot:* ${lead.bookingTime}\n\nPlease confirm my booking! Thank you.`;
    return `https://wa.me/${gymNumber}?text=${encodeURIComponent(message)}`;
  };

  const getPlanLabel = (id: string) => {
    switch (id) {
      case 'basic': return 'Basic Strength';
      case 'premium': return 'Premium Recovery';
      case 'personal-training': return 'Elite Personal Training';
      case 'general-inquiry': return 'General Consultation';
      default: return 'Membership Inquiry';
    }
  };

  // Determine current day to highlight today's timings
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[new Date().getDay()];

  return (
    <section id="contact" className="relative bg-brand-steel py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/5 via-transparent to-brand-orange/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Timings & Gym Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-brand-orange text-xs font-sans font-bold tracking-[0.22em] uppercase mb-3">
                <span className="w-6 h-[1.5px] bg-brand-orange" />
                Timings & Location
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mb-6">
                WE ARE ALWAYS <br />
                <span className="text-brand-red">OPEN FOR YOU</span>
              </h2>

              {/* Working Hours Table */}
              <div className="bg-brand-panel p-6 border border-white/5 rounded-sm mb-6">
                <h3 className="font-display font-bold text-sm tracking-widest text-gray-400 uppercase mb-4 border-b border-white/5 pb-2">
                  Operating Hours
                </h3>
                <table className="w-full text-xs sm:text-sm font-sans">
                  <tbody>
                    <tr className={`border-b border-white/5 ${currentDay === 'Monday' ? 'text-brand-orange font-bold' : 'text-gray-300'}`}>
                      <td className="py-2.5">Monday</td>
                      <td className="py-2.5 text-right">5:00 AM – 9:00 PM</td>
                    </tr>
                    <tr className={`border-b border-white/5 ${currentDay === 'Tuesday' ? 'text-brand-orange font-bold' : 'text-gray-300'}`}>
                      <td className="py-2.5">Tuesday</td>
                      <td className="py-2.5 text-right">5:00 AM – 9:00 PM</td>
                    </tr>
                    <tr className={`border-b border-white/5 ${currentDay === 'Wednesday' ? 'text-brand-orange font-bold' : 'text-gray-300'}`}>
                      <td className="py-2.5">Wednesday</td>
                      <td className="py-2.5 text-right">5:00 AM – 9:00 PM</td>
                    </tr>
                    <tr className={`border-b border-white/5 ${currentDay === 'Thursday' ? 'text-brand-orange font-bold' : 'text-gray-300'}`}>
                      <td className="py-2.5">Thursday</td>
                      <td className="py-2.5 text-right">5:00 AM – 9:00 PM</td>
                    </tr>
                    <tr className={`border-b border-white/5 ${currentDay === 'Friday' ? 'text-brand-orange font-bold' : 'text-gray-300'}`}>
                      <td className="py-2.5">Friday</td>
                      <td className="py-2.5 text-right">5:00 AM – 9:00 PM</td>
                    </tr>
                    <tr className={`border-b border-white/5 ${currentDay === 'Saturday' ? 'text-brand-orange font-bold' : 'text-gray-300'}`}>
                      <td className="py-2.5">Saturday</td>
                      <td className="py-2.5 text-right">5:00 AM – 9:00 PM</td>
                    </tr>
                    <tr className={`${currentDay === 'Sunday' ? 'text-brand-orange font-bold' : 'text-gray-300'}`}>
                      <td className="py-2.5">Sunday</td>
                      <td className="py-2.5 text-right">7:00 AM – 9:00 AM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Gym Location Panel */}
            <div className="bg-brand-panel p-6 border-l-4 border-brand-red rounded-sm space-y-6">
              <div>
                <h4 className="flex items-center gap-2 font-display font-bold text-base text-white uppercase tracking-wider mb-2">
                  <MapPin size={18} className="text-brand-red" />
                  Xtreme Body Gym location
                </h4>
                <p className="text-gray-400 font-sans text-xs sm:text-sm leading-relaxed mb-3">
                  FH45+4JF, Opposite Adhrith Hospital, Behind Seeni Mahal, Rajapalayam, Tamil Nadu 626117, India
                </p>
                <a
                  href="https://maps.google.com/?q=XTREME+BODY+HEALTH+AND+FITNESS+Rajapalayam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-brand-orange hover:text-brand-red text-xs font-sans font-bold uppercase tracking-wider transition-colors"
                >
                  Open Google Maps Directions →
                </a>
              </div>

              <div className="border-t border-white/5 pt-4 space-y-3">
                <h5 className="font-display font-bold text-xs text-white uppercase tracking-widest mb-1">
                  Online Channels
                </h5>
                <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-sans text-gray-400">
                  <a 
                    href="mailto:xtremebody.in@gmail.com" 
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail size={14} className="text-brand-orange flex-shrink-0" />
                    <span className="break-all">xtremebody.in@gmail.com</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/xtreme_body.in?igsh=cWxrZG9iNXExdG02" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Instagram size={14} className="text-brand-red flex-shrink-0" />
                    <span>@xtreme_body.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form OR Success Screen */}
          <div className="lg:col-span-7">
            <div className="bg-brand-panel p-8 border border-white/10 rounded-sm h-full flex flex-col justify-center">
              
              {!submittedLead ? (
                // Form UI
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide">
                      BOOK A CONSULTATION
                    </h3>
                    <p className="text-gray-400 font-sans text-xs sm:text-sm mt-1 leading-relaxed">
                      Fill out your details to schedule an assessment. One of our elite trainers will contact you within 2 hours.
                    </p>
                  </div>

                  {error && (
                    <div className="bg-brand-red/10 border border-brand-red/30 p-3 text-brand-orange text-xs font-sans font-semibold rounded-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="relative">
                      <label className="block text-[10px] font-sans font-black tracking-wider uppercase text-gray-500 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                          <User size={14} />
                        </span>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full bg-brand-steel border border-white/10 focus:border-brand-orange focus:outline-none rounded-sm py-3.5 pl-9 pr-4 text-white text-xs sm:text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Input */}
                    <div className="relative">
                      <label className="block text-[10px] font-sans font-black tracking-wider uppercase text-gray-500 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                          <PhoneIcon size={14} />
                        </span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                          maxLength={11}
                          placeholder="10-Digit Mobile Number"
                          className="w-full bg-brand-steel border border-white/10 focus:border-brand-orange focus:outline-none rounded-sm py-3.5 pl-9 pr-4 text-white text-xs sm:text-sm transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Fitness Goal Select */}
                    <div>
                      <label className="block text-[10px] font-sans font-black tracking-wider uppercase text-gray-500 mb-1">
                        Fitness Goal
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-none">
                          <Target size={14} />
                        </span>
                        <select
                          value={fitnessGoal}
                          onChange={(e) => setFitnessGoal(e.target.value)}
                          className="w-full bg-brand-steel border border-white/10 focus:border-brand-orange focus:outline-none rounded-sm py-3.5 pl-9 pr-4 text-white text-xs sm:text-sm appearance-none cursor-pointer"
                        >
                          <option value="Weight Loss">Weight Loss & Conditioning</option>
                          <option value="Bodybuilding">Muscle Building & Bodybuilding</option>
                          <option value="Physiotherapy / Rehab">Injury Rehabilitation</option>
                          <option value="Yoga & Core">Functional Yoga & Flexibility</option>
                          <option value="General Health">General Strength Training</option>
                        </select>
                      </div>
                    </div>

                    {/* Selected Plan */}
                    <div>
                      <label className="block text-[10px] font-sans font-black tracking-wider uppercase text-gray-500 mb-1">
                        Desired Membership Plan
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-none">
                          <CheckCircle2 size={14} />
                        </span>
                        <select
                          value={plan}
                          onChange={(e) => setPlan(e.target.value)}
                          className="w-full bg-brand-steel border border-white/10 focus:border-brand-orange focus:outline-none rounded-sm py-3.5 pl-9 pr-4 text-white text-xs sm:text-sm appearance-none cursor-pointer"
                        >
                          <option value="general-inquiry">General Consultation & Assessment</option>
                          <option value="basic">Basic Strength (₹1,200/Mo)</option>
                          <option value="premium">Premium Recovery (₹2,500/Mo)</option>
                          <option value="personal-training">Elite Personal Training (₹6,000/Mo)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Booking Date */}
                    <div>
                      <label className="block text-[10px] font-sans font-black tracking-wider uppercase text-gray-500 mb-1">
                        Preferred Start Date
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-none">
                          <Calendar size={14} />
                        </span>
                        <input
                          type="date"
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full bg-brand-steel border border-white/10 focus:border-brand-orange focus:outline-none rounded-sm py-3.5 pl-9 pr-4 text-white text-xs sm:text-sm cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Booking Time */}
                    <div>
                      <label className="block text-[10px] font-sans font-black tracking-wider uppercase text-gray-500 mb-1">
                        Preferred Training Slot
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 pointer-events-none">
                          <Clock size={14} />
                        </span>
                        <select
                          value={bookingTime}
                          onChange={(e) => setBookingTime(e.target.value)}
                          className="w-full bg-brand-steel border border-white/10 focus:border-brand-orange focus:outline-none rounded-sm py-3.5 pl-9 pr-4 text-white text-xs sm:text-sm appearance-none cursor-pointer"
                        >
                          <option value="Early Morning (5:00 AM - 8:00 AM)">Early Morning (5:00 AM - 8:00 AM)</option>
                          <option value="Late Morning (8:00 AM - 11:00 AM)">Late Morning (8:00 AM - 11:00 AM)</option>
                          <option value="Evening Slot (5:00 PM - 9:00 PM)">Evening Slot (5:00 PM - 9:00 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-red to-brand-orange text-white py-4 font-display font-black text-sm tracking-widest uppercase rounded-sm transition-transform active:scale-98 shadow-lg shadow-brand-red/20 hover:opacity-95 cursor-pointer mt-4"
                  >
                    Submit Booking Request
                  </button>
                </form>
              ) : (
                // Success Message UI
                <div className="text-center space-y-6 py-6">
                  <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange flex items-center justify-center rounded-full mx-auto border border-brand-orange/20 animate-bounce">
                    <CheckCircle2 size={36} />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-3xl text-white uppercase tracking-wide">
                      BOOKING SUBMITTED!
                    </h3>
                    <p className="text-gray-300 font-sans text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
                      Thanks, <strong className="text-white">{submittedLead.name}</strong>! Your request has been logged. We have reserved your slot on <strong className="text-white">{submittedLead.bookingDate}</strong>.
                    </p>
                  </div>

                  <div className="bg-brand-steel p-4 border border-white/5 rounded-sm max-w-sm mx-auto text-left space-y-2 text-xs text-gray-400 font-sans">
                    <div><strong>Plan:</strong> {getPlanLabel(submittedLead.selectedPlan)}</div>
                    <div><strong>Goal:</strong> {submittedLead.fitnessGoal}</div>
                    <div><strong>Time Slot:</strong> {submittedLead.bookingTime}</div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <a
                      href={getWhatsAppLink(submittedLead)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs tracking-wider uppercase py-3 rounded-sm shadow-md transition-colors"
                    >
                      <MessageSquare size={14} />
                      Confirm on WhatsApp
                    </a>
                    
                    <button
                      onClick={() => setSubmittedLead(null)}
                      className="flex-1 bg-white/5 hover:bg-white/10 text-gray-300 font-display font-bold text-xs tracking-wider uppercase py-3 rounded-sm border border-white/10 transition-colors"
                    >
                      Book Another Slot
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
