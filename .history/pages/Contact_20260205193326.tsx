import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, 
  MessageSquare, Copy, Check, Shield, Building, Navigation
} from 'lucide-react';
import { useToast } from '../App';

const Contact: React.FC = () => {
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'contact' | 'hours'>('contact');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    showToast(`${type} copied to clipboard`, 'success');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
          </div>
          <span className="text-[#c5a059] font-bold text-xs uppercase tracking-[0.4em] mb-6 block bg-gradient-to-r from-[#c5a059]/10 via-transparent to-[#c5a059]/10 py-2 px-6 rounded-full inline-block">
            <MessageSquare size={14} className="inline mr-2" />
            Reach Chambers
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#0a1128] mb-8 leading-tight">
            Contact <span className="text-[#c5a059]">Chambers</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Our chambers are strategically located in Giridih's judicial district. 
            For appointments or urgent inquiries, our registry is available during court hours.
          </p>
        </div>

        {/* Simplified Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-2 rounded-2xl shadow-lg border border-slate-100">
            {[
              { id: 'contact', label: 'Contact Details', icon: <Phone size={16} /> },
              { id: 'hours', label: 'Court Hours', icon: <Clock size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#0a1128] text-white shadow-lg'
                    : 'text-slate-500 hover:text-[#0a1128] hover:bg-slate-50'
                }`}
              >
                {tab.icon}
                <span className="font-medium text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Based on Tab */}
        <div className="mb-16">
          {activeTab === 'contact' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  id: 1,
                  title: 'Main Chambers',
                  icon: <Building className="text-[#c5a059]" size={24} />,
                  content: (
                    <>
                      <p className="text-slate-600 leading-relaxed mb-6 font-light text-lg">
                        24, Suriya Rd, Suriya, Mandramo,<br/>
                        Giridih, Jharkhand 825320<br/>
                        Plus Code: 5VHG+6V Suriya, Jharkhand
                      </p>
                    </>
                  ),
                  gradient: 'from-blue-50 to-indigo-50'
                },
                {
                  id: 2,
                  title: 'Communications',
                  icon: <Phone className="text-[#c5a059]" size={24} />,
                  content: (
                    <div className="space-y-8">
                      <div className="group cursor-pointer">
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                          <Shield size={12} />
                          Confidential Line
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-serif font-bold text-[#0a1128] hover:text-[#c5a059] transition-colors">
                            +91 7549181849
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Phone size={16} className="text-[#c5a059]" />
                          </div>
                        </div>
                      </div>
                      <div className="group cursor-pointer" onClick={() => copyToClipboard('vikashkmr450@gmail.com', 'Email')}>
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
                          Official Registry
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-xl font-serif font-bold text-[#0a1128] hover:text-[#c5a059] transition-colors truncate">
                            vikashkmr450@gmail.com
                          </div>
                          <div className={`transition-all ${copiedEmail ? 'text-green-500' : 'text-[#c5a059] opacity-0 group-hover:opacity-100'}`}>
                            {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                  gradient: 'from-emerald-50 to-teal-50'
                }
              ].map((card) => (
                <div
                  key={card.id}
                  className={`bg-gradient-to-br ${card.gradient} p-10 rounded-3xl border border-white shadow-xl relative overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-10">
                      <div className="flex items-center gap-4">
                        <div className="bg-white p-3 rounded-xl shadow-lg">
                          {card.icon}
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-[#0a1128]">{card.title}</h3>
                      </div>
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        hoveredCard === card.id ? 'bg-[#c5a059] scale-150' : 'bg-slate-300'
                      }`} />
                    </div>
                    
                    <div className="mb-10">
                      {card.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'hours' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#0a1128] mb-8 flex items-center gap-3">
                      <Clock className="text-[#c5a059]" />
                      Regular Hours
                    </h3>
                    <div className="space-y-6">
                      {[
                        { days: 'Monday - Friday', hours: '10:00 AM - 6:00 PM', status: 'active' },
                        { days: 'Saturday', hours: '11:00 AM - 2:00 PM', status: 'limited' },
                        { days: 'Sunday', hours: 'Restricted Access', status: 'closed' }
                      ].map((day, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-4 rounded-xl border border-slate-200 hover:border-[#c5a059] transition-colors group"
                        >
                          <span className="font-medium text-slate-700">{day.days}</span>
                          <span className={`font-bold ${
                            day.status === 'active' ? 'text-[#0a1128]' :
                            day.status === 'limited' ? 'text-[#c5a059]' :
                            'text-slate-400'
                          }`}>
                            {day.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#0a1128] mb-8 flex items-center gap-3">
                      <Shield className="text-[#c5a059]" />
                      Important Information
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                          <span className="font-bold text-red-700">Emergency Protocol</span>
                        </div>
                        <p className="text-slate-600 text-sm">
                          For urgent legal matters outside business hours, please contact the designated emergency line at the communications desk.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full" />
                          <span className="font-bold text-blue-700">Visitor Protocol</span>
                        </div>
                        <p className="text-slate-600 text-sm">
                          All visitors must present valid identification at the security checkpoint. Prior appointment recommended.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Map with exact location & Get Directions overlay */}
        <div className="relative group mt-16">
          <div 
            className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl h-[500px] md:h-[600px] w-full overflow-hidden shadow-2xl border-8 border-white cursor-pointer relative"
          >
            {/* Google Maps Embed - centered on your exact coordinates */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.625693912834!2d85.87714331640271!3d24.17800614105382!2m3!1f17.5!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDEwJzQ3LjciTiA4NcKwNTInMzc.0Ik!5e1!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Vikas Kumar Chambers - 24, Suriya Rd, Suriya, Mandramo, Giridih, Jharkhand 825320"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/60 via-transparent to-transparent pointer-events-none" />

            {/* Location Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="relative">
                <div className="absolute inset-0 animate-ping bg-[#c5a059]/30 rounded-full w-20 h-20" />
                <div className="relative bg-white p-4 rounded-full shadow-2xl border-4 border-[#c5a059]">
                  <MapPin size={32} className="text-[#c5a059]" />
                </div>
              </div>
            </div>

            {/* Get Directions Button - overlay on map */}
            <div className="absolute bottom-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=24.17800614105382,85.87714331640271"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#0a1128] px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#c5a059] hover:text-white transition-colors border border-slate-200"
              >
                <Navigation size={18} />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Office Address (replaced Map Legend) */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-white max-w-[280px]">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <MapPin size={20} className="text-[#c5a059]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0a1128] mb-1">
                    Vikas Kumar Chambers
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    24, Suriya Rd, Suriya, Mandramo<br/>
                    Giridih, Jharkhand 825320<br/>
                    Plus Code: 5VHG+6V Suriya, Jharkhand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;