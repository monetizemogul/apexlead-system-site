import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Star, 
  Calendar,
  HelpCircle
} from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
  onOpenBooking: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan, onOpenBooking }) => {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-20 bg-slate-950/70 relative border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-xs text-emerald-300 font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Done-For-You AI Visibility Packages
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-3">
            No hidden setup fees. No long-term lock-in. Backed by our 90-Day AI Placement Performance Guarantee.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                !annualBilling
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                annualBilling
                  ? 'bg-gradient-to-r from-indigo-600 to-emerald-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-emerald-950 text-emerald-300 border border-emerald-700">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-indigo-950/60 via-slate-900 to-slate-950 border-2 border-indigo-500 shadow-2xl shadow-indigo-950/60 lg:-translate-y-2'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 text-slate-950 text-xs font-black tracking-wide uppercase shadow-md whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-400 min-h-[32px]">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white font-sans">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">/ month</span>
                    </div>
                    <div className="text-[11px] text-emerald-400 font-medium mt-1">
                      {annualBilling ? 'Billed annually ($' + (price * 12).toLocaleString() + '/yr)' : 'Flexible month-to-month'}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="text-xs text-slate-300 mb-6 p-3 rounded-lg bg-slate-950/80 border border-slate-800/80">
                    <span className="font-bold text-slate-400 uppercase text-[10px] block mb-0.5">Ideal For:</span>
                    {plan.idealFor}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 text-xs text-slate-200">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Included Capabilities:
                    </div>
                    {plan.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2 opacity-50">
                        {plan.notIncluded.map((nf, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-slate-400">
                            <X className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                            <span>{nf}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 hover:brightness-110 text-white shadow-indigo-600/40'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 90-Day Guarantee Banner */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
            <ShieldCheck className="w-10 h-10" />
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">
              The Apex 90-Day AI Placement Performance Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We stand 100% behind our Generative Engine Optimization. If your business does not see measurable increases in AI overview citations, verified map positions, and qualified leads within 90 days, we work completely free until you do.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-700 text-white text-xs font-bold whitespace-nowrap shrink-0 transition-colors"
          >
            Ask Questions On A Call
          </button>
        </div>

      </div>
    </section>
  );
};
