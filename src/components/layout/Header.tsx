import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { PHONE_NUMBER, PHONE_HREF } from '../../data/services';
import { Logo } from '../Logo';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'text-turf'
        : 'text-gray-500 hover:text-midnight'
    }`;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.04)] border-b border-gray-100/80'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-[4.25rem]">
          <Link to="/" className="flex items-center relative z-10">
            <span className="hidden sm:block">
              <Logo variant="full" />
            </span>
            <span className="sm:hidden">
              <Logo variant="mark" />
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={linkClass} end>Home</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/areas" className={linkClass}>Areas</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden lg:flex items-center gap-2 text-midnight font-semibold text-sm hover:text-turf transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-turf/8 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-turf" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              {PHONE_NUMBER}
            </a>
            <Link
              to="/quote"
              className="bg-midnight text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-midnight-light transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-midnight/10"
            >
              Free Quote
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-midnight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-5 animate-fade-up">
            <div className="flex flex-col gap-1 border-t border-gray-100 pt-4">
              <NavLink to="/" className={linkClass} end>Home</NavLink>
              <NavLink to="/services" className={linkClass}>Services</NavLink>
              <NavLink to="/areas" className={linkClass}>Areas</NavLink>
              <NavLink to="/about" className={linkClass}>About</NavLink>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-midnight text-white py-3 rounded-xl font-semibold text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {PHONE_NUMBER}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
