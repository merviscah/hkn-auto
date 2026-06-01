import App from '../../App';
import JsonLd from '../../components/JsonLd';
import { buildMetadata, pages, siteConfig } from '../../lib/seo';

export const metadata = buildMetadata(pages.services);

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${siteConfig.url}/hizmetler#services`,
          name: 'Sakarya araç bakım hizmetleri',
          provider: { '@id': `${siteConfig.url}/#local-business` },
          areaServed: ['Sakarya', 'Serdivan', 'Adapazarı'],
          serviceType: [
            'Sakarya oto servis',
            'Sakarya araç bakım',
            'oto ekspertiz Sakarya',
            'periyodik bakım',
            'otomatik şanzıman bakım',
          ],
        }}
      />
      <App initialPage="services" />
    </>
  );
}
