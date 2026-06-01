import type { Metadata } from 'next';
import JsonLd from '../components/JsonLd';
import '../index.css';
import { buildMetadata, localBusinessSchema, pages, siteConfig, websiteSchema } from '../lib/seo';

export const metadata: Metadata = {
  ...buildMetadata(pages.home),
  icons: {
    icon: siteConfig.logo,
    apple: siteConfig.logo,
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr-TR">
      <body className="antialiased">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
