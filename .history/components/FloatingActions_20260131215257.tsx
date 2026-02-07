import React from 'react';
import { MessageSquare, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Consultation for Civil Court Giridih Cases"
        title="WhatsApp Legal Consultation - Advocate Vikas Kumar Giridih"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, y: -2 }}
        className="gold-gradient text-white p-4 rounded-full shadow-[0_10px_30px_rgba(197,160,89,0.3)] flex items-center justify-center group relative border border-white/20"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          WhatsApp Legal Advice
        </span>
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:+919876543210"
        aria-label="Call Advocate Vikas Kumar for Civil Court Giridih & Hazaribagh"
        title="Call Advocate Vikas Kumar - Civil Court Lawyer Giridih"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05, y: -2 }}
        className="bg-[#0a1128] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(10,17,40,0.3)] flex items-center justify-center group relative border border-white/10"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Call for Legal Help
        </span>
      </motion.a>

      {/* Consultation Booking Button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05, y: -2 }}
      >
        <Link
          to="/consultation"
          aria-label="Book Legal Consultation with Advocate Vikas Kumar"
          title="Book Legal Consultation - Giridih Hazaribagh Lawyer"
          className="bg-[#c5a059] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(197,160,89,0.3)] flex items-center justify-center group relative border border-[#b89446]"
        >
          <Calendar className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
            Book Consultation
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default FloatingActions;