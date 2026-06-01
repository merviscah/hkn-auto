import { notFound } from 'next/navigation';
import App from '../../../App';
import JsonLd from '../../../components/JsonLd';
import { absoluteUrl, blogSeo, buildMetadata, siteConfig } from '../../../lib/seo';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogSeo.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogSeo.find((item) => item.id === slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: post.path,
    type: 'article',
    keywords: ['Sakarya oto servis', 'Sakarya araç bakım', 'oto ekspertiz Sakarya'],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogSeo.find((item) => item.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          '@id': `${absoluteUrl(post.path)}#article`,
          headline: post.title,
          description: post.description,
          url: absoluteUrl(post.path),
          image: absoluteUrl(siteConfig.image),
          author: {
            '@type': 'Organization',
            name: siteConfig.name,
          },
          publisher: {
            '@id': `${siteConfig.url}/#local-business`,
          },
          mainEntityOfPage: absoluteUrl(post.path),
          inLanguage: 'tr-TR',
        }}
      />
      <App initialPage="blog-detail" initialBlogPostId={slug} />
    </>
  );
}
