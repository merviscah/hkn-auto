'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, ChevronRight } from 'lucide-react';
import heroBgImage from '../assets/images/hero_car_bg_1780270553383.png';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollTo: (elementId: string) => void;
  onPageChange: (page: 'home' | 'services' | 'about' | 'blog' | 'contact') => void;
}

export default function Hero({ onOpenBooking, onScrollTo, onPageChange }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-brand-bg-dark"
    >
      {/* Background and Sfumato Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBgImage}
          alt="HKN Auto profesyonel binek araç servisi ve lüks motor mekanik bakım onarım atölyesi arka plan görseli"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center opacity-40 scale-105 filter brightness-75 contrast-125"
        />
        {/* Deep shadows and gradient overlay to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-brand-bg-dark/95" />
        <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-brand-bg via-brand-bg/40 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
        {/* Hero Copy */}
        <div className="max-w-3xl flex flex-col items-start">
          {/* Tagline */}
          <div className="flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-brand-orange" />
            <span className="font-mono text-xs md:text-sm font-bold tracking-widest text-brand-orange uppercase">
              ENGINEERED TRUST
            </span>
            <span className="h-px w-2 bg-brand-orange/40" />
          </div>

          {/* Primary Heading */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight max-w-3xl"
            id="hero-headline"
          >
            HKN Auto: Profesyonel Bakım ve Onarım Merkezi
          </h1>

          {/* Subtitle / Paragraph */}
          <p
            className="text-brand-text-secondary text-base sm:text-lg md:text-xl font-sans leading-relaxed mb-10 max-w-2xl"
            id="hero-subtext"
          >
            Sakarya Modern Sanayi'de modern teşhis cihazları ve uzman kadromuzla aracınızın performansını ve güvenliğini en üst düzeye çıkarıyoruz. Lüks ve standart segmentlerde teknik mükemmellik.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenBooking}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold font-display tracking-wide px-8 py-4 rounded text-sm uppercase shadow-2xl shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center gap-3 cursor-pointer"
              id="hero-cta-booking"
            >
              <Calendar className="w-4 h-4" />
              <span>Randevu Al</span>
            </button>

            <button
              onClick={() => onPageChange('services')}
              className="bg-brand-container hover:bg-brand-container-hover text-white border border-brand-container-hover hover:border-brand-text-secondary/30 font-semibold font-display tracking-wide px-8 py-4 rounded text-sm uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer"
              id="hero-cta-services"
            >
              <span>Hizmetlerimizi İnceleyin</span>
              <ChevronRight className="w-4 h-4 text-brand-text-secondary group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic bottom slope decoration */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
    </section>
  );
}
