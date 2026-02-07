import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import { Calendar, CheckCircle2, ArrowRight, ChevronRight, Clock, Shield, Users } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const LegalProcess: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-50 py-24 md:py-32 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 text-[#c5a059] mb-6">
              <div className="w-12 h-0.5 bg-[#c5a059]" />
              <span className="text-sm font-medium tracking-widest uppercase">Our Process</span>
              <div className="w-12 h-0.5 bg-[#c5a059]" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">
              A Methodical Approach to<br />Legal Excellence
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We follow a structured 5-phase methodology designed to deliver clarity, transparency, and successful outcomes for every client.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-100" />
          
          <div className="space-y-24">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-8 w-4 h-4 rounded-full bg-white border-4 border-[#0a1128] z-10" />
                
                {/* Content Container */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:pl-24 md:text-right relative group">
                  {index % 2 === 0 && (
                    <div className="hidden md:block md:absolute md:left-full md:top-0 md:pl-12 md:w-1/2 md:text-left">
                      <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                        <div className="text-xs font-medium text-[#c5a059] uppercase tracking-widest mb-3">
                          Phase 0{step.id}
                        </div>
                        <h3 className="text-xl font-serif text-slate-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          {step.description}
                        </p>
                        <div className="flex items-center space-x-4 text-slate-500 text-xs">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>1-2 weeks</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Key deliverables</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile & Left Side Content */}
                  <div className="md:hidden bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-xs font-medium text-[#c5a059] uppercase tracking-widest mb-3">
                      Phase 0{step.id}
                    </div>
                    <h3 className="text-xl font-serif text-slate-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <div className="flex items-center space-x-4 text-slate-500 text-xs">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>1-2 weeks</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Key deliverables</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Content for Desktop */}
                  {index % 2 === 1 && (
                    <div className="hidden md:block md:absolute md:right-full md:top-0 md:pr-12 md:w-1/2 md:text-right">
                      <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                        <div className="text-xs font-medium text-[#c5a059] uppercase tracking-widest mb-3">
                          Phase 0{step.id}
                        </div>
                        <h3 className="text-xl font-serif text-slate-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          {step.description}
                        </p>
                        <div className="flex items-center space-x-4 text-slate-500 text-xs justify-end">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>1-2 weeks</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Key deliverables</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Summary Cards */}
      <div className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-slate-900 mb-4">
              Our Process Principles
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Every phase is built upon core principles that ensure exceptional service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description: "Clear communication at every stage with regular updates on progress and strategy.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Client-Centered",
                description: "Your objectives guide our strategy, with decisions made collaboratively.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Results-Driven",
                description: "Focus on achieving the best possible outcome through strategic planning.",
                icon: <CheckCircle2 className="w-6 h-6" />
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0a1128] text-white flex items-center justify-center mb-6">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-4">
                  {principle.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0a1128] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Begin Your Legal Journey
            </h2>
            
            <p className="text-lg text-slate-300 mb-12 max-w-xl mx-auto leading-relaxed">
              Schedule a confidential consultation to discuss your case and understand how our process can work for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="group bg-[#c5a059] text-white px-8 py-4 rounded-lg font-medium hover:brightness-110 transition-all flex items-center justify-center space-x-3"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="group bg-transparent border border-white/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all flex items-center justify-center space-x-3"
              >
                <span>Contact Our Office</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="inline-flex items-center space-x-2 text-white/60 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                <span>All consultations are confidential and carry no obligation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LegalProcess;