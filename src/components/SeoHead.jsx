import { useEffect } from 'react';
import { getSiteUrl, SITE } from '../config/site.js';
import { structuredDataJson } from '../data/structuredData.js';

const SITE_URL = getSiteUrl();

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href, extras = {}) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  Object.entries(extras).forEach(([key, value]) => {
    if (value) el.setAttribute(key, value);
  });
}

export function SeoHead() {
  useEffect(() => {
    document.title = SITE.title;
    document.documentElement.lang = SITE.language;

    upsertMeta('name', 'description', SITE.description);
    upsertMeta('name', 'keywords', SITE.keywords.join(', '));
    upsertMeta('name', 'author', SITE.author);
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large');
    upsertMeta('name', 'googlebot', 'index, follow, max-snippet:-1, max-image-preview:large');
    upsertMeta('name', 'theme-color', SITE.themeColor);

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE.name);
    upsertMeta('property', 'og:title', SITE.title);
    upsertMeta('property', 'og:description', SITE.description);
    upsertMeta('property', 'og:url', SITE_URL);
    upsertMeta('property', 'og:locale', SITE.locale);
    upsertMeta('property', 'og:image', `${SITE_URL}/og-image.svg`);
    upsertMeta('property', 'og:image:alt', SITE.ogImageAlt);
    upsertMeta('property', 'og:image:width', '1200');
    upsertMeta('property', 'og:image:height', '630');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', SITE.title);
    upsertMeta('name', 'twitter:description', SITE.description);
    upsertMeta('name', 'twitter:image', `${SITE_URL}/og-image.svg`);
    upsertMeta('name', 'twitter:image:alt', SITE.ogImageAlt);

    upsertLink('canonical', SITE_URL);
    upsertLink('manifest', '/manifest.webmanifest');

    const scriptId = 'manipulation-lab-structured-data';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = structuredDataJson(SITE_URL);
  }, []);

  return null;
}
