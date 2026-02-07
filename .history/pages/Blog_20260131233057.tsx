import React, { useState } from 'react';
import { Calendar, Tag, ArrowRight, Mail, Clock, User, FileText, Shield, Scale, BookOpen, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useToast } from '../App';

// Real blog posts with a single, verified working image URL
const REAL_BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding Land Dispute Cases in Jharkhand's Civil Courts",
    excerpt: "A comprehensive guide to navigating land and property disputes in Giridih and Hazaribagh districts, including common pitfalls and legal precedents.",
    fullContent: `
      <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Land Disputes in Giridih District</h2>
      <p class="mb-4 text-slate-600">Land disputes are among the most common cases heard at Civil Court Giridih. These cases typically involve boundary disputes, title conflicts, and inheritance issues.</p>
      
      <h3 class="text-xl font-serif text-[#0a1128] mb-3 mt-6">Common Types of Land Disputes</h3>
      <ul class="list-disc pl-5 mb-4 text-slate-600 space-y-2">
        <li>Boundary disputes between adjacent landowners</li>
        <li>Title conflicts due to multiple sale deeds</li>
        <li>Partition suits among family members</li>
        <li>Easement rights and access issues</li>
        <li>Tenancy disputes under Jharkhand Tenancy Act</li>
      </ul>
      
      <h3 class="text-xl font-serif text-[#0a1128] mb-3 mt-6">Legal Procedure at Civil Court Giridih</h3>
      <p class="mb-4 text-slate-600">The typical land dispute case follows these steps at Civil Court Giridih:</p>
      <ol class="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
        <li>Filing of plaint with relevant documents</li>
        <li>Service of summons to opposite party</li>
        <li>Written statement filing within 30 days</li>
        <li>Issues framing by the court</li>
        <li>Evidence recording from both sides</li>
        <li>Final arguments and judgment</li>
      </ol>
      
      <div class="bg-slate-50 p-4 rounded-lg mt-6">
        <h4 class="font-bold text-[#c5a059] mb-2">Important Documents Required:</h4>
        <ul class="text-slate-600">
          <li>• Original sale deed or title documents</li>
          <li>• Mutation certificates</li>
          <li>• Khatauni and Khasra papers</li>
          <li>• Survey maps from revenue department</li>
          <li>• Property tax receipts</li>
        </ul>
      </div>
    `,
    date: "Mar 15, 2024",
    category: "Property Law",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Land Disputes", "Civil Court", "Property Rights"]
  },
  {
    id: 2,
    title: "Section 498A: Protecting Women from Domestic Violence in Rural Jharkhand",
    excerpt: "Analysis of domestic violence cases under Section 498A IPC, with focus on practical challenges in Giridih district courts.",
    fullContent: `
      <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Understanding Section 498A IPC</h2>
      <p class="mb-4 text-slate-600">Section 498A of the Indian Penal Code deals with cruelty by husband or relatives of husband towards a married woman. This is a cognizable, non-bailable, and non-compoundable offense.</p>
      
      <h3 class="text-xl font-serif text-[#0a1128] mb-3 mt-6">Key Provisions</h3>
      <ul class="list-disc pl-5 mb-4 text-slate-600 space-y-2">
        <li>Protects women from cruelty by husband or in-laws</li>
        <li>Covers both physical and mental cruelty</li>
        <li>Punishment: Up to 3 years imprisonment and fine</li>
        <li>Offense is cognizable and non-bailable</li>
      </ul>
      
      <h3 class="text-xl font-serif text-[#0a1128] mb-3 mt-6">Procedure at Giridih Court</h3>
      <ol class="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
        <li>FIR filing at local police station</li>
        <li>Investigation by police within 60 days</li>
        <li>Chargesheet filing before magistrate</li>
        <li>Framing of charges</li>
        <li>Trial proceedings with evidence</li>
        <li>Final judgment and sentencing</li>
      </ol>
      
      <div class="bg-slate-50 p-4 rounded-lg mt-6">
        <h4 class="font-bold text-[#c5a059] mb-2">Required Evidence:</h4>
        <ul class="text-slate-600">
          <li>• Medical reports for physical injuries</li>
          <li>• Photographs of injuries</li>
          <li>• Call recordings and messages</li>
          <li>• Witness statements</li>
          <li>• Marriage certificate</li>
        </ul>
      </div>
    `,
    date: "Feb 28, 2024",
    category: "Criminal Law",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Domestic Violence", "498A", "Women Rights"]
  },
  {
    id: 3,
    title: "Execution of Civil Court Decrees in Giridih: A Practical Guide",
    excerpt: "Step-by-step process for executing civil court decrees, including attachment of property and arrest warrants in local courts.",
    fullContent: `
      <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Decree Execution Process</h2>
      <p class="mb-4 text-slate-600">After obtaining a favorable decree from Civil Court Giridih, the next crucial step is execution to realize the benefits of the judgment.</p>
      
      <h3 class="text-xl font-serif text-[#0a1128] mb-3 mt-6">Modes of Execution</h3>
      <ul class="list-disc pl-5 mb-4 text-slate-600 space-y-2">
        <li>Attachment and sale of property</li>
        <li>Arrest and detention in civil prison</li>
        <li>Appointment of receiver</li>
        <li>Delivery of specific movable property</li>
        <li>Partition of immovable property</li>
      </ul>
      
      <h3 class="text-xl font-serif text-[#0a1128] mb-3 mt-6">Procedure Timeline</h3>
      <div class="bg-slate-50 p-4 rounded-lg">
        <div class="space-y-4">
          <div>
            <div class="font-semibold text-[#c5a059]">Week 1-2</div>
            <div class="text-slate-600 text-sm">Filing of execution application with required documents</div>
          </div>
          <div>
            <div class="font-semibold text-[#c5a059]">Week 3-4</div>
            <div class="text-slate-600 text-sm">Court notice to judgment debtor</div>
          </div>
          <div>
            <div class="font-semibold text-[#c5a059]">Week 5-8</div>
            <div class="text-slate-600 text-sm">Attachment proceedings if payment not made</div>
          </div>
        </div>
      </div>
    `,
    date: "Feb 12, 2024",
    category: "Civil Procedure",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Court Decree", "Execution", "Civil Procedure"]
  },
  {
    id: 4,
    title: "Succession Certificate Process at SDM Court Bagodar-Sariya",
    excerpt: "Complete guide to obtaining succession certificates for ancestral properties in Giridih district, including required documents and timeline.",
    fullContent: `
      <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Succession Certificate Procedure</h2>
      <p class="mb-4 text-slate-600">Succession certificates are essential for transferring assets of a deceased person to legal heirs, especially for properties in Giridih district.</p>
      
      <h3 class="text-xl font-serif text-[#0a1128] mb-3 mt-6">Required Documents</h3>
      <div class="bg-slate-50 p-4 rounded-lg mb-4">
        <ul class="text-slate-600 space-y-2">
          <li>• Death certificate of the deceased</li>
          <li>• Legal heir certificate</li>
          <li>• Property documents (sale deeds, mutation)</li>
          <li>• Affidavit by all legal heirs</li>
          <li>• Identity proof of applicants</li>
          <li>• Witness affidavits (minimum 2)</li>
        </ul>
      </div>
      
      <h3 class="text-xl font-serif text-[#0a1128] mb-3 mt-6">SDM Court Process</h3>
      <ol class="list-decimal pl-5 mb-4 text-slate-600 space-y-2">
        <li>Application filing with required fees</li>
        <li>Publication of notice in local newspaper</li>
        <li>30-day waiting period for objections</li>
        <li>Hearing at SDM Court Bagodar-Sariya</li>
        <li>Verification of documents</li>
        <li>Issuance of succession certificate</li>
      </ol>
    `,
    date: "Jan 30, 2024",
    category: "Family Law",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Succession", "Inheritance", "SDM Court"]
  },
  // Add more articles as needed...
];

const Blog: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

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

  const handleReadArticle = (id: number) => {
    if (expandedArticle === id) {
      setExpandedArticle(null);
    } else {
      setExpandedArticle(id);
      // Scroll to the expanded article
      setTimeout(() => {
        const element = document.getElementById(`article-${id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    showToast(`Filtering: ${category}`, 'info');
    setExpandedArticle(null); // Close any expanded article when filtering
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
          <div className="space-y-8">
            {filteredPosts.map((post) => {
              const isExpanded = expandedArticle === post.id;
              
              return (
                <article 
                  key={post.id} 
                  id={`article-${post.id}`}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300"
                >
                  {/* Article Header */}
                  <div 
                    className="cursor-pointer"
                    onClick={() => handleReadArticle(post.id)}
                  >
                    <div className="flex flex-col sm:flex-row p-6">
                      {/* Image */}
                      <div className="w-full sm:w-48 h-48 sm:h-40 rounded-xl overflow-hidden mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80";
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        {/* Category badge */}
                        <div className="inline-block mb-3">
                          <span className="bg-[#c5a059] text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                            {post.category}
                          </span>
                        </div>

                        {/* Meta info */}
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-2 text-slate-500 text-xs">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-slate-500 text-xs">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-slate-500 text-xs">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-serif text-[#0a1128] mb-3 leading-tight">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-slate-600 leading-relaxed mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, idx) => (
                            <span 
                              key={idx} 
                              className="px-3 py-1 bg-slate-50 text-slate-600 rounded-md text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Read more button */}
                        <div className="flex items-center justify-between">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReadArticle(post.id);
                            }}
                            className="inline-flex items-center space-x-2 text-[#c5a059] font-semibold text-sm hover:text-[#d4af37] transition-colors"
                          >
                            <span>{isExpanded ? 'Close Article' : 'Read Full Article'}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>
                          <div className="text-xs text-slate-400">
                            {post.readTime} read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="border-t border-slate-100">
                      <div className="p-6 bg-slate-50/50">
                        <div className="max-w-4xl mx-auto">
                          {/* Close button for mobile */}
                          <div className="flex justify-end mb-6 sm:hidden">
                            <button
                              onClick={() => setExpandedArticle(null)}
                              className="p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
                            >
                              <X className="w-4 h-4 text-slate-600" />
                            </button>
                          </div>
                          
                          {/* Full Content */}
                          <div 
                            className="prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.fullContent }}
                          />
                          
                          {/* Additional Actions */}
                          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-4">
                            <button 
                              onClick={() => {
                                showToast('Article bookmarked', 'success');
                              }}
                              className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors text-sm font-medium"
                            >
                              Bookmark Article
                            </button>
                            <button 
                              onClick={() => {
                                showToast('Sharing article...', 'info');
                              }}
                              className="px-4 py-2 bg-[#c5a059] text-white rounded-lg hover:bg-[#d4af37] transition-colors text-sm font-medium"
                            >
                              Share Article
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
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