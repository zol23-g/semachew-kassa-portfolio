'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { NewsItem } from '@/types/portfolio';
import { Award, Calendar, ExternalLink, Megaphone, Sparkles } from 'lucide-react';

interface NewsProps {
  data: NewsItem[];
}

export const News: React.FC<NewsProps> = ({ data }) => {
  return (
    <section id="news" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Latest Updates & Honors"
          title="News & Recognitions"
          subtitle="Recent lab announcements, research grants, conference keynotes, honors, and academic achievements."
        />

        <div className="relative max-w-4xl mx-auto before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-indigo-200 dark:before:bg-slate-800 space-y-12">
          {data.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-600 dark:border-teal-400 z-10 flex items-center justify-center shadow-md">
                  <Sparkles className="w-3 h-3 text-indigo-600 dark:text-teal-400" />
                </div>

                {/* Card Container */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-teal-400 uppercase tracking-wider">
                        <Calendar className="w-3.5 h-3.5" /> {item.date}
                      </span>
                      <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.summary}
                    </p>

                    {item.link && (
                      <a
                        href={item.link}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-teal-400 hover:underline pt-1"
                      >
                        Read detail <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
