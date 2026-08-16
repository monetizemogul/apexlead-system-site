export interface AuditRequest {
  businessName: string;
  contactName?: string;
  streetAddress?: string;
  suite?: string;
  city: string;
  state: string;
  zipCode?: string;
  location?: string;
  phone: string;
  email: string;
  industry: string;
  websiteUrl?: string;
}

export interface EngineScore {
  name: string;
  score: number; // 0-100
  status: 'Critical' | 'Moderate' | 'Good' | 'Optimal';
  summary: string;
  recommendation: string;
}

export interface ActionPlanItem {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Quick Win';
  impact: string;
  description: string;
  estimatedTimeToFix: string;
}

export interface CompetitorInsight {
  name: string;
  aiRank: number;
  strength: string;
  vulnerability: string;
}

export interface NAPValidationResult {
  isNameConsistent: boolean;
  isAddressVerified: boolean;
  isPhoneFormattedE164: boolean;
  napCompletenessScore: number;
  googleMapsSyncStatus: 'Verified' | 'Unclaimed / Inconsistent' | 'Action Needed';
  appleBusinessConnectSync: 'Synced' | 'Missing Node' | 'Unverified';
  schemaOrgSnippetGenerated: string;
}

export interface AuditReport {
  id: string;
  businessName: string;
  contactName?: string;
  streetAddress?: string;
  suite?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  location: string;
  phone?: string;
  email?: string;
  industry: string;
  websiteUrl?: string;
  createdAt: string;
  overallScore: number; // 0-100
  visibilityGrade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
  aiSearchReadiness: number;
  localMapPackRankEstimate: string;
  citationConsistency: number;
  voiceSearchPreparedness: number;
  estimatedMonthlyMissedSearches: number;
  estimatedLostMonthlyRevenue: number;
  napAudit: NAPValidationResult;
  engineBreakdown: EngineScore[];
  actionPlan: ActionPlanItem[];
  competitors: CompetitorInsight[];
  aiPromptSimulations: {
    prompt: string;
    aiResponseSnippet: string;
    isMentioned: boolean;
    recommendationStatus: string;
  }[];
  summary: string;
  topStrengths: string[];
  criticalGaps: string[];
}

export interface NAPAuditLead {
  id: string;
  businessName: string;
  contactName: string;
  phone: string;
  email: string;
  streetAddress: string;
  suite?: string;
  city: string;
  state: string;
  zipCode: string;
  industry: string;
  websiteUrl?: string;
  overallScore?: number;
  visibilityGrade?: string;
  submittedAt: string;
  source: 'Live AI Visibility Scanner' | 'Booking Form' | 'Direct Intake';
}

export interface CaseStudyItem {
  id: string;
  clientName: string;
  industry: string;
  location: string;
  tagline: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatarUrl?: string;
  };
  duration: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  notIncluded?: string[];
  idealFor: string;
  ctaText: string;
}

export interface LeadSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  industry: string;
  websiteUrl?: string;
  monthlyRevenue?: string;
  primaryGoal: string;
  preferredDate?: string;
  preferredTime?: string;
  submittedAt: string;
}

export interface WebsiteCreativeService {
  id: string;
  category: 'website' | 'social' | 'ads' | 'bundle';
  title: string;
  tagline: string;
  description: string;
  features: string[];
  metrics: string;
  iconName: string;
}

export interface SocialPostTemplate {
  id: string;
  platform: 'Instagram / Facebook' | 'Google Business Profile' | 'Meta Paid Ad' | 'Reel / Video Script';
  type: string;
  headline: string;
  captionPreview: string;
  visualTag: string;
  engagementBenefit: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
}


