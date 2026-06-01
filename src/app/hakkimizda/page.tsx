import App from '../../App';
import JsonLd from '../../components/JsonLd';
import { buildMetadata, pages, siteConfig } from '../../lib/seo';

export const metadata = buildMetadata(pages.about);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          '@id': `${siteConfig.url}/hakkimizda#about`,
          url: `${siteConfig.url}/hakkimizda`,
          name: pages.about.title,
          description: pages.about.description,
          isPartOf: { '@id': `${siteConfig.url}/#website` },
          about: { '@id': `${siteConfig.url}/#local-business` },
          inLanguage: 'tr-TR',
        }}
      />
      <App initialPage="about" />
    </>
  );
}
