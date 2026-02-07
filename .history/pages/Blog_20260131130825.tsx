
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, Tag, ArrowRight, Mail } from 'lucide-react';
import { useToast } from '../App';

const Blog: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    showToast(`Subscribed: ${email}`, 'success');
    setEmail('');
  };

  const handleReadArticle = (title: string) => {
    showToast(`Opening: ${title} (Demo Mode)`, 'info');
  };

  return (
    <div className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-[#c5a059] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Legal Insights</span>
          <h1 className="text-5xl md:text-6xl font-serif text-[#0a1128] mb-6">Chambers Journal</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Stay informed with the latest legal trends, guides, and constitutional updates curated by our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => handleReadArticle(post.title)}
            >
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-8 shadow-xl">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#0a1128] text-[#c5a059] px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest shadow-2xl border border-white/10">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex-grow space-y-4">
                <div className="flex items-center space-x-6 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} className="text-[#c5a059]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Tag size={14} className="text-[#c5a059]" />
                    <span>8 min read</span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-[#0a1128] leading-tight group-hover:text-[#c5a059] transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-light line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="pt-8 mt-auto border-t border-slate-50">
                <button className="inline-flex items-center space-x-3 text-[#0a1128] font-bold uppercase text-[10px] tracking-widest group-hover:text-[#c5a059] transition-all">
                  <span>Full Analysis</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-32 navy-gradient rounded-2xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/40">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <Mail className="mx-auto text-[#c5a059] mb-8" size={48} />
            <h4 className="text-3xl font-serif text-white mb-6">Briefings from the Bench</h4>
            <p className="text-slate-400 mb-12 font-light text-lg">Subscribe to our monthly legal newsletter for deep dives into judicial changes and landmark judgments.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                required
                placeholder="Institutional Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-white/5 border border-white/10 text-white px-8 py-5 rounded-lg focus:outline-none focus:border-[#c5a059] transition-all placeholder:text-slate-600"
              />
              <button className="gold-gradient text-white px-12 py-5 rounded-lg font-bold uppercase text-xs tracking-[0.2em] hover:brightness-110 transition-all shadow-xl shadow-[#c5a059]/20">
                Join Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
