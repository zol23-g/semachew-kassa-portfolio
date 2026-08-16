'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VideoItem } from '@/types/portfolio';
import { Play, Clock, Calendar, ExternalLink, X, Video as VideoIcon } from 'lucide-react';

interface VideosProps {
  data: VideoItem[];
}

export const Videos: React.FC<VideosProps> = ({ data }) => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section id="videos" className="py-20 md:py-28 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Talks, Keynotes & Tutorials"
          title="Video Lectures & Presentations"
          subtitle="Watch recorded conference keynotes, workshop tutorials, paper presentations, and research talks."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Thumbnail Container */}
              <div
                onClick={() => setActiveVideo(video)}
                className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer group"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center group-hover:bg-slate-950/20 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-indigo-600 dark:bg-teal-500 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/80 text-white text-[10px] font-bold flex items-center gap-1 backdrop-blur-xs">
                  <Clock className="w-3 h-3" /> {video.duration}
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-indigo-100 dark:bg-teal-950 text-indigo-700 dark:text-teal-300">
                      {video.type}
                    </span>
                    <span>{video.date}</span>
                  </div>

                  <h3
                    onClick={() => setActiveVideo(video)}
                    className="text-base font-bold text-slate-900 dark:text-white cursor-pointer hover:text-indigo-600 dark:hover:text-teal-400 transition-colors leading-snug"
                  >
                    {video.title}
                  </h3>

                  <p className="text-xs text-indigo-600 dark:text-teal-400 font-semibold">
                    {video.event}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="text-xs font-bold text-indigo-600 dark:text-teal-400 flex items-center gap-1 hover:underline"
                  >
                    <Play className="w-3.5 h-3.5" /> Watch Video
                  </button>

                  {video.slidesUrl && (
                    <a
                      href={video.slidesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    >
                      Download Slides
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {activeVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-4 p-4 md:p-6"
              >
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-lg font-bold">{activeVideo.title}</h3>
                    <p className="text-xs text-teal-400">{activeVideo.event}</p>
                  </div>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
                  <iframe
                    src={activeVideo.embedUrl}
                    title={activeVideo.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
