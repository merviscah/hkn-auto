'use client';

import Image from 'next/image';
import { MapPin, ShieldCheck } from 'lucide-react';

type GalleryItem = {
  label: string;
  alt: string;
  image: string;
};

const galleryItems: GalleryItem[] = [
  {
    label: 'Sakarya motor yağı ve periyodik bakım',
    alt: 'HKN Auto Sakarya servisinde motor yağı ve periyodik bakım uygulaması',
    image: '/images/gallery/hkn-motor-yagi-bakimi.jpg',
  },
  {
    label: 'Sakarya çekici ve yol yardım',
    alt: 'HKN Auto Sakarya çekici ve yol yardım aracı',
    image: '/images/gallery/hkn-sakarya-cekici-yol-yardim.jpg',
  },
  {
    label: 'Sakarya BMW motor ve mekanik servisi',
    alt: 'HKN Auto Sakarya servisinin önünde BMW marka araç',
    image: '/images/gallery/hkn-auto-sakarya-bmw-servis.jpg',
  },
  {
    label: 'Sakarya şanzıman ve yürüyen aksam servisi',
    alt: 'HKN Auto Sakarya servisinde Chrysler marka araç',
    image: '/images/gallery/hkn-auto-sakarya-chrysler-servis.jpg',
  },
  {
    label: 'HKN Auto Sakarya servis alanı',
    alt: 'HKN Auto Sakarya Modern Sanayi servis alanı ve araçlar',
    image: '/images/gallery/hkn-auto-sakarya-servis-onu.jpg',
  },
  {
    label: 'Sakarya Moderen Sanayi oto servis',
    alt: 'HKN Auto Sakarya Modern Sanayi oto servis binası',
    image: '/images/gallery/hkn-auto-sakarya-modern-sanayi.jpg',
  },
];

export default function GalleryView() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-bg pb-24 pt-32" id="gallery-page">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-orange/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <header className="mb-12 max-w-3xl">
          <span className="mb-3 block font-mono text-xs font-bold uppercase tracking-widest text-brand-orange">
            HKN Auto Sakarya
          </span>
          <h1 className="font-display text-4xl font-black tracking-tight text-white md:text-5xl">
            Servis Galerisi
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-brand-text-secondary md:text-base">
            Sakarya Modern Sanayi&apos;de sunduğumuz motor mekanik, periyodik bakım,
            elektronik arıza tespiti, çekici ve yol yardım hizmetlerinden görseller.
          </p>
          <div className="mt-6 h-1.5 w-20 bg-brand-orange" />
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.image}
              className="group overflow-hidden rounded-lg border border-brand-container-hover bg-brand-container shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/35"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-bg-dark">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-dark/35 via-transparent to-transparent" />
              </div>
              <div className="border-t border-brand-container-hover px-5 py-4">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                  {item.label}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 rounded-lg border border-brand-container-hover bg-brand-bg-dark/50 p-6 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
            <div>
              <h2 className="text-sm font-bold text-white">Sakarya Modern Sanayi</h2>
              <p className="mt-1 text-xs leading-relaxed text-brand-text-secondary">
                Yeşiltepe Mah. 8016 Sok. No: 6, Sakarya Moderen Sanayi adresinde hizmet veriyoruz.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
            <div>
              <h2 className="text-sm font-bold text-white">Güvenli Servis Süreci</h2>
              <p className="mt-1 text-xs leading-relaxed text-brand-text-secondary">
                Araç kabulünden teslimata kadar kontrollü ve kayıtlı servis yaklaşımı.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
