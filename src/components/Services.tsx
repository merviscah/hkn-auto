'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Wrench,
  Calendar,
  Cpu,
  Sliders,
  Activity,
  X,
  Clock,
  Coins,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Truck
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-brand-orange" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-brand-orange" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-brand-orange" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-brand-orange" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-brand-orange" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-brand-orange" />;
      default:
        return <Wrench className="w-6 h-6 text-brand-orange" />;
    }
  };

  return (
    <section id="services-section" className="relative py-24 md:py-32 bg-brand-bg relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight pb-3">
            Hizmetlerimiz
          </h2>
          <div className="h-1 w-20 bg-brand-orange" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6" id="services-grid">
          {/* Earth Engine Hero Card (Full Width / Left Side Column) */}
          {SERVICES_DATA.filter(s => s.id === 'motor-mekanik').map(service => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="lg:col-span-4 bg-gradient-to-br from-brand-container-light to-brand-bg-dark border border-brand-container-hover hover:border-brand-orange/30 p-8 rounded-lg shadow-xl cursor-pointer flex flex-col justify-between group relative overflow-hidden transition-all duration-305 hover:-translate-y-1.5 hover:shadow-brand-orange/5"
              id="service-card-earth-engine"
            >
              {/* Highlight background glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-orange/5 blur-3xl group-hover:bg-brand-orange/10 transition-colors duration-300" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-brand-orange font-semibold font-mono text-xs uppercase tracking-wider">
                    Motor Mekanik
                  </div>
                  <div className="p-3 bg-brand-bg-dark rounded border border-brand-container-hover group-hover:bg-brand-orange/10 group-hover:border-brand-orange/20 transition-all duration-300">
                    {getIconComponent(service.iconName)}
                  </div>
                </div>

                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-4 border-t border-brand-bg-dark">
                <span className="text-brand-orange font-mono text-xs font-semibold tracking-wider flex items-center gap-2 group-hover:translate-x-1.5 transition-transform">
                  Detayları İncele <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}

          {/* Regular Service Cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {SERVICES_DATA.filter(s => s.id === 'on-takim').map(service => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="bg-brand-container border border-brand-container-hover hover:border-brand-orange/30 p-6 rounded-lg cursor-pointer flex flex-col justify-between group relative h-full transition-all duration-305 hover:-translate-y-1.5 hover:shadow-brand-orange/5"
                id={`service-card-${service.id}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-brand-bg-dark rounded border border-brand-container-hover group-hover:bg-brand-orange/10 group-hover:border-brand-orange/20 transition-all">
                      {getIconComponent(service.iconName)}
                    </div>
                  </div>
                  <h3 className="font-display text-md md:text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row of other services */}
          {SERVICES_DATA.filter(s => s.id !== 'motor-mekanik' && s.id !== 'on-takim').map(service => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="lg:col-span-2 bg-brand-container border border-brand-container-hover hover:border-brand-orange/30 p-6 rounded-lg cursor-pointer flex flex-col justify-between group relative min-h-[190px] transition-all duration-305 hover:-translate-y-1.5 hover:shadow-brand-orange/5"
              id={`service-card-${service.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-brand-bg-dark rounded border border-brand-container-hover group-hover:bg-brand-orange/10 group-hover:border-brand-orange/20 transition-all">
                    {getIconComponent(service.iconName)}
                  </div>
                  {service.id === 'cekici-yol-yardim' && (
                    <span className="rounded border border-brand-orange/30 bg-brand-orange/10 px-2 py-1 font-mono text-[9px] font-black uppercase tracking-wider text-brand-orange">
                      İlk 10 KM Ücretsiz
                    </span>
                  )}
                </div>
                <h3 className="font-display text-md md:text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors font-sans">
                  {service.title}
                </h3>
                <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Technical Details Modal Overlay */}
      {/* Advanced Technical Details Modal Overlay */}
      {selectedService && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-bg-dark/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedService(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-brand-container-light w-[96vw] max-w-xl h-[58vh] sm:h-auto sm:max-h-[82vh] rounded-lg border border-brand-container-hover shadow-2xl overflow-hidden flex flex-col animate-page-enter"
            id="details-modal"
          >
            {/* Modal Header */}
            <div className="border-b border-brand-container-hover p-5 flex justify-between items-center bg-brand-bg-dark">
              <div>
                <h3 className="font-display text-base md:text-lg font-black text-white">
                  {selectedService.title} Spec.
                </h3>
              </div>
            </div>

            {/* Modal Body (Scrollable specs) */}
            <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6 overflow-y-auto custom-scrollbar flex-1 min-h-0 text-sm leading-relaxed">
              {/* Metrics strip */}
              <div className="grid grid-cols-3 gap-4 border-b border-brand-container-hover pb-6" id="modal-specs">
                <div className="bg-brand-bg-dark/40 p-3 rounded border border-brand-container-hover">
                  <span className="text-brand-text-secondary/60 font-mono text-[9px] block uppercase tracking-wider mb-1">
                    Tahmini Süre
                  </span>
                  <span className="text-white font-mono font-medium flex items-center gap-1.5 text-xs">
                    <Clock className="w-3.5 h-3.5 text-brand-orange" /> {selectedService.details?.avgTime}
                  </span>
                </div>

                <div className="bg-brand-bg-dark/40 p-3 rounded border border-brand-container-hover">
                  <span className="text-brand-text-secondary/60 font-mono text-[9px] block uppercase tracking-wider mb-1">
                    Maliyet Skalası
                  </span>
                  <span className="text-white font-mono font-medium flex items-center gap-1.5 text-xs">
                    <Coins className="w-3.5 h-3.5 text-brand-orange" /> {selectedService.details?.priceRange}
                  </span>
                </div>

                <div className="bg-brand-bg-dark/40 p-3 rounded border border-brand-container-hover">
                  <span className="text-brand-text-secondary/60 font-mono text-[9px] block uppercase tracking-wider mb-1">
                    Garanti Güvencesi
                  </span>
                  <span className="text-white font-mono font-medium flex items-center gap-1.5 text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" /> {selectedService.details?.warranty}
                  </span>
                </div>
              </div>

              {/* Description and Diagnostic apps */}
              <div>
                <h4 className="font-mono text-xs uppercase text-brand-orange tracking-widest mb-3">
                  Hizmet Açıklaması
                </h4>
                <p className="text-brand-text-secondary leading-relaxed bg-brand-bg-dark/35 p-4 rounded border border-brand-container-hover font-sans text-xs sm:text-sm">
                  {selectedService.description}
                </p>
              </div>

              {/* Tech Apps specs */}
              {selectedService.details?.diagnosticApps && (
                <div>
                  <h4 className="font-mono text-xs uppercase text-brand-orange tracking-widest mb-3">
                    Sistem Teşhis Uygulamaları
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono font-semibold">
                    {selectedService.details.diagnosticApps.map((app, index) => (
                      <li key={index} className="flex items-center gap-2 p-2 bg-brand-bg-dark/50 rounded border border-brand-container-hover text-brand-text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Step-by-step checklist */}
              {selectedService.details?.steps && (
                <div>
                  <h4 className="font-mono text-xs uppercase text-brand-orange tracking-widest mb-3">
                    Süreç Adımları ve Standart Kontroller
                  </h4>
                  <div className="space-y-3 font-sans">
                    {selectedService.details.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-brand-bg-dark/25 rounded border border-brand-container-hover">
                        <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-mono font-bold text-brand-text-secondary/50 block">0{idx + 1} / METOT</span>
                          <span className="text-brand-text-primary font-medium text-xs sm:text-sm">{step}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-brand-container-hover p-4 md:p-6 flex items-center justify-between bg-brand-bg-dark">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-brand-text-secondary hover:text-white text-xs font-mono"
              >
                Kapat
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onSelectService(selectedService.title);
                }}
                className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold font-display tracking-wider px-5 py-3 rounded text-xs uppercase shadow-md cursor-pointer"
                id="modal-quick-book-btn"
              >
                Bu Hizmet İçin Randevu Al
              </button>
            </div>
          </div>
        </div>
      , document.body)}
    </section>
  );
}
