'use client';

import React, { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  onOpenBooking: () => void;
  activePage: string;
  onPageChange: (page: 'home' | 'services' | 'about' | 'gallery' | 'blog' | 'contact') => void;
}

export default function Header({ onOpenBooking, activePage, onPageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const mobileMenuOpenRef = useRef(mobileMenuOpen);

  useEffect(() => {
    mobileMenuOpenRef.current = mobileMenuOpen;
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Solid backdrop border on scroll
      setIsScrolled(currentScrollY > 20);

      // Scroll direction check
      if (mobileMenuOpenRef.current) {
        setIsVisible(true);
        return;
      }

      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY + 5) {
        // Scroll down: hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 5) {
        // Scroll up: show header
        setIsVisible(true);
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (page: 'home' | 'services' | 'about' | 'gallery' | 'blog' | 'contact') => {
    setMobileMenuOpen(false);
    onPageChange(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-bg-dark/95 backdrop-blur-md border-b border-brand-container-hover py-2.5 md:py-3 shadow-xl shadow-brand-bg-dark/50'
            : 'bg-[#081425]/95 backdrop-blur-md border-b border-brand-container-hover/20 py-3.5 md:py-4.5'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex flex-col items-start cursor-pointer text-left focus:outline-none"
            id="logo-button"
          >
            <span className="font-display text-2xl font-bold tracking-tighter text-white block leading-none uppercase">
              HKN <span className="text-brand-orange font-black italic">AUTO</span>
            </span>
            <span className="font-mono text-[9px] tracking-[0.2em] text-brand-text-secondary group-hover:text-brand-orange transition-colors uppercase block leading-none mt-1">
              ENGINEERED TRUST
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8" id="desktop-nav">
            <button
               onClick={() => handleNavClick('home')}
               className={`font-medium text-xs lg:text-sm transition-colors cursor-pointer ${
                 activePage === 'home' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'
               }`}
             >
               Ana Sayfa
             </button>
             <button
               onClick={() => handleNavClick('services')}
               className={`font-medium text-xs lg:text-sm transition-colors cursor-pointer ${
                 activePage === 'services' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'
               }`}
             >
               Hizmetler
             </button>
             <button
               onClick={() => handleNavClick('about')}
               className={`font-medium text-xs lg:text-sm transition-colors cursor-pointer ${
                 activePage === 'about' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'
               }`}
             >
               Hakkımızda
             </button>
             <button
               onClick={() => handleNavClick('gallery')}
               className={`font-medium text-xs lg:text-sm transition-colors cursor-pointer ${
                 activePage === 'gallery' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'
               }`}
             >
               Galeri
             </button>
             <button
               onClick={() => handleNavClick('blog')}
               className={`font-medium text-xs lg:text-sm transition-colors cursor-pointer ${
                 activePage === 'blog' || activePage === 'blog-detail' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'
               }`}
             >
               Blog
             </button>
             <button
               onClick={() => handleNavClick('contact')}
               className={`font-medium text-xs lg:text-sm transition-colors cursor-pointer ${
                 activePage === 'contact' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'
               }`}
             >
               İletişim
             </button>
           </nav>
 
           {/* Right side Actions */}
           <div className="hidden md:flex items-center gap-5">
             <button
               onClick={onOpenBooking}
               className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold font-display tracking-wide px-5 py-2.5 rounded text-xs uppercase shadow-lg shadow-brand-orange/15 hover:shadow-brand-orange/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
               id="header-booking-btn"
             >
               Randevu Al
             </button>
           </div>
 
           {/* Minimalist Mobile Menu Trigger Icon */}
           <button
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             className="md:hidden flex flex-col justify-center items-end w-8 h-8 focus:outline-none z-[110]"
             aria-label="Toggle Menu"
             id="mobile-menu-trigger"
           >
             <div className={`h-0.5 bg-white transition-all duration-300 rounded ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-1' : 'w-6'}`} />
             <div className={`h-0.5 bg-white transition-all duration-300 rounded mt-1.5 ${mobileMenuOpen ? 'w-0 opacity-0' : 'w-4.5'}`} />
             <div className={`h-0.5 bg-white transition-all duration-300 rounded mt-1.5 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5.5'}`} />
           </button>
         </div>
       </header>
 
       {/* Mobile Drawer Overlay */}
       {/* Backdrop Overlay */}
       <div
         onClick={() => setMobileMenuOpen(false)}
         className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden transition-opacity duration-300 pointer-events-none ${
           mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
         }`}
       />

       {/* Rounded slide-down mobile navigation */}
       <div
         className={`fixed inset-x-0 top-0 z-50 flex h-[78dvh] max-h-[720px] min-h-[520px] flex-col overflow-y-auto rounded-b-3xl border-b border-brand-container-hover/50 bg-[#040e1f] bg-gradient-to-b from-[#051126] via-[#030b18] to-[#01060f] px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-24 shadow-2xl transition-transform duration-500 ease-out md:hidden ${
           mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
         }`}
         id="mobile-drawer"
       >
         {/* Vertically Centered Big Link List with 60% Height structure */}
         <div className="flex flex-col gap-2 border-t border-brand-container-hover/20 py-4 animate-[pageEnter_350ms_ease-out_100ms_both]">
           <button
             onClick={() => handleNavClick('home')}
             className={`py-2 text-left font-display text-[clamp(1.35rem,7vw,1.75rem)] font-black tracking-normal transition-all duration-300 ${
               activePage === 'home' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'
             }`}
           >
             Ana Sayfa
           </button>
           <button
             onClick={() => handleNavClick('services')}
             className={`py-2 text-left font-display text-[clamp(1.35rem,7vw,1.75rem)] font-black tracking-normal transition-all duration-300 ${
               activePage === 'services' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'
             }`}
           >
             Hizmetler
           </button>
           <button
             onClick={() => handleNavClick('about')}
             className={`py-2 text-left font-display text-[clamp(1.35rem,7vw,1.75rem)] font-black tracking-normal transition-all duration-300 ${
               activePage === 'about' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'
             }`}
           >
             Hakkımızda
           </button>
           <button
             onClick={() => handleNavClick('gallery')}
             className={`py-2 text-left font-display text-[clamp(1.35rem,7vw,1.75rem)] font-black tracking-normal transition-all duration-300 ${
               activePage === 'gallery' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'
             }`}
           >
             Galeri
           </button>
           <button
             onClick={() => handleNavClick('blog')}
             className={`py-2 text-left font-display text-[clamp(1.35rem,7vw,1.75rem)] font-black tracking-normal transition-all duration-300 ${
               activePage === 'blog' || activePage === 'blog-detail' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'
             }`}
           >
             Blog
           </button>
           <button
             onClick={() => handleNavClick('contact')}
             className={`py-2 text-left font-display text-[clamp(1.35rem,7vw,1.75rem)] font-black tracking-normal transition-all duration-300 ${
               activePage === 'contact' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'
             }`}
           >
             İletişim
           </button>
         </div>

         {/* Contact inquiries matching screenshot */}
         <div className="mt-auto border-t border-brand-container-hover/20 py-4 text-left font-sans text-[10px]">
           <div>
             <span className="text-slate-500 block uppercase tracking-wider font-semibold">7/24 Destek</span>
             <a 
               href="https://wa.me/905330540436" 
               target="_blank"
               rel="noreferrer"
               className="text-brand-orange hover:text-brand-orange-hover font-bold text-sm block transition-colors mt-1"
             >
               +90 (533) 054 04 36
             </a>
           </div>
         </div>
         
         {/* Bottom Booking Button */}
         <div className="border-t border-brand-container-hover/20 pt-4">
           <button
             onClick={() => {
               setMobileMenuOpen(false);
               onOpenBooking();
             }}
             className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold font-display tracking-wider py-3 px-6 rounded-full text-xs uppercase shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center block"
           >
             Randevu Al
           </button>
         </div>
       </div>
    </>
  );
}
