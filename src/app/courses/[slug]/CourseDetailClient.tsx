'use client';

import React, { useState } from 'react';
import { Course, HeroInfo, PortfolioData } from '@/types/portfolio';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CommandPalette } from '@/components/layout/CommandPalette';
import { BackToTop } from '@/components/ui/BackToTop';
import { BookOpen, CheckCircle2, Clock, Star, Users, ArrowLeft, ShoppingCart, Award, ShieldCheck, Play, Share2, Check } from 'lucide-react';
import Link from 'next/link';

interface CourseDetailClientProps {
  course: Course;
  hero: HeroInfo;
  profileData: PortfolioData;
}

export default function CourseDetailClient({ course, hero, profileData }: CourseDetailClientProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] dark:bg-[#0b1410] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#214E34] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Global Cmd+K Search Palette */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        data={profileData}
      />

      {/* Hero Course Header */}
      <div className="bg-[#214E34] text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <Link
              href="/#courses"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3AB09E] hover:underline bg-white/10 px-3 py-1.5 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Courses
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#3AB09E]" /> : <Share2 className="w-4 h-4" />}
              {copiedLink ? 'Link Copied!' : 'Share Course'}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#3AB09E] text-slate-950 uppercase tracking-wider shadow-sm">
              {course.type === 'free' ? 'FREE COURSE' : 'PAID MASTERCLASS'}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/20">
              {course.level} Level
            </span>
            <div className="flex items-center gap-1 text-amber-300 font-bold text-xs">
              <Star className="w-4 h-4 fill-amber-300" /> {course.rating} / 5.0 rating
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-4xl">
            {course.title}
          </h1>

          <p className="text-base md:text-lg text-slate-200 max-w-3xl leading-relaxed">
            {course.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs md:text-sm text-slate-200">
            <span className="flex items-center gap-1.5 font-semibold">
              <Clock className="w-4 h-4 text-[#3AB09E]" /> {course.duration}
            </span>
            <span className="flex items-center gap-1.5 font-semibold">
              <Users className="w-4 h-4 text-[#3AB09E]" /> {course.studentsEnrolled.toLocaleString()} Students Enrolled
            </span>
            <span className="flex items-center gap-1.5 font-semibold">
              <Award className="w-4 h-4 text-[#3AB09E]" /> Instructor: Dr. Semachew Molla Kassa
            </span>
          </div>
        </div>
      </div>

      {/* Main Content & Buy Card Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Syllabus & Learning Outcomes */}
          <div className="lg:col-span-8 space-y-12">
            {/* Preview Video / Thumbnail */}
            {course.previewVideoUrl ? (
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Play className="w-3.5 h-3.5 text-[#3AB09E]" /> Course Preview Video
                </h3>
                <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black shadow-2xl border border-slate-200 dark:border-slate-800">
                  <iframe
                    src={course.previewVideoUrl}
                    title={course.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ) : (
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Course Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Course Description & Overview
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* What You Will Learn Card */}
            <div className="p-8 rounded-3xl bg-[#DBE9EE]/40 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#214E34] dark:text-[#3AB09E]" /> What You Will Learn & Master
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#3AB09E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Breakdown Modules */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Detailed Course Syllabus & Modules
              </h2>

              <div className="space-y-4">
                {course.curriculum.map((module, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {module.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#214E34] dark:text-[#3AB09E] bg-[#DBE9EE]/60 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                        {module.duration}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pl-4 border-l-2 border-[#214E34]/30 dark:border-[#3AB09E]/30">
                      {module.lessons.map((lesson, lIdx) => (
                        <li key={lIdx} className="flex items-center gap-2">
                          <Play className="w-3 h-3 text-[#3AB09E]" /> {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Course Prerequisites & Recommended Tools
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {course.prerequisites.map((pre, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="font-bold text-[#214E34] dark:text-[#3AB09E]">•</span> {pre}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sticky Checkout Purchase Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-black text-[#214E34] dark:text-[#3AB09E]">
                    {course.price}
                  </span>
                  {course.originalPrice && (
                    <span className="line-through text-slate-400 text-sm font-semibold">
                      {course.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {course.type === 'free' ? 'Full Open Access Course' : 'One-time payment • Lifetime Access'}
                </p>
              </div>

              <a
                href={course.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-[#214E34] hover:bg-[#193c28] text-white font-bold text-sm shadow-lg shadow-[#214E34]/25 transition-all text-center flex items-center justify-center gap-2"
              >
                {course.type === 'free' ? (
                  <>Start Free Course Now</>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" /> Buy Course ({course.price})
                  </>
                )}
              </a>

              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#3AB09E]" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#3AB09E]" />
                  <span>{course.certificate ? 'Verified Certificate of Completion' : 'Open Access Reference'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#3AB09E]" />
                  <span>Full PyTorch Source Code Repositories Included</span>
                </div>
              </div>
            </div>

            {/* Instructor Quick Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 text-center">
              <img
                src={hero.avatarUrl}
                alt={hero.name}
                className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-[#3AB09E]"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{hero.name}</h4>
                <p className="text-[11px] text-[#214E34] dark:text-[#3AB09E] font-semibold">{hero.title}</p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">
                {hero.bioBrief}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer hero={hero} />
      <BackToTop />
    </main>
  );
}
