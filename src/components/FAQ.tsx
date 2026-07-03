import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Clock, 
  CreditCard, 
  Dumbbell, 
  UserCheck, 
  MessageCircle, 
  X 
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'hours' | 'membership' | 'amenities' | 'coaching';
}

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'hours', label: 'Hours & Schedule', icon: Clock },
    { id: 'membership', label: 'Memberships & Pricing', icon: CreditCard },
    { id: 'amenities', label: 'Amenities & Equipment', icon: Dumbbell },
    { id: 'coaching', label: 'Coaching & Beginners', icon: UserCheck },
  ];

  const faqItems: FAQItem[] = [
    {
      question: "What are the gym operational timings?",
      answer: "We are open Monday through Saturday with two main shifts: Morning from 5:00 AM to 10:00 AM, and Evening from 4:00 PM to 9:30 PM. We are closed on Sundays to allow our coaches rest and conduct deep-cleaning of the facility.",
      category: 'hours',
    },
    {
      question: "Are there exclusive hours or training batches for women?",
      answer: "Yes! We run a dedicated, highly private ladies-only slot from 10:30 AM to 1:30 PM, Monday through Saturday. The session is supervised by our certified female fitness instructors to guarantee a safe, supportive, and comfortable environment.",
      category: 'hours',
    },
    {
      question: "Is the gym open during public or national holidays?",
      answer: "We observe major local and national festivals (such as Pongal and Diwali) which are notified well in advance to members via WhatsApp and on-premise notices. On minor holidays, we frequently run on a shortened single-shift morning schedule (6:00 AM to 11:00 AM).",
      category: 'hours',
    },
    {
      question: "What is the difference between the Basic and Elite membership plans?",
      answer: "Our Basic Strength plan is designed for self-guided lifters and includes access to all strength equipment, free weights, and standard cardio machines. The Elite Transformation plan is a premium package featuring a fully customized medical nutrition chart, advanced posture corrections, dedicated injury rehabilitation coaching, and monthly progress reports.",
      category: 'membership',
    },
    {
      question: "Can I pause, freeze, or transfer my membership?",
      answer: "Yes. For long-term memberships (6 months or annual packages), you can request to freeze or pause your subscription once for up to 15 days in case of travel, medical reasons, or emergencies. Simply notify the front desk or contact us on WhatsApp before your absence.",
      category: 'membership',
    },
    {
      question: "Do you offer a free trial or day-pass for newcomers?",
      answer: "We sure do! We invite all local residents of Rajapalayam to experience our facility first-hand. We offer a free 1-day pass which includes a full facility walkthrough, consultation with a trainer, and a trial workout session.",
      category: 'membership',
    },
    {
      question: "What range of strength and conditioning equipment do you provide?",
      answer: "Xtreme Body is equipped with premium-grade, heavy-duty commercial machines. We feature plate-loaded isolation stations, custom power racks, heavy dumbbell stacks ranging from 2.5kg up to 50kg, and high-performance cardio equipment including rowing machines and treadmills designed for athletic conditioning.",
      category: 'amenities',
    },
    {
      question: "Are there personal lockers and clean changing facilities available?",
      answer: "Yes, we prioritize hygiene and safety. We have clean, secure locker rooms where you can lock your personal belongings during workouts, separate changing compartments, and fully maintained restrooms for men and women.",
      category: 'amenities',
    },
    {
      question: "Is there dedicated parking available at the gym?",
      answer: "Absolutely. We have safe, dedicated two-wheeler parking directly in front of our facility, and ample street-side parking space for cars. The premises are under 24/7 CCTV surveillance for added peace of mind.",
      category: 'amenities',
    },
    {
      question: "I am a total beginner with zero lifting experience. Will someone help me?",
      answer: "Without a doubt! Every new member receives a personalized onboarding orientation. A certified coach will guide you through machine setups, explain proper lifting mechanics, teach safety guidelines, and outline a custom starter workout routine so you can build confidence safely.",
      category: 'coaching',
    },
    {
      question: "Do you offer customized meal charts or diet plans?",
      answer: "Yes. Proper nutrition is 80% of your results. Under our Elite coaching programs or as a separate add-on, our certified sports nutritionists design highly tailored diet schedules focused on your body type, daily energy expenditure, and fitness goals (whether fat loss, muscle gain, or therapeutic recovery).",
      category: 'coaching',
    },
    {
      question: "Do you provide sports injury rehabilitation training?",
      answer: "Yes, injury rehab is one of our specialty fields. Our head coaches work closely with members recovering from joint pain, ligament tears, or postural defects, designing progressive resistance routines to rebuild tendon strength and range of motion safely.",
      category: 'coaching',
    }
  ];

  // Filter FAQs based on category selection and search bar text
  const filteredFAQs = useMemo(() => {
    return faqItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative py-24 bg-brand-black border-t border-white/5 overflow-hidden"
    >
      {/* Dynamic Background Glow Details */}
      <div className="absolute top-1/4 left-1/10 w-[320px] h-[320px] rounded-full bg-brand-red/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[300px] h-[300px] rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-brand-red/10 border border-brand-red/20 px-3.5 py-1 rounded-full text-xs font-bold text-brand-red uppercase tracking-widest mb-4"
          >
            <HelpCircle size={12} />
            Common Inquiries
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mb-4"
          >
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base font-sans max-w-xl mx-auto"
          >
            Find quick answers to common questions about our facilities, batch schedules, personal coaching, and membership rules.
          </motion.p>
        </div>

        {/* Search Bar Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative max-w-lg mx-auto mb-10"
        >
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-gray-500" size={18} />
            <input
              type="text"
              id="faq-search-input"
              placeholder="Search questions (e.g. 'timing', 'pause', 'beginners')..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setOpenIndex(null); // Reset open states on search to avoid misalignment
              }}
              className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-brand-orange text-white text-sm pl-11 pr-10 py-3.5 rounded-sm outline-none transition-all duration-200 placeholder-gray-500 font-sans"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 text-gray-500 hover:text-white p-1 rounded-full transition-colors"
                id="clear-faq-search"
                title="Clear Search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Categories Tab Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`faq-tab-${cat.id}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(null); // Reset accordion open state on tab shift
                }}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 border cursor-pointer ${
                  isActive 
                    ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/15' 
                    : 'bg-white/5 border-white/5 hover:border-white/15 text-gray-400 hover:text-white'
                }`}
              >
                <Icon size={14} />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredFAQs.length > 0 ? (
              <motion.div
                key={activeCategory + '-' + searchTerm}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                {filteredFAQs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div 
                      key={index} 
                      className="border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-sm overflow-hidden"
                      id={`faq-item-container-${index}`}
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between text-left px-5 py-5 sm:px-6 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-brand-orange"
                        id={`faq-question-btn-${index}`}
                        aria-expanded={isOpen}
                      >
                        <span className="font-display font-bold text-sm sm:text-base text-white tracking-wide pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          size={18} 
                          className={`text-brand-orange flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-brand-red' : ''
                          }`} 
                        />
                      </button>

                      {/* Accordion Smooth Expansion */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                          >
                            <div className="px-5 pb-5 sm:px-6 sm:pb-6 border-t border-white/5 text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 border border-dashed border-white/10 rounded-sm bg-white/[0.01]"
              >
                <HelpCircle size={32} className="mx-auto text-gray-600 mb-3" />
                <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider">No matching answers found</h4>
                <p className="text-gray-500 text-xs font-sans mt-1">Try adjusting your keywords or browse other category tabs.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="mt-4 px-4 py-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase rounded-sm border border-white/10 transition-colors"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Call to Action Support Footer inside FAQ */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 bg-gradient-to-r from-brand-red/10 to-brand-orange/10 border border-brand-red/20 rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h3 className="font-display font-black text-base sm:text-lg text-white uppercase tracking-wider">
              Still Have Unanswered Questions?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-sans mt-1 max-w-md">
              Speak directly with our head trainers or reception desk for customized queries or special batch configurations.
            </p>
          </div>
          
          <a
            href="https://wa.me/919042295854?text=Hi%20Xtreme%20Body%20Gym!%20I%20have%20a%20question%20about%20your%20memberships%20and%20timings."
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/95 text-white font-display font-black text-xs sm:text-sm tracking-widest uppercase px-6 py-3.5 rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-brand-orange/10 hover:shadow-brand-orange/20 flex-shrink-0"
            id="faq-whatsapp-btn"
          >
            <MessageCircle size={16} />
            Ask via WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
