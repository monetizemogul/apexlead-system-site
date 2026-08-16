import React, { useState } from 'react';
import { 
  Globe, 
  Sparkles, 
  Share2, 
  Zap, 
  Code, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Eye, 
  Flame, 
  TrendingUp, 
  Smartphone, 
  Video, 
  Calendar, 
  FileCode, 
  Phone, 
  Clock, 
  DollarSign, 
  Award, 
  Check, 
  Copy,
  ExternalLink,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { 
  AEO_WEBSITE_PILLARS, 
  SOCIAL_AND_AD_SERVICES, 
  SOCIAL_POST_MOCKUPS, 
  WEBSITE_AND_CREATIVE_PACKAGES, 
  BUSINESS_INFO 
} from '../data/mockData';

interface AeoWebAndSocialStudioProps {
  onOpenBookingWithService?: (serviceName: string) => void;
  onOpenBooking: () => void;
}

export const AeoWebAndSocialStudio: React.FC<AeoWebAndSocialStudioProps> = ({
  onOpenBookingWithService,
  onOpenBooking,
}) => {
  const [activeWebTab, setActiveWebTab] = useState(0);
  const [activeCreativeTab, setActiveCreativeTab] = useState(0);
  const [selectedMockup, setSelectedMockup] = useState(0);
  
  // Custom Project Estimator State
  const [siteOption, setSiteOption] = useState<'none' | 'launch5' | 'suite10'>('launch5');
  const [socialOption, setSocialOption] = useState<'none' | 'standard16' | 'omni20'>('standard16');
  const [includeAds, setIncludeAds] = useState(true);

  const calculateEstimate = () => {
    let setupFee = 0;
    let monthlyRetainer = 0;

    if (siteOption === 'launch5') setupFee += 2497;
    if (siteOption === 'suite10') setupFee += 3997;

    if (socialOption === 'standard16') monthlyRetainer += 997;
    if (socialOption === 'omni20') monthlyRetainer += 1497;

    if (includeAds) monthlyRetainer += 497;

    return { setupFee, monthlyRetainer };
  };

  const { setupFee, monthlyRetainer } = calculateEstimate();

  const handleBookWithCustomPlan = () => {
    const summary = `AEO Web & Creative Plan: Site: ${siteOption}, Social: ${socialOption}, Paid Ads: ${includeAds ? 'Yes' : 'No'}`;
    if (onOpenBookingWithService) {
      onOpenBookingWithService(summary);
    } else {
      onOpenBooking();
    }
  };

  return (
    <section id="web-design-social-ads" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      
      {/* Background Gradients & Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs text-cyan-300 font-semibold mb-4 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>Turnkey Digital Dominance Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            AEO / GEO / SEO Optimized Websites & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400">
              High-Converting Social Media Posts & Ads
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            We don’t just get you recommended by AI—we design your <strong className="text-white">lightning-fast, Schema-wired business website</strong> and create <strong className="text-white">scroll-stopping social media posts & paid ad campaigns</strong> that convert attention into paying customers.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PART 1: AEO / GEO / SEO OPTIMIZED BUSINESS WEBSITES                      */}
        {/* ========================================================================= */}
        <div className="mb-20">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800/80 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                <Code className="w-4 h-4" />
                <span>Next-Gen Web Architecture</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Engineered from the Code Up for AI Search & Instant Conversions
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>98+ Google PageSpeed • Native Schema.org JSON-LD • Mobile First</span>
            </div>
          </div>

          {/* Web Architecture 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {AEO_WEBSITE_PILLARS.map((pillar, idx) => {
              const isSelected = activeWebTab === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveWebTab(idx)}
                  className={`p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-cyan-500 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-500/50'
                      : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-2 py-0.5 rounded">
                        0{idx + 1}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-400">
                        {pillar.metric}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-2">{pillar.tagline}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-semibold text-cyan-300">
                    <span>Inspect Technology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Web Showcase Detail Card */}
          {AEO_WEBSITE_PILLARS[activeWebTab] && (
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left side details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    <span>{AEO_WEBSITE_PILLARS[activeWebTab].title}</span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {AEO_WEBSITE_PILLARS[activeWebTab].tagline}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {AEO_WEBSITE_PILLARS[activeWebTab].description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Standard In Every Apex Website Build:
                    </div>
                    {AEO_WEBSITE_PILLARS[activeWebTab].deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenBookingWithService ? onOpenBookingWithService('AEO / GEO / SEO Optimized Business Website') : onOpenBooking()}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-600/30 transition-all"
                    >
                      <span>Build My AEO Website</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      10-14 Day Turnkey Turnaround
                    </span>
                  </div>
                </div>

                {/* Right side Live Tech Demonstration Mockup */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Zap className="w-3.5 h-3.5" />
                      LIVE ARCHITECTURE PREVIEW
                    </span>
                    <span className="font-mono text-emerald-400 text-[11px]">BENCHMARK: 99/100</span>
                  </div>

                  {activeWebTab === 0 && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 text-[11px] leading-relaxed">
                        &lt;script type="application/ld+json"&gt;<br />
                        {`{`}<br />
                        &nbsp;&nbsp;{`"@context": "https://schema.org",`}<br />
                        &nbsp;&nbsp;{`"@type": "LocalBusiness",`}<br />
                        &nbsp;&nbsp;{`"name": "Precision Master Roofing",`}<br />
                        &nbsp;&nbsp;{`"telephone": "+1-636-331-5369",`}<br />
                        &nbsp;&nbsp;{`"geo": { "@type": "GeoCoordinates", "latitude": 37.69, "longitude": -90.78 },`}<br />
                        &nbsp;&nbsp;{`"hasOfferCatalog": { "@type": "OfferCatalog", "name": "Emergency Roof Repairs" },`}<br />
                        &nbsp;&nbsp;{`"sameAs": ["https://chatgpt.com", "https://gemini.google.com"]`}<br />
                        {`}`}<br />
                        &lt;/script&gt;
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 text-[11px]">
                        ✔ Rich Q&A FAQ extraction nodes verified<br />
                        ✔ 100% LLM crawlable semantic hierarchy
                      </div>
                    </div>
                  )}

                  {activeWebTab === 1 && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2.5 text-center">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <div className="text-2xl font-black text-emerald-400 font-mono">99</div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">Mobile PageSpeed</div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <div className="text-2xl font-black text-emerald-400 font-mono">0.4s</div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">Largest Paint (LCP)</div>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1 font-mono text-[11px]">
                        <div className="flex justify-between"><span>Cumulative Layout Shift:</span><span className="text-emerald-400 font-bold">0.000</span></div>
                        <div className="flex justify-between"><span>Total Blocking Time:</span><span className="text-emerald-400 font-bold">0 ms</span></div>
                        <div className="flex justify-between"><span>Edge CDN TTFB:</span><span className="text-emerald-400 font-bold">42 ms</span></div>
                      </div>
                    </div>
                  )}

                  {activeWebTab === 2 && (
                    <div className="space-y-3 font-sans">
                      <div className="p-4 rounded-xl bg-slate-900 border border-indigo-500/30 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">Tap-to-Call Conversion Header</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-bold">Mobile Ready</span>
                        </div>
                        <div className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md">
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call 636-331-5369 For Immediate Estimate</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-2">
                          <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                          <span>24/7 AI Speed-to-Lead chat widget auto-captures visitor SMS</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeWebTab === 3 && (
                    <div className="space-y-2.5 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
                        <div className="font-bold text-cyan-300 mb-1">Generated Geo Landing Hierarchy:</div>
                        • /service-area/belleview-roofing-repair<br />
                        • /service-area/st-louis-metro-emergency-service<br />
                        • /service-area/farmington-commercial-roofing
                      </div>
                      <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-cyan-300 text-[11px]">
                        ✔ Geotagged route schema embedded on each hub
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>
          )}

        </div>

        {/* ========================================================================= */}
        {/* PART 2: SOCIAL MEDIA POSTS, BRAND GRAPHICS & PAID ADS                    */}
        {/* ========================================================================= */}
        <div className="mb-20">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800/80 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
                <Share2 className="w-4 h-4" />
                <span>Brand Velocity & Lead Ads</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Custom Social Media Posts, Google Updates & Paid Ad Campaigns
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Facebook • Instagram • Google Business Profile • Meta & Google Ads</span>
            </div>
          </div>

          {/* Social Media Services 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {SOCIAL_AND_AD_SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/60 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-800">
                      {service.badge}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono font-semibold">
                      {service.frequency}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1.5">{service.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{service.description}</p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-800/60">
                  <div className="text-[10px] font-bold uppercase text-slate-400">Included Formats:</div>
                  {service.formats.map((f, i) => (
                    <div key={i} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="line-clamp-1">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Live Post & Ad Creative Mockup Preview Gallery */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-indigo-400" />
                  <span>Creative Post & Ad Sample Gallery</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Click below to inspect real creative styles engineered to generate local clicks and high-intent leads.
                </p>
              </div>

              {/* Selector Chips */}
              <div className="flex flex-wrap items-center gap-2">
                {SOCIAL_POST_MOCKUPS.map((mock, idx) => (
                  <button
                    key={mock.id}
                    onClick={() => setSelectedMockup(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedMockup === idx
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {mock.platform}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Mockup Display Box */}
            {SOCIAL_POST_MOCKUPS[selectedMockup] && (
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Visual Card Representation */}
                <div className="lg:col-span-6 rounded-xl bg-slate-950 border border-slate-800 p-5 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-emerald-400 flex items-center justify-center text-xs font-bold text-white">
                        ▲
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Your Business Brand</div>
                        <div className="text-[10px] text-slate-400">Sponsored • Local Verified • Belleview & Nationwide</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-indigo-300">
                      {SOCIAL_POST_MOCKUPS[selectedMockup].platform}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-200">
                      {SOCIAL_POST_MOCKUPS[selectedMockup].headline}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {SOCIAL_POST_MOCKUPS[selectedMockup].captionPreview}
                    </p>
                  </div>

                  {/* Graphic Preview Container */}
                  <div className="rounded-lg bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-500/20 p-6 flex flex-col items-center justify-center text-center min-h-[140px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <Sparkles className="w-6 h-6 text-amber-400 mb-2" />
                    <span className="text-xs font-bold text-white">
                      {SOCIAL_POST_MOCKUPS[selectedMockup].visualTag}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-1">
                      Custom Branded Colors, Logo, Typography & Local Imagery
                    </span>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      High Engagement Hook
                    </span>
                    <span className="text-[11px]">Ready for Scheduled Publishing</span>
                  </div>
                </div>

                {/* Right side Marketing & AI Strategy Explanation */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40 space-y-1.5">
                    <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                      Strategic Objective & AI Impact:
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {SOCIAL_POST_MOCKUPS[selectedMockup].engagementBenefit}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs text-slate-300">
                    <div className="font-bold text-white">What Apex Handles For You:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>High-Resolution Graphics (Canva / Figma)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Persuasive Direct-Response Copy</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Hashtags & Local Geo-Tags</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Monthly Content Approval Calendar</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenBookingWithService ? onOpenBookingWithService('Social Media & Paid Ad Creative Retainer') : onOpenBooking()}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-indigo-600/30"
                    >
                      <span>Get Done-For-You Posts & Ads</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* PART 3: INTERACTIVE PROJECT ESTIMATOR & BUNDLE PACKAGES                  */}
        {/* ========================================================================= */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-xs font-bold text-emerald-300 uppercase tracking-wider">
              Interactive Solution Configurator
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Configure Your Custom Website & Social Media Package
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Select your desired options below to see transparent pricing and immediately schedule your 1-on-1 Zoom strategy session.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Options Selector Form */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Question 1: Website */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  1. AEO / GEO / SEO Business Website
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSiteOption('none')}
                    className={`p-3 rounded-xl border text-left transition-all text-xs ${
                      siteOption === 'none'
                        ? 'bg-indigo-950/60 border-indigo-500 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>Keep Existing Site</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">$0 setup</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSiteOption('launch5')}
                    className={`p-3 rounded-xl border text-left transition-all text-xs ${
                      siteOption === 'launch5'
                        ? 'bg-indigo-950/60 border-indigo-500 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>5-Page Turnkey AEO Site</div>
                    <div className="text-[10px] text-cyan-400 mt-0.5">$2,497 one-time</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSiteOption('suite10')}
                    className={`p-3 rounded-xl border text-left transition-all text-xs ${
                      siteOption === 'suite10'
                        ? 'bg-indigo-950/60 border-indigo-500 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>10-Page Authority Suite</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">$3,997 one-time</div>
                  </button>
                </div>
              </div>

              {/* Question 2: Social Media Retainer */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  2. Monthly Social Media Post Creation
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSocialOption('none')}
                    className={`p-3 rounded-xl border text-left transition-all text-xs ${
                      socialOption === 'none'
                        ? 'bg-indigo-950/60 border-indigo-500 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>No Social Posts</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">$0/mo</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSocialOption('standard16')}
                    className={`p-3 rounded-xl border text-left transition-all text-xs ${
                      socialOption === 'standard16'
                        ? 'bg-indigo-950/60 border-indigo-500 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>16 Posts + 4 GBP/mo</div>
                    <div className="text-[10px] text-indigo-300 mt-0.5">$997 / month</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSocialOption('omni20')}
                    className={`p-3 rounded-xl border text-left transition-all text-xs ${
                      socialOption === 'omni20'
                        ? 'bg-indigo-950/60 border-indigo-500 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>20 Posts + Video Scripts</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">$1,497 / month</div>
                  </button>
                </div>
              </div>

              {/* Question 3: Paid Ads Creative Management */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Include High-Converting Paid Ad Creatives & Copy</div>
                  <div className="text-[11px] text-slate-400">Meta (FB & IG) + Google Local Service ad campaigns & split testing</div>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeAds(!includeAds)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    includeAds
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {includeAds ? 'Included (+$497/mo)' : 'Add (+$497/mo)'}
                </button>
              </div>

            </div>

            {/* Estimated Investment Summary Box */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-indigo-500/40 shadow-2xl flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Estimated Investment</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-bold">100% Zoom Remote</span>
                </div>

                <div className="my-5 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-300">One-Time Setup / Website Build:</span>
                    <span className="text-xl font-bold text-white font-mono">
                      {setupFee > 0 ? `$${setupFee.toLocaleString()}` : '$0 (No New Site)'}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-300">Monthly Creative Retainer:</span>
                    <span className="text-2xl font-black text-emerald-400 font-mono">
                      {monthlyRetainer > 0 ? `$${monthlyRetainer.toLocaleString()}` : '$0'}
                      <span className="text-xs font-normal text-slate-400"> / mo</span>
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-1 text-emerald-400 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Backed by Apex Lead Quality Guarantee</span>
                  </div>
                  <div>Phone: <strong>{BUSINESS_INFO.phoneFormatted}</strong> • HQ: Belleview, MO</div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleBookWithCustomPlan}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-emerald-500 hover:brightness-110 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4" />
                <span>Claim This Plan On A 1-on-1 Zoom Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
