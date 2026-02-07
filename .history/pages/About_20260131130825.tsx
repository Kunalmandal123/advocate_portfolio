
import React from 'react';
import { Award, GraduationCap, MapPin, Briefcase, History, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">Julian Vance</h1>
              <p className="text-xl text-blue-200 font-medium mb-8">Upholding the standard of legal excellence for over 15 years.</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg text-sm border border-slate-700">
                  <MapPin size={16} className="text-blue-400" />
                  <span>Based in Manhattan, NY</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg text-sm border border-slate-700">
                  <Award size={16} className="text-blue-400" />
                  <span>Licensed in Supreme Court</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="aspect-square bg-slate-800 rounded-3xl overflow-hidden shadow-2xl rotate-3">
                 <img src="https://picsum.photos/600/600?random=20" className="w-full h-full object-cover" alt="Advocate Portrait" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Career */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-serif text-slate-900 mb-6 flex items-center space-x-4">
                  <History className="text-blue-900" />
                  <span>Professional Background</span>
                </h2>
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p className="mb-4">
                    Julian Vance began his legal career at the prestigious Harvard Law School, where he graduated with honors. His early career was defined by challenging the status quo in administrative law and constitutional litigation.
                  </p>
                  <p>
                    Over the past decade and a half, he has successfully argued before high-level appellate courts and the Supreme Court, securing landmarks decisions in civil rights and property legislation. He is known for his sharp analytical mind and an ability to distill complex legal jargon into clear, actionable advice.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                    <GraduationCap className="text-blue-900" />
                    <span>Academic Excellence</span>
                  </h3>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-semibold text-slate-800">Harvard Law</span>
                      <span>LL.M. (Hons)</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-semibold text-slate-800">Columbia University</span>
                      <span>LL.B.</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-slate-800">Oxford University</span>
                      <span>Legal Fellowship</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                    <Briefcase className="text-blue-900" />
                    <span>Core Values</span>
                  </h3>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Unwavering Ethical Standards</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Strategic Precision</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Client-Centered Approach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-blue-900 p-8 rounded-[2rem] text-white">
                <h3 className="text-2xl font-serif mb-6 flex items-center space-x-3">
                  <HeartHandshake size={28} className="text-blue-400" />
                  <span>Legal Philosophy</span>
                </h3>
                <p className="text-blue-100 italic leading-relaxed">
                  "I believe that the role of a lawyer is not just to provide a service, but to be a sentinel for justice. Every case deserves a strategy that is as unique as the individual or business behind it."
                </p>
              </div>
              
              <div className="border border-slate-100 p-8 rounded-3xl shadow-sm">
                <h3 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-widest">Courts Practiced</h3>
                <div className="space-y-3">
                  {['U.S. Supreme Court', 'Second Circuit Court of Appeals', 'New York Supreme Court', 'Southern District of NY'].map(court => (
                    <div key={court} className="flex items-center space-x-3 text-slate-600 text-sm">
                      <Scale className="w-4 h-4 text-blue-900" />
                      <span>{court}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Scale: React.FC<{ className?: string, size?: number }> = ({ className, size = 16 }) => (
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
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/>
  </svg>
);

export default About;
