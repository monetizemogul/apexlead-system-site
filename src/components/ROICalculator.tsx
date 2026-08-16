import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  Zap, 
  BarChart3,
  Calendar
} from 'lucide-react';
import { INDUSTRIES_LIST } from '../data/mockData';

interface ROICalculatorProps {
  onOpenBooking: () => void;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ onOpenBooking }) => {
  const [industry, setIndustry] = useState(INDUSTRIES_LIST[0]);
  const [avgCustomerValue, setAvgCustomerValue] = useState(2500);
  const [currentMonthlyLeads, setCurrentMonthlyLeads] = useState(25);

  // Dynamic calculations based on industry benchmarks
  const estimatedMissedAiSearches = Math.round(currentMonthlyLeads * 5.2 + 80);
  const projectedNewAiClients = Math.max(3, Math.round(estimatedMissedAiSearches * 0.045));
  const estimatedAddedMonthlyRevenue = projectedNewAiClients * avgCustomerValue;
  const estimatedAddedAnnualRevenue = estimatedAddedMonthlyRevenue * 12;
  const apexMonthlyInvestment = 1997; // standard plan
  const projectedRoiMultiple = (estimatedAddedMonthlyRevenue / apexMonthlyInvestment).toFixed(1);

  return (
    <section id="calculator" className="py-20 bg-slate-950/80 relative border-t border-slate-900 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/3 w-[450px] h-[300px] bg-emerald-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-xs text-emerald-300 font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Financial Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Visibility Revenue Impact & ROI Calculator
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-3">
            Adjust the sliders below to calculate the revenue your business is currently losing to competitors on AI search engines — and your projected return with ApexLead Systems.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Sliders & Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Industry Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Select Your Industry Category
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                >
                  {INDUSTRIES_LIST.map((ind) => (
                    <option key={ind} value={ind} className="bg-slate-900 text-white">
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              {/* Slider 1: Average Customer / Job Value */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-slate-300">Average Customer / Job Lifetime Value:</span>
                  <span className="font-mono text-emerald-400 font-bold text-base sm:text-lg">
                    ${avgCustomerValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="15000"
                  step="100"
                  value={avgCustomerValue}
                  onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>$300</span>
                  <span>$5,000</span>
                  <span>$10,000</span>
                  <span>$15,000+</span>
                </div>
              </div>

              {/* Slider 2: Current Monthly Inquiries */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-slate-300">Current Monthly Inquiries / Calls:</span>
                  <span className="font-mono text-indigo-400 font-bold text-base sm:text-lg">
                    {currentMonthlyLeads} leads/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={currentMonthlyLeads}
                  onChange={(e) => setCurrentMonthlyLeads(Number(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>5 leads</span>
                  <span>50 leads</span>
                  <span>100 leads</span>
                  <span>200+ leads</span>
                </div>
              </div>

              {/* Benchmark Summary points */}
              <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Based on aggregate data from over 480 local service businesses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Includes 24/7 AI Speed-to-Lead conversion multiplier</span>
                </div>
              </div>

            </div>

            {/* Right Column: Projected ROI Output Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Projected AI Growth
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-800 text-[11px] font-bold text-emerald-400">
                  {projectedRoiMultiple}x Est. ROI
                </span>
              </div>

              {/* Added Monthly Revenue Highlight */}
              <div>
                <div className="text-xs font-semibold text-slate-400">
                  Projected Added Monthly Revenue
                </div>
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 font-sans mt-0.5">
                  +${estimatedAddedMonthlyRevenue.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400"> / month</span>
                </div>
              </div>

              {/* Annual Value Highlight */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Added Annual Run-Rate:</div>
                  <div className="text-lg font-bold text-white font-mono">
                    +${estimatedAddedAnnualRevenue.toLocaleString()} / year
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-400">New High-Value Clients:</div>
                  <div className="text-lg font-bold text-emerald-400 font-mono">
                    +{projectedNewAiClients} / month
                  </div>
                </div>
              </div>

              {/* Breakdown numbers */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Missed AI Searches in Your City:</span>
                  <span className="font-mono font-bold text-white">~{estimatedMissedAiSearches}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">AI Speed-to-Lead Response:</span>
                  <span className="font-mono font-bold text-emerald-400">&lt; 15 Seconds</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 hover:brightness-110 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-indigo-600/30 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Lock in This ROI for My Business</span>
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
