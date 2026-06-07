'use client';

import React, { useCallback, useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// New high-fidelity views added according to precision design requirements
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import GalleryView from './components/GalleryView';
import BlogView from './components/BlogView';
import BlogPostDetail from './components/BlogPostDetail';

type PageName = 'home' | 'services' | 'about' | 'gallery' | 'blog' | 'blog-detail' | 'contact';

const pageRoutes: Record<Exclude<PageName, 'blog-detail'>, string> = {
  home: '/',
  services: '/hizmetler',
  about: '/hakkimizda',
  gallery: '/galeri',
  blog: '/blog',
  contact: '/iletisim',
};

interface AppProps {
  initialPage?: PageName;
  initialBlogPostId?: string;
}

export default function App({ initialPage = 'home', initialBlogPostId = 'ai-motor-analizi' }: AppProps) {
  const [currentPage, setCurrentPage] = useState<PageName>(initialPage);
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<string>(initialBlogPostId);
  const [preselectedService, setPreselectedService] = useState('Periyodik Bakım Randevusu');
  const bookingFormRef = useRef<HTMLDivElement | null>(null);

  const handleScrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSelectService = useCallback((serviceName: string) => {
    setPreselectedService(serviceName);
    window.location.assign(pageRoutes.contact);
  }, []);

  const handleOpenBooking = useCallback(() => {
    window.location.assign(pageRoutes.contact);
  }, []);

  const handleAppointmentBooked = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePageChange = useCallback((page: 'home' | 'services' | 'about' | 'gallery' | 'blog' | 'contact') => {
    const route = pageRoutes[page];
    if (window.location.pathname !== route) {
      window.location.assign(route);
      return;
    }

    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const handleSelectBlogPost = useCallback((postId: string) => {
    window.location.assign(`/blog/${postId}`);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-bg flex flex-col justify-between selection:bg-brand-orange selection:text-white overflow-x-hidden custom-scrollbar">
      {/* Decorative Top subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1000px] bg-gradient-to-b from-brand-orange/[0.03] via-transparent to-transparent pointer-events-none z-0" />

      {/* Navigation Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        activePage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* Main Layout content with dynamic view router and hardware-accelerated CSS animations */}
      <main className="flex-grow z-10" id="main-content">
        {currentPage === 'home' && (
          <div key="home" className="w-full animate-page-enter">
            {/* Cinematic Welcome Hero */}
            <Hero
              onOpenBooking={handleOpenBooking}
              onScrollTo={handleScrollTo}
              onPageChange={handlePageChange}
            />

            {/* Dynamic Services Portfolio Checklist */}
            <Services onSelectService={handleSelectService} />

            {/* Why Us section & Telemetry logs */}
            <WhyUs />

            {/* Dynamic Contact details and Booking form */}
            <ContactForm
              preselectedService={preselectedService}
              onAppointmentBooked={handleAppointmentBooked}
              bookingFormRef={bookingFormRef}
            />
          </div>
        )}

        {currentPage === 'services' && (
          <div key="services" className="w-full animate-page-enter">
            <ServicesView
              onOpenBooking={handleOpenBooking}
              onScrollToContact={() => handlePageChange('contact')}
            />
          </div>
        )}

        {currentPage === 'about' && (
          <div key="about" className="w-full animate-page-enter">
            <AboutView
              onOpenBooking={handleOpenBooking}
            />
          </div>
        )}

        {currentPage === 'gallery' && (
          <div key="gallery" className="w-full animate-page-enter">
            <GalleryView />
          </div>
        )}

        {currentPage === 'blog' && (
          <div key="blog" className="w-full animate-page-enter">
            <BlogView
              onSelectPost={handleSelectBlogPost}
            />
          </div>
        )}

        {currentPage === 'blog-detail' && (
          <div key="blog-detail" className="w-full animate-page-enter">
            <BlogPostDetail
              postId={selectedBlogPostId}
              onBackToBlog={() => handlePageChange('blog')}
              onSelectPost={handleSelectBlogPost}
              onOpenBooking={handleOpenBooking}
            />
          </div>
        )}

        {currentPage === 'contact' && (
          <div key="contact" className="w-full animate-page-enter pt-10">
            <ContactForm
              preselectedService={preselectedService}
              onAppointmentBooked={handleAppointmentBooked}
              bookingFormRef={bookingFormRef}
              isFullPage={true}
            />
          </div>
        )}
      </main>

      {/* Footer Branding Sitemaps */}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}
