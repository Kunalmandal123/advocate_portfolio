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

const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } }
};

const LegalProcess: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white via-slate-50/30 to-white">
      {/* Hero Section Enhanced */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-40">
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center justify-center space-x-3 mb-8"
          >
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
            <span className="text-[#c5a059] font-medium text-sm uppercase tracking-[0.3em]">Proven Methodology</span>
            <div className="w-8 h-px bg-gradient-to-r from-[#c5a059] to-transparent" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-serif text-[#0a1128] mb-8 leading-tight">
              Systematic Legal
              <span className="block text-[#c5a059] text-2xl md:text-3xl mt-4 font-light">
                Process Excellence
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
              Legal matters can be overwhelming. We follow a proven 5-step methodology to ensure your case is handled with absolute precision and professional care at Civil Court Giridih.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            {[
              { value: "95%", label: "Success Rate" },
              { value: "18+", label: "Years Experience" },
              { value: "500+", label: "Cases Handled" },
              { value: "24/7", label: "Client Support" }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white px-6 py-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl font-bold text-[#0a1128]">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Process Steps */}
        <div className="space-y-8 md:space-y-12 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div 
              key={step.id} 
              variants={cardHover}
              initial="rest"
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1,
                ease: "easeOut" 
              }}
              className="relative group"
            >
              {/* Enhanced Connector line */}
              {idx !== PROCESS_STEPS.length - 1 && (
                <div className="absolute left-8 md:left-12 top-24 bottom-0 w-0.5 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 group-hover:from-[#c5a059]/30 group-hover:via-[#c5a059]/20 group-hover:to-slate-100 transition-all duration-500 hidden sm:block">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-slate-200 group-hover:border-[#c5a059] transition-colors duration-500" />
                </div>
              )}
              
              {/* Step Card Enhanced */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center sm:items-start space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-12 p-8 md:p-10 bg-white/70 backdrop-blur-sm rounded-3xl border border-slate-100/50 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/30 transition-all duration-300 group-hover:bg-white"
              >
                {/* Enhanced Icon Container */}
                <div className="relative">
                  <div className="relative z-10 flex-shrink-0 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-white to-slate-50 shadow-lg border border-slate-100/50 rounded-2xl flex items-center justify-center text-[#0a1128] group-hover:text-[#c5a059] transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#c5a059]/10">
                    <div className="scale-125 md:scale-150 transition-transform duration-500 group-hover:scale-150">
                      {step.icon}
                    </div>
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#c5a059] to-[#d4af37] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg shadow-[#c5a059]/30">
                    0{step.id}
                  </div>
                </div>
                
                {/* Content Enhanced */}
                <div className="flex-grow pt-2 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start space-x-4 mb-4">
                    <div className="text-[11px] font-bold text-[#c5a059] uppercase tracking-[0.3em] bg-[#c5a059]/10 px-3 py-1.5 rounded-full">
                      Phase 0{step.id}
                    </div>
                    <div className="flex items-center space-x-2 text-slate-500 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>1-2 weeks</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-serif text-[#0a1128] mb-5 group-hover:text-[#0a1128] transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg font-light max-w-2xl mb-6">
                    {step.description}
                  </p>
                  
                  {/* Additional Info */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 text-slate-500 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                      <span>Key deliverables included</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-500 text-sm">
                      <Shield className="w-4 h-4 text-[#c5a059]" />
                      <span>Client review sessions</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Large Number */}
                <div className="hidden lg:block self-center opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-7xl md:text-9xl font-serif text-slate-100 group-hover:text-slate-200 transition-colors select-none bg-gradient-to-b from-transparent to-white/50 bg-clip-text">
                    0{step.id}
                  </span>
                </div>
                
                {/* Arrow Indicator */}
                <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-6 h-6 text-[#c5a059] transform group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
              
              {/* Progress Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 rounded-b-3xl overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(step.id / PROCESS_STEPS.length) * 100}%` }}
                  transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#c5a059] to-[#d4af37]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-24 md:mt-40 bg-gradient-to-br from-[#0a1128] via-[#1a1f3c] to-[#0a1128] p-10 md:p-16 rounded-3xl text-white text-center relative overflow-hidden shadow-2xl shadow-blue-900/30"
        >
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#c5a059]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <Calendar className="w-6 h-6 text-[#c5a059]" />
              <span className="text-sm font-medium uppercase tracking-wider">Get Started</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">
              Ready to Start Your<br />
              <span className="text-[#c5a059]">Legal Journey?</span>
            </h3>
            
            <p className="text-slate-300 mb-12 max-w-lg mx-auto font-light text-lg leading-relaxed">
              Schedule a confidential consultation to discuss your specific needs and how our methodology applies to your case.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/consultation" 
                className="group bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-white px-10 py-5 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#c5a059]/30 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Initial Consultation</span>
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/contact" 
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-5 rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
              >
                Contact Our Office
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>No obligation consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>100% confidential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>Fixed fee options available</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalProcess;