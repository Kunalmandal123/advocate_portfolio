import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import { Calendar, Clock, Users, Shield, CheckCircle2, ArrowRight, ChevronRight, FileText, MessageSquare } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const LegalProcess: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0a1128] via-[#1a1f3c] to-[#0a1128] py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Shield className="w-5 h-5 text-[#c5a059]" />
              <span className="text-white text-sm font-medium tracking-wider">PROVEN METHODOLOGY</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
              Your Legal Journey
              <span className="block text-[#c5a059] text-2xl md:text-3xl mt-4 font-light">
                Structured for Success at Civil Court Giridih
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Experience our systematic 5-phase approach that has delivered successful outcomes for hundreds of clients at Civil Court Giridih, Hazaribagh, and Bagodar-Sariya.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "100%", label: "Client Confidentiality", icon: Shield },
                { value: "24-48h", label: "Initial Response", icon: Clock },
                { value: "95%", label: "Success Rate", icon: CheckCircle2 },
                { value: "500+", label: "Cases Managed", icon: Users }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 + 0.5 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-[#c5a059]/20 rounded-full">
                        <Icon className="w-6 h-6 text-[#c5a059]" />
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-300 font-medium tracking-wide">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#c5a059]/20 via-slate-200/50 to-[#c5a059]/20 hidden md:block" />
          
          {PROCESS_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            
            return (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                className={`relative mb-20 md:mb-32 last:mb-0 group`}
              >
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-center">
                  {/* Left Side Content */}
                  <div className={`w-5/12 ${isEven ? 'text-right pr-12' : 'text-left pl-12 order-3'}`}>
                    <div className={`inline-block ${isEven ? 'mr-0' : 'ml-0'}`}>
                      <div className="text-[10px] font-bold text-[#c5a059] uppercase tracking-[0.3em] mb-3">
                        Phase 0{step.id}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-serif text-slate-900 mb-4 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed font-light">
                        {step.description}
                      </p>
                      <div className="mt-6 flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-sm text-slate-500">
                          <Clock className="w-4 h-4" />
                          <span>Duration: 1-2 weeks</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-slate-500">
                          <FileText className="w-4 h-4" />
                          <span>{step.id === 1 ? 'Initial docs' : 'Progress docs'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 w-16 h-16 lg:w-24 lg:h-24 bg-white shadow-2xl border-2 border-white rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#c5a059]/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl" />
                    <div className="relative text-[#0a1128] transform scale-125 group-hover:scale-150 transition-transform duration-500">
                      {step.icon}
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#c5a059] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                      0{step.id}
                    </div>
                  </div>

                  {/* Right Side Content - Only for odd steps */}
                  {!isEven && <div className="w-5/12" />}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-xl border border-slate-100">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-white shadow-lg border border-slate-100 rounded-xl flex items-center justify-center">
                        <div className="text-[#0a1128] scale-125">
                          {step.icon}
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#c5a059] text-white rounded-full flex items-center justify-center text-xs font-bold">
                        0{step.id}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#c5a059] uppercase tracking-[0.3em] mb-2">
                        Phase 0{step.id}
                      </div>
                      <h3 className="text-xl font-serif text-slate-900 mb-3">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" />
                        <span>1-2 weeks</span>
                      </div>
                    </div>
                    <div className="text-[#c5a059]">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Animated Connector Lines */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-32 h-0.5 bg-gradient-to-r from-slate-200 to-slate-200 group-hover:from-[#c5a059]/40 group-hover:to-[#c5a059]/40 transition-all duration-500">
                  <div className={`absolute w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-[#c5a059] group-hover:bg-[#c5a059]/20 transition-all ${
                    isEven ? '-right-2 -translate-y-1/2' : '-left-2 -translate-y-1/2'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Interactive Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 bg-gradient-to-r from-white to-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4">
                Interactive Process Timeline
              </h3>
              <p className="text-slate-600 max-w-xl">
                Track your legal journey progress with our transparent timeline system. Each phase has clear milestones and deliverables.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-slate-500 mb-1">Current Average</div>
                <div className="text-2xl font-bold text-[#c5a059]">8-12 weeks</div>
                <div className="text-xs text-slate-400">Total Process Duration</div>
              </div>
              <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#c5a059] to-[#d4af37] rounded-full"
                  style={{ width: '65%' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] to-[#1a1f3c]" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#c5a059]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Begin Your Legal Journey Today
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Take the first step towards resolving your legal matter with confidence. Our structured approach ensures clarity at every phase.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/consultation"
                className="group bg-[#c5a059] text-white px-10 py-5 rounded-xl font-bold hover:brightness-110 transition-all shadow-2xl shadow-black/30 hover:shadow-3xl hover:shadow-[#c5a059]/20 flex items-center justify-center space-x-3"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="group bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center space-x-3 backdrop-blur-sm"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Quick Inquiry</span>
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>No Obligation Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  <span>Fixed Fee Options Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LegalProcess;