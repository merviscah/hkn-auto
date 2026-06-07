import App from '../../App';
import JsonLd from '../../components/JsonLd';
import { absoluteUrl, buildMetadata, pages, siteConfig } from '../../lib/seo';

export const metadata = buildMetadata(pages.gallery);

const galleryImages = [
  {
    url: absoluteUrl('/images/gallery/hkn-motor-yagi-bakimi.jpg'),
    name: 'HKN Auto motor yağı ve periyodik bakım',
    caption: 'Sakarya motor yağı, filtre ve periyodik araç bakım hizmeti',
  },
  {
    url: absoluteUrl('/images/gallery/hkn-sakarya-cekici-yol-yardim.jpg'),
    name: 'HKN Auto Sakarya çekici ve yol yardım',
    caption: 'Sakarya çekici hizmetinde ilk 10 kilometre ücretsiz',
  },
  {
    url: absoluteUrl('/images/gallery/hkn-auto-sakarya-bmw-servis.jpg'),
    name: 'HKN Auto Sakarya BMW servis',
    caption: 'Sakarya motor mekanik bakım ve araç onarım merkezi',
  },
  {
    url: absoluteUrl('/images/gallery/hkn-auto-sakarya-chrysler-servis.jpg'),
    name: 'HKN Auto şanzıman ve yürüyen aksam servisi',
    caption: 'Sakarya otomatik şanzıman ve ön takım bakım hizmetleri',
  },
  {
    url: absoluteUrl('/images/gallery/hkn-auto-sakarya-servis-onu.jpg'),
    name: 'HKN Auto Sakarya servis alanı',
    caption: 'Sakarya Modern Sanayi profesyonel oto servis alanı',
  },
  {
    url: absoluteUrl('/images/gallery/hkn-auto-sakarya-modern-sanayi.jpg'),
    name: 'HKN Auto Sakarya Modern Sanayi',
    caption: 'HKN Auto araç bakım ve onarım merkezi',
  },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          '@id': `${siteConfig.url}/galeri#gallery`,
          url: `${siteConfig.url}/galeri`,
          name: pages.gallery.title,
          description: pages.gallery.description,
          about: { '@id': `${siteConfig.url}/#local-business` },
          associatedMedia: galleryImages.map((image) => ({
            '@type': 'ImageObject',
            contentUrl: image.url,
            name: image.name,
            caption: image.caption,
          })),
          inLanguage: 'tr-TR',
        }}
      />
      <App initialPage="gallery" />
    </>
  );
}
