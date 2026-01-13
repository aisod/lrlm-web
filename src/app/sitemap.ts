import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/about'];
  const locales = ['en', 'pt'];
  
  const siteMapEntries: MetadataRoute.Sitemap = [];
  
  // Add default routes
  routes.forEach((route) => {
    locales.forEach((locale) => {
      siteMapEntries.push({
        url: `https://aisod.solutions/${locale}${route === '/' ? '' : route}`,
        lastModified: new Date(),
        changeFrequency: route === '/' ? 'daily' : 'weekly',
        priority: route === '/' ? 1 : 0.8,
      });
    });
  });

  // Add section anchors for the home page
  const sections = ['#features', '#technology', '#use-cases', '#pricing', '#demo'];
  sections.forEach((section) => {
    locales.forEach((locale) => {
      siteMapEntries.push({
        url: `https://aisod.solutions/${locale}${section}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return siteMapEntries;
}
