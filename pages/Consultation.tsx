import React, { useState } from 'react';
import { 
  Mail, Phone, Clock, Send, CheckCircle, MessageSquare, 
  Copy, Shield, Lock, FileText, UserCheck, Calendar,
  AlertCircle, Loader2, BookOpen, Briefcase
} from 'lucide-react';
import { useToast } from '../App';

const Consultation: React.FC = () => {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: 'Criminal Law',
    urgency: 'standard',
    description: '',
  });

  // Real contact details
  const advocatePhone = "917549181849";           // For WhatsApp (no +91 prefix needed)
  const advocateEmail = "vikashkmr450@gmail.com";  // Official registry email

  const caseTypes = [
    { value: 'Criminal Law', icon: <Shield size={16} /> },
    { value: 'Civil Litigation', icon: <FileText size={16} /> },
    { value: 'Matrimonial Matters', icon: <UserCheck size={16} /> },
    { value: 'Property Dispute', icon: <Briefcase size={16} /> },
    { value: 'Corporate Law', icon: <BookOpen size={16} /> },
    { value: 'Constitutional Law', icon: <FileText size={16} /> }
  ];

  const urgencyLevels = [
    { id: 'urgent', label: 'Urgent (48h)', color: 'bg-red-500' },
    { id: 'standard', label: 'Standard (1 week)', color: 'bg-amber-500' },
    { id: 'planning', label: 'Planning (2-4 weeks)', color: 'bg-blue-500' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.description) {
      showToast("Please fill all required fields", "info");
      return;
    }

    setIsLoading(true);
    showToast("Preparing to send request...", "info");

    // Prepare WhatsApp message
    const message = `*NEW CONSULTATION REQUEST*%0A%0A*Client Details*%0A👤 Name: ${formData.name}%0A📞 Phone: ${formData.phone}%0A📧 Email: ${formData.email}%0A%0A*Case Details*%0A⚖️ Case Type: ${formData.caseType}%0A🚨 Priority: ${formData.urgency.toUpperCase()}%0A%0A*Case Summary*%0A${formData.description}`;

    const whatsappUrl = `https://wa.me/${advocatePhone}?text=${message}`;

    // Prepare Email content
    const subject = `[CONSULTATION] ${formData.name} - ${formData.caseType}`;
    const emailBody = `NEW CONSULTATION REQUEST\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Case Type: ${formData.caseType}\n` +
      `Urgency: ${formData.urgency.toUpperCase()}\n\n` +
      `Description:\n${formData.description}\n\n` +
      `--- Submitted via website consultation form ---`;

    const mailtoLink = `mailto:${advocateEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Small delay then open email client
    setTimeout(() => {
      try {
        window.location.href = mailtoLink;
        showToast("Request sent successfully via WhatsApp & Email", "success");
      } catch (err) {
        showToast("Email client could not open – request already sent via WhatsApp", "info");
      }
      
      setIsLoading(false);

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        caseType: 'Criminal Law',
        urgency: 'standard',
        description: '',
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Panel - Information */}
          <div className="space-y-10 md:space-y-12">
            <div className="text-center lg:text-left space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 text-[#c5a059] font-bold text-xs uppercase tracking-[0.4em] mb-4 bg-[#c5a059]/10 py-2 px-4 rounded-full">
                  <Lock size={12} />
                  Secure Intake Portal
                </span>
                <h1 className="text-5xl md:text-7xl font-serif text-[#0a1128] mb-6 leading-tight">
                  Request <span className="text-[#c5a059]">Counsel</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                  Provide details regarding your legal matter. Your request will be sent directly to Advocate Vikas Kumar via WhatsApp and Email.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#0a1128] p-3 rounded-lg">
                      <Clock size={20} className="text-[#c5a059]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a1128] text-sm uppercase tracking-widest">Instant Delivery</h3>
                      <p className="text-slate-500 text-xs mt-1">Direct to Advocate</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#0a1128] p-3 rounded-lg">
                      <Shield size={20} className="text-[#c5a059]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a1128] text-sm uppercase tracking-widest">Confidential</h3>
                      <p className="text-slate-500 text-xs mt-1">Protected communication</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#0a1128] p-3 rounded-lg">
                      <MessageSquare size={20} className="text-[#c5a059]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a1128] text-sm uppercase tracking-widest">WhatsApp + Email</h3>
                      <p className="text-slate-500 text-xs mt-1">Two secure channels</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#0a1128] p-3 rounded-lg">
                      <FileText size={20} className="text-[#c5a059]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a1128] text-sm uppercase tracking-widest">Case Review</h3>
                      <p className="text-slate-500 text-xs mt-1">Direct from Advocate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#c5a059] via-[#0a1128] to-[#c5a059]" />
              
              {/* Form Header */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-serif font-bold text-[#0a1128]">Case Intake Form</h2>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Secure</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck size={18} className="text-[#c5a059]" />
                    <h3 className="font-bold text-[#0a1128] text-sm uppercase tracking-widest">Personal Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Full Name *</label>
                      <input 
                        type="text" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full bg-white border-2 border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-[#c5a059] focus:shadow-md transition-all text-sm placeholder-slate-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Email Address *</label>
                      <input 
                        type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full bg-white border-2 border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-[#c5a059] focus:shadow-md transition-all text-sm placeholder-slate-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Phone Number *</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">+91</div>
                        <input 
                          type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                          className="w-full bg-white border-2 border-slate-200 rounded-xl pl-16 pr-5 py-4 focus:outline-none focus:border-[#c5a059] focus:shadow-md transition-all text-sm placeholder-slate-400"
                          placeholder="7549181849"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Urgency Level</label>
                      <div className="grid grid-cols-3 gap-3">
                        {urgencyLevels.map((level) => (
                          <button
                            key={level.id}
                            type="button"
                            onClick={() => setFormData({...formData, urgency: level.id})}
                            className={`p-3 rounded-xl border-2 text-xs font-medium transition-all ${
                              formData.urgency === level.id
                                ? 'border-[#c5a059] bg-[#c5a059]/10'
                                : 'border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <div className="flex items-center justify-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${level.color}`} />
                              <span>{level.label}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText size={18} className="text-[#c5a059]" />
                    <h3 className="font-bold text-[#0a1128] text-sm uppercase tracking-widest">Case Details</h3>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Case Type *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {caseTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormData({...formData, caseType: type.value})}
                          className={`p-4 rounded-xl border-2 transition-all text-sm font-medium flex items-center justify-center gap-3 ${
                            formData.caseType === type.value
                              ? 'border-[#c5a059] bg-[#c5a059]/10 text-[#0a1128]'
                              : 'border-slate-200 hover:border-slate-300 text-slate-600'
                          }`}
                        >
                          {type.icon}
                          <span>{type.value}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                      Case Summary *
                      <span className="text-slate-400 font-normal ml-2">(Brief description of your legal matter)</span>
                    </label>
                    <textarea 
                      name="description" required rows={5} value={formData.description} onChange={handleChange}
                      className="w-full bg-white border-2 border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-[#c5a059] focus:shadow-md transition-all text-sm placeholder-slate-400 resize-none"
                      placeholder="Please provide a concise summary of your legal matter, including relevant dates, parties involved, and current status..."
                    />
                    <div className="text-xs text-slate-400 flex justify-between">
                      <span>All information is confidential</span>
                      <span>{formData.description.length}/1000 characters</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full group relative bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-5 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Request to Advocate</span>
                    </>
                  )}
                </button>

                {/* Confidentiality Note */}
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <AlertCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-700">
                    <strong className="font-semibold">Note:</strong> Clicking submit will open WhatsApp and your email client with pre-filled details. All information is protected under advocate-client privilege.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;