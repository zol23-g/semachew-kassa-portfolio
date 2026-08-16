'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeroInfo } from '@/types/portfolio';
import { BookOpen, FileText, Mail, ArrowRight, ExternalLink, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

interface HeroProps {
  data: HeroInfo;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Dynamic Animated Background Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-teal-500/10 dark:bg-teal-500/20 blur-3xl" />
        
        {/* Particle Grid Canvas Effect */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-slate-800/80 border border-indigo-100 dark:border-slate-700/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-semibold text-indigo-700 dark:text-teal-300 tracking-wide uppercase">
                {data.title}
              </span>
            </div>

            {/* Name & Academic Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                {data.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-indigo-600 dark:text-teal-400">
                {data.institution} • {data.department}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed max-w-3xl">
              {data.tagline}
            </p>

            {/* Brief Bio */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              {data.bioBrief}
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#publications"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-teal-500 dark:hover:bg-teal-400 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 dark:shadow-teal-500/20 transition-all duration-200 hover:scale-105"
              >
                <BookOpen className="w-4 h-4" /> View Publications
              </a>
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-sm shadow-md transition-all duration-200 hover:scale-105"
              >
                <FileText className="w-4 h-4 text-teal-400" /> Explore Research
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-indigo-500" /> Contact Me
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm">
              <span className="font-medium text-xs uppercase tracking-wider text-slate-400">Profiles:</span>
              {data.socials.googleScholar && (
                <a
                  href={data.socials.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
                  title="Google Scholar"
                >
                  <BookOpen className="w-5 h-5" />
                </a>
              )}
              {data.socials.github && (
                <a
                  href={data.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
              {data.socials.linkedin && (
                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}
              {data.socials.orcid && (
                <a
                  href={data.socials.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-bold rounded-lg border border-teal-500/40 text-teal-600 dark:text-teal-400 hover:bg-teal-500/10 transition-colors"
                  title="ORCID iD"
                >
                  ORCID
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Card with Avatar & Impact Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="relative p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
              {/* Photo */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-indigo-100 dark:border-slate-800 shadow-inner">
                <img
                  src={data.avatarUrl}
                  alt={data.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                      Primary Investigator
                    </p>
                    <p className="text-sm font-bold">Trustworthy AI Lab</p>
                  </div>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {data.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center"
                  >
                    <div className="text-2xl font-black text-indigo-600 dark:text-teal-400 tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
