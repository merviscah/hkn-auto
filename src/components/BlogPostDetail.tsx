'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowLeft, ShieldCheck, CheckCircle2, BookOpen, ArrowUpRight
} from 'lucide-react';
import { BlogPost, BLOG_POSTS } from './BlogView';

interface BlogPostDetailProps {
  postId: string;
  onBackToBlog: () => void;
  onSelectPost: (id: string) => void;
  onOpenBooking: () => void;
}

export default function BlogPostDetail({ postId, onBackToBlog, onSelectPost, onOpenBooking }: BlogPostDetailProps) {
  const post = BLOG_POSTS.find(p => p.id === postId) || BLOG_POSTS[0];

  // Pick related posts (excluding current post)
  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="pt-28 pb-20 bg-brand-bg relative min-h-screen" id="blog-detail-page">
      {/* Background ambient radial blurs */}
      <div className="absolute top-0 right-0 w-96 h-[500px] bg-brand-orange/[0.025] blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back navigation button */}
        <button
          onClick={onBackToBlog}
          className="group inline-flex items-center gap-2 text-brand-text-secondary hover:text-white mb-10 text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer"
          id="back-to-blog-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          <span>TÜM YAZILARA DÖN</span>
        </button>

        {/* Hero Header Area of Blog Detail matching mockup 5 */}
        <div className="relative mb-12 flex min-h-[460px] flex-col justify-end overflow-hidden rounded-xl border border-brand-container-hover bg-[#111c2d] p-6 shadow-2xl sm:min-h-[500px] md:aspect-[21/9] md:min-h-0 md:p-12">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(min-width: 1280px) 1152px, 100vw"
            className="object-cover object-center"
          />
          {/* Subtle grid and overlay */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none" 
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-dark via-brand-bg-dark/70 to-brand-bg-dark/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg-dark/80 via-transparent to-transparent" />

          <div className="relative z-10 max-w-4xl space-y-4 pt-24 md:pt-0">
            {/* Category tag bubble in orange */}
            <span className="font-mono text-xs font-bold tracking-widest text-white bg-brand-orange px-3 py-1.5 rounded uppercase block w-fit">
              {post.categoryTag === 'ELECTRONICS' ? 'ELECTRONICS' : post.categoryTag === 'MAINTENANCE' ? 'MAINTENANCE' : 'TECHNOLOGY'}
            </span>

            <h1 className="break-words font-display text-[clamp(1.65rem,8vw,2.25rem)] font-black leading-[1.08] tracking-normal text-white md:text-4.5xl">
              {post.title}
            </h1>

            {/* Author and Date label layout */}
            <div className="grid grid-cols-1 gap-4 border-t border-brand-container-hover/60 pt-4 font-mono text-xs select-none min-[380px]:grid-cols-2 md:max-w-2xl md:grid-cols-4 md:gap-8">
              <div>
                <span className="text-brand-text-secondary/50 block text-[9px] font-bold uppercase tracking-wider">AUTHOR</span>
                <span className="text-white font-bold block mt-0.5">{post.author}</span>
              </div>
              <div>
                <span className="text-brand-text-secondary/50 block text-[9px] font-bold uppercase tracking-wider">PUBLISHED</span>
                <span className="text-brand-orange font-bold block mt-0.5">{post.date}</span>
              </div>
            </div>
          </div>
        </div>        {/* Outer Content Layout grid splitting Left (8 Cols) vs Right Sidebar (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Main Article content (col-span-8) */}
          <div className="lg:col-span-8 space-y-8" id="blog-content-container">
            
            {/* Styled readable blocks with drop cap letter styling */}
            <div className="text-brand-text-primary text-sm sm:text-base leading-relaxed space-y-6 font-sans">
              <p className="text-brand-text-primary text-base sm:text-lg leading-relaxed font-sans font-medium first-letter:text-5xl first-letter:font-black first-letter:text-brand-orange first-letter:mr-3 first-letter:float-left first-letter:h-12 first-letter:font-display">
                {post.excerpt}
              </p>
              
              {/* Dynamic Turkish Content Renderer */}
              {post.content.split('\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                // Check if it's a list item
                if (trimmed.startsWith('-')) {
                  const itemText = trimmed.replace(/^-\s*/, '');
                  const parts = itemText.split(': ');
                  if (parts.length > 1) {
                    return (
                      <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-brand-text-primary ml-4 my-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                        <div>
                          <span className="font-bold text-white inline">{parts[0]}: </span>
                          <span className="text-brand-text-secondary inline">{parts.slice(1).join(': ')}</span>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-brand-text-primary ml-4 my-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                      <span className="text-brand-text-secondary">{itemText}</span>
                    </div>
                  );
                }

                // Check if it's a heading
                const isHeading = trimmed.endsWith('?') || 
                                  trimmed.includes('SÜREÇLERİ') || 
                                  trimmed.includes('ÖZELLİKLER') || 
                                  trimmed.includes('DETAYLI KONTROL') ||
                                  trimmed.includes('KONTROL NOKTASI') ||
                                  trimmed.includes('NELER YAPIYORUZ?') ||
                                  trimmed.includes('ADIMLARI') ||
                                  trimmed.includes('LABORATUVARIMIZDA') ||
                                  trimmed.includes('DETAYLAR VE SÜREÇLER') ||
                                  trimmed.includes('Nelerdir?') ||
                                  trimmed.includes('Nedir?') ||
                                  trimmed.includes('Belirtileri:') ||
                                  trimmed.includes('YAKLAŞIMI') ||
                                  trimmed.startsWith('TEKNİK') ||
                                  (trimmed.length < 65 && !trimmed.endsWith('.') && !trimmed.endsWith(','));

                if (isHeading) {
                  return (
                    <h3 
                      key={index} 
                      className="font-display text-lg sm:text-xl md:text-2xl font-black text-white pt-6 pb-2 tracking-tight border-b border-brand-container-hover/35 mb-2"
                    >
                      {trimmed}
                    </h3>
                  );
                }

                // Render as a paragraph
                return (
                  <p key={index} className="text-brand-text-primary text-sm sm:text-base leading-relaxed font-sans">
                    {trimmed}
                  </p>
                );
              })}

              {/* Large quote design matching layout exactly */}
              <blockquote className="border-l-4 border-brand-orange pl-6 my-10 italic text-white font-display text-lg md:text-xl font-medium tracking-wide" id="article-quote">
                "HKN Auto Sakarya mutfağında her mekanik parça ve elektronik entegrasyon sıfır hata prensibiyle işlenir."
              </blockquote>

              <p className="text-brand-text-primary text-sm sm:text-base leading-relaxed font-sans">
                HKN Auto çatısı altında sunduğumuz tüm servis standartları, her adımda raporlanabilir ve dijital olarak doğrulanabilir yapıdadır. Siz de aracınızın sağlığını güvence altına almak için Sakarya'daki uzman ekibimize başvurabilirsiniz.
              </p>
            </div>

            {/* Custom Bottom CTA Block "15 Nokta Rutin Kontrol" */}
            <div className="bg-[#131b26] border border-brand-container-hover/80 p-6 md:p-8 rounded-lg relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl" id="detail-rutin-kontrol-cta">
              <div className="absolute right-0 top-0 w-80 h-80 bg-brand-orange/[0.03] blur-[100px] pointer-events-none rounded-full" />
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange rounded-lg shrink-0 scale-105">
                  <ShieldCheck className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-black text-white text-lg">
                    15 Nokta Rutin Kontrol & Check-up
                  </h4>
                  <p className="text-brand-text-secondary text-xs mt-1 leading-relaxed max-w-sm">
                    Aracınızın tüm ön takım, fren, yürüyen aksam ve sıvı seviyelerini denetleyelim. Olası arızaların önüne geçecek en profesyonel gözle yanınızdayız.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold font-display uppercase tracking-widest py-3 px-6 rounded text-xs transition-all duration-300 shrink-0 whitespace-nowrap cursor-pointer shadow-lg shadow-brand-orange/15"
              >
                Hemen Randevu Alın
              </button>
            </div>

          </div>

          {/* Right Sidebar of Blog Detail matching mockup 5 (col-span-4) */}
          <div className="lg:col-span-4 space-y-10" id="blog-sidebar">
            
            {/* Related Articles Card layout */}
            <div className="bg-[#131b26] border border-brand-container-hover/80 p-6 rounded-lg">
              <h4 className="font-mono text-xs font-bold tracking-widest text-[#ff4d00] uppercase mb-6 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> İLGİLİ DİĞER YAZILAR
              </h4>

              <div className="space-y-6" id="related-posts-sidebar-list">
                {relatedPosts.map((rPost) => (
                  <div 
                    key={rPost.id}
                    onClick={() => onSelectPost(rPost.id)}
                    className="group flex flex-col items-start cursor-pointer border-b border-brand-container-hover/40 last:border-b-0 pb-5 last:pb-0"
                  >
                    <span className="text-[10px] font-mono text-brand-text-secondary/50 mb-1 block">
                      {rPost.date}
                    </span>
                    <h5 className="font-display font-bold text-white text-sm leading-snug group-hover:text-brand-orange transition-colors">
                      {rPost.title}
                    </h5>
                    <span className="text-brand-orange font-mono text-[10px] tracking-wider uppercase inline-flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      HIZLI OKU <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
