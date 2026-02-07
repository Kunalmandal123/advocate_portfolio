import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight, 
  Info,
  MapPin,
  MessageCircle,
  Phone,
  Gavel,
  Scale,
  Star,
  Quote,
  Eye,
  Zap,
  UserCheck
} from 'lucide-react';
import { PRACTICE_AREAS, TESTIMONIALS, getIcon } from '../constants';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const Home: React.FC = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const hasAgreed = sessionStorage.getItem('bci-disclaimer-agreed');
    if (!hasAgreed) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem('bci-disclaimer-agreed', 'true');
    setShowDisclaimer(false);
  };

  return (
    <div className="bg-[#fcfcfc] overflow-x-hidden">
      {/* SEO Meta Tags (Added for SEO optimization) */}
      <head>
        <title>Advocate Vikas Kumar | Best Lawyer in Giridih, Hazaribagh, Bagodar-Sariya</title>
        <meta name="description" content="Top-rated Advocate Vikas Kumar (B.A.LL.B, LL.M) practicing at Civil Court Giridih, Hazaribagh & SDM Court Bagodar-Sariya. Expert in Civil, Criminal, Family Law, Property Matters with 18+ years experience." />
        <meta name="keywords" content="advocate in giridih, lawyer in hazaribagh, civil court lawyer, criminal lawyer, family law advocate, property lawyer, SDM court bagodar, legal consultant, best advocate in jharkhand" />
        <meta name="author" content="Advocate Vikas Kumar" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Giridih, Hazaribagh, Bagodar-Sariya, Ranchi" />
        <meta property="og:title" content="Advocate Vikas Kumar - Premier Legal Services in Giridih & Hazaribagh" />
        <meta property="og:description" content="Expert legal representation at Civil Court Giridih, Civil Court Hazaribagh, SDM Court Bagodar-Sariya. Consultation available in Ranchi High Court jurisdiction." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://advocatevikaskumar.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Advocate Vikas Kumar Legal Chambers",
            "description": "Expert legal services in Giridih, Hazaribagh, Bagodar-Sariya and High Court Ranchi jurisdiction",
            "url": "https://advocatevikaskumar.com",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kala Road, Sariya",
              "addressLocality": "Giridih",
              "addressRegion": "Jharkhand",
              "postalCode": "815301",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "24.1854",
              "longitude": "86.3052"
            },
            "openingHours": "Mo-Fr 10:00-18:00",
            "priceRange": "₹₹₹",
            "areaServed": ["Giridih", "Hazaribagh", "Bagodar", "Sariya", "Ranchi"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Legal Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Civil Litigation" }
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Criminal Defense" }
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Family Law" }
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Property Matters" }
                }
              ]
            }
          })}
        </script>
      </head>

      {/* BCI Disclaimer Modal */}
      <AnimatePresence>
        {showDisclaimer && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#0a1128]/95 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="bg-white max-w-2xl w-full rounded-2xl p-6 md:p-12 lg:p-16 shadow-2xl border-t-8 border-[#c5a059]"
            >
              <div className="flex items-center space-x-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 gold-gradient rounded-full flex items-center justify-center text-white shrink-0">
                  <Info size={20} />
                </div>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-[#0a1128]">Bar Council Disclaimer</h2>
              </div>
              <div className="text-slate-600 text-xs md:text-sm leading-relaxed space-y-4 mb-8 md:mb-10 overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
                <p className="font-bold text-[#0a1128]">Legal Notice & Compliance:</p>
                <p>As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. By clicking "Accept", you acknowledge:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
                    <span>Information provided is for informational purposes and not legal solicitation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt=1.5 shrink-0" />
                    <span>The user wishes to gain more information for their own use.</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={handleAgree}
                className="w-full navy-gradient text-white py-4 md:py-5 rounded-xl font-bold tracking-widest uppercase text-xs md:text-sm"
              >
                Accept and Enter
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with Local SEO Keywords */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-32 pb-16 lg:py-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-slate-50/50 lg:border-l border-slate-100" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div 
              className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-6 md:space-y-10">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="h-px w-8 md:w-12 bg-[#c5a059]" />
                  <span className="text-[#c5a059] font-bold text-[10px] md:text-xs uppercase tracking-[0.4em]">
                    Advocate at Civil Court Giridih & Hazaribagh
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#0a1128] leading-[1.1] tracking-tight">
                  Expert Legal <br className="hidden md:block"/>
                  <span className="italic font-normal">Representation</span> in <br className="hidden md:block"/>
                  <span className="text-[#c5a059]">Giridih & Hazaribagh</span>
                </h1>
                
                <p className="text-base md:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light px-4 lg:px-0">
                  Advocate Vikas Kumar (B.A.LL.B, LL.M) - Your trusted lawyer for Civil Court Giridih, 
                  Civil Court Hazaribagh, SDM Court Bagodar-Sariya, and consultation for High Court Ranchi cases. 
                  Specializing in Civil, Criminal, Family, and Property Law matters.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 px-4 lg:px-0">
                  <Link 
                    to="/consultation" 
                    className="w-full sm:w-auto navy-gradient text-white px-8 md:px-12 py-4 md:py-6 rounded-lg font-bold shadow-2xl shadow-blue-900/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-4 group"
                  >
                    <span>Free Legal Consultation</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href="tel:+919876543210" 
                    className="w-full sm:w-auto bg-white text-[#0a1128] border-2 border-slate-100 px-8 md:px-12 py-4 md:py-6 rounded-lg font-bold hover:border-[#c5a059] transition-all flex items-center justify-center gap-3 shadow-sm"
                  >
                    <Phone size={20} className="text-[#c5a059]" />
                    <span>Call Now: +91 98765 43210</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5 order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative mx-auto max-w-[280px] sm:max-w-md lg:max-w-none p-4 md:p-8 bg-white shadow-2xl rounded-sm border border-slate-100">
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 border-t-2 border-r-2 border-[#c5a059] -translate-y-2 translate-x-2 md:-translate-y-4 md:translate-x-4" />
                <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 border-b-2 border-l-2 border-[#c5a059] translate-y-2 -translate-x-2 md:translate-y-4 md:-translate-x-4" />
                
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img 
                    src="/advocate-vikas-kumar.jpg" 
                    className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000" 
                    alt="Advocate Vikas Kumar - Best Lawyer in Giridih Hazaribagh" 
                    title="Advocate Vikas Kumar - Civil Court Lawyer Giridih Hazaribagh"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/40 to-transparent" />
                </div>
                
                <div className="mt-6 text-center lg:text-left">
                  <h4 className="text-xl md:text-2xl font-serif font-bold text-[#0a1128]">
                    Vikas Kumar
                  </h4>
                  <p className="text-[#c5a059] font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] mt-1">
                    B.A.LL.B, LL.M | Advocate
                  </p>
                  <p className="text-slate-600 text-xs mt-2">
                    Civil Court Giridih • Civil Court Hazaribagh • SDM Court Bagodar-Sariya
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#0a1128] py-16 md:py-24 text-white border-y border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 lg:divide-x divide-white/10">
            {[
              { label: 'Years of Legal Practice', val: '18+' },
              { label: 'Cases Handled Successfully', val: '1200+' },
              { label: 'Courts Covered in Jharkhand', val: '8+' },
              { label: 'Client Satisfaction Rate', val: '96%' }
            ].map((stat, i) => (
              <div key={i} className="text-center px-2">
                <div className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-[#c5a059] mb-1 md:mb-2">{stat.val}</div>
                <div className="text-[8px] md:text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas with Local Court Specifics */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-32">
            <motion.span {...fadeInUp} className="text-[#c5a059] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
              Legal Services in Giridih Hazaribagh
            </motion.span>
            <motion.h2 {...fadeInUp} className="text-3xl md:text-6xl font-serif text-[#0a1128]">
              Court-Specific Legal Representation
            </motion.h2>
            <motion.p {...fadeInUp} className="text-slate-500 mt-6 max-w-3xl mx-auto text-lg">
              Expert legal services available at Civil Court Giridih, Civil Court Hazaribagh, 
              SDM Court Bagodar-Sariya, and consultation for High Court Ranchi matters.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0 border lg:border-slate-100 rounded-2xl lg:rounded-none overflow-hidden bg-slate-50 lg:bg-transparent">
            {PRACTICE_AREAS.map((area, i) => (
              <motion.div 
                key={area.id}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group p-8 md:p-16 bg-white border border-slate-100 lg:border-none hover:bg-slate-50 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="absolute top-0 left-0 w-full lg:w-1 h-1 lg:h-0 bg-[#c5a059] lg:group-hover:h-full group-hover:bg-[#c5a059] transition-all duration-500" />
                <div className="mb-8 md:mb-12 text-[#0a1128] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 transform lg:origin-left">
                  {getIcon(area.icon)}
                </div>
                <h4 className="text-xl md:text-3xl font-serif text-[#0a1128] mb-4 md:mb-8">{area.title}</h4>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 md:mb-12 font-light">
                  {area.description}
                </p>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-2">
                  Available at: {area.availableAt}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Court Locations Section for SEO */}
          <motion.div {...fadeInUp} className="mt-24 bg-slate-50 p-8 md:p-12 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-serif text-[#0a1128] mb-8 text-center">
              Court Jurisdictions Covered
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  court: "Civil Court, Giridih",
                  address: "District Court Complex, Giridih, Jharkhand 815301",
                  cases: "Civil Disputes, Property Matters, Family Law"
                },
                {
                  court: "Civil Court, Hazaribagh",
                  address: "District Court Complex, Hazaribagh, Jharkhand 825301",
                  cases: "Civil Litigation, Criminal Defense, Documentation"
                },
                {
                  court: "SDM Court, Bagodar-Sariya",
                  address: "Sub-Divisional Magistrate Court, Bagodar, Giridih District",
                  cases: "Revenue Matters, Land Disputes, Local Legal Issues"
                }
              ].map((location, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-[#0a1128] text-lg mb-2">{location.court}</h4>
                  <p className="text-slate-600 text-sm mb-3">{location.address}</p>
                  <p className="text-[#c5a059] text-xs font-bold uppercase">{location.cases}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Localized */}
      <section className="py-24 md:py-40 bg-[#fcfcfc] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-32">
            <motion.span {...fadeInUp} className="text-[#c5a059] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
              Serving Giridih & Hazaribagh
            </motion.span>
            <motion.h2 {...fadeInUp} className="text-3xl md:text-6xl font-serif text-[#0a1128]">
              Why Choose Advocate Vikas Kumar?
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
            {[
              { 
                title: 'Local Court Expertise', 
                desc: 'Deep knowledge of Civil Court Giridih, Civil Court Hazaribagh, and SDM Court Bagodar-Sariya procedures and judges.', 
                icon: <UserCheck className="w-8 h-8 md:w-10 md:h-10" /> 
              },
              { 
                title: 'Transparent Legal Fees', 
                desc: 'Clear fee structure with no hidden charges. Affordable legal services for residents of Giridih, Sariya, and Hazaribagh.', 
                icon: <Eye className="w-8 h-8 md:w-10 md:h-10" /> 
              },
              { 
                title: 'Strict Confidentiality', 
                desc: 'Complete privacy protection for all client matters. Trusted by families and businesses across Jharkhand.', 
                icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" /> 
              },
              { 
                title: 'Regular Case Updates', 
                desc: 'Timely updates on court dates, hearings, and case progress. Available via phone, WhatsApp, and in-person consultations.', 
                icon: <Zap className="w-8 h-8 md:w-10 md:h-10" /> 
              },
              { 
                title: 'Expert Legal Drafting', 
                desc: 'Precise drafting of legal notices, affidavits, agreements, and property documents for local court requirements.', 
                icon: <Scale className="w-8 h-8 md:w-10 md:h-10" /> 
              },
              { 
                title: 'Strong Court Presence', 
                desc: 'Experienced advocacy at all levels - from SDM Court to Civil Court and consultation for High Court matters.', 
                icon: <Gavel className="w-8 h-8 md:w-10 md:h-10" /> 
              }
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} className="flex flex-col items-center text-center sm:text-left sm:flex-row gap-6 md:gap-8">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#c5a059] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-serif font-bold text-[#0a1128] mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-32">
            <motion.span {...fadeInUp} className="text-[#c5a059] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
              Client Reviews from Giridih & Hazaribagh
            </motion.span>
            <motion.h2 {...fadeInUp} className="text-3xl md:text-6xl font-serif text-[#0a1128]">
              What Our Clients Say
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div 
                key={testimonial.id} 
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div>
                  <div className="flex text-[#c5a059] mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <Quote className="text-[#c5a059]/20 w-12 h-12 mb-4" />
                  <p className="text-slate-600 font-serif italic text-lg leading-relaxed mb-8">
                    "{testimonial.content}"
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1128] uppercase text-[10px] tracking-widest">{testimonial.clientName}</h4>
                  <p className="text-[#c5a059] text-[9px] font-bold uppercase tracking-widest mt-1">{testimonial.role}</p>
                  <p className="text-slate-400 text-xs mt-1">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map/Location Section - Localized */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div {...fadeInUp} className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-serif text-[#0a1128] mb-6">
                Visit Our Legal Chambers
              </h2>
              <p className="text-slate-500 mb-10 leading-relaxed font-light text-base md:text-lg">
                Conveniently located in Sariya, Giridih with easy access to Civil Court Giridih, 
                Civil Court Hazaribagh, and SDM Court Bagodar-Sariya. Also available for consultations 
                in Ranchi for High Court matters.
              </p>
              
              <div className="space-y-6 inline-block text-left">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#0a1128] text-white rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[9px] text-[#c5a059] font-bold uppercase tracking-widest">
                      Main Office - Giridih
                    </div>
                    <p className="text-slate-800 font-bold text-sm md:text-base">
                      Kala Road, Sariya, Giridih, Jharkhand 815301
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#0a1128] text-white rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[9px] text-[#c5a059] font-bold uppercase tracking-widest">
                      Contact Information
                    </div>
                    <p className="text-slate-800 font-bold text-sm md:text-base">
                      +91 98765 43210
                    </p>
                    <p className="text-slate-600 text-sm">
                      Available for WhatsApp consultations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#0a1128] text-white rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-[9px] text-[#c5a059] font-bold uppercase tracking-widest">
                      Working Hours
                    </div>
                    <p className="text-slate-800 font-bold text-sm md:text-base">
                      Mon-Sat: 10:00 AM - 6:00 PM
                    </p>
                    <p className="text-slate-600 text-sm">
                      Sunday by appointment only
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="h-[300px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden border border-slate-100 shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.625693912834!2d86.30275237607986!3d24.59341787780726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f17c60eec7ee67%3A0x357dd902806ed7b7!2sGiridih%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1708684534832!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Advocate Vikas Kumar Office Location - Giridih Jharkhand"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="absolute inset-0 gold-gradient opacity-[0.03] rounded-[3rem] blur-3xl -z-10" />
          <motion.div {...fadeInUp} className="border-2 border-slate-100 p-8 md:p-24 lg:p-32 rounded-[2rem] relative bg-white group shadow-2xl shadow-slate-200/50">
            <div className="absolute top-0 left-0 w-full h-2 md:w-2 md:h-full gold-gradient" />
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif text-[#0a1128] mb-8 leading-tight">
              Need a Lawyer in Giridih or Hazaribagh?
            </h2>
            <p className="text-slate-500 text-base md:text-2xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation with Advocate Vikas Kumar for Civil Court Giridih, 
              Civil Court Hazaribagh, SDM Court Bagodar-Sariya, or High Court Ranchi matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/consultation" 
                className="inline-flex items-center gap-4 gold-gradient text-white px-10 md:px-16 py-5 md:py-8 rounded-xl font-bold tracking-widest uppercase text-[10px] md:text-sm shadow-2xl shadow-[#c5a059]/30 hover:scale-[1.02] transition-all"
              >
                Book Legal Consultation <ArrowRight size={20} />
              </Link>
              <a 
                href="tel:+919876543210" 
                className="inline-flex items-center gap-4 bg-white text-[#0a1128] border-2 border-slate-100 px-10 md:px-16 py-5 md:py-8 rounded-xl font-bold tracking-widest uppercase text-[10px] md:text-sm hover:border-[#c5a059] transition-all"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;