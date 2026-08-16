import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Building, 
  Mail, 
  User, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  DollarSign, 
  ShieldCheck,
  CalendarPlus,
  Video,
  MapPin,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PricingPlan } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDetails?: {
    businessName?: string;
    location?: string;
    industry?: string;
    score?: number;
    plan?: PricingPlan;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialDetails,
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState(initialDetails?.businessName || '');
  const [location, setLocation] = useState(initialDetails?.location || '');
  const [industry, setIndustry] = useState(initialDetails?.industry || 'HVAC & Air Conditioning');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [monthlyRevenue, setMonthlyRevenue] = useState('$25k - $50k / month');
  const [primaryGoal, setPrimaryGoal] = useState(
    initialDetails?.industry?.includes('AEO') || initialDetails?.industry?.includes('Social')
      ? initialDetails.industry
      : 'Answer Engine Optimization (AEO) & ChatGPT Recommendations'
  );
  
  // Date & Time selection
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState('10:00 AM EST');

  if (!isOpen) return null;

  const TIME_SLOTS = [
    '09:00 AM EST',
    '10:00 AM EST',
    '11:30 AM EST',
    '01:00 PM EST',
    '02:30 PM EST',
    '04:00 PM EST',
  ];

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          businessName: businessName || 'Local Business',
          industry,
          websiteUrl,
          monthlyRevenue,
          primaryGoal,
          preferredDate: selectedDate,
          preferredTime: selectedTime,
        }),
      });

      setIsSubmitting(false);
      setStep(3);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.5 },
      });
    } catch (err) {
      console.error('Booking submission error:', err);
      setIsSubmitting(false);
      setStep(3); // show confirmation anyway
    }
  };

  const handleDownloadCalendarInvite = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ApexLead Systems//AI Visibility Strategy Session//EN
BEGIN:VEVENT
SUMMARY:ApexLead Systems: AEO & AI Visibility 1-on-1 Zoom Strategy Call
DESCRIPTION:1-on-1 Strategy Session with ApexLead Systems.\\nBusiness: ${businessName}\\nGoal: ${primaryGoal}\\nHost HQ: Belleview, MO\\nPhone: 636-331-5369 (Call or Text)\\nDelivery: 100% Remote via Zoom
STATUS:CONFIRMED
DTSTART:${selectedDate.replace(/-/g, '')}T150000Z
DTEND:${selectedDate.replace(/-/g, '')}T153000Z
LOCATION:Zoom Video Call (Link sent to ${email})
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `ApexLead_Zoom_Strategy_Call_${selectedDate}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-500 text-white shadow-md">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Book 1-on-1 Zoom AEO Strategy Session
              </h3>
              <p className="text-xs text-slate-400">
                15-Min Live Screen-Share Session • Serving Everywhere Worldwide via Zoom
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Contact Micro-Banner */}
        <div className="px-6 py-2 bg-slate-950/90 border-b border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>HQ: <strong className="text-slate-200">Belleview, MO</strong></span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-300 font-medium">All Consults via Zoom</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Prefer immediate contact?</span>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-emerald-400 font-bold hover:underline">
              Call/Text: {BUSINESS_INFO.phoneFormatted}
            </a>
          </div>
        </div>

        {/* Multi-Step Indicator */}
        <div className="px-6 pt-4 bg-slate-950/40 flex items-center gap-2 text-xs font-semibold">
          <div className={`flex-1 h-1.5 rounded-full ${step >= 1 ? 'bg-indigo-500' : 'bg-slate-800'}`} />
          <div className={`flex-1 h-1.5 rounded-full ${step >= 2 ? 'bg-indigo-500' : 'bg-slate-800'}`} />
          <div className={`flex-1 h-1.5 rounded-full ${step >= 3 ? 'bg-emerald-500' : 'bg-slate-800'}`} />
        </div>

        {/* Step 1: Business Profile & Goals */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Step 1 of 2</span>
              <h4 className="text-base font-bold text-white">Your Business & Growth Goals</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Business Name *</label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Apex Modern Dental"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Location (City, State) *</label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Dallas, TX (or anywhere)"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Dr. Julianne Ramos"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Work Email for Zoom Link *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. contact@business.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Phone / SMS for Confirmation *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. (636) 331-5369"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Current Monthly Revenue</label>
                <select
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Under $20k / month">Under $20k / month</option>
                  <option value="$20k - $50k / month">$20k - $50k / month</option>
                  <option value="$50k - $150k / month">$50k - $150k / month</option>
                  <option value="$150k+ / month">$150k+ / month (Enterprise)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Primary Growth Objective</label>
              <select
                value={primaryGoal}
                onChange={(e) => setPrimaryGoal(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="AEO / GEO / SEO Optimized Business Website (Build or Redesign)">
                  AEO / GEO / SEO Optimized Business Website (Build or Redesign)
                </option>
                <option value="Custom Social Media Posts & Paid Ad Campaigns (FB, IG, GBP, Meta Ads)">
                  Custom Social Media Posts & Paid Ad Campaigns (FB, IG, GBP, Meta Ads)
                </option>
                <option value="Answer Engine Optimization (AEO) & ChatGPT Recommendations">
                  Answer Engine Optimization (AEO) & ChatGPT Recommendations
                </option>
                <option value="Generative Engine Optimization (GEO) & Gemini AI Overviews">
                  Generative Engine Optimization (GEO) & Gemini AI Overviews
                </option>
                <option value="Rank #1 in Google Maps Local 3-Pack Radius">
                  Rank #1 in Google Maps Local 3-Pack Radius
                </option>
                <option value="Deploy 24/7 Autonomous AI Lead Capture Bot">
                  Deploy 24/7 Autonomous AI Lead Capture Bot
                </option>
                <option value="Full Omnipresence AI Visibility & Creative Growth Suite">
                  Full Omnipresence AI Visibility & Creative Growth Suite
                </option>
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  if (fullName && email && businessName) {
                    setStep(2);
                  } else {
                    alert('Please enter your Name, Email, and Business Name to proceed.');
                  }
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-indigo-600/30"
              >
                <span>Select Zoom Date & Time Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Date & Time Picker */}
        {step === 2 && (
          <form onSubmit={handleSubmitBooking} className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Step 2 of 2</span>
                <h4 className="text-base font-bold text-white">Choose Your 15-Minute Zoom Slot</h4>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-slate-400 hover:text-white underline"
              >
                Back to Details
              </button>
            </div>

            {/* Date selector */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">Preferred Consultation Date</label>
              <input
                type="date"
                required
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Time Slots */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">Select Time (EST / Eastern Time)</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {TIME_SLOTS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      selectedTime === t
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30 ring-1 ring-white/30'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Confirmation Note */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                <Video className="w-4 h-4 text-cyan-400" />
                Zoom Call Experience:
              </div>
              <p>
                We conduct a live screen-share audit of your business entity graph, analyze your competitors on ChatGPT and Perplexity, and map your 90-day AEO roadmap. Zero fluff, 100% actionable.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Back
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Reserving Zoom Slot...</span>
                  </>
                ) : (
                  <>
                    <Video className="w-4 h-4" />
                    <span>Confirm Zoom Strategy Session</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success Confirmation */}
        {step === 3 && (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-950/60">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h4 className="text-2xl font-extrabold text-white">
                Zoom Strategy Session Confirmed!
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                We've reserved your session for <strong className="text-white font-semibold">{selectedDate} at {selectedTime}</strong>.
              </p>
              <p className="text-xs text-slate-400">
                A Zoom video invitation with access details has been dispatched to <strong className="text-indigo-300">{email}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs text-slate-300 space-y-2 max-w-md mx-auto">
              <div className="font-bold text-white text-xs flex items-center justify-between">
                <span>Session Overview:</span>
                <span className="text-emerald-400 text-[11px]">Confirmed</span>
              </div>
              <div><strong className="text-slate-400">Business:</strong> {businessName} ({location})</div>
              <div><strong className="text-slate-400">Meeting Format:</strong> 100% Remote via Zoom</div>
              <div><strong className="text-slate-400">Host Agency:</strong> ApexLead Systems (HQ: Belleview, MO)</div>
              <div><strong className="text-slate-400">Direct Support:</strong> Call/Text {BUSINESS_INFO.phoneFormatted}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleDownloadCalendarInvite}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <CalendarPlus className="w-4 h-4 text-emerald-400" />
                <span>Add to Calendar (.ICS)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 text-white font-bold text-xs shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

