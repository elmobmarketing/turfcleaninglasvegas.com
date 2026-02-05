import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services, PHONE_NUMBER, PHONE_HREF } from '../data/services';

export function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-vegas-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Turf Cleaning Services in Las Vegas
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From routine maintenance to complete restoration, we offer comprehensive
              artificial grass cleaning solutions designed for the Las Vegas climate.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index !== services.length - 1 ? 'mb-20 pb-20 border-b border-gray-200' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  {service.popular && (
                    <span className="bg-vegas-gold text-vegas-navy text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h2>
                <div className="mb-6">
                  <span className="text-gray-500">Starting at </span>
                  <span className="text-4xl font-bold text-vegas-green">${service.price}</span>
                </div>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <svg
                        className="w-6 h-6 text-vegas-green mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/quote"
                  className="inline-block bg-vegas-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-vegas-green/90 transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
              <div className={`bg-gradient-to-br from-vegas-green/10 to-vegas-gold/10 rounded-2xl p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="aspect-video bg-white rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-vegas-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-vegas-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {service.id === 'refresh' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        )}
                        {service.id === 'restore' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        )}
                        {service.id === 'deep' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        )}
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.shortName}</h3>
                    <p className="text-gray-600">Professional {service.name.toLowerCase()} for Las Vegas homes</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Inspect', description: 'Thorough assessment of turf condition, identifying problem areas and customizing our approach.' },
              { step: '2', title: 'Clean', description: 'Remove debris, pet waste, and buildup using professional-grade equipment and eco-friendly solutions.' },
              { step: '3', title: 'Treat', description: 'Apply antimicrobial treatments to eliminate bacteria, odors, and restore freshness.' },
              { step: '4', title: 'Restore', description: 'Brush, fluff, and redistribute infill to bring back that like-new appearance and feel.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-vegas-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Monthly Maintenance Plan', description: 'Keep your turf pristine year-round with scheduled cleanings', price: 'Save 20%' },
              { name: 'Commercial Turf Cleaning', description: 'For businesses, HOAs, and commercial properties', price: 'Custom Quote' },
              { name: 'Emergency Pet Cleanup', description: 'Urgent odor and waste removal when you need it most', price: 'Same Day' },
            ].map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <span className="inline-block bg-vegas-green/10 text-vegas-green px-3 py-1 rounded-full text-sm font-semibold">
                  {addon.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-vegas-navy py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team will assess your turf and recommend the best solution for your specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="inline-block bg-vegas-green text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-vegas-green/90 transition-colors"
            >
              Get Free Assessment
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white text-vegas-navy px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
