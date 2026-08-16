'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Course } from '@/types/portfolio';
import { BookOpen, Star, Users, Clock, ArrowRight, CheckCircle2, ShoppingCart, Lock, ShieldCheck, Sparkles, X } from 'lucide-react';
import Link from 'next/link';

interface CoursesProps {
  data: Course[];
}

export const Courses: React.FC<CoursesProps> = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'free' | 'paid'>('all');
  const [selectedCourseModal, setSelectedCourseModal] = useState<Course | null>(null);

  const filteredCourses = data.filter((course) => {
    if (activeCategory === 'free') return course.type === 'free';
    if (activeCategory === 'paid') return course.type === 'paid';
    return true;
  });

  return (
    <section id="courses" className="py-20 md:py-28 bg-slate-50 dark:bg-[#0b1410] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Online Academy & Masterclasses"
          title="Courses & Academic Training"
          subtitle="Explore open-access academic lecture series and specialized professional masterclasses taught by Dr. Semachew Molla Kassa."
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-[#214E34] text-white shadow-md shadow-[#214E34]/20'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-[#DBE9EE]'
            }`}
          >
            All Courses ({data.length})
          </button>
          <button
            onClick={() => setActiveCategory('free')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'free'
                ? 'bg-[#3AB09E] text-slate-950 shadow-md shadow-[#3AB09E]/20'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-[#DBE9EE]'
            }`}
          >
            Free Open-Access Courses ({data.filter(c => c.type === 'free').length})
          </button>
          <button
            onClick={() => setActiveCategory('paid')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'paid'
                ? 'bg-[#214E34] text-white shadow-md shadow-[#214E34]/20'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-[#DBE9EE]'
            }`}
          >
            Paid AI Masterclasses ({data.filter(c => c.type === 'paid').length})
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Header Image & Badges */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Price Pill */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl font-extrabold text-xs shadow-lg backdrop-blur-md flex items-center gap-1.5">
                  {course.type === 'free' ? (
                    <span className="bg-[#3AB09E] text-slate-950 px-2.5 py-0.5 rounded-lg uppercase tracking-wider">
                      FREE
                    </span>
                  ) : (
                    <div className="bg-[#214E34] text-white px-3 py-1 rounded-lg flex items-center gap-1.5">
                      <span className="text-sm">{course.price}</span>
                      {course.originalPrice && (
                        <span className="line-through text-slate-300 text-[10px]">{course.originalPrice}</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Level Tag */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-slate-900/80 text-white text-[11px] font-bold backdrop-blur-xs border border-slate-700">
                  {course.level}
                </div>

                {/* Duration & Enrolled Overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#3AB09E]" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#3AB09E]" /> {course.studentsEnrolled.toLocaleString()} Students
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400 font-bold text-xs">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="text-slate-800 dark:text-slate-200">{course.rating} / 5.0</span>
                    <span className="text-slate-400 font-normal ml-1">Rating</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#214E34] dark:group-hover:text-[#3AB09E] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {course.subtitle}
                  </p>
                </div>

                {/* Key Learning Highlights */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Syllabus Highlights:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {course.learningOutcomes.slice(0, 2).map((out, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3AB09E] shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#214E34] dark:text-[#3AB09E] hover:underline"
                  >
                    View Full Syllabus & Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => setSelectedCourseModal(course)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md ${
                      course.type === 'free'
                        ? 'bg-[#3AB09E] hover:bg-[#319787] text-slate-950'
                        : 'bg-[#214E34] hover:bg-[#193c28] text-white shadow-[#214E34]/20'
                    }`}
                  >
                    {course.type === 'free' ? (
                      <>Enroll Free</>
                    ) : (
                      <>
                        <ShoppingCart className="w-3.5 h-3.5" /> Buy Course ({course.price})
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick View & Enrollment Purchase Modal */}
        <AnimatePresence>
          {selectedCourseModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 p-6 md:p-8 max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div>
                    <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded bg-[#DBE9EE] text-[#214E34]">
                      {selectedCourseModal.type} course • {selectedCourseModal.level}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                      {selectedCourseModal.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedCourseModal(null)}
                    className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                  <p>{selectedCourseModal.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block mb-1">Course Info</span>
                      <ul className="space-y-1 text-xs">
                        <li><strong>Duration:</strong> {selectedCourseModal.duration}</li>
                        <li><strong>Level:</strong> {selectedCourseModal.level}</li>
                        <li><strong>Certificate:</strong> {selectedCourseModal.certificate ? 'Official Verified Certificate Included' : 'No Certificate'}</li>
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block mb-1">Pricing & Options</span>
                      <div className="text-lg font-black text-[#214E34] dark:text-[#3AB09E]">
                        {selectedCourseModal.price}
                      </div>
                      <p className="text-[11px] text-slate-400">Lifetime access to all video lectures, PyTorch source code, and community Q&A.</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <Link
                      href={`/courses/${selectedCourseModal.slug}`}
                      onClick={() => setSelectedCourseModal(null)}
                      className="text-xs font-bold text-[#214E34] dark:text-[#3AB09E] hover:underline"
                    >
                      Go to Full Course Page →
                    </Link>

                    <a
                      href={selectedCourseModal.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#214E34] hover:bg-[#193c28] text-white font-bold text-sm shadow-lg shadow-[#214E34]/25 text-center transition-all flex items-center justify-center gap-2"
                    >
                      {selectedCourseModal.type === 'free' ? (
                        <>Start Free Course Now</>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" /> Proceed to Checkout ({selectedCourseModal.price})
                        </>
                      )}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
