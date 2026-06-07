import type { Metadata } from 'next';

export const siteConfig = {
  name: 'HKN Auto',
  url: 'https://hknauto.com',
  locale: 'tr_TR',
  phone: '+90 533 054 04 36',
  phoneHref: '+905330540436',
  address: 'Yeşiltepe Mah. 8016 Sok. No: 6, Sakarya Moderen Sanayi',
  city: 'Sakarya',
  district: 'Serdivan',
  image: '/images/sections/hkn-auto-sakarya-lift-servis.jpg',
  logo: '/images/hkn-logo.png',
  mapUrl: 'https://maps.app.goo.gl/FSTxF46a9AhBJzYB8',
  latitude: 40.7364412,
  longitude: 30.3860991,
};

export const seoKeywords = [
  'Sakarya oto servis',
  'Sakarya araç bakım',
  'oto ekspertiz Sakarya',
  'Serdivan oto servis',
  'araç bakım hizmetleri',
  'detaylı araç temizliği',
  'oto bakım merkezi',
  'Sakarya motor mekanik',
  'Sakarya periyodik bakım',
  'Sakarya otomatik şanzıman',
  'Sakarya oto elektrik',
  'Sakarya çekici',
  'Sakarya yol yardım',
  'Sakarya oto kurtarma',
  'Sakarya 7/24 çekici',
  'Sakarya acil yol yardım',
  'ilk 10 km ücretsiz çekici',
  'bilgisayarlı arıza tespiti Sakarya',
  'Sakarya modern sanayi oto servis',
  'Sakarya Moderen Sanayi oto servis',
  'Sakarya motor ustası',
  'Sakarya oto tamir',
  'Sakarya araç arıza tespiti',
];

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
  imageAlt?: string;
};

export const pages = {
  home: {
    title: 'HKN Auto | Sakarya Oto Servis ve Araç Bakım Merkezi',
    description:
      'HKN Auto, Sakarya ve Serdivan bölgesinde motor mekanik, periyodik bakım, oto ekspertiz, elektronik arıza tespiti, çekici ve yol yardım hizmetleri sunar.',
    path: '/',
    keywords: ['Sakarya oto servis', 'Sakarya araç bakım', 'oto bakım merkezi', 'Serdivan oto servis'],
  },
  services: {
    title: 'Sakarya Araç Bakım Hizmetleri | HKN Auto',
    description:
      'Sakarya araç bakım hizmetleri: motor revizyonu, periyodik bakım, oto elektrik, otomatik şanzıman, çekici ve ilk 10 km ücretsiz yol yardım çözümleri.',
    path: '/hizmetler',
    keywords: ['Sakarya araç bakım', 'araç bakım hizmetleri', 'oto ekspertiz Sakarya', 'Sakarya çekici', 'Sakarya yol yardım'],
  },
  about: {
    title: 'Hakkımızda | HKN Auto Sakarya Oto Bakım Merkezi',
    description:
      'HKN Auto Sakarya Modern Sanayi konumunda profesyonel oto bakım, bilgisayarlı arıza tespiti ve mekanik onarım standartlarıyla hizmet verir.',
    path: '/hakkimizda',
    keywords: ['oto bakım merkezi', 'Sakarya oto servis', 'Serdivan oto servis'],
  },
  gallery: {
    title: 'Sakarya Oto Servis Galerisi | HKN Auto',
    description:
      'HKN Auto Sakarya servis galerisi: motor mekanik bakım, bilgisayarlı arıza tespiti, periyodik bakım, çekici ve yol yardım hizmet görselleri.',
    path: '/galeri',
    keywords: ['Sakarya oto servis galeri', 'Sakarya araç bakım görselleri', 'HKN Auto galeri', 'Sakarya çekici görselleri'],
  },
  blog: {
    title: 'Oto Bakım Rehberi | HKN Auto Sakarya Blog',
    description:
      'Sakarya oto servis, araç bakım, çekici, yol yardım, periyodik bakım, motor mekanik ve oto ekspertiz konularında HKN Auto uzman rehberleri.',
    path: '/blog',
    keywords: ['Sakarya oto servis', 'Sakarya araç bakım', 'oto ekspertiz Sakarya', 'Sakarya çekici', 'Sakarya yol yardım'],
  },
  contact: {
    title: 'İletişim ve Randevu | HKN Auto Sakarya',
    description:
      'Sakarya oto servis, çekici ve yol yardım talebi için HKN Auto ile iletişime geçin. Sakarya çevresinde çekici hizmetinde ilk 10 km ücretsiz.',
    path: '/iletisim',
    keywords: ['Serdivan oto servis', 'Sakarya oto servis', 'Sakarya araç bakım', 'Sakarya çekici telefon', 'Sakarya yol yardım'],
  },
} satisfies Record<string, PageSeo>;

export const blogSeo = [
  {
    id: 'ai-motor-analizi',
    title: 'Sakarya Motor Mekanik Bakım ve Motor Revizyonu | HKN Auto',
    description:
      'Sakarya motor mekanik bakım, motor revizyonu ve bilgisayarlı tanı süreçleri için HKN Auto uzman rehberi.',
    path: '/blog/ai-motor-analizi',
    image: '/images/blog/sakarya-motor-revizyonu.jpg',
  },
  {
    id: 'sakarya-cekici-yol-yardim',
    title: 'Sakarya Çekici ve Yol Yardım | İlk 10 KM Ücretsiz | HKN Auto',
    description:
      'Sakarya çekici, oto kurtarma ve yol yardım hizmeti. Serdivan, Adapazarı, Erenler ve Arifiye çevresinde HKN Auto çekici hizmetinde ilk 10 km ücretsiz.',
    path: '/blog/sakarya-cekici-yol-yardim',
    image: '/images/blog/sakarya-cekici-yol-yardim.jpg',
  },
  {
    id: 'yazilim-guncellemeleri',
    title: 'Sakarya Oto Elektrik ve ECU Programlama | HKN Auto',
    description:
      'Sakarya oto elektrik, ECU programlama, CAN-BUS arıza tespiti ve elektronik araç bakım çözümleri.',
    path: '/blog/yazilim-guncellemeleri',
    image: '/images/blog/sakarya-ecu-elektronik-ariza.jpg',
  },
  {
    id: 'fren-bakimi',
    title: 'Sakarya Ön Takım Tamiri ve Süspansiyon Bakımı | HKN Auto',
    description:
      'Sakarya ön takım tamiri, amortisör kontrolü, rot ayarı ve güvenli sürüş için yürüyen aksam bakım rehberi.',
    path: '/blog/fren-bakimi',
    image: '/images/blog/sakarya-on-takim-suspansiyon.jpg',
  },
  {
    id: 'hata-kodlari-obd2',
    title: 'Sakarya Periyodik Bakım ve Motor Kontrol Listesi | HKN Auto',
    description:
      'Sakarya periyodik bakım kapsamında motor yağı, filtreler, fren sistemi ve bilgisayarlı arıza kontrol detayları.',
    path: '/blog/hata-kodlari-obd2',
    image: '/images/blog/sakarya-periyodik-bakim.jpg',
  },
  {
    id: 'sanziman-omru',
    title: 'Sakarya Otomatik Şanzıman Bakım ve Revizyon | HKN Auto',
    description:
      'Sakarya otomatik şanzıman bakım, yağ değişimi, mekatronik kontrol ve revizyon süreçleri.',
    path: '/blog/sanziman-omru',
    image: '/images/blog/sakarya-otomatik-sanziman.jpg',
  },
  {
    id: 'rutin-kontrol-hizmeti',
    title: 'Sakarya Oto Ekspertiz ve 15 Nokta Rutin Kontrol | HKN Auto',
    description:
      'Oto ekspertiz Sakarya aramalarında HKN Auto 15 nokta rutin kontrol, fren, ön takım, akü ve OBD tarama hizmetleri.',
    path: '/blog/rutin-kontrol-hizmeti',
    image: '/images/blog/sakarya-15-nokta-kontrol.jpg',
  },
];

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

export function buildMetadata(page: PageSeo): Metadata {
  const url = absoluteUrl(page.path);
  const title = page.title;
  const description = page.description;
  const image = page.image ?? siteConfig.image;
  const keywords = [...seoKeywords, ...(page.keywords ?? [])];

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: page.type ?? 'website',
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: image,
          width: 1408,
          height: 768,
          alt: page.imageAlt ?? 'HKN Auto Sakarya oto servis ve araç bakım merkezi',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    category: 'automotive',
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${siteConfig.url}/#local-business`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.image),
    logo: absoluteUrl(siteConfig.logo),
    hasMap: siteConfig.mapUrl,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude,
    },
    telephone: siteConfig.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Yeşiltepe Mah. 8016 Sok. No: 6, Sakarya Moderen Sanayi',
      addressLocality: 'Sakarya',
      addressRegion: 'Sakarya',
      addressCountry: 'TR',
    },
    areaServed: ['Sakarya', 'Serdivan', 'Adapazarı', 'Erenler', 'Arifiye'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:30',
        closes: '18:00',
      },
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sakarya oto servis' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sakarya araç bakım' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Oto ekspertiz Sakarya' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Detaylı araç temizliği' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Otomatik şanzıman bakım ve revizyon' } },
      {
        '@type': 'Offer',
        description: 'Sakarya çekici ve yol yardım hizmetinde ilk 10 kilometre ücretsizdir.',
        itemOffered: {
          '@type': 'Service',
          name: 'Sakarya Çekici ve Yol Yardım',
          serviceType: '7/24 çekici, oto kurtarma ve acil yol yardım',
          areaServed: ['Sakarya', 'Serdivan', 'Adapazarı', 'Erenler', 'Arifiye'],
        },
      },
    ],
    sameAs: ['https://wa.me/905330540436', siteConfig.mapUrl],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'tr-TR',
    publisher: {
      '@id': `${siteConfig.url}/#local-business`,
    },
  };
}
