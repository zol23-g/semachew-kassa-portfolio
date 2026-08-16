'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CommandPalette } from '@/components/layout/CommandPalette';
import { BackToTop } from '@/components/ui/BackToTop';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Research } from '@/components/sections/Research';
import { Publications } from '@/components/sections/Publications';
import { News } from '@/components/sections/News';
import { Team } from '@/components/sections/Team';
import { CodeProjects } from '@/components/sections/CodeProjects';
import { Videos } from '@/components/sections/Videos';
import { Contact } from '@/components/sections/Contact';

import profileDataRaw from '@/data/profile.json';
import { PortfolioData } from '@/types/portfolio';

const profileData = profileDataRaw as unknown as PortfolioData;

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white dark:selection:bg-teal-400 dark:selection:text-slate-950">
      {/* Sticky Header Navigation */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Global Cmd+K Search Palette */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        data={profileData}
      />

      {/* Main Portfolio Sections */}
      <Hero data={profileData.hero} />
      <About data={profileData.about} />
      <Research data={profileData.research} />
      <Publications data={profileData.publications} />
      <News data={profileData.news} />
      <Team data={profileData.team} />
      <CodeProjects data={profileData.codeProjects} />
      <Videos data={profileData.videos} />
      <Contact data={profileData.contact} socials={profileData.hero.socials} />

      {/* Footer */}
      <Footer hero={profileData.hero} />

      {/* Back to top floating button */}
      <BackToTop />
    </main>
  );
}
