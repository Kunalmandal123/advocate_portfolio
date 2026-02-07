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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  // Logic for navbar text and logo color
  const navTextColor = (scrolled) ? 'text-[#0a1128]' : (isDarkPage ? 'text-white' : 'text-[#0a1128]');
  const logoTextColor = (scrolled) ? 'text-[#0a1128]' : (isDarkPage ? 'text-white' : 'text-[#0a1128]');
  const inactiveLinkColor = (scrolled) ? 'text-slate-500' : (isDarkPage ? 'text-slate-300' : 'text-slate-400');

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#fcfcfc]">
      <FloatingActions />
      
      {/* Header with SEO Keywords */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
          : (isDarkPage ? 'bg-transparent py-8' : 'bg-[#fcfcfc]/50 backdrop-blur-sm py-8')
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-4 group"
              title="Advocate Vikas Kumar - Civil Court Giridih Hazaribagh Lawyer"
              aria-label="Advocate Vikas Kumar - Best Lawyer in Giridih"
            >
              <div className={`p-2.5 rounded-sm shadow-xl group-hover:scale-110 transition-transform duration-500 border border-white/10 ${scrolled ? 'navy-gradient' : (isDarkPage ? 'bg-white/10 backdrop-blur-md' : 'navy-gradient')}`}>
                <Scale className="text-[#c5a059] w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-serif font-bold tracking-tight uppercase leading-none transition-colors duration-300 ${logoTextColor}`}>
                  Vikas Kumar
                </span>
                <span className="text-[9px] text-[#c5a059] font-bold uppercase tracking-[0.3em] mt-1">
                  B.A.LL.B, LL.M | Advocate
                </span>
              </div>
            </Link>
            
            {/* Desktop Nav with Court-Specific Titles */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  title={link.title}
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
                title="Free Legal Consultation with Advocate Vikas Kumar - Giridih Hazaribagh"
                aria-label="Book Legal Consultation - Civil Court Giridih Lawyer"
                className="gold-gradient text-white px-8 py-3 rounded-sm text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#c5a059]/20"
              >
                Free Consultation
              </Link>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                title="Navigation Menu - Advocate Vikas Kumar"
                className={`p-2 rounded-lg transition-colors ${scrolled || !isDarkPage ? 'text-[#0a1128] hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Local Keywords */}
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
                    title={link.title}
                    className={`block text-2xl font-serif transition-colors ${location.pathname === link.path ? 'text-[#c5a059]' : 'text-[#0a1128]'}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6">
                  <Link
                    to="/consultation"
                    title="Book Free Legal Consultation - Advocate Vikas Kumar Giridih"
                    aria-label="Schedule Legal Consultation with Best Lawyer in Giridih"
                    className="block w-full text-center navy-gradient text-white px-6 py-5 rounded-lg font-bold shadow-xl uppercase tracking-widest text-xs"
                  >
                    Free Legal Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
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
                <strong>Civil Court Hazaribagh</strong>, <strong>SDM Court Bagodar-Sariya</strong>, 
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
                  'Civil Court Hazaribagh Cases', 
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
            <strong> Civil Court Giridih</strong>, <strong>Civil Court Hazaribagh</strong>, <strong>SDM Court Bagodar-Sariya</strong>, 
            and consultation services for <strong>High Court Ranchi</strong> matters. This website is for informational 
            purposes only and does not constitute legal advice. Visitors seeking legal assistance for 
            <strong> Giridih court cases</strong>, <strong>Hazaribagh legal matters</strong>, or <strong>property disputes in Jharkhand</strong> 
            are advised to schedule a consultation.
          </div>

          {/* Hidden Structured Data for SEO */}
          <div className="hidden" itemScope itemType="https://schema.org/LegalService">
            <meta itemProp="name" content="Advocate Vikas Kumar - Civil Court Giridih Hazaribagh Lawyer" />
            <meta itemProp="description" content="Expert legal services at Civil Court Giridih, Civil Court Hazaribagh, SDM Court Bagodar-Sariya, and High Court Ranchi consultation." />
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