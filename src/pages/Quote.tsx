import { motion } from 'framer-motion';
import { LeadForm } from '../components/LeadForm';
import { PHONE_NUMBER, PHONE_HREF } from '../data/services';

export function Quote() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-vegas-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-vegas-gold/20 text-vegas-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Response Within 1 Hour
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Fill out the form below and we'll provide a customized quote for your
              artificial turf cleaning needs. No obligation, no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Request Your Free Quote
                </h2>
                <p className="text-gray-600 mb-6">
                  Tell us about your turf and we'll get back to you with pricing.
                </p>
                <LeadForm source="quote-page" />
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Call Option */}
              <div className="bg-vegas-navy text-white rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">Prefer to Call?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Speak with a turf specialist and get your quote over the phone.
                </p>
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 bg-vegas-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-vegas-green/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE_NUMBER}
                </a>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    { step: '1', text: 'Submit your information' },
                    { step: '2', text: 'We review your details' },
                    { step: '3', text: 'Receive your custom quote' },
                    { step: '4', text: 'Schedule at your convenience' },
                  ].map((item) => (
                    <li key={item.step} className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-vegas-green/10 text-vegas-green rounded-full flex items-center justify-center font-semibold text-sm">
                        {item.step}
                      </span>
                      <span className="text-gray-600">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantees */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Guarantees</h3>
                <ul className="space-y-3">
                  {[
                    '100-day odor elimination warranty',
                    'No hidden fees or surprises',
                    'Satisfaction guaranteed',
                    'Same-day service available',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                      <svg className="w-5 h-5 text-vegas-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badge */}
              <div className="bg-vegas-green/10 rounded-2xl p-6 text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-vegas-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="font-semibold text-gray-900">4.9 Star Rating</div>
                <div className="text-sm text-gray-600">Based on 347+ reviews</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How much does turf cleaning cost?',
                a: 'Our services start at $149 for a basic refresh clean. The exact price depends on your turf size and the level of cleaning needed. We provide free, no-obligation quotes.',
              },
              {
                q: 'How long does the cleaning take?',
                a: 'Most residential cleanings are completed in 1-2 hours. Larger properties or deep cleaning services may take longer. We work efficiently without cutting corners.',
              },
              {
                q: 'Is the cleaning safe for my pets?',
                a: 'Absolutely! All our products are 100% non-toxic and pet-safe. Your pets can return to the turf as soon as it dries, typically within 30-60 minutes.',
              },
              {
                q: 'Do you offer recurring service plans?',
                a: 'Yes! We offer monthly, bi-monthly, and quarterly maintenance plans at discounted rates. Regular cleaning extends the life of your turf and keeps odors at bay.',
              },
              {
                q: 'What if the odor comes back?',
                a: 'We stand behind our work with a 100-day odor elimination guarantee. If the smell returns within that period, we\'ll come back and retreat at no charge.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
