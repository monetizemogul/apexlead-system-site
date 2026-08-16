import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Search, 
  Calendar, 
  Phone, 
  Menu, 
  X, 
  CheckCircle2, 
  Bot, 
  Layers, 
  BarChart3, 
  HelpCircle,
  ShieldCheck,
  ChevronRight,
  Video,
  MapPin,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenScanner: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenScanner, onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-2.5' 
          : 'bg-slate-950/80 backdrop-blur-sm py-3'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="hidden md:block bg-slate-900/90 border-b border-slate-800/80 py-1 px-4 text-[11px] text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Answer Engine Optimization (AEO) & AI Visibility
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-indigo-400" />
              HQ: {BUSINESS_INFO.address}
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <Video className="w-3 h-3 text-cyan-400" />
              Serving Clients Everywhere via Zoom
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-400">Direct Inquiries:</span>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="font-bold text-white hover:text-indigo-400 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              Call or Text: {BUSINESS_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-1">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group" id="nav-brand-logo">
            <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-950 p-0.5 border border-cyan-500/40 shadow-lg shadow-cyan-500/20 group-hover:border-cyan-400 group-hover:shadow-cyan-400/40 group-hover:scale-105 transition-all duration-300 overflow-hidden">
              <img
                src="/logo.png"
                alt="ApexLead Systems Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-sans">
                  Apex<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">Lead</span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-200 border border-cyan-500/40 bg-cyan-950/60 px-1.5 py-0.5 rounded shadow-sm">
                  Systems
                </span>
              </div>
              <span className="text-[10px] text-cyan-300 font-semibold tracking-wider uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                AI Visibility Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#aeo-knowledge-hub" className="hover:text-indigo-400 transition-colors flex items-center gap-1 py-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              AEO Knowledge Hub
            </a>
            <a href="#scanner" className="hover:text-indigo-400 transition-colors py-1">
              AI Scanner
            </a>
            <a href="#how-it-works" className="hover:text-indigo-400 transition-colors py-1">
              How AI Search Works
            </a>
            <a href="#pillars" className="hover:text-indigo-400 transition-colors py-1">
              The 4 Pillars
            </a>
            <a href="#web-design-social-ads" className="hover:text-cyan-400 transition-colors py-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              AEO Websites & Ads
            </a>
            <a href="#optimizer-studio" className="hover:text-emerald-400 text-emerald-300 font-semibold transition-colors py-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Optimize My Site
            </a>
            <a href="#calculator" className="hover:text-indigo-400 transition-colors py-1">
              ROI Calculator
            </a>
            <a href="#case-studies" className="hover:text-indigo-400 transition-colors py-1">
              Results
            </a>
            <a href="#pricing" className="hover:text-indigo-400 transition-colors py-1">
              Packages
            </a>
            <a href="#faq" className="hover:text-indigo-400 transition-colors py-1">
              FAQ
            </a>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="nav-btn-call"
              className="px-3 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-slate-900/90 text-emerald-300 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
              title="Call or Text directly"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>

            <button
              onClick={onOpenBooking}
              id="nav-btn-booking"
              className="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 text-white shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:brightness-110 active:scale-95 transition-all duration-200 flex items-center gap-1.5"
            >
              <Video className="w-3.5 h-3.5" />
              <span>Book Zoom Strategy Call</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="sm:hidden px-2.5 py-1.5 text-xs font-semibold rounded-md bg-emerald-600/90 text-white flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>Call/Text</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              id="mobile-menu-btn"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* Quick entity info card in mobile menu */}
          <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs space-y-1.5">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              Headquarters: Belleview, MO
            </div>
            <div className="text-slate-300 flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-cyan-400" />
              Servicing Worldwide 100% via Zoom
            </div>
          </div>

          <nav className="flex flex-col space-y-1.5 text-sm font-medium text-slate-300">
            <a 
              href="#aeo-knowledge-hub" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2 rounded-lg bg-indigo-950/40 text-indigo-300 border border-indigo-500/20"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                AEO Knowledge Hub
              </span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#scanner" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-900 text-slate-300"
            >
              Live AI Visibility Scanner
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-900 text-slate-300"
            >
              How AI Search Works
            </a>
            <a 
              href="#pillars" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-900 text-slate-300"
            >
              The 4 Pillars of AI Visibility
            </a>
            <a 
              href="#web-design-social-ads" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-900 text-cyan-300 font-semibold flex items-center justify-between"
            >
              <span>AEO Websites & Social Media Ads</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">New</span>
            </a>
            <a 
              href="#optimizer-studio" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-900 text-emerald-300 font-semibold flex items-center justify-between"
            >
              <span>⚡ Optimize Any Website (AEO / SEO / GEO)</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">Free Tools</span>
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-900 text-slate-300"
            >
              Revenue Loss & ROI Calculator
            </a>
            <a 
              href="#case-studies" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-900 text-slate-300"
            >
              Verified Client Results
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-900 text-slate-300"
            >
              Pricing & Packages
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-900 text-slate-300"
            >
              Frequently Asked Questions
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-600/30"
            >
              <Video className="w-4 h-4" />
              <span>Schedule 1-on-1 Zoom Strategy Call</span>
            </button>
            
            <div className="grid grid-cols-2 gap-2">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="py-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1.5 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <a 
                href={`sms:${BUSINESS_INFO.phone}`} 
                className="py-2 rounded-lg bg-slate-900 border border-slate-800 text-indigo-300 text-xs font-semibold flex items-center justify-center gap-1.5 text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                <span>Text {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

