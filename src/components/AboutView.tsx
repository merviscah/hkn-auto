'use client';

import React from 'react';
import { Milestone, Shield, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onOpenBooking: () => void;
}

export default function AboutView({ onOpenBooking }: AboutViewProps) {
  return (
    <div className="pt-28 pb-20 bg-brand-bg relative min-h-screen" id="about-page">
      {/* Background radial glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/[0.02] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/[0.01] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section: Since 1998 & Engineered Trust header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase block mb-3">
              1998'DEN BERİ
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Güven İnşa Ediyoruz.
            </h1>
            <div className="h-1.5 w-24 bg-brand-orange mt-6" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-brand-text-primary text-base md:text-lg leading-relaxed font-sans">
              HKN Auto'da araçları sadece tamir etmiyoruz, performanslarını optimize ediyoruz. Mekanik hassasiyet ve teknik mükemmellik prensipleri üzerine kurulup, üst düzey otomotiv teşhis ve onarımında öncü bir merkeze dönüştük.
            </p>
            <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed">
              Her aracın kendine has bir karakteri ve mühendislik yapısı olduğunu biliyor, bu bilinçle hareket ediyoruz. Sakarya Modern Sanayi'de yer alan teknolojik atölyemizle, lüks ve standart binek araçların tüm mekanik, elektronik ve şanzıman gereksinimlerini en üst standartta çözüme kavuşturuyoruz.
            </p>
          </div>
        </div>

        {/* Custom Visual: Mechanic Service Bay Image & Frame styling */}
        <div className="w-full relative rounded-xl border border-brand-container-hover/60 overflow-hidden mb-24 aspect-[21/9] bg-gradient-to-r from-brand-bg-dark to-brand-container shadow-2xl flex items-center justify-center">
          {/* Futuristic grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none" 
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} 
          />
          <div className="absolute inset-0 bg-brand-orange/[0.04] mix-blend-color" />
          
          {/* Content Graphic / Title */}
          <div className="relative text-center p-8 z-10 space-y-3">
            <div className="inline-flex p-3 bg-brand-bg/85 border border-brand-orange/30 rounded-full text-brand-orange animate-pulse mb-2 scale-110">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-mono text-white text-xs tracking-widest font-black uppercase">
              HKN AUTO TEŞHİS LABORATUVARI
            </h3>
            <p className="text-brand-text-secondary text-xs sm:text-xs tracking-wider max-w-sm mx-auto font-mono uppercase bg-brand-bg-dark/80 py-1.5 px-3 rounded border border-brand-container-hover">
              SİSTEM DURUMU: AKTİF ÇALIŞMA // %100 HAZIR
            </p>
          </div>
          {/* Bottom styling line */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
        </div>

        {/* Phase Timeline List Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          {/* Phase 01 */}
          <div className="bg-brand-container/60 border border-brand-container-hover p-8 rounded-lg relative overflow-hidden group hover:border-brand-orange/20 transition-all duration-300" id="phase-01-card">
            {/* Ambient accent background */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-orange/[0.02] blur-2xl group-hover:bg-brand-orange/[0.04] transition-colors" />
            
            <span className="font-mono text-xs font-bold text-brand-orange tracking-wider block mb-2 uppercase">
              AŞAMA 01
            </span>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-orange/10 border border-brand-orange/20 rounded text-brand-orange shrink-0">
                <Milestone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-white text-xl md:text-2xl">
                Kuruluş ve Temeller
              </h3>
            </div>
            <p className="text-brand-text-secondary text-sm leading-relaxed">
              Avrupa menşeili motorlar konusunda uzmanlaşmış butik bir atölye olarak başladık ve bölgesel mekanikte hassasiyet standartlarını belirledik. Atölyemizin temelini atan bu safhada, kusursuz el işçiliği ve mühendislik nosyonunu en üst düzeyde benimsedik.
            </p>
          </div>

          {/* Phase 02 */}
          <div className="bg-brand-container/60 border border-brand-container-hover p-8 rounded-lg relative overflow-hidden group hover:border-brand-orange/20 transition-all duration-300" id="phase-02-card">
            {/* Ambient accent background */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/[0.01] blur-2xl group-hover:bg-blue-500/[0.02] transition-colors" />

            <span className="font-mono text-xs font-bold text-brand-orange tracking-wider block mb-2 uppercase">
              AŞAMA 02
            </span>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-orange/10 border border-brand-orange/20 rounded text-brand-orange shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-white text-xl md:text-2xl">
                Dijital Entegrasyon
              </h3>
            </div>
            <p className="text-brand-text-secondary text-sm leading-relaxed">
              Gerçek zamanlı araç sağlığı takibi ve şeffaf müşteri raporlaması sağlayan en son teknoloji bulut teşhis sistemlerini entegre ettik. Geleneksel mekanik tecrübemizi, modern bulut veri analiz araçları ve dijital teşhis süreçleri ile harmanladık.
            </p>
          </div>
        </div>

        {/* Statistic counters cards block exactly like Screenshot 3 */}
        <div className="max-w-4xl mx-auto bg-brand-bg-dark/60 border border-brand-container-hover/80 rounded-lg p-8 md:p-12 mb-24 relative overflow-hidden text-center">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-brand-container-hover">
            <div className="pb-8 md:pb-0">
              <span className="font-display text-5xl md:text-6xl font-black text-white leading-none block">
                25k+
              </span>
              <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mt-4">
                BAKIMI YAPILAN ARAÇ
              </span>
              <p className="text-brand-text-secondary text-xs sm:text-sm mt-3 leading-relaxed max-w-xs mx-auto">
                Bugüne kadar sistemli onarım ve tamir proseslerinden geçen toplam lüks ve standart binek araç adedi.
              </p>
            </div>

            <div className="pt-8 md:pt-0">
              <span className="font-display text-5xl md:text-6xl font-black text-brand-orange leading-none block">
                100%
              </span>
              <span className="font-mono text-xs text-brand-text-primary font-bold uppercase tracking-widest block mt-4">
                ORİJİNAL PARÇA HASSASİYETİ
              </span>
              <p className="text-brand-text-secondary text-xs sm:text-sm mt-3 leading-relaxed max-w-xs mx-auto">
                Tüm mekanik ve yedek parça montaj süreçlerimizde yalnızca marka onaylı orijinal ekipman kullanımı.
              </p>
            </div>
          </div>
        </div>

        {/* Brand visual call-out banner block */}
        <div className="bg-[#131b26] border border-brand-container-hover p-8 md:p-12 rounded-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6" id="about-cta">
          <div className="absolute right-0 top-0 w-80 h-80 bg-brand-orange/[0.03] blur-[120px] pointer-events-none rounded-full" />
          
          <div>
            <h3 className="font-display font-black text-white text-xl md:text-2xl lg:text-3xl leading-snug">
              Kusursuz Mühendisliği Deneyimleyin.
            </h3>
            <p className="text-brand-text-secondary text-xs sm:text-sm mt-2 max-w-lg leading-relaxed">
              Aracınızı profesyonel onarım kalitesine ve sertifikalı mekanik proses standartlarına emanet etmek için şimdi online formunuzu oluşturun.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold font-display uppercase tracking-widest py-3.5 px-8 rounded text-xs transition-all duration-300 flex items-center gap-3 shrink-0 active:scale-[0.99] shadow-lg shadow-brand-orange/15 cursor-pointer"
            id="about-cta-book-btn"
          >
            <span>Randevu Al</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
