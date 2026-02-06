import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LeadForm } from '../components/LeadForm';
import { PHONE_NUMBER, PHONE_HREF } from '../data/services';

const faqs = [
  { q: 'How much does turf cleaning cost?', a: 'Our services start at $299 for a basic refresh clean. The exact price depends on your turf size and the level of cleaning needed. We provide free, no-obligation quotes.' },
  { q: 'How long does the cleaning take?', a: 'Most residential cleanings are completed in 1-2 hours. Larger properties or deep cleaning services may take longer. We work efficiently without cutting corners.' },
  { q: 'Is the cleaning safe for my pets?', a: 'Absolutely! All our products are 100% non-toxic and pet-safe. Your pets can return to the turf as soon as it dries, typically within 30-60 minutes.' },
  { q: 'Do you offer recurring service plans?', a: 'Yes! We offer monthly, bi-monthly, and quarterly maintenance plans at discounted rates. Regular cleaning extends the life of your turf and keeps odors at bay.' },
  { q: 'What if the odor comes back?', a: "We stand behind our work. If you are not satisfied with the results, contact us and we will come back to retreat at no additional charge." },
];

export function Quote() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden py-20 md:py-28 text-white">
        {/* Hero background image */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <img src="/images/turf/backyard-gravel-border.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-midnight/85" />
        </div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        {/* Floating Orbs */}
        <div className="absolute top-10 left-[10%] w-72 h-72 bg-turf/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-[15%] w-96 h-96 bg-turf/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass text-amber px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-amber/30"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Response Within 1 Hour
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
            >
              Get Your <span className="text-gradient">Free Quote</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
            >
              Fill out the form below and we will provide a customized quote for your
              artificial turf cleaning needs. No obligation, no pressure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Main Form */}
            <motion.div
              className="lg:col-span-2 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Green glow behind card */}
              <div className="absolute -inset-4 bg-turf/10 rounded-3xl blur-2xl -z-10" />

              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-2">
                  Request Your Free Quote
                </h2>
                <p className="text-gray-600 mb-8">
                  Tell us about your turf and we will get back to you with a custom pricing estimate.
                </p>
                <LeadForm source="quote-page" />
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Call Option */}
              <div className="bg-midnight rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Prefer to Call?</h3>
                <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                  Speak with a turf cleaning specialist and get your quote instantly over the phone.
                </p>
                <a
                  href={PHONE_HREF}
                  className="btn-shimmer flex items-center justify-center gap-2.5 bg-gradient-to-r from-turf to-turf-light text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-turf/25"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE_NUMBER}
                </a>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-bold text-midnight mb-5">What to Expect</h3>
                <div className="space-y-0">
                  {[
                    { step: '1', text: 'Submit your information' },
                    { step: '2', text: 'We review your details' },
                    { step: '3', text: 'Receive your custom quote' },
                    { step: '4', text: 'Schedule at your convenience' },
                  ].map((item, index) => (
                    <div key={item.step} className="flex items-start gap-4 relative">
                      {/* Connecting line */}
                      {index < 3 && (
                        <div className="absolute left-[15px] top-9 w-0.5 h-6 bg-turf/20" />
                      )}
                      <span className="w-8 h-8 bg-turf text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-md shadow-turf/25">
                        {item.step}
                      </span>
                      <span className="text-gray-700 font-medium pt-1 pb-5">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-bold text-midnight mb-4">Our Guarantees</h3>
                <ul className="space-y-3.5">
                  {[
                    'Satisfaction guarantee on every job',
                    'No hidden fees or surprises',
                    'Pet-safe, eco-friendly products',
                    'Same-day service available',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                      <span className="w-6 h-6 bg-turf/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-turf" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust / Rating Badge */}
              <div className="bg-gradient-to-br from-turf to-turf-light rounded-2xl p-6 text-center text-white shadow-lg shadow-turf/20">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-2xl font-black">Licensed & Insured</div>
                <div className="text-sm text-white/80 mt-1">Fully covered for every job</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-turf text-sm font-bold uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-midnight mt-3">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <details className="group bg-white rounded-xl border border-gray-200 hover:border-turf/30 hover:shadow-md transition-all duration-300">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 list-none">
                    <h3 className="font-bold text-midnight text-left pr-4">{faq.q}</h3>
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 -mt-1">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
