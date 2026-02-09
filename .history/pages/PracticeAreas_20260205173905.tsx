import React, { useState } from 'react';
import { PRACTICE_AREAS, getIcon } from '../constants';
import { Clock, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, BookOpen, Users, Briefcase, Shield, Home, FileText } from 'lucide-react';

const PracticeAreas: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const stats = [
    { value: "5+", label: "Years Experience", icon: <Briefcase className="w-4 h-4" /> },
    { value: "1200+", label: "Cases Handled", icon: <FileText className="w-4 h-4" /> },
    { value: "96%", label: "Success Rate", icon: <CheckCircle2 className="w-4 h-4" /> },
    { value: "24/7", label: "Client Support", icon: <Users className="w-4 h-4" /> },
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
              <span className="block text-[#c5a059] text-2xl md:text-3xl mt-4">Giridih & Hazaribagh Districts</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive legal representation across Civil Court Giridih, h, 
              and SDM Court Bagodar-Sariya with proven success in complex litigation.
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
                    {React.cloneElement(stat.icon, { className: "w-5 h-5 text-[#c5a059]" })}
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
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden transition-all duration-300 ${
                  isExpanded || isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059] transform rotate-45 translate-x-16 -translate-y-16" />
                </div>

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-xl transition-all duration-300 ${
                        isExpanded || isHovered 
                          ? 'bg-[#c5a059] text-white transform -translate-y-1' 
                          : 'bg-slate-50 text-[#0a1128]'
                      }`}>
                        {React.cloneElement(getIcon(area.icon), {
                          className: `w-6 h-6 ${isExpanded || isHovered ? 'text-white' : 'text-[#c5a059]'}`
                        })}
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif text-slate-900 group-hover:text-[#0a1128] transition-colors">
                        {area.title}
                      </h3>
                    </div>
                    
                    <div className={`p-2 rounded-full transition-all duration-300 ${
                      isExpanded ? 'bg-[#c5a059] text-white' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 mb-8 leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none transition-all">
                    {area.description}
                  </p>

                  {/* Stats and CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Clock className={`w-4 h-4 transition-colors ${
                          isExpanded || isHovered ? 'text-[#c5a059]' : 'text-slate-400'
                        }`} />
                        <span className={`text-sm font-medium transition-colors ${
                          isExpanded || isHovered ? 'text-slate-800' : 'text-slate-500'
                        }`}>
                          {area.timeline}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className={`w-4 h-4 transition-colors ${
                          isExpanded || isHovered ? 'text-[#c5a059]' : 'text-slate-400'
                        }`} />
                        <span className={`text-sm font-medium transition-colors ${
                          isExpanded || isHovered ? 'text-slate-800' : 'text-slate-500'
                        }`}>
                          High Success Rate
                        </span>
                      </div>
                    </div>
                    
                    <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isExpanded || isHovered
                        ? 'bg-[#c5a059] text-white shadow-lg shadow-[#c5a059]/20'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}>
                      <span className="text-sm font-medium">
                        {isExpanded ? 'View Details' : 'Learn More'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="font-bold text-slate-900 text-lg flex items-center space-x-2">
                          <BookOpen className="w-5 h-5 text-[#c5a059]" />
                          <span>Legal Process & Timeline</span>
                        </h4>
                        <span className="text-xs font-medium px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-full">
                          {area.process.length} Key Steps
                        </span>
                      </div>

                      {/* Process Timeline */}
                      <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c5a059] via-slate-200 to-slate-200 ml-1.5 md:ml-0" />
                        
                        <div className="space-y-6 ml-8 md:ml-0">
                          {area.process.map((step, idx) => (
                            <div key={idx} className="relative">
                              {/* Timeline dot */}
                              <div className="absolute -left-9 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white bg-[#c5a059] shadow-lg shadow-[#c5a059]/30" />
                              
                              <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-100 rounded-xl p-6 hover:border-[#c5a059]/30 hover:shadow-md transition-all duration-300">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <div className="flex items-center space-x-3 mb-2">
                                      <span className="text-xs font-bold text-[#c5a059] bg-[#c5a059]/10 px-3 py-1 rounded-full">
                                        Phase {String(idx + 1).padStart(2, '0')}
                                      </span>
                                      <span className="text-xs text-slate-500 font-medium">
                                        ~{Math.floor(100/area.process.length)}% Complete
                                      </span>
                                    </div>
                                    <h5 className="font-semibold text-slate-900 mb-2">{step}</h5>
                                    <p className="text-sm text-slate-600 font-light">
                                      This phase involves detailed documentation and preparation for court proceedings.
                                    </p>
                                  </div>
                                  <div className="hidden md:flex items-center space-x-2 text-slate-400">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-xs">1-2 weeks</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Section */}
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
                          <button className="bg-white text-[#0a1128] px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center space-x-2 whitespace-nowrap">
                            <span>Book Free Consultation</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#c5a059] to-[#d4af37] rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-white/90 mb-8">
              Our legal experts can help identify the best approach for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#c5a059] px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-colors shadow-lg">
                Schedule Free Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Call Now: +91 98765 43210
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;