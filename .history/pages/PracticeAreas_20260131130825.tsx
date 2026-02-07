
import React, { useState } from 'react';
import { PRACTICE_AREAS, getIcon } from '../constants';
import { Clock, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

const PracticeAreas: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="bg-white">
      <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">Expertise Built on Experience</h1>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            We provide comprehensive legal strategies across several core domains, ensuring every client receives tailored advocacy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {PRACTICE_AREAS.map((area) => (
            <div 
              key={area.id} 
              className={`bg-white rounded-2xl md:rounded-3xl border transition-all duration-300 ${
                expandedId === area.id ? 'border-[#c5a059] shadow-xl' : 'border-slate-100 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="p-6 md:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-slate-50 p-4 rounded-2xl text-[#0a1128] shrink-0">
                        {getIcon(area.icon)}
                      </div>
                      <h2 className="text-xl md:text-3xl font-serif text-[#0a1128]">{area.title}</h2>
                    </div>
                    <p className="text-sm md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8 max-w-3xl font-light">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-4 md:gap-6 text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest">
                      <div className="flex items-center space-x-2">
                        <Clock size={14} className="text-[#c5a059]" />
                        <span>Timeline: {area.timeline}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 size={14} className="text-[#c5a059]" />
                        <span>High Success</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setExpandedId(expandedId === area.id ? null : area.id)}
                    className={`mt-4 lg:mt-0 flex items-center justify-center lg:justify-end space-x-2 font-bold transition-colors text-xs uppercase tracking-widest ${
                      expandedId === area.id ? 'text-[#c5a059]' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <span>{expandedId === area.id ? 'Hide Workflow' : 'View Workflow'}</span>
                    {expandedId === area.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

                {expandedId === area.id && (
                  <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                    <h3 className="font-bold text-[#0a1128] mb-8 text-xs uppercase tracking-[0.2em] text-center lg:text-left">Procedural Roadmap</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {area.process.map((step, idx) => (
                        <div key={idx} className="relative text-center">
                          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 h-full flex flex-col items-center justify-center group hover:bg-[#0a1128] hover:text-white transition-all">
                            <span className="text-[10px] font-black text-[#c5a059] mb-2 uppercase tracking-tighter">Phase 0{idx + 1}</span>
                            <span className="font-serif font-bold text-xs md:text-sm leading-tight">{step}</span>
                          </div>
                          {idx < area.process.length - 1 && (
                            <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-200">
                              <span className="text-xl">→</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
