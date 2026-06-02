'use client';

import React from 'react';
import {
  Wrench, Cpu, Sliders, ShieldCheck, Activity, Calendar,
  Check, ArrowRight, Gauge, AlertCircle, Eye, Settings, HelpCircle
} from 'lucide-react';

interface ServicesViewProps {
  onOpenBooking: () => void;
  onScrollToContact: () => void;
}

export default function ServicesView({ onOpenBooking, onScrollToContact }: ServicesViewProps) {
  return (
    <div className="relative z-10 min-h-screen bg-brand-bg overflow-hidden" id="services-page">
      <div className="min-h-screen flex items-center justify-center px-6 pb-10 pt-28 md:px-12 md:pt-32">
        <div className="relative w-full max-w-6xl">
          {/* Visual background lights */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange/[0.03] blur-[150px] pointer-events-none rounded-full" />
          <div className="absolute bottom-1/2 right-0 w-80 h-80 bg-blue-500/[0.01] blur-[130px] pointer-events-none rounded-full" />

          <div className="w-full">
            {/* Page Header */}
            <div className="mb-16 max-w-3xl mx-auto text-center">
              <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase block mb-3">
                PREMIUM DIAGNOSTICS
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                Gelişmiş Teknik Servis Hizmetleri
              </h1>
              <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed">
                Modern otomobil teknolojileri için tasarlanmış laboratuvar titizliğinde servis deneyimi. Aracınızın performansı ve güvenliği için uzman kadromuzla yanınızdayız.
              </p>
              <div className="h-1.5 w-20 bg-brand-orange mt-6 mx-auto" />
            </div>

            {/* High-fidelity Upper Cards Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8" id="upper-service-row">

              {/* Left Column wide card: MECH-001 Motor Mekanik */}
              <div className="lg:col-span-7 bg-[#131b26] border border-brand-container-hover/80 p-8 rounded-lg relative overflow-hidden group hover:border-brand-orange/35 transition-all duration-300 flex flex-col justify-between min-h-[380px]" id="mech-001-detailed-card">
                {/* Ambient visual overlay */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-orange/[0.04] blur-[100px] pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] text-brand-orange font-bold tracking-widest bg-brand-orange/5 px-2.5 py-1 rounded border border-brand-orange/20">
                      SERVICE ID: MECH-001
                    </span>
                    <div className="p-2.5 bg-brand-bg-dark rounded border border-brand-container-hover text-brand-orange">
                      <Wrench className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-white mb-4 group-hover:text-brand-orange transition-colors">
                    Motor Mekanik Bakım Onarım Revizyon
                  </h3>
                  <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
                    Motorunuzun ömrünü uzatacak kapsamlı revizyon işlemleri. Silindir kapak taşlamadan, piston değişimine kadar tüm süreçler OEM standartlarında titizlikle yürütülür.
                  </p>
                </div>

                {/* Micro Tags Block */}
                <div className="flex flex-wrap items-center gap-2.5 mt-8 pt-6 border-t border-brand-container-hover/60">
                  <span className="font-mono text-[9px] font-black tracking-widest text-[#d8e3fb] bg-[#1a2536] px-3 py-1.5 rounded border border-brand-container-hover">
                    KOMPRESYON TESTİ
                  </span>
                  <span className="font-mono text-[9px] font-black tracking-widest text-[#d8e3fb] bg-[#1a2536] px-3 py-1.5 rounded border border-brand-container-hover">
                    OEM PARÇA GARANTİSİ
                  </span>
                  <span className="font-mono text-[9px] font-black tracking-widest text-[#d8e3fb] bg-[#1a2536] px-3 py-1.5 rounded border border-brand-container-hover">
                    DİNAMOMETRE ÖLÇÜMÜ
                  </span>
                </div>
              </div>

              {/* Right Column narrower card: ELEC-002 Elektronik Çözümler */}
              <div className="lg:col-span-5 bg-[#131b26] border border-brand-container-hover/80 p-8 rounded-lg relative overflow-hidden group hover:border-brand-orange/35 transition-all duration-300 flex flex-col justify-between" id="elec-002-detailed-card">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/[0.02] blur-[100px] pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] text-brand-orange font-bold tracking-widest bg-brand-orange/5 px-2.5 py-1 rounded border border-brand-orange/20">
                      SERVICE ID: ELEC-002
                    </span>
                    <div className="p-2.5 bg-brand-bg-dark rounded border border-brand-container-hover text-brand-orange">
                      <Cpu className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-white mb-4 group-hover:text-brand-orange transition-colors">
                    Elektronik Çözümler
                  </h3>
                  <p className="text-brand-text-secondary text-sm leading-relaxed mb-6">
                    En karmaşık sensör hatalarından ECU programlamaya kadar lisanslı diagnostik cihazlarımızla nokta atışı teşhis.
                  </p>

                  {/* Bullet checklist features */}
                  <ul className="space-y-3 font-sans text-xs sm:text-sm text-brand-text-primary">
                    <li className="flex items-center gap-2.5">
                      <div className="p-0.5 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-full">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Derinlemesine Hata Analizi</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div className="p-0.5 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange rounded-full">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Yazılım Güncellemeleri ve Kalibrasyon</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Lower row of 3 smaller cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24" id="lower-service-row">

              {/* Ön Takım Tamiri */}
              <div className="bg-[#111c2d] border border-brand-container-hover hover:border-brand-orange/20 transition-all rounded p-6 flex flex-col justify-between min-h-[220px] group" id="lower-service-on-takim">
                <div>
                  <div className="p-2 bg-brand-bg-dark border border-brand-container-hover text-brand-orange rounded w-fit mb-4">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base mb-2 group-hover:text-brand-orange transition-colors">
                    Ön Takım Tamiri
                  </h4>
                  <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                    Sürüş güvenliğiniz için amortisörden rot başlarına kadar her detay kontrol altında. Konforlu ve sessiz bir sürüş deneyimi garantiliyoruz.
                  </p>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="font-mono text-[10px] font-bold text-brand-orange flex items-center gap-1 hover:translate-x-1.5 transition-transform"
                >
                  GÜVENLİK ANALİZİ <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Otomatik Şanzıman */}
              <div className="bg-[#111c2d] border border-brand-container-hover hover:border-brand-orange/20 transition-all rounded p-6 flex flex-col justify-between min-h-[220px] relative overflow-hidden group" id="lower-service-sanziman">
                {/* Top Badge */}
                <div className="absolute top-4 right-4 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-mono text-[8px] font-extrabold tracking-wider px-1.5 py-0.5 rounded uppercase">
                  GARANTİLİ ONARIM
                </div>

                <div>
                  <div className="p-2 bg-brand-bg-dark border border-brand-container-hover text-brand-orange rounded w-fit mb-4">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base mb-2 group-hover:text-brand-orange transition-colors">
                    Otomatik Şanzıman
                  </h4>
                  <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed">
                    Şanzıman yağı değişiminden, beyin revizyonuna kadar uzmanlık gerektiren her aşamada sertifikalı teknisyenlerimizle hizmetinizdeyiz. Bu işlemlerde tam debriyaj torklama standarttır.
                  </p>
                </div>
              </div>

              {/* Periyodik Bakım with progress indicator */}
              <div className="bg-[#111c2d] border border-brand-container-hover hover:border-brand-orange/20 transition-all rounded p-6 flex flex-col justify-between min-h-[220px] group" id="lower-service-periyodik">
                <div>
                  <div className="p-2 bg-brand-bg-dark border border-brand-container-hover text-brand-orange rounded w-fit mb-4">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base mb-2 group-hover:text-brand-orange transition-colors">
                    Periyodik Bakım
                  </h4>
                  <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                    Düzenli bakım paketlerimizle aracınızın değerini koruyun. Yağ, filtre ve 50 nokta kontrolü ile yola hazır olun.
                  </p>
                </div>

                {/* Custom Progress bar element matching layout */}
                <div className="border-t border-brand-container-hover/60 pt-3">
                  <div className="flex items-center justify-between text-[9px] font-mono mb-1.5">
                    <span className="text-brand-text-secondary/60">KONTROL TAMAMLANDI</span>
                    <span className="text-brand-orange font-bold">75%</span>
                  </div>
                  <div className="w-full h-1 bg-brand-bg-dark rounded-full overflow-hidden">
                    <div className="h-full bg-brand-orange w-[75%] rounded-full" />
                  </div>
                </div>
              </div>

            </div>

            {/* Servis Sürecimiz Section with lifts schema */}
            <div className="my-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" id="service-process-section">

              {/* Timeline Steps Column (5 Cols) */}
              <div className="lg:col-span-5">
                <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase block mb-3">
                  SERVİS SÜRECİMİZ
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-black text-white tracking-tight mb-8">
                  HKN Auto Standartları
                </h2>

                <div className="space-y-6" id="services-timeline-steps">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded border border-brand-orange/45 bg-brand-orange/5 text-brand-orange font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-brand-orange/5">
                      1
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base">
                        Dijital Kabul & Ekspertiz
                      </h4>
                      <p className="text-brand-text-secondary text-xs sm:text-sm mt-1 leading-relaxed">
                        Aracınız servis alanına girdiği an yüksek çözünürlüklü kameralar ve dijital formlar ile kayıt altına alınır.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded border border-brand-container-hover bg-brand-container text-brand-text-primary font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base">
                        Hassas Arıza Tespiti
                      </h4>
                      <p className="text-brand-text-secondary text-xs sm:text-sm mt-1 leading-relaxed">
                        Tahmin yürütmeyiz. Bilgisayarlı analiz sistemlerimizle gerçek arızayı ilk seferde buluruz.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded border border-brand-container-hover bg-brand-container text-brand-text-primary font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base">
                        Kalite Kontrol & Teslimat
                      </h4>
                      <p className="text-brand-text-secondary text-xs sm:text-sm mt-1 leading-relaxed">
                        Yapılan her işlem kıdemli usta başımız tarafından test sürüşü ve son kontrol protokolünden geçer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Styled Tech Illustration / Hydraulic Lift platform block (7 Cols) */}
              <div className="lg:col-span-7" id="hydraulic-lift-visual">
                <div className="bg-[#111c2d] border border-brand-container-hover p-4 rounded-xl shadow-2xl relative aspect-[16/10] flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                      backgroundImage: `
                    linear-gradient(to right, #ffffff 1px, transparent 1px),
                    linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                  `,
                      backgroundSize: '25px 25px'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/[0.02] via-transparent to-transparent pointer-events-none" />

                  {/* Center Schematic Lift Drawing */}
                  <svg className="w-[85%] h-[85%] text-brand-orange opacity-40" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Horizontal Baseline workshop ground */}
                    <line x1="20" y1="210" x2="380" y2="210" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />

                    {/* Hydraulic Pillars */}
                    <rect x="120" y="140" width="14" height="70" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="266" y="140" width="14" height="70" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />

                    {/* Lift Platforms */}
                    <rect x="90" y="132" width="220" height="8" rx="2" fill="currentColor" />

                    {/* Abstract Sports Car wireframe sitting on the lift matching mockup 2 */}
                    <path d="M100 132 C115 132 125 124 135 118 C150 102 180 92 210 92 C240 92 265 102 275 118 C285 125 295 132 300 132 L100 132 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.05" />
                    <circle cx="140" cy="132" r="14" stroke="currentColor" strokeWidth="1.5" fill="#111c2d" />
                    <circle cx="260" cy="132" r="14" stroke="currentColor" strokeWidth="1.5" fill="#111c2d" />

                    {/* Dynamic radar target line circles centered */}
                    <circle cx="200" cy="120" r="40" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4" />
                    <path d="M 200 60 L 200 180" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
                    <path d="M 120 120 L 280 120" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
                  </svg>

                  {/* Foreground Overlay floating tag block "15+ YILLIK TEKNİK DENEYİM VE UZMANLIK" */}
                  <div className="absolute bottom-6 left-6 max-w-[210px] bg-brand-orange text-white p-4 shadow-xl rounded font-sans shrink-0 border border-brand-orange-hover" id="lift-tooltip">
                    <span className="text-lg md:text-xl font-display font-black block leading-none">
                      15+
                    </span>
                    <span className="font-mono text-[8px] font-bold tracking-widest block uppercase mt-1 leading-normal text-white/95">
                      yıllık teknik deneyim ve uzmanlık
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Button Strip CTA exact like mockup */}
            <div className="bg-[#111c2d] border border-brand-container-hover p-8 md:p-12 rounded-lg text-center relative overflow-hidden" id="services-cta-block">
              <div className="absolute inset-0 bg-brand-orange/[0.015] blur-xl pointer-events-none" />

              <h2 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
                Aracınız İçin Profesyonel Bir Dokunuş Gerekli mi?
              </h2>
              <p className="text-brand-text-secondary text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
                Hizmetlerimiz hakkında daha detaylı bilgi almak veya hemen bir randevu oluşturmak için uzman ekibimizle iletişime geçin.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-bold font-display uppercase tracking-widest py-3.5 px-8 rounded text-xs transition-all duration-300 min-w-[170px] shadow-lg shadow-brand-orange/15 cursor-pointer"
                >
                  ŞİMDİ RANDEVU AL
                </button>
                <button
                  onClick={onScrollToContact}
                  className="w-full sm:w-auto bg-transparent hover:bg-brand-container border border-brand-container-hover hover:border-brand-text-secondary text-white font-bold font-display uppercase tracking-widest py-3.5 px-8 rounded text-xs transition-all duration-300 min-w-[170px] cursor-pointer"
                >
                  BİZE ULAŞIN
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
