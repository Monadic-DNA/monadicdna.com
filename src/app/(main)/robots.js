export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/*.json$',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
            '/api/',
            '/_next/',
            '/*.json$',
          ],
      },
    ],
    sitemap: 'https://monadicdna.com/sitemap.xml',
    host: 'https://monadicdna.com',
  };
} 