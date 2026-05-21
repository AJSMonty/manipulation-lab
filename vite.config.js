import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SITE } from './src/config/site.js';
import { structuredDataJson } from './src/data/structuredData.js';

function seoInjectPlugin(mode) {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = (env.VITE_SITE_URL || 'https://manipulationlab.io').replace(/\/$/, '');

  const replacements = {
    __SITE_URL__: siteUrl,
    __SITE_TITLE__: SITE.title,
    __SITE_DESCRIPTION__: SITE.description,
    __STRUCTURED_DATA__: structuredDataJson(siteUrl),
  };

  function apply(template) {
    return Object.entries(replacements).reduce(
      (html, [token, value]) => html.replaceAll(token, value),
      template,
    );
  }

  const robotsTxt = apply(`User-agent: *
Allow: /

Sitemap: __SITE_URL__/sitemap.xml
`);

  const sitemapXml = apply(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>__SITE_URL__/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`);

  return {
    name: 'seo-inject',
    transformIndexHtml(html) {
      return apply(html);
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/robots.txt') {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.end(robotsTxt);
          return;
        }
        if (req.url === '/sitemap.xml') {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.end(sitemapXml);
          return;
        }
        next();
      });
    },
    closeBundle() {
      const dist = resolve(process.cwd(), 'dist');
      writeFileSync(resolve(dist, 'robots.txt'), robotsTxt, 'utf8');
      writeFileSync(resolve(dist, 'sitemap.xml'), sitemapXml, 'utf8');
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), seoInjectPlugin(mode)],
}));
