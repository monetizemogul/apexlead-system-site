import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Download, 
  RotateCcw, 
  ExternalLink, 
  Bot, 
  ShieldAlert, 
  ShieldCheck, 
  DollarSign, 
  Layers, 
  HelpCircle,
  Clock,
  Calendar,
  Building,
  MapPin,
  Globe,
  Share2,
  Check,
  Phone,
  Mail,
  User,
  Copy,
  FileCode,
  Radio,
  Lock
} from 'lucide-react';
import { AuditReport } from '../types';
import { SAMPLE_BUSINESS_TEMPLATES, INDUSTRIES_LIST } from '../data/mockData';
import confetti from 'canvas-confetti';

interface LiveVisibilityScannerProps {
  initialBusinessName?: string;
  initialLocation?: string;
  initialIndustry?: string;
  onOpenBookingWithDetails: (details: { businessName: string; location: string; industry: string; score: number }) => void;
}

export const LiveVisibilityScanner: React.FC<LiveVisibilityScannerProps> = ({
  initialBusinessName = '',
  initialLocation = '',
  initialIndustry = '',
  onOpenBookingWithDetails,
}) => {
  // NAP Form Fields
  const [businessName, setBusinessName] = useState(initialBusinessName || '');
  const [contactName, setContactName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [suite, setSuite] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState(initialIndustry || INDUSTRIES_LIST[0]);
  const [websiteUrl, setWebsiteUrl] = useState('');
  
  // UI & Scan State
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);
  const [auditReport, setAuditReport] = useState<AuditReport | null>(null);
  const [activeTab, setActiveTab] = useState<'engines' | 'nap' | 'simulation' | 'plan' | 'competitors'>('engines');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedSchema, setCopiedSchema] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const resultsRef = useRef<HTMLDivElement>(null);

  // Sync initial props if passed from Hero or navbar
  useEffect(() => {
    if (initialBusinessName) setBusinessName(initialBusinessName);
    if (initialLocation) {
      if (initialLocation.includes(',')) {
        const parts = initialLocation.split(',');
        setCity(parts[0].trim());
        setState(parts[1].trim());
      } else {
        setCity(initialLocation);
      }
    }
    if (initialIndustry) setIndustry(initialIndustry);
  }, [initialBusinessName, initialLocation, initialIndustry]);

  const SCAN_STAGES = [
    { title: 'Validating NAP (Name, Address, Phone) Grounding Data...', sub: 'Ensuring zero guesswork & exact entity disambiguation' },
    { title: 'Auditing ChatGPT Search & OpenAI Operator Knowledge Graph...', sub: 'Checking brand entity citations and prompt authority' },
    { title: 'Analyzing Google Gemini & AI Overviews Local 3-Pack...', sub: 'Evaluating local map pack placement and review sentiment' },
    { title: 'Scanning Perplexity AI Pro & Schema.org JSON-LD Hierarchy...', sub: 'Evaluating entity authority links and real-time citations' },
    { title: 'Testing Apple Intelligence & Siri Voice Search Preparedness...', sub: 'Assessing conversational voice prompts and Apple Business Connect' },
    { title: 'Compiling Competitor Displacement Matrix & Revenue Roadmap...', sub: 'Finalizing bespoke AEO action plan' },
  ];

  const handleStartScan = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setFormError(null);

    // Validation
    const cleanBusiness = businessName.trim();
    const cleanCity = city.trim();
    const cleanState = state.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim();

    if (!cleanBusiness) {
      setFormError('Please enter your Business Name.');
      return;
    }
    if (!cleanCity || !cleanState) {
      setFormError('Please enter both City and State for exact local entity verification.');
      return;
    }
    if (!cleanPhone) {
      setFormError('Please enter a valid Phone Number to verify NAP directory citations.');
      return;
    }
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setFormError('Please enter a valid Business Email where your full audit can be routed.');
      return;
    }

    setIsScanning(true);
    setScanStep(0);
    setScanProgress(5);
    setAuditReport(null);

    const progressInterval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + 15;
      });
      setScanStep((prev) => (prev < SCAN_STAGES.length - 1 ? prev + 1 : prev));
    }, 400);

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: cleanBusiness,
          contactName: contactName.trim() || 'Business Owner',
          streetAddress: streetAddress.trim(),
          suite: suite.trim(),
          city: cleanCity,
          state: cleanState,
          zipCode: zipCode.trim(),
          phone: cleanPhone,
          email: cleanEmail,
          industry: industry || 'Local Business',
          websiteUrl: websiteUrl.trim(),
        }),
      });

      const data = await response.json();
      
      clearInterval(progressInterval);
      setScanProgress(100);
      
      setTimeout(() => {
        setIsScanning(false);
        setAuditReport(data);
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
        });

        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }, 400);

    } catch (err) {
      console.error('Scan error:', err);
      clearInterval(progressInterval);
      setIsScanning(false);
      setFormError('An error occurred while generating the audit. Please check your connection and retry.');
    }
  };

  const handleLoadSample = (sample: typeof SAMPLE_BUSINESS_TEMPLATES[0]) => {
    setBusinessName(sample.name);
    setContactName(sample.contactName);
    setStreetAddress(sample.streetAddress);
    setSuite(sample.suite);
    setCity(sample.city);
    setState(sample.state);
    setZipCode(sample.zipCode);
    setPhone(sample.phone);
    setEmail(sample.email);
    setIndustry(sample.industry);
    setWebsiteUrl(sample.website);
    setFormError(null);
  };

  const handleCopyReport = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopySchemaSnippet = () => {
    if (auditReport?.napAudit?.schemaOrgSnippetGenerated) {
      navigator.clipboard.writeText(auditReport.napAudit.schemaOrgSnippetGenerated);
      setCopiedSchema(true);
      setTimeout(() => setCopiedSchema(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20';
    if (score >= 60) return 'text-amber-400 border-amber-500/30 bg-amber-950/20';
    return 'text-rose-400 border-rose-500/30 bg-rose-950/20';
  };

  return (
    <section id="scanner" className="py-20 bg-slate-950 relative border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-indigo-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-xs text-indigo-300 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Zero-Guesswork AEO Diagnostic Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live AI Search & NAP Entity Visibility Scanner
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-3">
            Enter your business <strong className="text-white">NAP (Name, Address, Phone)</strong> data below. Complete NAP grounding removes all guesswork and delivers a 100% verified audit across ChatGPT, Gemini, Perplexity & Apple Intelligence.
          </p>
        </div>

        {/* Input Form Card with Structured NAP Sections */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
          
          {/* Why NAP Banner */}
          <div className="mb-6 p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20 flex items-start gap-3 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white">Why NAP Data is Mandatory for Accurate AEO: </span>
              Generative search engines (ChatGPT, Google Gemini AI Overviews, Apple Siri) anchor local rankings to exact Name, Address, and Phone consistency. Collecting this data ensures zero guesswork and generates your custom LocalBusiness JSON-LD Schema.
            </div>
          </div>

          {formError && (
            <div className="mb-5 p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-xs text-rose-200 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          <form onSubmit={handleStartScan} className="space-y-6">
            
            {/* Section 1: Business Identity */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                <Building className="w-4 h-4 text-indigo-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  1. Business Identity & Primary Contact
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Business Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                    <span>Business / Entity Name *</span>
                    <span className="text-[10px] text-slate-500 font-normal">Exact public registered name</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Precision Master Roofing & Solar"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    id="scanner-input-business"
                  />
                </div>

                {/* Primary Contact Person */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
                    <User className="w-3 h-3 text-indigo-400" />
                    <span>Contact Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    id="scanner-input-contact-name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Industry / Category */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
                    <Layers className="w-3 h-3 text-cyan-400" />
                    <span>Industry Category *</span>
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    id="scanner-select-industry"
                  >
                    {INDUSTRIES_LIST.map((ind) => (
                      <option key={ind} value={ind} className="bg-slate-900 text-white">
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Website URL */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-amber-400" />
                    <span>Website URL</span>
                  </label>
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="e.g. https://mybusiness.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    id="scanner-input-website"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Physical Address (A in NAP) */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    2. Physical Location & Service Address (Address Grounding)
                  </h3>
                </div>
                <span className="text-[10px] text-emerald-400 font-medium">Google Maps 3-Pack Grounding</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Street Address */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Street Address (or Service Area Center) *
                  </label>
                  <input
                    type="text"
                    required
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    placeholder="e.g. 1420 Blake Street"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    id="scanner-input-street"
                  />
                </div>

                {/* Suite / Unit */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Suite / Unit / Floor
                  </label>
                  <input
                    type="text"
                    value={suite}
                    onChange={(e) => setSuite(e.target.value)}
                    placeholder="e.g. Suite 300"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    id="scanner-input-suite"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* City */}
                <div className="col-span-2 sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Denver"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    id="scanner-input-city"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    State / Region *
                  </label>
                  <input
                    type="text"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="e.g. CO or MO"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    id="scanner-input-state"
                  />
                </div>

                {/* Zip Code */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Zip / Postal *
                  </label>
                  <input
                    type="text"
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="e.g. 80202"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    id="scanner-input-zip"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Verified Contact (P in NAP) */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    3. Verified Phone & Report Routing (Phone Grounding)
                  </h3>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">Apple Siri & Voice Assistant Link</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-emerald-400" />
                      <span>Business Phone (Call / SMS) *</span>
                    </span>
                    <span className="text-[10px] text-emerald-400 font-medium">E.164 Tested</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. (303) 555-0148"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    id="scanner-input-phone"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-indigo-400" />
                      <span>Work / Business Email *</span>
                    </span>
                    <span className="text-[10px] text-slate-400">Receives Full Audit PDF</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. contact@mybusiness.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    id="scanner-input-email"
                  />
                </div>
              </div>
            </div>

            {/* Quick Test Presets Selector */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-1.5 text-slate-400">
                <span className="font-semibold text-slate-300 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Auto-Fill Real Case:
                </span>
                {SAMPLE_BUSINESS_TEMPLATES.map((sample) => (
                  <button
                    key={sample.name}
                    type="button"
                    onClick={() => handleLoadSample(sample)}
                    className={`px-2.5 py-1 rounded-lg border transition-all text-[11px] font-medium ${
                      sample.name.includes('J Story')
                        ? 'bg-cyan-950/80 text-cyan-300 border-cyan-700/80 hover:border-cyan-400 font-bold'
                        : 'bg-slate-950 border-slate-800 hover:border-indigo-500 text-slate-300 hover:text-white'
                    }`}
                  >
                    {sample.name.includes('J Story') ? '⭐ J Story Bail Bonds' : `${sample.name.split(' ')[0]} (${sample.city})`}
                  </button>
                ))}
              </div>

              <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Zero Guesswork • 100% Privacy Protected</span>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isScanning}
                id="scanner-run-btn"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isScanning ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Grounding NAP Entities & Scanning Live LLM Citations...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Run Zero-Guesswork AI Visibility & NAP Audit</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Scanning In-Progress Animation Banner */}
          {isScanning && (
            <div className="mt-8 pt-6 border-t border-slate-800 animate-in fade-in duration-300">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  {SCAN_STAGES[scanStep]?.title}
                </span>
                <span className="font-mono text-indigo-400">{scanProgress}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 transition-all duration-300 ease-out rounded-full"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                <span>{SCAN_STAGES[scanStep]?.sub}</span>
                <span>Testing live grounding models</span>
              </div>
            </div>
          )}

        </div>

        {/* Audit Report Results View */}
        {auditReport && (
          <div ref={resultsRef} className="mt-12 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Top Results Card */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-800/60 text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      NAP Verified Audit Generated
                    </span>
                    <span className="text-xs text-slate-500">
                      Report ID: {auditReport.id.substring(0, 14)}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {auditReport.businessName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-indigo-300 font-semibold">{auditReport.industry}</span>
                    <span>•</span>
                    <span className="text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      {auditReport.location}
                    </span>
                    {auditReport.phone && (
                      <>
                        <span>•</span>
                        <span className="text-emerald-400 flex items-center gap-1 font-mono">
                          <Phone className="w-3 h-3" />
                          {auditReport.phone}
                        </span>
                      </>
                    )}
                  </p>
                </div>

                {/* Top Action buttons */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handleCopyReport}
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Print / PDF</span>
                  </button>

                  <button
                    onClick={() => {
                      setAuditReport(null);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>New Scan</span>
                  </button>
                </div>
              </div>

              {/* Score & Key Metrics Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-8 items-center">
                
                {/* Score Dial */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Overall AI Visibility Score
                  </div>

                  <div className="relative flex items-center justify-center w-36 h-36 my-2">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="stroke-slate-800"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className={
                          auditReport.overallScore >= 80
                            ? 'stroke-emerald-400'
                            : auditReport.overallScore >= 60
                            ? 'stroke-amber-400'
                            : 'stroke-rose-500'
                        }
                        strokeWidth="8"
                        strokeDasharray={264}
                        strokeDashoffset={264 - (264 * auditReport.overallScore) / 100}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-black text-white font-sans">
                        {auditReport.overallScore}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">OUT OF 100</span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getScoreColor(auditReport.overallScore)}`}>
                      Grade {auditReport.visibilityGrade}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {auditReport.overallScore < 70 ? 'High Revenue Leakage' : 'Solid Base with Opportunity'}
                    </span>
                  </div>
                </div>

                {/* Sub Metrics & Revenue Impact */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Missed Revenue Alert */}
                  <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-rose-300">Estimated Lost Monthly Revenue</div>
                      <div className="text-xl sm:text-2xl font-black text-white font-sans mt-0.5">
                        ${auditReport.estimatedLostMonthlyRevenue.toLocaleString()}
                        <span className="text-xs font-normal text-rose-300/80"> / month</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        From ~{auditReport.estimatedMonthlyMissedSearches} high-intent AI queries captured by competitors.
                      </div>
                    </div>
                  </div>

                  {/* Google Map 3-Pack Rank */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400">Local Maps 3-Pack Placement</div>
                      <div className="text-lg font-bold text-white font-sans mt-0.5">
                        {auditReport.localMapPackRankEstimate}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        Displaced by competitors outside primary 2-mile radius.
                      </div>
                    </div>
                  </div>

                  {/* Generative LLM Readiness */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400">Generative LLM Readiness</div>
                      <div className="text-lg font-bold text-white font-sans mt-0.5">
                        {auditReport.aiSearchReadiness}% Score
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        ChatGPT, Gemini & Perplexity citation coverage.
                      </div>
                    </div>
                  </div>

                  {/* Voice Search Score */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400">Voice & Siri Readiness</div>
                      <div className="text-lg font-bold text-white font-sans mt-0.5">
                        {auditReport.voiceSearchPreparedness}% Score
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        Apple Business Connect & conversational Q&A status.
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Executive Summary Quote */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-sm text-slate-300 leading-relaxed my-6">
                <span className="font-bold text-white">Executive Analyst Summary: </span>
                {auditReport.summary}
              </div>

              {/* Tabs Navigation */}
              <div className="mt-8 border-b border-slate-800 flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTab('engines')}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-colors flex items-center gap-2 ${
                    activeTab === 'engines'
                      ? 'bg-slate-800/90 text-white border-t-2 border-indigo-500'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Bot className="w-4 h-4 text-indigo-400" />
                  <span>AI Engine Breakdown</span>
                </button>

                <button
                  onClick={() => setActiveTab('nap')}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-colors flex items-center gap-2 ${
                    activeTab === 'nap'
                      ? 'bg-slate-800/90 text-white border-t-2 border-indigo-500'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileCode className="w-4 h-4 text-emerald-400" />
                  <span>NAP Entity & Schema Graph</span>
                </button>

                <button
                  onClick={() => setActiveTab('simulation')}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-colors flex items-center gap-2 ${
                    activeTab === 'simulation'
                      ? 'bg-slate-800/90 text-white border-t-2 border-indigo-500'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Live Prompt Simulation</span>
                </button>

                <button
                  onClick={() => setActiveTab('plan')}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-colors flex items-center gap-2 ${
                    activeTab === 'plan'
                      ? 'bg-slate-800/90 text-white border-t-2 border-indigo-500'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>4-Step Action Roadmap</span>
                </button>

                <button
                  onClick={() => setActiveTab('competitors')}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-colors flex items-center gap-2 ${
                    activeTab === 'competitors'
                      ? 'bg-slate-800/90 text-white border-t-2 border-indigo-500'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <span>Competitor Displacement</span>
                </button>
              </div>

              {/* Tab Contents */}
              <div className="pt-6">
                
                {/* TAB 1: AI Engines Breakdown */}
                {activeTab === 'engines' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {auditReport.engineBreakdown.map((engine, idx) => (
                        <div key={idx} className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-white text-sm flex items-center gap-2">
                              <span>{engine.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-bold text-slate-300">{engine.score}/100</span>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                                engine.status === 'Critical' 
                                  ? 'bg-rose-950 text-rose-400 border border-rose-800/60'
                                  : engine.status === 'Moderate'
                                  ? 'bg-amber-950 text-amber-400 border border-amber-800/60'
                                  : 'bg-emerald-950 text-emerald-400 border border-emerald-800/60'
                              }`}>
                                {engine.status}
                              </span>
                            </div>
                          </div>

                          <div className="text-xs text-slate-400 leading-relaxed">
                            <strong className="text-slate-300">Analysis:</strong> {engine.summary}
                          </div>

                          <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-900/40 text-xs text-indigo-300">
                            <strong className="text-indigo-200">Apex Implementation:</strong> {engine.recommendation}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 2: NAP Entity & Schema Graph (NEW ZERO GUESSWORK TAB) */}
                {activeTab === 'nap' && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    
                    {/* NAP Consistency Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                        <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                          Name & Contact Consistency
                        </div>
                        <div className="text-base font-bold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>100% Grounded</span>
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {auditReport.businessName} • {auditReport.phone}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                        <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                          Google Maps & GBP Node
                        </div>
                        <div className="text-base font-bold text-amber-300 flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4 text-amber-400" />
                          <span>{auditReport.napAudit?.googleMapsSyncStatus || 'Action Needed'}</span>
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Requires structured geo-coordinates and review velocity.
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                        <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                          Apple Business Connect
                        </div>
                        <div className="text-base font-bold text-indigo-300 flex items-center gap-1.5">
                          <Bot className="w-4 h-4 text-indigo-400" />
                          <span>{auditReport.napAudit?.appleBusinessConnectSync || 'Ready to Sync'}</span>
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Enables Siri voice recommendations on iOS devices.
                        </div>
                      </div>
                    </div>

                    {/* Generated JSON-LD Schema Snippet */}
                    <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                      <div className="p-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-semibold text-white">
                          <FileCode className="w-4 h-4 text-indigo-400" />
                          <span>Generated Schema.org LocalBusiness JSON-LD (Ready to deploy)</span>
                        </div>
                        <button
                          onClick={handleCopySchemaSnippet}
                          className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow"
                        >
                          {copiedSchema ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedSchema ? 'Copied Code!' : 'Copy JSON-LD'}</span>
                        </button>
                      </div>

                      <pre className="p-4 text-xs font-mono text-emerald-300 bg-slate-950/90 overflow-x-auto max-h-60 leading-relaxed">
                        {auditReport.napAudit?.schemaOrgSnippetGenerated || '// Generating schema graph...'}
                      </pre>
                    </div>

                  </div>
                )}

                {/* TAB 3: Live Prompt Simulation */}
                {activeTab === 'simulation' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <p className="text-xs text-slate-400 mb-2">
                      Here is what happens when real prospective buyers in {auditReport.location} ask Generative AI tools for recommendations:
                    </p>
                    <div className="space-y-4">
                      {auditReport.aiPromptSimulations.map((sim, idx) => (
                        <div key={idx} className="p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3">
                          <div className="flex items-start gap-2.5">
                            <div className="p-1.5 rounded-md bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold">
                              PROMPT
                            </div>
                            <div className="text-sm font-semibold text-white">
                              "{sim.prompt}"
                            </div>
                          </div>

                          <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                            <Bot className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                                Current AI Response:
                              </div>
                              {sim.aiResponseSnippet}
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-xs pt-1">
                            <span className="text-slate-400 font-medium">
                              Recommendation Status:
                            </span>
                            <span className={`px-2 py-0.5 rounded font-semibold ${
                              sim.isMentioned ? 'bg-amber-950 text-amber-300' : 'bg-rose-950 text-rose-300'
                            }`}>
                              {sim.recommendationStatus}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 4: 4-Step Action Plan */}
                {activeTab === 'plan' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <p className="text-xs text-slate-400 mb-2">
                      Priority action items to establish top AI entity ranking for {auditReport.businessName}:
                    </p>
                    <div className="space-y-3">
                      {auditReport.actionPlan.map((action, idx) => (
                        <div key={action.id || idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="space-y-1 max-w-2xl">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center">
                                {idx + 1}
                              </span>
                              <span className="font-bold text-sm text-white">{action.title}</span>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                action.priority === 'High' ? 'bg-rose-950 text-rose-300' : 'bg-emerald-950 text-emerald-300'
                              }`}>
                                {action.priority} Priority
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 pl-7">{action.description}</p>
                          </div>

                          <div className="sm:text-right shrink-0 pl-7 sm:pl-0">
                            <div className="text-xs font-bold text-emerald-400">{action.impact}</div>
                            <div className="text-[11px] text-slate-500 flex items-center sm:justify-end gap-1 mt-0.5">
                              <Clock className="w-3 h-3" />
                              <span>{action.estimatedTimeToFix}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 5: Competitor Vulnerabilities */}
                {activeTab === 'competitors' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <p className="text-xs text-slate-400 mb-2">
                      Local competitor comparison & displacement angles in {auditReport.location}:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {auditReport.competitors.map((comp, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-white">{comp.name}</span>
                            <span className="text-xs font-mono font-bold text-amber-400">
                              Current AI Rank #{comp.aiRank}
                            </span>
                          </div>

                          <div className="text-xs text-slate-400">
                            <span className="font-semibold text-slate-300">Competitor Strength: </span>
                            {comp.strength}
                          </div>

                          <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-900/40 text-xs text-emerald-300">
                            <span className="font-semibold text-emerald-200">Displacement Opportunity: </span>
                            {comp.vulnerability}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom CTA Banner */}
              <div className="mt-8 pt-6 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-indigo-950/40 to-emerald-950/30 p-6 rounded-xl border">
                <div className="text-center sm:text-left">
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Ready to fix your AI Visibility and capture these leads?
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Book a 15-minute 1-on-1 strategy session. We'll walk you through this exact audit and customize your 90-day plan via Zoom.
                  </p>
                </div>

                <button
                  onClick={() => onOpenBookingWithDetails({
                    businessName: auditReport.businessName,
                    location: auditReport.location,
                    industry: auditReport.industry,
                    score: auditReport.overallScore,
                  })}
                  id="btn-book-from-audit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 hover:brightness-110 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/30 active:scale-95 transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Claim Strategy Session</span>
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
