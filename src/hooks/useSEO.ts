import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const BASE_URL = 'https://turfcleaninglasvegas.com';
const DEFAULT_TITLE = 'Turf Cleaning Las Vegas | Professional Artificial Grass Cleaning';
const DEFAULT_DESCRIPTION = 'Professional artificial turf cleaning in Las Vegas. Pet odor removal, deep cleaning, and maintenance. Safe for kids and pets. Same-day service available. Free quotes - Call (702) 819-7749';
export function useSEO({ title, description, canonical, ogTitle, ogDescription, schema }: SEOConfig) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    // Canonical
    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.setAttribute('href', `${BASE_URL}${canonical}`);

    // OG tags
    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute('content', ogTitle || title);

    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute('content', ogDescription || description);

    const ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (ogUrlEl) ogUrlEl.setAttribute('content', `${BASE_URL}${canonical}`);

    // Twitter tags
    const twTitleEl = document.querySelector('meta[name="twitter:title"]');
    if (twTitleEl) twTitleEl.setAttribute('content', ogTitle || title);

    const twDescEl = document.querySelector('meta[name="twitter:description"]');
    if (twDescEl) twDescEl.setAttribute('content', ogDescription || description);

    // Schema injection
    const scripts: HTMLScriptElement[] = [];
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      for (const s of schemas) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(s);
        document.head.appendChild(script);
        scripts.push(script);
      }
    }

    return () => {
      // Reset to defaults
      document.title = DEFAULT_TITLE;
      const metaDescReset = document.querySelector('meta[name="description"]');
      if (metaDescReset) metaDescReset.setAttribute('content', DEFAULT_DESCRIPTION);

      const canonicalReset = document.querySelector('link[rel="canonical"]');
      if (canonicalReset) canonicalReset.setAttribute('href', BASE_URL);

      const ogTitleReset = document.querySelector('meta[property="og:title"]');
      if (ogTitleReset) ogTitleReset.setAttribute('content', DEFAULT_TITLE);

      const ogDescReset = document.querySelector('meta[property="og:description"]');
      if (ogDescReset) ogDescReset.setAttribute('content', 'Las Vegas turf cleaning experts. Pet odor removal, deep cleaning, and maintenance. Safe for kids and pets. Same-day service available.');

      const ogUrlReset = document.querySelector('meta[property="og:url"]');
      if (ogUrlReset) ogUrlReset.setAttribute('content', BASE_URL);

      const twTitleReset = document.querySelector('meta[name="twitter:title"]');
      if (twTitleReset) twTitleReset.setAttribute('content', DEFAULT_TITLE);

      const twDescReset = document.querySelector('meta[name="twitter:description"]');
      if (twDescReset) twDescReset.setAttribute('content', 'Las Vegas turf cleaning experts. Pet odor removal, deep cleaning, and maintenance. Safe for kids and pets. Same-day service available.');

      // Remove injected schemas
      for (const script of scripts) {
        if (script.parentNode) script.parentNode.removeChild(script);
      }
    };
  }, [title, description, canonical, ogTitle, ogDescription, schema]);
}
