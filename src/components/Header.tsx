'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenBooking: () => void;
  activePage: string;
  onPageChange: (page: 'home' | 'services' | 'about' | 'blog' | 'contact') => void;
}

export default function Header({ onOpenBooking, activePage, onPageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const mobileMenuOpenRef = useRef(mobileMenuOpen);

  useEffect(() => {
    mobileMenuOpenRef.current = mobileMenuOpen;
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

  const handleNavClick = (page: 'home' | 'services' | 'about' | 'blog' | 'contact') => {
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
            className="group flex items-center gap-3 cursor-pointer text-left focus:outline-none"
            id="logo-button"
          >
            <Logo size={44} className="group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col -space-y-0.5">
              <span className="font-display text-2xl font-bold tracking-tighter text-white block leading-none uppercase">
                HKN <span className="text-brand-orange font-black italic">AUTO</span>
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-brand-text-secondary group-hover:text-brand-orange transition-colors uppercase block leading-none mt-0.5">
                ENGINEERED TRUST
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            <button
               onClick={() => handleNavClick('home')}
               className={`font-medium text-sm transition-colors cursor-pointer ${
                 activePage === 'home' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'
               }`}
             >
               Ana Sayfa
             </button>
             <button
               onClick={() => handleNavClick('services')}
               className={`font-medium text-sm transition-colors cursor-pointer ${
                 activePage === 'services' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'
               }`}
             >
               Hizmetler
             </button>
             <button
               onClick={() => handleNavClick('about')}
               className={`font-medium text-sm transition-colors cursor-pointer ${
                 activePage === 'about' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'
               }`}
             >
               Hakkımızda
             </button>
             <button
               onClick={() => handleNavClick('blog')}
               className={`font-medium text-sm transition-colors cursor-pointer ${
                 activePage === 'blog' || activePage === 'blog-detail' ? 'text-brand-orange' : 'text-brand-text-secondary hover:text-white'
               }`}
             >
               Blog
             </button>
             <button
               onClick={() => handleNavClick('contact')}
               className={`font-medium text-sm transition-colors cursor-pointer ${
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

       {/* Slide-down Dropdown (60% height) with ultra smooth transition */}
       <div
         className={`fixed top-0 inset-x-0 h-[60vh] min-h-[460px] z-50 md:hidden bg-[#040e1f] bg-gradient-to-b from-[#051126] via-[#030b18] to-[#01060f] border-b border-brand-container-hover/50 p-6 pt-24 flex flex-col justify-between overflow-y-auto shadow-2xl rounded-b-3xl transition-transform duration-500 ease-out ${
           mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
         }`}
         id="mobile-drawer"
       >
         {/* Vertically Centered Big Link List with 60% Height structure */}
         <div className="flex flex-col gap-4 py-4 border-t border-brand-container-hover/20 animate-[pageEnter_350ms_ease-out_100ms_both]">
           <button
             onClick={() => handleNavClick('home')}
             className={`text-left font-display text-2xl font-black tracking-tight transition-all duration-300 py-1 ${
               activePage === 'home' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'
             }`}
           >
             Ana Sayfa
           </button>
           <button
             onClick={() => handleNavClick('services')}
             className={`text-left font-display text-2xl font-black tracking-tight transition-all duration-300 py-1 ${
               activePage === 'services' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'
             }`}
           >
             Hizmetler
           </button>
           <button
             onClick={() => handleNavClick('about')}
             className={`text-left font-display text-2xl font-black tracking-tight transition-all duration-300 py-1 ${
               activePage === 'about' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'
             }`}
           >
             Hakkımızda
           </button>
           <button
             onClick={() => handleNavClick('blog')}
             className={`text-left font-display text-2xl font-black tracking-tight transition-all duration-300 py-1 ${
               activePage === 'blog' || activePage === 'blog-detail' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'
             }`}
           >
             Blog
           </button>
           <button
             onClick={() => handleNavClick('contact')}
             className={`text-left font-display text-2xl font-black tracking-tight transition-all duration-300 py-1 ${
               activePage === 'contact' ? 'text-brand-orange scale-[1.01]' : 'text-slate-100 hover:text-brand-orange hover:translate-x-1'
             }`}
           >
             İletişim
           </button>
         </div>

         {/* Contact inquiries matching screenshot */}
         <div className="py-4 border-t border-brand-container-hover/20 text-left font-sans text-[10px]">
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
         <div className="pt-4 border-t border-brand-container-hover/20">
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
