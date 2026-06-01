'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Cpu, Eye } from 'lucide-react';
import diagnosticTabletImage from '../assets/images/diagnostic_tablet_1780270573646.png';

const features = [
  {
    icon: <Award className="w-5 h-5 text-brand-orange" />,
    title: 'Uzman Teknik Kadro',
    desc: 'Her biri kendi alanında sertifikalı ve tecrübeli ustalarımızla aracınız emin ellerde.'
  },
  {
    icon: <Cpu className="w-5 h-5 text-brand-orange" />,
    title: 'İleri Teknoloji Teşhis',
    desc: 'Orijinal servis ekipmanları ve güncel yazılımlarla hata payını sıfıra indiriyoruz.'
  },
  {
    icon: <Eye className="w-5 h-5 text-brand-orange" />,
    title: 'Şeffaf Hizmet Anlayışı',
    desc: 'Yapılan her işlem ve değişen her parça hakkında detaylı raporlama ve onay süreci.'
  }
];

export default function WhyUs() {
  return (
    <section id="why-us-section" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
      {/* Decorative linear overlay lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-container-hover to-transparent" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-brand-orange/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center transform-gpu will-change-[transform,opacity]">
        {/* Left Column: Copy & Details */}
        <div className="lg:col-span-6 flex flex-col items-start" id="why-us-benefits-column">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight pb-3">
              Neden Biz?
            </h2>
            <div className="h-1 w-20 bg-brand-orange" />
          </div>

          <div className="space-y-10" id="benefits-items-list">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 group"
              >
                {/* Custom Icon wrapper */}
                <div className="p-3 bg-brand-container rounded-lg border border-brand-container-hover group-hover:bg-brand-orange/10 group-hover:border-brand-orange/40 transition-colors shrink-0 mt-0.5 shadow-md">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-display text-base md:text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed mt-2 max-w-lg">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Diagnostic Device Showcase */}
        <div className="lg:col-span-6">
          <div className="relative group" id="why-us-image-container">
            {/* Visual glow frame */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-brand-orange/30 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />
            
            {/* Image card wrapper */}
            <div className="relative rounded-xl overflow-hidden border border-brand-container-hover bg-brand-bg shadow-2xl">
              <Image
                src={diagnosticTabletImage}
                alt="HKN Auto arıza tespit tableti ile araç ECU kod taraması ve telemetri veri analiz süreci"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full object-cover aspect-[4/3] group-hover:scale-[1.03] transition duration-700 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
