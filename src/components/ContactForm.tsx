'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';
import { Appointment } from '../types';

interface ContactFormProps {
  preselectedService: string;
  onAppointmentBooked: () => void;
  bookingFormRef?: React.RefObject<HTMLDivElement | null>;
  isFullPage?: boolean;
}

export default function ContactForm({ preselectedService, onAppointmentBooked, bookingFormRef, isFullPage = false }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Periyodik Bakım Randevusu');
  const [plate, setPlate] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:30');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedReceipt, setBookedReceipt] = useState<Appointment | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newAppointment: Appointment = {
        id: `HKN-${Math.floor(100000 + Math.random() * 900000)}`,
        name,
        email,
        service: service || 'Soru/Talep Gönderimi',
        plate: 'TR-PL-999',
        date: new Date().toISOString().split('T')[0],
        time: '12:00',
        message,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      };

      try {
        const current = localStorage.getItem('hkn_appointments');
        const list = current ? JSON.parse(current) : [];
        const appointments = Array.isArray(list) ? list : [];
        appointments.push(newAppointment);
        localStorage.setItem('hkn_appointments', JSON.stringify(appointments));
      } catch {
        // Form success must not depend on optional browser storage.
      }

      setIsSubmitting(false);
      setBookedReceipt(newAppointment);
      onAppointmentBooked();

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  const serviceOptions = [
    'Periyodik Bakım Randevusu',
    'Motor Mekanik Bakım Onarım ve Revizyon',
    'Ön Takım Tamiri',
    'Elektronik Çözümler',
    'Şanzıman Onarım',
    'Çekici ve Yol Yardım - İlk 10 KM Ücretsiz',
    'Sadece Soru/Talep Gönderimi'
  ];

  const timeOptions = [
    '09:00',
    '10:30',
    '12:00',
    '13:30',
    '15:00',
    '16:30',
    '18:00'
  ];

  return (
    <section
      id="contact-section"
      ref={bookingFormRef}
      className="py-24 md:py-32 bg-[#0d1520] border-t border-brand-container-hover/60 relative"
    >
      {/* Subtle lighting overlay */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-brand-orange/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Copy & Fast Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full" id="contact-info-panel">
            <div>
              {isFullPage ? (
                <h1 className="font-display text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
                  İletişime Geçin
                </h1>
              ) : (
                <h2 className="font-display text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
                  İletişime Geçin
                </h2>
              )}
              <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed mb-12 max-w-sm">
                Sorularınız veya randevu talepleriniz için bize ulaşın. Ekibimiz size en kısa sürede dönüş yapacaktır.
              </p>

              <div className="space-y-8" id="contact-details-list">
                {/* Telefon */}
                <div className="flex items-start gap-4">
                  <div className="p-1.5 text-brand-orange shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">Bizi Arayın</span>
                    <a
                      href="tel:+905330540436"
                      className="text-brand-text-secondary hover:text-white text-sm font-mono transition-colors block mt-1"
                    >
                      +90 (533) 054 04 36
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-1.5 text-emerald-500 shrink-0 mt-1">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">WhatsApp Destek</span>
                    <a
                      href="https://wa.me/905330540436"
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-text-secondary hover:text-emerald-400 text-sm font-mono transition-colors flex items-center gap-2 mt-1 group"
                    >
                      <span>+90 (533) 054 04 36</span>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.2 rounded font-sans uppercase font-bold border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">Çevrimiçi</span>
                    </a>
                  </div>
                </div>

                {/* Adres */}
                <div className="flex items-start gap-4">
                  <div className="p-1.5 text-brand-orange shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">Adresimiz</span>
                    <span className="text-brand-text-secondary text-sm transition-colors block mt-1 leading-relaxed">
                      Yeşiltepe Mah. 8016 Sok. No: 6<br />
                      Sakarya Moderen Sanayi
                    </span>
                  </div>
                </div>

                {/* Saatler */}
                <div className="flex items-start gap-4">
                  <div className="p-1.5 text-brand-orange shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">Çalışma Saatleri</span>
                    <span className="text-brand-text-secondary text-sm transition-colors block mt-1">
                      Pzt - Cmt: 08:30 - 18:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-fidelity Elegant Contact / Feedback Form */}
          <div className="lg:col-span-7" id="message-form-container">
            <div className="bg-[#131b26] border border-brand-container-hover/80 p-6 md:p-10 rounded-lg shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6" id="appointment-form">
                
                {/* Name & Email Fields Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-brand-text-secondary text-xs uppercase font-mono tracking-wider mb-2">
                      Adınız Soyadınız
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-[#182331] border border-brand-container-hover hover:border-brand-text-secondary/20 focus:border-brand-orange px-4 py-3 text-white rounded text-sm transition-all focus:outline-none placeholder:text-brand-text-secondary/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-brand-text-secondary text-xs uppercase font-mono tracking-wider mb-2">
                      E-posta Adresiniz
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full bg-[#182331] border border-brand-container-hover hover:border-brand-text-secondary/20 focus:border-brand-orange px-4 py-3 text-white rounded text-sm transition-all focus:outline-none placeholder:text-brand-text-secondary/30"
                    />
                  </div>
                </div>

                {/* Category Selection Text Input */}
                <div>
                  <label htmlFor="serviceCategory" className="block text-brand-text-secondary text-xs uppercase font-mono tracking-wider mb-2">
                    Konu
                  </label>
                  <input
                    id="serviceCategory"
                    type="text"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    placeholder="Örn: Periyodik Bakım, Motor Sorunu, Sorular..."
                    className="w-full bg-[#182331] border border-brand-container-hover hover:border-brand-text-secondary/20 focus:border-brand-orange px-4 py-3 text-white rounded text-sm transition-all focus:outline-none placeholder:text-brand-text-secondary/30"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-brand-text-secondary text-xs uppercase font-mono tracking-wider mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Size nasıl yardımcı olabiliriz?"
                    rows={5}
                    className="w-full bg-[#182331] border border-brand-container-hover hover:border-brand-text-secondary/20 focus:border-brand-orange px-4 py-3 text-white rounded text-sm transition-all focus:outline-none placeholder:text-brand-text-secondary/30 resize-none"
                  />
                </div>

                {/* Action Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold font-display uppercase tracking-widest py-3.5 rounded text-xs transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.99] disabled:opacity-50 shadow-lg shadow-brand-orange/15 cursor-pointer mt-2"
                  id="submit-form-btn"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>İletiliyor...</span>
                    </>
                  ) : (
                    <span>Gönder</span>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

        <div className="mt-16 overflow-hidden rounded-lg border border-brand-container-hover bg-[#131b26] shadow-2xl">
          <div className="flex flex-col gap-4 border-b border-brand-container-hover p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-lg font-bold text-white">HKN Auto Sakarya Konumu</h2>
              <p className="mt-1 text-xs leading-relaxed text-brand-text-secondary">
                Yeşiltepe Mah. 8016 Sok. No: 6, Sakarya Moderen Sanayi
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/FSTxF46a9AhBJzYB8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded bg-brand-orange px-4 py-3 font-display text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-hover"
            >
              Google Haritalar&apos;da Aç
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <iframe
            title="HKN Auto Sakarya Moderen Sanayi konumu"
            src="https://www.google.com/maps?q=40.7364412,30.3860991&z=17&output=embed"
            className="h-[360px] w-full border-0 md:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      {/* Booking Receipt Modal Overlay */}
      {bookedReceipt && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-bg-dark/80 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setBookedReceipt(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#131b26] w-full max-w-md rounded-lg border-2 border-brand-orange/40 shadow-2xl overflow-hidden relative animate-page-enter"
            id="booking-receipt-modal"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-orange" />
            
            {/* Receipt Header */}
            <div className="bg-brand-bg-dark p-6 border-b border-brand-container-hover text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="font-display text-white font-extrabold text-base md:text-lg">
                Mesajınız Başarıyla İletildi!
              </h4>
              <p className="text-brand-text-secondary text-xs mt-1">
                Bilgileriniz kaydedildi. En kısa sürede sizinle iletişime geçeceğiz.
              </p>
            </div>

            {/* Receipt Ticket Box */}
            <div className="p-6 space-y-4">
              <div className="bg-brand-bg-dark/60 border border-brand-container-hover rounded-md p-4 space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-brand-container-hover pb-2">
                  <span className="text-brand-text-secondary">MESAJ ID:</span>
                  <span className="text-brand-orange font-bold uppercase">{bookedReceipt.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-secondary">GÖNDEREN:</span>
                  <span className="text-white uppercase truncate max-w-[180px] text-right">{bookedReceipt.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-secondary">E-POSTA:</span>
                  <span className="text-white font-semibold truncate max-w-[180px] text-right">{bookedReceipt.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-text-secondary">KONU:</span>
                  <span className="text-white font-bold">{bookedReceipt.service}</span>
                </div>
              </div>
            </div>

            {/* Receipt Footer */}
            <div className="p-4 bg-brand-bg-dark border-t border-brand-container-hover flex items-center justify-center">
              <button
                onClick={() => setBookedReceipt(null)}
                className="bg-brand-container hover:bg-brand-container-hover border border-brand-container-hover hover:border-brand-text-secondary text-white font-mono text-xs font-bold px-5 py-2.5 rounded transition-all cursor-pointer"
                id="receipt-close-btn"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
