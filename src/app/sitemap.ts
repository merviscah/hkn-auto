import type { MetadataRoute } from 'next';
import { blogSeo, pages, siteConfig } from '../lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-01');
  const staticPages = Object.values(pages).map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified,
    changeFrequency: page.path === '/' ? 'weekly' : 'monthly',
    priority: page.path === '/' ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const blogPages = blogSeo.map((post) => ({
    url: `${siteConfig.url}${post.path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticPages, ...blogPages];
}
