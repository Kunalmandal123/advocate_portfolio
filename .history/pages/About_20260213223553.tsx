import React from 'react';
import { Link } from 'react-router-dom'; // ← Added this import
import {
  Award,
  GraduationCap,
  MapPin,
  Briefcase,
  History,
  HeartHandshake,
  BookOpen,
  Scale,
  Users,
  Globe,
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* SEO Meta Tags for About Page */}
      <head>
        <title>About Advocate Vikas Kumar - Expert Lawyer in Giridih | B.A.LL.B, LL.M</title>
        <meta
          name="description"
          content="Learn about Advocate Vikas Kumar - B.A.LL.B, LL.M qualified lawyer with 5+ years experience practicing at Civil Court Giridih, Sub-Division Court Bagodar-Sariya. Specialist in Civil, Criminal, Family & Property Law."
        />
        <meta
          name="keywords"
          content="about advocate vikas kumar, lawyer in giridih experience, sub-division court bagodar-sariya lawyer, legal education, bar council registration, best advocate giridih"
        />
      </head>

      {/* Hero Header with Local SEO */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/law-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
                Advocate Vikas Kumar
              </h1>
              <p className="text-xl text-blue-200 font-medium mb-8">
                B.A.LL.B, LL.M | Practicing at Civil Court Giridih, Sub-Division Court Bagodar-Sariya & High Court Ranchi
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg text-sm border border-slate-700">
                  <MapPin size={16} className="text-blue-400" />
                  <span>Based in Giridih, Jharkhand</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg text-sm border border-slate-700">
                  <Award size={16} className="text-blue-400" />
                  <span>Bar Council Registered</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg text-sm border border-slate-700">
                  <BookOpen size={16} className="text-blue-400" />
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="aspect-square bg-slate-800 rounded-3xl overflow-hidden shadow-2xl rotate-3 border-4 border-[#c5a059]/20">
                <img
                  src="https://image2url.com/r2/default/images/1770465409417-0f54d4e6-cbe1-47dc-892a-e1a94331219c.jpg"
                  className="w-full h-full object-cover"
                  alt="Advocate Vikas Kumar - B.A.LL.B LL.M Lawyer in Giridih"
                  title="Advocate Vikas Kumar - Civil Court Giridih Lawyer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Career - Localized */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-serif text-slate-900 mb-6 flex items-center space-x-4">
                  <History className="text-[#c5a059]" />
                  <span>Professional Journey</span>
                </h2>
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p className="mb-4 text-lg">
                    Advocate <strong>Vikas Kumar</strong> embarked on his legal career with a strong academic foundation,
                    completing his B.A.LL.B followed by an LL.M degree. With over <strong>5+ years of dedicated practice</strong>,
                    he has established himself as one of the most reliable and trusted advocates in the Giridih regions.
                  </p>
                  <p className="mb-4">
                    His practice spans across <strong>Civil Court Giridih and Sub-Division Court Bagodar-Sariya</strong>,
                    where he has successfully represented hundreds of clients in complex legal matters. His expertise extends to
                    providing consultation for cases in the <strong>High Court of Ranchi</strong> jurisdiction.
                  </p>
                  <p>
                    Known for his <strong>ethical approach, clear communication, and commitment to justice</strong>,
                    Advocate Vikas Kumar combines traditional legal wisdom with modern legal strategies to deliver
                    exceptional results for his clients.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                    <GraduationCap className="text-[#c5a059]" />
                    <span>Academic Credentials</span>
                  </h3>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-semibold text-slate-800">LL.M (Master of Laws)</span>
                      <span className="text-[#c5a059] font-bold">Specialization</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-semibold text-slate-800">B.A.LL.B (Hons)</span>
                      <span className="text-[#c5a059] font-bold">Integrated Degree</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-slate-800">Bar Council Registration</span>
                      <span className="text-[#c5a059] font-bold">Active Member</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                    <Briefcase className="text-[#c5a059]" />
                    <span>Professional Values</span>
                  </h3>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#c5a059] rounded-full"></div>
                      <span><strong>Ethical Practice:</strong> Strict adherence to Bar Council guidelines</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#c5a059] rounded-full"></div>
                      <span><strong>Client-Centric:</strong> Personalized attention to every case</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#c5a059] rounded-full"></div>
                      <span><strong>Result-Oriented:</strong> Focus on achieving justice efficiently</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Local Court Experience */}
              <div className="mt-12">
                <h3 className="text-2xl font-serif text-slate-900 mb-8 flex items-center space-x-3">
                  <Globe className="text-[#c5a059]" />
                  <span>Court Jurisdiction & Coverage</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      court: "Civil Court, Giridih",
                      experience: "Primary practice court",
                      services: "Civil disputes, Property matters, Family cases",
                    },
                  
                    {
                      court: "Sub-Division Court, Bagodar-Sariya",
                      experience: "Specialized practice",
                      services: "Revenue matters, Local disputes",
                    },
                    {
                      court: "High Court, Ranchi",
                      experience: "Appellate practice",
                      services: "Civil appeals, Criminal appeals, Writ petitions",
                    },
                  ].map((court, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-800 text-lg mb-2">{court.court}</h4>
                      <p className="text-[#c5a059] text-sm font-bold mb-2">{court.experience}</p>
                      <p className="text-slate-600 text-sm">{court.services}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#0a1128] p-8 rounded-[2rem] text-white border border-[#c5a059]/20">
                <h3 className="text-2xl font-serif mb-6 flex items-center space-x-3">
                  <HeartHandshake size={28} className="text-[#c5a059]" />
                  <span>Legal Philosophy</span>
                </h3>
                <p className="text-slate-300 italic leading-relaxed text-lg">
                  "Justice is not just about winning cases, but about ensuring that every client receives
                  fair representation and their rights are protected. I believe in combining legal expertise
                  with compassion to serve the people of Giridih, and surrounding regions."
                </p>
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-[#c5a059] font-bold">- Advocate Vikas Kumar</p>
                </div>
              </div>

              <div className="border border-slate-100 p-8 rounded-3xl shadow-sm bg-white">
                <h3 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest flex items-center space-x-3">
                  <Scale className="w-5 h-5 text-[#c5a059]" />
                  <span>Areas of Specialization</span>
                </h3>
                <div className="space-y-4">
                  {[
                    'Civil Disputes & Litigation',
                    'Property Matters & Documentation',
                    'Family Law & Matrimonial Disputes',
                    'Criminal Defense Representation',
                    'Legal Notices & Agreement Drafting',
                    'Will Preparation & Registration',
                    'Affidavit Preparation',
                    'Legal Consultation & Advisory',
                  ].map((specialization) => (
                    <div key={specialization} className="flex items-center space-x-3 text-slate-600">
                      <div className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></div>
                      <span className="text-sm">{specialization}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Box - FIXED BUTTON */}
              <div className="bg-gradient-to-br from-[#0a1128] to-slate-900 p-8 rounded-3xl text-white">
                <h3 className="text-xl font-serif mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin size={18} className="text-[#c5a059]" />
                    <div>
                      <p className="text-sm text-slate-300">Office Address</p>
                      <p className="font-medium">Kala Road, Sariya, Giridih</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-[#c5a059]" />
                    <div>
                      <p className="text-sm text-slate-300">Contact Number</p>
                      <p className="font-medium">+91 7549181849</p>
                    </div>
                  </div>

                  {/* FIXED: Using Link instead of <a> */}
                  <div className="pt-4">
                    <Link
                      to="/consultation"
                      className="block w-full bg-[#c5a059] text-white text-center py-3 rounded-lg font-bold hover:bg-[#b89446] transition-colors"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-slate-900 mb-6">Serving the Local Community</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Dedicated to providing accessible legal services to residents of Giridih,
              Bagodar-Sariya, and surrounding areas for over 5 years.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Expertise",
                description:
                  "Deep understanding of local laws, customs, and court procedures in Giridih districts.",
                icon: <MapPin className="w-8 h-8" />,
              },
              {
                title: "Accessible Justice",
                description:
                  "Affordable legal services with flexible consultation hours for working professionals and families.",
                icon: <Users className="w-8 h-8" />,
              },
              {
                title: "Trusted Reputation",
                description:
                  "Consistently ranked among the most reliable advocates in the region with a 96% client satisfaction rate.",
                icon: <Award className="w-8 h-8" />,
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 text-center">
                <div className="w-16 h-16 bg-[#c5a059]/10 rounded-full flex items-center justify-center text-[#c5a059] mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Custom Phone icon component
const Phone: React.FC<{ className?: string; size?: number }> = ({ className, size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default About;