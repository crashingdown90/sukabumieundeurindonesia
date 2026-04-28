import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://news.sukabumieundeurindonesia.com";

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // Block search engines from admin and api
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
