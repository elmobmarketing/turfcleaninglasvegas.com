import { useParams, Link, Navigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { getBlogPost, getRelatedPosts, blogCategories } from '../data/blog';
import { PHONE_NUMBER, PHONE_HREF } from '../data/services';
import { useSEO } from '../hooks/useSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || '');
  const relatedPosts = post ? getRelatedPosts(post) : [];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemas = useMemo(() => {
    if (!post) return undefined;
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://turfcleaninglasvegas.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://turfcleaninglasvegas.com/blog' },
          { '@type': 'ListItem', position: 3, name: post.title, item: `https://turfcleaninglasvegas.com/blog/${post.slug}` },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription,
        image: `https://turfcleaninglasvegas.com${post.heroImage}`,
        author: {
          '@type': 'Organization',
          name: post.author,
          url: 'https://turfcleaninglasvegas.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Turf Cleaning Las Vegas',
          url: 'https://turfcleaninglasvegas.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://turfcleaninglasvegas.com/og-image.jpg',
          },
        },
        datePublished: post.publishDate,
        dateModified: post.updatedDate || post.publishDate,
        mainEntityOfPage: `https://turfcleaninglasvegas.com/blog/${post.slug}`,
        wordCount: post.sections.reduce((acc, s) => acc + s.content.join(' ').split(/\s+/).length + (s.listItems?.join(' ').split(/\s+/).length || 0), 0),
        articleSection: blogCategories[post.category].label,
        keywords: post.tags.join(', '),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      },
    ];
  }, [post]);

  useSEO({
    title: post ? post.metaTitle : 'Blog | Turf Cleaning Las Vegas',
    description: post ? post.metaDescription : '',
    canonical: post ? `/blog/${post.slug}` : '/blog',
    schema: schemas,
  });

  if (!post) return <Navigate to="/blog" replace />;

  const tocItems = post.sections.filter((s) => s.level === 'h2');
  const midPoint = Math.min(3, Math.floor(post.sections.length / 2));

  return (
    <div>
      {/* Hero */}
      <section className="hero-dark text-white overflow-hidden relative">
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <img
            src={post.heroImage}
            alt={post.heroImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-midnight/85" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
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
              <div className="flex items-center gap-3 mb-6">
                <Link
                  to={`/blog?category=${post.category}`}
                  className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-turf-light hover:bg-white/10 transition-colors"
                >
                  {blogCategories[post.category].label}
                </Link>
                {post.isPillar && (
                  <span className="bg-gradient-to-r from-turf to-turf-light text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Complete Guide
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime} min read
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Blog', to: '/blog' }, { label: post.title }]} />

      {/* Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <article className="min-w-0">
              {post.sections.map((section, index) => (
                <div key={section.id} id={section.id}>
                  {/* Mid-article CTA */}
                  {index === midPoint && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-midnight to-midnight-light rounded-2xl p-8 my-10 text-white"
                    >
                      <h3 className="text-xl font-bold mb-2">Need Professional Turf Cleaning?</h3>
                      <p className="text-gray-300 mb-4">
                        Get a free, no-obligation quote for your Las Vegas property. Same-day service available.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to="/quote"
                          className="btn-shimmer inline-flex items-center justify-center gap-2 bg-gradient-to-r from-turf to-turf-light text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-turf/25"
                        >
                          Get Free Quote
                        </Link>
                        <a
                          href={PHONE_HREF}
                          className="inline-flex items-center justify-center gap-2 glass-white text-white px-6 py-3 rounded-xl font-bold"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {PHONE_NUMBER}
                        </a>
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    {section.level === 'h2' ? (
                      <h2 className="text-2xl md:text-3xl font-black text-midnight mt-10 mb-4">
                        {section.heading}
                      </h2>
                    ) : (
                      <h3 className="text-xl md:text-2xl font-bold text-midnight mt-8 mb-3">
                        {section.heading}
                      </h3>
                    )}

                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-gray-600 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}

                    {section.listItems && (
                      <ul className="space-y-2 my-4">
                        {section.listItems.map((item, liIdx) => (
                          <li key={liIdx} className="flex items-start gap-3 text-gray-600">
                            <svg className="w-5 h-5 text-turf flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.callout && (
                      <div className={`rounded-xl p-5 my-4 border-l-4 ${
                        section.callout.type === 'tip'
                          ? 'bg-turf/5 border-turf'
                          : section.callout.type === 'warning'
                            ? 'bg-amber-50 border-amber-500'
                            : 'bg-blue-50 border-blue-500'
                      }`}>
                        <div className="flex items-start gap-3">
                          <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            section.callout.type === 'tip'
                              ? 'text-turf'
                              : section.callout.type === 'warning'
                                ? 'text-amber-500'
                                : 'text-blue-500'
                          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {section.callout.type === 'warning' ? (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            )}
                          </svg>
                          <div>
                            <span className={`font-bold text-sm ${
                              section.callout.type === 'tip'
                                ? 'text-turf'
                                : section.callout.type === 'warning'
                                  ? 'text-amber-700'
                                  : 'text-blue-700'
                            }`}>
                              {section.callout.type === 'tip' ? 'Pro Tip' : section.callout.type === 'warning' ? 'Warning' : 'Good to Know'}
                            </span>
                            <p className={`text-sm mt-1 ${
                              section.callout.type === 'tip'
                                ? 'text-gray-600'
                                : section.callout.type === 'warning'
                                  ? 'text-amber-800'
                                  : 'text-blue-800'
                            }`}>
                              {section.callout.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <div className="bg-cream rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-midnight mb-4 text-sm uppercase tracking-wider">Table of Contents</h3>
                  <nav>
                    <ol className="space-y-2">
                      {tocItems.map((item, index) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="text-sm text-gray-500 hover:text-turf transition-colors flex items-start gap-2"
                          >
                            <span className="text-turf/50 font-mono text-xs mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                            <span className="line-clamp-2">{item.heading}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>

                {/* Sidebar CTA */}
                <div className="bg-midnight rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Free Quote</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Professional turf cleaning starting at $299. Same-day service available.
                  </p>
                  <Link
                    to="/quote"
                    className="btn-shimmer block text-center bg-gradient-to-r from-turf to-turf-light text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg shadow-turf/25"
                  >
                    Get Your Quote
                  </Link>
                  <a
                    href={PHONE_HREF}
                    className="block text-center text-turf-light text-sm font-medium mt-3 hover:underline"
                  >
                    or call {PHONE_NUMBER}
                  </a>
                </div>

                {/* Tags */}
                <div className="bg-cream rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-midnight mb-4 text-sm uppercase tracking-wider">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-white text-gray-500 text-xs px-3 py-1.5 rounded-full border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {post.faq.length > 0 && (
        <section className="py-20 bg-cream">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-turf font-bold text-sm tracking-widest uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-black text-midnight mt-3 mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-4">
              {post.faq.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex items-center justify-between w-full p-6 text-left font-bold text-midnight hover:text-turf transition-colors"
                  >
                    {faq.question}
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ml-4 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-turf font-bold text-sm tracking-widest uppercase">Related Articles</span>
              <h2 className="text-3xl md:text-4xl font-black text-midnight mt-3 mb-4">
                Continue Reading
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related, index) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${related.slug}`}
                    className="block card-glow bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-turf transition-all h-full"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={related.heroImage}
                        alt={related.heroImageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-turf text-xs font-bold uppercase tracking-wider">
                        {blogCategories[related.category].label}
                      </span>
                      <h3 className="text-lg font-bold text-midnight mt-2 mb-2 line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                        {related.excerpt}
                      </p>
                      <span className="text-turf font-semibold text-sm inline-flex items-center gap-1">
                        Read Article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="hero-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <img src="/images/turf/putting-green-flag.webp" alt="Putting green with flag on a Las Vegas residential property" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-midnight/85" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-[20%] w-72 h-72 bg-turf/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-[10%] w-96 h-96 bg-turf/5 rounded-full blur-3xl animate-float-slow" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready for Professionally Cleaned Turf?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. Same-day service available throughout the Las Vegas Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-gradient-to-r from-turf to-turf-light text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-turf/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE_NUMBER}
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 bg-white text-midnight px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
