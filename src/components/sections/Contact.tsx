'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactDetails, SocialLinks } from '@/types/portfolio';
import { Mail, MapPin, Building2, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactProps {
  data: ContactDetails;
  socials: SocialLinks;
}

export const Contact: React.FC<ContactProps> = ({ data, socials }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Academic Collaboration Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Academic Collaboration Inquiry', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#0b1410] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get in Touch"
          title="Contact & Academic Inquiry"
          subtitle="Interested in joint research, prospective graduate study, keynote invitations, or academic consulting? Send a message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office & Professional Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Office Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#DBE9EE] dark:bg-[#3AB09E]/15 text-[#214E34] dark:text-[#3AB09E] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">Direct Email</span>
                    <a href={`mailto:${data.email}`} className="font-semibold text-slate-900 dark:text-white hover:text-[#214E34] dark:hover:text-[#3AB09E] transition-colors">
                      {data.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#DBE9EE] dark:bg-[#3AB09E]/15 text-[#214E34] dark:text-[#3AB09E] shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">Office Location</span>
                    <p className="font-semibold text-slate-900 dark:text-white">{data.office}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{data.building}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{data.institution}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#DBE9EE] dark:bg-[#3AB09E]/15 text-[#214E34] dark:text-[#3AB09E] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">Postal Address</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{data.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#DBE9EE] dark:bg-[#3AB09E]/15 text-[#214E34] dark:text-[#3AB09E] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">Student Office Hours</span>
                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300">{data.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview Card */}
            <div className="p-2 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <iframe
                src={data.mapEmbedUrl}
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '1.25rem' }}
                allowFullScreen={false}
                loading="lazy"
                title="Office Campus Location Map"
              />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#DBE9EE] dark:bg-[#3AB09E]/15 text-[#214E34] dark:text-[#3AB09E]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Fill out the form below to initiate academic or research correspondence.
                  </p>
                </div>
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-[#3AB09E]/10 border border-[#3AB09E]/30 text-slate-800 dark:text-slate-200 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3AB09E] shrink-0" />
                  <div>
                    <span className="font-bold block">Message Sent Successfully!</span>
                    Thank you for reaching out. Dr. Kassa or lab coordinator will respond promptly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Prof. Alan Turing"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#214E34] dark:focus:ring-[#3AB09E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alan.turing@university.edu"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#214E34] dark:focus:ring-[#3AB09E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Subject / Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#214E34] dark:focus:ring-[#3AB09E]"
                  >
                    <option value="Academic Collaboration Inquiry">Research Collaboration</option>
                    <option value="Prospective PhD/Graduate Student">Prospective PhD / Postdoc Application</option>
                    <option value="Keynote / Talk Invitation">Keynote / Guest Lecture Invitation</option>
                    <option value="Peer Review / Journal Inquiry">Editorial / Review Request</option>
                    <option value="General Inquiry">General Academic Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please state the purpose of your message..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#214E34] dark:focus:ring-[#3AB09E]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#214E34] hover:bg-[#193c28] text-white font-bold text-sm shadow-lg shadow-[#214E34]/25 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Academic Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
