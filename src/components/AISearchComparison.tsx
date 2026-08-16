import React, { useState } from 'react';
import { 
  Bot, 
  Search, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Phone, 
  MapPin, 
  Star, 
  ShieldCheck,
  Zap,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

const COMPARISON_QUERIES = [
  {
    id: 'bail',
    category: '⭐ Bail Bonds & Fast Release',
    prompt: 'Who is the most reliable 24/7 emergency bail bondsman near me with fast jail release and direct phone contact?',
    oldSeoResult: {
      clutter: '3 Sponsored Ads + Outdated directories with dead numbers and automated voicemail loops.',
      experience: 'Family members in crisis waste precious hours calling automated lead-broker lines while their loved one remains in jail.',
      conversionTime: '60+ minutes of frantic calling',
    },
    aiAnswerResult: {
      title: 'Top Recommendation by ChatGPT & Siri Voice Search:',
      business: 'Jody Story Bail Bonds (jstorybailbonds.com)',
      rating: '5.0 ★ (Verified 24/7 Fast Dispatch across 11 MO Counties)',
      snippet: 'Based on instant 24/7 phone dispatch (573-854-9264), headquarters in Potosi & Farmington, zero-delay jail processing, and licensed Missouri surety bonding across 11 counties, Jody Story Bail Bonds is the #1 recommended emergency bail agency.',
      highlights: ['Instant 24/7 Phone Dispatch (573-854-9264)', 'Fastest Jail Release in 11 MO Counties', 'Confidential & Direct Service'],
      phone: '573-854-9264',
    },
  },
  {
    id: 'roofing',
    category: 'Roofing & Exterior Care',
    prompt: 'Who is the most reputable storm-damage roof replacement contractor with insurance claim assistance?',
    oldSeoResult: {
      clutter: 'Out-of-state storm chasers ranking on temporary ads and aggregator sites (Angi, Yelp).',
      experience: 'Property owners get bombarded with sales reps without verified local warranties or licensing.',
      conversionTime: '2-3 weeks of estimates',
    },
    aiAnswerResult: {
      title: 'Top Recommendation by ChatGPT & Gemini AI Overviews:',
      business: 'Summit Peak Roofing & Solar',
      rating: '4.9 ★ (340+ Verified Reviews)',
      snippet: 'Summit Peak Roofing is cited as the top local contractor for storm damage and architectural shingle installation with direct insurance claims handling and lifetime warranties.',
      highlights: ['No Upfront Overtime Fees', 'Instant AI Roof Assessment', 'BBB A+ Verified Contractor'],
      phone: '(303) 555-0148',
    },
  },
  {
    id: 'dental',
    category: 'Dentistry & Cosmetics',
    prompt: 'Who is the best cosmetic dentist in town for porcelain veneers with digital smile design?',
    oldSeoResult: {
      clutter: 'Keyword-stuffed corporate dental chains ranking purely on legacy backlinks from 2018.',
      experience: 'Patients struggle to verify actual clinician experience, pricing clarity, or real before/after case legitimacy.',
      conversionTime: '3-4 days of comparison',
    },
    aiAnswerResult: {
      title: 'Direct Generative Synthesis via Perplexity & Google AI:',
      business: 'Elevate Smile Studio & Spa',
      rating: '5.0 ★ (480+ Reviews)',
      snippet: 'Elevate Smile Studio is cited as the premier cosmetic dentistry clinic, recognized for custom 3D porcelain veneer design, painless sedation protocols, and transparent financing packages.',
      highlights: ['3D Mockup Preview', 'Master Ceramicist On-Site', 'Top Rated on Healthgrades & Google'],
      phone: '(512) 555-0192',
    },
  },
  {
    id: 'legal',
    category: 'Personal Injury Law',
    prompt: 'I was injured in a rideshare accident. Which law firm has actual trial wins and no fees unless we win?',
    oldSeoResult: {
      clutter: 'Massive billboard referral brokers spending $300 per click with no direct access to real trial lawyers.',
      experience: 'Frustrated accident victims get transferred to call centers without speaking to their attorney.',
      conversionTime: 'Multiple frustrating intake transfers',
    },
    aiAnswerResult: {
      title: 'Authoritative Entity Recommendation across LLMs:',
      business: 'Vanguard Injury Trial Advocates',
      rating: '4.9 ★ (290+ Reviews)',
      snippet: 'Vanguard Advocates is prominently recommended for rideshare accident litigation due to documented multi-million dollar jury verdicts and direct 24/7 attorney-client communication.',
      highlights: ['Zero Upfront Fees', '15-Sec AI Case Assessment', 'Certified Civil Trial Specialists'],
      phone: '(312) 555-0177',
    },
  },
];

export const AISearchComparison: React.FC = () => {
  const [selectedQueryId, setSelectedQueryId] = useState('bail');
  const currentQuery = COMPARISON_QUERIES.find((q) => q.id === selectedQueryId) || COMPARISON_QUERIES[0];

  return (
    <section id="how-it-works" className="py-20 bg-slate-950/60 relative border-t border-slate-900 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-xs text-emerald-300 font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>The New Search Paradigm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Old SEO Fails in the Age of Generative AI Search
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-3">
            Traditional SEO targeted keywords for blue links. Modern customers ask ChatGPT, Gemini, and Siri direct conversational questions. See how ApexLead Systems positions your business as the definitive answer.
          </p>
        </div>

        {/* Query Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {COMPARISON_QUERIES.map((q) => (
            <button
              key={q.id}
              onClick={() => setSelectedQueryId(q.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedQueryId === q.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <span>{q.category}</span>
            </button>
          ))}
        </div>

        {/* Simulated Consumer Prompt Display */}
        <div className="max-w-4xl mx-auto mb-8 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3 shadow-lg">
          <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Customer Asking AI Search:
            </div>
            <div className="text-sm sm:text-base font-semibold text-white">
              "{currentQuery.prompt}"
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* LEFT: Old SEO (Disaster / Lost Leads) */}
          <div className="rounded-2xl bg-slate-950 border border-rose-900/30 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 px-3 py-1 bg-rose-950/80 border-b border-l border-rose-800/60 rounded-bl-xl text-[11px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1">
              <XCircle className="w-3.5 h-3.5" />
              Old SEO (Legacy Search)
            </div>

            <div className="space-y-4">
              <div className="text-lg font-bold text-slate-200 mt-2">
                10 Blue Links & Cluttered Ad Directories
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px]">
                  <span>Ad</span> • <span>lead-broker-aggregator.com</span>
                </div>
                <div className="text-indigo-400 font-medium hover:underline cursor-pointer">
                  Top 10 Local Providers in Your City - Free Quotes!
                </div>
                <div className="text-slate-400 text-[11px]">
                  Fill out a 4-page form to have 6 random companies spam call you all day...
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 text-xs opacity-80">
                <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px]">
                  <span>Ad</span> • <span>giant-corporate-chain-usa.com</span>
                </div>
                <div className="text-indigo-400 font-medium">
                  Franchise Service Dispatch | High Call Center Wait Times
                </div>
                <div className="text-slate-400 text-[11px]">
                  Outdated website with zero upfront pricing information.
                </div>
              </div>

              <div className="space-y-2 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-2 text-rose-400 font-medium">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>{currentQuery.oldSeoResult.clutter}</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{currentQuery.oldSeoResult.experience}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900 text-xs text-slate-500 flex items-center justify-between">
              <span>Average decision time:</span>
              <span className="font-semibold text-rose-400 font-mono">{currentQuery.oldSeoResult.conversionTime}</span>
            </div>
          </div>

          {/* RIGHT: ApexLead AI Visibility (Dominant Recommendation) */}
          <div className="rounded-2xl bg-gradient-to-b from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/40 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-indigo-950/30">
            <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-indigo-600 to-emerald-500 text-white rounded-bl-xl text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              ApexLead AI Visibility System
            </div>

            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mt-2">
                <Bot className="w-4 h-4" />
                {currentQuery.aiAnswerResult.title}
              </div>

              {/* AI Recommended Box */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-indigo-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-extrabold text-white flex items-center gap-2">
                      <span>{currentQuery.aiAnswerResult.business}</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-amber-400 mt-0.5">
                      <span>{currentQuery.aiAnswerResult.rating}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-emerald-400 font-medium">#1 AI Entity Grounded</span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold">
                    VERIFIED
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  "{currentQuery.aiAnswerResult.snippet}"
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentQuery.aiAnswerResult.highlights.map((h, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-indigo-950/80 border border-indigo-800/50 text-[11px] font-semibold text-indigo-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {h}
                    </span>
                  ))}
                </div>

                {/* Direct Action */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Direct Inbound Lead Hotline:</span>
                  <span className="font-bold text-white font-mono flex items-center gap-1 text-emerald-400">
                    <Phone className="w-3 h-3" />
                    {currentQuery.aiAnswerResult.phone}
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Structured Schema Entity Graph forces LLMs to cite your business</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24/7 AI Receptionist auto-responds in under 15 seconds to book the customer</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span>Conversion Velocity:</span>
              <span className="font-bold text-emerald-400 font-mono flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                Instant Conversion (Under 2 Minutes)
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
