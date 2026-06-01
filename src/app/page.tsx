import App from '../App';
import JsonLd from '../components/JsonLd';
import { buildMetadata, pages, siteConfig } from '../lib/seo';

export const metadata = buildMetadata(pages.home);

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${siteConfig.url}/#home`,
          url: siteConfig.url,
          name: pages.home.title,
          description: pages.home.description,
          isPartOf: { '@id': `${siteConfig.url}/#website` },
          about: { '@id': `${siteConfig.url}/#local-business` },
          inLanguage: 'tr-TR',
        }}
      />
      <App />
    </>
  );
}
