// sitemap-generator.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://ali-reza.dev' });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

// Add your static routes here
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/skills', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/projects', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.6 });

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('✅ Sitemap generated at public/sitemap.xml');
});