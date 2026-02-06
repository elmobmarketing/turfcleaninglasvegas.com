import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { services, serviceAreas, PHONE_NUMBER, PHONE_HREF } from '../data/services';
import { LeadForm } from '../components/LeadForm';
import { useSEO } from '../hooks/useSEO';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const tickerItems = [
  'Same-Day Service Available',
  'Pet & Kid Safe Products',
  'Locally Owned & Operated',
  'Free Estimates',
  'Licensed & Insured',
  'Satisfaction Guaranteed',
  'Eco-Friendly Products',
  'Serving All of Las Vegas Valley',
];

export function Home() {
  useSEO({
    title: 'Turf Cleaning Las Vegas | Professional Artificial Grass Cleaning',
    description: 'Professional artificial turf cleaning in Las Vegas. Pet odor removal, deep cleaning, and maintenance. Safe for kids and pets. Same-day service available. Free quotes - Call (702) 819-7749',
    canonical: '/',
  });

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="hero-dark min-h-[100vh] flex flex-col justify-center text-white overflow-hidden relative">
        {/* Hero background image */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <img
            src="/images/turf/hero-turf-closeup.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/85 to-midnight/70" />
        </div>

        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
          <div className="orb w-[500px] h-[500px] bg-turf/12 top-[-10%] right-[-10%] animate-blob" />
          <div className="orb w-[400px] h-[400px] bg-turf/8 bottom-[10%] left-[-5%] animate-float-slow" />
          <div className="orb w-[300px] h-[300px] bg-amber/5 top-[40%] left-[30%] animate-float-reverse" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" style={{ zIndex: 2 }} />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-6xl mx-auto px-4 py-20 md:py-0 relative"
          initial={false}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center" style={{ zIndex: 10, position: 'relative' }}>
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Pill badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="inline-flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm mb-8"
              >
                <svg className="w-4 h-4 text-turf-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/70 font-medium">Locally Owned &amp; Operated in Las Vegas</span>
              </motion.div>

              <h1 className="heading-display text-white mb-6">
                Fresh Turf,{' '}
                <span className="text-gradient-light">Zero Odor.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
                Las Vegas pet owners trust us to eliminate odors, kill bacteria,
                and bring their artificial grass back to life. Eco-friendly
                products, same-day service, real results.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {['Same-Day Service', 'Satisfaction Guaranteed', 'Eco-Friendly', 'Pet Safe'].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 bg-white/[0.04] border border-white/8 rounded-full px-3.5 py-1.5">
                    <svg className="w-3.5 h-3.5 text-turf-light" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-white/60 font-medium">{badge}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/quote"
                  className="btn-shimmer bg-gradient-to-r from-turf to-turf-light text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-turf/25 hover:shadow-2xl hover:shadow-turf/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Free Quote
                </Link>
                <a
                  href={PHONE_HREF}
                  className="btn-outline px-8 py-4 rounded-2xl text-lg flex items-center gap-2.5"
                >
                  <div className="relative">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-turf-light rounded-full animate-pulse" />
                  </div>
                  {PHONE_NUMBER}
                </a>
              </div>
            </motion.div>

            {/* Right - Lead form card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-turf/20 via-transparent to-amber/10 rounded-[2rem] blur-2xl" />
                <div className="relative bg-white rounded-[1.75rem] overflow-hidden shadow-2xl shadow-black/30">
                  <div className="text-center px-5 pt-5 pb-1">
                    <div className="inline-flex items-center gap-2 bg-turf-50 text-turf text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-turf opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-turf" />
                      </span>
                      Responding Now
                    </div>
                    <h2 className="text-xl font-black text-midnight">Get Your Free Quote</h2>
                    <p className="text-gray-400 text-xs mt-0.5">We respond as soon as we can during business hours</p>
                  </div>
                  <LeadForm source="homepage-hero" compact />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Social Proof Ticker */}
      <div className="bg-midnight py-3.5 border-y border-white/5 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker-content">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 mx-6 text-sm text-gray-400 font-medium whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-turf/60 flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats with counters */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { value: 56, suffix: '', label: 'Areas Served' },
              { value: 3, suffix: '', label: 'Service Tiers' },
              { value: 100, suffix: '%', label: 'Pet Safe Products' },
              { value: 100, suffix: '%', label: 'Satisfaction Guarantee' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-midnight tracking-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services - Bento Cards */}
      <section className="py-20 md:py-28 bg-cream relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Our Services</span>
            <h2 className="heading-section text-midnight">
              Choose the right clean for your turf.
            </h2>
            <p className="text-lg text-gray-500 mt-4 max-w-xl">
              Whether you need a quick refresh or a full restoration, we have a
              service level that fits your situation and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className={`relative rounded-2xl p-7 transition-all duration-500 group ${
                  service.popular
                    ? 'bg-midnight text-white ring-1 ring-turf/30 shadow-2xl'
                    : 'bg-white border border-gray-200/80 card-lift'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-block bg-gradient-to-r from-turf to-turf-light text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase shadow-lg shadow-turf/25">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-5 mt-1">
                  <h3 className={`text-xl font-bold mb-1 ${service.popular ? 'text-white' : 'text-midnight'}`}>
                    {service.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-xs font-medium ${service.popular ? 'text-gray-400' : 'text-gray-400'}`}>From</span>
                    <span className={`text-4xl font-black ${service.popular ? 'text-turf-light' : 'text-midnight'}`}>
                      ${service.price}
                    </span>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed mb-6 ${service.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-7">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm gap-2.5">
                      <svg className={`w-4 h-4 flex-shrink-0 ${service.popular ? 'text-turf-light' : 'text-turf'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={service.popular ? 'text-gray-200' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/quote"
                  className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                    service.popular
                      ? 'btn-shimmer bg-gradient-to-r from-turf to-turf-light text-white shadow-lg shadow-turf/25 hover:-translate-y-0.5'
                      : 'bg-midnight text-white hover:-translate-y-0.5 shadow-lg shadow-midnight/10'
                  }`}
                >
                  Get Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Results */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Real Results</span>
            <h2 className="heading-section text-midnight">
              See the transformation.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                label: 'Pet Odor Removal',
                before: 'Strong ammonia smell, discolored turf',
                after: 'Fresh, odor-free lawn safe for the whole family',
                location: 'Summerlin Home',
                color: 'from-red-500 to-turf',
              },
              {
                label: 'Deep Restoration',
                before: 'Matted, compacted fibers with embedded debris',
                after: 'Fluffy, upright blades that look brand new',
                location: 'Henderson Backyard',
                color: 'from-orange-500 to-turf',
              },
              {
                label: 'Stain Removal',
                before: 'Visible stains and discoloration throughout',
                after: 'Even color and clean surface restored',
                location: 'North Las Vegas',
                color: 'from-amber to-turf',
              },
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="card-glow rounded-2xl overflow-hidden border border-gray-100"
              >
                <div className={`h-1 bg-gradient-to-r ${result.color}`} />
                <div className="p-7">
                  <span className="inline-block bg-turf-50 text-turf text-[11px] font-bold px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
                    {result.label}
                  </span>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-red-50/60 rounded-xl p-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{result.before}</p>
                    </div>
                    <div className="flex items-start gap-3 bg-turf-50/60 rounded-xl p-3">
                      <div className="w-6 h-6 rounded-full bg-turf/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-turf" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-midnight text-sm font-medium leading-relaxed">{result.after}</p>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-xs text-gray-400">{result.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-midnight text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-midnight/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Bento Layout */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Why Us</span>
            <h2 className="heading-section text-midnight">
              Built for the desert.
            </h2>
            <p className="text-lg text-gray-500 mt-4 max-w-xl">
              We are not a generic cleaning company. Everything we do is
              engineered for the Mojave Desert climate.
            </p>
          </motion.div>

          <div className="bento-grid">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                title: 'Pet Odor Elimination',
                description: 'Our professional-grade treatment targets pet odors at the source. If you are not satisfied, we will reclean at no charge.',
                span: false,
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                ),
                title: 'Desert Climate Experts',
                description: 'Specialized treatments for extreme heat, dust storms, and UV damage unique to Las Vegas.',
                span: true,
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
                title: 'Same-Day Service',
                description: 'Book today, clean today. Flexible appointments that work around your schedule.',
                span: true,
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: '100% Eco-Friendly',
                description: 'Non-toxic, biodegradable products safe for kids, pets, and our desert environment.',
                span: false,
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: 'Locally Owned',
                description: 'We live here, we work here, we care about our Las Vegas community.',
                span: false,
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Upfront Pricing',
                description: 'No hidden fees, no surprises. Get your exact quote before we start.',
                span: false,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`card-glow bg-white rounded-2xl p-7 border border-gray-100 ${item.span ? 'bento-span-2' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="w-11 h-11 bg-gradient-to-br from-turf to-turf-light rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-turf/15">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-base font-bold text-midnight mb-1.5">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag justify-center">Coverage</span>
            <h2 className="heading-section text-midnight">
              Serving all of Las Vegas Valley.
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
              >
                <Link
                  to={`/areas/${area.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-midnight hover:text-white text-midnight border border-gray-200 hover:border-midnight rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 group shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 text-turf group-hover:text-turf-light transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {area.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag justify-center">Who We Help</span>
            <h2 className="heading-section text-midnight">
              Turf cleaning for every situation.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: 'Pet Owners',
                text: 'Dogs and cats leave behind odors that build up fast in the Las Vegas heat. We eliminate the smell at the source so your backyard stays fresh between cleanings.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                ),
              },
              {
                title: 'Families with Kids',
                text: 'Your kids play on that turf every day. We use non-toxic, eco-friendly products that kill bacteria and sanitize the surface without leaving harsh chemical residue.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
              },
              {
                title: 'HOA & Commercial',
                text: 'Common areas, dog parks, and commercial turf take a beating. We offer scheduled maintenance plans to keep high-traffic areas clean and presentable year-round.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glow bg-white rounded-2xl p-7 border border-gray-100 relative"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-turf to-turf-light rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-turf/15">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>

                <h3 className="text-base font-bold text-midnight mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag justify-center">Our Work</span>
            <h2 className="heading-section text-midnight">
              Real Las Vegas properties we service.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { src: '/images/turf/desert-landscape-turf.webp', alt: 'Clean artificial turf with desert landscaping in Las Vegas', span: false },
              { src: '/images/turf/upscale-backyard-patio.webp', alt: 'Upscale Las Vegas backyard with pristine artificial turf', span: true },
              { src: '/images/turf/turf-pool-area.webp', alt: 'Artificial turf next to pool area in Las Vegas home', span: false },
              { src: '/images/turf/family-backyard-swingset.webp', alt: 'Family backyard with clean turf and play area', span: false },
              { src: '/images/turf/putting-green-palms.webp', alt: 'Putting green with palm trees in Las Vegas', span: false },
              { src: '/images/turf/backyard-gravel-border.webp', alt: 'Large turf area with gravel border and patio furniture', span: true },
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`overflow-hidden rounded-2xl ${photo.span ? 'md:col-span-2' : ''}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-dark py-24 md:py-32 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <img
            src="/images/turf/backyard-curved-patio.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-midnight/90" />
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
          <div className="orb w-96 h-96 bg-turf/10 top-[-10%] left-[20%] animate-float-slow" />
          <div className="orb w-72 h-72 bg-amber/5 bottom-[-10%] right-[10%] animate-float" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" style={{ zIndex: 2 }} />

        <div className="max-w-4xl mx-auto px-4 text-center relative" style={{ zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-display text-white mb-6">
              Ready for a<br />
              <span className="text-gradient-light">cleaner turf?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">
              Get your free quote today. Same-day appointments available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/quote"
                className="btn-shimmer bg-gradient-to-r from-turf to-turf-light text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-turf/30 hover:shadow-2xl hover:shadow-turf/40 hover:-translate-y-1 transition-all duration-300"
              >
                Get Free Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="btn-outline px-10 py-5 rounded-2xl text-lg flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
