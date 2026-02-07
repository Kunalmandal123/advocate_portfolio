import React, { useState } from 'react';
import { 
  Mail, Phone, Clock, Send, CheckCircle, MessageSquare, ExternalLink, 
  ArrowLeft, Copy, Shield, Lock, FileText, UserCheck, Calendar,
  AlertCircle, ChevronRight, Loader2, Upload, BookOpen, Briefcase
} from 'lucide-react';
import { useToast } from '../App';

const Consultation: React.FC = () => {
  const { showToast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: 'Criminal Law',
    urgency: 'standard',
    description: '',
    documents: [] as string[]
  });

  const advocatePhone = "919876543210";
  const advocateEmail = "registry@julianvance.law";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form validation delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setActiveStep(2);
    showToast("Form validated successfully", "success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppDispatch = () => {
    setIsLoading(true);
    showToast("Opening WhatsApp...", "info");
    const message = `*NEW CONSULTATION REQUEST*%0A%0A*Client Details*%0A👤 Name: ${formData.name}%0A📞 Phone: ${formData.phone}%0A📧 Email: ${formData.email}%0A%0A*Case Details*%0A⚖️ Case Type: ${formData.caseType}%0A🚨 Priority: ${formData.urgency.toUpperCase()}%0A%0A*Case Summary*%0A${formData.description}`;
    const whatsappUrl = `https://wa.me/${advocatePhone}?text=${message}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsLoading(false);
      showToast("WhatsApp opened successfully", "success");
    }, 600);
  };

  const handleEmailDispatch = () => {
    setIsLoading(true);
    const subject = `[CONSULTATION REQUEST] ${formData.name} - ${formData.caseType}`;
    const body = `NEW CONSULTATION REQUEST\n\n` +
      `=== CLIENT INFORMATION ===\n` +
      `Client Name: ${formData.name}\n` +
      `Email Address: ${formData.email}\n` +
      `Phone Number: ${formData.phone}\n\n` +
      `=== CASE DETAILS ===\n` +
      `Case Type: ${formData.caseType}\n` +
      `Urgency Level: ${formData.urgency.toUpperCase()}\n\n` +
      `=== CASE SUMMARY ===\n${formData.description}\n\n` +
      `---\n` +
      `This request was submitted through the online consultation portal.\n` +
      `Timestamp: ${new Date().toLocaleString()}`;

    const mailtoLink = `mailto:${advocateEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setTimeout(() => {
      try {
        window.location.href = mailtoLink;
        showToast("Opening email client...", "success");
      } catch (error) {
        showToast("Could not open email client", "info");
      }
      setIsLoading(false);
    }, 600);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(advocateEmail);
    showToast("Email address copied to clipboard", "success");
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(advocatePhone.replace('91', '+91 '));
    showToast("Phone number copied to clipboard", "success");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-slate-50 to-slate-100 px-4 py-32">
        <div className="max-w-2xl w-full space-y-10 animate-in fade-in duration-500">
          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step === activeStep 
                    ? 'bg-[#0a1128] border-[#0a1128] text-white' 
                    : step < activeStep
                    ? 'bg-[#c5a059] border-[#c5a059] text-white'
                    : 'bg-white border-slate-300 text-slate-400'
                }`}>
                  {step < activeStep ? <CheckCircle size={18} /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-1 mx-2 ${
                    step < activeStep ? 'bg-[#c5a059]' : 'bg-slate-300'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Success Card */}
          <div className="bg-gradient-to-br from-white to-slate-50 p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#c5a059] to-[#0a1128]" />
            
            <div className="text-center space-y-8">
              <div className="relative inline-block">
                <div className="w-24 h-24 gold-gradient rounded-full flex items-center justify-center mx-auto shadow-2xl relative z-10">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <div className="absolute inset-0 bg-[#c5a059] rounded-full blur-xl opacity-30 animate-ping" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-serif text-[#0a1128]">Request Prepared</h1>
                <p className="text-slate-600 text-lg leading-relaxed max-w-md mx-auto font-light">
                  Choose your preferred method to send this confidential brief directly to the Advocate's registry.
                </p>
              </div>

              {/* Client Summary Card */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white p-2 rounded-lg">
                    <UserCheck size={16} className="text-[#c5a059]" />
                  </div>
                  <h3 className="font-bold text-[#0a1128]">Request Summary</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Client</span>
                    <span className="font-semibold text-[#0a1128]">{formData.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Case Type</span>
                    <span className="font-semibold text-[#0a1128]">{formData.caseType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Urgency</span>
                    <span className={`font-semibold px-3 py-1 rounded-full text-xs ${
                      formData.urgency === 'urgent' 
                        ? 'bg-red-100 text-red-700' 
                        : formData.urgency === 'standard'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {formData.urgency.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dispatch Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
                <button 
                  onClick={handleWhatsAppDispatch}
                  disabled={isLoading}
                  className="group relative bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-6 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-center gap-4">
                    <MessageSquare size={24} className="text-white" />
                    <div className="text-left">
                      <div className="text-lg">WhatsApp</div>
                      <div className="text-sm font-normal opacity-90">Instant Dispatch</div>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} />
                  </div>
                </button>
                
                <button 
                  onClick={handleEmailDispatch}
                  disabled={isLoading}
                  className="group relative bg-gradient-to-r from-[#0a1128] to-[#1a2948] text-white p-6 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-center gap-4">
                    <Mail size={24} className="text-white" />
                    <div className="text-left">
                      <div className="text-lg">Email Registry</div>
                      <div className="text-sm font-normal opacity-90">Secure Channel</div>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} />
                  </div>
                </button>
              </div>

              {/* Loading State */}
              {isLoading && (
                <div className="flex items-center justify-center gap-3 text-slate-500">
                  <Loader2 size={20} className="animate-spin" />
                  <span>Preparing dispatch...</span>
                </div>
              )}

              {/* Contact Details */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
                <button 
                  onClick={copyEmailToClipboard}
                  className="group flex items-center gap-3 text-slate-600 hover:text-[#c5a059] transition-colors"
                >
                  <div className="bg-white p-3 rounded-xl border border-slate-200 group-hover:border-[#c5a059]">
                    <Mail size={16} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Registry Email</div>
                    <div className="text-sm font-medium truncate max-w-[180px] sm:max-w-none">{advocateEmail}</div>
                  </div>
                  <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                <button 
                  onClick={copyPhoneToClipboard}
                  className="group flex items-center gap-3 text-slate-600 hover:text-[#c5a059] transition-colors"
                >
                  <div className="bg-white p-3 rounded-xl border border-slate-200 group-hover:border-[#c5a059]">
                    <Phone size={16} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Emergency Line</div>
                    <div className="text-sm font-medium">+91 98765 43210</div>
                  </div>
                  <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>

              {/* Back Button */}
              <div className="pt-8">
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setActiveStep(1);
                  }}
                  className="inline-flex items-center gap-3 text-slate-400 hover:text-[#c5a059] transition-colors group"
                >
                  <div className="bg-white p-2 rounded-lg border border-slate-200 group-hover:border-[#c5a059]">
                    <ArrowLeft size={16} />
                  </div>
                  <span className="font-medium text-sm">Edit Request Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                  Provide details regarding your legal matter. All information is protected under strict advocate-client privilege and confidentiality protocols.
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
                    <h3 className="font-bold text-[#0a1128] text-sm uppercase tracking-widest">Fast Evaluation</h3>
                    <p className="text-slate-500 text-xs mt-1">Response within 24 hours for urgent matters</p>
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
                    <p className="text-slate-500 text-xs mt-1">Attorney-client privilege protected</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#0a1128] p-3 rounded-lg">
                    <UserCheck size={20} className="text-[#c5a059]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1128] text-sm uppercase tracking-widest">Direct Contact</h3>
                    <p className="text-slate-500 text-xs mt-1">Connect directly with the Advocate</p>
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
                    <p className="text-slate-500 text-xs mt-1">Preliminary assessment included</p>
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
                    <span>Secure Connection</span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#c5a059] to-[#0a1128] h-2 rounded-full w-1/4" />
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
                        placeholder="Akash Sharma"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-widest">Email Address *</label>
                      <input 
                        type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full bg-white border-2 border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-[#c5a059] focus:shadow-md transition-all text-sm placeholder-slate-400"
                        placeholder="akash@email.com"
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
                          placeholder="98765 43210"
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
                  className="w-full group relative bg-gradient-to-r from-[#0a1128] to-[#1a2948] text-white py-5 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>Validating Form...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-sm uppercase tracking-widest">Review & Continue</span>
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c5a059] to-[#0a1128] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* Confidentiality Note */}
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <AlertCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-700">
                    <strong className="font-semibold">Confidentiality Notice:</strong> All information submitted is protected under attorney-client privilege and will be handled with the utmost confidentiality.
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