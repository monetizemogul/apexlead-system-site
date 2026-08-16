import React, { useState } from 'react';
import { 
  Star, 
  TrendingUp, 
  Quote, 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  Award, 
  Building2,
  Calendar
} from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBooking }) => {
  const [selectedCaseId, setSelectedCaseId] = useState(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-20 bg-slate-950 relative border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-xs text-indigo-300 font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>Proven Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Local Leaders Dominate AI Search with ApexLead
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-3">
            Real case studies from clinics, home service contractors, and professional practices that transformed their market positioning.
          </p>
        </div>

        {/* Client Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {CASE_STUDIES.map((c) => {
            const isSelected = selectedCaseId === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCaseId(c.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-950/40 ring-1 ring-indigo-500/50'
                    : 'bg-slate-950 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                      {c.industry}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {c.location}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">{c.clientName}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">{c.tagline}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-bold font-mono">{c.metrics[0].value}</span>
                  <span className="text-slate-500">{c.duration}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Spotlight */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Challenge, Solution & Quote */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                  <span className="font-bold text-indigo-400">{activeCase.industry}</span>
                  <span>•</span>
                  <span>{activeCase.location}</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">{activeCase.duration}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeCase.tagline}
                </h3>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="font-bold text-rose-400 uppercase tracking-wider text-[11px]">
                    The Challenge:
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {activeCase.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">
                    The ApexLead Solution:
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {activeCase.solution}
                  </p>
                </div>
              </div>

              {/* Testimonial Quote Box */}
              <div className="p-5 rounded-xl bg-indigo-950/20 border border-indigo-900/40 relative">
                <Quote className="w-6 h-6 text-indigo-500/30 absolute top-3 right-4" />
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{activeCase.testimonial.quote}"
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white">{activeCase.testimonial.author}</div>
                    <div className="text-slate-400 text-[11px]">{activeCase.testimonial.role}, {activeCase.clientName}</div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: 3 Big Metrics Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Documented Growth Metrics:
              </div>

              {activeCase.metrics.map((m, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-slate-400">{m.label}</div>
                    {m.sublabel && (
                      <div className="text-[11px] text-slate-500">{m.sublabel}</div>
                    )}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-sans">
                    {m.value}
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Get Similar Results in Your Market</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
