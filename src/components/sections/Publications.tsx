'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Publication, PublicationCategory } from '@/types/portfolio';
import { BookOpen, ExternalLink, FileText, Quote, Search, Filter, Copy, Check, X, Tag } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';

interface PublicationsProps {
  data: Publication[];
}

export const Publications: React.FC<PublicationsProps> = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState<PublicationCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBibtexModal, setActiveBibtexModal] = useState<Publication | null>(null);
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  // Filter logic
  const filteredPublications = data.filter((pub) => {
    const matchesCategory = selectedCategory === 'all' || pub.type === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      pub.title.toLowerCase().includes(query) ||
      pub.authors.some((a) => a.toLowerCase().includes(query)) ||
      pub.venue.toLowerCase().includes(query) ||
      pub.tags.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const handleCopyBibtex = (bibtexText: string) => {
    navigator.clipboard.writeText(bibtexText);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  const categories: { label: string; value: PublicationCategory | 'all' }[] = [
    { label: 'All Publications', value: 'all' },
    { label: 'Journal Articles', value: 'journal' },
    { label: 'Conference Papers', value: 'conference' },
    { label: 'Book Chapters', value: 'book' },
    { label: 'Preprints & Reports', value: 'preprint' },
  ];

  return (
    <section id="publications" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#0b1410]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Peer-Reviewed Literature"
          title="Publications & Research Papers"
          subtitle="Explore peer-reviewed journal articles, conference proceedings, book chapters, and preprints authored by Semachew Molla Kassa."
        />

        {/* Controls: Search & Category Tabs */}
        <div className="space-y-6 mb-12">
          {/* Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, author, journal, or topic..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#214E34] dark:focus:ring-[#3AB09E] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  selectedCategory === cat.value
                    ? 'bg-[#214E34] text-white shadow-md shadow-[#214E34]/20'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-[#DBE9EE] dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}{' '}
                <span className="opacity-70 font-normal ml-1">
                  (
                  {cat.value === 'all'
                    ? data.length
                    : data.filter((p) => p.type === cat.value).length}
                  )
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.length === 0 ? (
            <div className="text-center py-16 text-slate-400 text-sm">
              No publications match your search query. Try clearing filters.
            </div>
          ) : (
            filteredPublications.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 hover:border-[#214E34]/40 dark:hover:border-[#3AB09E]/40 transition-all duration-300 space-y-4 group shadow-xs hover:shadow-md"
              >
                {/* Header Row: Category Badge & Citation Counter */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-[#DBE9EE] dark:bg-[#3AB09E]/15 text-[#214E34] dark:text-[#3AB09E]">
                      {pub.type.toUpperCase()} • {pub.year}
                    </span>
                    {pub.featured && (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                        ★ Featured Paper
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Quote className="w-3.5 h-3.5 text-[#3AB09E]" />
                    <span>{pub.citations} Citations</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-[#214E34] dark:group-hover:text-[#3AB09E] transition-colors">
                  {pub.title}
                </h3>

                {/* Authors (Highlight Semachew Molla Kassa) */}
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 font-medium">
                  {pub.authors.map((author, aIdx) => {
                    const isSelf = author.toLowerCase().includes('kassa');
                    return (
                      <span key={aIdx}>
                        {isSelf ? (
                          <strong className="text-[#214E34] dark:text-[#3AB09E] font-bold underline decoration-[#3AB09E]">
                            {author}
                          </strong>
                        ) : (
                          author
                        )}
                        {aIdx < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    );
                  })}
                </p>

                {/* Venue / Journal Name */}
                <div className="text-xs md:text-sm italic font-semibold text-slate-700 dark:text-slate-300">
                  {pub.venue}
                </div>

                {/* Abstract Text */}
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {pub.abstract}
                </p>

                {/* Tags & Action Links */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  {/* Topic Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons Row */}
                  <div className="flex items-center gap-3">
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#214E34] dark:text-[#3AB09E] hover:underline"
                      >
                        DOI <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {pub.pdfUrl && (
                      <a
                        href={pub.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#214E34] dark:hover:text-[#3AB09E]"
                      >
                        PDF <FileText className="w-3 h-3" />
                      </a>
                    )}
                    <button
                      onClick={() => setActiveBibtexModal(pub)}
                      className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg bg-[#DBE9EE] dark:bg-slate-800 text-[#214E34] dark:text-[#3AB09E] hover:bg-[#c6dce3] dark:hover:bg-slate-700 transition-colors"
                    >
                      <Quote className="w-3 h-3" /> BibTeX
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* BibTeX Generator Modal */}
        <AnimatePresence>
          {activeBibtexModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-8 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Quote className="w-4 h-4 text-[#3AB09E]" /> Citation BibTeX
                  </h3>
                  <button
                    onClick={() => setActiveBibtexModal(null)}
                    className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="relative">
                  <pre className="p-4 rounded-xl bg-slate-950 text-emerald-400 font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed border border-slate-800">
                    {activeBibtexModal.bibtex}
                  </pre>
                  <button
                    onClick={() => handleCopyBibtex(activeBibtexModal.bibtex)}
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    {copiedBibtex ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#3AB09E]" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy BibTeX
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-right">
                  Paste into your LaTeX document or Reference Manager.
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
