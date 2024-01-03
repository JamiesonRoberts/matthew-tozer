export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api',
    },
    sitemap: 'https://matthewtozer.com/sitemap.xml',
  }
}
