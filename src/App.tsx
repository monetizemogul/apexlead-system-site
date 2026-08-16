/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AEOKnowledgeCard } from './components/AEOKnowledgeCard';
import { LiveVisibilityScanner } from './components/LiveVisibilityScanner';
import { AISearchComparison } from './components/AISearchComparison';
import { FourPillars } from './components/FourPillars';
import { AeoWebAndSocialStudio } from './components/AeoWebAndSocialStudio';
import { WebsiteOptimizerStudio } from './components/WebsiteOptimizerStudio';
import { ROICalculator } from './components/ROICalculator';
import { CaseStudies } from './components/CaseStudies';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AIAdvisorChat } from './components/AIAdvisorChat';
import { PricingPlan } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<{
    businessName?: string;
    location?: string;
    industry?: string;
    score?: number;
    plan?: PricingPlan;
  }>({});

  const [scannerPrefill, setScannerPrefill] = useState<{
    businessName: string;
    location: string;
    industry?: string;
  }>({
    businessName: '',
    location: '',
    industry: '',
  });

  const handleHeroStartScan = (businessName: string, location: string, industry?: string) => {
    setScannerPrefill({ businessName, location, industry });
    const scannerElement = document.getElementById('scanner');
    if (scannerElement) {
      scannerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenScanner = () => {
    const scannerElement = document.getElementById('scanner');
    if (scannerElement) {
      scannerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (details?: typeof bookingDetails) => {
    if (details) {
      setBookingDetails(details);
    }
    setBookingModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setBookingDetails((prev) => ({ ...prev, plan }));
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white font-sans antialiased">
      
      {/* Navigation Bar */}
      <Navbar 
        onOpenScanner={handleOpenScanner} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          onStartScan={handleHeroStartScan} 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Verified AEO Grounding Knowledge Hub */}
        <AEOKnowledgeCard onOpenBooking={() => handleOpenBooking()} />

        {/* Live Interactive AI Visibility Scanner */}
        <LiveVisibilityScanner
          initialBusinessName={scannerPrefill.businessName}
          initialLocation={scannerPrefill.location}
          initialIndustry={scannerPrefill.industry}
          onOpenBookingWithDetails={(details) => handleOpenBooking(details)}
        />

        {/* Old SEO vs AI Search Comparison */}
        <AISearchComparison />

        {/* 4-Pillar AI Visibility & Growth Engine */}
        <FourPillars onOpenBooking={() => handleOpenBooking()} />

        {/* AEO / GEO / SEO Optimized Websites & Social Media / Ad Creative Studio */}
        <AeoWebAndSocialStudio 
          onOpenBookingWithService={(serviceName) => {
            handleOpenBooking({
              industry: serviceName,
            });
          }}
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Live AEO, SEO & GEO Website Code Generator & Optimizer Studio */}
        <WebsiteOptimizerStudio
          onOpenBookingWithService={(serviceName) => {
            handleOpenBooking({
              industry: serviceName,
            });
          }}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Interactive Revenue Loss & ROI Calculator */}
        <ROICalculator onOpenBooking={() => handleOpenBooking()} />

        {/* Verified Case Studies & Testimonials */}
        <CaseStudies onOpenBooking={() => handleOpenBooking()} />

        {/* Done-For-You Pricing & Packages */}
        <PricingSection 
          onSelectPlan={handleSelectPlan} 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* FAQ Knowledge Base */}
        <FAQSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenScanner={handleOpenScanner} 
      />

      {/* Interactive Booking / Consultation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDetails={bookingDetails}
      />

      {/* Floating AI Consultant Concierge */}
      <AIAdvisorChat 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenScanner={handleOpenScanner} 
      />

    </div>
  );
}

