'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold tracking-wider text-[#FF5733] dark:text-[#00D4FF] uppercase bg-[#FF5733]/10 dark:bg-[#00D4FF]/10 border border-[#FF5733]/20 dark:border-[#00D4FF]/20 rounded-full mb-3 shadow-xs">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
