import React from 'react';
import { notFound } from 'next/navigation';
import profileDataRaw from '@/data/profile.json';
import { PortfolioData, Course } from '@/types/portfolio';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BookOpen, CheckCircle2, Clock, Star, Users, ArrowLeft, ShoppingCart, Award, ShieldCheck, Play, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const profileData = profileDataRaw as unknown as PortfolioData;

export function generateStaticParams() {
  return profileData.courses.map((course) => ({
    slug: course.slug,
  }));
}

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  const course = profileData.courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFFFFF] dark:bg-[#0b1410] text-slate-900 dark:text-slate-100 font-sans selection:bg-[#214E34] selection:text-white">
      {/* Header Bar */}
      <div className="bg-[#214E34] text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/#courses"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3AB09E] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Courses
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#3AB09E] text-slate-950 uppercase tracking-wider">
              {course.type === 'free' ? 'FREE COURSE' : 'PAID MASTERCLASS'}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white">
              {course.level} Level
            </span>
            <div className="flex items-center gap-1 text-amber-300 font-bold text-xs">
              <Star className="w-4 h-4 fill-amber-300" /> {course.rating} / 5.0 rating
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
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
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black shadow-2xl border border-slate-200 dark:border-slate-800">
                <iframe
                  src={course.previewVideoUrl}
                  title={course.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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

            {/* Learning Outcomes */}
            <div className="p-8 rounded-3xl bg-[#DBE9EE]/40 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#214E34] dark:text-[#3AB09E]" /> What You Will Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
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
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
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
                Course Prerequisites
              </h3>
              <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                {course.prerequisites.map((pre, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="font-bold text-[#214E34] dark:text-[#3AB09E]">•</span> {pre}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sticky Checkout Purchase Card */}
          <div className="lg:col-span-4 sticky top-28">
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
          </div>
        </div>
      </div>

      <Footer hero={profileData.hero} />
    </main>
  );
}
