import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export function NotFound() {
  useSEO({
    title: 'Page Not Found | Turf Cleaning Las Vegas',
    description: 'The page you are looking for could not be found. Visit our homepage for professional artificial turf cleaning services in Las Vegas.',
    canonical: '/404',
  });

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-midnight mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-midnight mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for.
          Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="bg-turf text-white px-6 py-3 rounded-lg font-semibold hover:bg-turf/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            to="/quote"
            className="bg-midnight text-white px-6 py-3 rounded-lg font-semibold hover:bg-midnight/90 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
