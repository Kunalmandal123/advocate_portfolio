
import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, CheckCircle, MessageSquare, ExternalLink, ArrowLeft, Copy } from 'lucide-react';
import { useToast } from '../App';

const Consultation: React.FC = () => {
  const { showToast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: 'Criminal Law',
    description: ''
  });

  const advocatePhone = "919876543210";
  const advocateEmail = "registry@julianvance.law";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast("Form Validated. Please choose a dispatch method below.", "info");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppDispatch = () => {
    showToast("Opening WhatsApp...", "info");
    const message = `*New Consultation Request*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Case Type:* ${formData.caseType}%0A*Summary:* ${formData.description}`;
    const whatsappUrl = `https://wa.me/${advocatePhone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailDispatch = () => {
    const subject = `Consultation Request: ${formData.name}`;
    const body = `New Consultation Request Received:\n\n` +
      `Client Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Case Type: ${formData.caseType}\n\n` +
      `Case Summary:\n${formData.description}`;

    const mailtoLink = `mailto:${advocateEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      window.location.href = mailtoLink;
      showToast("Launching Email App...", "success");
    } catch (error) {
      showToast("Could not open email app.", "info");
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(advocateEmail);
    showToast("Email address copied!", "success");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4 py-32">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in zoom-in duration-500">
          <div className="w-20 h-20 md:w-24 md:h-24 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <CheckCircle size={40} className="text-white" />
          </div>
          
          <div className="space-y-4 px-4">
            <h1 className="text-3xl md:text-5xl font-serif text-[#0a1128]">Form Prepared</h1>
            <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-md mx-auto font-light">
              Choose your preferred method to send this brief directly to the Advocate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 px-4">
            <button 
              onClick={handleWhatsAppDispatch}
              className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 md:py-5 rounded-xl font-bold shadow-xl hover:scale-[1.02] transition-all"
            >
              <MessageSquare size={18} />
              <span>WhatsApp</span>
              <ExternalLink size={14} className="opacity-50" />
            </button>
            
            <button 
              onClick={handleEmailDispatch}
              className="flex-1 flex items-center justify-center gap-3 bg-[#0a1128] text-white py-4 md:py-5 rounded-xl font-bold shadow-xl hover:scale-[1.02] transition-all"
            >
              <Mail size={18} />
              <span>Email Registry</span>
              <ExternalLink size={14} className="opacity-50" />
            </button>
          </div>

          <div className="pt-4">
            <button 
              onClick={copyEmailToClipboard}
              className="inline-flex items-center gap-2 text-[#c5a059] font-bold uppercase text-[9px] md:text-[10px] tracking-widest hover:brightness-110"
            >
              <Copy size={12} />
              <span className="truncate max-w-[200px] sm:max-w-none">{advocateEmail}</span>
            </button>
          </div>

          <div className="pt-4">
            <button 
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center gap-2 text-slate-400 font-bold uppercase text-[10px] tracking-widest hover:text-[#c5a059]"
            >
              <ArrowLeft size={14} />
              <span>Edit Details</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fcfcfc] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="space-y-10 md:space-y-12 text-center lg:text-left">
            <div>
              <span className="text-[#c5a059] font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 block">Secure Intake</span>
              <h1 className="text-4xl md:text-6xl font-serif text-[#0a1128] mb-6 leading-tight">Request Counsel</h1>
              <p className="text-base md:text-xl text-slate-500 leading-relaxed font-light">
                Provide details regarding your legal matter. This information remains strictly confidential under advocate-client privilege.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-[#0a1128]">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a1128] mb-1 uppercase text-[10px] tracking-widest">Fast Track</h3>
                  <p className="text-slate-500 text-xs">Evaluations completed within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-[#0a1128]">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a1128] mb-1 uppercase text-[10px] tracking-widest">Email</h3>
                  <p className="text-slate-500 text-xs truncate max-w-[150px]">{advocateEmail}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-12 lg:p-16 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Name</label>
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 md:py-4 focus:outline-none focus:border-[#c5a059] text-sm"
                    placeholder="Akash Sharma"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email ID</label>
                  <input 
                    type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 md:py-4 focus:outline-none focus:border-[#c5a059] text-sm"
                    placeholder="akash@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mobile Number</label>
                  <input 
                    type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 md:py-4 focus:outline-none focus:border-[#c5a059] text-sm"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Case Category</label>
                  <select 
                    name="caseType" value={formData.caseType} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 md:py-4 focus:outline-none cursor-pointer text-sm"
                  >
                    <option>Criminal Law</option>
                    <option>Civil Litigation</option>
                    <option>Matrimonial Matters</option>
                    <option>Property Dispute</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Matter Summary</label>
                <textarea 
                  name="description" required rows={4} value={formData.description} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 md:py-4 focus:outline-none focus:border-[#c5a059] text-sm resize-none"
                  placeholder="Briefly describe your case..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full navy-gradient text-white py-4 md:py-6 rounded-xl font-bold flex items-center justify-center space-x-3 shadow-xl hover:brightness-110 transition-all uppercase text-[10px] md:text-xs tracking-widest"
              >
                <span>Continue to Dispatch</span>
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
