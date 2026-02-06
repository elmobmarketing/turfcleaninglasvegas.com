import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PHONE_NUMBER, PHONE_HREF } from '../data/services';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-dark text-white py-24 md:py-32 relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-turf/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-[15%] w-80 h-80 bg-turf/8 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-[60%] w-48 h-48 bg-amber/6 rounded-full blur-2xl animate-float" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-turf rounded-full" />
              <span className="text-sm text-white/80 font-medium">Est. Las Vegas</span>
            </div>

            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              About{' '}
              <span className="text-gradient">Turf Cleaning</span>{' '}
              Las Vegas
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Your local experts in artificial grass care. We are committed to keeping
              Las Vegas lawns clean, safe, and beautiful with desert-proven methods
              and eco-friendly solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <h2 className="heading-section text-3xl md:text-4xl font-bold text-midnight mb-6">Our Story</h2>
              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  Turf Cleaning Las Vegas was born from a simple observation: with over
                  40% of Las Vegas homes now featuring artificial turf, there was a
                  growing need for specialized cleaning services that understood the
                  unique challenges of desert living.
                </p>
                <p>
                  As pet owners ourselves, we experienced firsthand the struggle of
                  keeping synthetic grass fresh and odor-free in the intense Nevada heat.
                  After trying every DIY solution with disappointing results, we developed
                  our own proprietary cleaning process specifically designed for the
                  Las Vegas climate.
                </p>
                <p>
                  Today, we have helped over 1,200 Las Vegas families enjoy cleaner,
                  healthier outdoor spaces. Our team combines cutting-edge equipment
                  with eco-friendly solutions to deliver results that speak for themselves.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-turf/15 to-amber/15 rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: '1,200+', label: 'Properties Cleaned' },
                  { value: '4.9', label: 'Star Rating' },
                  { value: '100%', label: 'Satisfaction Rate' },
                  { value: '5+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-turf mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div className="text-center mb-14" {...fadeUp}>
            <span className="section-tag">
              Our Values
            </span>
            <h2 className="heading-section text-3xl md:text-4xl font-bold text-midnight">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Results Guaranteed',
                description:
                  'We stand behind our work with a 100-day odor elimination guarantee. If the smell returns, so do we at no additional charge.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
              {
                title: 'Safety First',
                description:
                  'Every product we use is 100% non-toxic and biodegradable. Safe for your kids, pets, and our desert environment.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                ),
              },
              {
                title: 'Community Focused',
                description:
                  'We live and work in Las Vegas. Supporting local businesses and giving back to our community is part of who we are.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                ),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="card-glow p-8 border border-gray-200"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-turf to-turf-light rounded-2xl flex items-center justify-center mb-5">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {value.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-midnight mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Desert Expertise */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Dark card with challenges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-midnight rounded-2xl p-8 md:p-10 text-white"
            >
              <h3 className="text-2xl font-bold mb-8">Desert Climate Challenges</h3>
              <ul className="space-y-6">
                {[
                  {
                    challenge: 'Extreme Heat',
                    detail: 'Intensifies odors and breaks down inferior cleaning products',
                  },
                  {
                    challenge: 'Low Humidity',
                    detail: 'Causes infill to dry out and become dusty',
                  },
                  {
                    challenge: 'Dust Storms',
                    detail: 'Deposits fine particles deep into turf fibers',
                  },
                  {
                    challenge: 'Intense UV',
                    detail: 'Degrades turf and requires UV-stable treatments',
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg
                        className="w-6 h-6 text-amber"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{item.challenge}</div>
                      <div className="text-gray-400 text-sm mt-1">{item.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Expertise text */}
            <motion.div {...fadeUp}>
              <h2 className="heading-section text-3xl md:text-4xl font-bold text-midnight mb-6">
                Why Local Expertise Matters
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Generic turf cleaning solutions developed for mild climates simply do not
                work in Las Vegas. Our products and techniques are specifically formulated
                to perform in temperatures exceeding 110 degrees while remaining safe for
                families and pets.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We have invested years in understanding how the desert climate affects
                artificial turf, from the way heat accelerates bacterial growth to how
                dust storms compact infill material. This knowledge allows us to deliver
                superior results that generic services cannot match.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-turf font-semibold text-lg hover:underline group"
              >
                Learn About Our Services
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div className="text-center mb-12" {...fadeUp}>
            <h2 className="heading-section text-3xl md:text-4xl font-bold text-midnight mb-4">
              Licensed & Trusted Professionals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your property is in safe hands. We maintain full liability insurance
              and all necessary business licenses to operate in Clark County.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                label: 'Licensed',
                icon: (
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                ),
              },
              {
                label: 'Insured',
                icon: (
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                ),
              },
              {
                label: 'Background Checked',
                icon: (
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                ),
              },
              {
                label: 'Trained',
                icon: (
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm"
              >
                <svg
                  className="w-10 h-10 text-turf mx-auto mb-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {item.icon}
                </svg>
                <div className="font-semibold text-midnight">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark py-20 md:py-24 relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        {/* Floating orbs */}
        <div className="absolute top-10 right-[20%] w-72 h-72 bg-turf/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-[10%] w-56 h-56 bg-turf/8 rounded-full blur-3xl animate-float" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join over 1,200 Las Vegas homeowners who trust us with their turf.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/quote"
                className="btn-shimmer inline-block bg-gradient-to-r from-turf to-turf-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-transform hover:scale-105"
              >
                Get Free Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="glass inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
