'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Publication } from '@/types/portfolio';
import { Search, BookOpen, ExternalLink, Code, Quote, Copy, Check, X } from 'lucide-react';

interface PublicationsProps {
  data: Publication[];
}

export const Publications: React.FC<PublicationsProps> = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bibtexModalPub, setBibtexModalPub] = useState<Publication | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Publications' },
    { id: 'journal', label: 'Journals (TPAMI, etc.)' },
    { id: 'conference', label: 'Conferences (NeurIPS, ICML, ACL)' },
    { id: 'book', label: 'Books & Monographs' },
  ];

  const filteredPublications = data.filter((pub) => {
    const matchesCategory = activeCategory === 'all' || pub.type === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === '' ||
      pub.title.toLowerCase().includes(q) ||
      pub.venue.toLowerCase().includes(q) ||
      pub.year.toString().includes(q) ||
      pub.authors.some((a) => a.toLowerCase().includes(q)) ||
      pub.tags.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  const handleCopyBibtex = (bibtex: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="publications" className="py-20 md:py-28 bg-[#FDFDFD] dark:bg-[#090d16] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Peer-Reviewed Literature"
          title="Publications & Academic Works"
          subtitle="Scholarly articles published in leading international journals, IEEE Transactions, NeurIPS, ICML, ACL, and academic monographs."
        />

        {/* Toolbar: Category Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#FF5733] text-white shadow-md shadow-[#FF5733]/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, author, year, tag..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5733] dark:focus:ring-[#00D4FF]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              No publications found matching your filter criteria.
            </div>
          ) : (
            filteredPublications.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-xs hover:shadow-md transition-all duration-300 space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    {/* Badge & Year */}
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider uppercase rounded-md bg-[#FF5733]/10 dark:bg-[#00D4FF]/10 text-[#FF5733] dark:text-[#00D4FF] border border-[#FF5733]/20 dark:border-[#00D4FF]/20">
                        {pub.type}
                      </span>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        {pub.year}
                      </span>
                      {pub.featured && (
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300">
                          ★ Featured
                        </span>
                      )}
                    </div>

                    {/* Paper Title */}
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                      {pub.title}
                    </h3>

                    {/* Authors with Semachew Molla Kassa Highlighted */}
                    <div className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
                      {pub.authors.map((author, i) => {
                        const isPrimary = author.includes('Semachew Molla Kassa');
                        return (
                          <span key={i}>
                            {isPrimary ? (
                              <strong className="text-[#FF5733] dark:text-[#00D4FF] font-extrabold underline decoration-2 underline-offset-2">
                                {author}
                              </strong>
                            ) : (
                              author
                            )}
                            {i < pub.authors.length - 1 ? ', ' : ''}
                          </span>
                        );
                      })}
                    </div>

                    {/* Venue */}
                    <p className="text-xs md:text-sm font-semibold italic text-slate-500 dark:text-slate-400">
                      {pub.venue}
                    </p>
                  </div>

                  {/* Citation Pill */}
                  <div className="flex md:flex-col items-center md:items-end justify-between shrink-0">
                    <div className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {pub.citations}
                      </span>
                      <span className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">
                        Citations
                      </span>
                    </div>
                  </div>
                </div>

                {/* Abstract snippet */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/60">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Abstract: </span>
                  {pub.abstract}
                </p>

                {/* Action Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#FF5733]" /> DOI
                      </a>
                    )}
                    {pub.codeUrl && (
                      <a
                        href={pub.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-200"
                      >
                        <Code className="w-3.5 h-3.5 text-[#00D4FF]" /> Code
                      </a>
                    )}
                    <button
                      onClick={() => setBibtexModalPub(pub)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-lg bg-[#FF5733]/10 dark:bg-[#00D4FF]/10 text-[#FF5733] dark:text-[#00D4FF] hover:bg-[#FF5733]/20 dark:hover:bg-[#00D4FF]/20 transition-colors border border-[#FF5733]/20 dark:border-[#00D4FF]/20"
                    >
                      <Quote className="w-3.5 h-3.5" /> BibTeX
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* BibTeX Modal */}
        <AnimatePresence>
          {bibtexModalPub && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-xl p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    <Quote className="w-4 h-4 text-[#FF5733] dark:text-[#00D4FF]" /> BibTeX Citation
                  </div>
                  <button
                    onClick={() => setBibtexModalPub(null)}
                    className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="relative">
                  <pre className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                    {bibtexModalPub.bibtex}
                  </pre>
                  <button
                    onClick={() => handleCopyBibtex(bibtexModalPub.bibtex)}
                    className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FF5733] hover:bg-[#e04724] text-white text-[11px] font-bold transition-colors shadow-xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00D4FF]" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
