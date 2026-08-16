'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TeamMember } from '@/types/portfolio';
import { Mail, BookOpen, User } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

interface TeamProps {
  data: TeamMember[];
}

export const Team: React.FC<TeamProps> = ({ data }) => {
  return (
    <section id="team" className="py-20 md:py-28 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Trustworthy AI Lab"
          title="Team & Research Scholars"
          subtitle="Mentoring outstanding graduate researchers, postdoctoral fellows, and students driving innovations in machine learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 text-center group"
            >
              <div className="space-y-4">
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-indigo-200 dark:border-teal-500/50 shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-teal-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-teal-400">
                    {member.role}
                  </p>
                  {member.degreeTrack && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      {member.degreeTrack}
                    </p>
                  )}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {member.bio}
                </p>

                {/* Research Focus Tags */}
                <div className="flex flex-wrap items-center justify-center gap-1">
                  {member.researchFocus.map((focus, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-2 py-0.5 text-[10px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-center gap-3 text-slate-500 dark:text-slate-400">
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
                  title="Email Member"
                >
                  <Mail className="w-4 h-4" />
                </a>
                {member.socials?.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {member.socials?.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {member.socials?.googleScholar && (
                  <a
                    href={member.socials.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
                    title="Google Scholar"
                  >
                    <BookOpen className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
