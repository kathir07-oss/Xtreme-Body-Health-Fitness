import React, { useState, useMemo } from 'react';
import { Calculator, RefreshCw, Activity, ArrowRight } from 'lucide-react';

interface BMICalculatorProps {
  onStartPlan?: (planId: string) => void;
}

export default function BMICalculator({ onStartPlan }: BMICalculatorProps) {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState<string>('70');
  const [height, setHeight] = useState<string>('170');
  const [weightLbs, setWeightLbs] = useState<string>('154');
  const [heightFt, setHeightFt] = useState<string>('5');
  const [heightIn, setHeightIn] = useState<string>('7');

  // Direct calculation on change
  const bmiResult = useMemo(() => {
    let w = 0;
    let hm = 0;

    if (unit === 'metric') {
      const numW = parseFloat(weight);
      const numH = parseFloat(height);
      if (!isNaN(numW) && !isNaN(numH) && numH > 0) {
        w = numW;
        hm = numH / 100;
      }
    } else {
      const numW = parseFloat(weightLbs);
      const ft = parseFloat(heightFt);
      const inch = parseFloat(heightIn);
      if (!isNaN(numW) && (!isNaN(ft) || !isNaN(inch))) {
        w = numW * 0.45359237; // lbs to kg
        const totalInches = (isNaN(ft) ? 0 : ft * 12) + (isNaN(inch) ? 0 : inch);
        hm = totalInches * 0.0254; // inches to meters
      }
    }

    if (w > 0 && hm > 0) {
      const bmi = w / (hm * hm);
      return parseFloat(bmi.toFixed(1));
    }
    return null;
  }, [unit, weight, height, weightLbs, heightFt, heightIn]);

  // Determine BMI status details
  const bmiStatus = useMemo(() => {
    if (!bmiResult) return null;

    if (bmiResult < 18.5) {
      return {
        label: 'Underweight',
        color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        barColor: 'bg-amber-400',
        pct: Math.min(100, (bmiResult / 40) * 100),
        advice: 'Focus on calorie-dense whole foods and strength coaching to build healthy lean mass safely.',
        recommendedPlan: 'basic'
      };
    } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
      return {
        label: 'Healthy Weight',
        color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
        barColor: 'bg-emerald-400',
        pct: Math.min(100, (bmiResult / 40) * 100),
        advice: 'Outstanding! Maintain your peak cardiac conditioning and physical power with progressive hypertrophy.',
        recommendedPlan: 'premium'
      };
    } else if (bmiResult >= 25 && bmiResult <= 29.9) {
      return {
        label: 'Overweight',
        color: 'text-brand-orange border-brand-orange/30 bg-brand-orange/10',
        barColor: 'bg-brand-orange',
        pct: Math.min(100, (bmiResult / 40) * 100),
        advice: 'High-intensity interval circuits combined with dedicated nutrition accountability will deliver rapid fat loss.',
        recommendedPlan: 'personal-training'
      };
    } else {
      return {
        label: 'Obese Range',
        color: 'text-brand-red border-brand-red/30 bg-brand-red/10',
        barColor: 'bg-brand-red',
        pct: Math.min(100, (bmiResult / 40) * 100),
        advice: 'We highly recommend working 1-on-1 with our clinical physio and recovery trainers to decompress joints safely.',
        recommendedPlan: 'personal-training'
      };
    }
  }, [bmiResult]);

  const handleReset = () => {
    setWeight('70');
    setHeight('170');
    setWeightLbs('154');
    setHeightFt('5');
    setHeightIn('7');
  };

  const handleQuickScrollToContact = () => {
    if (onStartPlan && bmiStatus?.recommendedPlan) {
      onStartPlan(bmiStatus.recommendedPlan);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full max-w-[420px] bg-brand-panel/95 border border-white/10 rounded-sm p-6 sm:p-8 shadow-2xl relative">
      {/* Visual glowing header accent */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-red to-brand-orange" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calculator className="text-brand-orange" size={18} />
          <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wider">
            BMI CALCULATOR
          </h3>
        </div>
        <button
          onClick={handleReset}
          className="text-gray-500 hover:text-white p-1.5 hover:bg-white/5 rounded-sm transition-colors cursor-pointer"
          title="Reset Calculator"
        >
          <RefreshCw size={14} />
        </button>
      </div>

      {/* Metric vs Imperial Toggle */}
      <div className="grid grid-cols-2 gap-2 mb-6 p-1 bg-brand-steel border border-white/5 rounded-sm">
        <button
          onClick={() => setUnit('metric')}
          className={`py-2 text-center font-display font-extrabold text-xs tracking-wider uppercase rounded-sm cursor-pointer transition-all ${
            unit === 'metric' ? 'bg-brand-red text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Metric (KG/CM)
        </button>
        <button
          onClick={() => setUnit('imperial')}
          className={`py-2 text-center font-display font-extrabold text-xs tracking-wider uppercase rounded-sm cursor-pointer transition-all ${
            unit === 'imperial' ? 'bg-brand-red text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Imperial (LBS/FT-IN)
        </button>
      </div>

      {/* Input Fields Grid */}
      <div className="space-y-4">
        {unit === 'metric' ? (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-sans font-black tracking-wider uppercase text-gray-500 mb-1.5">
                Height (CM)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 175"
                min="1"
                className="w-full bg-brand-steel border border-white/10 focus:border-brand-orange focus:outline-none rounded-sm py-2.5 px-3 text-white font-sans text-sm transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-sans font-black tracking-wider uppercase text-gray-500 mb-1.5">
                Weight (KG)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 70"
                min="1"
                className="w-full bg-brand-steel border border-white/10 focus:border-brand-orange focus:outline-none rounded-sm py-2.5 px-3 text-white font-sans text-sm transition-all"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-sans font-black tracking-wider uppercase text-gray-500 mb-1.5">
                  Height (Feet)
                </label>
                <input
                  type="number"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                  placeholder="Feet"
                  min="0"
                  className="w-full bg-brand-steel border border-white/10 focus:border-brand-orange focus:outline-none rounded-sm py-2.5 px-3 text-white font-sans text-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-sans font-black tracking-wider uppercase text-gray-500 mb-1.5">
                  Height (Inches)
                </label>
                <input
                  type="number"
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                  placeholder="Inches"
                  min="0"
                  max="11"
                  className="w-full bg-brand-steel border border-white/10 focus:border-brand-orange focus:outline-none rounded-sm py-2.5 px-3 text-white font-sans text-sm transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-sans font-black tracking-wider uppercase text-gray-500 mb-1.5">
                Weight (LBS)
              </label>
              <input
                type="number"
                value={weightLbs}
                onChange={(e) => setWeightLbs(e.target.value)}
                placeholder="Lbs"
                min="1"
                className="w-full bg-brand-steel border border-white/10 focus:border-brand-orange focus:outline-none rounded-sm py-2.5 px-3 text-white font-sans text-sm transition-all"
              />
            </div>
          </div>
        )}
      </div>

      {/* Dynamic Calculated Results block */}
      {bmiResult && bmiStatus ? (
        <div className="mt-6 border-t border-white/5 pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="block text-[9px] font-sans font-black tracking-wider uppercase text-gray-500">
                Your Calculated BMI
              </span>
              <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
                {bmiResult}
              </span>
            </div>
            
            <div className={`border rounded-sm px-3 py-2 text-right ${bmiStatus.color}`}>
              <span className="block text-[9px] font-sans font-black tracking-widest uppercase opacity-75">
                Classification
              </span>
              <span className="font-display font-extrabold text-sm sm:text-base uppercase tracking-wider block mt-0.5">
                {bmiStatus.label}
              </span>
            </div>
          </div>

          {/* Simple Visual Scale Meter */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[9px] font-sans text-gray-500 uppercase font-black tracking-wider">
              <span>Underweight</span>
              <span>Healthy</span>
              <span>Overweight</span>
              <span>Obese</span>
            </div>
            {/* Meter Bar */}
            <div className="w-full h-2 bg-brand-steel rounded-full overflow-hidden relative flex">
              <div className="h-full bg-amber-400" style={{ width: '18.5%' }} />
              <div className="h-full bg-emerald-400" style={{ width: '16%' }} />
              <div className="h-full bg-brand-orange" style={{ width: '12.5%' }} />
              <div className="h-full bg-brand-red" style={{ width: '53%' }} />
              
              {/* Floating needle pointer */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white border-x border-brand-black shadow-lg transition-all duration-500"
                style={{ left: `${bmiStatus.pct}%` }}
              />
            </div>
          </div>

          {/* Coach Advice snippet */}
          <div className="p-3 bg-white/2 border-l-2 border-brand-orange rounded-sm">
            <span className="flex items-center gap-1.5 text-[10px] font-sans font-black tracking-widest uppercase text-brand-orange mb-1">
              <Activity size={12} />
              Coach Recommendation
            </span>
            <p className="text-gray-300 font-sans text-xs leading-relaxed">
              {bmiStatus.advice}
            </p>
          </div>

          {/* Plan Trigger Action */}
          <button
            onClick={handleQuickScrollToContact}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-red to-brand-orange text-white py-3 font-display font-black text-xs tracking-widest uppercase rounded-sm transition-all hover:opacity-95 cursor-pointer shadow-md"
          >
            Start Personalized Plan
            <ArrowRight size={13} />
          </button>
        </div>
      ) : (
        <div className="mt-6 border-t border-white/5 pt-6 text-center py-6">
          <p className="text-xs text-gray-500 font-sans">
            Enter your height and weight above to get your custom clinical recommendation instantly.
          </p>
        </div>
      )}
    </div>
  );
}
