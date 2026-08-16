'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ResearchSectionData } from '@/types/portfolio';
import { ShieldCheck, Lock, Network, Layers, ArrowUpRight, Award, Users, FileCheck } from 'lucide-react';

interface ResearchProps {
  data: ResearchSectionData;
}

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-indigo-600 dark:text-teal-400" />,
  Lock: <Lock className="w-6 h-6 text-indigo-600 dark:text-teal-400" />,
  Network: <Network className="w-6 h-6 text-indigo-600 dark:text-teal-400" />,
  Layers: <Layers className="w-6 h-6 text-indigo-600 dark:text-teal-400" />,
};

export const Research: React.FC<ResearchProps> = ({ data }) => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const filteredProjects = selectedArea
    ? data.projects.filter(p => p.areaId === selectedArea)
    : data.projects;

  return (
    <section id="research" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Research Focus & Projects"
          title="Research Agenda & Active Initiatives"
          subtitle="Investigating fundamental problems in graph neural representations, counterfactual explainability, and private multi-institutional federated learning."
        />

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {data.areas.map((area, idx) => {
            const isSelected = selectedArea === area.id;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setSelectedArea(isSelected ? null : area.id)}
                className={`cursor-pointer p-6 rounded-3xl transition-all duration-300 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-xl scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-teal-500 shadow-sm hover:shadow-md'
                }`}
              >
                <div className={`p-3 rounded-2xl w-fit mb-4 ${isSelected ? 'bg-white/20 text-white' : 'bg-indigo-50 dark:bg-slate-800'}`}>
                  {iconMap[area.icon] || <Network className="w-6 h-6" />}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {area.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-4 ${isSelected ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-400'}`}>
                  {area.summary}
                </p>
                <div className="flex flex-wrap gap-1">
                  {area.topics.map((t, i) => (
                    <span
                      key={i}
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Dashboard Banner */}
        <div className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-teal-950 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-teal-300">
                {data.impact.citationsTotal}+
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 mt-1 font-semibold">
                Total Citations
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-teal-300">
                {data.impact.hIndex} / {data.impact.i10Index}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 mt-1 font-semibold">
                h-index / i10-index
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-teal-300">
                {data.impact.grantsSecured}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 mt-1 font-semibold">
                Grants Secured
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold text-teal-300">
                {data.impact.collaboratingInstitutions}+
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 mt-1 font-semibold">
                Global Partner Labs
              </div>
            </div>
          </div>
        </div>

        {/* Research Projects Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {selectedArea ? 'Filtered Projects' : 'Featured Research Projects'}
            </h3>
            {selectedArea && (
              <button
                onClick={() => setSelectedArea(null)}
                className="text-xs font-semibold text-indigo-600 dark:text-teal-400 hover:underline"
              >
                Clear Filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md ${
                      project.status === 'ongoing'
                        ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {project.status} ({project.period})
                    </span>
                    {project.funding && (
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {project.funding}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-teal-400">
                    Role: {project.role}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Outcomes:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {project.outcomes.map((out, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-indigo-500 font-bold">•</span> {out}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
