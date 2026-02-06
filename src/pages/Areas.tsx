import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { serviceAreas, PHONE_NUMBER, PHONE_HREF } from '../data/services';

export function Areas() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-dark text-white overflow-hidden relative">
        {/* Hero background image */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          <img src="/images/turf/backyard-palm-trees.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-midnight/85" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" style={{ zIndex: 3 }} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-turf/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-[15%] w-96 h-96 bg-turf/5 rounded-full blur-3xl animate-float-slow" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
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
                {serviceAreas.length} Communities Served
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Turf Cleaning <span className="text-gradient">Service Areas</span> in Las Vegas
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Proudly serving the entire Las Vegas Valley with professional artificial grass
                cleaning services. Same-day service available in most areas. No travel fees.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-turf font-bold text-sm tracking-widest uppercase">All Areas</span>
            <h2 className="text-3xl md:text-4xl font-black text-midnight mt-3 mb-4">
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
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  to={`/areas/${area.slug}`}
                  className="block card-glow bg-white rounded-xl p-6 border border-gray-200 hover:border-turf transition-all h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-midnight">{area.name}</h3>
                      <p className="text-sm text-gray-500">Turf Cleaning Services</p>
                    </div>
                    <div className="w-10 h-10 bg-turf/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-turf" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {area.description}
                  </p>
                  <div className="text-xs text-gray-500 mb-4">
                    <span className="font-medium">ZIP Codes: </span>{area.zip}
                  </div>
                  <div className="inline-flex items-center text-turf font-semibold text-sm group">
                    View {area.name} Services
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-turf font-bold text-sm tracking-widest uppercase">Local Experts</span>
              <h2 className="text-3xl md:text-4xl font-black text-midnight mt-3 mb-6">
                Turf Cleaning Las Vegas Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a locally owned and operated business, we understand the unique challenges
                of maintaining artificial turf in the Mojave Desert. Extreme heat, dust storms,
                and intense UV exposure require specialized care that national chains simply cannot provide.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Same-day service throughout the Las Vegas Valley',
                  'No travel fees for all listed service areas',
                  'Flexible scheduling including weekends',
                  'Emergency service available 7 days a week',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-6 h-6 text-turf mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/quote"
                className="btn-shimmer inline-block bg-gradient-to-r from-turf to-turf-light text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-turf/20 hover:shadow-xl transition-all"
              >
                Check Service Availability
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <img
                src="/images/turf/turf-closeup-wall.webp"
                alt="Close-up of clean artificial turf in Las Vegas"
                className="w-full h-56 object-cover rounded-2xl"
                loading="lazy"
              />
              <div className="bg-midnight rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Service Check</h3>
              <p className="text-gray-300 mb-6">
                Not sure if we service your area? Give us a call and we will confirm
                availability and provide a free quote over the phone.
              </p>
              <a
                href={PHONE_HREF}
                className="btn-shimmer flex items-center justify-center gap-3 bg-gradient-to-r from-turf to-turf-light text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg shadow-turf/20"
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-midnight mb-6 text-center">
            Artificial Turf Cleaning Throughout Las Vegas
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Turf Cleaning Las Vegas provides comprehensive artificial grass maintenance
              and cleaning services to residential and commercial properties throughout
              the Las Vegas Valley. Our service area covers {serviceAreas.length} communities
              including Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley,
              Paradise, Enterprise, Green Valley, Centennial Hills, Mountains Edge, Aliante,
              Southern Highlands, and dozens more neighborhoods.
            </p>
            <p>
              The desert climate presents unique challenges for artificial turf owners.
              Intense summer heat can cause odors to intensify, while dust storms deposit
              debris deep into turf fibers. Our specialized cleaning techniques are designed
              specifically for Las Vegas conditions, ensuring your synthetic lawn stays
              fresh, clean, and beautiful year-round.
            </p>
            <p>
              Whether you're in a newer community like Inspirada or Skye Canyon, an established
              neighborhood in Green Valley Ranch, or a luxury enclave like The Ridges or
              Spanish Trail, our team has the expertise and equipment to restore your
              artificial grass to like-new condition. We offer same-day service throughout
              the valley, with no additional travel charges regardless of your location.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark text-white py-20 relative overflow-hidden">
        {/* CTA background image */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          <img src="/images/turf/side-yard-turf.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-midnight/85" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" style={{ zIndex: 3 }} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-[20%] w-72 h-72 bg-turf/10 rounded-full blur-3xl animate-float" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Schedule Your Turf Cleaning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your free quote today. We service all Las Vegas Valley communities.
          </p>
          <Link
            to="/quote"
            className="inline-block bg-white text-midnight px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
