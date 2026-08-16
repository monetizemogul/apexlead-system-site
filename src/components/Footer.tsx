import React, { useState } from 'react';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Calendar,
  Video,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenScanner: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenScanner }) => {
  const [guideEmail, setGuideEmail] = useState('');
  const [guideDownloaded, setGuideDownloaded] = useState(false);

  const handleGuideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guideEmail.trim()) {
      setGuideDownloaded(true);
      setTimeout(() => setGuideDownloaded(false), 4000);
      setGuideEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="responsive" />

            <p className="text-slate-400 leading-relaxed max-w-sm">
              We engineer local businesses into the #1 recommended answer across ChatGPT, Google Gemini AI Overviews, Perplexity AI, and Google Maps Local 3-Pack. 100% remote delivery worldwide via Zoom.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white">Call or Text:</span>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-emerald-400 hover:underline font-bold">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
                <span className="text-slate-600">•</span>
                <a href={`sms:${BUSINESS_INFO.phone}`} className="text-indigo-400 hover:underline">
                  Send SMS
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Headquarters: <strong className="text-white">{BUSINESS_INFO.address}</strong></span>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Video className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Service Model: <strong className="text-cyan-300">Servicing Everyone Everywhere via Zoom</strong></span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">AEO & Creative Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#web-design-social-ads" className="hover:text-cyan-400 text-cyan-300 font-medium transition-colors">
                  AEO / GEO / SEO Business Websites
                </a>
              </li>
              <li>
                <a href="#web-design-social-ads" className="hover:text-indigo-400 transition-colors">
                  Social Media Posts & Ad Creatives
                </a>
              </li>
              <li>
                <a href="#aeo-knowledge-hub" className="hover:text-indigo-400 transition-colors">
                  Answer Engine Optimization (AEO)
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-indigo-400 transition-colors">
                  Generative Engine Optimization (GEO)
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-indigo-400 transition-colors">
                  Google Maps Local 3-Pack Radar
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-indigo-400 transition-colors">
                  24/7 AI Speed-to-Lead Receptionist
                </a>
              </li>
              <li>
                <button onClick={onOpenScanner} className="text-emerald-400 hover:underline">
                  Free AI Visibility Scanner
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Industries Served */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Industries Served</h4>
            <ul className="space-y-2">
              <li><span className="text-slate-400">HVAC & Home Services</span></li>
              <li><span className="text-slate-400">Roofing & Exterior Contractors</span></li>
              <li><span className="text-slate-400">Dentists & Orthodontists</span></li>
              <li><span className="text-slate-400">Medical Spas & Aesthetics</span></li>
              <li><span className="text-slate-400">Personal Injury & Family Law</span></li>
              <li><span className="text-slate-400">Auto Repair & High-End Detailing</span></li>
            </ul>
          </div>

          {/* Col 5: Free AI Playbook Download */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Free AEO Blueprint</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Download our 2026 executive playbook: <em>"How Small Businesses Get Recommended First on ChatGPT & Perplexity"</em>.
            </p>

            <form onSubmit={handleGuideSubmit} className="space-y-2">
              <input
                type="email"
                required
                value={guideEmail}
                onChange={(e) => setGuideEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
              >
                <Send className="w-3 h-3" />
                <span>Get Free AEO Blueprint</span>
              </button>
            </form>

            {guideDownloaded && (
              <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800 text-[11px] text-emerald-300 flex items-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>AEO Blueprint sent to your inbox!</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} ApexLead Systems LLC • Belleview, MO • Global Remote Consultations via Zoom.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">AEO Knowledge Protocol</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

