'use client';

import React from 'react';
import { Instagram, Mail, Share2, MessageCircle } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onPageChange?: (page: 'home' | 'services' | 'about' | 'blog' | 'contact') => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-bg-dark border-t border-brand-container-hover relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 mb-12 border-b border-brand-container-hover/40">
          
          {/* Logo Brand Info Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex flex-row flex-wrap items-center gap-4 mb-4">
              <button
                onClick={handleScrollToTop}
                className="group flex items-center gap-3 cursor-pointer text-left focus:outline-none"
                id="footer-logo"
              >
                <Logo size={38} className="group-hover:scale-105 transition-transform duration-300" />
                <div className="flex flex-col -space-y-0.5">
                  <span className="font-display text-xl font-bold tracking-tighter text-white block leading-none uppercase">
                    HKN <span className="text-brand-orange font-black italic">AUTO</span>
                  </span>
                  <span className="font-mono text-[8px] tracking-[0.2em] text-brand-text-secondary uppercase block leading-none mt-0.5">
                    ENGINEERED TRUST
                  </span>
                </div>
              </button>
            </div>

            <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed max-w-sm mb-6 font-sans">
              Sakarya Modern Sanayi'de lüks ve standart binek araç gruplarında ileri teknoloji bilgisayarlı arıza teşhisi, motor revizyonu ve şanzıman onarımı sunan sertifikalı servis noktası.
            </p>
          </div>

          {/* Links grid (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6 sm:gap-8 text-left md:pl-8">
            {/* Sayfalar */}
            <div className="flex flex-col items-start w-full">
              <h5 className="font-mono text-[9px] font-bold tracking-widest text-brand-orange uppercase mb-4">
                SAYFALAR
              </h5>
              <ul className="space-y-3 text-xs sm:text-sm w-full">
                <li>
                  <button
                    onClick={() => onPageChange?.('home')}
                    className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block"
                  >
                    Ana Sayfa
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onPageChange?.('services')}
                    className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block"
                  >
                    Hizmetler
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onPageChange?.('about')}
                    className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block"
                  >
                    Hakkımızda
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onPageChange?.('blog')}
                    className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onPageChange?.('contact')}
                    className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block"
                  >
                    İletişim
                  </button>
                </li>
              </ul>
            </div>

            {/* Hizmetlerimiz */}
            <div className="flex flex-col items-start w-full">
              <h5 className="font-mono text-[9px] font-bold tracking-widest text-brand-orange uppercase mb-4">
                HİZMETLERİMİZ
              </h5>
              <ul className="space-y-3 text-xs md:text-sm w-full">
                <li>
                  <button
                    onClick={() => onPageChange?.('services')}
                    className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block"
                  >
                    Motor Mekanik
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onPageChange?.('services')}
                    className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block"
                  >
                    Elektronik Teşhis
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onPageChange?.('services')}
                    className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block"
                  >
                    Ön Takım Onarımı
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onPageChange?.('services')}
                    className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left focus:outline-none block"
                  >
                    Şanzıman Revizyonu
                  </button>
                </li>
              </ul>
            </div>

            {/* İletişim */}
            <div className="flex flex-col items-start w-full">
              <h5 className="font-mono text-[9px] font-bold tracking-widest text-brand-orange uppercase mb-4">
                İLETİŞİM
              </h5>
              <ul className="space-y-3 text-xs md:text-sm w-full text-left">
                <li>
                  <a
                    href="tel:+905330540436"
                    className="text-brand-text-secondary hover:text-white transition-colors cursor-pointer text-left block"
                  >
                    +90 (533) 054 04 36
                  </a>
                </li>
                <li>
                  <span className="text-brand-text-secondary text-left block leading-relaxed">
                    Yeşiltepe Mah. 8016 Sok. No: 6<br />Sakarya Modern Sanayi
                  </span>
                </li>
                <li className="pt-1 flex items-center gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-text-secondary hover:text-brand-orange transition-all duration-300 inline-flex items-center focus:outline-none group/insta"
                    aria-label="Instagram"
                  >
                    <div className="p-1.5 rounded-md bg-brand-container border border-brand-container-hover group-hover/insta:border-brand-orange/30 group-hover/insta:bg-brand-orange/10 transition-all flex items-center justify-center">
                      <Instagram className="w-4 h-4 text-brand-text-secondary group-hover/insta:text-brand-orange transition-colors" />
                    </div>
                  </a>
                  <a
                    href="https://wa.me/905330540436"
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-text-secondary hover:text-emerald-500 transition-all duration-300 inline-flex items-center focus:outline-none group/wa"
                    aria-label="WhatsApp"
                  >
                    <div className="p-1.5 rounded-md bg-brand-container border border-brand-container-hover group-hover/wa:border-emerald-500/30 group-hover/wa:bg-emerald-500/10 transition-all flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-brand-text-secondary group-hover/wa:text-emerald-500 transition-colors" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Lower row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-brand-text-secondary/40 text-[10px] sm:text-xs">
              © 2026 HKN Auto. Engineered Trust. Tüm hakları saklıdır.
            </span>
            <span className="text-brand-orange text-[10px] sm:text-xs font-semibold tracking-wide">
              Created by Merve Cahyir
            </span>
          </div>
          <span className="text-brand-text-secondary/40 text-[10px] sm:text-xs font-mono">
            PRECISION AUTOMOTIVE ENGINEERING // SKR
          </span>
        </div>

      </div>
    </footer>
  );
}
