import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services, PHONE_NUMBER, PHONE_HREF } from '../data/services';

const serviceIcons: Record<string, JSX.Element> = {
  refresh: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  restore: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  deep: (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
};

const processSteps = [
  {
    step: 1,
    title: 'Inspect',
    description: 'Thorough assessment of turf condition, identifying problem areas and customizing our approach.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: 2,
    title: 'Clean',
    description: 'Remove debris, pet waste, and buildup using professional-grade equipment and eco-friendly solutions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: 'Treat',
    description: 'Apply antimicrobial treatments to eliminate bacteria, odors, and restore freshness.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    step: 4,
    title: 'Restore',
    description: 'Brush, fluff, and redistribute infill to bring back that like-new appearance and feel.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const addons = [
  {
    name: 'Monthly Maintenance Plan',
    description: 'Keep your turf pristine year-round with scheduled cleanings tailored to your needs.',
    badge: 'Save 20%',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Commercial Turf Cleaning',
    description: 'For businesses, HOAs, and commercial properties requiring professional-grade results.',
    badge: 'Custom Quote',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: 'Emergency Pet Cleanup',
    description: 'Urgent odor and waste removal when you need it most. Fast response guaranteed.',
    badge: 'Same Day',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden py-24 md:py-32">
        {/* Grid pattern overlay */}
        <div className="grid-pattern" />

        {/* Floating orbs */}
        <div className="absolute top-16 left-[10%] w-72 h-72 bg-turf/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-12 right-[15%] w-96 h-96 bg-turf/8 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-midnight-light/30 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Section label badge */}
            <span className="section-tag">
              Our Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Professional Turf Cleaning{' '}
              <span className="text-gradient">Built for Las Vegas</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              From routine maintenance to complete restoration, we deliver
              comprehensive artificial grass cleaning solutions engineered for
              the desert climate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">
              Choose Your Plan
            </span>
            <h2 className="heading-section">
              Three tiers, one standard:{' '}
              <span className="text-gradient">exceptional.</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-8 lg:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className={`relative rounded-2xl p-8 md:p-10 transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-br from-midnight to-midnight-light text-white ring-2 ring-turf shadow-2xl'
                    : 'bg-cream border border-gray-200 hover:border-gray-300 hover:shadow-lg'
                }`}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-8 inline-flex items-center bg-gradient-to-r from-turf to-turf-light text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                  <div>
                    <div className="flex items-start gap-5 mb-6">
                      {/* Icon circle */}
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                          service.popular
                            ? 'bg-gradient-to-br from-turf to-turf-light'
                            : 'bg-gradient-to-br from-midnight to-midnight-light'
                        }`}
                      >
                        {serviceIcons[service.id]}
                      </div>

                      <div>
                        <h3
                          className={`text-2xl md:text-3xl font-black mb-1 ${
                            service.popular ? 'text-white' : 'text-midnight'
                          }`}
                        >
                          {service.name}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm text-gray-400">Starting at</span>
                          <span
                            className={`text-3xl md:text-4xl font-black ${
                              service.popular ? 'text-turf-light' : 'text-turf'
                            }`}
                          >
                            ${service.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p
                      className={`text-base md:text-lg mb-6 max-w-xl ${
                        service.popular ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <svg
                            className={`w-5 h-5 flex-shrink-0 ${
                              service.popular ? 'text-turf-light' : 'text-turf'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span
                            className={`text-sm md:text-base ${
                              service.popular ? 'text-gray-200' : 'text-gray-700'
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex md:flex-col md:items-end gap-4 md:pt-4">
                    <Link
                      to="/quote"
                      className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                        service.popular
                          ? 'bg-gradient-to-r from-turf to-turf-light text-white btn-shimmer hover:shadow-lg hover:shadow-turf/25'
                          : 'border-2 border-midnight text-midnight hover:bg-midnight hover:text-white'
                      }`}
                    >
                      Get Free Quote
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">
              How It Works
            </span>
            <h2 className="heading-section mb-4">
              Four steps to <span className="text-gradient">pristine turf</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results every time.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-gradient-to-r from-turf/20 via-turf to-turf/20" />

            <motion.div
              className="grid md:grid-cols-4 gap-8 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {processSteps.map((item) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="relative text-center"
                >
                  {/* Numbered circle */}
                  <div className="relative mx-auto mb-6 w-24 h-24">
                    <div className="absolute inset-0 bg-turf/10 rounded-full animate-glow-green" />
                    <div className="relative w-full h-full bg-gradient-to-br from-turf to-turf-light rounded-full flex items-center justify-center text-white shadow-lg">
                      <span className="text-2xl font-black">{item.step}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-midnight mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">
              Add-Ons
            </span>
            <h2 className="heading-section">
              Additional Services
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {addons.map((addon) => (
              <motion.div
                key={addon.name}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="card-glow rounded-2xl p-8 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-turf/10 to-turf/5 flex items-center justify-center text-turf mb-5">
                  {addon.icon}
                </div>

                <h3 className="text-lg font-black text-midnight mb-2">
                  {addon.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {addon.description}
                </p>

                {/* Badge */}
                <span className="inline-flex items-center bg-turf/10 text-turf text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full">
                  {addon.badge}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark relative overflow-hidden py-20 md:py-28">
        {/* Grid pattern overlay */}
        <div className="grid-pattern" />

        {/* Floating orbs */}
        <div className="absolute top-10 right-[20%] w-64 h-64 bg-turf/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-[10%] w-80 h-80 bg-turf/8 rounded-full blur-3xl animate-float" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Not sure which service you need?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Our team will assess your turf and recommend the best solution for
              your specific needs. Free estimates, no obligation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-turf to-turf-light text-white px-10 py-4 rounded-xl font-semibold text-lg btn-shimmer hover:shadow-lg hover:shadow-turf/25 transition-shadow duration-300"
              >
                Get Free Assessment
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <a
                href={PHONE_HREF}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 glass text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/15 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
