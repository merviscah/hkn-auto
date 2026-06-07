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

  const keywords = post.id === 'sakarya-cekici-yol-yardim'
    ? [
        'Sakarya çekici',
        'Sakarya yol yardım',
        'Sakarya oto kurtarma',
        'Serdivan çekici',
        'Adapazarı çekici',
        'ilk 10 km ücretsiz çekici',
      ]
    : ['Sakarya oto servis', 'Sakarya araç bakım', 'oto ekspertiz Sakarya'];

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: post.path,
    type: 'article',
    keywords,
    image: post.image,
    imageAlt: `${post.title} - HKN Auto Sakarya`,
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
          image: absoluteUrl(post.image),
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
