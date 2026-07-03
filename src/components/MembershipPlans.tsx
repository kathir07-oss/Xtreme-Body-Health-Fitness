import React from 'react';
import { motion } from 'motion/react';
import { Check, Flame, Trophy, ShieldAlert } from 'lucide-react';
import { PLANS } from '../data';
import { Plan } from '../types';

interface MembershipPlansProps {
  onSelectPlan: (planId: string) => void;
}

export default function MembershipPlans({ onSelectPlan }: MembershipPlansProps) {
  return (
    <section id="plans" className="relative bg-brand-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-brand-orange/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-brand-orange text-xs font-sans font-bold tracking-[0.22em] uppercase mb-3">
            <span className="w-6 h-[1.5px] bg-brand-orange" />
            Pricing & Memberships
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            CHOOSE YOUR <span className="text-brand-red">JOURNEY</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 font-sans leading-relaxed">
            No hidden administration fees. Simple pricing plans crafted to fit your level of dedication, workout style, and recovery requirements.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan: Plan, index) => {
            const isPopular = plan.badge === 'Most Popular';
            const isElite = plan.id === 'personal-training';

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col justify-between relative bg-brand-panel border rounded-md overflow-hidden transition-all duration-300 ${
                  isPopular
                    ? 'border-brand-orange shadow-2xl shadow-brand-orange/10 transform lg:-translate-y-4'
                    : isElite
                    ? 'border-brand-red/60 shadow-xl shadow-brand-red/5'
                    : 'border-white/10'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div
                    className={`absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 text-[10px] font-sans font-black tracking-widest uppercase rounded-sm ${
                      isPopular
                        ? 'bg-brand-orange text-white animate-pulse'
                        : 'bg-brand-red text-white'
                    }`}
                  >
                    {isPopular ? <Flame size={10} /> : <Trophy size={10} />}
                    {plan.badge}
                  </div>
                )}

                {/* Card Top */}
                <div className="p-8 pb-4">
                  <span className="text-gray-400 font-display font-bold text-sm tracking-widest uppercase">
                    {plan.name}
                  </span>
                  
                  <div className="mt-4 flex items-baseline text-white">
                    <span className="font-display font-black text-4xl sm:text-5xl tracking-tight">
                      {plan.price}
                    </span>
                    <span className="ml-2 font-sans text-xs text-gray-500 font-medium tracking-wide">
                      / {plan.period}
                    </span>
                  </div>

                  <p className="mt-4 text-xs text-gray-400 leading-relaxed font-sans">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="px-8 pb-6 pt-2 flex-grow">
                  <div className="h-px bg-white/5 w-full mb-6" />
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-white/5 text-brand-orange">
                          <Check size={11} className={isPopular ? 'text-brand-orange' : isElite ? 'text-brand-red' : 'text-gray-400'} />
                        </span>
                        <span className="text-gray-300 font-sans text-xs sm:text-sm leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button */}
                <div className="p-8 pt-2">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-4 rounded-sm font-display font-black text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                      isPopular
                        ? 'bg-brand-orange hover:bg-brand-orange/90 text-white shadow-lg shadow-brand-orange/20'
                        : isElite
                        ? 'bg-brand-red hover:bg-brand-red/90 text-white shadow-lg shadow-brand-red/20'
                        : plan.id === 'basic'
                        ? 'bg-brand-red hover:bg-brand-red/90 text-white shadow-lg shadow-brand-red/20'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/5'
                    }`}
                  >
                    Join Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* General timing policy note */}
        <div className="mt-12 text-center text-xs text-gray-500 font-sans max-w-md mx-auto">
          Need a custom short-term pass or family discount? 
          <button
            onClick={() => onSelectPlan('custom')}
            className="text-brand-orange hover:underline font-bold ml-1"
          >
            Inquire with our managers →
          </button>
        </div>
      </div>
    </section>
  );
}
