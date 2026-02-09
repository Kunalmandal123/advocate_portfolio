import React, { useState } from 'react';
import { Calendar, Tag, ArrowRight, Mail, Clock, User, FileText, Shield, Scale, BookOpen, ChevronDown, ChevronUp, X, MapPin, Home, Car, Banknote, Phone, Briefcase } from 'lucide-react';
import { useToast } from '../App';

// 15 complete blog posts with working images and full content
const REAL_BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding Land Dispute Cases in Jharkhand's Civil Courts",
    excerpt: "A comprehensive guide to navigating land and property disputes in Giridih and Hazaribagh districts, including common pitfalls and legal precedents.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Land Disputes in Giridih District</h2>
        <p class="text-slate-600">Land disputes constitute approximately 40% of all civil cases at Civil Court Giridih. These conflicts typically involve agricultural lands, residential plots, and commercial properties across the district.</p>
        
        <div class="bg-amber-50 border-l-4 border-amber-500 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-amber-700">
                Most land disputes in Giridih arise from incomplete documentation and boundary ambiguities dating back to British-era revenue records.
              </p>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Common Types of Land Disputes</h3>
        <ul class="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>Boundary Disputes:</strong> Most common, involving measurement errors and missing boundary markers</li>
          <li><strong>Title Conflicts:</strong> Multiple sale deeds for same property, often involving fraud</li>
          <li><strong>Partition Suits:</strong> Family disputes over ancestral property division</li>
          <li><strong>Easement Rights:</strong> Access to water sources and pathways through others' lands</li>
          <li><strong>Tenancy Disputes:</strong> Issues under Jharkhand Tenancy Act affecting sharecroppers</li>
        </ul>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Legal Procedure Timeline</h3>
        <div class="bg-slate-50 p-4 rounded-lg">
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</div>
              <div>
                <div class="font-semibold text-slate-800">Filing Stage (Month 1-2)</div>
                <div class="text-sm text-slate-600">Plaint filing with required documents and court fees calculation based on property value</div>
              </div>
            </div>
            <div class="flex items-start">
              <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</div>
              <div>
                <div class="font-semibold text-slate-800">Written Statement (Month 3-4)</div>
                <div class="text-sm text-slate-600">Defendant files response within 30 days, followed by replication by plaintiff</div>
              </div>
            </div>
            <div class="flex items-start">
              <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</div>
              <div>
                <div class="font-semibold text-slate-800">Evidence Recording (Month 5-8)</div>
                <div class="text-sm text-slate-600">Both parties present witnesses and documentary evidence</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h4 class="font-bold text-blue-800 mb-2">Required Documents:</h4>
          <ul class="text-blue-700 text-sm space-y-1">
            <li>• Original sale deed with proper stamp duty payment</li>
            <li>• Mutation records from circle office</li>
            <li>• Khatauni and Khasra papers for agricultural land</li>
            <li>• Latest property tax receipts</li>
            <li>• Encumbrance certificate from sub-registrar office</li>
          </ul>
        </div>
      </div>
    `,
    date: "Mar 15, 2024",
    category: "Property Law",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Land Disputes", "Civil Court", "Property Rights", "Giridih"]
  },
  {
    id: 2,
    title: "Section 498A: Protecting Women from Domestic Violence in Rural Jharkhand",
    excerpt: "Analysis of domestic violence cases under Section 498A IPC, with focus on practical challenges in Giridih district courts.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Section 498A IPC: Legal Shield for Women</h2>
        <p class="text-slate-600">Section 498A of the Indian Penal Code serves as a crucial legal protection for married women facing cruelty from husbands or in-laws, particularly in dowry-related harassment cases prevalent in rural Jharkhand.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-red-50 p-4 rounded-lg">
            <div class="font-bold text-red-700 mb-2">Key Features</div>
            <ul class="text-sm text-red-600 space-y-1">
              <li>• Cognizable offense</li>
              <li>• Non-bailable (court discretion)</li>
              <li>• Non-compoundable generally</li>
              <li>• Punishment: Up to 3 years + fine</li>
            </ul>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <div class="font-bold text-green-700 mb-2">Protection Scope</div>
            <ul class="text-sm text-green-600 space-y-1">
              <li>• Physical & mental cruelty</li>
              <li>• Dowry harassment</li>
              <li>• Economic abuse</li>
              <li>• Emotional torture</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Procedure Flowchart</h3>
        <div class="bg-slate-50 p-4 rounded-lg">
          <div class="space-y-3">
            <div class="flex items-center">
              <div class="bg-[#c5a059] text-white rounded-lg px-3 py-1 text-sm font-medium">Step 1</div>
              <div class="ml-3 text-slate-700">FIR at police station or complaint to Magistrate</div>
            </div>
            <div class="flex items-center">
              <div class="bg-[#c5a059] text-white rounded-lg px-3 py-1 text-sm font-medium">Step 2</div>
              <div class="ml-3 text-slate-700">Medical examination if physical injuries</div>
            </div>
            <div class="flex items-center">
              <div class="bg-[#c5a059] text-white rounded-lg px-3 py-1 text-sm font-medium">Step 3</div>
              <div class="ml-3 text-slate-700">Police investigation (60 days maximum)</div>
            </div>
            <div class="flex items-center">
              <div class="bg-[#c5a059] text-white rounded-lg px-3 py-1 text-sm font-medium">Step 4</div>
              <div class="ml-3 text-slate-700">Chargesheet filing before JMFC</div>
            </div>
          </div>
        </div>
        
        <div class="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <h4 class="font-bold text-purple-800 mb-2">Evidence Collection Tips:</h4>
          <ul class="text-purple-700 text-sm space-y-2">
            <li>• Photograph injuries with date/time stamp immediately</li>
            <li>• Preserve threatening messages/calls/emails</li>
            <li>• Maintain diary of incidents with dates</li>
            <li>• Collect witness contact details early</li>
            <li>• Medical reports from government hospitals carry more weight</li>
          </ul>
        </div>
      </div>
    `,
    date: "Feb 28, 2024",
    category: "Criminal Law",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Domestic Violence", "498A IPC", "Women Rights", "Dowry"]
  },
  {
    id: 3,
    title: "Execution of Civil Court Decrees in Giridih: A Practical Guide",
    excerpt: "Step-by-step process for executing civil court decrees, including attachment of property and arrest warrants in local courts.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Decree Execution: Turning Judgment into Reality</h2>
        <p class="text-slate-600">A favorable court judgment is only the first step. The execution process at Civil Court Giridih ensures the decree holder actually receives what the court has awarded.</p>
        
        <div class="bg-yellow-50 p-4 rounded-lg">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-yellow-700">
                <strong>Important:</strong> Execution application must be filed within 12 years from decree date under Limitation Act, 1963.
              </p>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Execution Methods Available</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white border border-slate-200 rounded-lg p-4">
            <div class="font-bold text-[#c5a059] mb-2">Attachment & Sale</div>
            <p class="text-sm text-slate-600">Most common for money decrees. Court attaches debtor's property and auctions it.</p>
          </div>
          <div class="bg-white border border-slate-200 rounded-lg p-4">
            <div class="font-bold text-[#c5a059] mb-2">Arrest & Detention</div>
            <p class="text-sm text-slate-600">For willful defaulters who can pay but refuse. Maximum 3 months civil imprisonment.</p>
          </div>
          <div class="bg-white border border-slate-200 rounded-lg p-4">
            <div class="font-bold text-[#c5a059] mb-2">Appointment of Receiver</div>
            <p class="text-sm text-slate-600">Court appoints receiver to manage property and collect rent/income.</p>
          </div>
          <div class="bg-white border border-slate-200 rounded-lg p-4">
            <div class="font-bold text-[#c5a059] mb-2">Delivery of Possession</div>
            <p class="text-sm text-slate-600">For specific performance decrees, court helps take physical possession.</p>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Process Timeline</h3>
        <div class="space-y-3">
          <div class="flex items-center p-3 bg-slate-50 rounded-lg">
            <div class="w-8 h-8 bg-[#0a1128] text-white rounded-full flex items-center justify-center mr-3">1</div>
            <div>
              <div class="font-medium text-slate-800">Application Filing (Week 1-2)</div>
              <div class="text-sm text-slate-600">Execution petition with decree copy, affidavit, and asset details of judgment debtor</div>
            </div>
          </div>
          <div class="flex items-center p-3 bg-slate-50 rounded-lg">
            <div class="w-8 h-8 bg-[#0a1128] text-white rounded-full flex items-center justify-center mr-3">2</div>
            <div>
              <div class="font-medium text-slate-800">Notice to Debtor (Week 3-4)</div>
              <div class="text-sm text-slate-600">15 days to show cause why decree shouldn't be executed</div>
            </div>
          </div>
          <div class="flex items-center p-3 bg-slate-50 rounded-lg">
            <div class="w-8 h-8 bg-[#0a1128] text-white rounded-full flex items-center justify-center mr-3">3</div>
            <div>
              <div class="font-medium text-slate-800">Attachment Proceedings (Week 5-8)</div>
              <div class="text-sm text-slate-600">Identification and attachment of debtor's movable/immovable properties</div>
            </div>
          </div>
          <div class="flex items-center p-3 bg-slate-50 rounded-lg">
            <div class="w-8 h-8 bg-[#0a1128] text-white rounded-full flex items-center justify-center mr-3">4</div>
            <div>
              <div class="font-medium text-slate-800">Sale/Auction (Week 9-12)</div>
              <div class="text-sm text-slate-600">Public auction of attached properties after valuation</div>
            </div>
          </div>
        </div>
        
        <div class="bg-red-50 p-4 rounded-lg border border-red-100">
          <h4 class="font-bold text-red-800 mb-2">Common Challenges in Giridih:</h4>
          <ul class="text-red-700 text-sm space-y-2">
            <li>• Concealment of assets by judgment debtors</li>
            <li>• Delay tactics through repeated objections</li>
            <li>• Identification of correct properties in rural areas</li>
            <li>• Resistance from family members during possession</li>
            <li>• Inadequate police support for implementation</li>
          </ul>
        </div>
      </div>
    `,
    date: "Feb 12, 2024",
    category: "Civil Procedure",
    readTime: "14 min",
    image: "https://image2url.com/r2/default/images/1770360326188-726d1209-3d86-4d9b-9348-2425f30f2907.png",
    author: "Adv. Vikas Kumar",
    tags: ["Court Decree", "Execution", "Civil Procedure", "Attachment"]
  },
  {
    id: 4,
    title: "Succession Certificate Process at SDM Court Bagodar-Sariya",
    excerpt: "Complete guide to obtaining succession certificates for ancestral properties in Giridih district, including required documents and timeline.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Succession Certificates: Transferring Assets Legally</h2>
        <p class="text-slate-600">Succession certificates issued by SDM Court Bagodar-Sariya are essential for legal heirs to claim bank deposits, securities, and other movable assets of a deceased person without a will.</p>
        
        <div class="bg-green-50 p-4 rounded-lg">
          <h4 class="font-bold text-green-800 mb-2">When is Succession Certificate Required?</h4>
          <ul class="text-green-700 space-y-1">
            <li>• To claim bank balances above ₹50,000</li>
            <li>• For transfer of shares, mutual funds</li>
            <li>• Insurance claim settlements</li>
            <li>• PF and pension claims</li>
            <li>• Government securities redemption</li>
            <li>• Settlement of fixed deposits</li>
            <li>• Transfer of vehicle ownership</li>
          </ul>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Document Checklist for SDM Court</h3>
        <div class="space-y-2">
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">✓</div>
            <span class="text-slate-700">Death certificate (original + 3 copies)</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">✓</div>
            <span class="text-slate-700">Legal heir certificate from revenue officer</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">✓</div>
            <span class="text-slate-700">Affidavit by all heirs on ₹100 stamp paper</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">✓</div>
            <span class="text-slate-700">Identity proof of all legal heirs</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">✓</div>
            <span class="text-slate-700">No-objection from other heirs if single applicant</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">✓</div>
            <span class="text-slate-700">Details of assets to be transferred</span>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">SDM Court Process Timeline</h3>
        <div class="space-y-3">
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
            <div>
              <div class="font-medium text-slate-800">Application Filing (Days 1-7)</div>
              <div class="text-sm text-slate-600">Submit application with court fees (2-3% of asset value), affidavit, and documents</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
            <div>
              <div class="font-medium text-slate-800">Verification (Days 8-15)</div>
              <div class="text-sm text-slate-600">SDM office verifies documents with revenue records and banks</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
            <div>
              <div class="font-medium text-slate-800">Newspaper Publication (Days 16-46)</div>
              <div class="text-sm text-slate-600">Notice published in 2 newspapers (local + regional), 30-day objection period</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
            <div>
              <div class="font-medium text-slate-800">Certificate Issuance (Days 47-60)</div>
              <div class="text-sm text-slate-600">If no objections, certificate issued within 15 days of completion</div>
            </div>
          </div>
        </div>
        
        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-bold text-blue-800 mb-2">Court Fees Structure:</h4>
          <div class="text-sm text-blue-700">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="font-semibold">Asset Value</p>
                <p>Up to ₹1 lakh: ₹1000</p>
                <p>₹1-5 lakhs: ₹2000</p>
                <p>₹5-10 lakhs: ₹3000</p>
              </div>
              <div>
                <p class="font-semibold">+ Additional</p>
                <p>Advertisement: ₹1500-2000</p>
                <p>Stamp Paper: ₹100</p>
                <p>Lawyer Fees: ₹5000-15000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    date: "Jan 30, 2024",
    category: "Family Law",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Succession", "Inheritance", "SDM Court", "Legal Heir"]
  },
  {
    id: 5,
    title: "Consumer Protection Cases in Jharkhand: District Forum vs State Commission",
    excerpt: "Understanding the jurisdiction and procedure for filing consumer complaints in Giridih Consumer Forum versus State Commission.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Consumer Justice System in Jharkhand</h2>
        <p class="text-slate-600">The Consumer Protection Act, 2019 provides a three-tier redressal mechanism for consumers in Jharkhand. Understanding jurisdiction is key to filing effective complaints.</p>
        
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="py-3 px-4 border-b text-left font-semibold text-slate-700">Forum</th>
                <th class="py-3 px-4 border-b text-left font-semibold text-slate-700">Jurisdiction</th>
                <th class="py-3 px-4 border-b text-left font-semibold text-slate-700">Filing Fee</th>
                <th class="py-3 px-4 border-b text-left font-semibold text-slate-700">Time Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-slate-50">
                <td class="py-3 px-4 border-b">District Commission (Giridih)</td>
                <td class="py-3 px-4 border-b">Up to ₹1 crore</td>
                <td class="py-3 px-4 border-b">Based on claim value</td>
                <td class="py-3 px-4 border-b">21 days admission</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="py-3 px-4 border-b">State Commission (Ranchi)</td>
                <td class="py-3 px-4 border-b">₹1 crore to ₹10 crore</td>
                <td class="py-3 px-4 border-b">Fixed + % of claim</td>
                <td class="py-3 px-4 border-b">3-5 months</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Common Consumer Complaints in Giridih</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <div class="font-bold text-blue-700 mb-2 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path>
              </svg>
              Banking Issues
            </div>
            <ul class="text-sm text-blue-600 space-y-1">
              <li>• Unauthorized transactions</li>
              <li>• ATM fraud cases</li>
              <li>• Wrong loan charges</li>
              <li>• Credit card disputes</li>
              <li>• Delay in loan processing</li>
            </ul>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <div class="font-bold text-green-700 mb-2 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
              </svg>
              Insurance Claims
            </div>
            <ul class="text-sm text-green-600 space-y-1">
              <li>• Wrongful repudiation</li>
              <li>• Delay in settlement</li>
              <li>• Under-settlement</li>
              <li>• Policy cancellation issues</li>
              <li>• Premium calculation errors</li>
            </ul>
          </div>
          <div class="bg-amber-50 p-4 rounded-lg">
            <div class="font-bold text-amber-700 mb-2 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
              </svg>
              Real Estate
            </div>
            <ul class="text-sm text-amber-600 space-y-1">
              <li>• Delay in possession</li>
              <li>• Poor construction quality</li>
              <li>• False promises</li>
              <li>• Hidden charges</li>
              <li>• Amenities not provided</li>
            </ul>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <div class="font-bold text-purple-700 mb-2 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
              </svg>
              Telecom Services
            </div>
            <ul class="text-sm text-purple-600 space-y-1">
              <li>• Wrong billing</li>
              <li>• Poor network quality</li>
              <li>• Unauthorized services</li>
              <li>• Porting issues</li>
              <li>• Data pack problems</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-amber-50 p-4 rounded-lg border border-amber-100">
          <h4 class="font-bold text-amber-800 mb-2">Quick Tips for Filing Complaint:</h4>
          <ul class="text-amber-700 text-sm space-y-1">
            <li>• File within 2 years of cause of action</li>
            <li>• Include all relevant documents with complaint</li>
            <li>• Clearly state relief sought (refund/replacement/compensation)</li>
            <li>• Calculate compensation precisely including mental agony</li>
            <li>• Serve copy to opposite party yourself for faster process</li>
            <li>• Follow up regularly with the commission</li>
            <li>• Consider mediation option for faster settlement</li>
          </ul>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Compensation Calculation</h3>
        <div class="bg-white border border-slate-200 rounded-lg p-4">
          <div class="text-slate-700">
            <p><strong>Formula:</strong> Actual loss + Interest @12% p.a. + Compensation for mental agony + Cost of proceedings</p>
            <p class="text-sm text-slate-600 mt-2">Mental agony compensation typically ranges from ₹10,000 to ₹2,00,000 based on severity and duration of harassment.</p>
          </div>
        </div>
      </div>
    `,
    date: "Jan 15, 2024",
    category: "Consumer Law",
    readTime: "13 min",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Consumer Rights", "District Forum", "Compensation", "Deficiency"]
  },
  {
    id: 6,
    title: "Bail Applications in Giridih Sessions Court: Do's and Don'ts",
    excerpt: "Practical insights into bail applications, common mistakes to avoid, and successful strategies for different types of offenses.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Bail Strategies at Giridih Sessions Court</h2>
        <p class="text-slate-600">Understanding bail jurisprudence and practical strategies can significantly impact case outcomes at Hazaribagh Sessions Court for various criminal offenses.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-red-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-red-600 mb-1">Anticipatory</div>
            <div class="text-sm text-red-500">Before arrest under Section 438 CrPC</div>
            <div class="text-xs text-red-400 mt-2">Conditions apply, court discretion</div>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-blue-600 mb-1">Regular</div>
            <div class="text-sm text-blue-500">After arrest before chargesheet</div>
            <div class="text-xs text-blue-400 mt-2">Sections 437 & 439 CrPC</div>
          </div>
          <div class="bg-green-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-green-600 mb-1">Default</div>
            <div class="text-sm text-green-500">If investigation not completed in 90 days</div>
            <div class="text-xs text-green-400 mt-2">Statutory right with conditions</div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Bail Considerations by Offense Type</h3>
        <div class="space-y-4">
          <div class="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50">
            <div class="font-bold text-green-700">Bailable Offenses</div>
            <div class="text-sm text-slate-600">Right to bail (Sections 341, 353 IPC) - Granted as a matter of right with reasonable surety amount</div>
            <div class="text-xs text-green-600 mt-1">Police station bail usually possible</div>
          </div>
          <div class="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50">
            <div class="font-bold text-amber-700">Non-Bailable (Not Severe)</div>
            <div class="text-sm text-slate-600">Court discretion (Sections 307, 376 IPC) - Based on evidence, criminal history, and flight risk</div>
            <div class="text-xs text-amber-600 mt-1">Strong grounds required, conditions imposed</div>
          </div>
          <div class="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50">
            <div class="font-bold text-purple-700">Non-Bailable (Severe)</div>
            <div class="text-sm text-slate-600">Strict scrutiny (NDPS, Murder) - Rarely granted, requires exceptional circumstances</div>
            <div class="text-xs text-purple-600 mt-1">Bail only in case of procedural lapses or weak evidence</div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Key Factors Considered by Giridih Sessions Court</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">Factors Favoring Bail</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• First-time offender with clean record</li>
              <li>• Minor role in alleged crime</li>
              <li>• Weak prosecution evidence</li>
              <li>• Medical grounds (serious illness)</li>
              <li>• Old age or being a woman</li>
              <li>• Cooperation with investigation</li>
            </ul>
          </div>
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">Factors Against Bail</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Previous criminal history</li>
              <li>• Risk of witness tampering</li>
              <li>• Likelihood of fleeing jurisdiction</li>
              <li>• Seriousness of offense</li>
              <li>• Possibility of repeating offense</li>
              <li>• Public interest considerations</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
          <h4 class="font-bold text-yellow-800 mb-2">Common Mistakes in Bail Applications:</h4>
          <ul class="text-yellow-700 text-sm space-y-2">
            <li>• <strong>Incomplete documentation:</strong> Not providing proper surety details or address proofs</li>
            <li>• <strong>Generic arguments:</strong> Not addressing specific concerns of the court</li>
            <li>• <strong>Ignoring counter-arguments:</strong> Not anticipating and addressing prosecution's objections</li>
            <li>• <strong>Wrong forum:</strong> Filing in wrong court (Magistrate vs Sessions)</li>
            <li>• <strong>Delayed filing:</strong> Waiting too long after arrest</li>
            <li>• <strong>Inadequate surety:</strong> Proposing insufficient or unreliable sureties</li>
          </ul>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Bail Application Process Flow</h3>
        <div class="space-y-3">
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
            <div>
              <div class="font-medium text-slate-800">Drafting Bail Application (Day 1)</div>
              <div class="text-sm text-slate-600">Prepare detailed application with grounds, case laws, and supporting documents</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
            <div>
              <div class="font-medium text-slate-800">Filing in Court (Day 2)</div>
              <div class="text-sm text-slate-600">File with proper court fees, ensure all parties are correctly named</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
            <div>
              <div class="font-medium text-slate-800">Notice to Prosecutor (Day 3-5)</div>
              <div class="text-sm text-slate-600">Court issues notice to Public Prosecutor for response</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
            <div>
              <div class="font-medium text-slate-800">Hearing (Day 6-15)</div>
              <div class="text-sm text-slate-600">Arguments presented, court may ask for additional documents or sureties</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</div>
            <div>
              <div class="font-medium text-slate-800">Order & Conditions (Day 16-20)</div>
              <div class="text-sm text-slate-600">If granted, comply with all conditions and submit bail bonds</div>
            </div>
          </div>
        </div>
        
        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-bold text-blue-800 mb-2">Typical Bail Conditions in Giridih Court:</h4>
          <ul class="text-blue-700 text-sm space-y-1">
            <li>• Personal bond of ₹25,000-₹1,00,000</li>
            <li>• One or two sureties of same amount</li>
            <li>• Surrender passport if applicable</li>
            <li>• Regular reporting to police station</li>
            <li>• Not leaving district without permission</li>
            <li>• Not contacting witnesses</li>
            <li>• Cooperating with investigation</li>
          </ul>
        </div>
      </div>
    `,
    date: "Dec 20, 2023",
    category: "Criminal Law",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Bail", "Sessions Court", "Criminal Procedure", "Giridih"]
  },
  {
    id: 7,
    title: "Agricultural Land Conversion Laws in Jharkhand",
    excerpt: "Legal requirements and procedure for converting agricultural land to residential/commercial use in Giridih district.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Agricultural Land Conversion in Giridih District</h2>
        <p class="text-slate-600">The conversion of agricultural land to non-agricultural purposes in Jharkhand is governed by the Bihar Land Revenue Act (still applicable) and Jharkhand government notifications. Understanding the process is crucial for legal compliance.</p>
        
        <div class="bg-red-50 border-l-4 border-red-500 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-red-700">
                <strong>Warning:</strong> Unauthorized conversion of agricultural land can lead to penalties up to 3 times the conversion fee and reversal of conversion.
              </p>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Who Can Apply for Conversion?</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 border border-green-200 rounded-lg bg-green-50">
            <div class="font-bold text-green-700 mb-2">Eligible Applicants</div>
            <ul class="text-sm text-green-600 space-y-1">
              <li>• Recorded land owners (Khatedars)</li>
              <li>• Legal heirs of deceased owners</li>
              <li>• Power of attorney holders</li>
              <li>• Government departments</li>
              <li>• Registered companies/trusts</li>
            </ul>
          </div>
          <div class="p-4 border border-amber-200 rounded-lg bg-amber-50">
            <div class="font-bold text-amber-700 mb-2">Restricted Categories</div>
            <ul class="text-sm text-amber-600 space-y-1">
              <li>• Tenants without ownership rights</li>
              <li>• Land mortgaged without bank consent</li>
              <li>• Disputed property under litigation</li>
              <li>• Forest land or protected areas</li>
              <li>• Land with pending revenue dues</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Conversion Procedure Timeline</h3>
        <div class="space-y-3">
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
            <div>
              <div class="font-medium text-slate-800">Application to Circle Officer (Week 1-2)</div>
              <div class="text-sm text-slate-600">Submit Form 1 with required documents at Circle Office</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
            <div>
              <div class="font-medium text-slate-800">Site Inspection (Week 3-4)</div>
              <div class="text-sm text-slate-600">Circle Officer visits site, verifies documents, checks land classification</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
            <div>
              <div class="font-medium text-slate-800">DC Office Processing (Week 5-8)</div>
              <div class="text-sm text-slate-600">Deputy Collector reviews, calculates conversion charges, seeks objections</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
            <div>
              <div class="font-medium text-slate-800">Order Issuance (Week 9-12)</div>
              <div class="text-sm text-slate-600">Deputy Commissioner issues conversion order after fee payment</div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Required Documents Checklist</h3>
        <div class="space-y-2">
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">1</div>
            <span class="text-slate-700">Application in prescribed Form 1 (duplicate)</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">2</div>
            <span class="text-slate-700">7/12 extract or Khatauni certificate</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">3</div>
            <span class="text-slate-700">Mutation certificate (Khata transfer)</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">4</div>
            <span class="text-slate-700">Land map with khasra numbers</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">5</div>
            <span class="text-slate-700">Latest land tax receipt (3 years)</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">6</div>
            <span class="text-slate-700">Affidavit on ₹100 stamp paper</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">7</div>
            <span class="text-slate-700">Identity proof (Aadhar, PAN)</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">8</div>
            <span class="text-slate-700">NOC from pollution board for industrial use</span>
          </div>
        </div>
        
        <div class="bg-purple-50 p-4 rounded-lg">
          <h4 class="font-bold text-purple-800 mb-2">Conversion Charges in Giridih District:</h4>
          <div class="text-sm text-purple-700">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p class="font-semibold">Land Value</p>
                <p>Up to ₹5 lakhs: 5%</p>
                <p>₹5-10 lakhs: 7.5%</p>
                <p>₹10-25 lakhs: 10%</p>
              </div>
              <div>
                <p class="font-semibold">Additional Fees</p>
                <p>Application fee: ₹500</p>
                <p>Inspection fee: ₹1000</p>
                <p>Stamp duty: ₹1000</p>
              </div>
              <div>
                <p class="font-semibold">Exemptions</p>
                <p>Govt projects: 100%</p>
                <p>Educational: 50%</p>
                <p>Healthcare: 50%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    date: "Dec 5, 2023",
    category: "Property Law",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Land Conversion", "Agriculture", "RERA", "Property"]
  },
  {
    id: 8,
    title: "Maintenance Cases Under Section 125 CrPC: Giridih Court Insights",
    excerpt: "Analysis of maintenance cases for wives, children, and parents with recent judgments from Giridih courts.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Maintenance Rights Under Section 125 CrPC</h2>
        <p class="text-slate-600">Section 125 of the Code of Criminal Procedure provides a summary remedy for maintenance of wives, children, and parents who are unable to maintain themselves. Giridih courts handle approximately 50-60 such cases monthly.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-pink-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-pink-600 mb-1">Wives</div>
            <div class="text-sm text-pink-500">Legally wedded or divorced</div>
            <div class="text-xs text-pink-400 mt-2">Cannot maintain herself</div>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-blue-600 mb-1">Children</div>
            <div class="text-sm text-blue-500">Legitimate or illegitimate</div>
            <div class="text-xs text-blue-400 mt-2">Minor or unable to maintain</div>
          </div>
          <div class="bg-green-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-green-600 mb-1">Parents</div>
            <div class="text-sm text-green-500">Father or mother</div>
            <div class="text-xs text-green-400 mt-2">Unable to maintain themselves</div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Maintenance Calculation Factors</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">Income of Respondent</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Salary and allowances</li>
              <li>• Business income</li>
              <li>• Rental income</li>
              <li>• Agricultural income</li>
              <li>• Investments returns</li>
              <li>• Other sources of income</li>
            </ul>
          </div>
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">Needs of Claimant</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Food and clothing</li>
              <li>• Medical expenses</li>
              <li>• Education costs</li>
              <li>• Housing/rent</li>
              <li>• Transportation</li>
              <li>• Miscellaneous expenses</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg">
          <h4 class="font-bold text-yellow-800 mb-2">Recent Maintenance Awards in Giridih Court:</h4>
          <div class="text-sm text-yellow-700">
            <div class="space-y-2">
              <div class="flex justify-between">
                <span>Working professional husband</span>
                <span class="font-bold">₹15,000/month</span>
              </div>
              <div class="flex justify-between">
                <span>Businessman with shop in Giridih</span>
                <span class="font-bold">₹20,000/month</span>
              </div>
              <div class="flex justify-between">
                <span>Government employee</span>
                <span class="font-bold">₹25,000/month</span>
              </div>
              <div class="flex justify-between">
                <span>Farmer with 5 acres land</span>
                <span class="font-bold">₹8,000/month</span>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Procedure for Filing Maintenance Case</h3>
        <div class="space-y-3">
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
            <div>
              <div class="font-medium text-slate-800">Application Filing (Day 1)</div>
              <div class="text-sm text-slate-600">File application before Judicial Magistrate First Class with affidavit and documents</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
            <div>
              <div class="font-medium text-slate-800">Notice to Respondent (Day 2-7)</div>
              <div class="text-sm text-slate-600">Court issues notice, respondent must appear within 30 days</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
            <div>
              <div class="font-medium text-slate-800">Evidence Stage (Day 8-60)</div>
              <div class="text-sm text-slate-600">Both parties present evidence, income proof, expense details</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
            <div>
              <div class="font-medium text-slate-800">Interim Maintenance (Day 10-15)</div>
              <div class="text-sm text-slate-600">Court may grant interim maintenance during proceedings</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</div>
            <div>
              <div class="font-medium text-slate-800">Final Order (Day 61-90)</div>
              <div class="text-sm text-slate-600">Court passes final order, maintenance payable from date of application</div>
            </div>
          </div>
        </div>
        
        <div class="bg-red-50 p-4 rounded-lg border border-red-100">
          <h4 class="font-bold text-red-800 mb-2">Defenses Available to Respondent:</h4>
          <ul class="text-red-700 text-sm space-y-1">
            <li>• Wife living in adultery</li>
            <li>• Wife voluntarily separated without sufficient cause</li>
            <li>• Wife refusing to live with husband without reason</li>
            <li>• Child has independent income</li>
            <li>• Parent has other means of livelihood</li>
            <li>• Respondent unable to pay due to genuine financial constraints</li>
          </ul>
        </div>
      </div>
    `,
    date: "Nov 22, 2023",
    category: "Family Law",
    readTime: "8 min",
    image: "https://image2url.com/r2/default/images/1770360078992-adf513bb-7e5f-4a61-97b4-fafde7c7d8d6.png",
    author: "Adv. Vikas Kumar",
    tags: ["Maintenance", "125 CrPC", "Family Support", "Alimony"]
  },
  {
    id: 9,
    title: "Documentation for Property Registration in Giridih Registrar Office",
    excerpt: "Complete checklist and procedure for property registration, stamp duty calculation, and common errors to avoid.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Property Registration in Giridih Sub-Registrar Office</h2>
        <p class="text-slate-600">Property registration is mandatory under the Registration Act, 1908 for transactions involving immovable property valued at ₹100 or more. Giridih Sub-Registrar Office handles 50-70 registrations daily.</p>
        
        <div class="bg-green-50 border-l-4 border-green-500 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-green-700">
                <strong>Important:</strong> Registration must be completed within 4 months from date of execution. Late registration attracts penalty of 10 times the registration fee.
              </p>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Documents Required for Registration</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-2">
            <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
              <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">1</div>
              <span class="text-slate-700">Original sale deed (2 copies)</span>
            </div>
            <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
              <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">2</div>
              <span class="text-slate-700">Identity proof of both parties</span>
            </div>
            <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
              <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">3</div>
              <span class="text-slate-700">Property documents chain</span>
            </div>
            <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
              <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">4</div>
              <span class="text-slate-700">Latest property tax receipt</span>
            </div>
          </div>
          <div class="space-y-2">
            <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
              <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">5</div>
              <span class="text-slate-700">Encumbrance certificate</span>
            </div>
            <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
              <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">6</div>
              <span class="text-slate-700">Mutation certificate</span>
            </div>
            <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
              <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">7</div>
              <span class="text-slate-700">Building plan approval</span>
            </div>
            <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
              <div class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">8</div>
              <span class="text-slate-700">Passport photos (2 each)</span>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Stamp Duty Calculation for Giridih District</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="py-3 px-4 border-b text-left font-semibold text-slate-700">Property Type</th>
                <th class="py-3 px-4 border-b text-left font-semibold text-slate-700">Male</th>
                <th class="py-3 px-4 border-b text-left font-semibold text-slate-700">Female</th>
                <th class="py-3 px-4 border-b text-left font-semibold text-slate-700">Joint</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-slate-50">
                <td class="py-3 px-4 border-b">Urban Residential</td>
                <td class="py-3 px-4 border-b">6%</td>
                <td class="py-3 px-4 border-b">5%</td>
                <td class="py-3 px-4 border-b">5.5%</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="py-3 px-4 border-b">Rural Residential</td>
                <td class="py-3 px-4 border-b">5%</td>
                <td class="py-3 px-4 border-b">4%</td>
                <td class="py-3 px-4 border-b">4.5%</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="py-3 px-4 border-b">Commercial</td>
                <td class="py-3 px-4 border-b">8%</td>
                <td class="py-3 px-4 border-b">7%</td>
                <td class="py-3 px-4 border-b">7.5%</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="py-3 px-4 border-b">Agricultural</td>
                <td class="py-3 px-4 border-b">4%</td>
                <td class="py-3 px-4 border-b">3%</td>
                <td class="py-3 px-4 border-b">3.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg">
          <h4 class="font-bold text-yellow-800 mb-2">Example Calculation:</h4>
          <div class="text-sm text-yellow-700">
            <p>Property Value: ₹50,00,000 (Urban Residential, Male Buyer)</p>
            <p>Stamp Duty (6%): ₹3,00,000</p>
            <p>Registration Fee (1%): ₹50,000</p>
            <p>Miscellaneous: ₹5,000</p>
            <p class="font-bold mt-2">Total: ₹3,55,000</p>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Registration Process at Giridih Office</h3>
        <div class="space-y-3">
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
            <div>
              <div class="font-medium text-slate-800">Document Preparation (Day 1-2)</div>
              <div class="text-sm text-slate-600">Prepare sale deed with proper stamp paper, get signatures of both parties with witnesses</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
            <div>
              <div class="font-medium text-slate-800">Payment of Fees (Day 3)</div>
              <div class="text-sm text-slate-600">Pay stamp duty at treasury/sub-treasury and registration fee at bank</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
            <div>
              <div class="font-medium text-slate-800">Submission at SRO (Day 4)</div>
              <div class="text-sm text-slate-600">Submit documents at Sub-Registrar Office, all parties must be present</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
            <div>
              <div class="font-medium text-slate-800">Verification & Registration (Day 5-7)</div>
              <div class="text-sm text-slate-600">SRO verifies documents, registers deed, returns original to buyer</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</div>
            <div>
              <div class="font-medium text-slate-800">Mutation (Day 8-15)</div>
              <div class="text-sm text-slate-600">Apply for mutation at circle office to update revenue records</div>
            </div>
          </div>
        </div>
        
        <div class="bg-red-50 p-4 rounded-lg border border-red-100">
          <h4 class="font-bold text-red-800 mb-2">Common Mistakes to Avoid:</h4>
          <ul class="text-red-700 text-sm space-y-2">
            <li>• <strong>Insufficient stamp duty:</strong> Leads to penalty of 2-10 times deficient amount</li>
            <li>• <strong>Wrong property description:</strong> Khasra number, area, boundaries must match records</li>
            <li>• <strong>Missing signatures:</strong> All parties and two witnesses must sign each page</li>
            <li>• <strong>Power of Attorney issues:</strong> POA must be registered and specific</li>
            <li>• <strong>Title defects:</strong> Ensure seller has clear marketable title</li>
            <li>• <strong>Encumbrances:</strong> Check for mortgages, liens, or charges on property</li>
            <li>• <strong>Family disputes:</strong> Verify all legal heirs have given consent</li>
          </ul>
        </div>
      </div>
    `,
    date: "Nov 10, 2023",
    category: "Property Law",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Registration", "Stamp Duty", "Property Documents", "Sub-Registrar"]
  },
  {
    id: 10,
    title: "Motor Accident Claims Tribunal (MACT) Cases in Giridih",
    excerpt: "Procedure for filing accident claims, calculating compensation, and evidence required for successful MACT cases.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Motor Accident Claims Tribunal in Giridih</h2>
        <p class="text-slate-600">The Motor Accident Claims Tribunal (MACT) in Giridih adjudicates claims arising from road accidents under the Motor Vehicles Act, 1988. The tribunal provides compensation for death, injury, or property damage caused by motor vehicles.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-red-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-red-600 mb-1">Death Cases</div>
            <div class="text-sm text-red-500">Compensation up to ₹25 lakhs</div>
            <div class="text-xs text-red-400 mt-2">Dependency + loss of income</div>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-blue-600 mb-1">Injury Cases</div>
            <div class="text-sm text-blue-500">Medical + loss of income</div>
            <div class="text-xs text-blue-400 mt-2">Permanent or temporary disability</div>
          </div>
          <div class="bg-green-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-green-600 mb-1">Property Damage</div>
            <div class="text-sm text-green-500">Vehicle repair/replacement</div>
            <div class="text-xs text-green-400 mt-2">Other property damage</div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Compensation Calculation Methods</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">For Death Cases</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Monthly income × 12 × multiplier</li>
              <li>• Add: Future prospects (40-50%)</li>
              <li>• Deduct: 1/3 for personal expenses</li>
              <li>• Add: ₹15,000 funeral expenses</li>
              <li>• Add: ₹40,000 loss of consortium</li>
              <li>• Add: ₹15,000 loss of estate</li>
            </ul>
          </div>
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">For Injury Cases</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Actual medical expenses</li>
              <li>• Loss of income during treatment</li>
              <li>• Pain and suffering</li>
              <li>• Loss of amenities of life</li>
              <li>• Future medical expenses</li>
              <li>• Disability compensation</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-bold text-blue-800 mb-2">Multiplier Table Based on Age:</h4>
          <div class="text-sm text-blue-700">
            <div class="grid grid-cols-4 gap-2 text-center">
              <div class="p-2 bg-white rounded">
                <div class="font-bold">Age</div>
                <div>Up to 15</div>
              </div>
              <div class="p-2 bg-white rounded">
                <div class="font-bold">Multiplier</div>
                <div>15</div>
              </div>
              <div class="p-2 bg-white rounded">
                <div class="font-bold">Age</div>
                <div>16-25</div>
              </div>
              <div class="p-2 bg-white rounded">
                <div class="font-bold">Multiplier</div>
                <div>18</div>
              </div>
              <div class="p-2 bg-white rounded">
                <div class="font-bold">Age</div>
                <div>26-35</div>
              </div>
              <div class="p-2 bg-white rounded">
                <div class="font-bold">Multiplier</div>
                <div>17</div>
              </div>
              <div class="p-2 bg-white rounded">
                <div class="font-bold">Age</div>
                <div>36-50</div>
              </div>
              <div class="p-2 bg-white rounded">
                <div class="font-bold">Multiplier</div>
                <div>16</div>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Documents Required for MACT Claim</h3>
        <div class="space-y-2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div class="font-semibold text-slate-700 mb-2">Essential Documents:</div>
              <ul class="text-sm text-slate-600 space-y-1">
                <li>• FIR copy and charge sheet</li>
                <li>• Post mortem report (death cases)</li>
                <li>• Medical bills and certificates</li>
                <li>• Disability certificate (if any)</li>
                <li>• Income proof of deceased/injured</li>
              </ul>
            </div>
            <div>
              <div class="font-semibold text-slate-700 mb-2">Additional Documents:</div>
              <ul class="text-sm text-slate-600 space-y-1">
                <li>• Vehicle RC and insurance copy</li>
                <li>• Driving license of driver</li>
                <li>• Panchanama/site map</li>
                <li>• Photographs of accident</li>
                <li>• Witness statements</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">MACT Procedure Timeline</h3>
        <div class="space-y-3">
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
            <div>
              <div class="font-medium text-slate-800">Claim Petition (Month 1)</div>
              <div class="text-sm text-slate-600">File claim petition within 6 months (injury) or 1 year (death) of accident</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
            <div>
              <div class="font-medium text-slate-800">Notice to Parties (Month 2)</div>
              <div class="text-sm text-slate-600">Court issues notice to owner, driver, and insurance company</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
            <div>
              <div class="font-medium text-slate-800">Written Statement (Month 3)</div>
              <div class="text-sm text-slate-600">Opposite parties file their defenses within 30 days</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
            <div>
              <div class="font-medium text-slate-800">Evidence (Month 4-8)</div>
              <div class="text-sm text-slate-600">Both parties present evidence, documents, and witnesses</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</div>
            <div>
              <div class="font-medium text-slate-800">Arguments (Month 9)</div>
              <div class="text-sm text-slate-600">Final arguments from both sides</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">6</div>
            <div>
              <div class="font-medium text-slate-800">Award (Month 10-12)</div>
              <div class="text-sm text-slate-600">Court passes award, insurance company to deposit amount</div>
            </div>
          </div>
        </div>
        
        <div class="bg-green-50 p-4 rounded-lg border border-green-100">
          <h4 class="font-bold text-green-800 mb-2">Recent Compensation Awards in Giridih MACT:</h4>
          <ul class="text-green-700 text-sm space-y-2">
            <li>• <strong>₹45 lakhs:</strong> 35-year-old government employee died, leaving wife and two children</li>
            <li>• <strong>₹28 lakhs:</strong> 22-year-old student with bright future prospects</li>
            <li>• <strong>₹15 lakhs:</strong> 55-year-old farmer with 70% permanent disability</li>
            <li>• <strong>₹8 lakhs:</strong> Minor injuries with 3-month hospitalization</li>
            <li>• <strong>₹3.5 lakhs:</strong> Property damage to commercial vehicle</li>
          </ul>
        </div>
      </div>
    `,
    date: "Oct 28, 2023",
    category: "Accident Law",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["MACT", "Accident Claims", "Compensation", "Insurance"]
  },
  {
    id: 11,
    title: "Tenant Eviction Laws in Jharkhand: Rights and Remedies",
    excerpt: "Legal process for evicting tenants, notice requirements, and recent amendments affecting rental laws in Giridih.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Tenant Eviction Laws in Jharkhand</h2>
        <p class="text-slate-600">Tenant eviction in Jharkhand is primarily governed by the Transfer of Property Act, 1882 and the Jharkhand Building (Lease, Rent & Eviction) Control Act, 2000. Understanding the legal grounds and procedure is essential for both landlords and tenants.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-red-50 p-4 rounded-lg">
            <div class="font-bold text-red-700 mb-2">Landlord's Rights</div>
            <ul class="text-sm text-red-600 space-y-1">
              <li>• Right to receive agreed rent</li>
              <li>• Right to evict for valid grounds</li>
              <li>• Right to inspect property</li>
              <li>• Right to increase rent as per law</li>
              <li>• Right to sell property</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <div class="font-bold text-blue-700 mb-2">Tenant's Rights</div>
            <ul class="text-sm text-blue-600 space-y-1">
              <li>• Right to peaceful possession</li>
              <li>• Right against arbitrary eviction</li>
              <li>• Right to essential services</li>
              <li>• Right to receipt of payments</li>
              <li>• Right to privacy</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Valid Grounds for Eviction</h3>
        <div class="space-y-3">
          <div class="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50">
            <div class="font-bold text-green-700">Non-Payment of Rent</div>
            <div class="text-sm text-slate-600">Tenant has failed to pay rent for 2 consecutive months despite demand notice</div>
          </div>
          <div class="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50">
            <div class="font-bold text-amber-700">Subletting Without Consent</div>
            <div class="text-sm text-slate-600">Tenant has sublet whole or part of premises without landlord's written permission</div>
          </div>
          <div class="border-l-4 border-red-500 pl-4 py-2 bg-red-50/50">
            <div class="font-bold text-red-700">Owner's Personal Use</div>
            <div class="text-sm text-slate-600">Landlord requires premises for own/bona fide family member's residence</div>
          </div>
          <div class="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50">
            <div class="font-bold text-purple-700">Material Alteration/Damage</div>
            <div class="text-sm text-slate-600">Tenant has caused substantial damage or made unauthorized alterations</div>
          </div>
          <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50">
            <div class="font-bold text-blue-700">Illegal Activities</div>
            <div class="text-sm text-slate-600">Premises used for illegal/immoral purposes violating terms of tenancy</div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Eviction Procedure Timeline</h3>
        <div class="space-y-3">
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
            <div>
              <div class="font-medium text-slate-800">Legal Notice (Week 1-2)</div>
              <div class="text-sm text-slate-600">Send 15-day notice through registered post specifying grounds for eviction</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
            <div>
              <div class="font-medium text-slate-800">Tenant's Response (Week 3-4)</div>
              <div class="text-sm text-slate-600">Tenant has 15 days to respond, pay dues, or vacate premises</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
            <div>
              <div class="font-medium text-slate-800">Filing Eviction Suit (Week 5-6)</div>
              <div class="text-sm text-slate-600">If tenant doesn't comply, file suit before Rent Controller/Civil Court</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
            <div>
              <div class="font-medium text-slate-800">Court Proceedings (Month 3-12)</div>
              <div class="text-sm text-slate-600">Evidence, hearings, and final decision by court</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</div>
            <div>
              <div class="font-medium text-slate-800">Execution of Order (Month 13-15)</div>
              <div class="text-sm text-slate-600">If tenant doesn't vacate, court order executed through bailiff</div>
            </div>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg">
          <h4 class="font-bold text-yellow-800 mb-2">Essential Elements of Valid Notice:</h4>
          <ul class="text-yellow-700 text-sm space-y-2">
            <li>• Must be in writing, clearly stating grounds for eviction</li>
            <li>• Specify exact amount of rent due with period</li>
            <li>• Give 15 days' time to comply or vacate</li>
            <li>• Sent via registered post with acknowledgment due</li>
            <li>• Keep copy of notice and postal receipts</li>
            <li>• Ensure proper address of tenant is used</li>
            <li>• Mention legal consequences of non-compliance</li>
          </ul>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Defenses Available to Tenant</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">Procedural Defenses</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Invalid or improper notice</li>
              <li>• Notice period less than 15 days</li>
              <li>• Notice not served properly</li>
              <li>• Suit filed before notice period expiry</li>
              <li>• Jurisdiction of court incorrect</li>
            </ul>
          </div>
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">Substantive Defenses</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Rent already paid (provide receipts)</li>
              <li>• Landlord's requirement not bona fide</li>
              <li>• Tenant willing to pay enhanced rent</li>
              <li>• No material alteration made</li>
              <li>• Alternative accommodation not available</li>
              <li>• Tenant is protected tenant (old act)</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-red-50 p-4 rounded-lg border border-red-100">
          <h4 class="font-bold text-red-800 mb-2">Recent Amendments & Important Points:</h4>
          <ul class="text-red-700 text-sm space-y-1">
            <li>• Model Tenancy Act, 2021 not yet implemented in Jharkhand</li>
            <li>• Security deposit limited to 2 months' rent for residential, 6 months for commercial</li>
            <li>• Rent increase limited to 10% every 2 years for residential properties</li>
            <li>• Fast-track courts for eviction cases being established</li>
            <li>• Digital payment receipts mandatory for transactions above ₹2000</li>
            <li>• Police assistance available for lawful evictions after court order</li>
            <li>• Mediation encouraged before filing eviction suit</li>
          </ul>
        </div>
      </div>
    `,
    date: "Oct 15, 2023",
    category: "Property Law",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Tenant", "Eviction", "Rent Control", "Property"]
  },
  {
    id: 12,
    title: "Will Registration and Probate Process at Civil Court Giridih",
    excerpt: "Complete guide to creating valid wills, registration procedure, and obtaining probate for executing wills.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Will Registration and Probate in Giridih</h2>
        <p class="text-slate-600">A will is a legal declaration of a person's intentions regarding disposal of their property after death. Registration and probate provide legal sanctity and ensure smooth execution of the testator's wishes.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-green-50 p-4 rounded-lg">
            <div class="font-bold text-green-700 mb-2">Registered Will</div>
            <ul class="text-sm text-green-600 space-y-1">
              <li>• Presumed to be genuine</li>
              <li>• Difficult to challenge</li>
              <li>• Public record maintained</li>
              <li>• Safe custody at registrar</li>
              <li>• No time limit for probate</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <div class="font-bold text-blue-700 mb-2">Unregistered Will</div>
            <ul class="text-sm text-blue-600 space-y-1">
              <li>• Requires strict proof</li>
              <li>• Easy to challenge</li>
              <li>• Risk of loss/damage</li>
              <li>• Probate mandatory</li>
              <li>• Subject to limitation</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Essential Elements of a Valid Will</h3>
        <div class="space-y-2">
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-[#c5a059] text-white rounded-full flex items-center justify-center mr-3">1</div>
            <span class="text-slate-700">Testator must be major (18+ years)</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-[#c5a059] text-white rounded-full flex items-center justify-center mr-3">2</div>
            <span class="text-slate-700">Testator must be of sound mind</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-[#c5a059] text-white rounded-full flex items-center justify-center mr-3">3</div>
            <span class="text-slate-700">Will must be in writing (except Muslim law)</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-[#c5a059] text-white rounded-full flex items-center justify-center mr-3">4</div>
            <span class="text-slate-700">Signed by testator at end</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-[#c5a059] text-white rounded-full flex items-center justify-center mr-3">5</div>
            <span class="text-slate-700">Attested by 2+ witnesses</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-[#c5a059] text-white rounded-full flex items-center justify-center mr-3">6</div>
            <span class="text-slate-700">Witnesses must see testator sign</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-[#c5a059] text-white rounded-full flex items-center justify-center mr-3">7</div>
            <span class="text-slate-700">Each page should be signed</span>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Will Registration Process at Sub-Registrar Office</h3>
        <div class="space-y-3">
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
            <div>
              <div class="font-medium text-slate-800">Draft Preparation (Day 1-3)</div>
              <div class="text-sm text-slate-600">Prepare will on plain paper/stamp paper, get signatures of testator and witnesses</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
            <div>
              <div class="font-medium text-slate-800">Visit SRO (Day 4)</div>
              <div class="text-sm text-slate-600">Testator and 2 witnesses must personally appear before Sub-Registrar</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
            <div>
              <div class="font-medium text-slate-800">Identity Verification (Day 4)</div>
              <div class="text-sm text-slate-600">SRO verifies identities through Aadhar, PAN, or other documents</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
            <div>
              <div class="font-medium text-slate-800">Recording Statement (Day 4)</div>
              <div class="text-sm text-slate-600">SRO records statement that will is executed voluntarily without coercion</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</div>
            <div>
              <div class="font-medium text-slate-800">Registration & Fee Payment (Day 4)</div>
              <div class="text-sm text-slate-600">Pay registration fee ₹1000, will is registered and copy returned</div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Probate Procedure at Civil Court Giridih</h3>
        <div class="bg-yellow-50 p-4 rounded-lg mb-4">
          <p class="text-sm text-yellow-700"><strong>Note:</strong> Probate is mandatory for wills relating to immovable property in multiple states or if will is unregistered. For registered wills with immovable property in one state, probate is optional but recommended.</p>
        </div>
        
        <div class="space-y-3">
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
            <div>
              <div class="font-medium text-slate-800">Application Filing (Week 1-2)</div>
              <div class="text-sm text-slate-600">File probate petition with original will, death certificate, and list of legal heirs</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
            <div>
              <div class="font-medium text-slate-800">Court Fee Payment (Week 2)</div>
              <div class="text-sm text-slate-600">Pay court fee based on property value (3-5% of estate value)</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
            <div>
              <div class="font-medium text-slate-800">Citation Publication (Week 3-7)</div>
              <div class="text-sm text-slate-600">Notice published in newspaper, 30-day period for objections</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
            <div>
              <div class="font-medium text-slate-800">Evidence & Witnesses (Week 8-16)</div>
              <div class="text-sm text-slate-600">Executor and attesting witnesses examined, documents verified</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</div>
            <div>
              <div class="font-medium text-slate-800">Probate Grant (Week 17-20)</div>
              <div class="text-sm text-slate-600">Court grants probate if satisfied with validity of will</div>
            </div>
          </div>
        </div>
        
        <div class="bg-red-50 p-4 rounded-lg border border-red-100">
          <h4 class="font-bold text-red-800 mb-2">Common Grounds for Challenging a Will:</h4>
          <ul class="text-red-700 text-sm space-y-2">
            <li>• Testator was not of sound mind when making will</li>
            <li>• Will made under coercion, undue influence, or fraud</li>
            <li>• Will not properly executed or attested</li>
            <li>• Testator's signature forged</li>
            <li>• Will made when testator was in coma or unconscious</li>
            <li>• Later will found (revokes earlier will)</li>
            <li>• Will against public policy or illegal</li>
            <li>• Essential legal heirs completely excluded without reason</li>
          </ul>
        </div>
        
        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-bold text-blue-800 mb-2">Costs Involved:</h4>
          <div class="text-sm text-blue-700">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="font-semibold">Will Registration</p>
                <p>Registration fee: ₹1000</p>
                <p>Lawyer fees: ₹5000-15000</p>
                <p>Stamp paper: ₹100-500</p>
              </div>
              <div>
                <p class="font-semibold">Probate Proceedings</p>
                <p>Court fee: 3-5% of estate</p>
                <p>Publication: ₹2000-5000</p>
                <p>Lawyer fees: ₹25000-100000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    date: "Sep 30, 2023",
    category: "Family Law",
    readTime: "10 min",
    image: "https://image2url.com/r2/default/images/1770360078992-adf513bb-7e5f-4a61-97b4-fafde7c7d8d6.png",
    author: "Adv. Vikas Kumar",
    tags: ["Will", "Probate", "Inheritance", "Succession"]
  },
  {
    id: 13,
    title: "Cheque Bounce Cases Under Section 138 NI Act: Giridih Court Procedure",
    excerpt: "Step-by-step guide to filing cheque bounce cases, statutory notices, and evidence requirements for successful prosecution.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Cheque Bounce Cases Under Section 138 NI Act</h2>
        <p class="text-slate-600">Section 138 of the Negotiable Instruments Act, 1881 provides a criminal remedy for dishonor of cheques due to insufficient funds or other specified reasons. Giridih courts handle 80-100 such cases monthly.</p>
        
        <div class="bg-red-50 border-l-4 border-red-500 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-red-700">
                <strong>Important:</strong> The entire process must be completed within specific time limits. Missing any deadline can lead to dismissal of the case.
              </p>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Essential Conditions for Section 138</h3>
        <div class="space-y-2">
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-[#c5a059] text-white rounded-full flex items-center justify-center mr-3">1</div>
            <span class="text-slate-700">Cheque drawn on an account maintained by drawer</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-[#c5a059] text-white rounded-full flex items-center justify-center mr-3">2</div>
            <span class="text-slate-700">Cheque returned unpaid due to insufficient funds</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-[#c5a059] text-white rounded-full flex items-center justify-center mr-3">3</div>
            <span class="text-slate-700">Payee makes demand within 30 days of return memo</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-[#c5a059] text-white rounded-full flex items-center justify-center mr-3">4</div>
            <span class="text-slate-700">Drawer fails to make payment within 15 days of notice</span>
          </div>
          <div class="flex items-center p-2 bg-white border border-slate-200 rounded">
            <div class="w-6 h-6 bg-[#c5a059] text-white rounded-full flex items-center justify-center mr-3">5</div>
            <span class="text-slate-700">Complaint filed within 30 days of cause of action</span>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Step-by-Step Procedure with Timeline</h3>
        <div class="space-y-3">
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
            <div>
              <div class="font-medium text-slate-800">Cheque Dishonor (Day 0)</div>
              <div class="text-sm text-slate-600">Bank returns cheque with memo "Insufficient Funds" or other specified reasons</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
            <div>
              <div class="font-medium text-slate-800">Legal Notice (Within 30 days)</div>
              <div class="text-sm text-slate-600">Send demand notice to drawer via registered post giving 15 days to pay</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
            <div>
              <div class="font-medium text-slate-800">Wait Period (15 days)</div>
              <div class="text-sm text-slate-600">Drawer has 15 days from notice receipt to make payment</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
            <div>
              <div class="font-medium text-slate-800">Complaint Filing (Within 30 days of cause of action)</div>
              <div class="text-sm text-slate-600">If payment not made, file complaint before JMFC within 30 days of notice period expiry</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</div>
            <div>
              <div class="font-medium text-slate-800">Summons & Trial (Month 2-12)</div>
              <div class="text-sm text-slate-600">Court issues summons, records evidence, examines witnesses</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">6</div>
            <div>
              <div class="font-medium text-slate-800">Judgment (Month 13-18)</div>
              <div class="text-sm text-slate-600">Court pronounces judgment, can impose imprisonment up to 2 years and/or fine</div>
            </div>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg">
          <h4 class="font-bold text-yellow-800 mb-2">Critical Time Limits:</h4>
          <div class="text-sm text-yellow-700">
            <div class="space-y-2">
              <div class="flex justify-between">
                <span>Notice after cheque return</span>
                <span class="font-bold">30 days</span>
              </div>
              <div class="flex justify-between">
                <span>Payment after notice</span>
                <span class="font-bold">15 days</span>
              </div>
              <div class="flex justify-between">
                <span>Complaint after notice period</span>
                <span class="font-bold">30 days</span>
              </div>
              <div class="flex justify-between">
                <span>Overall limitation</span>
                <span class="font-bold">75 days max</span>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Evidence Required for Successful Case</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-2">
            <div class="font-semibold text-slate-700 mb-2">Primary Evidence:</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Original dishonored cheque</li>
              <li>• Bank return memo (original)</li>
              <li>• Legal notice copy</li>
              <li>• Postal receipts and tracking</li>
              <li>• Acknowledgment receipt (if any)</li>
            </ul>
          </div>
          <div class="space-y-2">
            <div class="font-semibold text-slate-700 mb-2">Supporting Evidence:</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Agreement/contract (if any)</li>
              <li>• Correspondence between parties</li>
              <li>• Account statements</li>
              <li>• Identity proof of accused</li>
              <li>• Company documents if drawer is company</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Defenses Available to Accused</h3>
        <div class="space-y-3">
          <div class="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50">
            <div class="font-bold text-green-700">Technical Defenses</div>
            <div class="text-sm text-slate-600">Notice not served properly, complaint filed beyond limitation, jurisdiction incorrect</div>
          </div>
          <div class="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50">
            <div class="font-bold text-amber-700">Substantive Defenses</div>
            <div class="text-sm text-slate-600">Cheque was stolen/lost, signature forged, no liability existed, cheque issued as security</div>
          </div>
          <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50">
            <div class="font-bold text-blue-700">Legal Defenses</div>
            <div class="text-sm text-slate-600">Company not properly impleaded, director not in charge, cheque issued for unlawful consideration</div>
          </div>
        </div>
        
        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-bold text-blue-800 mb-2">Compensation & Sentencing in Giridih Court:</h4>
          <div class="text-sm text-blue-700">
            <div class="space-y-2">
              <div class="flex justify-between">
                <span>Cheque amount below ₹50,000</span>
                <span class="font-bold">Fine up to 2x cheque amount</span>
              </div>
              <div class="flex justify-between">
                <span>Cheque amount ₹50,000-5 lakhs</span>
                <span class="font-bold">Imprisonment 6 months-1 year</span>
              </div>
              <div class="flex justify-between">
                <span>Cheque amount above ₹5 lakhs</span>
                <span class="font-bold">Imprisonment 1-2 years</span>
              </div>
              <div class="flex justify-between">
                <span>Repeat offenders</span>
                <span class="font-bold">Enhanced punishment</span>
              </div>
              <div class="flex justify-between">
                <span>Compensation to complainant</span>
                <span class="font-bold">Up to 2x cheque amount</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    date: "Sep 15, 2023",
    category: "Commercial Law",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Cheque Bounce", "138 NI Act", "Commercial Disputes", "Banking"]
  },
  {
    id: 14,
    title: "Partition Suits for Joint Family Properties in Rural Jharkhand",
    excerpt: "Legal procedure for partition of joint family properties, valuation methods, and division among heirs.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Partition of Joint Family Properties in Jharkhand</h2>
        <p class="text-slate-600">Partition suits are common in rural Jharkhand where joint family systems prevail. The Hindu Succession Act, 1956 and customary laws govern the division of ancestral and self-acquired properties among coparceners and legal heirs.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-green-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-green-600 mb-1">Ancestral Property</div>
            <div class="text-sm text-green-500">Birth right of coparceners</div>
            <div class="text-xs text-green-400 mt-2">Equal shares for all</div>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-blue-600 mb-1">Self-Acquired</div>
            <div class="text-sm text-blue-500">Owner's discretion</div>
            <div class="text-xs text-blue-400 mt-2">Will governs division</div>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-purple-600 mb-1">Joint Family</div>
            <div class="text-sm text-purple-500">HUF properties</div>
            <div class="text-xs text-purple-400 mt-2">Manager controls</div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Who Can File Partition Suit?</h3>
        <div class="space-y-3">
          <div class="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50">
            <div class="font-bold text-green-700">Coparceners</div>
            <div class="text-sm text-slate-600">Male descendants up to 3 generations (son, grandson, great-grandson) have birthright in ancestral property</div>
          </div>
          <div class="border-l-4 border-pink-500 pl-4 py-2 bg-pink-50/50">
            <div class="font-bold text-pink-700">Daughters (After 2005)</div>
            <div class="text-sm text-slate-600">Daughters have equal rights as sons in ancestral property (Hindu Succession Amendment Act, 2005)</div>
          </div>
          <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50">
            <div class="font-bold text-blue-700">Legal Heirs</div>
            <div class="text-sm text-slate-600">Widows, mothers, and other Class I heirs can claim share in deceased's property</div>
          </div>
          <div class="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50">
            <div class="font-bold text-amber-700">Purchasers</div>
            <div class="text-sm text-slate-600">Third party who purchases share from coparcener can seek partition</div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Partition Procedure in Civil Court Giridih</h3>
        <div class="space-y-3">
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
            <div>
              <div class="font-medium text-slate-800">Plaint Filing (Month 1)</div>
              <div class="text-sm text-slate-600">File partition suit with detailed schedule of properties, shares claimed, and parties</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
            <div>
              <div class="font-medium text-slate-800">Court Fee Payment (Month 1)</div>
              <div class="text-sm text-slate-600">Pay court fee based on share value (approx. 1-3% of property value)</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
            <div>
              <div class="font-medium text-slate-800">Written Statements (Month 2-3)</div>
              <div class="text-sm text-slate-600">Defendants file responses, may claim different shares or oppose partition</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
            <div>
              <div class="font-medium text-slate-800">Issues Framing (Month 4)</div>
              <div class="text-sm text-slate-600">Court frames specific issues to be decided in the case</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</div>
            <div>
              <div class="font-medium text-slate-800">Commissioner Appointment (Month 5-6)</div>
              <div class="text-sm text-slate-600">Court appoints commissioner to inspect properties, prepare valuation report</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">6</div>
            <div>
              <div class="font-medium text-slate-800">Evidence (Month 7-12)</div>
              <div class="text-sm text-slate-600">Parties present documents, witnesses to prove their shares and claims</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">7</div>
            <div>
              <div class="font-medium text-slate-800">Final Decree (Month 13-18)</div>
              <div class="text-sm text-slate-600">Court passes preliminary decree determining shares, then final decree for physical division</div>
            </div>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg">
          <h4 class="font-bold text-yellow-800 mb-2">Methods of Partition in Rural Properties:</h4>
          <div class="text-sm text-yellow-700">
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="font-semibold">Physical Division</span>
                <span>Land physically divided by metes and bounds</span>
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Sale & Division</span>
                <span>Property sold, proceeds divided according to shares</span>
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Owelty</span>
                <span>Compensation paid for unequal shares</span>
              </div>
              <div class="flex justify-between">
                <span class="font-semibold">Family Arrangement</span>
                <span>Amicable settlement without court intervention</span>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Documents Required for Partition Suit</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-2">
            <div class="font-semibold text-slate-700 mb-2">Property Documents:</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Title deeds for all properties</li>
              <li>• Mutation records (Khatian)</li>
              <li>• 7/12 extracts or Khatauni</li>
              <li>• Property tax receipts</li>
              <li>• Survey maps and records</li>
              <li>• Valuation report</li>
            </ul>
          </div>
          <div class="space-y-2">
            <div class="font-semibold text-slate-700 mb-2">Family Documents:</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Family tree with relationships</li>
              <li>• Birth certificates of all heirs</li>
              <li>• Death certificates (if any)</li>
              <li>• Marriage certificates</li>
              <li>• School records showing age</li>
              <li>• Affidavits from elders</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Special Considerations for Agricultural Land</h3>
        <div class="bg-green-50 p-4 rounded-lg border border-green-100">
          <h4 class="font-bold text-green-800 mb-2">Jharkhand Specific Rules:</h4>
          <ul class="text-green-700 text-sm space-y-2">
            <li>• Agricultural land partition follows local customs and traditions</li>
            <li>• Minimum land holding limits may apply (cannot divide below certain size)</li>
            <li>• Tenancy rights of sharecroppers must be protected</li>
            <li>• Government notifications on land ceilings applicable</li>
            <li>• Tribal land protected under CNT/SPT Acts cannot be easily partitioned</li>
            <li>• Irrigation facilities and water sources considered during division</li>
            <li>• Access roads and pathways must be maintained for all shares</li>
          </ul>
        </div>
        
        <div class="bg-red-50 p-4 rounded-lg">
          <h4 class="font-bold text-red-800 mb-2">Common Defenses in Partition Suits:</h4>
          <ul class="text-red-700 text-sm space-y-1">
            <li>• Property is self-acquired, not ancestral</li>
            <li>• Previous partition already effected</li>
            <li>• Plaintiff has already received share</li>
            <li>• Property is impartible by custom</li>
            <li>• Family arrangement already exists</li>
            <li>• Plaintiff is not coparcener</li>
            <li>• Property is joint family business asset</li>
            <li>• Previous gift/settlement valid</li>
          </ul>
        </div>
      </div>
    `,
    date: "Aug 28, 2023",
    category: "Property Law",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    author: "Adv. Vikas Kumar",
    tags: ["Partition", "Joint Family", "Property Division", "Hindu Law"]
  },
  {
    id: 15,
    title: "Legal Aid Services Available in Giridih District Courts",
    excerpt: "Guide to free legal aid services, eligibility criteria, and how to access legal assistance for underprivileged litigants.",
    fullContent: `
      <div class="space-y-6">
        <h2 class="text-2xl font-serif text-[#0a1128] mb-4">Legal Aid Services in Giridih District</h2>
        <p class="text-slate-600">The National Legal Services Authority (NALSA) and Jharkhand State Legal Services Authority (JHLSA) provide free legal aid to eligible persons through District Legal Services Authorities (DLSA) in Giridih and other districts.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-blue-700">
                <strong>Note:</strong> Legal aid is not charity but a constitutional right under Article 39A. All eligible persons can avail these services without any cost.
              </p>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Eligibility Criteria for Free Legal Aid</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">Automatic Eligibility</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Members of SC/ST communities</li>
              <li>• Victims of trafficking or beggary</li>
              <li>• Women and children</li>
              <li>• Persons with disabilities</li>
              <li>• Industrial workmen</li>
              <li>• Persons in custody</li>
              <li>• Victims of mass disasters</li>
            </ul>
          </div>
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">Income-Based Eligibility</div>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Annual income below ₹3,00,000</li>
              <li>• For SC/ST: Below ₹5,00,000</li>
              <li>• For women: Below ₹3,50,000</li>
              <li>• For disabled: Below ₹4,00,000</li>
              <li>• Senior citizens: Below ₹3,00,000</li>
              <li>• Transgender: Below ₹3,00,000</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Types of Legal Aid Services Available</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-green-50 p-4 rounded-lg">
            <div class="font-bold text-green-700 mb-2 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"></path>
              </svg>
              Legal Advice
            </div>
            <ul class="text-sm text-green-600 space-y-1">
              <li>• Free legal consultations</li>
              <li>• Case evaluation</li>
              <li>• Document review</li>
              <li>• Legal opinion</li>
              <li>• Guidance on procedures</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <div class="font-bold text-blue-700 mb-2 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"></path>
              </svg>
              Court Representation
            </div>
            <ul class="text-sm text-blue-600 space-y-1">
              <li>• Lawyer appointment</li>
              <li>• Case preparation</li>
              <li>• Court appearances</li>
              <li>• Filing documents</li>
              <li>• Argument presentation</li>
            </ul>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <div class="font-bold text-purple-700 mb-2 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
              </svg>
              Alternative Dispute Resolution
            </div>
            <ul class="text-sm text-purple-600 space-y-1">
              <li>• Lok Adalat referrals</li>
              <li>• Mediation services</li>
              <li>• Conciliation</li>
              <li>• Arbitration</li>
              <li>• Settlement assistance</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">How to Apply for Legal Aid in Giridih</h3>
        <div class="space-y-3">
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
            <div>
              <div class="font-medium text-slate-800">Visit DLSA Office (District Court Campus)</div>
              <div class="text-sm text-slate-600">Giridih DLSA is located in District Court Complex, near Collectorate</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
            <div>
              <div class="font-medium text-slate-800">Submit Application Form</div>
              <div class="text-sm text-slate-600">Fill Form 1 available at DLSA office or download from NALSA website</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
            <div>
              <div class="font-medium text-slate-800">Attach Required Documents</div>
              <div class="text-sm text-slate-600">Income certificate, identity proof, case details, and address proof</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
            <div>
              <div class="font-medium text-slate-800">Interview with Secretary</div>
              <div class="text-sm text-slate-600">Secretary DLSA interviews applicant, verifies eligibility</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</div>
            <div>
              <div class="font-medium text-slate-800">Lawyer Assignment</div>
              <div class="text-sm text-slate-600">Within 7 days, empanelled lawyer assigned based on case type</div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-[#c5a059] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">6</div>
            <div>
              <div class="font-medium text-slate-800">Case Monitoring</div>
              <div class="text-sm text-slate-600">DLSA monitors progress, provides additional support if needed</div>
            </div>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg">
          <h4 class="font-bold text-yellow-800 mb-2">Documents Required for Legal Aid Application:</h4>
          <div class="text-sm text-yellow-700">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul class="space-y-1">
                  <li>• Identity proof (Aadhar/Voter ID)</li>
                  <li>• Address proof</li>
                  <li>• Income certificate</li>
                  <li>• Caste certificate (if applicable)</li>
                </ul>
              </div>
              <div>
                <ul class="space-y-1">
                  <li>• Disability certificate (if applicable)</li>
                  <li>• Case related documents</li>
                  <li>• Passport size photos (2)</li>
                  <li>• Application in prescribed form</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 class="text-xl font-serif text-[#0a1128] mb-3">Special Initiatives in Giridih District</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">Mobile Legal Services</div>
            <div class="text-sm text-slate-600">Van visits remote villages every Wednesday, provides on-site legal aid and awareness</div>
            <div class="text-xs text-slate-500 mt-2">Coverage: 15 blocks of Giridih district</div>
          </div>
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">Legal Literacy Camps</div>
            <div class="text-sm text-slate-600">Monthly camps in schools, panchayats, and community centers to educate about legal rights</div>
            <div class="text-xs text-slate-500 mt-2">Focus: Women, SC/ST, rural population</div>
          </div>
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">Prison Legal Aid</div>
            <div class="text-sm text-slate-600">Weekly visits to Giridih Jail, assistance to undertrials, bail applications, and family liaison</div>
            <div class="text-xs text-slate-500 mt-2">Every Friday: 10 AM - 4 PM</div>
          </div>
          <div class="p-4 border border-slate-200 rounded-lg">
            <div class="font-bold text-slate-800 mb-2">Lok Adalats</div>
            <div class="text-sm text-slate-600">Monthly Lok Adalats for pre-litigation and pending case settlement</div>
            <div class="text-xs text-slate-500 mt-2">Next: 15th of every month</div>
          </div>
        </div>
        
        <div class="bg-green-50 p-4 rounded-lg border border-green-100">
          <h4 class="font-bold text-green-800 mb-2">Contact Information - Giridih DLSA:</h4>
          <div class="text-sm text-green-700">
            <div class="space-y-2">
              <div class="flex items-center">
                <MapPin class="w-4 h-4 mr-2" />
                <span>District Court Complex, Collectorate Road, Giridih - 815301</span>
              </div>
              <div class="flex items-center">
                <Phone class="w-4 h-4 mr-2" />
                <span>06532-222345 (Office), 06532-222346 (Help Desk)</span>
              </div>
              <div class="flex items-center">
                <Mail class="w-4 h-4 mr-2" />
                <span>dlsagiridih@gmail.com</span>
              </div>
              <div class="flex items-center">
                <Clock class="w-4 h-4 mr-2" />
                <span>Working Hours: 10:30 AM - 5:30 PM (Mon-Fri)</span>
              </div>
              <div class="flex items-center">
                <User class="w-4 h-4 mr-2" />
                <span>Secretary: Shri Rajesh Kumar, District Judge</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-bold text-blue-800 mb-2">Online Legal Aid Services:</h4>
          <ul class="text-blue-700 text-sm space-y-2">
            <li>• <strong>NALSA Website:</strong> www.nalsa.gov.in - Online application facility</li>
            <li>• <strong>Tele-Law:</strong> 1516 - Free legal advice over phone</li>
            <li>• <strong>Mobile App:</strong> NALSA Legal Services App available on Play Store</li>
            <li>• <strong>Email:</strong> legaladvice-nalsa@gov.in for preliminary advice</li>
            <li>• <strong>Video Conferencing:</strong> Available for remote consultations</li>
            <li>• <strong>SMS Service:</strong> Send LEGAL to 56677 for basic information</li>
          </ul>
        </div>
      </div>
    `,
    date: "Aug 10, 2023",
    category: "Legal Awareness",
    readTime: "7 min",
    image: "https://image2url.com/r2/default/images/1770359909628-5ec3e50a-0d46-4b23-abba-2afd1e6c5997.png",
    author: "Adv. Vikas Kumar",
    tags: ["Legal Aid", "Free Services", "Public Awareness", "DLSA"]
  }
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
                Giridih Court Updates
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-10">
              Expert legal analysis, court procedures, and practical guides for Civil Court Giridih, Sub-Division Court Bagodar-Sariya and High Court Ranchi matters.
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
                { value: "15+", label: "Legal Guides", icon: BookOpen },
                { value: "6", label: "Categories", icon: Tag },
                { value: "1200+", label: "Monthly Readers", icon: User },
                { value: "Free", label: "Access", icon: Shield }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
                  >
                    <div className="flex justify-center mb-2">
                      <Icon className="w-5 h-5 text-[#c5a059]" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-300 font-medium">{stat.label}</div>
                  </div>
                );
              })}
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
                className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center ${
                  activeCategory === category
                    ? 'bg-[#0a1128] text-white shadow-lg'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <span className="ml-2 text-[#c5a059] text-sm">
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
                    className="cursor-pointer p-6"
                    onClick={() => handleReadArticle(post.id)}
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Image - Always visible */}
                      <div className="lg:w-1/3 mb-4 lg:mb-0 lg:mr-6">
                        <div className="relative h-48 lg:h-40 rounded-xl overflow-hidden group">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <span className="bg-[#c5a059] text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
                              {post.category}
                            </span>
                          </div>
                          <div className="absolute bottom-3 right-3 flex items-center space-x-1 text-white text-xs">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:w-2/3">
                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-4 mb-3">
                          <div className="flex items-center space-x-2 text-slate-500 text-xs">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-slate-500 text-xs">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-serif text-[#0a1128] mb-3 leading-tight hover:text-[#c5a059] transition-colors">
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
                              className="px-3 py-1 bg-slate-50 text-slate-600 rounded-md text-xs font-medium hover:bg-slate-100 transition-colors"
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
                            className="inline-flex items-center space-x-2 text-[#c5a059] font-semibold text-sm hover:text-[#d4af37] transition-colors group"
                          >
                            <span>{isExpanded ? 'Close Article' : 'Read Full Article'}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                            ) : (
                              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                            )}
                          </button>
                          <div className="text-xs text-slate-400 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
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
                          {/* Full Content */}
                          <div 
                            className="prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.fullContent }}
                          />
                          
                          {/* Additional Actions */}
                          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-4">
                            <button 
                              onClick={() => {
                                showToast('Article bookmarked for later reading', 'success');
                              }}
                              className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors text-sm font-medium flex items-center space-x-2"
                            >
                              <BookOpen className="w-4 h-4" />
                              <span>Bookmark Article</span>
                            </button>
                            <button 
                              onClick={() => {
                                showToast('Sharing options will appear here', 'info');
                              }}
                              className="px-4 py-2 bg-[#c5a059] text-white rounded-lg hover:bg-[#d4af37] transition-colors text-sm font-medium flex items-center space-x-2"
                            >
                              <Mail className="w-4 h-4" />
                              <span>Share Article</span>
                            </button>
                            <button 
                              onClick={() => {
                                showToast('Contacting Advocate Vikas Kumar...', 'info');
                              }}
                              className="px-4 py-2 bg-[#0a1128] text-white rounded-lg hover:bg-[#1a1f3c] transition-colors text-sm font-medium flex items-center space-x-2"
                            >
                              <User className="w-4 h-4" />
                              <span>Consult on This Topic</span>
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
                Get monthly legal insights, court procedure updates, and practical guides for Giridih district courts directly in your inbox.
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