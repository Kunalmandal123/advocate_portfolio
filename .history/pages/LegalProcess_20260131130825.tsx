
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const LegalProcess: React.FC = () => {
  return (
    <div className="bg-[#fcfcfc] py-24 md:py-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 md:mb-32">
          <motion.span {...fadeInUp} className="text-[#c5a059] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Our Methodology</motion.span>
          <motion.h1 {...fadeInUp} className="text-3xl md:text-6xl font-serif text-[#0a1128] mb-8 leading-tight">A Systematic Approach</motion.h1>
          <p className="text-base md:text-xl text-slate-500 leading-relaxed font-light">
            Legal matters can be overwhelming. We follow a proven 5-step methodology to ensure your case is handled with absolute precision and professional care.
          </p>
        </div>

        <div className="space-y-6 md:space-y-12 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div 
              key={step.id} 
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Connector line for desktop */}
              {idx !== PROCESS_STEPS.length - 1 && (
                <div className="absolute left-8 md:left-12 top-20 bottom-0 w-0.5 bg-slate-100 group-hover:bg-[#c5a059]/20 transition-colors hidden sm:block"></div>
              )}
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-12 p-8 md:p-12 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all border border-transparent hover:border-slate-100">
                <div className="relative z-10 flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-white shadow-xl border border-slate-100 rounded-2xl flex items-center justify-center text-[#0a1128] group-hover:bg-[#0a1128] group-hover:text-white transition-all duration-500">
                  <div className="scale-125 md:scale-150">{step.icon}</div>
                </div>
                <div className="flex-grow pt-2 text-center sm:text-left">
                  <div className="text-[10px] md:text-xs font-bold text-[#c5a059] uppercase tracking-[0.3em] mb-3">Phase 0{step.id}</div>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#0a1128] mb-4 group-hover:text-[#c5a059] transition-colors">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-lg font-light max-w-2xl">
                    {step.description}
                  </p>
                </div>
                <div className="hidden lg:block self-center">
                  <span className="text-7xl md:text-9xl font-serif text-slate-50 group-hover:text-slate-100 transition-colors select-none">0{step.id}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          {...fadeInUp}
          className="mt-24 md:mt-40 navy-gradient p-10 md:p-24 rounded-[3rem] text-white text-center relative overflow-hidden shadow-2xl shadow-blue-900/40"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h3 className="text-2xl md:text-5xl font-serif mb-8 leading-tight">Ready to Start Your Process?</h3>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto font-light text-base md:text-xl leading-relaxed">
            Schedule a confidential consultation to discuss your specific needs and how our methodology applies to your case.
          </p>
          <Link 
            to="/consultation" 
            className="inline-block bg-[#c5a059] text-white px-10 md:px-16 py-4 md:py-6 rounded-xl font-bold hover:brightness-110 transition-all shadow-xl shadow-black/20 uppercase tracking-widest text-xs md:text-sm"
          >
            Initial Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalProcess;
