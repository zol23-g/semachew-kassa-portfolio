'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AboutInfo } from '@/types/portfolio';
import { GraduationCap, Briefcase, Award, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  data: AboutInfo;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Biography & Background"
          title="About & Academic Journey"
          subtitle="A dedicated researcher advancing trustworthy machine learning, graph representation learning, and privacy-centric artificial intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="prose dark:prose-invert max-w-none space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Academic Overview
              </h3>
              {data.biography.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Skills Badges */}
            <div className="space-y-6 pt-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Research Specialties & Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.skills.map((skillGroup, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-2"
                  >
                    <h4 className="text-xs font-bold text-indigo-600 dark:text-teal-400 uppercase tracking-wider">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {skillGroup.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700 shadow-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Timeline (Education vs Experience) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
              {/* Tab Switcher */}
              <div className="flex p-1 rounded-xl bg-slate-200 dark:bg-slate-800">
                <button
                  onClick={() => setActiveTab('education')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    activeTab === 'education'
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-teal-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" /> Education Timeline
                </button>
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    activeTab === 'experience'
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-teal-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Briefcase className="w-4 h-4" /> Professional Experience
                </button>
              </div>

              {/* Education List */}
              {activeTab === 'education' && (
                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-indigo-200 dark:before:bg-slate-800">
                  {data.education.map((edu, idx) => (
                    <div key={idx} className="relative pl-8 space-y-1">
                      <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-teal-400 flex items-center justify-center">
                        <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-teal-400" />
                      </div>
                      <span className="text-xs font-bold text-indigo-600 dark:text-teal-400 uppercase tracking-wider">
                        {edu.year}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {edu.institution}
                      </p>
                      {edu.thesis && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1">
                          <span className="font-semibold not-italic">Thesis:</span> "{edu.thesis}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Experience List */}
              {activeTab === 'experience' && (
                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-indigo-200 dark:before:bg-slate-800">
                  {data.experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 space-y-2">
                      <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-teal-400 flex items-center justify-center">
                        <Briefcase className="w-3.5 h-3.5 text-indigo-600 dark:text-teal-400" />
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="text-xs font-bold text-indigo-600 dark:text-teal-400 uppercase tracking-wider">
                          {exp.period}
                        </span>
                        <span className="px-2 py-0.5 text-[10px] font-semibold uppercase rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {exp.organization} • {exp.location}
                      </p>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400 pt-1">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
