'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 40 }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      <div className="relative flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-teal-400 p-0.5 shadow-md shadow-indigo-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-indigo-500/40">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-slate-950 text-white font-bold tracking-tighter">
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-teal-400 transition-transform duration-300 group-hover:rotate-6"
          >
            {/* Minimalist Monogram S M K */}
            <path
              d="M8 12C8 10 10 8 14 8C18 8 19.5 9.5 19.5 12C19.5 15.5 8 16.5 8 20.5C8 23.5 10.5 25 14.5 25C19 25 20.5 23 20.5 21"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M21 25V12L27.5 20.5L34 12V25"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white leading-none group-hover:text-indigo-600 dark:group-hover:text-teal-400 transition-colors">
          SMK
        </span>
        <span className="text-[10px] font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase leading-tight">
          Academic Lab
        </span>
      </div>
    </div>
  );
};
