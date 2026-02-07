
import React from 'react';
import { Mail, Phone, MapPin, Clock, ExternalLink, Linkedin, Twitter, Globe } from 'lucide-react';
import { useToast } from '../App';

const Contact: React.FC = () => {
  const { showToast } = useToast();

  const handleExternalAction = (platform: string) => {
    showToast(`Connecting to ${platform} (Demo Mode)`, 'info');
  };

  return (
    <div className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-[#c5a059] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Reach Chambers</span>
          <h1 className="text-5xl md:text-6xl font-serif text-[#0a1128] mb-6">Contact the Registry</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Our chambers are located in the heart of the judicial district. Reach out for appointments or administrative inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-12 rounded-2xl border border-slate-100 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="mb-10 flex items-center space-x-4">
              <div className="navy-gradient p-3 rounded-lg shadow-lg">
                <MapPin className="text-[#c5a059]" size={20} />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0a1128]">Main Chambers</h3>
            </div>
            <p className="text-slate-500 leading-relaxed mb-10 font-light">
              402, Supreme Court Chambers Block<br/>
              Bhagwan Das Road, New Delhi<br/>
              Delhi 110001, India
            </p>
            <button 
              onClick={() => handleExternalAction('Google Maps')}
              className="flex items-center space-x-3 text-[#c5a059] font-bold uppercase text-[10px] tracking-widest hover:gap-5 transition-all"
            >
              <span>Navigation Route</span>
              <ExternalLink size={16} />
            </button>
          </div>

          <div className="bg-slate-50 p-12 rounded-2xl border border-slate-100 relative group overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="mb-10 flex items-center space-x-4">
              <div className="navy-gradient p-3 rounded-lg shadow-lg">
                <Phone className="text-[#c5a059]" size={20} />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0a1128]">Communications</h3>
            </div>
            <div className="space-y-8">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Confidential Phone</div>
                <div className="text-lg text-[#0a1128] font-serif font-bold">+91 98765 43210</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Official Registry</div>
                <div className="text-lg text-[#0a1128] font-serif font-bold">registry@julianvance.law</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-12 rounded-2xl border border-slate-100 relative group overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="mb-10 flex items-center space-x-4">
              <div className="navy-gradient p-3 rounded-lg shadow-lg">
                <Clock className="text-[#c5a059]" size={20} />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0a1128]">Court Hours</h3>
            </div>
            <div className="space-y-6 text-slate-600 font-light text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <span>Mon - Fri</span>
                <span className="font-bold text-[#0a1128]">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <span>Saturday</span>
                <span className="font-bold text-[#0a1128]">11:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between text-[#c5a059] font-bold text-xs uppercase tracking-widest">
                <span>Sunday</span>
                <span>Restricted Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Connectivity */}
        <div className="mt-16 flex justify-center gap-6">
           {[
             { name: 'LinkedIn Professional', icon: <Linkedin size={20} /> },
             { name: 'X Legal Updates', icon: <Twitter size={20} /> },
             { name: 'Official Website', icon: <Globe size={20} /> }
           ].map((social) => (
             <button 
               key={social.name}
               onClick={() => handleExternalAction(social.name)}
               className="w-14 h-14 flex items-center justify-center rounded-lg bg-white border border-slate-100 text-slate-400 hover:text-[#c5a059] hover:border-[#c5a059] hover:shadow-xl transition-all"
               title={social.name}
             >
               {social.icon}
             </button>
           ))}
        </div>

        {/* Interactive Map Mock */}
        <div 
          onClick={() => handleExternalAction('Interactive Map')}
          className="mt-24 group bg-slate-100 rounded-2xl h-[500px] w-full relative overflow-hidden shadow-inner flex items-center justify-center border-4 border-white cursor-pointer"
        >
           <img 
             src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1600" 
             className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-[2000ms]" 
             alt="Office Location Map Mock" 
           />
           <div className="absolute inset-0 bg-[#0a1128]/10 group-hover:bg-transparent transition-colors" />
           <div className="absolute bg-white px-8 py-6 rounded-lg shadow-2xl border border-slate-100 flex flex-col items-center">
              <div className="navy-gradient w-12 h-12 rounded-full animate-bounce flex items-center justify-center mb-4 border-2 border-[#c5a059]">
                <MapPin size={24} className="text-[#c5a059]" />
              </div>
              <span className="font-serif font-bold text-[#0a1128] text-lg">Vance Law Chambers</span>
              <span className="text-[10px] font-bold text-[#c5a059] uppercase tracking-[0.2em] mt-1">Delhi High Court Block</span>
           </div>
           <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest text-[#0a1128]">
             Click to Expand View
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
