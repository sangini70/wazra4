export interface NavItem {
  label: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'price' | 'product' | 'shipping' | 'general';
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface SeoData {
  title: string;
  description: string;
  keywords: string[];
}

export interface ComplianceRule {
  forbidden: string;
  alternative: string;
  reason: string;
}