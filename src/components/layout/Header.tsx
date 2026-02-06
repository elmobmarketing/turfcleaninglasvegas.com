import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PHONE_NUMBER, PHONE_HREF } from '../../data/services';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg font-medium transition-colors ${
      isActive
        ? 'bg-vegas-green/10 text-vegas-green'
        : 'text-gray-600 hover:text-vegas-green hover:bg-gray-100'
    }`;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar with phone */}
      <div className="bg-vegas-navy text-white py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-sm">
          <span className="hidden sm:inline">Serving Las Vegas, Henderson, Summerlin & Surrounding Areas</span>
          <span className="sm:hidden">Las Vegas Valley</span>
          <a href={PHONE_HREF} className="font-semibold hover:text-vegas-gold transition-colors phone-link flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">Call Now: </span>{PHONE_NUMBER}
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-vegas-green rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-vegas-navy">Las Vegas</span>
              <span className="text-xl font-bold text-vegas-green"> Turf Cleaning</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
            <NavLink to="/areas" className={linkClass}>
              Service Areas
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden lg:flex items-center gap-2 text-vegas-navy font-semibold hover:text-vegas-green transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE_NUMBER}
            </a>
            <Link
              to="/quote"
              className="bg-vegas-green text-white px-5 py-2 rounded-lg font-medium hover:bg-vegas-green/90 transition-colors animate-pulse-glow"
            >
              Free Quote
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              <NavLink to="/" className={linkClass} end onClick={() => setMobileMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/services" className={linkClass} onClick={() => setMobileMenuOpen(false)}>
                Services
              </NavLink>
              <NavLink to="/areas" className={linkClass} onClick={() => setMobileMenuOpen(false)}>
                Service Areas
              </NavLink>
              <NavLink to="/about" className={linkClass} onClick={() => setMobileMenuOpen(false)}>
                About
              </NavLink>
              <NavLink to="/contact" className={linkClass} onClick={() => setMobileMenuOpen(false)}>
                Contact
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
