import App from '../../App';
import JsonLd from '../../components/JsonLd';
import { buildMetadata, pages, siteConfig } from '../../lib/seo';

export const metadata = buildMetadata(pages.contact);

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          '@id': `${siteConfig.url}/iletisim#contact`,
          url: `${siteConfig.url}/iletisim`,
          name: pages.contact.title,
          description: pages.contact.description,
          isPartOf: { '@id': `${siteConfig.url}/#website` },
          about: { '@id': `${siteConfig.url}/#local-business` },
          mainEntity: {
            '@type': 'AutoRepair',
            '@id': `${siteConfig.url}/#local-business`,
            name: siteConfig.name,
            telephone: siteConfig.phone,
            address: siteConfig.address,
            hasMap: siteConfig.mapUrl,
            geo: {
              '@type': 'GeoCoordinates',
              latitude: siteConfig.latitude,
              longitude: siteConfig.longitude,
            },
          },
          inLanguage: 'tr-TR',
        }}
      />
      <App initialPage="contact" />
    </>
  );
}
