import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* WhatsApp Button - Official Style */}
      <motion.a
        href="https://wa.me/+917549181849"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Consultation for Civil Court Giridih Cases"
        title="WhatsApp Legal Consultation - Advocate Vikas Kumar Giridih"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ 
          scale: 1.05, 
          y: -2,
          boxShadow: "0 15px 40px rgba(37, 211, 102, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] flex items-center justify-center group border-2 border-white/20 overflow-hidden"
      >
        {/* WhatsApp Logo SVG */}
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M20.52 3.49C18.18 1.14 15.09 0 12 0S5.82 1.14 3.48 3.49C1.14 5.82 0 8.91 0 12s1.14 6.18 3.48 8.52C5.82 22.86 8.91 24 12 24s6.18-1.14 8.52-3.48C22.86 18.18 24 15.09 24 12s-1.14-6.18-3.48-8.51zM12 22c-2.82 0-5.5-1.1-7.52-3.08C2.46 16.93 1.36 14.45 1.36 12s1.1-5.5 3.08-7.52C6.42 2.46 8.9 1.36 11.36 1.36S16.3 2.46 18.28 4.44c2.02 2.02 3.12 4.5 3.12 7.07s-1.1 5.5-3.08 7.52C17.5 20.9 14.82 22 12 22z"/>
          <path d="M17.46 15.9c-.22-.11-.1.04-1.44-.75-.17-.1-.3-.17-.44.17-.14.34-.27.56-.5.84-.24.3-.47.33-.79.11-.32-.22-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.44-1.07-.6-1.47-.16-.4-.32-.34-.44-.34-.12 0-.26-.02-.4-.02-.15 0-.4.06-.61.3-.22.24-.84.82-.84 2s.86 2.32 1 2.48c.14.16 1.76 2.69 4.28 3.77.6.26 1.07.41 1.44.52.6.18 1.15.15 1.58.09.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.44-.27z"/>
        </svg>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Ripple Effect on Hover */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
        </div>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-xl z-50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
            WhatsApp Chat
          </div>
        </span>
        
        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-[9px] font-bold text-white">!</span>
        </div>
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:+917549181849"
        aria-label="Call Advocate Vikas Kumar for Civil Court Giridih & Hazaribagh"
        title="Call Advocate Vikas Kumar - Civil Court Lawyer Giridih"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ 
          scale: 1.05, 
          y: -2,
          boxShadow: "0 15px 40px rgba(10, 17, 40, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-[#0a1128] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(10,17,40,0.3)] flex items-center justify-center group border border-white/10 overflow-hidden"
      >
        <Phone className="w-6 h-6" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-xl z-50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#c5a059] rounded-full animate-pulse" />
            Call Now
          </div>
        </span>
      </motion.a>

      {/* Consultation Booking Button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ 
          scale: 1.05, 
          y: -2,
          boxShadow: "0 15px 40px rgba(197, 160, 89, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/consultation"
          aria-label="Book Legal Consultation with Advocate Vikas Kumar"
          title="Book Legal Consultation - Giridih Hazaribagh Lawyer"
          className="relative bg-[#c5a059] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(197,160,89,0.3)] flex items-center justify-center group border border-[#b89446] overflow-hidden"
        >
          <Calendar className="w-6 h-6" />
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#c5a059] via-[#b89446] to-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
          </div>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-xl z-50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Book Consultation
            </div>
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

// Add custom animation for shimmer effect
const styles = `
@keyframes shimmer {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}

.animate-shimmer {
  animation: shimmer 2s infinite linear;
  background-size: 200px 100%;
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default FloatingActions;