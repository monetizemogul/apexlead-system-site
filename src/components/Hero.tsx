import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Bot, 
  CheckCircle2, 
  Star, 
  Zap, 
  Radio,
  MapPin,
  Building2,
  Video,
  Phone,
  MessageSquare
} from 'lucide-react';
import { SAMPLE_BUSINESS_TEMPLATES, BUSINESS_INFO } from '../data/mockData';

interface HeroProps {
  onStartScan: (businessName: string, location: string, industry?: string) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartScan, onOpenBooking }) => {
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [quickTemplateSelected, setQuickTemplateSelected] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (businessName.trim() && location.trim()) {
      onStartScan(businessName.trim(), location.trim());
    } else {
      // If empty, scroll to scanner or use a high quality default
      const defaultSample = SAMPLE_BUSINESS_TEMPLATES[0];
      onStartScan(defaultSample.name, defaultSample.location, defaultSample.industry);
    }
  };

  const handleSelectTemplate = (tpl: typeof SAMPLE_BUSINESS_TEMPLATES[0]) => {
    setQuickTemplateSelected(tpl.name);
    setBusinessName(tpl.name);
    setLocation(tpl.location);
    onStartScan(tpl.name, tpl.location, tpl.industry);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden mesh-grid-pattern radial-gradient-hero">
      
      {/* Background ambient light effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Live System Ticker Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-white">Answer Engine Optimization (AEO)</span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              Active for 2026 AI Search Era
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-300">
            <Video className="w-3 h-3 text-cyan-400" />
            <span>Serving Nationwide & Worldwide via Zoom</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Make Your Local Business the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-emerald-400 underline decoration-indigo-500/40 decoration-wavy decoration-2">
              #1 Recommended Answer
            </span>{' '}
            in ChatGPT, Gemini & Perplexity
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            When potential clients ask AI search engines who to hire, make sure AI cites <strong className="text-white font-semibold">your business first</strong>. ApexLead Systems delivers full-stack Answer Engine Optimization (AEO) and 24/7 autonomous lead capture for small businesses everywhere via Zoom.
          </p>

          {/* Quick Direct Contact Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold hover:bg-emerald-900/60 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call or Text: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-indigo-400" />
              HQ: {BUSINESS_INFO.address}
            </span>
          </div>
        </div>

        {/* Instant Interactive AI Audit Bar */}
        <div className="mt-8 max-w-3xl mx-auto" id="hero-scanner-box">
          <div className="p-2 sm:p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2">
              
              <div className="relative flex-1 w-full">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Building2 className="w-4 h-4 text-indigo-400" />
                </div>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Business Name (e.g. J Story Bail Bonds)"
                  className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  id="hero-input-business"
                />
              </div>

              <div className="relative flex-1 w-full">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, State (e.g. Belleview, MO)"
                  className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  id="hero-input-location"
                />
              </div>

              <button
                type="submit"
                id="hero-submit-audit-btn"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4" />
                <span>Scan My AI Visibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Test Drive Chips */}
            <div className="mt-2.5 pt-2.5 border-t border-slate-800/80 px-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-medium text-slate-400 flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-400" />
                Try Instant Sample:
              </span>
              {SAMPLE_BUSINESS_TEMPLATES.slice(0, 3).map((tpl) => (
                <button
                  key={tpl.name}
                  type="button"
                  onClick={() => handleSelectTemplate(tpl)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors ${
                    quickTemplateSelected === tpl.name
                      ? 'bg-indigo-950 text-indigo-300 border-indigo-500'
                      : 'bg-slate-950/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {tpl.name.split(' ')[0]} ({tpl.location})
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-3 text-xs text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              100% Free Live AEO Audit
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Analyzes ChatGPT, Gemini & Perplexity
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              1-on-1 Strategy via Zoom
            </span>
          </div>
        </div>

        {/* Supported AI Engine Badges Bar */}
        <div className="mt-14 pt-8 border-t border-slate-900 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
            We Optimize Your Local Business Entity For All Major Generative Search Engines
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-85 grayscale hover:grayscale-0 transition-all duration-300">
            
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs font-bold">
                GPT
              </div>
              <span className="text-xs font-bold text-slate-200">ChatGPT Search</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-xs font-bold">
                AI
              </div>
              <span className="text-xs font-bold text-slate-200">Google Gemini & AI Overviews</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold">
                P
              </div>
              <span className="text-xs font-bold text-slate-200">Perplexity AI</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="w-5 h-5 rounded-md bg-rose-500/20 text-rose-400 flex items-center justify-center font-mono text-xs font-bold">
                🍎
              </div>
              <span className="text-xs font-bold text-slate-200">Apple Intelligence & Siri</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-xs font-bold">
                📍
              </div>
              <span className="text-xs font-bold text-slate-200">Google Maps 3-Pack</span>
            </div>

          </div>
        </div>

        {/* Live Metrics Proof Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-sans">480+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Businesses Ranked on AI</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-sans">+340%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Average AEO Citation Growth</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-sans">&lt; 15s</div>
            <div className="text-xs text-slate-400 font-medium mt-1">AI Speed-to-Lead Response</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-sans">100%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Remote Zoom Delivery</div>
          </div>
        </div>

      </div>
    </section>
  );
};

