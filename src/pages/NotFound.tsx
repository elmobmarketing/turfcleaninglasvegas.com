import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-vegas-navy mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for.
          Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="bg-vegas-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-vegas-green/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            to="/quote"
            className="bg-vegas-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-vegas-navy/90 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
