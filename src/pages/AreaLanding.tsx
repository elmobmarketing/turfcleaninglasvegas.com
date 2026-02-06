import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { serviceAreas, services, PHONE_NUMBER, PHONE_HREF, EMAIL } from '../data/services';
import { LeadForm } from '../components/LeadForm';

export function AreaLanding() {
  const { slug } = useParams<{ slug: string }>();
  const area = serviceAreas.find((a) => a.slug === slug);

  useEffect(() => {
    if (!area) return;

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `Turf Cleaning Las Vegas - ${area.name}`,
      description: area.description,
      telephone: PHONE_NUMBER,
      email: EMAIL,
      url: `https://turfcleaninglasvegas.com/areas/${area.slug}`,
      areaServed: {
        '@type': 'Place',
        name: `${area.name}, Nevada`,
      },
      service: services.map((s) => ({
        '@type': 'Service',
        name: s.name,
        description: s.description,
        offers: {
          '@type': 'Offer',
          price: s.price,
          priceCurrency: 'USD',
        },
      })),
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `How much does turf cleaning cost in ${area.name}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Our ${area.name} turf cleaning services start at $${services[0].price} for a Refresh Clean. Restore Clean starts at $${services[1].price}, and our comprehensive Deep Clean starts at $${services[2].price}. Final pricing depends on your turf area size. We provide free, no-obligation quotes.`,
          },
        },
        {
          '@type': 'Question',
          name: `Do you charge travel fees for ${area.name}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `No! ${area.name} is within our standard service area. There are zero travel fees or surcharges. The price we quote is the price you pay.`,
          },
        },
        {
          '@type': 'Question',
          name: `How often should I clean my artificial turf in ${area.name}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `For ${area.name} properties, we recommend a Refresh Clean every 3-4 months for general maintenance. If you have pets, a monthly or bi-monthly Restore Clean keeps odors and bacteria under control. The desert dust in the Las Vegas Valley means more frequent cleaning may be needed after wind events.`,
          },
        },
        {
          '@type': 'Question',
          name: 'Is your turf cleaning safe for pets and kids?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. All our cleaning solutions are pet-safe and child-friendly. We use eco-friendly, non-toxic products that effectively eliminate odors and bacteria without harsh chemicals. Your family and pets can use the turf immediately after we finish.',
          },
        },
        {
          '@type': 'Question',
          name: `Can you clean commercial artificial turf in ${area.name}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Yes, we service commercial properties throughout ${area.name} including HOA common areas, business courtyards, apartment complexes, daycares, and sports facilities. We offer custom commercial cleaning plans and volume discounts.`,
          },
        },
        {
          '@type': 'Question',
          name: `How do I book a turf cleaning in ${area.name}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `You can get a free quote by filling out the form on this page, calling us at ${PHONE_NUMBER}, or emailing ${EMAIL}. We offer same-day and next-day appointments throughout ${area.name}.`,
          },
        },
      ],
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    document.title = `Turf Cleaning in ${area.name} | Artificial Grass Cleaning ${area.name}, NV`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `Professional artificial turf cleaning in ${area.name}, NV. Pet odor removal, deep cleaning & maintenance. Serving ${area.zip}. Free quotes!`);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://turfcleaninglasvegas.com/areas/${area.slug}`);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.title = 'Turf Cleaning Las Vegas';
      if (canonical) {
        canonical.setAttribute('href', 'https://turfcleaninglasvegas.com');
      }
    };
  }, [area]);

  if (!area) return <Navigate to="/areas" replace />;

  const nearbyAreas = area.nearby
    .map((s) => serviceAreas.find((a) => a.slug === s))
    .filter(Boolean);

  return (
    <div>
      {/* Hero */}
      <section className="hero-dark text-white overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-turf/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-[15%] w-96 h-96 bg-turf/5 rounded-full blur-3xl animate-float-slow" />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm">
                <svg className="w-4 h-4 text-turf-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Serving {area.name}, NV
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Turf Cleaning in{' '}
                <span className="text-gradient">{area.name}</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                {area.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_HREF}
                  className="btn-shimmer inline-flex items-center justify-center gap-2 bg-gradient-to-r from-turf to-turf-light text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-turf/25 hover:shadow-xl hover:shadow-turf/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {PHONE_NUMBER}
                </a>
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 glass-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Free Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Lead Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-turf/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="bg-midnight px-6 py-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg">Free Quote for {area.name}</h3>
                      <p className="text-gray-400 text-sm">No obligation, fast response</p>
                    </div>
                    <div className="flex items-center gap-2 text-turf-light text-sm">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-turf opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-turf-light" />
                      </span>
                      Responding Now
                    </div>
                  </div>
                  <LeadForm compact />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="relative z-10 -mt-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: '100%', label: 'Pet Safe' },
                { icon: '56+', label: 'Areas Served' },
                { icon: '100%', label: 'Satisfaction' },
                { icon: 'Same Day', label: 'Service Available' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-turf">{stat.icon}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-turf font-bold text-sm tracking-widest uppercase">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-black text-midnight mt-3 mb-4">
              Turf Cleaning Services in {area.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the level of cleaning your {area.name} turf needs. All services include a satisfaction guarantee.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card-glow rounded-2xl p-8 border-2 transition-all ${
                  service.popular
                    ? 'border-turf bg-turf/5 relative'
                    : 'border-gray-100 bg-white'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-turf to-turf-light text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular in {area.name}
                  </div>
                )}
                <h3 className="text-xl font-bold text-midnight mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-midnight">${service.price}</span>
                  <span className="text-gray-400 ml-1">starting</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-turf flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/quote"
                  className={`block text-center py-3.5 rounded-xl font-bold transition-all ${
                    service.popular
                      ? 'btn-shimmer bg-gradient-to-r from-turf to-turf-light text-white shadow-lg shadow-turf/20 hover:shadow-xl'
                      : 'bg-midnight/5 text-midnight hover:bg-midnight hover:text-white'
                  }`}
                >
                  Get {service.shortName} Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for [Area] */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-turf font-bold text-sm tracking-widest uppercase">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-black text-midnight mt-3 mb-4">
              Why {area.name} Homeowners Choose Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: `Local ${area.name} Experts`,
                desc: `We know ${area.name} inside and out. Our team understands the specific turf challenges in your neighborhood, from HOA requirements to desert dust buildup.`,
                icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
              },
              {
                title: 'Pet-Safe Cleaning',
                desc: 'Our eco-friendly cleaning solutions eliminate odors and bacteria while remaining completely safe for your pets and children to enjoy immediately after cleaning.',
                icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
              },
              {
                title: 'Same-Day Service',
                desc: `Need your ${area.name} turf cleaned today? We offer same-day and next-day appointments throughout the Las Vegas Valley with no extra rush fees.`,
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'No Travel Fees',
                desc: `There are no extra charges for ${area.name} service calls. Your quote covers everything, with transparent pricing and zero hidden fees.`,
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'Satisfaction Guarantee',
                desc: 'If you\'re not 100% happy with our turf cleaning results, we\'ll come back and reclean at no additional charge. Your satisfaction is our priority.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
              {
                title: 'Licensed & Insured',
                desc: `We carry full liability insurance for every job in ${area.name}. Your property is protected, and our technicians are background-checked professionals.`,
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-turf/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-turf to-turf-light rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-turf/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-midnight mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-turf font-bold text-sm tracking-widest uppercase">Local Service</span>
              <h2 className="text-3xl md:text-4xl font-black text-midnight mt-3 mb-6">
                Professional Turf Care for {area.name} Properties
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {area.description}
              </p>
              <div className="mb-8">
                <h3 className="font-bold text-midnight mb-3">Areas we serve in {area.name}:</h3>
                <div className="flex flex-wrap gap-2">
                  {area.highlights.map((h) => (
                    <span key={h} className="bg-turf/10 text-turf text-sm font-medium px-3 py-1.5 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">ZIP Codes Served: </span>
                {area.zip}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-midnight rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">What {area.name} Customers Say</h3>
              <div className="space-y-6">
                <div className="glass p-5 rounded-xl">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "Best turf cleaning service in {area.name}! Our backyard looks brand new after their deep clean. The pet odors are completely gone."
                  </p>
                  <p className="text-gray-400 text-xs mt-3">- Verified {area.name} Customer</p>
                </div>
                <div className="glass p-5 rounded-xl">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "They were on time, professional, and the price was exactly what they quoted. Highly recommend for anyone in {area.name}."
                  </p>
                  <p className="text-gray-400 text-xs mt-3">- Verified {area.name} Customer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-turf font-bold text-sm tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-midnight mt-3 mb-4">
              Turf Cleaning Questions from {area.name} Residents
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: `How much does turf cleaning cost in ${area.name}?`,
                a: `Our ${area.name} turf cleaning services start at $${services[0].price} for a Refresh Clean. Restore Clean starts at $${services[1].price}, and our comprehensive Deep Clean starts at $${services[2].price}. Final pricing depends on your turf area size. We provide free, no-obligation quotes.`,
              },
              {
                q: `Do you charge travel fees for ${area.name}?`,
                a: `No! ${area.name} is within our standard service area. There are zero travel fees or surcharges. The price we quote is the price you pay.`,
              },
              {
                q: `How often should I clean my artificial turf in ${area.name}?`,
                a: `For ${area.name} properties, we recommend a Refresh Clean every 3-4 months for general maintenance. If you have pets, a monthly or bi-monthly Restore Clean keeps odors and bacteria under control. The desert dust in the Las Vegas Valley means more frequent cleaning may be needed after wind events.`,
              },
              {
                q: 'Is your turf cleaning safe for pets and kids?',
                a: 'Absolutely. All our cleaning solutions are pet-safe and child-friendly. We use eco-friendly, non-toxic products that effectively eliminate odors and bacteria without harsh chemicals. Your family and pets can use the turf immediately after we finish.',
              },
              {
                q: `Can you clean commercial artificial turf in ${area.name}?`,
                a: `Yes, we service commercial properties throughout ${area.name} including HOA common areas, business courtyards, apartment complexes, daycares, and sports facilities. We offer custom commercial cleaning plans and volume discounts.`,
              },
              {
                q: `How do I book a turf cleaning in ${area.name}?`,
                a: `You can get a free quote by filling out the form on this page, calling us at ${PHONE_NUMBER}, or emailing ${EMAIL}. We offer same-day and next-day appointments throughout ${area.name}.`,
              },
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-midnight hover:text-turf transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 flex-shrink-0 ml-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas - Internal Linking */}
      {nearbyAreas.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-turf font-bold text-sm tracking-widest uppercase">Nearby Areas</span>
              <h2 className="text-3xl md:text-4xl font-black text-midnight mt-3 mb-4">
                Also Serving Communities Near {area.name}
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nearbyAreas.map((nearby) => (
                <Link
                  key={nearby!.slug}
                  to={`/areas/${nearby!.slug}`}
                  className="group bg-cream rounded-xl p-5 border border-gray-200 hover:border-turf hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-turf/10 rounded-lg flex items-center justify-center group-hover:bg-turf/20 transition-colors">
                      <svg className="w-5 h-5 text-turf" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-midnight group-hover:text-turf transition-colors">{nearby!.name}</div>
                      <div className="text-xs text-gray-500">Turf Cleaning</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/areas"
                className="inline-flex items-center gap-2 text-turf font-bold hover:underline"
              >
                View All Service Areas
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="hero-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-[20%] w-72 h-72 bg-turf/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-[10%] w-96 h-96 bg-turf/5 rounded-full blur-3xl animate-float-slow" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Clean Your {area.name} Turf?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. Same-day service available throughout {area.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-gradient-to-r from-turf to-turf-light text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-turf/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE_NUMBER}
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 bg-white text-midnight px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
