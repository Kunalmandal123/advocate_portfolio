
import React from 'react';
import { 
  Scale, 
  ShieldCheck, 
  Users, 
  Building2, 
  Gavel, 
  Home, 
  FileText, 
  MessageSquare, 
  Search, 
  Files, 
  CheckCircle2,
  Briefcase
} from 'lucide-react';
import { PracticeArea, BlogPost, Testimonial, Resource } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'civil-law',
    title: 'Civil Litigation',
    description: 'Handling recovery suits, injunctions, specific performance, and appeals across District Courts and High Courts.',
    process: ['Legal Notice', 'Plaint Filing', 'Written Statement', 'Evidence', 'Arguments'],
    timeline: 'Variable (Court Dependent)',
    icon: 'Scale'
  },
  {
    id: 'criminal-law',
    title: 'Criminal Defense',
    description: 'Expertise in bail matters, criminal trials, quashing of FIRs, and representation in white-collar crime investigations.',
    process: ['FIR Review', 'Bail Application', 'Chargesheet Analysis', 'Trial', 'Verdict'],
    timeline: 'Varies by Case Complexity',
    icon: 'Gavel'
  },
  {
    id: 'family-law',
    title: 'Matrimonial Matters',
    description: 'Compassionate handling of mutual/contested divorce, child custody, maintenance (125 CrPC), and domestic violence cases.',
    process: ['Counselling', 'Petition Filing', 'Mediation', 'Trial', 'Decree'],
    timeline: '6 - 18 Months',
    icon: 'Users'
  },
  {
    id: 'property-disputes',
    title: 'Property & Revenue',
    description: 'Specializing in partition suits, land acquisition challenges, RERA disputes, and property due diligence.',
    process: ['Title Verification', 'Public Notice', 'Litigation', 'Execution'],
    timeline: '12 - 36 Months',
    icon: 'Home'
  },
  {
    id: 'drafting',
    title: 'Drafting & Conveyancing',
    description: 'Professional drafting of Sale Deeds, Lease Agreements, Wills, Gift Deeds, and Commercial Contracts.',
    process: ['Instruction', 'First Draft', 'Review', 'Finalization', 'Registration'],
    timeline: '3 - 7 Days',
    icon: 'FileText'
  },
  {
    id: 'corporate-law',
    title: 'Corporate Advisory',
    description: 'Assisting startups and SMEs with compliance, MSME disputes, NCLT matters, and partnership agreements.',
    process: ['Assessment', 'Consultation', 'Compliance Check', 'Reporting'],
    timeline: 'Ongoing / Project Based',
    icon: 'Building2'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Your Rights During an Arrest: A Simple Guide',
    excerpt: 'Understanding Article 22 of the Constitution and the role of the Magistrate in the first 24 hours.',
    category: 'Legal Awareness',
    date: 'Jan 24, 2025',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Understanding the New Criminal Laws (BNS)',
    excerpt: 'A brief overview of the transition from IPC to Bharatiya Nyaya Sanhita and how it affects pending cases.',
    category: 'Current Affairs',
    date: 'Feb 10, 2025',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Rajesh Khanna',
    role: 'New Delhi',
    content: 'Very professional approach towards my property dispute. The advice was realistic and grounded in law.',
    rating: 5
  },
  {
    id: '2',
    clientName: 'Suman Rao',
    role: 'Mumbai',
    content: 'Assisted me through a difficult matrimonial case with great patience and legal expertise.',
    rating: 5
  },
  {
    id: '3',
    clientName: 'Vikram Singh',
    role: 'Chandigarh',
    content: 'Highly recommended for civil drafting. Precise, timely, and very thorough with documentation.',
    rating: 5
  }
];

export const RESOURCES: Resource[] = [
  { id: 'r1', title: 'Standard Lease Agreement Draft', type: 'Template', size: '1.2 MB' },
  { id: 'r2', title: 'RTI Application Guide', type: 'Guide', size: '800 KB' }
];

export const PROCESS_STEPS = [
  { id: 1, title: 'Preliminary Consultation', description: 'Review of facts and evaluation of the legal standing of the matter.', icon: <MessageSquare className="w-6 h-6" /> },
  { id: 2, title: 'Strategic Research', description: 'Citing relevant precedents from High Courts and the Supreme Court.', icon: <Search className="w-6 h-6" /> },
  { id: 3, title: 'Drafting & Filing', description: 'Meticulous preparation of petitions/responses and filing in appropriate forums.', icon: <Files className="w-6 h-6" /> },
  { id: 4, title: 'Court Advocacy', description: 'Representation and oral arguments before the Hon\'ble Courts.', icon: <Gavel className="w-6 h-6" /> },
  { id: 5, title: 'Case Disposal', description: 'Conclusion of the matter through judgment, decree, or settlement.', icon: <CheckCircle2 className="w-6 h-6" /> }
];

export const getIcon = (iconName: string) => {
  const iconProps = { className: "w-8 h-8", strokeWidth: 1.5 };
  switch (iconName) {
    case 'Gavel': return <Gavel {...iconProps} />;
    case 'Scale': return <Scale {...iconProps} />;
    case 'Users': return <Users {...iconProps} />;
    case 'Home': return <Home {...iconProps} />;
    case 'Building2': return <Building2 {...iconProps} />;
    case 'FileText': return <FileText {...iconProps} />;
    default: return <ShieldCheck {...iconProps} />;
  }
};
