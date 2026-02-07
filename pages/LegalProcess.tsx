import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight, Calendar, Clock, CheckCircle2, ChevronRight, Shield } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const LegalProcess: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Reduced padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="text-center mb-12 md:mb-20">
          {/* Removed decorative lines to reduce vertical space */}
          <div className="text-[#c5a059] font-medium text-sm uppercase tracking-[0.3em] mb-4">
            Our Methodology
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif text-[#0a1128] mb-6 leading-tight">
            Systematic Legal Process
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            We follow a proven 5-step methodology to ensure your case is handled with precision at Civil Court Giridih.
          </p>

          {/* Stats Bar - More compact */}
          <div className="flex flex-wrap justify-center gap-4 max-w-md mx-auto">
            {[
              { value: "96%", label: "Success" },
              { value: "10+", label: "Years" },
              { value: "1200+", label: "Cases" },
              { value: "24/7", label: "Support" }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm"
              >
                <div className="text-lg font-bold text-[#0a1128]">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps - Reduced spacing */}
        <div className="space-y-6 md:space-y-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.08,
                ease: "easeOut" 
              }}
              className="relative group"
            >
              {/* Connector line - Simplified */}
              {idx !== PROCESS_STEPS.length - 1 && (
                <div className="absolute left-8 md:left-12 top-20 bottom-0 w-0.5 bg-slate-100 hidden sm:block"></div>
              )}
              
              {/* Step Card - More compact */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 p-6 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-200">
                {/* Icon Container */}
                <div className="relative">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center text-[#0a1128]">
                    <div className="scale-110">
                      {step.icon}
                    </div>
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#c5a059] text-white rounded-full flex items-center justify-center text-xs font-bold">
                    0{step.id}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow pt-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start space-x-3 mb-3">
                    <div className="text-[11px] font-semibold text-[#c5a059] uppercase tracking-[0.2em]">
                      Phase 0{step.id}
                    </div>
                    <div className="flex items-center space-x-1 text-slate-500 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>1-2 weeks</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-serif text-[#0a1128] mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base max-w-2xl mb-4">
                    {step.description}
                  </p>
                  
                  {/* Additional Info - Simplified */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center space-x-2 text-slate-500 text-sm">
                      <CheckCircle2 className="w-3 h-3 text-[#c5a059]" />
                      <span>Key deliverables</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - More compact */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-[#0a1128] to-[#1a1f3c] p-8 md:p-12 rounded-2xl text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Calendar className="w-5 h-5 text-[#c5a059]" />
              <span className="text-sm font-medium">Get Started</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif mb-6">
              Ready to Start Your Legal Journey?
            </h3>
            
            <p className="text-slate-300 mb-8 max-w-lg mx-auto text-base">
              Schedule a confidential consultation to discuss your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                to="/consultation" 
                className="bg-[#c5a059] text-white px-6 py-3 rounded-lg font-medium hover:brightness-110 transition-all flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              
              <Link 
                to="/contact" 
                className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all"
              >
                Contact Office
              </Link>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-wrap justify-center gap-4 text-slate-400 text-xs">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3 h-3 text-[#c5a059]" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3 h-3 text-[#c5a059]" />
                  <span>100% confidential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalProcess;