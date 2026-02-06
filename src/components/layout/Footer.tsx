import { Link } from 'react-router-dom';
import { serviceAreas, PHONE_NUMBER, PHONE_HREF, EMAIL } from '../../data/services';
import { Logo } from '../Logo';

export function Footer() {
  return (
    <footer className="bg-midnight text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Orbs */}
      <div className="orb w-80 h-80 bg-turf/3 top-20 right-[5%]" />
      <div className="orb w-60 h-60 bg-turf/2 bottom-10 left-[10%]" />

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="mb-5">
              <Logo variant="full" dark />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Las Vegas's trusted artificial turf cleaning experts.
              Pet-safe, eco-friendly solutions for homes and businesses
              throughout the valley.
            </p>
            <div className="flex gap-2.5">
              {[
                { label: 'Facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { label: 'Google', path: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z' },
              ].map((social) => (
                <a key={social.label} href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-turf/20 flex items-center justify-center transition-all duration-300 group" aria-label={social.label}>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-turf-light transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-xs tracking-widest uppercase text-white/60 mb-5">Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/quote', label: 'Free Quote' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-turf-light transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-xs tracking-widest uppercase text-white/60 mb-5">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {serviceAreas.slice(0, 8).map((area) => (
                <li key={area.slug}>
                  <Link to={`/areas/${area.slug}`} className="text-gray-400 hover:text-turf-light transition-colors text-sm">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/areas" className="inline-flex items-center gap-1 text-turf-light text-sm font-medium mt-3 hover:underline">
              All {serviceAreas.length} areas
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-xs tracking-widest uppercase text-white/60 mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-3 text-gray-400 hover:text-turf-light transition-colors group">
                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-turf/15 flex items-center justify-center transition-all flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{PHONE_NUMBER}</div>
                    <div className="text-xs text-gray-500">Mon-Sat, 7am-7pm</div>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-gray-400 hover:text-turf-light transition-colors group">
                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-turf/15 flex items-center justify-center transition-all flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{EMAIL}</div>
                    <div className="text-xs text-gray-500">We reply as soon as we can</div>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Las Vegas Valley</div>
                  <div className="text-xs text-gray-500">{serviceAreas.length}+ communities served</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/6 mt-14 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} Turf Cleaning Las Vegas. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-600">
              <Link to="/contact" className="hover:text-turf-light transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-turf-light transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
