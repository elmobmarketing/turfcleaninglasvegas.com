import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { serviceAreas, PHONE_NUMBER, PHONE_HREF } from '../data/services';

export function Areas() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-vegas-navy text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Turf Cleaning Service Areas in Las Vegas
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Proudly serving the entire Las Vegas Valley with professional artificial grass
              cleaning services. Same-day service available in most areas.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Service All Las Vegas Valley Communities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From the master-planned communities of Summerlin to the growing neighborhoods
              of Henderson, we bring expert turf cleaning to your doorstep.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-vegas-green hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                    <p className="text-sm text-gray-500">Turf Cleaning Services</p>
                  </div>
                  <div className="w-10 h-10 bg-vegas-green/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-vegas-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Professional artificial grass cleaning and maintenance for {area.name} residents.
                  Pet odor removal, deep cleaning, and regular maintenance available.
                </p>
                <div className="text-xs text-gray-500 mb-4">
                  <span className="font-medium">ZIP Codes: </span>{area.zip}
                </div>
                <Link
                  to="/quote"
                  className="inline-flex items-center text-vegas-green font-semibold hover:underline"
                >
                  Get Quote for {area.name}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Local Las Vegas Turf Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As a locally owned and operated business, we understand the unique challenges
                of maintaining artificial turf in the Mojave Desert. Extreme heat, dust storms,
                and intense UV exposure require specialized care that national chains simply can't provide.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Same-day service throughout the Las Vegas Valley',
                  'No travel fees for all listed service areas',
                  'Flexible scheduling including weekends',
                  'Emergency service available 7 days a week',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-vegas-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/quote"
                className="inline-block bg-vegas-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-vegas-green/90 transition-colors"
              >
                Check Service Availability
              </Link>
            </div>
            <div className="bg-vegas-navy rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Service Check</h3>
              <p className="text-gray-300 mb-6">
                Not sure if we service your area? Give us a call and we'll confirm
                availability and provide a free quote over the phone.
              </p>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-3 bg-vegas-green text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-vegas-green/90 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_NUMBER}
              </a>
              <p className="text-center text-gray-400 text-sm mt-4">
                Available Mon-Sat, 7am-7pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Artificial Turf Cleaning Throughout Las Vegas
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Las Vegas Turf Cleaning provides comprehensive artificial grass maintenance
              and cleaning services to residential and commercial properties throughout
              the Las Vegas Valley. Our service area includes Las Vegas, Henderson,
              North Las Vegas, Summerlin, Spring Valley, Paradise, Enterprise, Green Valley,
              Centennial Hills, Mountains Edge, Aliante, and Southern Highlands.
            </p>
            <p>
              The desert climate presents unique challenges for artificial turf owners.
              Intense summer heat can cause odors to intensify, while dust storms deposit
              debris deep into turf fibers. Our specialized cleaning techniques are designed
              specifically for Las Vegas conditions, ensuring your synthetic lawn stays
              fresh, clean, and beautiful year-round.
            </p>
            <p>
              Whether you're in a newer community like Inspirada or an established
              neighborhood in Green Valley Ranch, our team has the expertise and equipment
              to restore your artificial grass to like-new condition. We offer same-day
              service throughout the valley, with no additional travel charges regardless
              of your location.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-vegas-green py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Schedule Your Turf Cleaning?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your free quote today. We service all Las Vegas Valley communities.
          </p>
          <Link
            to="/quote"
            className="inline-block bg-white text-vegas-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
