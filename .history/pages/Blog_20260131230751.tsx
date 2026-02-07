import React, { useState } from 'react';
import { Calendar, Tag, ArrowRight, Mail, Clock, User, FileText, Shield, Scale, BookOpen } from 'lucide-react';
import { useToast } from '../App';

// Real blog posts relevant to Giridih/Hazaribagh legal practice
const REAL_BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding Land Dispute Cases in Jharkhand's Civil Courts",
    excerpt: "A comprehensive guide to navigating land and property disputes in Giridih and Hazaribagh districts, including common pitfalls and legal precedents.",
    date: "Mar 15, 2024",
    category: "Property Law",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Land Disputes", "Civil Court", "Property Rights"]
  },
  {
    id: 2,
    title: "Section 498A: Protecting Women from Domestic Violence in Rural Jharkhand",
    excerpt: "Analysis of domestic violence cases under Section 498A IPC, with focus on practical challenges in Giridih district courts.",
    date: "Feb 28, 2024",
    category: "Criminal Law",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1589820296157-cd8566c7b7e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Domestic Violence", "498A", "Women Rights"]
  },
  {
    id: 3,
    title: "Execution of Civil Court Decrees in Giridih: A Practical Guide",
    excerpt: "Step-by-step process for executing civil court decrees, including attachment of property and arrest warrants in local courts.",
    date: "Feb 12, 2024",
    category: "Civil Procedure",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Court Decree", "Execution", "Civil Procedure"]
  },
  {
    id: 4,
    title: "Succession Certificate Process at SDM Court Bagodar-Sariya",
    excerpt: "Complete guide to obtaining succession certificates for ancestral properties in Giridih district, including required documents and timeline.",
    date: "Jan 30, 2024",
    category: "Family Law",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1589820458168-4c6b3860d1d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Succession", "Inheritance", "SDM Court"]
  },
  {
    id: 5,
    title: "Consumer Protection Cases in Jharkhand: District Forum vs State Commission",
    excerpt: "Understanding the jurisdiction and procedure for filing consumer complaints in Giridih Consumer Forum versus State Commission.",
    date: "Jan 15, 2024",
    category: "Consumer Law",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1589820344057-8c5d56b52d8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Consumer Rights", "District Forum", "Compensation"]
  },
  {
    id: 6,
    title: "Bail Applications in Hazaribagh Sessions Court: Do's and Don'ts",
    excerpt: "Practical insights into bail applications, common mistakes to avoid, and successful strategies for different types of offenses.",
    date: "Dec 20, 2023",
    category: "Criminal Law",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1589578527966-fc7c8c4d9d3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Bail", "Sessions Court", "Criminal Procedure"]
  },
  {
    id: 7,
    title: "Agricultural Land Conversion Laws in Jharkhand",
    excerpt: "Legal requirements and procedure for converting agricultural land to residential/commercial use in Giridih district.",
    date: "Dec 5, 2023",
    category: "Property Law",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1589552950456-75eeaf5c4f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Land Conversion", "Agriculture", "RERA"]
  },
  {
    id: 8,
    title: "Maintenance Cases Under Section 125 CrPC: Giridih Court Insights",
    excerpt: "Analysis of maintenance cases for wives, children, and parents with recent judgments from Giridih courts.",
    date: "Nov 22, 2023",
    category: "Family Law",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1589552950456-75eeaf5c4f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Maintenance", "125 CrPC", "Family Support"]
  },
  {
    id: 9,
    title: "Documentation for Property Registration in Giridih Registrar Office",
    excerpt: "Complete checklist and procedure for property registration, stamp duty calculation, and common errors to avoid.",
    date: "Nov 10, 2023",
    category: "Property Law",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1589552950456-75eeaf5c4f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Registration", "Stamp Duty", "Property Documents"]
  },
  {
    id: 10,
    title: "Motor Accident Claims Tribunal (MACT) Cases in Hazaribagh",
    excerpt: "Procedure for filing accident claims, calculating compensation, and evidence required for successful MACT cases.",
    date: "Oct 28, 2023",
    category: "Accident Law",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1589820458168-4c6b3860d1d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["MACT", "Accident Claims", "Compensation"]
  },
  {
    id: 11,
    title: "Tenant Eviction Laws in Jharkhand: Rights and Remedies",
    excerpt: "Legal process for evicting tenants, notice requirements, and recent amendments affecting rental laws in Giridih.",
    date: "Oct 15, 2023",
    category: "Property Law",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1589552950456-75eeaf5c4f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Tenant", "Eviction", "Rent Control"]
  },
  {
    id: 12,
    title: "Will Registration and Probate Process at Civil Court Giridih",
    excerpt: "Complete guide to creating valid wills, registration procedure, and obtaining probate for executing wills.",
    date: "Sep 30, 2023",
    category: "Family Law",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1589820458168-4c6b3860d1d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Will", "Probate", "Inheritance"]
  },
  {
    id: 13,
    title: "Cheque Bounce Cases Under Section 138 NI Act: Giridih Court Procedure",
    excerpt: "Step-by-step guide to filing cheque bounce cases, statutory notices, and evidence requirements for successful prosecution.",
    date: "Sep 15, 2023",
    category: "Commercial Law",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1589578527966-fc7c8c4d9d3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Cheque Bounce", "138 NI Act", "Commercial Disputes"]
  },
  {
    id: 14,
    title: "Partition Suits for Joint Family Properties in Rural Jharkhand",
    excerpt: "Legal procedure for partition of joint family properties, valuation methods, and division among heirs.",
    date: "Aug 28, 2023",
    category: "Property Law",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1589552950456-75eeaf5c4f34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Partition", "Joint Family", "Property Division"]
  },
  {
    id: 15,
    title: "Legal Aid Services Available in Giridih District Courts",
    excerpt: "Guide to free legal aid services, eligibility criteria, and how to access legal assistance for underprivileged litigants.",
    date: "Aug 10, 2023",
    category: "Legal Awareness",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1589820296157-cd8566c7b7e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Legal Aid", "Free Services", "Public Awareness"]
  }
];

const Blog: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(REAL_BLOG_POSTS.map(post => post.category)))];

  // Filter posts based on category and search
  const filteredPosts = REAL_BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

 const handleSubscribe = (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) {
    showToast('Please enter your email address', 'info');
    return;
  }
  showToast(`Successfully subscribed: ${email}`, 'success');
  setEmail('');
};

  const handleReadArticle = (title: string) => {
    showToast(`Opening: "${title}"`, 'info');
    // In a real app, you would navigate to the article page
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    showToast(`Filtering: ${category}`, 'info');
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0a1128] via-[#1a1f3c] to-[#0a1128] pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-8">
              <BookOpen className="w-5 h-5 text-[#c5a059]" />
              <span className="text-white text-sm font-medium tracking-wider">LEGAL INSIGHTS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Legal Knowledge Hub
              <span className="block text-[#c5a059] text-xl md:text-2xl mt-4 font-light">
                Giridih & Hazaribagh Court Updates
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Expert legal analysis, court procedures, and practical guides for Civil Court Giridih, Hazaribagh, and SDM Court Bagodar-Sariya matters.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search legal topics, cases, or procedures..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-[#c5a059] transition-all placeholder:text-slate-400"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 bg-[#c5a059] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: "15+", label: "Legal Guides" },
                { value: "5", label: "Categories" },
                { value: "1200+", label: "Monthly Readers" },
                { value: "Free", label: "Access" }
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-4 border border-slate-100">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[#0a1128] text-white shadow-lg'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <span className="ml-2 text-[#c5a059]">
                    ({filteredPosts.length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-slate-400 mb-4">No articles found for "{searchQuery}"</div>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="text-[#c5a059] hover:text-[#d4af37] font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleReadArticle(post.title)}
              >
                {/* Image with overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#c5a059] text-white px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Read time */}
                  <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2 text-slate-500 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-500 text-xs">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif text-[#0a1128] mb-4 leading-tight group-hover:text-[#c5a059] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-slate-50 text-slate-600 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-md text-xs">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Read more */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button className="inline-flex items-center space-x-2 text-[#0a1128] font-semibold text-sm group-hover:text-[#c5a059] transition-colors">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="text-xs text-slate-400">
                      Legal Guide
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-24 bg-gradient-to-r from-[#0a1128] to-[#1a1f3c] rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-12 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#c5a059]/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#c5a059]" />
                </div>
                <div className="text-left">
                  <div className="text-white text-sm font-medium uppercase tracking-wider">LEGAL NEWSLETTER</div>
                  <div className="text-slate-300 text-xs">Free monthly updates</div>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
                Stay Updated with Court Procedures
              </h3>
              
              <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                Get monthly legal insights, court procedure updates, and practical guides for Giridih & Hazaribagh district courts directly in your inbox.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-white/5 border border-white/10 text-white px-6 py-4 rounded-lg focus:outline-none focus:border-[#c5a059] transition-all placeholder:text-slate-400"
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#c5a059]/30 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Subscribe Free</span>
                </button>
              </form>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-[#c5a059]" />
                    <span>No spam • 100% confidential</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Scale className="w-4 h-4 text-[#c5a059]" />
                    <span>Practical legal insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-[#c5a059]" />
                    <span>Free downloadable guides</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;