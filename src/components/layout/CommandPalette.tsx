'use client';

import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Layers, Newspaper, Code, Video, Users, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioData } from '@/types/portfolio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, data }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search Results
  const matchedPubs = data.publications
    .filter(p => p.title.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q)) || p.venue.toLowerCase().includes(q))
    .slice(0, 3);

  const matchedProjects = data.research.projects
    .filter(p => p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q))
    .slice(0, 2);

  const matchedCode = data.codeProjects
    .filter(c => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))
    .slice(0, 2);

  const matchedNews = data.news
    .filter(n => n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q))
    .slice(0, 2);

  const matchedVideos = data.videos
    .filter(v => v.title.toLowerCase().includes(q) || v.event.toLowerCase().includes(q))
    .slice(0, 2);

  const matchedTeam = data.team
    .filter(t => t.name.toLowerCase().includes(q) || t.role.toLowerCase().includes(q))
    .slice(0, 2);

  const totalResults = matchedPubs.length + matchedProjects.length + matchedCode.length + matchedNews.length + matchedVideos.length + matchedTeam.length;

  const handleSelect = (anchorId: string) => {
    onClose();
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search publications, research, projects, news..."
              className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="max-h-96 overflow-y-auto p-4 space-y-4">
            {q === '' && (
              <div className="text-center py-8 text-slate-400 text-xs">
                Type a keyword like <span className="font-semibold text-indigo-500">"Federated"</span>, <span className="font-semibold text-indigo-500">"GNN"</span>, <span className="font-semibold text-indigo-500">"NeurIPS"</span>, or <span className="font-semibold text-indigo-500">"Python"</span>
              </div>
            )}

            {q !== '' && totalResults === 0 && (
              <div className="text-center py-8 text-slate-400 text-sm">
                No matching results found for "{query}".
              </div>
            )}

            {matchedPubs.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  <BookOpen className="w-3.5 h-3.5" /> Publications
                </div>
                <div className="space-y-1.5">
                  {matchedPubs.map(p => (
                    <button
                      key={p.id}
                      onClick={() => handleSelect('publications')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-teal-400">
                          {p.title}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {p.venue} ({p.year})
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-teal-400 transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {matchedProjects.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  <Layers className="w-3.5 h-3.5" /> Research Projects
                </div>
                <div className="space-y-1.5">
                  {matchedProjects.map(pr => (
                    <button
                      key={pr.id}
                      onClick={() => handleSelect('research')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-teal-400">
                          {pr.title}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          {pr.summary}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-teal-400 transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {matchedCode.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  <Code className="w-3.5 h-3.5" /> Code & Repositories
                </div>
                <div className="space-y-1.5">
                  {matchedCode.map(c => (
                    <button
                      key={c.id}
                      onClick={() => handleSelect('code')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-teal-400">
                          {c.title}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          {c.description}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-teal-400 transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {matchedNews.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  <Newspaper className="w-3.5 h-3.5" /> News & Announcements
                </div>
                <div className="space-y-1.5">
                  {matchedNews.map(n => (
                    <button
                      key={n.id}
                      onClick={() => handleSelect('news')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-teal-400">
                          {n.title}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          {n.date} - {n.summary}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-teal-400 transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>Press <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700 font-mono">ESC</kbd> to exit</span>
            <span>SMK Academic Portfolio Search</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
