import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Bot, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  MessageSquareCode, 
  Send,
  CalendarCheck,
  TrendingUp,
  Award
} from 'lucide-react';

interface FourPillarsProps {
  onOpenBooking: () => void;
}

export const FourPillars: React.FC<FourPillarsProps> = ({ onOpenBooking }) => {
  const [activePillar, setActivePillar] = useState(0);

  const PILLARS = [
    {
      id: 'geo',
      number: '01',
      title: 'Generative Engine Optimization (GEO)',
      subtitle: 'Entity Grounding for ChatGPT, Gemini, Perplexity & Apple',
      badge: 'Pillar 1: Core Entity Graph',
      color: 'from-indigo-500 to-cyan-400',
      icon: Cpu,
      description: 'We wire your business directly into modern LLM knowledge graphs using deep JSON-LD schema, entity disambiguation, and authoritative citation clusters so AI models recognize your business as the authoritative local leader.',
      deliverables: [
        'Custom Schema.org Entity Hierarchy & JSON-LD Graph injection',
        'Direct citation grounding on ChatGPT Search & OpenAI search index',
        'Google Gemini AI Overviews & Knowledge Graph entity verification',
        'Perplexity AI citation node creation & Digital PR syndication',
        'Apple Intelligence & Siri voice search conversational readiness',
      ],
      resultMetric: '+340% Higher AI Overview Mentions',
    },
    {
      id: 'maps',
      number: '02',
      title: 'Google Maps & Local 3-Pack Domination',
      subtitle: 'Hyper-Local Geotagged Grid Authority',
      badge: 'Pillar 2: Maps Dominance',
      color: 'from-emerald-500 to-teal-400',
      icon: MapPin,
      description: 'Own the coveted top 3 map positions across your entire service radius. We optimize geo-coordinates, hyper-local service pages, citation consistency across 40+ directories, and Google Business Profile behavioral signals.',
      deliverables: [
        '10-Mile Radius Geo-Grid Rank Tracking & Optimization',
        '40+ Authoritative Tier-1 Local Directory Synchronization (NAP Consistency)',
        'Optimized Google Business Profile categories, service catalog & photo metadata',
        'Hyper-local neighborhood landing page architecture',
        'Spam competitor fighting and map hijack protection',
      ],
      resultMetric: '#1 - #3 Rank in Top 10 Target Zip Codes',
    },
    {
      id: 'receptionist',
      number: '03',
      title: '24/7 Autonomous AI Speed-to-Lead Receptionist',
      subtitle: 'Instant 15-Second SMS & Web Chat Auto-Booking',
      badge: 'Pillar 3: Conversion Engine',
      color: 'from-cyan-500 to-blue-500',
      icon: Bot,
      description: 'Visibility without conversion is wasted revenue. Our trained AI receptionist instantly responds to new inquiries in under 15 seconds 24/7/365, answers customer questions intelligently, and books confirmed appointments onto your calendar.',
      deliverables: [
        'Sub-15 second instant SMS & Website chat auto-responder',
        'Custom-trained AI on your exact pricing, services, and FAQ rules',
        'Direct two-way calendar sync (Google, Outlook, Calendly, GoHighLevel)',
        'Automated missed-call text-back engine (never lose an after-hours caller)',
        'CRM webhook dispatch to your team in real-time',
      ],
      resultMetric: '21x Higher Lead-to-Booked Consultation Rate',
    },
    {
      id: 'reputation',
      number: '04',
      title: 'AI 5-Star Review Velocity & Sentiment Shield',
      subtitle: 'Automated Social Proof & LLM Trust Fuel',
      badge: 'Pillar 4: Trust Architecture',
      color: 'from-amber-500 to-orange-400',
      icon: Star,
      description: 'Generative AI engines prioritize businesses with continuous, high-sentiment customer reviews. Our automated system gathers steady 5-star reviews from happy clients while intercepting negative experiences before they go public.',
      deliverables: [
        'Automated post-service SMS review request workflows',
        'AI Sentiment Analysis generating tailored, keyword-rich review replies',
        'Internal private feedback routing to resolve customer complaints privately',
        'Review velocity pacing to maintain natural algorithmic momentum',
        'Cross-platform review syndication across Google, Yelp, and industry portals',
      ],
      resultMetric: '4.9+ Star Average with 4x Review Velocity',
    },
  ];

  return (
    <section id="pillars" className="py-20 bg-slate-950 relative border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-xs text-indigo-300 font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>The Apex Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 4-Pillar AI Visibility & Revenue Engine
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-3">
            A comprehensive, done-for-you infrastructure that transforms your local business into an omnipresent market leader across modern search engines and AI assistants.
          </p>
        </div>

        {/* Pillar Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = activePillar === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActivePillar(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-indigo-500 shadow-lg shadow-indigo-950/50 ring-1 ring-indigo-500/40'
                    : 'bg-slate-950 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-extrabold ${isSelected ? 'text-indigo-400' : 'text-slate-500'}`}>
                    {p.number}
                  </span>
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-900 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-1">{p.title}</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{p.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Card */}
        {PILLARS[activePillar] && (
          <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-5">
                
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-950 border border-indigo-800 text-xs font-bold text-indigo-300 uppercase tracking-wider">
                    {PILLARS[activePillar].badge}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    {PILLARS[activePillar].resultMetric}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {PILLARS[activePillar].title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {PILLARS[activePillar].description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Execution Deliverables:
                  </div>
                  {PILLARS[activePillar].deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30"
                  >
                    <span>Implement This Pillar For My Business</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Right Column: Visual Diagram Box */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-bold text-slate-400">
                  <span>SYSTEM ARCHITECTURE DIAGRAM</span>
                  <span className="font-mono text-emerald-400">STATUS: ACTIVE</span>
                </div>

                {activePillar === 0 && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-slate-900 border border-indigo-500/30 text-indigo-300">
                      &lt;script type="application/ld+json"&gt;<br />
                      &nbsp;&nbsp;{`"@type": "LocalBusiness",`}<br />
                      &nbsp;&nbsp;{`"name": "Apex Verified Entity",`}<br />
                      &nbsp;&nbsp;{`"sameAs": ["ChatGPT", "Gemini", "Perplexity"]`}<br />
                      &lt;/script&gt;
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 text-[11px]">
                      ✔ Entity Disambiguation Confirmed<br />
                      ✔ Knowledge Graph Synced across 4 LLMs
                    </div>
                  </div>
                )}

                {activePillar === 1 && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-slate-900 border border-emerald-500/30 text-emerald-300">
                      📍 10-Mile Radius Grid Scan:<br />
                      &nbsp;&nbsp;• Coordinate [30.26, -97.74] → #1 Rank<br />
                      &nbsp;&nbsp;• Coordinate [30.31, -97.71] → #1 Rank<br />
                      &nbsp;&nbsp;• Coordinate [30.22, -97.80] → #2 Rank
                    </div>
                    <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-800/40 text-indigo-300 text-[11px]">
                      ✔ 40+ Directory Citations 100% Consistent<br />
                      ✔ Geo-cluster Local 3-Pack Locked
                    </div>
                  </div>
                )}

                {activePillar === 2 && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 space-y-1.5">
                      <div className="text-slate-400">[08:42:10 PM] Customer: "Do you have emergency slots tonight?"</div>
                      <div className="text-emerald-300">[08:42:19 PM] AI Receptionist: "Yes! We have a technician available at 9:30 PM. Shall I lock that in?" (Response: 9s)</div>
                    </div>
                    <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-cyan-300 text-[11px]">
                      ✔ Calendar Appointment Auto-Booked<br />
                      ✔ Confirmation SMS Dispatched to Owner
                    </div>
                  </div>
                )}

                {activePillar === 3 && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-300 space-y-1">
                      <div>⭐⭐⭐⭐⭐ 5.0 Rating (482 Total)</div>
                      <div className="text-slate-400 text-[11px]">Velocity: +18 Reviews this month</div>
                      <div className="text-emerald-400 text-[11px]">Sentiment Score: 98.4% Positive</div>
                    </div>
                    <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-800/40 text-amber-300 text-[11px]">
                      ✔ Automated SMS review triggers active<br />
                      ✔ AI-powered responses with SEO keywords
                    </div>
                  </div>
                )}

                <div className="text-[11px] text-slate-500 text-center">
                  Fully managed and monitored by ApexLead Systems engineers.
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
