import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X, Linkedin, Twitter, Mail, Phone, ChevronRight, MapPin, ShieldCheck, BookOpen, Award } from 'lucide-react';
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about', title: 'About Advocate Vikas Kumar - B.A.LL.B, LL.M Giridih Lawyer' },
    { name: 'Services', path: '/practice-areas', title: 'Legal Services in Giridih Hazaribagh - Civil Court Cases' },
    { name: 'Process', path: '/process', title: 'Legal Process - Civil Court Giridih Procedure' },
    { name: 'Blog', path: '/blog', title: 'Legal Blog - Giridih Lawyer Articles' },
    { name: 'Contact', path: '/contact', title: 'Contact Advocate Vikas Kumar - Giridih Office' },
  ];

  const handleSocialClick = (platform: string) => {
    showToast(`Connecting to ${platform} Profile...`, 'info');
  };

  // Simplified navbar styling logic
  const getNavStyles = () => {
    if (scrolled) {
      return {
        background: 'bg-white/95 backdrop-blur-md shadow-lg',
        textColor: 'text-[#0a1128]',
        logoColor: 'text-[#0a1128]',
        inactiveColor: 'text-slate-500',
        height: 'h-20',
        padding: 'py-4'
      };
    }
    
    if (isDarkPage) {
      return {
        background: 'bg-transparent',
        textColor: 'text-white',
        logoColor: 'text-white',
        inactiveColor: 'text-slate-300',
        height: 'h-24',
        padding: 'py-6'
      };
    }
    
    return {
      background: 'bg-[#fcfcfc]/50 backdrop-blur-sm',
      textColor: 'text-[#0a1128]',
      logoColor: 'text-[#0a1128]',
      inactiveColor: 'text-slate-400',
      height: 'h-24',
      padding: 'py-6'
    };
  };

  const navStyles = getNavStyles();

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#fcfcfc]">
      <FloatingActions />
      
      {/* Fixed Header with proper height management */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${navStyles.background} ${navStyles.height}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-4 group min-w-0 flex-shrink-0"
              title="Advocate Vikas Kumar - Civil Court Giridih Hazaribagh Lawyer"
              aria-label="Advocate Vikas Kumar - Best Lawyer in Giridih"
            >
              <div className={`p-2.5 rounded-sm shadow-xl group-hover:scale-110 transition-transform duration-500 border border-white/10 ${
                scrolled || !isDarkPage ? 'navy-gradient' : 'bg-white/10 backdrop-blur-md'
              }`}>
                <Scale className="text-[#c5a059] w-6 h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className={`text-xl font-serif font-bold tracking-tight uppercase leading-none truncate ${navStyles.logoColor}`}>
                  Vikas Kumar
                </span>
                <span className="text-[9px] text-[#c5a059] font-bold uppercase tracking-[0.3em] mt-1 truncate">
                  B.A.LL.B, LL.M | Advocate
                </span>
              </div>
            </Link>
            
            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 flex-1 justify-end ml-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  title={link.title}
                  className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group whitespace-nowrap ${
                    location.pathname === link.path 
                      ? navStyles.textColor 
                      : `${navStyles.inactiveColor} hover:text-[#0a1128]`
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
                title="Free Legal Consultation with Advocate Vikas Kumar - Giridih Hazaribagh"
                aria-label="Book Legal Consultation - Civil Court Giridih Lawyer"
                className="gold-gradient text-white px-6 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#c5a059]/20 whitespace-nowrap ml-4"
              >
                Free Consultation
              </Link>
            </div>

            {/* Mobile Menu Button - Always visible on mobile */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              title="Navigation Menu - Advocate Vikas Kumar"
              className={`lg:hidden p-2 rounded-lg transition-colors flex-shrink-0 ${
                scrolled || !isDarkPage ? 'text-[#0a1128] hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Improved animations and positioning */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100"
            >
              <div className="px-6 py-8 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    title={link.title}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-4 px-4 text-lg font-serif transition-colors border-b border-slate-50 last:border-b-0 ${
                      location.pathname === link.path 
                        ? 'text-[#c5a059] bg-[#c5a059]/5' 
                        : 'text-[#0a1128] hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 px-4">
                  <Link
                    to="/consultation"
                    title="Book Free Legal Consultation - Advocate Vikas Kumar Giridih"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Schedule Legal Consultation with Best Lawyer in Giridih"
                    className="block w-full text-center navy-gradient text-white px-6 py-4 rounded-lg font-bold shadow-xl uppercase tracking-widest text-sm hover:brightness-110 transition-all"
                  >
                    Free Legal Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content with proper padding for fixed navbar - INCREASED PADDING */}
      <main className="flex-grow pt-28 lg:pt-32">
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

      {/* SEO Optimized Footer */}
      <footer className="bg-[#0a1128] text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 gold-gradient opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
            {/* Left Column - About with Local SEO */}
            <div className="lg:col-span-5 space-y-10">
              <Link 
                to="/" 
                className="flex items-center space-x-4 group"
                title="Advocate Vikas Kumar - Best Lawyer in Giridih Hazaribagh"
              >
                <div className="relative">
                  <Scale className="text-[#c5a059] w-10 h-10" />
                  <div className="absolute inset-0 bg-[#c5a059] opacity-10 rounded-full blur-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-serif font-bold tracking-tight">
                    Vikas Kumar
                  </span>
                  <span className="text-[#c5a059] text-xs font-bold uppercase tracking-[0.3em] mt-1">
                    B.A.LL.B, LL.M | Civil Court Advocate
                  </span>
                  <span className="text-slate-400 text-xs mt-2 font-light">
                    Giridih • Hazaribagh • Bagodar-Sariya • Ranchi
                  </span>
                </div>
              </Link>
              <p className="max-w-sm text-slate-400 text-lg leading-relaxed font-light">
                "Providing expert legal representation at <strong>Civil Court Giridih</strong>, 
                <strong>h</strong>, <strong>SDM Court Bagodar-Sariya</strong>, 
                and consultation for <strong>High Court Ranchi</strong> matters for over 18 years."
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                  <ShieldCheck size={16} className="text-[#c5a059]" />
                  <span className="text-slate-300 text-sm">Bar Council Registered</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                  <BookOpen size={16} className="text-[#c5a059]" />
                  <span className="text-slate-300 text-sm">B.A.LL.B, LL.M</span>
                </div>
              </div>
            </div>
            
            {/* Middle Column - Contact with Local Address */}
            <div className="lg:col-span-4 space-y-10">
              <h4 className="text-[#c5a059] font-bold text-[10px] uppercase tracking-[0.3em]">Contact Information</h4>
              <ul className="space-y-6 text-sm font-light">
                <li className="flex items-start space-x-4">
                  <Mail size={16} className="text-[#c5a059] mt-1 shrink-0" />
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest">Email</p>
                    <p className="text-slate-300">advocatevikaskumar@legalservice.com</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Phone size={16} className="text-[#c5a059] mt-1 shrink-0" />
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest">Phone & WhatsApp</p>
                    <p className="text-slate-300">+91 98765 43210</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <MapPin size={16} className="text-[#c5a059] mt-1 shrink-0" />
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest">Office Address</p>
                    <p className="text-slate-300 leading-relaxed">
                      Kala Road, Sariya, Giridih<br/>
                      Jharkhand 815301<br/>
                      Near Civil Court Giridih
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column - Courts & Services */}
            <div className="lg:col-span-3 space-y-10">
              <h4 className="text-[#c5a059] font-bold text-[10px] uppercase tracking-[0.3em]">Courts & Services</h4>
              <ul className="space-y-4 text-sm font-light">
                {[
                  'Civil Court Giridih Matters',
                  'h Cases', 
                  'SDM Court Bagodar-Sariya',
                  'Criminal Defense Jharkhand',
                  'Family Law Giridih',
                  'Property Disputes Hazaribagh'
                ].map(item => (
                  <li key={item}>
                    <Link 
                      to="/practice-areas" 
                      title={`${item} - Advocate Vikas Kumar`}
                      className="hover:text-[#c5a059] transition-all flex items-center gap-3 group"
                    >
                      <span className="group-hover:mr-2 transition-all text-slate-300">{item}</span>
                      <ChevronRight size={12} className="text-[#c5a059] opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom Footer with Local SEO Keywords */}
          <div className="pt-12 border-t border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center gap-6">
            <p>
              &copy; {new Date().getFullYear()} Advocate Vikas Kumar Legal Chambers. 
              <span className="text-slate-400 ml-2">BCI Registration No: [Your Registration]</span>
            </p>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:text-[#c5a059] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#c5a059] transition-colors">Terms of Service</Link>
              <Link to="/disclaimer" className="hover:text-[#c5a059] transition-colors">BCI Disclaimer</Link>
            </div>
          </div>
          
          {/* SEO-Rich Footer Note with Local Keywords */}
          <div className="mt-12 p-8 bg-black/30 rounded-lg border border-white/5 text-sm text-slate-400 leading-relaxed text-center max-w-4xl mx-auto">
            <span className="font-bold text-[#c5a059] uppercase mb-2 block">Local Legal Services Notice:</span>
            Advocate Vikas Kumar provides legal services primarily in <strong>Giridih District</strong> covering 
            <strong> Civil Court Giridih</strong>, <strong>h</strong>, <strong>SDM Court Bagodar-Sariya</strong>, 
            and consultation services for <strong>High Court Ranchi</strong> matters. This website is for informational 
            purposes only and does not constitute legal advice. Visitors seeking legal assistance for 
            <strong> Giridih court cases</strong>, <strong>Hazaribagh legal matters</strong>, or <strong>property disputes in Jharkhand</strong> 
            are advised to schedule a consultation.
          </div>

          {/* Hidden Structured Data for SEO */}
          <div className="hidden" itemScope itemType="https://schema.org/LegalService">
            <meta itemProp="name" content="Advocate Vikas Kumar - Civil Court Giridih Hazaribagh Lawyer" />
            <meta itemProp="description" content="Expert legal services at Civil Court Giridih, h, SDM Court Bagodar-Sariya, and High Court Ranchi consultation." />
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <meta itemProp="streetAddress" content="Kala Road, Sariya" />
              <meta itemProp="addressLocality" content="Giridih" />
              <meta itemProp="addressRegion" content="Jharkhand" />
              <meta itemProp="postalCode" content="815301" />
              <meta itemProp="addressCountry" content="India" />
            </div>
            <meta itemProp="telephone" content="+919876543210" />
            <meta itemProp="openingHours" content="Mo-Sa 10:00-18:00" />
            <meta itemProp="areaServed" content="Giridih, Hazaribagh, Bagodar, Sariya, Ranchi" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;