import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts, blogCategories, type BlogCategory } from '../data/blog';
import { PHONE_HREF, PHONE_NUMBER } from '../data/services';
import { useSEO } from '../hooks/useSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as BlogCategory | null;
  const [activeCategory, setActiveCategory] = useState<BlogCategory | null>(initialCategory);

  const pillarPost = blogPosts.find((p) => p.isPillar);
  const filteredPosts = activeCategory
    ? blogPosts.filter((p) => p.category === activeCategory && !p.isPillar)
    : blogPosts.filter((p) => !p.isPillar);

  const schemas = useMemo(() => [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://turfcleaninglasvegas.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://turfcleaninglasvegas.com/blog' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Artificial Turf Cleaning Blog | Las Vegas Expert Guides',
      description: 'Expert guides on artificial turf cleaning, maintenance, and care for Las Vegas homeowners. Desert-specific tips, cost guides, and professional advice.',
      url: 'https://turfcleaninglasvegas.com/blog',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: blogPosts.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://turfcleaninglasvegas.com/blog/${post.slug}`,
          name: post.title,
        })),
      },
    },
  ], []);

  useSEO({
    title: 'Artificial Turf Cleaning Blog | Las Vegas Expert Guides & Tips',
    description: 'Expert guides on artificial turf cleaning, maintenance, and care for Las Vegas homeowners. Desert-specific tips, cost guides, pet care, and professional advice.',
    canonical: '/blog',
    schema: schemas,
  });

  const handleCategoryClick = (category: BlogCategory | null) => {
    setActiveCategory(category);
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-dark text-white overflow-hidden relative">
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          <img src="/images/turf/desert-landscape-turf.webp" alt="Desert landscape with artificial turf and native Las Vegas plants" className="w-full h-full object-cover" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Expert Guides & Tips
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Turf Care <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Expert guides on artificial turf cleaning, maintenance, and care.
                Written specifically for Las Vegas homeowners dealing with desert heat,
                dust storms, and hard water.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Blog' }]} />

      {/* Featured Pillar Post */}
      {pillarPost && !activeCategory && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/blog/${pillarPost.slug}`}
                className="block card-glow bg-white rounded-2xl border-2 border-turf/20 overflow-hidden hover:border-turf transition-all group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img
                      src={pillarPost.heroImage}
                      alt={pillarPost.heroImageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gradient-to-r from-turf to-turf-light text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        Complete Guide
                      </span>
                      <span className="text-gray-400 text-sm">{pillarPost.readTime} min read</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-midnight mb-4 group-hover:text-turf transition-colors">
                      {pillarPost.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {pillarPost.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-turf font-bold group-hover:gap-3 transition-all">
                      Read the Complete Guide
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filters + Posts Grid */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <button
              onClick={() => handleCategoryClick(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                !activeCategory
                  ? 'bg-midnight text-white shadow-lg'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-turf hover:text-turf'
              }`}
            >
              All Posts
            </button>
            {(Object.entries(blogCategories) as [BlogCategory, { label: string }][]).map(([key, val]) => (
              <button
                key={key}
                onClick={() => handleCategoryClick(key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === key
                    ? 'bg-midnight text-white shadow-lg'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-turf hover:text-turf'
                }`}
              >
                {val.label}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block card-glow bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-turf transition-all h-full group"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-turf text-xs font-bold uppercase tracking-wider">
                        {blogCategories[post.category].label}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime} min read</span>
                    </div>
                    <h3 className="text-lg font-bold text-midnight mb-2 group-hover:text-turf transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">
                        {new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                      <span className="text-turf font-semibold text-sm inline-flex items-center gap-1">
                        Read
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          <img src="/images/turf/side-yard-turf.webp" alt="Side yard with clean artificial turf in a Las Vegas home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-midnight/85" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" style={{ zIndex: 3 }} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-[20%] w-72 h-72 bg-turf/10 rounded-full blur-3xl animate-float" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready for Expert Turf Cleaning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Put our knowledge to work on your lawn. Get a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-gradient-to-r from-turf to-turf-light text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-turf/25"
            >
              Get Free Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-white text-midnight px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
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
