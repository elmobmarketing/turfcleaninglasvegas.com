import { Link } from 'react-router-dom';
import { PHONE_HREF } from '../../data/services';

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 bg-midnight text-white py-3.5 rounded-xl font-semibold text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <Link
          to="/quote"
          className="btn-shimmer flex items-center justify-center gap-2 bg-gradient-to-r from-turf to-turf-light text-white py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-turf/20"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
