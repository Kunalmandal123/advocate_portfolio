import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import { Calendar, Clock, CheckCircle2, ArrowRight, ChevronRight, FileText, Users, Shield, Target, BarChart3 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const cardVariants = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } }
};

const LegalProcess: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number | null>(1);

  return (
    <div className="bg-gradient-to-b from-white to-slate-50/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0a1128] via-[#1a1f3c] to-[#0a1128] py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-8">
                <Target className="w-4 h-4 text-[#c5a059]" />
                <span className="text-white text-sm font-medium tracking-wider">STRATEGIC PROCESS</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
                Clear, Structured Legal Process
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-12 max-w-2xl mx-auto">
                Our proven 5-phase system ensures every case receives meticulous attention at every stage, from consultation to resolution.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Phase Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-2 border border-slate-100">
          <div className="flex flex-wrap gap-2">
            {PROCESS_STEPS.map((step) => (
              <button
                key={step.id}
                onClick={() => setActivePhase(activePhase === step.id ? null : step.id)}
                className={`flex-1 min-w-[180px] px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 ${
                  activePhase === step.id
                    ? 'bg-[#0a1128] text-white shadow-lg'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activePhase === step.id ? 'bg-[#c5a059] text-white' : 'bg-white text-[#c5a059]'
                }`}>
                  <div className="scale-90">
                    {step.icon}
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-xs font-medium tracking-wide">Phase {step.id}</div>
                  <div className="text-sm font-semibold truncate max-w-[120px]">{step.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Process Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        {/* Phase Details */}
        <AnimatePresence mode="wait">
          {PROCESS_STEPS.map((step) => 
            activePhase === step.id && (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-16"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                  {/* Phase Header */}
                  <div className="bg-gradient-to-r from-[#0a1128] to-[#1a1f3c] p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <div className="text-white scale-125">
                            {step.icon}
                          </div>
                        </div>
                        <div>
                          <div className="text-[#c5a059] text-sm font-bold uppercase tracking-widest mb-2">
                            Phase {step.id} of {PROCESS_STEPS.length}
                          </div>
                          <h2 className="text-3xl md:text-4xl font-serif text-white">
                            {step.title}
                          </h2>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                          <div className="text-white text-sm">Duration</div>
                          <div className="text-white text-xl font-bold">1-2 Weeks</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase Content */}
                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Left Column - Description */}
                      <div>
                        <h3 className="text-2xl font-serif text-slate-900 mb-6">Process Overview</h3>
                        <p className="text-slate-600 leading-relaxed text-lg mb-8">
                          {step.description}
                        </p>
                        
                        <div className="bg-slate-50 rounded-xl p-6">
                          <h4 className="font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-[#c5a059]" />
                            <span>Key Deliverables</span>
                          </h4>
                          <ul className="space-y-3">
                            {[
                              "Detailed case analysis report",
                              "Strategic legal plan",
                              "Document checklist",
                              "Timeline projections"
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-[#c5a059] rounded-full" />
                                <span className="text-slate-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column - Steps */}
                      <div>
                        <h3 className="text-2xl font-serif text-slate-900 mb-6">Phase Breakdown</h3>
                        <div className="space-y-6">
                          {[
                            { title: "Initial Assessment", desc: "Comprehensive review of your legal situation" },
                            { title: "Strategy Development", desc: "Creating customized legal approach" },
                            { title: "Document Preparation", desc: "Gathering and organizing required documents" },
                            { title: "Client Review", desc: "Presenting strategy and getting approval" }
                          ].map((subStep, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start space-x-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all group"
                            >
                              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 flex items-center justify-center">
                                <div className="text-lg font-bold text-[#c5a059]">0{idx + 1}</div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-[#c5a059] transition-colors">
                                  {subStep.title}
                                </h4>
                                <p className="text-slate-600 text-sm">
                                  {subStep.desc}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="mt-8 p-6 bg-gradient-to-r from-[#c5a059]/5 to-[#c5a059]/10 rounded-xl border border-[#c5a059]/20">
                          <div className="flex items-center space-x-4">
                            <Clock className="w-6 h-6 text-[#c5a059]" />
                            <div>
                              <div className="font-semibold text-slate-900">Estimated Timeline</div>
                              <div className="text-slate-600 text-sm">1-2 weeks for this phase</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>

        {/* Process Overview Cards */}
        <motion.div
          variants={{
            initial: {},
            whileInView: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24"
        >
          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
              onClick={() => setActivePhase(step.id)}
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-slate-100 hover:border-[#c5a059] transition-all shadow-sm hover:shadow-xl hover:shadow-[#c5a059]/5">
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all ${
                    activePhase === step.id
                      ? 'bg-[#0a1128] text-white'
                      : 'bg-slate-50 text-[#0a1128] group-hover:bg-[#c5a059] group-hover:text-white'
                  }`}>
                    <div className="scale-110">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#c5a059] uppercase tracking-widest mb-3">
                    Phase 0{step.id}
                  </div>
                  <h3 className="font-serif text-lg text-slate-900 mb-4 group-hover:text-[#0a1128]">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm flex-grow mb-6">
                    {step.description.substring(0, 80)}...
                  </p>
                  <div className="w-full">
                    <div className="flex items-center justify-center space-x-2 text-slate-400 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>1-2 weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0a1128] to-[#1a1f3c] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="p-12 md:p-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                Ready to Start Your Legal Journey?
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto font-light">
                Begin with a confidential consultation to understand how our structured process applies to your specific case.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/consultation"
                  className="group bg-[#c5a059] text-white px-8 py-4 rounded-xl font-semibold hover:brightness-110 transition-all shadow-lg flex items-center justify-center space-x-3"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/contact"
                  className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center space-x-3"
                >
                  <Users className="w-5 h-5" />
                  <span>Speak with Our Team</span>
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { icon: Shield, title: "100% Confidential", desc: "Your information is protected" },
                    { icon: CheckCircle2, title: "No Obligation", desc: "Free initial consultation" },
                    { icon: BarChart3, title: "Proven Results", desc: "95% success rate" }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#c5a059]" />
                        </div>
                        <div className="text-left">
                          <div className="text-white font-semibold">{item.title}</div>
                          <div className="text-slate-400 text-sm">{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
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