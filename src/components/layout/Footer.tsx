'use client';

import React from 'react';
import { Logo } from '@/components/ui/Logo';
import { HeroInfo } from '@/types/portfolio';
import { Mail, BookOpen, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

interface FooterProps {
  hero: HeroInfo;
}

export const Footer: React.FC<FooterProps> = ({ hero }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-slate-400 max-w-md leading-relaxed mt-2">
              {hero.tagline}
            </p>
            <div className="text-xs text-slate-500">
              {hero.institution} • {hero.department}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-teal-400 transition-colors">About & Bio</a>
              </li>
              <li>
                <a href="#research" className="hover:text-teal-400 transition-colors">Research Areas</a>
              </li>
              <li>
                <a href="#publications" className="hover:text-teal-400 transition-colors">Publications & Papers</a>
              </li>
              <li>
                <a href="#code" className="hover:text-teal-400 transition-colors">Open Source Repos</a>
              </li>
              <li>
                <a href="#team" className="hover:text-teal-400 transition-colors">Lab Members</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Social Profiles */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect & Scholar
            </h3>
            <div className="flex flex-col space-y-3 text-sm">
              {hero.socials.googleScholar && (
                <a
                  href={hero.socials.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-teal-400 transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-teal-400" /> Google Scholar
                </a>
              )}
              {hero.socials.github && (
                <a
                  href={hero.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-teal-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-teal-400" /> GitHub Profile
                </a>
              )}
              {hero.socials.linkedin && (
                <a
                  href={hero.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-teal-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-teal-400" /> LinkedIn Network
                </a>
              )}
              {hero.socials.email && (
                <a
                  href={`mailto:${hero.socials.email}`}
                  className="flex items-center gap-2 hover:text-teal-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-teal-400" /> {hero.socials.email}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Semachew Molla Kassa. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Built with Next.js & Tailwind CSS</span>
            <a href="#home" className="hover:text-teal-400 transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
