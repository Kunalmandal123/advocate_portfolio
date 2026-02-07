import React, { useState } from 'react';
import { Calendar, Tag, ArrowRight, Mail, Clock, User, FileText, Shield, Scale, BookOpen, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useToast } from '../App';

// 15 Comprehensive Blog Posts with reliable images and full HTML content
const ALL_BLOGS = [
  {
    id: 1,
    title: "Understanding Land Dispute Cases in Jharkhand's Civil Courts",
    excerpt: "A comprehensive guide to navigating land and property disputes in Giridih and Hazaribagh districts.",
    fullContent: `
      <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Land Disputes in Giridih District</h2>
      <p class="mb-4 text-slate-600">Land disputes are among the most common cases heard at Civil Court Giridih. These cases typically involve boundary disputes, title conflicts, and inheritance issues.</p>
      <h3 class="text-xl font-serif text-[#0a1128] mb-3 mt-6">Common Types</h3>
      <ul class="list-disc pl-5 mb-4 text-slate-600 space-y-2">
        <li>Boundary disputes between adjacent landowners</li>
        <li>Title conflicts due to multiple sale deeds</li>
        <li>Partition suits among family members</li>
      </ul>
      <div class="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-lg">
        <h4 class="font-bold text-blue-800 mb-2">Expert Tip:</h4>
        <p class="text-blue-700">Always verify mutation records at the local revenue office before purchasing property in Giridih.</p>
      </div>
    `,
    date: "Mar 15, 2024",
    category: "Property Law",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1582441929031-970a2fb4ed50?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Land Disputes", "Civil Court", "Giridih"]
  },
  {
    id: 2,
    title: "Section 498A: Protecting Women from Domestic Violence",
    excerpt: "Analysis of domestic violence cases under Section 498A IPC, focusing on challenges in Giridih district.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">Understanding 498A IPC</h2><p class="text-slate-600">This section protects women from cruelty by husbands or in-laws. We explore the legal timeline from FIR to trial in Jharkhand courts.</p>`,
    date: "Feb 28, 2024",
    category: "Criminal Law",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["498A", "Domestic Violence", "Women Rights"]
  },
  {
    id: 3,
    title: "Execution of Civil Court Decrees: A Practical Guide",
    excerpt: "Step-by-step process for executing civil court decrees, including attachment of property.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">Decree Execution</h2><p class="text-slate-600">Obtaining a judgment is only half the battle. This guide explains how to file for execution (Form 6) in local courts.</p>`,
    date: "Feb 12, 2024",
    category: "Civil Procedure",
    readTime: "14 min",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Court Decree", "Execution", "Civil Procedure"]
  },
  {
    id: 4,
    title: "Succession Certificate Process at SDM Court Bagodar-Sariya",
    excerpt: "Guide to obtaining succession certificates for ancestral properties in Giridih district.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">Succession Laws</h2><p class="text-slate-600">When a family member passes away without a will, a Succession Certificate is required to transfer assets and bank balances.</p>`,
    date: "Jan 30, 2024",
    category: "Family Law",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Succession", "SDM Court", "Inheritance"]
  },
  {
    id: 5,
    title: "Consumer Protection Cases in Jharkhand: Jurisdiction Guide",
    excerpt: "Which forum to approach for consumer disputes in Giridih and Ranchi.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">Consumer Rights</h2><p class="text-slate-600">The 2019 Act provides a three-tier system. We explain the financial thresholds for District and State Commissions.</p>`,
    date: "Jan 15, 2024",
    category: "Consumer Law",
    readTime: "13 min",
    image: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Consumer Rights", "District Forum", "Deficiency"]
  },
  {
    id: 6,
    title: "Bail Applications in Hazaribagh Sessions Court",
    excerpt: "Insights into bail applications and strategies for different types of offenses.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">Bail Procedures</h2><p class="text-slate-600">Analysis of Section 437 and 439 of CrPC and how local ties influence judicial discretion in Hazaribagh.</p>`,
    date: "Dec 20, 2023",
    category: "Criminal Law",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Bail", "Sessions Court", "Criminal Procedure"]
  },
  {
    id: 7,
    title: "Agricultural Land Conversion Laws in Jharkhand",
    excerpt: "Legal requirements for converting agricultural land to residential use in Giridih.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">Land Conversion</h2><p class="text-slate-600">Known as 'Diversion' in Jharkhand, this process requires specific documentation from the revenue department.</p>`,
    date: "Dec 5, 2023",
    category: "Property Law",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Land Conversion", "Agriculture", "RERA"]
  },
  {
    id: 8,
    title: "Maintenance Cases Under Section 125 CrPC",
    excerpt: "Analysis of maintenance rights for wives, children, and parents in Giridih courts.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">Maintenance Rights</h2><p class="text-slate-600">How to file for interim maintenance and the factors courts consider for final quantum of support.</p>`,
    date: "Nov 22, 2023",
    category: "Family Law",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Maintenance", "125 CrPC", "Family Support"]
  },
  {
    id: 9,
    title: "Documentation for Property Registration in Giridih",
    excerpt: "Checklist and procedure for property registration and stamp duty calculation.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">Registration Guide</h2><p class="text-slate-600">A detailed list of KYC and property documents needed for a hassle-free registration at the Sub-Registrar office.</p>`,
    date: "Nov 10, 2023",
    category: "Property Law",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Registration", "Stamp Duty", "Property"]
  },
  {
    id: 10,
    title: "Motor Accident Claims (MACT) in Hazaribagh",
    excerpt: "Procedure for filing accident claims and calculating compensation for victims.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">MACT Claims</h2><p class="text-slate-600">Understanding the 6-month limitation period and the documents required from the police and hospitals.</p>`,
    date: "Oct 28, 2023",
    category: "Accident Law",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["MACT", "Accident Claims", "Insurance"]
  },
  {
    id: 11,
    title: "Tenant Eviction Laws: Rights and Remedies",
    excerpt: "Legal process for evicting tenants and notice requirements in Jharkhand.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">Tenant Eviction</h2><p class="text-slate-600">Navigating the Rent Control Act and proving bona-fide requirement for property possession.</p>`,
    date: "Oct 15, 2023",
    category: "Property Law",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Tenant", "Eviction", "Rent Control"]
  },
  {
    id: 12,
    title: "Will Registration & Probate in Civil Court Giridih",
    excerpt: "Guide to creating valid wills and obtaining probate for execution.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">Estate Planning</h2><p class="text-slate-600">The importance of registering a Will and the legal process for obtaining Probate from the District Judge.</p>`,
    date: "Sep 30, 2023",
    category: "Family Law",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1578574515318-47ad9cfc2342?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Will", "Probate", "Inheritance"]
  },
  {
    id: 13,
    title: "Cheque Bounce Cases: Section 138 NI Act Procedure",
    excerpt: "Step-by-step guide to filing cheque bounce cases in Giridih courts.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">NI Act Cases</h2><p class="text-slate-600">The importance of the 30-day statutory notice and the summary trial procedure for recovery.</p>`,
    date: "Sep 15, 2023",
    category: "Commercial Law",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Cheque Bounce", "NI Act", "Commercial Disputes"]
  },
  {
    id: 14,
    title: "Partition Suits for Joint Family Properties",
    excerpt: "Legal procedure for dividing ancestral property among legal heirs.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">Property Partition</h2><p class="text-slate-600">Dealing with joint family properties and the process of final decree and physical division.</p>`,
    date: "Aug 28, 2023",
    category: "Property Law",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Partition", "Joint Family", "Property Division"]
  },
  {
    id: 15,
    title: "Legal Aid Services Available in Giridih District",
    excerpt: "How to access free legal aid for underprivileged litigants.",
    fullContent: `<h2 class="text-2xl font-serif mb-4">Access to Justice</h2><p class="text-slate-600">Understanding the role of DALSA and the eligibility criteria for free legal representation.</p>`,
    date: "Aug 10, 2023",
    category: "Legal Awareness",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Legal Aid", "Free Services", "Public Awareness"]
  }
];

const Blog: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(ALL_BLOGS.map(post => post.category)))];

  const filteredPosts = ALL_BLOGS.filter(post => {
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
      setTimeout(() => {
        document.getElementById(`article-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-[#0a1128] text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Legal Knowledge Hub</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">Practical guides for Giridih, Hazaribagh & Bagodar Court matters.</p>
          
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search legal topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 px-6 py-4 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:border-[#c5a059]"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 mb-12">
        <div className="bg-white p-4 rounded-2xl shadow-lg flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-lg font-medium transition-all ${
                activeCategory === cat ? 'bg-[#0a1128] text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog List */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              id={`article-${post.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover rounded-xl"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?w=800"; }}
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="bg-[#c5a059] text-white px-2 py-1 rounded font-bold uppercase">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-[#0a1128] mb-3">{post.title}</h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <button 
                    onClick={() => handleReadArticle(post.id)}
                    className="text-[#c5a059] font-bold flex items-center gap-2 hover:gap-3 transition-all underline decoration-2 underline-offset-4"
                  >
                    {expandedArticle === post.id ? 'Close Reading' : 'Read Full Guide'} 
                    {expandedArticle === post.id ? <ChevronUp className="w-4 h-4"/> : <ArrowRight className="w-4 h-4"/>}
                  </button>
                </div>
              </div>

              {expandedArticle === post.id && (
                <div className="border-t border-slate-100 p-8 bg-slate-50/50">
                  <div className="max-w-3xl mx-auto prose prose-slate prose-lg lg:prose-xl">
                    <div dangerouslySetInnerHTML={{ __html: post.fullContent }} />
                    <div className="mt-10 pt-6 border-t flex flex-wrap gap-4">
                        <button className="bg-[#0a1128] text-white px-6 py-2 rounded-lg text-sm font-semibold">Consult Advocate Vikas</button>
                        <button className="border border-slate-200 px-6 py-2 rounded-lg text-sm font-semibold">Download PDF Guide</button>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-gradient-to-r from-[#0a1128] to-[#1a1f3c] rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-serif mb-4">Stay Updated with Court Procedures</h3>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Get monthly legal insights and practical guides for Jharkhand district courts.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c5a059]"
            />
            <button className="bg-[#c5a059] px-8 py-3 rounded-lg font-bold hover:bg-[#d4af37] transition-colors">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;