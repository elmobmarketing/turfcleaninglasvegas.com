import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { PHONE_NUMBER, PHONE_HREF, EMAIL } from '../data/services';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden py-24 md:py-32">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-turf/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-turf/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-turf/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8">
              <svg className="w-4 h-4 text-turf" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.828a1 1 0 101.415-1.414L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-white/90">We respond within 1 hour</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about our turf cleaning services? Ready to schedule?
            We're here to help with anything you need.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-midnight mb-2">Get in Touch</h2>
              <p className="text-gray-500 mb-8">Reach out through any of these channels.</p>

              <div className="space-y-4">
                {/* Phone Card */}
                <a
                  href={PHONE_HREF}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:border-turf/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-turf to-turf-light rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-midnight mb-1">Phone</h3>
                    <p className="text-turf font-bold text-lg group-hover:underline">{PHONE_NUMBER}</p>
                    <p className="text-sm text-gray-500 mt-0.5">Call us during business hours</p>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:border-turf/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-turf to-turf-light rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-midnight mb-1">Email</h3>
                    <p className="text-turf font-bold group-hover:underline">{EMAIL}</p>
                    <p className="text-sm text-gray-500 mt-0.5">We reply within 1 hour</p>
                  </div>
                </a>

                {/* Service Area Card */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-turf to-turf-light rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-midnight mb-1">Service Area</h3>
                    <p className="text-gray-700 font-medium">Las Vegas Valley</p>
                    <p className="text-sm text-gray-500 mt-0.5">Las Vegas, Henderson, Summerlin & more</p>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 p-6 bg-white rounded-2xl border border-gray-200"
              >
                <h3 className="text-lg font-bold text-midnight mb-5">Business Hours</h3>
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-2.5 text-gray-600">Monday - Friday</td>
                      <td className="py-2.5 text-right font-semibold text-midnight">7:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-gray-600">Saturday</td>
                      <td className="py-2.5 text-right font-semibold text-midnight">8:00 AM - 5:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-gray-600">Sunday</td>
                      <td className="py-2.5 text-right font-semibold text-gray-400">By Appointment</td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2">
                  <svg className="w-4 h-4 text-turf flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-turf font-semibold">
                    Emergency service available 7 days a week
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {submitted ? (
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-br from-turf to-turf-light p-8 text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/90 leading-relaxed">
                      Thank you for reaching out. We'll get back to you within 1 hour during business hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10"
                >
                  <h2 className="text-2xl font-bold text-midnight mb-1">Send us a Message</h2>
                  <p className="text-gray-500 mb-8">Fill out the form and we'll be in touch shortly.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3.5 bg-cream border border-gray-200 rounded-xl text-midnight placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-turf focus:border-transparent transition-all duration-200 outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 bg-cream border border-gray-200 rounded-xl text-midnight placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-turf focus:border-transparent transition-all duration-200 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(702) 555-1234"
                        className="w-full px-4 py-3.5 bg-cream border border-gray-200 rounded-xl text-midnight placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-turf focus:border-transparent transition-all duration-200 outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3.5 bg-cream border border-gray-200 rounded-xl text-midnight focus:bg-white focus:ring-2 focus:ring-turf focus:border-transparent transition-all duration-200 outline-none appearance-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="quote">Request a Quote</option>
                        <option value="question">General Question</option>
                        <option value="scheduling">Scheduling Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3.5 bg-cream border border-gray-200 rounded-xl text-midnight placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-turf focus:border-transparent transition-all duration-200 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-shimmer w-full bg-gradient-to-r from-turf to-turf-light text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-midnight mb-4">Prefer to Talk?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Give us a call for immediate assistance or to schedule your service.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-turf to-turf-light text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call {PHONE_NUMBER}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
