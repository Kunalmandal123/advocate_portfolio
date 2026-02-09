import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ← Add this import
import { PRACTICE_AREAS, getIcon } from '../constants';
import {
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  BookOpen,
  Users,
  Briefcase,
  Shield,
  Home,
  FileText,
} from 'lucide-react';

const PracticeAreas: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const stats = [
    { value: '5+', label: 'Years Experience', icon: <Briefcase className="w-4 h-4" /> },
    { value: '1200+', label: 'Cases Handled', icon: <FileText className="w-4 h-4" /> },
    { value: '96%', label: 'Success Rate', icon: <CheckCircle2 className="w-4 h-4" /> },
    { value: '24/7', label: 'Client Support', icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section with Stats */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0a1128] to-[#1a1f3c] py-20 md:py-28">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Shield className="w-5 h-5 text-[#c5a059]" />
              <span className="text-sm text-white font-medium">Trusted Legal Expertise</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Specialized Legal Services
              <span className="block text-[#c5a059] text-2xl md:text-3xl mt-4">
                Giridih & Hazaribagh Districts
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive legal representation across Civil Court Giridih, h, and
              SDM Court Bagodar-Sariya with proven success in complex litigation.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 group hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-[#c5a059]/20 rounded-full">
                    {React.cloneElement(stat.icon, { className: 'w-5 h-5 text-[#c5a059]' })}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Practice Areas Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
            Our Legal Practice Areas
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Select a practice area to explore our specialized approach and success-driven workflow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PRACTICE_AREAS.map((area) => {
            const isExpanded = expandedId === area.id;
            const isHovered = hoveredId === area.id;

            return (
              <div
                key={area.id}
                className={`relative bg-white rounded-2xl border-2 transition-all duration-500 overflow-hidden group cursor-pointer ${
                  isExpanded
                    ? 'border-[#c5a059] shadow-2xl scale-[1.02]'
                    : 'border-slate-100 hover:border-[#c5a059]/50 hover:shadow-xl'
                }`}
                onClick={() => setExpandedId(isExpanded ? null : area.id)}
                onMouseEnter={() => setHoveredId(area.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* ... rest of the card content remains the same until the buttons ... */}

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                    {/* ... timeline content ... */}

                    {/* FIXED: Consultation CTA */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-[#0a1128] to-[#1a1f3c] rounded-xl">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                          <h5 className="text-white font-semibold text-lg mb-2">
                            Need Immediate Assistance with {area.title}?
                          </h5>
                          <p className="text-slate-300 text-sm">
                            Schedule a free consultation to discuss your specific case requirements.
                          </p>
                        </div>
                        {/* Use Link instead of button */}
                        <Link
                          to="/consultation"
                          className="bg-white text-[#0a1128] px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center space-x-2 whitespace-nowrap"
                        >
                          <span>Book Free Consultation</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - FIXED */}
        <div className="mt-16 bg-gradient-to-r from-[#c5a059] to-[#d4af37] rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-white/90 mb-8">
              Our legal experts can help identify the best approach for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Use Link for navigation */}
              <Link
                to="/consultation"
                className="bg-white text-[#c5a059] px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-colors shadow-lg"
              >
                Schedule Free Consultation
              </Link>

              {/* Phone link - opens phone dialer on mobile */}
              <a
                href="tel:+917549181849"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Call Now: +91 7549181849
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;