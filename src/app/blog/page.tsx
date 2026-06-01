import App from '../../App';
import JsonLd from '../../components/JsonLd';
import { buildMetadata, blogSeo, pages, siteConfig } from '../../lib/seo';

export const metadata = buildMetadata(pages.blog);

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          '@id': `${siteConfig.url}/blog#blog`,
          url: `${siteConfig.url}/blog`,
          name: pages.blog.title,
          description: pages.blog.description,
          publisher: { '@id': `${siteConfig.url}/#local-business` },
          blogPost: blogSeo.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: `${siteConfig.url}${post.path}`,
          })),
          inLanguage: 'tr-TR',
        }}
      />
      <App initialPage="blog" />
    </>
  );
}
