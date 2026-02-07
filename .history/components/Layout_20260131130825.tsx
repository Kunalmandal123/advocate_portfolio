
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X, Linkedin, Twitter, Mail, Phone, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingActions from './FloatingActions';
import { useToast } from '../App';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { showToast } = useToast();
  const location = useLocation();

  // Pages that have a dark hero background and need white navbar text initially
  const isDarkPage = location.pathname === '/about';
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Expertise', path: '/practice-areas' },
    { name: 'Workflow', path: '/process' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSocialClick = (platform: string) => {
    showToast(`Connecting to ${platform} Profile...`, 'info');
  };

  // Logic for navbar text and logo color
  // Scrolled: always navy
  // Not Scrolled: white on dark pages, navy on others
  const navTextColor = (scrolled) ? 'text-[#0a1128]' : (isDarkPage ? 'text-white' : 'text-[#0a1128]');
  const logoTextColor = (scrolled) ? 'text-[#0a1128]' : (isDarkPage ? 'text-white' : 'text-[#0a1128]');
  const inactiveLinkColor = (scrolled) ? 'text-slate-500' : (isDarkPage ? 'text-slate-300' : 'text-slate-400');

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#fcfcfc]">
      <FloatingActions />
      
      {/* Header */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
          : (isDarkPage ? 'bg-transparent py-8' : 'bg-[#fcfcfc]/50 backdrop-blur-sm py-8')
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className={`p-2.5 rounded-sm shadow-xl group-hover:scale-110 transition-transform duration-500 border border-white/10 ${scrolled ? 'navy-gradient' : (isDarkPage ? 'bg-white/10 backdrop-blur-md' : 'navy-gradient')}`}>
                <Scale className="text-[#c5a059] w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-serif font-bold tracking-tight uppercase leading-none transition-colors duration-300 ${logoTextColor}`}>Julian Vance</span>
                <span className="text-[9px] text-[#c5a059] font-bold uppercase tracking-[0.3em] mt-1">Advocacy • Chambers</span>
              </div>
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group ${
                    location.pathname === link.path ? navTextColor : `${inactiveLinkColor} hover:${navTextColor}`
                  }`}
                >
                  {link.name}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: location.pathname === link.path ? 1 : 0 }}
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c5a059] origin-left"
                  />
                </Link>
              ))}
              <Link 
                to="/consultation" 
                className="gold-gradient text-white px-8 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#c5a059]/20"
              >
                Case Review
              </Link>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${scrolled || !isDarkPage ? 'text-[#0a1128] hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-b border-slate-100 overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-12 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block text-2xl font-serif transition-colors ${location.pathname === link.path ? 'text-[#c5a059]' : 'text-[#0a1128]'}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6">
                  <Link
                    to="/consultation"
                    className="block w-full text-center navy-gradient text-white px-6 py-5 rounded-lg font-bold shadow-xl uppercase tracking-widest text-xs"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Content */}
      <main className="flex-grow pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1128] text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 gold-gradient opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
            <div className="lg:col-span-5 space-y-10">
              <Link to="/" className="flex items-center space-x-4">
                <Scale className="text-[#c5a059] w-10 h-10" />
                <span className="text-3xl font-serif font-bold tracking-tight uppercase">Julian Vance <span className="text-[#c5a059]/50 block text-[10px] font-sans tracking-[0.5em] mt-2">Legal Chambers</span></span>
              </Link>
              <p className="max-w-sm text-slate-400 text-lg leading-relaxed font-light italic">
                "Upholding the standard of excellence in the Indian legal system for over two decades."
              </p>
              <div className="flex space-x-4">
                {[
                  { Icon: Linkedin, name: 'LinkedIn' },
                  { Icon: Twitter, name: 'Twitter' },
                  { Icon: Mail, name: 'Email' }
                ].map(({ Icon, name }, idx) => (
                  <motion.button 
                    key={idx}
                    whileHover={{ y: -5, color: '#c5a059' }}
                    onClick={() => handleSocialClick(name)}
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 transition-all"
                  >
                    <Icon size={18} />
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-3 space-y-10">
              <h4 className="text-[#c5a059] font-bold text-[10px] uppercase tracking-[0.3em]">Head Office</h4>
              <ul className="space-y-6 text-sm font-light">
                <li className="flex items-start space-x-4">
                  <Mail size={16} className="text-[#c5a059] mt-1 shrink-0" />
                  <span className="text-slate-300">chambers@julianvance.law</span>
                </li>
                <li className="flex items-start space-x-4">
                  <Phone size={16} className="text-[#c5a059] mt-1 shrink-0" />
                  <span className="text-slate-300">+91 98765 43210</span>
                </li>
                <li className="flex items-start space-x-4">
                  <MapPin size={16} className="text-[#c5a059] mt-1 shrink-0" />
                  <span className="text-slate-300 leading-relaxed">Supreme Court Chambers Block,<br/>New Delhi, India</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col lg:items-end">
              <h4 className="text-[#c5a059] font-bold text-[10px] uppercase tracking-[0.3em] mb-10">Legal Verticals</h4>
              <ul className="space-y-4 text-sm lg:text-right font-light">
                {['Constitutional Defense', 'Criminal Trials', 'Property & Revenue', 'Matrimonial Law', 'Corporate Compliance'].map(item => (
                  <li key={item}>
                    <Link to="/practice-areas" className="hover:text-[#c5a059] transition-all flex items-center lg:justify-end gap-3 group">
                      <span className="group-hover:mr-2 transition-all">{item}</span>
                      <ChevronRight size={12} className="text-[#c5a059] opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center gap-6">
            <p>&copy; {new Date().getFullYear()} Julian Vance Law Chambers. Professional Ethics Compliant.</p>
            <div className="flex gap-12">
              <button onClick={() => handleSocialClick('Integrity Policy')} className="hover:text-[#c5a059] transition-colors">Digital Integrity Policy</button>
              <button onClick={() => handleSocialClick('Court Rules')} className="hover:text-[#c5a059] transition-colors">Court Rules</button>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-black/30 rounded-lg border border-white/5 italic text-[10px] text-slate-500 leading-relaxed text-center max-w-4xl mx-auto">
            <span className="font-bold text-[#c5a059] uppercase mb-2 block not-italic">Statutory Disclaimer:</span>
            The contents of this website are for informational purposes only. No information on this website constitutes a legal opinion or attorney-client relationship. Visitors are advised to seek independent legal counsel for specific matters.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
