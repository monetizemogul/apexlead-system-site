import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Search, 
  Sparkles, 
  Phone, 
  MessageSquare 
} from 'lucide-react';
import { FAQS } from '../data/mockData';

interface FAQSectionProps {
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (f) => 
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-slate-950 relative border-t border-slate-900">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-xs text-indigo-300 font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span>Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-3">
            Everything you need to know about AI search visibility, Generative Engine Optimization, and working with ApexLead Systems.
          </p>

          {/* Quick FAQ Search Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g. SEO vs GEO, guarantees, timelines)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900/90 border-indigo-500/50 shadow-lg shadow-indigo-950/30'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-sm sm:text-base font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded-lg shrink-0 transition-transform ${
                      isOpen ? 'bg-indigo-500/20 text-indigo-300 rotate-180' : 'bg-slate-950 text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-500 text-sm">
              No matching questions found. Ask our AI Assistant in the bottom right corner!
            </div>
          )}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">Have a specific question about your market or industry?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Our Senior AI Visibility Engineers are available for a 15-minute diagnostic session.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-md"
          >
            Speak With an Engineer
          </button>
        </div>

      </div>
    </section>
  );
};
